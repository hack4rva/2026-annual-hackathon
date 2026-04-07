# JTBD Analysis — Maternal Health Data Coordination

**Pillar:** Thriving Families
**Problem Statement (verbatim):** Maternal Health Data Coordination — Reduce duplicated data analysis across agencies so Richmond's maternal health ecosystem can operate from shared, consistent metrics.
**Applies to:** RVA People Data

---

## Jobs To Be Done

### Job 1 — The Analyst Who Downloads the Same Data Every Quarter and Gets Different Numbers Than the Agency Next Door
> "When I (a maternal health program analyst at Richmond City Health District or a nonprofit like the Richmond Healthy Start Initiative) download the same VDH/Census/CDC datasets every quarter, reformat them into my organization's templates, and present numbers that don't match what the agency next door presented last week, I want one shared, pre-formatted data source that everyone draws from, so we all work from the same denominators, the same definitions, and the same time windows — and stop spending grant dollars on duplicated data wrangling."

**Current workaround:** Each organization independently pulls data from VDH MCH dashboards, CDC WONDER, ACS tables, and March of Dimes PeriStats. Analysts reformat exports into internal spreadsheets, manually calculate rates using whatever denominator they find first, and present findings in siloed reports. When two organizations cite conflicting infant mortality or preterm birth figures at the same coalition meeting — because one used VDH's 2023 data and the other used March of Dimes' 2024 Report Card figure — trust erodes and meeting time is consumed reconciling numbers instead of planning interventions (`A2_problem_landscape_maternal_health_data.md`, `B3_users_maternal_health_researcher.md`).

**Pain:** Richmond's maternal health data is distributed across at least six distinct portals and products: the VDH MCH Indicators Dashboard (2023 data, updated September 2025), VDH Maternal Mortality Dashboard (aggregated 2019–2023), VDH PRAMS dashboards, VDH HealthStats legacy tables (stalled at 2020), the March of Dimes PeriStats/Report Card, and Census ACS tables (`D2_data_vdh_maternal.md`). Each source uses different time windows, different suppression thresholds, and different indicator definitions. VDH suppresses counts below 20; CDC WONDER suppresses below 10. VDH defines maternal mortality as death within 42 days of pregnancy; pregnancy-associated deaths extend to 365 days — and users routinely conflate the two (`G2_risks_health_claims.md`, `B3_users_maternal_health_researcher.md`). The 2018 NVSS pregnancy checkbox recoding created a methodological break that makes pre/post trend comparison invalid, but most local reports ignore this (`G2_risks_health_claims.md`).

### Job 2 — The Grant Writer Who Hunts Across Five Portals for Race-Disaggregated Richmond Data
> "When I (a grant writer or program director at a Richmond maternal health organization like Urban Baby Beginnings or Birth in Color RVA) need race-disaggregated, Richmond-specific data for every federal or foundation funding application but spend hours hunting across VDH, Census, CDC Wonders, and VDOE sites — clicking through dashboards that default to statewide views, downloading CSVs that require manual filtering to Richmond City, and guessing which year is 'final' versus 'provisional' — I want a single portal where the data is already Richmond-filtered, race-disaggregated, and exportable with auto-generated citations, so I can build a credible funding narrative in minutes instead of days."

**Current workaround:** Grant writers manually navigate to VDH MCH Indicators, filter to "Richmond City," and copy figures into applications. They cross-reference with March of Dimes for national benchmarks and ACS tables for socioeconomic context. Race disaggregation requires careful handling because VDH uses single-race categories with Hispanic as a separate ethnicity dimension, while some federal grants expect combined race/ethnicity breakdowns (`D2_data_vdh_maternal.md`, `D3_data_census_acs.md`). Coordinators have reported spending half a day assembling a single grant fact sheet — manually copying numbers, verifying which year is final, and writing methodological caveats to explain why their infant mortality number differs from last year's CHA (`B3_users_maternal_health_researcher.md`).

