# Gap Analysis — Vecina

**Pillar:** A City That Tells Its Stories
**Problem Statement (verbatim):** "Aggregate Richmond's arts and cultural events into one discoverable place."
**Demo:** Vecina (Shatij Haroud and Harshit Kohale)
**Primary User:** Richmond resident who wants to discover arts and cultural events in their neighborhood without checking multiple platforms.
**Pain:** Richmond's arts event information is fragmented across 12+ uncoordinated channels. No single platform combines comprehensive listings with neighborhood-first discovery and map-based navigation. Residents spend 20–30 minutes cross-referencing tabs or give up entirely.
**Desired Outcome:** One place where any Richmond resident can find nearby arts and cultural events — filtered by time, type, and neighborhood — with real-time data from a trusted source.

---

## Data Source Map

| Data Claim in Demo | Real or Synthetic? | Source | Owner | Access | Cadence | Notes |
|---|---|---|---|---|---|---|
| Event listings pulled from CultureWorks | **Real — confirmed in demo** | CultureWorks (calendar.richmondcultureworks.org) | CultureWorks / Localist platform | Caching layer (method unspecified — API, scrape-with-permission, or feed) | Near real-time via cache | **This is the critical differentiator.** Vecina is the only PS1 demo that names and uses a confirmed, authoritative data source. CultureWorks maintains the most comprehensive structured arts dataset in Richmond: 478 Exhibits, 252 Music, 93 Theatre, with Region/Audience/Topic facets (`C2_services_existing_aggregators.md`). |
| Time-based filtering (today, this week, this weekend, upcoming) | **Real — built on CultureWorks data** | Derived from event start/end times in CultureWorks feed | CultureWorks | Via cached data | Dependent on cache refresh | Filters work because the underlying data has structured date fields. CultureWorks' Localist platform enforces date structure on submissions. |
| Event type filtering (theater, music, visual art) | **Real — built on CultureWorks data** | Derived from CultureWorks Topic/Category tags | CultureWorks | Via cached data | Dependent on cache refresh | CultureWorks exposes granular Topic tags (Visual Arts 487, Performing Arts 80). Filter quality depends on how consistently organizers tag their submissions. |
| Neighborhood filtering (e.g., Jackson Ward, The Fan) | **Real — built on CultureWorks data** | Derived from CultureWorks Region facets | CultureWorks | Via cached data | Dependent on cache refresh | CultureWorks exposes Region facets (Downtown, Fan, Chesterfield, etc.). Neighborhood granularity depends on how CultureWorks defines regions — may not match how residents think of their neighborhoods. |
| Map view with Google Maps integration | **Real — demonstrated** | Google Maps Embed API + geocoded event locations | Google (Maps API) | API key | Real-time | Each event shows an embedded Google Maps view of its location. This is a stronger implementation than a pin-on-Leaflet approach — it gives users directions-ready context without leaving the platform. |
| Link back to CultureWorks for event detail | **Real — demonstrated** | Direct URL link per event | CultureWorks | Public URL | N/A | Vecina does not try to replicate event detail pages. It links back to CultureWorks, which preserves the authoritative source and avoids data staleness on the detail layer. Smart architectural choice. |

### Gaps Requiring Clarification
- **CultureWorks data access method:** Is Vecina using an official Localist API, an RSS/ICS export, or permitted scraping? The access method determines sustainability. A formal data partnership is more durable than scraping.
- **Cache refresh cadence:** How often does the cache update? Hourly? Daily? If daily, evening events added that morning could be missed.
- **CultureWorks coverage limits:** CultureWorks is the best arts dataset in Richmond, but it's not complete. Events that only exist on Facebook, Eventbrite, or individual venue websites are missing. Flagship institutions using ETIX (Richmond Ballet), proprietary ticketing (Virginia Rep), or Spektrix (Modlin Center) may not appear in CultureWorks (`D1_data_eventbrite.md`).
- **Google Maps API costs:** The embedded Maps per event is a strong UX choice but has cost implications at scale. What's the pricing tier?

---

## Gap Analysis by JTBD

### Job 1: Resident who wants one place to find what's happening
**Coverage: Strong**

What works:
- **Real, authoritative data source.** Vecina is the only PS1 demo connected to CultureWorks — the most comprehensive structured arts dataset in Richmond. This directly addresses the core aggregation problem (P1.1).
- **Neighborhood-first filtering** addresses the map-based discovery gap (P1.5) that only Richmond Family Magazine currently offers among existing platforms. Making neighborhood the primary filter reframes discovery from "what's happening in Richmond" to "what's happening near me."
- **Time/type filters** enable the planning workflow residents actually need — answering "what theater is in the Fan this weekend?" in one action rather than cross-referencing tabs.
- **Map view with embedded Google Maps** goes beyond pin-dropping. Users get directions-ready context per event, reducing the friction between discovery and attendance.
- **Links back to CultureWorks** for detail pages avoid data staleness on the detail layer and preserve the authoritative source. This is architecturally wise — Vecina owns discovery, CultureWorks owns detail.

