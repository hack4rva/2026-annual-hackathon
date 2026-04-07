# Roundtable (Condensed): ExploreRVA

**Date:** 2026-04-02  
**Slug:** explorerva  
**Pillar:** A City That Tells Its Stories (`city-storytelling`)  
**Idea path:** `2026-annual-hackathon/ideas/city-storytelling/explorerva/`  
**Live site (submission):** https://explorerva.org  

---

## 1. Input materials

| Source | Loaded |
|--------|--------|
| `explorerva/IDEA.md` | Yes — spoken-word problem frame; stale links, wrong maps, loss of living memory (“man on the corner”) |
| `explorerva/RESEARCH_RESULT.md` | Yes — aggregators & web-first (StoryMaps, PWAs, VoiceMap) beat single-site native apps; adoption data |
| `explorerva/INNOVATION_ANALYSIS.md` | Yes — content strategy not app; QR + StoryMap MVP; passport optional |
| `RICHMOND_TECH_STACK_2026.md` | Yes — GeoHub/ArcGIS; CultureWorks/Localist feeds (ICS/RSS/JSON, partnership for bulk); no 311/EnerGov blockers |
| `pillar-city-storytelling/research/INDEX.md` | Yes — arts discovery vs. resident stories; consent/bias risks in F/G/H series |

---

## 2. Persona simulations (7 × 3–5 sentences)

Web grounding: parallel queries on Richmond cultural events/tourism, CultureWorks/Localist, ArcGIS StoryMaps municipal trails, CultureWorks cultural equity & NEA, museum app adoption / QR-web alternatives, NEA community storytelling grants, plus pillar-local context from loaded docs.

### INNOVATOR
The strongest product insight is already in INNOVATION_ANALYSIS: **distribution beats ownership**. Industry evidence repeatedly shows single-venue native cultural apps reach only a tiny fraction of visitors (often low single-digit %), while marketplaces (e.g., VoiceMap) and aggregators scale because one install serves many destinations. ExploreRVA should not compete with CultureWorks’ calendar head-on; it should differentiate on **place-based, persistent trails** and **oral-history depth** that a calendar row cannot hold. The spoken-word pitch is memorable brand glue; the scalable chassis is StoryMaps + QR (and optionally VoiceMap for tourists). *Queries:* museum app adoption / download friction; ArcGIS StoryMaps city trails.

### ACTIVIST
Richmond’s arts equity conversation (CultureWorks cultural-equity grants, Public Art Master Plan geography) asks who gets **visibility** and who gets **edited out**. A trail network that only canonizes downtown murals risks reinforcing existing cultural geography unless curation explicitly budgets voices from Southside, East End, and displaced communities—with consent protocols from pillar G-research, not “extract and post.” The poem’s elder on the corner is the right moral center: implementation must fund **time and trust**, not only QR stickers. *Queries:* Richmond arts equity / CultureWorks; oral-history consent themes (from index → G2).

### CITIZEN
The everyday pain in IDEA.md is recognizable: dead Eventbrite links, pages that vanish after the show, bad addresses—search feels like “echoes,” not a living city. A frictionless **scan-and-walk** experience matches how people actually behave on the street (no new app). Success for me is “I found something **true tonight** in **my neighborhood**,” not another aggregated calendar I do not trust. *Queries:* Richmond local discovery / calendar fragmentation (partial signal: multiple ghost-tour channels, richmond.com calendar load issues in search snippets).

### MAYOR
From a city-leadership lens, this is **low regulatory risk** and **high narrative upside**: it showcases Richmond as culturally alive and visitor-friendly, aligned with major draws (e.g., Folk Festival, VMFA, Fringe) without requiring a heavy IT project. The City should not “own” every QR on private buildings; a **DMO + nonprofit + merchant association** triangle is cleaner. Political exposure stays low if the City’s role is **sponsorship or GIS facilitation**, not endorsing every story as official history. *Queries:* Richmond cultural events / tourism 2026.

### ARCHITECT
RICHMOND_TECH_STACK_2026 already assumes **Esri / GeoHub** in the civic stack; StoryMaps are a natural fit and avoid bespoke backend for a first slice. Pair **UTM-tagged QR URLs** with GA4 on StoryMaps for measurable pilots. Keep scope **static-first** (no user accounts, no PII) to sail past AR 2.13 AI review unless you add generative or personalization layers later. *Queries:* ArcGIS StoryMaps municipal cultural trails (Balboa Park, Santa Fe, Lakeland, Bellingham examples).

### FRONTLINER
CultureWorks already operates a **Localist-powered** regional calendar with widgets and digests—frontline arts staff do not need another place to re-key every show. ExploreRVA wins if it is **complementary**: deep narrative at physical waypoints, deep links to authoritative listings, and clear **“source of truth”** for dates. Operational burden should sit with **neighborhood partners** who can replace weathered QR sleeves and refresh copy seasonally. *Queries:* CultureWorks calendar / Localist widgets.

