# Innovation Analysis: RVA Contract Lens

**Generated:** April 2, 2026
**Inputs:** RESEARCH_RESULT.md, 6 Innovation Lenses

---

## 1. Blue Ocean Reframing (ERRC Grid)

| Factor | Action | Details |
|--------|--------|---------|
| Building a custom data aggregation platform | Eliminate | True cross-level procurement aggregation is vendor-led (GovSpend covers 95% SLED spending). Eliminate the build-vs-buy debate — buy aggregation, build the local intelligence layer. |
| Naive web scraping of SAM.gov and cooperative portals | Eliminate | SAM.gov's Terms of Use prohibit automated scraping. OMNIA Partners prohibits robots/spiders. Eliminate any approach that violates source terms of use. |
| Manual vendor identity matching across systems | Reduce | The DUNS-to-UEI transition left legacy data in limbo. Reduce manual matching with entity resolution libraries (Python `dedupe`, `splink`) instead of human-by-human reconciliation. |
| OCDS as canonical data standard | Raise | Portland is the first US city to implement OCDS, publishing weekly JSON/CSV that links solicitations to payments. Raise Richmond to this standard for its own procurement data. |
| Cooperative contract "front door" for department buyers | Create | Houston's Pavilion integration created a guided intake that checks cooperative contracts before initiating new RFPs. No Richmond tool does this. Create the front door. |

**Core assumption challenged:** That a hackathon team should build unified procurement search across federal, state, and local tiers. The research shows this takes $600K-$1.4M and 9-18 months even in phased deployment. The real opportunity is narrower: consolidate Richmond's own data and connect to existing cooperative search tools.

**Reframed value proposition:** RVA Contract Lens is not a unified procurement search engine — it's a "local data consolidation + cooperative discovery" tool. Consolidate Richmond's contracts (Socrata), connect to cooperative search (Pavilion, eVA), and enrich vendor records with UEI. Leave federal aggregation to GovSpend.

---

## 2. Rapid Ideation — 8 Divergent Approaches

1. **Local Contract Search Portal** — A clean search UI over Richmond's Socrata contracts dataset. Filter by vendor, department, amount, expiry date. The table that should have existed years ago.
2. **Cooperative Contract Matcher** — Staff enters what they need. Tool searches Pavilion (50K+ cooperative contracts) and eVA's open data. Returns matching cooperatives with pricing and terms.
3. **Vendor Identity Resolver** — Upload Richmond's vendor master. Tool matches against SAM.gov UEI database to clean identities, flag duplicates, and connect legacy DUNS to current UEI.
4. **OCDS Data Publisher** — Transform Richmond's Socrata contracts and payments data into OCDS format. Publish weekly JSON/CSV releases. Instantly make Richmond's data interoperable with Portland and international standards.
5. **Contract Spend Visualizer** — Map Richmond's contract spending geographically: which vendors are local vs. out-of-state? How much flows to MBE vendors by category? Visual equity analysis.
6. **"Before You Bid" Intake Wizard** — Before a department starts an RFP, the wizard checks: (1) Is there an existing Richmond contract? (2) Is there a cooperative? (3) Is there an eVA state contract? Only if all three are "no" does it proceed to a new solicitation.
7. **Cross-Reference Audit Tool** — Join contracts to payments (like the Drift Scanner) but add a vendor identity layer: are there payments to vendors not in the vendor master? Are there vendors with multiple identities?
8. **Procurement Opportunity Feed** — Publish Richmond's upcoming solicitations as a structured feed (RSS/API) that vendors can subscribe to. Increase competition by making opportunities findable.

**Most provocative:** #4 — OCDS Data Publisher would make Richmond only the second US city (after Portland) to implement OCDS. This is a standards-setting move that signals procurement maturity and enables future interoperability.
**Most feasible:** #1 — Local Contract Search Portal is the simplest version of Contract Lens: a search UI over existing Socrata data. Build in hours, not months.

---

## 3. Rapid Design Sprint

**Problem in one sentence:** Richmond's procurement data is siloed in Socrata (contracts), RAPIDS (financials), and various cooperatives, with no unified way for staff or the public to search across them.

**Target user:** A procurement specialist who needs to determine whether Richmond has an existing contract for janitorial services before initiating a new solicitation.

**User Journey:**
- Start: Specialist opens RVA Contract Lens. Searches "janitorial" or selects NIGP code 910-00.
- Friction: Currently, the specialist would search Socrata's raw data table (unfriendly UI), check eVA separately, log into Pavilion separately, and ask colleagues if they know of existing contracts. This takes 30-60 minutes.
- Outcome: RVA Contract Lens returns: (1) Two active Richmond contracts for janitorial services [details], (2) Three cooperative contracts available via OMNIA and Sourcewell [links], (3) eVA state contract available [link]. "Recommendation: Use existing cooperative contract OMNIA #1234 — estimated admin savings of $500-$1,000."

**Lowest-fidelity prototype:** A search page that queries Richmond's Socrata contracts API by keyword and/or NIGP code, and includes iframe embeds or deep links to Pavilion and eVA search results for the same query.

**First test:** Give 5 recent Richmond purchase requests to the tool. For each, determine if an existing contract or cooperative could have fulfilled the need. If >50% have matches, the tool saves significant solicitation effort.

---

## 4. Opportunity Mapper

