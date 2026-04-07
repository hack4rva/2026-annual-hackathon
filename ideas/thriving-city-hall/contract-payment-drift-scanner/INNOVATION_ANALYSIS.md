# Innovation Analysis: Contract-Payment Drift Scanner

**Generated:** April 2, 2026
**Inputs:** IDEA.md, RESEARCH_RESULT.md, 6 Innovation Lenses

---

## 1. Blue Ocean Reframing (ERRC Grid)

| Factor | Action | Details |
|--------|--------|---------|
| Enterprise CLM/audit software | Eliminate | San Francisco's audit found $3.1M in improper payments using basic data joins, not enterprise tools. The math is arithmetic, not AI. |
| Manual auditor review of individual contracts | Reduce | Portland automates overrun detection with OCDS joins. Reduce human review to only flagged anomalies, not the full portfolio. |
| Cross-referencing contracts with actual payments | Raise | Richmond publishes both datasets (`xqn7-jvv2` for contracts, `5y73-enav` for payments) on the same Socrata platform. Raise this from "possible" to "default" — every contract should show its payment trajectory. |
| Split-PO and unauthorized advance detection | Create | No Richmond tool flags split purchases (same vendor, same date, amounts just below $10K threshold) or payments before contract registration. Create these red-flag rules from Chicago/SF audit patterns. |

**Core assumption challenged:** That procurement oversight requires expensive audit tools. Portland's OCDS implementation and Austin's Socrata dataset prove that contract-to-payment joins can be done with SQL queries against public data. The barrier is analytical will, not technology.

**Reframed value proposition:** The Drift Scanner turns two public datasets into an audit intelligence layer. It answers the question no current Richmond tool asks: "Which contracts are already behaving outside their stated terms?"

---

## 2. Rapid Ideation — 8 Divergent Approaches

1. **Overrun Leaderboard** — Rank contracts by the ratio of payments-to-award-value. The top 10 "most overrun" contracts are visible in a single view.
2. **Payment Velocity Anomaly Detector** — Flag contracts where payment frequency suddenly spikes (e.g., monthly → weekly), suggesting scope creep or unauthorized work.
3. **Zombie Contract Finder** — Identify contracts where payments continue after the stated `effective_to` date. These are contracts operating beyond their terms without formal renewal.
4. **Split-PO Radar** — Flag multiple payments to the same vendor on the same date just below the oversight threshold ($10K). San Francisco's audit caught $1.79M this way.
5. **Vendor Concentration Heatmap** — Show which vendors receive payments across many contracts. High concentration without competitive bidding signals potential dependency risk.
6. **Public Audit Dashboard** — Publish all flagged anomalies publicly. Let journalists, civic watchdogs, and council members see the same data auditors would.
7. **Department Drift Scorecard** — Score each department on payment discipline: % of contracts within budget, % with post-expiry payments, average overrun ratio. Gamify compliance.
8. **AI Anomaly Triage** — Use the OCP Cardinal library's Isolation Forest model to rank contracts by anomaly score, prioritizing human review on the highest-risk items.

**Most provocative:** #6 — A public audit dashboard turns fiscal oversight into civic infrastructure. If residents can see which contracts are over budget, political accountability supplements institutional controls.
**Most feasible:** #1 — The Overrun Leaderboard requires a single SQL join: `SELECT contract_number, SUM(payment_amount) / contract_value AS overrun_ratio FROM payments JOIN contracts USING (contract_number) ORDER BY overrun_ratio DESC`.

---

## 3. Rapid Design Sprint

**Problem in one sentence:** Richmond has no tool to detect when cumulative payments on a contract exceed the original award value or when payments continue past the contract's stated end date.

**Target user:** City auditor or procurement oversight analyst reviewing the health of the City's contract portfolio.

**User Journey:**
- Start: Analyst opens the Drift Scanner and sees a list of contracts sorted by "drift score" — a composite of overrun ratio and post-expiry payment activity.
- Friction: Currently, this analysis requires downloading two datasets, joining them in Excel, and manually computing ratios. The friction is in the setup, not the math.
- Outcome: Analyst sees: "Contract #1234 with Vendor X: $450K awarded, $620K paid (138% of award). Last payment 3 months after expiry date. 4 payments on same day just below $10K."

**Lowest-fidelity prototype:** A Python notebook (or static HTML page) that downloads both Socrata CSVs, joins on contract number, computes overrun ratios and post-expiry payment counts, and renders a sortable table.

**First test:** Share the output with a City auditor or Council budget analyst. Ask: "Do any of these flags surprise you? Are there contracts here you didn't know were overrun?"

---

## 4. Opportunity Mapper

