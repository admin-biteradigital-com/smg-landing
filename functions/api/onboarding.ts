interface Env {
  DB: D1Database;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  try {
    const body = await request.json() as Record<string, unknown>;

    // Validate required fields
    const { businessName, rut, address, phone, businessType } = body as {
      businessName: string;
      rut: string;
      address: string;
      phone: string;
      businessType: string;
    };

    if (!businessName || !rut || !address || !phone || !businessType) {
      return new Response(
        JSON.stringify({ error: "Todos los campos son obligatorios." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (rut.length < 8 || rut.length > 12) {
      return new Response(
        JSON.stringify({ error: "RUT inválido." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Insert lead into D1
    const result = await env.DB.prepare(
      `INSERT INTO smg_leads (business_name, rut, address, phone, business_type)
       VALUES (?, ?, ?, ?, ?)`
    ).bind(businessName, rut, address, phone, businessType).run();

    console.log("[D1] Lead B2B insertado:", result);

    return new Response(
      JSON.stringify({
        message: "Lead registrado exitosamente.",
        leadId: result.meta.last_row_id,
      }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (error) {
    console.error("[D1] Error insertando lead:", error);
    return new Response(
      JSON.stringify({ error: "Error interno del servidor." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
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
  });
};
