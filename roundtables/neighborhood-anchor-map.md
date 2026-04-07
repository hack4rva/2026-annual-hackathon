# Roundtable: Neighborhood Anchor Map (CONDENSED)

**Initiated:** 2026-04-02  
**Idea:** Neighborhood Anchor Map  
**Pillar:** Thriving & Inclusive Communities  
**Problem Statement:** PS1 — Immigrant Service Discovery  
**Source:** BLUESKY (ERRC reframing)  
**Implementation Reality Score:** 21/25 — Tier **S** (Ship It)  
**Overall Rank:** #14 of 73

## Input Materials

| File | Status |
|------|--------|
| `IDEA.md` | Loaded |
| `RESEARCH_RESULT.md` | Loaded |
| `INNOVATION_ANALYSIS.md` | Loaded |
| `RICHMOND_TECH_STACK_2026.md` | Loaded — GeoHub/ArcGIS public layers; GRTC **GTFS** public; Help1RVA **no free public API** (not required for anchor-geometry MVP); Unite Us enterprise-only |
| `pillar-thriving-inclusive-communities/research/INDEX.md` | Loaded — cross-refs: `92_red_flags.md`, `G1`/`G2`/`G5` (false safety, PII, privacy playbook), `F2` (privacy-first discovery), `D2` (org directories), `H2` (service-discovery MVP), `B1`/`B5` (WhatsApp-first, digital equity) |

**Shared research (pointer):** `../_shared-immigrant-discovery/` per `IDEA.md` — not re-read for this condensed pass.

## Baseline from INNOVATION_ANALYSIS (Problem Scoping §5)

| Lens | Score | Note |
|------|:-----:|------|
| Impact | 4 | Few US cities fuse immigrant anchor maps with GTFS accessibility |
| Feasibility | 4 | Public GIS + GTFS; curation is organizational |
| Data readiness | 4 | Locations public; language / trust tags need CBO partnership |
| Problem clarity | 4 | Clear for primary user; value of transit layer vs. simple list debatable |
| Demo-ability | 5 | Map + routes + isochrones + printable one-pager |

*Mapped below to the six hackathon judging categories.*

---

## Seven Personas — Condensed Takes

### 1 — INNOVATOR

ERRC holds: **eliminate** mega-directories and logins; **raise** transit as a first-class lens; **create** anchor-first navigation (“where I already trust” → “what I can reach by bus”). The non-obvious pitch is not prettier pins — it is **converting trust into reachable geography** using GRTC + public facilities. Weekend truth: **static routes or precomputed isochrones** beat live OTP in the room; research flags scheduled GTFS **overstating** access by ~5–15% — disclaim, don’t pretend precision.

### 2 — ACTIVIST

Pillar alignment is strong: libraries and CBOs as **legitimate front doors** (cf. St. Louis ecosystem map, Oklahoma library–refugee research). **FindHello (2026 sunset)** is the moral alarm: mapped immigrant-serving resources can be **misused for targeting**. Any Richmond pilot needs **tiered visibility**, MOUs for quarterly updates, and **immigrant-led governance** — not a volunteer CSV dropped on GitHub. NLC Civic Mapping shows **transit + anchors** can drive stop fixes; that is a policy win story if GRTC engages.

### 3 — FRONTLINER

**Library / CBO staff:** QR at branch + kiosk mode (large touch targets) matches how overwhelmed front desks actually hand off. **Risk:** another map nobody promotes — assumption map R×U **16** on “will they use a map?” and on **library manager buy-in**. Curating 50–100 anchors with hours, languages, and sensitivity flags is **real labor**; without 2 CBO partners and RPL branches, the dataset rots in 90 days.

### 4 — CITIZEN

