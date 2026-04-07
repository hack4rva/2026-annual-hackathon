# Lifecycle Review — RVA Plotlines

**Pillar:** Thriving Neighborhoods
**Problem Statement:** Make it easier for residents to find and understand development proposals near them so they can engage earlier in the planning process.
**Demo:** RVA Plotlines (Row 39, Morgan Stewart)
**Review Date:** April 1, 2026

---

## Rubric Checklist

| Step | Name | Output File | Status | Notes |
|------|------|-------------|--------|-------|
| 1 | Problem Grounding | `gap_analysis.md` (header) | ✅ Complete | Problem statement verbatim, primary user, pain, desired outcome all present. |
| 2 | JTBD Analysis | `_shared-dev-discovery/jtbd_analysis.md` | ✅ Complete | Shared file — 3 jobs with triggering situations, workarounds, pain, and desired outcomes. |
| 3 | Question Generation | `_shared-dev-discovery/jtbd_analysis.md` (Open Questions) | ✅ Complete | Shared file — 20 open questions across data, user, integration, equity, and prior art. 7 confirmed, 9 partial, 4 still unknown. |
| 4 | Prior Art Research | `_shared-dev-discovery/prior_art_research.md` | ✅ Complete | Shared file — national comparables (ZoLa, Councilmatic, 2nd City Zoning, Citygram), Richmond data systems, success/failure patterns. |
| 5 | Pain Point Research | `_shared-dev-discovery/pain_points.md` | ✅ Complete | Shared file — 11 pain points across 3 JTBDs plus cross-cutting equity dimension. Evidence-grounded with source citations. |
| 6 | Data Source Mapping | `gap_analysis.md` (Data Source Map) | ✅ Complete | 5 data claims mapped. Legistar confirmed real. Geocoding accuracy flagged as unverified. AI chatbot quality unverified. Missing sources documented (EnerGov, GeoHub Dev Tracker, meeting dates). |
| 7 | SME Outreach | — | ⚠️ Blocked | Two SME contacts needed: (1) Geocoding accuracy validation — what is the hit rate for `MatterTitle` address parsing? Requires sampling the Legistar API. (2) AI chatbot — what model is used, what are the hallucination safeguards for hearing dates and zoning characterizations? No outreach drafts exist. |
| 8 | Gap Analysis | `gap_analysis.md` (Gap Analysis) | ✅ Complete | All 3 JTBDs assessed: Job 1 Partially, Job 2 No, Job 3 Partially. Missing items and fixability documented per job. |
| 9 | Opportunity Mapping | `gap_analysis.md` (Opportunities) | ✅ Complete | 3 opportunities: Legistar Events integration, geocoding accuracy audit, civic association boundary notifications. Dependencies named. |
| 10 | Solution Ideation | — | ⏳ Not yet produced | No `solution_ideas.md` written for this demo. Dependent on gap analysis and SME responses. |
| 11 | Lifecycle Review | `lifecycle_review.md` | ✅ Complete | This file. |

---

## What Was Fundamentally Missed

**The demo shows *what happened* but not *when to act*.**

RVA Plotlines ingests 23k+ legislative records and geocodes them onto a map — a legitimate technical achievement for a hackathon weekend. The AI chatbot adds a conversational layer that could make this data accessible to non-expert users. But the tool is a historical archive, not an actionable discovery system.

The problem statement asks residents to "engage earlier in the planning process." Engagement requires knowing *when* — when is the hearing, when is the comment deadline, when does the decision happen. The Legistar Events API provides exactly this data and is confirmed open. The demo does not use it. Without hearing dates and meeting agendas, a resident who discovers a zoning change on the map has no path to participation.

The click-through detail — the feature that would have shown per-item information — was broken at demo time. This is the feature that connects map dots to actionable understanding. A map with 23k dots and no working detail view is a density visualization, not a civic tool.

**Equity was not addressed.** The demo is English-only, web-only, and pull-only. It does not acknowledge or attempt to reach the 59% of Richmond households who rent and receive no mailed notice, the 13.8% without broadband, or the LEP population that cannot read English planning jargon. The prior art research documents that a web-only English-only tracker will structurally replicate existing inequity (`G3_risks_inclusion.md`). The demo does not discuss this risk.

---

## Blockers

| Blocker | Severity | Specific Ask |
|---------|----------|--------------|
| Click-through detail broken at demo time | **High** | Fix the per-item detail view. Without it, there is no way to evaluate whether individual records are useful, accurate, or actionable. This is the difference between a proof of concept and a usable tool. |
| Geocoding accuracy unknown | **High** | Sample 200 `MatterTitle` strings from the Legistar API. Measure: (a) what percentage contain parseable addresses, (b) what percentage geocode to the correct parcel, (c) what types of matters fail to geocode. Publish the methodology and results. |
| No meeting dates or hearing schedules | **High** | Integrate the Legistar Events API (`/Events`, `/EventItems`) to show upcoming hearing dates for each legislative matter. This is the single feature that transforms the tool from archive to action. |
| AI chatbot hallucination risk undocumented | **Medium** | Document the LLM provider, the prompt architecture, and the safeguards against hallucinated hearing dates, incorrect zoning characterizations, or fabricated case details. Publish a disclaimer visible to users. |
| No multilingual support | **Medium** | Add Spanish as a minimum. The AI chatbot could generate responses in Spanish, but this needs testing with native speakers and validation against planning-specific terminology. |
| No sustainability plan | **Medium** | Identify an institutional steward (civic organization, university, city department) willing to host and maintain the tool. The prior art research shows that tools without a named maintainer die within months (`E5_prior_art_weekend_viable.md`). Fly.dev hosting is functional but requires ongoing payment. |

---

## Recommended Next Steps (Priority Order)

1. **Fix click-through detail and ship a working demo.** The broken feature is the single biggest gap between what was promised and what was shown. Until a user can click a dot and see case details, the tool cannot be evaluated as a civic transparency product.

2. **Integrate Legistar Events for hearing dates.** This is the highest-value feature addition. Connect each legislative matter to its upcoming hearing via the Events API. Display: date, body (Planning Commission vs. City Council), location, and a link to the agenda. This converts the tool from "what happened" to "what's coming and when to act."

3. **Audit geocoding accuracy on a 200-record sample.** Document the `MatterTitle` parsing methodology. Report the hit rate, the failure modes (descriptions vs. addresses), and the spatial accuracy. This becomes a reusable asset for any Richmond civic tool that needs to geocode Legistar data.

4. **Add Spanish language support to the AI chatbot.** Test with 5-10 native Spanish speakers. Validate that planning terminology is translated with procedural context, not just word-for-word. Document which terms required human correction.

5. **Identify an institutional steward.** Contact Code for RVA, VCU, or the City's Office of Community Wealth Building about long-term hosting and maintenance. The prior art pattern is clear: tools with an organizational owner survive; tools run by individual volunteers do not.
