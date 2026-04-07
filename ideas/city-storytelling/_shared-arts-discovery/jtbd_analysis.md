# JTBD Analysis — Arts & Cultural Event Discovery

**Pillar:** A City That Tells Its Stories
**Problem Statement (verbatim):** Arts & Cultural Event Discovery — Aggregate Richmond's arts and cultural events into one discoverable place.
**Applies to:** What's On RVA, Vecina, ExploreRVA
**Research Date:** April 1, 2026

---

## Jobs To Be Done

### Job 1 — The Resident Who Wants One Place to Find What's Happening
> "When I (a Richmond resident who enjoys art, music, and theater) want to know what's happening this weekend, I don't want to check five or more platforms — Instagram, email newsletters, Eventbrite, venue websites, Reddit — just to assemble a list of options. I want a single, current, comprehensive discovery experience so I can find events that match my interests, budget, and neighborhood without spending 20–30 minutes cross-referencing tabs."

**Current workaround:** Toggle between VisitRichmond, RVAHub, Eventbrite, CultureWorks, Style Weekly, Richmond Magazine Datebook, venue-specific Instagram accounts, and the r/rva Weekend Event Thread on Reddit. Cross-reference dates, prices, and venues manually. Miss events that only exist on Facebook or a venue's own site. Give up and stay home when the cognitive load is too high (`A1_problem_landscape_arts_discovery.md`, `B1_users_arts_curious_resident.md`).

**Pain:** Richmond's arts information lives across 12+ uncoordinated channels — tourism boards that exclude fundraisers and classes, downtown calendars limited to a single service district, editorial outlets that curate picks rather than comprehensive listings, and social media walled gardens that are algorithmically unreliable for chronological discovery (`A1_problem_landscape_arts_discovery.md`). No single platform combines CultureWorks' filtering depth with Eventbrite's real-time freshness and a map-based neighborhood view (`C2_services_existing_aggregators.md`). Official calendars enforce strict category exclusions (VisitRichmond rejects classes and fundraisers; Venture Richmond covers only downtown) and 3-week lead times that disqualify grassroots events (`A1_problem_landscape_arts_discovery.md`). The dorichmond.com domain — Richmond's would-be equivalent to DoStuff aggregators in other cities — is registered but inactive, leaving a vacuum (`C2_services_existing_aggregators.md`). Meanwhile, the CultureWorks calendar carries a broken JSON-LD tag that suppresses its events in Google search results, reducing organic discoverability for the most comprehensive arts dataset in the region (`C2_services_existing_aggregators.md`, `C5_services_gaps.md`).

### Job 2 — The Artist or Venue Operator Who Can't Reach New Audiences
> "When I (a Richmond artist, small venue operator, or grassroots arts organization) produce events but can't afford marketing beyond word-of-mouth, I want my events to be visible to people beyond my existing audience — without extra work, without learning new platforms, and without re-entering the same information into five different submission forms with different image sizes and lead-time rules."

**Current workaround:** Post to the venue's own website calendar and Eventbrite for ticketing. Manually submit to Style Weekly (which feeds VPM Artsline), then separately to VisitRichmond (requires 650×650px image, no text-heavy posters, 3-week lead time), Venture Richmond (requires 1000×1000px image, downtown only), and RVAHub. After 3–4 portals, stop and rely on Instagram and an email newsletter for the rest. Solo artists with no venue infrastructure skip formal submissions entirely and post only to social media (`B2_users_artist_venue.md`, `C5_services_gaps.md`, `A1_problem_landscape_arts_discovery.md`).

**Pain:** Richmond has no open, shared events data standard — only the Style Weekly → VPM Artsline syndication path is automated; every other platform requires manual re-entry with platform-specific asset rules (`C5_services_gaps.md`). Small organizations face "submission fatigue" after 2–3 portals and give up, meaning their events never reach the audiences who rely on the platforms they skipped (`A1_problem_landscape_arts_discovery.md`). Venues that reschedule due to weather must manually update every platform individually; if an aggregator displays the old time, audiences show up at the wrong moment and trust erodes (`B2_users_artist_venue.md`). Events in majority-Black neighborhoods (East End, Northside, South Richmond) are disproportionately invisible because they rely on Facebook pages and physical flyers rather than API-ready calendars, meaning any aggregator built solely on web scraping or Eventbrite will systematically underrepresent them (`G3_risks_inclusion.md`).

### Job 3 — The CultureWorks or City Staffer Who Needs a Unified View
> "When I (a CultureWorks program officer, City communications staffer, or arts funder responsible for promoting Richmond's cultural ecosystem) know that events are happening across hundreds of organizations but have no unified, real-time feed, I want an aggregated view of what's actually happening — across disciplines, neighborhoods, and price points — so I can inform grant decisions, target marketing resources, measure equity in arts access, and demonstrate the breadth of Richmond's cultural life to City leadership."

