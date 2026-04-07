# Gap Analysis — CivicPulse AI

**Pillar:** A Thriving City Hall
**Problem Statement (verbatim):** Procurement Risk & Opportunity Review — Help City staff identify valid, compliant contracts across City, state, and federal sources without manual PDF hunting.
**Demo:** CivicPulse AI — SmartGo Procurement Intelligence Hub
**Team:** Civic Pulse AI — Bhaskaran Jairajan, Prasanna Partiban, Vardarajan Seduraman
**Review Date:** March 31, 2026

---

## Problem Grounding

**Problem statement (verbatim):** Help City staff identify valid, compliant contracts across City, state, and federal sources without manual PDF hunting.

**Primary user:** A Richmond procurement officer managing a portfolio of active contracts who currently spends hours manually reviewing PDFs to extract expiration dates, contract values, and risk indicators — and has no proactive system for flagging upcoming deadlines.

**Pain today:**
- Staff spend 1–3 days verifying a single contract's compliance status across fragmented sources (PDFs, SAM.gov, VITA, internal spreadsheets)
- No early warning system — contracts surface when deadlines are imminent or already missed
- Critical details (expiration dates, vendor terms, pricing) are buried inside unstructured PDFs
- ~1,400 active contracts across ~$7 billion in value cannot be manually monitored at scale

**Desired outcome:**
- Contract intelligence is automatically extracted from documents and surfaced in a structured, prioritized view
- Staff spend their time on decisions, not data gathering
- Upcoming deadlines are flagged before they become emergencies
- Compliance status across City, state, and federal registries is visible in one place

---

## Data Source Map

| Data Claim in Demo | Real Source | Owner | Access | Cadence | Status |
|--------------------|------------|-------|--------|---------|--------|
| Contract expiration dates on dashboard | Not specified | Unknown | Unknown | Unknown | ❌ **No real data source named** — dashboard data appears synthetic or demo-generated |
| Urgency levels / risk flags | Not specified | Unknown | Unknown | Unknown | ❌ **No real data source named** — logic for risk scoring not documented |
| PDF contract extraction (expiration, values, suppliers, terms, pricing) | Uploaded PDFs via Document Insight Extractor | User-provided | Manual upload | Per upload | ⚠️ **PDF extraction demonstrated** — but source PDFs not identified as real Richmond contracts |
| Missing data detection in contracts | Derived from PDF extraction | N/A | Automatic | Per upload | ⚠️ Functional feature, but dependent on PDF source authenticity |
| Vendor/supplier details | Extracted from uploaded PDFs | Unknown | Manual upload | Per upload | ⚠️ No cross-reference to Socrata xqn7-jvv2 or SAM.gov entity data |

**Critical finding:** CivicPulse AI does not name any real data source. The dashboard data is not connected to the Socrata City Contracts dataset (xqn7-jvv2, 1,362 records), SAM.gov, eVA, or any other verified procurement data source. The PDF extraction component demonstrates a real capability, but the source documents used in the demo are not identified as actual Richmond contracts. Without real data, this is a capability demo, not a procurement tool.

**Comparison to available real data:**
- Socrata xqn7-jvv2 (1,362 contract records with contract_number, agency_department, supplier, contract_value, effective_from, effective_to) — not used
- SAM.gov (federal entity/exclusion/contract data, API available) — not used
- eVA (Virginia e-procurement, web-only) — not used
- OpenGov portal (procurement.opengov.com/portal/rva) — not used

---

## Gap Analysis

### Job 1 — Procurement Officer Facing a Renewal Deadline
**Demo coverage:** Partial

The Contract Pulse View dashboard directly addresses the urgency-triage need: upcoming expirations, renewal windows, and prioritized urgency levels. This is the right shape for Job 1. The Document Insight Extractor addresses the "buried in PDFs" problem by automatically pulling key fields.

