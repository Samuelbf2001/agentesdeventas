---
name: sixteam-video-director
description: >
  Dirige la producción de reels/videos verticales de Sixteam.pro de punta a punta: convierte un
  ángulo de venta en guión + storyboard frame-accurate, y ese storyboard en una composición
  Remotion real dentro del proyecto compartido de contenido-social/videos/remotion, aplicando el
  sistema de diseño (DESIGN.md), estructura de hook viral para Reels/TikTok, y motion graphics de
  marca. Es la capa de criterio editorial y de marca — para la mecánica pura de Remotion (API,
  transiciones, captions, audio, render) delega en los skills oficiales remotion-* ya instalados en
  contenido-social/videos/remotion/.claude/skills/.
  Úsalo SIEMPRE que el usuario pida:
  - crear un reel, video corto, story animada o pieza de video para Sixteam.pro
  - convertir un ángulo de venta o pieza de carrusel en guión/storyboard de video
  - construir, editar o depurar una composición Remotion de contenido-social/videos/remotion
  - hacer más "viral", más dinámica o con mejor ritmo una pieza de video existente
  - renderizar un reel a mp4/PNG sequence
  Activa cuando diga: "reel", "video para Instagram/TikTok", "storyboard", "guión de video",
  "composición Remotion", "motion graphics", "video viral", "renderizar el video".
---

# Sixteam Video Director

Diriges la producción de video corto vertical (Reels, TikTok, YouTube Shorts) para Sixteam.pro.
Cubres dos capas que ningún otro skill cubre juntas:

1. **Criterio editorial de video viral** — qué hace que alguien no scrollee en el primer segundo.
2. **Ejecución de marca en Remotion** — cómo ese guión se convierte en código fiel a `DESIGN.md`.

Todo lo puramente técnico de Remotion (props de `<Sequence>`, cómo hacer un `<TransitionSeries>`,
captions, audio, fuentes, exportar transparente, etc.) **no vive aquí** — vive en los 10 skills
oficiales que el equipo de Remotion mantiene, ya instalados en este proyecto. Este skill los cita,
no los duplica.

---

## STEP 0 — Carga previa obligatoria (si aún no está cargada)

Antes de escribir una sola línea de composición, sigue el orden que ya exige `CLAUDE.md`:

1. `impeccable` — lee `PRODUCT.md` y `DESIGN.md`, autoridad de marca y proceso.
2. `frontend-design` — dirección estética deliberada para esta pieza.
3. `ui-typography` — reglas tipográficas finas.
4. `graphic-resources` — tipografía/íconos/fondos/composición.
5. `design-motion-principles` — filosofía de motion (frequency gate, "la mejor animación es la que
   no se nota", duraciones) — se aplica también a video, no solo a UI web.

Luego este skill (`sixteam-video-director`) para la parte de guión + storyboard + Remotion.

## STEP 1 — Detectar en qué punto del flujo entra el pedido

| Señal en el pedido | Entra en |
|---|---|
| "hazme un reel sobre X", solo hay un ángulo de venta | Guión + storyboard → [references/estructura-viral.md](references/estructura-viral.md) |
| Ya existe `script.md`/`storyboard.md` en `contenido-social/videos/<nombre>/` | Construcción Remotion → [references/produccion-remotion.md](references/produccion-remotion.md) |
| Ya existe la composición, pide "hazlo más viral/dinámico" | Auditoría con [references/estructura-viral.md](references/estructura-viral.md), luego ajustar código |
| Pide renderizar / exportar | [references/produccion-remotion.md](references/produccion-remotion.md) § Render |

## STEP 2 — Guión y storyboard (si no existen)

Carpeta: `contenido-social/videos/<slug-del-reel>/script.md` + `storyboard.md` (ver
`contenido-social/videos/reel-10s-operaciones/` como referencia canónica del formato: actos con
timestamps en segundos Y frames, ficha por escena con texto/animaciones de entrada/salida/paleta).

Reglas de estructura viral obligatorias antes de escribir el guión: lee
[references/estructura-viral.md](references/estructura-viral.md). El resumen no reemplaza la
lectura completa, pero como recordatorio: el gancho vive en los primeros 1.5-2.5s, sin logo, sin
intro — el dolor o la curiosidad primero, la marca al final.

## STEP 3 — De storyboard a composición Remotion

Proyecto compartido (uno solo, no un proyecto por reel): `contenido-social/videos/remotion/`. Cada
reel es una composición nueva registrada en `src/Root.tsx`, con sus escenas en
`src/compositions/<NombreReel>/`. El tema de marca (colores, gradientes, fuentes, safe zones) ya
vive en `src/theme.ts` — impórtalo, no redefinas hex codes sueltos en cada escena.

Antes de escribir código, lee [references/produccion-remotion.md](references/produccion-remotion.md)
completo — documenta un problema real de escala tipográfica (storyboards a veces traen tamaños de
mockup 400px en vez de canvas real 1080px) y un problema real de render en Windows (crash del
compositor nativo con Windows Defender activo) que ya se depuraron una vez; no los redescubras.

Para la mecánica de Remotion en sí (cómo se anima algo, cómo se hace una transición, cómo se
importan captions, audio, fuentes) usa los skills oficiales ya instalados en
`contenido-social/videos/remotion/.claude/skills/`:

| Necesitas... | Skill oficial |
|---|---|
| Estructurar compositions, layout, Tailwind opcional | `remotion-create` |
| Sequencing, transiciones, texto animado, audio, SFX, mapas, 3D, GIFs, timing | `remotion-markup` |
| Captions/subtítulos (importar SRT, transcribir, mostrar) | `remotion-captions` |
| Interactividad (Player embebido, controles) | `remotion-interactivity` |
| Renderizar, video transparente | `remotion-render` |
| Patrones generales / mejores prácticas / qué skill usar | `remotion-best-practices` |
| Buscar en la documentación oficial de Remotion | `remotion-docs` |
| Actualizar versión de Remotion | `remotion-upgrade` |
| Leer duración/dimensiones de audio o video (mediabunny) | `mediabunny` |

## STEP 4 — Motion graphics de marca

No reinventes efectos genéricos — los recipes técnicos (kinetic typography, highlights, light
leaks, audio-visualization) están en `remotion-markup`. Lo que aporta este skill es *cómo se ven en
Sixteam*: sigue [references/produccion-remotion.md](references/produccion-remotion.md) § Motion de
marca para spring configs, timings y el vocabulario visual (dot-grid, badge pulsante, cards con
"efecto vacío") ya validados en `Reel10sOperaciones`.

## STEP 5 — Guardar y renderizar

- Guión/storyboard: `contenido-social/videos/<slug>/script.md` + `storyboard.md`.
- Código: `contenido-social/videos/remotion/src/compositions/<NombreReel>/`.
- Render final: sigue [references/produccion-remotion.md](references/produccion-remotion.md) § Render
  — incluye el fallback si el render directo a mp4 falla por interferencia de antivirus.

## Reference Index

| Archivo | Contenido | Cargar cuando |
|---|---|---|
| [Estructura Viral](references/estructura-viral.md) | Hooks, ritmo/retención, specs por plataforma, captions quemados, sonido | Escribiendo o auditando guión/storyboard |
| [Producción Remotion](references/produccion-remotion.md) | Estructura del proyecto, theme.ts, gotcha de escala tipográfica, motion de marca, render y su fallback | Escribiendo o depurando la composición Remotion |
