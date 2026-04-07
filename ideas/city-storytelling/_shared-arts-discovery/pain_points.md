# Pain Point Research — Arts & Cultural Event Discovery

**Pillar:** A City That Tells Its Stories
**Problem Statement:** Aggregate Richmond's arts and cultural events into one discoverable place.
**Applies to:** What's On RVA, Vecina, ExploreRVA
**Research Date:** April 1, 2026

**Evidence sources from existing corpus:**
- `A1_problem_landscape_arts_discovery.md` — Fragmented discovery channels, editorial gatekeeping, SEO failures
- `A4_problem_landscape_cultural_equity.md` — Funding inequity, workforce gaps, and policy fragmentation in U.S. arts
- `B1_users_arts_curious_resident.md` — Arts-curious resident persona, journey mapping, and fail points
- `B2_users_artist_venue.md` — Small venue and solo artist promotion friction and aggregation requirements
- `B5_users_digital_equity.md` — Digital divide user segments (Non-Users, Conditional Users, Full Users)
- `G3_risks_inclusion.md` — Geographic, linguistic, and digital access barriers in Richmond neighborhoods

---

## Pain Points by JTBD

### Job 1 — The Resident Who Wants One Place to Find What's Happening

**P1.1: 12+ Channels, Zero Coordination**
Richmond's arts event information lives across CultureWorks, Style Weekly, VPM Artsline, VisitRichmond, Venture Richmond, RVAHub, RVA Magazine, Richmond Magazine Datebook, Axios Richmond, Eventbrite, Reddit r/rva, Facebook, and individual venue websites. Each channel serves a different geographic scope, applies different inclusion criteria, and uses different submission paths. No platform aggregates across all of them. A resident planning a weekend must open 3–5 tabs, mentally deduplicate overlapping listings, and fill in gaps from social media — a process that takes 20–30 minutes and frequently results in missed events or decision paralysis (`A1_problem_landscape_arts_discovery.md`, `B1_users_arts_curious_resident.md`).

**P1.2: Official Calendars Exclude What Residents Want**
The platforms with the most visibility actively reject the events residents care about. VisitRichmond excludes fundraisers, classes, and community meetings (high visitor appeal only; 3-week lead time; 650×650px image required). Venture Richmond is limited to the Downtown Service District and similarly rejects non-leisure events. Visit Hanover excludes classes and educational workshops with a 1-month preferred lead time. A resident looking for a weekend pottery class, a neighborhood theater fundraiser gala, or a pop-up art market in Scott's Addition will not find any of them on the city's primary promotional calendars (`A1_problem_landscape_arts_discovery.md`).

**P1.3: Eventbrite Buries Fine Arts Under Commercial Noise**
Searching Eventbrite for Richmond arts yields a feed dominated by nightlife events, recurring brunches, karaoke nights, and paid promotions. Institutional arts events — ICA exhibitions, VMFA curator lectures, Richmond Symphony concerts — are buried or absent entirely because flagship institutions use independent ticketing platforms (ETIX, Spektrix, proprietary systems). The platform's pay-to-promote model further biases visibility toward commercial events over cultural programming (`B1_users_arts_curious_resident.md`, `A1_problem_landscape_arts_discovery.md`).

**P1.4: Out-of-Market Noise from Venue Networks**
Major venue networks like The Broadberry syndicate events across multiple states, showing listings in Norfolk, Virginia Beach, Raleigh NC, and Huntington WV alongside Richmond events. Without strict geographic filtering, residents waste time scrolling past irrelevant out-of-market content. No current Richmond platform applies rigorous MSA geo-fencing to venue network feeds (`B1_users_arts_curious_resident.md`).

**P1.5: No Map-Based Neighborhood Discovery**
Only Richmond Family Magazine currently emphasizes a map view ("Events by Location"). Neither CultureWorks, Style Weekly, Eventbrite, nor VisitRichmond offers map-first browsing by neighborhood. Residents cannot answer "What's happening within walking distance tonight?" without manually checking venue addresses across multiple sites. For new-to-Richmond residents unfamiliar with neighborhood geography, this is a complete blocker (`C2_services_existing_aggregators.md`, `B1_users_arts_curious_resident.md`).

**P1.6: CultureWorks' SEO Is Broken**
The CultureWorks calendar — the most comprehensive arts dataset in Richmond — displays a live code error: `Liquid syntax error: Cannot build json-ld tag, event_item is unknown`. This broken JSON-LD markup prevents Google from properly indexing CultureWorks events in its native event discovery widgets. Residents searching Google for "Richmond arts events this weekend" are less likely to find CultureWorks results, reducing discoverability for the region's best arts data (`A1_problem_landscape_arts_discovery.md`, `C2_services_existing_aggregators.md`).

