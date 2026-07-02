# CONTEXTO DEL PROYECTO — Sistema Comercial Sixteam.pro
## Última actualización: 2 de julio de 2026

Este documento captura el estado real del proyecto, las decisiones tomadas y lo que falta por construir. Es el punto de entrada para cualquier persona (o agente) que retome el trabajo.

---

## 1. Qué es este proyecto

Sixteam.pro vende **operación continua de sistemas comerciales** (CRM + automatización + agentes IA) a empresas de servicios. Este repositorio contiene todo el sistema para **conseguir clientes para Sixteam**: prospección fría outbound, playbooks de venta y contenido de marketing.

**Posicionamiento:** no somos una agencia que implementa y se va — operamos el sistema mes a mes. El dato ancla: 50–70% de las implementaciones de CRM no dan resultados porque nadie se queda operándolas (Gartner/Forrester).

**Equipo:** Ernesto Hernandez (cierre y llamadas) · Samuel Burgos (sistema y contenido) · Jorge (soporte).

---

## 2. Los dos playbooks fuente y cómo se relacionan

| Documento | Origen | Rol |
|-----------|--------|-----|
| [playbook-ventas-ia.md](playbook-ventas-ia.md) | Síntesis de un video + 2 playbooks PDF ("Lead Nurture IA" y "Apertura en Llamadas IA") | La **teoría**: regla de los 5 minutos, double dial, cadencia maestra de 14 días, 4 pilares (disponibilidad, velocidad, personalización, volumen multicanal), anatomía del prompt de voz, sistema semanal de mejora |
| [docs/PLAYBOOKS-DE-VENTA-SIXTEAM.md](docs/PLAYBOOKS-DE-VENTA-SIXTEAM.md) | Playbook IA + conocimiento comercial V2 | La **práctica del equipo**: 5 playbooks (prospección 14 días, discovery 30 min, demo 20 min, propuesta, objeciones), regla [línea-1], datos citables y frases prohibidas |

De ellos se derivó el plan de implementación: [sistema-prospeccion-sixteam.md](sistema-prospeccion-sixteam.md) (v1, junio 2026) y sus specs técnicos [workflows-ghl-specs.md](workflows-ghl-specs.md).

---

## 3. Estado actual — qué está construido

### Ya creado en GHL ✅
- **19 tags** de cadencia, temperatura, vertical y mercado (IDs en el plan maestro)
- **8 custom fields** (`mercado_prospecto`, `temperatura_lead`, `toques_realizados`, `dia_cadencia`, etc.)
- **Agente de voz "Sofia — Prospeccion SixTeam"** (ID `6a4024f91a8be999b746ff5c`)
- Pipeline "Ventas" y pipeline "RADAR" existentes (IDs en workflows-ghl-specs.md)
- Usuarios, calendarios y custom values mapeados con IDs reales

### Pendiente de implementar ⏳
- Los 6 workflows (orden obligatorio: **WF-06 → WF-05 → WF-00 → WF-01 → WF-02 → WF-03 → WF-04**)
- Decisión pendiente: el plan dice crear pipeline nuevo "PROSPECCIÓN FRÍA | SixTeam" (10 etapas), pero los specs referencian el pipeline "Ventas" existente. **Hay que definir cuál es el canónico antes de montar los workflows.**
- Los 4 filtros ICP en Apollo (Travel LATAM, Servicios LATAM, Travel USA, España Turismo)
- Grabar los 2 audios de WhatsApp (D1 y D7)
- Aprobación de plantillas outbound de WhatsApp en Meta (D0, D3, D9, D14)
- Test end-to-end con 1 contacto de prueba

---

## 4. Auditoría del plan v1 contra los playbooks (julio 2026)

