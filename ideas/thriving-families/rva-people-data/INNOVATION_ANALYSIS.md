# Innovation Analysis: RVA People Data

## Idea Summary

A neighborhood-level Social Determinants of Health (SDOH) dashboard for Richmond, consolidating ACS demographics, CDC PLACES health prevalence, VDH indicators, and local administrative data into a single view that CBOs, city planners, and health departments can use for needs assessments, grant writing, and equitable resource allocation.

---

## Lens 1 — Blue Ocean Reframing (ERRC Grid)

| Action | Factor | Rationale |
|--------|--------|-----------|
| **Eliminate** | Separate data pulls from 5+ portals (ACS, CDC PLACES, VDH, EJScreen, KIDS COUNT) | Practitioners currently visit each portal independently and manually reconcile geographies |
| **Eliminate** | "Data literacy required" barrier for CBOs | Most dashboards assume users can interpret MOEs, composite indices, and modeled estimates |
| **Reduce** | Dependence on PolicyMap/Social Explorer licenses ($3K–$10K/yr) | Open-source stack using public APIs can replicate 80% of commercial functionality for Richmond specifically |
| **Reduce** | Stale local data layers | City administrative data (evictions, code violations) is often years behind; auto-ingestion closes the gap |
| **Raise** | Tract-level reliability transparency | Auto-flag ACS estimates with CV >15% and CDC PLACES modeled uncertainty — most dashboards hide this |
| **Raise** | Richmond-specific context | National tools (City Health Dashboard, CDC PLACES) cover Richmond but lack local administrative data layers |
| **Create** | Funding-formula integration | LA County used its Equity Explorer to direct $1.9B in ARPA funding; Richmond has no equivalent mechanism |
| **Create** | CBO-friendly "one-click needs assessment" export | Pre-formatted PDF matching CHNA and grant application requirements |

**Core assumption challenged:** "Richmond needs its own SDOH dashboard." Actually, national tools already cover Richmond at tract level — the real gap is integrating local administrative data (evictions, code violations) and making it grant-writer-friendly, not rebuilding what the City Health Dashboard already does.

---

## Lens 2 — Rapid Ideation (Crazy 8s)

