# Lifecycle Review — City Budget Dashboard

**Pillar:** A Thriving City Hall
**Problem Statement (assigned):** Resident Service Navigation — Help residents find the right City service or department quickly, so requests get routed correctly the first time.
**Problem Statement (alternate):** Procurement Risk & Opportunity Review — Help City staff identify valid, compliant contracts across City, state, and federal sources without manual PDF hunting.
**Demo:** Richmond City Budget Dashboard (Tableau)
**Presenter:** Andre Toleris
**Review Date:** March 31, 2026
**Status:** Misaligned — strong product, addresses neither targeted problem statement

---

## Rubric Checklist

| Step | Item | Status | Notes |
|------|------|--------|-------|
| 1 | Problem Grounding | ✅ Complete | gap_analysis.md — misalignment documented; Blue Sky statement identified |
| 2 | JTBD Analysis (3 jobs) | ⚠️ N/A — misaligned | Does not serve the JTBDs of either problem statement; addresses a different civic need |
| 3 | Question Generation | ⚠️ N/A — misaligned | Questions about budget transparency are outside both problem statement scopes |
| 4 | Prior Art Research | ✅ Partially applicable | NYC Checkbook, Tempe Procurement Contracts, USAspending — all validated transparency dashboards exist nationally |
| 5 | Pain Point Research | ⚠️ Tangential | Budget opacity is real but is not the pain point either problem statement targets |
| 6 | Data Source Mapping | ✅ Complete | Uses real Richmond Open Data Portal budget data (FY14–FY22); data is confirmed real |
| 7 | SME Outreach | ⚠️ Blocked | The right SME for budget transparency is Finance or Budget & Strategic Planning — not CSR (311) or Procurement |
| 8 | Gap Analysis | ✅ Complete | gap_analysis.md — full misalignment documented |
| 9 | Opportunity Mapping | ✅ Complete | Two paths to partial alignment identified |
| 10 | Solution Ideation | ⚠️ N/A — misaligned | Solution ideas for the assigned problem statements are covered in shared research files |

---

## What This Demo Was SUPPOSED to Address

Both Thriving City Hall problem statements focus on operational pain:
1. **Service Navigation:** Helping residents find the right department/service for their request — routing accuracy.
2. **Procurement Review:** Helping staff verify contract validity across fragmented databases — compliance efficiency.

Neither asks for a budget visualization. The demo addresses the Blue Sky statement "Making City Services Easier to Find and Use" through the lens of "Making Fiscal Responsibility More Visible" — a related but distinct civic goal.

---

## What This Demo ACTUALLY Addresses

The City Budget Dashboard addresses **fiscal transparency** — giving residents and elected officials a navigable, visual understanding of where Richmond's money goes at the agency, cost center, and line-item level. This maps to the Blue Sky framing of the Thriving City Hall pillar ("Making City Hall services easier to find and use for residents and staff") but not to either targeted problem statement.

The specific civic need it serves: "Richmond's city budget data exists, but it has never been made easily visible or navigable to the general public or to local elected officials."

---

## Quality Assessment — Honest Evaluation

### What This Demo DOES Do Well

**1. Real data, real product.** This is not a mockup. It uses actual Richmond budget data from the Open Data Portal spanning FY14–FY22. Every data point is navigable by fiscal year, agency, cost center, and account description. This is more real data than most demos touch.

**2. Genuine civic contribution.** The presenter claims this is Richmond's "first-ever publicly available budget dashboard." If true, this fills a real transparency gap. Budget data that exists but can't be understood by non-experts is functionally invisible.

**3. Scalable architecture.** The Tableau model is designed so new fiscal year data (FY23–FY25) can be plugged in without rebuilding visualizations. This is production-grade thinking for a hackathon.

**4. Two-click drill-down.** Going from high-level budget overview → agency-level → line-item cost center in two clicks is strong UX. The experience serves both casual exploration (residents) and targeted investigation (council members).

