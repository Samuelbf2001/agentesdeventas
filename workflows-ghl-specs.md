# WORKFLOWS GHL — SPECS COMPLETOS PARA IMPLEMENTAR
## SixTeam.pro | Sistema de Prospección Fría v1

> Implementar en este orden exacto: WF-06 → WF-05 → WF-00 → WF-01 → WF-02 → WF-03 → WF-04
> Todos los workflows van en: GHL → Automatización → Workflows → + Nuevo Workflow

---

## REFERENCIAS RÁPIDAS (copiar/pegar en los workflows)

### IDs de usuarios
| Persona | ID | Email |
|---------|-----|-------|
| Ernesto Hernandez | `uHFGK2IZ38SztJqF1NiQ` | ERNESTO@sixteam.pro |
| Samuel Burgos | `n8ISXihxlGGeRICOopdz` | samuel@sixteam.pro |
| Jorge Sixteam | `vLnC6xTSmtTyjUAiq8EV` | jorgesixteampro@gmail.com |

### IDs de calendarios
| Calendario | ID | Uso |
|-----------|-----|-----|
| Agendamiento Agencias de Viaje | `QZUYrLyzEFORIiyH5tvt` | Travel vertical |
| Asesorias Web (general) | `UFdsZhBQURUYkKpV0GEX` | Todos los demás |

### IDs de pipelines
| Pipeline | ID |
|---------|-----|
| Ventas | `Jsp32fbxjSZUgOpuRBTy` |
| RADAR | `onGEZ5MXCkniTQ4vTx0F` |

### Etapas del pipeline Ventas
| Etapa | ID |
|-------|-----|
| NUEVO LEAD | `9a98b210-431f-4fbb-a919-aead8aa31f25` |
| CONTACTADO | `796615e6-cfa0-436e-af54-2ae33ff733b0` |
| CITA AGENDADA | `35892689-018b-4ed4-9cfd-eb9e5d78c257` |
| SEGUIMIENTO | `fad1aa35-694c-49e0-b8eb-b99e61e67a24` |
| COTIZACION | `7d65115b-54ce-4fe7-b645-b9a00349d018` |
| CERRADO GANADO | `3f9a1bb4-9259-4f74-947d-c8d39fbaeb5f` |
| CERRADO PERDIDO | `d71f5610-e991-473e-ae3c-8285a3907ca2` |
| Cierre Postergado / Nurturing | `bca79fcd-3f16-4071-b69b-2970a1639a2b` |

### Agente de Voz creado
| Agente | ID |
|--------|-----|
| Sofia — Prospeccion SixTeam | `6a4024f91a8be999b746ff5c` |

### Custom Values disponibles
```
{{ custom_values.telefono_ernesto }}        → +573004188522
{{ custom_values.link_calendario_travel }}  → link booking travel
{{ custom_values.link_calendario_general }} → link booking general
```

### Variables de contacto disponibles (usar en mensajes)
```
{{contact.first_name}}
{{contact.last_name}}
{{contact.company_name}}
{{contact.phone}}
{{contact.email}}
{{contact.vertical_prospecto}}
{{contact.mercado_prospecto}}
{{contact.fuente_prospecto}}
{{contact.temperatura_lead}}
{{contact.dia_cadencia}}
{{contact.toques_realizados}}
{{contact.dolor_principal}}
{{contact.sector}}
{{contact.cargo}}
```

---

## ════════════════════════════════════════
## WF-06: DETECTOR DE RESPUESTA (crear PRIMERO)
## ════════════════════════════════════════

**Nombre en GHL:** `[PROSP] WF-06 — Detector de Respuesta`
**Descripción:** Pausa la cadencia automáticamente cuando el lead responde. Clasifica la respuesta y activa el handoff si es positiva.

### TRIGGER
```
Tipo: Respuesta del cliente en conversación
Filtros: TODOS los canales (WhatsApp, SMS, Email, Chat)
Condición adicional: Tag contiene "cadencia-activa"
```

### ACCIONES (en este orden)

**Paso 1 — Remover tag de cadencia activa**
```
Acción: Remover Tag
Tag: cadencia-activa
```

**Paso 2 — Añadir tag respondió**
```
Acción: Añadir Tag
Tag: respondio
```

**Paso 3 — Añadir tag cadencia pausada**
```
Acción: Añadir Tag
Tag: cadencia-pausada
```

**Paso 4 — Ramificación: ¿Es respuesta positiva?**
```
Acción: Condición IF/ELSE
Nombre: ¿Respuesta positiva?

RAMA SÍ (respuesta positiva):
Condición: Último mensaje del contacto CONTIENE cualquiera de:
  - "interesa"
  - "sí"
  - "si quiero"
  - "cuando"
  - "agenda"
  - "precio"
  - "costo"
  - "cuánto"
  - "más info"
  - "reunión"
  - "me gustaría"
  - "podemos hablar"
  - "cuéntame"
  - "cómo funciona"

RAMA NO (respuesta negativa o neutra):
  → Sub-condición: ¿Es negativa?
  Condición: Último mensaje CONTIENE cualquiera de:
    - "no gracias"
    - "no me interesa"
    - "no quiero"
    - "baja"
    - "eliminar"
    - "dejar de"
    - "stop"
  
  SI negativa → Paso 4b
  SI neutra → Paso 4c
```

**Paso 4a — Respuesta positiva: añadir hot-lead**
```
Acción: Añadir Tag
Tag: hot-lead
```

**Paso 4a.2 — Mover a pipeline Respondió**
```
Acción: Actualizar Oportunidad
Pipeline: Ventas
Etapa: SEGUIMIENTO
```

