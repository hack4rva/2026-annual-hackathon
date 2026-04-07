# JTBD Analysis — Procurement Risk & Opportunity Review

**Pillar:** A Thriving City Hall
**Problem Statement (verbatim):** Procurement Risk & Opportunity Review — Help City staff identify valid, compliant contracts across City, state, and federal sources without manual PDF hunting.
**Applies to:** CivicPulse AI, Mira, Vendor Contract Mgmt, RVA Contract Lens

---

## Jobs To Be Done

### Job 1 — The Procurement Officer Facing a Renewal Deadline
> "When I (a Richmond procurement officer responsible for a portfolio of active contracts) need to determine whether a specific contract is still valid, compliant, and eligible for renewal before a deadline that is days away, I want to see the contract's compliance status across City, state, and federal registries in one place without opening a single PDF, so I can make a renew/rebid/escalate decision in minutes instead of days and avoid missing a deadline that could cost the city tens of thousands of dollars."

**Current workaround:** Open the contract PDF. Manually extract the vendor name, contract number, and expiration date. Check SAM.gov for federal compliance. Check VITA for state contract status. Cross-reference internal spreadsheets. Email colleagues who might remember the history. Spend 1–3 days per contract.
**Pain:** Richmond manages ~1,400 active contracts worth ~$7 billion. Even basic verification requires cross-referencing fragmented sources (PDFs, state databases, federal registries, internal spreadsheets). A missed renewal window triggers rebidding, compliance risk, or service interruption. Staff can't scale — one officer can review a handful of contracts per week manually.

### Job 2 — The New Staff Member Who Inherited a Portfolio With No Context
> "When I (a newly hired or transferred procurement staff member) am handed a portfolio of contracts that a predecessor managed — with no documentation of past decisions, vendor relationships, or institutional context — I want to see the full history of each contract (when it was last reviewed, what decisions were made, why the vendor was selected) in a structured, searchable system, so I can make informed decisions without starting from zero and repeating mistakes the city already paid for."

**Current workaround:** Ask colleagues if they remember. Search email archives. Read through physical or PDF file folders. Reconstruct the decision history from fragments. Often, just start over — losing years of institutional knowledge.
**Pain:** Municipal procurement has chronic institutional knowledge loss. When experienced staff leave, decades of context disappear. New staff make decisions without knowing what was tried before, why certain vendors were selected or rejected, or what compliance issues were identified. This is how cities end up in bad contracts — not malice, but amnesia.

### Job 3 — The Resident or Watchdog Asking "Where Does the Money Go?"
> "When I (a Richmond resident, journalist, or civic accountability advocate) want to understand how the city spends public money on contracts — which vendors get the most business, which departments spend the most, whether minority-owned businesses get a fair share — I want to access procurement data in plain language without filing a FOIA request, so I can hold my government accountable and participate in public oversight of spending decisions."

**Current workaround:** File FOIA requests (slow, often incomplete). Scrape fragments from city council agendas. Read through budget documents that don't connect to individual contracts. Give up.
**Pain:** Procurement data is effectively invisible to the public. Even when data technically exists in public records, it's locked inside PDFs, scattered across systems, and presented in jargon that requires procurement expertise to interpret. Public accountability is impossible without plain-language access.

---

## Open Questions

### Data Questions
1. What procurement/contract management system does Richmond currently use? (SAP, Oracle, a custom system, spreadsheets?)
2. How are contracts currently stored? Are they in a centralized document management system, or scattered across department file shares?
3. Does Richmond publish procurement data on the Socrata Open Data Portal? If so, which datasets, and when were they last updated?
4. What is the status of the VITA statewide contract API? Is it available now, or still inaccessible as it was during the hackathon?
5. Does Richmond have a vendor portal where vendors can see contract status, upcoming opportunities, and compliance requirements?

### User Questions
6. How many procurement staff does Richmond employ? What is their average caseload (contracts per person)?
7. What is the current average time to verify a single contract's compliance status end-to-end?
8. Have procurement staff been consulted about what tools they actually want, or are demos building to assumed needs?
9. What is the staff turnover rate in procurement? How much institutional knowledge is lost per departure?

