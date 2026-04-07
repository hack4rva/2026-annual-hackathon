# Where US Cities Are Building Public Development Trackers (and How)

## Executive Summary

- **The "Stitch-Together" Model Prevails**: Accela + Legistar is the most common "public tracker" pattern, but true three-domain aggregation (zoning, permits, planning commission) often relies on cross-links rather than a single monolithic app. Colorado Springs publishes an Esri map of development applications updated every two weeks and sends users to Accela for project documents and to Legistar for Planning Commission agendas [1] [2]. 
- **Esri Dashboards as the Discovery Layer**: Dashboards fed by permitting systems (Accela/EnerGov) are emerging as the public discovery layer. Colorado Springs declares biweekly updates on its Experience Builder app [3], while Denver's Active Site Development Plan dashboard refreshes daily and links into e-permits [4].
- **Underutilized Native Features**: Accela portals already expose map/search capabilities that many cities underuse. Atlanta's Accela Planning module lets the public search planning cases and "Show on Map" to view case details [5]. 
- **EnerGov's Native GIS**: Tyler EnerGov's Citizen Self Service (CSS) natively embeds GIS search and a public map, but planning commission integration typically requires linking out to Legistar. Iowa City's EnerGov portal offers a Map and Calendar [6], while Richmond directs users to both EnerGov's Online Permit Portal and Legistar calendars [7].
- **Legistar-Anchored Models**: Legistar can anchor trackers if case IDs are carried through. Madison's "Current Development Proposals" page lists projects with legislative file IDs that click through to Legistar items, alongside an ArcGIS map of current projects [8].
- **Explicit Scopes Manage Expectations**: Cities are increasingly publishing explicit scopes and date coverage. Colorado Springs clearly states "applications submitted after January 1, 2024" and "map updated every 2-weeks" [1] [2].
- **ID-Based Integration Beats Live APIs**: The most reliable cross-system integration is ID-based. Legistar's OData API caps responses at 1,000 per call [9], and Accela enforces dynamic rate-limiting to protect platform stability [10]. Nightly ETL to ArcGIS is preferred over live API joins.
- **Implementation Risks**: Platform swaps and implementation risks are real. Manhattan Beach documented abandoning an Accela rollout and moving to Tyler EnerGov due to resourcing and scope issues [11].
- **Quick Wins**: Oklahoma City's single Accela portal lets the public search Permits, Planning, Subdivision & Zoning in one place without custom builds [12].
- **Document Availability Drives Trust**: Sacramento's Accela portal surfaces building and planning searches alongside property/zoning details [13]. Prioritizing the posting of plans and staff reports in the permit record is critical.

## What "Good" Looks Like — Three-Domain Public Trackers that Residents Can Actually Use

The most successful city trackers combine a searchable map (ArcGIS), a transaction system (Accela or EnerGov), and legislative hearings (Legistar) via shared IDs and visible cross-links.

### Colorado Springs (Accela + ArcGIS + Legistar) Proves the Stitch-Together Model

Colorado Springs serves as a prime exemplar of aggregating disparate systems into a cohesive public experience. The city utilizes an ArcGIS-powered Development Tracker map that is explicitly updated every two weeks to reflect new projects and status changes [1] [3]. The scope is clearly defined, showing applications submitted after January 1, 2024 [1]. 

Crucially, the map does not attempt to host all documents. Instead, it directs users to the Land Development Application Portal (powered by Accela) to view documents and track progress using the record number [2] [14]. For planning commission matters, the city provides direct links to the Legistar portal where the Planning Commission, Historic Preservation Board, and Downtown Review Board host their meetings and agendas [2] [15]. While building permits are not fully integrated into the same visual map, the clear cross-linking between ArcGIS, Accela, and Legistar creates a highly functional three-domain tracker.

### Madison (Legistar-Anchored with ArcGIS) Shows Legislative-First Discoverability

Madison, Wisconsin, takes a legislative-first approach. The city's "Current Development Proposals" page acts as the central hub, listing projects alongside their specific Legistar Legislative File IDs [8]. This allows users to click directly from a project summary into the Legistar system to view staff reports, meeting minutes, and upcoming Plan Commission or Common Council dates [8]. Madison pairs this list with an ArcGIS web map of current development projects [8]. While building permits are kept separate, this model excels at tracking the public hearing and zoning lifecycle.