**Paso 4a.3 — Notificación urgente a Ernesto**
```
Acción: Enviar Email interno
Para: ERNESTO@sixteam.pro
Asunto: 🔴 LEAD CALIENTE — Respuesta de {{contact.first_name}} | {{contact.company_name}}
Cuerpo:
{{contact.first_name}} de {{contact.company_name}} respondió positivamente.

Sector: {{contact.vertical_prospecto}}
Mercado: {{contact.mercado_prospecto}}
Fuente: {{contact.fuente_prospecto}}
Toques realizados: {{contact.toques_realizados}}
Dolor principal: {{contact.dolor_principal}}

VER CONVERSACIÓN EN GHL AHORA.

SLA: Responder en menos de 15 minutos.
```

**Paso 4a.4 — Crear tarea urgente para Ernesto**
```
Acción: Crear Tarea
Asignado a: Ernesto Hernandez (uHFGK2IZ38SztJqF1NiQ)
Título: 🔴 URGENTE — Responder a {{contact.first_name}} ({{contact.company_name}}) en <15 min
Descripción: Respondió positivamente al outreach. Ver conversación de WhatsApp/email.
Fecha vencimiento: Ahora + 15 minutos
Prioridad: Alta
```

**Paso 4a.5 — WhatsApp de confirmación al lead**
```
Acción: Enviar WhatsApp
Número: desde número de negocio
Mensaje:
Hola {{contact.first_name}}, gracias por responder 🙌

Un miembro de nuestro equipo va a estar en contacto con vos en los próximos minutos para coordinar.

Que tengas un buen día.
— Equipo SixTeam
```

**Paso 4b — Respuesta negativa: cerrar**
```
Acción: Añadir Tag → cadencia-completada
Acción: Actualizar campo → contact.razon_no_cierre = "No es ICP"
Acción: Actualizar Oportunidad → etapa: CERRADO PERDIDO

Acción: Enviar WhatsApp
Mensaje:
Entendido {{contact.first_name}}, no te molestamos más.

Si en algún momento cambia algo, aquí estamos.

Que te vaya muy bien. 🤝
— SixTeam
```

**Paso 4c — Respuesta neutra: crear tarea de revisión**
```
Acción: Crear Tarea
Asignado a: Ernesto Hernandez
Título: 👀 Revisar respuesta de {{contact.first_name}} — determinar siguiente paso
Descripción: Respondió pero mensaje es ambiguo. Revisar conversación y decidir manualmente.
Fecha vencimiento: Hoy + 2 horas
```

**Paso 5 — FIN**

---

## ════════════════════════════════════════
## WF-05: HANDOFF A HUMANO (crear SEGUNDO)
## ════════════════════════════════════════

**Nombre en GHL:** `[PROSP] WF-05 — Handoff Humano HOT`
**Descripción:** Escalado urgente cuando un lead califica como HOT. Notifica a Ernesto en <15 min.

### TRIGGER
```
Tipo: Tag añadido al contacto
Tag: hot-lead
```

### ACCIONES

**Paso 1 — Actualizar temperatura**
```
Acción: Actualizar campo de contacto
Campo: Temperatura Lead
Valor: HOT
```

**Paso 2 — Mover pipeline**
```
Acción: Actualizar Oportunidad
Pipeline: Ventas
Etapa: SEGUIMIENTO
```

**Paso 3 — Notificación SMS a Ernesto**
```
Acción: Enviar SMS
Número destino: +573004188522
Mensaje:
🔴 LEAD HOT: {{contact.first_name}} | {{contact.company_name}} | {{contact.vertical_prospecto}}
Responder en <15 min. Ver GHL ahora.
```

**Paso 4 — Crear tarea con toda la info**
```
Acción: Crear Tarea
Asignado a: Ernesto Hernandez
Título: 🔴 HOT — {{contact.first_name}} de {{contact.company_name}} | SLA 15 min
Descripción:
LEAD CALIENTE — actuar ahora.

Empresa: {{contact.company_name}}
Contacto: {{contact.first_name}} {{contact.last_name}}
Teléfono: {{contact.phone}}
Email: {{contact.email}}
Sector: {{contact.vertical_prospecto}}
Mercado: {{contact.mercado_prospecto}}
Fuente: {{contact.fuente_prospecto}}
Dolor: {{contact.dolor_principal}}
Toques realizados: {{contact.toques_realizados}}

SIGUIENTE PASO: Llamar o responder en el canal donde respondió. Objetivo: agendar reunion de 20 min.

Link calendario Travel: {{ custom_values.link_calendario_travel }}
Link calendario General: {{ custom_values.link_calendario_general }}

Fecha vencimiento: Hoy + 15 minutos
Prioridad: Alta
```

**Paso 5 — WhatsApp de puente al lead**
```
Acción: Enviar WhatsApp
Mensaje:
Hola {{contact.first_name}} 👋

Muchas gracias por responder. Ernesto de nuestro equipo te va a contactar en los próximos minutos para coordinar una conversación rápida.

¿El mejor número para llamarte es este? ✅
```

**Paso 6 — Wait 20 minutos**
```
Acción: Esperar
Tiempo: 20 minutos
```

**Paso 7 — Verificar si la tarea fue completada**
```
Acción: IF/ELSE
Condición: Tarea del paso 4 está completada

RAMA NO (no atendieron):
  Acción: Enviar Email a Ernesto
  Asunto: ⚠️ LEAD HOT SIN ATENDER — {{contact.first_name}}
  Cuerpo: Han pasado 20 minutos. El lead {{contact.first_name}} de {{contact.company_name}} está sin respuesta.
```

**Paso 8 — FIN**

---

## ════════════════════════════════════════
## WF-00: ENTRADA DE PROSPECTO FRÍO (crear TERCERO)
## ════════════════════════════════════════

**Nombre en GHL:** `[PROSP] WF-00 — Entrada Prospecto Frío`
**Descripción:** Trigger principal. Cualquier contacto que reciba el tag "prospecto-frio" entra al sistema.

### TRIGGER
```
Tipo: Tag añadido al contacto
Tag: prospecto-frio
```

