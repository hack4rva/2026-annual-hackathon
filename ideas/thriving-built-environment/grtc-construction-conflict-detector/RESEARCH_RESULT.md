# From Orange Cones to Operations: Making Construction Closures Safe and ADA-Compliant for Transit and Paratransit

## Executive Summary

As of April 2026, no U.S. transit agency or city publicly documents a fully automated, end-to-end system that continuously ingests construction permit feeds, detects spatial conflicts with bus stops or paratransit pickups, and automatically triggers operational mitigations like GTFS-Realtime (GTFS-RT) alerts or paratransit re-dispatches. However, the building blocks for such a system—including Work Zone Data Exchange (WZDx) feeds, municipal open data APIs, and geo-event engines—are readily available and actively used in isolated capacities. 

The stakes for bridging this gap are high. Under the Americans with Disabilities Act (ADA) and the latest Public Right-of-Way Accessibility Guidelines (PROWAG), agencies must provide accessible alternate stops during construction. Furthermore, Federal Transit Administration (FTA) regulations strictly prohibit penalizing ADA complementary paratransit riders for missed trips (no-shows) caused by factors beyond their control, such as unannounced stop closures or inaccessible temporary stops. While empirical data directly linking construction closures to paratransit suspensions is sparse, Department of Justice (DOJ) settlements and FTA compliance reviews underscore the severe legal and equity risks of capacity constraints and inaccessible infrastructure. Agencies must act now to integrate right-of-way (ROW) data with transit operations, update their no-show adjudication policies, and deploy automated conflict detection to protect vulnerable riders.

## 1. What is Built Today—and What is Missing

U.S. deployments possess all the necessary ingredients for automated conflict detection, but they lack the transit-specific integration required to protect bus stops and paratransit pickups automatically.

### 1.1 WZDx and Closure Data Availability
The adoption of the WZDx specification has standardized how infrastructure owners share active work zone data. The WZDx Feed Registry currently lists active feeds from numerous jurisdictions, including the Departments of Transportation for Colorado, Florida, Iowa, Massachusetts, and Texas, as well as Maricopa County [1]. At the municipal level, cities are publishing highly granular data. San Francisco provides a dataset of temporary street closures formatted to the WZDx standard [2], while Seattle offers a Street Closures dataset complete with GeoJSON line string coordinates [3]. Despite this availability, these feeds are primarily consumed by navigation apps (like Waze and Google Maps) for general traffic routing, rather than being cross-referenced against transit stop inventories.

### 1.2 Permit and Right-of-Way Platforms
Modern permitting platforms are advancing rapidly but remain largely unaware of transit infrastructure. Solutions like one.network's Plan Share offer advanced GIS mapping for multi-point closures and automated conflict detection to expedite contractor permits [4]. These systems can seamlessly integrate with navigation platforms to reroute traffic away from work zones [4]. However, these platforms detect permit-on-permit conflicts; they do not natively reconcile against transit stop geofences or ADA paratransit pickup rules out-of-the-box.

### 1.3 Detection-to-Action Maturity Rubric
Transit agencies currently fall along a maturity spectrum regarding construction conflict detection:
* **Level 0 (Manual):** Reliance on contractor emails and manual dispatcher review.
* **Level 1 (Batch Detection):** Periodic manual GIS overlays of permit data against GTFS stops.
* **Level 2 (Automated Detection & Alerts):** Automated ingestion of WZDx/permit feeds triggering internal dispatcher tickets and GTFS-RT alerts.
* **Level 3 (Automated Mitigation):** Full integration where conflicts automatically generate temporary stop records, trigger paratransit re-dispatch, and push SMS/IVR alerts to riders.
Currently, leading cities like San Francisco and Seattle possess the data to reach Level 2, but most remain at Level 0 or 1.

## 2. Compliance and Legal Guardrails

Federal regulations establish clear duties for transit agencies and municipalities during construction, particularly regarding accessibility and rider penalties.

### 2.1 PROWAG and DOT Standards for Temporary Changes
The U.S. Access Board's 2023 Public Right-of-Way Accessibility Guidelines (PROWAG) explicitly address temporary construction. PROWAG Section R204 requires that when a pedestrian circulation path or transit stop is temporarily closed by construction, an alternate pedestrian access route or transit stop must be provided that meets standard design requirements [5]. Furthermore, DOT standards require bus boarding and alighting areas to provide a clear length of 96 inches and a clear width of 60 inches [6].

### 2.2 ADA Paratransit Rules Intersecting Construction
If a bus stop is rendered inaccessible due to construction, it directly impacts paratransit eligibility. According to 49 CFR Part 37 Appendix D, if a vehicle's lift cannot be deployed at a particular stop, an individual is eligible for paratransit under Category 2 for that specific trip, even if the rest of the route is accessible [6]. Additionally, Appendix E requires transit operators to make reasonable modifications, such as positioning the vehicle to avoid obstructions like snow banks or construction, provided it does not pose a direct threat [6].

