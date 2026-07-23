# Producción Remotion — Ejecución de Marca

Proyecto real en `contenido-social/videos/remotion/` (Remotion 4.0.496, instalado sin Tailwind —
este repo no lo usa en ningún otro formato, se mantiene consistencia con CSS-in-JS vía `style={}`
igual que las piezas HTML del resto de `contenido-social/`).

## Estructura del proyecto

```
contenido-social/videos/remotion/
├── src/
│   ├── theme.ts              ← única fuente de colores/gradientes/fuentes — importar, no hardcodear
│   ├── Root.tsx               ← registro de todas las composiciones (una por reel)
│   ├── index.ts                ← registerRoot, no tocar salvo cambios estructurales
│   ├── components/             ← piezas reutilizables entre reels (p. ej. DotGrid)
│   └── compositions/
│       └── <NombreReel>/
│           ├── index.tsx        ← ensambla las escenas con <Sequence>
│           ├── Scene1...tsx
│           └── Scene2...tsx
├── public/                    ← assets estáticos (logo, etc.) — referenciar con staticFile()
└── .claude/skills/             ← los 10 skills oficiales remotion-* (no tocar, se actualizan con
                                   `npx remotion skills update`)
```

Un solo proyecto Remotion para todos los reels, no uno por video — comparte `theme.ts`,
`components/`, fuentes ya cargadas y config. Cada reel nuevo es una carpeta más en
`src/compositions/` y una línea más en `Root.tsx`.

## theme.ts

Espeja 1:1 los tokens de `/DESIGN.md` (colores, gradientes, `safeZone`) y expone `fontFamily.poppins`
/ `fontFamily.lato` ya cargados vía `@remotion/google-fonts`. Si `DESIGN.md` cambia un hex o se
agrega un token, actualiza `theme.ts` en el mismo cambio — es una copia manual, no generada.

**Gotcha de pesos de fuente:** Google Fonts no sirve todos los pesos para todas las familias. Lato
solo tiene `100/300/400/700/900` — pedir `500` (aunque `DESIGN.md` mencione "peso 400–500" para
body) revienta el build de TypeScript. Usa `400` o `700`, nunca `500`, para Lato en Remotion.

## El gotcha de escala tipográfica (ya nos pasó una vez)

Los storyboards de `contenido-social/videos/<reel>/storyboard.md` a veces se escriben con tamaños
de fuente pensados para el mockup de 400px (el mismo hábito mental que se usa para carruseles —
ver `DESIGN.md`), **no** para el canvas real de exportación 1080×1920. Si el storyboard dice
"Poppins 800 42px" para un headline de gancho y lo pones literal en una `<Composition>` de
1080px de ancho, el texto sale diminuto — débil, no el hook grande y contundente que un reel
necesita para no perder el scroll en el segundo 1.

`DESIGN.md` ya documenta la solución para piezas estáticas autoradas directo a 1080px (factor
≈2.7× sobre los tokens de 400px) — la misma regla aplica a video. Antes de codear una escena:

1. ¿El storyboard da tamaños que rondan el rango 12-52px? Son valores de mockup — multiplica por
   ~2.7 y redondea a un número limpio.
2. ¿El storyboard da paddings/safe-zones ya en rango 60-170px? Esos normalmente **ya** están en
   escala real (así se escribieron las notas de producción del ejemplo canónico) — no los toques.
3. Conserva la jerarquía relativa del storyboard (qué texto es más grande que cuál), no inventes
   proporciones nuevas.

Ejemplo real de `Reel10sOperaciones` (antes/después de aplicar la corrección):

| Elemento | Storyboard (mockup) | Canvas real (aplicado) |
|---|---|---|
| Subtítulo teal del gancho | 52px | 140px |
| Headline del gancho | 42px | 114px |
| Headline de escena intermedia | 32px | 88px |
| Headline CTA final | 44px | 120px |
| Badge CTA | 20px | 54px |
| Logo | 120×40px | 324×108px |

Si algún día un storyboard ya viene escrito pensando en 1080px real (lo dice explícito o los
tamaños ya rondan 80-140px), no reapliques el factor — solo pasó una vez porque el storyboard de
`reel-10s-operaciones` mezclaba hábito de mockup con notas de producción ya en escala real.

## Motion de marca