### FILTRO DE ENTRADA (evitar duplicados)
```
Condición adicional: Tag NO contiene "cadencia-activa"
Y: Tag NO contiene "cadencia-completada"
Y: Tag NO contiene "respondio"
```

### ACCIONES

**Paso 1 — Crear oportunidad en el pipeline**
```
Acción: Crear/Actualizar Oportunidad
Pipeline: Ventas
Etapa: NUEVO LEAD
Nombre: {{contact.first_name}} {{contact.last_name}} | {{contact.company_name}}
Asignado a: Ernesto Hernandez
```

**Paso 2 — Inicializar campos de tracking**
```
Acción: Actualizar campo → Temperatura Lead = HOT
Acción: Actualizar campo → Dia Cadencia = D0
Acción: Actualizar campo → Toques Realizados = 0
Acción: Actualizar campo → Inicio Cadencia = {{now}} [fecha actual]
```

**Paso 3 — Marcar cadencia activa**
```
Acción: Añadir Tag → cadencia-activa
```

**Paso 4 — Wait 2 minutos**
```
Acción: Esperar
Tiempo: 2 minutos
[Dar tiempo para que los campos se actualicen]
```

**Paso 5 — Crear tarea de llamada inmediata**
```
Acción: Crear Tarea
Asignado a: Ernesto Hernandez
Título: 📞 D0 LLAMAR AHORA — {{contact.first_name}} | {{contact.company_name}} | {{contact.vertical_prospecto}}
Descripción:
PRIMER CONTACTO — llamar en los próximos 5 minutos.

Empresa: {{contact.company_name}}
Contacto: {{contact.first_name}}
Teléfono: {{contact.phone}}
Sector: {{contact.vertical_prospecto}}
Fuente: {{contact.fuente_prospecto}}
Dolor conocido: {{contact.dolor_principal}}

GUIÓN APERTURA:
"Hola {{contact.first_name}}, te llama Ernesto de SixTeam.pro. Te contacto porque trabajamos con empresas del sector [vertical] y quería hacerte una pregunta rápida sobre cómo manejan sus leads. ¿Tenés 2 minutos?"

Si no contesta → el sistema envía WA automáticamente en 5 min.
Si contesta → calificar con las 5 preguntas del playbook.

Fecha vencimiento: Ahora + 10 minutos
Prioridad: Alta
```

**Paso 6 — Mover pipeline a CONTACTADO**
```
Acción: Actualizar Oportunidad
Etapa: CONTACTADO
```

**Paso 7 — Enrollar en WF-01**
```
Acción: Añadir a Workflow
Workflow: [PROSP] WF-01 — Cadencia D0-D2 HOT
```

**Paso 8 — FIN**

---

## ════════════════════════════════════════
## WF-01: CADENCIA D0-D2 HOT (crear CUARTO)
## ════════════════════════════════════════

**Nombre en GHL:** `[PROSP] WF-01 — Cadencia D0-D2 HOT`
**Descripción:** Los 3 primeros días. Alta frecuencia. Objetivo: primer contacto.

### TRIGGER
```
Tipo: Añadido al workflow (desde WF-00)
```

### ACCIONES

─────────── DÍA 0 ───────────

**Paso 1 — Wait 5 minutos (tiempo para que Ernesto llame primero)**
```
Acción: Esperar
Tiempo: 5 minutos
```

**Paso 2 — Verificar si ya respondió**
```
Acción: IF/ELSE
Condición: Tag contiene "respondio"
RAMA SÍ → Salir del workflow (Go to: FIN)
RAMA NO → Continuar
```

**Paso 3 — Enviar WhatsApp D0**
```
Acción: Enviar Mensaje WhatsApp
Número: desde número de negocio
Mensaje:
Hola {{contact.first_name}} 👋

Soy Ernesto de SixTeam.pro.

Trabajamos con empresas de {{contact.vertical_prospecto}} en Colombia que están perdiendo leads porque no logran hacer el seguimiento completo a tiempo.

Una empresa similar a {{contact.company_name}} pasó de cerrar el 15% de sus leads al 42% en 90 días — sin contratar más personal.

¿Ese problema de seguimiento lo tienen en {{contact.company_name}}? ¿Me das 2 minutos para contarme?
```

**Paso 4 — Actualizar contador de toques**
```
Acción: Actualizar campo
Campo: Toques Realizados
Valor: {{contact.toques_realizados + 1}}
[Nota: usar Math en GHL o actualizar manualmente a 1]
```

**Paso 5 — Actualizar día de cadencia**
```
Acción: Actualizar campo → Dia Cadencia = D1
```

─────────── DÍA 1 ───────────

**Paso 6 — Wait hasta mañana 9am**
```
Acción: Esperar hasta fecha/hora específica
Configurar: Próximo día laborable a las 9:00 AM (hora Bogotá)
```

**Paso 7 — Verificar respuesta**
```
Acción: IF/ELSE → Tag contiene "respondio"
RAMA SÍ → FIN del workflow
RAMA NO → Continuar
```

**Paso 8 — Crear tarea llamada D1 mañana**
```
Acción: Crear Tarea
Asignado a: Ernesto Hernandez
Título: 📞 D1 Mañana — Double-dial {{contact.first_name}} | {{contact.company_name}}
Descripción:
SEGUNDO INTENTO. Llamar ahora.
Este es el "double-dial" — llama dos veces hoy (9am y 5pm) para aumentar contact rate.

Recordar: mencionar que viste la empresa específicamente, no es llamada genérica.

Si no contesta → no dejar mensaje de voz todavía.
Teléfono: {{contact.phone}}

Fecha: HOY 9:00 AM
```

**Paso 9 — Wait hasta 5pm mismo día**
```
Acción: Esperar hasta hora específica
Configurar: HOY 5:00 PM (hora Bogotá)
```

