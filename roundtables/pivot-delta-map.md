# Roundtable: Pivot Delta Map (CONDENSED)

**Initiated:** 2026-04-02  
**Idea:** Pivot Delta Map  
**Pillar:** A Thriving Economy  
**Problem Statement:** PS2 — Small Business Navigation  
**Source:** BLUESKY (ERRC reframing)  
**Implementation Reality Score:** 16/25 — Tier A (Strong)  
**Overall Rank:** #39 of 73

## Input Materials

| File | Status |
|------|--------|
| `IDEA.md` | Loaded |
| `RESEARCH_RESULT.md` | Loaded |
| `INNOVATION_ANALYSIS.md` | Loaded |
| `README.md` | Loaded (pointer only) |
| `RICHMOND_TECH_STACK_2026.md` | Loaded — GeoHub parcels/neighborhoods public; RVA Business Portal **no documented API**; B2GNow wall noted for MBE ideas, less central here |
| `pillar-thriving-economy/research/INDEX.md` | Loaded — cross-refs: D3/D4/D5 (business setup data), F4/F5 (where software helps / do-not-build), H2/H3 (MVP with public data), G3/G4 (inclusion, matching bias) |

## Original Rubric (from INNOVATION_ANALYSIS §5)

| Lens | Score | Note |
|------|:-----:|------|
| Impact | 4 | Corridor intelligence proven in peer cities |
| Feasibility | 3 | 1–2 data blockers (license access, geocoding) |
| Data readiness | 3 | SCC public; Richmond license structured access uncertain |
| Problem clarity | 4 | ED professionals recognize the job |
| Demo-ability | 5 | Map storytelling |

*Mapped below to the six hackathon categories for award math.*

---

## Seven Personas — Condensed Takes

### 1 — INNOVATOR

ERRC is the right shrink: drop census-as-oracle for block-level decisions; raise ownership-change and corridor **composite** metrics (turnover + vacancy + concentration). Peer cities win with **local admin data + cadence**, not SOS filings alone. The provocative line for judges: Richmond’s first “storefront dynamics” lens — but only if the base layer is **license-address truth**, not registered-agent fiction.

### 2 — ACTIVIST / EQUITY

Displacement and consolidation alerts (Seattle-style equity index overlays) align with pillar goals. Public dashboards must **aggregate** (corridor/tract), not dump owner PII. Risk: a red “declining” neighborhood map reinforces stigma without program dollars attached — pair visualization with **who gets outreach and capital**, or it is surveillance cosplay.

### 3 — FRONTLINER (ED / LISC / SCORE)

Gold standard in RESEARCH_RESULT is **daily local license feeds** (SF, Philadelphia) with inactive/admin-closed flags. Richmond has GeoHub for geometry, not a known open **business license** dataset in the tech stack doc. Day-one question: *Can we get a structured extract or FOIA pipeline?* Without it, the tool cannot match FRonliner workflow expectations from cities that already ship this.

### 4 — CITIZEN (Aspiring operator)

Wants “where should I open?” — that requires **competitor density, vacancy duration, and foot-traffic proxies** (optional, vendor/API costs). A map of SCC formations alone misleads: many entities never touch a storefront. Citizen trust collapses if the map contradicts the block they can see.

### 5 — ARCHITECT / DATA

Minimum honest stack: standardized event table (`open` / `close` / `transfer`) + parcel/neighborhood join (GeoHub). SCC for **entity** metadata; **city license** for **site**. MAMBA-style linkage is a **program**, not a weekend — scope fuzzy matching to a labeled sample or defer “ownership delta” to Phase 2. RVA Business Portal modernization (2025) does not grant an API path per tech stack reference — plan on export/FOIA/partnership.

### 6 — MAYOR / IMPLEMENTATION REALITY

Tier A is correct: **no** Tier-S “commodity public API for licenses.” Champion is likely **Economic Development + DIT/open data**, not a single vendor unlock. Success looks like **Philadelphia/SF policy** (publish license locations) more than a permanent civic NGO scraper. Hackathon outcome: **prove demand** and define the open-data schema the City should adopt.

### 7 — GUARDIAN (Privacy / Ethics)

RESEARCH_RESULT and INNOVATION_ANALYSIS agree: publish **aggregates** in public views; restrict named owners to internal roles. Watch matching bias (over-flagging certain corridors) and **“zombie license”** false closures — disclose methodology and uncertainty; avoid presenting scores as objective truth.

---

## Tensions (3) — Brief Resolution

| # | Tension | Resolution |
|---|---------|------------|
| **1** | **Visual power vs. spatial truth** — Judges love maps; SCC registered-agent addresses often sit at attorneys/CPAs, not storefronts (Assumption 1, R×U = 20). | **Gate the demo:** If license-grade addresses are unavailable, the MVP must label the layer “registered office / legal entity events” and avoid corridor health claims — or the project misleads. |
| **2** | **Transparency vs. harm** — Corridor “decline” maps can stigmatize neighborhoods; owner-level data risks PII exposure. | **Public = aggregates + methodology**; named records internal-only; coordinate messaging with ED equity framing (cf. pillar G3/G4). |
| **3** | **Weekend scope vs. science project** — Entity resolution to 90%+ precision is a standing team, not 24 hours. | **Phase:** Phase 1 = openings/closures from best available address field + GeoHub buckets; Phase 2 = transfer detection + concentration index after validation sprint. |

