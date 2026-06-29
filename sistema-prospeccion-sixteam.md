# SISTEMA DE PROSPECCIÓN FRÍA — SixTeam.pro
## Borrador v1 | Junio 2026

---

## RESUMEN EJECUTIVO

Sistema de prospección multicanal de 14 días basado en el playbook de velocidad y contactabilidad. El principio central: **el lead no se enfría, lo abandonás vos.** Un lead contactado en los primeros 5 minutos tiene 12× más probabilidades de calificar que uno contactado en 1 hora.

**Stack:** GoHighLevel (CRM + secuencias) · Apollo (sourcing) · Claude (copy IA) · WhatsApp Business · Llamadas Twilio

**Verticales objetivo:** Travel / Agencias de viaje · Servicios con cita · Inmobiliaria  
**Mercados:** LATAM (Colombia, México, Argentina, Chile) · USA · España

---

## LO QUE YA ESTÁ CREADO EN GHL

### Tags creados ✅
| Tag | ID | Uso |
|-----|-----|-----|
| `prospecto-frio` | INOftCXCWqNBoZpGUXxc | Lead de outbound frío — trigger de entrada |
| `cadencia-activa` | v7GE8ApYQ5s8buCycV5L | En secuencia de 14 días activa |
| `cadencia-pausada` | zHlfJKJSGz2jLDlprodi | Respondió, cadencia en pausa |
| `cadencia-completada` | LzZ8NU59A7FkJRnuD489 | Completó los 14 días sin responder |
| `nurture-largo` | QRF4bZgbHEkeD4vknkyD | En nurture D14+ (cada 12 días) |
| `hot-lead` | 1NeOG9OlHKr5yPyDKVka | Respondió positivamente — handoff urgente |
| `warm-lead` | kJzJEyCunHYoBfeb3Cyn | Interés moderado |
| `cool-lead` | 4d4ICsCVUgVk35tRtCcs | Sin señales claras |
| `vertical-travel` | 1C1ozFuAi9EDoHDdNfYq | Sector agencias de viaje |
| `vertical-servicios` | ysbbYDdfDI0sSii3Luvr | Servicios con cita |
| `vertical-inmobiliaria` | B0ikK5OJ7jpNsVlYq69i | Sector inmobiliario |
| `mercado-latam` | 8EnZ6OGNrr0WKyhNQCK4 | LATAM |
| `mercado-usa` | 23bUa1foTHw8E4KLSLyh | USA |
| `mercado-espana` | DYedXuakveWMKhnv6m9o | España |
| `respondio` | XmBxVus3QIEaMcdEKKtU | Respondió al outreach |
| `no-responde` | U7UjENER2dLXExb6aDhU | Sin respuesta tras D14 |
| `reunion-agendada` | RNAgLtbqWLwfY1LUBa6r | Discovery agendada |
| `handoff-humano` | GGWJmtZoPKoie2epbZZ9 | Requiere atención humana urgente |

### Custom Fields creados ✅
| Campo | Field Key | Tipo | Opciones |
|-------|-----------|------|----------|
| Mercado Prospecto | `contact.mercado_prospecto` | SINGLE_OPTIONS | LATAM / USA / Espana |
| Vertical Prospecto | `contact.vertical_prospecto` | TEXT | libre |
| Fuente Prospecto | `contact.fuente_prospecto` | SINGLE_OPTIONS | Apollo-Cold / LinkedIn / Referido / Meta Ads / Web Form / WhatsApp Inbound / Otro |
| Temperatura Lead | `contact.temperatura_lead` | SINGLE_OPTIONS | HOT / WARM / COOL / DEAD |
| Toques Realizados | `contact.toques_realizados` | NUMERICAL | contador |
| Dia Cadencia | `contact.dia_cadencia` | SINGLE_OPTIONS | D0-D14 / Nurture Largo |
| Razon No Cierre | `contact.razon_no_cierre` | SINGLE_OPTIONS | 7 opciones |
| Inicio Cadencia | `contact.inicio_cadencia` | DATE | fecha de inicio |

---

## PIPELINE A CREAR MANUALMENTE EN GHL UI

**Nombre:** `PROSPECCIÓN FRÍA | SixTeam`

En GHL → Oportunidades → Pipelines → + Nuevo Pipeline