**Pain:** Richmond's PRAMS oversample is a premium data asset — one of only two health districts in Virginia with district-level behavioral data — but accessing it requires navigating a separate VDH portal and understanding survey methodology (`D2_data_vdh_maternal.md`). ACS tables for insurance coverage, poverty, and employment among women 15–44 require API queries or multi-step downloads from data.census.gov, with margin-of-error handling that most program staff are not trained to interpret (`D3_data_census_acs.md`). KIDS COUNT data provides useful child well-being benchmarks but only at the state level, requiring local proxies (`D4_data_kids_count.md`). The result: smaller CBOs and doula collectives often lack the analytic capacity to access the data they need, while larger organizations hoard data expertise — widening the gap between who has evidence and who needs it most (`C4_services_gaps.md`).

### Job 3 — The Budget Analyst Who Has No Consolidated Equity Dashboard
> "When I (a City budget analyst, policy maker, or Richmond and Henrico Health Districts leadership) need to understand the scale of Richmond's maternal health disparities — Black maternal mortality rates, preterm birth trends, the 37.4% of pregnancy-associated deaths occurring 43–365 days postpartum, the 40% overdose share — but find no single, consolidated, benchmarked dashboard that shows Richmond versus Virginia trends with equity breakdowns, I want a trusted, auditable data view that I can cite in budget justifications and policy briefs, so resource allocation reflects the actual burden and not whoever's report landed on my desk last."

**Current workaround:** Budget analysts rely on the RHHD 2024 Community Health Assessment (a static PDF), VDH MCH dashboards, and ad-hoc data requests. Virginia's Maternal Mortality Review Team annual report provides statewide preventability analysis but does not break out Richmond-specific findings (`D2_data_vdh_maternal.md`). To understand the intersection of maternal health and social determinants, analysts must manually overlay VDH Health Opportunity Index tract-level data with maternal indicators — a task that requires GIS literacy most budget staff lack (`A5_problem_landscape_health_equity.md`).

**Pain:** Non-Hispanic Black women in Virginia experience a maternal mortality rate of 69.9 per 100,000 live births compared to 13.2 for Non-Hispanic White women — a 5.3× disparity (`A5_problem_landscape_health_equity.md`). Richmond City's small population means maternal death counts frequently fall below VDH's suppression threshold of 20, creating gaps in city-level time series that can only be filled by using Planning District 15 aggregates or multi-year rolling averages (`D2_data_vdh_maternal.md`, `G4_risks_data_quality.md`). The VDH EDCC program enables maternal alerting for hospital ED visits, but smaller CBOs cannot access or interpret this data without dedicated analytic support (`C4_services_gaps.md`). Without a shared, benchmarked view, competing narratives about Richmond's maternal health crisis circulate — some citing 42-day mortality, others citing 365-day pregnancy-associated deaths — undermining the coalition alignment needed to secure sustained funding (`G2_risks_health_claims.md`).

---

## Open Questions

### Data Questions
1. How many of the 173 indicators claimed by the RVA People Data demo are directly sourced from VDH versus Census/ACS versus CDC, and does each indicator lock to the authoritative source's definition and vintage?
2. What suppression rules does the portal apply — VDH's <20 threshold, CDC WONDER's ≤9 threshold, or a custom rule — and how are suppressed values communicated to users?
3. Does the portal distinguish between VDH "final" and "provisional" data vintages, and does it flag the 2018 NVSS pregnancy checkbox methodological break that invalidates pre/post maternal mortality trend comparisons?
4. For race-disaggregated indicators, does the portal follow VDH's single-race + Hispanic-ethnicity schema or the combined race/ethnicity categories that federal grants typically require — and how are intersectional cuts (e.g., Non-Hispanic Black) handled?
5. What is the refresh pipeline? The demo mentions GitHub Actions annual refresh and CSV upload — is the data lag acceptable for organizations that need current-year or provisional data?

### User Questions
6. Who are the primary intended users — epidemiologists running custom queries, program coordinators building grant fact sheets, or policy makers reviewing dashboards — and does the UX serve all three without forcing one into the other's workflow?
7. Has the team validated the indicator selection with Richmond's maternal health coalition (RHHD, Urban Baby Beginnings, Birth in Color RVA, VCU Health) to ensure the "most-needed numbers" are present?
8. Do smaller CBOs and doula collectives have the technical capacity to use a data portal, or do they need pre-built exports (e.g., a "Quick Facts" PDF generator) that eliminate the need to navigate dashboards?
9. How do current users discover conflicting numbers across sources — do they notice during grant writing, during coalition meetings, or only when reviewers flag discrepancies?

