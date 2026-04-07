# City vendor-matching reality check: platforms exist, proof lags — how to deploy, govern, and measure impact

## Executive Summary
US municipalities are actively modernizing their procurement systems, but they are **buying** commercial platforms rather than **building** in-house, multi-source AI matching tools. While vendors frequently request a "one-stop shop" that aggregates local solicitations, state cooperative purchasing (e.g., NASPO, Sourcewell), and federal SAM.gov opportunities, this cross-jurisdictional aggregation is almost exclusively delivered by private, vendor-facing platforms (like SamSearch, McCarren.ai, and PlanetBids VendorLine) rather than city-owned portals. 

City deployments of AI procurement tools—such as Dallas's 2025 partnership with Hazel or Seattle's 2024 OpenGov rollout—focus primarily on internal efficiency (scope drafting, evaluation) and surfacing suppliers for the city's own bids. While these deployments report impressive operational gains and increases in vendor participation (e.g., Seattle reported a 28% increase in WMBE/BIPOC participation), these wins are the result of multi-factor procurement reforms, not isolated algorithmic matching. Furthermore, independently audited accuracy metrics (precision, recall, F1) for these AI matching algorithms do not publicly exist, leaving cities reliant on vendor marketing claims. To succeed, cities must treat AI procurement as a "buy and govern" exercise: purchasing commercial infrastructure while strictly enforcing algorithmic transparency, data ownership, and rigorous internal performance measurement.

## Landscape and Who’s Doing What
US cities overwhelmingly contract with third-party platforms rather than building bespoke AI systems. Multi-source aggregation is delivered by vendor-side products, while city portals focus on their own specific contracting needs.

### City deployments (contracted, not built) that matter
* **Dallas + Hazel (2025):** In July 2025, Dallas became the first major Texas city to adopt AI for procurement by partnering with Hazel [1]. The platform automates solicitation drafting and identifies vendors to expand access for small and local businesses [1] [2].
* **Seattle + OpenGov (2024):** Seattle launched a unified digital portal powered by OpenGov in August 2024, centralizing solicitations and simplifying onboarding for minority-owned businesses [3].
* **Fort Worth + Bonfire (2024):** Transitioned to Bonfire for all procurements posted on or after January 1, 2024, moving away from hard-copy bids [4].
* **Chicago iSupplier:** Utilizes an Oracle-based iSupplier portal for digital transactions and electronic invoicing, focusing on workflow rather than AI aggregation [5].

### Vendor-side multi-source aggregators used by suppliers
* **SamSearch:** Aggregates Federal (SAM.gov), SLED, and DIBBS sources, utilizing natural language search and AI document intelligence to extract requirements and generate summaries [6] [7].
* **McCarren.ai:** Monitors SAM.gov, state, and local sites across all 50 states, using AI agents that read and interpret full solicitation language beyond basic NAICS codes [8] [9].
* **PlanetBids VendorLine:** Aggregates bids from 50 states, offering AI-powered bid matching, plain-language summaries, and interactive AI chat for bid assessment [10] [11] [12].

### Table: Who provides what in procurement AI

| Vendor/Platform | Multi-source coverage | AI features claimed | City adoption example | Public outcome metrics |
| :--- | :--- | :--- | :--- | :--- |
| **SamSearch** | Federal (SAM.gov), SLED, DIBBS [7] | NLP search, AI document summaries, proposal generation [6] | Vendor-side (not city-owned) | Customer quotes claim 40% bid rate increase; no audited precision/recall [13] |
| **McCarren.ai** | SAM.gov + state + local (50 states) [9] | AI agents, beyond-NAICS semantic match, compliance matrices [8] [9] | Vendor-side | Claims 0% average time savings per RFP; no audited accuracy [8] |
| **PlanetBids VendorLine** | 50 states, member + other agencies [14] | AI summaries, Q&A chat, bid/no-bid analysis [11] [12] | City of San Diego uses PlanetBids portal (not VendorLine) [15] | Claims vendors save 25+ hours/week; no causal audit [12] |
| **OpenGov Procurement** | City’s own portal; AI Supplier Research scans the web [16] | NLG scope drafting; supplier research by SOW semantics [16] | Seattle [3], Groveland [17], Pasadena [18] | Seattle: WMBE +28%, vendors 2,800+ (multi-factor) [3] |
| **Bonfire/Euna** | City’s own portal + large supplier network [19] | AI-powered savings advisor, AI solicitation summaries [19] [20] | Fort Worth [4] | Euna claims 668k active suppliers network-wide [19] |

