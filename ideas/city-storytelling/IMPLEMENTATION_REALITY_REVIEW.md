# Implementation Reality Review — A City That Tells Its Stories

**Pillar:** A City That Tells Its Stories
**Ideas scored:** 10 (5 hackathon demos + 3 NEW_IDEAS + 2 BLUESKY)
**Rubric:** [IMPLEMENTATION_REALITY_RUBRIC.md](../IMPLEMENTATION_REALITY_RUBRIC.md)
**Reviewed:** April 1, 2026

---

## Summary Table

| # | Idea | Source | Own | Data | Stack | Integ | Maint | Total | Tier |
|---|------|--------|:---:|:----:|:-----:|:-----:|:-----:|:-----:|:----:|
| 1 | Public Comment Atlas | BLUESKY | 3 | 4 | 4 | 5 | 4 | **20** | **A** |
| 2 | Weekend Culture SMS | BLUESKY | 3 | 4 | 4 | 5 | 4 | **20** | **A** |
| 3 | Vecina | Demo | 2 | 4 | 4 | 5 | 4 | **19** | **A** |
| 4 | What's On RVA | Demo | 2 | 3 | 3 | 4 | 3 | **15** | **B** |
| 5 | Planning Commission Story Feed | NEW_IDEAS | 4 | 1 | 3 | 3 | 3 | **14** | **B** |
| 6 | Fulton Oral History Map | Demo | 2 | 3 | 4 | 5 | 4 | **18** | **A** |
| 7 | ExploreRVA | Demo | 1 | 2 | 3 | 4 | 2 | **12** | **B** |
| 8 | Richmond Stories Online | Demo | 2 | 1 | 2 | 3 | 2 | **10** | **C** |
| 9 | Community Story Pop-Up Kit | NEW_IDEAS | 2 | 1 | 2 | 4 | 1 | **10** | **C** |
| 10 | Displacement Memory Archive | NEW_IDEAS | 2 | 1 | 2 | 3 | 1 | **9** | **C** |

---

## Detailed Scores

---

### 1. Public Comment Atlas — BLUESKY

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 3 | Plausible home in City Clerk or Planning, but neither has a mandate to build research tools for advocates; the tool serves external users more than internal staff. |
| Data Readiness | 4 | Legistar OData API is public and maintained with bodies, events, and matters; GeoHub neighborhoods layer (148 polygons) is public REST; geocoding matters to neighborhoods requires a manual or semi-automated join table (not API-native). |
| Tech Stack Fit | 4 | Static site + Legistar API + GeoHub REST + a lightweight geocoder; no enterprise procurement needed; commodity hosting (Vercel/Netlify/Pages). |
| Integration Surface | 5 | Fully standalone — reads only public APIs, outputs browser/PDF; zero City system changes required. |
| Maintenance Burden | 4 | Legistar data refreshes automatically as meetings are docketed; the join table from matter→neighborhood may need occasional manual updates but the core feed is automated. |
| **Total** | **20** | **Tier A** |

**Key blocker:** Geocoding matters to neighborhoods is not built into Legistar — teams must seed a join table or parse addresses from matter titles, which is fragile and incomplete.
**Key accelerator:** All data sources are public, actively maintained, and already used in City workflows. No partnership or MOU required to launch v1.

---

### 2. Weekend Culture SMS — BLUESKY

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 3 | Arts & Culture Office or CultureWorks partnership could champion this, but neither is a City department with SMS infrastructure mandate; most likely lives as a nonprofit-operated service with City blessing. |
| Data Readiness | 4 | CultureWorks/Localist exposes ICS, RSS, and JSON API; rate limit <1 req/s is workable for a weekly batch pull; partnership permission needed for bulk access but already documented as available for hackathon. |
| Tech Stack Fit | 4 | Twilio SMS + scheduled Lambda/cron + CultureWorks API; all commodity cloud, no enterprise procurement; Twilio is a standard civic tech tool. |
| Integration Surface | 5 | Fully standalone — reads public calendar feeds, sends SMS; no City system touched. |
| Maintenance Burden | 4 | Weekly automated pull-and-send; someone reviews output monthly for quality; graceful degradation if CultureWorks feed is stale (shows "last updated" timestamp). |
| **Total** | **20** | **Tier A** |

