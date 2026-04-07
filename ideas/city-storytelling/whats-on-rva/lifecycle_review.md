# Lifecycle Review — What's On RVA

**Pillar:** A City That Tells Its Stories
**Problem Statement:** Aggregate Richmond's arts and cultural events into one discoverable place.
**Demo:** What's On RVA (Sri Gana, Ishika, Tejesh — VCU CS Graduate Students)
**Live Site:** whats-on-rva2.vercel.app
**Review Date:** April 1, 2026

---

## Rubric Checklist

| Step | Name | Output File | Status | Notes |
|------|------|-------------|--------|-------|
| 1 | Problem Grounding | `gap_analysis.md` (header) | ✅ Complete | Problem statement verbatim, primary user, pain, desired outcome all present. |
| 2 | JTBD Analysis | `_shared-arts-discovery/jtbd_analysis.md` | ✅ Complete | Shared file — 3 jobs covering resident discovery, artist/venue promotion, and institutional view. |
| 3 | Question Generation | `_shared-arts-discovery/jtbd_analysis.md` (Open Questions) | ✅ Complete | Shared file — 20 open questions across data, user, integration, equity, and prior art categories. |
| 4 | Prior Art Research | `_shared-arts-discovery/prior_art_research.md` | ✅ Complete | Shared file — Richmond aggregator ecosystem, data source tiers, national prior art, weekend-viable patterns. |
| 5 | Pain Point Research | `_shared-arts-discovery/pain_points.md` | ✅ Complete | Shared file — 17 pain points per JTBD with evidence and equity dimension. |
| 6 | Data Source Mapping | `gap_analysis.md` (Data Source Map) | ⚠️ Incomplete | 5 data claims mapped; **all flagged as unspecified or unverified**. The demo does not identify its data source — this is the critical gap. |
| 7 | SME Outreach | — | ⚠️ Not Started | No outreach drafted for CultureWorks data partnership or any other data provider. |
| 8 | Gap Analysis | `gap_analysis.md` (Gap Analysis) | ✅ Complete | All 3 JTBDs assessed (Partial / Not Addressed / Not Addressed). |
| 9 | Opportunity Mapping | `gap_analysis.md` (Opportunities) | ✅ Complete | 3 opportunities named with dependencies. |
| 10 | Solution Ideation | — | ⚠️ Not Started | No solution ideas file generated for this demo. |
| 11 | Lifecycle Review | `lifecycle_review.md` | ✅ Complete | This file. |

---

## What the Demo Does Well

**1. Best discovery UX among the three PS1 demos.** What's On RVA is the only demo that combines date/type/price filters, map view, neighborhood stories, AND conversational AI in one platform. The breadth of discovery modalities — browse, filter, map, ask — is genuinely more complete than Vecina's filter+map or ExploreRVA's concept-only pitch.

**2. AI chat is a real differentiator.** No current Richmond arts platform offers conversational event discovery. "What can I do tonight?" as a natural-language entry point lowers the cognitive load that the JTBD analysis identifies as the primary barrier (P1.1 — 20–30 minutes cross-referencing tabs). If grounded in real data, this is the most innovative feature across all three PS1 demos.

**3. No-login browsing respects the user.** Requiring accounts before allowing discovery is a known fail pattern in civic tech. What's On RVA makes account creation optional (for personalization only), which aligns with accessibility best practices and respects residents who don't want to create another account.

**4. Neighborhood Stories section bridges PS1 and PS2.** By including a story layer alongside events, What's On RVA positions itself at the intersection of both problem statements under Pillar 7. This is a strategic advantage if the pillar award judges weight breadth of pillar coverage.

---

## What Was Fundamentally Missed

**1. No identified data source.** This is the single most important gap. The demo shows events but never states where they come from. Without a confirmed, durable data pipeline, What's On RVA is a beautiful front end with no proven back end. Every prior art failure in the research (`E4_prior_art_failures.md`) — Yahoo Upcoming, EveryBlock, ghost calendars — died because the data pipeline broke. The UX is strong; the data question is existential.

**2. AI chat may not be grounded in real event data.** If the LLM is generating responses from general knowledge rather than the platform's actual event dataset, it will hallucinate events, recommend things that don't exist, or miss events that do. The demo does not clarify whether the AI uses retrieval-augmented generation (RAG) against the event database or is a standalone chatbot.

**3. No supply-side story.** Artists and venues cannot submit events. This means the platform's comprehensiveness depends entirely on whatever data pipeline exists (which is unspecified). The prior art research explicitly warns against passive-consumption-only platforms — they die because there's no feedback loop from producers (`E4_prior_art_failures.md`).

---

## Blockers

| Blocker | Severity | Specific Ask |
|---------|----------|--------------|
| Data source not identified | **Critical** | The team must clarify: Where do events come from? CultureWorks? Eventbrite API? ICS feeds? Manual entry? Without this answer, no assessment of data coverage, freshness, or sustainability is possible. |
| AI grounding unverified | **High** | Is the chat assistant connected to the platform's event database via RAG, or is it a general-purpose LLM? If ungrounded, the AI is a liability (hallucinated event recommendations). Demonstrate the RAG pipeline or acknowledge this as a known limitation. |
| Neighborhood Stories provenance unknown | **Medium** | Who writes the neighborhood stories? Is this team-curated content that will go stale when the team graduates, or is there a submission/editorial process? |
| No event freshness mechanism | **Medium** | What happens when events are cancelled, rescheduled, or past? Does the platform auto-expire, or do stale listings accumulate? Stale data is the #1 trust killer for event platforms. |
| No supply-side pathway | **Medium** | Artists and venues have no way to submit or claim events. This limits comprehensiveness and creates no feedback loop for data quality. |

---

## Recommended Next Steps (Priority Order)

1. **Answer the data source question.** This is binary: either the platform has a confirmed, live data pipeline, or it doesn't. If it pulls from CultureWorks (like Vecina), say so. If it's Eventbrite, document the coverage gaps (flagship institutions missing). If it's hand-entered seed data, acknowledge that and plan the real pipeline. Everything else is secondary until this is resolved.

2. **Ground the AI in the event database.** Implement RAG so the chat assistant only recommends events that exist in the platform's dataset. Add a citation pattern ("Based on 3 events this weekend...") so users can verify. Add a "nothing found" response when the dataset has no match. Never let the AI invent events.

3. **Draft CultureWorks outreach.** A data partnership with CultureWorks would give What's On RVA the most comprehensive arts dataset in Richmond. CultureWorks has the data but broken SEO and no modern UX. What's On RVA has the UX but no confirmed data. This is a natural partnership.

4. **Add event expiration logic.** Events past their end time should auto-hide. Events with no end time should expire after 24 hours past start. This prevents the "ghost from last May" problem that ExploreRVA's poem dramatized.

5. **Design a lightweight event submission form.** A "Know about an event we're missing?" link that captures title, date, venue, and URL would open the supply-side pathway and help identify coverage gaps in the data pipeline.
