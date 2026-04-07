# Condensed Civic Roundtable: Public Comment Atlas

**Slug:** `public-comment-atlas`  
**Pillar:** A City That Tells Its Stories (PS2 — Resident Stories as Civic Insight)  
**Idea path:** `2026-annual-hackathon/ideas/city-storytelling/public-comment-atlas/`  
**Date:** 2026-04-02

---

## Source materials

- `IDEA.md`, `RESEARCH_RESULT.md`, `INNOVATION_ANALYSIS.md`
- `RICHMOND_TECH_STACK_2026.md` (Legistar OData public; GeoHub REST)
- `pillar-repos/pillar-city-storytelling/research/INDEX.md`

---

## Persona simulations

*Each voice is informed by the idea docs plus brief open-web grounding (Legistar/API patterns, PPGIS bias literature, Richmond Planning Commission on Legistar, vendor engagement tools, Richmond AR 2.13).*

### INNOVATOR

Reframing “stories” as **structured public comment tied to matters** is sharper than another social scraper: it is legally public, item-specific, and already in Granicus/Legistar. The Open Civic Data ecosystem (`python-legistar-scraper`, OData endpoints) makes a weekend **extract → geocode → GeoJSON → map** credible without waiting on a procurement. The provocative bit is the **atlas of silence**—hotspots and deserts—not just another sentiment dashboard. Risk: overclaiming “first in the US” when vendors already map comments for *clients*; the differentiator is **open, persistent, city-shaped** publication with equity framing.

### ACTIVIST

Maps are megaphones: PPGIS research consistently shows **sampling bias**—renters, LEP communities, and lower digital access show up less on participatory maps, which can justify underinvestment if leaders read dots as truth. I want this tool to **name that bias** in the UI and normalize by population or district so deserts read as **systemic exclusion**, not “they don’t care.” If commenter locations are too precise, **safety and chilling** are real for people opposing powerful developers. Aggregate, disclose methods, and never let the map be the only story.

### CITIZEN

I do not live inside Legistar; I hear about rezonings from neighbors or Nextdoor. If I could open one map and see **what was said, where, and on which matter**, with a link to the **official** eComment path, that closes a huge transparency gap. Richmond’s Planning Commission already publishes meetings and written comments through **Legistar**; making that **geographic and searchable** matches how I think about “my block.” I need it **plain-language**, mobile-friendly, and honest when **my tract has no comments** so I know the record is thin, not absent.

### MAYOR

Politically, a public comment map is **double-edged**: it can support “we listened” narratives or fuel **NIMBY/YIMBY** wars if presented as a vote count. I would only embrace it with **clear disclaimers** (not statistically representative), **neutral design**, and alignment with our **equity story**—who was reached, not just who shouted loudest. If the build uses **AI/NLP** for locations at city scale, **AR 2.13** means DIT review, transparency to the public, and human oversight; a hackathon demo can scope that explicitly.

### ARCHITECT

Stack-wise this is **Tier A**: `webapi.legistar.com/v1/richmondva/` (OData, no auth, **1,000-row pagination**), plus **GeoHub** parcels/addresses for geocoding matter sites. It **does not hit** the documented structural walls (311/AvePoint, EnerGov API, OnBase, B2GNow, DPW GPS). The hard parts are **data shape variance** (some matters rich in eComments, some empty), **IP vs. text-based location quality**, and a **repeatable ETL** shared with the Legistar Development Pipeline bundle. Prefer **matter/parcel anchoring** first; add NLP geoparsing as an enhancement with logged confidence.

### FRONTLINER

As planning or engagement staff, I already drown in PDFs and agendas; **PublicInput-style** tools exist for agencies that pay for them. A lightweight internal view—**comments by district and tract, with representation ratios**—would help me brief Council and target outreach **before** hearings. I will not trust it until someone **spot-checks geocodes** and we have a policy on **PII redaction**. If this stays a **third-party hobby map** without our blessing, I cannot cite it; if it is **accurate and methodologically documented**, it saves memo time.

### FUNDER

Precedent is strong: cities publish **mapped or segmented public input** (e.g., NYC’s equitable development tooling, open-data feedback datasets elsewhere), and vendors market **geo-segmented engagement** for disaster recovery and comp plans. Funding a **civic nonprofit or university** anchor to host the atlas avoids City IT queue at first, but **sustainability** needs a named partner and maybe a path to **open data publication** on Socrata later. I would fund a **90-day plan** tied to measurable outputs: coverage rate, district reports, and documented equity guardrails.

---

## Top 3 tensions and resolutions

