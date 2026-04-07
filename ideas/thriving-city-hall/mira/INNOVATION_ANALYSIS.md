# Innovation Analysis: Mira

**Generated:** April 2, 2026
**Inputs:** RESEARCH_RESULT.md, 6 Innovation Lenses

---

## 1. Blue Ocean Reframing (ERRC Grid)

| Factor | Action | Details |
|--------|--------|---------|
| Full contract clause extraction via AI | Eliminate | Published municipal metrics exist for IDP (redaction and extraction), not clause analytics. King County succeeded at redaction (96% accuracy, 30 min → 5 sec). Clause-level AI is nascent — eliminate the hardest, least-proven layer. |
| End-to-end CLM platform replacement | Reduce | Richmond runs Oracle EBS (RAPIDS) with known audit failures. Reducing scope to a "read-only intelligence layer" on top of existing systems avoids the political and technical minefield of replacing RAPIDS. |
| Compliance checking against known rules | Raise | Oakland's RFI explicitly seeks an "AI Contract Compliance Tracker" to flag missing insurance, schedules, and compliance items. Raise from ad-hoc review to automated checks against a defined ruleset. |
| Human-in-the-loop review workflow | Create | The NYC Comptroller's MyCity audit disputed vendor accuracy claims (95-99% claimed vs 84.8-92.7% audited). Create mandatory HITL review for every AI-flagged item, with audit logs per the DC AI Procurement Handbook. |

**Core assumption challenged:** That AI can reliably read and interpret municipal contract clauses today. The 2026 ContractEval benchmark shows top models achieve 94.2% F1 on commercial terms — but open-source models score significantly lower, and no municipality has published clause-level accuracy metrics. Mira should target IDP (header extraction, redaction) first and clause analytics second.

**Reframed value proposition:** Mira is not an AI contract reader — it's a compliance checklist accelerator. It extracts structured fields (parties, dates, amounts, insurance requirements) from contract PDFs and checks them against a curated ruleset. The AI does the tedious extraction; humans make the compliance decisions.

---

## 2. Rapid Ideation — 8 Divergent Approaches

1. **PDF Header Extractor** — Upload a contract PDF. AI extracts: parties, effective dates, expiration, total value, governing law. Output: structured JSON. No clause interpretation.
2. **Insurance Certificate Checker** — Upload a contract and its associated Certificate of Insurance (COI). AI checks: is the COI expired? Does coverage meet the contract's minimum requirements? Flag mismatches.
3. **Contract vs. Template Diff** — Upload a contract and the City's standard template. AI highlights every clause that deviates from the template. Legal staff reviews only the deviations.
4. **Missing Document Detector** — Given a contract file, check against a compliance checklist: W-9 present? COI present? Performance bond present? Indemnity clause present? Generate a "missing items" report.
5. **Batch PII Redactor** — Upload a folder of contract PDFs. AI redacts SSNs, bank accounts, and personal addresses. Output: redacted versions ready for FOIA release. King County proved this at 96% accuracy.
6. **Amendment Tracker** — Upload all versions/amendments of a contract. AI extracts the change history: what was the original value? What amendments were made? What's the current total?
7. **Vendor Risk Profile Generator** — Cross-reference a vendor name against public data (SAM.gov, OMBD registry, news articles). Generate a one-page risk profile before contract execution.
8. **Contract Plain Language Summarizer** — Upload a 50-page contract. AI generates a 1-page summary in plain English for Council members or residents requesting FOIA records.

**Most provocative:** #3 — Contract vs. Template Diff removes 80% of legal review effort by surfacing only deviations. If the City has a standard template (most do), this is the highest-ROI AI application.
**Most feasible:** #1 — PDF Header Extractor is the IDP entry point recommended by the research. Proven by King County and Covered California (10,000 people-hours freed).

---

## 3. Rapid Design Sprint

**Problem in one sentence:** Richmond's procurement and legal staff manually review contract PDFs to extract key terms and verify compliance, a process that takes hours per document and is prone to human error.

**Target user:** A procurement analyst who receives a new contract PDF and needs to log its key terms into the contract management system and verify compliance requirements.

**User Journey:**
- Start: Analyst uploads a contract PDF to Mira's web interface.
- Friction: Currently, the analyst opens the PDF, manually scans for party names, dates, dollar amounts, and insurance requirements, then re-types them into RAPIDS/Oracle. This takes 30-60 minutes per contract and errors are common.
- Outcome: Mira extracts key fields in seconds, presents them for review, and flags missing compliance items (no COI, expired insurance, missing indemnity clause). Analyst confirms or corrects, then exports to a structured format.

**Lowest-fidelity prototype:** A Python Flask app that accepts a PDF upload, runs it through a document AI service (AWS Textract, Google Document AI, or a local LLM), extracts key fields into a form, and highlights any fields it couldn't find.

**First test:** Upload 10 real Richmond contract PDFs (from Socrata or FOIA). Compare Mira's extractions against manual extraction. Measure accuracy per field and time saved.

---

## 4. Opportunity Mapper

### Pattern A: Header Extraction + Compliance Checklist (Quick Win)
- **User:** Procurement analysts and legal reviewers
- **Outcome:** Automated extraction of key contract fields and compliance gap flagging, reducing review time by 70%+
- **Workflow:** Upload PDF → OCR/extraction → present extracted fields for HITL review → check against compliance ruleset (COI, W-9, indemnity, performance bond) → generate "missing items" report
- **Dependencies:** Document AI API (AWS Textract or Google Document AI), sample contract PDFs for testing, compliance checklist definition
- **Richmond relevance:** Richmond's RAPIDS audit found UAT used dummy data instead of production data. This tool operates on real contract PDFs and could help validate the data entering RAPIDS.