**Paso 10 — Verificar respuesta**
```
Acción: IF/ELSE → Tag contiene "respondio"
RAMA SÍ → FIN
RAMA NO → Continuar
```

**Paso 11 — Crear tarea llamada D1 tarde**
```
Acción: Crear Tarea
Asignado a: Ernesto Hernandez
Título: 📞 D1 Tarde — Segunda llamada {{contact.first_name}} (double-dial)
Descripción:
Segunda llamada del día. Distinto horario = mayor probabilidad de contactar.
Si no contesta → el WF envía audio de WhatsApp automáticamente en 10 minutos.
Teléfono: {{contact.phone}}
```

**Paso 12 — Wait 10 minutos**
```
Acción: Esperar
Tiempo: 10 minutos
```

**Paso 13 — Verificar respuesta**
```
Acción: IF/ELSE → Tag contiene "respondio"
RAMA SÍ → FIN
RAMA NO → Continuar
```

**Paso 14 — Enviar WhatsApp D1 (script de audio — se envía como texto)**
```
Acción: Enviar Mensaje WhatsApp
Mensaje:
{{contact.first_name}}, te dejé un mensaje ayer de SixTeam.pro.

Trabajo específicamente con empresas de {{contact.vertical_prospecto}} que tienen el problema de leads que llegan y no se cierran porque el equipo no llega a hacer el seguimiento completo.

Sé que es un tema recurrente en el sector. ¿Tenés 15 minutos esta semana para que te muestre cómo lo resolvemos?

Cualquier cosa, respondeme este mensaje. 🙌
```

**Paso 15 — Actualizar contador y día**
```
Acción: Actualizar campo → Dia Cadencia = D2
```

─────────── DÍA 2 ───────────

**Paso 16 — Wait hasta próximo día 11am**
```
Acción: Esperar hasta hora específica
Configurar: Próximo día laborable 11:00 AM (hora Bogotá)
```

**Paso 17 — Verificar respuesta**
```
Acción: IF/ELSE → Tag contiene "respondio"
RAMA SÍ → FIN
RAMA NO → Continuar
```

**Paso 18 — Crear tarea llamada D2**
```
Acción: Crear Tarea
Asignado a: Ernesto Hernandez
Título: 📞 D2 — Llamada horario distinto {{contact.first_name}} | Caso estudio listo
Descripción:
TERCER INTENTO. Distinto horario al D0 y D1.
Si no contesta → en 10 min el sistema manda el caso de estudio por WhatsApp.

Teléfono: {{contact.phone}}
```

**Paso 19 — Wait 10 minutos**

**Paso 20 — Verificar respuesta**
```
IF/ELSE → Tag "respondio"
RAMA SÍ → FIN
RAMA NO → Continuar
```

**Paso 21 — Enviar WhatsApp D2 (caso de estudio)**
```
Acción: Enviar Mensaje WhatsApp
Mensaje:
{{contact.first_name}}, dato concreto que quería compartirte:

Una empresa del sector {{contact.vertical_prospecto}} con 4 asesores recibía 80 leads al mes y cerraba 12.

Después de 60 días con SixTeam: mismos 4 asesores, mismos 80 leads → 31 cierres.

La diferencia: el sistema hacía 8 intentos de contacto por lead. Ellos hacían 1.

¿Cuántos intentos hace tu equipo por cada lead hoy?
```

**Paso 22 — Actualizar temperatura y pasar a WF-02**
```
Acción: Actualizar campo → Temperatura Lead = WARM
Acción: Actualizar campo → Dia Cadencia = D3
Acción: Actualizar Oportunidad → Etapa: SEGUIMIENTO
Acción: Añadir a Workflow → [PROSP] WF-02 — Cadencia D3-D7 WARM
```

**Paso 23 — FIN WF-01**

---

## ════════════════════════════════════════
## WF-02: CADENCIA D3-D7 WARM (crear QUINTO)
## ════════════════════════════════════════

**Nombre en GHL:** `[PROSP] WF-02 — Cadencia D3-D7 WARM`

### TRIGGER
```
Tipo: Añadido al workflow (desde WF-01)
```

─────────── DÍA 3 ───────────

**Paso 1 — Wait 1 día (24 horas)**

**Paso 2 — Verificar respuesta → IF/ELSE Tag "respondio" → FIN si sí**

**Paso 3 — Crear tarea llamada D3**
```
Título: 🟡 D3 — Llamada de valor {{contact.first_name}} | {{contact.company_name}}
Descripción:
Día 3. Cambiar ángulo de la llamada — enfocarse en el COSTO de no resolver el problema.
Apertura sugerida: "{{contact.first_name}}, te llamo Ernesto de SixTeam. Te quiero compartir un cálculo rápido que hicimos para empresas de [sector]..."
Teléfono: {{contact.phone}}
```

**Paso 4 — Wait 10 minutos**

**Paso 5 — Verificar respuesta → FIN si sí**

**Paso 6 — Enviar WhatsApp D3**
```
Acción: Enviar Mensaje WhatsApp
Mensaje:
{{contact.first_name}}, pregunta directa:

Si el valor promedio de un cliente en {{contact.company_name}} es $X... y se pierden 8-10 leads por mes por falta de seguimiento...

Ese número al año es significativo.

¿Cuántos leads calcula que se les escapan mensualmente por no tener sistema de seguimiento?

No te pregunto para venderte nada todavía — quiero entender si el número justifica que hablemos.
```

**Paso 7 — Actualizar día → D5**

─────────── DÍA 5 ───────────

**Paso 8 — Wait 2 días → hasta las 3:00 PM**

**Paso 9 — Verificar respuesta → FIN si sí**

