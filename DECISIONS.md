# Architectural & Product Decision Log (ADR)

Este registro documenta las decisiones importantes (contexto estructural, técnico o estratégico) a lo largo del ciclo de vida del proyecto SMG Landing Page.

## [2026-03] ADR 001: Arquitectura de Vanguardia con Next.js + React + Tailwind
* **Contexto:** Inicialmente el README original sugería un enfoque estático puro en HTML5/Vanilla JS. Sin embargo, el cliente remarcó la necesidad imperativa de un stack de *vanguardia tecnológica* que sea altamente **mantenible**, **auditable** y escalable a lo largo del tiempo.
* **Decisión:** Se pivotó la arquitectura hacia el ecosistema **Next.js**. Utilizaremos React para modularizar el código en componentes limpios y reutilizables. Tailwind CSS garantizará que el sistema de estilos (`--navy`, `--orange`) se mantenga ordenado sin romper la cascada. Se configurará el proyecto como un *Static Export* (SSG) para conservar el despliegue nativo ultra-rápido y gratuito hacia Cloudflare Pages, obteniendo el máximo rendimiento (Core Web Vitals) y la mantenibilidad exigida.

## [2026-03] ADR 002: Estética Inmersiva Carretera Austral
* **Contexto:** Diferenciar visualmente a SMG con un diseño de impacto que refleje orgullo y presencia regional.
* **Decisión:** Fondear el sitio web con panorámicas hiperreales ("estilo Nano Banana" original) de la Carretera Austral y Los Lagos, fundiendo sutilmente la temática dulce/golosinas con la vastedad del mapa. Las animaciones se manejarán con Framer Motion para mayor fluidez.

## [2026-03] ADR 003: Flujo Ágil Scrumban y Tablero de Archos
* **Contexto:** Necesidad de un framework para trabajo asíncrono AI-Humano de alta velocidad.
* **Decisión:** Adoptar Scrumban utilizando un tablero físico `KANBAN.md` alojado en el repositorio base, priorizando límites estrictos (Work in Progress Limit) para no dejar tareas a la mitad.

## [2026-03] ADR 004: Reemplazo Dinámico de Assets Vectoriales
* **Contexto:** El intento primario de utilizar agentes de inteligencia artificial para restaurar a HD el `Logo.png` excedió la cuota de la API.
* **Decisión:** Congelar la tarea y continuar el Sprint 1 utilizando placeholders o el logo provisorio optimizado. Se retomará esta labor visual una vez levantado el rate limit.
