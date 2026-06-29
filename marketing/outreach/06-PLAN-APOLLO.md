# Plan de acción — Apollo.io para el outreach de Sixteam.pro

> Ejecuta la cadencia de 14 días (ver `00-GUIA`) y todas las piezas (`01`–`04`) dentro de Apollo.io.
> Cubre: infraestructura de envío → ICP y listas → secuencias → dialer → LinkedIn → métricas → cumplimiento.
> Mercados: Colombia 🇨🇴 + USA 🇺🇸. Roles: **Ernesto** (publica/llama) · **Samuel** (escribe/opera).

---

## Resumen de fases

| Fase | Qué se hace | Tiempo | Responsable |
|---|---|---|---|
| 0 | Infraestructura de envío (dominios, buzones, warmup) | Semana 0–2 (en paralelo) | Samuel |
| 1 | Definir ICP y segmentos en Apollo | Día 1–2 | Samuel |
| 2 | Construir listas + verificar emails | Día 2–4 | Samuel |
| 3 | Montar las secuencias (cadencia 14 días) | Día 3–5 | Samuel |
| 4 | Configurar el dialer (llamadas en frío) | Día 4–5 | Ernesto |
| 5 | Pasos de LinkedIn dentro de la secuencia | Día 5 | Ernesto/Samuel |
| 6 | A/B testing y QA | Día 5–6 | Samuel |
| 7 | Lanzamiento + ritmo operativo diario | Semana 3 en adelante | Ambos |

> ⚠️ **No envíes en frío desde dominios nuevos sin warmup.** La Fase 0 corre en paralelo a la 1–6, pero los envíos reales empiezan solo cuando el warmup lleva 2–3 semanas.

---

## FASE 0 · Infraestructura de envío (lo más importante)

El 90% del éxito del cold email es no caer en spam. Apollo envía bien, pero la reputación depende de tu dominio.

### 0.1 Dominios de envío (nunca quemar sixteam.pro)
- Compra **2–3 dominios secundarios** parecidos: `getsixteam.pro`, `sixteam-team.com`, `trysixteam.com`.
- Configura **redirect 301** de cada dominio secundario a sixteam.pro (para que se vean legítimos).
- Esto protege la reputación del dominio principal para emails transaccionales/clientes.

### 0.2 Buzones
- **2 buzones por dominio** (ej: `ernesto@`, `samuel@`) → con 3 dominios = hasta 6 buzones.
- Usa Google Workspace o Microsoft 365 (mejor entregabilidad que SMTP genérico).

### 0.3 Autenticación DNS (obligatorio en cada dominio)
```
SPF    → autoriza al proveedor de correo
DKIM   → firma criptográfica del dominio
DMARC  → política (empieza en p=none, sube a quarantine)
Custom tracking domain en Apollo (CNAME) → no usar el tracking compartido de Apollo
```

### 0.4 Warmup (2–3 semanas antes de enviar en frío)
- Activa el **warmup de buzones** (Apollo lo ofrece, o usa un warmup dedicado).
- Sube volumen gradual: semana 1 = 5–10/día, semana 2 = 15–25/día, semana 3 = 30–40/día.
- **Límite en frío por buzón:** 30–40 emails/día máximo. Más que eso = riesgo de spam.
- Con 6 buzones → capacidad real ~180–240 emails/día sin quemar nada.

### 0.5 Conectar a Apollo
- Settings → Mailboxes → conecta cada buzón.
- Define el **sending schedule** por mercado (ver Fase 7).
- Activa verificación de email integrada y "no enviar a unverified".

---

## FASE 1 · ICP y segmentos en Apollo

Cada uno de los 6 segmentos del kit se traduce a un filtro de búsqueda de Apollo (People Search). Crea una **Saved Search** por segmento.

### Filtros recomendados por segmento

