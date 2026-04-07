# Building Unified Procurement Search: What’s Real Now and How to Get There

## Executive Summary

The vision of a "fully unified" procurement search interface—one that seamlessly queries local contracts, state purchasing cooperatives, and federal SAM.gov registrations—remains a complex frontier for US local governments. While the desire for a single pane of glass is strong, the reality is that most jurisdictions currently centralize only their own internal solicitations and contracts. For external data, they rely on third-party aggregators for cooperative contracts and API link-outs for federal data. 

Key insights from the current landscape include:
* **The "Unified" Trifecta is Rare:** True indexed search across all three tiers (local, state co-op, federal) is hindered by severe schema friction and legal constraints. Instead, agencies are building "front doors" that route users to the right platforms.
* **Cooperative Aggregation Drives Immediate ROI:** Platforms like Pavilion (formerly CoProcure) are being used by cities like Houston to provide a unified search for cooperative contracts, drastically reducing cycle times and administrative overhead.
* **Legal Barriers Prevent Naive Scraping:** SAM.gov and major cooperatives (like OMNIA Partners) strictly prohibit automated scraping and bulk redistribution of their data, requiring API-first architectures with strict policy gating.
* **OCDS is the Practical Lingua Franca:** The Open Contracting Data Standard (OCDS) is emerging as the essential canonical schema to resolve data integration challenges, with the City of Portland leading the way as the first US city to fully implement it.
* **Identity Resolution is the Core Technical Challenge:** The federal transition from DUNS to the Unique Entity Identifier (UEI) in 2022 created historical continuity challenges, requiring robust entity resolution pipelines to match vendors across disparate systems.

## 1) Current Landscape — Few “true” unified portals; value comes from phased unification and partner aggregation

### Local consolidation vs. multi-source aggregators
Currently, US local governments primarily focus on consolidating their own fragmented internal systems rather than ingesting external federal and state catalogs into a single custom-built index. For example, the County of Santa Clara noted the lack of a "single source of truth" across its departments, looking to models like San Diego County's "Buynet" which allows staff and the public to search internal contracts and amendments across underlying commercial systems [1]. Similarly, the City of Seattle launched a centralized Procurement Portal powered by OpenGov in August 2024 to consolidate public works, consulting, and goods contracts into a one-stop shop [2] [3]. For cooperative contracts, agencies increasingly rely on third-party aggregators like Pavilion, which hosts over 50,000 active cooperative contracts for over 300 agencies [4] [5].

### Why SAM.gov isn’t “just another feed”
Integrating federal data from SAM.gov is heavily constrained by legal and technical policies. SAM.gov's Terms of Use explicitly prohibit automated web scraping and require users to utilize official APIs [6]. Furthermore, the data is segmented into Public, For Official Use Only (FOUO), and Sensitive tiers. FOUO and Sensitive data cannot be disseminated to the public, and data originating from Dun & Bradstreet (D&B Open Data) requires explicit attribution and cannot be disseminated in bulk [6]. This forces local governments to use SAM.gov APIs for targeted enrichment rather than wholesale database mirroring.

### Where agencies actually get ROI now
Rather than building massive data lakes of external contracts, local governments are achieving rapid ROI by implementing guided procurement pathways. By integrating cooperative discovery tools into their intake processes, agencies can quickly identify if a needed good or service is already available on a competitively bid cooperative vehicle, saving months of solicitation time.

## 2) Case Profiles — What leading jurisdictions and platforms actually did

To understand how unified search is being approached, it is necessary to compare the strategies of leading jurisdictions and platforms.

| Jurisdiction / Platform | Scope of Unification | Technology / Approach | Key Outcomes & Status |
| :--- | :--- | :--- | :--- |
| **San Diego County (Buynet)** | Internal local contracts | Custom front-end over commercial back-ends | Provides an unchanging user interface for employees and the public to search contracts, hiding underlying ERP complexities [1]. |
| **City of Seattle** | Internal local contracts | OpenGov Procurement | Consolidated disparate departmental websites into a single public-facing portal in August 2024 [2] [3]. |
| **City of Houston (with Pavilion)** | Local + Cooperative | Pavilion (CoProcure) + Beacon Bid | Created a "front door" for departments to search compliant suppliers across local and co-op contracts, eliminating the procurement "black hole" [7]. |
| **City of Portland** | Internal (OCDS Canonical) | OCDS JSON/CSV publication | First US city to implement OCDS, linking data from solicitation to payment to increase trust and vendor participation [8] [9]. |