**Missing:**
- **No cross-registry compliance checking.** The officer still cannot see SAM.gov exclusion status, eVA contract status, or federal debarment status from the dashboard. The problem statement asks for compliance "across City, state, and federal sources" — CivicPulse AI only extracts data from PDFs, it does not check compliance against external registries.
- **No real contract data.** The dashboard is not populated from any verified source. An officer cannot use this today.
- **No federated search.** Each contract must be individually uploaded and extracted. There is no way to query across the full portfolio.
- **Advisory-only compliance:** Not applicable — the demo does not make compliance determinations at all.

**Fixable?** The architectural shape is right. Connecting the dashboard to Socrata xqn7-jvv2 for contract data and adding SAM.gov API checks would address the core gap. This is a significant but tractable integration.

### Job 2 — New Staff Who Inherited a Portfolio With No Context
**Demo coverage:** No

CivicPulse AI has no decision history, no audit trail, and no institutional memory feature. A new staff member inheriting a portfolio would see current contract data (if real data were connected) but would have no context about past decisions, vendor history, or why contracts were structured as they are.

**Missing:**
- Decision timeline or audit trail
- Notes, annotations, or decision rationale per contract
- Historical context about vendor relationships
- Any persistence of human review decisions

**Fixable?** Yes — adding a decision log per contract is a standard feature. Mira's notes/annotations feature demonstrates one approach.

### Job 3 — Resident/Watchdog Asking "Where Does the Money Go?"
**Demo coverage:** No

CivicPulse AI is entirely staff-facing. There is no public portal, no plain-language summary, no transparency feature. A resident has no access point.

**Missing:**
- Public-facing interface of any kind
- Spending breakdowns by department or vendor
- Plain-language contract summaries
- Accessibility features (language, contrast, legibility)

**Fixable?** Adding a public portal is significant new scope — it's essentially a second product. However, Socrata xqn7-jvv2 is already public data; a read-only dashboard built on that dataset would be a lighter lift than building from scratch.

---

## Overall Verdict

**Does the demo solve the problem as stated?** No — not in its current form.

CivicPulse AI demonstrates a sound architectural concept (dashboard + PDF extraction) that addresses a real piece of the procurement problem. But it does not connect to any verified data source, does not check compliance across registries, and does not address 2 of 3 JTBDs. The problem statement specifically asks for identification "across City, state, and federal sources" — CivicPulse AI operates on individually uploaded PDFs from a single source at a time.

The team built the right kind of tool for one part of the problem (the PDF extraction layer). The gap is in data integration and scope.

---

## Opportunities

### Opportunity 1 — Connect Dashboard to Socrata xqn7-jvv2 as Baseline Data
The Socrata City Contracts dataset has 1,362 records with contract_number, supplier, contract_value, effective_from, effective_to, and agency_department. This would populate the Contract Pulse View with real data immediately — no PDF extraction needed for the basic contract portfolio view. The SODA API is freely available. This transforms the dashboard from a demo into a functional tool in a single integration step. Prior art: Tempe Procurement Dashboard does exactly this with Socrata data.

### Opportunity 2 — Add SAM.gov Exclusion Check to PDF Extraction Pipeline
When the Document Insight Extractor pulls a vendor name from a PDF, it could automatically check that vendor against SAM.gov's exclusion list (API key required, 10 req/day personal limit but higher for .gov). This would be the first step toward cross-registry compliance checking — directly addressing the problem statement's "across City, state, and federal sources" requirement. Prior art: RVA Contract Lens's federated search concept; FEMA deobligated $805,630 for a single false-negative debarment check.

### Opportunity 3 — Pair Extraction Engine with Mira's Collaboration Layer
CivicPulse AI's extraction engine and Mira's notes/annotations/chat features address complementary gaps. A combined approach — AI extraction that feeds into a collaborative review workspace — would cover more of Job 1 and begin to address Job 2 (institutional context via notes and decision history). Prior art: SimpliContract mNemoAI combines extraction with obligation monitoring in a single platform.