*Takeaway:* Cities rely on OpenGov and Bonfire for internal workflow and local vendor engagement, while suppliers must purchase subscriptions to SamSearch, McCarren.ai, or VendorLine to achieve true multi-source (Federal/State/Local) AI matching.

## How the Matching Works
The matching algorithms used by these platforms are generally described at a high level in marketing materials, employing terms like "semantic search," "NLP," and "vector embeddings." Detailed technical specifications, such as model families or training data, are rarely published for municipal deployments.

### Components you can contractually require
Vendors utilize a pipeline that includes data ingestion (via APIs or scraping), OCR/PDF parsing, named-entity extraction, and semantic embeddings to match vendor profiles to solicitation text beyond simple keyword matches [21]. Large Language Models (LLMs) are frequently layered on top for summarization and Q&A over RFP documents [6] [12]. When contracting, cities should require vendors to disclose their code-to-text mapping approaches (e.g., how NAICS/PSC codes are harmonized) and their retrieval/ranking logic.

### Evidence sources
Federal data ingestion relies heavily on the SAM.gov Opportunities API v2, which updates active notices daily and archived notices weekly, providing metadata like NAICS codes, set-asides, and resource links for attachments [22]. Patents from companies like Boomi (US12373475B1) demonstrate how data is converted into reference vector embeddings to identify semantically similar data using graph databases [21].

## Coverage, Freshness, and De-duplication
Coverage claims by aggregators are broad, but reliability hinges on connector uptime, attachment handling, and de-duplication rules. 

### Checklist for SOWs
Because aggregators mix official APIs (like SAM.gov) with proprietary web scraping for local portals, data freshness and completeness can vary. Attachments, particularly scanned PDFs, are a frequent failure point for AI parsing. Cities should require explicit source lists with update cadences, attachment OCR recall targets, and clear de-duplication heuristics to handle overlapping cooperative contracts (e.g., NASPO ValuePoint or Sourcewell) [23] [24].

## What’s Proven vs. Not
Publicly available, independently-vetted accuracy metrics (precision, recall, F1) for municipal AI deployments are virtually non-existent. Evidence consists almost entirely of vendor marketing claims and multi-factor city case studies.

### Table: Documented outcomes (illustrative)

| City/Program | Platform | Time-to-award/ops | Bids/vendor growth | Diversity |
| :--- | :--- | :--- | :--- | :--- |
| **Seattle (Dec 2024)** | OpenGov portal + equity reforms | Average procurement duration dropped by 40% (2022–2025) [3] | Over 2,800 vendors registered on portal [3] | WMBE/BIPOC vendor participation increased by 28% since 2022 [3] |
| **Groveland, FL** | OpenGov | Bid cycle 1–3 months shorter [17] | "More than doubled" responses; ~3,000 suppliers [17] | Not reported |
| **DemandStar marketing** | DemandStar | Not specified | Claims governments get 3x more bid responses [25] | Claims to "Increase supplier diversity" [25] |

*Takeaway:* While cities like Seattle and Groveland show massive improvements in vendor registrations and cycle times, these are the result of holistic procurement transformations (new portals, simplified templates, targeted outreach), making it impossible to attribute the lift solely to AI matching algorithms.

## Governance, Policy, and Contracts
As AI adoption accelerates, responsible AI requirements are codifying fast. Cities must protect themselves from algorithmic bias, vendor lock-in, and security vulnerabilities.

### Table: Must-have clauses and controls