### FUNDER
Funders (e.g., NEA-style community history, CultureWorks regranting, creative placemaking) respond to **measurable community benefit** and **equitable reach**—passport/check-in pilots with merchant partners echo Toledo-style economic narratives INNOVATION_ANALYSIS cites. A tight **12-month pilot** (one corridor, documented scans, completion rates, partner surveys) is more fundable than “platform for everything.” Oral-history integration should show **release forms and community review**, not just tech. *Queries:* NEA digital storytelling / Our Town–style placemaking patterns.

---

## 3. Top 3 tensions — and how to resolve them

| Tension | Resolution |
|---------|------------|
| **A. Events freshness vs. place-based permanence** | Position ExploreRVA as **trails + stories** anchored in space; link out to CultureWorks/venue ICS for **dates**. Do not promise a real-time event engine without ingestion SLAs. |
| **B. “Man on the corner” (inclusive memory) vs. low-friction QR product** | Product cannot substitute for **relationship and consent**. Pilot with a named community partner + archived clips (e.g., existing oral-history corpora per pillar D4) rather than anonymous street recording. |
| **C. City/DMO branding vs. civic truth-telling** | Use **third-party editorial independence** for contested histories; City funds **infrastructure** (GIS, wayfinding permits) and **accessibility**, not line-by-line historical arbitration. |

---

## 4. Fatal flaw test

| Lens | Assessment |
|------|------------|
| **Data dependency** | **Moderate.** No single open API covers “all culture”; **curated content** is the bottleneck. CultureWorks feeds are usable with permission and rate discipline—not a structural wall. |
| **Structural wall (311 / OnBase / EnerGov / B2GNow / DPW GPS)** | **None apply.** Idea does not require AvePoint, contracts PDFs, permits API, OMBD bulk, or fleet telemetry. |
| **Ownership vacuum** | **Conditional risk.** Without an anchor (DMO, CultureWorks coalition, or neighborhood CDC), QR trails **decay**. Mitigation: signed steward + replacement budget. |
| **Harm potential** | **Moderate if mishandled:** representational bias, copyright on images/audio, non-consensual story capture. Mitigation: pillar G-playbooks (consent, attribution, bias review). |
| **Political exposure** | **Low–moderate** if histories touch displacement or race; keep **transparent sourcing** and avoid implying Mayoral endorsement of every narrative. |

**No single fatal flaw** if the team adopts web-first scope, partners for listings, and ethical story governance.

---

## 5. Verdict

**SHIP WITH CONDITIONS**

**Conditions (minimum):** (1) Anchor institution or merchant association for **content + QR maintenance**; (2) **Explicit relationship** to CultureWorks (or equivalent) for event dates; (3) **Consent + attribution** policy before any oral-history or portrait content ships; (4) Pilot **one neighborhood trail** with analytics before scaling.

---

## 6. Scores (1–5) and award math

| Category | Score | Rationale (brief) |
|----------|:-----:|-------------------|
| **Impact** | **3** | Meaningful for cultural vitality and tourism; not an acute safety or service-delivery crisis. |
| **Feasibility** | **5** | StoryMaps + QR + optional VoiceMap aligns with existing Esri stack and commodity web hosting. |
| **User Value** | **4** | Directly addresses stale search and discovery friction; trails add embodied value. |
| **Execution** | **3** | Pitch and research are strong; IDEA emphasizes performance over a **documented working slice** in-repo. |
| **Innovation** | **4** | Clear reframe (content + distribution channels vs. another app); poem-as-demo is distinctive. |
| **Equity** | **3** | Inclusive *intent* in narrative; equity **outcomes** depend on curation and consent—not proven in artifact. |

### Weighted totals

- **Mayor’s Choice** = Impact×5 + Feasibility×5 + User Value×4 + Execution×3 + Equity×3 + Innovation×1  
  = 15 + 25 + 16 + 9 + 9 + 4 = **78**

- **Pillar Award** = Impact×5 + User Value×4 + Feasibility×3 + Innovation×3 + Execution×3 + Equity×3  
  = 15 + 16 + 15 + 12 + 9 + 9 = **76**

- **Moonshot** = Innovation×5 + Impact×4 + User Value×3 + Equity×3 + Feasibility×2 + Execution×2  
  = 20 + 12 + 12 + 9 + 10 + 6 = **69**

---

## 7. One-line synthesis

ExploreRVA’s poetry names a real discovery-and-memory gap; the credible ship path is **web-first trails (StoryMaps + QR, optional VoiceMap)** partnered with existing arts calendars and governed **consent-first** storytelling—not a standalone app.
