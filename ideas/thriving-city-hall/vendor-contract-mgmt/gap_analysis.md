# Gap Analysis — Vendor & Contract Management Web App

**Pillar:** A Thriving City Hall
**Problem Statement (verbatim):** Procurement Risk & Opportunity Review — Help City staff identify valid, compliant contracts across City, state, and federal sources without manual PDF hunting.
**Demo:** Vendor & Contract Management Web App
**Tech Stack:** Next.js, Firebase (authentication), Socrata datasets, VITA contract data (attempted), AI summarization agent
**Review Date:** March 31, 2026

---

## Problem Grounding

**Problem statement (verbatim):** Help City staff identify valid, compliant contracts across City, state, and federal sources without manual PDF hunting.

**Primary user:** A Richmond government procurement official who manages vendor contracts and currently lacks a unified view of procurement relationships — and a vendor who contracts with the City and has no self-service portal for contract status.

**Pain today:**
- Contract, compliance, and vendor data is scattered across Socrata, VITA, internal spreadsheets, and PDF files
- Government officials and vendors have no shared portal — communication happens through email, phone, and FOIA
- VITA statewide contract data exists but the API was unavailable during the hackathon
- Staff must manually clean and cross-reference data from multiple open data sources

**Desired outcome:**
- Government officials see a unified dashboard of contracts, vendors, and upcoming actions
- Vendors can view their own contract status and respond to procurement actions
- Both sides operate from the same data, reducing information asymmetry
- AI summarization reduces the time to understand contract portfolios

---

## Data Source Map

| Data Claim in Demo | Real Source | Owner | Access | Cadence | Status |
|--------------------|------------|-------|--------|---------|--------|
| Vendor names, procurement details, contract information | **Socrata open procurement datasets** | City of Richmond | SODA API (data.richmondgov.com) | Monthly updates | ✅ **Real data — Socrata confirmed** |
| Dashboard cards (expiring contracts, cheap alternatives, renewals) | Derived from Socrata data | Team-computed | Via Socrata API | Per refresh | ✅ Real data basis — presentation logic is team-built |
| VITA statewide contract data | **VITA CobblestoneContracts** | Virginia IT Agency | vita.cobblestonesystems.com/public/ | Per contract | ❌ **Attempted but unavailable** — team explicitly noted API was down during hackathon |
| PDF upload and extraction (VITA workaround) | User-uploaded PDFs | User-provided | Manual upload | Per upload | ⚠️ Functional workaround — source PDFs not identified as real Richmond contracts |
| AI summarization of vendor data | AI agent (model not specified) | Team-built | Automatic | Per page load | ⚠️ Summarization demonstrated but AI model and training data undisclosed |
| Total spend, unique vendors | Derived from Socrata data | Team-computed | Via Socrata API | Per refresh | ✅ Real data basis |
| Firebase authentication (gov/vendor roles) | Firebase Auth | Google/Team | Firebase SDK | Real-time | ✅ Functional — not a data source but an infrastructure component |

**Critical finding:** Vendor Contract Mgmt is the only procurement demo that explicitly names Socrata as its data source and demonstrates using it. This is significant — Socrata xqn7-jvv2 has 1,362 contract records with structured metadata (contract_number, supplier, contract_value, effective_from, effective_to, agency_department). The team also attempted VITA integration, which shows awareness of the cross-source requirement even though the integration failed during the hackathon.

**What Vendor Contract Mgmt does NOT connect to:**
- SAM.gov (federal compliance/exclusion data) — not used
- eVA (Virginia e-procurement portal) — not mentioned
- OpenGov portal (procurement.opengov.com/portal/rva) — not used
- Internal ERP (Oracle RAPIDS) — not accessed

---

## Gap Analysis

### Job 1 — Procurement Officer Facing a Renewal Deadline
**Demo coverage:** Partial

The dashboard displays expiring contracts and renewal information from Socrata data. The AI summarization provides a portfolio overview (total spend, unique vendors). The contracts page shows detailed records. This gives an officer a structured view of their portfolio — a meaningful improvement over raw Socrata browsing.