### Seattle (OpenGov)
Prior to August 2024, Seattle vendors had to navigate different websites for public works, consulting, and goods. The city deployed OpenGov to create a single, centralized public-facing portal for all city bid requests, streamlining the vendor experience and internal tracking [2] [3].

### San Diego Buynet
San Diego County developed "Buynet" to solve the "multiple sources of truth" problem. It acts as a unified search layer that queries underlying systems (like SAP or Ariba) without requiring users to know where the data lives, providing a stable UI even as back-end systems change [1].

### Houston + Pavilion
The City of Houston partnered with Pavilion to build a user-friendly intake experience. Department users can search Pavilion for what they need, and the system guides them toward compliant suppliers on existing City contracts or cooperative contracts. This integration provides real-time visibility into request statuses [7].

### Portland (OCDS)
Portland adopted the Open Contracting Data Standard (OCDS) to publish its procurement data. By mapping internal systems (like SAP and BuySpeed) to the OCDS schema, Portland publishes weekly JSON and CSV files that track the entire lifecycle of a contract, enabling advanced business intelligence dashboards [10] [8].

## 3) Data Integration Challenges — Where the costs and risks really are

The primary barrier to unified procurement search is not the data pipeline infrastructure, but the severe schema friction and taxonomy mismatches across local, state, and federal sources.

### Identity unification and the UEI transition
Vendor identity is the most critical integration challenge. On April 4, 2022, the federal government transitioned from using the proprietary DUNS number to the government-owned Unique Entity Identifier (UEI) generated in SAM.gov [11] [12]. Because many local ERPs and legacy contracts still rely on DUNS, EIN, or CAGE codes, local governments must build entity resolution pipelines to match legacy vendor records with new UEI-based federal data. Tools like the Python `dedupe` library are frequently used to perform fuzzy matching and entity resolution to create "golden records" for vendors [13] [14].

### Taxonomy crosswalks
Different levels of government use entirely different commodity classification systems. Federal data relies on NAICS and PSC codes, while local governments and cooperatives frequently use the NIGP code or UNSPSC. Integrating these sources requires building complex, one-to-many crosswalks (e.g., mapping NAICS to NIGP) to allow users to search a single commodity term and retrieve results across all systems [15].

### Lifecycle mismatches
Procurement lifecycles are modeled differently across systems. A local government might treat a contract and its amendments as separate documents, while federal systems use a "base and modification" structure. Normalizing these structures into a single timeline requires a canonical schema that can handle diverse procurement events.

### Quality and lineage
Because procurement data dictates financial disbursements and legal compliance, data quality is paramount. Ingesting data from third-party cooperatives or federal APIs requires strict validation rules to ensure that missing fields (like a null DUNS number post-2022) do not break local search indexes or reporting dashboards [16].

## 4) Compliance & Policy Guardrails — Design choices constrained by law and terms

Building a unified search tool requires navigating a minefield of terms of service, privacy laws, and data usage restrictions.

### SAM.gov Terms of Use
SAM.gov strictly prohibits automated web scraping and requires the use of its official APIs [6]. Furthermore, the data is heavily tiered. While public APIs can be used freely, FOUO (For Official Use Only) and Sensitive APIs are restricted to internal government use and cannot be used to build public-facing views [6]. Additionally, data elements sourced from Dun & Bradstreet (D&B Open Data) require written attribution and cannot be disseminated in bulk [6].

### Co-op portals’ Terms of Use
State purchasing cooperatives also protect their data. For example, OMNIA Partners' Terms of Use explicitly prohibit using robots or spiders for "scraping" or harvesting information from their site, and restrict the use of their content to non-commercial, informational purposes [17]. Consequently, local governments must rely on authorized API access or deep-linking to cooperative marketplaces rather than scraping catalogs.

