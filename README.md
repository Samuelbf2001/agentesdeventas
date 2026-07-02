# Agentes de Ventas — Sixteam.pro

Repositorio del **sistema comercial y de prospección de Sixteam.pro**: el plan operativo de prospección fría multicanal (GoHighLevel + Apollo + IA), los playbooks de venta del equipo y el contenido de marketing para redes sociales.

> **Promesa raíz de la marca:** "Operamos los sistemas comerciales de tu empresa. No te dejamos solos."
> **Un solo CTA en todo el funnel:** agendar 20 minutos. No vender en el primer contacto.

---

## Estructura del repositorio

```
agentesdeventas/
├── README.md                        ← Este archivo
├── CONTEXTO.md                      ← Contexto completo del proyecto: estado, decisiones y roadmap
├── CLAUDE.md                        ← Instrucciones para Claude Code (foco: contenido social)
│
├── sistema-prospeccion-sixteam.md   ← PLAN MAESTRO: sistema de prospección fría 14 días (v1)
├── workflows-ghl-specs.md           ← Specs técnicos de los workflows GHL (IDs reales, orden de creación)
├── playbook-ventas-ia.md            ← Playbook fuente: sistema de ventas con IA (Lead Nurture + Apertura en Llamadas)
│
├── docs/
│   └── PLAYBOOKS-DE-VENTA-SIXTEAM.md  ← Los 5 playbooks del equipo: prospección, discovery, demo, propuesta, objeciones
│
├── marketing/
│   ├── estrategia/
│   │   └── angulos-de-venta-v2.md     ← Los 8 ángulos de venta
│   └── outreach/                      ← Piezas de outreach: emails fríos CO/USA, seguimientos, pitch llamada, plan Apollo
│
├── contenido-social/                  ← Piezas visuales para redes (HTML autocontenido)
│   ├── PLAN-DE-CONTENIDOS-30X.md      ← Calendario y plan de 30 piezas
│   ├── instagram/ · linkedin/ · carruseles/ · email/ · pautas/ · newsletter/ · videos/
│
└── .claude/skills/sixteam-comercial/  ← Skill con el conocimiento comercial V2
```

## Documentos clave (por orden de lectura)

| # | Documento | Qué contiene |
|---|-----------|--------------|
| 1 | [CONTEXTO.md](CONTEXTO.md) | Estado actual del proyecto, qué está construido en GHL, gaps identificados y roadmap v2 |
| 2 | [playbook-ventas-ia.md](playbook-ventas-ia.md) | La teoría base: regla de los 5 minutos, cadencia de 14 días, 4 pilares del nurture, anatomía del agente de voz |
| 3 | [docs/PLAYBOOKS-DE-VENTA-SIXTEAM.md](docs/PLAYBOOKS-DE-VENTA-SIXTEAM.md) | Los 5 playbooks operativos que usan Ernesto y Samuel en cada interacción comercial |
| 4 | [sistema-prospeccion-sixteam.md](sistema-prospeccion-sixteam.md) | El plan de implementación: tags, custom fields, pipeline, 6 workflows, mensajes por día y por vertical, agente IA Sofia |
| 5 | [workflows-ghl-specs.md](workflows-ghl-specs.md) | Los specs paso a paso para montar los workflows en GHL, con IDs reales de usuarios, calendarios y pipelines |

## Stack

| Herramienta | Rol |
|-------------|-----|
| **GoHighLevel (GHL)** | CRM, workflows, conversaciones, agente de voz IA |
| **Apollo** | Sourcing de prospectos fríos por ICP |
| **WhatsApp Business** | Canal principal de cadencia (máx. 50 mensajes nuevos/día por número) |
| **Twilio** | Llamadas salientes |
| **Claude** | Generación de copy, personalización y análisis |

## Verticales y mercados

- **Verticales:** Travel / agencias de viaje (ancla) · Servicios con cita (clínicas, legales, estética) · Inmobiliaria
- **Mercados:** LATAM (Colombia, México, Argentina, Chile) · USA · España (ángulo Kit Digital)

## Flujo de trabajo

1. **Prospección:** Apollo → CSV → importar a GHL con tag `prospecto-frio` → dispara la cadencia de 14 días (WF-00 a WF-06)
2. **Respuesta:** WF-06 detecta respuesta → pausa cadencia → si es positiva, handoff a humano en <15 min (WF-05)
3. **Venta:** Discovery 30 min → Demo 20 min → Propuesta en 24h → Seguimiento (ver playbooks 2–4)
4. **Contenido:** las piezas de redes se crean según el flujo definido en [CLAUDE.md](CLAUDE.md) y se guardan en `contenido-social/`

---

*Sixteam.pro · Última actualización: julio 2026*
