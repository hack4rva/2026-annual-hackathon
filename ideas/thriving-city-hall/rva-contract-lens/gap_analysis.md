# Gap Analysis — RVA Contract Lens

**Pillar:** A Thriving City Hall
**Problem Statement (verbatim):** Procurement Risk & Opportunity Review — Help City staff identify valid, compliant contracts across City, state, and federal sources without manual PDF hunting.
**Demo:** RVA Contract Lens — Federated AI Procurement Intelligence
**Review Date:** March 31, 2026

---

## Problem Grounding

**Problem statement (verbatim):** Help City staff identify valid, compliant contracts across City, state, and federal sources without manual PDF hunting.

**Primary user:** A Richmond procurement officer responsible for a portfolio of ~1,400 active contracts worth ~$7 billion who currently spends up to three days verifying a single contract's compliance status by manually cross-referencing PDFs, state databases, federal registries, and internal spreadsheets — and a Richmond resident who cannot access procurement data without filing a FOIA request.

**Pain today:**
- Staff spent three full days to verify one recurring software renewal (cited explicitly in demo, confirmed by pillar champion Doug Gernat)
- ~1,400 contracts across ~$7 billion scattered across state databases, federal registries, and local spreadsheets
- No federated view — each verification requires opening SAM.gov, VITA, internal PDFs, and spreadsheets separately
- Institutional knowledge disappears when veteran procurement officers retire or transfer
- Procurement data is effectively invisible to the public despite being technically public record

**Desired outcome:**
- A procurement officer clicks on any contract and receives a compliance verdict across all relevant registries in seconds, not days
- Urgency-triaged dashboard prevents missed renewal windows
- Every AI-assisted decision is logged for institutional memory
- Any resident can see how the city spends procurement dollars in plain language

---

## Data Source Map

| Data Claim in Demo | Real Source Claimed | Owner | Access | Cadence | Status |
|--------------------|-------------------|-------|--------|---------|--------|
| ~1,400 contracts, ~$7 billion | Implied: City of Richmond contract data | City of Richmond | Unknown | Unknown | ⚠️ **Scale claim plausible** — Socrata xqn7-jvv2 has 1,362 records. $7B claim needs verification against Socrata contract_value totals |
| SAM.gov federal compliance check | SAM.gov | Federal GSA | api.sam.gov (API key required) | Real-time | ⚠️ **Claimed as live integration** — needs verification. SAM.gov API exists and is free but rate-limited (10 req/day personal) |
| FCC prohibited vendor lists | FCC Covered List | FCC | fcc.gov | Per enforcement action | ⚠️ **Claimed as live integration** — FCC covered list is publicly available but has no standard API |
| FBI consolidated screening databases | OFAC SDN + related lists | Treasury/FBI | ofac.treasury.gov | Per enforcement action | ⚠️ **Claimed as live integration** — OFAC SDN is downloadable but FBI doesn't operate a single "consolidated screening database" under that name |
| OCR reading of scanned PDFs | Unspecified OCR engine | Team-built | Automatic per contract | Per contract | ⚠️ **Claimed but PDF sources unspecified** — are these real Richmond contract PDFs or sample documents? |
| Urgency triage (today/week/month) | Derived from contract expiration dates | Unknown source for dates | Dashboard computation | Per refresh | ⚠️ Data source for expiration dates not specified — could be Socrata, could be synthetic |
| Scoring logic (+/- points, visible) | Team-designed scoring model | Team-built | Automatic per verdict | Per query | ⚠️ **Scoring model demonstrated but training data and calibration undisclosed** — "+20 for clear compliance" is understandable but the basis for point values is not documented |
| Public portal spending breakdowns | Implied: City contract data | City of Richmond | Public display | Unknown | ⚠️ Data source for spending figures not specified — likely Socrata but not confirmed |
| Department-level drill-down (top vendors, amounts) | Implied: Socrata xqn7-jvv2 | City of Richmond | SODA API | Monthly | ⚠️ Consistent with Socrata data shape but integration not confirmed |
| Decision timeline (auto-logged) | Application database | Team-built | Automatic | Per decision | ✅ Feature demonstrated — application-level persistence |
| Vendor concentration risk flags | Derived from contract data | Team-computed | Automatic | Per analysis | ⚠️ Data source undisclosed — requires portfolio-level data to compute |
| $28M savings projection | Team-computed | Team analysis | One-time | N/A | ⚠️ **Specific dollar figure claimed** — methodology and data basis undisclosed |
| Spanish translation | Application feature | Team-built | On-demand | N/A | ✅ Feature demonstrated |
| High contrast / Atkinson Hyperlegible font | Application feature | Team-built | On-demand | N/A | ✅ Feature demonstrated |

