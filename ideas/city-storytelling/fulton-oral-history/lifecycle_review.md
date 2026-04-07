# Lifecycle Review — Fulton Oral History Interactive Map

**Pillar:** A City That Tells Its Stories
**Problem Statement:** Resident Stories as Civic Insight — Give residents a trusted, accessible way to share their lived experiences so community narratives can inform City decisions.
**Team:** Team Temporary — Caitlin, Will, Daniel, Pascal, Monty
**Review Date:** April 1, 2026

---

## Rubric Checklist

| Step | Name | Output File | Status | Notes |
|------|------|-------------|--------|-------|
| 1 | Problem Grounding | `gap_analysis.md` (header) | ✅ Complete | Problem statement verbatim, primary user (newcomers), secondary user (aging residents), pain, desired outcome all documented. |
| 2 | JTBD Analysis | `_shared-resident-stories/jtbd_analysis.md` | ✅ Complete | Shared file — 3 jobs covering elder storyteller, newcomer, and city decision-maker. |
| 3 | Question Generation | `_shared-resident-stories/jtbd_analysis.md` (Open Questions) | ✅ Complete | Shared file — 20 open questions across data, user, integration, equity, prior art. |
| 4 | Prior Art Research | `_shared-resident-stories/prior_art_research.md` | ✅ Complete | Shared file — Richmond oral history ecosystem, tool inventory, consent frameworks, failure patterns, GIS data. |
| 5 | Pain Point Research | `_shared-resident-stories/pain_points.md` | ✅ Complete | Shared file — 7 pain points with cross-cutting feedback loop gap. |
| 6 | Data Source Mapping | `gap_analysis.md` (Data Source Map) | ✅ Complete | 6 data claims mapped; 2 confirmed, 2 partially verified, 2 self-reported. |
| 7 | SME Outreach | — | ⚠️ Blocked | Two critical questions require outreach: (1) The Valentine — copyright terms for embedding Fulton OH content in third-party tools; (2) VCU Libraries — API access to Scholars Compass for programmatic transcript ingestion. |
| 8 | Gap Analysis | `gap_analysis.md` (Gap Analysis) | ✅ Complete | 3 JTBDs assessed: Job 1 Partial, Job 2 Strong (Fulton only), Job 3 Not addressed. |
| 9 | Opportunity Mapping | `gap_analysis.md` (Opportunities) | ✅ Complete | 4 opportunities: story-to-decision layer, second neighborhood, guided tour MVP, validation documentation. |
| 10 | Solution Ideation | — | ⏳ Pending | Not yet generated. |
| 11 | Lifecycle Review | `lifecycle_review.md` | ✅ Complete | This file. |

---

## What the Demo Does Well

