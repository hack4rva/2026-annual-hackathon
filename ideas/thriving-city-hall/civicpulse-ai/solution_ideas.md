# Solution Ideas — Procurement Risk & Opportunity Review (CivicPulse AI Context)

**Pillar:** A Thriving City Hall
**Problem Statement (verbatim):** Help City staff identify valid, compliant contracts across City, state, and federal sources without manual PDF hunting.
**Demo Context:** CivicPulse AI — SmartGo Procurement Intelligence Hub
**Date:** March 31, 2026
**Basis:** Prior art research (CompareX, SquarePact, SimpliContract, Tempe Procurement Dashboard, NYC Checkbook 2.0, SF Supplier Contracts); Socrata xqn7-jvv2; SAM.gov; eVA; VITA CobblestoneContracts; documented staff pain points

All ideas below are advisory-only. No idea auto-awards, auto-disqualifies, or replaces human procurement judgment. Every recommendation is a flag for staff review.

---

## Idea 1 — ADOPT+BUILD: Connect Contract Pulse View to Socrata xqn7-jvv2 for Real-Time Expiry Dashboard
**Prior art:** Tempe Procurement Dashboard (filter by renewal/expiry, CSV export); SF Supplier Contracts Socrata dataset (cqi5-hm2d, 47.6K rows, proves Socrata-as-dashboard-backend at scale)
**JTBD addressed:** Job 1 (Procurement officer facing renewal deadline)
**Real data required:** Socrata City Contracts (xqn7-jvv2) — SODA API at data.richmondgov.com/resource/xqn7-jvv2.json; 1,362 records; effective_from, effective_to, contract_value, supplier, agency_department
**How it works:** Replace CivicPulse AI's synthetic dashboard data with a live SODA API connection to Richmond's contract dataset. Dashboard calculates days-to-expiry from effective_to, color-codes urgency (red/yellow/green), and sorts by deadline. Staff see their actual portfolio, not demo data. All displays are advisory — the system flags approaching deadlines but does not take action.
**Constraint:** Socrata dataset lacks NAICS codes, renewal terms, and compliance status. Dashboard shows expiry urgency but cannot assess compliance. 29 rows at $1 and 18 at $0 need filtering (placeholder records).

---

## Idea 2 — BUILD: SAM.gov Exclusion Checker Integrated into PDF Extraction Pipeline
**Prior art:** FEMA deobligated $805,630 for one false-negative debarment check; vendor verification failures = ~26% of Single Audit findings; SquarePact automates debarment verification
**JTBD addressed:** Job 1 (Cross-registry compliance in one place)
**Real data required:** SAM.gov Entity/Exclusion API (api.sam.gov — API key required, 10 req/day personal tier, higher for .gov accounts); vendor name extracted by CivicPulse AI's Document Insight Extractor
**How it works:** After CivicPulse AI's extraction engine pulls a vendor name from a PDF, it automatically queries SAM.gov for (a) entity registration status and (b) active exclusions. Result displayed as an advisory flag: "SAM.gov: Active / Excluded / Not Found." Staff review and decide. System never approves or disqualifies — it surfaces the registry status for human judgment.
**Constraint:** SAM.gov API has rate limits (10 req/day personal). A .gov API key raises this substantially. Vendor name matching across systems is imperfect (735 distinct supplier strings in Socrata show fragmentation).

---

## Idea 3 — BUILD: Contract Renewal Calendar with 90/60/30/14-Day Advisory Alerts
**Prior art:** Tempe Procurement Dashboard renewal tracking; 2010 Richmond MUNIS audit found expired contract still treated as active; staff currently fall back to Outlook calendars for renewal tracking
**JTBD addressed:** Job 1 (Missed renewal window prevention)
**Real data required:** Socrata xqn7-jvv2 effective_to field (100% date completeness confirmed); staff email addresses for alert delivery
**How it works:** A calendar view layered on top of Socrata data that sends advisory email/text alerts at 90, 60, 30, and 14 days before contract expiration. Each alert says: "Contract [number] with [supplier] expires on [date]. Review recommended." No auto-renewal, no auto-action — alerts are informational only.
**Constraint:** Socrata does not include renewal terms or options. The system can alert on expiry but cannot advise whether renewal vs. rebid is the right action without additional data (which the PDF extraction layer could supply).

---