### Local transparency and FOIA
Local procurement laws dictate what can be shown in a search interface. Pre-award confidentiality rules often prevent the publication of bid details until an intent to award is issued. Furthermore, attachments and contracts must be scrubbed for Personally Identifiable Information (PII) and trade secrets before being exposed in a public-facing portal, requiring robust redaction workflows.

## 5) OCDS in US Local Practice — Interoperability by design

To overcome schema fragmentation, the Open Contracting Data Standard (OCDS) is gaining traction as the canonical model for US local government procurement data.

### Portland's OCDS Implementation
The City of Portland is the first US city to fully implement OCDS [9]. Portland uses a globally unique Open Contracting ID (OCID) with the prefix `ocds-ptecst`, appending internal identifiers from its BuySpeed and SAP systems [10]. This allows the city to publish weekly JSON and CSV files that link solicitations, awards, and payments into a single, traceable record [10] [8]. This standardized approach makes it easier for vendors to understand opportunities and for the city to build transparency dashboards [9].

### Boston's Stepping Stones
While not fully publishing OCDS JSON yet, the City of Boston has adopted open contracting principles by publishing a comprehensive "Buying Plan." This plan forecasts upcoming procurements, categorized by UNSPSC codes, giving small and diverse businesses advance notice to prepare bids [9]. Boston also publishes contract award datasets and equity dashboards to track spending with diverse suppliers [18] [9].

## 6) Reference Architecture — A compliant, scalable blueprint

To balance practicality, interoperability, and risk, local governments should adopt a reference architecture centered around a canonical schema and governed API enrichment.

### Ingestion layer
Data should be ingested via authorized connectors. Local ERP and eProcurement data (e.g., SAP, Oracle, OpenGov) forms the core dataset. Cooperative contracts should be integrated via authorized marketplace APIs (like Pavilion) or deep-linked, rather than scraped. Federal data should be accessed via SAM.gov's public APIs, strictly respecting rate limits and avoiding the caching of FOUO/Sensitive data [6].

### Canonical model & storage
All ingested data should be transformed into the OCDS schema. This serves as the canonical data model stored in a data lake or warehouse. Using OCDS allows the government to leverage existing open-source tools, such as the Flatten Tool, to convert nested JSON into flat CSVs for public download [19].

### Entity resolution & crosswalk services
A dedicated master data management (MDM) pipeline is required. This service should establish a UEI-first "golden record" for vendors, backfilling with DUNS or CAGE codes for historical records [11] [16]. Address normalization tools (like `libpostal` [20]) and probabilistic matching libraries (like `dedupe` [14]) should be used to resolve duplicate vendor entries. A microservice must handle taxonomy crosswalks between NIGP, NAICS, and UNSPSC.

### Index/search gateway
The transformed, canonical data is then indexed into a search engine like Elasticsearch or OpenSearch [21] [22]. The search gateway must support faceted filtering by taxonomy, agency, and vendor. Crucially, the gateway must enforce role-based access control (RBAC) to ensure that public users only see redacted, public-tier data, while procurement staff can view sensitive attachments.

### Security and Operations
The architecture must align with NIST SP 800-53 controls, particularly regarding Data Governance Bodies (PM-23) to manage data release and privacy [23]. Audit logging, secrets management for API keys, and data quality validation (e.g., using Great Expectations [24]) are mandatory to maintain trust in the system.

## 7) Phased Roadmap & Budget — Local-first, then co-ops, then SAM.gov enrichment

Attempting to build a fully unified system on day one is a recipe for failure. A phased approach ensures rapid time-to-value.

### Phase 1: Local unified search (0–6 months)
Focus entirely on consolidating internal local contracts and solicitations into a single portal (similar to Seattle or San Diego). Map internal ERP data to the OCDS schema. 
* **KPIs:** Time-to-source list, bid completeness, staff satisfaction.
* **Estimated Budget:** $250k–$600k.
* **Team:** Product Manager, Data Engineer, Search Engineer, Procurement SME.

### Phase 2: Co-op marketplace integration (4–12 months)
Integrate cooperative purchasing discovery by partnering with existing aggregators (e.g., Pavilion, OMNIA OPUS). Implement a "front door" intake process (like Houston) that checks if a request can be fulfilled via an existing co-op before initiating a new local bid.
* **KPIs:** Percentage of spend routed through cooperatives, administrative hours saved.
* **Estimated Budget:** Additional $150k–$350k.