### Integration Questions
10. Can any of these demos integrate with Richmond's existing procurement system, or do they require a parallel system?
11. Does the City have an existing relationship with a procurement software vendor (e.g., Jaggaer, SAP Ariba, Coupa)?
12. What would the IT procurement pathway look like for adopting one of these tools? Is there a security review, ATO, or approval process?

### Equity Questions
13. What percentage of Richmond's procurement dollars go to MBE/SWaM-certified businesses? Is this tracked?
14. Does the current procurement process create barriers for small or minority-owned vendors who might struggle with compliance documentation?
15. If procurement data is made public, are there privacy or competitive sensitivity concerns that need to be managed?

### Prior Art Questions
16. Are any comparable cities using AI-powered procurement review tools? What has worked and what has failed?
17. Has Richmond previously attempted procurement modernization? What happened?

---

## Answered Questions (Parallel AI Research, March 2026)

Research files: `_research-answers/proc_q1_system_data.md`, `proc_q2_staffing_equity.md`, `proc_q3_prior_art.md`

### Data Questions

**1. What procurement/contract management system does Richmond currently use?**
[Confirmed] Oracle RAPIDS (RVA: Advancing Proven Innovative Direction System) — an Oracle E-Business Suite ERP. Not SAP, not Jaggaer, not Coupa. OpenGov used for solicitations (IFBs/RFPs) at procurement.opengov.com/portal/rva. Oracle iSupplier for vendor self-service. OnBase for document/contract storage and management.

**2. How are contracts currently stored?**
[Confirmed] Mixed/hybrid approach: OnBase (enterprise content management) for document storage, Oracle RAPIDS for transactional records (POs, invoicing, payments), OpenGov for solicitation artifacts. A city job posting confirms liaison role between RAPIDS and OnBase, indicating they are integrated but separate systems.

**3. Does Richmond publish procurement data on the Socrata Open Data Portal?**
[Confirmed] Two key datasets: (1) **City Contracts** `xqn7-jvv2` — 1,367 rows, fields: agency_department, contract_number, contract_value, supplier, procurement_type, description, type_of_solicitation, effective_from, effective_to. Last updated **March 30, 2026** (monthly updates). (2) **City Payment Register FY16+** `5y73-enav` — payment-level data from FY2016 onward.

**4. What is the status of the VITA statewide contract API?**
[Confirmed — No API] VITA CobblestoneContracts portal exists at vita.cobblestonesystems.com/public/ for web searching state IT contracts. **No documented public API.** Access is web-only (manual search or scraping). eVA (electronic Virginia) statewide procurement data IS available on the Virginia Open Data Portal with daily updates ("eVA Procurement Data 2024" dataset) — this is the viable programmatic data source.

**5. Does Richmond have a vendor portal?**
[Confirmed] Oracle iSupplier portal at rva.gov/procurement-services/supplier-portal. Mandatory registration point for all suppliers. Features: view opportunities, manage account info, access accounts payable. Communications come from "RAPIDS Workflow Mailer."

### User Questions

**6. How many procurement staff does Richmond employ?**
[Confirmed] 32 FTE in the Department of Procurement Services (FY2025 proposed, up from 27 FTE in FY2024). Specific caseload (contracts per person) not published.

**7. What is the current average time to verify a single contract's compliance status?**
[Partial] Per-contract compliance verification time not directly reported. Proxy metrics: RFP cycle averages **307 days** end-to-end (FY2023), IFB averages **118 days** from advertisement to award (FY2023). City targets for FY2025: 150 days for RFP, 90 days for IFB. These are cycle times, not verification-specific, but indicate the scale of the bottleneck.

**8. Have procurement staff been consulted about what tools they actually want?**
[Still Unknown] No public evidence of a structured needs assessment, user research, or staff survey within the Department of Procurement Services. The p-card reset and IG report suggest top-down interventions rather than bottom-up tool requests.

**9. What is the staff turnover rate in procurement?**
[Still Unknown] Not publicly reported for procurement specifically. A citywide HR audit quantified turnover costs across the entire city government but provided no department-level breakdown.

### Integration Questions