| # | Etapa | Color | Propósito |
|---|-------|-------|-----------|
| 0 | 🆕 Nuevo Prospecto | Gris | Entra por Apollo/LinkedIn |
| 1 | 📞 En Cadencia HOT (D0-D2) | Rojo | Primeros 3 días |
| 2 | 🔥 En Cadencia WARM (D3-D7) | Naranja | Días 3-7 |
| 3 | ❄️ En Cadencia COOL (D9-D14) | Azul | Días 9-14 |
| 4 | 💬 Respondió - Calificando | Amarillo | Respondió, en discovery |
| 5 | 📅 Discovery Agendada | Verde claro | Reunión programada |
| 6 | 📄 Propuesta Enviada | Púrpura | Propuesta en revisión |
| 7 | ✅ Cerrado Ganado | Verde | Contrato firmado |
| 8 | ❌ Cerrado Perdido | Rojo oscuro | No avanzó |
| 9 | 🌱 Nurture Largo (D14+) | Gris azulado | Contacto cada 12 días |

---

## ESTRATEGIA DE VENTAS

### El ICP (Cliente Ideal)

**Travel / Agencias de viaje:**
- Empleados: 3–40 personas
- Maneja leads por WhatsApp/Instagram/Facebook
- Tiene CRM (HubSpot, Pipedrive) o quiere uno
- Hace 1–2 seguimientos por lead y los abandona
- Dolor: leads que se pierden, reservas que no se cierran por falta de seguimiento

**Servicios con cita (clínicas, consultorios, legales, estética):**
- Empleados: 3–20 personas
- Recibe citas por WhatsApp o formulario
- Alto no-show rate (25–40%)
- Dolor: citas no confirmadas, pacientes/clientes que no regresan, sin base de datos organizada

**Inmobiliaria:**
- Agentes: 2–15 personas
- Leads de Meta/portales inmobiliarios
- Tiempo de respuesta >2 horas (pierden el lead)
- Dolor: leads costosos que se pierden, sin seguimiento post-visita

### El Pitch de 30 Palabras (por vertical)

**Travel:**
> "Operamos el seguimiento de leads de tu agencia con IA y automatización para que no pierdas ninguna reserva por falta de contacto."

**Servicios:**
> "Automatizamos la confirmación de citas y el re-agendamiento para que tu equipo pase menos tiempo en el teléfono y más tiempo atendiendo."

**Inmobiliaria:**
> "Respondemos tus leads de Meta y portales en menos de 2 minutos con IA para que nunca pierdas una oportunidad por velocidad de respuesta."

### Las 5 Preguntas de Calificación (en orden)

1. **Situación:** "¿Cómo están manejando sus leads y seguimiento ahora mismo?"
2. **Problema:** "¿Cuál es el mayor desafío con ese proceso?"
3. **Consecuencia:** "¿Qué pasa con los leads que no logran contactar a tiempo?"
4. **Urgencia:** "¿Quieren resolverlo ahora o están explorando opciones?"
5. **Autoridad:** "¿Sos vos quien toma este tipo de decisiones?"

---

## FLUJO DE APOLLO A GHL

### Filtros Apollo a configurar

**ICP-Travel-LATAM:**
- Industry: Travel Agencies, Tourism, Hospitality
- Employees: 3–50
- Location: Colombia, México, Argentina, Chile, Perú
- Title: CEO, Owner, Director, Gerente Comercial, Gerente General

**ICP-Servicios-LATAM:**
- Industry: Healthcare, Medical Practice, Legal Services, Beauty & Wellness, Dental
- Employees: 3–30
- Location: Colombia, México, Argentina, Chile
- Title: CEO, Owner, Director, Gerente

**ICP-Travel-USA:**
- Industry: Travel Management, Tourism, Hospitality
- Employees: 5–50
- Location: United States (Florida, Texas, California, New York)
- Title: CEO, Owner, VP Sales, General Manager

**ICP-España-Turismo:**
- Industry: Tourism, Travel, Hospitality
- Employees: 3–50
- Location: España
- Title: CEO, Director, Propietario, Gerente

### Proceso de importación semanal
1. Apollo → exportar 50 contactos del filtro activo → CSV
2. GHL → Contactos → Importar → mapear campos:
   - Nombre → First Name
   - Empresa → Company Name
   - Email → Email
   - Teléfono → Phone
   - Título → contact.cargo
   - Industria → contact.sector
3. Asignar automáticamente:
   - Tag: `prospecto-frio` + `vertical-XXX` + `mercado-XXX`
   - Campo: `contact.fuente_prospecto` = "Apollo - Cold"
