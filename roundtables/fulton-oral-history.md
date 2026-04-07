# Roundtable (Condensed): Fulton Oral History Interactive Map

**Initiated:** 2026-04-02  
**Slug:** `fulton-oral-history`  
**Pillar:** A City That Tells Its Stories (`city-storytelling`)  
**Source:** Hack for RVA — Team Temporary  
**Idea path:** `2026-annual-hackathon/ideas/city-storytelling/fulton-oral-history/`

## Input Materials

| File | Status |
|------|--------|
| IDEA.md | Loaded |
| RESEARCH_RESULT.md | Loaded |
| INNOVATION_ANALYSIS.md | Loaded |
| RICHMOND_TECH_STACK_2026.md | Loaded |
| `pillar-repos/pillar-city-storytelling/research/INDEX.md` | Loaded (C3 oral history, D4 archives, E3 place-based, G2 consent referenced) |

---

## Persona Round (simulated + WebSearch grounding)

### INNOVATOR
The product pattern—geotagged clips from an existing archive—is not novel; Alexandria maps 200+ oral histories in ArcGIS, and AEMP proved custom Mapbox stacks with consent flags. The **non-obvious wedge** is treating VCU’s 17-interview Historic Fulton corpus as *dormant infrastructure* to be activated with a historical basemap (Sanborn / “Renewing Inequality” overlay) so the personal and structural displacement story land together. WebSearch confirmed the VCU collection (17 interviews, 32 participants, streaming + transcripts, 2011–2012 partners including The Valentine and Fulton-area orgs) and that national funders are actively backing Richmond place-memory work (Mellon Shockoe / Valentine ecosystem). Risk: without consent-as-code or tiered display, “innovation” becomes a prettier extraction layer.

**Queries:** Richmond Fulton oral history VCU; Mellon Richmond historical narratives funding.

---

### ACTIVIST
Displacement memory is political: publishing quotes and locations without descendant governance repeats the harm pattern research names “place harm” (mapping enabling screening, doxxing, or speculative narratives). The team’s heart is in the right place—centering Fulton’s urban renewal clearance—but the demo must not outpace **revocation paths, block-level aggregation, and narrator-approved excerpts** (OHA / AEMP standards). WebSearch surfaced AEMP’s public data-use stance: sensitive narrative data stays out of aggregate DB without authorization; Tor suggested for submitters—signals how high the trust bar is for mapped oral history in gentrifying contexts.

**Queries:** Anti-Eviction Mapping Project oral history consent privacy; Richmond Fulton VCU urban renewal.

---

### CITIZEN
As a newcomer or VCU student, an interactive map beats digging through Scholars Compass for “why this empty lot.” The **73% poll** is directional, not evidence of sustained use; the interview ask for a guided tour matches how people actually explore neighborhoods (walking, not desktop GIS). One friction: full transcript/audio deep links are still “planned,” so the experience may feel like a teaser unless rights and UX close the loop. WebSearch: VCU’s Historic Fulton pages (`scholarscompass.vcu.edu/ful/`, `go.vcu.edu/historicfulton`) are the canonical access point today—any app should visibly credit and deep-link there.

**Queries:** Historic Fulton Oral History Project VCU (collection scope, partners).

---

### MAYOR / City Hall lens
This does **not** require 311, EnerGov, or ERP integration—aligns with “static site + institutional partnership” in the tech stack doc. The **replicable municipal model** is Alexandria’s Colored Rosemont initiative: city cultural office + oral history center + descendant collaboration + ArcGIS Experience + physical outcomes (state marker 2024/2025, heritage trail). Richmond already has Mellon-funded interpretive momentum; Fulton could be positioned as a **complementary East End memory corridor** if OHR or Parks/PLI champions it—but the City should not “own” narrative consent; that stays with community + archive holders.

**Queries:** Alexandria Colored Rosemont oral history ArcGIS city partnership.

---

### ARCHITECT
**Stack fit:** Leaflet/Mapbox custom build (team) vs ArcGIS StoryMaps + Survey123 (innovation analysis “Shape A–C”) both match Richmond’s real Esri footprint (GeoHub). No structural wall from the five “Walls” (311, OnBase, EnerGov, B2GNow, DPW GPS). Long-term preservation should treat the map as a **view layer** with Dublin Core/OHA metadata and a designated repository (VCU / Valentine), not a Google Drive sprawl. Implement `consent_mode`, optional location fuzzing, and embargo flags in schema even if v1 is manual review.

**Queries:** Alexandria ArcGIS oral history (institutional pattern); AEMP stack ethics (custom app precedent).

---

### FRONTLINER (library / community org)
Staff at VCU Libraries and East End libraries already field “where do I learn Fulton history?” The **oral history index** in pillar research (C3, D4) points to the same institutions—this app is a front door, not a replacement for archival custody. Training burden: if “submit your story” scales, someone must do **intake, consent filing, and quality control**; weekend prototypes often stop at the map. Partner with Neighborhood Resource Center / Fulton Civic Association (per INNOVATION_ANALYSIS) before QR signs go up so maintenance and vandalism are not dumped on residents informally.

