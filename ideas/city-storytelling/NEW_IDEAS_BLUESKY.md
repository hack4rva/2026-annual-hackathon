# Blue Sky ERRC Ideas — A City That Tells Its Stories

**Generated:** April 1, 2026
**Method:** Blue Ocean ERRC (Eliminate, Reduce, Raise, Create) applied to shared JTBD and pain points
**Purpose:** Structurally different ideas that complement, not duplicate, the existing NEW_IDEAS set

---

## ERRC Grid

| | Eliminate | Reduce | Raise | Create |
|---|-----------|--------|-------|--------|
| Current approaches | Accounts and "download our app"; exhaustive multi-source scraping; English-only, web-only discovery; treating new uploads as the only "real" stories | Organizer submission load (5+ portals); reliance on flagship ticketing APIs; editorial gatekeeping that drops classes, fundraisers, and neighborhood events; assumption that broadband-rich UX is enough | Freshness signals and change detection; geographic and equity visibility for who is represented; trauma-informed consent and plain-language "what happens next"; offline/trust-channel reach | Feedback loops that show "what we heard → what changed"; low-bandwidth and non-smartphone paths; fusion of official civic text with place; SMS/print as first-class surfaces |

---

## Idea 1: Weekend Culture SMS

**Problem Statement:** PS1 — Arts & Cultural Event Discovery
**User:** A Northside or East End resident who has a phone with text/data but unreliable home broadband (ACS patterns in 23222–23224) and wants arts options without opening five apps or heavy web pages
**One-liner:** An opt-in SMS that each Thursday texts a short, curated "this weekend" list of fine-arts and neighborhood cultural events, with tiny deep links to a lightweight page.

**ERRC moves applied:**
- **Eliminate:** Mandatory accounts, map-first or tab-heavy browsing, and dependence on Eventbrite search as the primary discovery path
- **Reduce:** The ambition to index every brunch and nightclub; the number of feeds in v1 (start from a small set of machine-readable, arts-weighted sources only)
- **Raise:** Reach for mobile-primary users in lower-broadband ZIPs and clarity of genre/price/neighborhood tags on each line of the text
- **Create:** SMS as the primary interface plus an optional ultra-light web view, designed for small screens and slow networks

**How it works:** Residents text a short code to subscribe and pick neighborhoods or genres. A scheduled job pulls the next 72 hours from permitted feeds, de-duplicates and geo-filters to the Richmond MSA, prioritizes exhibitions, music, theater, and community cultural events over commercial nightlife, then sends a single concise message with links. Unsubscribe is always one reply.

**Data sources:** CultureWorks / Localist ICS or RSS (considerate use, <1 req/s, partnership permission for hackathon demo); Richmond Symphony public calendar / .ics endpoints documented in pillar research; optional additional ICS from individual venues that already publish sitewide feeds. Geocoding via Richmond GeoHub neighborhood boundaries or a standard geocoder for addresses present in feed fields.

**Why it's different:** Not another full web aggregator (What's On RVA–style) or bilingual social feed (Vecina). Deliberately trades comprehensiveness for a **push channel and low-bandwidth UX** aimed at the same equity gap the arts JTBD calls out for East End, Northside, and Southside.

---

## Idea 2: Public Comment Atlas

**Problem Statement:** PS2 — Resident Stories as Civic Insight
**User:** A neighborhood association president or community advocate in a Priority Neighborhood who needs to show what residents already told the City about a place, without running a new collection project
**One-liner:** A map-and-table prototype that pulls recent public comments and eComments tied to official matters from Richmond's Legistar ecosystem and joins them to GeoHub neighborhoods so "civic voice" is searchable by place.

**ERRC moves applied:**
- **Eliminate:** The need to stand up a new story portal or oral-history pipeline for every engagement cycle
- **Reduce:** Reliance on three-minute hearing memory and PDF-only agendas as the only access path
- **Raise:** Discoverability and reuse of testimony that already exists in the democratic record
- **Create:** A neighborhood-first index that links Body → Matter → meeting → comment artifacts to 148 neighborhood polygons

**How it works:** The user picks a neighborhood or draws a buffer; the tool lists recent Planning Commission / Council (or other) matters that mention addresses or known projects in that area, surfaces titles and dates, and links out to the official Legistar pages and packet attachments where comments appear. A "briefing export" produces a one-page summary for a meeting with citations back to the City's own pages — supporting the "collection without use" and feedback-loop pain points by making prior voice legible, not by ingesting copyrighted oral history.

**Data sources:** Richmond Legistar public Web API and agenda pages (bodies, events, matters — used across city planning workflows in this workspace's research); Richmond GeoHub Neighborhoods layer (148 features); optional geocoding from matter titles or linked OPP / case IDs where teams manually seed a join table for the hackathon.

**Why it's different:** Does not duplicate Fulton oral history, Richmond Stories Online, ExploreRVA's exploratory map, the Planning Commission contributed story feed, the displacement archive, or the pop-up kit — because it **re-uses official public comment** as the narrative source and optimizes for **advocate research workflows** rather than new capture or commissioner-facing digests.
