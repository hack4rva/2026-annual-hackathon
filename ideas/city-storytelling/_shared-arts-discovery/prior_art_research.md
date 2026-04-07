# Prior Art Research — Arts & Cultural Event Discovery

**Pillar:** A City That Tells Its Stories
**Problem Statement:** Aggregate Richmond's arts and cultural events into one discoverable place.
**Applies to:** What's On RVA, Vecina, ExploreRVA
**Research Date:** April 1, 2026
**Method:** Synthesis of existing pillar research corpus (`pillar-repos/pillar-city-storytelling/research/`)

**Primary sources from existing corpus:**
- `E1_prior_art_arts_aggregators.md` — Global arts aggregation platforms (Artsy, ArtRabbit, etc.)
- `E4_prior_art_failures.md` — Why civic event platforms die (Yahoo Upcoming, Eventful, ghost calendars)
- `E5_prior_art_weekend_viable.md` — Highest-confidence 48-hour MVP patterns
- `C1_services_arts_orgs_landscape.md` — U.S. arts-service organizations (CRM, ticketing, funding)
- `C2_services_existing_aggregators.md` — Richmond's current event calendar ecosystem
- `C5_services_gaps.md` — Crack points where Richmond residents and organizers fall through
- `D1_data_eventbrite.md` — Eventbrite API capabilities, limits, and Richmond coverage gaps
- `D2_data_social_media_events.md` — Facebook, Instagram, Nextdoor, Meetup API realities
- `D3_data_rss_calendar_feeds.md` — ICS and RSS feeds available from Richmond arts organizations
- `A1_problem_landscape_arts_discovery.md` — Richmond's fragmented discovery channels

---

## 1. Richmond's Existing Aggregator Ecosystem

Richmond has no single comprehensive arts discovery platform. The ecosystem fragments across tourism boards, editorial outlets, sector calendars, and social media — each serving different missions with different inclusion rules.

### CultureWorks: The Closest Thing to Authoritative

CultureWorks (calendar.richmondcultureworks.org) operates the most structurally complete arts dataset in Richmond, powered by the Localist platform. It exposes 478 Exhibits, 252 Music events, and 93 Theatre listings with granular Region facets (Downtown, Fan, Chesterfield), Audience filters (Wheelchair Accessible 462, Family Friendly 295), and Topic tags (Visual Arts 487, Performing Arts 80). It includes a personalized email digest and a direct submission form. However, a broken `json-ld` tag (`Liquid syntax error: Cannot build json-ld tag`) prevents Google from properly indexing its events, severely reducing organic discoverability. The platform also lacks editorial curation — it's a database, not a guide (`C2_services_existing_aggregators.md`).

### Style Weekly → VPM Artsline: The Only Automated Syndication

Style Weekly's event calendar is the only Richmond platform with an automated downstream feed: submitting to Style Weekly automatically populates VPM Artsline, Richmond's public radio arts broadcast. Style Weekly exposes confirmed ICS endpoints (including venue-specific feeds like `/venue/visual-arts-center-of-richmond/?ical=1`) and daily-dated calendar views. This makes Style Weekly the backbone of Richmond's arts syndication, but it also creates a single point of failure — organizations that don't use this specific submission form miss both print and broadcast coverage (`C5_services_gaps.md`, `D3_data_rss_calendar_feeds.md`).

### Official Tourism and Downtown Calendars: Gatekeepers, Not Directories

VisitRichmond and Venture Richmond serve tourism and downtown promotion respectively, not comprehensive discovery. VisitRichmond requires 3-week lead times, 650×650px images, and explicitly excludes fundraisers, classes, and community meetings. Venture Richmond is limited to the Downtown Service District, requires 1000×1000px images, and similarly excludes non-leisure events. These exclusions systematically remove grassroots and neighborhood arts programming from the city's most visible promotional channels (`A1_problem_landscape_arts_discovery.md`, `C5_services_gaps.md`).

### Editorial and Media Outlets: Curators, Not Inventories

Richmond Magazine Datebook, RVAHub, RVA Magazine, and Axios Richmond provide curated weekend picks rather than searchable databases. Their value is editorial trust and reach, but they miss the long tail of indie events. Style Weekly's calendar can appear sparse on given dates (sometimes just 2 listings). None of these offer structured data feeds suitable for automated ingestion (`B1_users_arts_curious_resident.md`).

### Reddit r/rva: The Unstructured Safety Net

The r/rva Weekend Event Thread (198,000+ member community) routinely captures late-breaking, niche, and officially excluded events through user comments with 30–50 upvotes. It functions as Richmond's de facto comprehensive arts feed — but in unstructured comment format that cannot be programmatically ingested (`A1_problem_landscape_arts_discovery.md`).

### The dorichmond.com Vacuum

The DoStuff network operates aggregators in 22+ cities driving 60M event-goers annually. Richmond's equivalent (dorichmond.com) is registered through October 2026 but currently hosts no accessible event listings — leaving a vacuum for a modern, mobile-friendly, cross-genre aggregator (`C2_services_existing_aggregators.md`, `B1_users_arts_curious_resident.md`).