| # | Variant | Twist |
|---|---------|-------|
| 1 | **Richmond SDOH Explorer** — ArcGIS Hub site layering ACS + CDC PLACES + VDH HOI on Richmond tract map | Baseline concept |
| 2 | **Equity Budget Allocator** — Composite index (modeled on CA's HPI) that tiers Richmond tracts for funding priority | 🔥 Provocative: directly ties data to dollars, like LA County's $1.9B ARPA allocation |
| 3 | **Neighborhood Health Report Card** — Auto-generated annual PDF per neighborhood (like NYC Community Health Profiles) comparing 50+ measures | Shifts from interactive dashboard to printable advocacy tool |
| 4 | **CBO Grant Data API** — REST API that returns tract-level SDOH indicators in JSON, letting CBOs pull data into their own grant templates programmatically | Serves power users without requiring them to use a dashboard UI |
| 5 | **Disparity Alert System** — Automated notifications when a tract's indicators cross a threshold (e.g., infant mortality rate rises above state average) | 🔥 Provocative: turns passive dashboard into proactive surveillance |
| 6 | **Child Opportunity Index Richmond Edition** — Adapt diversitydatakids.org's 29-indicator COI methodology specifically for Richmond with local data overlays | Focuses on families specifically, aligning with Thriving Families pillar |
| 7 | **Community Voice Layer** — Residents annotate tracts with qualitative context that national datasets miss (food desert reality, transit gaps, informal care networks) | Addresses the "data doesn't capture lived experience" critique |
| 8 | **Cross-City Benchmark Tool** — Compare any Richmond tract against peer tracts in Norfolk, Charlotte, or Baltimore on identical indicators | Enables "Richmond is doing worse/better than..." arguments for advocacy |

---

## Lens 3 — Rapid Design Sprint

**Problem sentence:** Richmond CBOs and city staff lack a single source for neighborhood-level health and social data, forcing them to manually reconcile figures from 5+ portals, which produces inconsistent needs assessments and weakens grant applications.

**User journey (primary persona: CBO Program Director):**
1. Program director needs a needs assessment for a new maternal health grant
2. Opens RVA People Data, selects Church Hill neighborhood boundary
3. Dashboard shows ACS demographics, CDC PLACES chronic disease prevalence, VDH MCH indicators, VDH HOI score, and local eviction filing rates — all at tract level
4. Reliability flags highlight which estimates have CV >15% (medium reliability)
5. Clicks "Export Needs Assessment" → downloads formatted PDF with citations
6. Incorporates PDF directly into grant application

**Prototype shape:** Map-centric web app (Leaflet or ArcGIS JS) with tract selector → indicator sidebar → export button. Data layer: pre-computed JSON tiles from ACS API + CDC PLACES API + VDH CSVs.

**First test:** Compare the exported needs assessment against the most recent CHNA (Community Health Needs Assessment) produced by VCU Health or Bon Secours for the same neighborhood. Measure coverage overlap and identify indicators the dashboard misses.

---

## Lens 4 — Opportunity Mapper

### Pattern 1: "Tract-Level Equity Lens for Budget Decisions"

| Dimension | Detail |
|-----------|--------|
| **User** | Richmond city budget analysts and council members |
| **Outcome** | Data-backed equity weighting for discretionary spending (ARPA model) |
| **Workflow** | Select funding pot → dashboard ranks tracts by composite need → export tier list for budget memo |
| **Dependencies** | ACS 5-year (API), CDC PLACES (API), VDH HOI (open data), local eviction data (courts) |
| **Richmond relevance** | LA County directed $1.9B using this approach; Richmond has $155M in ARPA funds with no equivalent targeting tool |

### Pattern 2: "Grant-Ready Neighborhood Profiles"

| Dimension | Detail |
|-----------|--------|
| **User** | CBOs writing needs assessments for federal, state, and foundation grants |
| **Outcome** | Standardized, citation-rich profiles that 10+ organizations can share |
| **Workflow** | Select neighborhood → view indicators → download pre-formatted PDF |
| **Dependencies** | Same data stack plus template alignment with common funder requirements |
| **Richmond relevance** | Richmond's CBO ecosystem is small; shared profiles prevent organizations from contradicting each other |

### Pattern 3: "Proactive Health Surveillance"

| Dimension | Detail |
|-----------|--------|
| **User** | Richmond-Henrico Health District epidemiologists |
| **Outcome** | Early detection of neighborhood-level health deterioration |
| **Workflow** | Automated quarterly data refresh → threshold alerts → investigation triggers |
| **Dependencies** | VDH data refresh cadence (typically 2-year lag), CDC PLACES annual updates |
| **Richmond relevance** | Waco, TX used City Health Dashboard tract data to uncover concentrated needs hidden by county-level aggregation |

---

## Lens 5 — Problem Scoping

| Dimension | Score (1-5) | Rationale |
|-----------|:-----------:|-----------|
| **Impact** | 4 | Consolidates scattered data; enables equity-informed allocation. But national tools already cover much of this. |
| **Feasibility** | 3 | Data ingestion is straightforward; the challenge is sustaining it post-hackathon (refresh cadence, schema changes) |
| **Data readiness** | 5 | ACS API, CDC PLACES API, VDH HOI open data, City Health Dashboard CSV — all available today |
| **Problem clarity** | 4 | "Data is fragmented" is well-understood; less clear whether a Richmond-specific dashboard adds enough over existing national tools |
| **Demo-ability** | 5 | Map + indicators + export is visually compelling and immediately understandable |
| **Total** | **21/25** | |

### Weekend MVP Shapes

- **Shape A (Minimum):** Static Leaflet map with pre-computed Richmond tract GeoJSON. Popup shows 10 key indicators (ACS poverty, uninsured, CDC PLACES diabetes prevalence, VDH HOI score). No backend — all pre-baked JSON.
- **Shape B (Demo-ready):** Add neighborhood selector dropdown, indicator comparison sidebar, and PDF export using jsPDF or html2canvas.
- **Shape C (Stretch):** Add time-series toggle (2019 vs. 2024 ACS), reliability flags (CV badges), and local eviction data overlay from Richmond Circuit Court records.

---

## Lens 6 — Assumption Mapping

| # | Assumption | Risk (1-5) | Uncertainty (1-5) | R × U | Validation approach |
|---|-----------|:----------:|:-----------------:|:-----:|-------------------|
| 1 | Richmond-specific dashboard adds meaningful value over City Health Dashboard + CDC PLACES | 4 | 4 | **16** | Interview 3 CBOs: what data do they actually need that national tools don't provide? |
| 2 | Local administrative data (evictions, code violations) is accessible and machine-readable | 3 | 4 | **12** | Check Richmond Circuit Court e-filing system and city code enforcement database for bulk export options |
| 3 | ACS tract-level estimates for Richmond tracts have acceptable reliability (CV <15%) | 3 | 3 | 9 | Pull ACS MOEs for 10 Richmond tracts on key variables; calculate CVs |
| 4 | Someone will maintain the data pipeline after the hackathon | 5 | 3 | **15** | Identify a specific owner (RHHD? VCU? CBO coalition?) willing to run quarterly refreshes |
| 5 | Users want interactive dashboards rather than static reports | 2 | 3 | 6 | Ask target users whether they'd prefer a map tool or downloadable PDFs |
| 6 | CDC PLACES modeled estimates are trusted by local health officials | 2 | 2 | 4 | Ask RHHD epidemiologists whether they cite PLACES data in their own reports |

**Top 3 to validate first:**
1. **Differentiation from national tools** (R×U=16) — If the City Health Dashboard already does 90% of this, building a Richmond version is duplicative
2. **Post-hackathon sustainability** (R×U=15) — Dashboards without maintainers become stale within 6 months
3. **Local data accessibility** (R×U=12) — Eviction and code violation data may not be bulk-exportable

---

## Key Takeaway

RVA People Data's biggest strategic question is not whether the data exists (it does) but whether a Richmond-specific dashboard adds enough value over the City Health Dashboard, CDC PLACES, and VDH HOI that already cover Richmond at tract level. The winning angle is local administrative data integration (evictions, code violations, school health) that national tools can't provide, plus a CBO-friendly export workflow. Without a clear sustainability owner and differentiated local data layers, this risks becoming another dashboard that duplicates existing national infrastructure and goes stale in six months.
