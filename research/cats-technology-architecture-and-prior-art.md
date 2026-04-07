# City Activity Transparency Systems: Core Technology, Prior Art, Data Model, and Design Considerations

## What a City Activity Transparency System is actually trying to do
A “City Activity Transparency System” (CATS) is best understood as an attempt to expose a *single, coherent operational picture* of municipal action—across intake (311 and other channels), dispatch and response (public safety and field operations), permitting and inspections, and human services—at a cadence that feels “current” to residents and leadership. The key idea is not simply publishing statistics, but making *work-in-progress* legible: what is happening, where, under which department, with what status, and with what outcome once closed. citeturn6search2turn13search1turn3search3

In practice, most cities that resemble this vision do so by combining (a) a performance-management discipline (regular operational review meetings and accountability routines) with (b) a set of dashboards and (c) selective publication of data through open-data portals. These are often powerful, but they rarely form one unified “weekly report card of everything the city did,” because the underlying data and governance are fragmented by design (different statutory constraints, different vendors, different department cultures, different operational rhythms). citeturn6search26turn6search1turn2search2turn1search33

Richmond already shows the “partial pieces” pattern: a public open-data portal, a 311 programme that routes non-emergency requests to departments, and targeted dashboards (for example, traffic safety / Vision Zero). citeturn12search0turn12search1turn12search7

## Core technology architecture for a near-real-time city activity layer
A CATS architecture has to treat “city activity” as both (1) *events* (things that happened, changed state, or were completed) and (2) *measures* (aggregations of those events into KPIs and outcomes). That duality is visible in existing systems: for example, New York City’s Mayor’s Management reporting ecosystem mixes periodic reports with a “Dynamic” layer of continuously updated indicators, while Boston’s CityScore aggregates multiple operational measures and updates on daily/weekly/monthly cadences. citeturn13search10turn13search2turn14view0turn10search0

### Reference architecture diagram described in text
```text
SOURCE SYSTEMS (department-owned)
  - 311/CRM intake & case mgmt (requests, statuses)
  - CAD/911 & dispatch (call, unit, response milestones)
  - RMS / incident systems (police/fire)
  - Work order / asset mgmt (potholes, water, signals)
  - Permits & inspections (planning/zoning/building)
  - Human services / referrals (program interactions)
  - Utilities / field ops telemetry; IoT & sensors
  - GIS (parcels, districts, street centreline, assets)
  - ERP/Finance/HR (costs, staffing, procurement)

INGESTION & CHANGE CAPTURE
  - API polling (Open311, vendor APIs, GIS services)
  - Event hooks / CDC (database change data capture)
  - File drops / bulk exports (nightly/weekly extracts)
  - Streaming ingest for high-velocity signals (optional)

INTEGRATION / NORMALISATION
  - Canonical "CityActivityEvent" schema
  - Identity resolution (asset/parcel/address matching)
  - Geocoding + spatial joins (districts, neighbourhoods)
  - Workflow state mapping (open/in progress/closed etc.)
  - Data quality & provenance (source, timestamp, confidence)

STORAGE LAYER (fit-for-purpose)
  - Raw landing zone (immutable) for audit/replay
  - Curated event store (queryable by time/status)
  - Analytical warehouse/lakehouse for KPIs & cohorts
  - Geospatial store (spatial indexing for map queries)
  - Optional graph store for cross-domain relationships

PROCESSING & ANALYTICS
  - Batch ETL for slow-changing systems (nightly/weekly)
  - Stream processing for near-real-time updates (minutes)
  - Metric computation (SLA, backlog, equity by geography)
  - Anomaly detection (spikes, latency regressions)

SECURITY, PRIVACY, COMPLIANCE BOUNDARIES
  - Segmented enclaves for CJIS / PHI-like data
  - Redaction/de-identification & differential release rules
  - Audit logging, access control, key management

DELIVERY / PRESENTATION
  - Public dashboards (KPIs + trends + maps)
  - Public “activity feed” (event milestones, not raw CJI/PHI)
  - APIs + open data exports (DCAT-described catalogues)
  - Internal ops views (full fidelity, restricted access)
```

### Ingestion layer: where “near-real-time” is won or lost
For the domains most residents care about (service delivery, public works, cleanliness, basic safety), the ingestion layer is often a blend of:
- standards-based APIs where available (notably Open311/GeoReport for service requests), citeturn0search0turn13search3turn12search20  
- periodic bulk extracts where vendor systems are closed or expensive to integrate, and citeturn13search35turn6search1  
- direct feeds or integration layers for high-velocity or high-criticality data (e.g., emergency communications under NG911/i3). citeturn7view1turn0search23  

