# Outreach: Procurement Office — Contract Data & Systems Access — Research & Questions

### What we've confirmed through public sources

**Systems landscape:**
- **ERP:** Oracle RAPIDS (RVA: Advancing Proven Innovative Direction System) on Oracle E-Business Suite — the core procurement system.
- **Document storage:** OnBase enterprise content management system, integrated with RAPIDS (a liaison role between the two systems was posted publicly).
- **Solicitations:** OpenGov Procurement portal (procurement.opengov.com/portal/rva) for electronic IFB/RFP submissions.
- **Vendor portal:** Oracle iSupplier (rva.gov/procurement-services/supplier-portal) — mandatory registration for all suppliers, with accounts payable and opportunity management.

**Public data (actively used in our analysis):**
- **City Contracts** dataset (`xqn7-jvv2`) — 1,367 rows, updated monthly (last: March 30, 2026). Fields: agency_department, contract_number, contract_value, supplier, procurement_type, description, type_of_solicitation, effective_from, effective_to.
- **City Payment Register FY16+** (`5y73-enav`) — payment-level spend data from FY2016 onward.
- **eVA Procurement Data 2024** on the Virginia Open Data Portal — daily updates, 1.9M+ records, includes SWaM flags (Minority, Woman, Small, Micro) by vendor. This is the viable programmatic path to state-level price comparisons.
- **VITA CobblestoneContracts** — web portal available (vita.cobblestonesystems.com/public/) but **no public API**. Web search only.

**Staffing and performance:**
- Department of Procurement Services: **32 FTE** (FY2025, up from 27 in FY2024).
- Average RFP cycle: **307 days** end-to-end (FY2023). Target: 150 days by FY2025.
- Average IFB cycle: **118 days** advertisement to award (FY2023). Target: 90 days.

**Data quality issues we identified in the contracts dataset:**
- **735 distinct supplier strings** for what appears to be far fewer actual vendors (capitalization variations, embedded newlines, "- INACTIVE" tags — e.g., "FERGUSON ENTERPRISES INC" vs. "Ferguson US Holdings Inc").
- 18 contracts with non-positive values ($0 or $1 placeholders).
- 1 far-future expiration date (2050 placeholder).
- SODA API bug that drops the Description field (workaround: CSV download).

**Equity and oversight:**
- **MBE spend:** ~10% historically ($27.3M in FY2022). FY2025 target: 9%. Virginia state SWaM goal is 42% (HB61, 2026) — a significant gap between the city's target and the state's expectation.
- **B2GNow** compliance monitoring software adopted by OMBD for MBE tracking.
- **P-card reset:** April 30, 2025 — active p-cards reduced from 320 to 67 following reviews that identified control weaknesses.
- **Inspector General** report on MBE Compliance highlighted documentation and goal-verification complexity as barriers for small/minority vendors.
- **City Auditor** (FY2025) flagged "inadequate internal controls" across city departments.

**Comparable cities:**
- NYC runs Checkbook NYC (searchable public procurement with API). Portland launched "Portland Lift" using the Open Contracting Data Standard (OCDS). Tempe uses Bonfire. Tucson uses OpenGov (same as Richmond for solicitations). No comparable city has deployed AI-powered contract review at scale.

### What we still need your help with

Five questions only your team can answer:

1. **Mira's data claim:** One demo team (Mira) claims it was built with real City of Richmond contract PDFs obtained during the hackathon. Can you confirm whether sample contract documents were provided to teams? This matters because if Mira's AI was trained on real contracts, it's the closest of the four demos to being deployable.

2. **Vendor master list:** The 735 supplier strings in xqn7-jvv2 make all vendor analytics unreliable. Does a canonical vendor master exist in Oracle RAPIDS or iSupplier that maps these to unique entities? We've scoped a "Vendor Identity Resolution Tool" (Idea 14) that could clean this data, but we need to know if there's already a source of truth.

3. **OpenGov-Socrata integration:** OpenGov manages solicitations and Socrata publishes contract data. Are these expected to remain separate systems, or is there a planned integration? Understanding this helps us design tools that don't duplicate what the City already has underway.

4. **Automated debarment checking:** RVA Contract Lens attempted federated search across SAM.gov and other exclusion lists. Given the recent p-card reset and IG findings, would the procurement office be interested in a tool that batch-checks all 1,367 active vendors against the SAM.gov Exclusions API on a weekly basis? The API is free, requires no authentication for basic searches, and the check is binary (excluded or not). We scored this as one of the most demoable and highest-stakes tools (Idea 21, scored 88/105 on our rubric).

5. **P-card-to-contract matching priority:** The $5M in questioned p-card expenses and the reset from 320 to 67 cards suggest this is an active concern. Would the office support data access for a tool that cross-references the Payment Register with the City Contracts dataset to flag purchases to vendors who have active contracts (potential off-contract maverick spend)?

### What we're recommending

Based on the rubric scores and feasibility analysis, our top three pilot recommendations for procurement are:

1. **Contract Expiry Dashboard** (Idea 12, scored 99/105 Mayor's Choice) — Uses xqn7-jvv2 as-is. Sortable/filterable view of what expires when, with 30/60/90/180-day quick filters, surge warnings for clustered expirations, and data health indicators. 8-12 hours to build. Zero auth needed.

2. **Automated Expiry Alerts** (Idea 19, scored 99/105 Mayor's Choice) — Same data source. Weekly email digest to department procurement contacts: "You have 3 contracts expiring in 90 days." Converts the dashboard into proactive behavior. Prevents emergency procurement from missed renewals.

3. **Vendor Identity Resolution** (Idea 14, scored 95/105 Mayor's Choice) — Normalizes the 735 supplier strings into canonical vendor entities. Prerequisite for any meaningful MBE spend analysis, vendor concentration tracking, or public transparency dashboard.

All three can be built without touching RAPIDS, OnBase, or any internal system — they consume only the public Socrata data.

We're not asking for any commitment — just verifying data claims and understanding priorities. Happy to share any prototypes or our full analysis.

---

## Context for the SME
Four teams independently built AI-powered contract review tools — the strongest signal of validated demand in the pillar. But the research shows the highest-impact tools are simpler: expiry dashboards and vendor data cleanup, not AI. The p-card reset and IG findings create an opening for tools that address compliance and oversight directly.

The 9% city MBE target vs. 42% state SWaM target gap is a politically significant data point. A tool that cleanly measures actual MBE/SWaM spend (Idea 20) could surface whether the gap is a measurement problem or a policy problem.

## Why This Person
The pillar champion (Doug Gernat) identified Michael Gordon (Procurement) as the key adoption contact. A procurement officer can verify Mira's data claim, confirm whether a vendor master exists, and champion a pilot.

## Data Questions (internal tracking)
- [ ] Q1: Mira's real contract PDF claim verification
- [ ] Q2: Canonical vendor master in RAPIDS/iSupplier
- [ ] Q3: OpenGov-Socrata integration roadmap
- [ ] Q4: Interest in automated SAM.gov debarment checking
- [ ] Q5: P-card-to-contract matching as a priority

## Research Sources
- `_research-answers/proc_q1_system_data.md` — Oracle RAPIDS, OnBase, OpenGov, iSupplier confirmed
- `_research-answers/proc_q2_staffing_equity.md` — 32 FTE, 307-day RFP, p-card reset, MBE 9%/42%
- `_research-answers/proc_q3_prior_art.md` — NYC Checkbook, Portland OCDS, Tempe Bonfire, no AI at scale
- `_shared-procurement/jtbd_analysis.md` — full JTBD + answered questions
- `NEW_IDEAS_RUBRIC_GRADES.md` — scored solution ideas