**Paso 10 — Crear tarea llamada D5**
```
Título: 🟡 D5 — Llamada tarde {{contact.first_name}} | Dato de industria
Descripción:
Día 5. Último intento de la fase WARM antes de pasar a COOL.
Ángulo: dato de la industria + pregunta abierta.
Si no contesta → WA con dato del sector.
Teléfono: {{contact.phone}}
```

**Paso 11 — Wait 10 minutos**

**Paso 12 — Verificar respuesta → FIN si sí**

**Paso 13 — Enviar WhatsApp D5**
```
Acción: Enviar Mensaje WhatsApp
Mensaje:
{{contact.first_name}}, algo que me parece que hay que saber en el sector:

El 80% de los clientes se cierran después del 5to intento de contacto.

El 80% de las empresas hace 1 solo intento.

Eso significa que la mayoría está compitiendo por el 20% de clientes fáciles y dejando el 80% para quien sea más persistente.

¿Cuántos intentos hace tu equipo antes de marcar un lead como perdido?
```

**Paso 14 — Actualizar día → D7**

─────────── DÍA 7 ───────────

**Paso 15 — Wait 2 días → hasta las 10:00 AM**

**Paso 16 — Verificar respuesta → FIN si sí**

**Paso 17 — Crear tarea llamada D7 (único intento)**
```
Título: 🟡 D7 — Último intento WARM {{contact.first_name}} | Audio WA en 10 min
Descripción:
Día 7. Este es el ÚLTIMO intento de la fase WARM.
Después pasa a COOL. 
Si no contesta → en 10 min el WF manda un mensaje de audio (texto largo) por WhatsApp.
Teléfono: {{contact.phone}}
```

**Paso 18 — Wait 10 minutos**

**Paso 19 — Verificar respuesta → FIN si sí**

**Paso 20 — Enviar WhatsApp D7 (tono de audio)**
```
Acción: Enviar Mensaje WhatsApp
Mensaje:
{{contact.first_name}}, llevo una semana intentando conectar con vos.

Entiendo que deben estar ocupados. Por eso quiero ser directo:

Trabajamos con empresas de {{contact.vertical_prospecto}} que quieren cerrar más clientes sin contratar más personal — con automatización del seguimiento y agentes IA que responden los leads en menos de 2 minutos.

Si hay algún momento en las próximas 2 semanas para que te muestre en 20 minutos cómo funciona, con mucho gusto.

Si no es el momento, también está bien. Solo respondeme este mensaje con un "no es ahora" y lo entiendo perfectamente.

Que tengas muy buen día. 🙏
```

**Paso 21 — Actualizar y pasar a WF-03**
```
Actualizar campo → Temperatura Lead = COOL
Actualizar campo → Dia Cadencia = D9
Actualizar Oportunidad → Etapa: SEGUIMIENTO
Añadir a Workflow → [PROSP] WF-03 — Cadencia D9-D14 COOL
```

**Paso 22 — FIN WF-02**

---

## ════════════════════════════════════════
## WF-03: CADENCIA D9-D14 COOL (crear SEXTO)
## ════════════════════════════════════════

**Nombre en GHL:** `[PROSP] WF-03 — Cadencia D9-D14 COOL`

### TRIGGER
```
Tipo: Añadido al workflow (desde WF-02)
```

─────────── DÍA 9 ───────────

**Paso 1 — Wait 2 días**

**Paso 2 — Verificar respuesta → FIN si sí**

**Paso 3 — Enviar WhatsApp D9 (historia de cliente)**
```
Acción: Enviar Mensaje WhatsApp
Mensaje:
{{contact.first_name}}, te cuento algo que le pasó a una empresa del sector {{contact.vertical_prospecto}}:

Tenían el problema clásico: los leads llegaban fuera del horario de trabajo — sábados, noches — y para el lunes ya habían elegido a la competencia.

Implementamos un agente de IA que responde en menos de 60 segundos, 24/7.

Los fines de semana y noches se convirtieron en sus mejores momentos de conversión.

¿Ese escenario de leads en horarios no hábiles te suena familiar en {{contact.company_name}}?
```

**Paso 4 — Wait 30 minutos**

**Paso 5 — Verificar respuesta → FIN si sí**

**Paso 6 — Enviar Email D9**
```
Acción: Enviar Email
Para: {{contact.email}}
Asunto: El costo de un lead que no respondiste — {{contact.company_name}}
Cuerpo:
Hola {{contact.first_name}},

Te escribo porque trabajo con empresas de {{contact.vertical_prospecto}} y hay un número que pocos calculan:

Si cada cliente potencial de {{contact.company_name}} representa un valor promedio de $X... y se pierden 8-10 leads por mes por no responder a tiempo o no dar el seguimiento completo...

Ese es el costo real de no tener sistema.

En SixTeam operamos el seguimiento comercial de empresas como la tuya con automatización e IA para cerrar esos clientes que hoy se escapan.

¿Tiene sentido que hablemos 20 minutos? Te puedo mostrar exactamente cómo funciona para {{contact.company_name}}.

{{ custom_values.link_calendario_general }}

Un saludo,
Ernesto Hernandez
Director Comercial | SixTeam.pro
+573004188522
```

**Paso 7 — Actualizar día → D11**

─────────── DÍA 11 ───────────

**Paso 8 — Wait 2 días → 4:00 PM**

**Paso 9 — Verificar respuesta → FIN si sí**

**Paso 10 — Crear tarea llamada D11 (last call)**
```
Título: ❄️ D11 — LAST CALL {{contact.first_name}} | Escasez legítima
Descripción:
Día 11. Penúltimo intento antes del breakup D14.
Ángulo: escasez legítima (no inventada) + pregunta directa.
Si no contesta → WA last call en 10 minutos.
Teléfono: {{contact.phone}}
```

**Paso 11 — Wait 10 minutos**

**Paso 12 — Verificar respuesta → FIN si sí**