---

## Fatal Flaw Test

| Test | Result | Evidence |
|------|--------|----------|
| **Wrong map worse than no map** | **Fail without mitigation** | INNOVATION_ANALYSIS takeaway: SCC-only geocoding → “attorney offices, not storefronts.” That invalidates PS2 “where to open” and ED targeting narratives. |
| **Structural wall** | **Partial** | Not B2GNow-core; **closed path** is structured City business license/tax location data (tech stack: RVA Business Portal **no documented API**). Comparable cities publish datasets Richmond does not yet expose. |
| **Ownership / maintenance** | **Conditional** | Clear notional owners (ED analytics, DIT open data). No hackathon adoption precedent; needs named City/regional partner for refresh cadence (quarterly per RESEARCH_RESULT operating model). |
| **Harm** | **Manageable** | If aggregates-only and disclaimers; high harm if raw owners ship or “opportunity scores” read as redlining. |

**Fatal flaw (single sentence):** Treating **Virginia SCC filings alone** as a neighborhood business **delta** map — without validated **street-level license or storefront inventory** — produces a **credible-looking false picture**, destroying user value and equity trust.

---

## Verdict

### **BUILD WITH DATA GATE — THEN PITCH FOR OPEN LICENSE DATA**

Ship a hackathon prototype **only** on a validated address strategy (structured City license extract, confirmed open dataset, or defensively scoped “legal entity geography” with honest labeling). Parallel deliverable: **schema + stakeholder brief** asking Richmond to publish a SF/Philadelphia-style **Registered Business Locations** feed. Without clearing the gate, downgrade to **research / advocacy artifact**, not a public “Main Street health” product.

---

## Consensus Rubric (Six Categories, 1–5)

| Category | Score | Rationale |
|----------|:-----:|-----------|
| **Impact** | 4 | Strong if data is address-truth; peer cities link metrics to BIDs, grants, public realm — Richmond lacks this visibility today. |
| **Feasibility** | 3 | Tier A: SCC + GeoHub workable; **license access** is the swing factor; entity resolution non-trivial. |
| **User Value** | 4 | High for ED and navigators **conditional** on correct geography; entrepreneurs need Phase 2 richness. |
| **Execution** | 4 | Map/Leaflet demos well; credibility is the execution risk, not animation. |
| **Innovation** | 4 | ERR reframing (deltas, displacement, corridor composite) is distinct from generic “start a business checklist.” |
| **Equity & Inclusion** | 3 | Strong intent (Seattle-style targeting); **risk** of map harm and bias without governance — capped until aggregates + programs are paired. |

### Award Scores (weighted sums)

**Weights (from event rubric)**  
- **Mayor’s Choice:** Impact×5, Feasibility×5, User Value×4, Execution×3, Equity×3, Innovation×1  
- **Pillar (Economy):** Impact×5, User Value×4, Feasibility×3, Innovation×3, Execution×3, Equity×3  
- **Moonshot:** Innovation×5, Impact×4, User Value×3, Equity×3, Feasibility×2, Execution×2  

**Mayor’s Choice:** (4×5)+(3×5)+(4×4)+(4×3)+(3×3)+(4×1) = 20+15+16+12+9+4 = **76**  

**Pillar Award:** (4×5)+(4×4)+(3×3)+(4×3)+(4×3)+(3×3) = 20+16+9+12+12+9 = **78**  

**Moonshot Award:** (4×5)+(4×4)+(4×3)+(3×3)+(3×2)+(4×2) = 20+16+12+9+6+8 = **71**  

---

## Top 3 Recommendations

1. **Hour-zero validation:** Confirm whether Richmond can provide or publish **address-level license or tax registration** data in the hackathon window; if not, scope the map explicitly and avoid PS2 “site selection” claims.  
2. **MVP honesty:** Use GeoHub neighborhoods/corridors if available; else tracts — document **freshness and definition** of “closure” (dissolution ≠ vacant storefront).  
3. **Policy ask:** Package the peer-city field checklist (RESEARCH_RESULT Appendix A) as a **one-pager for City leadership** so the prototype doubles as procurement for open ED data.

## Unresolved Questions

- Is there a non-public **internal** export path (BPOL/BTPP, Commissioner of Revenue) partners will share for a pilot?  
- Does GeoHub define **commercial corridor** polygons, or only neighborhoods/parcels?  
- Who owns **ongoing refresh** after demo day — DIT, ED, or regional NGO?  
- For any Google/Yelp corroboration: budget, ToS, and representativeness for non-food sectors?

---

*Condensed civic roundtable: 7 personas, 3 tensions, fatal flaw, verdict, scores + awards. No separate WebSearch pass — grounded in idea bundle + `RICHMOND_TECH_STACK_2026.md` + pillar research index.*