**Critical finding:** RVA Contract Lens claims the most ambitious data architecture of any procurement demo — federated search across 8 independent data sources with real-time compliance checking. However, none of the external data source integrations are confirmed as live. The demo describes what the integrations would do and shows results, but it is unclear whether the queries are hitting live APIs or displaying pre-computed/synthetic results.

**The key verification question:** When a procurement officer clicks a contract and receives an "8-second verdict," are SAM.gov, FCC, and FBI/OFAC actually being queried in real time? Or is the demo showing a pre-staged result? This is the difference between a working prototype and a conceptual demonstration.

**What would confirm live integration:**
- SAM.gov: A .gov API key in the codebase or environment, with demonstrable response time variability
- FCC: The Covered List is a static PDF/CSV — "real-time checking" against it means a local lookup, not an API call
- FBI/OFAC: The SDN list is downloadable as CSV/XML — similar to FCC, this is a local lookup after initial download

**The data architecture RVA Contract Lens describes is technically feasible** — SAM.gov has a real API, FCC/OFAC lists are publicly downloadable, OCR extraction is proven (Mira does it). The question is whether it was actually built and integrated during the hackathon, or designed and demonstrated with synthetic results.

---

## Gap Analysis

### Job 1 — Procurement Officer Facing a Renewal Deadline
**Demo coverage:** Strong (if integrations are live)

RVA Contract Lens directly addresses every dimension of Job 1:
- **Urgency triage** (today/week/month lanes) — officer sees priorities immediately
- **Federated search** across 8 sources — officer gets compliance status without leaving the dashboard
- **8-second verdict** (renew/rebid/escalate) — officer gets an actionable advisory recommendation
- **Transparent scoring** — officer sees exactly how the verdict was reached (+/- points, visible logic)
- **Human makes final decision** — explicitly advisory, not deterministic

This is the most complete response to Job 1 among all four procurement demos. If the data integrations are live, this solves the "3 days to verify one contract" problem as described.

**Missing:**
- **Integration verification.** The federated search is the core claim. If any of the 8 sources are synthetic, the verdict is correspondingly synthetic. SAM.gov is the most critical integration to verify — it's the one with a real API and the highest compliance stakes (debarment verification required for contracts >$25,000).
- **Scoring model calibration.** "+20 points for clear compliance" is transparent but the basis for point values is not documented. How were the weights chosen? Were they calibrated against actual procurement decisions? An uncalibrated scoring model can produce plausible-looking but misleading verdicts.
- **Vendor name matching.** Federated search requires matching the vendor name in the contract against entity names in SAM.gov, FCC, and OFAC databases. Socrata has 735 distinct supplier strings with known fragmentation. How does the system handle "Richmond Vendor LLC" vs. "Richmond Vendor" vs. "RV LLC"?

**Fixable?** If integrations are synthetic, building them is tractable — SAM.gov API exists, FCC/OFAC lists are downloadable. If integrations are live, the remaining work is calibration and edge-case handling. The architecture is sound either way.

### Job 2 — New Staff Who Inherited a Portfolio With No Context
**Demo coverage:** Strong

The Decision Timeline is the strongest institutional memory feature among all procurement demos. It automatically logs every AI-assisted decision with a timeline, creating an audit trail that persists beyond staff turnover. When a new staff member joins, they inherit decision history rather than starting from zero. The proactive portfolio advice (vendor concentration, $28M savings projection) provides forward-looking context.