### EnerGov Exemplars (Iowa City, Richmond, Kansas City) Using CSS + Legistar Linking

Tyler EnerGov implementations leverage the platform's native Citizen Self Service (CSS) portal, which includes built-in GIS mapping. Iowa City's CSS portal allows users to search public records, apply for permits, and explore an interactive map to see neighborhood activity [16] [6]. It also features a Calendar for public hearings [6]. 

Because EnerGov does not natively handle legislative agenda management, cities must bridge the gap to Legistar. Richmond, Virginia, achieves this by hosting a Planning Commission landing page that provides quick links to both the EnerGov Online Permit Portal and the Legistar Calendar [7]. Similarly, Kansas City utilizes its EnerGov-based "CompassKC" portal for plans and permits [17], running Legistar in parallel for legislative tracking.

## City Inventory — Verified Implementations Using Legistar, Accela, or EnerGov

Many cities successfully meet two of the three domains (zoning, permits, planning commission). Full three-domain aggregation is most often achieved via cross-links rather than a single unified system.

| City | Primary Platforms | Public URL / Portal | Domains Covered | Map / Database UI | Update Cadence & Integration Type |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Colorado Springs, CO** | Accela + ArcGIS + Legistar | coloradosprings.gov/developmenttracker | Planning apps, Permits (Accela), Agendas (Legistar) | ArcGIS Map + Accela DB | Updated every 2 weeks [1]; Cross-linked systems [2]. |
| **Denver, CO** | Accela + Power BI | denvergov.org/.../Active-SDP-Projects-Report | Site Development Plans, Zoning Permits | Power BI Dashboard | Data is updated daily [4]; Links to e-permits [4]. |
| **Atlanta, GA** | Accela + Legistar | aca-prod.accela.com/ATLANTA_GA | Planning Cases, Building Permits | Accela "Show on Map" | Native Accela portal search with map integration [5]. |
| **Sacramento, CA** | Accela | aca-prod.accela.com/sacramento | Building, Planning, Operating Permits | Accela DB | Native Accela portal; agendas separate [13]. |
| **Oklahoma City, OK** | Accela | access.okc.gov | Permits, Planning, Subdivision, Zoning | Accela DB | Unified Accela portal search [12]. |
| **Madison, WI** | Legistar + ArcGIS | cityofmadison.com/.../current-development-proposals | Land Use, Subdivisions, Agendas | ArcGIS Map + Legistar DB | Legislative files linked directly to Legistar [8]. |
| **Richmond, VA** | EnerGov + Legistar | rva.gov/planning-development-review/planning-commission | Plan of Development, Permits, Agendas | EnerGov CSS + Legistar | Portal search and agendas linked from central page [7]. |
| **Iowa City, IA** | EnerGov | egov.iowa-city.org/energovprod/selfservice | Urban Planning, Zoning, Building | EnerGov CSS Map | Native CSS map and calendar [16] [6]. |
| **Kansas City, MO** | EnerGov | kcmo.gov/?navid=256 | Plans, Permits | EnerGov CSS (CompassKC) | Native CSS portal [17]. |
| **Palo Alto, CA** | Accela + BuildingEye | aca-prod.accela.com/PALOALTO | Planning, Building, Public Works | Accela DB + BuildingEye Map | Accela portal [18] linked to external BuildingEye map [19]. |
| **Miami Beach, FL** | EnerGov | energovcss.miamibeachfl.gov/energovprod/selfservice | Permits, Plans, Code Cases | EnerGov CSS | Native CSS portal with links to Special Master agendas [20]. |

*Takeaway: The most comprehensive transparency is achieved when cities use ArcGIS or a central webpage to route users to the correct underlying system (Accela/EnerGov for documents, Legistar for hearings).*

## Integration Playbook — How to Aggregate Zoning, Permits, and Planning Items

To build a resilient public tracker, cities should rely on nightly ETL processes and shared public Case IDs rather than attempting fragile, real-time API joins across platforms.