Two practical realities drive design:
1) “Near-real-time” is usually *heterogeneous*: some datasets can update daily or nightly (e.g., public 311 datasets), while others arrive weekly or monthly (typical for many performance dashboards). citeturn6search3turn10search6turn14view0turn10search1  
2) even when a standard exists, local configuration varies. Open311 explicitly allows each jurisdiction to define its own service catalogue and codes, so “pothole” and “streetlight” categories are rarely interoperable without an additional mapping layer. citeturn13search7turn13search3  

### Integration challenges: silos, schemas, and cadence mismatches
Cross-department integration fails less because of “missing dashboards” and more because core operational concepts are not aligned:
- The same physical thing may be represented differently (an address vs a parcel vs a hydrant asset vs a street segment). citeturn4search1turn4search23  
- Workflow states differ across systems, even when the underlying human work is similar (e.g., “closed” may mean “assigned downstream” rather than “fixed,” a recurring issue in 311-style reporting). citeturn10search38turn13search35  
- Some domains are governed by specialised standards and legal regimes that make a unified “public activity feed” non-trivial (especially public-safety and human services). citeturn11view0turn0search2turn7view1  

### Data modelling approach: events first, then measures
A resilient approach is to model the city as an event stream (state changes) and compute measures (KPIs, SLAs, equity breakdowns) *from the event history*, rather than treating KPIs as primary data. That is consistent with how modern event-driven architectures are described in mainstream software practice: event producers publish changes, routers broker them, and consumers derive downstream views. citeturn4search0turn4search6  

Where a city wants richer cross-domain reasoning (e.g., linking a burst of 311 “missed trash” complaints to staffing levels and then to procurement delays), a graph/ontology layer becomes more valuable. W3C’s RDF standard defines a graph model of subject–predicate–object triples, and DCAT provides a standard vocabulary for describing datasets and data services in interoperable catalogues—useful for building a discoverable civic data layer rather than a one-off dashboard. citeturn5search1turn5search4  

### Geospatial layer: a first-class system, not a map widget
CATS is inherently spatial: almost every work item occurs somewhere and is politically accountable somewhere (district, neighbourhood, service area).
- Spatial indexing is essential for performance. PostGIS documentation describes R-tree style spatial indexing via GiST as the common mechanism for speeding spatial queries. citeturn4search1turn4search23  
- Interoperable geospatial services matter when multiple tools and vendors must share geometry and attributes. The Open Geospatial Consortium’s WFS standard defines interfaces for querying and retrieving geospatial feature data over web services/APIs. citeturn4search2turn4search8  

### Presentation layer: dashboards vs narrative reporting vs an “activity feed”
Prior art suggests three dominant patterns:
- KPI dashboards (public or internal) that summarise performance over time, citeturn10search5turn15search7turn10search0  
- formal recurring reports (semiannual/annual) that act as “report cards,” citeturn3search3turn13search10  
- command-centre / “mission control” walls that integrate multi-agency feeds for operational coordination (often not fully public). citeturn6search2turn1search3turn1search11  

A public “activity feed” is the least common, because it requires consistent event semantics and careful privacy controls, but it is the closest UI analogue to what residents imagine when they ask for “everything the city did this week.” citeturn6search1turn11view0turn0search2  

## Minimum viable data model and enrichment needed for “what a city did”
A practical “minimum viable” model is not “one table for everything,” but one *canonical activity event* plus several shared entities (location, organisations, assets, programmes) that every department can map to.

### Taxonomy of required datasets and entities
The table below describes the core operational datasets most cities already have (even if not shareable publicly) and the enrichment layers required to make them comparable across domains.

