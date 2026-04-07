# Lifecycle Review — SIMBY (Soon In My Backyard)

**Pillar:** Thriving Neighborhoods
**Problem Statement:** Make it easier for residents to find and understand development proposals near them so they can engage earlier in the planning process.
**Demo:** SIMBY — Soon In My Backyard (Row 41, Team Singlestone)
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
| 6 | Data Source Mapping | `gap_analysis.md` (Data Source Map) | ⚠️ Partially complete | 5 data claims mapped. Critical gap: the planning view's data source is unidentified. Richmond 300 confirmed as static PDFs. Multilingual and notification capabilities are real but delivery channels are unspecified. Legistar and GeoHub APIs — the primary structured data sources for Richmond development proposals — are not used. |
| 7 | SME Outreach | — | ⚠️ Blocked | Three SME contacts needed: (1) What is the data source for the planning view? Is it automated or manually curated? (2) What is the notification delivery channel — email, SMS, or in-app only? (3) Who validates the multilingual translations — machine-only or human-reviewed? No outreach drafts exist. |
| 8 | Gap Analysis | `gap_analysis.md` (Gap Analysis) | ✅ Complete | All 3 JTBDs assessed: Job 1 Partially, Job 2 Partially (strongest), Job 3 Partially (strongest). Missing items and fixability documented. |
| 9 | Opportunity Mapping | `gap_analysis.md` (Opportunities) | ✅ Complete | 3 opportunities: Legistar API connection, request-to-hearing pipeline, civic association partnership. Dependencies named. |
| 10 | Solution Ideation | — | ⏳ Not yet produced | No `solution_ideas.md` written for this demo. |
| 11 | Lifecycle Review | `lifecycle_review.md` | ✅ Complete | This file. |

---

## What Was Fundamentally Missed

**SIMBY has the strongest equity design and the most original feature (resident requests) — but the weakest data foundation.**

The demo's two-sided model is genuinely novel: a planning view showing what's coming, plus a request view where residents signal what they want. The request system — drop a pin, write in your language, upvote others — creates the "representative community signal" that planning staff lack. Seeding the map with Richmond 300 priorities is a smart design choice that avoids the empty-platform cold-start problem.

The multilingual support (English, Spanish, Arabic) directly addresses the most-cited equity gap across all the research. No other demo attempts this. The framing — "If you can't read it, you can't shape it" — demonstrates the team understands the problem at a structural level.

**But the planning view's data source is never identified.** The demo shows planned development projects with status, dates, photos, and summaries — but does not say where this data comes from. If it is manually curated or seeded from static PDFs, the tool has no automated pipeline. This is the documented #1 failure mode for civic tech tools: "lack of stable city-supported data feeds causing data drift" (`E4_prior_art_failures.md`). Councilmatic survived because it connects to Legistar's stable API. Citygram forks died because their data pipelines broke silently. SIMBY's planning view must connect to Legistar and/or GeoHub to be durable.

**The sign-up requirement works against the trust design.** The pain point research is explicit: "A development tracker that requires account creation, location data, or personal information will be avoided by the residents who face the highest displacement risk" (`G3_risks_inclusion.md`). SIMBY asks for sign-up before showing any planning information. The multilingual design earns trust; the sign-up requirement spends it. The planning view should be accessible without an account.

**Zip-code granularity is too coarse for neighborhood-level notifications.** Richmond zip codes cross neighborhood boundaries. The GeoHub Civic Associations boundary layer (confirmed machine-readable, `dd_q3_prior_art.md`) provides the neighborhood-level granularity that residents expect when they think "my neighborhood." Using zip codes risks sending notifications about developments in adjacent but irrelevant areas, which degrades trust in the notification system.

---

## Blockers

| Blocker | Severity | Specific Ask |
|---------|----------|--------------|
| Planning view data source unidentified | **Critical** | Answer: where does the planning view data come from? If manually curated, document the update process and who is responsible. If automated, identify the API. If the answer is "Richmond 300 PDFs," the planning view will go stale immediately. The single most important next step is connecting to the Legistar API for automated, current development proposal data. |
| No Legistar integration | **Critical** | The Legistar API (`richmondva` slug, confirmed open, no auth) contains the structured record of every zoning case, rezoning, SUP, and Planning Commission action. Without it, the planning view cannot show the proposals that constitute the bulk of "development proposals" in the problem statement. |
| Sign-up required before viewing planning information | **High** | Separate read access (browse planning view, no account) from write access (requests, notifications require sign-up). This preserves the low-barrier access that reduces trust barriers for immigrant communities. |
| Zip-code notification granularity too coarse | **High** | Switch from zip code to GeoHub Civic Associations boundaries for notification routing. This provides neighborhood-level precision and aligns with how residents think about "my neighborhood." |
| Translation quality unverified | **Medium** | Validate Spanish and Arabic translations with native speakers who are not planning professionals. Confirm that planning-specific terms are translated with procedural context ("this means a developer is asking the city to change what can be built on this lot") rather than jargon-for-jargon ("Permiso de Uso Especial"). |
| Notification delivery channel unspecified | **Medium** | Document whether notifications are email, SMS, push, or in-app. If email-only, this misses the population that texts but doesn't check email. If SMS is planned, document the infrastructure and cost model. |
| Request moderation not designed | **Medium** | At scale, drop-a-pin requests will include duplicates, spam, and out-of-scope items. Design a moderation approach: community flagging, automated deduplication, geographic validation, and/or civic association review. |

---

## Recommended Next Steps (Priority Order)

1. **Connect the planning view to the Legistar API.** This is the existential question. If the planning view cannot be populated automatically from Richmond's primary legislative data source, the tool will go stale and die. Use the Legistar Matters API to pull development-related items (filter by `MatterTypeName` for ordinances, BZA cases, SUPs). Cross-link with Events for hearing dates. This is the pattern Councilmatic uses and the reason it has survived since 2011 (`E2_prior_art_legistar_tools.md`).

2. **Remove sign-up requirement for the planning view.** Let anyone browse what's coming to their neighborhood without creating an account. Require sign-up only for requests, notifications, and comments. This aligns with the trust design that the multilingual support is trying to build.

3. **Replace zip-code notifications with civic association boundaries.** Use the GeoHub Civic Associations feature service (confirmed machine-readable). Let users select their civic association area or auto-detect from address. This provides the neighborhood-level precision that makes notifications relevant.

4. **Validate translations with community organizations.** Partner with Richmond's confirmed civic bridge organizations — Cedar Street Baptist, Latino Parade and Festival, Richmond Tenants Union (`dd_q2_usage_equity.md`) — to test the Spanish and Arabic content. Ask: "Does this make sense? Would you share this with your community?" Document feedback and corrections.

5. **Design the request-to-hearing connection.** When a Legistar item is filed that geographically overlaps with existing resident requests, surface the match. This is SIMBY's unique value proposition — connecting resident demand signals to official planning actions. No other tool in the prior art does this.

6. **Build an admin/staff view for request data.** Show planning staff aggregate request data by neighborhood: what residents want, where, and in which languages. If staff can see this data without additional work, SIMBY becomes a tool that serves both sides of Job 3 — residents get heard, staff get representative input.