**Current workaround:** Rely on CultureWorks' own Localist-powered calendar (the region's most comprehensive arts dataset with 478 Exhibits, 252 Music events, and robust regional filters) and Style Weekly's event submissions. Manually cross-reference with Eventbrite, VisitRichmond, and individual venue websites to assess coverage. Lack any way to measure whether East End or Southside programming is proportionally represented. Use the Richmond 300 master plan survey as a proxy for participation demographics — 72% White respondents — knowing it doesn't reflect routine cultural engagement patterns (`C2_services_existing_aggregators.md`, `A4_problem_landscape_cultural_equity.md`).

**Pain:** CultureWorks maintains the best structured arts data in Richmond but cannot see what it's missing — events that only live on Facebook, in newsletter-first venues like The Byrd Theatre, or on standalone Eventbrite pages for neighborhood organizations. The City's own Cultural Arts program pages on rva.gov lack outbound ICS/RSS feeds, meaning city-produced events don't propagate to partner calendars (`C5_services_gaps.md`). No one tracks the geographic or demographic distribution of aggregated events, so there's no way to measure whether arts funding and promotion reach underserved neighborhoods. The broken JSON-LD on the CultureWorks calendar means the most comprehensive arts dataset in the region underperforms in Google search, reducing the return on all the curation work that organizations put into submitting events (`C2_services_existing_aggregators.md`). Flagship institutions like Richmond Ballet (ETIX), Virginia Repertory Theatre (proprietary ticketing), and the Modlin Center (Spektrix) bypass Eventbrite entirely, creating coverage gaps that no single-source aggregator can close (`D1_data_eventbrite.md`).

---

## Open Questions

### Data Questions
1. Can CultureWorks provide a structured data export (JSON, CSV, or ICS) from its Localist-powered calendar, or does ingestion require scraping with permission? What are the terms for a data-sharing partnership?
2. What is the actual schema and field completeness of CultureWorks' event data — do all listings include venue address, start/end time, price, and accessibility tags, or do fields vary by submitter?
3. How many Richmond events exist only on Facebook (no Eventbrite, no venue website calendar) and would be invisible to any API-based aggregator? What is the approximate coverage gap?
4. Does Style Weekly's ICS endpoint (`/events/today/?hide_subsequent_recurrences=1&ical=1`) reliably include all submitted events, or does editorial curation filter some before they hit the feed?
5. Which Richmond flagship institutions (VMFA, ICA at VCU, Richmond Symphony, Richmond Ballet, Virginia Rep, Modlin Center) expose machine-readable event feeds (ICS, RSS, JSON), and which require scraping or manual entry?

### User Questions
6. How do Richmond residents actually discover arts events today — is there any survey data on which channels (Google, Instagram, word-of-mouth, Reddit, newsletters) drive the most event attendance?
7. What percentage of arts-curious residents give up and stay home because the discovery effort is too high? Is there any Richmond-specific data on the "decision paralysis" drop-off?
8. How do new-to-Richmond residents (recent relocations, college students) find their first arts events — do they default to Google, Eventbrite, or ask friends?
9. What is the typical event promotion workflow for a solo Richmond artist with no venue — Instagram-only, or do they cross-post anywhere structured?

### Integration Questions
10. Is the CultureWorks JSON-LD syntax error (`Liquid syntax error: Cannot build json-ld tag`) a known issue with a fix timeline, or is it a chronic platform limitation of their Localist instance?
11. Could a "submit once, route many" tool feasibly auto-format images to meet the distinct requirements of VisitRichmond (650×650px), Venture Richmond (1000×1000px), and Style Weekly, or do editorial review processes prevent automated submission?
12. Would CultureWorks, Style Weekly, or VPM accept inbound event data from a third-party aggregator (reverse syndication) to reduce organizer submission fatigue?

### Equity Questions
13. What percentage of Richmond's active cultural programming in the East End, Northside, and South Richmond exists only on Facebook or physical flyers and would be missed by any web-scraping approach?
14. Does Richmond have neighborhood-level data on arts event attendance by race, income, or age — or is the 72% White / 20% Black Richmond 300 survey the only available proxy?
15. What languages beyond English and Spanish are needed for a truly inclusive arts discovery tool in Richmond, given growing Vietnamese and other immigrant communities?
16. How do elderly Richmond residents (65+) with low smartphone adoption currently learn about arts events — word of mouth, print media, library bulletin boards, or radio (VPM)?
17. What is the broadband adoption rate in Richmond ZIP codes with the densest cultural programming gaps (23222 Northside, 23223 East End, 23224 South Richmond), and does a web-only tool effectively exclude those neighborhoods?

