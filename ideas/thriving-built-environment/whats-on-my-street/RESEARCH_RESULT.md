# One-Stop Project Lookups: What’s Real, What Works, and How to Build It

## Executive Summary
True one-stop "address-based" infrastructure aggregators are exceptionally rare. Most municipalities deliver fragmented, partial views rather than a unified interface combining Capital Improvement Program (CIP) projects, paving schedules, utility work, and state Department of Transportation (DOT) projects. For example, Boston’s Citywide Project Tracker explicitly notes that it does not include Commonwealth of Massachusetts projects [1]. Denver exposes permits and projects via separate ArcGIS Hub items [2], and San Diego splits CIP and resurfacing into distinct dashboards [3]. Only Seattle and Philadelphia approach multi-source breadth in a single entry point. 

To succeed, cities must choose between two primary architectural models: centralized data-entry coordination (like Seattle) or automated API aggregation (like Philadelphia). Centralized intake maximizes coverage across organizational silos—including private utilities—by mandating data entry, while automated aggregation maximizes speed to launch by leveraging existing GIS feeds. Regardless of the model, achieving Web Content Accessibility Guidelines (WCAG) 2.1 AA compliance by the April 2026 federal deadline requires significant remediation, as map-based interfaces are not inherently accessible to screen readers or keyboard navigation [4] [5].

## Landscape and Benchmarks
The current landscape of municipal project trackers is dominated by partial implementations. While many cities have robust open data portals, few have successfully merged disparate infrastructure datasets into a single, citizen-facing address search.

### Comparative Matrix: Current US Implementations

| City / Tool | Address Search | CIP | Paving | Utility / ROW | State DOT | Update Cadence | Notable Features |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Philadelphia** (StreetSmartPHL) | Yes | Yes | Yes | Yes | No | Hourly [6] | Aggregates 16+ layers via ArcGIS FeatureServer [7]. |
| **Seattle** (Coordinate / dotMaps) | Yes | Yes | Yes | Yes | Yes | Continuous | Centralized intake mandated for work planned ≥6 months [8]. |
| **Boston** (Citywide Project Tracker) | Yes | Yes | Yes | No | No | Periodic | Tracks 216+ projects; explicitly excludes state projects [1]. |
| **San Diego** (CIP / Street Overlay) | Yes | Yes | Yes | No | No | Monthly | Split into separate dashboards for CIP and paving [3]. |
| **Denver** (Open Data / Hub) | Yes | Yes | Yes | Yes | No | Daily | Highly detailed permit data (331k+ records) but lacks unified UI [9]. |
| **New York City** (Various Portals) | Yes | Yes | Yes | Yes | Yes | Varies | Highly fragmented across DOT, DDC, and Capital Planning [10] [11] [12]. |

### City Deep-Dives

**Philadelphia — StreetSmartPHL**
Philadelphia's StreetSmartPHL relies on an automated ArcGIS aggregation model. The platform refreshes application data hourly [6] and connects residents to near real-time information related to permits, paving, snow plowing, and trash collections [6]. The underlying ArcGIS FeatureServer exposes at least 16 distinct layers, including street closures, milling lists, paving plans, and sanitation vehicle status [7]. While highly automated, public WCAG conformance statements for the specific map application are not readily available.

**Seattle — Project & Construction Coordination Map (Coordinate/dotMaps)**
Seattle utilizes a centralized intake model driven by governance. By municipal code, agencies performing work in the right-of-way planned at least six months in advance must enter their project information into the Coordinate application [8]. This creates a comprehensive public map displaying construction projects, events, moratoriums, and permit restrictions [13]. This mandated approach is highly effective at capturing private utility work and state DOT projects that typically evade automated API pulls.

**Boston — Citywide Project Tracker**
Boston’s public-facing Citywide Project Tracker allows residents to filter 216+ City-led projects by neighborhood, phase, and type [1]. However, it explicitly excludes Commonwealth of Massachusetts projects [1] and does not aggregate live utility permits. Internally, Boston's Analytics Team built "Building Intelligence," which successfully integrated seven distinct data sources (permits, violations, assessing, building plans, hydrants, and CAD data) by standardizing on Street Address Management (SAM) identifiers [14].

**San Diego — CIP Project Info & Street Overlay**
San Diego offers robust transparency but splits the user experience. The city provides a CIP Map Viewer for capital projects and a separate Street Overlay Tracker for resurfacing [3]. While both support address search, they require users to check multiple dashboards to get a complete picture of neighborhood infrastructure work.

