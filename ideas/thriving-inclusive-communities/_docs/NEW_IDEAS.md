# New Solution Ideas — Thriving and Inclusive Communities

**Trimmed to top 3 by combined score (Pillar + Mayor's Choice).**

**Pillar:** Thriving and Inclusive Communities
**Ideas retained:** 3 (ranked by combined Pillar + Mayor's Choice score)
**Generated:** April 1, 2026
**Source context:** JTBD analyses, pain points, gap analyses (804Me, Circle Trust), prior art research, and Parallel AI research answers for both problem statements.

---

## Top 3 (combined score)

| Rank | Idea | PS | Pillar | Mayor's | Combined |
|------|------|----|--------|---------|----------|
| 1 | Reentry 72-Hour Navigator (14) | PS2 | 93 | 95 | 188 |
| 2 | Core Eligibility Pack Builder (13) | PS2 | 93 | 93 | 186 |
| 3 | WhatsApp Service Finder Bot (1) | PS1 | 88 | 90 | 178 |

---

## PS2 — Cross-Agency Service Navigation

> "Help residents navigate housing, workforce, and reentry services without repeating their story across every agency."

---

### Idea 14: Reentry 72-Hour Navigator

**PS:** PS2
**JTBD:** Job 1 (resident navigating reentry who retells their story)
**Problem it solves:** A Richmond resident exiting incarceration has no structured guide for the critical first 72 hours — when they must navigate probation/parole contact, housing, ID restoration, benefits enrollment, and workforce referral across disconnected agencies in a compressed timeframe.
**How it works:** A mobile-first, offline-capable step-by-step guide: "You just got out. Here's what to do today, tomorrow, and this week." Day 1: probation/parole check-in, OAR walk-in hours, emergency shelter contact (Homeward), GRTC route to DSS office. Day 2: DSS benefits screening (SNAP/Medicaid via CommonHelp or in-person), DMV ID restoration steps, Social Security card replacement. Day 3-7: Virginia Career Works enrollment, housing application (RRHA or nonprofit), mental health / SUD support. Each step includes: agency name, address, phone, bus route, documents needed, walk-in vs. appointment, and "what to say when you get there." Co-designed with OAR staff. Works offline after first load.
**Data sources:** OAR reentry program information, DSS office locations and hours, Virginia Career Works center locations, RRHA application process, GRTC GTFS data (bus routes and schedules), DMV ID requirements, VADOC reentry planning framework (RCJC pillars).
**Research grounding:** Supervised release requires probation contact within 72 hours — `ca_q1_systems.md` Q6; first 2-3 handoffs are where most attrition occurs — `A2_problem_landscape_cross_agency_navigation.md`; reentry residents disproportionately Black men in Richmond — `ca_q2_equity.md` Q14.

---

### Idea 13: Core Eligibility Pack Builder

**PS:** PS2
**JTBD:** Job 1 (resident navigating reentry who retells their story), Job 2 (case manager who refers into a black box)
**Problem it solves:** Richmond residents navigating reentry complete overlapping intake forms at DSS, Virginia Career Works, OAR, and housing providers — each asking for identity, income, household composition, and criminal history — because no information transfers between agencies and five legacy systems share zero client identifiers.
**How it works:** A guided, multilingual form that walks the resident through assembling a standardized "Core Eligibility Pack" — the shared minimum intake fields that satisfy DSS (SNAP/Medicaid), Virginia Career Works (WIOA), and RRHA (housing) simultaneously. The resident answers once: identity, income, household size, housing status, employment history, education level, selective service status, criminal justice involvement. The tool outputs a formatted PDF (printable and phone-storable) plus a QR code the resident can show at each agency. The resident owns the document — no data is stored on the server. Translated into EN/ES/AR with plain-language explanations for each field.
**Data sources:** Public intake requirements from DSS (CommonHelp application fields), Virginia Career Works (WIOA eligibility per VWL-24-03), RRHA (HUD-9886 requirements), OAR intake checklist.
**Research grounding:** Client-controlled data portability bypasses MOU and BAA requirements — `A2_problem_landscape_cross_agency_navigation.md`, `G4_risks_data_walls.md`; Core Eligibility Pack concept validated as partially feasible — `ca_q2_equity.md` Q10; five systems / zero shared identifiers — `G4_risks_data_walls.md`.

---

## PS1 — Immigrant Service Discovery

> "Help residents safely find and connect to trusted community services without creating accounts or sharing identifying information."

---

### Idea 1: WhatsApp Service Finder Bot (Signpost-Lite)

**PS:** PS1
**JTBD:** Job 1 (resident who fears exposure), Job 2 (CBO staff needing cross-referral)
**Problem it solves:** Richmond's immigrant communities use WhatsApp as a primary communication channel, but no service discovery tool exists in that channel — forcing residents to discover and navigate standalone websites they don't trust.
**How it works:** A WhatsApp Business bot answers the top 10 newcomer questions (food, housing, legal aid, ESL, healthcare, dental, immigration legal, domestic violence, childcare, ID/documents) with interactive button menus — no typing required. Canned responses in English, Spanish, and Arabic link to verified services with "call now" CTAs and "last verified" dates. When a query exceeds triage scope, the bot hands off to a human navigator inbox (Zendesk or Front) with a stated 24-hour SLA. Co-branded with OIRE and Sacred Heart Center for trust signaling.
**Data sources:** OIRE trusted-organization list (15 orgs), manually verified Help1RVA listings (immigrant-serving subset), 211 Virginia as default fallback hotline, OIRE-confirmed communication channel preferences.
**Research grounding:** Signpost/Documented.info pattern (58M reached, 142K two-way users via web + WhatsApp + human liaison) — `E1_prior_art_immigrant_service_tools.md`; OIRE confirmed WhatsApp as primary direct messaging channel — `D2_data_community_org_directories.md`, `id_q2_trust.md`.
