# From Maps to Money: How US SDOH Dashboards Drive Neighborhood-Level Action

## Executive Summary

The ecosystem of Social Determinants of Health (SDOH) dashboards has matured significantly, consolidating around a few anchor platforms that provide neighborhood-level visibility into housing, income, education, and health outcomes. Tools like the **City Health Dashboard (NYU)**, **CDC PLACES**, and the **Healthy Places Index (HPI)** have transformed how municipalities and Community-Based Organizations (CBOs) target interventions and allocate resources. 

**Key Strategic Insights:**
* **Funding integration drives adoption:** Dashboards see the highest sustained use when baked into allocation formulas. For example, California's HPI directed approximately **$272 million** in federal COVID funding to disproportionately impacted areas [1]. Similarly, Los Angeles County used its Equity Explorer to guide nearly **$2 billion** in American Rescue Plan Act (ARPA) funding [2] [3].
* **The "Core Five" data stack is standard:** The most valuable and repeatable data sources across platforms are the American Community Survey (ACS) 5-year estimates, CDC PLACES (modeled health prevalence), vital statistics (USALEEP life expectancy), EPA EJScreen, and built-environment data (ParkServe, Walk Score) [4] [5] [6]. Local administrative data (evictions, code violations) provides the necessary hyper-local context [7] [8].
* **Tract-level precision requires methodological care:** While census tract data unlocks precise neighborhood targeting, users must navigate modeled uncertainty and margins of error (MOEs). For instance, the 2020 ACS data collection challenges caused a **15-20% relative increase** in tract-level MOEs [9].
* **CBO adoption hinges on grant-friendly workflows:** CBOs frequently use these tools for grant writing and community needs assessments (CNAs). Platforms that offer easy data exports, pre-built templates, and clear visualizations (like PolicyMap and Social Explorer) see higher CBO uptake [10] [11] [12].
* **Race-and-place framing improves equity impact:** Leading tools explicitly measure race and place simultaneously to address structural inequities. The HPI and King County Health Disparities Dashboard use this framing to help communities advocate for unique needs and guide equitable solutions [13] [14].

## Landscape of US SDOH Dashboards

A robust, interoperable ecosystem now spans national academic/state tools, municipal ArcGIS hubs, and commercial data platforms. Rather than building from scratch, successful municipalities integrate existing national baselines with local administrative data.

National anchors like the **City Health Dashboard** provide over 35 measures across 5 domains for over 1,100 U.S. cities at the city and census-tract levels [15] [16]. **CDC PLACES** offers modeled small-area estimates for health behaviors and outcomes nationwide [17] [18]. State and regional tools, such as California's **Healthy Places Index (HPI)** and the **Child Opportunity Index (COI)**, provide composite indices that map resources and conditions vital for healthy development [19] [20].

At the municipal level, cities leverage platforms like the **Chicago Health Atlas** and **LA County Equity Explorer** to track local progress and prioritize funding [21] [22]. Commercial platforms like **PolicyMap** and **Social Explorer** complement these by offering curated data libraries and robust export features tailored for non-profits and researchers [23] [24].

| Tool | Host | Smallest Geography | Coverage | Key Data Sources | Access/API | Notable Adoption/Use |
|---|---|---|---|---|---|---|
| **City Health Dashboard** | NYU Langone | Census Tract | 1,100+ cities | ACS, PLACES, NVSS/USALEEP, EPA, Walk Score, ParkServe [5] | CSV / API [25] | 47k users in first 8 months; Clifton NJ health office; Grand Rapids $50M LIHTC [26] [27] |
| **CDC PLACES** | CDC | Tract / ZCTA | Nationwide | BRFSS modeled + ACS [6] | Open portal / API [17] | Standard source for tract health prevalence in city LHDs |
| **Healthy Places Index 3.0** | Public Health Alliance (CA) | Tract | CA statewide | ACS + env/built | Open + docs | Directed ~$272M COVID funds; endorsed by CDPH; used by counties, CBOs [28] [1] |
| **Neighborhood Atlas (ADI)** | Univ. Wisconsin | Block group | Nationwide | ACS | Download / API docs | Thousands of monthly queries; 2,500+ papers; used by health systems [29] |
| **Child Opportunity Index** | diversitydatakids.org | Tract | Nationwide | 29-44 indicators across domains [19] [30] | Download / map | Used by states, cities, CBOs for program targeting [19] |
| **LA Equity Explorer** | LA County CEO | Tract | County | ACS, COVID index, multi-sector local layers [31] [22] | ArcGIS layers / export | Used to tier ARPA allocations; documented in CEO recovery site [2] [22] |
| **Chicago Health Atlas** | CDPH / UIC | Tract / Community Area | City | Mixed: ACS, PLACES, local admin [32] | Download / help | Supports Healthy Chicago planning; "How to" trainings [33] [34] |
| **NYC Community Health Profiles** | NYC DOHMH | Community District | City | 50+ measures; open dataset [35] | PDF / export | Widely used for advocacy and planning [35] |
| **PolicyMap** | Reinvestment Fund spinoff | Tract / ZCTA | Nationwide | 150+ sources (ACS, CMS, CDC, HUD, TPL, etc.) [12] | Web / API / CSV | Nonprofit/CBO CNAs; grant writing, uploads [11] [12] |
| **Social Explorer** | Private | Tract / Block group | Nationwide | Census/ACS + curated datasets [24] | Web / exports | Libraries/nonprofits; geocode uploads; export GeoJSON/shapefile [36] [10] |