| Domain | Canonical event object | Common standards / exemplars | Minimum fields for CATS | Notes on cadence & quality |
|---|---|---|---|---|
| Service delivery / 311 | ServiceRequestEvent | Open311 GeoReport v2 (service list + requests) citeturn13search3turn0search0turn13search7 | request_id, service_code, status, created_at, updated_at/closed_at, location, responsible_agency | Categories vary widely by jurisdiction; bulk publishes are often inconsistent. citeturn13search7turn13search35 |
| Emergency communications | Call/DispatchEvent | i3 introduces ESInet + NG9-1-1 core services citeturn7view1turn0search23 | call_id, call_received_at, dispatch_at, unit_arrival_at, incident_location, call_type, priority | High sensitivity; “near-real-time” is technically feasible but often restricted. citeturn11view0turn0search2 |
| Public-safety incidents | IncidentEvent | NIBRS is incident-based crime reporting standard citeturn3search1turn3search9 | incident_id, type, time, location, disposition | Strong incentives can distort counting if used punitively. citeturn13search16turn14view1 |
| Fire/EMS operational reporting | FireEmsIncidentEvent | NFIRS is a reporting standard for fire service activities (fire, EMS, disasters) citeturn3search6turn3search2 | incident_id, incident_type, dispatched/arrival, location, outcome | Many jurisdictions use standardised reporting, but participation and timeliness vary. citeturn3search10turn3search2 |
| Public works field operations | WorkOrderEvent / AssetMaintenanceEvent | CityScore shows “pothole repair on-time %” and similar measures derived from 311-linked workflows citeturn14view0turn13search5 | work_order_id, asset_id, created_at, scheduled_at, completed_at, crew/unit, cost_estimate | Often split across 311 intake + internal asset/work-order systems. citeturn14view0turn13search35 |
| Planning / permitting | PermitCaseEvent / InspectionEvent | LA Planning publishes weekly-updated case processing metrics dashboard citeturn10search1 | case_id, type, filing_date, milestone_dates, status, address/parcel, decision/outcome | Typically milestone-heavy; good fit for event modelling. citeturn10search1turn14view0 |
| Human services & referrals | ServiceInteractionEvent | Open Referral HSDS covers organisations, services, locations, access details citeturn5search6turn5search2 | programme_id, interaction_date, service_type, location, eligibility category | Often privacy-constrained; public layer tends to be directories, not case data. citeturn0search2turn5search6 |

### Enrichment layers required for integration
The most consistently necessary enrichments across domains are:

- **Geospatial normalisation**: lat/long where possible, plus joins to parcels, districts, and operational service areas; spatial indexing and interoperable feature services (WFS) are enabling technologies here. citeturn4search23turn4search2  
- **Time normalisation**: capture both event time and lifecycle milestones (created/acknowledged/dispatched/arrived/completed/closed), mirroring how operational measures are defined in systems like CityScore (e.g., response-time targets and closure-based notifications). citeturn14view0turn13search5  
- **Workflow state mapping**: create a crosswalk from each system’s statuses into a small canonical set (e.g., new → accepted → in progress → completed → verified), while retaining the raw original status for traceability; the need for this is visible in the fact that “closed” can mean different things in real 311 workflows. citeturn10search38turn13search7  
- **Provenance & cataloguing**: dataset/service metadata that supports discoverability and governance (e.g., DCAT for catalogues; RDF graphs/knowledge graphs for relationship reasoning). citeturn5search4turn5search1  

### Derived metrics that residents actually interpret as “the city did work”
Derived measures typically fall into four families:
- **Speed / responsiveness** (time-to-acknowledge, time-to-dispatch, time-to-complete), which is explicitly operationalised in CityScore targets and definitions. citeturn14view0  
- **Backlog and throughput** (open vs closed counts and ageing), commonly surfaced in performance dashboards and portals using operational data. citeturn15search7turn10search5  
- **Geographic equity** (service quality by neighbourhood/district), a frequent goal of open-data and community-led data efforts. citeturn6search9turn6search13  
- **Outcome and impact proxies** (e.g., “people served,” “incidents prevented,” “lives saved”), which are the hardest to standardise and the easiest to politicise without governance rules. Research shows the effect of transparency on trust depends heavily on what is communicated and how credible it is. citeturn6search0turn6search4  

## Prior art: what other cities and programmes have already built, and what they missed
The CATS concept has predecessors, but they tend to optimise for one of three goals: internal accountability, public transparency, or real-time operational coordination.

image_group{"layout":"carousel","aspect_ratio":"16:9","query":["Rio Operations Centre wall of screens 2010","Boston CityScore dashboard screenshot","New York City Dynamic Mayor's Management Report DMMR screenshot","Open Data Buffalo Socrata portal screenshot"],"num_per_query":1}

