# Estructura Viral — Reels / TikTok / Shorts

Esto es criterio editorial, no gusto personal: son los patrones que consistentemente separan un
reel que retiene de uno que se scrollea en el segundo 1. Sixteam vende B2B (agencias, clínicas,
inmobiliarias) — el objetivo no es "viralidad de creador" (challenges, trends, humor gratuito),
es **retención suficiente para que el algoritmo empuje la pieza + un gancho de dolor/curiosidad
reconocible por un dueño de negocio.** Ajusta la intensidad, no el mecanismo.

## The First Second Rule

> El scroll ya empezó antes de que tu video cargue. Si el frame 0 no dice nada, ya perdiste.

- **Nunca** abrir con logo, intro animada, o "Hola, hoy les voy a hablar de...". Eso es el CTA,
  va al final.
- El frame 0 muestra o dice el dolor/curiosidad directamente. Texto en pantalla, no solo narrado —
  el 70-85% del consumo en feed es con el sonido apagado.
- Duración del gancho: **1.5-2.5s**, nunca más de 3s. Un solo mensaje, sin subtexto compitiendo.
- Patrón que mejor funciona para Sixteam: **dolor reconocible en 2 frases cortas**, la segunda más
  fuerte que la primera (ver `reel-10s-operaciones`: "Tu cliente escribió con un problema." →
  "Nadie le respondió." — el hecho, luego el dolor).

### Fórmulas de gancho (elegir una, no combinar)

| Fórmula | Ejemplo | Cuándo usarla |
|---|---|---|
| Dolor reconocible | "Tu asesor no sabe que el cliente ya se quejó antes." | Default para awareness/ads |
| Cifra ancla | "37% de tus leads no reciben respuesta en 24h." | Cuando hay un dato real y duro |
| Pregunta directa | "¿Cuántos tickets se te perdieron esta semana?" | Contenido educativo/orgánico |
| Mito/creencia rota | "Más vendedores no es el problema. Es que nadie ve el historial." | Posicionamiento contra-intuitivo |
| Antes/después | Split de pantalla caos → control | Demos de producto |

No usar ganchos de humor, trends de audio, o formato "POV:" — no calzan con el posicionamiento
"operador silencioso" de la marca (ver `DESIGN.md`).

## Ritmo y retención

- **Corte cada 1.5-3s.** Ninguna escena estática dura más de 3s salvo el CTA final (que se
  sostiene sin fade-out, ver abajo).
- **Una idea por escena.** Si necesitas dos frases para explicar una escena, son dos escenas.
- **Progresión emocional, no plana**: cada guión de Sixteam sigue Problema → Problema (agrava) →
  Solución+CTA. Nunca abrir con la solución. El ejemplo canónico usa progresión de paleta
  navy→blue→teal en sincronía con esa progresión (oscuro=problema, teal=alivio) — reutilízala.
- **Curiosity gap, no cliffhanger barato.** Cerrar el gancho con una pregunta implícita que el
  Acto 2 responde ("¿por qué nadie le respondió?"), no un misterio que se resuelve fuera del video.
- Evita "throat-clearing": nombres de la empresa, agradecimientos, contexto de fondo — todo eso va
  después del gancho o no va.

## Duración objetivo

| Tipo de pieza | Duración | Caso de uso |
|---|---|---|
| Ad / generación de leads (Tipo C) | 7-10s exactos | Un dolor, una solución, un CTA — como `reel-10s-operaciones` |
| Educativo / mini-caso orgánico | 20-45s | Explicar un proceso, un caso de éxito, un "cómo lo resolvemos" |
| Testimonial / prueba social | 30-60s | Cliente real o reenactment con datos reales |

Por encima de 60s en formato reel, la retención cae fuerte — si el contenido pide más, es
newsletter o carrusel, no reel (ver `CLAUDE.md` § Formatos de salida).

## Captions y sonido

- **Texto en pantalla siempre**, animado (kinetic typography), nunca subtítulo plano estático —
  es el copy principal, no un accesibilidad add-on. Para pistas de audio con diálogo/voz en off
  real, usa el skill oficial `remotion-captions` (importar SRT o transcribir) en vez de
  hardcodear el texto por escena.
- **Música**: instrumental, sin letra (la letra compite con el texto en pantalla), 120-130 BPM
  para ganchos urgentes, sin bajar de energía hasta el CTA. No perseguir audio "trending" — Sixteam
  no vende como creador de contenido, vende como operador serio; un beat corporativo genérico y
  bien elegido es más consistente con la marca que un audio viral prestado.
- Safe zones reales de la plataforma (donde el UI de IG/TikTok tapa contenido): **top 150px,
  bottom 170px, laterales 60px** sobre canvas 1080×1920 — ya están en `theme.ts` como `safeZone`.
  Nunca poner texto o CTA fuera de esa caja seguro.

## El CTA final

- **Se sostiene, no hace fade-out.** El único elemento del video que debe quedar congelado en
  pantalla — todo lo anterior corta o funde, el CTA se queda.
- Un solo CTA por pieza (regla heredada de `DESIGN.md` § Botón/CTA pill: un solo CTA, siempre
  "agendar 20 minutos" o el dominio `sixteam.pro`, nunca los dos compitiendo).
- Si la pieza es un ad (Meta/TikTok Ads), el CTA en pantalla debe coincidir con el CTA button
  nativo de la plataforma (no prometer algo distinto al botón que ve el usuario debajo del video).

## Checklist antes de dar el guión por terminado

- [ ] Frame 0 no tiene logo ni intro — es dolor o curiosidad directa
- [ ] Gancho dura ≤2.5s y tiene un solo mensaje
- [ ] Ninguna escena intermedia dura más de 3s
- [ ] Progresión Problema → Problema → Solución, nunca al revés
- [ ] Texto en pantalla para cada línea de audio/narrativa (asume sonido apagado)
- [ ] Un solo CTA, sostenido al final sin fade-out
- [ ] Duración total calza con el tipo de pieza (7-10s ad / 20-45s educativo / 30-60s testimonial)
