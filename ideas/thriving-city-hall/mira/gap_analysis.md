# Gap Analysis — Mira

**Pillar:** A Thriving City Hall
**Problem Statement (verbatim):** Procurement Risk & Opportunity Review — Help City staff identify valid, compliant contracts across City, state, and federal sources without manual PDF hunting.
**Demo:** Mira — AI Procurement Intelligence Dashboard
**Team:** Daniel and Priyesh (team of two)
**Tech Stack:** Azure Document Intelligence (OCR), Azure Foundry (extraction + RAG), Azure Search (indexing), FastAPI (backend), Azure Container (hosting)
**Review Date:** March 31, 2026

---

## Problem Grounding

**Problem statement (verbatim):** Help City staff identify valid, compliant contracts across City, state, and federal sources without manual PDF hunting.

**Primary user:** A Richmond procurement staff member who currently opens dozens of PDFs each week — contracts, RFPs, amendments — and manually hunts for expiration dates, vendor terms, and compliance flags, with no dashboard, no early warning system, and no automation.

**Pain today:**
- Reviewing one contract manually takes ~20 minutes
- ~1,300+ active contracts × 20 minutes = thousands of staff-hours with no scaling mechanism
- A single missed renewal window can cost tens of thousands of dollars or trigger a compliance violation
- No structured search across contracts — each is a standalone PDF
- No team collaboration tools — no way to annotate, flag, or share notes on a contract

**Desired outcome:**
- Any contract PDF is processed, classified, and structured in under 60 seconds
- Risk indicators are flagged automatically for staff review
- Contracts are searchable across the full portfolio
- Staff collaborate on contract review with notes and annotations

---

## Data Source Map

| Data Claim in Demo | Real Source | Owner | Access | Cadence | Status |
|--------------------|------------|-------|--------|---------|--------|
| Contract PDFs processed by OCR | **Real City of Richmond contract data** (per demo transcript) | City of Richmond | Uploaded during hackathon | Per upload | ✅ **Significant: Team claims real city contract PDFs** — needs verification of source and scope |
| Document classification by contract type | Azure Document Intelligence + Azure Foundry | Team-built | Automatic on upload | Per upload | ✅ Functional feature demonstrated |
| Risk indicators (flagged automatically) | Azure Foundry extraction + rules | Team-built | Automatic | Per upload | ⚠️ Risk logic not documented — unclear what triggers a flag |
| Payment terms, insurance requirements | Extracted from uploaded PDFs | Varies by contract | OCR extraction | Per upload | ✅ Demonstrated in demo |
| System checks (missing date, no expiration) | Azure Foundry validation rules | Team-built | Automatic | Per upload | ✅ Demonstrated — missing data detection functional |
| Search across contracts ("public sector") | Azure Search index | Team-built | Full-text search | Updated per upload | ✅ Demonstrated |
| AI chat per contract | Azure Foundry RAG | Team-built | On-demand | Per query | ✅ Demonstrated |

**Critical finding:** Mira is the only procurement demo that explicitly claims to use **real City of Richmond contract data**. This is a significant differentiator. The transcript states: "Built entirely with real City of Richmond contract data during the 48-hour hackathon." This claim should be verified — if true, Mira has crossed the synthetic-data barrier that blocks the other demos.

**What Mira does NOT connect to:**
- Socrata xqn7-jvv2 (1,362 contract records with structured metadata) — not used
- SAM.gov (federal compliance/exclusion data) — not used
- eVA (Virginia e-procurement) — not used
- VITA CobblestoneContracts (state IT contracts) — not used
- OpenGov portal (procurement.opengov.com/portal/rva) — not used

Mira operates as a self-contained document intelligence platform. It reads PDFs and extracts structure from them. It does not cross-reference against any external registry.

---

## Gap Analysis

### Job 1 — Procurement Officer Facing a Renewal Deadline
**Demo coverage:** Moderate-to-Strong (within its scope)

Mira directly addresses the "manual PDF hunting" part of the problem statement. A procurement officer can upload a contract, get structured data in under 60 seconds, see risk flags, search across all uploaded contracts, and use AI chat for deeper questions. The validation alerts on the dashboard provide deadline awareness.