**10. Can demos integrate with Richmond's existing procurement system?**
[Partial] Would need to connect to the Oracle RAPIDS + OnBase + OpenGov ecosystem. No standard public APIs documented for RAPIDS or OnBase. OpenGov has a portal. Socrata datasets (xqn7-jvv2, 5y73-enav) are the most accessible integration points — CSV download or Socrata SODA API. Any deeper integration requires formal procurement pathway.

**11. Does the City have an existing relationship with a procurement software vendor?**
[Confirmed] Two confirmed vendors: **Oracle** (RAPIDS ERP + iSupplier) and **OpenGov** (solicitation portal). No relationship with Jaggaer, SAP Ariba, or Coupa documented.

**12. What would the IT procurement pathway look like for adopting one of these tools?**
[Partial] Governed by the Virginia Public Procurement Act (VPPA) and Richmond City Code Chapter 21. No formal ATO (Authority to Operate) process documented publicly. Requirements specified per-solicitation in RFP documents. Vendors must register through the Oracle iSupplier Supplier Portal. For definitive pathway, coordinate with Dept of Procurement Services directly.

### Equity Questions

**13. What percentage of Richmond's procurement dollars go to MBE/SWaM?**
[Confirmed] ~10% MBE spend historically (e.g., $27.3M in FY2022). FY2025 target: **9%** (set by Office of Minority Business Development / OMBD). Virginia state SWaM goal is much higher: **42%** (HB61, 2026). City tracks via OMBD using **B2GNow** compliance monitoring software. Richmond meets its own MBE target but is far below the state SWaM target.

**14. Does procurement create barriers for small/minority vendors?**
[Confirmed] Yes. Inspector General report on MBE Compliance highlights documentation and goal-verification complexity as barriers. 307-day RFP cycle is a major barrier for smaller firms lacking financial resilience. B2GNow adopted to streamline tracking but the underlying process remains long and complex.

**15. If procurement data is made public, are there privacy/competitive concerns?**
[Confirmed — Already Highly Transparent] Richmond already publishes: contract records (monthly on Socrata), all IFBs/RFPs and their outcomes on OpenGov (including unsuccessful bidders and bid amounts). Virginia FOIA governs redactions of proprietary/competitive info. No additional local privacy constraints beyond state law and FOIA identified.

### Prior Art Questions

**16. Are comparable cities using AI-powered procurement review tools?**
[Confirmed — Not Yet] No widespread municipal adoption of AI procurement tools. Workday CLM (Evisort AI) and Thomson Reuters AI tools exist commercially but "publicly documented city implementations at scale are sparse." ICMA providing guidance on AI governance. The space is exploratory, not mature. Notable non-AI modernizations: Tempe (Bonfire), Portland (OCDS dashboards / Portland Lift), Tucson (OpenGov), NYC (Checkbook NYC with API).

**17. Has Richmond previously attempted procurement modernization?**
[Confirmed] OpenGov adopted for solicitation transparency. But **significant control failures persist**: P-card audit uncovered **$5M questionable expenses**, triggering a "p-card reset" (320 cards → 67 cards, April 30 2025). IG report on MBE Compliance. City Auditor flagged "inadequate internal controls" in FY2025 annual report. These findings indicate modernization is underway but far from complete.

---

### Summary: What We Now Know vs. What Remains Unknown

| Status | Count | Key gaps |
|--------|-------|----------|
| [Confirmed] | 11 | — |
| [Partial] | 3 | Compliance verification time, integration pathway, per-contract time |
| [Still Unknown] | 2 | Staff consultation (#8), turnover rate (#9) — both require SME outreach |

**Critical finding:** Richmond's p-card reset (320→67 cards) and $5M questionable expense audit are explosive context for Ideas 12 (Contract Expiry Dashboard) and 17 (Data Health Dashboard). These tools directly address the control failures the City Auditor flagged.

**Critical finding:** The 9% city MBE target vs. 42% state SWaM target gap strengthens the case for Idea 20 (MBE/SWaM Spend Tracker) — the city is measuring against a far lower bar than the state expects.

**Critical data source confirmed:** eVA procurement data on Virginia Open Data Portal (daily updates) is the viable programmatic path to state-level price comparisons. VITA CobblestoneContracts has no API — web scraping only.