**Queries:** (Inherits VCU blog + Alexandria community partnership pattern from above.)

---

### FUNDER
Program officers will recognize **aligned narrative**: Mellon has put major dollars into Richmond’s historical reinterpretation (Shockoe campus, Valentine, JXN Project, etc.)—Fulton urban renewal is equally fundable as “memory equity” if governance is credible. The ask is not novel tech; it is **governance + corpus expansion + physical interpretation** (markers, tours). Metrics funders care about: descendant board meetings, revocation SLA, new interviews archived with rights metadata, installs of public signage—not raw pageviews alone.

**Queries:** Mellon Foundation Richmond $16M historical narratives / Shockoe grant line.

---

## Top 3 Tensions — Resolved

| Tension | Resolution |
|---------|------------|
| **1. Discoverability vs. institutional rights** | Do not republish audio outside VCU/Valentine terms; use **embeds, deep links, and written permission** for clips. Map is a discovery layer; archive remains system of record. |
| **2. Newcomer engagement vs. descendant authority** | **Primary accountability** to Fulton descendants/advisory board for what appears at which precision; newcomers are secondary audience. Co-design filters, excerpts, and physical install sites. |
| **3. Map precision vs. place harm** | Apply **block-level or aggregated pins** where risk warrants; tiered consent; published revocation workflow (AEMP/OHA playbook). |

---

## Fatal Flaw Test

| Lens | Result |
|------|--------|
| **Data dependency** | **Conditional.** Corpus exists at VCU; The Valentine holds copyright on some material; one interview in-person only at Valentine. Fails if team assumes blanket republication without clearance—**not fatal** if scoped as linking/embedding with permission. |
| **Structural wall (311 / OnBase / EnerGov / B2GNow / DPW GPS)** | **None apply.** Idea is archive + web map + optional QR; no blocked city API required for MVP. |
| **Ownership vacuum** | **Present risk.** Hack team ≠ long-term steward. **Mitigation:** name archival home (VCU/Valentine), community advisory body, and a city or museum *champion* for physical assets—otherwise post-hackathon decay is likely. |
| **Harm potential** | **Moderate.** Geotagged quotes could affect narrators or current residents if misused. **Mitigation:** consent tiers, aggregation, takedown policy, human review queue before any UGC goes live. |
| **Political exposure** | **Moderate.** Urban renewal truth-telling can draw backlash; also aligns with stated City/civic memory investments. Frame as **archival fact + community voice**, not campaign rhetoric. |

**Fatal flaw?** **No single killer** if rights and governance are treated as preconditions—not postscripts.

---

## Category Scores (1–5)

| Category | Score | Note |
|----------|:-----:|------|
| Impact | **5** | Irreplaceable memory; Fulton clearance; aging narrators; strong MAP pillar fit. |
| Feasibility | **4** | Proven stack patterns; real data; permissions and sustainment are the gating items—not GIS feasibility. |
| User Value | **4** | Clear for students/newcomers and educators; descendant value hinges on governance voice. |
| Execution | **3** | Working map demo; transcript/audio links and collection pipeline not shipped; validation thin beyond polls/interviews. |
| Innovation | **3** | National precedents abound; local activation + overlay narrative is the differentiated slice. |
| Equity & Inclusion | **4** | Centers Black displacement history; must operationalize consent/advisory structures to earn a 5. |

---

## Award Calculations (weighted sums)

**Weights (from hackathon rubric)**  
- **Mayor’s Choice (MC):** Impact×5 + Feasibility×5 + UserValue×4 + Execution×3 + Equity×3 + Innovation×1  
- **Pillar Award (PA):** Impact×5 + UserValue×4 + Feasibility×3 + Innovation×3 + Execution×3 + Equity×3  
- **Moonshot (MS):** Innovation×5 + Impact×4 + UserValue×3 + Equity×3 + Feasibility×2 + Execution×2  

**Computation**  
- MC = 25 + 20 + 16 + 9 + 12 + 3 = **85**  
- PA = 25 + 16 + 12 + 9 + 9 + 12 = **83**  
- MS = 15 + 20 + 12 + 12 + 8 + 6 = **73**

---

## Verdict

**SHIP WITH CONDITIONS**

Ship the prototype as a **credible discovery surface** only after: (1) explicit VCU/Valentine rights path for clips or links; (2) a named **descendant or community advisory** review step for public copy and pin precision; (3) a documented **privacy/consent** posture for any new submissions (even if v2). Without those, **HOLD** public promotion (QR at scale, orientation partnerships).

---

## One-Line Summary for Leaderboard

Interactive map that surfaces Historic Fulton’s VCU-hosted oral histories on the landscape—high civic impact and technically feasible, but shipping at scale requires archive permissions, community governance, and mapping ethics treated as release blockers, not stretch goals.
