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
