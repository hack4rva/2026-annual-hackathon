# From Anchors to Access: Building Immigrant-Friendly Maps with Transit Reality

## Executive Summary
US cities and supporting organizations have developed geographic, asset-based maps for immigrant and refugee service discovery, but they rarely integrate dynamic transit accessibility. Current implementations, such as the St. Louis Immigrant and Refugee Resource Ecosystem Map and New York City's Map Community Resources, successfully catalog trusted anchor institutions—like libraries, health clinics, and schools—but rely on static representations without General Transit Feed Specification (GTFS) travel-time overlays. 

Dynamic transit accessibility is proven in adjacent domains and is ready to be ported to immigrant service discovery. Tools like Seattle's AccessMap and the National League of Cities' Civic Mapping Initiative demonstrate how combining anchor locations with transit data can reveal service gaps and drive actionable changes, such as relocating bus stops. However, relying solely on scheduled GTFS data can overestimate real access by 5-15% in high-access areas, making GTFS-Realtime integration or uncertainty communication critical. By fusing anchor-first discovery with open-source (OpenTripPlanner/R5) or proprietary (ArcGIS) transit routing, cities can build tools that show immigrants exactly what services they can reach within a 30-to-45-minute transit ride from their local library or community center.

## What the nation has today — anchor maps exist; transit overlays don't
US cities map anchors for immigrants and publish welcome sites, but few expose dynamic GTFS-based travel-time for residents. The current landscape is fragmented, with most tools focusing either on comprehensive asset directories or specialized transit routing, but rarely both.

In St. Louis, the Clark-Fox Family Foundation and the St. Louis County Library support the Immigrant and Refugee Resource Ecosystem Map [1] [2]. Updated in June 2018, this network-style map surfaces interconnected resources including libraries, clinics, and schools, using blue to represent organizations welcoming to New Americans and green for those focused on serving them [2] [3]. However, it lacks a public transit overlay. 

In New York City, the Mayor's Office of Immigrant Affairs (MOIA) operates Asylum Seeker Resource Navigation Centers located at community sites like the American Red Cross headquarters and churches [4] [5]. While these provide critical in-person services, they are communicated via multilingual PDFs and hotlines rather than dynamic maps [4] [5]. Similarly, the Citizens' Committee for Children's (CCC) "Map Community Resources" tool draws from over 20 city and state administrative data sources to map assets across all 59 NYC community districts [6]. It allows users to overlay community resources on top of risk rankings, but it does not feature GTFS isochrones [6] [7].

In adjacent sectors, transit realism is actively deployed. Seattle's AccessMap provides accessibility-first multimodal routing that accounts for sidewalks, elevation changes, and curb ramps [8]. The National League of Cities' Civic Mapping Initiative maps civic infrastructure like Head Start centers against transit, which successfully prompted the relocation of three bus stops in Memphis and the improvement of two stops in Alexandria to better serve toddlers and families [9].

### Current public tools and transit integration

| Operator | Tool | Target users | Anchor-first? | Transit integration | Tech | Update cadence |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| St. Louis County Library / Clark-Fox | Immigrant & Refugee Ecosystem | Immigrants/refugees | Partial (anchor directory) | None (transit orgs listed) | Proprietary web app | June 2018 [2] |
| NYC MOIA | Resource Navigation Centers | Asylum seekers | Yes (community sites) | None | PDF / web pages | July 2023 [4] |
| CCC New York | Map Community Resources | Families/advocates | Asset-first by district | None (no isochrones) | Custom web app + NYC Open Data | Annual/biennial [6] |
| UW/Seattle | AccessMap | Accessibility-first | Not immigrant-specific | Dynamic multimodal (GTFS + OSM) | Custom | Ongoing [8] |
| NLC / Civic Mapping Initiative | Head Start / Colleges | Planners/public | Anchor-first | Static proximity; actioned stop moves | Google Maps / analysis | 2024 [9] |

These tools demonstrate that while the data exists, the integration of dynamic transit accessibility into public-facing immigrant service maps remains an untapped opportunity.

