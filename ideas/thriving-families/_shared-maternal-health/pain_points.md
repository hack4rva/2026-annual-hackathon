# Pain Point Research — Maternal Health Data Coordination

**Pillar:** Thriving Families
**Problem Statement:** Reduce duplicated data analysis across agencies so Richmond's maternal health ecosystem can operate from shared, consistent metrics.
**Applies to:** RVA People Data
**Research Date:** April 1, 2026

**Evidence sources from existing corpus:**
- `A2_problem_landscape_maternal_health_data.md` — Global and national maternal health data gaps and fragmentation
- `A5_problem_landscape_health_equity.md` — Health equity metrics, drivers, and persistent disparities
- `B3_users_maternal_health_researcher.md` — Richmond maternal health data users, workflows, and trust requirements
- `B4_users_stakeholders_map.md` — Stakeholder mapping and engagement strategy
- `C4_services_gaps.md` — Maternal health coordination breakpoints and data producer-user disconnects
- `G2_risks_health_claims.md` — Health data misuse risks, coding breaks, and indicator sensitivity
- `G4_risks_data_quality.md` — Data suppression, ACS reliability, and provisional data risks

---

## Pain Points by JTBD

### Job 1 — The Analyst Duplicating Data Work Across Agencies

**P1.1: Six Portals, No Shared Truth**
Richmond's maternal health indicators are scattered across at least six distinct VDH products, plus Census ACS, KIDS COUNT, and March of Dimes — each with different time windows, indicator definitions, suppression rules, and data formats. The VDH MCH Indicators Dashboard provides 2023 data (updated September 2025). The Maternal Mortality Dashboard aggregates 2019–2023. HealthStats legacy tables are stalled at 2020. The MMRT Annual Report covers 2022. March of Dimes PeriStats cites 2024 for preterm births. Census ACS 5-year estimates pool 2020–2024 (`B3_users_maternal_health_researcher.md`, `A2_problem_landscape_maternal_health_data.md`).

When two organizations pull "the infant mortality rate" from different portals and get different numbers — VDH reports 5.8 per 1,000 for 2023; March of Dimes reports 5.9 for the same year — trust erodes at coalition meetings. The divergence is explainable (different source datasets, rounding, and time windows), but explaining it consumes analytic bandwidth that should be spent on intervention design (`B3_users_maternal_health_researcher.md`, `G2_risks_health_claims.md`).

**P1.2: Definitional Mixing Produces Misleading Advocacy**
The most dangerous data error in Richmond's ecosystem is the routine conflation of maternal mortality (death within 42 days of pregnancy, excluding accidental/incidental causes — the NVSS/WHO definition) with pregnancy-associated deaths (death within 365 days from any cause — the VDH surveillance definition). Users mixing these numbers can inflate mortality figures by a factor of 3–4× without realizing it. The MMRC framework adds a third definition that includes injuries and uses medical/social/autopsy review. Each system answers a different question and produces a different number for the same city in the same year (`G2_risks_health_claims.md`, `B3_users_maternal_health_researcher.md`).

Grant applications that cite an inflated mortality statistic are rejected by reviewers who know the methodology. Policy briefs that unknowingly mix definitions undermine the coalition's credibility with the very decision-makers they are trying to influence (`G2_risks_health_claims.md`).

**P1.3: The 2018 NVSS Checkpoint Is a Hidden Trap**
In 2018, NCHS restricted pregnancy-checkbox-only coding for death certificates and formalized a new method for identifying maternal deaths. The CDC explicitly warns against comparing pre-2018 and post-2018 maternal mortality rates. Yet local reports routinely draw trend lines across this methodological break to show "rising maternal mortality" — the apparent spike is substantially a coding artifact, not a clinical change. A tool that enables users to draw these trend lines without warning reinforces a false narrative (`G2_risks_health_claims.md`).

Similarly, the ICD-9 to ICD-10 transition (2015) reduced Severe Maternal Morbidity (SMM) rates primarily via fewer transfusion codes, and the 2014 shift from Last Menstrual Period to Obstetric Estimate for gestational age altered preterm birth rates by nearly two percentage points. Each of these breaks is well-documented nationally but consistently ignored in local reporting (`G2_risks_health_claims.md`).

**P1.4: Format Divide Between Modern Dashboards and Legacy Tables**
Building a continuous time-series pipeline requires bridging a "format divide." VDH's newer dashboards provide clean CSV exports, but the HealthStats legacy tables (2010–2020) are trapped in multi-tab Excel files and PDFs that require scripted parsing or manual extraction. The MMRT Annual Report is a narrative PDF with embedded statistics that cannot be ingested programmatically. Analysts who need a 10-year trend must stitch together data from fundamentally different formats — a task that consumes days and introduces transcription errors (`B3_users_maternal_health_researcher.md`, `A2_problem_landscape_maternal_health_data.md`).

---

### Job 2 — The Grant Writer Hunting for Richmond-Specific Race-Disaggregated Data

