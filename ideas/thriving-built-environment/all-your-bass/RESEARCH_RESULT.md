# Beyond GPS: How US cities publicly track DPW services with schedules, status logs, and crew check-ins

## Executive Summary

Many U.S. municipalities have successfully deployed public-facing tools to track Department of Public Works (DPW) operations—such as snow removal, street sweeping, and leaf collection—without relying on real-time vehicle GPS telemetry (AVL). By leveraging alternative data sources, cities can provide residents with actionable service progress information while avoiding the high costs, privacy concerns, and technical complexities of live fleet tracking. 

Key insights include:
* **Non-GPS zone and schedule maps are the industry standard:** Cities like Boston, Minneapolis, and Arlington use schedule-driven maps and open datasets to inform residents of sweeping and leaf collection times, delivering immediate value with low integration risk [1] [2] [3].
* **Work-order and 311 status provide practical progress signals:** When GPS is absent, wiring public maps to back-office work orders and Open311 closures allows cities like Fairfax County and Cincinnati to color-code zones as "in progress" or "complete" [4] [5].
* **Supervisor toggles make progress legible:** Milwaukee’s leaf collection map uses simple states (green for "up next," yellow for "working," red for "complete") updated manually by crews or supervisors [6].
* **"GPS-lite" via field apps covers non-instrumented vehicles:** Esri’s Street Sweeping Operations solution uses mobile apps like QuickCapture, allowing drivers to report status and materials used, effectively tracking progress without in-vehicle AVL hardware [7].
* **Hybrid and delayed telemetry protects operations:** Cities with partial GPS coverage, such as Pittsburgh and Syracuse, intentionally delay location timestamps, aggregate data to route coverage, and publish clear disclaimers to balance transparency with operational security [8] [9].
* **Proactive alerts drive compliance:** Opt-in SMS and email notifications (used in Boston, Los Angeles, and Minneapolis) often drive more parking compliance and reduce 311 load better than passive maps alone [10] [2] [11].

## What residents need vs. what fleets can provide — bridging the gap without AVL

Most resident questions during snow, sweeping, or leaf seasons boil down to two things: *When will you come?* and *Did you come?* These questions can be answered reliably with schedules, work-order statuses, and simple crew updates—no live GPS required.

### Resident jobs to be done: plan, move cars, and know "done"
Residents primarily need to know when to move their vehicles to avoid citations and when it is safe to return them. Providing a clear separation between "plan" (the schedule) and "progress" (the actual status) is critical. For example, Madison explicitly warns residents that its set-out date lookup tool cannot be used to track the real-time progress of crews, preventing confusion during weather delays or reruns [12].

### Data supply without telemetry: what's already in DPW systems
Even without AVL, DPW systems are rich with data. Alternative sources include:
* **Published schedules and route/zone polygons:** Static or seasonal calendars defining when services are planned [1] [3].
* **311/Open311 service-request status:** Tracking the progress of resident requests or internal work orders [5].
* **Dispatch or crew supervisor manual updates:** Foremen manually updating a zone's status to 'complete' once services are rendered [6].
* **Route completion logs:** Electronic work order completions feeding into public dashboards.

## Typology of public-facing DPW tools that do not rely on live GPS

Five repeatable patterns cover most cities' needs, allowing agencies to mix and match based on their technical maturity and operational requirements.

### Five data patterns vs. latency, accuracy, and cost

| Pattern | Primary Data Source | Typical Latency | Spatial Granularity | Cost/Complexity | Example Cities | Best-Fit Use |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Schedule/zone calendar** | Static GIS polygons & seasonal calendars | Days/Weeks | Zone, Ward, or Street Segment | Low | Boston, Minneapolis, San Diego | Baseline compliance and planning [2] [3] [13] |
| **Work-order/311 closures** | CRM/Asset Management (e.g., Cityworks) | Hours/Daily | Zone or Address | Medium | Fairfax, Cincinnati | Tracking discrete pickups or missed service [4] [5] |
| **Supervisor zone toggles** | Manual web/mobile dashboard updates | Hours | Zone or Route | Low | Milwaukee | Seasonal leaf or brush collection [6] |
| **Crew mobile check-ins** | Mobile apps (e.g., Esri QuickCapture) | Minutes/Hours | Route or Segment | Medium | Esri Solutions | Fleets lacking hardwired AVL [7] |
| **Aggregated/delayed AVL** | Telemetry middleware | Minutes/Hours | Route Coverage | High | Pittsburgh, Fargo, Syracuse | Snow plowing and safety-critical ops [8] [9] [14] |

*Takeaway: Schedule-driven maps offer the lowest barrier to entry, while crew check-ins and delayed AVL provide higher fidelity at a greater cost.*