### entity["tv_show","The Wire","HBO crime drama 2002"]-era ideas: CompStat as a template for accountability meetings
entity["organization","New York City Police Department","municipal police agency"]’s CompStat is widely documented as a data-driven performance measurement and accountability system created during the 1990s to track crime statistics and drive managerial response to trends. citeturn7view4turn1search4 It helped institutionalise the “weekly/regular meeting + metrics + maps” discipline that later influenced non-policing performance systems. citeturn13search8turn1search33

Limitations relevant to CATS are also well known: intense metric pressure can create incentives for “gaming” and manipulation, and research on CompStat-linked performance management identifies risks of data manipulation and “gotcha” cultures when accountability is not balanced with problem-solving. citeturn13search16turn14view1

### CitiStat and StateStat: expanding “Stat” beyond policing
Baltimore’s CitiStat is a prominent attempt to apply the CompStat discipline across city agencies—tracking operational measures and using structured sessions to drive improvements. citeturn7view3turn13search0 It is also a canonical example of the organisational nature of these systems: the technology matters, but the meeting cadence, analytic staff capacity, and leadership follow-through are defining components. citeturn14view1turn13search36

Maryland’s StateStat represents the scaling of this concept to a state level (cross-agency performance management rather than a single department). citeturn1search6turn1search31 The central lesson is that “Stat” programmes are as much about governance routines as about data pipelines, and replication often fails when done superficially. citeturn14view1turn1search33

### Command centres: Rio as an archetype of multi-agency real-time coordination
entity["city","Rio de Janeiro","Brazil"]’s Operations Centre is frequently cited as a model of centralised real-time coordination, integrating feeds across dozens of agencies and using a command-centre model for incident management and city operations. citeturn1search3turn6search2turn1search11 In this pattern, the “single pane of glass” is operationally powerful, but its public transparency is often mediated (i.e., not all underlying data are openly released). citeturn6search2turn11view0

Research and commentary on “dashboard governance” cautions that city dashboards are never neutral: what they measure and display shapes what is managed and valued, which matters for a CATS that aims to represent “everything the city did.” citeturn6search2turn6search24

### Open data portals: transparency infrastructure, not a report card
Open data portals such as Open Data Buffalo (built on Socrata) illustrate a strong “data publication + visualisation + developer access” model; Buffalo’s portal explicitly frames itself as a transparency and innovation tool and includes stories/dashboards as well as datasets. citeturn2search0turn2search8 Platforms like Socrata became strongly associated with publishing interactive open data, and Socrata was acquired by entity["company","Tyler Technologies","public sector software vendor"] in 2018. citeturn2search1turn2search5

However, open-data scholarship repeatedly finds that impacts are not automatic: many initiatives bias toward “supply side” publication, and the effects on engagement and trust depend on usability, relevance, and the surrounding ecosystem (support, community capacity, feedback loops). citeturn6search1turn6search13turn6search26

### City-wide performance “report cards”: NYC’s MMR and CPR as the closest precedent
entity["city","New York City","US"] provides one of the clearest examples of a legally mandated, cross-agency performance reporting system: the Mayor’s Management Report is mandated by the city charter and is released twice yearly (preliminary and full fiscal-year). citeturn13search10turn3search11 New York also operates an online Citywide Performance Reporting tool that aggregates critical measures from more than 40 agencies, enabling trend analysis and service performance review. citeturn15search7turn15search15turn15search3

This “report + dynamic portal” model is close to a CATS, but even here it largely communicates performance measures and trends rather than a unified narrative of operational work completed in a given week. citeturn13search22turn15search7

### Boston CityScore and LA dashboards: modern KPI synthesis with tighter cadences
entity["city","Boston","Massachusetts, US"]’s CityScore is explicitly intended to inform leadership “at a moment’s notice” by aggregating key metrics into a single number. citeturn13search1turn10search0 Its own metric-definition document states concrete update cadences (daily scores reflecting the previous day; weekly on Mondays; monthly on the first of the month) and operationalises measures across 311, public works, and emergency response. citeturn14view0turn13search5

Los Angeles shows the “dashboard per domain” pattern: for example, LA City Planning publishes a dashboard (updated weekly) focused on entitlement case processing, and the City Controller’s office maintains a separate departmental metrics dashboard for financial and performance transparency. citeturn10search1turn10search5 These are high-signal for their domains, but they do not inherently unify into a city-wide activity layer without a shared event schema and governance model. citeturn6search26turn2search10

