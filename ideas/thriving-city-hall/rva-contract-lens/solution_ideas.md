# Solution Ideas — Procurement Risk & Opportunity Review (RVA Contract Lens Context)

**Pillar:** A Thriving City Hall
**Problem Statement (verbatim):** Help City staff identify valid, compliant contracts across City, state, and federal sources without manual PDF hunting.
**Demo Context:** RVA Contract Lens — Federated AI Procurement Intelligence
**Date:** March 31, 2026
**Basis:** Prior art research (CompareX, SquarePact, SimpliContract, NYC Checkbook 2.0, Tempe Procurement Dashboard, CobblestoneContracts); Socrata xqn7-jvv2; SAM.gov; eVA; VITA; FCC; OFAC; documented staff pain points; pillar champion constraints (advisory-only, VPPA compliance)

All ideas below are advisory-only. No idea auto-awards, auto-disqualifies, or replaces human procurement judgment. Every verdict, flag, and recommendation is presented for staff review and decision.

---

## Idea 1 — VERIFY+HARDEN: Confirm Live API Integrations and Publish Integration Status Dashboard
**Prior art:** No commercial tool does federated municipal compliance checking across 8 live sources (per prior art synthesis); SAM.gov API documentation confirms availability; FCC Covered List and OFAC SDN are publicly downloadable
**JTBD addressed:** Job 1 (Cross-source compliance — the core of the problem statement)
**Real data required:** SAM.gov Entity/Exclusion API (api.sam.gov — API key required); FCC Covered List (downloadable CSV); OFAC SDN (downloadable XML/CSV); Socrata xqn7-jvv2 (SODA API)
**How it works:** Before adding new features, verify each of the 8 claimed data source integrations. For each: confirm API key or download is current, run a sample query, record response time and data freshness. Publish an internal "Integration Status" page showing: which sources are live, when each was last queried, and any sources that are degraded or stale. This turns the federated search from a claim into a verifiable, auditable system. The integration status page itself is advisory — it tells staff how trustworthy the current data is.
**Why first:** The federated search is RVA Contract Lens's defining feature. If it works, everything else builds on it. If it doesn't, nothing else matters.
**Constraint:** SAM.gov rate limits (10 req/day personal, higher for .gov). FCC and OFAC lists need periodic re-download (weekly recommended).

---

## Idea 2 — BUILD: Scoring Model Calibration with Documented Methodology
**Prior art:** SquarePact uses built-in regulatory frameworks (2 CFR 200, FAR, DFARS) as scoring basis; CompareX compliance gap detection uses contract-baseline comparison; transparency in scoring is a VPPA requirement
**JTBD addressed:** Job 1 (Trust in advisory verdicts); Job 2 (New staff understanding scoring logic)
**Real data required:** RVA Contract Lens's existing scoring model; historical procurement decisions from City records; VPPA compliance requirements (Richmond City Code Chapter 21)
**How it works:** Document the scoring model explicitly: what inputs contribute points, what deducts points, and the basis for each weight. Calibrate against historical decisions — take 20 real past procurement decisions (renew/rebid/escalate) and run them through the model. Compare the model's advisory verdict to the actual decision. Publish the calibration results (e.g., "model agreed with staff decision in 16 of 20 cases; 3 disagreements were cases where the model flagged risk that staff accepted; 1 was a model miss"). This builds trust and identifies model weaknesses. All model output remains advisory.
**Constraint:** Historical decision data may not be readily available. If decision records don't exist, this is additional evidence for why the Decision Timeline feature matters.

---