### Phase 3: SAM.gov enrichment (9–18 months)
Use SAM.gov public APIs to enrich the local vendor master database with UEIs and federal award histories. Implement entity resolution to match local vendors to federal records. Publish full OCDS release packages to the public.
* **KPIs:** Vendor data accuracy, public portal usage.
* **Estimated Budget:** Additional $200k–$450k.

## 8) Impact & Measurement — Prove value early; attribute causality

Unified procurement tools deliver measurable impacts across efficiency, competition, and vendor experience.

### Core KPIs
* **Efficiency:** Digitizing and unifying search drastically reduces cycle times. For example, San Antonio ISD saved an estimated 780 hours per year by moving evaluations online with Bonfire [25]. Bergen County eliminated over 50,000 pages of paper [26].
* **Competition:** Modern portals increase vendor participation. OpenGov reports seeing 2 to 4 times more completed, compliant bid responses after implementation [27].
* **Co-op Utilization:** Utilizing cooperative contracts avoids the cost of running redundant solicitations. OMNIA Partners notes that using a cooperative contract saves between $500 and $1,000 in administrative costs per transaction [28].

### Methods for Attribution
To prove causality, local governments should use A/B testing for intake flows (e.g., routing half of departments through a new Pavilion-style front door while others use legacy methods) or conduct pre/post cohort analyses on cycle times for specific commodity categories.

## 9) Risks & Mitigations — Where projects stumble

* **Unauthorized Scraping:** Violating SAM.gov or cooperative Terms of Use can result in IP bans and legal action. *Mitigation:* Strictly use authorized APIs and deep-linking; maintain a data rights registry.
* **Vendor Misidentification:** Incorrectly merging vendor records can result in payments being sent to the wrong entity or inaccurate diversity reporting. *Mitigation:* Use human-in-the-loop validation for probabilistic matches below a 95% confidence threshold.
* **PII Exposure:** Publishing contracts without proper redaction violates privacy laws. *Mitigation:* Implement automated PII scanning and manual legal compliance gates before documents are moved to the public index.

## 10) Vendor & Tooling Landscape — What to buy vs. build

Local governments should blend Commercial Off-The-Shelf (COTS) platforms, cooperative marketplaces, and open-source data tools.

| Platform / Tool | Role in Unified Search | Key Capabilities & Notes |
| :--- | :--- | :--- |
| **OpenGov Procurement** | Local eProcurement & Portal | Provides a centralized public portal for local bids; increases compliant responses [3] [27]. |
| **Pavilion (CoProcure)** | Co-op Aggregation & Intake | Free search tool for 50k+ cooperative contracts; acts as a department "front door" [4] [7]. |
| **OMNIA / Sourcewell** | Cooperative Catalogs | Source of competitively bid contracts; requires API/OPUS integration rather than scraping [29] [30]. |
| **SAM.gov APIs** | Federal Entity & Award Data | Source for UEI and federal awards; strict rate limits and FOUO/PII restrictions apply [6]. |
| **Dedupe / Splink** | Entity Resolution (Open Source) | Python libraries for fuzzy matching and deduplicating vendor records across systems [31] [14]. |
| **libpostal** | Address Normalization (Open Source) | C library/Python binding for parsing and normalizing international street addresses for matching [20]. |
| **Elasticsearch / OpenSearch** | Search Indexing | Distributed search engines for indexing canonical OCDS data and powering the UI [21] [22]. |

By leveraging these tools within a phased, OCDS-backed architecture, US local governments can successfully navigate the legal and technical complexities of unified procurement search, ultimately delivering faster services and fairer competition.

## References