What's missing:
- **Single-source limitation.** CultureWorks is the best source but not complete. Events on Eventbrite-only, Facebook-only, or standalone venue websites are missing. Flagship institutions using non-Localist ticketing (Richmond Ballet/ETIX, Virginia Rep/proprietary, Modlin Center/Spektrix) may have gaps (`D1_data_eventbrite.md`).
- **No price filtering.** What's On RVA offers free/paid filtering. Vecina does not. For budget-conscious residents, this matters.
- **No conversational or serendipitous discovery.** Vecina is filter-first — users must know what they're looking for (neighborhood, type, time). There's no equivalent of What's On RVA's "What can I do tonight?" for users who don't know what they want.
- **No event freshness indicator.** The demo doesn't show how cancelled or rescheduled events propagate through the cache.

**Gap fixable or fundamental?** The single-source limitation is fixable by adding supplementary feeds (Style Weekly ICS, Eventbrite API) alongside CultureWorks. The filter-first design is a deliberate architectural choice, not a gap — but adding a "surprise me" or "tonight's picks" feature would serve the browsing use case.

### Job 2: Artist or venue operator who can't reach new audiences
**Coverage: Partial (via proxy)**

Vecina inherits CultureWorks' submission infrastructure. Artists and venues who already submit to CultureWorks automatically appear on Vecina. This is a significant advantage over building a new submission pipeline from scratch.

What's missing:
- **No direct submission pathway on Vecina.** Artists who don't know about CultureWorks can't add events to Vecina. A "List your event" link that directs to CultureWorks' submission form would bridge this gap without duplicating infrastructure.
- **Solo artists with zero infrastructure (P2.4)** are unlikely to navigate CultureWorks' submission process. Vecina doesn't address this segment.

**Gap fixable or fundamental?** Fixable. Adding a prominent "Submit via CultureWorks" link is trivial. Addressing solo artists requires a lower-friction intake form, which is a longer-term investment.

### Job 3: CultureWorks or City staffer who needs a unified view
**Coverage: Not Directly Addressed — But Has the Strongest Foundation**

Vecina doesn't show an admin dashboard or coverage analytics. However, because it's built on CultureWorks data with neighborhood-level filtering, it's the closest of the three demos to producing the geographic event density analysis that CultureWorks and City staff currently lack (P3.1). A neighborhood-by-neighborhood event count would be a byproduct of the existing architecture.

**Gap fixable or fundamental?** Fixable, and Vecina's architecture makes it the easiest of the three demos to extend toward this use case.

---

## Opportunities

### Opportunity 1: Formalize the CultureWorks Data Partnership
Vecina's single most valuable asset is its connection to CultureWorks. The immediate next step is formalizing this into a data sharing agreement — moving from "we pull their data via caching" to "CultureWorks endorses Vecina as a discovery front end." This protects against access disruption, opens the door to richer data fields (accessibility tags, audience filters), and positions Vecina as CultureWorks' community-facing discovery layer rather than an unauthorized consumer.

**Dependencies:** Contact CultureWorks program staff; propose terms (attribution, link-back, no data modification); clarify Localist API vs. scraping.

### Opportunity 2: Add Supplementary Data Sources for Coverage Breadth
CultureWorks is necessary but not sufficient. Adding Style Weekly's ICS feed (confirmed machine-readable, `D3_data_rss_calendar_feeds.md`), Richmond Symphony's ICS feed, and Eventbrite's API would close the flagship institution gap and capture events that bypass CultureWorks' submission process. Deduplication (match on normalized `title + start_time + venue`) would be needed.

**Dependencies:** ICS parsing implementation; Eventbrite OAuth setup; deduplication logic; decision on whether supplementary events link back to their source or to a Vecina detail page.

### Opportunity 3: Neighborhood Equity Dashboard
Vecina's neighborhood-first architecture could produce the first geographic equity analysis of Richmond's arts event distribution. A simple dashboard showing event counts per neighborhood over time would reveal which communities are underserved by the arts ecosystem — data that CultureWorks, the City, and arts funders currently lack (P3.1, P4.1). This transforms Vecina from a consumer tool into an institutional resource.

**Dependencies:** Neighborhood boundary definitions (GIS or ZIP-code proxy); event count aggregation; time-series storage.
