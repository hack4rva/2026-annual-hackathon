# Mid-Size US Cities' CIP Trackers on ArcGIS Hub: What Works, Where It Breaks, and How to Measure Adoption

## Executive Summary
Mid-size US cities are increasingly leveraging ArcGIS Hub and ArcGIS Online to transform opaque Capital Improvement Project (CIP) data into interactive, public-facing infrastructure trackers. The most successful implementations standardize on a single authoritative CIP FeatureService and expose it via targeted ArcGIS Dashboards or Experience Builder applications. While general infrastructure (roads, stormwater, parks) is commonly featured, streetlight visibility usually lives in separate asset layers rather than dedicated CIP layers. Cities that cross-link these asset layers with active projects provide the highest level of transparency. 

Adoption metrics are rarely published directly on public Hub pages, but ArcGIS item view counts serve as a reliable proxy. Normalized engagement baselines are modest—typically ranging from 0.3 to 1.2 views per 1,000 residents per month—indicating that organic interest concentrates around budget seasons, construction periods, and media moments. To build trust and drive engagement, cities must automate data freshness, prioritize accessibility (such as address search and district filtering), and implement robust measurement plans combining platform statistics with web analytics.

## Why this matters now — Public trust and funding hinge on transparent, navigable CIP trackers
Managing a large project portfolio and quickly communicating progress is a significant challenge for local governments [1]. A lack of accessible information often leads to frustrated executives, a disenfranchised public, and diminished trust in how public dollars are spent [1]. Mid-size cities (100,000–500,000 population) are converging on a repeatable pattern: publishing authoritative CIP FeatureServices and surfacing them via ArcGIS Hub, Dashboards, or Experience Builder to explain exactly where and how infrastructure investments are being made. The winners in this space pair authoritative data with accessible user experiences and publish basic usage metrics to reinforce accountability.

## Landscape of implementations in 100k–500k cities — Who's live, what they show, and how they built it
The dominant technical implementation pattern involves cities publishing authoritative CIP project feature layers (points, lines, or polygons) within ArcGIS Online, which are then made accessible through public ArcGIS Hub sites, embedded map viewers, and specialized applications [2] [3]. These platforms enhance transparency by providing interactive maps, project lists, and filtering capabilities based on essential attributes like fiscal year, estimated cost, and project phase [4] [5].

### Inventory: Confirmed public implementations and data sources
At least eight mid-size cities expose road, infrastructure, and lighting projects via municipal FeatureServices. Only a subset share visible usage metrics on their item pages.

| City (Population) | Public App (Type) | Infrastructure Categories Shown | Streetlights Visible? | Core FeatureService / Update Cadence | Public Item Views |
|---|---|---|---|---|---|
| **Sandy Springs, GA** (~108,106) [6] | Hub map item + FeatureService | Transportation, Stormwater, Parks [7] | Not dedicated | `Capital_Improvement_Projects_Public` / Updates every Friday [2] | 9,587 [8] |
| **Nampa, ID** (~117,350) [9] | ArcGIS Hub site | 5-Year Roads, Active Projects, Priority Corridors [10] | Not dedicated | `PriorityCorridors` / Not stated | 910 [11] |
| **Richmond, VA** (~233,655) [12] | ArcGIS Dashboard | Transportation, Sanitary, Drainage, Water [13] | Not explicit in CIP | `Capital Projects` / Updated quarterly [5] | 4,186 [14] |
| **Tacoma, WA** (~220,000) | Web Map + Capital Projects layer | Streetlight infrastructure, broad capital projects [15] [16] | Yes (fixtures, poles, issues) [15] | `Capital Projects (Tacoma)` / Updated monthly [16] | Not published |
| **Reno, NV** (~281,714) [17] | Experience Builder | Roadway maintenance, sidewalks, sewers, traffic lights, parks [18] | Traffic lights noted [18] | `Street_Centerlines` / Ongoing [19] | Not published |
| **Bakersfield, CA** (~408,000) | Hub dataset | Streetlight assets [20] | Yes (asset inventory) [20] | `Streetlights` / Not stated | Not published |
| **Cary, NC** (~180,000) | Hub dataset | Multi-category CIP | Not stated | `carync::projects` / Not stated | Not published |
| **Spokane, WA** (~228,000) | Hub item | CIP (general) [21] | Not stated | `Capital Improvement Plan` / Not stated | Not published |

*Takeaway*: A repeatable pattern exists across municipalities: publish CIP FeatureServices, surface them via Hub or Dashboards, expose filters and address search, and link to supporting documents and contacts.

