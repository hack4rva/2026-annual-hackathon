# Innovation Analysis: Grant Pack Builder

## Idea Summary

Automate the assembly of neighborhood-level MCH (Maternal & Child Health) data profiles for CBO grant applications, replacing the 5–8 hour manual "Statement of Need" workflow with a pipeline that pulls ACS, VDH, CDC, and VDOE data into branded fact sheets and slide decks.

---

## Lens 1 — Blue Ocean Reframing (ERRC Grid)

| Action | Factor | Rationale |
|--------|--------|-----------|
| **Eliminate** | Manual Excel wrangling of ACS tables | CBOs spend hours downloading, cleaning, and reformatting census data — this is pure waste |
| **Eliminate** | Per-grant data assembly from scratch | Each grant currently restarts the entire data-gathering process even when neighborhoods overlap |
| **Reduce** | Dependence on expensive vendor platforms (PolicyMap, SimplyAnalytics) | SparkMap and PolicyMap cost $3K–$10K/yr; a code-first pipeline using tidycensus + Quarto eliminates recurring fees |
| **Reduce** | Grant writer time on data sections | From 5–8 hours to under 1 hour of narrative review per grant |
| **Raise** | Data quality transparency | Programmatically display Coefficient of Variation (CV) and suppress counts <20 per VDH guidelines — most CBOs currently ignore MOE entirely |
| **Raise** | Reusability across grant cycles | One neighborhood profile serves 5–10 grants per year instead of being rebuilt each time |
| **Create** | Auto-generated branded fact sheets from a single address/ZIP input | No existing tool takes a Richmond neighborhood and outputs a funder-ready MCH one-pager with VDH + ACS + VDOE data combined |
| **Create** | Quarterly auto-refresh via GitHub Actions | Profiles stay current without manual intervention — a capability no CBO currently has |

**Core assumption challenged:** "Grant data sections require expert manual curation." Research shows the core indicators (infant mortality, low birthweight, preterm birth, poverty rate, uninsured rate) are standardized enough to template — the 40–60 hour investment per state grant is mostly spent on mechanics, not judgment.

---

## Lens 2 — Rapid Ideation (Crazy 8s)

| # | Variant | Twist |
|---|---------|-------|
| 1 | **Quarto PDF Generator** — ZIP code in, branded MCH one-pager out using tidycensus + VDH CSVs | Baseline concept |
| 2 | **Grant Narrative AI Drafter** — LLM generates the "Statement of Need" prose from the data profile, with citations | Saves the remaining 1–2 hours of narrative writing |
| 3 | **Funder Match Engine** — Cross-reference CBO service area indicators against known funder priorities (e.g., March of Dimes = preterm birth focus) | 🔥 Provocative: tells CBOs which grants to apply for, not just helps them apply |
| 4 | **Comparative Neighborhood Ranker** — Show how a CBO's target tract compares to city/state/national benchmarks with auto-generated sparkline charts | Makes the "why here?" argument visually instant |
| 5 | **Multi-CBO Coalition Builder** — Shared data layer where multiple CBOs pull from the same locked profiles to avoid contradicting each other in overlapping grant applications | 🔥 Provocative: turns a competitive tool into a coordination tool |
| 6 | **Slide Deck Bot** — python-pptx pipeline that injects data + charts directly into a branded .pptx template for board presentations | Extends value beyond grants to fundraising and advocacy |
| 7 | **VDH Health Opportunity Index (HOI) Overlay** — Layer the 30+ HOI variables at tract level on top of MCH indicators for richer SDOH context | Leverages Virginia's unique public dataset |
| 8 | **Historical Trend Animator** — 5-year animated charts showing neighborhood trajectory to demonstrate urgency in grant narratives | Visual storytelling that no CBO currently produces |

---

## Lens 3 — Rapid Design Sprint

**Problem sentence:** Richmond MCH CBOs lose 80–120 hours per year manually compiling neighborhood data for grants, producing inconsistent profiles that undermine credibility with funders.

**User journey (primary persona: CBO Grant Writer):**
1. Grant writer identifies upcoming deadline (e.g., March of Dimes community grant)
2. Opens Grant Pack Builder, enters service area ZIP code(s)
3. System pulls latest ACS 5-year, VDH MCH indicators, VDH HOI, and VDOE school health data
4. Sees auto-generated one-pager with suppression flags (counts <20 marked, CV >15% flagged)
5. Downloads branded PDF and PowerPoint with citation footnotes
6. Pastes directly into grant application, spends remaining time on narrative tailoring

**Prototype shape:** Single-page web app with ZIP/tract input → tabbed preview (PDF / PPTX / raw data) → download. Backend: Python/R script pulling Census API + VDH CKAN CSVs → Quarto render.

**First test:** Give 3 Richmond MCH CBOs (e.g., Richmond Healthy Start, Health Brigade, Daily Planet Health Services) the same neighborhood and compare their manually produced data sections against the auto-generated output for accuracy and completeness.

---

## Lens 4 — Opportunity Mapper

### Pattern 1: "Data Section as a Service"