4. El tag `prospecto-frio` **dispara automáticamente el WF-00**

---

## LOS 6 WORKFLOWS — ESPECIFICACIONES COMPLETAS

### WF-00: ENTRADA DE PROSPECTO FRÍO
**Trigger:** Tag `prospecto-frio` añadido  
**Propósito:** Setup inicial y disparo de la cadencia  

```
ACCIONES:
1. Crear Oportunidad en pipeline "PROSPECCIÓN FRÍA" → etapa "Nuevo Prospecto"
2. Set custom field: contact.temperatura_lead = HOT
3. Set custom field: contact.dia_cadencia = D0
4. Set custom field: contact.toques_realizados = 0
5. Set custom field: contact.inicio_cadencia = {{now}}
6. Add tag: cadencia-activa
7. Wait: 0 min
8. → Enrollar en WF-01-CADENCIA-D0-HOT
```

---

### WF-01: CADENCIA D0-D2 HOT
**Trigger:** Enrollado desde WF-00  
**Condición de salida:** Tag `respondio` o `cadencia-pausada` añadido  

```
━━━━ DÍA 0 ━━━━

ACCIÓN 1: Crear Tarea para Ernesto
  Tipo: Llamada
  Asunto: "🔴 HOT D0 — Llamar a {{contact.first_name}} de {{contact.company_name}}"
  Descripción: "Primer contacto. Tiene el pain: {{contact.dolor_principal}}.
                Sector: {{contact.vertical_prospecto}} | Fuente: {{contact.fuente_prospecto}}"
  Duración: 5 minutos
  Fecha vencimiento: Inmediata

[IF no tiene número de teléfono → saltar al paso de WhatsApp]

ACCIÓN 2: Wait 5 minutos

ACCIÓN 3: Verificar si tag "respondio" existe → SI → FIN de workflow
                                               → NO → continuar

ACCIÓN 4: Enviar WhatsApp — Mensaje D0
  [VER MENSAJES SECTION ABAJO]

ACCIÓN 5: Incrementar counter contact.toques_realizados + 1
ACCIÓN 6: Update contact.dia_cadencia = D1

━━━━ DÍA 1 ━━━━

ACCIÓN 7: Wait hasta próximo día → 9:00 AM hora local del contacto

ACCIÓN 8: Verificar tag "respondio" → SI → FIN
                                    → NO → continuar

ACCIÓN 9: Crear Tarea — Llamada D1 mañana
  Asunto: "📞 D1 Mañana — Double-dial {{contact.first_name}}"
  
ACCIÓN 10: Wait hasta 5:00 PM

ACCIÓN 11: Verificar tag "respondio" → SI → FIN

ACCIÓN 12: Crear Tarea — Llamada D1 tarde
  Asunto: "📞 D1 Tarde — Segunda llamada {{contact.first_name}}"

ACCIÓN 13: Enviar WhatsApp — Mensaje D1 (audio 35s — usar el script abajo)
ACCIÓN 14: Incrementar contact.toques_realizados + 1

━━━━ DÍA 2 ━━━━

ACCIÓN 15: Wait until próximo día → 11:00 AM

ACCIÓN 16: Verificar tag "respondio" → SI → FIN

ACCIÓN 17: Crear Tarea — Llamada D2
  Asunto: "📞 D2 — Caso estudio {{contact.first_name}} — horario distinto"

ACCIÓN 18: Enviar WhatsApp — Mensaje D2 (caso de estudio)
ACCIÓN 19: Incrementar contact.toques_realizados + 1
ACCIÓN 20: Update contact.temperatura_lead = WARM
ACCIÓN 21: Update contact.dia_cadencia = D3
ACCIÓN 22: Move Opportunity → etapa "En Cadencia WARM (D3-D7)"
ACCIÓN 23: → Enrollar en WF-02-CADENCIA-D3-D7-WARM
ACCIÓN 24: FIN WF-01
```

---

### WF-02: CADENCIA D3-D7 WARM
**Trigger:** Enrollado desde WF-01  
**Condición de salida:** Tag `respondio` o `cadencia-pausada`  

