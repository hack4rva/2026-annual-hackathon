# From Closures to Accessible Routes: A practical path for cities to digitize ADA-compliant pedestrian detours

## Executive Summary
- **No city is yet publishing routable, ADA-attributed pedestrian detour geometries from permits**: Across leading jurisdictions, we found closures and permit layers (e.g., NYC "Street Closures due to construction" with CSV/JSON APIs; Chicago "Transportation Dept. Permits – Street Closures"; Austin's WZDx feed; Seattle Street Use Permits), but no public, machine-readable "detour route" LineStrings with ADA fields [1] [2] [3] [4]. Seattle's Accessible Route Planner shows closures, slopes, curb ramps, and APS, but not approved detour geometries from Traffic Control Plans (TCPs) [5]. 
- **Physical detour obligations have tightened; digital notice is now implicitly governed**: MUTCD 11th Ed Part 6 mandates that SIDEWALK CLOSED CROSS HERE signs include audible information devices and that alternate routes be detectable [6]. Access Board PROWAG (final) requires alternate pedestrian access routes and proximity-actuated audible/non-visual signage [7]. DOJ's 2024 Title II web rule requires city web/apps to conform to WCAG 2.1 AA, with continuing effective-communication duties under 28 CFR 35.160 [8] [9].
- **Today's data standards are road-first; a pedestrian detour gap persists**: WZDx (v4.2) widely powers roadway work zone/closure feeds (e.g., Austin; SF Bay 511 regional WZDx) and includes DetourRoadEvent—but it is oriented to vehicles [10] [11] [12]. OpenSidewalks defines pedestrian attributes (width, surface, incline, curb ramps, tactile paving), not detour operations [13] [14]. 
- **PDF traffic control plans are a failure mode for accessibility and operations**: Many jurisdictions still circulate static TCP PDFs that are non-routable and often not accessible [15] [16]. 
- **Distribution channels strongly favor drivers, not pedestrians**: Cities can already push road closures into Apple Maps/TomTom via Esri's Road Closures solution and into Waze via Partner Feeds [17] [18] [19]. Equivalent rails for sidewalks do not exist. 
- **Seattle shows the "best current" practice without true detour routes**: The Seattle Accessible Route Planner displays slopes, curb ramps, APS, construction zones, and temporary closures [5]. SDOT's Director's Rule 10-2015 codifies ADA-compliant detour/reroute standards and signage [20]. 
- **Field verification must be designed into the data pipeline**: MUTCD requires agencies to regularly inspect temporary traffic control (TTC) so effective pedestrian accommodation is maintained [21]. 
- **There is no legal mandate to publish digital detour routes, but risk rises if you don't**: Laws require safe, accessible physical accommodation and effective communication [22]. DOJ's 2024 rule means if you publish detour info, it must be WCAG-compliant, and on request you must provide accessible alternatives for any exempt content [9].
- **Quick wins exist with today's tools**: Many agencies already publish permit/closure layers and WZDx feeds and run ArcGIS hubs [11] [17]. 
- **A pragmatic schema is within reach**: OpenSidewalks already encodes critical accessibility fields (width, surface, incline, tactile paving; curb ramp presence at nodes) [14]. 

## State of Practice: Cities publish closures, not routable ADA detours

Leading US cities expose permit/closure data and even accessible asset layers, but no verified public dataset publishes ADA-attributed, routable pedestrian detour geometries derived from work-in-street permits.

### Current municipal data landscape reveals a pedestrian routing gap

| Jurisdiction | What's published | Format/API | Update cadence | ADA attributes in data? | Publishes routable pedestrian detour geometry? |
|---|---|---|---|---|---|
| **Seattle (SDOT)** | Street Use Permits; Accessible Route Planner showing slopes, curb ramps, APS; curb-ramp dataset [23] [2] [5] | ArcGIS FeatureServices; Open Data; web map | Daily/weekly | Asset layers (curb ramps, slopes), not detour ADA | No (detours not published as routable lines) |
| **NYC DOT/DOB** | Street closures by block; active sidewalk sheds; OCMC stipulations [24] [4] [25] | CSV/JSON APIs; map | Daily | No ADA detour fields | No |
| **Chicago (CDOT)** | Street closure permits filter; Rules require ADA temporary walkways [3] [26] | Socrata APIs; PDF rules | Daily | Not in data; ADA in manuals | No |
| **Austin (ATD)** | Roadway Work Zones; WZDx GeoJSON feed [1] [27] | WZDx GeoJSON | Continuous | No pedestrian ADA fields | No |
| **DC (DDOT)** | Permit Locator map; TTC manual with pedestrian detour standards [28] [29] | Web map; PDF | Rolling | ADA in manuals | No |
| **SF Bay 511** | Regional WZDx feed incl. detours (vehicle) [30] | WZDx | Continuous | Road-focused | No |

While cities like Chicago and NYC publish robust datasets of street closures and permits, these datasets lack the specific geospatial routing and ADA attributes required for a disabled pedestrian to navigate around a work zone [3] [4]. 

### Seattle's layered approach represents the current ceiling

Seattle represents the closest "good" practice. The Seattle Accessible Route Planner (launched in 2016) provides views of different pedestrian features, their locations, and physical conditions, identifying the presence of sidewalks, curb ramps, and APS signals [5]. It also shows approximate street slopes, locations of signalized and marked crosswalks, and construction zones or temporary closures to assist in route planning [5]. However, while SDOT's Director's Rule 10-2015 strictly defines physical ADA detour requirements (e.g., 4-foot minimum widths, detectable edges, temporary ramps), the city does not publish the actual approved detour geometries as machine-readable, routable lines [20] [31].

## Requirements landscape: What the law and standards really require

Physical provisioning of ADA-compliant alternate routes and non-visual signage is mandatory. While digital detour publication isn't explicitly mandated, any web/app content provided by a city must be accessible (WCAG 2.1 AA) and meet effective communication duties.

### MUTCD and PROWAG mandate physical accessibility and non-visual signage

The MUTCD 11th Edition (Part 6) states that when existing pedestrian facilities are disrupted, closed, or relocated in a TTC zone, the temporary facilities shall be detectable and include accessibility features consistent with the features present in the existing pedestrian facility [6]. Furthermore, SIDEWALK CLOSED CROSS HERE signs shall include audible information devices to provide adequate communication to pedestrians with vision disabilities [6]. 

The Access Board's Public Right-of-Way Accessibility Guidelines (PROWAG) final rule reinforces this, requiring that when an entity closes a pedestrian access route for construction, it must provide a temporary alternate pedestrian access route with basic accessible features [7]. PROWAG also requires that jurisdictions provide signs identifying alternate pedestrian access routes in advance of decision points, and that proximity actuated audible signs or other non-visual means of conveying the information on the signs must be provided within the public right-of-way [7].

### DOJ Title II rules govern digital communication of detours

Under Title II of the ADA, state and local governments must provide individuals with disabilities with effective communication, reasonable modifications, and an equal opportunity to participate in or benefit from their services, programs, and activities [9] [22]. The DOJ's 2024 final rule sets a specific technical standard that state and local governments must follow to meet their existing obligations under Title II for web and mobile app accessibility: the Web Content Accessibility Guidelines (WCAG) Version 2.1, Level AA [8] [9]. 

### The risk of inaccessible digital detours

There is no explicit federal law stating a city *must* publish a digital map of pedestrian detours. However, if a city *does* publish closure or detour information digitally (e.g., on a web map or via PDF traffic control plans), that information must conform to WCAG 2.1 AA [8]. If a user requests an accessible format of an exempt document, the city must still address the person's request under its existing effective communication obligations in 28 CFR 35.160 [8].

## Data standards and gaps: How to encode accessible detours

Use WZDx for vehicle impacts now, but define a minimal, open schema for pedestrian detours by combining OpenSidewalks attributes with permit/TCP geometry.

### Existing standards are vehicle-centric or lack temporary routing

The Work Zone Data Exchange (WZDx) Specification enables infrastructure owners and operators to make harmonized work zone data available for third-party use [11]. While WZDx includes a `DetourRoadEvent` object, it is primarily designed for vehicular traffic and lacks the granular ADA attributes required for pedestrian routing [12] [32]. 

Conversely, the OpenSidewalks schema is a comprehensive and accessibility-forward specification for mapping sidewalks [33]. It includes critical fields such as width, surface material, incline (slope), and tactile paving [13] [14]. However, OpenSidewalks is designed for permanent infrastructure, not dynamic, temporary work zone detours.

### Defining a Minimum Viable "Pedestrian Detour" schema

To bridge this gap, cities should prototype a "Pedestrian Detour" extension that joins OpenSidewalks attributes to detour geometries. A minimum viable schema should include:
- **Geometry**: LineString representing the exact detour path.
- **Core Metadata**: detour_id, permit_id, start/end datetime.
- **ADA Attributes (from OpenSidewalks)**: min_clear_width (meters), surface (e.g., asphalt, concrete, wood), max_grade (%), cross_slope (%), curb_ramps_at_crossings (yes/no), tactile_paving (yes/no) [13] [14].
- **Temporary TTC Attributes**: detectable_edging_type, audible_sign_present (yes/no), lighting (yes/no).
- **Verification**: inspection_status, last_verified_ts.

### Validation and ground truth require field inspection

Data is only as good as its physical implementation. The MUTCD notes that the highway agency in charge of the TTC zone should regularly inspect the activity area so that effective pedestrian TTC is maintained [21]. Digital detour data must be tied to field verification, requiring contractors to submit photo proof of ADA compliance (e.g., temporary ramps, detectable edging) before the digital route is marked as "active" and published to the feed.

## Tooling and distribution: Getting accessible detours to end users

Combine existing city GIS and 511/WZDx for closures with new accessible channels for pedestrians, and build partnerships to reach visually impaired users.

### City-operated channels must meet WCAG standards

Cities can leverage their existing Open Data portals and ArcGIS hubs to publish this data. For example, the District of Columbia uses a Public Space Permit Locator enabled by DDOT's GIS to give the public the ability to view permits on an interactive map [28]. Any web map or dashboard used to display pedestrian detours must be audited for WCAG 2.1 AA compliance, ensuring screen-reader compatibility and keyboard navigability [8].

### Third-party navigation ingestion favors vehicles

Currently, Esri's Road Closures solution allows ArcGIS users to easily share road closure updates directly with consumer mapping providers including Apple Maps and TomTom [18]. Waze also ingests planned and real-time road closures via its Partner feed [19]. However, these pipelines are built for road closures, not sidewalk detours. Cities must actively partner with these providers to establish ingestion pipelines for pedestrian pathways.

### Accessibility-focused wayfinding apps offer immediate integration

Platforms like AccessMap (developed by the Taskar Center for Accessible Technology) provide directions using different filters, such as the slope of the roadway/sidewalk or the presence of curb ramps [5]. Cities should build APIs specifically designed to feed temporary detour geometries and ADA attributes directly into tools like AccessMap, Lazarillo, or GoodMaps. Additionally, tools like the Mobile Accessible Pedestrian System (MAPS) incorporate geospatial databases with Bluetooth beacons to provide navigation assistance and situational awareness to visually impaired users, which could be leveraged to communicate altered navigation paths near construction sites [34].

## City case studies: Strengths, gaps, and readiness

Multiple cities have the building blocks, but none publishes ADA detours. Prioritizing 1–2 corridors per city for a pilot is the most viable path forward.

### Set A: Seattle, DC, NYC, San Francisco

- **Seattle**: SDOT has the most mature asset data (Accessible Route Planner, curb ramp datasets) and strong physical ADA rules (Director's Rule 10-2015), but lacks routable detour geometries [20] [5].
- **Washington, DC**: DDOT's Temporary Traffic Control Manual has strict pedestrian detour standards and requires advance notification of sidewalk closures [29]. They publish construction permits via Open Data, but do not publish the detour geometries [35].
- **New York City**: NYC DOT processes over 700,000 construction permits annually and publishes street closures and active sidewalk sheds [36] [4] [25]. OCMC stipulations require maintaining a minimum 5-foot clear pedestrian walkway, but digital routing is absent [24].
- **San Francisco**: SFMTA requires Special Traffic Permits for sidewalk closures that do not provide a continuous 4-foot wide clear path of travel [37]. The region publishes a WZDx feed via 511, but it is vehicle-focused [30].

### Set B: Los Angeles, Chicago, Boston, Austin

- **Los Angeles**: LADOT's Transportation Assessment Guidelines require projects to evaluate the temporary loss of ADA pedestrian access to transit stations or stops during construction [38]. 
- **Chicago**: CDOT publishes street closure permits and requires temporary pedestrian walkways to meet ADA guidelines (minimum 4 feet clear width), but does not publish the detour paths [3] [26].
- **Boston**: The City of Boston and the MBTA provide detailed accessibility information during transit closures (including accessible shuttle buses and vans), but citywide sidewalk detours are not digitized [39].
- **Austin**: Austin publishes a WZDx JSON feed for roadway work zones, demonstrating the technical capability to publish standardized feeds, making it a prime candidate for a pedestrian extension pilot [1].

## Implementation roadmap: From permit to published, accessible detour

A city can stand up a compliant, routable pedestrian detour program in 9–12 months with a 90-day Phase 0.

### End-to-end workflow requires digital TCPs

The workflow must shift from static PDFs to digital data capture. During the permit intake process, contractors must submit a digital Traffic Control Plan that includes the pedestrian detour geometry (LineString) and required ADA attributes. This data undergoes automated validation (checking topology and ADA minima) before reviewer approval. Once approved and active, the data is published as an ArcGIS FeatureService and GeoJSON feed, triggering notifications to subscribed users and assistive apps.

### Data model and reliability KPIs

Cities should target strict Service Level Expectations (SLEs) for this data. Key Performance Indicators (KPIs) should include:
- Time-to-publish: <24 hours from permit approval/activation.
- Data completeness: ≥95% of detours contain complete ADA fields (width, surface, slope).
- Field verification: ≥90% of detours verified by inspectors within 48 hours of deployment.
- Accessibility: ≥98% pass rate on WCAG 2.1 AA automated scans for web maps.

### Field verification and change management

Because work zones are dynamic, the digital feed must reflect ground truth. Inspectors should use mobile GIS apps to verify that the physical detour matches the digital attributes (e.g., checking temporary ramps and detectable edging). Contractors should be required to upload photo proof of the deployed TTC setup. Any changes in the field must force a republishing of the data feed.

## Risks and mitigations: Legal, operational, and equity

### Legal and compliance risks

The primary legal risk is publishing digital detour information that fails to meet WCAG 2.1 AA standards, violating DOJ Title II rules [8]. Mitigate this by conducting regular accessibility audits of web maps and ensuring that all critical detour information is available in text format (for screen readers) alongside the visual map.

### Data quality and safety risks

Publishing inaccurate detour data could route a wheelchair user or visually impaired pedestrian into a hazardous construction zone or an impassable path. Mitigate this by implementing strict inspection SLAs, adding a "last_verified_ts" timestamp to the data schema, and building a "kill-switch" to instantly withdraw a detour from the public feed if an inspector flags it as unsafe.

### Language access and equity

Effective communication requires reaching all users. Ensure that text descriptions of detours (e.g., "Sidewalk closed, turn left and cross Main Street") are available in multiple languages and can be accessed via SMS or a 311 voice hotline for users without smartphones.

## 90-Day action plan: Quick wins to de-risk and learn

- **Weeks 1–4**: Inventory existing closure/permit data. Launch a WCAG audit of current public-facing maps. Draft the Minimum Viable "Pedestrian Detour" schema. Convene a disability advisory group and select a single high-impact corridor for a pilot.
- **Weeks 5–8**: Add existing closure overlays to an accessible web map. Enable SMS/email alerts with WCAG-compliant templates. Update permit requirements for the pilot corridor to mandate digital TCP detour geometry and ADA fields.
- **Weeks 9–12**: Publish the first detour FeatureService. Test data ingestion with an accessibility partner like AccessMap or OpenSidewalks. Document Standard Operating Procedures (SOPs) for inspectors and brief city leadership on the pilot's success metrics.

## References

1. *Work Zone Data Exchange (WZDx) JSON Feed | Open Data | City of Austin, Texas*. https://data.austintexas.gov/Transportation-and-Mobility/Work-Zone-Data-Exchange-WZDx-JSON-Feed/d9mm-cjw9
2. *SDOT GIS Datasets | City of Seattle Open Data portal*. https://data.seattle.gov/Transportation/SDOT-GIS-Datasets/jyjy-n3ap
3. *Transportation Department Permits - Street Closures | City of Chicago | Data Portal*. https://data.cityofchicago.org/Transportation/Transportation-Department-Permits-Street-Closures/jdis-5sry
4. *Street Closures due to construction activities by Block - Catalog*. https://catalog.data.gov/dataset/street-closures-due-to-construction-activities-by-block
5. *Seattle Accessible Route Planner - Transportation | seattle.gov*. https://www.seattle.gov/transportation/projects-and-programs/programs/ada-program/accessible-route-planner
6. *MUTCD 11th Edition - Part 6*. https://mutcd.fhwa.dot.gov/pdfs/11th_Edition/part6.pdf
7. *Preamble*. https://www.access-board.gov/prowag/preamble.html
8. *
      Federal Register
       :: 
      Nondiscrimination on the Basis of Disability; Accessibility of Web Information and Services of State and Local Government Entities
    *. https://www.federalregister.gov/documents/2024/04/24/2024-07758/nondiscrimination-on-the-basis-of-disability-accessibility-of-web-information-and-services-of-state
9. *Fact Sheet: New Rule on the Accessibility of Web Content and Mobile Apps Provided by State and Local Governments | ADA.gov*. https://www.ada.gov/resources/2024-03-08-web-rule/
10. *Work Zone Data Exchange (WZDx) - Work Zone Management - FHWA Office of Operations*. https://ops.fhwa.dot.gov/wz/wzdx/index.htm
11. *Work Zone Data Exchange (WZDx) | US Department of Transportation*. https://www.transportation.gov/av/data/wzdx
12. *TDx/spec-content/objects/DetourRoadEvent.md at main · usdot-jpo-ode/TDx · GitHub*. https://github.com/usdot-jpo-ode/TDx/blob/main/spec-content/objects/DetourRoadEvent.md
13. *GitHub - OpenSidewalks/OpenSidewalks-Schema: Repository for the draft proposal of the OpenSidewalks schema · GitHub*. https://github.com/OpenSidewalks/OpenSidewalks-Schema
14. *OpenSidewalks Schema - Taskar Center for Accessible Technology*. https://taskarcenteratuw.github.io/tcat-wiki/opensidewalks/schema/
15. *Public Works Traffic Control Plan: Partial Alley Closure*. https://www.littletonco.gov/files/sharedassets/public/public-works/projects-docs-and-images/traffic-control-plans/alley-partial-all-alleys.pdf
16. *Road Closure Permit Traffic Control Plan (PDF)*. https://www.contracosta.ca.gov/DocumentCenter/View/1852/Road-Closure-Permit-Traffic-Control-Plan-PDF
17. *Road Closures - ArcGIS Solutions*. https://www.arcgis.com/apps/solutions/road-closures
18. *Esri Helps Bring Up-to-Date Road Closure Information To Consumer Mapping Apps - Esri*. https://www.esri.com/about/newsroom/announcements/esri-helps-bring-up-to-date-road-closure-information-to-consumer-mapping-apps
19. *Road closure information - Waze*. https://developers.google.com/waze/data-feed/road-closure-information
20. *Fetched web page*. https://www.seattle.gov/Documents/Departments/SDOT/About/DocumentLibrary/DirectorsRules/SDOTDR%2010-2015Signed.pdf
21. *Chapter 6D - MUTCD 2009 Edition - FHWA*. https://mutcd.fhwa.dot.gov/htm/2009/part6/part6d.htm
22. *ADA Requirements: Effective Communication*. https://www.ada.gov/resources/effective-communication/
23. *Curb Ramps | City of Seattle Open Data portal*. https://data.seattle.gov/dataset/Curb-Ramps/wraq-yxwb
24. *NYC Department of Transportation Office of Permit Management*. https://documents.dps.ny.gov/public/Common/ViewDoc.aspx?DocRefId=%7B805C9092-0000-CF1F-ABA6-3B0E44D46E13%7D&DocTitle=Empire%20Wind%201%2024-1007%20DOT%20Permits%209.14.2024%20to%2010.13.2024
25. *Sidewalk Sheds | NYC Open Data*. https://data.cityofnewyork.us/Housing-Development/Sidewalk-Sheds/2jy7-cddj
26. *PLAN PERMIT CONSTRUCT COMPLY*. https://www.chicago.gov/content/dam/city/depts/cdot/Construction%20Guidelines/2019/2019_CDOT_Rules_and_Regs_101819.pdf
27. *Roadway Work Zones | Open Data | City of Austin, Texas*. https://data.austintexas.gov/Transportation-and-Mobility/Roadway-Work-Zones/qyfh-gwei
28. *Permit Applications for Use in Public Spaces - DDOT - DC.gov*. https://ddot.dc.gov/page/permit-applications-use-public-spaces
29. *D.C. Temporary Traffic Control Manual - DDOT*. https://ddot.dc.gov/sites/default/files/dc/sites/ddot/publication/attachments/ddot_work_zone_temporary_traffic_control_manual_2006.pdf
30. *511 Open Data | 511.org*. https://511.org/open-data
31. *Accessible Temporary Routes Provide Safe Pathways - SDOT Blog*. https://sdotblog.seattle.gov/2015/11/17/accessible-temporary-routes-provide-safe-pathways/
32. *GitHub - usdot-jpo-ode/wzdx: The Work Zone Data Exchange (WZDx) Specification aims to make harmonized work zone data provided by infrastructure owners and operators (IOOs) available for third party use, making travel on public roads safer and more efficient through ubiquitous access to data on work zone activity. · GitHub*. https://github.com/usdot-jpo-ode/wzdx
33. *OpenSidewalks - The Taskar Center for Accessible Technology*. https://tcat.cs.washington.edu/opensidewalks/
34. *Chapter 2: Shared Streets: Accessible Shared Streets: Notable Practices and Considerations for Accommodating Pedestrians with Vision Disabilities | FHWA*. https://highways.dot.gov/safety/pedestrian-bicyclist/safety-tools/chapter-2-shared-streets-accessible-shared-streets-notable
35. *Construction Permits in 2024 | Open Data DC*. https://opendata.dc.gov/datasets/DCGIS::construction-permits-in-2024
36. *3.0 Permits & Approvals*. https://streetworksmanual.nyc/book/export/html/142
37. *Regulations for Working in San Francisco Streets*. https://www.sfmta.com/sites/default/files/reports-and-documents/2022/05/blue_book_8th_ed_accessible_rev_5-2022_v3.7.4.pdf
38. *Transportation Assesment Guidelines | LADOT*. https://ladot.lacity.gov/sites/default/files/documents/2020-transportation-assessment-guidelines_final_2020.07.27_0.pdf
39. *Accessibility During MBTA Closures | Boston.gov*. https://www.boston.gov/departments/transportation/accessibility-during-mbta-closures