**Key blocker:** CultureWorks partnership must be formalized beyond hackathon demo permission; bulk access terms and rate limits need a lightweight agreement.
**Key accelerator:** SMS is the simplest possible interface — no app store, no login, no broadband required; the technical surface is tiny and well-understood.

---

### 3. Vecina — Demo

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 2 | No City department owns event aggregation; the Arts & Culture Office could endorse but CultureWorks (a nonprofit) is the actual data steward; needs cross-sector agreement on who maintains the front end. |
| Data Readiness | 4 | Live CultureWorks integration demonstrated in the hackathon prototype; caching layer already built; ICS/JSON API confirmed working. |
| Tech Stack Fit | 4 | Next.js on Vercel + CultureWorks API + Google Maps embed; commodity hosting, no procurement; Google Maps API has cost at scale but free tier covers civic usage. |
| Integration Surface | 5 | Fully standalone — reads CultureWorks public feed, displays in browser with map; zero City system integration. |
| Maintenance Burden | 4 | Automated data refresh from CultureWorks; monthly review for stale events or broken venue links; the prototype already runs without manual intervention. |
| **Total** | **19** | **Tier A** |

**Key blocker:** Sustainability depends on CultureWorks continuing to maintain its API and granting ongoing access; if CultureWorks changes its data model or access terms, the platform breaks.
**Key accelerator:** Working prototype already deployed on Vercel with live data — the gap between demo and pilot is unusually small.

---

### 4. What's On RVA — Demo

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 2 | Same orphan problem as Vecina — no City department owns event aggregation; the team is VCU grad students with no institutional home for ongoing operation. |
| Data Readiness | 3 | Demo showed event data but data sources are unspecified in the transcript; likely manual curation or scraping rather than a structured API integration; the "neighborhood stories" section implies content that must be created. |
| Tech Stack Fit | 3 | Web app on Vercel + AI chat assistant; the AI chat component introduces LLM API cost and DIT review requirements under Richmond's AI policy (chatbots require review). |
| Integration Surface | 4 | Mostly standalone but the AI assistant and personalized recommendations imply user accounts and stored preferences, adding backend complexity beyond simple API consumption. |
| Maintenance Burden | 3 | If data sources are manual or scraped, someone must curate regularly; AI assistant needs prompt tuning and monitoring; neighborhood stories section needs editorial attention. |
| **Total** | **15** | **Tier B** |

**Key blocker:** Unclear data pipeline — without a confirmed structured feed (CultureWorks, ICS, or similar), the platform depends on manual curation or scraping that won't survive the team graduating.
**Key accelerator:** Working prototype on Vercel shows the UX vision; pivoting to CultureWorks API (like Vecina) would immediately raise Data Readiness and Maintenance scores.

---

### 5. Planning Commission Story Feed — NEW_IDEAS

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 4 | Planning Commission staff already prepare hearing packets; inserting a "Community Voices" brief into the existing staff report workflow has a named process owner and a clear insertion point. |
| Data Readiness | 1 | The contributed story archive tagged by neighborhood and topic does not exist; no structured story corpus exists for Richmond; the consent-tier database must be designed and populated from scratch. |
| Tech Stack Fit | 3 | The query-and-brief-generation piece is straightforward, but it depends on an upstream story archive with structured metadata, consent tiers, and neighborhood tagging — infrastructure that must be built first. |
| Integration Surface | 3 | Requires integration with the Planning Commission docket (Legistar, public) and the staff report distribution workflow (internal); the Legistar side is open but the staff report workflow is manual/internal. |
| Maintenance Burden | 3 | Once the archive exists, the brief generation could be semi-automated; but the archive itself requires ongoing story intake, consent management, and moderation — that's the real maintenance cost. |
| **Total** | **14** | **Tier B** |

**Key blocker:** The entire idea depends on a structured, consent-managed, neighborhood-tagged story archive that does not exist. Building that archive is itself a multi-year project.
**Key accelerator:** The Planning Commission insertion point is real and well-defined — if a story archive ever materializes (from the Pop-Up Kit, Displacement Archive, or Public Comment Atlas), this becomes a high-value consumer of that data.

---