```
━━━━ DÍA 3 ━━━━

ACCIÓN 1: Wait 1 día desde enrollamiento

ACCIÓN 2: Verificar tag "respondio" → SI → FIN

ACCIÓN 3: Crear Tarea — Llamada D3
  Asunto: "🟡 D3 — Llamada de valor {{contact.first_name}}"

ACCIÓN 4: Enviar WhatsApp — Mensaje D3 (pregunta de valor)
ACCIÓN 5: Incrementar contact.toques_realizados + 1
ACCIÓN 6: Update contact.dia_cadencia = D5

━━━━ DÍA 5 ━━━━

ACCIÓN 7: Wait 2 días → 3:00 PM

ACCIÓN 8: Verificar tag "respondio" → SI → FIN

ACCIÓN 9: Crear Tarea — Llamada D5
  Asunto: "🟡 D5 — Llamada tarde {{contact.first_name}}"

ACCIÓN 10: Enviar WhatsApp — Mensaje D5 (contenido/dato industria)
ACCIÓN 11: Incrementar contact.toques_realizados + 1
ACCIÓN 12: Update contact.dia_cadencia = D7

━━━━ DÍA 7 ━━━━

ACCIÓN 13: Wait 2 días → 10:00 AM

ACCIÓN 14: Verificar tag "respondio" → SI → FIN

ACCIÓN 15: Crear Tarea — Llamada D7 (único intento)
  Asunto: "🟡 D7 — Último intento WARM {{contact.first_name}}"

ACCIÓN 16: Enviar WhatsApp — Mensaje D7 (audio resumen — script abajo)
ACCIÓN 17: Incrementar contact.toques_realizados + 1
ACCIÓN 18: Update contact.temperatura_lead = COOL
ACCIÓN 19: Update contact.dia_cadencia = D9
ACCIÓN 20: Move Opportunity → etapa "En Cadencia COOL (D9-D14)"
ACCIÓN 21: → Enrollar en WF-03-CADENCIA-D9-D14-COOL
ACCIÓN 22: FIN WF-02
```

---

### WF-03: CADENCIA D9-D14 COOL
**Trigger:** Enrollado desde WF-02  
**Condición de salida:** Tag `respondio` o completar D14  

```
━━━━ DÍA 9 ━━━━

ACCIÓN 1: Wait 2 días

ACCIÓN 2: Verificar tag "respondio" → SI → FIN

ACCIÓN 3: Enviar WhatsApp — Mensaje D9 (historia de cliente similar)
ACCIÓN 4: Enviar Email — Email D9 (ángulo nuevo — EL COSTO INVISIBLE)
ACCIÓN 5: Incrementar contact.toques_realizados + 1
ACCIÓN 6: Update contact.dia_cadencia = D11

━━━━ DÍA 11 ━━━━

ACCIÓN 7: Wait 2 días → 4:00 PM

ACCIÓN 8: Verificar tag "respondio" → SI → FIN

ACCIÓN 9: Crear Tarea — Llamada D11
  Asunto: "❄️ D11 — Last Call {{contact.first_name}}"

ACCIÓN 10: Enviar WhatsApp — Mensaje D11 ("last call" + escasez legítima)
ACCIÓN 11: Incrementar contact.toques_realizados + 1
ACCIÓN 12: Update contact.dia_cadencia = D14

━━━━ DÍA 14 ━━━━

ACCIÓN 13: Wait 3 días → 11:00 AM

ACCIÓN 14: Verificar tag "respondio" → SI → FIN

ACCIÓN 15: Enviar WhatsApp — Mensaje D14 (breakup honesto)
ACCIÓN 16: Incrementar contact.toques_realizados + 1
ACCIÓN 17: Wait 2 horas

ACCIÓN 18: Add tag: cadencia-completada
ACCIÓN 19: Remove tag: cadencia-activa
ACCIÓN 20: Update contact.temperatura_lead = DEAD
ACCIÓN 21: Update contact.dia_cadencia = Nurture Largo
ACCIÓN 22: Move Opportunity → etapa "Nurture Largo (D14+)"
ACCIÓN 23: → Enrollar en WF-04-NURTURE-LARGO
ACCIÓN 24: FIN WF-03
```

---

### WF-04: NURTURE LARGO (D14+)
**Trigger:** Tag `nurture-largo` añadido  
**Propósito:** 1 toque de valor cada 12 días, sin presión de venta. Recupera 18-26% de cierres.  