## Why anchor-first matters for immigrants/refugees
Libraries and other trusted places lower cognitive and psychological barriers for newcomers. Pairing these trusted locations with transit reality converts theoretical trust into practical access.

Public libraries serve as vital community hubs that foster engagement, empowerment, and education for vulnerable populations, including refugees [10]. Research on Oklahoma public libraries highlights that they provide essential cognitive services (language literacy), socio-cultural services (community building), and physiological services (safe spaces) [10]. However, transportation difficulties and language barriers remain prevalent obstacles [10]. 

Starting a search "from your branch" or "from your church" reduces search friction for users with limited English proficiency (LEP) or low digital literacy. Pure anchor lists without transit context can route users to unreachable services, while generic transit planners lack the necessary social service filters and trust signals required by vulnerable populations.

## Transit realism — static overlays vs dynamic GTFS
Static bus layers are easy to implement, but dynamic, time-dependent access (isochrones) is what shifts equity and decision-making. 

Static transit layers, such as the World Transit Stops and routes available in Esri's ArcGIS Living Atlas, can be quickly added to maps to show where service exists [11]. However, these static layers lack a time-of-day dimension. Dynamic transit analysis uses tools like ArcGIS Pro Network Analyst or OpenTripPlanner (OTP) to generate isochrones—polygons showing the area reachable within a specific time limit, such as a 30-minute transit and walking trip [12] [13].

Relying solely on scheduled GTFS data can be misleading. A study using archived Automatic Vehicle Location (AVL) data from four North American transit agencies found that scheduled GTFS data can overestimate real accessibility by 5-15 percent in higher access zones, while lower access zones exhibit more variability and less reliable estimates [14]. Incorporating GTFS-Realtime data, which dynamically reflects delays and cancellations, allows for more accurate modeling of accessibility by capturing actual performance rather than planned delivery [15].

## Technical patterns you can deploy this quarter
Two primary implementation tracks fit most municipal environments: an ArcGIS-centric approach or an open-source stack. Both require GTFS data, street networks, and anchor point datasets.

### ArcGIS-centric deployments offer turnkey governance
The ArcGIS ecosystem provides a low-code path with built-in governance. Using ArcGIS Pro and the Network Analyst extension, cities can convert GTFS data into a public transit data model [16]. The Public Transit evaluator calculates travel times along transit lines based on scheduled service, allowing planners to generate service areas (e.g., 5-10 minute walk times around stops) [16] [11]. These layers can be hosted on ArcGIS Online or ArcGIS Hub. While this approach simplifies printing and leverages existing enterprise agreements, it offers fewer public APIs for dynamic, resident-side recalculation.

### Open-source stacks provide flexible, API-first routing
Open-source engines like OpenTripPlanner (OTP) and Conveyal R5 offer highly optimized, dynamic routing. OTP builds its network from OpenStreetMap and GTFS data and exposes APIs for journey planning and travel time isochrones [17] [18]. R5 is specifically designed for one-to-many travel-time calculations and handles both scheduled and headway-based lines, accounting for variation across time windows [19] [20]. 

### Technical stack comparison for transit-enabled maps

| Feature | ArcGIS Enterprise / Online | OpenTripPlanner (OTP) / R5 |
| :--- | :--- | :--- |
| **Core Routing Engine** | Network Analyst (Public Transit Evaluator) [16] | OTP Java Server / R5 Routing Engine [17] [19] |
| **Data Inputs** | GTFS, Street Centerlines [12] | GTFS, OpenStreetMap (OSM) [17] |
| **Dynamic Isochrones** | Pre-computed Service Areas [12] | On-the-fly via API (`/otp/traveltime/isochrone`) [18] |
| **Memory Requirements** | Standard GIS Workstation/Server | 10 GB (Finland) to 95 GB (Germany) [21] |
| **Cost Profile** | $39,600 (Enterprise Std, 3-year) [22] | Free software; Cloud VM hosting costs [21] |

OTP is memory-hungry because it loads all required data into RAM; covering a dense area like Germany requires 95 GB, while Finland requires just over 10 GB [21]. 

## Build vs adapt — a city playbook
Cities should start small with 50 anchors, static transit, and precomputed isochrones, then iterate with community co-design and GTFS-Realtime integration.