### Step 1: Establish Authoritative IDs and Cross-Link Conventions

The foundation of a multi-domain tracker is a shared identifier. Cities must require staff to include the Accela or EnerGov record ID in all Legistar agenda items. Conversely, a reciprocal "Agenda Link" or "Legislative File ID" field should be added to the permit/case record in the land management system. This allows users to traverse seamlessly from a permit application to the planning commission hearing where it will be debated.

### Step 2: Data Plumbing — Nightly ETL Beats Live API Joins

Relying on live APIs to populate a public map introduces significant latency and stability risks. Accela enforces dynamic rate-limiting based on traffic patterns to ensure site stability, returning HTTP 429 errors if limits are exceeded [10]. Similarly, the Legistar Web API caps query replies at 1,000 responses and requires pagination [9]. 

Instead of live API calls, cities should utilize scheduled ETL (Extract, Transform, Load) processes. For example, Hartford downloads its Accela permit data to its Enterprise GIS database nightly [21], and Portland updates its AMANDA building permit metrics daily [22].

### Step 3: Public Discovery Layer — ArcGIS Dashboard with Filters and Scope Banners

The public interface should be an ArcGIS dashboard or Experience Builder app. Replicate Colorado Springs' best practice of explicitly stating the update cadence ("updated every 2-weeks") and the data scope ("applications submitted after January 1, 2024") directly on the splash screen [1] [3]. Provide intuitive filters by application status, record type, and meeting body.

### Step 4: UX Wayfinding — From Map to Permit to Agenda (and Back)

The map popup must serve as a router. Provide three obvious Calls to Action (CTAs):
1. **View Case Details**: Deep link to the Accela/EnerGov record.
2. **View Documents**: Direct link to the attachments tab in the citizen portal.
3. **View Upcoming Hearing**: Deep link to the Legistar calendar or specific legislative file.

## Platform-Specific Guidance — Accela vs. EnerGov vs. Legistar

Understanding the native capabilities of each platform dictates how the integration should be architected.

| Platform | Native Public Capabilities | Integration Strengths | Integration Weaknesses |
| :--- | :--- | :--- | :--- |
| **Accela Civic Platform** | Planning/Building search, record-level documents, inspections [23]. | Mature modules; "Show on Map" feature available natively [5]. | Requires significant configuration for public map polish; rate-limited APIs [10]. |
| **Tyler EnerGov** | Citizen Self Service (CSS) portal, fee estimator, calendar [6]. | Native Esri GIS integration [24]; robust map search [25]. | Hearing/agenda integration requires manual linking to external systems like Legistar. |
| **Granicus Legistar** | Public agendas, minutes, video streaming [26]. | OData API allows programmatic access to legislative histories [9]. | No native permit or spatial data; relies entirely on text/IDs for cross-referencing. |

*Takeaway: Do not try to force Legistar to be a map, or Accela to be an agenda manager. Let each system do what it does best and connect them via ArcGIS and shared IDs.*

## Data Governance, Cadence, and Scope Statements

Publishing explicit update cadences and coverage windows reduces the support burden and Freedom of Information Act (FOIA) volume. When a user knows a map only shows post-2024 data and updates biweekly (as seen in Colorado Springs [1]), they are less likely to submit support tickets for "missing" historical records. Clear scope statements build public trust by setting accurate expectations.

## Risk Register — Failure Cases and How to Avoid Them

Resource gaps and unclear scopes can derail implementations. The City of Manhattan Beach documented abandoning its initial Accela Automation implementation due to a lack of resources, insufficient scope of work, and changes in leadership, ultimately pivoting to Tyler EnerGov [11]. To avoid "platform swap" pitfalls, cities should stage deliverables—starting with basic public search and case detail pages before attempting complex GIS integrations and automated Legistar cross-links.

## KPIs and Operating Model

To ensure the tracker remains valuable, municipalities should monitor three core Key Performance Indicators (KPIs):
1. **Freshness**: The median lag time from an application submittal to its appearance on the public map (should align with the stated ETL schedule, e.g., 24 hours or 14 days).
2. **Completeness**: The percentage of mapped cases that have accessible public documents attached in Accela/EnerGov.
3. **Traversability**: The percentage of planning commission cases in Legistar that contain a valid, clickable Accela/EnerGov record ID.