```
BUCLE (repetir indefinidamente):

ACCIÓN 1: Wait 12 días

ACCIÓN 2: Verificar tag "respondio" → SI → FIN y activar WF-05-HANDOFF
                                    → NO → continuar

ACCIÓN 3: Enviar WhatsApp — Nurture [rotación de 4 mensajes — ver abajo]
ACCIÓN 4: Incrementar contact.toques_realizados + 1

[Repetir desde ACCIÓN 1]

CONDICIÓN DE SALIDA: Tag "respondio" añadido
```

---

### WF-05: HOT LEAD — HANDOFF HUMANO
**Trigger:** Tag `hot-lead` añadido O Tag `respondio` añadido  
**Propósito:** Escalado urgente a Ernesto en <15 minutos  

```
ACCIÓN 1: Remove tag: cadencia-activa
ACCIÓN 2: Add tag: cadencia-pausada
ACCIÓN 3: Move Opportunity → etapa "Respondió - Calificando"

ACCIÓN 4: Notificación SMS/Email interno a Ernesto:
  "🔴 LEAD CALIENTE: {{contact.first_name}} de {{contact.company_name}} respondió.
   Sector: {{contact.vertical_prospecto}} | Canal: {{last_message_channel}}
   Ver conversación: [link GHL]
   SLA: contactar en <15 minutos."

ACCIÓN 5: Crear Tarea URGENTE para Ernesto:
  Asunto: "🔴 URGENTE — Responder a {{contact.first_name}} en <15 min"
  Vencimiento: 15 minutos desde ahora

ACCIÓN 6: Enviar WhatsApp de confirmación al lead:
  "Hola {{contact.first_name}}, gracias por responder.
   Te contactamos en los próximos minutos para coordinar.
   — Equipo SixTeam"

ACCIÓN 7: Wait 15 minutos

ACCIÓN 8: Verificar si la tarea fue completada:
  → SI → FIN
  → NO → Enviar recordatorio adicional a Ernesto

ACCIÓN 9: FIN
```

---

### WF-06: DETECCIÓN DE RESPUESTA — PAUSA AUTOMÁTICA
**Trigger:** Contacto responde en cualquier canal (WhatsApp, email, SMS)  
**Propósito:** Detener la cadencia automáticamente cuando hay respuesta  

```
ACCIÓN 1: Add tag: respondio
ACCIÓN 2: Remove tag: cadencia-activa (pausa automática de todos los WFs activos)
ACCIÓN 3: Add tag: cadencia-pausada

ACCIÓN 4: IF mensaje contiene palabras clave positivas
  (interesa, sí, quiero, cuando, agenda, precio, costo, más info, cuánto, reunión)
  → Add tag: hot-lead
  → → Enrollar en WF-05-HANDOFF-HUMANO

ACCIÓN 5: IF mensaje contiene palabras clave negativas
  (no gracias, no me interesa, eliminar, dejar de, baja, unsubscribe, no quiero)
  → Add tag: cadencia-completada
  → Update contact.razon_no_cierre = "No es ICP"
  → Move Opportunity → etapa "Cerrado Perdido"
  → Enviar mensaje de respeto: "Entendido, {{contact.first_name}}. No te molesto más."

ACCIÓN 6: IF mensaje es neutral o ambiguo
  → Notificar a Ernesto para revisión manual
  → Crear tarea: "Revisar respuesta de {{contact.first_name}}"

ACCIÓN 7: FIN
```

---

## MENSAJES COMPLETOS POR DÍA

### VERTICAL: TRAVEL / AGENCIAS DE VIAJE (LATAM)

**D0 — WhatsApp Texto (enviar tras 5 min sin contestar llamada):**
```
Hola {{contact.first_name}} 👋

Soy [nombre] de SixTeam.pro.

Trabajo con agencias de viaje en [país] que están perdiendo reservas porque sus leads no reciben seguimiento a tiempo.

Una agencia similar a [empresa] cerraba el 15% de sus leads. Hoy cierra el 42% — sin contratar más personal.

¿Ese problema de seguimiento lo tienen en [empresa]? ¿Me das 2 minutos?
```

**D1 — Script Audio WhatsApp (35 segundos):**
```
[GRABAR Y ENVIAR COMO AUDIO MANUAL o con herramienta de voz IA]

"Hola [nombre], te dejé un mensaje ayer de SixTeam.pro.

Trabajo específicamente con agencias de viaje que tienen el problema de leads que llegan y no se cierran porque el equipo no llega a hacer el seguimiento completo.

Sé que es un tema recurrente en el sector. ¿Tenés 15 minutos esta semana para que te muestre cómo lo resolvemos?

Cualquier cosa, respondeme este audio. Que tengas buen día."
```

