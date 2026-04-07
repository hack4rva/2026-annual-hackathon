# City-ready measurement governance for maternal and infant outcomes: how to standardize definitions and stop denominator drift

## Executive Summary
City coalitions and multi-agency partnerships can stop "denominator drift"—the silent divergence of metric definitions across organizations—by adopting national metric specifications (NVSS, CDC SMM, AIM), resident-based linkage policies, strict American Community Survey (ACS) vintage rules, and National Center for Health Statistics (NCHS) suppression standards. When local agencies use different denominators (e.g., live births vs. population, occurrence vs. residence) or different data vintages, it creates false trends and cross-agency disagreements. By implementing a versioned data dictionary with automated quality control (QC) and centralized registries, coalitions can ensure that infant mortality and maternal morbidity metrics remain consistent, reproducible, and actionable.

## Why Denominator Drift Happens — And How It Skews Decisions
Small definitional slips in residency rules, ACS vintages, census boundary shifts, and suppression thresholds produce false trends that can misguide public health interventions. 

### Failure cases with consequences: misclassification at extremes
Inconsistent data reporting can artificially inflate or deflate mortality rates. For example, the State Infant Mortality Collaborative (SIMC) found that in Delaware, an unexpectedly high proportion of deliveries under 500 grams had been incorrectly classified as surviving live births rather than infant deaths or fetal deaths, which artificially altered the infant mortality rate [1]. Correcting this underreporting of infant deaths accounted for a small but important proportion of the increase in infant mortality, demonstrating that data quality issues at the extremes of birthweight and gestational age can masquerade as true clinical trends [1].

### Common drift drivers to control
Denominator drift is typically driven by inconsistent handling of residency (mother's residence vs. infant's residence; occurrence vs. residence), shifting data vintages (ACS 1-year vs. 5-year estimates), census boundary updates (2010 vs. 2020), suppression artifacts (e.g., suppressing counts <10 or flagging rates <20), and inconsistent ICD code lists.

## The Standard Stack — National specifications to anchor city metrics
To align numerators and denominators across partners, coalitions must anchor their metrics to a small set of authoritative federal standards and tools.

### Core infant mortality specifications
The NVSS Linked Birth/Infant Death data set is the preferred source for examining infant mortality by maternal characteristics, such as race and Hispanic origin, because the mother's information from the birth certificate is used in both the numerator and the denominator [2] [3]. The period linked file consists of all infant deaths occurring in a given data year linked to their corresponding birth certificates, with the denominator being all births occurring in that year [4]. In 2022, a record weight was added to the U.S. linked file to compensate for the 1.4% of infant death records that could not be linked to their corresponding birth certificates (20,334 linked; 279 unlinked) [5].

### Core maternal morbidity specifications
The CDC defines 21 Severe Maternal Morbidity (SMM) indicators using administrative hospital discharge data and ICD-10-CM/PCS codes [6]. The Alliance for Innovation on Maternal Health (AIM) provides an implementation guide and flagging tables that standardize the calculation of SMM, including explicit denominator inclusion/exclusion flags and the option to exclude blood transfusions from the final calculation [7].

### Survey-based exposure measures
The Pregnancy Risk Assessment Monitoring System (PRAMS) draws a stratified sample of women who had a recent live birth from the jurisdiction's birth certificate file [8]. PRAMS data are weighted by jurisdiction to account for complex sampling designs, allowing for the generalization of results to the entire population of births [8].

### Population denominators and race bridging
When using survey-based denominators, the Census Bureau provides explicit guidance: 1-year ACS estimates are restricted to populations of 65,000+, while 5-year ACS estimates provide the most reliable data for all areas, including very small populations and census tracts [9]. For mortality rates requiring population denominators, NCHS provides bridged-race population estimates to ensure consistency across census vintages [10].

## State/Regional Registries and QC — Centralized computation and validation
Central registries remove local variability, enforce quality assurance, and return consistent rates across participating hospitals and agencies.

### CMQCC Maternal Data Center
The California Maternal Quality Care Collaborative (CMQCC) Maternal Data Center (MDC) is an online tool that links hospital patient discharge data to state birth certificate data [11] [12]. Used by over 200 hospitals representing approximately 95% of all births in California, the MDC automatically calculates perinatal performance metrics, benchmarks performance, and identifies data quality issues, including ICD-10 coding errors [11] [12].