*Takeaway: The market is well-supplied with national baselines. Municipalities should focus on integrating these existing tools rather than building redundant platforms, reserving custom development for highly specific local administrative data.*

## Comparative Feature Matrix

Matching the right platform to the specific municipal or CBO decision is critical for sustained adoption.

| Use Case | Best-Fit Platforms | Why |
|---|---|---|
| **Equity funding formulas** | HPI (CA), LA Equity Index, CHD + local admin | Index tiers + tract granularity + documentation aid auditability [22] [1]. |
| **Grant writing and CNAs (CBOs)** | PolicyMap, Social Explorer, CHD data downloads | Easy maps, CSVs, templates; curated multi-sector layers [10] [37] [12]. |
| **Chronic disease hot-spotting** | PLACES + CHD + USALEEP | Tract/ZCTA small-area prevalence + life expectancy [17] [15]. |
| **Built environment/parks** | ParkServe + Walk Score + EJScreen + local parks | Amenity polygons and 10-min walkshed [5] [38]. |
| **Racial disparity monitoring** | HPI race/place; King County; CHD disaggregations | Default race/ethnicity views, rate ratios [13] [14]. |

*Takeaway: Use national anchors for baselines, municipal hubs for integration/funding operations, and commercial tools for speed and CBO-friendly workflows.*

## Data Source Playbook

A repeatable "core five + local admin" stack balances coverage, precision, and timeliness for neighborhood-level SDOH dashboards.

| Source | Spatial/Temporal | Strengths | Cautions | Primary Uses |
|---|---|---|---|---|
| **ACS 5-year** | Tract/block-group; annual 5-yr | Breadth (housing, income, edu., demographics); small areas [39] | 2020 cycle MOEs increased 15-20%; lag; survey error [9] | Baseline SDOH; denominators; demographics [27] |
| **CDC PLACES** | Tract/ZCTA; annual | Modeled prevalence for behaviors/conditions; fills gaps [6] | Model error; communicate uncertainty | Hot-spotting; overlay with access |
| **NVSS/USALEEP** | Tract; 2010-2015 | Life expectancy granularity; mortality trends | Limited years; aggregation methods matter | Equity lens; outcome targets |
| **EPA EJScreen** | Block-group; periodic | Environmental burdens/proximities + percentile context [40] | Percentiles vs raw; buffer averaging; not a designation [40] | Env justice screening; siting context |
| **Built Env (TPL ParkServe, Walk Score)** | Park polygons/walkshed; periodic | Amenity access indicators [38] | Private licensing (Walk Score); updates | Active living targeting; park equity |
| **Local Admin (evictions, code, school)** | Address/tract; varies | Timely, highly local relevance [7] [8] | Data quality, suppression, privacy | Housing stability, blight, absenteeism targeting |

*Takeaway: Automate ingestion for ACS, PLACES, and EJScreen. Implement MOE/unreliability flags in the UI, and prioritize 2-4 high-value local layers (e.g., evictions, code violations) with strict governance.*

## Adoption Patterns & Impact

Dashboard adoption accelerates when tools are directly tied to funding and resource allocation. 

**Drivers of Adoption:**
* **Funding Integration:** The most powerful driver is baking dashboard metrics into allocation formulas. LA County used its Equity Explorer to guide ARPA funding [41], and the HPI was used to direct $272 million in COVID-19 resources [1].
* **Sub-City Granularity:** City leaders rely on tract-level data to uncover hidden disparities. In Waco, TX, county-level data washed out concentrated needs, making the City Health Dashboard's tract-level data essential for targeting community health worker interventions [42].
* **Grant Use by CBOs:** CBOs use platforms like PolicyMap and Social Explorer to strengthen grant applications and conduct needs assessments [10] [12].