**Denver — Separate ArcGIS Hub Datasets**
Denver maintains excellent open data, including a Street Occupancy Permits dataset updated daily with over 331,000 records [9]. However, the city lacks a single, unified address-based aggregator that combines these permits with CIP and state DOT projects into one interface.

**New York City — Fragmented Ecosystem**
NYC offers a rich but fragmented ecosystem. Users must navigate separate tools like the DOT Street Works Map for permits [10], NYCityMap for DDC projects [11], and the Capital Planning Explorer [12]. There is no single "one-stop" address lookup that aggregates all these sources.

## Architecture Choices and Tradeoffs
Cities must choose between two primary architectural patterns, each with distinct operational requirements.

### Centralized Intake (Seattle Model)
This model requires all actors (city departments, private utilities, state agencies) to log their planned work into a central portal (e.g., Coordinate). 
* **Pros:** Maximizes coverage of private utilities and state DOTs; enables proactive conflict resolution and schedule optimization.
* **Cons:** Requires manual data entry; relies heavily on compliance and enforcement overhead.
* **Pre-reqs:** Strong municipal ordinances (like Seattle's SMC 15.32.050 [8]), designated agency leads, and strict auditing.

### Automated Aggregation (Philadelphia Model)
This model uses ETL pipelines to pull data from existing departmental systems (e.g., Cityworks, Accela) into a unified GIS presentation layer.
* **Pros:** Faster to launch; leverages existing open data and GIS infrastructure; highly scalable.
* **Cons:** Often misses private utility work and state projects; requires heavy deduplication and QA burden.
* **Pre-reqs:** A canonical address spine (like Boston's SAM [14]), robust APIs, and active monitoring for source drift.

## Accessibility Plan
Meeting WCAG 2.1 AA compliance by the April 2026 federal deadline is a critical risk factor for map-heavy applications. 

### Platform Posture and Gaps
Interactive maps are not inherently accessible [4]. Esri's Web AppBuilder and Experience Builder documentation explicitly state that certain interactions, such as map pop-ups, drawing tools, and time sliders, are not supported for keyboard navigation or screen readers [5] [15]. Seattle's own accessibility VPAT notes that data visualizations and map widgets may not be fully perceivable for users without vision or perception of color [4].

### Remediation Blueprint
To achieve compliance, cities must pair every map interface with accessible alternatives. This includes providing synchronized, filterable data tables that support keyboard focus, offering raw data downloads (CSV/JSON), and ensuring high-contrast themes (minimum 4.5:1 for text) [16]. Cities must also publish an Alternate Access Plan and an app-level Voluntary Product Accessibility Template (VPAT).

## Data Source Inventory and Governance
Without strict governance, automated aggregators quickly suffer from stale data and duplicate records. 

### Source Register Template

| Source Name | System / Owner | Endpoint Type | Refresh Cadence | Canonical ID | QA Checks |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Street Closures | DOT Permitting | ArcGIS REST | Hourly | Permit ID | Null geometry check |
| Capital Projects | Public Works | OData / API | Monthly | Project UUID | Phase validation |
| Paving Schedule | Asset Mgmt | CSV Export | Weekly | Street Segment | Date range logic |
| Utility Work | Private Utility | Manual Entry | Continuous | Address / SAM | Conflict detection |

### Cadence and QA
Data freshness varies wildly by source. Permits may update hourly [6], while capital projects update monthly or quarterly. ETL pipelines must utilize canonical identifiers (like UUIDs or standardized address IDs) to merge records and prevent duplication [17].

## ETL and Orchestration
Moving from brittle, point-to-point feeds to reliable pipelines requires enterprise-grade ETL tools.

### Reference Pipelines
A standard pipeline extracts data from source systems (e.g., Accela, Cityworks), transforms it in a staging geodatabase (aligning schemas and attaching canonical IDs), and loads it into published web layers (ArcGIS Feature Services). 

### Tooling Choices
Municipalities frequently utilize FME (Safe Software) or ArcGIS Notebooks (Python) to automate these workflows [17]. These tools allow for advanced spatial deduplication and automated alerting if a source feed fails or schema changes unexpectedly.

## Partnerships and Policy
Technical integration is secondary to legal and policy authority when dealing with external entities.

### Agreements and Minimum Viable Data
To integrate private utilities (e.g., telecom, gas) and state DOTs, cities must establish formal Memorandums of Understanding (MOUs). These agreements should define the "minimum viable data" required: location geometry, estimated start/end dates, project type, and a public contact point.

### Compliance and Incentives
Coverage follows authority. Cities should tie data-sharing compliance to permit approvals, denying street excavation permits to entities that fail to log their long-term projects in the central coordination system [8].

## Implementation Roadmap

### Phase 1 (90 days): MVP Shell with City Feeds
Launch a unified map shell overlaying city-owned data: active street closures, paving schedules, and municipal CIP projects. Implement a canonical address search, publish the source register, and provide accessible data tables alongside the map.

### Phase 2 (90–180 days): Utility Integration and QA
Execute MOUs with major local utilities. Integrate their planned work via automated API pulls or mandated central intake. Implement automated QA dashboards to monitor data freshness and publish an app-level accessibility conformance report.

### Phase 3 (180–360 days): State DOT and Optimization
Integrate state DOT projects via regional open data portals. Roll out advanced conflict-resolution workflows to detect overlapping projects (e.g., a utility trenching a newly paved road) and establish a public feedback loop for data corrections.

## Risk Register and Mitigations
* **Stale Data:** Mitigate by implementing automated ETL monitoring that alerts data stewards when a feed misses its refresh SLA.
* **Accessibility Failures:** Mitigate by designing "accessible-first" data tables that mirror map content and conducting regular audits using tools like aXe [16].
* **Missing External Data:** Mitigate by codifying data-sharing requirements into municipal right-of-way permitting ordinances.
* **Address Mismatches:** Mitigate by forcing all incoming data through a centralized geocoder tied to a master Street Address Management (SAM) database [14].

## Appendices

### Appendix A — Detailed City Snapshots
* **Philadelphia:** StreetSmartPHL aggregates 16+ layers via ArcGIS FeatureServer, updating hourly [7] [6].
* **Seattle:** Coordinate/dotMaps relies on SMC 15.32.050 to mandate project entry for work planned 6+ months out [8].
* **Boston:** Citywide Project Tracker covers 216+ projects but excludes state work [1].
* **Denver:** Highly detailed open data (331k+ street occupancy permits) but lacks a unified UI [9].

### Appendix B — Sample MOUs and Steward Roles
Data stewards must be explicitly named for each integrated layer. MOUs with external utilities must specify data formats (e.g., GeoJSON, Esri REST), update frequencies, and liability disclaimers regarding project schedule accuracy.

## References

1. *Citywide Project Tracker | Boston.gov*. https://www.boston.gov/departments/boston-digital-service/project-search
2. *Open Data Catalog*. https://data.denvergov.org/
3. *CIP Project Information | City of San Diego Official Website*. https://www.sandiego.gov/cip/project-info
4. *Web Accessibility | seattle.gov*. https://www.seattle.gov/about-our-digital-properties/web-accessibility
5. *Accessibility support—ArcGIS Web AppBuilder | ArcGIS Developers*. https://developers.arcgis.com/web-appbuilder/guide/accessibility-support.htm
6. *StreetSmartPHL*. https://streetsmartphl.phila.gov/
7. *StreetSmartPHL (FeatureServer)*. https://services.arcgis.com/fLeGjb7u4uXqeF9q/arcgis/rest/services/StreetSmartPHL/FeatureServer
8. *Project and Construction Coordination Map	 - Transportation | seattle.gov*. https://www.seattle.gov/transportation/projects-and-programs/programs/pedestrian-program/construction-coordination-and-mobility-management/project-and-construction-coordination-map
9. *Street Occupancy Permits | Open Data Catalog*. https://opendata-geospatialdenver.hub.arcgis.com/datasets/street-occupancy-permits-1
10. *Street Construction Permits - Stipulations (2020 - Present)*. https://data.cityofnewyork.us/Transportation/Street-Construction-Permits-Stipulations-2020-Pres/gsgx-6efw
11. *NYCityMap - Department of Design and Construction*. https://www.nyc.gov/site/ddc/projects/nycitymap.page
12. *Map - NYC Capital Planning Explorer*. https://capitalplanning.nyc.gov/map
13. *dotMaps public viewer*. https://streetwork.seattle.gov/map
14. *Case Study | Boston’s Citywide Analytics Team | Data-Smart City Solutions*. https://datasmart.hks.harvard.edu/news/article/case-study-bostons-citywide-analytics-team-1043
15. *Accessibility—ArcGIS Experience Builder - Esri Documentation*. https://doc.arcgis.com/en/experience-builder/11.4/get-started/accessibility.htm
16. *Design for accessibility in ArcGIS Hub and ArcGIS Enterprise Sites Accessible design*. https://www.esri.com/arcgis-blog/products/arcgis-hub/uncategorized/arcgis-hub-sites-designing-for-accessibility
17. *Custom Workflows for Cityworks with FME – FME Support Center*. https://support.safe.com/hc/en-us/articles/25407782538637-Custom-Workflows-for-Cityworks-with-FME