**5. LLM-powered pillar mapping.** Using an LLM to map every city agency to a MAP pillar is a creative addition. It enables budget analysis through the Mayor's Action Plan lens — which no prior Richmond tool offers.

**6. Definitions page.** Including a budget terminology explainer signals awareness that the audience is non-expert. This is a user-centered design decision.

---

## What Would Need to Change for Alignment

### Path to Service Navigation alignment:
The dashboard would need to answer: "Given a resident's problem, which department handles it?" Budget allocation data is tangentially useful (it shows what departments exist and what they spend on) but it does not route requests. To align, the team would need to:
- Replace the budget drill-down with a service taxonomy (problem → department → contact)
- Shift the user from "I want to understand spending" to "I have a problem and need help"
- Add a navigation/routing layer that connects to 311 or rva.gov service pages

This would require rebuilding the product from scratch. The Tableau architecture is not suited for interactive service routing.

### Path to Procurement alignment:
Budget data shows macro spending patterns but not individual contracts, vendors, or compliance status. To align, the team would need to:
- Switch from the General Fund budget dataset to the City Contracts dataset (xqn7-jvv2)
- Add expiration date tracking, vendor filtering, and compliance status fields
- Shift the audience from residents/elected officials to procurement staff

This is a closer alignment than Service Navigation — the analytical approach and data visualization skills transfer. But it would still require a different data source and different user flows.

---

## Verdict: Misaligned

**Classification:** Misaligned — same pattern as RideShift in Built Environment.

The City Budget Dashboard is a well-executed product that solves a legitimate civic problem (fiscal transparency). It uses real data, has a clear audience, and demonstrates scalable design. But it does not address either Thriving City Hall problem statement — not service navigation routing, not procurement compliance verification.

This is a structural misalignment, not a quality failure. The product belongs in the "Thriving City Hall — Blue Sky" category alongside MAP Tracker. A judge scoring this against the Thriving City Hall pillar rubric should weight Impact low for problem statement alignment, while scoring Execution, Innovation, and User Value on the product's own merits.

---

## Blockers

1. **Problem statement misalignment** — Structural. The dashboard addresses fiscal transparency, not service routing or contract compliance. No incremental fix resolves this.

2. **Data currency** — The dashboard covers FY14–FY22. The presenter notes FY23–FY25 data could be plugged in, but as demoed, the data is 4+ years stale. For a budget transparency tool, currency matters.

3. **No city stakeholder identified** — The demo does not name who at the City would own or maintain this. Budget & Strategic Planning or the Finance department are the likely homes, but neither was consulted during the hackathon.

---

## Recommended Next Steps

**Priority 1:** Evaluate for the Mayor's Choice Award under "government transparency" framing. The LLM-pillar-mapping feature is a novel contribution that directly serves the Mayor's Action Plan. If the scoring rubric can accommodate Blue Sky alignment, this has strong Execution and Innovation scores.

**Priority 2:** Connect with Budget & Strategic Planning to assess whether this fills an actual unmet need. If Richmond genuinely has no public budget visualization, this could be adopted independently of the hackathon scoring.

**Priority 3:** If the team wants to compete for the Thriving City Hall Pillar Award, pivot the underlying data from the General Fund budget to the City Contracts dataset (xqn7-jvv2) and add expiration tracking. The Tableau skills transfer directly.

---

## Scoring Guidance (for judges)

**For the Thriving City Hall Pillar Award:** Score Impact low — the product does not address either targeted problem statement. Score Execution high — real data, working product, scalable architecture. Score Innovation moderate — budget dashboards exist nationally (NYC Checkbook, Tempe), though Richmond may not have one. Score Feasibility high for its own problem space.

**For the Mayor's Choice Award:** Score Impact moderate — fiscal transparency supports informed governance but is not an immediately deployable City tool for service delivery. Score Feasibility high — the Tableau infrastructure could go live quickly.

**For the Moonshot Award:** Score Innovation moderate to high — the LLM pillar mapping is genuinely novel. Score Impact moderate — budget visibility over time could change how Richmond residents engage with fiscal policy.
