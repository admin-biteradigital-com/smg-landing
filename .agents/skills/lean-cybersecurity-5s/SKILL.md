---
name: lean-cybersecurity-5s
description: Integrates Lean Software Development, 5S (Sort, Set in order, Shine, Standardize, Sustain), Six Sigma (DMAIC), and Advanced Cybersecurity against human/AI attacks.
---

# Metodologías Ágiles de Producción y Ciberseguridad

Este skill instruye al agente a incorporar principios de manufactura esbelta (Lean), organización (5S), métricas de calidad (Six Sigma) y protección cibernética hostil a la base de código estructural.

## 1. Lean Software Development
- **Eliminate Waste (Muda):** No escribir código "por si acaso" (YAGNI). Maximizar la eficiencia del bundle final de Next.js mediante Server Components puros donde la interactividad no sea requerida.
- **Optimize the Whole:** El ciclo de vida completo (desde el repositorio hasta Cloudflare Pages) debe tener cero fricción (Zero Config/Build frictions).

## 2. 5S en la Base de Código
- **Sort (Seiri):** Archivos innecesarios deben ser purgados.
- **Set In Order (Seiton):** Estructurar rígidamente la carpeta `/src/app`, `/src/components`, `/public/assets`.
- **Shine (Seiso):** Estandarizaciones obligatorias de Linting y formateo tras cada despliegue. Nada de console.logs huérfanos.
- **Standardize (Seiketsu):** Nomenclaturas consistentes en PascalCase para componentes y kebab-case para archivos.
- **Sustain (Shitsuke):** Disciplina continua en cada Sprint del KANBAN para auditar estos pasos.

## 3. Six Sigma (DMAIC)
- **Define:** Entender las expectativas de conversión con exactitud (PRD).
- **Measure:** Configurar el Core Web Vitals y tracking de Web Analytics.
- **Analyze:** Evaluar cuellos de botella mediante auditorías de Lighthouse CI/CD.
- **Improve & Control:** Restricción absoluta contra degradación del performance >1%.

## 4. Advanced Cybersecurity (Anti-Human & Anti-AI)
Para escudar a la aplicación contra scraping automatizado, enumeración iterativa o ataques humanos:
- **Cloudflare WAF (Web Application Firewall):** Definimos protección nativa a nivel del DNS contra top-10 OWASP exploits y envenenamiento o inyecciones (XSS).
- **Cloudflare Turnstile (Anti-Bot AI):** Integrar de ser necesario protección invisible (CAPTCHA sin intervención) en formularios futuros para atenuar agentes automatizados (AI bots).
- **Rate Limiting:** Bloquear IPs o Autonomous Systems que superen X peticiones por segundo en Cloudflare.
- **Headers Estrictos:** Inyección requerida de bloqueadores de iframes, protección contra MIME sniffing y HSTS habilitado.