### 2.3 No-Show and Suspension Safeguards
FTA regulations strictly govern how agencies handle paratransit no-shows. Agencies may suspend service for a reasonable period for riders who establish a "pattern or practice" of missing scheduled trips [7]. However, trips missed for reasons beyond the rider's control—including operator error, sudden illness, or inaccessible stops—cannot be used to determine that a pattern exists [7]. Before suspending service, agencies must notify the individual in writing, provide an opportunity to be heard, and issue a written decision [7].

## 3. Evidence of Impact and Measurement Strategies

While qualitative complaints and legal actions highlight the severe impact of inaccessible stops, quantitative data linking specific closures to paratransit suspensions remains scarce.

### 3.1 The Current Evidence Gap
Publicly available datasets rarely attribute paratransit no-shows directly to construction closures. However, DOJ enforcement actions demonstrate the legal risks of failing to provide adequate service. For example, a 2022 settlement with NJ Transit's Access Link addressed capacity constraints that resulted in excessively long trips, late pickups, and late drop-offs, violating 49 C.F.R. § 37.131(f)(3) [8]. 

### 3.2 Proposed Study Design to Quantify Causal Impact
To bridge this evidence gap, agencies should launch a 90-day pilot study linking permit/WZDx feeds with GTFS stops and paratransit scheduling logs (e.g., Trapeze, Ecolane). By employing a difference-in-differences methodology around closure start and end dates, agencies can estimate the causal uplift in no-show probabilities and rider appeals. 

### 3.3 Privacy and Feasibility
This study requires strict data governance, including Data Use Agreements (DUAs) and the minimization of Personally Identifiable Information (PII). By focusing on spatial overlaps (e.g., 50-75 foot buffers around closures) rather than individual rider identities, agencies can safely quantify the operational impact of unannounced closures.

## 4. Playbook: From Orange Cone to Compliant Mitigation

Agencies can transition from manual processes to automated, compliant mitigations through a sequenced approach.

### 4.1 90-Day Quick Wins (Reaching Level 2)
Agencies should immediately establish a "Minimum Viable Detector." This involves running a daily batch overlay of active permits (via WZDx or city open data APIs) against GTFS stop inventories. When a conflict is detected, the system should automatically issue a GTFS-RT Service Alert and generate a ticket for dispatchers to review the stop's accessibility.

### 4.2 6-12 Month Investments (Reaching Level 3)
Longer-term investments should focus on event-driven automation. Utilizing geo-event engines like ArcGIS Velocity, agencies can ingest real-time IoT data and third-party APIs to perform dynamic geofencing and trigger instant alerts [9]. These systems can push webhooks directly into CAD/AVL and paratransit scheduling software, automatically flagging trips for re-dispatch if a pickup point falls within an active work zone.

### 4.3 Governance and Contractor Levers
Technology must be paired with strong municipal governance. Agencies should require contractors to provide a minimum three-week notice for closures that impact transit [5]. Permits must mandate the submission of GIS coordinates for temporary accessible stops and include liquidated damages for failing to maintain PROWAG-compliant access during construction.

## 5. Technology and Vendor Options

Selecting the right mix of vendors is critical for building an automated conflict detection pipeline.

### 5.1 Comparative Landscape for Conflict Detection

| Category | Example Vendors | Strengths for this Use Case | Gaps / Risks |
| :--- | :--- | :--- | :--- |
| **Permit / ROW Platforms** | one.network, Accela, Cityworks | Advanced GIS mapping, automated permit approvals, conflict detection between permits [4]. | Not natively transit-stop aware; requires custom integration of GTFS layers and ADA rules. |
| **Closure Data Feeds** | WZDx, Open511, Waze CCP | Standardized formats, broad jurisdictional coverage [1]. | Geometry precision varies; often lacks specific sidewalk/curb closure details. |
| **Geo-Event Engines** | ArcGIS Velocity | Real-time spatial analysis, dynamic geofencing, automated alert triggering [9]. | Requires in-house GIS expertise and enterprise licensing. |
| **Transit Operations** | Trapeze, Optibus, Clever Devices | Manages GTFS/GTFS-RT, scheduling, and dispatcher workflows [10] [11] [12]. | Paratransit API openness varies; relies on external systems to feed accurate closure data. |

*Takeaway: No single vendor provides an out-of-the-box solution. Agencies must use an integration layer (like ArcGIS Velocity) to connect municipal permit platforms with transit scheduling software.*

### 5.2 Reference Architectures and Data Quality
An event-driven architecture is ideal: WZDx feeds are ingested by a spatial engine, buffered by 50 feet, and intersected with GTFS stops. If a conflict occurs, a webhook updates the GTFS-RT feed and alerts the paratransit dispatcher. To ensure resiliency, agencies must account for varying geometry precision in permit data (e.g., point centroids vs. exact polygons) and maintain a manual override capability for false positives.