### Vermont Oxford Network (VON) / CPQCC NICU model
The Vermont Oxford Network (VON) maintains voluntary databases for very low birth weight infants and neonatal intensive care admissions, providing data collection software (eNICQ) and automated reporting tools [13] [14]. Regional collaboratives like CPQCC build on this model by enforcing strict data finalization guidelines, such as requiring hospitals to follow up on all warnings and minimizing the use of "Confirmed Unknown" to less than 3% for key risk factors and outcomes [15].

### PQC resource guides and governance
Perinatal Quality Collaboratives (PQCs) are state or multistate networks that implement initiatives to reduce disparities and improve outcomes [16]. The CDC and the National Network of Perinatal Quality Collaboratives (NNPQC) provide resource guides for states on data, measurement, and sustainability [16].

## City-Level Harmonization Practices — Models to emulate
Mature city and state data products make their methods auditable by explicitly documenting indicators, vintages, versions, and suppression rules.

### City Health Dashboard: a template for transparent city metrics
The City Health Dashboard publishes a comprehensive data dictionary that explicitly defines numerators, denominators, and estimates [17]. It tracks data vintages using `data_period` and `period_type` (e.g., 5-year estimate), notes the `census_parent_shape_year` (2010 vs. 2020 boundaries), and uses `data_indicator` fields to flag censored or unreliable data based on NCHS suppression standards [17].

### State dashboards "About the data"
State health departments explicitly define residency rules to prevent denominator drift. The Virginia Department of Health (VDH) notes that live births are reported by the city or county where the mother normally resided, while infant deaths are reported by the city or county where the infant resided at the time of death, regardless of where the events occurred [18]. The Vermont Data Encyclopedia similarly emphasizes resident-based statistics and notes limitations regarding the completeness of resident data from other states [19].

## Decision Framework — Selecting the right source for the question

| Question Type | Preferred Data Source | Denominator Rule | Residency Rule | Suppression / Flags |
| :--- | :--- | :--- | :--- | :--- |
| **Infant mortality by maternal race/ethnicity** | NVSS Linked Period File or State Resident-Linked File | Live births to resident mothers | Mother's residence for denominator; infant residence for death | Suppress counts <10; flag rates <20 deaths as unreliable |
| **SMM among delivery hospitalizations** | State Inpatient Discharge Data + CDC SMM Indicators | Delivery hospitalizations meeting AIM inclusion rules | Resident mother or facility-based (must be explicitly defined) | Local suppression threshold policy |
| **Exploratory comparisons across geographies** | CDC WONDER | Live births (for infant age groups) or Bridged-Race Population | Resident-based | Suppress counts <10; flag rates <20 deaths as unreliable |

*Key Takeaway:* Standardizing source selection ensures that all coalition partners use the same denominators and residency rules for specific types of questions, preventing conflicting reports.

## Governance Blueprint — Stand up measurement governance that prevents drift
A pragmatic, stepwise operating model allows city coalitions to govern metrics consistently.

### 1) Metric catalog and coalition data dictionary
Publish a centralized data dictionary that explicitly defines numerators, denominators, ICD lists, residency rules, time windows, suppression rules, `data_period`, `period_type`, and census vintages. Track effective dates for all definitions.

### 2) Residency and linkage policy
Adopt strict resident-based rules: count births by maternal residence and deaths by infant residence [18]. Require birth-death linkage where applicable, monitor linkage rates, and audit extreme values (e.g., <500g) annually to prevent misclassification [1].

### 3) Canonical code management
Maintain analytic code in version-controlled repositories (e.g., Git). Pin specific versions of code lists, such as the CDC SMM indicators and AIM flagging tables [6] [7]. Include unit tests for denominator construction.

### 4) ACS denominator policy
Default to ACS 5-year estimates for small-area denominators to ensure reliability [9]. Lock vintages by report cycle, explicitly include the `period_type` in data outputs, and rebaseline historical series when census vintages change.

### 5) Automated validation checks
Implement automated checks for range, missingness, and cross-field logic. Replicate PQC-style warnings and set target thresholds, such as keeping "confirmed unknown" values below 3% for key fields [15].

### 6) Change management and versioning
Maintain a dataset versioning log (similar to the City Health Dashboard) with release notes [17]. Track code list changes, tag analytic code releases, and store data provenance (source IDs, pull dates).

### 7) Partner roles, MOUs/DUAs, and helpdesk
Adopt standard Data Use Agreements (DUAs) and Memorandums of Understanding (MOUs). Define clear roles (data submitter, registry/QC lead, analytics steward) and set service-level agreements for feedback loops to hospitals and vital records offices.

### 8) Publication standards
Adopt NCHS suppression standards for rates and proportions [20]. Use WONDER-style flags (e.g., marking rates based on <20 events as "unreliable" and suppressing counts <10) [21] [22]. Include data caveats and residency notes on every public chart.

