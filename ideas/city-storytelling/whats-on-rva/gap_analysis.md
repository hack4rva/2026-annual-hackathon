# Gap Analysis — What's On RVA

**Pillar:** A City That Tells Its Stories
**Problem Statement (verbatim):** "Aggregate Richmond's arts and cultural events into one discoverable place."
**Demo:** What's On RVA (Sri Gana, Ishika, Tejesh — VCU CS Graduate Students)
**Primary User:** Richmond resident who enjoys art, music, and theater but is exhausted by the 12+ uncoordinated channels required to find what's happening this weekend.
**Pain:** Richmond's arts event information is fragmented across CultureWorks, Style Weekly, Eventbrite, VisitRichmond, Venture Richmond, Reddit r/rva, Instagram, and individual venue websites. No single platform combines comprehensive listings with map-based neighborhood discovery and price/date filtering. Residents spend 20–30 minutes cross-referencing tabs and frequently give up.
**Desired Outcome:** One place where any Richmond resident can find, filter, and plan around local arts and cultural events — by date, type, price, and neighborhood — without needing to check multiple platforms.

---

## Data Source Map

| Data Claim in Demo | Real or Synthetic? | Source | Owner | Access | Cadence | Notes |
|---|---|---|---|---|---|---|
| Events displayed on landing page | **Unspecified** | Not stated in demo | Unknown | Unknown | Unknown | The demo shows a browsable feed of events but does not identify where the data comes from. No API, feed, or data partnership is mentioned. This is the critical gap — without a confirmed data source, the platform could be populated with seed/synthetic data. |
| Filtering by date, type, price | **UI demonstrated** | Depends on underlying data source | Unknown | Unknown | Unknown | Filters work in the demo, but their usefulness depends entirely on data completeness. If the underlying dataset is incomplete, filters create false confidence ("no free events this weekend" when free events exist elsewhere). |
| Neighborhood Stories section | **Likely hand-curated** | Not stated | Team-authored? | Unknown | Static? | The demo describes stories connected to Jackson Ward, Carver, Scott's Addition. No data source or editorial process is identified. Appears to be team-written content, which raises sustainability questions. |
| Map view with event/story locations | **UI demonstrated** | Depends on geocoded event data | Unknown | Unknown | Unknown | Map pins shown but geocoding source not stated. If events lack structured address data, pins may be manually placed or approximate. |
| AI Chat Assistant ("What can I do tonight?") | **Real (LLM-based)** | Likely OpenAI or similar LLM API | Commercial provider | API key | Real-time | Novel feature among the three PS1 demos. However, the AI's responses are only as good as the underlying event data. If the dataset is incomplete, the AI will confidently recommend from an incomplete list. |

### Gaps Requiring Clarification
- **Data source identity:** Where do the events come from? CultureWorks? Eventbrite? Scraped venues? Hand-entered? This is the single most important unanswered question.
- **Data freshness:** Is the event data live (API/feed) or static (loaded once)? Stale data is the #1 killer of civic event platforms (`E4_prior_art_failures.md`).
- **Neighborhood Stories provenance:** Who writes them? How are they maintained? What prevents them from going stale?
- **AI grounding:** Is the chat assistant grounded in the platform's actual event data, or is it a general-purpose LLM that may hallucinate events?

---

## Gap Analysis by JTBD

### Job 1: Resident who wants one place to find what's happening
**Coverage: Partial**

What works:
- The unified platform concept directly addresses the core problem — 12+ channels, zero coordination (P1.1)
- No-login browsing removes a major friction point that Eventbrite and personalized platforms impose
- Date/type/price filters address the planning workflow residents actually need
- Map view addresses the neighborhood discovery gap (P1.5) that only Richmond Family Magazine currently offers
- AI chat is a genuinely novel approach to the "plan my night" use case — no other Richmond platform offers conversational discovery

