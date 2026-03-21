# Known Issues & Blockers Tracker

Este registro mantiene bajo radar todos los obstáculos detectados, fallos no resueltos o limitaciones actuales para abordarlas en el momento oportuno.

| ID | Fecha | Estado | Gravedad | Descripción | Solución Temporal (Workaround) |
|---|---|---|---|---|---|
| ISS-001 | Marzo 2026 | **En Espera** (Bloqueado) | Moderada | **Cuota API de imágenes agotada:** Imposible regenerar el `Logo.png` y la `Portada.png` original en versiones HD limpias utilizando la API de Google/Gemini. | Utilizar los `.png` iniciales con clases CSS dinámicas u otro placeholder en el intertanto. Retomar tras 96 horas de limpieza de cuota. |
| ISS-002 | Sprint 2 | **Mitigado** | Moderada | **Resend Fetch limits:** API Resend no compatible con Edge config directo. | Resuelto invocando la API REST pura de Resend mediante HTTP fetch en Cloudflare Pages `onboarding.ts`. |
| ISS-003 | Sprint 2 | **Activa** | Baja | **Falta de Secret Key Turnstile en Prod:** Si `TURNSTILE_SECRET_KEY` no se define en `.dev.vars` o Cloudflare Dashboard, la validación se omitesilenciosamente. | Asegurar inyección de variable en Settings del dashboard antes del push definitivo. |