### Richmond-specific prior attempts and partial building blocks
Richmond already has several publicly visible components that resemble “pre-CATS” infrastructure:
- A public open-data portal (“no fee, legal encumbrance, or registration requirement”), and a separate portal front page oriented around categories like “Well-Managed Government” and “Economic Growth.” citeturn15search1turn15search5  
- An RVA311 programme described as routing non-emergency requests (including social assistance inquiries and infrastructure issues such as potholes, streetlights, and trees) to appropriate departments. citeturn12search1turn12search10  
- Targeted dashboards and transparency releases, such as a citywide speed data dashboard (announced July 24, 2025) and a procurement transparency dashboard release (October 21, 2025). citeturn12search7turn15search17  
- An internal performance management function: the Office of Performance Management is described as being created to instil a culture of accountability and to use data to inform performance measures. citeturn15search0  
- A documented “performance review” effort initiated around the 2017 administration: a 2024 update presentation states that a performance review was pledged by Mayor-elect Levar Stoney, published in May 2017 with 228 recommendations, and later revisited as a follow-up. citeturn16view0  

There is also evidence of attempted expansion of transparency infrastructure in policy: a City Council ordinance file (created July 16, 2025; later rejected) proposed defining open data roles and creating a FOIA request library, while explicitly excluding some departments such as police, fire, social services, and emergency communications from the FOIA library publication requirement—highlighting how sensitive domains complicate “one unified public view.” citeturn17view0

## Why efforts fragment into dashboards plus portals instead of one unified “report card”
Across the research and practical examples, fragmentation is not accidental; it is produced by constraints that a CATS must address directly.

A major theme in open-data ecosystem research is that publishing data is not the same as producing public value: municipalities may release datasets, but actual use and civic engagement depend on capacities, incentives, and support structures. citeturn6search1turn6search27turn6search26

At the performance-management layer, there is an analogous pattern: “Stat” programmes can become either punitive (“brutal”) or performative (“show-and-tell”), and if leadership cannot specify priorities and follow up consistently, the process risks becoming “PerformanceSham.” citeturn14view1turn13search32

CATS faces both problems simultaneously, plus two additional structural issues:

**Semantic inconsistency is fundamental, not superficial.** Open311 is instructive: even within a shared standard, the service catalogue and codes are locally defined, which means cross-city and cross-department comparability requires additional taxonomy and mapping work. citeturn13search7turn13search3

**The city is not one system; it is a federation of regimes.** A “single report card” collides with varying legal constraints and operational definitions across departments (public safety, human services, procurement, planning). The result is a patchwork: open-data portals for what can be released, dashboards for what leadership wants to monitor, and restricted internal views for what cannot safely be public. citeturn11view0turn0search2turn17view0

## Privacy, security, and compliance constraints that shape what can be public
The decisive constraint for a real-world CATS is that it must support *tiered transparency*: the public view is necessarily a projection of more detailed internal data.

### CJIS-style constraints for criminal justice information
The entity["organization","Federal Bureau of Investigation","US federal law enforcement agency"]’s CJIS Security Policy v6.0 frames itself as a security framework to protect the full lifecycle of Criminal Justice Information (CJI) “whether at rest or in transit,” and applies to every individual with access, including contractors and private entities. citeturn11view0turn7view0 It contains explicit audit and accountability controls (e.g., weekly review/analysis of audit records, retention expectations) that create real engineering requirements for any integrated platform. citeturn11view3turn5search15

Practical takeaway for CATS: treat CJIS-scoped streams as a separate enclave with strict access control, logging, and release rules; then publish only aggregated or redacted outputs that are explicitly authorised. citeturn11view0turn11view3

### HIPAA-style constraints for health and human services
US HHS guidance on HIPAA de-identification explains that there are two methods for de-identifying protected health information: “Expert Determination” and “Safe Harbor.” citeturn0search2

Practical takeaway for CATS: human services “people helped” narratives generally cannot be built from raw case data unless data are de-identified under a recognised method and the remaining re-identification risk is acceptable; otherwise, public reporting must rely on aggregated counts, programme-level availability, and directory-style data (e.g., Open Referral / HSDS) rather than individual-level interactions. citeturn0search2turn5search6turn5search2

### FOIA and transparency programmes as a second constraint layer
Even when a city wants broader transparency, it may explicitly carve out sensitive departments and records from public libraries or releases. Richmond’s rejected 2025 ordinance proposal for a FOIA request library is a concrete example of carving out police, fire, social services, and emergency communications from certain publication requirements. citeturn17view0

