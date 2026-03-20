---
description: workflow para auditar e implementar cumplimiento ISO y GDPR
---

# Flujo de Trabajo: Auditoría de Cumplimiento (ISO & GDPR)

Ejecuta este flujo de trabajo obligatoriamente antes de marcar un Sprint como completado para garantizar que los estándares internacionales se mantienen intactos.

1. **Auditoría de Seguridad (ISO 27001/27017):**
   - Verifica que el código no exponga secretos de lado del cliente (`.env`).
   - Revisa la configuración del servidor web (ej. el archivo `_headers` de Cloudflare o `next.config.js`) para confirmar la presencia de CSP (Content-Security-Policy) robusto.

2. **Auditoría de Calidad (ISO 9001):**
   - Ejecuta validaciones de rendimiento (Lighthouse CLI o DevTools) para verificar puntuaciones por encima de 90.
   - Cerciórate de que el código sea modular, tipado (TypeScript si aplica) y cumpla con las Best Practices del framework.

3. **Auditoría de Privacidad (GDPR & ISO 27701):**
   - Si se insertaron scripts de terceros (como Google Analytics, Meta Pixel), verifica que exista un módulo de consentimiento (Cookie Banner).
   - Verifica que los enlaces externos hacia WhatsApp minimicen el traspaso pasivo de datos.

4. **Auditoría de Continuidad y Riesgo (ISO 22301 & 31000):**
   - Revisa que `PROJECT-STATE.md` refleje exactamente el punto actual del código.
   - Confirma que cualquier bug o bloqueo de cuota nuevo haya sido transferido formalmente a `KNOWN_ISSUES.md`.
