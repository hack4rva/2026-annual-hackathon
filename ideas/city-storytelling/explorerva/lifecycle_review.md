# Lifecycle Review — ExploreRVA

**Pillar:** A City That Tells Its Stories
**Problem Statement:** Straddles PS1 (Arts & Cultural Event Discovery) and PS2 (Resident Stories as Civic Insight)
**Demo:** ExploreRVA (spoken-word poem — no screen recording, no working prototype)
**Project Site:** explorerva.org
**Review Date:** April 1, 2026

---

## Rubric Checklist

| Step | Name | Output File | Status | Notes |
|------|------|-------------|--------|-------|
| 1 | Problem Grounding | `gap_analysis.md` (header) | ✅ Complete | Problem framing covers both PS1 and PS2 with emotional specificity. |
| 2 | JTBD Analysis | `_shared-arts-discovery/jtbd_analysis.md` | ✅ Complete | Shared file covers PS1 jobs. PS2 jobs not separately documented for this demo. |
| 3 | Question Generation | `_shared-arts-discovery/jtbd_analysis.md` (Open Questions) | ✅ Complete | Shared file — applies to PS1 dimension. |
| 4 | Prior Art Research | `_shared-arts-discovery/prior_art_research.md` | ✅ Complete | Shared file — covers PS1 prior art. PS2 prior art (oral history platforms, civic story collection) not researched. |
| 5 | Pain Point Research | `_shared-arts-discovery/pain_points.md` | ✅ Complete | Shared file — covers PS1 pain points. PS2 pain points partially covered in equity section (P4.3 — elderly exclusion). |
| 6 | Data Source Mapping | `gap_analysis.md` (Data Source Map) | ❌ N/A | No data sources to map. The demo is a spoken-word poem with no technical implementation. |
| 7 | SME Outreach | — | ❌ N/A | No technical implementation to ground outreach around. |
| 8 | Gap Analysis | `gap_analysis.md` (Gap Analysis) | ✅ Complete | PS1 Jobs 1-3 and PS2 assessed. All rated "Problem Framing Only." |
| 9 | Opportunity Mapping | `gap_analysis.md` (Opportunities) | ✅ Complete | 3 opportunities named — design brief, collaboration, format innovation. |
| 10 | Solution Ideation | — | ❌ N/A | No technical solution to ideate around. |
| 11 | Lifecycle Review | `lifecycle_review.md` | ✅ Complete | This file. |

**Summary:** 5 of 11 lifecycle steps are marked N/A because they require a technical artifact that does not exist. This is not a failure of the review process — it's an accurate reflection of the demo's scope.

---

## What the Demo Does Well

**1. Most effective problem articulation in the pillar.** ExploreRVA's spoken-word poem communicates the frustration of stale event discovery and the stakes of lost community memory with more precision and emotional weight than either What's On RVA's feature walkthrough or Vecina's filter demonstration. "Every link I click is some ghost from last May" is a better problem statement than any bullet list. For judges evaluating Impact and User Value, this demo makes the case for why the problem matters — which is the foundation that technical solutions build on.

**2. Only demo that frames both PS1 and PS2 in a single pitch.** What's On RVA and Vecina address PS1 exclusively. ExploreRVA is the only submission that bridges event discovery (PS1) and story preservation (PS2), arguing that these are two symptoms of the same underlying failure: Richmond's living culture is invisible to its own residents. This cross-PS framing is strategically valuable for pillar-level evaluation.

**3. The "man on the corner" is the best PS2 user definition in the pillar.** PS2 asks for "a trusted, accessible way to share lived experiences so community narratives can inform City decisions." The poem's portrait of an elderly man with irreplaceable stories and no platform to capture them is a more concrete, more human articulation of that user than any persona document could provide. It defines who PS2 is for, what they carry, and what's at stake if the platform doesn't exist.

**4. The format itself is a civic engagement innovation.** A spoken-word performance as a hackathon demo is unconventional. It implicitly argues that civic technology engagement shouldn't be limited to people who can build and demo software — that the people closest to the problem (residents, storytellers, community elders) should have a way to participate that matches how they naturally communicate. This is a valid point about hackathon design, even if it doesn't produce a scoreable prototype.