**D2 — WhatsApp Caso de Estudio:**
```
[nombre], dato concreto:

Una agencia en Bogotá con 4 asesores recibía 80 leads/mes de Instagram y cerraba 12.

Después de 60 días con SixTeam: mismos 4 asesores, mismos 80 leads → 31 reservas cerradas.

La diferencia: el sistema hacía 8 intentos de contacto por lead (ellos hacían 1).

¿Cuántos intentos hace tu equipo por cada lead hoy?
```

**D3 — WhatsApp Pregunta de Valor:**
```
[nombre], pregunta directa:

Si el ticket promedio de una reserva en [empresa] es $X... y se pierden 10 leads por mes por falta de seguimiento...

Eso son $X × 10 = $X al mes que se van.

¿Cuántos leads calcula que se les escapan así mensualmente?

No te pregunto para venderte nada todavía — quiero entender si el número justifica que hablemos.
```

**D5 — WhatsApp Dato de Industria:**
```
[nombre], algo que me parece que hay que saber en el sector:

El 80% de las reservas de viaje se cierran después del 5to intento de contacto.

El 80% de las agencias hace 1 solo intento.

Eso significa que la mayoría de las agencias está compitiendo por el 20% de leads fáciles y dejando el 80% para quien sea más persistente.

¿Cuántos intentos hace tu equipo antes de marcar un lead como perdido?
```

**D7 — Script Audio WhatsApp (45 segundos):**
```
[GRABAR COMO AUDIO]

"Hola [nombre], llevo una semana intentando conectar.

Entiendo que deben estar ocupados. Por eso quiero ser directo:

Trabajo con agencias de viaje que quieren cerrar más reservas sin contratar más personal. Lo hacemos con automatización del seguimiento y agentes de IA que responden los leads en menos de 2 minutos.

Si hay algún momento en las próximas 2 semanas para que te muestre en 20 minutos cómo funciona, con mucho gusto. Si no es el momento, también está bien.

Respondeme este audio cuando puedas. Buen día."
```

**D9 — WhatsApp Historia de Cliente:**
```
[nombre], te cuento algo que le pasó a una agencia en Medellín:

Tenían 3 asesores. Cada uno manejaba sus leads en WhatsApp personal. Un lead llegaba un sábado a las 8pm — nadie respondía hasta el lunes.

Para el lunes, el lead ya había reservado con la competencia.

Implementamos un agente de IA que responde en menos de 60 segundos, 24/7. Los sábados y domingos ahora son sus mejores días de conversión.

¿Ese escenario de leads en horarios no hábiles te suena familiar?
```

**D9 — Email (ángulo diferente):**
```
Asunto: El costo de un lead que no respondiste

Hola [nombre],

Te escribo porque trabajo con agencias de viaje en LATAM y hay un número que pocos calculan:

Si cada lead de tu agencia vale $500 en comisión promedio, y se pierden 8 leads por semana por no responder a tiempo o no dar el seguimiento completo...

Son $4,000 semanales. $16,000 al mes. $192,000 al año.

Ese es el costo real de no tener sistema.

En SixTeam operamos el seguimiento comercial de agencias de viaje con automatización e IA para cerrar esas reservas que hoy se escapan.

¿Tiene sentido que hablemos 20 minutos? Te puedo mostrar exactamente cómo funciona para una agencia del tamaño de [empresa].

Un saludo,
[nombre Sixteam]
sixteam.pro
```

**D11 — WhatsApp Last Call:**
```
[nombre], te escribo por última vez sobre esto.

Sé que el timing no siempre es el correcto y que hay mil prioridades.

Tengo 2 slots disponibles esta semana para mostrar el sistema en 20 minutos — sin compromiso, sin pitch largo.

Si hay aunque sea 5% de probabilidad de que pueda ayudarte con el seguimiento de leads, me vale la pena intentarlo.

¿Hay algún momento esta semana o la próxima?
```

**D14 — WhatsApp Breakup:**
```
[nombre], entiendo que no es el momento.

No te voy a seguir escribiendo sobre esto — te lo prometí hace un momento.

Una pregunta de cierre: ¿tiene sentido que te contacte en 3 meses, o preferís que no te moleste más?

Sin presión. Cuídense. 🤝
```

---

