# Solution Ideas — Procurement Risk & Opportunity Review (Mira Context)

**Pillar:** A Thriving City Hall
**Problem Statement (verbatim):** Help City staff identify valid, compliant contracts across City, state, and federal sources without manual PDF hunting.
**Demo Context:** Mira — AI Procurement Intelligence Dashboard
**Date:** March 31, 2026
**Basis:** Prior art research (CompareX, SquarePact, SimpliContract, NYC Checkbook 2.0, Tempe Procurement Dashboard); Socrata xqn7-jvv2; SAM.gov; eVA; documented staff pain points; Mira's verified Azure architecture and real-data claim

All ideas below are advisory-only. No idea auto-awards, auto-disqualifies, or replaces human procurement judgment.

---

## Idea 1 — ADOPT+BUILD: Pre-Populate Mira with Socrata Contract Portfolio
**Prior art:** SF Supplier Contracts Socrata dataset (cqi5-hm2d, 47.6K rows — proves Socrata-as-baseline at scale); Tempe Procurement Dashboard uses Socrata for contract filtering
**JTBD addressed:** Job 1 (Officer needs to see full portfolio, not upload one contract at a time)
**Real data required:** Socrata City Contracts (xqn7-jvv2) — SODA API at data.richmondgov.com/resource/xqn7-jvv2.json; 1,362 records with contract_number, supplier, contract_value, effective_from, effective_to, agency_department
**How it works:** On first login, Mira imports all 1,362 contract records from Socrata as the portfolio baseline. Each contract appears as a structured record (without PDF content). Staff then upload PDFs for individual contracts that need deeper review — Mira's extraction engine adds terms, clauses, and risk flags to the existing record. Day-one value: full portfolio visibility. Over-time value: enriched intelligence per contract.
**Constraint:** Socrata records lack contract PDFs, NAICS codes, and renewal terms. This is metadata, not document intelligence. The two layers (Socrata metadata + Mira extraction) complement each other.

---

## Idea 2 — BUILD: SAM.gov Exclusion Advisory Flag Post-Extraction
**Prior art:** FEMA deobligated $805,630 for one false-negative debarment check; vendor verification failures = ~26% of Single Audit findings; debarment verification required for all contracts >$25,000 under VPPA
**JTBD addressed:** Job 1 (Compliance across City, state, and federal sources — the "across" part Mira currently lacks)
**Real data required:** SAM.gov Entity/Exclusion API (api.sam.gov — API key required); vendor name from Mira's extraction output
**How it works:** After Mira extracts a vendor name from a contract PDF, it automatically queries SAM.gov for: (a) entity registration status (active/inactive), (b) active exclusions, (c) CAGE code. Result displayed as an advisory banner on the contract detail page: "SAM.gov Status: Active — No Exclusions" or "⚠️ SAM.gov: Exclusion Found — Review Required." Staff review and decide. System flags, never determines.
**Constraint:** SAM.gov API rate limits (10 req/day personal, higher for .gov). Vendor name matching imprecise — 735 distinct supplier strings in Socrata show name fragmentation across systems.

---

## Idea 3 — BUILD: Structured Decision Entry Per Contract (Institutional Memory)
**Prior art:** RVA Contract Lens's decision timeline; NYC Checkbook 2.0 audit trail; 2025 OCA audit found $5M "questionable expenses" partially from lost decision context
**JTBD addressed:** Job 2 (New staff inheriting portfolio with no context)
**Real data required:** Mira's existing contract records + staff input (stored in Mira's database)
**How it works:** Extend Mira's existing notes feature with a structured decision entry. When staff finish reviewing a contract, they select a decision (Renew / Rebid / Escalate / No Action) and enter a brief rationale. Entry is timestamped and attributed. Entries are append-only — previous decisions are preserved. New staff see: "Last reviewed: 2025-11-15 by J. Smith. Decision: Renew. Rationale: Vendor performance satisfactory, pricing within 3% of market rate." Mira already has the annotation infrastructure — this adds structure to what is currently free-text.
**Constraint:** Staff adoption. Notes are optional today; structured decision entries should be required before marking a contract "reviewed." This is a workflow change.

---