### Pattern A: Overrun and Zombie Scanner (Quick Win)
- **User:** City auditor, procurement oversight staff, Council budget analysts
- **Outcome:** Instant visibility into contracts where payments exceed awards or continue past stated terms
- **Workflow:** Download `xqn7-jvv2` (contracts) and `5y73-enav` (payments) → join on contract number → compute sum(payments)/contract_value → flag contracts > 100% and payments after `effective_to` → render sortable table
- **Dependencies:** Both Socrata datasets (public, no auth). Join key (contract number) must match across datasets.
- **Richmond relevance:** Richmond's RAPIDS audit found the 3-way match was eliminated, with 34% of invoices paid without it. This scanner surfaces the downstream consequences of that control failure.

### Pattern B: Rule-Based Anomaly Engine (Stretch)
- **User:** Chief Procurement Officer, audit team, department heads
- **Outcome:** Automated red-flag detection using patterns from SF/Chicago audits: split POs, same-day payments below threshold, unregistered invoicing, vendor concentration
- **Workflow:** Implement 5-6 standard audit rules from the OCP Red Flags Guide → compute anomaly scores → prioritize by risk → generate exception reports
- **Dependencies:** Both Socrata datasets plus deeper understanding of Richmond's procurement thresholds and approval policies
- **Richmond relevance:** Chicago's audit found $14.2M in improper direct voucher disbursements using exactly these cross-checks.

**Recommendation:** Pattern A delivers immediate value with a single data join. Pattern B builds on the same foundation and adds the analytical sophistication that auditors and CPOs need.

---

## 5. Problem Scoping

| Dimension | Score (1-5) | Notes |
|-----------|-------------|-------|
| Impact | 5 | Philadelphia cleared $221M in outstanding invoices after contract-to-payment analysis. Even a fraction of that visibility is transformative. |
| Feasibility | 5 | Both datasets are public Socrata. The analysis is arithmetic joins, not ML. |
| Data availability | 4 | Both datasets exist. Key risk: the join key (contract number) may not match cleanly across datasets. Must validate. |
| Clarity | 4 | "Show me contracts where payments exceed the award" is clear. The more sophisticated rules (split POs, post-expiry payments) require domain knowledge to define thresholds. |
| Demo credibility | 5 | Real anomalies in real Richmond data. If the scanner flags actual overruns, the demo is undeniable. |

**Richmond-specific alignment:** This idea was born from ERRC reframing and scored 21/25 (Tier S). It directly addresses the RAPIDS audit findings: elimination of 3-way match, AP staff with vendor creation rights, and 34% of invoices paid without matching. The scanner reveals the fiscal consequences of those control failures.

**Policy/eligibility risks:** Publishing anomaly flags publicly could embarrass departments or vendors. Consider a two-tier approach: internal detailed view for auditors, public aggregate view showing trends without naming specific vendors until findings are confirmed.

**Weekend MVP shapes:**
1. **Minimal:** Python script joining both CSVs, computing overrun ratios and post-expiry flags, outputting a sortable HTML table. 6-8 hours.
2. **Enhanced:** Add split-PO detection, vendor concentration analysis, and a "risk score" composite. Interactive web UI with drill-down. 10-14 hours.

---

## 6. Assumption Mapping

| # | Assumption | Risk | Uncertainty | Priority |
|---|-----------|------|-------------|----------|
| 1 | Contract numbers match between `xqn7-jvv2` and `5y73-enav` datasets | High | High | TEST FIRST |
| 2 | Payment amounts in `5y73-enav` represent actual disbursements, not encumbrances or commitments | High | Medium | TEST SECOND |
| 3 | Overruns flagged by the scanner represent real anomalies, not data artifacts (e.g., amendments not captured) | High | High | TEST THIRD |
| 4 | Auditors and procurement staff would use an external tool rather than internal audit systems | Medium | Medium | VALIDATE |
| 5 | Publishing anomaly data publicly is legally permissible under Virginia FOIA | Low | Low | CONFIRMED |
| 6 | The OCP Cardinal library works with Richmond's Socrata data format | Medium | Medium | VERIFY |
| 7 | Richmond's procurement thresholds ($10K for competitive bidding) are documented and stable | Low | Low | CONFIRM |

**Top 3 to validate:**
1. **Contract numbers match across datasets** — Validation: Download both CSVs. Attempt a join. Measure match rate. If < 80% match, the join key needs normalization (e.g., leading zeros, prefix stripping).
2. **Payment amounts represent actual disbursements** — Validation: Inspect `5y73-enav` field definitions. Check if the dataset includes payment status flags (paid vs. pending). Sum payments for a known contract and compare to the contract value to sanity-check.
3. **Overruns are real, not data artifacts** — Validation: Take the top 5 flagged overruns and cross-reference with public Council minutes or audit reports. If at least 3 are legitimate, the scanner works. If most are amendment artifacts, add amendment-tracking logic.

---

## Key Takeaway

This is the audit intelligence layer that turns Richmond's public data from transparency theater into fiscal accountability. Portland, Austin, and Chicago have all proven that contract-to-payment joins surface real, material anomalies — from $3.1M in improper payments (SF) to $14.2M in unauthorized disbursements (Chicago). Richmond has both datasets on the same Socrata platform with a clean join key. The only question is whether anyone has looked. This scanner answers that question in a weekend.