**Invisible / LEP resident:** Starting from “my library” lowers cognitive load vs. taxonomies. **WhatsApp share → nearest anchors** (Crazy 8s #8) matches pillar **B5** channel reality better than expecting everyone to browse a web map. **Exclusion:** no smartphone, no literacy, or fear of geolocation — **printable one-pagers** and in-branch kiosks are not stretch goals; they are equity requirements. Zero-login is correct for safety; still need **clear “this is not immigration enforcement”** framing.

### 5 — ARCHITECT

**Walls:** Does not require 311, EnerGov, Help1RVA API, or Unite Us for a **credible MVP** — public GeoHub-style facility geometry + GTFS + static hosting fit the tech stack “what prototypes can use” list. **Integration complexity:** **Low** for v1; **Medium** if OTP/R5 isochrones or GTFS-RT later. **Maintenance:** curated GeoJSON + refresh playbook; City optional. **AR 2.13:** only if AI/chat layers ship — not intrinsic to base map.

### 6 — FUNDER

RESEARCH_RESULT sketches **low six figures year one** for a serious city pilot (PM, GIS, frontend, translation); **NTIA Digital Equity** and anchor-institution framing align. **Hackathon path:** static site + volunteer curation — **thousands**, not six figures. **Sustainability cliff:** without **RPL + Office of Immigrant Affairs / CBO coalition** owning refresh, the map becomes stale trust theater. Fund the **governance MOU**, not only the Leaflet bundle.

### 7 — MAYOR (Decider)

**MAP:** PS1 Immigrant Service Discovery; KPIs from research — reach (MAU, printouts), **successful anchor-to-intake referrals**, LEP / zero-car households within 30-minute transit of priority services, **data freshness under 90 days (median)**. **Owner candidates:** **Richmond Public Library** (primary anchor operator) + **DIT/open data** for hosting narrative; CBO network for content. **Tier S** is defensible for **survivability** (public data, commodity stack); **political** risk is **harm narrative** if privacy is weak — refine, don’t rush sensitive pins.

---

## Tensions (3) — Brief Resolution

| # | Tension | Resolution |
|---|---------|------------|
| **1** | **Trust curation vs. exclusion** — “Official” anchors can omit informal mosques, mutual-aid sites, or grassroots clinics that matter more than city buildings. | Co-design list with **immigrant-led orgs**; publish methodology; allow **nomination workflow** with vetting — avoid single-source City-only truth. |
| **2** | **Map power vs. FindHello risk** — More detail helps users; more detail helps **bad actors**. | **Tiered disclosure** (public vs. partner-only); avoid precise geocodes for highest-risk services; privacy threat model **before** launch (cf. `G2`, `92_red_flags`). |
| **3** | **Transit wow-factor vs. schedule lie** — Isochrones impress judges; scheduled GTFS **misses** reliability and headways. | Label uncertainty; start with **named time windows** + disclaimers; phase **GTFS-RT** only with agency partnership. |

---

## Fatal Flaw Test

| Test | Result | Evidence |
|------|--------|----------|
| **Weaponized geography** | **Fail without mitigation** | FindHello discontinued 2026 over targeting concerns (RESEARCH_RESULT, INNOVATION_ANALYSIS). Sensitive layers without governance replicate harm. |
| **Structural wall** | **Pass** for core MVP | Facility + GTFS public per `RICHMOND_TECH_STACK_2026.md`; Help1RVA gap does not block anchor-first scope. |
| **Adoption / maintenance** | **Conditional** | High R×U on map usage and curation; dies without anchor partners and refresh SLAs. |
| **Wrong map worse than no map** | **Borderline** | Misleading isochrones or stale hours waste trips for **highest-vulnerability** users — mitigate with freshness badges and conservative claims. |

**Fatal flaw (single sentence):** Treating **immigrant-serving locations and transit reach** as a neutral technical overlay **without tiered visibility, community governance, and ongoing curation** repeats the **FindHello** failure mode — **helpful data becomes a targeting surface**.

---

## Verdict

### **PILOT — PRIVACY AND PARTNERS FIRST**

Ship a **hackathon-grade** static map (anchors + GRTC overlay + optional precomputed isochrones) **only** alongside a written **privacy / disclosure tier** plan and **named library + CBO** content partners. Do **not** publish a comprehensive sensitive-service layer in v1. If partners cannot commit to refresh, ship as **planner advocacy demo** (NLC-style gap narrative) rather than as a resident-facing “source of truth.”

---

## Consensus Rubric (Six Categories, 1–5)

| Category | Score | Rationale |
|----------|:-----:|-----------|
| **Impact** | 4 | Addresses trust-first discovery + real mobility barriers; national gap on GTFS + immigrant anchors. |
| **Feasibility** | 4 | Tier S stack; human curation and honesty about GTFS limits are the main constraints. |
| **User Value** | 4 | High for LEP / transit-dependent users **if** distribution and print channels exist — usage assumptions keep this from 5. |
| **Execution** | 5 | Map, filters, routes, isochrones, PDF — all demo-strong per analysis. |
| **Innovation** | 5 | Anchor-first + GRTC accessibility as **combined** immigrant-facing product is **under-deployed** in US peers (research table). |
| **Equity & Inclusion** | 4 | Intent and channels align with pillar; **capped** until privacy governance and informal-anchor inclusion are proven. |

### Award Scores (weighted sums)

**Mayor’s Choice:** Impact×5, Feasibility×5, User Value×4, Execution×3, Equity×3, Innovation×1  

(4×5)+(4×5)+(4×4)+(5×3)+(4×3)+(5×1) = 20+20+16+15+12+5 = **88**

**Pillar Award:** Impact×5, User Value×4, Feasibility×3, Innovation×3, Execution×3, Equity×3  

(4×5)+(4×4)+(4×3)+(5×3)+(5×3)+(4×3) = 20+16+12+15+15+12 = **90**

**Moonshot Award:** Innovation×5, Impact×4, User Value×3, Equity×3, Feasibility×2, Execution×2  

(5×5)+(4×4)+(4×3)+(4×3)+(4×2)+(5×2) = 25+16+12+12+8+10 = **83**

---

## Top 3 Recommendations

1. **Week 0:** Sign **RPL + one immigrant-serving CBO** for a 20-anchor pilot dataset, language tags, and privacy review — not anonymous crowd-sourcing of sensitive sites.  
2. **MVP honesty:** Ship **disclaimers** on schedule-based access; publish **last-updated** per anchor; prefer **precomputed** isochrones for fixed windows if live routing is flaky.  
3. **Distribution:** Budget **QR + printable “routes to help”** and test **10 LEP users** at a branch (INNOVATION_ANALYSIS first test) before claiming user value.

## Unresolved Questions

- Which **City or library** role formally owns URL, analytics, and takedown requests?  
- Does Richmond have **GTFS-RT** suitable for a Phase 2 credibility upgrade?  
- How will **informal** trusted spaces be represented without creating a **surveillance registry**?  
- Is there appetite at **GRTC** for NLC-style stop/access feedback loops tied to this map?

---

*Condensed civic roundtable: 7 personas, 3 tensions, fatal flaw, verdict, scores + awards. Grounded in idea bundle + `RICHMOND_TECH_STACK_2026.md` + pillar research index — no separate WebSearch pass.*