What's missing:
- **No identified data source.** This is fundamental. Without knowing where events come from, coverage cannot be assessed. If it's Eventbrite-only, fine arts are buried under commercial noise (P1.3). If it's CultureWorks, grassroots Facebook-only events are missing (P4.1). If it's hand-entered, it won't survive the team's graduation.
- **No deduplication strategy.** If ingesting from multiple sources, the same Richmond Ballet performance could appear 3 times with slight title variations.
- **No freshness mechanism.** The demo doesn't address what happens when events are cancelled, rescheduled, or past. Stale data is the primary failure mode of civic event platforms (`E4_prior_art_failures.md`).
- **No coverage of Job 2 (artist/venue submission).** Artists cannot add their own events. This means the platform is only as comprehensive as its data pipeline, with no mechanism for filling gaps.

**Gap fixable or fundamental?** Fixable — but the fix is the hardest part. Connecting to CultureWorks (Vecina's approach) or ICS feeds from Style Weekly and Richmond Symphony would ground the platform in real data. The UI and AI features are strong; the data layer is where the work needs to happen.

### Job 2: Artist or venue operator who can't reach new audiences
**Coverage: Not Addressed**

The demo does not show any mechanism for artists or venues to submit, claim, or update event listings. This means What's On RVA cannot reduce submission fatigue (P2.1), cannot capture solo artists with zero infrastructure (P2.4), and cannot detect reschedule propagation failures (P2.3). The platform consumes events but does not provide a pathway for producers.

**Gap fixable or fundamental?** Fixable but deprioritized. A "Submit an Event" form is straightforward to build. The harder question is whether submitted events go through editorial review (quality control vs. bottleneck) or auto-publish (spam risk).

### Job 3: CultureWorks or City staffer who needs a unified view
**Coverage: Not Addressed**

No administrative dashboard, no geographic coverage analytics, no equity metrics. The platform serves residents as end users but does not provide the institutional view that arts funders and city staff need.

**Gap fixable or fundamental?** Fixable, and would be a strong differentiator for a post-hackathon pilot. If the platform aggregates from multiple sources, it could generate the first-ever geographic heatmap of Richmond's arts event density — data that CultureWorks and the City currently lack (P3.1).

---

## Opportunities

### Opportunity 1: Ground the AI Chat in Verified Event Data
The AI assistant is What's On RVA's most distinctive feature and the clearest differentiator from Vecina's filter-first approach. If grounded in a verified, real-time event dataset (CultureWorks + ICS feeds), it becomes the first conversational arts discovery tool in Richmond. If ungrounded, it's a hallucination risk. The path forward: connect the chat to the same structured data that powers the filters, enforce retrieval-augmented generation (RAG) so the AI only recommends events it can cite, and add a "no events found" response when the dataset has no match.

**Dependencies:** Confirmed data pipeline (CultureWorks partnership or ICS ingestion); RAG architecture connecting LLM to event database.

### Opportunity 2: Partner with CultureWorks for Data, Own the UX
CultureWorks maintains the most comprehensive arts dataset in Richmond but has broken SEO (P1.6), no map view, and no conversational interface. What's On RVA has exactly what CultureWorks lacks: a modern discovery UX with map, filters, and AI chat. A data partnership — CultureWorks provides the feed, What's On RVA provides the front end — would give both parties what they're missing. This is the "partner for data, build for UX" pattern recommended by prior art research (`E5_prior_art_weekend_viable.md`).

**Dependencies:** CultureWorks data export (JSON, CSV, or Localist API access); data sharing agreement terms.

### Opportunity 3: Neighborhood Stories as a PS2 Bridge
The Neighborhood Stories section positions What's On RVA at the intersection of PS1 (event discovery) and PS2 (resident stories as civic insight). If the stories section evolves from team-curated content to resident-submitted neighborhood narratives, it becomes a vehicle for the "man on the corner" problem that ExploreRVA's spoken-word pitch dramatized. This cross-PS framing could strengthen What's On RVA's pillar alignment and make it relevant to both problem statements.

**Dependencies:** Story submission mechanism; editorial/moderation process; community trust-building to encourage participation.