**Barriers to Adoption:**
* **Awareness and Capacity:** Many potential users simply do not know these tools exist, or lack the staff time and data literacy to use them effectively [42].
* **Modeled Data Skepticism:** Users sometimes struggle to interpret modeled estimates or composite indices, requiring clear documentation and training.

*Takeaway: To drive adoption, municipalities must tie dashboards to dollars, co-design interfaces with end-users, and deliver robust training and API access.*

## Implementation Guidance

When deploying SDOH dashboards, organizations must decide whether to build, buy, or partner.

* **When to use national anchors:** If you need quick tract-level baselines across many cities or have limited capacity, rely on the City Health Dashboard, CDC PLACES, or the Child Opportunity Index.
* **When to build municipal:** If you must integrate sensitive local administrative data (e.g., code violations, evictions) and tie it directly to municipal business processes, use ArcGIS Hub/Dashboards and publish open feature layers [43] [44].
* **Commercial complements:** For nonprofit-facing workflows, platforms like PolicyMap and Social Explorer provide curated catalogs, easy exports, and geocoding capabilities that accelerate CBO grant writing [36] [12].

## Equity & Ethics

Operationalizing race-and-place data requires responsible framing to avoid stigmatizing vulnerable neighborhoods.

* **Apply Race-and-Place Framing:** As demonstrated by the HPI, measuring race and place simultaneously offers nuanced insights and ensures that health and racial equity are baked into the data [14].
* **Establish Ethical Use Guidelines:** Provide clear documentation on what the data should *not* be used for (e.g., avoiding redlining or punitive resource withdrawal).
* **Document Index Limitations:** Clearly state geographic limitations. For example, the Area Deprivation Index (ADI) explicitly warns that linking ADI values to geographic units other than census block groups (like ZIP codes) is not a validated approach and introduces error [29].

## Metrics & Roadmap

To ensure sustained impact, track both process and outcome metrics over a 12-24 month horizon.

* **Process Metrics:** Track users, sessions, downloads, API calls, and the number of CBOs onboarded through training sessions.
* **Decision Metrics:** Monitor budget memos citing the tools, funds allocated by index tiers, and grants won by CBOs using dashboard outputs.
* **Outcome Metrics:** Over time, track shifts in targeted tracts, such as changes in life expectancy, chronic condition prevalence, or eviction rates.

### Appendix Tables

**Table A: Data Source Prioritization (Core vs Enhanced)**

| Tier | Indicators | Sources | Refresh |
|---|---|---|---|
| **Core** | Poverty, income inequality, education attainment, unemployment, uninsured, chronic disease prevalence, life expectancy, environmental burden | ACS, PLACES, USALEEP, EJScreen | Annual (ACS/PLACES); periodic (USALEEP/EJScreen) |
| **Enhanced (pick 2-4)** | Evictions, code violations, absenteeism, shelter/food access, clinic access | Local courts/housing, code databases, school systems, 211, provider registries | Quarterly-annual |

**Table B: Adoption Drivers vs Barriers vs Enablers**

| Drivers | Barriers | Enablers |
|---|---|---|
| Funding integration (ARPA/HPI) | Low awareness; staff capacity | Funded trainings; office hours |
| Tract-level granularity | Modeled uncertainty | MOE flags; guidance |
| Grant use by CBOs | Licensing limits | Open layers; nonprofit licenses |
| Peer benchmarking | Tool redundancy | Segment value props |

## References