## Idea 4 — BUILD: Decision Log Per Contract — Institutional Memory Layer
**Prior art:** RVA Contract Lens's decision timeline feature; NYC Checkbook 2.0 (audit trail for public contract decisions); 2025 OCA audit found $5M in "questionable expenses" partially attributable to lost institutional context
**JTBD addressed:** Job 2 (New staff who inherited a portfolio with no context)
**Real data required:** Socrata xqn7-jvv2 as contract index; staff input (review decisions, notes, rationale) stored in application database
**How it works:** For each contract in the dashboard, staff can log a timestamped decision entry: "Reviewed [date]. Decision: [renew/rebid/escalate]. Rationale: [free text]. Reviewer: [name]." Entries are append-only and immutable. When a new staff member inherits the portfolio, they see the full decision history. All entries are staff-authored — AI does not generate or modify decision records.
**Constraint:** Requires staff adoption — value only accrues if staff actually log decisions. The lightest-weight approach: require a decision entry before a contract can be marked as "reviewed" in the system.

---

## Idea 5 — ADOPT: OpenGov Portal Enhancement — Add AI Extraction to Existing Infrastructure
**Prior art:** Richmond already operates OpenGov procurement portal at procurement.opengov.com/portal/rva; CompareX claims 90% review time reduction through AI extraction on existing workflows
**JTBD addressed:** Job 1 (Reduce time to identify valid, compliant contracts)
**Real data required:** OpenGov portal data (already live); CivicPulse AI's PDF extraction engine as an add-on layer
**How it works:** Rather than building a parallel system, integrate CivicPulse AI's extraction capability into the existing OpenGov portal workflow. When staff upload a contract PDF to OpenGov, the extraction engine automatically pulls key fields and populates structured records. This preserves the City's existing tool investment while adding AI intelligence. Advisory flags only — extracted fields are presented for staff verification, not auto-committed.
**Why adoption is the right frame:** Richmond already has a procurement portal. Adding extraction to it is cheaper and faster than building a new system. The risk of a parallel system is that staff must maintain two tools.
**Constraint:** Requires OpenGov's cooperation or API access for integration. May conflict with OpenGov's own product roadmap.

---

## Idea 6 — BUILD: Public Spending Dashboard from Socrata Data (Equity — Transparency)
**Prior art:** NYC Checkbook 2.0 (open-source contracts UI/API, sub-vendor tracking, public-facing); Richmond JustFOIA pilot launching May 2026 shows institutional commitment to transparency
**JTBD addressed:** Job 3 (Resident/watchdog asking "where does the money go?")
**Real data required:** Socrata xqn7-jvv2 (1,362 records — contract_value, agency_department, supplier, procurement_type); SODA API (freely available, no auth needed for public data)
**Equity dimension:** Makes procurement spending visible to any resident without FOIA. Enables public oversight of vendor concentration and department spending patterns.
**How it works:** A read-only public dashboard built entirely on Socrata data. Shows total contract value by department, top vendors by spend, contract count by procurement type. All data already public — this is presentation, not disclosure. No login required. Available in English and Spanish. Uses Atkinson Hyperlegible font for accessibility.
**Constraint:** Socrata data lacks MBE/SWaM certification status. Cannot answer "are minority-owned businesses getting a fair share?" without linking to VA DSBSD SWaM database.

---

## Idea 7 — BUILD: MBE/SWaM Participation Tracker (Equity — Vendor Equity)
**Prior art:** VA DSBSD SWaM database (sbsd.virginia.gov); Richmond's stated equity goals; procurement equity research documenting that AI tools risk systematically disadvantaging small/minority vendors
**JTBD addressed:** Job 3 (Public accountability for equitable spending); also supports Job 1 (compliance with city equity procurement goals)
**Real data required:** Socrata xqn7-jvv2 supplier field; VA DSBSD SWaM certification database; manual or fuzzy matching between Socrata supplier names and SWaM-certified business names
**Equity dimension:** This is the equity idea. Answers the question "are minority-owned businesses getting a fair share of Richmond contracts?" with real data.
**How it works:** Cross-reference Socrata contract supplier names with the SWaM certification database. Produce a dashboard showing: % of contract dollars going to SWaM-certified vendors, by department, over time. Advisory only — the dashboard surfaces patterns for policy discussion, not enforcement.
**Constraint:** Supplier name matching across databases is imperfect (735 distinct strings in Socrata, many variations of the same vendor). Requires fuzzy matching or a manual crosswalk. SWaM database access method needs verification.

---