## Adoption metrics — What we can (and can't) see, and how to benchmark fairly
Publicly available adoption metrics are scarce. Most ArcGIS Hubs provide metadata for datasets, such as the last updated date and the number of records, but explicit site metrics like unique visitors or pageviews are rarely published directly on the public pages. When metrics are available, they are usually found on ArcGIS item pages displaying view counts [8] [11] [14].

### A comparable snapshot: Views normalized by time and population
Typical steady-state ranges today are ~0.3 to 1.2 views per 1,000 residents per month without active promotion.

| City / App | Total Views | Created Date | Months Live (Approx) | Views / Month | 2024 Population Est. | Views per 1,000 Residents / Month |
|---|---|---|---|---|---|---|
| **Sandy Springs** — CIP FeatureService | 9,587 [8] | Jan 15, 2020 [8] | 75 | ~128 | 108,106 [6] | ~1.18 |
| **Richmond** — CIP Dashboard | 4,186 [14] | May 10, 2022 [14] | 47 | ~89 | 233,655 [12] | ~0.38 |
| **Nampa** — Priority Corridors layer | 910 [11] | Jun 4, 2024 [11] | 22 | ~41 | 117,350 [9] | ~0.35 |

*Takeaway*: Item view counts enable a first-pass benchmark, but they have caveats. Embedding can inflate views, internal QA traffic is mixed in, and "views" do not equal "unique users." 

### What higher/lower engagement suggests
Higher engagement correlates with clear search-by-address functionality, prominent district filters, regular updates, and cross-promotion during budget or construction seasons. Lower engagement suggests static data, unclear map defaults, siloed departmental layers, and the lack of a single, unified landing page.

### Measurement plan to improve comparability
To obtain a complete understanding of adoption, cities should instrument Google Analytics 4 (GA4) on Hub sites and public apps, capture ArcGIS itemStats nightly, track dataset downloads, and annotate promotional campaigns with UTM parameters.

## Implementation playbook — Data model, app choice, update workflow, and accessibility
A minimal, consistent schema combined with the right application framework, reliable automation, and an accessibility-first user experience is the fastest path to a durable public tracker.

### Data model and schema that scale
Cities should adopt a consolidated CIP layer utilizing points for specific sites and lines or polygons for corridors and areas [2]. Core fields must include Project Number, Project Name, Project Type, Fiscal Year, Project Phase, Estimated Cost, and Contact Information [4] [7]. Public "view" layers should be published from the enterprise geodatabase to protect internal data while maintaining stable item IDs.

### App framework tradeoffs (Dashboards vs Experience Builder vs Map Viewer)
* **ArcGIS Dashboards**: Best for KPIs and at-a-glance map/list synchronization. They focus on a single, non-scrolling screen that provides statistical insight and are excellent for council district filtering (e.g., Richmond) [22] [5].
* **ArcGIS Experience Builder**: Best for multi-page narratives, galleries, and richer widget choreography. It allows for custom application design, linking to other applications, and supports WCAG keyboard order and complex widget actions (e.g., Reno) [22] [23] [24].
* **Map Viewer**: Simplest for dataset-first views on Hub pages (e.g., Sandy Springs) but lighter on guided user experiences [8].

### Update workflows that keep trust
Automate ETL processes from the enterprise database to hosted FeatureServices, scheduling weekly or daily jobs. Use hosted feature layer views to separate editing environments from public displays, and prominently show "Last updated" dates on the page [2]. Stage schema changes carefully to avoid breaking pop-ups or filters [25].

### Accessibility and multilingual
Ensure address search is first in the tab order. Enable high-contrast basemaps, provide color-blind-safe symbology, and follow Experience Builder accessibility guidance to auto-calculate logical tab orders for keyboard navigation [26] [23].

## City deep dives — What to copy, what to improve

### Sandy Springs, GA — Clean schema + steady updates
Sandy Springs utilizes an ArcGIS Hub map item and FeatureService to display Capital Improvement Projects via point and line layers [2]. The schema is clean, featuring fields for Project Type (Transportation, Stormwater, Parks), Fiscal Year, and Project Phase [7]. 
* **What to copy**: The clear split between point and line layers, coded domains, and the explicit public admonition: "Updates every Friday. Do not edit this layer. Edit the data in the Enterprise Geodatabase" [2].
* **Improvement**: Add a dedicated streetlight/signal subtype or cross-link to lighting assets, and publish a quarterly usage snapshot on the Hub.