### Prior Art Questions
18. What caused dorichmond.com (the DoStuff network's Richmond presence) to go inactive, and is there a licensing or partnership opportunity with the domain or the DoStuff platform?
19. Among national arts aggregator models (ArtRabbit, DoStuff, Eventful's "Demand It"), which features have proven most effective for sustained user engagement beyond launch — and which have failed?
20. Has any city successfully implemented a shared regional events data standard (common ICS/JSON schema) across tourism boards, arts councils, and media outlets — and if so, what did the MOU structure look like?

## Answered Questions (Parallel AI Research, April 2026)

Research synthesis from `archive/reviews/city-storytelling/_research-answers/ad_q1_data.md` and `ad_q2_equity.md`. Tags indicate how fully Parallel AI research resolved each open question.

### Data Questions

1. **`[Partial]`** CultureWorks runs on **Localist** with **ICS, RSS, and a platform JSON API**; considerate use and under one request per second are advised. There is **no published bulk/TOS** for CultureWorks specifically — **explicit permission is recommended** for bulk redistribution beyond personal subscription or widgets.

2. **`[Still Unknown]`** Research did not document per-field completeness or submitter variance for CultureWorks listings.

3. **`[Still Unknown]`** No audited estimate exists for Richmond arts events that exist **only** on unstructured channels (e.g., Facebook, flyers) versus structured calendars (“dark events”).

4. **`[Partial]`** Style Weekly’s web events section is described as **low machine-readability** with **no apparent ICS/RSS/JSON** in the material reviewed; the specific `/events/today/…ical=1` endpoint was **not validated** in this research.

5. **`[Confirmed]`** **Richmond Symphony:** machine-readable feeds (Google Calendar, iCal, Outlook 365, .ics). **VMFA, ICA at VCU, Richmond Ballet, Virginia Repertory Theatre, Modlin Center:** **no** on-page ICS/RSS/JSON found on primary calendars (Ballet/Rep/Modlin URLs not fully specified in source).

### User Questions

6. **`[Still Unknown]`** No **Richmond-specific, citable** channel-share or survey data; national work (e.g., WolfBrown Audience Outlook Monitor) does not break out Richmond.

7. **`[Still Unknown]`** Not addressed in this research pass.

8. **`[Still Unknown]`** Not addressed in this research pass.

9. **`[Still Unknown]`** Not addressed in this research pass.

### Integration Questions

10. **`[Confirmed]`** The CultureWorks/Localist **JSON-LD failure** is described as a **Liquid syntax error** (`event_item` unknown), hurting **Google rich results / SEO** for listed events.

11. **`[Partial]`** A **submit-once, route-many broker** (e.g., toward VisitRichmond, Venture Richmond, CultureWorks/Localist, Style Weekly) is assessed as **technically feasible** with **field/taxonomy mapping** and **governance agreements**; automated image resizing to each portal’s pixel rules was **not explicitly validated**.

12. **`[Still Unknown]`** Inbound syndication acceptance by CultureWorks, Style Weekly, or VPM was **not researched**.

### Equity Questions

13. **`[Still Unknown]`** No **percentage** of East End / Northside / South Richmond programming that is Facebook- or flyer-only.

14. **`[Partial]`** **No** regularly maintained **neighborhood-level arts event attendance** by race, income, or age; **Richmond 300** / **Cultural Heritage Stewardship**-style engagement materials are **planning proxies**, not event attendance records.

15. **`[Partial]`** Beyond English/Spanish, research highlights **Arabic, Dari, Pashto** (e.g., Afghan/SIV communities) and **Swahili / East African** languages as relevant via service organizations; **Vietnamese** was **not** called out in this corpus.

16. **`[Partial]`** **No Richmond-specific 65+ survey**; **analog channels** (print e.g. *Seniors Guide*, word-of-mouth via senior centers/libraries/faith groups, **public radio**) are inferred from regional aging-services patterns — **web-only risk** for this cohort is plausible but not locally quantified.

17. **`[Confirmed]`** **ACS 2019–2023 (5-year)**:** ZIPs **23222, 23223, 23224** show **materially lower household broadband subscription** than higher-income Richmond areas; **mobile-only** access adds nuance for **web-heavy** discovery UX.

### Prior Art Questions

18. **`[Confirmed]`** **dorichmond.com** is **inactive**; prior **DoStuff** Richmond affiliate per Wayback; **DoStuff Media** offers a **corporate contact path** for partnership/licensing discussions.

19. **`[Partial]`** **ArtRabbit** (niche, curation + submissions + apps), **DoStuff** (local editorial, newsletter/social, mobile-first, RSVP), and **Eventful “Demand It!”** (demand aggregation; **discontinued** — eroded by Facebook/Google and first-party ticketing) are summarized; **independent retention metrics** for ArtRabbit/DoStuff were **not** in the provided context.

20. **`[Confirmed]`** (negative finding) Research did **not** find a **published, formal US regional MOU + shared events data standard** spanning tourism, arts councils, and media at the level asked.

### Summary tally (Arts & Cultural Event Discovery)

| Tag | Count |
|-----|-------|
| `[Confirmed]` | 5 |
| `[Partial]` | 7 |
| `[Still Unknown]` | 8 |
| **Total questions** | **20** |

---