## Idea 4 — BUILD: Contract Expiry Urgency Lanes (Today / This Week / This Month)
**Prior art:** RVA Contract Lens's 3-lane urgency triage; Tempe Procurement Dashboard renewal filtering; staff currently fall back to Outlook calendars for renewal tracking
**JTBD addressed:** Job 1 (Officer facing renewal deadline needs prioritized view)
**Real data required:** Socrata xqn7-jvv2 effective_to field (100% date completeness) or Mira-extracted expiration dates from uploaded PDFs
**How it works:** Mira's dashboard reorganizes from a flat document list to three urgency lanes: "Decide Today" (expiring within 14 days), "Plan This Week" (15–30 days), "Review This Month" (31–90 days). Contracts auto-sort based on effective_to date. Each lane shows contract count, total value at risk, and department breakdown. Advisory only — the system surfaces urgency, staff decide action.
**Constraint:** Mira currently processes contracts individually. This requires either Socrata baseline import (Idea 1) or enough uploaded contracts to populate the view meaningfully.

---

## Idea 5 — ADOPT: Deploy Mira's Azure Stack as City Procurement Tool (<$200/month)
**Prior art:** CompareX (commercial, claims 90% time reduction but enterprise pricing); SimpliContract mNemoAI (launched March 2026, enterprise); Mira demonstrates comparable capability at $200/month on Azure
**JTBD addressed:** Job 1 (Reduce manual PDF review time)
**Real data required:** Mira's existing Azure stack; City of Richmond contract PDFs (which Mira already claims to use)
**How it works:** Rather than building a new tool from scratch, evaluate Mira for pilot deployment as-is. The Azure stack (Document Intelligence, Foundry, Search, FastAPI, Container) costs <$200/month — less than one hour of a procurement analyst's time. The team demonstrated the tool with real city contract data. The fastest path to impact may be deploying what already works rather than building something new.
**Why adoption is the right frame:** Four teams built AI contract review tools at this hackathon. The cheapest, fastest path to a working tool is deploying the one that already works with real data, not commissioning a fifth.
**Constraint:** Requires City IT security review and ATO. Azure is a standard City cloud platform. Staff training and workflow integration needed.

---

## Idea 6 — BUILD: Public Contract Summary Page from Mira-Extracted Data (Equity — Transparency)
**Prior art:** NYC Checkbook 2.0 (public contracts UI); Richmond JustFOIA pilot (May 2026, shows institutional transparency commitment); RVA Contract Lens public portal concept
**JTBD addressed:** Job 3 (Resident/watchdog asking "where does the money go?")
**Real data required:** Socrata xqn7-jvv2 (already public); optionally Mira-generated plain-language summaries from extracted contracts
**Equity dimension:** Makes procurement spending accessible to any resident without FOIA. No login, no account, no procurement expertise required.
**How it works:** A read-only public page displaying Socrata data: total active contracts, spending by department, top vendors by contract value. Optionally enhanced with Mira's AI-generated summaries for contracts that have been processed (redacting sensitive terms). Available in English and Spanish. Accessible design (high contrast, large text option).
**Constraint:** Must carefully manage what is public. Contract pricing, negotiation details, and vendor proprietary information should be excluded. Socrata data is already public — this is a presentation layer, not a disclosure decision.

---

## Idea 7 — BUILD: MBE/SWaM Contract Equity Dashboard (Equity — Vendor Participation)
**Prior art:** VA DSBSD SWaM database (sbsd.virginia.gov); procurement equity research documenting AI bias risk against small/minority vendors; Richmond's stated equity goals
**JTBD addressed:** Job 3 (Public accountability); Job 1 (Compliance with city equity procurement goals)
**Real data required:** Socrata xqn7-jvv2 supplier field; VA DSBSD SWaM certification database; fuzzy matching between supplier names
**Equity dimension:** This is the equity idea. Answers: "Are minority-owned businesses getting a fair share of Richmond's procurement dollars?" with real data, not anecdote.
**How it works:** Cross-reference Socrata contract suppliers with SWaM certification records. Dashboard shows: % of contract dollars to SWaM-certified vendors, by department, over time. Trend analysis: is the share increasing or decreasing? Advisory display only — surfaces patterns for policy discussion.
**Constraint:** 735 distinct supplier strings in Socrata with fragmentation (same vendor, multiple spellings). Requires fuzzy matching or a manual crosswalk. SWaM database access method needs verification.

---