### Pattern A: Local Search + Cooperative Deep Links (Quick Win)
- **User:** Procurement specialists and department buyers
- **Outcome:** One-stop search across Richmond contracts and cooperative marketplace, reducing redundant solicitations
- **Workflow:** Build search UI → query Socrata API for Richmond contracts → deep-link to Pavilion and eVA for cooperative matches → display combined results → link to existing contract details or RFP template if no match
- **Dependencies:** Socrata API (public, no auth), Pavilion (free for government), eVA open data portal (public CSV downloads)
- **Richmond relevance:** OMNIA estimates $500-$1,000 in admin savings per cooperative purchase. If Richmond routes even 20% of new solicitations to existing cooperatives, the annual savings are substantial.

### Pattern B: OCDS-Based Procurement Data Hub (Stretch)
- **User:** Procurement leadership, auditors, vendors, and civic data users
- **Outcome:** Richmond's procurement data published in OCDS format, enabling advanced analytics, vendor participation, and cross-city comparison
- **Workflow:** Map Socrata fields to OCDS schema → add UEI-based vendor identity resolution → publish weekly JSON/CSV releases → build BI dashboards for equity metrics, cycle times, and vendor diversity → integrate cooperative and state data via API
- **Dependencies:** OCDS mapping expertise, entity resolution pipeline (Python `dedupe`), NIGP-to-NAICS crosswalk, dedicated data engineer, 6-12 month effort
- **Richmond relevance:** Portland's OCDS implementation increased vendor participation and enabled equity monitoring dashboards. Richmond could be the second US city to adopt OCDS, positioning itself as a procurement transparency leader.

**Recommendation:** Pattern A is the hackathon build — immediate utility, zero procurement cost, public data only. Pattern B is the 12-month institutional investment that requires a dedicated team and executive sponsorship.

---

## 5. Problem Scoping

| Dimension | Score (1-5) | Notes |
|-----------|-------------|-------|
| Impact | 4 | Reducing redundant solicitations saves weeks of cycle time and $500-$1,000 per cooperative purchase in admin costs. |
| Feasibility | 3 | Local search is easy (Socrata API). Cooperative integration requires deep-linking or API access. Full OCDS implementation is a multi-month project. |
| Data availability | 4 | Richmond contracts on Socrata (public). Pavilion is free for government. eVA has open data downloads. The data exists — the integration is the work. |
| Clarity | 3 | "Unified procurement search" is broad. Must scope tightly: local search + cooperative discovery is achievable; full cross-level aggregation is not. |
| Demo credibility | 4 | Searching for a real commodity and finding both a Richmond contract and a cooperative alternative is a compelling demo. |

**Richmond-specific alignment:** Santa Clara County's procurement audit flagged the lack of a "single source of truth" as a root cause of procurement failures. San Diego County solved this with Buynet. Richmond can replicate the concept using existing public data and free cooperative search tools.

**Policy/eligibility risks:** SAM.gov terms of use prohibit bulk data redistribution and scraping. OMNIA Partners prohibits automated harvesting. RVA Contract Lens must use authorized APIs and deep-linking, not scraping. Virginia FOIA applies to any procurement data published — pre-award confidentiality rules must be respected.

**Weekend MVP shapes:**
1. **Minimal:** Search UI querying Socrata API + deep links to Pavilion and eVA for the same search term. 6-8 hours.
2. **Enhanced:** Add NIGP code mapping, vendor identity matching against SAM.gov UEI, and a "Before You Bid" intake flow that checks existing contracts first. 14-18 hours.

---

## 6. Assumption Mapping

| # | Assumption | Risk | Uncertainty | Priority |
|---|-----------|------|-------------|----------|
| 1 | Pavilion's free search API/interface is accessible for integration | Medium | Medium | TEST FIRST |
| 2 | Significant redundant solicitations exist that cooperatives could fulfill | High | Medium | TEST SECOND |
| 3 | Procurement staff will check a new tool before initiating RFPs | High | High | TEST THIRD |
| 4 | Socrata's API is performant enough for real-time search | Low | Low | CONFIRMED |
| 5 | NIGP-to-NAICS crosswalk exists in a usable format | Medium | Medium | VERIFY |
| 6 | Vendor identity can be resolved between Richmond and SAM.gov data | Medium | High | ASSESS |
| 7 | OCDS adoption would be supported by Richmond's procurement leadership | Medium | High | VALIDATE |

**Top 3 to validate:**
1. **Pavilion integration works** — Validation: Visit Pavilion's free search and test with 5 Richmond-relevant commodity types. If results are relevant and linkable, deep-linking works. If an API is available, build a direct integration.
2. **Redundant solicitations exist** — Validation: Review 20 recent Richmond RFPs. For each, search Pavilion and eVA. If >30% have cooperative matches, the tool delivers real savings. Houston's integration proves the model works.
3. **Staff will use it** — Validation: Demo to 3 procurement specialists. Ask: "Would you check this before starting a new RFP?" If they say "I already know my cooperatives," the value proposition may be more about new staff or infrequent buyers.

---

## Key Takeaway

The vision of fully unified procurement search across local, state, and federal tiers is a $600K-$1.4M, 18-month project. The hackathon opportunity is narrower but still valuable: consolidate Richmond's own contract data into a clean search UI and connect it to free cooperative search tools (Pavilion, eVA). If even 20% of new solicitations are redirected to existing cooperatives, the administrative savings alone justify the investment. The OCDS publishing vision (Pattern B) would make Richmond a national leader in procurement transparency — but that's a 12-month institutional commitment, not a weekend build.
