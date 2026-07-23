---
name: sixteam-cold-email
description: >
  Redacta y extiende cold emails de prospección B2B para que Sixteam.pro consiga clientes en
  empresas de servicios (agencias, clínicas, inmobiliarias, despachos, etc.): email de Día 0,
  asuntos A/B, secuencia de seguimiento multicanal (WhatsApp/LinkedIn/email) y adaptación del
  kit existente a una vertical o mercado nuevo. Es solo redacción — no envía correos ni
  configura infraestructura de envío.
  Úsalo SIEMPRE que el usuario pida:
  - redactar un email frío / cold email para un prospecto, segmento o vertical nuevo
  - crear o extender una secuencia de seguimiento (WhatsApp, LinkedIn DM, follow-up email)
  - generar o mejorar asuntos A/B para una campaña de outreach
  - adaptar el kit de outreach de Sixteam a una industria o mercado que aún no tiene plantilla
  - revisar si un cold email cumple las reglas de voz y entregabilidad de Sixteam antes de enviarlo
  NO cubre: envío real, dominios, warmup, Apollo/CRM (ver `marketing/outreach/06-PLAN-APOLLO.md`)
  ni pricing/ángulos/objeciones de la empresa (ver skill `sixteam-comercial` para eso).
  Activa cuando diga: "email frío", "cold email", "correo de prospección", "outreach B2B",
  "secuencia de seguimiento", "follow-up de ventas", "asunto A/B", "nueva vertical de outreach",
  "cold email en inglés".
---

# Sixteam.pro — Redacción de Cold Email B2B

> Este skill se especializa en **cómo** convertir una oferta de Sixteam en un email frío que
> genera respuestas. Para **qué** vender (pricing, ángulos, objeciones, verticales) usa primero
> el skill `sixteam-comercial` — aquí no se repite ese contenido, solo se referencia.

---

## 1. Alcance

**Sí hace:**
- Cuerpo del email frío (Día 0), 2 asuntos A/B y preheader
- Secuencia de seguimiento multicanal (WhatsApp → LinkedIn → email de cálculo → breakup)
- Adaptar el kit a una vertical, segmento o mercado que todavía no tiene plantilla
- Checklist de calidad y entregabilidad antes de marcar el copy como listo para enviar

**No hace** (son otra capa, ya documentada aparte):
- Enviar el correo o configurar Apollo, dominios, DNS, warmup → `marketing/outreach/06-PLAN-APOLLO.md`
- Definir pricing, ángulos de venta u objeciones → skill `sixteam-comercial`
- Construir listas de prospectos o el ICP → Fase 1–2 de `06-PLAN-APOLLO.md`

---

## 2. Fuente de verdad — leer antes de escribir

| Archivo | Para qué |
|---|---|
| `marketing/outreach/00-GUIA-CADENCIA-Y-VARIABLES.md` | Variables `[tokens]`, cadencia de 14 días, reglas de envío, A/B testing |
| `marketing/outreach/01-emails-frios-colombia.md` | Plantillas ES vigentes (agencias, pequeñas, medianas) — mira el formato antes de crear una nueva |
| `marketing/outreach/02-cold-emails-usa.md` | Mismas plantillas en inglés para USA |
| `marketing/outreach/03-seguimientos-multicanal.md` | Estructura de la secuencia de seguimiento (Día 3/5/7/14) |
| `marketing/outreach/04-pitch-llamada-fria.md` | Script de llamada — úsalo si el usuario también pide guion de voz |
| `marketing/estrategia/angulos-de-venta-v2.md` | Los ángulos de venta con copy listo |
| `.claude/skills/sixteam-comercial/SKILL.md` §5, §7, §9, §10, §13, §16 | Ángulos, verticales, objeciones, frases prohibidas, datos citables, reglas de voz |

---

## 3. Anatomía de un cold email B2B de servicios que funciona

1. **Asunto** — 2 variantes (A/B), menos de 60 caracteres, pregunta directa o intriga concreta. Nunca clickbait ni mayúsculas/símbolos de spam (`$`, `!!!`, `GRATIS`).
2. **Preheader** — 1 línea que refuerza el asunto sin repetirlo.
3. **`[línea-1]`** — línea personalizada y **verificable** sobre el prospecto/empresa específica. Sin ella la tasa de respuesta cae a la mitad (ver `00-GUIA` punto 4). Si no hay un dato real para esa línea, dilo explícitamente en vez de inventar uno genérico.
4. **Cuerpo** (100–150 palabras):
   - Espejo del dolor (1–2 líneas, específico al segmento/vertical)
   - Por qué pasa (sin culpar al prospecto)
   - Qué hace Sixteam en 1–2 frases, sin sobre-vender
   - Dato citable opcional (solo de la lista con fuente, sección 5 abajo)
   - Un solo CTA: agendar 20 minutos