### Case pattern 1 — Schedule/zone calendars that set expectations
Cities like Boston, Minneapolis, and Arlington rely heavily on schedule-based systems. Boston provides a lookup form and publishes street-sweeping schedules by district, side, and section [15] [3]. Minneapolis uses an interactive map showing when a street is scheduled for sweeping, updating it by the Friday before sweeping starts [16]. 

### Case pattern 2 — Status via work-orders and Open311
Integrating public maps with 311 systems allows cities to show progress based on ticket closures. Cincinnati's CAGIS Activity Tracker allows users to search existing requests by address and view maps of service requests that are open or were closed within the last seven days, updated daily [5]. Fairfax County provides a leaf collection service area map and updates the current status by section and round [4].

### Case pattern 3 — Manual supervisor updates
For seasonal events like leaf collection, manual updates are highly effective. Milwaukee’s Fall Leaf Collection map uses a simple color-coded system: Green (up next), Yellow (working in the area), and Red (complete) [6]. This requires minimal technical integration and relies on supervisors updating the status at the end of a shift.

### Case pattern 4 — Crew check-ins as GPS-lite
Esri’s Street Sweeping Operations solution demonstrates how mobile apps can replace hardwired AVL. Drivers use the ArcGIS QuickCapture app to report their status (e.g., "In Transit," "Sweeping") and log materials used [7]. This provides operations managers and the public with near real-time progress without requiring expensive vehicle telemetry hardware.

### Case pattern 5 — Delayed/aggregated AVL for safety
When cities do have partial GPS, they often aggregate or delay the data for security and privacy. Pittsburgh's Snow Response Dashboard explicitly notes that it shows a "select number of snow plows" and that locations are "delayed and not in real time" [8]. Syracuse's map updates every five minutes but warns that "not every plow has GPS tracking capabilities; thus, there’s a chance your street was plowed, and it is not reflected on the map" [9].

## City examples — What they show and how they power it

A cross-section of municipal tools proves that non-GPS approaches are working at scale across the United States.

### 8 City Tools: Domain, Approach, and Data Source

| City | Domain | Approach | Data Source | Public URL |
| :--- | :--- | :--- | :--- | :--- |
| **Boston, MA** | Street Sweeping | Schedule lookup + No-Tow alerts | Schedule dataset | cityofboston.gov/publicworks/sweeping [15] |
| **Minneapolis, MN** | Street Sweeping | Weekly schedule map | Zone calendar | minneapolismn.gov/.../street-sweep-map [16] |
| **Los Angeles, CA** | Street Sweeping | Address-level notifications | Schedule/route polygons | streets.lacity.gov/services/street-sweeping [17] |
| **Arlington, VA** | Street Sweeping | 14 zones, 4 passes/yr | Zone calendar | arlingtonva.us/.../Street-Sweeping [1] |
| **San Diego, CA** | Street Sweeping | Open schedule dataset | Schedule CSV | data.sandiego.gov/datasets/street-sweeping-schedule [13] |
| **Fairfax County, VA** | Leaf Collection | Section/round status + map | Work-order/section status | fairfaxcounty.gov/.../leaf-collection-dates [4] |
| **Milwaukee, WI** | Leaf Collection | "Up next / working / complete" map | Supervisor zone toggles | city.milwaukee.gov/.../FallLeafCollection [6] |
| **Pittsburgh, PA** | Snow Removal | Snow Response dashboard | Delayed AVL + route coverage | pittsburghpa.gov/.../Snow-Response-Updates [8] |

*Takeaway: Regardless of the service domain, cities successfully use schedules, manual toggles, and delayed telemetry to keep residents informed.*

### Deep dives
* **Fairfax County Leaf Collection:** Fairfax provides a vacuum leaf collection service area map and allows residents to view the schedule by section and round. The city updates the "current status" textually, likely driven by backend work-order closures as crews finish specific neighborhoods [4].
* **Minneapolis Street Sweeping:** Minneapolis updates its interactive street sweep schedule map by the Friday before sweeping starts, and then updates it daily during the sweep to show progress. The city also offers SMS/text alerts and provides the information in multiple languages (Spanish, Hmong, Somali, etc.) [2] [16].
* **Pittsburgh Snow Response:** Pittsburgh uses a hybrid approach. Their dashboard shows vehicle locations and route history, but includes a prominent disclaimer: "Not all active vehicles are shown, and locations are delayed and not in real time." They also provide a separate "Snow Route Coverage" map showing colored roads where vehicles have driven, aggregating the data to protect operational security while showing progress [8].

## Design patterns for resident experience and trust

Clarity beats cleverness. Separating the plan from the progress, showing timestamps, and stating limitations plainly builds public trust.