---

## 2. Data Source Feasibility for Aggregation

### Tier 1: Confirmed, Machine-Readable Feeds

| Source | Format | Endpoint Pattern | Quality | Notes |
|--------|--------|------------------|---------|-------|
| **Richmond Symphony** | ICS | `/calendar/list/?ical=1` | High (date, venue, description) | Confirmed on both `.com` and `.org` domains; archives back to 2015 require time-bounding (`D3_data_rss_calendar_feeds.md`) |
| **Style Weekly (global)** | ICS | `/events/today/?hide_subsequent_recurrences=1&ical=1` | High | Best scoped with "today/upcoming" to limit payload (`D3_data_rss_calendar_feeds.md`) |
| **Style Weekly (per venue)** | ICS | `/venue/{name}/?...&ical=1` | Medium-High | Backfills orgs without direct feeds (e.g., Visual Arts Center) (`D3_data_rss_calendar_feeds.md`) |
| **CultureWorks** | Localist/scrape | calendar.richmondcultureworks.org | High (structured, filterable) | Formal export may require partnership agreement (`D2_data_social_media_events.md`) |

### Tier 2: Available but Gated or Noisy

| Source | Format | Access | Quality | Notes |
|--------|--------|--------|---------|-------|
| **Eventbrite** | REST API | OAuth 2.0 required; 50 items/page | Medium (indie/community strong; flagship institutions absent) | Location search may be deprecated — fallback to category + venue.city post-filter needed. Missing: Richmond Ballet (ETIX), Virginia Rep (proprietary), Modlin Center (Spektrix) (`D1_data_eventbrite.md`) |
| **Meetup** | OAuth API | OAuth required | Low for arts (skews tech/hobby) | Timebox to 2 hours max; conditional use only (`D2_data_social_media_events.md`) |

### Tier 3: Closed or Infeasible

| Source | Status | Reason |
|--------|--------|--------|
| **Facebook Events** | Closed | Graph API restricts event access to Marketing Partners only since 2018. App Review takes 72 hours minimum, often weeks. Do not plan to ingest (`D2_data_social_media_events.md`) |
| **Instagram** | No event objects | Media-only API. Use oEmbed for promotional display, not structured event data (`D2_data_social_media_events.md`) |
| **Nextdoor Events** | Coming soon | Developer access gated by application; Events endpoint officially "coming soon" (`D2_data_social_media_events.md`) |

### Flagship Institution Coverage Gaps

Major institutions bypass Eventbrite entirely, creating blind spots for any single-source aggregator:

| Institution | Ticketing Platform | Aggregator Impact |
|-------------|-------------------|-------------------|
| **Richmond Ballet** | ETIX | Not on Eventbrite; requires direct ETIX integration or ICS probe (`D1_data_eventbrite.md`) |
| **Virginia Repertory Theatre** | Proprietary (tickets.va-rep.org) | Custom calendar, no visible ICS feed; may require HTML scraping (`D1_data_eventbrite.md`, `D3_data_rss_calendar_feeds.md`) |
| **Modlin Center (Univ. of Richmond)** | Spektrix (since Jan 2026) | Requires Spektrix public feed integration (`D1_data_eventbrite.md`) |
| **VMFA, ICA at VCU** | Institutional calendars | Not confirmed in ICS sweeps; require endpoint probing (`D3_data_rss_calendar_feeds.md`) |

---

## 3. National Prior Art: What Works and What Dies

### Platforms That Survived

**Eventful → CBS Local Media (acquired 2014):** Survived by building a "Demand It" feature that let fans request concerts in their cities, turning passive consumers into active participants. Reached 21 million registered users. The feedback loop — users shape the calendar, not just read it — was the key differentiator from platforms that merely listed events (`E4_prior_art_failures.md`).

**ArtRabbit (Berlin, Europe-focused):** Free event-discovery platform with 30,000+ listed events and tools for curators and artists. Survives by serving a specific niche (contemporary art) with a clear value proposition for both discovery and listing (`E1_prior_art_arts_aggregators.md`).

**Cvent (Nasdaq: CVT):** Went public via SPAC merger. Survived by adapting to hybrid virtual/in-person event models for 21,000 enterprise customers. Demonstrates that platforms must evolve with gathering formats (`E4_prior_art_failures.md`).

### Platforms That Died

**Yahoo Upcoming (shut down April 2013):** Popular social event calendar killed during Yahoo's corporate consolidation to focus on core mobile apps. Users had to download their data before a hard deadline. Core lesson: civic tools relying on corporate-owned APIs face sudden deprecation risk (`E4_prior_art_failures.md`).

**EveryBlock / Citygram forks:** Hyperlocal news and notification platforms that failed due to (a) lack of stable city-supported data feeds causing data drift, (b) no ongoing maintainers or sustainable funding, and (c) volunteer burnout. The civic tech graveyard is full of aggregators that launched at hackathons but died within months when the founding team moved on (`E4_prior_art_failures.md`).