| Segmento | Location | Employees | Industry (keywords) | Títulos (Job titles) |
|---|---|---|---|---|
| **Agencias CO** | Colombia | 5–50 | Marketing & Advertising, Digital Marketing | Founder, CEO, Director Comercial, Head of Growth, Gerente |
| **Pequeñas CO** | Colombia | 2–20 | Travel, Real Estate, Professional Services, Health | Founder, Owner, Gerente General, Director |
| **Medianas CO** | Colombia | 50–250 | (transversal por vertical objetivo) | VP Sales, Director Comercial, Head of Revenue/RevOps, COO |
| **Agencies US** | United States | 5–50 | Marketing & Advertising | Founder, CEO, Head of Growth, VP Marketing |
| **Small biz US** | United States | 2–20 | Travel, Real Estate, Local Services | Owner, Founder, President |
| **Mid-size US** | United States | 50–250 | (transversal) | VP Sales, RevOps, Director of Sales, COO |

### Refinamientos clave
- **Excluir**: contactos ya en tu CRM, clientes actuales, competidores. Usa la opción *"Exclude saved contacts / Do not contact list"*.
- **Buyer intent / keywords**: añade keywords como "CRM", "pipeline", "sales team", "leads" en la empresa cuando aplique.
- **Seniority**: marca Owner / Founder / C-Suite / VP / Director.
- **Email status**: filtra solo **Verified** antes de exportar a lista.
- **Tamaño de lote**: 50–100 contactos verificados por segmento/semana al inicio (no más, para mantener calidad y poder personalizar la `[línea-1]`).

### Convención de nombres de Saved Search / List
```
[Mercado]-[Segmento]-[Mes]    →    CO-Agencias-2026-07
                                    US-MidSize-2026-07
```

---

## FASE 2 · Construir listas y verificar

1. Corre la Saved Search → revisa calidad de los primeros 20 resultados manualmente.
2. **Verifica emails** (Apollo verifica al exportar; descarta "unverified" y "catch-all" de riesgo).
3. Crea una **List** por segmento con la convención de nombres.
4. Enriquecе campos que usarás como merge fields: `first_name`, `company_name`, `title`, `industry`, `linkedin_url`, `phone`.
5. Para la **`[línea-1]` personalizada**: crea una **columna/custom field "Apertura"** y rellénala manualmente por contacto (2 min de research). Sin esto, la respuesta cae a la mitad — ver `00-GUIA` punto 4.

> Regla de oro: **calidad > volumen**. 50 contactos bien personalizados rinden más que 500 genéricos quemando tu dominio.

---

## FASE 3 · Secuencias (la cadencia de 14 días en Apollo)

Crea **una secuencia por mercado** (ES y EN no se mezclan). Reusa la misma estructura; cambia solo el copy del segmento.

### Mapeo de la cadencia → pasos de Apollo

| Día | Tipo de paso en Apollo | Contenido | Archivo fuente |
|---|---|---|---|
| 0 | **Manual email** (revisión humana de `[línea-1]`) | Email frío del segmento | `01` / `02` |
| 0 | **Action item / LinkedIn — connect** | Enviar solicitud de conexión | `00-GUIA` |
| 3 | **Manual email** o tarea WhatsApp* | Seguimiento corto | `03` · Seg. 1 |
| 5 | **LinkedIn — send message** (task) | DM directo | `03` · Seg. 2 |
| 7 | **Automated email** (mismo hilo) | "El cálculo que duele" | `03` · Seg. 3 |
| 10 | **Action item** | Toque de valor (compartir post real) | `00-GUIA` |
| 14 | **Automated email** (mismo hilo) | "Cierro el hilo" | `03` · Seg. 4 |
| 1–7 | **Call task** (paralelo) | Llamada en frío | `04` |

> *WhatsApp no es nativo de Apollo: créalo como **manual task** con el texto pegado, o intégralo vía Zapier/webhook hacia la plataforma de Sixteam.pro. Recomendado: tarea manual al inicio, automatizar después.