## 6. Safety, Equity, and ADA Paratransit Policy Guardrails

Automated detection is only effective if backed by policies that protect riders from unfair penalties.

### 6.1 Rider Risk Scenarios
Unannounced closures pose severe risks, particularly for riders with vision or mobility impairments who may be stranded at inaccessible, unsigned temporary stops. Agencies must enforce "no-strand" policies and ensure operators are trained to make reasonable modifications to safely board passengers near obstructed stops.

### 6.2 Paratransit Policy Tune-Up Checklist

| Policy Element | FTA / ADA Requirement | Recommended Best Practice |
| :--- | :--- | :--- |
| **Agency-Caused Misses** | Trips missed for reasons beyond the rider's control cannot be used to determine a pattern of no-shows [7]. | Automate "agency-cause" tagging in scheduling software when a pickup falls within a known work zone. |
| **Notice & Appeals** | Must provide written notice, specific reasons, and an opportunity to be heard [7]. | Provide notices in accessible formats and allow at least 15 days to appeal before suspension begins. |
| **Suspension Length** | Must be for a "reasonable period"; FTA considers >30 days excessive [13]. | Implement progressive discipline (e.g., warning, 7 days, 14 days). |
| **Financial Penalties** | Not permitted as a mandatory punishment [13]. | Only allow voluntary fare payments in lieu of a suspension [13]. |

*Takeaway: Transit agencies must audit their no-show policies immediately to ensure that construction-related disruptions never result in rider suspensions.*

### 6.3 KPIs and Dashboards
Agencies should track and publish equity-focused KPIs, including: Time-to-alert for unannounced closures, the percentage of closures with PROWAG-compliant alternate stops, and the no-show rate segmented by disability type (ensuring agency-caused misses are explicitly excluded).

## 7. Implementation Roadmap, Roles, and Budget

### 7.1 Roles and Responsibilities
Success requires cross-functional collaboration. City DOTs must enforce permit data quality; Transit IT/GIS teams must build the spatial overlay pipelines; Paratransit Operations must update dispatch protocols; and ADA Advisory Councils must review temporary stop accessibility standards.

### 7.2 Budget and Timeline
* **Phase 1 (0-90 Days):** $150k–$300k. Focus on establishing batch GIS overlays, updating no-show policies, and deploying temporary signage kits.
* **Phase 2 (6-12 Months):** $500k–$1.2M. Focus on enterprise geo-event licensing (e.g., ArcGIS Velocity), deep API integrations with vendors like Trapeze or Ecolane, and automated GTFS-RT generation.

### 7.3 Risk Register
The primary risks include poor data quality from municipal permit systems and contractor non-compliance in the field. Agencies must mitigate these by establishing strict Data Use Agreements, enforcing liquidated damages for inaccessible work zones, and empowering road supervisors with rapid "red tag" authority to halt work if transit access is unsafe.

## References

1. *Work Zone Data Exchange (WZDx) | US Department of Transportation*. https://www.transportation.gov/av/data/wzdx
2. *Temporary Street Closures in the Work Zone Data Exchange (WZDx) Format | DataSF*. https://data.sfgov.org/Transportation/Temporary-Street-Closures-in-the-Work-Zone-Data-Ex/4ftp-yz2f
3. *City of Seattle Open Data portal - Seattle.gov*. https://data.seattle.gov/
4. *Enhancing Work Zone Data: From Permitting to Public Action - Causeway one.network*. https://us.one.network/news-insights/permitting-work-zone-data/
5. *Bus Stop & Street Design Guidelines | Bus Stops & Project Coordination | Engage PRT*. https://engage.rideprt.org/busstops/designguidelines
6. *
    eCFR :: 49 CFR Part 37 -- Transportation Services for Individuals with Disabilities (ADA)
  *. https://www.ecfr.gov/current/title-49/subtitle-A/chapter-I/part-37
7. *Part 37--Transportation Services for Individuals with Disabilities | FTA*. https://www.transit.dot.gov/regulations-and-guidance/civil-rights-ada/part-37-transportation-services-individuals-disabilities
8. *settlement agreement*. https://www.justice.gov/crt/case-document/file/1560731/dl
9. *ArcGIS Velocity | IoT Analytics | Real-Time Spatial Data*. https://www.esri.com/en-us/arcgis/products/arcgis-velocity/overview
10. *Making public transportation better. Together. - Optibus*. https://www.optibus.com/
11. *Trapeze Software – Passenger Transportation Management Solutions*. https://www.trapezegroup.com/
12. *Clever Devices – Intelligent Transportation Systems, ITS, Transit Technology Solutions*. https://cleverdevices.com/
13. *FTA Circular 4710.1 - Americans With Disabilities Act Guidance*. https://www.transit.dot.gov/sites/fta.dot.gov/files/docs/Final_FTA_ADA_Circular_C_4710.1.pdf