**P2.1: State Dashboards Default to Statewide Views**
VDH MCH dashboards default to statewide data. Filtering to "Richmond City" requires navigating dropdown menus and understanding the distinction between city-as-county-equivalent and city-as-place. For race-disaggregated views, VDH uses single-race categories with Hispanic as a separate ethnicity dimension — but many federal funders expect combined race/ethnicity categories (e.g., "Non-Hispanic Black"). Translating between schemas requires manual recalculation that program staff are often not trained to perform (`B3_users_maternal_health_researcher.md`, `A2_problem_landscape_maternal_health_data.md`).

**P2.2: Suppression Creates Gaps Where Data Matters Most**
Richmond City's population is small enough that maternal death counts frequently fall below VDH's <20 suppression threshold, leaving gaps in city-level time series. When a grant application requires "Richmond's maternal mortality rate," the data simply may not exist in public tables for a given year. Analysts must fall back to Planning District 15 aggregates or multi-year rolling averages, which dilute the Richmond-specific story that funders are asking for (`A2_problem_landscape_maternal_health_data.md`, `G4_risks_data_quality.md`).

ACS tract-level data introduces a parallel challenge: margin-of-error handling. The Census Bureau recommends suppressing estimates where the MOE-to-estimate ratio exceeds 30% or the denominator is under 200, but most program staff do not apply these quality checks. The result is grant applications citing tract-level poverty or uninsured rates that are statistically meaningless (`G4_risks_data_quality.md`).

**P2.3: Provisional vs. Final Data Creates Citation Risk**
VDH marks recent-year maternal mortality data as "not final" and subject to change as deaths undergo additional quality checks. CDC WONDER provides provisional mortality data that is explicitly subject to revision. Grant writers who cite a provisional figure risk having their cited statistic change after submission — undermining credibility if a reviewer checks the source and finds a different number. No existing portal provides an opinionated default that steers users toward the latest *stable* year rather than the most recent *provisional* year (`G4_risks_data_quality.md`, `B3_users_maternal_health_researcher.md`).

**P2.4: PRAMS Is a Premium Asset Nobody Can Easily Use**
The VA PRAMS Richmond City Health District oversample is one of only two in the state, providing high-resolution behavioral and risk-factor data specifically for Richmond mothers — prenatal care experiences, substance use, breastfeeding, intimate partner violence screening. But accessing and interpreting this data requires navigating a separate VDH portal, understanding survey weighting methodology, and recognizing the difference between survey-estimated prevalence and vital-records-based rates. Smaller organizations cannot do this without dedicated epidemiologic support (`B3_users_maternal_health_researcher.md`, `C4_services_gaps.md`).

---

### Job 3 — The Budget Analyst with No Consolidated Equity Dashboard

**P3.1: The Postpartum Data Black Hole**
The most preventable maternal deaths occur where data coordination is weakest: the late postpartum period. In Virginia, 37.4% of pregnancy-associated deaths happen between 43 and 365 days after pregnancy, and 40% are from accidental overdose. This implicates a handoff failure between obstetric care, primary care, and behavioral health — but no single dashboard surfaces this finding in a way that connects it to resource allocation decisions. The data exists in VDH dashboards; the operational gap is between hospitals producing discharge records and CBOs needing to identify and follow up with at-risk mothers (`C4_services_gaps.md`, `B3_users_maternal_health_researcher.md`).

The VHI EDCC (Emergency Department Care Coordination) program enables maternal alerting when patients with recent deliveries present at EDs, including a Substance Exposed Infant flag. Urban Baby Beginnings uses EDCC for client follow-up. But this is one organization's workaround, not a system-wide solution — and it depends on EDCC adoption by every hospital in the region, which is not yet universal (`C4_services_gaps.md`).

**P3.2: Racial Disparities Are Documented but Not Operationalized**
Non-Hispanic Black women in Virginia experience a maternal mortality rate of 69.9 per 100,000 live births compared to 13.2 for Non-Hispanic White women — a 5.3× disparity. Black women die from cardiac causes at 26.6 per 100,000 compared to 5.8 for White women. The 2025 March of Dimes Report Card grades Virginia a "C-" for preterm birth. These statistics appear in state reports, national report cards, and CHA documents (`A5_problem_landscape_health_equity.md`, `B3_users_maternal_health_researcher.md`).

But no Richmond tool overlays these outcome disparities with the social determinants that drive them — the VDH Health Opportunity Index, ACS poverty and insurance data, employment constraints for parents with young children (ACS B23008). Without this overlay, decision-makers see the *what* (disparities) without the *where* (which census tracts) or the *why* (which social conditions). Disparity data without geographic and social context produces outrage but not actionable budgets (`A5_problem_landscape_health_equity.md`, `B3_users_maternal_health_researcher.md`).

**P3.3: No Trusted Benchmark for "How Are We Doing?"**
Budget justifications require comparison. Is Richmond's preterm birth rate improving or worsening? How does it compare to Virginia? To peer cities? To Healthy People 2030 targets? Answering these questions currently requires pulling data from three or more sources, aligning time windows, and manually constructing comparison tables. There is no automated, up-to-date Virginia-benchmarked view that a budget analyst can reference in a single session. National tools (CHR&R, City Health Dashboard) provide some comparison, but they are not Richmond-filtered by default and often lack the most recent VDH data vintage (`B3_users_maternal_health_researcher.md`, `A5_problem_landscape_health_equity.md`).