---

## What Was Fundamentally Missed

**1. No working prototype.** This is the defining gap. There is no application, no wireframe, no data model, no architecture, no code. The poem describes a platform ("ExploreRVA") and a website exists (explorerva.org), but the demo shows no technical implementation. For judges scoring Execution and Feasibility, there is nothing to evaluate.

**2. No technical approach to either problem.** The demo does not propose how to aggregate events (PS1) or how to capture stories (PS2). It does not reference data sources, APIs, platforms, or design patterns. It does not address any of the technical challenges documented in the shared research — CultureWorks integration, ICS feed parsing, deduplication, story consent frameworks, or moderation pipelines.

**3. No connection between stories and civic decision-making.** PS2 specifically asks for stories that "inform City decisions." The poem frames story preservation as cultural heritage, not as civic data. The gap between "preserving a voice" and "influencing a budget allocation" is significant. How do collected stories become actionable civic insight? This question is not raised, let alone answered.

**4. No consideration of trust infrastructure for story collection.** The poem describes collecting stories from an elderly man — exactly the population that requires the most careful consent, privacy, and trust infrastructure. How is consent obtained? Who moderates? Who owns the stories? What happens if someone shares something that puts them at risk? These are not edge cases for PS2 — they are core design requirements.

---

## Blockers

| Blocker | Severity | Specific Ask |
|---------|----------|--------------|
| No working prototype | **Critical** | A technical implementation is required for Execution and Feasibility scoring. The poem is a compelling problem statement, but judges need something to evaluate as a solution. Even a clickable Figma prototype or a static HTML mockup with hardcoded data would move this from "concept" to "demonstrable." |
| No technical architecture proposed | **Critical** | Neither PS1 (event aggregation) nor PS2 (story collection) has a proposed technical approach. The team should specify: What data sources? What platform? What story capture method? What moderation model? |
| No PS2 trust/consent framework | **High** | Story collection from elderly and vulnerable populations requires explicit consent processes, data ownership clarity, moderation policies, and community trust-building. None of this is addressed. |
| PS2 prior art not researched | **Medium** | The shared research covers PS1 prior art thoroughly but PS2 prior art (StoryCorps, oral history projects, civic narrative platforms) is not documented. Understanding what exists would prevent reinventing patterns that already work. |

---

## Recommended Next Steps (Priority Order)

1. **Build a minimum demonstrable artifact.** The team's problem framing is strong enough to anchor a prototype. A static page with 10 real Richmond events (sourced from CultureWorks or Style Weekly) plus 2-3 recorded neighborhood stories (audio or text) would demonstrate both PS1 and PS2 in a single interface. This doesn't need to be a full platform — it needs to be enough to show what ExploreRVA would look and feel like.

2. **Pick one PS and go deep.** Straddling both PS1 and PS2 with no prototype spreads thin. If the team has limited development capacity, choosing PS2 (story collection) would be strategically stronger — What's On RVA and Vecina already cover PS1 with working prototypes. PS2 has no competing demos in this pillar with technical implementations, making it an open field.

3. **Research PS2 prior art.** StoryCorps (national oral history), the Fulton oral history projects in Richmond, and civic narrative platforms like [city]-Stories initiatives provide design patterns for consent, moderation, and story-to-insight pipelines. Understanding these prevents starting from zero.

4. **Define the story-to-civic-insight pipeline.** How do individual stories become data that informs City decisions? Options include: thematic tagging and aggregation (100 stories mention flooding → infrastructure priority), geographic clustering (stories from a neighborhood reveal shared concerns), and direct inclusion in planning processes (stories presented to City Council alongside quantitative data). This pipeline is what makes PS2 civic rather than archival.

5. **Explore collaboration with other Pillar 7 teams.** What's On RVA has a Neighborhood Stories section that needs content. Vecina has a CultureWorks data pipeline that needs a discovery UX. ExploreRVA has the strongest problem framing and the deepest PS2 vision. A combined effort — Vecina's data, What's On RVA's UX breadth, ExploreRVA's story vision — would be stronger than any of the three alone.