## References

1. *Development Tracker - Overview*. https://www.arcgis.com/home/item.html?id=2950b70898c3461ab8dd6bc15db3fb7b
2. *Development Tracker | City of Colorado Springs*. https://coloradosprings.gov/developmenttracker
3. *Development Tracker*. https://arcg.is/0O4LeX
4. *Projects currently under site development plan review - City and County of Denver*. https://www.denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Community-Planning-and-Development/Plan-Review-Permits-and-Inspections/Zoning-Permits/Site-Development-Plan-Review/Active-SDP-Projects-Report
5. *Search for Planning Cases - Accela Citizen Access*. https://aca-prod.accela.com/ATLANTA_GA/Cap/CapHome.aspx?module=Planning&TabName=Planning
6. *Iowa City Citizen Self Service*. http://egov.iowa-city.org/energovprod/selfservice#/home
7. *Planning Commission | Richmond*. https://www.rva.gov/planning-development-review/planning-commission
8. *Current Development Proposals | Planning | DPCED | City of Madison, WI*. https://www.cityofmadison.com/dpced/planning/development/current-development-proposals/
9. *Examples - Legistar Web API - Granicus*. https://webapi.legistar.com/Home/Examples
10. *Accela V4 API Release Notes*. https://developer.accela.com/docs/construct_api_v4_rel_notes.html
11. *
	City of Manhattan Beach - File #: 18-0101
*. https://manhattanbeach.legistar.com/LegislationDetail.aspx?ID=3550434&GUID=7D1CC8A4-871B-4AD9-A4B2-AF72D5306D5F&FullText=1
12. *
	
        Accela Citizen Access
    
*. https://access.okc.gov/
13. *Sacramento Public Permit Portal - Accela Citizen Access*. https://aca-prod.accela.com/sacramento/default.aspx
14. *
	
        Accela Citizen Access
    
*. https://aca-prod.accela.com/COSPRINGS/Cap/CapHome.aspx?module=Planning&TabName=Home
15. *City of Colorado Springs - City Planning Commission*. https://coloradosprings.legistar.com/DepartmentDetail.aspx?ID=26376&GUID=03445EB2-ADC0-4E1E-A73D-8A0FF5E35326
16. *
	
    Permit Information | Iowa City, IA

*. https://www.icgov.org/government/departments-and-divisions/neighborhood-and-development-services/development-services/urban-planning/permit-information
17. *
	
    Compass KC - Online Plan and Permitting Services | CITY OF KANSAS CITY | OFFICIAL WEBSITE

*. https://www.kcmo.gov/?navid=256
18. *Accela Citizen Access User Guide*. https://www.paloalto.gov/files/assets/public/v/1/development-services/online-permitting-services/aca_guide.pdf
19. *Search for Records - Accela Citizen Access*. https://aca-prod.accela.com/PALOALTO/Cap/CapHome.aspx?module=Planning&TabName=Home
20. *City of Miami Beach - Civic Access Portal*. https://energovcss.miamibeachfl.gov/energovprod/selfservice
21. *Planning Permits 20200101 to Current - Dataset - Catalog - Data.gov*. https://catalog.data.gov/dataset/planning-permits-20200101-to-current
22. *Building Permit Details - Overview*. https://www.arcgis.com/home/item.html?id=8b4b9cb11fe44c9289e59c74d3f0b6d7
23. *Building / Permitting - Accela Government Software*. https://www.accela.com/solutions/building/
24. *
	Esri-Based GIS Software | Tyler Technologies
*. https://www.tylertech.com/products/enterprise-permitting-licensing/esri-gis
25. *EnerGov Citizen Self Service User Guide*. https://www.goosecreeksc.gov/sites/default/files/PIO/CSS%20User%20Guide%202020.1.pdf
26. *Agenda LE (Legistar Agenda Management) | Granicus*. https://granicus.com/product/agenda-management-legistar/