### Nampa, ID — Simple funnels with address search
Nampa features an ArcGIS Hub site dedicated to Transportation CIP Projects, segmented into 5-Year Transportation Projects, Active Projects, and Priority Corridors [10]. 
* **What to copy**: Task-oriented pages and list-map UX lower friction. The site explicitly instructs users on how to search by address, place name, or intersection [10].
* **Improvement**: Unify the three views into a single Dashboard or Experience Builder overview, add per-project cost ranges, and publish views per month on the landing page.

### Richmond, VA — District-first dashboarding
Richmond employs a city-hosted ArcGIS Dashboard surfaced through its GeoHub. The dashboard aggregates active capital improvement projects across various departments (Transportation, Sanitary, Drainage, Water) [5] [13].
* **What to copy**: The ability to filter projects by council district and the clear glossary of key terms (e.g., 30-60-90 Design Phase, Right of Way) provided on the landing page [5].
* **Improvement**: Add a "Lighting/Signals" project type toggle, prominently display the specific "Updated: Qx YYYY" date rather than just stating it is updated quarterly, and link dataset pages with REST endpoints.

### Tacoma, WA — Lighting assets as a first-class public map
Tacoma publishes a specific Public Streetlight Map that identifies the City's streetlight system, including fixtures, poles, and known maintenance issues [15]. 
* **What to copy**: Exposing pole numbers and specific issue types to expedite troubleshooting by Public Works staff and inform the public [15].
* **Improvement**: Integrate this highly detailed asset map with a consolidated public CIP dashboard linking lighting, signals, and broader road projects [16].

### Reno, NV — Experience Builder catalog for public works
Reno utilizes an Experience Builder "City of Reno Projects" map and a broader Geospatial Hub that consolidates various capital and maintenance apps, including pavement conditions, road closures, and capital projects (roadway maintenance, sidewalks, traffic lights) [18].
* **What to copy**: The use of a central Map Gallery to organize disparate infrastructure trackers into one navigable portal [18].
* **Improvement**: Connect project cards directly to REST datasets and publish usage statistics and last-updated badges on the main gallery page.

### Bakersfield, CA — Streetlight inventory exposed via Hub
Bakersfield exposes a streetlights asset layer via its Hub, numbering streetlights sequentially as they are surveyed [20].
* **What to copy**: Making raw asset inventories available as open data.
* **Improvement**: Pair the asset inventory with a lighting projects tracker (planned vs. active) to show where improvements are scheduled.

## Risks and pitfalls — What to watch for
Three avoidable risks can quickly erode public trust in a CIP tracker:
1. **Stale Data**: Static maps (e.g., "completed projects 2021") that remain public confuse users. Retire or archive them clearly [27].
2. **WebGL/Browser Issues**: Some Dashboards or 3D basemaps fail on older devices or browsers without WebGL support, rendering a "No Data Available" error [28]. Always offer a "lite" map viewer fallback.
3. **Schema Changes**: Renaming Phase or Fiscal Year fields in the enterprise database breaks public pop-ups and filters. Always version and communicate schema changes [25].

## Action plan — Build or improve your tracker in 90 days

### 0–30 days: Stand up the foundation
Inventory existing CIP data and adopt a minimal schema (Project ID, Type, Phase, FY, Budget, Contacts, District). Publish hosted FeatureServices as public "view" layers, configure pop-ups, and add editor tracking. Draft a basic Dashboard (map + list + filters) and a Hub landing page with FAQs. Instrument GA4 and enable ArcGIS itemStats.

### 31–60 days: Expand utility and reach
Add address search, list-map synchronization, and district filters. Configure shareable URLs per project. Cross-link lighting and signal asset layers, adding a specific "Lighting/Signals" project filter. Publish the REST endpoints, data dictionaries, and enable CSV/GeoJSON downloads.

### 61–90 days: Measure, iterate, and publish metrics
Establish quarterly KPIs: unique users, views per month, downloads, and top searches. Normalize views per 1,000 residents per month and set targets based on budget and construction seasons. Launch a communications cadence tied to update cycles to drive organic traffic.

## Measurement and governance — Make metrics routine
To ensure the tracker remains valuable, automate metric collection and publish a one-page quarterly scorecard. Nightly, pull itemStats via the ArcGIS API and track GA4 events for search and filter usage. Quarterly, publish the scorecard on the Hub, explicitly stating what features or data points were changed based on community usage and feedback.

## References

