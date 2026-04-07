# Lifecycle Review — Road Maintenance Fleet Tracker

**Pillar:** Thriving & Sustainable Built Environment
**Problem Statement (verbatim):** Fleet Operations & Street Service Tracking — Improve how DPW supervisors and residents track the progress of services like snow removal and street cleaning in real time.
**Demo:** Road Maintenance Fleet Tracker — public + staff dual-portal (no live URL)
**Review Date:** March 31, 2026
**Status:** Partial — same core blockers as Stay Informed

---

## Rubric Checklist

| Step | Item | Status | Notes |
|------|------|--------|-------|
| 1 | Problem Grounding | ✅ Complete | gap_analysis.md header section |
| 2 | JTBD Analysis (3 jobs) | ✅ Complete | jtbd_analysis.md |
| 3 | Question Generation (10+ questions) | ✅ Complete | jtbd_analysis.md — 14 questions |
| 4 | Prior Art Research | ✅ Complete | prior_art_research.md — shared with Stay Informed |
| 5 | Pain Point Research | ✅ Complete | pain_points.md — shared with Stay Informed |
| 6 | Data Source Mapping | ✅ Complete | gap_analysis.md — all data claims mapped; synthetic data flagged |
| 7 | SME Outreach | ✅ Complete | outreach/thriving-built-environment/dpw-fleet-operations.md — shared draft |
| 8 | Gap Analysis | ✅ Complete | gap_analysis.md |
| 9 | Opportunity Mapping | ✅ Complete | gap_analysis.md — 4 opportunities including BMP analytics |
| 10 | Solution Ideation | ✅ Complete | solution_ideas.md — 10 ideas shared with Stay Informed |

---

## What Was Fundamentally Missed

Identical root cause to Stay Informed: the product is a well-conceived UI prototype running on synthetic data. The analytics section goes further than Stay Informed — it references "BMP data" for future planning — but BMP data has no defined real-world source even hypothetically. The product assumes data that does not currently exist (historical fleet route completion records in structured format).

Unique miss: This demo never asked the question "what system does DPW actually use for dispatch today?" Building a replacement or supplement without understanding the current system is a fundamental design gap that would surface the moment a DPW supervisor tried to use the staff portal.

---

## Blockers

1. **Same DPW GPS data question as Stay Informed** — see dpw-fleet-operations.md outreach draft
2. **No live deployment** — harder to demonstrate value to City stakeholders without a URL
3. **BMP analytics data source undefined** — the analytics feature is the most interesting differentiator from Stay Informed, but the data for it doesn't exist yet. This feature requires at least one full snow season of real GPS data before it's useful.

---

## Recommended Next Steps

**Priority 1:** Same as Stay Informed — send DPW outreach email.

**Priority 2:** Differentiate from Stay Informed by focusing on the staff-side analytics use case (Idea 10). This is the feature Stay Informed doesn't have, and it may be more valuable to the City long-term than the resident-facing tracker.

**Priority 3:** Build a live deployment at a public URL. City stakeholders can't evaluate a demo they can't click through.

**Priority 4:** Conduct a DPW supervisor workflow interview before investing further in the staff portal design. The current staff portal is designed from the outside in — it assumes what a supervisor needs. A 30-minute conversation with one DPW supervisor would transform it.