1. *no-single-source-truth-county-santa-clara-countywide ...*. https://santaclara.courts.ca.gov/system/files/civil/no-single-source-truth-county-santa-clara-countywide-procurement.pdf
2. *Paperless and Painless: How OpenGov Simplified Procurement - City Innovation Hub*. https://innovation-hub.seattle.gov/2025/03/05/paperless-and-painless-how-opengov-simplified-procurement/
3. *OpenGov Procurement ProcureNow - Reviews - E-Sourcing, Strategic Sourcing, Procurement and Source-to-Contract (S2C)*. https://www.rfp.wiki/vendors/opengov-procurement-procurenow
4. *Shepherding the $2T Government Procurement Market into ...*. https://www.forerunnerventures.com/perspectives/shepherding-the-usd2t-government-procurement-market-into-the-e-commerce-era
5. *Gov Procurement Online Marketplace CoProcure Raises $22M*. https://www.govtech.com/biz/gov-procurement-online-marketplace-coprocure-raises-22m
6. *Terms of Use | SAM.gov*. https://sam.gov/about/terms-of-use
7. *From "Department of No" to Department of Go: The City of Houston’s Procurement Transformation Playbook*. https://www.withpavilion.com/about/resources/from-department-of-no-to-department-of-go-the-city-of-houstons-procurement-transformation-playbook
8. *Shining a flashlight on a billion-dollar behemoth | Portland.gov*. https://www.portland.gov/business-opportunities/news/2025/4/21/shining-flashlight-billion-dollar-behemoth
9. *How US cities are supporting local economies through open contracting - Open Contracting Partnership*. https://www.open-contracting.org/2025/04/30/how-us-cities-are-supporting-local-economies-through-open-contracting/
10. *Publication Policy: Data User Guide | Portland.gov*. https://www.portland.gov/business-opportunities/ocds/pdx-ocds-publication-policy
11. *Unique Entity Identifier update | GSA*. https://www.gsa.gov/about-us/organization/federal-acquisition-service/fas-initiatives/integrated-award-environment/iae-systems-information-kit/unique-entity-identifier-update
12. *Transition from DUNS Number to Unique Entity Identifier ( ...*. https://ies.ed.gov/ies/2025/01/transition-duns-number-unique-entity-identifier-uei-fact-sheet
13. *Entity resolution in Python with the dedupe package*. https://www.fivetran.com/learn/entity-resolution-in-python-with-the-dedupe-package
14. *GitHub - dedupeio/dedupe: :id: A python library for accurate and scalable fuzzy matching, record deduplication and entity-resolution. · GitHub*. https://github.com/dedupeio/dedupe
15. *NIGP Solutions for Government Sourcing & Procurement | Periscope…*. https://www.periscopeholdings.com/buyer-solutions/nigp
16. *DUNS Number to Unique Entity ID Transition*. https://dodprocurementtoolbox.com/uploads/UEI_transition_content_18053cd053.pdf
17. *Terms of Use | OMNIA Partners*. https://www.omniapartners.com/terms-of-use
18. *City of Boston Contract Award - Dataset - Analyze Boston*. https://data.boston.gov/dataset/city-of-boston-contract-award
19. *Flatten Tool for OCDS - Read the Docs*. https://flatten-tool.readthedocs.io/en/latest/usage-ocds/
20. *Quick and Dirty Address Matching with LibPostal*. https://www.crunchydata.com/blog/quick-and-dirty-address-matching-with-libpostal
21. *Fetched web page*. https://www.elastic.co/guide/en/elasticsearch/reference/current/
22. *Home - OpenSearch Documentation*. https://opensearch.org/docs/latest/
23. *NIST.SP.800-53r5.pdf*. https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf
24. *Fetched web page*. https://greatexpectations.io/docs/
25. *Time Savings Infographic-General*. https://gobonfire.com/wp-content/uploads/Learn_Infographic_eSourcing-Time-Savings.pdf
26. *Paving the way for eProcurement adoption in New Jersey*. https://gobonfire.com/wp-content/uploads/BonfireBergenCounty-CaseStudy-1.pdf
27. *Government Procurement Software | OpenGov*. https://opengov.com/products/procurement
28. *State & Local Gov't Cooperative Purchasing*. https://www.omniapartners.com/industries/government
29. *Sourcewell | Cooperative Purchasing Advantages*. https://www.sourcewell-mn.gov/
30. *OMNIA Partners | A Better Way to Buy | Group Purchasing*. https://www.omniapartners.com/
31. *GitHub - moj-analytical-services/splink: Fast, accurate and scalable probabilistic data linkage with support for multiple SQL backends · GitHub*. https://github.com/moj-analytical-services/splink
