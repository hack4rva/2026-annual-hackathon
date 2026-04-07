# Outreach: Richmond City Health District — Maternal Health Data Coordination — Research & Questions

### What we've confirmed through public sources

- **VDH data availability:** The VDH MCH Indicators Dashboard provides Richmond City-level data for infant mortality, preterm birth, and low birthweight, all with race/ethnicity disaggregation, with 2023 as the most recent data year. The VDH SMM Dashboard provides severe maternal morbidity data (updated November 2025). Richmond's preterm birth rate is 12.5% — the March of Dimes gives Virginia a grade of "F."
- **City-level maternal mortality gap:** VDH does not publish a maternal mortality ratio (MMR) for Richmond City due to small case numbers that trigger suppression and threaten statistical stability. City-level MMR can only be examined at the statewide level, where Non-Hispanic Black women experience 69.9 per 100,000 live births vs. 13.2 for Non-Hispanic White women — a 5.3× disparity.
- **PRAMS oversample:** Richmond City Health District is one of only two health districts in Virginia oversampled for PRAMS, making district-level behavioral data possible. In 2022, 348 of 977 total PRAMS respondents statewide were RCHD residents — a premium data asset for the city.
- **Suppression rules vary:** VDH suppression is context-specific (NSSP: cells under 5; MCH/SMM: counts under 20 flagged as unstable). CDC WONDER shifted from suppressing rates based on fewer than 20 deaths to fewer than 10 deaths starting with 2023 data. These differences cause confusion when users compare across sources.
- **Race classification schema:** VDH vital statistics use Census single-race categories with Hispanic as a separate ethnicity dimension. Federal grants often expect combined race/ethnicity categories — creating a translation burden for grant writers who pull from VDH dashboards.
- **Six-portal fragmentation:** Richmond's maternal health data is distributed across at least six distinct portals: VDH MCH Indicators Dashboard, VDH Maternal Mortality Dashboard, VDH PRAMS Dashboards, VDH HealthStats legacy tables (stalled at 2020), March of Dimes PeriStats/Report Card, and Census ACS tables. Each uses different time windows, suppression thresholds, and indicator definitions.
- **RHHD coalition ecosystem:** Key maternal health actors include RHHD (case management and referrals), Urban Baby Beginnings (Virginia's Maternal Health Hub system lead — doula services, prenatal education, lactation), Birth in Color RVA (culturally centered advocacy and doula network), VCU Health (high-risk maternity, embedded UBB doulas on campus), and Bon Secours (Care-A-Van mobile maternity clinic with UBB).
- **Health Equity Fund as de facto coordinator:** The Richmond & Henrico Public Health Foundation's Health Equity Fund (HEF) uses CDC PLACES, BRFSS, SVI, HOI, ACS, and USALEEP data to set funding priorities — functioning as the closest thing Richmond has to a data-driven coordination mechanism for maternal health investments.
- **No formal data stewardship council:** Richmond has no dedicated health data stewardship council. Virginia's ODGA Data Governance Council operates at the state level. The HEF/RHPHF serves a de facto coordination role but is not a governance body.
- **Hospital discharge data access:** Virginia Health Information (VHI) provides hospital discharge data under a formal request and license/DUA process. Detailed VHHA Analytics is restricted to member hospitals; non-members rely on public dashboards (workforce, SDOH, financial assistance).
- **VDH does not flag the 2018 break:** VDH's public-facing maternal mortality and PAMSS pages do not flag the 2018 NVSS pregnancy checkbox methodological change that invalidates pre/post maternal mortality trend comparisons. Most local reports ignore this discontinuity.
- **Health Opportunity Index:** VDH's HOI is available at census tract level for Richmond via ArcGIS and the state open data portal — 13 social determinant indicators that can contextualize maternal health disparities at the neighborhood level.
- **No US city has built this yet:** No U.S. city has created a unified portal consolidating VDH, Census, and CDC maternal data into a single, race-disaggregated view. Philadelphia (PRAMS dashboard), LA County (Maternal & Infant Health Dashboard), Boston (Health of Boston series), and DC (Perinatal Health Report) have specialized dashboards, but none achieve the multi-source unification the hackathon prototype attempted.
- **AI/AN mortality underestimation:** NCHS linkage studies estimate ~34% national underestimation of American Indian/Alaska Native mortality from death certificate racial misclassification — a caveat any Richmond data portal must surface.

### What we haven't been able to determine — and where we need your help

We have **five specific questions** that only your team can answer:

1. **PRAMS microdata access:** RCHD is PRAMS-oversampled, and the published VDH dashboards provide district-level stratification. But can local organizations — RHHD, UBB, Birth in Color RVA — access the underlying microdata for custom tabulations beyond what the dashboards show? Is this only available through VDH's formal "Submit a Data Request" pathway, and if so, what has been the turnaround and approval experience?

2. **City-specific maternal mortality:** VDH doesn't publish city-level MMR due to small numbers. Does RCHD or RHHD internally calculate a Richmond-specific MMR using rolling multi-year averages or Planning District 15 aggregates? Is there any internal figure — even unpublished — that the coalition uses for planning and grant writing?

3. **Indicator validation with coalition:** When Richmond maternal health organizations (RHHD, UBB, Birth in Color RVA, VCU Health) cite maternal health statistics in grant applications or coalition presentations, is there any shared validation process? Or does each organization independently pull from whichever portal they find first — leading to the conflicting-numbers problem we documented?

4. **Data stewardship governance:** The HEF/RHPHF functions as a de facto data coordination mechanism. Is there any discussion of formalizing a Richmond-specific health data stewardship body — along the lines of Chicago's model (CDPH + UIC PHAME Center) or NYC's DOHMH portal governance — that would own indicator definitions, refresh schedules, and discrepancy resolution?

5. **CBO data capacity:** Smaller CBOs and doula collectives (Birth in Color RVA, individual doula practices) appear to rely on public dashboards or data communicated through coalition meetings. Do they have the technical capacity to use a data portal with query tools, or do they need pre-built exports — a "Quick Facts" PDF generator or quarterly data drops — that eliminate the need to navigate dashboards?

### Why this matters

We've been generating new solution ideas grounded in the research. The highest-scoring concepts for maternal health data coordination are:

- **Grant Pack Builder** (Pillar Award: 91/105, Mayor's Choice: 95/105) — A tool that auto-assembles Richmond-specific, race-disaggregated maternal health fact sheets for grant applications by pulling from locked, validated indicator definitions across VDH, Census, and CDC sources. Solves the highest-frequency pain point (grant fact sheet assembly) with the highest feasibility and strongest equity case (serving capacity-constrained CBOs). Top-scoring idea across the entire Thriving Families pillar.
- **Equity Atlas RVA** (Pillar Award: 86/105, Mayor's Choice: 84/105) — A neighborhood-level equity mapping tool that overlays VDH Health Opportunity Index tract data with maternal health outcomes, making disparities visible at the sub-city level. Higher innovation but constrained by mixed data granularity (tract-level SDOH vs. city-level outcomes).
- **CBO Data Drops** (Pillar Award: 79/105, Mayor's Choice: 85/105) — Pre-formatted quarterly data packages delivered directly to CBOs in ready-to-use formats (PDF fact sheets, slide decks, grant-ready tables) that eliminate the need to navigate dashboards. Low innovation but very high Mayor's Choice score — the "boring but correct" answer.

None of these require replacing existing VDH systems — they all build aggregation and translation layers on top of published data, with the goal of ending duplicated analysis and conflicting numbers across the coalition.

We're not asking for any commitment — just trying to understand the data access landscape and governance appetite so we can give the Mayor's office a realistic assessment of which prototypes could move forward. Happy to share any of the prototypes or our full research.

---

## Context for the SME
Richmond's maternal health data ecosystem is strong in individual components (VDH dashboards, PRAMS oversample, HEF-driven coordination, active CBO coalition) but fragmented across six portals with conflicting suppression rules, time windows, and indicator definitions. The core pain is that every organization independently downloads, reformats, and presents the same data — and gets different numbers. The prototype ideas address this through shared, pre-validated data products rather than another portal. The single biggest technical question is whether PRAMS microdata can be accessed locally for custom tabulations, and the single biggest governance question is whether anyone will own indicator definitions long-term.

## Why This Person
RCHD epidemiology leads would know the practical data access pathways (PRAMS requests, VHI DUA process, internal MMR calculations) and the coalition's data-sharing norms. Maternal health program leads at RHHD coordinate with UBB, Birth in Color RVA, and hospital systems and would understand both the conflicting-numbers problem and the CBO capacity constraints that shape which solution architecture is realistic.

## Data Questions (internal tracking)
- [ ] Q1: PRAMS microdata access pathway for local organizations (beyond published dashboards)
- [ ] Q2: Internal city-specific MMR calculation (rolling average, PD15, or unpublished estimate)
- [ ] Q3: Coalition indicator validation process (shared or siloed grant-writing data pulls)
- [ ] Q4: Appetite for formal data stewardship governance (beyond HEF/RHPHF de facto role)
- [ ] Q5: CBO/doula data capacity (portal-ready vs. need pre-built exports)

## Research Sources
- `_research-answers/mh_q1_data.md` — VDH data availability, suppression rules, race schema, HOI
- `_research-answers/mh_q2_ecosystem.md` — RHHD coalition, PRAMS access, VHI/VHHA, CBO pathways, HEF
- `_research-answers/mh_q3_prior_art.md` — National portal models, credibility mechanisms, AI/AN caveat, sustainability
- `_shared-maternal-health/jtbd_analysis.md` — Full JTBD + 20 open questions with verdicts
- `NEW_IDEAS_RUBRIC_GRADES.md` — Scored solution ideas (PS2)