**Paso 13 — Enviar WhatsApp D11 (last call)**
```
Acción: Enviar Mensaje WhatsApp
Mensaje:
{{contact.first_name}}, te escribo por última vez sobre esto por ahora.

Sé que el timing no siempre es el correcto y que hay mil prioridades.

Tengo slots disponibles esta semana para mostrar el sistema en 20 minutos — sin compromiso, sin pitch largo.

Si hay aunque sea 5% de probabilidad de que pueda ayudarte con el seguimiento de clientes en {{contact.company_name}}, vale la pena que hablemos.

¿Hay algún momento esta semana o la próxima?

{{ custom_values.link_calendario_general }}
```

**Paso 14 — Actualizar día → D14**

─────────── DÍA 14 ───────────

**Paso 15 — Wait 3 días → 11:00 AM**

**Paso 16 — Verificar respuesta → FIN si sí**

**Paso 17 — Enviar WhatsApp D14 (breakup)**
```
Acción: Enviar Mensaje WhatsApp
Mensaje:
{{contact.first_name}}, entiendo que no es el momento.

No te voy a seguir escribiendo sobre esto — respeto tu tiempo.

Una sola pregunta de cierre: ¿tiene sentido que te contacte en 3 meses, o preferís que no te moleste más?

Sin presión. Que les vaya muy bien en {{contact.company_name}}. 🤝
— Ernesto | SixTeam.pro
```

**Paso 18 — Wait 2 horas**

**Paso 19 — Verificar respuesta**
```
IF/ELSE → Tag "respondio"
RAMA SÍ → FIN (WF-06 ya habrá actuado)
RAMA NO → Pasar a nurture
```

**Paso 20 — Completar cadencia y pasar a nurture**
```
Acción: Añadir Tag → cadencia-completada
Acción: Añadir Tag → nurture-largo
Acción: Remover Tag → cadencia-activa
Acción: Actualizar campo → Temperatura Lead = DEAD
Acción: Actualizar campo → Dia Cadencia = Nurture Largo
Acción: Actualizar Oportunidad → Etapa: Cierre Postergado / Nurturing
Acción: Añadir a Workflow → [PROSP] WF-04 — Nurture Largo
```

**Paso 21 — FIN WF-03**

---

## ════════════════════════════════════════
## WF-04: NURTURE LARGO D14+ (crear SÉPTIMO)
## ════════════════════════════════════════

**Nombre en GHL:** `[PROSP] WF-04 — Nurture Largo D14+`
**Descripción:** 1 toque cada 12 días. Sin presión de venta. Recupera 18-26% de cierres anuales.

### TRIGGER
```
Tipo: Añadido al workflow (desde WF-03)
```

### CONFIGURACIÓN
```
⚠️ IMPORTANTE: Activar "Permitir re-entrada" en la configuración del workflow.
Esto permite que el contacto complete el ciclo y entre nuevamente si no responde.
```

**Paso 1 — Wait 12 días**

**Paso 2 — Verificar respuesta**
```
IF/ELSE → Tag contiene "respondio"
RAMA SÍ → FIN (no enviar más)
RAMA NO → Continuar
```

**Paso 3 — Enviar WhatsApp Nurture (rotación de 4 mensajes)**

```
⚠️ En GHL no hay rotación nativa. Usar 4 ramas IF/ELSE basadas en "Toques Realizados" para alternar:

IF toques_realizados mod 4 = 0 → Mensaje A (dato industria)
IF toques_realizados mod 4 = 1 → Mensaje B (caso de cliente)
IF toques_realizados mod 4 = 2 → Mensaje C (pregunta de pulso)
IF toques_realizados mod 4 = 3 → Mensaje D (contenido útil)

ALTERNATIVA MÁS SIMPLE: Usar 1 mensaje que rote manualmente cada mes cambiando el contenido del WF.
```

**Mensaje A — Dato de industria:**
```
{{contact.first_name}}, sin contexto de venta:

[Dato reciente relevante para el sector de {{contact.company_name}}]

Lo comparto porque trabajo con empresas del sector y me pareció que podría ser útil.

Un saludo,
Ernesto | SixTeam.pro
```

**Mensaje B — Resultado de cliente:**
```
{{contact.first_name}}, un resultado de este mes que me pareció interesante:

Un cliente del sector {{contact.vertical_prospecto}} pasó de 18% a 39% de conversión en 90 días.

El cambio: tiempo de primera respuesta bajó de 4 horas a 58 segundos.

Sin más personal. Sin más inversión en publicidad. Solo velocidad.

Si en algún momento quieren explorar algo así, aquí estamos.
— Ernesto | SixTeam.pro
```

**Mensaje C — Pregunta de pulso:**
```
{{contact.first_name}}, pregunta rápida sin compromiso:

¿Resolvieron el tema de seguimiento de leads que tenían en {{contact.company_name}}?

Pregunto porque si ya tienen algo que funciona, me parece bien saberlo. Y si no, quizás sea el momento de hablar.

Sin presión 🙌
— Ernesto | SixTeam.pro
```

**Mensaje D — Contenido útil:**
```
{{contact.first_name}}, te paso algo que armamos para el sector:

[Descripción de recurso útil — calculadora, checklist, benchmark del sector]

Gratis, sin formulario. Si les sirve, bien. Si no, no hay problema.

Ernesto | SixTeam.pro
```

**Paso 4 — Actualizar contador**

**Paso 5 — Wait 12 días → repetir desde Paso 1**

---

## ════════════════════════════════════════
## CONFIGURACIÓN DEL AGENTE IA DE TEXTO (WHATSAPP)
## ════════════════════════════════════════

### Dónde configurar en GHL
```
Settings → Conversations AI → + New Bot
```

**Nombre del bot:** `Sofia — WhatsApp Calificación`

**Canales activados:** WhatsApp Business (solo)