## Walkthroughs — From question to rate with guardrails

### Example A: Infant mortality by maternal race/ethnicity, 3-year pooled city estimate
**Source:** NVSS linked period file. 
**Process:** Pull resident births and link infant deaths. Align numerator and denominator years. Apply weighting for unlinked records (e.g., 1.4% adjustment) [5]. Apply NCHS suppression rules (suppress if <10 deaths; flag if <20) [21]. Report confidence intervals. Document the `data_period`, `period_type` (3-year pool), and census vintage for denominators if age-adjustment is used.

### Example B: Severe Maternal Morbidity rate among deliveries, transfusions excluded
**Source:** State inpatient discharge data. 
**Process:** Apply AIM guide joins for DX/PR/DRG codes [7]. Define denominator inclusions and exclusions. Flag SMM components using the CDC 21-indicator list [6]. Calculate the SMM rate per 10,000 deliveries, explicitly excluding blood transfusions if following the FAD resource document [7]. Run validation checks to ensure age ranges (12-55) and pregnancy codes are present.

## Risk Register and KPIs — Ongoing control of drift
Monitor specific risks and key performance indicators (KPIs) to ensure metrics do not deviate from coalition policy.

### Risks to track
Track census boundary and vintage changes, hospital coding drift, underreporting at extremes of gestational age and birthweight [1], residency misassignment, small-number volatility, code list drift, and late data revisions.

### KPIs
- **Linkage rate:** Target ≥99% linkage of infant deaths to birth records.
- **Data completeness:** Percent "confirmed unknown" on key fields <3% [15].
- **Suppression tracking:** Proportion of measures with suppression flags.
- **QC responsiveness:** Time-to-correction for QC warnings.
- **Versioning compliance:** Release notes published for 100% of data releases.

## Implementation Roadmap — 90-day plan and 12-month scale
- **Days 0-30:** Charter the Measurement Governance Council. Adopt NVSS, CDC SMM, and AIM specifications. Publish residency, ACS, and suppression policies. Set up a version-controlled Git repository.
- **Days 31-60:** Build version 1 of the data dictionary. Implement QC dashboards and warning thresholds. Calculate the first two flagship measures (IMR pooled; SMM without transfusion). Publish the v1 versioning log.
- **Days 61-90:** Conduct partner training. Execute DUAs and MOUs. Publish the first city technical appendix. Schedule a SIMC-style audit for extreme birthweights.
- **Months 4-12:** Expand registry integration. Add PRAMS-exposure linkages. Automate the release calendar and conduct an independent methods review.

## Reference Library — What to cite in your technical appendix
- **NVSS linked birth-infant death:** Methods, weighting, and resident-based inclusion [4] [5].
- **CDC SMM indicators:** ICD-10 code lists (21 indicators) [6].
- **AIM SMM implementation guide:** Denominator logic and flagging tables [7].
- **NCHS data presentation standards:** Suppression rules for rates and proportions [20].
- **ACS guidance:** 1-year vs. 5-year estimate selection [9].
- **City Health Dashboard:** Data dictionary and versioning log structure [17].
- **PQC/registry resources:** CPQCC NICU data finalization guidelines and unknown thresholds [15].
- **CDC WONDER:** Documentation on suppression (<10) and unreliable rates (<20) [21] [22].

## Comparative Tables

### Core data sources and how they prevent denominator drift

| Source | Primary Use | Numerator/Denominator Rule | Residency Rule | Update/Suppression |
| :--- | :--- | :--- | :--- | :--- |
| **NVSS Linked Period File** | Infant mortality by maternal traits | Denom = all births in year; Num = linked deaths | Resident-based | Weighted for unlinked; NCHS suppression |
| **CDC SMM + AIM** | Maternal morbidity | Denom = delivery hospitalizations | Facility or Resident | Excludes transfusions optionally |
| **ACS 5-Year** | Small-area population denominators | 60 months of collected data | Resident-based | Most reliable for small areas |
| **CDC WONDER** | Reproducible public queries | Infant age groups use live births | Resident-based | Suppress <10; Unreliable <20 |
| **CMQCC MDC** | Hospital benchmarking | Linked discharge-to-birth | Facility-based | Flags ICD coding errors |

*Key Takeaway:* Each source has specific rules for denominators and residency; coalitions must document which source is used for which metric to prevent drift.

### Suppression and flag policies to adopt

