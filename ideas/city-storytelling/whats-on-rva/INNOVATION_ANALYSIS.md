# Innovation Analysis: What's On RVA

## 1. Blue Ocean Reframing (ERRC Grid)

**Core assumption challenged:** AI-powered event discovery requires building a custom recommendation engine from scratch.

| Action | Element | Rationale |
|--------|---------|-----------|
| **Eliminate** | Building a proprietary recommendation algorithm | Visit Seattle (GuideGeek/Emerald) and NYC Tourism (Ellis) use off-the-shelf LLM + RAG over their existing DMO content; no custom ML pipeline needed |
| **Eliminate** | Requiring user profiles or accounts for recommendations | Conversational AI (LLM chat) personalizes via dialogue, not stored profiles; ask "What are you in the mood for?" instead of requiring signup |
| **Reduce** | Calendar/list UI as the primary discovery interface | Move from "browse a list" to "have a conversation." Visit Seattle's Emerald operates via web chat and WhatsApp — zero learning curve |
| **Reduce** | Dependency on a single event source | Blend CultureWorks feed with Eventbrite, Ticketmaster, and venue ICS feeds (Vecina aggregation layer); no single-source fragility |
| **Raise** | Multilingual access | GuideGeek supports 45+ languages; Richmond's growing immigrant population needs discovery in Spanish, Vietnamese, and other languages |
| **Raise** | Measurable economic impact | Bandwango's pass-based model proved $200K+ spending in Toledo in 3 months; What's On RVA should track incremental ticket sales and merchant spending, not just page views |
| **Create** | A conversational "What should I do tonight?" interface for Richmond | No mid-size US city has deployed an LLM-powered cultural discovery chat for residents (most are tourist-focused); this is a greenfield resident play |
| **Create** | Venue equity tuning | DoStuff Media skews toward popular venues; actively tune the AI to surface events in underrepresented neighborhoods and small grassroots venues |

**Key reframe:** What's On RVA isn't a "smarter calendar" — it's Richmond's cultural concierge. The conversational interface eliminates the browsing problem entirely. And it runs on the same CultureWorks data feed that powers Vecina and Weekend Culture SMS (Bundle 7).

## 2. Rapid Ideation (Crazy 8s)