**Missing:**
- **No cross-registry compliance checking.** The problem statement says "across City, state, and federal sources." Vendor Contract Mgmt connects to Socrata (City) and attempted VITA (state), but failed. No federal source (SAM.gov) is integrated. The officer gets contract data but not compliance status.
- **No urgency triage.** Dashboard cards show categories (expiring, alternatives, renewals) but do not prioritize by deadline proximity.
- **VITA integration blocked.** The team's instinct was correct — VITA data is essential for state contract compliance. The API being unavailable is a real blocker, not a team failure. VITA CobblestoneContracts is web-only with no documented public API.
- **No OCR-based PDF intelligence.** The PDF upload tool extracts contract details, but it is a workaround for VITA, not a full extraction engine. Contract PDFs from the City's own portfolio are not processed at scale.

**Fixable?** Yes, incrementally. SAM.gov API integration is tractable. The VITA blocker requires either a formal data-sharing arrangement or a different access method (web scraping, which is fragile). Adding deadline-based urgency sorting to the existing Socrata-fed dashboard is straightforward.

### Job 2 — New Staff Who Inherited a Portfolio With No Context
**Demo coverage:** No

There is no decision history, audit trail, or institutional memory feature. The AI summarization provides a current snapshot but no historical context. A new staff member would see what exists today but not why decisions were made.

**Missing:**
- Decision log or audit trail per contract
- Historical context about vendor relationships
- Notes or annotations
- Any persistence of human review decisions

**Fixable?** Yes — adding a decision log per contract is standard. The Firebase backend supports this.

### Job 3 — Resident/Watchdog Asking "Where Does the Money Go?"
**Demo coverage:** Partial (unintentional)

The vendor-facing portal is designed for vendors, not the general public. However, the two-sided architecture is notable: this is the only procurement demo that considers vendors as users, not just government staff. A vendor can see their contract status, which reduces information asymmetry. This does not serve resident transparency (Job 3), but it does address a related equity dimension — vendor access to procurement information.

**Missing:**
- No public-facing portal for residents (the vendor portal requires authentication)
- No spending breakdowns for public oversight
- No plain-language contract summaries for non-experts
- No accessibility features (language, contrast)

**Fixable?** The Socrata data is already public. A read-only public dashboard could be added without exposing vendor-specific information. The vendor portal could remain behind authentication while a public summary layer is added.

---

## Overall Verdict

**Does the demo solve the problem as stated?** Partially — strongest on real data integration, weakest on cross-source compliance.

Vendor Contract Mgmt is the only procurement demo that uses named, verified real data from Socrata and attempted a second data source (VITA). The two-sided architecture (government + vendor) is a unique insight — no other procurement demo considers the vendor experience. The team correctly identified the cross-source requirement (attempted VITA) and built a pragmatic workaround (PDF upload) when the API was unavailable.

The fundamental gap is the same as all four procurement demos: no cross-registry compliance checking. The officer gets contract data from Socrata but cannot see SAM.gov exclusion status, eVA registration, or federal compliance from the dashboard. The VITA failure is a real-world data access problem that would block any team.

**The two-sided architecture is strategically interesting.** Richmond does not have a vendor portal. Procurement complexity is a documented barrier for small and minority-owned businesses. A portal where vendors can see their own contract status, upcoming opportunities, and compliance requirements addresses an equity dimension that the other demos miss entirely.

---

## Opportunities

### Opportunity 1 — Complete the VITA Integration via Formal Data Partnership
The team correctly identified VITA CobblestoneContracts as essential. The API was unavailable during the hackathon, but this is likely an access issue, not a technical impossibility. VITA operates a public web interface — the data exists. A formal data-sharing request from the City of Richmond to VITA would be the right path. CobblestoneContracts is already used by the Commonwealth. Prior art: CobblestoneContracts integration would give Richmond access to state-level contract data and eliminate the need for a separate VITA API.

### Opportunity 2 — Build Out the Vendor Portal as an Equity Tool
No other procurement demo addresses the vendor experience. A vendor portal where MBE/SWaM-certified businesses can see upcoming opportunities, check their own compliance status, and understand procurement requirements lowers the barrier to entry. Cross-reference with VA DSBSD SWaM database to surface opportunities specifically relevant to certified businesses. Prior art: No comparable municipal vendor self-service portal exists in Virginia — this would be first-of-kind.

### Opportunity 3 — Add SAM.gov Exclusion Check to the Socrata-Fed Dashboard
The Socrata data already provides vendor names. Adding a SAM.gov exclusion check per vendor transforms the dashboard from a contract viewer to a compliance advisory tool. This is the minimum viable cross-source feature. Prior art: FEMA deobligated $805,630 for one false-negative debarment check; debarment verification required for contracts >$25,000.