## Idea 3 — ADOPT: Integrate Mira's Azure Extraction Engine for PDF Processing
**Prior art:** Mira demonstrated Azure Document Intelligence OCR + Foundry RAG with real City of Richmond contract PDFs at $200/month; SimpliContract mNemoAI combines extraction with obligation monitoring
**JTBD addressed:** Job 1 (PDF processing at scale — the "without manual PDF hunting" requirement)
**Real data required:** City of Richmond contract PDFs (Mira claims to have processed real ones); Azure Document Intelligence (Mira's proven stack)
**How it works:** RVA Contract Lens's OCR layer is unspecified. Mira's Azure extraction pipeline is proven with real data. Adopt Mira's extraction engine as the PDF processing component: upload a contract PDF, Mira's engine extracts key fields (dates, values, vendors, terms), and RVA Contract Lens's federated search then checks the vendor across all registries. This combines the best extraction engine with the best compliance architecture. Extraction output is presented for staff verification before federated search runs.
**Why adoption is the right frame:** Building a second OCR pipeline duplicates effort. Mira's pipeline works and costs $200/month.
**Constraint:** Requires collaboration between teams or codebase integration. Azure architecture may differ from RVA Contract Lens's stack.

---

## Idea 4 — BUILD: MBE/SWaM Equity Layer on Public Portal (Equity — Vendor Participation)
**Prior art:** VA DSBSD SWaM database (sbsd.virginia.gov); procurement equity research documenting systemic disadvantage for small/minority vendors; no Virginia municipality publishes SWaM procurement share publicly
**JTBD addressed:** Job 3 (Public accountability for equitable spending)
**Real data required:** Socrata xqn7-jvv2 supplier field; VA DSBSD SWaM certification database; fuzzy matching between supplier names and certified businesses
**Equity dimension:** This is the equity idea. The public portal already shows who gets contracts. Adding SWaM data answers the most common public equity question: "Are minority-owned businesses getting a fair share?"
**How it works:** Cross-reference the public portal's vendor list with SWaM certification records. Add a section to the public portal: "MBE/SWaM Contract Participation." Shows: % of contract dollars to certified vendors, by department, over time. Trend line: increasing or decreasing? All data is advisory and informational — the portal surfaces patterns for public and policy discussion, not enforcement.
**Constraint:** 735 distinct Socrata supplier strings require fuzzy matching against SWaM names. SWaM database access method needs verification. Some certifications may have lapsed.

---

## Idea 5 — BUILD: Staff-Authored Decision Rationale in Decision Timeline
**Prior art:** RVA Contract Lens already logs AI-assisted decisions in a timeline; NYC Checkbook 2.0 has audit trails; 2025 OCA audit flagged $5M "questionable expenses" partly from lost decision rationale
**JTBD addressed:** Job 2 (New staff understanding not just what was decided but why)
**Real data required:** RVA Contract Lens's existing Decision Timeline + staff input (free text rationale per decision)
**How it works:** When the federated search produces an advisory verdict and the officer makes a decision, the system requires a brief rationale entry before the decision is logged: "Why did you [renew/rebid/escalate]? [free text]." The timeline entry then shows both the AI advisory and the staff reasoning. When a new staff member inherits the portfolio, they see: "AI recommended Renew (+20 compliance, -5 concentration risk). Officer J. Smith chose Renew. Rationale: Vendor performance satisfactory; concentration risk accepted because no alternative vendor for this service in Richmond."
**Constraint:** Requires staff compliance — a mandatory field before a contract can be marked as decided. The lightest-weight version: a single dropdown (Agree with AI / Override — chose differently) plus one sentence.

---

## Idea 6 — BUILD: Vendor Protest Window Tracker (VPPA Compliance)
**Prior art:** VPPA requires a 10-day vendor protest window after contract award; contracts awarded in violation of law can be declared void; willful ethics violations = Class 1 misdemeanor; no existing tool tracks protest windows
**JTBD addressed:** Job 1 (Compliance with VPPA procedural requirements)
**Real data required:** Contract award dates (from Socrata effective_from or extracted from PDFs); VPPA protest window rules (10 days from award notification)
**How it works:** After a contract is awarded, the system calculates the 10-day protest window and displays it on the dashboard: "Protest window open: [date] to [date]. No protests received / Protest filed on [date]." Staff are advised when the window closes and the contract can proceed. If a protest is filed, the system flags the contract for legal review. Entirely advisory — the system tracks the window, staff manage the process.
**Constraint:** Requires award dates and protest filing data. Socrata has effective_from dates; protest filing data likely requires integration with the City's procurement operations system or manual entry.

---

## Idea 7 — BUILD: Vendor Concentration Risk Dashboard with Departmental Breakdowns
**Prior art:** RVA Contract Lens already flags vendor concentration; 2025 OCA audit: $20.7M in p-card purchases, $5M "questionable expenses"; Tempe Procurement Dashboard provides department-level views
**JTBD addressed:** Job 1 (Portfolio-level risk visibility); Job 2 (New staff understanding department exposure)
**Real data required:** Socrata xqn7-jvv2 (supplier, agency_department, contract_value)
**How it works:** A dedicated dashboard view showing: which vendors hold contracts across multiple departments, which departments have >40% of spend concentrated in a single vendor, and the financial exposure if a concentrated vendor fails or is excluded. Each flag is advisory: "Department of Public Utilities: 52% of spend with [Vendor X]. Review for concentration risk." Includes historical trend: is concentration increasing or decreasing over time?
**Constraint:** Socrata supplier name fragmentation (735 strings) means normalization is required before concentration analysis is meaningful. The $28M savings projection in the demo should have its methodology documented here.

---

## Idea 8 — BUILD: Proactive Contract Portfolio Health Report (Monthly Advisory)
**Prior art:** CompareX claims 90% review time reduction; SimpliContract mNemoAI offers real-time compliance monitoring; Tempe Procurement Dashboard provides export-ready reports
**JTBD addressed:** Job 1 (Proactive portfolio management, not reactive); Job 2 (Contextual briefing for any portfolio holder)
**Real data required:** Socrata xqn7-jvv2 (all fields); SAM.gov exclusion data (if integrated); Decision Timeline data (if populated)
**How it works:** Monthly auto-generated advisory report for procurement leadership: "Portfolio Health: [month]. Contracts reviewed: X. Expiring next 30 days: Y (total value: $Z). Compliance checks: A passed, B flagged. Vendor concentration alerts: C. Decision timeline entries: D." Report is generated automatically from available data and sent by email. All content is advisory — leadership uses it to allocate review capacity and identify systemic risks.
**Constraint:** Report quality depends on data completeness. If Socrata is the only source, the report covers metadata. If federated search data is integrated, the report covers compliance.

---

## Idea 9 — BUILD: Plain-Language Contract Explainer for Public Portal (Equity — Accessibility)
**Prior art:** RVA Contract Lens already has Spanish translation and Atkinson Hyperlegible font; NYC Capital Projects Tracker uses plain-language project descriptions; Richmond JustFOIA pilot (May 2026) includes a public library of frequently requested records
**JTBD addressed:** Job 3 (Residents understanding procurement, not just seeing numbers)
**Real data required:** Socrata xqn7-jvv2 description field; AI-generated plain-language summaries (constrained to factual paraphrasing)
**Equity dimension:** This is an accessibility equity idea. The public portal shows numbers and department names. Adding plain-language explanations makes those numbers understandable to residents who are not procurement experts. "The Department of Public Utilities has a $2.3M contract with [Vendor] for water treatment chemicals, running through December 2027" is more useful than a table row with the same data.
**How it works:** For each contract displayed on the public portal, generate a one-sentence plain-language summary from the Socrata description, contract_value, supplier, effective_from, and effective_to fields. Summaries are factual paraphrases, not opinions. Available in English and Spanish. AI generates the summary; a human reviews before publication if the contract is high-value or sensitive.
**Constraint:** Socrata description field quality is variable. Some descriptions may be too terse or jargon-heavy for useful paraphrasing.

---

## Idea 10 — BUILD: Open-Source the Federated Search Engine as Civic Infrastructure (Equity — Systemic)
**Prior art:** NYC Checkbook 2.0 is open-source; no open-source federated municipal compliance checker exists; prior art synthesis confirms "no commercial tool currently does federated municipal compliance checking at this price point"
**JTBD addressed:** All three jobs — by making the tool available to other municipalities
**Real data required:** RVA Contract Lens's federated search codebase; API connectors for SAM.gov, FCC, OFAC, Socrata
**Equity dimension:** This is a systemic equity idea. If Richmond builds a federated compliance checker and open-sources it, every city in Virginia (and nationally) can deploy it. Small municipalities without procurement staff benefit most — they have the same compliance requirements but fewer resources. MBE/SWaM vendors working across Virginia cities benefit from a consistent compliance-checking tool rather than a different system per municipality.
**How it works:** Publish the federated search engine as an open-source project with pluggable data source connectors. Each municipality configures: their Socrata dataset (or equivalent), SAM.gov API key, and any local compliance sources. The scoring model is configurable — each city can adjust weights to match local procurement policy. Richmond is the reference implementation. The code is advisory by design — it surfaces data and recommends, never determines.
**Constraint:** Open-sourcing requires code quality, documentation, and security review. Not a weekend project — this is a 3–6 month effort after the hackathon. But the long-term value justifies the investment if the core architecture works.

---

## Summary Table

| # | Type | JTBD | Key Data Required | Equity Dimension | Advisory-Only |
|---|------|------|------------------|-----------------|---------------|
| 1 | Verify+Harden | J1 | SAM.gov + FCC + OFAC + Socrata | — | ✅ Status transparency |
| 2 | Build | J1, J2 | Scoring model + historical decisions | — | ✅ Calibration for trust |
| 3 | Adopt | J1 | Mira's Azure stack + city PDFs | — | ✅ Extraction for verification |
| 4 | Build | J3 | Socrata + SWaM DB | ✅ MBE/SWaM public tracking | ✅ Informational |
| 5 | Build | J2 | Decision Timeline + staff input | — | ✅ Staff-authored rationale |
| 6 | Build | J1 | Contract dates + VPPA rules | — | ✅ Window tracking only |
| 7 | Build | J1, J2 | Socrata xqn7-jvv2 | — | ✅ Flags risk patterns |
| 8 | Build | J1, J2 | Socrata + SAM.gov + Timeline | — | ✅ Advisory report |
| 9 | Build | J3 | Socrata + AI summaries | ✅ Accessibility / plain language | ✅ Factual paraphrasing |
| 10 | Build | All | Federated search codebase | ✅ Systemic — other cities benefit | ✅ Advisory by design |