## Idea 8 — BUILD: Cross-Source Contract Finder — Federated Search Across City, State, Federal
**Prior art:** RVA Contract Lens's 8-source federated search concept; no commercial tool currently does federated municipal compliance checking at this price point (per prior art synthesis)
**JTBD addressed:** Job 1 (Compliance status across registries in one place — the core of the problem statement)
**Real data required:** Socrata xqn7-jvv2 (city); eVA (state — web scraping or partnership); SAM.gov Entity/Exclusion API (federal); VITA CobblestoneContracts (state IT — web-only)
**How it works:** Staff enter a vendor name or contract number. The system queries all available registries in parallel and returns a consolidated advisory report: City contract status (Socrata), state contract status (eVA), federal entity/exclusion status (SAM.gov), state IT contract status (VITA). Each source is labeled with data freshness. System does not determine compliance — it displays what each registry says. Staff decide.
**Constraint:** eVA and VITA have no public API — requires web scraping (fragile) or formal data partnership. SAM.gov rate-limited. This is the YELLOW-rated opportunity from the research: conditional on data access.

---

## Idea 9 — BUILD: Contract Risk Heatmap by Department (Portfolio-Level Advisory View)
**Prior art:** RVA Contract Lens's vendor concentration flagging and $28M savings projection; Tempe Procurement Dashboard provides department-level filtering
**JTBD addressed:** Job 1 (Portfolio-level visibility beyond contract-by-contract review)
**Real data required:** Socrata xqn7-jvv2 (contract_value, agency_department, supplier, effective_to)
**How it works:** A heatmap view showing risk by department: number of contracts expiring in the next 90 days, total value at risk, vendor concentration (% of department spend going to a single vendor). All metrics are advisory — the heatmap flags departments with elevated risk for proactive review, not automated action. Procurement managers use this to allocate review capacity.
**Constraint:** Socrata lacks renewal terms. A contract expiring in 30 days with an automatic renewal clause is different from one that requires rebidding. Without renewal data, urgency assessments are conservative.

---

## Idea 10 — BUILD: Extraction Accuracy Scorecard — Trust Calibration for AI Output
**Prior art:** Mira's side-by-side PDF preview for verification; CompareX claims 90% time reduction but does not publish accuracy metrics; OCR failure modes documented in prior art (poor scans, handwritten annotations, non-standard formatting)
**JTBD addressed:** Job 1 (Trust in AI-extracted data for decision-making)
**Real data required:** CivicPulse AI extraction output; ground-truth comparison from manually reviewed contracts
**How it works:** For the first 50 contracts processed, a staff member manually verifies each AI-extracted field against the source PDF. Results are logged: field-level accuracy rate (e.g., "expiration date correct 94% of the time, contract value correct 87%"). This scorecard is published to all staff and updated quarterly. Staff know exactly how much to trust the AI and which fields need extra scrutiny. The system is transparent about its own limitations.
**Why this matters:** Staff will not trust AI extraction without evidence of accuracy. The 2010 MUNIS audit (expired contract treated as active) shows what happens when systems are trusted without verification. Building trust requires measurement, not marketing.
**Constraint:** Requires staff time for the initial verification exercise. A 50-contract sample at 15 minutes each = ~12.5 hours of staff time. This is an investment in adoption.

---

## Summary Table

| # | Type | JTBD | Key Data Required | Equity Dimension | Advisory-Only |
|---|------|------|------------------|-----------------|---------------|
| 1 | Adopt+Build | J1 | Socrata xqn7-jvv2 | — | ✅ Flags deadlines, no action |
| 2 | Build | J1 | SAM.gov API | — | ✅ Displays status, staff decides |
| 3 | Build | J1 | Socrata xqn7-jvv2 | — | ✅ Alerts only |
| 4 | Build | J2 | Socrata + staff input | — | ✅ Staff-authored logs |
| 5 | Adopt | J1 | OpenGov portal | — | ✅ Extraction for verification |
| 6 | Build | J3 | Socrata xqn7-jvv2 | ✅ Public transparency | ✅ Read-only display |
| 7 | Build | J1, J3 | Socrata + SWaM DB | ✅ MBE/SWaM tracking | ✅ Surfaces patterns, not enforcement |
| 8 | Build | J1 | Socrata + eVA + SAM.gov + VITA | — | ✅ Displays registry status |
| 9 | Build | J1 | Socrata xqn7-jvv2 | — | ✅ Flags risk, no action |
| 10 | Build | J1 | Extraction output + manual review | — | ✅ Trust calibration |
