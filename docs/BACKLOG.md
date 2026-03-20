# Backlog Queue

Este backlog traslada los requisitos actualizados del `PRD-SMG-Landing.md` en tareas ejecutables.

## EPIC 1: Fundación, Framework y Estética (Tech Setup)
- [ ] **STORY 1.1:** Inicializar la estructura de `index.html` y variables CSS con la paleta de colores de SMG y tipografías (Barlow Condensed, Nunito).
- [ ] **STORY 1.2:** Implementar base puramente mobile-first y auditar métricas iniciales de Performance (Lighthouse base 100).
- [ ] **STORY 1.3:** Regenerar con IA los assets de marca (`Logo.png` y `Portada.png`) para mejorar hiper-detalle, opacidad/transparencia y foco sin alterar un milímetro del diseño original. Proveer los fondos "Naturaleza hiperreal / Carretera Austral".

## EPIC 2: Componentes de Extrema Convertibilidad
- [ ] **STORY 2.1:** Diseñar `Navbar` interactivo con logo y ancla o botón flotante (sticky) continuo y altamente visible hacia el WhatsApp.
- [ ] **STORY 2.2:** `Hero Inmersivo`: Incorporar las imágenes panorámicas aéreas de Los Lagos, título principal y CTA a WhatsApp "Haz tu pedido aquí" con alta jerarquía visual.
- [ ] **STORY 2.3:** Vista de `Quiénes Somos`: Incorporar narrativa de identidad y ubicación para generar credibilidad en la zona.
- [ ] **STORY 2.4:** Vista de `Nuestras Marcas / Con Quiénes Trabajamos`: Mostrar un grid o carrusel ligero de los partners clave (Trento, Bel, Kryzpo, etc.).
- [ ] **STORY 2.5:** Vista de `Categorías de Catálogo` (los 8 grupos según catalog.json) con miniaturas que provoquen "apetito visual".
- [ ] **STORY 2.6:** Sección de `Cobertura`: Listado claro destacando Chamiza, Puerto Montt, Calbuco, Los Lagos y Ruta Rural.

## EPIC 3: Funcionalidad e Integración (Data & Polish)
- [ ] **STORY 3.1:** Conversión Final: Instanciar los CTAs (botones) y links mediante un script Vanilla o lógica pura que ensamble el link de WhatsApp (wa.me) con un mensaje pre-cargado.
- [ ] **STORY 3.2:** *Scroll Reveal*: Añadir JS nativo (`IntersectionObserver`) para el loading dinámico de los fondos y apariciones armónicas de bloques (efecto panorámico suave).
- [ ] **STORY 3.3:** Optimización de Assets: Proveer Favicon, comprimir WebP las panorámicas hiperreales para evitar penalizaciones de Score de Carga.

## EPIC 4: Verificación y Despliegue (Release)
- [ ] **STORY 4.1:** Auditoría de web-design-guidelines (Contraste visual, tipografía, performance en 3G para las zonas rurales).
- [ ] **STORY 4.2:** Despliegue en Cloudflare Pages, validando los subdominios y cache policies.
