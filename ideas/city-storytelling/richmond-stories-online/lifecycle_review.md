# Lifecycle Review — Richmond Stories Online

**Pillar:** A City That Tells Its Stories
**Problem Statement:** Resident Stories as Civic Insight — Give residents a trusted, accessible way to share their lived experiences so community narratives can inform City decisions.
**Team:** Valentine Museum partnership + civic hackers + local storytellers
**Website:** RichmondStories.online
**Review Date:** April 1, 2026

---

## Rubric Checklist

| Step | Name | Output File | Status | Notes |
|------|------|-------------|--------|-------|
| 1 | Problem Grounding | `gap_analysis.md` (header) | ✅ Complete | Problem statement verbatim, users broadly identified, pain framed around fragmentation and inaccessibility. |
| 2 | JTBD Analysis | `_shared-resident-stories/jtbd_analysis.md` | ✅ Complete | Shared file — 3 jobs covering elder storyteller, newcomer, and city decision-maker. |
| 3 | Question Generation | `_shared-resident-stories/jtbd_analysis.md` (Open Questions) | ✅ Complete | Shared file — 20 open questions. |
| 4 | Prior Art Research | `_shared-resident-stories/prior_art_research.md` | ✅ Complete | Shared file — oral history ecosystem, tools, consent, failures, GIS. |
| 5 | Pain Point Research | `_shared-resident-stories/pain_points.md` | ✅ Complete | Shared file — 7 pain points plus cross-cutting feedback loop gap. |
| 6 | Data Source Mapping | `gap_analysis.md` (Data Source Map) | ✅ Complete | 6 data claims mapped; 0 confirmed, 2 claimed-but-not-demonstrated, 4 unverified. |
| 7 | SME Outreach | — | ⚠️ Blocked | Two critical questions: (1) What specific Valentine Museum content is committed to this project? (2) What is the actual technical state of RichmondStories.online? |
| 8 | Gap Analysis | `gap_analysis.md` (Gap Analysis) | ✅ Complete | 3 JTBDs assessed: Job 1 Conceptual, Job 2 Claimed but not demonstrated, Job 3 Not addressed. |
| 9 | Opportunity Mapping | `gap_analysis.md` (Opportunities) | ✅ Complete | 4 opportunities: working end-to-end flow, Valentine seed content, one story path, partnership charter. |
| 10 | Solution Ideation | — | ⏳ Pending | Not yet generated. |
| 11 | Lifecycle Review | `lifecycle_review.md` | ✅ Complete | This file. |

---

## What the Demo Does Well

**Institutional partnership is rare and valuable.** The Valentine Museum is Richmond's primary history institution. Having them as a named partner — not just a data source, but a co-creator — is an asset that most hackathon teams cannot access. If the partnership is real and durable, it provides rights management infrastructure (Deed of Gift model), curatorial expertise, community trust, and a physical anchor for the project. This is the demo's single strongest differentiator.

**The framing is honest about Richmond's history.** The demo explicitly confronts colonial history and socioeconomic legacies — displacement, urban renewal, structural inequity. It does not sanitize the city's past or treat storytelling as nostalgia tourism. The equity framing ("preserving these narratives is building a legacy of truth and social equity") is substantive, not performative.

**Diversity-as-economic-driver is a smart political frame.** Positioning authentic storytelling as a tourism and economic development asset gives the project a funding and political sustainability argument that pure preservation projects lack. This is the kind of framing that gets a line item in a city budget.

**The partnership model is structurally correct.** Museum + technologists + storytellers is exactly the three-legged stool that prior art research identifies as necessary: institutional credibility, technical capacity, and community voice. The model is right even if the execution is incomplete.

**Live domain exists.** RichmondStories.online is registered and live. This signals commitment beyond the hackathon weekend.

---

## What Was Fundamentally Missed

**The demo is a pitch deck, not a product demonstration.** This is the central issue. The transcript reads as a vision statement — eloquent, well-framed, morally grounded — but it does not demonstrate working software. Consider the specific claims:

- "Geospatial mapping anchoring stories to locations" — no map was shown with real data points.
- "Crowdsourced contributions — residents can upload photos + narratives today" — no upload flow was demonstrated.
- "Curated Story Paths for guided discovery" — no path was walked through.
- "APIs to sync local archives" — no API was shown; no archive sync was demonstrated.
- "Augmented reality to bring history to life" — exploratory language; not built.

