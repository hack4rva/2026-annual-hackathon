# Prior Art Research — Procurement Risk & Opportunity Review

**Pillar:** A Thriving City Hall
**Problem Statement:** Help City staff identify valid, compliant contracts across City, state, and federal sources without manual PDF hunting.
**Applies to:** CivicPulse AI, Mira, Vendor Contract Mgmt, RVA Contract Lens
**Research Date:** March 31, 2026
**Method:** Synthesis of existing pillar research corpus (51 reports in `pillar-repos/pillar-thriving-city-hall/research/`) + supplemental web search + Parallel AI deep research

**Primary sources from existing corpus:**
- `E3_prior_art_procurement_tools.md` — Procurement tool prior art nationally
- `D2_data_contracts.md` — City Contracts Socrata dataset (xqn7-jvv2, 1,362 records)
- `D3_data_federal_procurement.md` — SAM.gov, USAspending, eVA APIs
- `D5_data_quality_gaps.md` — Data fragmentation and quality issues
- `C3_services_procurement_systems.md` — Richmond's procurement system stack
- `F3_opportunities_procurement.md` — Ranked procurement approaches
- `G2_risks_procurement_compliance.md` — VPPA compliance requirements
- `B3_users_procurement_staff.md` — Staff pain points with evidence
- `A2_problem_landscape_procurement_review.md` — Problem landscape detail
- `H3_mvp_procurement.md` — What's realistic for a weekend prototype

---

## Query 1: Regional Implementations

### What Has Been Built in Comparable US Cities

**Richmond — OpenGov Procurement Portal (live)**
- Richmond operates a procurement portal at procurement.opengov.com/portal/rva
- Allows users to search active projects, view departments, and access vendor information
- **Key lesson:** Richmond already has a procurement portal. The demos are not building from nothing — they're adding intelligence (AI extraction, compliance checking, risk scoring) on top of existing infrastructure. The question is whether they integrate with what exists or run in parallel.

**Virginia — eVA e-Procurement System (live, statewide)**
- Virginia's electronic procurement portal at eva.virginia.gov
- Vendors register, access solicitations, submit bids, track awards
- Mandatory for state procurement; used by many localities
- **Key lesson:** eVA is the state-level procurement backbone. Any Richmond procurement tool must either integrate with eVA or explain why it doesn't need to.

**Virginia — VITA CobblestoneContracts (live)**
- VITA manages statewide IT contracts via CobblestoneContracts at vita.cobblestonesystems.com/public/
- Searchable public database of state IT contracts
- **Key lesson:** This is the exact data source Vendor Contract Mgmt tried to access during the hackathon but found unavailable. The data exists — access may require a formal relationship with VITA.

