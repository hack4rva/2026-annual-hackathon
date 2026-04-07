# Innovation Analysis: Vecina

## 1. Blue Ocean Reframing (ERRC Grid)

**Core assumption challenged:** Event discovery requires a destination website or app that users must actively visit.

| Action | Element | Rationale |
|--------|---------|-----------|
| **Eliminate** | Manual event submission forms | CitySpark patrols 100,000+ sites automatically; manual submission depresses calendar fill rates and adoption |
| **Eliminate** | Single-source dependency (e.g., Facebook Events only) | Facebook Graph API restrictions since 2018 block automated extraction; relying on it is a dead end |
| **Reduce** | Calendar-style UI complexity | Users don't want to browse a grid of 500 events; reduce to curated, filtered views by neighborhood and interest |
| **Reduce** | Admin moderation burden | Use feed precedence rules (Localist model) and duplicate warnings to automate 80% of quality control |
| **Raise** | SEO-first single-event pages with schema.org markup | University of Louisville saw 7x traffic lift moving to Localist with schema.org; Richmond needs individual event pages indexable by Google |
| **Raise** | Outbound syndication to partner sites | Artsopolis powers Visit Milwaukee and Downtown Sacramento via XML/RSS/WordPress plugins; Vecina should feed 10+ Richmond partners, not just host events |
| **Create** | Neighborhood-scoped event feeds | Create per-neighborhood ICS/RSS feeds that civic associations, NextDoor groups, and church bulletins can embed — making Vecina invisible infrastructure, not a destination |
| **Create** | CultureWorks integration as canonical Richmond source | Formalize a single CultureWorks partnership to unlock ICS/JSON feeds; this same pipe serves Weekend Culture SMS and What's On RVA |

**Key reframe:** Vecina should be Richmond's event *plumbing*, not another event *website*. The value is in aggregation, deduplication, and syndication — not in being the place people go.

## 2. Rapid Ideation (Crazy 8s)

| # | Idea | Provocation Level |
|---|------|-------------------|
| 1 | **ICS Feed Aggregator + Dedup Engine** — Ingest CultureWorks, Eventbrite, Ticketmaster, venue Google Calendars. Dedup using title/date/venue matching. Publish a single canonical feed. | Practical |
| 2 | **Neighborhood Event Widgets** — Embeddable JavaScript widgets that civic associations drop into their WordPress sites showing "This Weekend in Church Hill" or "This Weekend in Carytown." | Practical |
| 3 | **Anti-Calendar: Random Event Generator** — "I'm bored, surprise me." One button returns a single random event happening within 3 miles in the next 48 hours. Eliminates choice paralysis. | Provocative |
| 4 | **Event Equity Heatmap** — Map every event by ZIP code. Overlay median income and transit access. Publicly show which neighborhoods are event deserts. Force a conversation about cultural equity. | Provocative |
| 5 | **Venue ICS Health Dashboard** — Scrape the top 50 Richmond venues. Show which publish ICS feeds, which are broken, which are Facebook-only. Public accountability for discoverability. | Moderate |
| 6 | **SMS-Forward Bridge** — Any Vecina event can be shared to a phone number via SMS with a single click, bridging the digital divide for residents without smartphones or data plans. | Moderate |
| 7 | **Event Data API for City Staff** — Expose a REST API that Parks & Rec, libraries, and planning staff can query: "How many cultural events happened within 0.5 miles of this proposed development site in the last 12 months?" | Moderate |
| 8 | **"Ghost Event" Detector** — Flag events that were listed but had zero check-ins, reviews, or social mentions. Surface phantom events to improve data quality and trust. | Provocative |

## 3. Rapid Design Sprint

**Problem sentence:** Richmond residents miss cultural events because listings are scattered across CultureWorks, Facebook, Eventbrite, venue sites, and word-of-mouth — and no single source aggregates, deduplicates, and pushes them out to where residents already are.

**User journey (5 steps):**
1. Resident sees a "This Weekend in Jackson Ward" widget on their civic association's website (or receives a neighborhood-scoped ICS feed in their calendar app)
2. Clicks an event → lands on a schema.org-marked single-event page with venue, time, cost, and a map
3. Adds to personal calendar with one click (ICS export)
4. Optionally shares via SMS to a friend who doesn't use the web
5. Post-event, the system logs engagement to calculate neighborhood coverage metrics

**Prototype shape:** A static site (Next.js or Hugo) that ingests CultureWorks ICS + Eventbrite API, deduplicates by title/date/venue fuzzy match, and outputs: (a) single-event pages with JSON-LD schema.org, (b) per-neighborhood RSS/ICS feeds, (c) an embeddable widget script. No user accounts. No app.

**First test:** Deploy for one neighborhood (e.g., Carytown). Embed the widget on the Carytown Merchants Association site. Measure: events ingested, widget impressions, ICS feed subscribers, and click-through to event pages over 4 weeks.

## 4. Opportunity Mapper

### Opportunity 1: Invisible Infrastructure for Richmond's Cultural Ecosystem

