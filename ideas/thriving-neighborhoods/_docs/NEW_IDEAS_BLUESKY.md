# Blue Sky ERRC Ideas — Thriving Neighborhoods

**Generated:** April 1, 2026
**Method:** Blue Ocean ERRC (Eliminate, Reduce, Raise, Create) applied to shared JTBD and pain points
**Purpose:** Structurally different ideas that complement, not duplicate, the existing NEW_IDEAS set

---

## ERRC Grid

| | Eliminate | Reduce | Raise | Create |
|---|-----------|--------|-------|--------|
| Current approaches | Reliance on 150-ft owner mail as the main "who gets to know" story; treating 100+ page PDFs as the primary explanation; English-only, desktop-first portals | Time staff spend on one-off resident calls; assumption that one map app can serve everyone; duplicate manual HUD lookups | Early discovery inside the 120–180 day window; plain-language comprehension; auditable visibility of public obligations | SMS/low-literacy channels; renter-visible pathways; cross-system keys (parcel + Legistar + HUD); measurement of who is missing |

---

## Idea 1: Site-Sign Case Number Text-Back

**Problem Statement:** PS1 — Neighborhood Development Discovery
**User:** A resident who sees a posted rezoning/SUP sign with a case or file number but does not use Legistar or GIS on a computer
**One-liner:** Text the case number printed on the site sign and receive an immediate reply with the matter title, the next scheduled hearing date from Legistar, and a direct link to the Legistar matter — no map, no login, no PDF.

**ERRC moves applied:**
- **Eliminate:** The need to open Legistar, hunt through agendas, or tap inside parcel boundaries on a phone before knowing *when* and *what* the case is
- **Reduce:** Dependence on broadband-heavy map UIs and long PDF reading for the first "is this about my block?" moment
- **Raise:** Speed of first meaningful contact at the moment of physical discovery (the sign), when many residents first learn a case exists
- **Create:** A signage-native, account-free channel aligned with how lower-income residents already over-index on texting (per equity research)

**How it works:** A lightweight SMS front end accepts the case/file string; a small backend queries the public `richmondva` Legistar OData API for matching matters and the next related event (e.g., Planning Commission / Council), then returns a short templated message plus the canonical Legistar URL. Optional second message can link to a static plain-language glossary page that decodes terms like "SUP" and "rezoning" — without claiming to replace staff reports.

**Data sources:** Legistar Web API for Richmond (`https://webapi.legistar.com/v1/richmondva/`), specifically Matters and Events endpoints; optionally City-published meeting calendars for sanity-checking display labels. No EnerGov, no authenticated City systems.

**Why it's different:** Existing tools center maps, subscriptions, door-hanger PDFs, or analytics dashboards. This starts from **printed case numbers on real-world signs** and closes the loop in one text, without building another parcel explorer or renter mailing-list workflow.

---

## Idea 2: Subsidy & Covenant Snapshot by Address

**Problem Statement:** PS2 — Affordable Housing Compliance Monitoring
**User:** A tenant organizer or resident in a multifamily building who wants to know whether their address is likely subject to affordability or subsidy rules before asking HCD or filing a complaint
**One-liner:** Enter a Richmond street address; the tool geocodes to the Assessor/GeoHub parcel, then reports matches from HUD's open LIHTC and NHPD datasets plus any manually curated rows from published City sources, with clear "verified / federal public / needs City confirmation" labels.

**ERRC moves applied:**
- **Eliminate:** The default that only compliance analysts and auditors "own" the question of whether a building has affordability obligations
- **Reduce:** FOIA-style back-and-forth and opaque PDF chains for a first-pass answer
- **Raise:** Tenant-facing transparency and early warning before exemptions lapse and rents can reset under state law
- **Create:** A **public-facing** crosswalk layer (parcel ID ↔ federal open data ↔ curated local public references) that does not require EnerGov API access

**How it works:** The user enters an address; the app uses Richmond GeoHub / Assessor parcel identifiers to join to HUD NHPD and LIHTC property datasets. A small, documented CSV of already public local project names/addresses seeds "possible local program" flags with disclaimers. Output is a one-page summary: data sources used, match confidence, program type if known, and plain-language explanation of what "restricted" generally means — not a legal determination or internal compliance score.

**Data sources:** Richmond GeoHub ArcGIS parcel/address layers and Assessor public data; HUD NHPD; HUD LIHTC property-level data; HUD CHAS or FMR only if needed for context links. Curated seed list limited to information already on rva.gov, Legistar matter titles, or official press releases (no internal HCD spreadsheets).

**Why it's different:** The affordable-housing dashboard and HUD rent-cap validator target **staff workflows** (queues, calculations). This targets **occupants and advocates** with a read-only "what might apply here" snapshot built from open federal + public local keys, without duplicating internal deadline tracking or rent-roll validation.