**Missing:**
- **No cross-registry compliance checking.** The problem statement says "across City, state, and federal sources." Mira only processes uploaded PDFs — it does not check SAM.gov for exclusions, eVA for state contract status, or any external compliance registry. The officer gets document intelligence but not compliance intelligence.
- **No portfolio-level urgency triage.** Mira processes contracts individually. There is no urgency-lane view (today/this week/this month) that lets an officer see the whole portfolio at once and prioritize.
- **No connection to Socrata baseline.** The 1,362 contracts in Socrata xqn7-jvv2 are not in Mira. Staff would need to upload all contracts individually — a significant onboarding cost.

**Fixable?** Yes. Adding a Socrata import for baseline portfolio data and a SAM.gov exclusion check per vendor would address the major gaps. The Azure architecture supports additional API integrations.

### Job 2 — New Staff Who Inherited a Portfolio With No Context
**Demo coverage:** Partial

Mira's notes and annotations feature is the strongest collaboration tool among the procurement demos. Staff can add internal notes, flag sections for review, and share annotations across the team. This is the beginning of institutional memory — not a full decision timeline, but a meaningful step.

**Missing:**
- **No decision audit trail.** Notes exist per document, but there is no structured record of decisions (renew/rebid/escalate) with timestamps and rationale. A new staff member sees notes but not the decision history.
- **No historical context.** If a predecessor reviewed a contract and decided to renew, that decision is not logged in a way that a successor can find and understand.

**Fixable?** Yes — adding a structured decision entry per contract (beyond free-text notes) would address this. The annotation infrastructure is already built.

### Job 3 — Resident/Watchdog Asking "Where Does the Money Go?"
**Demo coverage:** No

Mira is entirely staff-facing. There is no public portal, no spending transparency, no plain-language access for residents. The AI chat feature could theoretically generate plain-language summaries, but there is no public access point.

**Missing:**
- Public-facing interface
- Spending breakdowns
- Accessibility features
- Any path for a resident to query procurement data

**Fixable?** Significant new scope. A public portal built on Socrata data (which is already public) would be lighter than exposing Mira's internal contract data, which may contain sensitive terms.

---

## Overall Verdict

**Does the demo solve the problem as stated?** Partially — strongest on "without manual PDF hunting," weakest on "across City, state, and federal sources."

Mira is the most technically mature procurement demo for PDF-to-structured-data conversion. The Azure architecture is production-grade, the cost is realistic ($200/month), and the claim of using real city contract data is a meaningful differentiator. The notes/annotations feature is unique among the procurement demos and addresses a real collaboration need.

The fundamental gap is that Mira solves the "PDF hunting" half of the problem statement but not the "across City, state, and federal sources" half. It is a document intelligence tool, not a compliance intelligence tool. The officer still needs to leave Mira to check SAM.gov, eVA, and other registries — which is exactly the fragmented workflow the problem statement describes.

**If the real-data claim is verified,** Mira is the closest to a deployable tool among the procurement demos — not because it solves the full problem, but because it actually works with actual contracts at a realistic price point. The $200/month Azure cost compares favorably to even one hour of a procurement analyst's time.

---

## Opportunities

### Opportunity 1 — Add SAM.gov Exclusion Check as Post-Extraction Step
After Mira extracts a vendor name from a PDF, query SAM.gov for exclusion status. Display as an advisory flag alongside the extracted contract data. This is the smallest integration that moves Mira from document intelligence to compliance intelligence. Prior art: FEMA deobligated $805,630 for one false-negative debarment check. SquarePact builds debarment verification into its workflow.

### Opportunity 2 — Import Socrata xqn7-jvv2 as Portfolio Baseline
Pre-populate Mira's contract index with the 1,362 records from Socrata. Staff see their full portfolio on day one without uploading every PDF individually. Mira's AI extraction then adds depth (terms, clauses, risk flags) as PDFs are uploaded over time. This reduces the onboarding barrier from "upload everything" to "your portfolio is already here — enrich it as you go."

### Opportunity 3 — Combine Mira's Extraction Engine with RVA Contract Lens's Federated Search
Mira has the best extraction pipeline. RVA Contract Lens has the best compliance concept (8-source federated search). Neither alone solves the full problem. A combined approach — Mira extracts and structures the document, then a federated search checks the vendor across external registries — would address the full problem statement. Prior art synthesis confirms: "No commercial tool currently does federated municipal compliance checking at this price point."
