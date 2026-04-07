# Lifecycle Review — RVA Contract Lens

**Pillar:** A Thriving City Hall
**Problem Statement (verbatim):** Procurement Risk & Opportunity Review — Help City staff identify valid, compliant contracts across City, state, and federal sources without manual PDF hunting.
**Demo:** RVA Contract Lens — Federated AI Procurement Intelligence
**Review Date:** March 31, 2026
**Status:** Most Architecturally Complete — addresses all 3 JTBDs, but data integration claims need verification

---

## Rubric Checklist

| Step | Item | Status | Notes |
|------|------|--------|-------|
| 1 | Problem Grounding | ✅ Complete | gap_analysis.md header section — 3-day verification case cited, confirmed by pillar champion |
| 2 | JTBD Analysis (3 jobs) | ✅ Complete | jtbd_analysis.md — shared across procurement demos |
| 3 | Question Generation (10+ questions) | ✅ Complete | jtbd_analysis.md — 17 questions across 5 categories |
| 4 | Prior Art Research | ✅ Complete | prior_art_research.md — CompareX, SquarePact, CobblestoneContracts, regional implementations, equity gaps documented |
| 5 | Pain Point Research | ✅ Complete | pain_points.md — evidence-grounded for all 3 JTBDs, equity dimension addressed |
| 6 | Data Source Mapping | ✅ Complete | gap_analysis.md — all 8 claimed data sources mapped; none confirmed as live integration; each flagged for verification |
| 7 | SME Outreach | ⚠️ Blocked | No outreach drafted — need procurement staff to validate federated search utility, and IT to assess integration feasibility |
| 8 | Gap Analysis | ✅ Complete | gap_analysis.md — Job 1 strong (if live), Job 2 strong, Job 3 strong; all conditional on data verification |
| 9 | Opportunity Mapping | ✅ Complete | gap_analysis.md — 3 opportunities including Mira+RVA combination and MBE/SWaM equity layer |
| 10 | Solution Ideation | ✅ Complete | solution_ideas.md — 10 ideas, all advisory-only, citing prior art |
| 11 | Lifecycle Review | ✅ Complete | This file |

---

## What Was Fundamentally Missed

**RVA Contract Lens is the only demo that addresses the full problem statement.** It covers compliance "across City, state, and federal sources" (federated search), "without manual PDF hunting" (OCR extraction), staff decision support (urgency triage, advisory verdicts), institutional memory (decision timeline), and public transparency (public portal with accessibility features). No other procurement demo attempts all of this. The architectural design is exactly what the problem statement calls for.

**What was fundamentally missed is verification.** The demo claims 8 live data source integrations, an 8-second federated verdict, and a $28M savings projection. None of these are verified in the transcript as running against live APIs with real-time data. The demo describes what the system does, shows the UI with results, but does not demonstrate the live data flow (e.g., showing a SAM.gov API response, or demonstrating different results for different vendors in real time).

This matters because the gap between "architectural design with demo results" and "live integration with real data" is the entire gap between a vision and a product. Mira — a much less ambitious demo — explicitly states it uses real city data. RVA Contract Lens — the most ambitious demo — does not make the same explicit claim about its external API integrations.

**Second miss: scoring model bias risk.** The transparent scoring logic (+/- points) is the right approach for advisory AI. But the scoring model penalizes vendor concentration and rewards compliance documentation. Both of these characteristics correlate with vendor size. If the model systematically disadvantages small and minority-owned businesses — the opposite of Richmond's equity goals — the transparency of the scoring makes the bias visible but does not prevent it. The model needs calibration specifically for equity impact.

**Third miss: the advisory-only constraint is mostly respected but not fully.** The demo says "the human procurement officer always makes the final decision," which is correct. But the "definitive verdict: Renew / Rebid / Escalate" framing feels more prescriptive than advisory. The Doug Gernat constraint is that the tool must be "advisory only — cannot approve, determine, or award." A "definitive verdict" walks close to the line. The distinction matters legally: under VPPA, a tool that "determines" a contract decision creates liability. The framing should be "recommendation" or "advisory" rather than "verdict" to stay clearly within the constraint.

---

## Blockers

1. **Data integration verification.** This is the single most important open question. Are the 8 data sources queried in real time, or are results pre-staged for the demo?
   - **Ask:** Can the team demonstrate a live SAM.gov API call from the application? Run a query against a known-excluded entity (e.g., search the SAM.gov exclusion list for a name that returns a hit) and show the response flowing through the UI. This single test would confirm the most critical integration.