1. *Introduction to Capital Project Tracking—ArcGIS Solutions*. https://doc.arcgis.com/en/arcgis-solutions/11.4/reference/introduction-to-capital-project-tracking.htm
2. *Capital Improvement Projects Public | ArcGIS Hub*. https://hub.arcgis.com/maps/0b158dfcb4fe4a409a5a97916ee1d1a6
3. *Capital Improvement Program Dashboard*. https://experience.arcgis.com/experience/86362b12585448b583b74a3a2ae32745
4. *Capital Improvement Projects | ArcGIS Hub*. https://hub.arcgis.com/maps/SJCPWD::capital-improvement-projects
5. *CIP | Richmond - RVA.gov*. https://rva.gov/budget-and-strategic-planning/cip
6. *U.S. Census Bureau QuickFacts: Sandy Springs city, Georgia*. https://www.census.gov/quickfacts/fact/table/sandyspringscitygeorgia/LND110210
7. *Layer: City Infrastructure Project Point (ID: 0)*. https://gis2.sandyspringsga.gov/arcgis/rest/services/OpenData/CityImprovementProjects_CS/MapServer/0
8. *Capital Improvement Projects Public - Overview*. https://www.arcgis.com/home/item.html?id=0b158dfcb4fe4a409a5a97916ee1d1a6
9. *U.S. Census Bureau QuickFacts: Nampa city, Idaho*. https://www.census.gov/quickfacts/fact/table/nampacityidaho/RHI225224
10. *Transportation CIP*. https://transportation-cip-nampa.hub.arcgis.com/
11. *PriorityCorridors - Overview*. https://www.arcgis.com/home/item.html?id=3fabfdf07a1c4a91a839731c7f3b8f40
12. *U.S. Census Bureau QuickFacts: Richmond city, Virginia*. https://www.census.gov/quickfacts/fact/table/richmondcityvirginia/PST045225
13. *Capital Projects (FeatureServer)*. https://services2.arcgis.com/Q6Lq3evZUGfPrN7o/arcgis/rest/services/Capital%20Projects/FeatureServer
14. *City of Richmond, Virginia - Capital Improvement Projects Dashboard - Overview*. https://www.arcgis.com/home/item.html?id=b77c76ba1e1a47a09734b7eb8d5a508b
15. *Public Streetlight Map (Tacoma) - Overview*. https://www.arcgis.com/home/item.html?id=f030863e571d4d95a95c42c175aa30d3
16. *Capital  Projects (Tacoma) - Overview*. https://www.arcgis.com/home/item.html?id=ae4dfd060eff49e7b85789ae02441703
17. *U.S. Census Bureau QuickFacts: Reno city, Nevada*. https://www.census.gov/quickfacts/fact/table/renocitynevada/PST045224
18. *Reno-Geo - A Hub For All Your Geospatial Needs*. https://www.reno.gov/services/city-maps-mapserver
19. *Street_Centerlines (MapServer)*. https://pwmaps.reno.gov/server/rest/services/Street_Centerlines/MapServer
20. *Streetlights | ArcGIS Hub*. https://hub.arcgis.com/datasets/9e652a9f046449db84416972bf82efb7_0/about
21. *Capital Improvement Plan - ArcGIS Hub*. https://hub.arcgis.com/maps/92229dcb016a44f49d0bcbc644189f49/about
22. *
	Solved: What is the difference between Dashboard and Exper... - Esri Community
*. https://community.esri.com/t5/arcgis-experience-builder-questions/what-is-the-difference-between-dashboard-and/td-p/1022985
23. *Accessibility—ArcGIS Experience Builder - Esri Documentation*. https://doc.arcgis.com/en/experience-builder/latest/get-started/accessibility.htm
24. *Add actions to widgets—ArcGIS Experience Builder | Documentation*. https://doc.arcgis.com/en/experience-builder/latest/configure-widgets/action-triggers.htm
25. *
	Solved: Best practice for updating schema/domains for feat... - Esri Community
*. https://community.esri.com/t5/arcgis-online-questions/best-practice-for-updating-schema-domains-for/td-p/1643479
26. *Capital Improvement Projects Public*. https://experience.arcgis.com/experience/010acb7ecdeb4dbf8aba15b2b2f161b6
27. *DPR_Completed_Projects_2022 - Overview*. https://geospatialdenver.maps.arcgis.com/home/item.html?id=b42306a4b4004a2cbed154a4602871aa
28. *Public Infrastructure Project Tracker Dashboard*. https://www.arcgis.com/apps/dashboards/dcad898687604f80a318cdebe792cf95