### Phase 0-1: Discovery and co-design
Form a steering group including the library system, the Office of Immigrant Affairs, and major community-based organizations (CBOs). Identify the top 50-100 anchor institutions by foot traffic and determine the top languages needed. Conduct task-based testing with LEP users and perform privacy threat modeling.

### Phase 2: MVP development
Assemble data including anchor points (with hours and language tags), GTFS feeds, and demographic overlays. Build an interface where users select an anchor (e.g., a library) and view nearby services reachable within a 30-to-60-minute transit ride. Use ArcGIS Network Analyst or OTP batch APIs to precompute these isochrones for specific time windows (e.g., Wednesday at 12:35) [23]. Implement tiered visibility for sensitive services to protect vulnerable populations.

### Phase 3: Pilot and scale
Integrate GTFS-Realtime where available to account for service unreliability [15]. Launch hotline handoffs directly from map cards and provide printable "routes to help" one-pagers. Establish a feedback loop with the local transit agency to propose stop relocations for identified service deserts, mirroring the successes of the Civic Mapping Initiative [9].

## Governance, privacy, and content quality
Anchor-led governance and privacy-by-design keep users safe and data fresh. The project should be led by a trusted entity, such as the public library or the Office of Immigrant Affairs, supported by Memorandums of Understanding (MOUs) with CBOs for quarterly data updates.

Privacy is paramount. The creators of the FindHello app discontinued their platform in 2026 due to concerns that the mapped information could be misused to target the immigrants they intended to help [24]. To mitigate this, cities must implement tiered access to vulnerable listings, mask exact locations for sensitive sites, and provide clear privacy notices.

## Budget, staffing, and timelines
A city can pilot this solution for low six figures in year one, sustaining it for mid-five figures thereafter. Year one requires a part-time Project Manager, a full-time GIS Analyst, a front-end developer, and translation services. Funding can be sourced from NTIA Digital Equity grants, which explicitly support Community Anchor Institutions [25] [26].

## KPIs, evaluation, and equity checks
Measure outcomes, not just clicks. Key performance indicators should include:
* **Reach**: Monthly active users and the number of printed one-pagers distributed at library branches.
* **Access**: The rate of successful referrals from anchors to service intake.
* **Equity**: The share of LEP or zero-car households located within a 30-minute transit ride of top services.
* **Quality**: Data freshness (maintaining a median age of less than 90 days for service listings).

## Risk register and mitigations
Proactive privacy measures and clear communication avoid harm.
* **Targeting Risk**: Address the risks highlighted by the FindHello sunset by obfuscating sensitive locations and vetting partners [24].
* **Overpromising Access**: Clearly communicate time-of-day dependencies and the inherent limitations of scheduled GTFS data, which can overestimate access [14].
* **Anchor Bias**: Counteract the tendency to overweight well-served neighborhoods by adding "equity lens" overlays that highlight service deserts.

## Immediate next steps
A meaningful pilot can be stood up in 90 to 120 days. Within the first two weeks, form the steering group and approve privacy templates. By week six, compile the initial 50-anchor dataset and run batch isochrone generation for key time windows. Conduct user testing with LEP residents by week ten, and launch the pilot with static transit and precomputed isochrones by week sixteen, setting the stage for future GTFS-Realtime integration.

## References