### MENSAJES NURTURE LARGO (rotación cada 12 días)

**Nurture 1 — Dato de industria:**
```
[nombre], sin contexto de venta:

[Dato relevante del sector travel / servicios / inmobiliaria que salió esta semana]

Lo comparto porque trabajo con empresas del sector y me pareció que podría ser útil.

Un saludo,
[nombre SixTeam]
```

**Nurture 2 — Caso de cliente (sin nombrar):**
```
[nombre], un resultado de este mes que me pareció interesante compartir:

Un cliente del sector [vertical] pasó de 18% a 39% de conversión en 90 días.

El cambio: tiempo de primera respuesta pasó de 4 horas a 58 segundos.

Sin más asesor. Sin más inversión en ads. Solo velocidad.

Si en algún momento quieren explorar algo así, aquí estoy.
```

**Nurture 3 — Pregunta de pulso:**
```
[nombre], pregunta rápida sin compromiso:

¿Resolvieron el tema de seguimiento de leads que tenían?

Pregunto porque si ya tienen algo que funciona, me parece bien saberlo. Y si no, quizás sea el momento de hablar.
```

**Nurture 4 — Contenido útil:**
```
[nombre], te mando algo que armamos para el sector [vertical]:

[Link o descripción de contenido útil: calculadora de costo de lead perdido / checklist / benchmark]

Gratis, sin formulario. Si les sirve, bien. Si no, no hay problema.
```

---

### ADAPTACIONES POR MERCADO

**USA (inglés americano) — D0:**
```
Hey [nombre],

[nombre] from SixTeam.pro here.

Quick question: how many leads does [company] receive per week that don't convert because of slow follow-up?

We help travel agencies in the US respond to leads in under 60 seconds and follow up automatically across 6+ touchpoints.

Worth a 15-min call this week?
```

**España (castellano europeo) — D0:**
```
Hola [nombre],

Soy [nombre] de SixTeam.pro.

Trabajo con agencias de viaje en España que recibieron subvención del Kit Digital para implementar CRM pero no lo están usando a su máximo potencial.

¿Es vuestro caso? ¿Tenéis 2 minutos para contarme cómo gestionáis los leads ahora mismo?
```

---

## CONFIGURACIÓN DEL AGENTE IA DE CALIFICACIÓN (GHL Conversations AI)

### Nombre del agente: Sofia de SixTeam

**Prompt del agente:**

```
IDENTIDAD:
Eres Sofia, asistente de calificación de SixTeam.pro. Trabajas para identificar si una empresa puede beneficiarse de nuestro sistema de CRM, automatizaciones e IA para ventas.

CONTEXTO DE SIXTEAM:
SixTeam opera el área comercial de empresas de servicios y agencias usando CRM + automatización + agentes IA. Problema que resolvemos: leads que se pierden por falta de seguimiento y velocidad de respuesta.

OBJETIVO:
Calificar si el prospecto cumple el ICP y agendar una llamada de 20 minutos con el equipo.

APERTURA (siempre en los primeros 15 segundos):
- Identificarte como IA (legal requirement)
- Dar razón específica del contacto en ≤10 palabras
- Pedir micro-compromiso: "¿Tenés 2 minutos?"
- Abrir con pregunta, no con pitch

LAS 5 PREGUNTAS DE CALIFICACIÓN (fluir como conversación, no interrogatorio):
1. "¿Cómo están manejando sus leads y seguimiento ahora mismo?"
2. "¿Cuál es el mayor desafío con ese proceso?"
3. "¿Qué pasa con los leads que no logran contactar a tiempo?"
4. "¿Quieren resolverlo ahora o están explorando opciones?"
5. "¿Sos vos quien toma este tipo de decisiones?"

CRITERIOS DE CALIFICACIÓN:
- HOT: Dolor claro + urgencia + es el decisor → agendar reunión inmediata
- WARM: Dolor pero sin urgencia o no es el decisor → nutrir y re-calificar en 2 semanas
- NO ICP: Sin CRM / sin leads digitales / empresa <3 personas → cerrar amablemente

MANEJO DE OBJECIONES:
- "No tengo tiempo" → "Entiendo. ¿Cuándo sería mejor, mañana o el jueves?"
- "Ya tenemos algo" → "¿Qué están usando? ¿Cómo les está funcionando?"
- "Mándame información" → "Por supuesto. Para enviarte algo relevante, ¿puedo hacerte 2 preguntas rápidas?"
- "Muy caro" → "Antes de hablar de precio, ¿cuánto les está costando cada mes no tener el sistema?"

CIERRE:
Si califica: "Perfecto. ¿Tenés 20 minutos el [día] a las [hora] para que mi compañero te muestre exactamente cómo funciona para una empresa como la tuya?"
Si no califica ahora: "Entendido. ¿Puedo contactarte en [X semanas] para ver si cambió algo?"

REGLAS:
- Latencia <800ms por respuesta
- Máximo 2-3 preguntas de calificación (más y cuelgan)
- Si hay silencio >3 segundos → preguntar "¿Sigues ahí?"
- NUNCA asumir que tienen tiempo → siempre pedir micro-compromiso
- Si dicen "no" con claridad → respetar y cerrar con gracia
```

