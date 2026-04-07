# Neighborhood "What-If" Simulations: A US City Playbook for Pre-Zoning Decisions

## Executive Summary

US cities are increasingly deploying neighborhood-level "what-if" simulation tools to help residents understand the impacts of proposed developments before zoning decisions are finalized. Tools like ArcGIS Urban, CommunityViz, Envision Tomorrow, and UrbanSim translate abstract zoning codes into tangible metrics covering traffic, school capacity, and fiscal impacts. 

The most successful deployments share a common trait: they prioritize transparency and co-design over black-box forecasting. Cities like Boulder, Colorado, and Grand Junction, Colorado, have proven that when residents are invited to manipulate scenario parameters—such as dwelling units per acre—opposition transforms into constructive consensus building [1] [2]. 

Key strategic insights for municipal leaders include:
* **Neighborhood-scale metrics are feasible now:** Models can accurately project daily vehicle trips, student generation rates, and property tax yields based on localized assumptions [3].
* **Data requirements are manageable:** A Minimum Viable Dataset (MVD) relying on standard assessor, census, and GIS data is sufficient to launch a credible pilot [4] [5].
* **"Weaponization" risk drops with co-design:** Publishing methodology white papers and hosting interactive "chip games" prevents residents from using model outputs to blindly oppose development [1] [2].
* **Visuals require validation:** 3D renderings must be calibrated against real-world data; unvalidated visual simulations have been dismissed in legal zoning disputes [6].
* **Property value predictions are fraught:** Parcel-level automated valuation models (AVMs) carry inherent biases and equity risks; cities should use fiscal proxies (e.g., tax revenue per acre) instead [7] [8].

## What US Cities Have Already Done—And What It Looked Like

Cities across the US have successfully deployed neighborhood-level simulation tools to guide pre-zoning decisions. These platforms allow planners and residents to visualize capacity, test regulatory changes, and measure performance indicators.

### Live Deployments and Modeled Impacts

| City/Region | Tool/Platform | Public Access | Neighborhood Metrics Modeled | Planning Stage | Documented Outcomes |
|---|---|---|---|---|---|
| **Boulder, CO (East Boulder)** | ArcGIS Urban | Yes (videos, public docs) | Capacity, housing/jobs, carbon emissions | Subcommunity Plan pre-zoning | Preferred scenario adopted Oct 6, 2022; transparent methodology improved trust [2] [9]. |
| **Grand Junction, CO** | CommunityViz | Public workshops (27 chip games) | Land use, transportation impacts, density | Comprehensive Plan pre-adoption | Iterative chip games and dynamic transport testing led to plan adoption in 2010 [1] [10]. |
| **Chapel Hill, TN** | CommunityViz | Staff/public report | Trips (81,300), student generation (817), property tax (~$4.1M/yr) | Growth planning to inform future zoning | Transparent formulas and assumptions published in final report [3]. |
| **Mesa, AZ** | ArcGIS Urban + CityEngine | Yes (Active Development Sites map) | Capacity, 3D massing, TOD scenarios | TOD plan + General Plan engagement | 350+ student immersive event; won APA and ASU awards [11]. |
| **Fort Worth, TX** | ArcGIS Urban + CityEngine | Planning/stakeholder sessions | 3D buildout, zoning rewrite impacts | Corridor rezoning prep | Informed zoning code rewrites and enhanced stakeholder engagement [12]. |
| **PSRC (Seattle region)** | UrbanSim | Agency-led, public indicators | Land use, prices/rents, integrated travel skims | Regional scenarios; sensitivity tests | Peer-reviewed integration; sensitivity and transparency focus [13] [14]. |
| **Arlington, TX** | ArcGIS Urban | Academic study | Zoning envelopes, capacity indicators | Zoning vs housing demand assessment | Identified zoning deficits; approach deemed highly transferable [15]. |

These deployments demonstrate that interactive scenario planning accelerates plan adoption. In Grand Junction, the use of CommunityViz "chip games" allowed residents to physically place chips representing density on a map, which were then digitized and analyzed for transportation impacts [1]. In Boulder, planners used ArcGIS Urban to create and modify land use parameters, reporting on key performance measures like housing units and carbon emissions to build consensus [2].

## The Data & Modeling Stack—Minimum Viable vs Gold Standard

A credible simulation pilot does not require a multi-million-dollar digital twin. Cities can launch effective tools using a Minimum Viable Dataset (MVD) and scale to a "Gold Standard" over time.

### Data Requirements and Scaling