### Pattern B: Clause-Level Analytics with HITL (Stretch)
- **User:** City Attorney's office and CPO
- **Outcome:** Automated identification of non-standard clauses, risk flagging, and template deviation analysis
- **Workflow:** Fine-tune a clause extraction model on Richmond's standard contract templates → identify deviations → score risk → present to legal for review → maintain audit logs per DC AI Procurement Handbook
- **Dependencies:** Access to Richmond's standard contract templates, labeled training data (200-400 clause instances), legal staff for gold-standard annotation, LLM fine-tuning infrastructure
- **Richmond relevance:** Massachusetts's OneL flagged 93% of terms identified by legal counsel and reduced review time by 83%. A Richmond-specific model could deliver similar gains.

**Recommendation:** Pattern A is the hackathon build — it proves extraction works and delivers immediate value. Pattern B requires 6+ months of model development, labeled data, and legal staff cooperation.

---

## 5. Problem Scoping

| Dimension | Score (1-5) | Notes |
|-----------|-------------|-------|
| Impact | 4 | King County saved 30 min → 5 sec per document on redaction. Massachusetts cut contract review from 6 hours to 1 hour. The time savings are real and large. |
| Feasibility | 3 | Header extraction is proven. Clause-level analytics require labeled data and fine-tuning that exceeds a hackathon. |
| Data availability | 3 | Contract PDFs are available via FOIA but not in a structured, machine-readable corpus. The Socrata dataset has metadata but not the actual PDF documents. |
| Clarity | 4 | "Extract key terms from contract PDFs and flag compliance gaps" is clear. The boundary between extraction and interpretation is the design challenge. |
| Demo credibility | 4 | Uploading a real Richmond contract and showing extracted fields is a compelling demo. Risk: the extraction misses fields on a complex contract during the live demo. |

**Richmond-specific alignment:** Richmond's procurement infrastructure runs on Oracle EBS (RAPIDS) with OnBase for document management. The research's recommended architecture ("Connect, Stage, Analyze, Return") fits: extract from OnBase PDFs, analyze externally, push metadata back. However, OnBase API access is a structural wall (no public API).

**Policy/eligibility risks:** Richmond's AI policy (AR 2.13) permits AI with DIT oversight. Contract PDFs may contain PII (signatures, SSNs on W-9 attachments). Must implement automated PII redaction before any public-facing features. The DC AI Procurement Handbook provides model language for vendor AI factsheets.

**Weekend MVP shapes:**
1. **Minimal:** Web upload → AWS Textract extraction → display key fields in a form → compliance checklist comparison. 10-14 hours.
2. **Enhanced:** Add batch processing for multiple PDFs, export to CSV/JSON, template deviation highlighting, and a simple dashboard showing extraction accuracy metrics. 16-20 hours.

---

## 6. Assumption Mapping

| # | Assumption | Risk | Uncertainty | Priority |
|---|-----------|------|-------------|----------|
| 1 | Document AI services can reliably extract key fields from Richmond's contract PDF formats | High | High | TEST FIRST |
| 2 | Contract PDFs are accessible for testing (via FOIA or Socrata) | High | Medium | TEST SECOND |
| 3 | A compliance checklist can be defined with procurement staff input | Medium | Medium | TEST THIRD |
| 4 | Richmond's AI policy (AR 2.13) permits this use case with DIT approval | Medium | Low | CONFIRM |
| 5 | Procurement staff trust AI-extracted data enough to use it in their workflow | High | High | VALIDATE |
| 6 | OnBase integration is not required for an MVP (PDFs can be manually uploaded) | Low | Low | CONFIRMED |
| 7 | The 2026 ContractEval benchmark F1 scores (94.2% for proprietary, lower for open-source) are realistic for municipal contracts | Medium | High | ASSESS |

**Top 3 to validate:**
1. **Extraction accuracy on Richmond PDFs** — Validation: Upload 10 real Richmond contract PDFs to AWS Textract and a local LLM. Measure precision/recall on key fields (parties, dates, amounts). If <90% accuracy on header fields, the extraction layer needs tuning.
2. **Contract PDFs are accessible** — Validation: Download sample contracts from Socrata or submit a FOIA request for 20 recent contracts. If PDFs are not readily available, the MVP must use synthetic or publicly available contracts for the demo.
3. **Compliance checklist can be defined** — Validation: Ask procurement staff: "What do you check on every contract?" If they can list 5-10 items (COI, W-9, indemnity, performance bond, insurance minimums), the checklist is defined. If they say "it depends," the ruleset is too complex for an MVP.

---

## Key Takeaway

Municipal AI for contracts is in the IDP phase, not the clause analytics phase. King County's 96% accuracy on redaction and Covered California's 10,000 hours freed from document processing prove that extraction and compliance checking work today. Clause-level legal analysis is 12-24 months away for municipalities. Mira should target the proven layer — header extraction + compliance checklist — and explicitly defer clause interpretation to Phase 2. The biggest risk isn't technology; it's trust. Procurement staff must see the AI as a time-saver, not a replacement, and every output must include HITL review and audit logging.
