---
name: Sixteam.pro — Contenido Social
description: Piezas visuales dark-first para prospección y redes de Sixteam.pro
colors:
  navy: "#0a2342"
  blue: "#1d70a2"
  teal: "#00bfa5"
  teal-deep: "#007a6a"
  teal-ink: "#002b26"
  gray: "#e0e0e0"
  ink-black: "#0d0d12"
  ink-black-alt: "#11141c"
  card-light: "#eef3f8"
  muted-slate: "#33414c"
  muted-slate-soft: "#51616f"
typography:
  headline:
    fontFamily: "Poppins, sans-serif"
    fontWeight: 800
    letterSpacing: "-0.5px"
  eyebrow:
    fontFamily: "Lato, sans-serif"
    fontWeight: 700
    fontSize: "9.5px"
    letterSpacing: "2.6px"
  body:
    fontFamily: "Lato, sans-serif"
    fontWeight: 500
    fontSize: "12.5px"
    lineHeight: 1.7
  number-display:
    fontFamily: "Poppins, sans-serif"
    fontWeight: 300
    fontSize: "54px"
rounded:
  pill: "20px"
  card: "18px"
  chip: "9px"
  progress: "2px"
spacing:
  sm: "6px"
  md: "13px"
  lg: "28px"
components:
  cta-pill:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.teal-ink}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
  chip:
    backgroundColor: "rgba(255,255,255,0.1)"
    textColor: "#ffffff"
    rounded: "{rounded.chip}"
    padding: "9px 13px"
---

# Design System: Sixteam.pro — Contenido Social

## Overview

**Creative North Star: "El operador silencioso"**

Sixteam vende operación continua, no espectáculo puntual — el sistema visual sigue el mismo
principio: fondo navy/negro que ancla cada pieza, teal usado con disciplina como la única señal de
acción, y tipografía que separa con claridad la voz editorial (Poppins, para hooks y titulares) de
la voz de trabajo (Lato, para cuerpo y datos). Nada compite por atención al mismo tiempo; cada
pieza tiene una sola cosa que el ojo debe hacer primero.

Formato mobile-first estricto: todo se diseña primero como mockup de feed/story de Instagram
(marco de teléfono, barra de progreso de story, avatar circular), reflejando que el consumo real es
en el dedo, no en desktop. Dark-first: el fondo oscuro es el estado por defecto, no una variante;
las piezas claras (fondo `#eef3f8`) aparecen solo como "slide de contraste" dentro de un carrusel,
nunca como base del sistema.

**Key Characteristics:**
- Dark-first, mobile-first — se diseña como mockup de story/feed de IG, no como página web.
- Teal (`#00bfa5`) es el único color de acción; nunca decorativo, siempre CTA/highlight/dato clave.
- Números grandes (54px, peso 300) como protagonistas visuales de un dato ("dato ancla").
- Jerarquía tipográfica estricta: Poppins = titulares y énfasis; Lato = todo lo demás.
- Nunca Inter/Roboto/system-default — es la anti-referencia explícita del sistema (CLAUDE.md).

## Colors

Paleta de dos temperaturas: navy/negro como base estructural, teal como único acento vivo. El resto
son variaciones tonales de esas dos, no colores nuevos.

### Primary
- **Sixteam Teal** (`#00bfa5`): único color de acción — CTAs, progress bars activas, chips de dato,
  highlights de texto. Nunca se usa como fondo de bloques grandes; su fuerza es su escasez.

### Secondary
- **Sixteam Blue** (`#1d70a2`): acento secundario, casi siempre en gradiente con el teal
  (`linear-gradient(135deg, #1d70a2, #00bfa5)`) para avatares y marcas de logo. No se usa sólido.

### Neutral
- **Navy** (`#0a2342`): fondo estructural principal en los slides "de contraste" claro (como texto
  sobre `#eef3f8`) y en headers/footers de marca.
- **Ink Black** (`#0d0d12` / `#11141c`): fondo por defecto del lienzo dark — la base de casi toda
  pieza.
- **Card Light** (`#eef3f8`): fondo del "slide de contraste" — la única superficie clara del
  sistema, usada con moderación (1 de cada 3-4 slides como máximo).
- **Muted Slate** (`#33414c` / `#51616f`): texto secundario sobre fondo claro.
- **Gray** (`#e0e0e0`): texto secundario sobre fondo oscuro.
- **Teal Deep / Teal Ink** (`#007a6a` / `#002b26`): variantes oscuras del teal para texto sobre
  fondo teal (botones) o iconografía sobre fondo claro.

### Named Rules
**The Scarcity Rule.** El teal puro (`#00bfa5`) nunca cubre más del 10% de la superficie de un
slide. Su valor es la rareza: si todo es teal, nada lo es.

## Typography

**Display/Headline Font:** Poppins (700–900), con `sans-serif` como fallback
**Body Font:** Lato (400–500), con `sans-serif` como fallback

**Character:** Poppins aporta el peso editorial (titulares, hooks, cifras protagonistas); Lato
aporta la voz de trabajo, legible y sin adorno, para cuerpo, captions y microcopy. La pareja nunca
se mezcla dentro del mismo bloque de texto.

### Hierarchy
- **Display / Número ancla** (peso 300, 54px, Poppins): la cifra protagonista de un slide de dato
  ("dato ancla" del posicionamiento — p.ej. "50–70%").
- **Headline** (peso 800, letter-spacing -0.5px, Poppins): el hook o título de cada slide.
- **Eyebrow / Label** (peso 700, 9.5px, letter-spacing 2.6px, uppercase, Lato): kicker sobre el
  headline, marca la categoría del slide.
- **Body** (peso 500, 12.5px, line-height 1.7, Lato): texto de desarrollo, captions, listas.