| Domain | MVD (8–12 weeks) | Gold Standard (4–12 months) |
|---|---|---|
| **Parcels & Zoning** | Assessor parcels (APN, lot area, land/improvement value), base zoning districts with simple max units/acre and FAR. | Parcel primary_id, buildable area, environmental constraints; full zoning constraints (setbacks, height, coverage); pro forma fee schedules [4]. |
| **Demographics & Jobs** | ACS (HH size, income), LEHD jobs by block group. | Synthesized households/persons, establishment-level jobs; building/unit-level attributes [4]. |
| **Buildings & Footprints** | Basic footprints (OpenStreetMap/local GIS). | 3D LOD1/LOD2 buildings; unit counts; parking supply; energy consumption metrics. |
| **Transportation** | ITE Trip Generation Manual (12th Ed.) with local trip rates; screenline counts [16]. | Integrated activity-based or 4-step travel skims; 7D elasticities with local calibration; StreetLight/INRIX speeds [17] [18]. |
| **Schools** | District enrollment, attendance boundaries; Student Generation Rates (SGR) by housing type. | Cohort-survival enrollment projections by school, capacity/utilization, capital plan triggers [19] [20]. |
| **Fiscal & Property** | Assessed values and tax rates; simple property tax and sales tax proxies. | Parcel-level fiscal model (revenues/costs), verified capital and O&M costs. |

### Domain Modeling Choices for Public Comprehension

To maintain credibility, cities must clearly explain their modeling assumptions to the public:
* **Traffic:** Utilize the ITE Trip Generation Manual (12th Edition) while calibrating for local context [16]. For example, Chapel Hill transparently published its assumption of 9.16 person-trips per household per day [3].
* **Schools:** Apply Student Generation Rates (SGRs) by housing type. Chapel Hill modeled school impacts by assuming 46% of households had children, with a 20% public school enrollment capture rate [3].
* **Fiscal Impacts:** Focus on aggregate metrics like property tax revenue per acre rather than parcel-level price predictions, which can introduce bias and privacy concerns [7].

## Managing the Risk of Opposition—A Playbook Built on Evidence

When residents are presented with black-box data, they often weaponize it to oppose development. Cities mitigate this risk through radical transparency, co-design, and the explicit communication of uncertainty.

### Mitigation Strategies and Evidence

| Strategy | Evidence | Implementation Action |
|---|---|---|
| **Publish Indicator Methodologies** | Boulder shared a white paper detailing how metrics were calculated, building trust and understanding [2]. | Release a plain-English "How we calculate" document citing sources (ITE, ACS, SGRs). |
| **Co-Design Scenarios ("Chip Games")** | Grand Junction held 27 interactive sessions where residents built scenarios; the resulting plan was successfully adopted [1] [10]. | Run 3–5 chip-game workshops; digitize results in Urban or CommunityViz; report back to the community. |
| **Show Ranges and Uncertainty** | UrbanSim applied Bayesian melding to portray uncertainty, preventing false precision [14]. | Put ± bands on trip and student projections; publish sensitivity sliders online. |
| **Use "Personal Indicators"** | UrbanSim's indicator browser improved engagement by showing impacts relevant to individuals [14]. | Create dashboards showing walk times, school crowding, and housing costs by specific neighborhoods. |
| **Validate Visuals** | A New Jersey appellate brief showed a zoning board giving "no weight" to 3D visuals because they lacked post-construction validation [6]. | Calibrate photomontages; include least-favorable viewpoints; provide a validation appendix. |
| **Establish Equity Guardrails** | The Urban Institute warns that predictive intelligence can accelerate unwanted speculation and displacement [8]. | Adopt a data governance charter; publish equity KPIs; include "do-nothing" cost sidebars. |

## Legal, Ethical, and Communication Pitfalls—And How to Avoid Them

Simulation tools carry inherent legal and ethical risks if mismanaged. 

* **Visual Evidence Scrutiny:** 3D renderings must be defensible. In a New Jersey zoning dispute, visual simulations were dismissed because the creator admitted to never conducting post-development comparisons with actual photos [6]. Cities must maintain a validation log and disclose all visual assumptions.
* **Property Value Bias:** Parcel-level Automated Valuation Models (AVMs) and hedonic pricing models can suffer from heavy-tailed errors and embed historical biases [7]. Cities should avoid publishing parcel-level price forecasts, relying instead on scenario-level fiscal proxies.
* **Fair Housing Implications:** Predictive neighborhood data can inadvertently accelerate real estate speculation or disinvestment [8]. Cities must conduct equity reviews of all public-facing indicators to ensure compliance with Fair Housing standards.

## Implementation Roadmap—90 Days to a Credible Pilot

Cities can launch a defensible, useful neighborhood simulation pilot in a single quarter by following a structured roadmap.

### Week-by-Week Execution
* **Weeks 1–2 (Scope & Governance):** Select 1–2 focus neighborhoods. Confirm KPIs. Establish MOUs with school districts and transportation departments for data sharing. Draft a data governance and ethics charter.
* **Weeks 2–6 (Build MVD):** Assemble assessor parcels, zoning layers, ACS data, and ITE trip rates. Configure indicators in ArcGIS Urban or CommunityViz. Draft the Indicator Methodology white paper.
* **Weeks 6–8 (Calibrate & Validate):** Cross-check trip rates against local screenline counts. Validate SGRs against historic school enrollments. Calibrate 3D photomontages.
* **Weeks 8–10 (Co-Design):** Host public "chip games" or interactive workshops. Digitize the community-generated scenarios. Publish a "what we heard and modeled" summary.
* **Weeks 10–12 (Public Preview):** Launch public web scenes and indicator dashboards. Gather structured feedback. Finalize the preferred scenario inputs ahead of formal pre-zoning hearings.

