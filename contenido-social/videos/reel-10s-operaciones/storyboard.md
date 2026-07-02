# STORYBOARD: Reel 10s — Operaciones Agencias de Viajes

**Video:** reel-10s-operaciones
**Plataforma:** Instagram Reels / TikTok
**Resolución:** 1080×1920 (9:16) · Preview: 390×693
**FPS:** 30
**Duración total:** 10s = 300 frames
**Paleta dominante:** NAVY + BLUE + TEAL

---

## RESUMEN DE ESCENAS

| # | Nombre | Acto | Duración | Frames | Fondo |
|---|--------|------|----------|--------|-------|
| 1 | Hook — Sin respuesta | 1 | 2.5s | 0–75 | #0a2342 sólido |
| 2 | Problema 1 — CRM vacío | 2 | 2.5s | 75–150 | linear-gradient(135deg, #0a2342, #1d70a2) |
| 3 | Problema 2 — Rebote de ticket | 2 | 2.5s | 150–225 | linear-gradient(135deg, #1d70a2, #00bfa5) |
| 4 | Solución + CTA | 3 | 2.5s | 225–300 | linear-gradient(165deg, #0a2342 0%, #1d70a2 50%, #00bfa5 100%) |

---

## FICHAS DE ESCENAS

### ESCENA 1 — Hook: Sin Respuesta

| Campo | Valor |
|---|---|
| Beat del guión | Beat 1 / Acto 1 |
| Duración | 2.5s / 75 frames |
| Frame inicio | 0 |
| Frame fin | 75 |
| Fondo | #0a2342 sólido |
| Layout | Centrado vertical y horizontal |

**TEXTO EN PANTALLA**
- Línea principal: "Tu cliente escribió con un problema." — Poppins 800 42px — #ffffff — centrado
- Subtítulo: "Nadie le respondió." — Poppins 900 52px — #00bfa5 — centrado (con delay 15 frames)
- Efecto: texto principal aparece primero, luego el subtítulo teal con más peso

**ANIMACIONES DE ENTRADA**
- Línea principal: slide-up 20px + fade-in — duración 20 frames — easing ease-out-expo — delay 5 frames
- Subtítulo teal: scale-in desde 0.9 + fade-in — duración 18 frames — delay 25 frames desde inicio

**ANIMACIONES DE SALIDA**
- Tipo: cut instantáneo — frame 74→75

**ELEMENTOS VISUALES**
- Fondo: #0a2342 sólido
- Efecto sutil: partículas de puntos teal con opacity 0.08 (decorativo)
- Logo S6: NO visible (el hook no menciona la marca)
- Número de escena: NO visible

**TRANSICIÓN A SIGUIENTE ESCENA**
- Tipo: corte directo (cut rápido — impacto)
- Duración: 0 frames (instantáneo)

**NOTAS**
El subtítulo "Nadie le respondió." debe ser más grande y en teal para crear contraste emocional. El blanco dice el hecho, el teal dice el dolor.

---

### ESCENA 2 — Problema 1: CRM Vacío

| Campo | Valor |
|---|---|
| Beat del guión | Beat 2 / Acto 2 |
| Duración | 2.5s / 75 frames |
| Frame inicio | 75 (local: 0) |
| Frame fin | 150 (local: 75) |
| Fondo | linear-gradient(135deg, #0a2342 0%, #1d70a2 100%) |
| Layout | Texto superior + card CRM centrada |

**TEXTO EN PANTALLA**
- Línea principal: "Tu asesor no sabe que ya se quejó antes." — Poppins 700 32px — #ffffff — centrado, padding lateral 40px
- Card CRM: campos con labels (Nombre, Historial, Queja, Ticket) y valores vacíos "— — —" en gris tenue

**ANIMACIONES DE ENTRADA**
- Texto superior: fade-in + slide-up 15px — duración 18 frames
- Card CRM: slide-up 25px + fade-in — duración 20 frames — delay 10 frames — spring stiffness 120
- Campos de la card: aparecen uno por uno con delay escalonado (3 frames entre cada campo)

**ANIMACIONES DE SALIDA**
- Tipo: fade-out últimos 8 frames

**ELEMENTOS VISUALES**
- Fondo: gradiente navy→blue
- Card CRM: fondo rgba(255,255,255,0.07), border 1px solid rgba(255,255,255,0.15), border-radius 12px
- Campos: label en #00bfa5 12px uppercase, valor en #e0e0e0 50% opacity (efecto vacío)
- Icono de advertencia ⚠ en teal sobre la card (pequeño, top-right)

**TRANSICIÓN A SIGUIENTE ESCENA**
- Tipo: corte directo
- Duración: 0 frames

---

### ESCENA 3 — Problema 2: Ticket Rebotando

| Campo | Valor |
|---|---|
| Beat del guión | Beat 3 / Acto 2 |
| Duración | 2.5s / 75 frames |
| Frame inicio | 150 (local: 0) |
| Frame fin | 225 (local: 75) |
| Fondo | linear-gradient(135deg, #1d70a2 0%, #00bfa5 100%) |
| Layout | Texto superior + 3 avatares circulares con animación de rebote |

**TEXTO EN PANTALLA**
- Línea principal: "El ticket lleva 3 días rebotando entre áreas." — Poppins 700 30px — #ffffff — centrado
- Labels bajo avatares: "Ventas" / "Operaciones" / "Posventa" — Lato 400 14px — #ffffff 80%

**ANIMACIONES DE ENTRADA**
- Texto: fade-in + slide-up — duración 18 frames
- Avatar 1: scale-in desde 0 — duración 15 frames — delay 8 frames
- Avatar 2: scale-in desde 0 — delay 15 frames
- Avatar 3: scale-in desde 0 — delay 22 frames
- Icono mensaje: se mueve en arco entre avatares en bucle (CSS keyframe circular)

**ANIMACIONES DE SALIDA**
- Tipo: fade-out últimos 8 frames

**ELEMENTOS VISUALES**
- Fondo: gradiente blue→teal
- Avatares: círculos 52px, fondo rgba(255,255,255,0.2), icono persona blanco
- Mensaje volador: sobre/envelope emoji o cuadrado con flecha, animado en trayectoria entre avatares
- Flecha animada: conecta los 3 avatares con línea punteada teal

**TRANSICIÓN A SIGUIENTE ESCENA**
- Tipo: fade (0.3s) — 9 frames
- Suaviza la transición hacia la escena de solución

---

### ESCENA 4 — Solución + CTA

| Campo | Valor |
|---|---|
| Beat del guión | Beat 4 / Acto 3 |
| Duración | 2.5s / 75 frames |
| Frame inicio | 225 (local: 0) |
| Frame fin | 300 (local: 75) |
| Fondo | linear-gradient(165deg, #0a2342 0%, #1d70a2 50%, #00bfa5 100%) |
| Layout | Logo centrado arriba + texto + badge CTA abajo |

**TEXTO EN PANTALLA**
- Logo Sixteam.pro: imagen centrada 120x40px — animación scale-in desde 0.5 + fade-in
- Headline: "Tu operación bajo control." — Poppins 900 44px — #ffffff — centrado
- Subtexto: "Tickets · Historial · SLAs automáticos" — Lato 400 18px — #e0e0e0 — centrado
- Badge CTA: "sixteam.pro" — Poppins 700 20px — #0a2342 sobre fondo #00bfa5 — badge pulsante

**ANIMACIONES DE ENTRADA**
- Logo: scale desde 0.5 + fade-in — duración 20 frames — spring stiffness 180
- Headline: slide-up 20px + fade-in — delay 15 frames — duración 18 frames
- Subtexto: fade-in — delay 28 frames — duración 15 frames
- Badge CTA: scale-in desde 0.8 + fade-in — delay 38 frames — luego animación pulse infinita

**ANIMACIONES DE SALIDA**
- Hold hasta el final (sin fade out, el CTA debe quedar en pantalla)

**ELEMENTOS VISUALES**
- Fondo: gradiente hero completo
- Logo: img src de CDN
- Badge CTA: background #00bfa5, color #0a2342, border-radius 24px, padding 10px 28px, box-shadow teal glow pulsante
- Efecto decorativo: puntos/líneas geométricas sutiles en fondo

**TRANSICIÓN A SIGUIENTE ESCENA**
- Fin del video (hold frame final)

---

## ESPECIFICACIONES GLOBALES

- Música: Beat electrónico 125 BPM, energético, sin letra (Pixabay "Motivational Corporate Upbeat")
- Voz en off: NO — solo texto animado
- Fuentes a importar: Poppins (700,800,900), Lato (300,400,500)
- Color system:
  --navy: #0a2342
  --blue: #1d70a2
  --teal: #00bfa5
  --gray: #e0e0e0
  --white: #ffffff