2. **Scoring model documentation and calibration.** The point values (+20 for compliance, -5 for concentration) are visible but their derivation is not documented.
   - **Ask:** How were the scoring weights chosen? Were they calibrated against actual procurement decisions? Has the model been tested for equity impact — does it systematically score MBE/SWaM vendors lower than non-certified vendors of the same quality?

3. **$28M savings projection methodology.** This is a specific, striking claim used in the demo. Without documented methodology, it is an assertion, not an analysis.
   - **Ask:** What data and methodology produced the $28M figure? Is it based on analysis of actual Richmond contracts, or is it a projection from a general model?

4. **"Verdict" vs. "advisory" framing.** The pillar champion's constraint is explicit: advisory only, cannot determine. The "definitive verdict" language should be softened.
   - **Ask:** Would the team be willing to change "verdict" to "recommendation" or "advisory assessment" throughout the UI and demo language? This is a framing change, not a functional one, but it matters for VPPA compliance.

5. **SME outreach not drafted.** No outreach to procurement staff to validate: (a) would the urgency triage view change their workflow? (b) would they trust an AI-assisted recommendation? (c) what is their current relationship with SAM.gov, FCC, OFAC checking — how do they do it today?
   - **Ask:** Draft outreach to Doug Gernat and procurement operations to validate the workflow assumptions.

---

## Recommended Next Steps

**Priority 1:** Verify data integrations. Demonstrate a live SAM.gov API call returning real-time results. This is the difference between a working prototype and a vision document. Everything else builds on whether the federated search actually works.

**Priority 2:** Document and calibrate the scoring model. Publish the scoring methodology: inputs, weights, and calibration data. Run the model against 20 historical procurement decisions to measure agreement rate. Specifically test for equity impact — run the model on MBE/SWaM-certified vendors vs. non-certified vendors and check for systematic scoring differences.

**Priority 3:** Change "verdict" to "recommendation" throughout the UI and documentation. The pillar champion's advisory-only constraint is non-negotiable. "Definitive verdict" risks being interpreted as a determination, which could create legal exposure under VPPA.

**Priority 4:** Add staff-authored decision rationale to the Decision Timeline. The AI logs what it recommended and why. The officer should log what they decided and why. This closes the loop: when a new staff member reads the timeline, they see both the data-driven recommendation and the human judgment.

**Priority 5:** Add MBE/SWaM equity data to the public portal. The public portal shows spending by department and vendor. Adding SWaM certification data answers the equity question. No Virginia municipality publishes this view — Richmond would be first.

**Priority 6:** Evaluate combining Mira's extraction engine with RVA Contract Lens's federated architecture. Mira has the proven PDF extraction. RVA Contract Lens has the compliance architecture. Together they solve the full problem statement more completely than either alone. Explore whether the teams would collaborate or share code.

---

## Notable Strengths (for judge briefing)

RVA Contract Lens is the most architecturally complete procurement demo. It is the only one that addresses all three JTBDs: staff compliance checking (federated search across 8 sources, 8-second advisory recommendation), institutional memory (auto-logged decision timeline), and public transparency (plain-language portal with Spanish translation, high contrast, and Atkinson Hyperlegible font). The transparent scoring logic (+/- points visible to the officer) is the correct approach for advisory AI in a procurement context. The urgency triage (today/week/month lanes) is the right dashboard pattern for a 1,400-contract portfolio. The public portal with accessibility features demonstrates a commitment to equity and inclusion that goes beyond the minimum. The "3 days to 8 seconds" value proposition, if backed by live data integrations, represents a transformation in how municipal procurement operates.

The critical caveat: the federated search claim needs verification. If the 8 data sources are queried live, this is the strongest prototype. If results are pre-staged, this is the strongest design — and still the right architecture to build toward.

---

## Cross-Demo Comparison Note

Among the four procurement demos:
- **CivicPulse AI** built the right extraction concept but connected to no data
- **Mira** has the most production-ready extraction engine with real data at the lowest cost
- **Vendor Contract Mgmt** has the unique two-sided architecture (government + vendor) and uses verified Socrata data
- **RVA Contract Lens** has the most complete architecture addressing all 3 JTBDs but needs data verification

The strongest possible outcome would combine Mira's proven extraction ($200/month, real data) with RVA Contract Lens's federated compliance checking and public portal, plus Vendor Contract Mgmt's vendor-facing equity portal. No single demo solves the full problem alone. The four teams collectively demonstrate every capability the problem statement requires — the gap is integration, not invention.
