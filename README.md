# SMG Distribuciones — Landing Page

## Contexto del proyecto

**Cliente:** Sebastián Marín Giacomino — SMG Distribuciones  
**Rubro:** Autoventa de golosinas y snacks, Chamiza, Región de Los Lagos, Chile  
**Desarrollado por:** Bitera Digital (biteradigital.com)  
**CTA principal:** WhatsApp

---

## Objetivo de esta etapa

Landing page estática de presentación comercial.  
Sin backend, sin base de datos. Deployable en Cloudflare Pages.

---

## Estructura del repositorio

```
smg-landing/
├── index.html              ← landing completa (single file)
├── assets/
│   ├── portada.png         ← wordmark SMG (navbar + footer)
│   └── perfil.png          ← isologo circular (hero)
└── README.md
```

---

## Paleta de colores (marca real)

| Token          | Hex       | Uso                        |
|----------------|-----------|----------------------------|
| `--navy`       | `#1A2B3C` | Color primario, fondos     |
| `--navy-deep`  | `#0F1E2D` | Hero, footer               |
| `--navy-mid`   | `#243547` | Stats bar                  |
| `--orange`     | `#F07820` | Acento principal, CTAs     |
| `--off-white`  | `#F7F9FB` | Fondos alternos            |

---

## Pendientes ANTES del deploy

### 1. Número de WhatsApp ← CRÍTICO
Reemplazar **todas** las ocurrencias de `56XXXXXXXXX` con el número real (formato internacional sin `+`).

```bash
sed -i 's/56XXXXXXXXX/56912345678/g' index.html
```

Hay 5 ocurrencias en: nav CTA, hero btn, card "Porque SMG", cobertura CTA, CTA final.

### 2. Stats del hero (datos reales)
En el bloque `.hero-stats`, completar:
- Cantidad real de productos (+50, +100, etc.)
- Cantidad/descripción de rutas reales
- Tercer stat: puede ser antigüedad, clientes, o mantener "DTE"

### 3. Zonas de cobertura
Verificar con el cliente en sección `#cobertura`. Actualmente tiene:
Chamiza, Puerto Montt, Calbuco, Los Lagos, Zona rural.

### 4. Favicon (opcional pero recomendado)
Generar `favicon.ico` o `favicon.png` desde `assets/perfil.png` y agregar en `<head>`:
```html
<link rel="icon" href="assets/perfil.png" />
```

---

## Stack técnico

- HTML5 + CSS3 puro, sin frameworks
- Google Fonts CDN: `Barlow Condensed` (títulos), `Nunito` (cuerpo/UI)
- JS vanilla: solo IntersectionObserver para scroll reveal
- SVG WhatsApp icon definido como `<symbol>` y reutilizado con `<use>`
- Sin dependencias npm, sin build step

---

## Deploy en Cloudflare Pages

```
Build command:       (ninguno)
Build output dir:    /
Root directory:      /
```

O drag & drop directo en el dashboard de Cloudflare Pages.

---

## Agent / AI Continuity
Este proyecto utiliza un flujo de trabajo continuo impulsado por metodologías Scrumban e IA. Si requieres retomar el contexto, dirígete directamente a:
- [PROJECT-STATE.md](./PROJECT-STATE.md): Estado maestro del proyecto e identidad visual.
- [KANBAN.md](./KANBAN.md): Tablero Scrumban de límites en progeso de Sprints.
- [docs/PRD-SMG-Landing.md](./docs/PRD-SMG-Landing.md): Definición de requerimientos base.