The rubric category "Execution" asks: *How well was it built and demonstrated? Is there a working prototype, not just slides?* Based on the transcript, this demo is closer to "just slides" than to "working prototype." The language throughout is aspirational ("can become," "will preserve," "invites the world to discover") rather than demonstrative ("here is," "this shows," "click here and you see").

**No community validation evidence.** Compare with Team Temporary's 73% poll interest rate, follow-up user interviews, and specific feature requests. Richmond Stories Online provides no evidence that any resident, storyteller, or community member has tested, used, or provided feedback on the platform. The partnership with "local storytellers" is described but no storyteller voice appears in the transcript.

**No technical architecture described.** The demo does not mention a technology stack, database, hosting provider, content management system, or mapping framework. For a project that claims to sync archives via APIs, this omission is significant. Without technical specifics, it is impossible to assess feasibility, scalability, or maintenance burden.

**No consent framework.** The project explicitly handles sensitive content — stories about displacement, colonial harm, and socioeconomic inequity — from vulnerable populations. No consent model, content moderation process, contributor rights framework, or withdrawal mechanism was described. The Valentine's Deed of Gift model exists within the partnership but was not mentioned as the consent framework for the platform.

**No story-to-decision feedback loop.** Same gap as the Fulton demo. The "inform City decisions" half of the problem statement is absent. Neither demo in this PS addresses Job 3.

**Scope is citywide but evidence is neighborhood-zero.** The demo describes a citywide platform but does not show content from any specific neighborhood. The Fulton team demonstrated one neighborhood deeply; this demo describes all neighborhoods abstractly. Demonstrating one real thing beats describing twenty aspirational things.

---

## Blockers

| Blocker | Severity | Specific Ask |
|---------|----------|--------------|
| Unclear whether working software exists | **Critical** | Audit RichmondStories.online: what is the current state? Landing page? CMS with content? Full application with map and upload? Document exactly what has been built vs. described. |
| Valentine Museum partnership scope undefined | **Critical** | Clarify with The Valentine: what specific content assets are committed? Under what terms (display rights, modification rights, duration)? Is there an MOU or written agreement? |
| No demonstrated data | **High** | The platform needs real content. Identify 10–20 items (oral history excerpts, photos, historical records) that can be displayed with confirmed rights. Without content, the map is empty. |
| No technical architecture | **High** | Define the stack: what framework, what database, what mapping library, what hosting. Without this, no one can assess whether the platform is maintainable, extendable, or even real. |
| No consent framework for contributions | **High** | Before any resident uploads a personal story, the platform needs: contributor rights language, tiered consent (public/anonymous/restricted), content moderation process, and withdrawal mechanism. The Valentine's Deed of Gift model is a starting template. |
| No governance structure | **Medium** | Who maintains the site after the hackathon? Who moderates submissions? Who decides editorial standards? Platform death (Detour, Neighborland) is a documented failure pattern — governance is the mitigation. |

---

## Recommended Next Steps (Priority Order)

1. **Audit the current state of RichmondStories.online.** Before any other work, someone needs to document exactly what exists: is this a WordPress site, a custom build, a Squarespace landing page? What features are functional? What content is live? Every subsequent decision depends on this answer.

2. **Formalize the Valentine Museum partnership in writing.** A one-page MOU covering: content assets committed, display rights, data ownership, maintenance responsibilities, duration of commitment, and governance structure. This is the project's most valuable asset — protect it with a document, not a handshake.

3. **Build one working end-to-end flow.** Resident submits story with photo and location → story appears on map → another user discovers it by browsing. One real flow demonstrated is worth more than six features described. This is the minimum threshold to move from "vision" to "product."

4. **Seed the platform with 10–20 real content items.** Use Valentine Museum collections, publicly available Library of Virginia materials, or Virginia historical marker records. The map needs real pins with real content before anyone can evaluate the discovery experience.

5. **Design and implement a minimal consent framework.** At minimum: plain-language purpose/storage/rights statement, tiered consent (public named / public anonymous / restricted), visible withdrawal option, and age screen (COPPA). This is a prerequisite for any crowdsourced contribution feature.

---