**Richmond — JustFOIA Pilot (launching May 2026)**
- Richmond is piloting JustFOIA, a FOIA transparency platform
- Will include a public FOIA Library of frequently requested records
- **Key lesson:** The City is already investing in transparency tooling. A procurement transparency layer (like RVA Contract Lens's public portal) aligns with this institutional direction.

### Commercial AI Contract Review Tools (2025–2026)

**CompareX — Government Contract Compliance AI**
- Purpose-built for public sector procurement
- Claims 90% reduction in review time
- Features: compliance gap detection for public procurement regulations, contract comparison against baseline terms, AI chat for stakeholder questions
- **Key lesson:** The capability the demos built already exists commercially. The question is build vs. buy — and whether a hackathon prototype can compete with a purpose-built vendor solution.

**SquarePact — Enterprise/Government Procurement AI**
- Built-in regulatory frameworks (2 CFR 200, FAR, DFARS)
- Auto-disqualification of non-compliant proposals
- Clause library management, Microsoft Word integration
- **Key lesson:** Regulatory compliance checking is a solved problem in commercial tools. The demos' value proposition must go beyond basic compliance to justify a custom build.

**SimpliContract mNemoAI (launched March 2026)**
- Domain-tuned AI for contract data extraction and obligation monitoring
- Real-time compliance monitoring connected to business systems
- **Key lesson:** The market is moving fast. By the time a hackathon prototype is piloted, commercial alternatives may be further ahead.

**CobblestoneContracts (used by VITA)**
- Contract lifecycle management with compliance tracking
- Already in use in Virginia's state procurement ecosystem
- **Key lesson:** The Commonwealth already has a CLM vendor. Integration with CobblestoneContracts would give Richmond access to state-level contract data.

### What Does NOT Exist Yet
- No commercial tool does federated search across SAM.gov + FBI screening + FCC lists + local contract PDFs in a single query (RVA Contract Lens's unique value proposition)
- No commercial tool specifically addresses municipal institutional knowledge loss (the decision timeline feature)
- No tool connects procurement data to public-facing transparency portals in plain language at the local level

---

## Query 2: Real Data Sources in Richmond

### Confirmed Real Data Sources

| Dataset | Owner | Access | Cadence | Notes |
|---------|-------|--------|---------|-------|
| OpenGov Procurement Portal | City of Richmond | procurement.opengov.com/portal/rva | Active projects | Public, searchable |
| Socrata Open Data — Procurement | City of Richmond | data.richmondgov.com | Variable | Check for procurement-specific datasets |
| eVA — Virginia e-Procurement | Virginia DGS | eva.virginia.gov | Real-time | Statewide; covers state contracts |
| VITA CobblestoneContracts | Virginia IT Agency | vita.cobblestonesystems.com/public/ | Updated with new contracts | State IT contracts only |
| SAM.gov | Federal GSA | sam.gov API | Real-time | Entity, exclusion, and contract data; free API |
| SWaM Database | VA DSBSD | sbsd.virginia.gov | Updated with certifications | Small, Women-, Minority-owned business data |
| FCC Prohibited Vendor Lists | FCC | fcc.gov | Updated per enforcement | Covered entities list |
| FBI Consolidated Screening | FBI/Treasury | ofac.treasury.gov | Updated per enforcement | SDN and related lists |
| Richmond Contract PDFs | City of Richmond | Various; primarily internal | Per contract execution | Not centralized; this is the core problem |

### Critical Data Gaps
- **Contract PDF centralization:** The fundamental problem is that Richmond's contracts exist as individual PDFs across department file shares. No single system contains all contracts in a searchable, structured format. Every demo addresses this gap differently (OCR extraction, manual upload, federated search).
- **VITA API availability:** Vendor Contract Mgmt explicitly noted that the VITA contract API was unavailable during the hackathon. Whether this is a permanent access issue or a temporary one matters for any demo that needs state contract data.
- **Internal procurement system data:** Whatever CRM/ERP Richmond uses for procurement management is the canonical source of truth for contract status. None of the demos appear to have accessed this directly — they all work from PDFs and external APIs.

---

## Query 3: Failure Modes and Equity Gaps

### Documented Findings

**AI Extraction Accuracy Risk**
OCR-based contract extraction (used by both Mira and CivicPulse AI) has known failure modes: scanned documents with poor image quality, handwritten annotations, multi-column layouts, and contracts with non-standard formatting. Any AI extraction tool must document its accuracy rate and have a human review step. Mira correctly includes a side-by-side PDF preview for verification.

**Staff Adoption Is the Real Barrier**
The most common failure mode for procurement automation tools is not technical but organizational: staff don't use them. Procurement officers who have managed contracts manually for years resist tools that change their workflow — especially if the tool requires data entry, learning a new interface, or trusting AI recommendations. The demos that minimize workflow disruption (RVA Contract Lens's 8-second verdict, Mira's simple upload) have better adoption prospects than those requiring significant behavior change.

**Vendor Concentration and AI Bias**
If an AI scoring model penalizes vendors for characteristics correlated with size (fewer past contracts, smaller insurance policies, less sophisticated compliance documentation), it will systematically disadvantage small and minority-owned businesses — the opposite of Richmond's stated equity goals. RVA Contract Lens includes transparent scoring logic, which is the right approach. CivicPulse AI and Mira do not discuss how their AI models handle this.

**Public Portal Privacy Considerations**
Making procurement data publicly accessible (as RVA Contract Lens and City Budget Dashboard propose) requires careful handling of: vendor proprietary pricing, staff names in contract documents, ongoing negotiation details, and competitive bidding sensitivity. A public portal that exposes too much can harm the city's negotiating position; one that exposes too little doesn't serve transparency.

---

## Synthesis

### What Richmond Could Adopt or Adapt
1. **CompareX or SquarePact** — commercial procurement AI tools that are purpose-built for government. The question is whether Richmond can afford them (or justify the cost vs. a custom build).
2. **CobblestoneContracts integration** — VITA already uses this. If Richmond could access state contract data through the existing CobblestoneContracts instance, it would eliminate the VITA API problem.
3. **OpenGov portal enhancement** — Richmond already has an OpenGov procurement portal. Adding AI extraction and compliance checking to the existing portal is simpler than building a new system.

### What Has Failed and Why
- Procurement tools that require staff to change their entire workflow — adoption failure
- AI extraction without human verification — accuracy failure (staff lose trust)
- Public portals that expose raw data without plain-language translation — usability failure

### Confirmed Real Data Sources
| Dataset | Owner | Access | Cadence |
|---------|-------|--------|---------|
| OpenGov Procurement Portal | City of Richmond | procurement.opengov.com | Active projects |
| eVA e-Procurement | Virginia DGS | eva.virginia.gov | Real-time |
| SAM.gov | Federal GSA | sam.gov API | Real-time |
| VITA CobblestoneContracts | Virginia IT Agency | vita.cobblestonesystems.com | Per contract |

### User Groups Systematically Excluded
- **Small/minority-owned vendors** — procurement complexity is a barrier to entry; tools that make procurement more efficient for staff but don't simplify vendor participation reinforce existing inequity
- **Residents seeking transparency** — procurement data in PDF/jargon format excludes non-expert public oversight
- **New procurement staff** — institutional knowledge loss creates a cycle where the least experienced staff handle the most complex decisions

### Biggest Gap / Genuine Opportunity
Four teams independently built AI-powered contract review tools — this signals clear, validated demand from the procurement problem space. The unique opportunity is RVA Contract Lens's federated search across 8 live data sources with transparent scoring, combined with Mira's proven ability to work with real city contract PDFs at $200/month. No commercial tool currently does federated municipal compliance checking at this price point. The path forward may be combining the best of both approaches.

---

## Parallel AI Research Queries (Submitted — Awaiting Results)

Task IDs:
- Q1 Regional: `trun_1848795af0f24b80ac0b5b41be53eeec`
- Q2 Data: `trun_1848795af0f24b80822247dd5c8f0218`
- Q3 Equity: `trun_1848795af0f24b80b884fe35331caf2a`

Results will be saved to `_parallel-research/procurement-q1-regional.md`, `procurement-q2-data.md`, `procurement-q3-equity.md` when complete.