### Reglas de la secuencia
- **Día 0 como "manual email"**, no automático: obliga a revisar la `[línea-1]` antes de salir.
- **Follow-ups en el mismo hilo** (Apollo: "reply to previous thread") — no abrir hilo nuevo.
- **Auto-stop on reply / on meeting booked**: activado. Si responden, la secuencia se detiene sola.
- **Sending window**: solo días hábiles, 7:30–9:00 y 16:00–17:30 hora local del mercado.
- **Merge fields**: `[Nombre]`→`{{first_name}}` · `[Empresa]`→`{{company_name}}` · `[línea-1]`→`{{Apertura}}` (custom field) · `[sector]`→`{{industry}}`.

### Estructura a crear en Apollo
```
Sequence: CO — Outreach 14d (Agencias)
Sequence: CO — Outreach 14d (Pequeñas)
Sequence: CO — Outreach 14d (Medianas)
Sequence: US — Outreach 14d (Agencies)
Sequence: US — Outreach 14d (Small)
Sequence: US — Outreach 14d (Mid-size)
```

---

## FASE 4 · Dialer (llamadas en frío)

- Las **Call tasks** aparecen en el panel de tareas diarias de Apollo. Ernesto las trabaja en bloque.
- Activa **local presence** (número local del país) para mejorar tasa de respuesta.
- Activa **call recording** (con aviso legal donde aplique) para revisar y mejorar el script.
- Configura **voicemail drop**: graba un mensaje de 15 s para dejar sin re-grabar cada vez.
- El **script vive en `04-pitch-llamada-fria.md`** — tenlo abierto al lado.

### Dispositions (resultados de llamada) a configurar
```
Conectó – agendó reunión      → mover a stage "Reunión agendada"
Conectó – no interesado       → pedir referido, marcar Do Not Contact si aplica
Conectó – callback            → crear tarea de re-llamada
Voicemail                     → drop + mencionar en el email de seguimiento
No contestó                   → reintentar en otra franja horaria
Número equivocado             → corregir dato / descartar
```

### Voicemail (15 s, español)
> "Hola [Nombre], soy [tu nombre] de Sixteam.pro. Te llamaba por el tema de seguimiento de leads en [Empresa] — te dejo también un correo. Si quieres, hablamos 20 minutos esta semana. Gracias."

---

## FASE 5 · LinkedIn dentro de la secuencia

Apollo no automatiza LinkedIn (riesgo de baneo), pero genera **tasks** con el texto listo:
- **Día 0:** task "Conectar" → enviar solicitud sin nota (o nota corta).
- **Día 5:** task "Enviar DM" → pegar el mensaje de `03` · Seguimiento 2.
- Ernesto/Samuel ejecutan manualmente desde su perfil (el contenido orgánico de su perfil sostiene la credibilidad — ver estrategia de contenido).

---

## FASE 6 · A/B testing y QA

- En el paso de email del Día 0, activa **A/B de asunto** (Apollo permite variantes por step). Usa el Asunto A y B de cada archivo.
- Reparte 50/50. Deja correr hasta ~50 envíos por variante antes de elegir ganador.
- **QA pre-lanzamiento** (checklist obligatorio):
  - [ ] Merge fields renderizan bien (envía un test a tu propio correo).
  - [ ] Sin `[corchetes]` sin reemplazar.
  - [ ] Links de unsubscribe presentes (Fase 9).
  - [ ] Hilos encadenados correctamente.
  - [ ] Sending window correcto por mercado.
  - [ ] Solo emails "Verified" en la lista.

---

## FASE 7 · Métricas, benchmarks y ritmo operativo

### KPIs en el dashboard de Apollo
| Métrica | Benchmark sano | Acción si está bajo |
|---|---|---|
| Open rate | >40% | Revisar asunto / reputación de dominio |
| Reply rate | >5% | Revisar copy / segmentación / `[línea-1]` |
| Positive reply | >2% | Revisar oferta y ajuste ICP |
| Meetings booked | meta semanal definida | Más volumen o mejor calificación |
| Bounce rate | <3% | Mejorar verificación; pausar si sube |
| Spam/unsub | <0.5% | **Pausar y revisar** — riesgo de dominio |