### 6. Fulton Oral History Map — Demo

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 2 | No City department owns the Fulton Oral History Project; it's a community/academic initiative; the Valentine Museum or VCU Libraries are likelier stewards than any City office. |
| Data Readiness | 3 | The Fulton Oral History Project transcripts exist and the team extracted locations, stories, and quotes from them; but this is a one-time manual extraction from a single neighborhood — not a maintained, structured dataset. |
| Tech Stack Fit | 4 | Interactive web map (likely Leaflet/Mapbox) with static extracted data; commodity hosting; no special infrastructure; could run as a static site. |
| Integration Surface | 5 | Fully standalone — uses no City systems; reads from its own extracted dataset; outputs to browser. |
| Maintenance Burden | 4 | Static content from a completed oral history project; the data doesn't change, so the map doesn't need updates; degrades gracefully (content is always valid, just not expanding). |
| **Total** | **18** | **Tier A** |

**Key blocker:** Expansion beyond Fulton requires new oral history projects to produce structured, geocodable transcripts — and no pipeline exists for that.
**Key accelerator:** The data already exists and the prototype already works; this is essentially a finished product for the Fulton neighborhood, requiring only hosting and minor polish to launch as a public resource.

---

### 7. ExploreRVA — Demo

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 1 | No City department identified; the demo was a spoken-word poem with no institutional partner, no named operator, and no plan for who runs it. |
| Data Readiness | 2 | The project site (explorerva.org) implies aggregated event data, but the demo showed no data sources, no APIs, and no working data pipeline; the poem described the problem but not the data solution. |
| Tech Stack Fit | 3 | Presumably a web platform, but no technical architecture was demonstrated; the site exists but its stack and data sources are unverified from the demo alone. |
| Integration Surface | 4 | Appears standalone based on the project site; no City system dependencies implied. |
| Maintenance Burden | 2 | If it aggregates live events, it needs ongoing data feeds and curation; no automation was demonstrated; the team structure and maintenance plan are unclear. |
| **Total** | **12** | **Tier B** |

**Key blocker:** The demo provided vision but no evidence of a working data pipeline, technical architecture, or institutional commitment; the gap between the poem and a shippable product is large.
**Key accelerator:** The explorerva.org domain and site exist, suggesting work beyond the hackathon demo; if the team has built a real pipeline behind the scenes, the scores could change significantly.

---

### 8. Richmond Stories Online — Demo

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 2 | The Valentine Museum is named as a partner but is not a City department; civic hackers and local storytellers are the other partners — this is a community project without a City government owner. |
| Data Readiness | 1 | The platform depends on crowdsourced oral histories, contributed photos, and resident narratives — none of which exist as a structured, maintained corpus; the archive must be built from scratch through community collection. |
| Tech Stack Fit | 2 | Mentions APIs to sync local archives, augmented reality exploration, and a living growing archive — each of these implies significant custom development; AR alone puts this outside commodity tech. |
| Integration Surface | 3 | Claims to unify "fragmented city records" which implies integration with archives and institutional data sources; the Valentine Museum partnership suggests informal data sharing, not public API consumption. |
| Maintenance Burden | 2 | A living, crowdsourced archive requires ongoing moderation, content review, storage management, and community engagement; AR features require device-specific maintenance; no automation path described. |
| **Total** | **10** | **Tier C** |

**Key blocker:** The platform requires building both the technology and the content from scratch — no structured story corpus exists, and crowdsourced oral history collection is a multi-year community organizing effort, not a technology problem.
**Key accelerator:** The Valentine Museum partnership provides institutional credibility and potential access to existing (unstructured) collections; the richmondstories.online site is live, showing real momentum.

---

### 9. Community Story Pop-Up Kit — NEW_IDEAS

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 2 | The target communities (Gilpin, Creighton, Mosby) are RRHA-managed, not City-department-managed; likely steward is a nonprofit (Peter Paul Development Center, partner churches) or a university — no City department has a mandate to run story collection hardware. |
| Data Readiness | 1 | The kit creates new data from scratch — audio recordings, portrait photos, consent records; no existing dataset feeds it; the entire value proposition is building what doesn't exist. |
| Tech Stack Fit | 2 | Requires ruggedized tablets, USB microphones, portable photo printers, offline-capable recording apps with consent modules, and WiFi sync to a central archive — this is custom hardware+software deployment, not commodity cloud. |
| Integration Surface | 4 | The kit itself is standalone — records locally, syncs to its own archive; doesn't need to read or write City systems. |
| Maintenance Burden | 1 | Physical hardware in community settings requires charging, replacement, repair, facilitator training, site coordination, consent record management, and ongoing community relationship maintenance; this breaks without dedicated staff. |
| **Total** | **10** | **Tier C** |