---

## DASHBOARD DE MÉTRICAS A MONITOREAR

### Configurar en GHL → Reports → Smart Lists

| Métrica | Fórmula | Target | Alerta si... |
|---------|---------|--------|-------------|
| Speed-to-lead | Tiempo desde lead entrada → primer toque | <5 min | >30 min |
| Toques/lead | contact.toques_realizados promedio | ≥8 en 14 días | <5 |
| Contact rate | Contactados / Total prospectos | >60% | <40% |
| Reply rate | Tag "respondio" / Total cadencias | >15% | <8% |
| Discovery rate | Tag "reunion-agendada" / Tag "respondio" | >60% | <40% |
| Win rate | Cerrado Ganado / Discovery realizada | >28% | <15% |
| Nurture recovery | Cierres de nurture-largo / Total cadencias completadas | 18-26% | <10% |

---

## CHECKLIST DE IMPLEMENTACIÓN

### Semana 1 — Setup (4-6 horas total)

- [ ] **GHL: Crear pipeline "PROSPECCIÓN FRÍA | SixTeam"** (10 etapas arriba)
- [ ] **GHL: Verificar conexión WhatsApp Business** en Settings → Phone Numbers
- [ ] **GHL: Verificar número Twilio activo** para llamadas
- [ ] **GHL: Crear WF-06 primero** (detección de respuesta — es el más crítico)
- [ ] **GHL: Crear WF-05** (handoff humano)
- [ ] **GHL: Crear WF-00** (entrada prospecto frío)
- [ ] **Apollo: Crear los 4 filtros ICP** definidos arriba
- [ ] **Grabar 2 audios de WhatsApp** (D1 y D7 — ver scripts)
- [ ] **Configurar Agente IA Sofia** en GHL Conversations AI
- [ ] **Test end-to-end**: importar 1 contacto de prueba con tag `prospecto-frio` y verificar que WF-00 dispara

### Semana 2 — Lanzamiento
- [ ] Importar primeros 30 contactos de Apollo (Travel LATAM)
- [ ] Monitorear WF-01 diariamente durante los primeros 3 días
- [ ] Ajustar mensajes según primeras respuestas

### Semana 3 — Escalar
- [ ] Crear WF-01, WF-02, WF-03 para USA en inglés
- [ ] Crear WF-01, WF-02, WF-03 para España (Kit Digital angle)
- [ ] Importar 50 contactos adicionales por mercado

---

## NOTAS IMPORTANTES

1. **El tag `stop bot` ya existe en GHL** — úsalo para pausar cualquier workflow manualmente cuando sea necesario

2. **WhatsApp Business**: Las plantillas de mensajes iniciados (outbound) necesitan aprobación de Meta antes de usarse. Presentar los mensajes D0, D3, D9 y D14 para aprobación PRIMERO. Los mensajes dentro de una conversación activa (cuando el lead responde primero) no necesitan aprobación.

3. **Llamadas**: GHL tiene Power Dialer nativo — activar para que Ernesto pueda hacer las llamadas manuales desde el pipeline directamente sin salir de GHL.

4. **Audio WhatsApp D1 y D7**: No se puede automatizar el envío de audios de voz personalizados desde GHL directamente. Opciones:
   a. Crear task para que Ernesto lo envíe manualmente (recomendado al inicio)
   b. Usar un proveedor de síntesis de voz con integración Make/n8n → GHL

5. **Filtro anti-spam**: No enviar más de 50 mensajes nuevos de WhatsApp por día en el mismo número para evitar bloqueos de Meta.

---

*Documento generado: Junio 2026 — SixTeam.pro x Claude*
