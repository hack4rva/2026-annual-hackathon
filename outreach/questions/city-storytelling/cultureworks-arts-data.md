# Outreach: CultureWorks + Arts Organizations — Arts Event Data Partnership — Research & Questions

### What we've confirmed through public sources

- **CultureWorks platform:** CultureWorks Richmond runs on **Localist**, which provides structured data via ICS (calendar.ics), RSS (calendar.xml), and a platform-wide JSON API. The Localist documentation advises considerate use at under one request per second. No published TOS or bulk data license for CultureWorks specifically — explicit permission is recommended for redistribution beyond personal subscription or widget embedding.
- **CultureWorks scale:** CultureWorks showcased **434 unique events** during artoberVA in October 2023. The calendar carries robust category filters (478 Exhibits, 252 Music events in recent snapshots) and regional coverage — making it the most comprehensive structured arts dataset in the Richmond region.
- **JSON-LD error:** The CultureWorks calendar has a live **Liquid syntax error** (`Cannot build json-ld tag, event_item is unknown`) that prevents schema.org/Event structured data from rendering. This suppresses CultureWorks events from Google rich results, reducing organic discoverability for every organization that submits events to the platform.
- **Richmond Symphony feeds:** The Richmond Symphony exposes **machine-readable feeds** (Google Calendar, iCalendar, Outlook 365, .ics export) — the only flagship institution with open calendar data.
- **Flagship institution gaps:** VMFA, ICA at VCU, Richmond Ballet (ETIX ticketing), Virginia Repertory Theatre (proprietary ticketing), and the Modlin Center (Spektrix) have **no ICS, RSS, or JSON feeds** on their primary calendar pages. Any aggregator must scrape or negotiate per-institution data sharing.
- **Style Weekly:** Style Weekly's events section at styleweekly.com/events shows **low machine-readability** — no confirmed ICS, RSS, or JSON feed. The Style Weekly → VPM Artsline syndication path is the only known automated event data flow in Richmond's arts ecosystem.
- **dorichmond.com:** The DoStuff network's Richmond affiliate is **inactive** (confirmed via Wayback Machine). DoStuff Media operates in 22 other cities and offers a corporate contact path for partnership/licensing discussions.
- **Broadband divide:** ACS 2019–2023 5-year estimates show ZIP codes **23222 (Northside), 23223 (East End), and 23224 (South Richmond)** have materially lower household broadband subscription rates. Mobile-only access is prevalent, meaning a web-only arts discovery tool risks excluding these neighborhoods entirely.
- **Language needs:** Beyond English and Spanish, Richmond's immigrant communities require arts information in **Arabic, Dari, and Pashto** (Afghan/SIV communities via ReEstablish Richmond) and **Swahili/East African languages** (refugee resettlement communities). Sacred Heart Center serves the established Latinx population.
- **No audience data:** No publicly available, Richmond-specific survey quantifies which channels (Google, Instagram, word-of-mouth, newsletters, Reddit) drive arts event attendance. National research (WolfBrown Audience Outlook Monitor) doesn't break out Richmond.
- **No shared data standard:** Research found **no US city** that has implemented a formalized shared regional events data standard with published MOUs spanning tourism boards, arts councils, and media outlets — meaning Richmond has no precedent to follow but also an opportunity to lead.
- **Submit-once feasibility:** A "submit once, route many" broker (normalizing submissions for VisitRichmond's Simpleview/DTI, Venture Richmond, CultureWorks/Localist, Style Weekly) is assessed as **technically feasible** with field/taxonomy mapping and governance agreements. Automated image resizing to each portal's pixel specs (VisitRichmond 650×650px, Venture Richmond 1000×1000px) was not validated.
- **Senior channels:** Residents 65+ rely on **print media** (Seniors Guide), **public radio** (VPM), **word-of-mouth** through senior centers, libraries, and faith groups. Web-only discovery misses this cohort.

### What we haven't been able to determine — and where we need your help

We have **five specific questions** that only CultureWorks and your arts ecosystem partners can answer:

1. **Data partnership terms:** Could CultureWorks provide a bulk data export or authorize programmatic access to its Localist JSON API for a civic aggregator prototype? What would the terms look like — attribution, rate limits, field restrictions, or a formal data-sharing agreement?

2. **Schema completeness:** What is the actual per-field completeness of CultureWorks event listings? Do all entries include venue address, start/end time, price, and accessibility tags, or do fields vary significantly by submitter? This determines whether aggregation can rely on CultureWorks data as a clean base layer or needs heavy normalization.

3. **JSON-LD fix timeline:** Is the Liquid syntax error on CultureWorks' Localist instance a known issue with a fix planned, or a chronic platform limitation? If it's a Localist-side bug, has CultureWorks contacted Localist support? A working JSON-LD tag would immediately improve Google discoverability for every event on the platform.

4. **Submit-once interest:** Would CultureWorks and VisitRichmond be interested in exploring a shared submission broker that lets organizers enter event details once and route them to multiple calendars? We're trying to assess institutional appetite before building anything that requires partner buy-in.

5. **Neighborhood equity measurement:** Does CultureWorks or any Richmond arts funder currently track the geographic distribution of events by neighborhood — specifically whether East End, Northside, and South Richmond programming is proportionally represented? If not, would a dashboard that maps event density against demographic data be useful for grant decisions and equity reporting?

### Why this matters

We've been generating and scoring new solution ideas grounded in the research. The highest-scoring concepts for arts discovery are:

- **SMS Event Discovery Gateway** (scored 86/105 Mayor's Choice) — a Twilio-based text message service that lets residents in low-broadband ZIP codes text a keyword and receive nearby arts events by SMS. No app, no internet required. Explicitly designed for the 23222/23223/23224 broadband gap.
- **Neighborhood Arts Equity Dashboard** (scored 86/105 Pillar Award) — the first geographic equity analysis of Richmond arts event distribution, mapping event density against census demographics. No mid-size US city has arts equity mapping at this granularity. Designed for CultureWorks, City arts funders, and equity advocates.
- **Multilingual Arts Discovery Layer** (scored 82/105 both awards) — machine translation with community-partner QA (ReEstablish Richmond, Sacred Heart Center) to make arts programming accessible to non-English-speaking communities for the first time. Targets Arabic, Dari, Pashto, Spanish, and Swahili speakers.

None of these replace CultureWorks — they all build on top of it as the best structured arts dataset in the region.

---

## Context for the SME
CultureWorks runs the most comprehensive structured arts calendar in the Richmond region, but three problems limit its reach: (1) the JSON-LD error suppresses events in Google search results, (2) flagship institutions bypass CultureWorks entirely because they use proprietary ticketing (ETIX, Spektrix), and (3) no one measures whether the events on the platform reflect the geographic and demographic diversity of Richmond's cultural life. The prototypes we're proposing don't compete with CultureWorks — they extend it into channels (SMS, multilingual, equity analytics) that the platform doesn't currently serve.

VisitRichmond is included because their submission portal (Simpleview/DTI) is one of the key endpoints for a submit-once broker, and they can speak to whether automated ingestion is feasible within their editorial review process.

## Why This Person
CultureWorks' Executive Director controls data access terms and partnership decisions for the Localist platform. VisitRichmond's events lead would know the submission pipeline constraints and whether machine-submitted events could pass editorial review. Together they represent the two largest structured event data gatekeepers in the region.

## Data Questions (internal tracking)
- [ ] Q1: CultureWorks data partnership / API access terms for civic use
- [ ] Q2: Field completeness across CultureWorks event listings
- [ ] Q3: JSON-LD Liquid syntax error fix timeline or workaround
- [ ] Q4: Institutional appetite for submit-once-route-many broker
- [ ] Q5: Current neighborhood-level tracking of arts event distribution

## Research Sources
- `_research-answers/ad_q1_data.md` — CultureWorks Localist platform details, ICS/RSS/JSON access, flagship institution feed gaps
- `_research-answers/ad_q2_equity.md` — broadband divide, language requirements, senior channels, JSON-LD error, submit-once feasibility
- `_shared-arts-discovery/jtbd_analysis.md` — full JTBD + answered questions
- `NEW_IDEAS_RUBRIC_GRADES.md` — scored solution ideas (PS1)