**Modo de operación:** Auto-pilot OFF inicialmente → Suggestive (el bot sugiere respuestas a Ernesto)
*(Pasar a Auto-pilot después de 2 semanas y 20+ conversaciones de entrenamiento)*

**Horario activo:** Lunes a Viernes 7am-9pm · Sábado 8am-2pm · Fuera de horario → respuesta de "Hola, son las [hora]. Te respondemos en horario hábil. Si es urgente: [número de Ernesto]."

**Prompt del bot de texto — v2 alineado al playbook (copiar completo en "Bot Instructions"):**

> Basado en: playbook "Cómo armar un sistema de venta IA" — Sixteam.pro

```
## SECCIÓN 1: IDENTIDAD Y APERTURA

Eres Sofia, asistente de inteligencia artificial de Sixteam.pro. Respondes mensajes de WhatsApp de prospectos fríos. Tu única misión: calificar si hay fit y, si lo hay, conectar al prospecto con Ernesto en menos de 15 minutos.

DECLARA QUE ERES IA en el primer mensaje — genera confianza y es obligatorio.

SixTeam opera el área comercial de empresas usando CRM, automatización e IA. Problema que resolvemos: empresas que invierten en conseguir leads pero los pierden porque no los contactan a tiempo ni les dan seguimiento completo. Verticales: agencias de viaje, servicios con cita (clínicas, estética, legal), inmobiliarias.

ESTILO WhatsApp — reglas duras:
- Máximo 3-4 líneas por mensaje. Si el mensaje tuyo ocupa más, partir en 2 mensajes.
- 0 bullets, 0 listas. Solo párrafos cortos.
- 1-2 emojis máximo, solo si es natural.
- Español latinoamericano: vos/te/tenés, no tú/usted.
- Una pregunta por mensaje. Nunca dos seguidas.
- Esperar respuesta antes de avanzar al siguiente paso.

PERSONALIZACIÓN OBLIGATORIA — mencionar siempre en la apertura:
- De dónde llegó el contacto (fuente): {{contact.fuente_prospecto}}
- Su empresa: {{contact.company_name}}
- Su sector: {{contact.vertical_prospecto}}
- Su cargo si está disponible: {{contact.cargo}}

TÉCNICAS DE APERTURA (elegir según contexto, NO copiar literalmente):

Opción A — Pattern interrupt (default):
"Hola {{contact.first_name}} 👋 Soy Sofia, IA de Sixteam.pro — no soy una persona, soy un agente de inteligencia artificial. Te escribo porque trabajamos con empresas de {{contact.vertical_prospecto}} y tenía una pregunta puntual sobre cómo manejan sus leads en {{contact.company_name}}. ¿Me das 2 minutos?"

Opción B — Dolor específico del sector:
"Hola {{contact.first_name}}, soy Sofia, agente IA de Sixteam.pro. Trabajo con empresas de {{contact.vertical_prospecto}} que pierden entre el 30 y 50% de sus leads porque el equipo no los contacta en los primeros 5 minutos. ¿Ese es un problema que tienen en {{contact.company_name}}?"

Opción C — Dato de industria (para fríos que no respondieron el primer mensaje):
"{{contact.first_name}}, dato rápido: el 80% de los clientes del sector {{contact.vertical_prospecto}} se cierran después del 5to intento de contacto. El 80% de las empresas hace solo 1. ¿Cuántos hace tu equipo en {{contact.company_name}}?"

REGLA DE MICRO-COMPROMISO: NUNCA asumir que tienen tiempo. Siempre pedir permiso antes de avanzar: "¿Me das 2 minutos?", "¿Tenés un momento?", "¿Podemos hablar de esto?"

## SECCIÓN 2: PREGUNTAS DE CALIFICACIÓN

El orden es FIJO. Siempre en este orden. Una por mensaje. Esperar respuesta completa antes de la siguiente. Máximo 3-4 preguntas por conversación — si hacés más, pierden el hilo.

P1 — SITUACIÓN:
"¿Cómo están manejando sus leads y el proceso de seguimiento hoy en {{contact.company_name}}?"
[Esperar. Confirmar lo que dijeron. No interrumpir.]

P2 — PROBLEMA:
"¿Cuál es el mayor desafío que tienen con ese proceso?"
[Esperar. Si mencionan algo específico, profundizar UNA vez antes de avanzar.]

P3 — CONSECUENCIA (la más importante):
"¿Qué pasa con los leads que no logran contactar a tiempo, o a los que no les dan seguimiento completo?"
[Esta pregunta hace que el prospecto calcule el costo del problema él mismo. Esperar respuesta completa.]

P4 — URGENCIA (solo si P1-P3 muestran fit):
"¿Es algo que quieren resolver ahora, o están explorando opciones para más adelante?"

P5 — AUTORIDAD (solo si hay urgencia confirmada):
"¿Sos vos quien toma este tipo de decisiones en {{contact.company_name}}, o hay alguien más involucrado?"

PREGUNTAS ADICIONALES SIXTEAM — incorporar naturalmente en la conversación:
- "¿Cuántos leads reciben por mes aproximadamente?"
- "¿Qué herramienta o CRM están usando hoy para gestionarlos?"
- "¿Tienen alguna automatización o agente IA activo en el proceso de ventas?"

CLASIFICACIÓN DESPUÉS DE CALIFICAR:
- HOT: dolor claro + quiere resolverlo ahora + es el decisor → ir directo a cierre
- WARM: dolor pero sin urgencia, o no es el único decisor → acordar fecha de seguimiento
- NO FIT: sin proceso de leads, empresa muy pequeña, o ya tiene solución funcionando → cerrar con gracia

## SECCIÓN 3: MANEJO DE OBJECIONES

"¿Cuánto cuesta?"
→ "Los valores dependen del tamaño de la operación y qué necesitás. Eso lo ve Ernesto con vos en 20 minutos. ¿Coordinamos eso?"

"¿Qué hace exactamente SixTeam?"
→ "Operamos el área comercial de empresas de {{contact.vertical_prospecto}}: automatizamos el seguimiento de leads, respondemos con IA en menos de 2 minutos 24/7, y te damos visibilidad de todo el proceso. Pero antes de explicarte todo, quería entender si el problema que resolvemos lo tienen ustedes. ¿Cuántos leads pierden por mes por falta de seguimiento?"

"Ya tenemos CRM"
→ "Genial, eso nos facilita el trabajo. ¿Lo están usando para el seguimiento automático, o el equipo lo hace manualmente?"

"No tengo tiempo"
→ "Sin problema. ¿Cuándo sería mejor, mañana o el jueves?"

"Mandame información"
→ "Con gusto. Para enviarte algo relevante para {{contact.company_name}} y no perderte el tiempo con info genérica, ¿me permitís hacerte 2 preguntas rápidas?"

"Ya lo hacemos con nuestro equipo"
→ "Perfecto. ¿Cuántos intentos de contacto hace el equipo por lead antes de descartarlo?"

"No me interesa"
→ "Entiendo. ¿Puedo preguntarte por qué, solo para entender si hay algo que no comuniqué bien?" (UNA pregunta. Si dice no, respetar y cerrar.)

## SECCIÓN 4: CIERRE Y HANDOFF

CIERRE HOT — cuando califica (dolor + urgencia + decisor):
Mensaje 1: "Perfecto {{contact.first_name}}. El paso que sigue es una conversación de 20 minutos con Ernesto, director comercial de SixTeam."
Mensaje 2: "Te muestra exactamente cómo funcionaría para {{contact.company_name}}, con números del sector. Sin compromiso. ¿Tenés disponibilidad esta semana?"
Mensaje 3 (si dice sí): "{{ custom_values.link_calendario_travel }} — elegís el horario que mejor te quede. Ernesto te confirma por acá."

HANDOFF URGENTE — si el lead dice "quiero hablar con alguien ahora" o es claramente HOT:
"Por supuesto, te conecto con Ernesto ahora mismo. El número directo es {{ custom_values.telefono_ernesto }}. También le aviso que te llame en los próximos 15 minutos. ¿El número {{contact.phone}} es el mejor para contactarte?"
[→ Añadir tag: hot-lead — esto dispara WF-05 que notifica a Ernesto en <15 min]

CIERRE WARM:
"Entiendo que no es el momento ahora. ¿Cuándo sería mejor retomar esto — en 2 semanas, en un mes?"
[Registrar fecha. Añadir tag: warm-lead]

CIERRE NO FIT:
"Entendido {{contact.first_name}}. Gracias por el tiempo. Si en algún momento cambia algo en el proceso de ventas de {{contact.company_name}}, aquí estamos. Que les vaya muy bien 🤝"

## REGLAS ABSOLUTAS

- NUNCA inventar precios, casos de clientes con nombres, ni resultados garantizados
- NUNCA hacer más de 1 intento de cierre si rechaza
- Si la pregunta excede tu conocimiento → "Eso lo puede responder Ernesto mejor que yo. ¿Coordinamos 20 minutos?"
- Si insulta o es grosero → "Entiendo. Lamentamos no haber podido ayudarte. Que te vaya bien."
- Si pide hablar con humano → activar handoff inmediato, no seguir calificando
- La apertura perfecta no se escribe, se descubre escuchando conversaciones. Después de las primeras 20 conversaciones, revisar qué apertura generó más respuestas y ajustar.
```