**Missing:**
- **Decision rationale is AI-generated, not staff-authored.** The timeline logs what the AI recommended and what data it used, but does not capture why the officer agreed, disagreed, or modified the recommendation. The human side of the decision is not recorded.
- **$28M savings figure needs methodology.** If this is presented to a new staff member as context, they need to understand how it was calculated and what assumptions it rests on.

**Fixable?** Adding a staff-authored rationale field to the decision log is straightforward. The $28M figure should include a methodology footnote.

### Job 3 — Resident/Watchdog Asking "Where Does the Money Go?"
**Demo coverage:** Strong

The Public Portal is the most complete resident-facing transparency feature among all procurement demos:
- Total active contract value
- Top spending departments
- Department-level drill-down (top vendors, specific dollar amounts)
- No FOIA request required
- Accessibility: Spanish translation, high contrast dark mode, Atkinson Hyperlegible font

This directly addresses Job 3. A resident can see how the city spends procurement dollars without filing a request, creating an account, or understanding procurement jargon.

**Missing:**
- **MBE/SWaM participation data.** The most asked equity question — "are minority-owned businesses getting a fair share?" — is not answered. The public portal shows who gets contracts and how much, but not whether the distribution is equitable.
- **Data source for spending figures.** If the public portal displays Socrata data, the figures are verifiable. If the figures are synthetic, the portal is a mockup.
- **Privacy controls.** Making detailed vendor/contract data public requires careful handling of proprietary pricing and ongoing negotiation details. Prior art documents this risk.

**Fixable?** Adding SWaM certification cross-reference is feasible (VA DSBSD database). Privacy controls require a policy decision about what level of detail is appropriate for public display.

---

## Overall Verdict

**Does the demo solve the problem as stated?** Architecturally, yes — more completely than any other procurement demo. Operationally, verification needed.

RVA Contract Lens is the only demo that addresses all three JTBDs: staff compliance (Job 1), institutional memory (Job 2), and public transparency (Job 3). The federated search across 8 data sources is exactly what the problem statement describes — compliance identification "across City, state, and federal sources." The advisory-only framing is explicitly correct: "the human procurement officer always makes the final decision."

**The critical question is data authenticity.** If the federated search genuinely queries SAM.gov, FCC, OFAC, and city contract data in real time, this is a working prototype that could be piloted. If the results are pre-staged or synthetic, this is a compelling architectural vision that still needs to be built. The demo itself does not make clear which case applies.

**The 3-day-to-8-seconds claim** is the most concrete value proposition of any procurement demo. It is grounded in a real documented case (staff spent 3 days verifying one contract, confirmed by Doug Gernat). If the 8-second verdict is backed by real API calls, this is a transformative capability. If it is backed by cached/synthetic results, the 8-second claim is about UI speed, not data speed.

---

## Opportunities

### Opportunity 1 — Verify and Harden the Federated Search Integrations
The most important next step for RVA Contract Lens is not building new features — it is verifying what exists. Confirm: (a) SAM.gov API key is live and queries return real-time results; (b) FCC Covered List and OFAC SDN are being checked against current downloads; (c) OCR extraction runs on real Richmond contract PDFs. If any integration is synthetic, build it — the architecture supports it. Prior art: No commercial tool currently does federated municipal compliance checking at this price point.

### Opportunity 2 — Add MBE/SWaM Equity Layer to Public Portal
The public portal shows who gets contracts. Adding SWaM certification cross-reference would show whether the distribution is equitable. Cross-reference vendor names in the portal with VA DSBSD SWaM certification database. Display: "X% of contract dollars went to SWaM-certified businesses this year." This addresses the most common public equity question about procurement. Prior art: No municipality in Virginia provides this view publicly.

### Opportunity 3 — Combine Mira's Proven Extraction Engine with RVA Contract Lens's Federated Architecture
Mira has the best PDF extraction pipeline (Azure OCR + RAG, real data, $200/month). RVA Contract Lens has the best compliance architecture (federated search, scoring, decision timeline). Neither alone solves the full problem. Combined: Mira extracts and structures the document; RVA Contract Lens checks the vendor across registries and produces the advisory verdict. Prior art synthesis: "The unique opportunity is RVA Contract Lens's federated search combined with Mira's proven ability to work with real city contract PDFs at $200/month."