### Job 2 — The Artist or Venue Operator Who Can't Reach New Audiences

**P2.1: Submission Fatigue Across Incompatible Portals**
Promoting a single event in Richmond requires navigating 4–6 distinct submission portals with different image requirements (650×650 for VisitRichmond, 1000×1000 for Venture Richmond, no text-heavy posters for both), different lead times (3 weeks for VisitRichmond and Venture Richmond, 1 month for Visit Hanover), and different editorial criteria. Only the Style Weekly → VPM Artsline path is automated; every other platform demands manual re-entry. After 2–3 submissions, most small organizations stop — meaning their events never reach the audiences who rely on the remaining platforms (`C5_services_gaps.md`, `A1_problem_landscape_arts_discovery.md`, `B2_users_artist_venue.md`).

**P2.2: No Sitewide Feeds from Small Venues**
Small Richmond venues (Gallery5, Firehouse Theatre, Byrd Theatre) maintain per-event Google Calendar and ICS links but rarely expose sitewide RSS or iCal feeds. An aggregator cannot passively subscribe to a venue's full calendar — it must either scrape individual event pages, parse per-event ICS exports, or rely on an intermediary like Style Weekly's venue-specific ICS feeds. This fragmentation increases integration complexity and raises the risk of missed or stale listings (`D3_data_rss_calendar_feeds.md`, `B2_users_artist_venue.md`).

**P2.3: Reschedule Propagation Failure**
When a venue reschedules an event (commonly due to weather), it must manually update every platform individually. Gallery5 has publicly documented weather-related rescheduling on its calendar. If an aggregator fails to detect the change, audiences show up at the wrong time, eroding trust in both the venue and the aggregator. No current Richmond platform implements automated change detection or freshness scoring (`B2_users_artist_venue.md`, `C2_services_existing_aggregators.md`).

**P2.4: Solo Artists Have Zero Infrastructure**
Solo artists in Richmond lack the dedicated websites, ticketing platforms, and administrative capacity of established venues. They rely primarily on Instagram for awareness and a host venue's Eventbrite page for ticketing. They have no web administration capacity to maintain feeds or structured data. Any aggregator that requires manual data entry, RSS feed maintenance, or dashboard management will fail to capture this segment of Richmond's arts ecosystem — which represents a significant share of the city's grassroots cultural life (`B2_users_artist_venue.md`).

### Job 3 — The CultureWorks or City Staffer Who Needs a Unified View

**P3.1: No Way to Measure What's Missing**
No one in Richmond tracks the geographic or demographic distribution of aggregated arts events. CultureWorks maintains the most comprehensive dataset but cannot see what it's missing — events that only live on Facebook, in newsletter-first venues, or on standalone Eventbrite pages for neighborhood organizations. Without a unified feed, it's impossible to quantify which neighborhoods, disciplines, or communities are underrepresented in the arts promotion ecosystem (`C5_services_gaps.md`, `A4_problem_landscape_cultural_equity.md`).

**P3.2: City Cultural Programs Don't Propagate**
The City of Richmond's Parks & Recreation Cultural Arts program pages on rva.gov lack outbound ICS or RSS feeds. City-produced events do not automatically appear on CultureWorks, Style Weekly, or any partner calendar. A City communications staffer who schedules a public art event must manually submit it to each platform — the same submission fatigue that affects small organizations (`C5_services_gaps.md`).

**P3.3: Funding Equity Data Is Disconnected from Event Data**
National arts funding remains heavily skewed — the Helicon "Not Just Money" report documented a -10% shift toward equity over five years despite awareness efforts. POC staff represent 36% of museum employees nationally but only 22% of senior curatorial roles. In Richmond, there is no mechanism to connect arts event data (what's happening where) with funding and participation data (who's being served) to inform grant decisions or measure the impact of equity initiatives (`A4_problem_landscape_cultural_equity.md`).

---

## Pain Points by Equity and Access

### P4.1: API-Based Aggregation Reproduces Geographic Inequity

Arts organizations with maintained websites and Eventbrite presences cluster west of I-95 — Scott's Addition, Carytown, Shockoe Slip, Museum District. Neighborhood arts programming in the East End, Northside, and South Richmond is far less likely to have a digital footprint compatible with API aggregation. The Peter Paul Development Center (East End community hub) lacks a dedicated digital events API. The RVA East End Festival relies on a Facebook page and a Wix site. Events like the Northside Community Art Circle and "Hikayat: Into The Light" use standalone Eventbrite pages rather than integrated venue websites. An aggregator built solely on web scraping or Eventbrite will systematically underrepresent Black-led cultural programming (`G3_risks_inclusion.md`).