| Dimension | Detail |
|-----------|--------|
| **User** | Civic associations, neighborhood blogs, small venue operators |
| **Outcome** | Embed a live, auto-updating event feed on their existing site without maintaining it |
| **Workflow** | Vecina aggregates → deduplicates → generates embeddable widget/feed → partner sites display |
| **Dependencies** | CultureWorks API/ICS access; Eventbrite API key; 10+ partner sites willing to embed |
| **Richmond relevance** | CultureWorks already serves as Richmond's arts council event hub; formalizing API access unlocks Weekend Culture SMS and What's On RVA simultaneously (Bundle 7) |

### Opportunity 2: SEO-Driven Event Discovery

| Dimension | Detail |
|-----------|--------|
| **User** | Residents searching "things to do in Richmond this weekend" on Google |
| **Outcome** | Richmond's own event pages appear in Google Events rich results, not Eventbrite or Facebook |
| **Workflow** | Vecina publishes single-event pages with schema.org Event markup → Google indexes → resident discovers via search |
| **Dependencies** | Schema.org implementation; unique URLs per event; sufficient crawl frequency |
| **Richmond relevance** | University of Louisville saw calendar traffic jump from 25K/year to 13K-14K/month with this approach; Richmond has no equivalent today |

### Opportunity 3: Event Equity Measurement

| Dimension | Detail |
|-----------|--------|
| **User** | City staff, Parks & Rec, cultural equity advocates |
| **Outcome** | Quantifiable data on which neighborhoods are event-rich vs. event-deserts |
| **Workflow** | Geocode all events → join to census tracts → compute events/1,000 residents → overlay income/transit |
| **Dependencies** | Geocoding pipeline; census tract boundaries; ACS demographic data |
| **Richmond relevance** | MAP pillar "A City That Tells Its Stories" implies equitable cultural access; this creates the measurement baseline |

## 5. Problem Scoping

| Dimension | Score (1-5) | Rationale |
|-----------|:-----------:|-----------|
| **Impact** | 4 | Directly addresses arts discovery fragmentation; affects every Richmond resident who searches for events |
| **Feasibility** | 5 | ICS/RSS ingestion is commodity tech; CultureWorks data exists; no blocked APIs |
| **Data readiness** | 4 | CultureWorks publishes feeds; Eventbrite API is open; Facebook is blocked but workaround exists via venue calendars |
| **Problem clarity** | 5 | Well-understood pain point: fragmented event listings across too many sources |
| **Demo-ability** | 4 | Can show live aggregated feed, embeddable widget, and schema.org-marked event page in a weekend |

**Weekend MVP shapes:**
- **Shape A (Aggregation Core):** Python script ingesting CultureWorks ICS + 5 Eventbrite venue feeds → deduplicate → output JSON → static site with event pages + schema.org markup. ~8 hours.
- **Shape B (Widget MVP):** Shape A + embeddable `<script>` tag generating a neighborhood event list. Deploy on one partner site. ~12 hours.
- **Shape C (Full Pipeline):** Shape B + per-neighborhood RSS/ICS output feeds + basic event equity heatmap using geocoded events overlaid on census tracts. ~20 hours.

## 6. Assumption Mapping

| # | Assumption | Risk (1-5) | Uncertainty (1-5) | R × U | Validation method |
|---|-----------|:----------:|:-----------------:|:-----:|-------------------|
| 1 | CultureWorks will provide API/ICS access for aggregation | 5 | 3 | 15 | Direct conversation with CultureWorks; check if ICS feed is already public |
| 2 | Venue calendars publish parseable ICS feeds | 3 | 4 | 12 | Audit top 30 Richmond venues for ICS/RSS availability |
| 3 | Deduplication by title/date/venue fuzzy match is accurate enough | 4 | 3 | 12 | Run dedup algorithm on 500 test events; measure false positive/negative rates |
| 4 | Civic associations will embed widgets on their sites | 4 | 3 | 12 | Ask 3 association leaders if they'd embed; test with Carytown Merchants |
| 5 | Schema.org markup will produce Google Events rich results within weeks | 2 | 3 | 6 | Google Search Console validation after deploying 50 event pages |
| 6 | Residents prefer neighborhood-scoped feeds over citywide calendars | 3 | 4 | 12 | A/B test: citywide vs. neighborhood feed; measure click-through rates |
| 7 | Facebook Events data gap is acceptable if other sources are strong | 3 | 2 | 6 | Estimate percentage of Richmond events that are Facebook-only |

**Top 3 to validate first:**
1. **CultureWorks API access (R×U=15):** Without this, the entire aggregation premise weakens. Validate before writing code.
2. **Venue ICS feed availability (R×U=12):** If most venues don't publish feeds, the aggregation falls back to scraping, which is fragile.
3. **Deduplication accuracy (R×U=12):** Bad dedup destroys user trust. Test with real Richmond event data before launch.

---

## Key Takeaway

Vecina's strongest play is to become Richmond's event **plumbing** — not another event website. The research shows that automated aggregation (CitySpark's 100K+ site model), SEO-first architecture (Louisville's 7x traffic lift), and outbound syndication (Artsopolis powering partner sites via XML/RSS) are the three proven moves. Richmond's unique advantage is the CultureWorks partnership: one API agreement unlocks not just Vecina but also Weekend Culture SMS and What's On RVA. Build the aggregation engine first, the consumer-facing website second.