Sigue `design-motion-principles` para la filosofía (frequency gate, duraciones, "la mejor
animación es la que no se nota"). Lo específico de Sixteam, validado en `Reel10sOperaciones`:

- **Entradas de texto:** `interpolate` con `Easing.out(Easing.exp)`, opacidad + slide-up 15-20px,
  18-20 frames de duración a 30fps (~0.6-0.7s). No usar `spring` para texto plano — se ve rebotón
  para algo que debe leerse rápido.
- **Entradas de cards/contenedores:** `spring({stiffness: 120})` — el rebote sutil de un `spring`
  sí funciona para elementos con peso visual (cards, badges), a diferencia del texto.
- **Logo / momento hero:** `spring({stiffness: 180})` — más rígido/rápido, es un solo elemento
  central, puede permitirse más presencia que una card.
- **Badge CTA con pulso infinito:** no uses `loop()` de una librería externa — un `Math.sin(frame /
  N)` mapeado a escala (±3-4%) y opacidad de `box-shadow` (glow) ya da el efecto "pulsante" que
  pide `DESIGN.md`, sin dependencias nuevas. Empieza el pulso solo después de que termine la
  animación de entrada del badge, nunca simultáneo.
- **Textura decorativa (`DotGrid`):** `opacity` 0.06-0.08, radial-gradient de puntos teal. Úsala
  solo detrás de escenas de gancho o CTA (fondos planos, poco contenido) — nunca detrás de una
  card o de avatares, compite con elementos que ya tienen su propio peso visual (rompe la regla de
  "una sola cosa que el ojo debe hacer primero" de `DESIGN.md`).
- **Cortes entre escenas:** `<Sequence>` adyacentes sin overlap ya son un corte directo — no hace
  falta nada más para "corte directo". Para una transición con fundido, cruza opacidad manualmente
  en los últimos/primeros frames de cada escena (como hace `Scene2CrmVacio`/`Scene4Cta`) o usa
  `<TransitionSeries>` del skill oficial `remotion-markup` si la transición es más compleja que un
  fundido simple.

## Agregar un reel nuevo

1. Guión + storyboard en `contenido-social/videos/<slug>/` (ver estructura-viral.md antes de
   escribir el guión).
2. `src/compositions/<NombreReel>/Scene1...tsx` … una escena por acto del storyboard, cada una
   `useCurrentFrame()` local (0 = inicio de esa escena, gracias a `<Sequence>`).
3. `src/compositions/<NombreReel>/index.tsx` — ensambla con `<Sequence from={} durationInFrames={}>`
   en el orden y frames exactos del storyboard.
4. Registrar en `src/Root.tsx` con `id`, `durationInFrames`, `fps`, `width`/`height` (1080×1920
   para reel vertical).
5. Previsualizar: `npm run dev` (abre Remotion Studio) dentro de `contenido-social/videos/remotion/`.
6. Render — ver siguiente sección.

## Render

```bash
cd contenido-social/videos/remotion
npx remotion still <CompositionId> out/frame.png --frame=<n>      # 1 frame, para revisar diseño
npx remotion render <CompositionId> out/<nombre>.mp4               # video final
```

**Gotcha de render en Windows con Defender activo:** el render directo a mp4 spawea un binario
nativo (`@remotion/compositor-win32-x64-msvc`) que mantiene un pipe abierto con ffmpeg durante todo
el render. Con Windows Defender (protección en tiempo real) activo, ese binario recién descargado
puede morir a mitad de render de forma no determinística — el síntoma es `Compositor exited with
code <número enorme>` seguido de `Error: write EPIPE` que tumba el proceso completo, en un frame
distinto cada vez que se reintenta. No es un bug de la composición: un `remotion still` o un render
con `--sequence` (PNG por frame, sin pipe continuo a ffmpeg) del mismo composition en el mismo
frame problemático funciona siempre.

Si el render a mp4 falla así:

1. Confirma que no es la composición: `npx remotion render <Id> out/frames --sequence` — si esto
   termina los 100% de los frames sin crashear, es el pipe nativo, no el código.
2. Fix real (requiere que el usuario lo autorice — toca configuración de seguridad del sistema, no
   ejecutar sin confirmar): excluir la carpeta del proyecto (o al menos
   `node_modules/@remotion/compositor-win32-x64-msvc`) de Windows Defender:
   `Add-MpPreference -ExclusionPath "<ruta>\contenido-social\videos\remotion"` en PowerShell como
   administrador.
3. Sin esa exclusión, el fallback que sí es 100% confiable: renderizar `--sequence` (PNG por
   frame) y avisar al usuario que el mp4 final requiere un mux aparte (ffmpeg) o la exclusión de
   Defender — no instalar un ffmpeg propio en el proyecto solo para rodear un problema de entorno
   local; es una solución de una sola vez, no una dependencia permanente del proyecto.