**P3.4: CBOs Lack Analytic Capacity to Act on Available Data**
The fundamental bottleneck is not data availability — it is analytic capacity at the point of action. VDH produces robust dashboards. Hospitals generate detailed clinical records accessible through VHHA Analytics (member-restricted). Census provides tract-level socioeconomic data. But the community-based organizations doing maternal health outreach — doula collectives, home visiting programs, substance use recovery support — typically lack dedicated data analysts. They cannot process VDH CSV exports, construct ACS API queries, or interpret survey-weighted PRAMS estimates. The data pipeline ends at the organizations that need it most (`C4_services_gaps.md`, `B3_users_maternal_health_researcher.md`).

---

## Cross-Cutting Equity Dimension

### Data Fragmentation Widens the Equity Gap

The pain points above are not uniformly distributed. Large institutions — RHHD, VCU Health, Bon Secours — have epidemiologists and quality analysts who can navigate VDH portals, run ACS API queries, and interpret suppression rules. Smaller CBOs, doula collectives, and community advocacy organizations do not. This creates a two-tier information ecosystem: institutions with analytic capacity hoard evidence, while the organizations closest to the communities with the worst outcomes operate on partial data, anecdotal impressions, and whatever numbers appeared in the last coalition slide deck (`C4_services_gaps.md`, `A5_problem_landscape_health_equity.md`).

A data portal that requires technical literacy to navigate — dashboard filtering, API parameters, MOE interpretation — will replicate this asymmetry. The evidence is clear from civic tech nationally: self-selecting digital tools systematically overserve higher-resource users (`G2_risks_health_claims.md`, `A5_problem_landscape_health_equity.md`).

### Structural Data Gaps Mask the Most Vulnerable

Several structural data quality issues specifically obscure the populations at highest risk:

- **Death certificate race misclassification** underestimates American Indian and Alaska Native mortality by 34% and Hispanic/Asian mortality by 3% nationally. Richmond's small AIAN population means even marginal misclassification can erase them from local statistics entirely (`A5_problem_landscape_health_equity.md`).
- **Suppression of small counts** is most aggressive in exactly the demographic subgroups and geographic areas where disparities are worst — small racial/ethnic populations in specific neighborhoods. The data disappears where the need is greatest (`G4_risks_data_quality.md`, `A2_problem_landscape_maternal_health_data.md`).
- **ACS margins of error** are widest in the same census tracts with the highest poverty and lowest insurance coverage — the tracts that equity analysis most urgently needs to see. Presenting these estimates without uncertainty indicators creates false confidence in precisely the geographies where the data is least reliable (`G4_risks_data_quality.md`).
- **The digital health divide** means that tools requiring broadband and digital literacy for access will exclude the populations most affected by maternal health disparities. The federal Affordable Connectivity Program ended in June 2024. Smartphone-only residents cannot navigate dashboard-heavy web applications (`A5_problem_landscape_health_equity.md`).

### What Equitable Data Coordination Requires

Based on the research corpus, closing the equity gap in Richmond's maternal health data ecosystem requires:

1. **Pre-built exports for non-technical users.** A "Quick Facts" PDF generator or grant-language builder that eliminates the need to navigate dashboards — serving the CBOs and doula collectives that are closest to the communities with the worst outcomes (`B3_users_maternal_health_researcher.md`).
2. **Race-disaggregated by default.** Indicators must be stratified by race, ethnicity, and insurance type as the default view, not as an optional filter. Over-aggregation masks the disparities that are the entire reason this problem statement exists (`A5_problem_landscape_health_equity.md`).
3. **Social determinants alongside clinical outcomes.** Overlaying VDH HOI, ACS poverty/insurance/employment data, and PRAMS behavioral data with maternal health outcomes transforms the tool from a "numbers portal" into an equity analysis platform (`A5_problem_landscape_health_equity.md`, `B3_users_maternal_health_researcher.md`).
4. **Transparent uncertainty and suppression.** Every suppressed cell, every MOE band, every provisional flag must be visible and explained in plain language. Hiding uncertainty is not a kindness to non-technical users — it is a mechanism for producing misleading grant applications and policy briefs that erode the coalition's credibility (`G4_risks_data_quality.md`, `G2_risks_health_claims.md`).
5. **Governance that includes community voice.** A Data Stewardship Council that includes CBOs and community health workers — not just RHHD, VDH, and hospital systems — ensures that indicator priorities, suppression decisions, and update cadences reflect the needs of the organizations closest to the communities being served (`C4_services_gaps.md`).
6. **Definitional guardrails that prevent harm.** Hard locks preventing users from mixing maternal mortality (42 days) with pregnancy-associated deaths (365 days), era markers blocking cross-2018 NVSS trend comparisons, and "Modeled Estimate" labels on PLACES/SAE data — because the most harmful data misuse comes from well-intentioned users who do not know what they do not know (`G2_risks_health_claims.md`).