El plan v1 incorpora ~70% de los playbooks. **Lo que ya aplica bien:** cadencia 14 días con temperaturas HOT/WARM/COOL, regla de 5 minutos, double dial D1, breakup D14, nurture largo cada 12 días, agente Sofia con anatomía correcta del prompt de voz (revelar IA, razón ≤10 palabras, micro-compromiso, máx. 2–3 preguntas, las 5 preguntas de calificación), dashboard de métricas.

### Gaps identificados (por corregir en v2)

1. **Cadencia de inbound aplicada a leads fríos.** El plan marca prospectos fríos de Apollo como `HOT` en D0 y hace double dial en D1 — eso es receta de inbound caliente. El playbook es explícito: outbound es Fase 3 y requiere cadencias menos invasivas. Además, abrir con WhatsApp outbound sin opt-in es lo más riesgoso con Meta.
2. **Falta LinkedIn.** El playbook de venta arranca D0 con conexión LinkedIn + email frío (opciones A–D) y DM en D5. El plan solo tiene 1 email (D9) y ningún toque LinkedIn.
3. **Falta la regla [línea-1]** (primera línea verificable y específica por prospecto). Sin ella la tasa de respuesta cae ~50%.
4. **No existe el sistema de mejora continua:** batches progresivos (10–20 → 50–100 → 200–500), escuchar el 100% de grabaciones, score de calidad 1–3 por llamada, un A/B test activo por semana.
5. **Falta la capa post-respuesta:** no hay workflow de seguimiento post-propuesta (24h → 48–72h → 5d → 10d, Playbook 4).
6. **No hay capa inbound.** El sistema es 100% outbound; los leads de formulario/WhatsApp entrante no tienen flujo, y el playbook dice que inbound es donde la IA rinde más.
7. **Sin números locales por país** ni rotación (Colombia, México, USA, España).
8. **WF-06 clasifica respuestas por palabras clave** — frágil ("no me interesa el precio alto" dispararía hot-lead).

### Roadmap v2 (mejoras priorizadas por impacto)

1. **Bifurcar la cadencia por origen:** cadencia fría (email/LinkedIn primero, llamada D1–D2, WhatsApp solo tras señal) vs. cadencia inbound (llamada IA <1 min + double dial).
2. **Capa de enriquecimiento con IA antes del primer toque:** Claude genera la [línea-1] verificable por prospecto (desde LinkedIn/web) y la guarda en un custom field.
3. **WF-07 (seguimiento post-propuesta)** y **WF-08 (inbound <2 min con Sofia)**.
4. **WF-06 con clasificación de intención por IA** (GHL Conversation AI o webhook a Claude) en vez de palabras clave.
5. **Ritual semanal institucionalizado:** batches progresivos, score 1–3 por llamada, un A/B test siempre activo.
6. **Números locales por mercado** en Twilio (el límite de 50 WhatsApp/día por número ya está en el plan).
7. **Sumar los toques del playbook de venta a la cadencia fría:** LinkedIn D0 y D5, email frío D0 (no esperar al D9).

---

## 5. Convenciones del proyecto

- **Idioma:** todo en español (mensajes USA en inglés americano; España en castellano europeo con ángulo Kit Digital).
- **CTA único:** agendar 20 minutos. Nunca vender en el primer contacto.
- **Datos citables y frases prohibidas:** ver sección 7 de [docs/PLAYBOOKS-DE-VENTA-SIXTEAM.md](docs/PLAYBOOKS-DE-VENTA-SIXTEAM.md). Nunca prometer cifras sin caso propio medido.
- **Contenido social:** flujo y sistema de diseño en [CLAUDE.md](CLAUDE.md) (Navy `#0a2342`, Teal `#00bfa5`, Poppins/Lato, dark-first). Las piezas viven en `contenido-social/`.
- **Skill de conocimiento comercial:** `.claude/skills/sixteam-comercial/` — usar para pricing, ángulos de venta y manejo de objeciones.
- **Tag `stop bot` en GHL:** pausa manual de cualquier workflow.

---

*Sixteam.pro × Claude · Este documento se actualiza cada vez que cambia el estado del sistema.*
