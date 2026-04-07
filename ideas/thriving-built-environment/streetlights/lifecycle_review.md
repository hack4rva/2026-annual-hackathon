# Lifecycle Review — StreetLights

**Pillar:** Thriving & Sustainable Built Environment
**Problem Statement (verbatim):** Infrastructure Project Visibility — Help residents find and understand transportation and infrastructure projects happening in their neighborhoods.
**Demo:** StreetLights — https://ang-aq.github.io/Streetlights/
**Team:** Team Aurea (J.R. Tuggle High School — Angelica, Trabia, Alekia)
**Review Date:** March 31, 2026
**Status:** Substantially Complete — closest to a deployable solution in this pillar

---

## Rubric Checklist

| Step | Item | Status | Notes |
|------|------|--------|-------|
| 1 | Problem Grounding | ✅ Complete | gap_analysis.md header section |
| 2 | JTBD Analysis (3 jobs) | ✅ Complete | jtbd_analysis.md |
| 3 | Question Generation (10+ questions) | ✅ Complete | jtbd_analysis.md — 16 questions across 5 categories |
| 4 | Prior Art Research | ✅ Complete | prior_art_research.md — CivicReady, GeoHub, SeeClickFix, Richmond Connects documented |
| 5 | Pain Point Research | ✅ Complete | pain_points.md — evidence-grounded for all 3 JTBDs |
| 6 | Data Source Mapping | ✅ Complete | gap_analysis.md — GeoHub confirmed real; SMS and issue backend flagged as incomplete |
| 7 | SME Outreach | ✅ Complete | outreach/thriving-built-environment/gis-geohub-data.md — GeoHub data quality draft written |
| 8 | Gap Analysis | ✅ Complete | gap_analysis.md — Jobs 1 & 2 substantially addressed; Job 3 incomplete |
| 9 | Opportunity Mapping | ✅ Complete | gap_analysis.md — 3 opportunities including GeoHub governance |
| 10 | Solution Ideation | ✅ Complete | solution_ideas.md — 10 ideas grounded in prior art |

---

## What Was Fundamentally Missed

StreetLights is the strongest demo in this pillar because it uses real data. The most important miss is the feedback loop: residents can report issues, but those reports go nowhere. The issue reporting feature is a UI without a backend, meaning it functions like a void — possibly worse than not having it, since residents may believe their report was received when it wasn't.

Secondary miss: GeoHub data quality governance. StreetLights is only as reliable as GeoHub. If project managers don't keep records current, StreetLights shows wrong information. The team built a dependence on a data source whose maintenance they don't control. This is not their fault — it's the right architectural decision — but it means StreetLights' usefulness as a long-term product requires a City commitment to GeoHub maintenance standards.

Third miss: VDOT project data. State-managed roads (I-95, I-64, Route 1, Midlothian Turnpike) are not in GeoHub. Residents near those roads have no equivalent tool.

---

## Blockers

1. **Issue reporting backend** — The community issue reporting feature needs a real backend to route reports to the City. The right path is 311 API integration (requires City partnership) or SeeClickFix integration. Until this is wired up, the feature should be visually disabled or clearly labeled "reports are being collected — not yet routed to DPW."

2. **GeoHub data freshness verification** — Before recommending StreetLights for wide deployment, someone needs to audit a sample of GeoHub project records for accuracy and currency. If records are systematically stale, StreetLights' residents are being misled.

3. **SMS notification status** — The demo announces SMS notifications but the demo video doesn't confirm they're fully functional. This needs to be verified before promoting the feature.

---

## Recommended Next Steps

**Priority 1:** Send the GeoHub data quality outreach email (`outreach/thriving-built-environment/gis-geohub-data.md`). Understanding GeoHub maintenance standards is the single most important question for StreetLights' viability.

**Priority 2:** Wire the issue reporting feature to a real backend. Start with an email-to-DPW simple backend (faster than 311 integration) with a text confirmation to the resident. This gives the feedback loop without requiring a full 311 API partnership.

**Priority 3:** Add Spanish language support. This is a values question as much as a technical one — Richmond has a significant Spanish-speaking population and the City already supports multilingual notifications via CivicReady.

**Priority 4:** Add a VDOT project data layer for state-managed roads in the Richmond region.

**Priority 5:** Present StreetLights to the City's GIS/Planning team as a candidate for official adoption or endorsement. The City could either improve Richmond Connects to match StreetLights' UX quality, or officially support StreetLights as the public-facing layer. This conversation needs to happen before the team invests more in the product independently.

---

## Notable Strengths (for judge briefing)

StreetLights is built by high school juniors using real city data with no prior hackathon experience. The core architecture is correct (GeoHub as data source, plain-English presentation, address-based search). This is closer to a deployable product than most adult-built demos in this pillar. With 311 backend integration and Spanish support, this could realistically be piloted by the City within 3-6 months.