| Dimension | Detail |
|-----------|--------|
| **User** | CBO grant writers serving Richmond maternal/child health populations |
| **Outcome** | Cut data section prep from 5–8 hours to <1 hour; reclaim 80–120 hours/year across 20 grants |
| **Workflow** | ZIP → API pull → quality filter → template render → download |
| **Dependencies** | ACS 5-Year API (500 calls/day, 50 vars/call), VDH CKAN portal (CSV), VDOE Excel downloads |
| **Richmond relevance** | VDH publishes tract-level MCH dashboards and HOI — a data advantage most cities lack |

### Pattern 2: "Quality-Assured Neighborhood Benchmarks"

| Dimension | Detail |
|-----------|--------|
| **User** | Richmond Health District epidemiologists validating CBO claims |
| **Outcome** | Standardized profiles prevent conflicting statistics across organizations |
| **Workflow** | Locked indicator catalog → programmatic CV/suppression checks → version-stamped outputs |
| **Dependencies** | Agreement on indicator definitions (aligns with maternal-metric-lock-in idea) |
| **Richmond relevance** | Multiple agencies (VDH, RHHD, CBOs) currently produce contradictory MCH statistics for the same neighborhoods |

### Pattern 3: "Pipeline-to-Proposal Accelerator"

| Dimension | Detail |
|-----------|--------|
| **User** | Small CBOs with no data staff (1–3 person teams) |
| **Outcome** | Enables organizations without analysts to produce funder-grade data sections |
| **Workflow** | Guided wizard → pre-selected indicator bundles (MCH, SDOH, Education) → one-click export |
| **Dependencies** | Pre-built templates matching common funder formats (federal, state, local foundation) |
| **Richmond relevance** | Richmond's CBO ecosystem is small enough that 10–15 organizations could share one pipeline |

---

## Lens 5 — Problem Scoping

| Dimension | Score (1-5) | Rationale |
|-----------|:-----------:|-----------|
| **Impact** | 5 | Directly reclaims 80–120 hours/year per CBO; enables 2–3 additional grant submissions |
| **Feasibility** | 4 | All data sources are public APIs/CSVs; tidycensus + Quarto pipeline is well-documented; 40–60 dev hours for MVP |
| **Data readiness** | 5 | ACS API, VDH CKAN, VDOE Excel, KIDS COUNT API all available and tested |
| **Problem clarity** | 5 | "Manual data assembly wastes grant writer time" is universally acknowledged |
| **Demo-ability** | 4 | ZIP → PDF output is visually compelling; can demo in 3 minutes |
| **Total** | **23/25** | |

### Weekend MVP Shapes

- **Shape A (Minimum):** Python script: input census tract GEOID → pull 10 ACS variables via API + 5 VDH MCH indicators from CSV → render Quarto PDF with auto-suppression. Runs locally.
- **Shape B (Demo-ready):** Streamlit web app wrapping Shape A. User enters ZIP code, sees preview, downloads PDF. Add VDH HOI composite score overlay.
- **Shape C (Stretch):** Add python-pptx export for branded slide deck + comparative benchmarks (tract vs. city vs. state).

---

## Lens 6 — Assumption Mapping

| # | Assumption | Risk (1-5) | Uncertainty (1-5) | R × U | Validation approach |
|---|-----------|:----------:|:-----------------:|:-----:|-------------------|
| 1 | ACS 5-year API will return tract-level data for Richmond reliably | 2 | 1 | 2 | Pull 5 Richmond tracts now; verify data completeness and MOEs |
| 2 | VDH CKAN portal CSVs have stable column schemas across years | 3 | 4 | **12** | Download 2022 and 2024 VDH MCH datasets; diff column headers |
| 3 | CBOs will actually use auto-generated profiles instead of manually rebuilding | 4 | 3 | **12** | Interview 3 Richmond MCH CBOs about current workflow and trust in automated outputs |
| 4 | Funders accept data sections with programmatic citations rather than hand-curated narratives | 3 | 3 | 9 | Review 5 successful MCH grant applications to check whether format matters vs. content |
| 5 | Tract-level MCH rates in Richmond have sufficient sample sizes to avoid mass suppression | 3 | 3 | 9 | Pull infant mortality and low birthweight counts for 10 Richmond tracts; check how many fall below 20 |
| 6 | Grant writers can operate a web app without IT support | 2 | 2 | 4 | Usability test with 2 non-technical grant writers |

**Top 3 to validate first:**
1. **VDH schema stability** (R×U=12) — A single column rename breaks the pipeline silently
2. **CBO adoption willingness** (R×U=12) — If grant writers don't trust automation, the tool sits unused
3. **Tract-level sample sizes** (R×U=9) — Mass suppression would make the output useless for small neighborhoods

---

## Key Takeaway

Grant Pack Builder addresses a real, quantified pain point (5–8 hours per grant × 20 grants/year = 100–160 wasted hours) with a technically achievable solution. Virginia's public MCH data infrastructure (VDH dashboards, HOI, VDOE school health) provides a genuine head start over most states. The critical risk is not technical — it's whether CBOs will trust and adopt automated outputs, and whether VDH data schemas remain stable enough to maintain the pipeline without constant babysitting. Validate schema stability and CBO willingness before investing in UI polish.