| Tension | Resolution |
|--------|------------|
| **1. Transparency vs. privacy / chilling** | Publish at **census tract or block-group** granularity where needed; **redact PII**; prominent disclaimer that online comments are **not representative**; optional **matter-centric** map (comment tied to **project address**, not commenter home) as default view. |
| **2. Map as insight vs. map as misleading “winner”** | **Normalize** (e.g., comments per 1,000 residents); show **representation ratios** vs. ACS baselines; label **participation deserts** as engagement gaps, not moral judgments about neighborhoods. |
| **3. Weekend prototype vs. trusted institutional record** | Treat hackathon deliverable as **methodology + pilot**; align with **Bundle 2 (Legistar Development Pipeline)** shared ETL; secure a **named owner** (Planning engagement, DIT, or trusted civic org) for refresh cadence and accuracy audits. |

---

## Fatal flaw test

| Lens | Assessment |
|------|------------|
| **Data dependency** | **Moderate.** Legistar is public; **completeness and location fields vary**. Not fatal if MVP scopes to Planning matters, validates Richmond fields early, and reports match rates. |
| **Structural wall** | **No** hit on 311, OnBase/RAPIDS, EnerGov API, B2GNow, or DPW GPS per `RICHMOND_TECH_STACK_2026.md`. |
| **Ownership vacuum** | **Present.** Without an owner for hosting, updates, and methodology, the atlas goes stale or gets dismissed. **Resolvable** with partner + bundle strategy—not a kill. |
| **Harm potential** | **Moderate.** Reidentification, **narrative weaponization**, and **PPGIS bias** misread. Mitigate via aggregation, disclosure, normalization, and staff QA sampling (per research). |
| **Political exposure** | **Moderate.** Any geographic view of controversy attracts attack. Mitigate with **neutral framing**, disclaimers, and **equity-first** metrics alongside raw counts. |

**Conclusion:** No single fatal flaw; viability hinges on **governance, methodology, and data validation**, not on an impossible integration.

---

## Verdict

**SHIP WITH CONDITIONS**

**Conditions (minimum):** (1) Pilot validation of **Richmond Legistar** eComment/attachment fields and **geocoding match rate** on real samples. (2) **Privacy and aggregation policy** before any public launch of commenter-origin data. (3) **Named sustaining partner** and refresh plan (bundle alignment preferred). (4) If **LLM/NLP** geoparsing is part of a **City-operated** product, plan for **AR 2.13** DIT governance (demo can note “advisory extraction + human QA”).

---

## Category scores (1–5)

| Category | Score | Note |
|----------|:-----:|------|
| **Impact** | **4** | Strong transparency and equity signal; effect depends on adoption and outreach loops. |
| **Feasibility** | **4** | Public APIs and GIS; variance in comment richness and geolocation quality caps a 5. |
| **User Value** | **4** | Clear value for residents, journalists, associations, and staff if trustworthy. |
| **Execution** | **3** | Compelling demo path; production-grade accuracy, ethics, and ops need more than a weekend. |
| **Innovation** | **4** | Distinct ERRC reframe (atlas of voice + silence); not wholly novel vs. paid vendor stacks. |
| **Equity & Inclusion** | **4** | Designed to surface deserts; maps can mislead without the guardrails above. |

---

## Award-weighted totals

Weights per hackathon rubric:

- **Mayor’s Choice (MC):** Impact×5 + Feasibility×5 + User Value×4 + Execution×3 + Equity×3 + Innovation×1  
- **Pillar Award (PA):** Impact×5 + User Value×4 + Feasibility×3 + Innovation×3 + Execution×3 + Equity×3  
- **Moonshot (MS):** Innovation×5 + Impact×4 + User Value×3 + Equity×3 + Feasibility×2 + Execution×2  

**Scores used:** Impact 4, Feasibility 4, User Value 4, Execution 3, Innovation 4, Equity 4.

| Award | Calculation | Total |
|-------|-------------|------:|
| **MC** | 4×5 + 4×5 + 4×4 + 3×3 + 4×3 + 4×1 = 20+20+16+9+12+4 | **81** |
| **PA** | 4×5 + 4×4 + 4×3 + 4×3 + 3×3 + 4×3 = 20+16+12+12+9+12 | **81** |
| **MS** | 4×5 + 4×4 + 4×3 + 4×3 + 4×2 + 3×2 = 20+16+12+12+8+6 | **74** |

---

## One-line summary

A Legistar- and GeoHub-grounded map of planning public comments—framed as an atlas of civic voice **and** silence—ships credibly as a pilot **if** aggregation, bias disclosure, data validation, and a clear sustaining owner are treated as part of the product, not an afterthought.

---

## Return line (machine-readable)

`public-comment-atlas | SHIP WITH CONDITIONS | MC:81 PA:81 MS:74 | Legistar+GeoHub-backed geographic archive of planning comments exposes participation patterns and deserts when privacy, normalization, and ownership are explicit.`