**Strongest community validation of any demo in the hackathon.** The team ran social media polls (73% interest rate), then conducted follow-up user interviews that produced a specific, actionable feature request (guided tour format). This two-stage validation — quantitative signal followed by qualitative depth — is rare at hackathons and demonstrates genuine product thinking. The interest rate has sampling bias (team's own social network), but the user interviews compensate by surfacing real behavioral preferences.

**Real data, not synthetic.** The Fulton Oral History Project transcripts are publicly accessible, have confirmed institutional backing (VCU Libraries, The Valentine), and contain specific, verifiable content — named individuals, real locations, direct quotes. The demo shows actual extracted data, not placeholder cards.

**Clear, emotionally grounded problem framing.** The team anchored the pitch in a specific historical injustice (Fulton urban renewal, 1970s) with living consequences. This is not abstract civic tech — it's a story about real people who were displaced and whose memories are at risk. The framing makes the problem tangible and urgent.

**Pragmatic go-to-market.** QR code signage in neighborhoods + university partnership outreach at VCU and University of Richmond orientation is concrete, low-cost, and directly targets the primary user (newcomers). Most hackathon teams skip distribution entirely.

**Working prototype with actual interaction.** The map, sidebar filters, geotag click-to-reveal pattern, and quote display were demonstrated. This is a functional tool, not slides.

---

## What Was Fundamentally Missed

**The problem statement says "inform City decisions." The demo does not address this.** The PS has two halves: (1) give residents a way to share experiences, and (2) ensure those narratives inform City decisions. The demo addresses half (1) for existing stories only and does not touch half (2) at all. There is no mechanism — not even a mock-up — showing how a city planner or council member would encounter these stories in the course of making a decision. Job 3 (decision-maker) is entirely unserved.

**Single-neighborhood scope limits the impact claim.** Fulton is one of 148 neighborhoods in Richmond's GeoHub boundary layer. The demo's value proposition — "make Richmond's deep history accessible" — is undermined by covering only one neighborhood. The team acknowledged this and described expansion plans, but the demo as shown serves a narrow geographic slice. Most VCU students don't live in or near Fulton.

**No story contribution mechanism.** The demo surfaces existing Fulton OH content but provides no way for new stories to enter the system. The expansion plan mentions "a platform where aging residents across the entire city can contribute their own stories," but nothing was built toward this. Without a contribution pathway, the tool is a static archive of 17 interviews — not a living collection.

**No consent or rights framework discussed.** The team did not address how they obtained permission to extract, transform, and display Fulton OH content. Copyright is held by The Valentine with non-commercial use permitted, but embedding content in a third-party app may require explicit permission. For any future contribution feature, the consent architecture (tiered permissions, withdrawal rights, trauma-informed protocols) is a prerequisite — not an afterthought.

**Digital-only delivery excludes the secondary user.** The demo's secondary user — aging Black residents in Fulton — faces a 66.2% broadband gap and 47.7% smartphone gap in key East End census tracts. A web-based map cannot reach this population. The team did not discuss offline channels (printed materials, community center kiosks, phone hotlines) that would make the tool accessible to the people whose stories it preserves.

---

## Blockers

| Blocker | Severity | Specific Ask |
|---------|----------|--------------|
| Copyright terms for Fulton OH embedding | **High** | Contact The Valentine to confirm: can Fulton OH audio clips and transcript excerpts be embedded in a third-party web application under the existing non-commercial use permission, or does each interview require individual clearance? |
| VCU Scholars Compass API access | **Medium** | Contact VCU Libraries to determine: does Scholars Compass expose IIIF Presentation or OAI-PMH endpoints for programmatic transcript access? If not, is HTML harvesting permitted under terms of use? |
| Single-neighborhood data | **Medium** | Identify the next-best oral history dataset for a second Richmond neighborhood. Candidates: BHMVA physical holdings (Jackson Ward), Library of Virginia WPA-era interviews, StoryCorps after filtering Richmond/CA contamination. |
| No story-to-decision pathway | **Medium** | Define a minimal integration point: tag each story location against Richmond 300 Priority Neighborhoods, or link to active planning cases in the same area. Even a static overlay demonstrates intent. |

---

## Recommended Next Steps (Priority Order)

1. **Resolve Valentine copyright question.** This is binary: either the team can legally embed Fulton OH content, or they need to renegotiate terms. Everything else is engineering. Draft a clear email to The Valentine's archivist specifying the exact use case (web-based map, non-commercial, educational, with attribution and link-back to VCU Scholars Compass).

2. **Build the guided tour MVP.** The user interviews surfaced this as the top feature request. A curated walk of 5–7 Fulton locations with narrative transitions is buildable in a weekend and converts the map from browse-and-click into a structured, repeatable experience. This is the feature most likely to generate word-of-mouth at VCU orientation.

3. **Add a "What Planners Should Know" layer.** For each Fulton location, add one sentence connecting the story to a current policy context (Richmond 300 priority area, active development proposal, capital improvement project). This directly addresses the missing half of the problem statement — stories informing decisions — without requiring new data collection.

4. **Document the community validation methodology.** Publish the poll sample size, demographics, exact question wording, interview protocol, and specific quotes. This turns an anecdote into a research asset that strengthens grant applications and institutional partnership pitches.

5. **Identify and secure data for a second neighborhood.** The expansion from one neighborhood to two is the credibility threshold. Start with Jackson Ward or Church Hill — both are undergoing acute gentrification, have high urgency, and may have near-ready assets at BHMVA or Library of Virginia.

---