### Ritmo operativo semanal
```
LUNES      Samuel carga 50–100 contactos nuevos verificados por mercado + rellena [línea-1]
MAR–JUE    Secuencias corriendo · Ernesto trabaja bloque de call tasks (am) · ambos responden DMs/replies < 2h
VIERNES    Revisión de métricas Apollo · elegir asuntos ganadores · ajustar copy de la semana siguiente
DIARIO     Responder cada reply en < 2 horas (la velocidad es el factor #1 de conversión)
```

---

## FASE 8 · Cumplimiento legal

- **Colombia (Ley 1581 / Habeas Data):** incluye identidad clara del remitente, propósito comercial y mecanismo de exclusión. Atiende solicitudes de baja de inmediato.
- **USA (CAN-SPAM):** asunto no engañoso, dirección física en el pie, link de opt-out funcional, procesar bajas en ≤10 días.
- **Apollo:** mantén actualizada la **Do Not Contact list**; activa el footer de unsubscribe en cada secuencia.
- **Nunca** importar listas compradas fuera de Apollo ni enviar a "catch-all" sin verificar.

---

## FASE 9 · Integración con la plataforma de Sixteam.pro

- Conecta Apollo → tu CRM vía **integración nativa, API o Zapier/webhook**.
- **Trigger:** cuando una disposition = "Reunión agendada" o un reply es positivo → crear/actualizar oportunidad en el pipeline de Sixteam.pro (stage "Reunión agendada").
- Sincroniza actividad (emails, llamadas) al contacto para tener el historial completo.
- Así el outreach de Apollo alimenta directo la operación comercial que vendes — y se vuelve tu propio caso de uso demostrable.

---

## Checklist de lanzamiento (imprime esto)

```
INFRAESTRUCTURA
[ ] 2–3 dominios secundarios comprados + redirect 301
[ ] 6 buzones creados (Google/MS365)
[ ] SPF + DKIM + DMARC + custom tracking domain en cada dominio
[ ] Warmup activo ≥ 2 semanas
[ ] Buzones conectados a Apollo · límite 30–40/día/buzón

LISTAS
[ ] 6 Saved Searches creadas (3 CO + 3 US)
[ ] Primer lote verificado (50–100 por segmento)
[ ] Custom field "Apertura" rellenado por contacto
[ ] Excluidos clientes/competidores/Do Not Contact

SECUENCIAS
[ ] 6 secuencias montadas con la cadencia de 14 días
[ ] Merge fields probados con email de test
[ ] A/B de asunto activado
[ ] Auto-stop on reply / meeting activado
[ ] Sending window por mercado configurado
[ ] Footer de unsubscribe presente

LLAMADAS
[ ] Dialer configurado · local presence · grabación
[ ] Voicemail drop grabado
[ ] Dispositions configuradas

LANZAMIENTO
[ ] QA completo pasado
[ ] Integración con CRM Sixteam.pro activa
[ ] Ritmo semanal asignado (Ernesto/Samuel)
```

---

## Cronograma de 4 semanas

| Semana | Foco |
|---|---|
| **S1** | Comprar dominios, crear buzones, DNS, **iniciar warmup**. En paralelo: montar ICP, Saved Searches y primer lote de listas. |
| **S2** | Warmup continúa. Montar las 6 secuencias, dialer, A/B, QA. Rellenar `[línea-1]` del primer lote. Integración CRM. |
| **S3** | **Lanzamiento real** (warmup ya maduro). Empezar con 1 mercado/2 segmentos para validar copy. Responder replies < 2h. |
| **S4** | Escalar a los 6 segmentos. Optimizar con datos reales: ganadores A/B, ajustar ICP, reemplazar el claim "30%+" por el primer caso real medido. |

---

*Sixteam.pro · Plan Apollo · junio 2026 · complementa los archivos `00`–`05` del kit de outreach.*