## Layout

Contenedor fijo tipo mockup de teléfono (`.ig-frame`, 400px de ancho, `border-radius:18px`,
`box-shadow:0 20px 60px rgba(0,0,0,.5)`) que simula el marco de Instagram: barra de progreso de
story arriba, avatar + handle, contenido, franja de navegación/descarga abajo. El ratio real de
exportación es 1:1 (feed) o 9:16 (story), pero el diseño se construye dentro de ese marco de
teléfono para previsualizar cómo se ve en el dedo. Padding interno generoso (24–34px) contra los
bordes del marco; el contenido nunca toca el borde.

### Piezas estáticas de una sola imagen (Meta Ads)

Una pauta de una sola imagen (sin swipe, sin marco de teléfono `.ig-frame`) se autora directamente a
la resolución final de exportación — p. ej. `1080×1440` para 3:4, `1080×1350` para 4:5 — en vez del
marco de 400px + `scale:3` que usan carruseles e historias. La escala tipográfica se mantiene
proporcional a los tokens de `typography` (los valores literales de este documento están calibrados
para el mockup de 400px; a 1080px de ancho el factor es ≈2.7×), no se inventan tamaños nuevos sin
relación a la razón entre esos dos anchos. Padding interno generoso equivalente (≈180–230px a esta
escala, proporcional al 24–34px del marco de 400px). Referencia:
`contenido-social/pautas/pauta-consultoria-vip.html`.

## Elevation & Depth

Sistema mayormente plano — sin sombras internas entre elementos. La única sombra del sistema es
estructural: la del propio marco de teléfono (`box-shadow:0 20px 60px rgba(0,0,0,.5)`), que separa
la pieza completa de su entorno (el canvas del editor), no sus componentes internos entre sí. La
profundidad entre elementos se logra con capas tonales (`rgba(255,255,255,.1)` sobre fondo oscuro,
`rgba(0,0,0,.08)` sobre fondo claro), no con sombras.

### Named Rules
**The Flat-Interior Rule.** Ningún elemento dentro del marco de teléfono proyecta sombra propia;
solo el marco exterior tiene profundidad. La separación entre bloques se hace con opacidad y color,
no con `box-shadow`.

## Shapes

Radios generosos y consistentes por tipo de elemento, nunca esquinas vivas:
- **Marco/carrusel:** 18px.
- **Chips y bloques de texto destacado:** 9px.
- **Botón/pill de descarga o CTA:** 20px (pill casi completo).
- **Avatar / dot activo / puntos de progreso:** circular (`50%`) o barra redondeada (`2–3px` en
  barras de progreso finas).

## Components

### Botón / CTA pill
- **Shape:** pill, `border-radius:20px`.
- **Primary:** fondo `#00bfa5`, texto `#002b26` (teal ink, nunca blanco puro sobre teal), Poppins
  700, `padding:6px 12px`.
- **Uso:** un solo CTA por pieza, siempre coherente con la regla de negocio "agendar 20 minutos".

### Chips
- **Style:** fondo `rgba(255,255,255,.1)` sobre dark, borde `1px solid rgba(255,255,255,.22)`,
  `border-radius:9px`, texto blanco, Lato 500, `padding:9px 13px`.
- **State:** variante "dato clave" usa el teal como acento de un ícono o número dentro del chip, no
  como fondo del chip completo.

### Marco / Carrusel (contenedor de página)
- **Corner Style:** `18px`.
- **Background:** `#0d0d12` / `#11141c` (dark, por defecto) o `#eef3f8` (slide de contraste).
- **Shadow Strategy:** ver Elevation & Depth — solo el marco exterior tiene sombra.
- **Internal Padding:** 24–34px.

### Barra de progreso (story)
- **Style:** track `rgba(255,255,255,.12–.15)` sobre dark o `rgba(0,0,0,.08)` sobre claro, altura
  3px, `border-radius:2px`; fill blanco sobre dark o teal sobre claro, según el slide.

### Logo lockup
- **Style:** imagen cuadrada `~30–34px`, `object-fit:contain`, junto al wordmark "Sixteam.pro" en
  Poppins 700.
- **Fuente del asset:** el logo debe insertarse como imagen real embebida (base64 o
  `contenido-social/carruseles/assets/sixteam-logo.png`), nunca como texto placeholder. Ver hallazgo
  en Do's and Don'ts.

## Do's and Don'ts

### Do:
- **Do** usar Poppins para todo titular/hook y Lato para todo lo demás — nunca mezclar dentro del
  mismo bloque.
- **Do** mantener el teal por debajo del 10% de superficie visible por slide (The Scarcity Rule).
- **Do** construir cada pieza dentro del marco de mockup de teléfono (`.ig-frame`) para validar cómo
  se ve en el dedo antes de exportar.
- **Do** insertar el logo de Sixteam como imagen real (base64 embebido o el asset local en
  `contenido-social/carruseles/assets/sixteam-logo.png`) para que la pieza sea 100% autocontenida,
  como exige `CLAUDE.md`.

### Don't:
- **Don't** usar Inter, Roboto, Arial o cualquier fuente de sistema — es la anti-referencia
  explícita del proyecto.
- **Don't** usar el teal como color de fondo de bloques grandes; es acento, no superficie.
- **Don't** dejar un fallback de texto tipo iniciales ("S6") como respaldo del logo — es un
  remanente de una versión anterior del sistema, ya reemplazado por el logo real embebido en las
  piezas más nuevas (`diagnostico-fugas-leads*.html`). `ia-agencia-de-viajes.html` todavía lo tiene
  en tres `onerror` handlers (líneas ~92, ~114, ~310) — pendiente de limpiar.
