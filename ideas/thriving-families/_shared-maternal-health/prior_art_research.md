# Prior Art Research — Maternal Health Data Coordination

**Pillar:** Thriving Families
**Problem Statement:** Reduce duplicated data analysis across agencies so Richmond's maternal health ecosystem can operate from shared, consistent metrics.
**Applies to:** RVA People Data
**Research Date:** April 1, 2026
**Method:** Synthesis of existing pillar research corpus (`pillar-repos/pillar-thriving-families/research/`)

**Primary sources from existing corpus:**
- `E2_prior_art_health_dashboards.md` — Trusted maternal and community health dashboards nationally
- `E4_prior_art_failures.md` — Civic tech failure patterns and sustainability risks
- `E5_prior_art_weekend_viable.md` — Weekend-viable MVP patterns that ship and survive
- `C3_services_maternal_health_orgs.md` — Maternal health organizations and partnership landscape
- `C4_services_gaps.md` — Youth and maternal health service coordination gaps in Richmond
- `D2_data_vdh_maternal.md` — VDH maternal health data portals, schemas, and suppression rules
- `D3_data_census_acs.md` — ACS building blocks for maternal health equity dashboards
- `D4_data_kids_count.md` — KIDS COUNT indicators and child well-being data
- `A2_problem_landscape_maternal_health_data.md` — Global and national maternal health data gaps
- `A5_problem_landscape_health_equity.md` — Health equity metrics, drivers, and policy levers

---

## 1. Trusted Health Dashboard Landscape

### The Standard-Setters: What Credible Maternal Data Portals Look Like

The national landscape has a clear hierarchy of trusted maternal/community health data tools. Each occupies a distinct niche — raw vital records access, curated aggregation, or local equity mapping — and their design choices establish the credibility patterns any Richmond tool must meet.

**CDC WONDER** is the baseline standard for vital records queries. It provides ad-hoc access to Natality and Linked Birth/Infant Death datasets with strict suppression rules (counts ≤9 are hidden), per-query dynamically generated citations, and TSV/API exports. Researchers treat WONDER as the canonical source for infant mortality and birth outcome counts because it enforces transparent methodology at the point of use (`E2_prior_art_health_dashboards.md`).

**March of Dimes PeriStats** aggregates data from NCHS, CDC, CMS, HRSA, and Census to provide 60,000+ charts on maternal and infant health indicators. Calculations follow NCHS guidelines and are processed via SPSS/SAS. PeriStats is widely used by grant writers for state-to-state comparisons and report cards but does not provide neighborhood-level granularity (`E2_prior_art_health_dashboards.md`).

**County Health Rankings & Roadmaps (CHR&R)** aggregates 80+ measures into composite scores using Z-scores and scientifically informed weights. In 2025, CHR&R shifted from ordinal county ranks to 10 data-informed "Health Groups" using k-means clustering — a deliberate move to reduce false precision. This pattern (tiers over ranks) is directly relevant for any Richmond equity dashboard that might be tempted to rank neighborhoods (`E2_prior_art_health_dashboards.md`).