### Integration Questions
10. Does the MCP connector for AI integration include guardrails to prevent LLM hallucination when responding to queries about maternal health indicators — given the demo's stated "no hallucination" design?
11. Can the portal ingest or cross-reference VDH PRAMS microdata (Richmond City Health District oversample), or is it limited to the published dashboard aggregates?
12. Is there a pathway to integrate VHI hospital discharge data or VHHA Analytics data under a data use agreement, or does the portal strictly use publicly accessible sources?
13. How does the CSV upload pipeline validate incoming data against locked indicator definitions to prevent schema drift or definitional mixing?

### Equity Questions
14. Does the "equity/disparity snapshot" feature calculate rate ratios and excess burden — or does it only display side-by-side rates, leaving users to interpret the magnitude of disparity themselves?
15. How does the portal handle the known 34% underestimation of American Indian and Alaska Native mortality from death certificate misclassification — does it surface this data quality caveat?
16. Does the portal present social determinants of health (VDH Health Opportunity Index, ACS poverty/insurance/employment) alongside clinical outcomes, so users can contextualize disparities rather than presenting them as unexplained group differences?
17. Are maternal health indicators available at the census tract level (for neighborhood equity mapping), or only at the city/county level — and if tract-level, how are small-number suppression and ACS margin-of-error handled?

