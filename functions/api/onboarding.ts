import type { PagesFunction, D1Database, Response as CFResponse } from "@cloudflare/workers-types";

interface Env {
  DB: D1Database;
  GOOGLE_SERVICE_ACCOUNT_EMAIL?: string;
  GOOGLE_PRIVATE_KEY?: string;
  WHATSAPP_NUMBER?: string;
  TURNSTILE_SECRET_KEY?: string;
}

// ── Google Workspace API Helper ──
async function sendEmailViaGmail(
  serviceAccountEmail: string,
  privateKeyPem: string,
  to: string,
  subject: string,
  htmlBody: string
): Promise<void> {
  const now = Math.floor(Date.now() / 1000);
  const header = btoa(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const payload = btoa(JSON.stringify({
    iss: serviceAccountEmail,
    sub: "noreply@biteradigital.com",
    scope: "https://www.googleapis.com/auth/gmail.send",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  }));

  const pemBody = privateKeyPem
    .replace(/-----BEGIN.*?-----/g, "")
    .replace(/-----END.*?-----/g, "")
    .replace(/\s/g, "");
  const keyData = Uint8Array.from(atob(pemBody), c => c.charCodeAt(0));
  
  const cryptoKey = await crypto.subtle.importKey(
    "pkcs8", keyData,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false, ["sign"]
  );
  
  const signingInput = `${header}.${payload}`;
  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    cryptoKey,
    new TextEncoder().encode(signingInput)
  );
  
  const jwt = `${signingInput}.${btoa(String.fromCharCode(...new Uint8Array(signature))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")}`;

  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });
  
  const { access_token } = await tokenRes.json() as { access_token: string };

  const emailRaw = [
    `From: SMG Onboarding <noreply@biteradigital.com>`,
    `To: ${to}`,
    `Subject: ${subject}`,
    `MIME-Version: 1.0`,
    `Content-Type: text/html; charset=utf-8`,
    ``,
    htmlBody,
  ].join("\r\n");
  
  const encodedEmail = btoa(unescape(encodeURIComponent(emailRaw)))
    .replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");

  const sendRes = await fetch(
    "https://gmail.googleapis.com/gmail/v1/users/me/messages/send",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ raw: encodedEmail }),
    }
  );

  if (!sendRes.ok) {
    const err = await sendRes.text();
    throw new Error(`Gmail API error: ${sendRes.status} ${err}`);
  }
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  try {
    const body = await request.json() as Record<string, unknown>;

    // Validate required fields
    const { businessName, rut, address, phone, businessType, turnstileToken } = body as {
      businessName: string;
      rut: string;
      address: string;
      phone: string;
      businessType: string;
      turnstileToken?: string;
    };

    if (!businessName || !rut || !address || !phone || !businessType) {
      return new Response(
        JSON.stringify({ error: "Todos los campos son obligatorios." }),
        { status: 400, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } }
      ) as unknown as CFResponse;
    }

    if (rut.length < 8 || rut.length > 12) {
      return new Response(
        JSON.stringify({ error: "RUT inválido." }),
        { status: 400, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } }
      ) as unknown as CFResponse;
    }

    // Verify Cloudflare Turnstile Token
    if (env.TURNSTILE_SECRET_KEY) {
      if (!turnstileToken) {
        return new Response(
          JSON.stringify({ error: "Verificación de seguridad requerida (Anti-Bot)." }),
          { status: 403, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } }
        ) as unknown as CFResponse;
      }
      
      const formData = new FormData();
      formData.append("secret", env.TURNSTILE_SECRET_KEY);
      formData.append("response", turnstileToken);
      
      const verificationResponse = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        body: formData,
      });
      
      const outcome = await verificationResponse.json() as { success: boolean };
      
      if (!outcome.success) {
        console.error("[Turnstile] Fallo en la verificación del token:", outcome);
        return new Response(
          JSON.stringify({ error: "Validación Anti-Bot fallida." }),
          { status: 403, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } }
        ) as unknown as CFResponse;
      }
    }

    // Insert lead into D1
    const result = await env.DB.prepare(
      `INSERT INTO smg_leads (business_name, rut, address, phone, business_type)
       VALUES (?, ?, ?, ?, ?)`
    ).bind(businessName, rut, address, phone, businessType).run();

    console.log("[D1] Lead insertado. Último ID:", result.meta.last_row_id);

    // Send Email via Gmail API (Google Workspace)
    let emailStatus = "Saltado (No hay GOOGLE_SERVICE_ACCOUNT_EMAIL o GOOGLE_PRIVATE_KEY)";
    
    if (env.GOOGLE_SERVICE_ACCOUNT_EMAIL && env.GOOGLE_PRIVATE_KEY) {
      try {
        await sendEmailViaGmail(
          env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
          env.GOOGLE_PRIVATE_KEY,
          "administracion@biteradigital.com",
          `🚀 Alta Comercial: ${businessName} (${businessType})`,
          `
            <h2>Nuevo Lead B2B Capturado</h2>
            <p>Un nuevo cliente ha completado el formulario de alta comercial en la Landing Page.</p>
            <ul>
              <li><strong>Razón Social/Local:</strong> ${businessName}</li>
              <li><strong>RUT:</strong> ${rut}</li>
              <li><strong>Dirección:</strong> ${address}</li>
              <li><strong>Teléfono:</strong> ${phone}</li>
              <li><strong>Rubro:</strong> ${businessType}</li>
            </ul>
            <p>Revisa la base de datos D1 en Cloudflare para más detalles.</p>
          `
        );
        console.log("[Gmail] Email de notificación enviado exitosamente.");
        emailStatus = "Enviado OK";
      } catch (emailError: unknown) {
        console.error("[Gmail] Excepción Fatal al enviar email:", emailError);
        emailStatus = `Excepción Fetch: ${emailError instanceof Error ? emailError.message : String(emailError)}`;
      }
    }

    return new Response(
      JSON.stringify({
        message: "Lead registrado exitosamente.",
        leadId: result.meta.last_row_id,
        email_status: emailStatus
      }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    ) as unknown as CFResponse;
  } catch (error: unknown) {
    console.error("[D1] Error crítico insertando lead:", error);
    return new Response(
      JSON.stringify({ error: "Error interno del servidor." }),
      { status: 500, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } }
    ) as unknown as CFResponse;
  }
};

// Handle CORS preflight
export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  }) as unknown as CFResponse;
};