5. **Firma** — nombre, cargo, Sixteam.pro, teléfono/LinkedIn.
6. Texto plano siempre. Sin imágenes, sin logos, sin HTML pesado.

---

## 4. Workflow — escribir un cold email para un prospecto o vertical nuevo

1. **Mercado e idioma**: Colombia/Latam → español (como `01`); USA → inglés (como `02`).
2. **¿Ya existe plantilla similar?** Revisa `01`/`02` por tamaño de empresa (agencia/pequeña/mediana). Si el segmento ya existe, adapta esa plantilla en vez de escribir desde cero.
3. **Vertical nueva (no cubierta en `sixteam-comercial` §7)**: define primero la promesa vertical con el mismo patrón que las existentes — *"Operamos el sistema comercial de tu [vertical] — [3–4 puntos de dolor]. No te dejamos solo."*
4. **Elige un ángulo de venta** (`sixteam-comercial` §5) que calce con el dolor de esa vertical/segmento.
5. **Escribe la `[línea-1]`** — pide al usuario el dato real si no lo tienes; no lo inventes.
6. **Redacta 2 asuntos + preheader + cuerpo** siguiendo la Sección 3 de este skill.
7. **Aplica las reglas de voz** de `sixteam-comercial` §16 y evita las frases prohibidas de §10.
8. **Dato citable**: usa solo los de `sixteam-comercial` §13 con fuente. El claim propio ("30–35% en 90 días") solo se usa enmarcado como meta, nunca como resultado garantizado.
9. **¿Piden la secuencia completa?** Genera también los seguimientos Día 3 (WhatsApp), Día 5 (LinkedIn DM), Día 7 (email "el cálculo que duele") y Día 14 (breakup), con la misma estructura de `03-seguimientos-multicanal.md` — mismo hilo, mismo CTA, sin plantilla nueva para el toque de valor del Día 10 (es contenido orgánico real, no template).
10. **Guarda o entrega** según la Sección 6 de abajo.

---

## 5. Reglas de entregabilidad (no negociables)

```
✅ Martes–jueves, 7:30–9:00 a.m. o 4:00–5:30 p.m., hora local del mercado
✅ Un solo CTA por pieza: agendar 20 minutos
✅ Texto plano — nunca imágenes ni firmas con logo
✅ Follow-ups en el mismo hilo ("responder", no abrir hilo nuevo)
✅ Detener la secuencia al primer "no me interesa" y pedir referido
❌ Nunca mencionar la tecnología base de la plataforma — es "nuestro CRM" / "la plataforma de Sixteam.pro"
❌ Nunca prometer cifras de resultado sin fuente (ver §13 de sixteam-comercial)
```

Si el envío es masivo real (no un email 1:1), agrega footer de exclusión: Habeas Data (Colombia, Ley 1581) o CAN-SPAM (USA) — ver Fase 8 de `06-PLAN-APOLLO.md`.

---

## 6. Dónde guardar lo que generes

| Caso | Acción |
|---|---|
| Nuevo segmento/vertical en un mercado ya existente | Añade una sección `## 📧 EMAIL N` al final de `01-emails-frios-colombia.md` (CO) o `02-cold-emails-usa.md` (USA), con el mismo formato: Ángulo/Objetivo, Asunto A/B, Preheader, cuerpo |
| Secuencia de seguimiento para ese segmento nuevo | Añade al final de `03-seguimientos-multicanal.md` con la misma estructura Día 3/5/7/14 |
| Email personalizado para un prospecto puntual (no reusable) | Entrégalo directo en la respuesta — no se guarda en el kit |
| Mercado/idioma totalmente nuevo (ej. Brasil, portugués) | Propón al usuario un archivo nuevo numerado (`07-...`) antes de crearlo |

---

## 7. Checklist antes de entregar un email como listo

- [ ] `[línea-1]` específica y verificable, no genérica
- [ ] Un solo CTA ("agendar 20 minutos")
- [ ] Sin `[corchetes]` sin reemplazar si es para un prospecto real
- [ ] Sin frases prohibidas (`sixteam-comercial` §10)
- [ ] Dato citado tiene fuente, o está marcado como meta/objetivo
- [ ] Texto plano, sin imágenes ni logos
- [ ] Firma completa (nombre, cargo, Sixteam.pro, contacto)
- [ ] Idioma correcto para el mercado (ES Colombia / EN USA)
- [ ] Si es follow-up: mismo hilo, no uno nuevo
- [ ] Footer de opt-out si es envío masivo real