1. *Immigrant and Refugee Resource Ecosystem Map - St. Louis Region | St. Louis County Library*. https://www.slcl.org/resources/immigrant-and-refugee-resource-ecosystem-map
2. *St. Louis Regional Immigrant and Refugee Resource Ecosystem*. https://d3n8a8pro7vhmx.cloudfront.net/citiesforaction/pages/481/attachments/original/1557784363/St.Louis_Resource_Ecosystem.pdf?1557784363
3. *Resources | STL Mosaic Project*. https://www.stlmosaicproject.org/international-resources
4. *ASYLUM SEEKER 24/7 ARRIVAL CENTER*. https://www.nyc.gov/assets/immigrants/downloads/pdf/Asylum-Seeker-Resource-Welcome-Navigation-Sites_July_2023_ENG.pdf
5. *Mayor Adams, NYCEM, MOIA Open Resource Navigation Center to Support Newly Arrived Individuals and Families Seeking Asylum - NYC Mayor's Office*. https://www.nyc.gov/mayors-office/news/2022/09/mayor-adams-nycem-moia-open-resource-navigation-center-support-newly-arrived-individuals-and
6. *NYC Open Data -   Keeping Track Online: “Map Community Resources”*. https://opendata.cityofnewyork.us/projects/keeping-track-online-map-community-resources/
7. *Mapping Community Assets on Keeping Track Online to Examine Child Welfare Needs | CCC New York*. https://cccnewyork.org/mapping-community-assets-on-keeping-track-online-to-examine-child-welfare-needs/
8. *AccessMap – Transportation Data Exchange Initiative*. https://tdei.cs.washington.edu/accessmap/
9. *Civic Mapping Initiative Supports Transit Planning & Accessibility - National League of Cities*. https://www.nlc.org/article/2024/03/08/civic-mapping-initiative-supports-transit-planning-accessibility/
10. *
            Beyond Storytime: Oklahoma Public Libraries’ Comprehensive Approach to the Resilience of Refugee Children and Their Families Support - PMC
        *. https://pmc.ncbi.nlm.nih.gov/articles/PMC12386257/
11. *10 Powerful Things You Can Do with Transit Data in ArcGIS*. https://www.esri.com/arcgis-blog/products/arcgis-living-atlas/mapping/10-powerful-things-you-can-do-with-transit-data-in-arcgis
12. *Create and use a network dataset with public transit data—ArcGIS Pro | Documentation*. https://pro.arcgis.com/en/pro-app/latest/help/analysis/networks/create-and-use-a-network-dataset-with-public-transit-data.htm
13. *Compute isochrones*. https://r5py.readthedocs.io/stable/user-guide/user-manual/isochrones.html
14. *
		On the accuracy of schedule-based GTFS for measuring accessibility
							| Journal of Transport and Land Use
			*. https://www.jtlu.org/index.php/jtlu/article/view/1502
15. *Evaluating Real-Time and Scheduled Public Transport Data: Challenges and Opportunities*. https://www.mdpi.com/2220-9964/14/7/243
16. *Network analysis using public transit data—ArcGIS Pro | Documentation*. https://pro.arcgis.com/en/pro-app/latest/help/analysis/networks/network-analysis-with-public-transit-data.htm
17. *OpenTripPlanner*. https://www.opentripplanner.org/
18. *Travel Time Isochrones - OpenTripPlanner 2*. https://docs.opentripplanner.org/en/v2.4.0/sandbox/TravelTime/
19. *GitHub - conveyal/r5: Developed to power Conveyal's web-based interface for scenario planning and land-use/transport accessibility analysis, R5 is our routing engine for multimodal (transit/bike/walk/car) networks with a particular focus on public transit · GitHub*. https://github.com/conveyal/r5
20. *Travel Time Analysis - OpenTripPlanner 2*. https://docs.opentripplanner.org/en/latest/Analysis/
21. *System Requirements and Suggestions - OpenTripPlanner 2*. https://docs.opentripplanner.org/en/latest/System-Requirements/
22. *Hello, Esri is providing the table below for cost comparison ...*. https://mccmeetingspublic.blob.core.usgovcloudapi.net/mswdca-meet-1440b59704e946ecbba5e1a35ab7981f/ITEM-Attachment-001-7cce20af653b48c493a5bde4ee18f6ae.pdf
23. *GitHub - tudelft3d/isochrones-mexico · GitHub*. https://github.com/tudelft3d/isochrones-mexico
24. *FindHello app has been discontinued*. https://usahello.org/findhello/
25. *Digital Equity Competitive Grant Program - BroadbandUSA*. https://broadbandusa.ntia.gov/sites/default/files/2024-08/DE_Competitive_FAQs_v2.0.pdf
26. *Action Partners | Digital Access: An Opportunity to Improve Equity in Central Texas*. https://experience.arcgis.com/experience/37e13507478a480c9e7ba38e33d49fa8/page/Action-Partners