| Context | Rule | Rationale | Where Implemented |
| :--- | :--- | :--- | :--- |
| **Small Counts** | Suppress counts <10 | Protects confidentiality | CDC WONDER, NCHS |
| **Unstable Rates** | Flag rates with <20 events as "unreliable" | RSE ≥ 23% is statistically unreliable | CDC WONDER, NCHS |
| **Proportions** | CI-based suppression | Accounts for denominator size and CI width | NCHS 2023 standards |
| **Infant Age Groups** | Denominator = live births | More accurate than population estimates | CDC WONDER |

*Key Takeaway:* Adopting strict, standardized suppression rules prevents coalitions from publishing highly volatile, misleading rates for small populations.

### Governance roles and artifacts

| Role | Owner | Artifact | Cadence |
| :--- | :--- | :--- | :--- |
| **Measurement Governance Council** | Multi-agency leadership | Metric Catalog & Policies | Quarterly review |
| **Analytics Steward** | Lead Epidemiologist | Version-controlled code (Git) | Per release |
| **Registry/QC Lead** | Data Manager | QC Dashboard & Warnings | Monthly |
| **Communications Lead** | Public Health Dept. | Data Dictionary & Version Log | Per release |

*Key Takeaway:* Clear ownership of governance artifacts ensures that data dictionaries and validation tools are actively maintained and enforced across the coalition.

## References

1. *
            Developing a Standard Approach to Examine Infant Mortality: Findings from the State Infant Mortality Collaborative (SIMC) - PMC
        *. https://pmc.ncbi.nlm.nih.gov/articles/PMC4301426/
2. *National Vital Statistics Reports Volume 74, Number ...*. https://www.cdc.gov/nchs/data/nvsr/nvsr74/nvsr74-07.pdf
3. *Fetched web page*. https://www.cdc.gov/nchs/data/nvsr/nvsr69/NVSR-69-7-508.pdf
4. *NVSS - Linked Birth and Infant Death Data*. https://www.cdc.gov/nchs/nvss/linked-birth.htm
5. *National Vital Statistics Reports*. https://www.cdc.gov/nchs/data/nvsr/nvsr73/nvsr73-05.pdf
6. *Identifying Severe Maternal Morbidity (SMM) | Maternal Infant Health | CDC*. https://www.cdc.gov/maternal-infant-health/php/severe-maternal-morbidity/icd.html
7. *AIM Severe Maternal Morbidity Guide (March 2022)*. https://saferbirth.org/wp-content/uploads/AIMData_SMMGuide_5CR_042922.pdf
8. *Data Methodology | PRAMS | CDC*. https://www.cdc.gov/prams/php/methodology/index.html
9. *Using 1-Year or 5-Year American Community Survey Data*. https://www.census.gov/programs-surveys/acs/guidance/estimates.html
10. *U.S. Census Populations With Bridged Race Categories *. https://www.cdc.gov/nchs/nvss/bridged_race.htm
11. *Maternal Data Center | California Maternal Quality Care Collaborative*. https://www.cmqcc.org/maternal-data-center
12. *What We Do | California Maternal Quality Care Collaborative*. https://www.cmqcc.org/about/what-we-do
13. *Databases and Reporting - Vermont Oxford Network*. https://public.vtoxford.org/data-and-reports/
14. *Membership FAQs - Vermont Oxford Network*. https://public.vtoxford.org/membership-faqs/
15. *NICU Data Finalization Guidelines*. https://cpqcc.org/files/2025_NICU_Data_Finalization_Guidelines.pdf
16. *Perinatal Quality Collaboratives | Maternal Infant Health | CDC*. https://www.cdc.gov/maternal-infant-health/pqc/index.html
17. *City Health Dashboard Data Dictionary*. https://assets.ctfassets.net/2b49co28d55u/3PObt33s5l6PjICO2myubP/1fa3db91625d93144a36dee32822d770/READ_ME_City_Health_Dashboard_Data_Dictionary_12-09-2025.pdf
18. *Maternal & Child Health Indicators - Data*. https://www.vdh.virginia.gov/data/maternal-child-health/mch-indicators/
19. *Data Encyclopedia*. https://www.healthvermont.gov/sites/default/files/documents/pdf/HS_Data_Encyclopedia.pdf
20. *National Center for Health Statistics Data Presentation ...*. https://www.cdc.gov/nchs/data/series/sr_02/sr02_175.pdf
21. *Underlying Cause of Death 1999-2020*. https://wonder.cdc.gov/wonder/help/ucd.html
22. *FAQs -- Frequently Asked Questions*. https://wonder.cdc.gov/wonder/help/faq.html