| Domain | Contract/Policy requirement |
| :--- | :--- |
| **Data ownership & export** | City retains ownership of data; require export capabilities to prevent vendor lock-in. |
| **Security & privacy** | Adherence to IT Security Policies; incident response plans for AI solutions [26]. |
| **Algorithmic transparency** | Require a Vendor AI FactSheet detailing model training data, performance conditions, and risks [27]. |
| **Bias & fairness** | Conduct Algorithmic Impact Assessments (AIA) for high-risk systems; apply Racial Equity Toolkits [26]. |
| **Records & disclosure** | Preserve records created when using AI products pursuant to retention schedules for public disclosure [26]. |
| **Use restrictions** | Prohibit use of City data to train public instances of AI solutions; mandate "Human in the Loop" (HITL) reviews for Generative AI outputs [26]. |

*Takeaway:* Cities should look to Seattle's 2025 Generative Artificial Intelligence Policy (POL-211) [26] and San Jose's Vendor AI FactSheet [27] as foundational templates for governing procured AI systems.

## Build vs Buy
Most American cities do not build AI systems—they buy them [28]. The gap between what a procurement team could do five years ago and today is astronomical, making commercial infrastructure a necessity [29]. 

### Practical guidance
Cities should buy commercial procurement portals (OpenGov, Bonfire) to handle internal workflows, scope drafting, and local vendor registration. For multi-source aggregation, cities should not attempt to build custom scrapers for SAM.gov and state cooperatives; instead, they should partner with or direct vendors to existing commercial aggregators (SamSearch, VendorLine). Cooperative purchasing vehicles (like TXShare or Sourcewell) can accelerate the procurement of these AI tools [30] [24].

## Measurement Blueprint
To move beyond vendor marketing claims, cities must treat AI procurement as a recommender-system test with measurable business outcomes.

### Dataset construction and Baselines
Cities should construct a gold-standard dataset of 200–500 historical opportunities, stratified by NAICS codes and complexity. Human evaluators should label vendor matches as relevant or non-relevant. Cities can then compute standard information retrieval metrics (Precision@K, Recall@K, NDCG) [31] against a baseline of simple keyword/NAICS matching. 

### Experiment design
Run A/B tests comparing AI-driven vendor alerts against standard notification methods. Track business KPIs: unique bidders per solicitation, percentage of new-to-file vendors, and MWBE bid share, controlling for seasonality and concurrent outreach campaigns.

## Implementation Roadmap

### 0–30 days
* Stand up governance: Adopt an AI review template, Vendor AI FactSheet [27], and standard contract addenda for data ownership and transparency.
* Select pilots: Focus on internal AI (scope drafting) and local vendor-facing matching.

### 31–60 days
* Integrate systems: Ensure the chosen platform successfully parses historical attachments and maps local commodity codes.
* Launch supplier clinics: Educate local vendors on the new portal and co-market with third-party aggregators for federal/state opportunities.

### 61–90 days
* Run evaluation: Execute the A/B test on vendor alerts and measure the impact on unique bidders and MWBE participation.
* Publish results: Hold vendors accountable to baseline metrics and lock in data-export clauses for long-term flexibility.

## Appendices
To close existing data gaps, researchers and peer cities should target specific FOIA/public records requests:
* **Dallas-Hazel Contract:** Request the SOW, pilot metrics, and any algorithmic impact assessments from the July 2025 deployment [1].
* **Seattle OpenGov Dashboards:** Request the underlying data and evaluation memos linking the OpenGov portal to the 28% WMBE increase [3].
* **Vendor Test Sets:** Request labeled test sets and attachment parsing logs from vendors like Euna, OpenGov, and PlanetBids to independently verify their semantic matching claims.

## References

1. *City of Dallas Partners with Hazel AI to Modernize Procurement and Accelerate Public Service Delivery*. https://www.prnewswire.com/news-releases/city-of-dallas-partners-with-hazel-ai-to-modernize-procurement-and-accelerate-public-service-delivery-302509987.html
2. *Reimagining Procurement Services*. https://dallascityhall.com/government/citymanager/Documents/Council%20Materials/Item%20C.%20Reimagining%20Procurement%20Services.pdf
3. *Modernizing Procurement for Efficiency and Equity - City Innovation Hub*. https://innovation-hub.seattle.gov/2024/12/05/modernizing-procurement-for-efficiency-and-equity/
4. *Purchasing – Welcome to the City of Fort Worth*. https://www.fortworthtexas.gov/departments/finance/purchasing
5. *
    City of Chicago :: eProcurement & the iSupplier Portal