## Measuring Impact—What You Should Track

To evaluate the success of simulation tools, cities must track process efficiency, decision quality, and long-term outcomes.

### Key Performance Indicators
* **Process Metrics:** Time-to-adoption for subcommunity plans; number of workshop participants; volume of methodology document downloads.
* **Decision Metrics:** Changes in zoning envelopes (e.g., FAR adjustments); percentage of preferred scenario features formally adopted into code.
* **Outcome Metrics (12–36 months):** Number of housing units permitted in targeted areas; actual student seat utilization versus projections; vehicle miles traveled (VMT) per capita.
* **Risk Indicators:** Number of zoning appeals or lawsuits citing visual simulations; sentiment analysis of public comments regarding data validity.

## Appendices

### Sample Assumptions
* **Traffic:** Chapel Hill utilized a rate of 9.16 person-trips per household per day, explicitly distinguishing between person-trips and vehicle-trips [3].
* **Schools:** Chapel Hill assumed 46% of households contained school-aged children, with a 20% enrollment rate in local public schools [3].

### Data Schemas
* **UrbanSim:** Requires a unique `primary_id` for parcels, linked to building types, residential units, and job spaces [4].
* **Zoning Constraints:** Essential fields include `max_dua` (dwelling units per acre), `max_far` (floor-area ratio), and `allowed_building_types` [4].

## References

1. *Opening Access to Scenario Planning Tools*. https://scag.ca.gov/sites/default/files/2024-05/opening-access-to-scenario-planning-tools-full-v2.pdf
2. *Digital Future: Building Consensus through Scenario Planning in Boulder, Colorado*. https://www.esri.com/arcgis-blog/products/urban/design-planning/building-consensus-scenarios-planning-arcgisurban-boulder
3. *CommunityViz Analysis Tool & School Traffic Flow Study*. https://www.tn.gov/content/dam/tn/tdot/long-range-planning/ctpg-documents/ctpg-18-19/ChapelHill_CommunityViz_SchoolFlow_FINALReport.pdf
4. *Data Overview — UrbanSim Cloud Platform 3.13.1 documentation*. https://cloud.urbansim.com/docs/general/documentation/urbansim%20parcel%20model%20data.html
5. *Envision Tomorrow Overview — Envision Tomorrow*. http://envisiontomorrow.org/envision-tomorrow-overview
6. *A-2189-23 Briefs*. https://www.njcourts.gov/system/files/cases/briefs/a2189-23briefs.pdf
7. *A review of hedonic pricing models in housing research*. https://www.researchgate.net/publication/287232776_A_review_of_hedonic_pricing_models_in_housing_research
8. *What if Cities Used Data to Drive Inclusive Neighborhood ...*. https://www.urban.org/sites/default/files/2022-08/2000807-what-if-cities-used-data-to-drive-inclusive-neighborhood-change.pdf
9. *East Boulder Subcommunity Plan | City of Boulder*. https://bouldercolorado.gov/projects/east-boulder-subcommunity-plan
10. *Fetched web page*. https://communityviz.com/wp-content/uploads/2022/10/GrandJunction.pdf
11. *Mesa Revolutionizes Urban Planning with ArcGIS | Case Study*. https://www.esri.com/en-us/lg/industry/government/stories/city-of-mesa-revolutionizes-urban-planning-projects-with-gis
12. *City of Fort Worth, TX - ViewPro*. https://www.viewprogis.com/case-studies/Fort-Worth-casestudy
13. *UrbanSim (Parcel-Based Land Use Model) | Puget Sound Regional Council*. https://www.psrc.org/our-work/urbansim-parcel-based-land-use-model
14. *UrbanSim: Using Simulation to Inform Public Deliberation ...*. https://homes.cs.washington.edu/~borning/papers/borning-urbansim-case-study-2008.pdf
15. *ArcGIS Urban: an application for plan assessment | Computational Urban Science | Springer Nature Link*. https://link.springer.com/article/10.1007/s43762-021-00016-9
16. *Trip Generation: Information - ITE-A Community of Transportation Professionals*. https://www.ite.org/technical-resources/topics/trip-and-parking-generation-v2/trip-generation-info/
17. *Introduction*. https://developer.streetlightdata.com/docs/intro-to-the-advanced-traffic-counts-api
18. *Traffic Speed and Travel Time Data*. https://inrix.com/products/speed/
19. *Enrollment in public elementary and secondary schools, by region, state, and jurisdiction: Selected years, fall 1990 through fall 2026*. https://nces.ed.gov/programs/digest/d16/tables/dt16_203.20.asp
20. *Common Core of Data (CCD) - Data Tables*. https://nces.ed.gov/ccd/data_tables.asp