Practical takeaway for CATS: the public-facing system needs policy-driven redaction and publication workflows (not ad hoc manual judgement), and it must be co-designed with legal/public-records functions, not bolted on after engineering. citeturn17view0turn6search26

## Design principles for a next-generation CATS, including “Domino’s tracker” stretch options
The principles below synthesise what the prior art and research imply about what is structurally missing.

### Design principles grounded in the evidence
**Build the event backbone first; derive KPIs from it.** Open311 and CityScore both demonstrate how operational performance metrics depend on event lifecycle timestamps (created, dispatched, arrived, closed) and clear definitions. citeturn13search3turn14view0

**Adopt a canonical cross-domain schema and keep raw provenance.** Open311 bulk data efforts note that jurisdictions publish similar operational data in inconsistent ways, making normalisation and provenance tracking central requirements. citeturn13search35turn13search7

**Treat geospatial identity as a shared service, not a reporting afterthought.** Spatial indexing and geospatial service standards (e.g., WFS) are enabling infrastructure for any system that supports “what happened in my neighbourhood?” queries at scale. citeturn4search23turn4search2

**Implement tiered transparency with explicit boundaries.** CJIS and HIPAA frameworks make it unrealistic to publish a unified high-fidelity feed across all domains; CATS must publish a safe projection of internal streams. citeturn11view0turn0search2

**Make the organisational cadence a first-class requirement.** Evidence from PerformanceStat research emphasises that without analytic staff capacity, clear priorities, and follow-through in routines, systems degrade into theatre. citeturn14view1turn13search36

**Optimise for trust and usability, not “more data.”** Empirical research finds that providing information can improve perceptions of transparency and trust, but effects depend on performance context and credibility; other work emphasises that open-data impacts are uncertain when initiatives focus only on publication rather than user needs and service quality. citeturn6search0turn6search1turn6search30

**Prevent metric gaming by balancing accountability with learning.** Research on CompStat-style systems documents risks of manipulation under intense pressure, and performance-management literature explicitly warns against overly punitive cultures. citeturn13search16turn14view1turn13search32

**Make the data layer discoverable and governable.** Using standard vocabularies for catalogues (DCAT) and graph-based modelling (RDF) supports federated discovery and consistent semantics across catalogues and systems—useful when cities grow from dashboards into platforms. citeturn5search4turn5search1

### Stretch exploration: a “Domino’s tracker for city services”
A Domino’s-style tracker metaphor is feasible if it is approached as **milestone visibility, not perfect prediction**:

- **Milestone states are already present in operational systems** (intake, assignment, dispatch/arrival, completion, closure), as implied by Open311 request lifecycle methods and by CityScore’s reliance on closure and response-time definitions. citeturn0search0turn13search3turn14view0  
- **Residents value closure visibility and feedback loops**: CityScore’s definitions explicitly reference notifying residents when 311 cases are closed and collecting satisfaction ratings. citeturn14view0  
- **Predictive ETAs are constrained by data quality**: research and practice note inconsistencies in bulk civic data and recurring quality issues in 311-type datasets, which would directly degrade ETA models unless addressed. citeturn13search35turn6search21  

A realistic “tracker” UI therefore tends to succeed when it shows:
1) *current status* (acknowledged / scheduled / in progress / completed),  
2) *next milestone* (e.g., scheduled crew visit), and  
3) *historical typical durations* by service type and area—rather than claiming exact arrival times in volatile field environments. citeturn14view0turn10search6turn6search3  

### Stretch exploration: AI agents to normalise civic data and generate narratives
There is active interest in bringing AI into performance management and city data practice, including framing “Stat” programmes as evolving with AI-enabled analytics and stressing responsible application of data and AI in city governance. citeturn1search10turn2search30

A defensible AI role in CATS, consistent with the constraints above, is:
- **schema and category normalisation assistance** (mapping local service codes into a canonical taxonomy), which addresses known inconsistency problems in civic service request data, citeturn13search7turn13search35  
- **drafting human-readable summaries** of already-computed metrics and changes (e.g., “streetlight repairs completed up 12% in District X this week”), where the underlying numbers remain auditable and sourced from the event backbone, citeturn4search0turn11view3  
- **quality monitoring** (flagging anomalies like sudden drops in closures or unusual changes in status distributions), consistent with the overall “audit-ready” posture emphasised in CJIS-style controls and performance management practice. citeturn11view3turn14view1