*. https://www.chicago.gov/city/en/depts/fin/provdrs/eProcurementAndtheiSupplierPortal.html
6. *SamSearch - AI for Government Contracting.*. https://samsearch.co/
7. *Search, Analysis & Automation in 2026*. https://samsearch.co/blog/complete-guide-ai-government-contracting-search-analysis-automation-2025
8. *McCarren AI | Win More Government Contracts with AI Agents*. https://www.mccarren.ai/
9. *McCarren Ai - Never Miss a SAM.gov Opportunity Again: AI Tools that Have Your Back*. https://www.mccarren.ai/blog-posts/never-miss-a-sam-gov-opportunity-again-ai-tools-that-have-your-back
10. *Government & Public Bids | Vendorline*. https://vendor.planetbids.com/
11. *How it Works - Vendorline - PlanetBids*. https://vendor.planetbids.com/how-it-works
12. *Product Overview | Vendorline*. https://vendor.planetbids.com/product-overview
13. *SamSearch 3.0: Intelligence-Driven Capture Management | SamSearch Blog*. https://samsearch.co/blog/samsearch-3-0-launch-announcement
14. *Why Vendorline | Vendorline*. https://vendor.planetbids.com/why-vendorline
15. *CITY OF SAN DIEGO FINDS EFFICIENCY, AUTOMATION ...*. https://home.planetbids.com/hubfs/Case%20Studies/PlanetBids_City%20of%20San%20Diego%20Case%20Study.pdf
16. *AI-Powered Public Procurement | OpenGov Blog*. https://opengov.com/article/ai-powered-public-procurement-streamline-operations-with-innovative-scope-drafting-and-supplier-research-capabilities/
17. *Groveland FL Doubles Bid Responses With OpenGov Procurement*. https://opengov.com/customers/groveland-fl-more-than-doubles-bid-responses-with-new-approach-to-supplier-engagement/
18. *Pasadena CA Speeds Up Onboarding with OpenGov Procurement*. https://opengov.com/customers/pasadena-ca-speeds-up-onboarding-with-automated-solicitation-development/
19. *Public Sector Procurement Software | Euna Solutions*. https://bonfirehub.com/
20. *Euna Solutions Launches AI-Powered Solicitation Summaries for Euna Procurement - Euna Solutions*. https://eunasolutions.com/resources/euna-solutions-launches-ai-powered-solicitation-summaries-for-euna-procurement/
21. *US12373475B1 - Automated generation of data objects using semantic comparisons and artificial intelligence 
        - Google Patents*. https://patents.google.com/patent/US12373475B1/en
22. *SAM.gov Get Opportunities Public API | GSA Open Technology*. https://open.gsa.gov/api/get-opportunities-public-api/
23. *Home - NASPO ValuePoint*. https://www.naspovaluepoint.org/
24. *Artificial Intelligence (AI) Readiness, Implementation, and Support Services | Sourcewell*. https://www.sourcewell-mn.gov/solicitations/11063
25. *Government Contract Bids, RFPs & Procurement | DemandStar*. https://network.demandstar.com/
26. *Generative Artificial Intelligence Policy – Seattle (2025)*. https://mrsc.org/getmedia/771150fb-9ec5-47d2-aa63-596318da1890/s42aipol.pdf
27. *
	
    Artificial Intelligence & Inventory | City of San José

*. https://www.sanjoseca.gov/your-government/departments-offices/information-technology/digital-privacy/ai-reviews-algorithm-register
28. *Cities Need a New Model for Incentivizing Responsible AI | TechPolicy.Press*. https://techpolicy.press/cities-need-a-new-model-for-incentivizing-responsible-ai
29. *Build vs. buy in procurement AI: buy infrastructure, build advantage - Blog - Omnea*. https://www.omnea.co/blog/build-vs-buy-in-procurement
30. *Texas Cities Gain Access to Curated Collection of AI Vendors*. https://insider.govtech.com/texas/news/texas-cities-gain-access-to-curated-collection-of-ai-vendors
31. *Evaluating Recommender Systems: Survey and Framework | ACM Computing Surveys*. https://dl.acm.org/doi/10.1145/3556536
