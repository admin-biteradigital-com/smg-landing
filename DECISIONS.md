# Architectural & Product Decision Log (ADR)

Este registro documenta las decisiones importantes (contexto estructural, técnico o estratégico) a lo largo del ciclo de vida del proyecto SMG Landing Page.

## [2026-03] ADR 001: Arquitectura Zero-Build Step
* **Contexto:** El proyecto debe ser extremadamente rápido y estar alojado de manera gratuita en Cloudflare Pages, asegurando un perfecto rendimiento en zonas rurales (redes móviles inestables).
* **Decisión:** Utilizar HTML5 puro, CSS3 (mediante variables nativas), y Vanilla JS. Evitar constructores y empaquetadores (como React/Next.js/Vite) para este MVP puntual para simplificar el despliegue al máximo.

## [2026-03] ADR 002: Estética Inmersiva Carretera Austral
* **Contexto:** Diferenciar visualmente a SMG con un diseño de impacto que refleje orgullo y presencia regional.
* **Decisión:** Fondear el sitio web con panorámicas hiperreales ("estilo Nano Banana" original) de la Carretera Austral y Los Lagos, fundiendo sutilmente la temática dulce/golosinas con la vastedad del mapa.

## [2026-03] ADR 003: Flujo Ágil Scrumban y Tablero de Archos
* **Contexto:** Necesidad de un framework para trabajo asíncrono AI-Humano de alta velocidad.
* **Decisión:** Adoptar Scrumban utilizando un tablero físico `KANBAN.md` alojado en el repositorio base, priorizando límites estrictos (Work in Progress Limit) para no dejar tareas a la mitad.

## [2026-03] ADR 004: Reemplazo Dinámico de Assets Vectoriales
* **Contexto:** El intento primario de utilizar agentes de inteligencia artificial para restaurar a HD el `Logo.png` excedió la cuota de la API.
* **Decisión:** Congelar la tarea (marcada en Known Issues) y continuar inyectando versiones temporales al código hasta que cese el bloqueo de la cuota, evitando cuellos de botella para el MVP.