### Survival Pattern

Tools that survive share: (a) durable data pipelines connected to official, stable feeds; (b) institutional stewardship or a dedicated maintainer; (c) clearly defined scope addressing real user demand; (d) robust deployment/hosting. Tools that die share: (a) dependency on unstable third-party APIs; (b) no sustainable funding model; (c) passive consumption with no feedback loop; (d) treating accessibility as a post-launch add-on (`E4_prior_art_failures.md`).

---

## 4. Arts-Sector Technology Landscape

The U.S. arts-service sector is moving toward integrated CRM/ticketing hybrids. The dominant platforms — Tessitura (nonprofit CRM for arts), Blackbaud Altru (museum ticketing/membership), Spektrix (cloud ticketing CRM, 16,000 users), and Neon One Arts People (performing arts end-to-end) — each maintain proprietary data stores. CultureWorks uses Localist. This fragmentation means there is no standardized data interchange format across Richmond's arts institutions (`C1_services_arts_orgs_landscape.md`).

The 2023 AudienceView data breach (compromising student and patron data across multiple universities, resulting in a $435,000 class action settlement) underscores the security risk of centralizing patron data in third-party ticketing platforms — a relevant consideration for any aggregator that handles user accounts or personalization (`C1_services_arts_orgs_landscape.md`).

---

## 5. Weekend-Viable Build Patterns

### Highest-Confidence MVP: Calendar Syndicator, Not New Calendar

The research strongly recommends against building "another manual submission form." The viable hackathon path is a unified discovery layer that ingests existing feeds and adds the UX that's missing: map-first browsing, neighborhood filtering, and newcomer onboarding (`C2_services_existing_aggregators.md`, `E5_prior_art_weekend_viable.md`).

### Recommended Architecture

| Component | Approach | Risk Level |
|-----------|----------|------------|
| **Primary data** | ICS ingestion from Style Weekly + Richmond Symphony; Localist/CSV from CultureWorks | Low |
| **Secondary data** | Eventbrite API (OAuth, 50/page, location fallback) | Medium |
| **Stretch data** | Per-venue HTML scraping for institutions without feeds | Medium-High |
| **Map layer** | Leaflet (zero API keys) with GeoJSON markers | Low |
| **Deduplication** | Match on normalized `title + start_time + venue` | Medium |
| **Fallback** | Hardcoded JSON of 20 seed events for demo resilience | Low |

### Critical Risk Mitigations

- **API deprecation:** Cache all external data locally; build a "Demo Mode" toggle that disconnects live APIs and loads from static JSON (`E4_prior_art_failures.md`, `E5_prior_art_weekend_viable.md`).
- **Recurrence bloat:** ICS feeds (especially Richmond Symphony) archive back to 2015. Enforce strict `DTSTART >= now` filters post-parse (`D3_data_rss_calendar_feeds.md`).
- **Eventbrite location search fragility:** Developer reports flag location-based search as potentially deprecated. Fallback: query by arts categories only, expand venue, post-filter by `venue.city == "Richmond"` (`D1_data_eventbrite.md`).
- **Social media walled gardens:** Do not attempt Facebook or Instagram event scraping — violates ToS and returns no structured data. Use oEmbed for promotional display only (`D2_data_social_media_events.md`).

### Parsing Stack

| Language | Libraries | Use |
|----------|-----------|-----|
| **Python** | `icalendar` + `recurring-ical-events` + `zoneinfo` | ICS parsing with recurrence expansion |
| **Node.js** | `node-ical` + `ical-expander` + `luxon` | ICS parsing with timezone-aware expansion |
| **Either** | `feedparser` (Python) / `rss-parser` (Node) | RSS fallback (limited event semantics) |

(`D3_data_rss_calendar_feeds.md`)

---

## 6. What the Hackathon Teams Should Know

### CultureWorks Is the Authoritative Source

Vecina's approach of pulling live data from CultureWorks is strategically sound — CultureWorks maintains the most comprehensive, structured arts dataset in Richmond. Any team building an aggregator should treat CultureWorks as the primary data backbone and supplement with ICS feeds and Eventbrite for coverage breadth (`C2_services_existing_aggregators.md`).

### The Real Problem Is Not Data Collection — It's Data Syndication

Richmond already has enough event data. The problem is that it's scattered across platforms with no shared standard, no automated syndication (except Style Weekly → Artsline), and no unified discovery UX. The winning approach is "partner for data, build for UX" — ingest existing feeds and add the map-first, filter-rich, newcomer-friendly interface that doesn't exist (`C2_services_existing_aggregators.md`, `C5_services_gaps.md`).

### The Feedback Loop Matters More Than the Feed

Eventful survived and Upcoming died because Eventful gave users agency ("Demand It") while Upcoming treated them as passive consumers. Teams should consider features that let residents actively shape the calendar — suggesting events, upvoting, requesting specific types of programming in their neighborhoods — rather than building yet another read-only listing page (`E4_prior_art_failures.md`).

---