| # | Idea | Provocation Level |
|---|------|-------------------|
| 1 | **LLM Chat + CultureWorks RAG** — Ingest CultureWorks event data into a vector store. User asks "What's happening tonight near the Fan?" → LLM returns 3 curated events with descriptions, times, and links. | Practical |
| 2 | **WhatsApp / iMessage Integration** — Deploy on WhatsApp (like Visit Seattle's Emerald) so residents don't need to visit a website. Text-native discovery. | Practical |
| 3 | **"Culture Passport" Check-In Challenge** — Bandwango-style digital passport: visit 10 Richmond cultural venues in a month, earn a badge/discount. Tracks check-ins and measures spending. | Moderate |
| 4 | **Mood-Based Discovery** — "I'm feeling adventurous / I want something chill / surprise me." Map moods to event categories. No genre knowledge required. | Moderate |
| 5 | **Spotify-Linked Recommendations** — DoStuff Media matches Spotify/Bandcamp listening habits to live events in 22 cities. Build a Richmond-specific version: connect your Spotify → get matched to concerts and DJ nights. | Moderate |
| 6 | **Neighborhood Explorer Mode** — "I've never been to Southside. What should I experience there?" The AI builds a mini-itinerary: restaurant → gallery → live music → dessert. | Moderate |
| 7 | **Anti-Algorithm Discovery** — Once a week, the system recommends something *outside* your usual taste. "You always go to rock shows. Try this jazz brunch." Deliberate serendipity. | Provocative |
| 8 | **Venue Owner Dashboard** — Local venues see how often their events are recommended, clicked, and attended. Creates a feedback loop: venues with poor descriptions or missing data get prompted to improve. | Provocative |

## 3. Rapid Design Sprint

**Problem sentence:** Richmond's cultural events are listed across multiple platforms but there's no intelligent layer that synthesizes, personalizes, and delivers recommendations based on what a resident actually wants to do — right now, near them.

**User journey (5 steps):**
1. Resident texts or types: "What's happening tonight near Church Hill that's free?"
2. LLM queries the CultureWorks vector store + Eventbrite API, filters by date/location/price
3. Returns 3 options with one-sentence descriptions, times, and Google Maps links
4. Resident replies: "Tell me more about #2" → gets full description, venue info, and a link to buy tickets or RSVP
5. System logs the interaction → feeds into a weekly venue equity report showing which neighborhoods and venues are getting recommended vs. ignored

**Prototype shape:** A simple web chat interface (React or Streamlit) backed by an LLM (Claude or GPT-4) with CultureWorks event data loaded into a vector store (Chroma or Pinecone). No user accounts. No app. RAG pipeline: (1) CultureWorks ICS → parsed events → vector embeddings. (2) User query → semantic search → top-K events → LLM generates conversational response with structured event data. Guardrails: only return events from the verified CultureWorks corpus; never hallucinate events.

**First test:** Load one month of CultureWorks events into the vector store. Deploy a web chat. Share the URL with 50 Richmond residents. Measure: queries per user, events surfaced per query, click-through to event pages, qualitative feedback on recommendation quality.

## 4. Opportunity Mapper

### Opportunity 1: Conversational Cultural Discovery for Residents

| Dimension | Detail |
|-----------|--------|
| **User** | Richmond residents who want to do something cultural but don't know what or where |
| **Outcome** | Natural-language query → personalized, real-time event recommendations with zero browsing required |
| **Workflow** | CultureWorks ICS → vector store → LLM + RAG → conversational response → event page link |
| **Dependencies** | CultureWorks API/ICS access (Bundle 7); LLM API (Claude/GPT); vector store hosting |
| **Richmond relevance** | Visit Seattle and NYC Tourism deployed LLM chat for tourists; no mid-size city has done this for residents. Richmond can be first. |

### Opportunity 2: Economic Impact Measurement via Check-In Passports

| Dimension | Detail |
|-----------|--------|
| **User** | Richmond DMO (Richmond Region Tourism), CultureWorks, City Council |
| **Outcome** | Prove that cultural discovery drives measurable local spending — not just page views |
| **Workflow** | Bandwango-style digital passport → check-ins at venues → merchant transaction matching → spending attribution |
| **Dependencies** | Merchant participation; Bandwango or similar platform; incentive budget for rewards |
| **Richmond relevance** | Toledo's Coffee Quest 419 drove $200K+ spending at 28 local shops in 3 months with 4,824 signups; Richmond's cultural ecosystem is far larger |

### Opportunity 3: Equity-Tuned Recommendations

| Dimension | Detail |
|-----------|--------|
| **User** | Grassroots venues, small cultural organizations in underrepresented neighborhoods |
| **Outcome** | AI actively surfaces events in neighborhoods and venues that would otherwise be algorithmically invisible |
| **Workflow** | Weight recommendation algorithm to boost events in low-recommendation neighborhoods; publish venue equity dashboard |
| **Dependencies** | Geocoded event data; neighborhood-level recommendation tracking; editorial tuning rules |
| **Richmond relevance** | Travel South Dakota used Bandwango passports to deliberately disperse visitors beyond hotspots; Richmond can apply the same equity logic to cultural discovery |

## 5. Problem Scoping

| Dimension | Score (1-5) | Rationale |
|-----------|:-----------:|-----------|
| **Impact** | 4 | Transforms cultural discovery from "browse a list" to "have a conversation"; measurable economic impact potential via check-in tracking |
| **Feasibility** | 3 | LLM + RAG is proven technology but requires more engineering than SMS or static maps; guardrails needed to prevent hallucinated events |
| **Data readiness** | 4 | CultureWorks data exists; LLM APIs are commodity; vector store setup is straightforward |
| **Problem clarity** | 4 | Clear pain point (fragmented discovery) but "AI-powered" is broad; need to define specific use cases tightly |
| **Demo-ability** | 5 | Live chat with a judge: "Ask it anything about Richmond events this weekend." Immediately impressive if it works. |

**Weekend MVP shapes:**
- **Shape A (Chat MVP):** Streamlit app + Claude API + CultureWorks events in a JSON file as context. No vector store — just prompt engineering with event data in context window. ~6 hours.
- **Shape B (RAG Pipeline):** Shape A + Chroma vector store for semantic search over 500+ events. Better retrieval, handles larger event corpus. ~12 hours.
- **Shape C (Multi-Channel):** Shape B + WhatsApp deployment via Twilio + venue equity tracking (which neighborhoods are recommended most/least). ~20 hours.

## 6. Assumption Mapping

| # | Assumption | Risk (1-5) | Uncertainty (1-5) | R × U | Validation method |
|---|-----------|:----------:|:-----------------:|:-----:|-------------------|
| 1 | CultureWorks will provide API/ICS access for event data | 5 | 3 | 15 | Same dependency as Vecina and Weekend Culture SMS (Bundle 7). Validate once. |
| 2 | LLM will not hallucinate events that don't exist | 5 | 3 | 15 | Constrain LLM to only return events from the verified corpus; test with adversarial queries ("events in 2030") |
| 3 | Residents want conversational discovery, not just a better calendar | 3 | 4 | 12 | A/B test: chat interface vs. curated list. Measure engagement and satisfaction. |
| 4 | RAG retrieval will surface relevant events for natural-language queries | 3 | 3 | 9 | Test with 50 sample queries against a real CultureWorks corpus; measure relevance |
| 5 | Hosting LLM inference is affordable at scale | 3 | 3 | 9 | Estimate query volume; calculate API costs. At 1,000 queries/week, Claude API costs ~$5-15/week |
| 6 | WhatsApp/SMS deployment doesn't create compliance headaches | 3 | 2 | 6 | WhatsApp Business API has clear terms; Twilio handles A2P 10DLC for SMS |
| 7 | Richmond merchants will participate in a check-in passport program | 3 | 4 | 12 | Recruit 5 pilot merchants; offer free listing + analytics dashboard as incentive |

**Top 3 to validate first:**
1. **CultureWorks API access (R×U=15):** Shared dependency across Bundle 7. Validate once, unlock three ideas.
2. **LLM hallucination prevention (R×U=15):** If the AI recommends a non-existent event, trust is destroyed instantly. Must constrain to verified corpus.
3. **Resident preference for conversational discovery (R×U=12):** The assumption that people want to "chat" about events is untested in Richmond. Quick A/B test needed.

---

## Key Takeaway

What's On RVA sits at the intersection of two proven trends: LLM-powered discovery (Visit Seattle's Emerald, NYC's Ellis) and behavioral personalization (Bandwango's $200K Toledo impact). The innovation for Richmond is applying these tourist-focused tools to *residents* — no mid-size US city has done this. The build is straightforward (LLM + RAG over CultureWorks data), but the critical risk is hallucination: an AI that recommends a non-existent event is worse than no AI at all. Constrain the system to only surface verified CultureWorks data, add guardrails, and launch with a simple chat interface. The CultureWorks API dependency (shared with Vecina and Weekend Culture SMS) makes this a natural Bundle 7 play.