### Prior Art Questions
18. What distinguishes this portal from existing aggregators (March of Dimes PeriStats, County Health Rankings, City Health Dashboard) that already provide some of these indicators — what does Richmond-specific curation add that national tools cannot?
19. Has the team studied the governance patterns of trusted health dashboards (CDC WONDER's per-query citations, City Health Dashboard's method cards, CHR&R's Health Groups) and adopted comparable credibility mechanisms?
20. What is the maintenance and stewardship model post-hackathon — who owns the data refresh, who resolves user-reported discrepancies, and what governance body (Data Stewardship Council or equivalent) ensures indicator integrity over time?

## Answered Questions

Parallel AI research (`_research-answers/mh_q1_data.md`, `mh_q2_ecosystem.md`, `mh_q3_prior_art.md`) was used to triage the open questions below. Verdicts reflect what the research **confirms about the ecosystem and authoritative sources**, not RVA People Data implementation unless stated.

| # | Question | Verdict | Key Finding |
|---|----------|---------|-------------|
| 1 | How many of the 173 indicators… authoritative source and definition lock? | [Still Unknown] | Research maps VDH portals and Richmond indicator availability (MCH, SMM, PRAMS, HOI, etc.) but does not inventory 173 indicators or product definition-locking. (`mh_q1_data.md`) |
| 2 | What suppression rules… VDH under-20, CDC WONDER ≤9, or custom? | [Confirmed] | VDH suppression is context-specific (e.g., NSSP cells under 5; MCH/SMM under 20 or unstable); CDC WONDER NCHS mortality suppresses rates from fewer than 10 deaths from 2023 data year onward (previously fewer than 20). (`mh_q1_data.md`, `mh_q3_prior_art.md`) |
| 3 | Final vs provisional vintages; 2018 NVSS pregnancy-checkbox break flagged? | [Partial] | VDH MCH dashboards do not explicitly label provisional vs final; no evidence VDH public pages flag the 2018 NVSS pregnancy-checkbox discontinuity. (`mh_q1_data.md`) |
| 4 | Race schema: VDH single-race + Hispanic vs combined grant categories; intersectional cuts? | [Partial] | VDH vital statistics use Census single-race categories plus separate Hispanic/Non-Hispanic ethnicity; portal support for grant-style combined race/ethnicity cuts is not addressed. (`mh_q1_data.md`) |
| 5 | Refresh pipeline (e.g., GitHub Actions); is lag acceptable for current-year/provisional needs? | [Still Unknown] | Research cites dashboard vintages (e.g., MCH 2023; SMM dashboard updated Nov 2025) but not the product’s refresh automation or stakeholder lag requirements. (`mh_q1_data.md`) |
| 6 | Primary users (epi vs coordinator vs policymaker); does UX serve all three? | [Still Unknown] | Ecosystem roles are described, but no user research maps them to this portal’s UX. (`mh_q2_ecosystem.md`) |
| 7 | Validated indicator selection with RHHD, UBB, Birth in Color RVA, VCU? | [Still Unknown] | Coalition organizations are identified as key actors; validation of a specific portal’s indicator set is not documented. (`mh_q2_ecosystem.md`) |
| 8 | CBO/doula capacity; need pre-built exports vs navigating dashboards? | [Partial] | Smaller CBOs use public dashboards, RHHD/RHPHF coordination, and formal requests for restricted data—barriers to microdata and VHHA member analytics imply simpler outputs would help; not product-validated. (`mh_q2_ecosystem.md`) |
| 9 | How do users discover conflicting numbers (grants, coalitions, reviewers)? | [Still Unknown] | Ecosystem research notes fragmentation and data shared via coalitions and HEF-style processes but does not document when users first notice conflicting figures. (`mh_q2_ecosystem.md`) |
| 10 | MCP/AI guardrails against LLM hallucination on indicators? | [Still Unknown] | Prior-art and ecosystem research do not mention MCP connectors or LLM guardrails. (`mh_q3_prior_art.md`) |
| 11 | Ingest/cross-reference PRAMS microdata vs published aggregates only? | [Partial] | RCHD is PRAMS-oversampled with district stratification in dashboards; district microdata is not generally public—state-level CDC ARF or VDH “Submit a Data Request” for custom tabulations. (`mh_q2_ecosystem.md`) |
| 12 | Pathway for VHI discharge or VHHA Analytics under DUA vs public-only? | [Confirmed] | VHI hospital discharge is available via formal request and license/DUA; detailed VHHA Analytics is member-hospital restricted, with some public dashboards for non-members. (`mh_q2_ecosystem.md`) |
| 13 | CSV upload validation against locked definitions / schema drift? | [Still Unknown] | No research on CSV upload pipelines or definitional validation for this portal. (`mh_q1_data.md`) |
| 14 | Equity snapshot: rate ratios/excess burden vs side-by-side rates only? | [Still Unknown] | Trusted dashboards document methodology and limitations; whether this product computes rate ratios or excess burden is not specified. (`mh_q3_prior_art.md`) |
| 15 | Surface ~34% AI/AN mortality underestimation (death certificate misclassification)? | [Partial] | NCHS linkage work supports ~34% national AI/AN underestimation; same vital-statistics system affects Richmond; research recommends UI caveats—this portal’s behavior not stated. (`mh_q3_prior_art.md`) |
| 16 | Present SDOH (HOI, ACS) alongside clinical maternal outcomes? | [Partial] | HOI is tract-level for Richmond; HEF uses HOI with ACS, SVI, PLACES, BRFSS, etc.; HOI is SDOH context—not maternal outcomes—and is paired with outcome data in practice. (`mh_q1_data.md`, `mh_q2_ecosystem.md`) |
| 17 | Maternal indicators at tract vs city/county; suppression and ACS MOE? | [Partial] | HOI at tract; MCH outcomes locality/county with suppression/unstable flags (e.g., SMM counts under 20); city-level MMR not published; ACS MOE for this portal not addressed. (`mh_q1_data.md`) |
| 18 | Distinction from PeriStats, County Health Rankings, City Health Dashboard? | [Partial] | No U.S. city unifies VDH+vital+Census+CDC in one race-disaggregated maternal portal; City Health Dashboard, CHR, PeriStats lack intra-Richmond depth or integration—differentiation narrative, not a build benchmark. (`mh_q3_prior_art.md`, `mh_q2_ecosystem.md`) |
| 19 | Studied governance/credibility patterns (WONDER citations, method cards, CHR-style groups)? | [Partial] | Prior art: per-query citations, methodology/“About the data,” vintage labeling, suppression disclosure (NYC, WONDER); whether this team studied or adopted them is undocumented. (`mh_q3_prior_art.md`) |
| 20 | Post-hackathon maintenance: refresh owner, discrepancy resolution, stewardship council? | [Partial] | No formal Richmond health data stewardship council; HEF/RHPHF coordinates data-driven priorities; Virginia ODGA Data Governance Council at state level; Chicago/NYC show sustainable multi-stakeholder or agency-led models—hackathon ownership unspecified. (`mh_q2_ecosystem.md`, `mh_q3_prior_art.md`) |

**Summary:** 2 Confirmed / 10 Partial / 8 Still Unknown out of 20 questions.