1. *Healthy Places Index (HPI) in Action*. https://www.healthyplacesindex.org/hpi-into-action
2. *Data-Driven Equity Advocacy Steers $1.9 Billion in ARPA Funding | The New School Budget Equity Project*. https://budgetequity.racepowerpolicy.org/case-studies-policy-briefs/lacounty-arpa
3. *American Rescue Plan Act Spending Plans and Reports – Los Angeles County*. https://ceo.lacounty.gov/recovery/arp-reports-presentations/
4. *City Health Dashboard Technical Document*. https://assets.ctfassets.net/2b49co28d55u/1FdfgsUln2VB4gQsRtaiQQ/f593ad696cd199c698a337a3df3df4da/City_Health_Dashboard_-_Technical_Document_-_07.08.25.pdf
5. *City Health Dashboard Dataset*. https://datacatalog.med.nyu.edu/dataset/10405
6. *Methodology | PLACES | CDC*. https://www.cdc.gov/places/methodology/index.html
7. *Housing Maintenance Code Violations | NYC Open Data*. https://data.cityofnewyork.us/Housing-Development/Housing-Maintenance-Code-Violations/wvxf-dwi5
8. *Local Eviction Data Trackers – Eviction Innovation*. https://evictioninnovation.org/2024/03/13/local-eviction-data-trackers/
9. *Increased Margins of Error in the 5-Year Estimates Containing Data Collected in 2020*. https://www.census.gov/programs-surveys/acs/technical-documentation/user-notes/2022-04.html
10. *Nonprofit Data Management Solutions | Social Explorer*. https://www.socialexplorer.com/home/industries/non-profit
11. *Grant Success using PolicyMap for Applications & Strategic Allocation  | PolicyMap*. https://www.policymap.com/blog/grant-writing-strategic-allocation
12. *Nonprofit & Philanthropies | PolicyMap*. https://www.policymap.com/industries/nonprofit
13. *Health Disparities Dashboard — Communities Count*. https://www.communitiescount.org/health-disparities-dashboard
14. *Fetched web page*. https://healthyplacesindex.org
15. *City Health Dashboard and Congressional District Health Dashboard | NYU Langone Health*. https://med.nyu.edu/departments-institutes/population-health/divisions-sections-centers/epidemiology/city-health-dashboard-congressional-district-health-dashboard
16. *City Health Dashboard*. https://www.cityhealthdashboard.com/
17. *PLACES: Local Data for Better Health | PLACES | CDC*. https://www.cdc.gov/places
18. *PLACES: Local Data for Better Health*. https://www.cdc.gov/places/index.html
19. *Child Opportunity Index (COI) | diversitydatakids.org*. https://www.diversitydatakids.org/child-opportunity-index
20. *Healthy Places Index (HPI)*. https://www.healthyplacesindex.org/
21. *Home*. https://www.chicagohealthatlas.org
22. *Explore the Data – Los Angeles County - Chief Executive Office*. https://ceo.lacounty.gov/recovery/explore-the-data/
23. *PolicyMap | Mapping, Analytics, and Data Visualization*. https://www.policymap.com/
24. *Social Explorer: Community Analysis Software & Services | Social Explorer*. https://www.socialexplorer.com/features
25. *Data Access | City Health Dashboard*. https://www.cityhealthdashboard.com/data-access
26. *
            City-Level Measures of Health, Health Determinants, and Equity to Foster Population Health Improvement: The City Health Dashboard - PMC
        *. https://pmc.ncbi.nlm.nih.gov/articles/PMC6417588/
27. *The City Health Dashboard Uses ACS Data to Help U.S. ...*. https://www.census.gov/programs-surveys/acs/about/acs-data-stories/city-health-dashboard.html
28. *About the HPI*. https://www.healthyplacesindex.org/about-hpi
29. *Neighborhood Atlas - Home*. https://www.neighborhoodatlas.medicine.wisc.edu/
30. *Child Opportunity Index 2.0 Technical Documentation*. https://www.diversitydatakids.org/sites/default/files/2020-02/ddk_coi2.0_technical_documentation_20200212.pdf
31. *Equity Explorer Featured Indicators (tract) - Overview*. https://lacounty.maps.arcgis.com/home/item.html?id=713784239c844e478632100dc24f7cbd&sublayer=0
32. *Data Dictionary | Chicago Health Atlas*. https://chicagohealthatlas.org/indicators
33. *How to Use the Chicago Health Atlas*. https://chicagohealthatlas.org/how-to
34. *Chicago Health Atlas*. https://chicagohealthatlas.org/we-will-chicago
35. *New York City Community Health Profiles*. https://www.nyc.gov/site/doh/data/data-publications/profiles.page
36. *Download your Geocoded Data – Social Explorer*. https://help.socialexplorer.com/hc/en-us/articles/24742689665693-Download-your-Geocoded-Data
37. *Dashboard Data Available for Download!  | City Health Dashboard*. https://www.cityhealthdashboard.com/blog-media/829
38. *ParkServe® Data Downloads - Trust for Public Land*. https://www.tpl.org/park-data-downloads
39. *American Community Survey 5-Year Data (2009-2024)*. https://www.census.gov/data/developers/data-sets/acs-5year.html
40. *EJScreen Technical Documentation for Version 2.3*. https://www.epa.gov/system/files/documents/2024-07/ejscreen-tech-doc-version-2-3.pdf
41. *City of Los Angeles Geohub*. https://geohub.lacity.org/search?collection=dataset&layout=grid&tags=ap
42. *An Evaluation of the City Health Dashboard Pilot*. https://dash.harvard.edu/server/api/core/bitstreams/cb8010ff-fea9-4111-a69d-03e3e51bb8d6/content
43. *Introduction to ArcGIS Hub—ArcGIS Hub | Documentation*. https://doc.arcgis.com/en/hub/get-started/what-is-arcgis-hub-.htm
44. *ArcGIS Dashboards | Data Dashboards: Operational, Strategic, Tactical, Informational*. https://www.esri.com/en-us/arcgis/products/arcgis-dashboards/overview