**Key blocker:** This is a community organizing project with a hardware logistics component, not a software product; it requires dedicated, funded staff to operate and maintain — there is no automation path.
**Key accelerator:** The research grounding is strong (photo-elicitation studies, trust-signal methodology); if a funded oral history initiative emerges (university, NEH grant, RRHA partnership), the kit design is ready to deploy.

---

### 10. Displacement Memory Archive — NEW_IDEAS

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 2 | RRHA manages the relocation process but is not a City department and has no mandate for oral history; the City's Planning department oversees redevelopment but not memory preservation; this needs a champion who doesn't exist in government. |
| Data Readiness | 1 | The archive depends entirely on new story collection from residents being actively displaced; RRHA relocation records exist but are administrative, not narrative; no structured story corpus exists. |
| Tech Stack Fit | 2 | Requires the Pop-Up Kit infrastructure (Idea 17), Voice Hotline intake, Preservation Escrow system, and a dedicated portal section — each is a separate build with no existing City platform analog. |
| Integration Surface | 3 | Needs coordination with RRHA relocation touchpoints (pre-move counseling, moving day, post-move check-ins) — not City IT systems, but institutional process integration with a separate housing authority. |
| Maintenance Burden | 1 | Time-bound collection (6 months) but requires continuous facilitator presence at relocation events, rapid story processing, consent management, and portal maintenance during an emotionally intense community process; breaks immediately without dedicated staff. |
| **Total** | **9** | **Tier C** |

**Key blocker:** The time-sensitivity is real (demolition is underway) but the infrastructure to capture stories doesn't exist and can't be built fast enough through a hackathon; this requires a funded oral history project with RRHA partnership.
**Key accelerator:** The urgency itself is an accelerator — Creighton Court Phase 1 already cleared 504 units; grant funders (NEH, Mellon, local foundations) respond to time-sensitive preservation; the research documenting the Fulton erasure precedent makes a compelling case.

---

## Pillar Observations

### 1. The Pillar Has a Clean Split: Read vs. Write

The 10 ideas divide neatly into two categories:

- **Read ideas** (consume existing public data): Public Comment Atlas, Weekend Culture SMS, Vecina, What's On RVA, Fulton Oral History Map. These score A/B because the data exists.
- **Write ideas** (create new story data): Planning Commission Story Feed, Richmond Stories Online, Community Story Pop-Up Kit, Displacement Memory Archive, ExploreRVA. These score B/C because the data must be built.

The pillar's name — "A City That Tells Its Stories" — implies the *write* side. But the *read* side is where implementation reality is strongest. Teams should be aware of this tension.

### 2. CultureWorks Is the Kingmaker for PS1

Every viable PS1 (Arts & Cultural Event Discovery) idea depends on CultureWorks/Localist as the structured data source. There is no public alternative. A single partnership agreement with CultureWorks would unlock three ideas simultaneously (Weekend Culture SMS, Vecina, and a refocused What's On RVA). Without it, PS1 ideas are data-orphaned.

### 3. No Structured Story Corpus Exists for PS2

PS2 (Resident Stories as Civic Insight) has the deepest civic need but the weakest data foundation. Every PS2 idea that scores below B does so because it depends on a story archive that doesn't exist. The one exception is Public Comment Atlas, which cleverly redefines "resident stories" as "public comments already in Legistar" — sidestepping the data creation problem entirely.

### 4. The Fulton Oral History Map Is Deceptively Strong

It scores Tier A not because it's ambitious but because it's *finished*. A completed oral history project produced structured data; a hackathon team built a working map. The path to launch is hosting and polish, not new data collection. The lesson: scope to existing data, ship something real.

### 5. Hardware Ideas Don't Survive This Rubric

The Pop-Up Kit and Displacement Memory Archive are important civic work, but they are community organizing projects with hardware logistics — not software products that can be automated and maintained at low cost. They need grant funding and staff, not a hackathon prototype. Teams drawn to these ideas should understand they're proposing to build an organization, not an app.

### 6. AI Policy Creates a Real Gate for Chatbot Features

What's On RVA's AI chat assistant and any future LLM-powered features require DIT review under Richmond's AI policy. This isn't a blocker — the policy explicitly permits chatbots and data analysis — but it adds a review cycle that teams should account for in their timeline. Ideas that avoid AI features ship faster.