### "Plan vs. progress" side-by-side with explicit copy
Cities must clearly distinguish between when they *plan* to service an area and what is actually *completed*. Madison, WI, provides an excellent model for expectation setting, explicitly stating: "You can't use the set-out date look up to track the progress of where crews are working. If you put yard waste out on the Sunday assigned to your home, crews have that whole work week to collect from all of the neighborhoods" [12].

### Status states that residents grok
Using simple, universally understood status states—such as Milwaukee's Green (up next), Yellow (working), and Red (complete)—prevents misinterpretation [6]. Adding a "last updated" timestamp ensures residents know how fresh the data is.

### Accessibility & language
Tools must be accessible to all residents. The Web Content Accessibility Guidelines (WCAG) 2.1 note that content updated periodically by software (like live maps) is not required to preserve information generated during a pause, allowing developers to build accessible "pause/stop" controls for live maps [18]. Furthermore, cities like Minneapolis ensure their sweeping information and 311 contact details are available in multiple languages and formats [2].

## Data architecture and integration options

Starting simple with batch updates and evolving toward event-driven architectures allows cities to deploy quickly while managing risk.

### Integration patterns

| Integration Pattern | Source System | Transport / Middleware | Update Cadence | Best For |
| :--- | :--- | :--- | :--- | :--- |
| **Batch CSV / Static** | Excel / GIS Desktop | Socrata SODA / Open Data Portal | Seasonal / Weekly | Baseline schedules and zone polygons [3] |
| **Manual Toggles** | Web Dashboard | ArcGIS Feature Service | End of Shift / Daily | Leaf collection phases [6] |
| **Work-Order Sync** | Cityworks / Cartegraph | REST API / Open311 | Hourly / Near Real-Time | 311 ticket closures and missed pickups [5] |
| **Mobile Check-ins** | Esri QuickCapture | ArcGIS Location Sharing | Minutes | Fleets without hardwired AVL [7] |

*Takeaway: Agencies can start with static CSV uploads to open data portals and gradually move to REST APIs and mobile check-ins as operational maturity increases.*

### Core models and Security
The foundational data model relies on zone/route polygons and street-segment indexing, augmented with status attributes and `last_updated` timestamps. Security is paramount: systems should intentionally delay or aggregate telemetry to avoid exposing operator PII or real-time vulnerabilities [8] [19].

## Implementation roadmap — from MVP to hybrid

A phased approach de-risks delivery and builds toward richer telemetry only as needed.

### Phase 1: Schedule/zone MVP (4–8 weeks)
Publish authoritative sweep, leaf, and snow zones as open datasets (e.g., DC's Snow Removal Zones [20]). Launch a simple address lookup tool that returns the scheduled service day. Implement opt-in SMS/email notifications (like Boston's No-Tow alerts [11]) and publish clear disclaimers about weather delays.

### Phase 2: Progress via work-orders and supervisor toggles (8–12 weeks)
Integrate the public map with back-office work orders or 311 closures. Provide crew supervisors with a simple mobile UI to toggle zones from "Scheduled" to "In Progress" to "Complete." Display a visible "last updated" clock on the public portal.

### Phase 3: Crew check-ins or delayed AVL (12–20 weeks)
For fleets lacking hardware, roll out mobile apps like Esri QuickCapture for drivers to log start/stop events [7]. If AVL hardware is procured, implement middleware to aggregate the data into route coverage maps with intentional time delays (e.g., 15-30 minutes) to protect operational security [8].

## Risks, failure cases, and mitigations

Most pitfalls involve expectation-setting and data freshness. 

### Known issues and fixes
* **Schedule slippage:** Weather events can derail schedules. Cities must use proactive alerts (SMS/email) to notify residents of suspended enforcement or delayed pickups.
* **Incomplete telemetry:** As seen in Syracuse, if only part of the fleet has GPS, the map will show false negatives (streets plowed but not shown as such) [9]. Mitigate this with prominent disclaimers.
* **Software reliability:** Case studies from Minnesota note that software reliability and GPS connectivity can be challenging [21]. Fallback manual logging is required.

### Governance & SLAs
Establish clear Service Level Agreements (SLAs) for data freshness (e.g., "Zone statuses refresh every 15 minutes; schedules roll Fridays"). Maintain a public changelog and ensure supervisors are accountable for end-of-shift status updates.

## KPIs and accountability

Measure both operational efficiency and communication outcomes.

### Suggested KPIs
* **Operational:** Percentage of zones completed by the end of the scheduled window; average lag time between physical completion and public status update.
* **Communication:** Reduction in 311 inquiries per 1,000 households regarding service status; reduction in parking citations/tows; growth in SMS/email alert subscribers.

### Audit & feedback loop
Conduct weekly accuracy spot-checks comparing the public map to actual street conditions. Provide a feedback widget or 311 link directly on the map for residents to report discrepancies.