### P4.2: The Broadband Gap Aligns with the Cultural Programming Gap

Richmond's digital divide maps directly onto the neighborhoods with the most untold cultural stories. ZIP 23222 (Northside) has 23,162 broadband-connected households; ZIP 23220 (Fan/VCU) has 27,040. A web-only discovery tool effectively excludes the neighborhoods with the least digital access and the most underrepresented programming. The City has declared broadband a "public necessity," but no tract-level broadband-vs-arts-programming overlap analysis exists (`G3_risks_inclusion.md`, `B5_users_digital_equity.md`).

### P4.3: Elderly Residents Carry History but Can't Access Digital Tools

Residents aged 65+ — who carry irreplaceable neighborhood arts knowledge and cultural memory — have the lowest smartphone adoption rates. In ZIP 23223 (East End), 12.7% of the population is 65+. Web-form-based discovery tools, app-only experiences, and platforms requiring Google or Eventbrite logins will systematically exclude this population. Print integration (library kiosks, physical bulletin boards) and dial-in phone options are not post-launch add-ons — they are core accessibility requirements (`G3_risks_inclusion.md`, `B5_users_digital_equity.md`).

### P4.4: Non-English-Speaking Communities Are Invisible to English-Only Platforms

Richmond's growing Latinx and Vietnamese populations face language barriers that existing arts platforms ignore entirely. All current Richmond arts calendars (CultureWorks, Style Weekly, Eventbrite, VisitRichmond) are English-only. Story collection and event submission tools that assume English literacy will amplify voices already comfortable with civic engagement while systematically missing communities affected by displacement and institutional neglect (`G3_risks_inclusion.md`).

### P4.5: Universal Design Is Foundational, Not Optional

The Creative Doodle Book project demonstrated that accessibility must be integral to the product aesthetic, not a post-launch adaptation. Platforms that treat "universal design" as an add-on fail to reach learning disabled, autistic, and mobility-impaired participants. For Richmond's arts aggregator, WCAG 2.1 AA compliance, screen reader compatibility, and low-bandwidth modes are minimum requirements — not stretch goals (`E4_prior_art_failures.md`, `B5_users_digital_equity.md`).

---

## Severity Summary

| Pain Point | Affected JTBD | Severity | Addressable at Hackathon? |
|------------|---------------|----------|--------------------------|
| P1.1: 12+ channels, zero coordination | Job 1 | **Critical** | Yes — this is the core problem statement |
| P1.2: Official calendars exclude grassroots events | Job 1, Job 2 | **High** | Partially — can aggregate excluded categories from other feeds |
| P1.3: Eventbrite buries fine arts | Job 1 | **High** | Yes — category rebalancing and institutional feed prioritization |
| P1.4: Out-of-market noise | Job 1 | **Medium** | Yes — geo-fencing venue network feeds |
| P1.5: No map-based discovery | Job 1 | **High** | Yes — Leaflet map with geocoded venues |
| P1.6: CultureWorks broken SEO | Job 1, Job 3 | **Medium** | No — requires CultureWorks platform fix |
| P2.1: Submission fatigue | Job 2 | **High** | Partially — "submit once" prototype possible |
| P2.2: No sitewide venue feeds | Job 2 | **Medium** | Partially — use Style Weekly venue ICS as proxy |
| P2.3: Reschedule propagation failure | Job 2 | **Medium** | Partially — daily sync + change detection |
| P2.4: Solo artists have zero infrastructure | Job 2 | **Medium** | Partially — low-friction submission form |
| P3.1: No way to measure what's missing | Job 3 | **High** | Partially — geographic event heatmap from aggregated data |
| P3.2: City programs don't propagate | Job 3 | **Medium** | No — requires City IT action |
| P3.3: Funding equity disconnected from event data | Job 3 | **Medium** | No — requires institutional data sharing |
| P4.1: API aggregation reproduces geographic inequity | All | **Critical** | Partially — manual ingestion of Facebook-only events |
| P4.2: Broadband gap aligns with programming gap | All | **High** | Partially — SMS gateway, low-bandwidth mode |
| P4.3: Elderly exclusion from digital tools | All | **High** | Partially — print-friendly output, simple UI |
| P4.4: Non-English communities invisible | All | **High** | Partially — multilingual UI labels |
| P4.5: Universal design is foundational | All | **High** | Partially — WCAG compliance in build |

---
