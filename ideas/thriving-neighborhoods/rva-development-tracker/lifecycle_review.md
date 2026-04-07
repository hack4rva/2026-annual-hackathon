# Lifecycle Review — RVA Development Tracker

**Pillar:** Thriving Neighborhoods
**Problem Statement:** Make it easier for residents to find and understand development proposals near them so they can engage earlier in the planning process.
**Demo:** RVA Development Tracker (Row 40, Edwin Huertas)
**Review Date:** April 1, 2026

---

## Rubric Checklist

| Step | Name | Output File | Status | Notes |
|------|------|-------------|--------|-------|
| 1 | Problem Grounding | `gap_analysis.md` (header) | ✅ Complete | Problem statement verbatim, primary user, pain, desired outcome all present. |
| 2 | JTBD Analysis | `_shared-dev-discovery/jtbd_analysis.md` | ✅ Complete | Shared file — 3 jobs with triggering situations, workarounds, pain, and desired outcomes. |
| 3 | Question Generation | `_shared-dev-discovery/jtbd_analysis.md` (Open Questions) | ✅ Complete | Shared file — 20 open questions; 7 confirmed, 9 partial, 4 still unknown. |
| 4 | Prior Art Research | `_shared-dev-discovery/prior_art_research.md` | ✅ Complete | Shared file — national comparables, Richmond data systems, success/failure patterns. |
| 5 | Pain Point Research | `_shared-dev-discovery/pain_points.md` | ✅ Complete | Shared file — 11 pain points across 3 JTBDs, cross-cutting equity dimension. |
| 6 | Data Source Mapping | `gap_analysis.md` (Data Source Map) | ✅ Complete | 6 data claims mapped. GeoHub + Legistar confirmed real. AI summary quality unverified. GeoHub staleness flagged (Plans of Development last updated June 2022). Missing sources documented (EnerGov, Civic Associations, Richmond 300). |
| 7 | SME Outreach | — | ⚠️ Blocked | Two SME contacts needed: (1) GeoHub update cadence — who triggers Development Tracker layer updates, and can a formal refresh schedule be established? (2) AI summaries — what model, what cost per summary at scale, what hallucination safeguards? No outreach drafts exist. |
| 8 | Gap Analysis | `gap_analysis.md` (Gap Analysis) | ✅ Complete | All 3 JTBDs assessed: Job 1 Partially (strong), Job 2 No, Job 3 Partially. Missing items and fixability documented. |
| 9 | Opportunity Mapping | `gap_analysis.md` (Opportunities) | ✅ Complete | 3 opportunities: address-based one-pager, GeoHub staleness dashboard, civic association digest. Dependencies named. |
| 10 | Solution Ideation | — | ⏳ Not yet produced | No `solution_ideas.md` written for this demo. |
| 11 | Lifecycle Review | `lifecycle_review.md` | ✅ Complete | This file. |

---

## What Was Fundamentally Missed

**This is the most technically complete demo of the three — and the most honest about its limitations.**

RVA Development Tracker does the hard thing right: it cross-links GeoHub spatial data with Legistar legislative records into a single address-based view, surfaces meeting dates and agendas, generates AI plain-language summaries, and requires no account. Built in an afternoon by a solo developer who was also serving as a mentor, it demonstrates the "weekend-viable" pattern that prior art research identifies as the strongest predictor of post-hackathon survival (`E5_prior_art_weekend_viable.md`).

**What was fundamentally missed is equity.** The tool is English-only, web-only, and pull-only. It will serve residents who already have broadband, speak English, and know to look for development information — the same population that already navigates Legistar and GeoHub. The pain point research documents that this is the "homeowner capture" failure mode: "A web-only, English-only development tracker will structurally replicate the existing inequity" (`G3_risks_inclusion.md`).

The presenter's design principles ("make it simple, make it inclusive") reflect the right intent. But "inclusive" in this context requires more than "no account required." It requires reaching residents who are structurally excluded from the current system: the 59% who rent, the 13.8% without broadband, the LEP population, and residents in historically impacted neighborhoods. The tool does not address any of these groups.

**GeoHub data staleness is an unacknowledged risk.** The Plans of Development dataset was last updated June 2022. Items sourced from GeoHub may show outdated statuses without the user knowing. The tool should surface the `Date_Updated` field so users can assess freshness.

---

## Blockers

| Blocker | Severity | Specific Ask |
|---------|----------|--------------|
| No multilingual support | **High** | Add Spanish at minimum (71.57% of Richmond's LEP population). The AI summary pipeline is the natural integration point — generate summaries in the user's preferred language. Validate with native speakers. |
| GeoHub Development Tracker layer staleness | **High** | Confirm the actual update cadence with City GIS staff. The Plans of Development layer is nearly 4 years stale. Either: (a) get a commitment for regular updates, or (b) display `Date_Updated` prominently so users know when data may be outdated. |
| Free server acknowledged as scaling limitation | **Medium** | Identify a hosting pathway that survives beyond the hackathon. Options: (a) City of Richmond IT hosting, (b) university partnership (VCU), (c) sponsored Vercel/cloud tier. Without this, the tool follows the Citygram pattern of volunteer hosting failure (`E4_prior_art_failures.md`). |
| AI summary cost and quality at scale | **Medium** | Document: (a) the LLM provider and model, (b) cost per summary, (c) projected cost at 1,000 daily users, (d) hallucination safeguards for hearing dates and zoning characterizations. Add a visible disclaimer that summaries are AI-generated. |
| No notification or push mechanism | **Medium** | The tool is pull-only. Residents must return to check for updates. A weekly email digest by civic association boundary is the lowest-risk notification approach (see Opportunities in gap analysis). |

---

## Recommended Next Steps (Priority Order)

1. **Add Spanish-language AI summaries.** The AI pipeline already generates summaries on demand — adding a language parameter is the lowest-effort, highest-impact equity improvement. Test with 5-10 native Spanish speakers. Validate planning terminology. Document which terms required human correction.

2. **Surface GeoHub staleness to users.** Display the `Date_Updated` field from the Development Tracker layer next to GeoHub-sourced items. Draft and send an outreach email to City GIS staff asking: (a) what triggers updates to the Development Tracker layer? (b) can a quarterly refresh be committed? (c) is there a contact for data quality issues?

3. **Generate printable per-address summaries.** Create a "What's happening near [address]" one-pager (PDF) that includes active Legistar items, upcoming hearings, and how to participate. Distribute through civic associations and apartment building lobbies. This bridges the digital divide without requiring the resident to use the web tool.

4. **Add per-project approval timeline.** Use the Legistar `MatterHistory` endpoint to show where each item sits in the approval process (filed → staff review → Planning Commission → City Council → decided). Boston Article 80's timeline design is the model (`E1_prior_art_dev_trackers.md`).

5. **Identify an institutional steward.** The presenter built this alone in an afternoon — impressive, but a bus-factor of 1. Connect with Code for RVA or VCU's civic technology program to establish ongoing maintenance. Document the data pipeline and deployment process so another developer can take over.