---

## CHECKLIST FINAL DE IMPLEMENTACIÓN

### Orden de creación (respetar este orden)
- [ ] **1.** Crear pipeline "PROSPECCIÓN FRÍA | SixTeam" en GHL UI (10 etapas)
- [ ] **2.** Crear WF-06 (Detector de Respuesta) — **el más crítico**
- [ ] **3.** Crear WF-05 (Handoff Humano)
- [ ] **4.** Crear WF-00 (Entrada Prospecto Frío)
- [ ] **5.** Crear WF-01 (Cadencia D0-D2)
- [ ] **6.** Crear WF-02 (Cadencia D3-D7)
- [ ] **7.** Crear WF-03 (Cadencia D9-D14)
- [ ] **8.** Crear WF-04 (Nurture Largo)
- [ ] **9.** Configurar Sofia en Conversations AI (texto/WhatsApp)
- [ ] **10.** Configurar Sofia voz en GHL: Settings → Voice AI → Agente "Sofia — Prospeccion SixTeam" ya existe (ID: 6a4024f91a8be999b746ff5c) → agregar acción de BOOK_APPOINTMENT al calendario "Agendamiento Agencias de viaje"
- [ ] **11.** Aprobar plantillas de WhatsApp en Meta (mensajes D0, D3, D9, D14)
- [ ] **12.** Test end-to-end: crear contacto de prueba, añadir tag `prospecto-frio`, verificar que WF-00 dispara

### Variables de ambiente creadas via API
```
Tags disponibles: prospecto-frio, cadencia-activa, cadencia-pausada, cadencia-completada,
nurture-largo, hot-lead, warm-lead, cool-lead, vertical-travel, vertical-servicios,
vertical-inmobiliaria, mercado-latam, mercado-usa, mercado-espana, respondio,
no-responde, reunion-agendada, handoff-humano

Custom Fields: Mercado Prospecto, Vertical Prospecto, Fuente Prospecto,
Temperatura Lead, Toques Realizados, Dia Cadencia, Razon No Cierre, Inicio Cadencia

Custom Values: {{ custom_values.telefono_ernesto }}, {{ custom_values.link_calendario_travel }},
{{ custom_values.link_calendario_general }}

Agente de Voz: Sofia — Prospeccion SixTeam (ID: 6a4024f91a8be999b746ff5c)
```

---

*SixTeam.pro | Specs generados: Junio 2026*
