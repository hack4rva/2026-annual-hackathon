# Gap Analysis — ExploreRVA

**Pillar:** A City That Tells Its Stories
**Problem Statement (verbatim):** Straddles both PS1 ("Aggregate Richmond's arts and cultural events into one discoverable place") and PS2 ("Give residents a trusted, accessible way to share their lived experiences so community narratives can inform City decisions").
**Demo:** ExploreRVA (spoken-word poem — no screen recording, no working prototype)
**Project Site:** explorerva.org
**Primary User:** Richmond resident who encounters two related failures: (1) stale, fragmented, dead-link-filled event discovery, and (2) the slow loss of living memory — neighborhood stories that exist in people but not in any system.
**Pain:** Search results surface content from "last May," wrong addresses, and vanished event pages. Meanwhile, the carriers of Richmond's cultural memory — residents with irreplaceable neighborhood histories — have no platform that captures their voices before they're lost.
**Desired Outcome:** A platform that surfaces what's actually happening in Richmond right now AND preserves the stories of the people who make Richmond what it is.

---

## Data Source Map

| Data Claim in Demo | Real or Synthetic? | Source | Owner | Access | Cadence | Notes |
|---|---|---|---|---|---|---|
| N/A | **No data claims** | N/A | N/A | N/A | N/A | ExploreRVA's demo is a spoken-word poem. No data source, API, feed, or database is mentioned, demonstrated, or implied. The demo is entirely a problem-framing exercise. |

### What This Means
There is no data source map to evaluate because there is no technical implementation to assess. ExploreRVA's contribution is conceptual: it frames both problem statements with emotional precision and human specificity. The "man on the corner" vignette is a more effective articulation of PS2's stakes than any technical demo could provide. But without a prototype, data pipeline, or even a wireframe, there is nothing to map.

---

## Gap Analysis by JTBD

### Job 1: Resident who wants one place to find what's happening
**Coverage: Problem Framing Only — No Solution Demonstrated**

What the poem does well:
- Articulates the frustration of stale event discovery with specificity that the other demos don't match: "Every link I click is some ghost from last May," "Tonight at 8 — but it happened last year," "Wrong address listed, wrong side of the river." These are exact descriptions of pain points P1.1 (12+ channels, zero coordination) and P1.6 (broken SEO and dead data).
- Frames the problem from the resident's emotional experience rather than a feature list. This is valuable for judges evaluating Impact and User Value — it demonstrates genuine empathy with the user.

What's missing:
- **No solution.** The poem describes the problem but doesn't propose, demonstrate, or even sketch a technical approach to solving it. No filters, no map, no data source, no architecture.
- **No differentiation from What's On RVA or Vecina on PS1.** Both other demos address the same discovery frustrations with working prototypes. ExploreRVA identifies the same problem but offers no competing solution.

**Gap fixable or fundamental?** Not fixable within the demo — this is a missing prototype, not a missing feature. The problem framing is excellent; the execution gap is total.

### Job 2: Artist or venue operator who can't reach new audiences
**Coverage: Not Addressed**

The poem does not reference the supply-side problem (artists struggling to promote events). The focus is entirely on the discovery side (residents struggling to find events) and the preservation side (community stories fading).

### Job 3: CultureWorks or City staffer who needs a unified view
**Coverage: Not Addressed**

No institutional perspective is presented.

### PS2 — Resident Stories as Civic Insight
**Coverage: Problem Framing Only — No Solution Demonstrated**

What the poem does well:
- The "man on the corner" passage is the single most effective articulation of PS2's stakes across any demo in this pillar. It makes the abstract problem ("community narratives should inform city decisions") viscerally concrete: a person with irreplaceable stories, no platform to capture them, and time running out.
- "We don't lose it when the moment calls, when the memory rises and gently falls. We lose it slow, we lose it deep, when the voice goes quiet and permanently." This frames story loss not as an event but as erosion — which is exactly what makes it hard to prioritize and easy to ignore.

What's missing:
- **No mechanism for story capture.** How would ExploreRVA capture the man's story? Audio recording? Text transcription? Video? Community interview? The poem identifies the need but proposes no method.
- **No consent, moderation, or trust framework.** Story collection from vulnerable populations requires trust infrastructure that no demo in this pillar addresses, but ExploreRVA specifically invokes a population (elderly, neighborhood-rooted) that demands it.
- **No connection between stories and civic decision-making.** PS2 asks for stories that "inform City decisions." The poem frames stories as cultural preservation, not as civic data. The gap between "preserving a voice" and "influencing a budget decision" is significant and unaddressed.

**Gap fixable or fundamental?** The problem framing is strong and could anchor a future prototype. But the gap between "powerful poem" and "working platform" is the widest in this pillar.

---

## Opportunities

### Opportunity 1: ExploreRVA as a Design Brief for PS2
ExploreRVA's poem is more useful as a design brief than as a product demo. The "man on the corner" vignette defines the user, the stakes, the failure mode ("no one stayed long enough"), and the emotional outcome with a clarity that a PRD or user story format cannot match. Any team building a PS2 solution — resident story capture for civic insight — should use this poem as their north star for what the product must feel like to the people it serves.

**Dependencies:** A team willing to build the technical implementation. ExploreRVA has the vision; it needs the engineering.

### Opportunity 2: Collaboration with What's On RVA's Neighborhood Stories
What's On RVA includes a Neighborhood Stories section that currently appears to be team-curated content. ExploreRVA's framing of story preservation could be the editorial and emotional foundation for that section — transitioning it from hand-written neighborhood profiles to resident-submitted living narratives. This would give ExploreRVA a technical home and give What's On RVA a deeper PS2 presence.

**Dependencies:** Willingness of both teams to collaborate; story submission and moderation infrastructure; community trust-building process.

### Opportunity 3: The Spoken-Word Format as a Civic Engagement Pattern
The unconventional demo format — a spoken-word performance rather than a slide deck — is itself a statement about how civic technology should engage communities. For neighborhoods where tech demos feel exclusionary and slide decks feel bureaucratic, a spoken-word articulation of the problem is more accessible and more honest. If RVA Hacks wants to lower barriers to participation for non-technical community members, ExploreRVA's format is a proof of concept for how that works.

**Dependencies:** Event format and judging criteria that accommodate non-prototype submissions; clear evaluation framework for concept-only demos.
