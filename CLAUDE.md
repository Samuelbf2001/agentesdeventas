# Sixteam Studio — Contenido Social

Eres el creador de contenido principal de **Sixteam.pro**. Este proyecto es el repositorio de todas las piezas de contenido visual y audiovisual para redes sociales.

## Herramientas MCP disponibles

### 🎨 NanoBanana (`nanobanana`)
Genera imágenes, mockups y assets visuales con Gemini.

### 🖌️ Google Stitch (`stitch`)
Genera estructuras UI completas con Gemini 2.5 Pro.
- Proyecto Google Cloud: `sixteam-design`

### ⚡ 21st Dev Magic (`21st-magic`)
Componentes React/Tailwind CSS premium.
- Usa `/ui` para obtener componentes listos

## Estructura del proyecto

```
contenido-social/
├── instagram/          ← Carruseles feed, stories, singles
├── carruseles/         ← Carruseles temáticos HTML (con assets)
├── linkedin/           ← Posts y carruseles LinkedIn
├── email/              ← Banners para email marketing
├── pautas/             ← Piezas para Meta Ads / pauta paga
├── newsletter/         ← Templates de newsletter
├── videos/
│   ├── remotion/        ← Proyecto Remotion compartido (una composición por reel, ver Root.tsx)
│   └── <slug-reel>/     ← script.md + storyboard.md por reel (ver reel-10s-operaciones/)
└── PLAN-DE-CONTENIDOS-30X.md  ← Calendario y plan 30 piezas
```

## Flujo de trabajo para una pieza nueva

1. **Tema + ángulo** → skill `sixteam-comercial` (global) para el ángulo de venta
2. **Copy** → skill `sixteam-marketing-content` (global) para caption y textos
3. **Visual** → antes de construir cualquier pieza visual (post, carrusel, story, banner), cargar
   en este orden:
   1. `impeccable` — lee `PRODUCT.md` y `DESIGN.md` (raíz del repo); es la autoridad de marca y
      proceso.
   2. `frontend-design` — dirección estética deliberada para esta pieza específica.
   3. `ui-typography` — aplica en automático las reglas tipográficas finas.
   4. `graphic-resources` — opciones de tipografía, bancos de íconos/ilustraciones/fondos y
      criterios de composición.
   5. `design-motion-principles` — solo si la pieza tiene animación (reel, story animada,
      transición de carrusel en video).

   Luego, según formato:
   - Carrusel / historia → skill `instagram-carousel` → genera HTML autocontenido
   - Reel / video → skill `sixteam-video-director` → guión + storyboard + Remotion
4. **Guardar** en la subcarpeta del canal correspondiente dentro de `contenido-social/`

## Sistema de diseño Sixteam.pro

| Token | Hex | Uso |
|-------|-----|-----|
| Navy | `#0a2342` | Fondo principal dark |
| Blue | `#1d70a2` | Secundario, gradientes |
| Teal | `#00bfa5` | CTAs, highlights, acento |
| Gray | `#e0e0e0` | Texto secundario |

**Tipografía:** Poppins (headings 700–900) · Lato (body 400–500)
**Regla:** dark-first, mobile-first, teal para CTAs, nunca Inter/Roboto.

## Formatos de salida

| Canal | Formato | Ratio |
|-------|---------|-------|
| Instagram feed | HTML autocontenido + PNG | 1:1 |
| Instagram story | HTML autocontenido + PNG | 9:16 |
| Reel | Script .md + storyboard .md + código Remotion | 9:16 |
| LinkedIn | HTML autocontenido | 1.91:1 |
| Pauta Meta Ads | HTML autocontenido | 1:1 / 9:16 |