## Idea 8 — BUILD: AI Chat for Cross-Contract Portfolio Questions
**Prior art:** CompareX offers AI chat for stakeholder questions; Mira already has per-contract AI chat via Azure Foundry RAG
**JTBD addressed:** Job 1 (Portfolio-level intelligence); Job 2 (New staff onboarding)
**Real data required:** All contracts indexed in Azure Search (already functional in Mira)
**How it works:** Extend Mira's per-contract AI chat to a portfolio-level chat. Staff can ask: "How many contracts expire in the next 60 days?" "Which vendors have contracts with more than 3 departments?" "What is our total spend with [vendor name]?" The AI queries the Azure Search index across all uploaded contracts and returns advisory answers. Results link back to source contracts for verification. All answers are advisory — staff verify before acting.
**Constraint:** Quality depends on the number of contracts uploaded and indexed. With a Socrata baseline (Idea 1), the index covers the full portfolio. Without it, answers are only as complete as what staff have uploaded.

---

## Idea 9 — BUILD: Extraction Confidence Scoring with Side-by-Side Verification
**Prior art:** Mira already shows a document preview alongside extracted data; OCR failure modes documented (poor scans, handwritten annotations, non-standard formatting); CompareX claims 90% time reduction but publishes no accuracy metrics
**JTBD addressed:** Job 1 (Trust in extracted data for renewal decisions)
**Real data required:** Mira's extraction output + source PDF (already displayed side-by-side)
**How it works:** For each extracted field (expiration date, contract value, vendor name, payment terms), Mira displays a confidence score (high/medium/low) based on extraction quality signals (OCR clarity, field format consistency, cross-field validation). Low-confidence extractions are highlighted in yellow: "⚠️ Low confidence — verify against source." Staff see exactly which fields to double-check. This builds trust incrementally — as staff confirm accurate extractions, confidence in the system grows.
**Constraint:** Azure Document Intelligence provides some confidence metadata. Translating raw confidence scores into user-meaningful flags requires calibration against real contract PDFs.

---

## Idea 10 — BUILD: Contract Comparison Tool — Side-by-Side Term Analysis
**Prior art:** CompareX (contract comparison is its core feature — compliance gap detection against baseline terms); SquarePact (clause library management)
**JTBD addressed:** Job 1 (Renewal decision — is the new contract better or worse than the current one?)
**Real data required:** Two or more Mira-extracted contract records (e.g., current contract vs. proposed renewal, or two vendor proposals)
**How it works:** Staff select two contracts and Mira displays a side-by-side comparison: contract value, terms, expiration, payment schedule, insurance requirements, risk flags. Differences are highlighted. AI generates an advisory summary: "Proposed renewal increases contract value by 12% with no change in scope. Payment terms shift from net-30 to net-60. Insurance requirement reduced." Staff use this to inform their renew/rebid/escalate decision. System does not recommend — it surfaces differences.
**Constraint:** Requires both contracts to be uploaded and extracted. Comparison quality depends on extraction accuracy. Works best for structured contracts; less effective for highly customized agreements.

---

## Summary Table

| # | Type | JTBD | Key Data Required | Equity Dimension | Advisory-Only |
|---|------|------|------------------|-----------------|---------------|
| 1 | Adopt+Build | J1 | Socrata xqn7-jvv2 | — | ✅ Portfolio visibility |
| 2 | Build | J1 | SAM.gov API | — | ✅ Flags status, staff decides |
| 3 | Build | J2 | Mira DB + staff input | — | ✅ Staff-authored decisions |
| 4 | Build | J1 | Socrata or Mira dates | — | ✅ Urgency lanes, no action |
| 5 | Adopt | J1 | Mira Azure stack + real PDFs | — | ✅ Deploy existing tool |
| 6 | Build | J3 | Socrata xqn7-jvv2 | ✅ Public transparency | ✅ Read-only display |
| 7 | Build | J1, J3 | Socrata + SWaM DB | ✅ MBE/SWaM tracking | ✅ Surfaces patterns |
| 8 | Build | J1, J2 | Azure Search index | — | ✅ Advisory answers |
| 9 | Build | J1 | Mira extraction + PDF | — | ✅ Confidence flags |
| 10 | Build | J1 | Two Mira-extracted contracts | — | ✅ Surfaces differences |