## Technology stack options and costs

Cities can leverage existing enterprise agreements and open data platforms to minimize costs.

### Stack building blocks
Most municipalities already license Esri ArcGIS Enterprise or ArcGIS Online, which provide the necessary Feature Services, Dashboards, and Instant Apps to build these tools [22] [23]. Integration with asset management systems like Trimble Cityworks allows for automated status updates based on work order completion [24]. Open data portals like Socrata (SODA) can host the underlying schedule datasets [25].

### Cost and licensing considerations
An MVP requires no AVL hardware. Costs are limited to Esri User Types (e.g., Creators for map building, Viewers for internal dashboards) and SaaS credits for hosting [23] [26]. If moving to Phase 3 with mobile check-ins, Mobile Worker licenses may be required for field crews. 

### Security/posture
Ensure strict authentication for administrative and supervisor UIs. Public endpoints must be read-only and rate-limited to prevent abuse, with all operator PII stripped before data reaches the public layer.

## References

1. *Street Sweeping – Official Website of Arlington County Virginia Government*. https://www.arlingtonva.us/Government/Programs/Recycling-and-Trash/Residential/Street-Sweeping
2. *Street Sweeping - City of Minneapolis*. https://www.minneapolismn.gov/getting-around/parking-driving/street-sweep/
3. *Street Sweeping Schedules - Dataset - Analyze Boston*. https://data.boston.gov/dataset/street-sweeping-schedules
4. *Leaf Collection Dates - Schedule and Status | Public Works and Environmental Services*. https://www.fairfaxcounty.gov/publicworks/recycling-trash/leaf-collection-dates
5. *Search Existing 311 Requests - 311*. https://www.cincinnati-oh.gov/311/status/
6. *Fall Leaf Collection*. https://city.milwaukee.gov/sanitation/Yard-Food-Waste/FallLeafCollection
7. *Use Street Sweeping Operations—ArcGIS Solutions | Documentation*. https://doc.arcgis.com/en/arcgis-solutions/latest/reference/use-street-sweeping-operations.htm
8. *Snow Response Updates - Pittsburgh, PA*. https://www.pittsburghpa.gov/Resident-Services/Snow-Removal/Snow-Response-Updates
9. *What's been plowed? City of Syracuse offers map to show plow activity*. https://www.localsyr.com/news/local-news/whats-been-plowed-city-of-syracuse-offers-map-to-show-plow-activity/
10. *Street Sweeping Routes - Near Me & Notifications*. https://www.arcgis.com/apps/dashboards/ad01106434a443a69924c54f1e8edbf7
11. *No-Tow Subscription Reminder - City of Boston*. https://www.cityofboston.gov/publicworks/sweeping/remindme.asp
12. *Yard Waste & Leaves | Streets & Urban Forestry | City of Madison, WI*. https://www.cityofmadison.com/streets/brush-yard-waste/yard-waste-leaves
13. *Street Sweeping Schedule*. https://data.sandiego.gov/datasets/street-sweeping-schedule/
14. *The City of Fargo - Public Works Services Tracker*. https://fargond.gov/city-government/departments/public-works/public-works-services-tracker
15. *Street Sweeping Lookup - City of Boston*. https://www.cityofboston.gov/publicworks/sweeping/
16. *Street Sweep Map - City of Minneapolis*. https://www.minneapolismn.gov/getting-around/parking-driving/street-sweep/street-sweep-map/
17. *Street Sweeping | Bureau of Street Services (StreetsLA)*. https://streets.lacity.gov/services/street-sweeping
18. *Web Content Accessibility Guidelines (WCAG) 2.1*. https://www.w3.org/TR/WCAG21/
19. *Privacy Policy | Fleet Telematics | Geotab*. https://www.geotab.com/privacy-policy/
20. *Snow Removal Zones - Open Data DC*. https://opendata.dc.gov/datasets/DCGIS::snow-removal-zones/about
21. *Tracking street sweeping activities | Minnesota Stormwater Manual*. https://stormwater.pca.state.mn.us/tracking_street_sweeping_activities
22. *Feature Service | ArcGIS REST APIs | Esri Developer*. https://developers.arcgis.com/rest/services-reference/enterprise/feature-service.htm
23. *Pricing for ArcGIS Online User Types | Subscription Cost & Buy Now*. https://www.esri.com/en-us/arcgis/products/arcgis-online/buy
24. *Cityworks GIS Management – Soon Unity Maintain | Trimble | O&PS*. https://www.cityworks.com/
25. *Socrata Developers | Socrata*. https://dev.socrata.com/
26. *Pricing for Enterprise User Types | Subscription Cost & Buy Now*. https://www.esri.com/en-us/arcgis/products/arcgis-enterprise/pricing