**City Health Dashboard** provides 40+ measures at city and census tract levels with comprehensive technical documentation (e.g., Chiang's abridged life table method for life expectancy), full data dictionaries, CSV/API downloads, and explicit guidance on appropriate versus inappropriate data use. This is the closest national model to what a Richmond portal would need to become (`E2_prior_art_health_dashboards.md`).

**VDH Health Opportunity Index (HOI)** aggregates 30+ variables into 13 indicators across four profiles to create a hierarchical social determinants index at the census tract level. It is published on Virginia's Open Data Portal and is the primary state-level SDOH reference for Richmond (`E2_prior_art_health_dashboards.md`).

### City-Level Exemplars

**Chicago Health Atlas** offers hundreds of indicators across 77 community areas with Excel/CSV downloads and multiple-indicator export. It demonstrates that a city-specific portal can fill the gap between national aggregators and raw data sources by pre-filtering to local geography and providing community-area-level granularity (`E2_prior_art_health_dashboards.md`).

**NYC Environment & Health Data Portal** surfaces multiple specific birth outcomes for ~125,000 annual births rather than hiding them behind a single composite score. This "multiple outcomes, no composite" approach avoids the over-aggregation trap that masks neighborhood disparities (`E2_prior_art_health_dashboards.md`).

---

## 2. Richmond's Current Data Ecosystem

### What Richmond Has

Richmond's maternal health data infrastructure is rich but fragmented across multiple portals with inconsistent formats, refresh cadences, and access levels.

| Data Source | What It Provides | Format | Geographic Level | Currency |
|---|---|---|---|---|
| **VDH MCH Indicators Dashboard** | Infant mortality, prenatal care, LBW, preterm birth, Medicaid births, WIC use, teen pregnancy | Web, CSV | County/City | 2023 data (updated Sep 2025) |
| **VDH Maternal Mortality Dashboard** | Maternal deaths (within 42 days of pregnancy) | Web, CSV | State, Health District (city often suppressed) | 2019–2023 aggregated |
| **VDH Pregnancy-Associated Deaths** | Deaths within 365 days, manner/cause | Web, CSV | State, Health District | 2018–2022 aggregated |
| **VA PRAMS** | Maternal experiences and risk factors (Richmond oversampled) | Web, CSV | State, RCHD, Blue Ridge HD | Varies |
| **VDH HealthStats** | Historical births, infant deaths, LBW, teen pregnancy | PDF, Excel | City/County, Planning District | Stalled at 2020 |
| **Census ACS 5-Year** | Insurance, poverty, education, employment for women 15–44 | API, CSV | Place, County, Tract, Block Group | 2020–2024 |
| **KIDS COUNT** | 16 child well-being indicators (health, economic, education, family) | Web, API, CSV | State only | 2023 (published 2025) |
| **RHHD 2024 CHA** | Community health priorities synthesis | Static PDF | Richmond City, Henrico County | 2024 |

Sources: `D2_data_vdh_maternal.md`, `D3_data_census_acs.md`, `D4_data_kids_count.md`, `C4_services_gaps.md`

### What Richmond Lacks

Despite these resources, no single Richmond-specific tool stitches together maternal, infant, behavioral, and social determinant data at the neighborhood scale with clear governance, locked definitions, and reproducible exports. The RHHD CHA is a static PDF. VDH dashboards require navigating multiple portals. ACS data requires API queries or multi-step downloads with margin-of-error handling. Smaller CBOs lack the analytic capacity to process any of this (`E2_prior_art_health_dashboards.md`, `C4_services_gaps.md`).

The PRAMS Richmond City Health District oversample is a premium asset — one of only two districts in Virginia with district-level behavioral data — but it lives in a separate portal and requires survey methodology literacy to interpret properly (`D2_data_vdh_maternal.md`).

---

## 3. Maternal Health Organizations and Coordination Landscape

### Richmond's Ecosystem Partners

Richmond's maternal health ecosystem includes a mix of City agencies, hospital systems, community-based organizations, and state infrastructure. Key coordination assets include:

- **VHI EDCC (Emergency Department Care Coordination)** — Enables providers to set alerts when patients with recent deliveries present at hospital EDs. Includes a Substance Exposed Infant flag. Urban Baby Beginnings uses EDCC to follow up quickly when a client receives emergency care (`C4_services_gaps.md`).
- **Urban Baby Beginnings** — Community doula and family support organization. Relies on EDCC for client follow-up but lacks internal data warehousing/analytics capacity (`C4_services_gaps.md`).
- **Birth in Color RVA** — Advocacy nonprofit focused on racial disparities in maternal health. Uses March of Dimes Report Cards and VDH dashboards for equity reporting (`B3_users_maternal_health_researcher.md`).
- **RHHD (Richmond and Henrico Health Districts)** — Published the 2024 CHA; convenes cross-sector health assessment partnerships (`E2_prior_art_health_dashboards.md`).

### National Partners with Local Relevance

Organizations like the CDC (maternal mortality surveillance), March of Dimes (preterm birth advocacy and PeriStats), and ACOG (clinical practice guidelines) set the indicator definitions that Richmond organizations must align to. The NICHD IMPROVE initiative funds research to reduce preventable maternal deaths. These national standards shape what Richmond stakeholders expect a credible data tool to reference (`C3_services_maternal_health_orgs.md`).

### The Coordination Gap

The most critical coordination failure is in the postpartum period: 37.4% of pregnancy-associated deaths in Virginia occur between 43 and 365 days after pregnancy, and 40% of those deaths are from accidental overdose (`C4_services_gaps.md`). This implicates a handoff failure between obstetric care, primary care, and behavioral health. VDH produces the data, hospitals generate the clinical records, but community-based organizations — the ones doing postpartum home visits and substance use support — often lack the analytic capacity to act on it. A shared data tool would need to bridge this producer-user gap without requiring CBOs to become data shops (`C4_services_gaps.md`).

---

## 4. Credibility Patterns from Trusted Dashboards

The corpus identifies 11 repeatable design patterns from leading health dashboards that build trust among researchers and policymakers. The most critical for a Richmond maternal health portal:

| Pattern | What It Does | Richmond Application |
|---|---|---|
| **Indicator Method Cards** | In-line documentation showing source, years, formula (City Health Dashboard model) | Pin a one-click "Definition" popup at the widget level with numerator/denominator and suppression thresholds |
| **Per-Result Citations** | Dynamically generated citations on every results screen (CDC WONDER model) | Auto-generated citation footer on every exported chart or dataset |
| **Download & API with Dictionary** | CSV/SAS files with comprehensive data dictionaries (CHR&R, City Health Dashboard) | Ship CSV exports with query provenance and schema documentation |
| **Suppression Badges** | Clear visual indicators when data is hidden for privacy (WONDER ≤9 rule) | Explain why a specific tract's data is unavailable |
| **Definition-Locked Labels** | Precise terminology in UI labels (e.g., "LBW <2500g" not just "Low Birthweight") | Enforce strict term-locking in dashboard headers and legends |
| **Update Logs & Timestamps** | When data was last reviewed or updated | Display next scheduled update date and steward of record |
| **Governance Transparency** | Public steering committee and partner lists (RHHD CHA model) | Publish a Richmond Data Stewardship Council charter |
| **Dual-View Granularity** | Public-friendly smoothed data alongside raw data for analysts | Multi-year rates for public; detailed exports for researchers |
| **Appropriate-Use Guidance** | Explicit statements about what data should *not* be used for | Distinguish "planning snapshot" from "program evaluation" |

Source: `E2_prior_art_health_dashboards.md`

---

## 5. Failure Patterns and Sustainability Risks

### Civic Tech Sustainability Failures

The corpus documents a clear pattern: civic tech projects fail not from technical shortcomings but from structural sustainability gaps.

**Volunteer burnout and funding exhaustion** — German civic data projects (Politik-bei-uns, OParl/My City Transparent) shut down when initial grant funding and volunteer energy ran out. Municipalities lacked the resources to integrate the tools into their workflows. The lesson: secure a City owner and maintenance budget before building (`E4_prior_art_failures.md`).

**Data pipeline breakage** — Citygram (Code for America) received a $35,000 Knight Prototype Fund grant but ultimately failed because data pipeline maintenance was not funded. Schema drift caused wrong or missed alerts; BetaNYC's fork suffered database end-of-life failures and duplicate SMS delivery (`E4_prior_art_failures.md`).

**Equity blind spots** — 311 reporting studies show that self-reporting civic tech systems can exacerbate inequities: lower-SES, Black, and Hispanic tracts initiate fewer reports despite greater need. Tools that amplify self-selecting users widen rather than close equity gaps (`E4_prior_art_failures.md`).

### Health Data–Specific Risks

**Privacy and trust destruction** — BetterHelp's FTC settlement ($7.8M) for sharing sensitive mental health data for advertising demonstrates the catastrophic consequences of health data misuse. For a maternal health portal, zero advertising use, explicit consent, and banned third-party tracking are non-negotiable (`E4_prior_art_failures.md`).

**Process fracture** — The Ash Center warns that over-simplifying civic processes (reducing a 10-step workflow to 3 steps) can destroy community-building interactions essential to the service. A data portal that replaces coalition meetings with dashboard views risks eliminating the human coordination that makes data actionable (`E4_prior_art_failures.md`).

### What Kills Momentum for Health Dashboards Specifically

Richmond lacks a "Richmond Data Stewardship Council" — a formalized governance body that locks indicator definitions, manages update cadences, and resolves conflicts when sources disagree. National tools survive because they have institutional stewards: DataMade maintains Councilmatic, CDC maintains WONDER, the Robert Wood Johnson Foundation funds CHR&R. A Richmond maternal health portal without an institutional owner will follow the Citygram path (`E2_prior_art_health_dashboards.md`, `E4_prior_art_failures.md`).

---

## 6. Weekend-Viable Patterns for Hackathon Builds

### What Ships in 48 Hours

The corpus identifies clear patterns for weekend-viable civic tech MVPs that apply to a data dashboard:

**Reuse standards, don't invent them.** The most durable hackathon projects leverage existing data specifications (Open Referral HSDS, CfA flu-shot spec) rather than creating new schemas. For maternal health data, this means locking indicator definitions to VDH/NCHS/CDC WONDER standards rather than inventing a new taxonomy (`E5_prior_art_weekend_viable.md`).

**One job, one user, one dataset.** DiscoverBPS focused solely on helping parents filter eligible schools — logging 15,000 users in year one. Chicago's Flu Shot Finder tied to a single public dataset for seasonal demand. A maternal health data portal should ship with one high-value slice — likely the "Quick Facts" grant-writing use case — not a comprehensive dashboard (`E5_prior_art_weekend_viable.md`).

**Secure an institutional anchor.** SF Adult Probation Department adapted Ohana to replace a 400-page directory. Philadelphia City Planning co-designed Textizen. For a Richmond maternal health portal, the anchor is RHHD or the Richmond City Health District — without their buy-in, the tool has no post-hackathon runway (`E5_prior_art_weekend_viable.md`).

**Static data beats live APIs for demos.** 2nd City Zoning (Chicago) runs for years on pre-fetched GeoJSON and GitHub Pages hosting. A portal that pre-caches VDH and Census data as static CSVs eliminates the risk of API failures during demos and reduces operational costs post-event (`E5_prior_art_weekend_viable.md`).

### Minimum Credible Demo for a Data Dashboard

| Must-Have Feature | Why | Evidence |
|---|---|---|
| 1–2 KPIs with last-updated stamp | Proves the data pipeline is real | Flu Shot Finder model (`E5_prior_art_weekend_viable.md`) |
| Downloadable CSV with citation | Proves the tool serves grant writers | City Health Dashboard model (`E2_prior_art_health_dashboards.md`) |
| Mobile-friendly layout | Proves accessibility commitment | DiscoverBPS UX pattern (`E5_prior_art_weekend_viable.md`) |
| Richmond-filtered by default | Proves local curation value over national tools | Chicago Health Atlas model (`E2_prior_art_health_dashboards.md`) |
| Race-disaggregated view | Proves equity commitment | NYC E&H Portal model (`E2_prior_art_health_dashboards.md`) |

---

## 7. Data Source Architecture for Richmond

### Primary Automated Feeds

The corpus establishes a clear two-tier ingestion strategy:

**Tier 1 (Automated CSV from dashboards):** VDH MCH Indicators, VDH Maternal Mortality, VDH Pregnancy-Associated Deaths — all provide CSV exports for 2021–2023 data. Census ACS tables are accessible via free API (key obtained in minutes) for insurance, poverty, education, and employment indicators at the tract level (`D2_data_vdh_maternal.md`, `D3_data_census_acs.md`).

**Tier 2 (Manual/scripted historical backfill):** VDH HealthStats 2010–2020 data requires parsing multi-tab Excel files and extracting from legacy PDFs. MMRT annual reports provide qualitative context (e.g., Black women die from cardiac causes at 26.6 per 100,000 vs. 5.8 for White women) suitable for dashboard tooltips rather than time-series charts (`D2_data_vdh_maternal.md`).

### ACS Building Blocks for Equity Context

Eighteen priority ACS tables cover insurance coverage, poverty, educational attainment, employment, and demographics at Richmond city and tract scales. Key indicators for maternal health equity include uninsured rate for women 15–44 (B27001), coverage mix for postpartum age groups (B27010), poverty depth bands (C17002), and parental employment constraints (B23008) (`D3_data_census_acs.md`).

### Suppression and Quality Guardrails

- VDH suppresses counts <20 and flags them as unreliable (`D2_data_vdh_maternal.md`)
- CDC WONDER suppresses counts ≤9 (`E2_prior_art_health_dashboards.md`)
- ACS 1-year estimates are filtered when median CV >0.61; 5-year estimates carry MOE at 90% CI (`D3_data_census_acs.md`, `G4_risks_data_quality.md`)
- Richmond City maternal death counts frequently oscillate around suppression thresholds — requiring 3–5 year rolling averages and Planning District 15 fallback (`D2_data_vdh_maternal.md`)

---

## Synthesis: What This Means for RVA People Data

The demo (RVA People Data) is attempting to fill a genuine gap: Richmond has no unified, citation-first, race-disaggregated data portal for maternal and community health at the neighborhood scale. The national prior art is mature — CDC WONDER, PeriStats, CHR&R, and the City Health Dashboard establish clear credibility patterns — but none are Richmond-specific or pre-filtered to the local geography and indicator priorities.

**Four critical success factors emerge from the corpus:**

1. **Lock definitions to authoritative sources.** Every indicator must trace to VDH, NCHS, CDC WONDER, or ACS definitions — not to the portal's own calculations. The 2018 NVSS checkbox break, the ICD-9 to ICD-10 SMM transition, and the LMP-to-OE gestational age shift must be surfaced as era markers, not ignored (`E2_prior_art_health_dashboards.md`, `G2_risks_health_claims.md`).

2. **Governance is the hidden blocker.** Without a formalized Data Stewardship Council (RHHD, VDH, VCU Health, community organizations), the portal will drift toward indicator inconsistency and data staleness. Every surviving dashboard in the prior art has an institutional steward (`E2_prior_art_health_dashboards.md`, `E4_prior_art_failures.md`).

3. **Serve the grant writer first.** The highest-frequency, highest-pain use case is assembling a credible grant fact sheet. A "Quick Facts" builder with auto-citations, opinionated defaults for the latest stable year, and pre-built equity snapshots delivers more immediate value than a comprehensive analyst dashboard (`B3_users_maternal_health_researcher.md`, `E5_prior_art_weekend_viable.md`).

4. **Design for the postpartum coordination gap.** The corpus repeatedly highlights that 37.4% of pregnancy-associated deaths occur 43–365 days postpartum and 40% are overdose. A data portal that surfaces this finding prominently — and connects it to the EDCC alerting infrastructure — addresses the most urgent gap in Richmond's maternal health data ecosystem (`C4_services_gaps.md`).
