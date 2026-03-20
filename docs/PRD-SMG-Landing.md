# Product Requirements Document (PRD)
**Product Name:** SMG Distribuciones - Landing Page
**Date:** Marzo 2026

---

## 1. Summary
Este documento define los requerimientos para la Landing Page estática de SMG Distribuciones. El sitio servirá como una presentación comercial de alto impacto orientada a la conversión de visitas a pedidos directos vía WhatsApp. El concepto visual fusionará el rubro de las golosinas con una experiencia inmersiva basada en las áreas de despacho (Región de los Lagos y Carretera Austral) mediante paisajes hiperreales de naturaleza.

## 2. Contacts
* **Sebastián Marín Giacomino:** Cliente / Dueño de SMG Distribuciones.
* **Agente de IA (Bitera Digital):** Product Manager y Desarrollador.

## 3. Background
SMG Distribuciones opera en la Región de Los Lagos (Chile), abasteciendo a comercios minoristas. Necesitan consolidar su presencia digital mediante un sitio rápido enfocado fuertemente en la *convertibilidad* y comunicación directa por WhatsApp. Es vital un diseño que proyecte el vasto territorio que cubren con vistas panorámicas naturales, mezclado con el "gusto" de sus productos.

## 4. Objective
* **Objetivo Comercial:** Maximizar la convertibilidad: Cada visita debe sentirse atraída a contactar a la empresa a través de WhatsApp para realizar pedidos, sin fricciones ni pasos burocráticos.
* **Objetivo de UX:** Brindar toda la información necesaria para derribar dudas de compra: Quiénes son, cobertura, catálogo y con quiénes trabajan.
* **Key Results (OKRs):**
  * KR1: Lanzar el MVP optimizado en Cloudflare Pages.
  * KR2: Implementar un embudo UX de un solo clic desde la lectura de la propuesta hasta el WhatsApp.
  * KR3: Obtener un Score +90 en métricas de conversión y tiempos de carga.

## 5. Market Segment(s)
* **Público Objetivo (B2B):** Dueños de kioscos, almacenes y minimarkets ubicados en Chamiza, Puerto Montt, Calbuco, Los Lagos y la Carretera Austral.
* **Necesidades:** Proveedor confiable, surtido de calidad.
* **Restricciones:** El rendimiento web en redes 3G/4G rurales debe ser instantáneo pese al contenido inercial hiperrealista de los fondos.

## 6. Value Proposition(s)
* **Inmersivo y Eficaz:** "Vive la grandiosidad de Los Lagos mientras pides directamente al catálogo más amplio y dulce de la región con un tap."
* **Confianza Radical:** Mediante la sección Quiénes Somos y Marcas Asociadas, el cliente sabe exactamente a quién le compra y qué calidad espera.

## 7. Solution
### 7.1 UX / Interfaz (Concepto Visual)
* **Aesthetic 'Carretera Austral / Naturaleza Hiperreal':** Uso de fondos formados por panorámicas y vistas aéreas espectaculares de Los Lagos con sutiles retoques estéticos ("estilo Nano Banana" de dulces/golosinas).
* **Convertibilidad Máxima:** CTAs flotantes y recurrentes hacia WhatsApp presentes tras cada bloque de información.
### 7.2 Key Features
1. **Hero Section Inmersivo:** Vistas aéreas impresionantes de la Carretera Austral con el Logo renovado en alta calidad y propuesta de valor inicial.
2. **Sección 'Quiénes Somos':** Breve bloque relatando quién es SMG y su propuesta de trabajo humano.
3. **Catálogo Resumido:** Exposición de los 8 segmentos de productos principales extraídos de `catalog.json`.
4. **Nuestras Marcas / Proveedores:** Listado de marcas principales con las que operan (Trento, Bel, Kryzpo, Mantecol, etc.) para apalancarse en la autoridad visual de dichos proveedores.
5. **Módulo de Cobertura:** Listado escénico de zonas atendidas.
### 7.3 Technology
* **Arquitectura:** Single Page Application estática (HTML/CSS/Vanilla JS) sin frameworks pesados, variables CSS inyectando la paleta "navy/orange" original. Animaciones ligeras, lazy loading paramétrico en assets hiperreales.

## 8. Release
* **Versión 1.0:** Landing estática desplegada con assets gráficos en alta calidad regenerados por IA a partir de bocetos originales (Logo y Portada mejorados desde un source de baja resolución), optimizada para conversión directa.
