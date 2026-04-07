# Innovation Analysis: Neighborhood Anchor Map

## 1. Blue Ocean Reframing (ERRC Grid)

| Action | Element | Rationale |
|--------|---------|-----------|
| **Eliminate** | Comprehensive service directory approach | Research shows directories like Findhelp and NYC CCC "Map Community Resources" catalog everything but overwhelm users. The ERRC origin reframed from "discover the service" to "discover the place you already trust" |
| **Eliminate** | Account creation and PII collection | FindHello (USAHello) was discontinued in 2026 due to concerns that mapped info could target immigrants. Zero-login is a safety requirement |
| **Reduce** | Number of mapped locations (from thousands to ~50-100 anchors) | St. Louis Ecosystem Map and NYC MOIA list hundreds of resources. Research recommends starting with top 50-100 anchor institutions by foot traffic to reduce cognitive load |
| **Reduce** | Reliance on real-time transit data (initially) | Scheduled GTFS overestimates real access by 5-15% in high-access areas. Start with precomputed isochrones for key time windows rather than live routing |
| **Raise** | Transit accessibility as a first-class filter | No existing immigrant service map integrates GTFS isochrones. Seattle's AccessMap and NLC's Civic Mapping Initiative prove the pattern in adjacent domains (accessibility, Head Start) but not for immigrant services |
| **Raise** | Trust signals per location | Tag each anchor with languages spoken, "no-ID-required" status, and hours — the practical trust indicators that matter to newcomers |
| **Create** | "Anchor-first" service discovery model | Instead of "what service do I need?" → "what trusted place am I near, and what can I access from there?" This reframes navigation around existing community relationships |
| **Create** | Transit isochrone overlay for immigrant services | Combining anchor locations + GRTC GTFS feed to show "what can I reach in 30 minutes by bus from my library" — no US city has deployed this for immigrant service discovery |

**Core assumption challenged:** "Immigrants need better service directories." Research shows they need better starting points. Libraries serve as vital community hubs for refugees (Oklahoma study), providing cognitive, socio-cultural, and physiological services. The anchor-first model leverages existing trust relationships instead of building new digital ones.

## 2. Rapid Ideation (Crazy 8s)

| # | Idea | Notes |
|---|------|-------|
| 1 | **Static anchor map with bus routes** — Leaflet map showing 50 anchors + GRTC route overlays, filterable by type and language | Baseline MVP. Uses free tiles + GRTC GTFS static feed. No backend required |
| 2 | **Isochrone explorer** — Select an anchor, choose a time window (e.g., "Wednesday 10 AM"), see a 30-minute transit reach polygon | Uses precomputed OTP/R5 isochrones. Research shows OTP batch APIs can precompute these for specific time windows |
| 3 | **Printable "routes to help" one-pager** — Select your anchor, generate a PDF with the 5 nearest services + bus directions | Bridges digital and analog. Research recommends printable one-pagers distributed at library branches as a KPI target |
| 4 | **Library kiosk version** — Deployed on library public computers with large touch targets, auto-centered on the current branch | Libraries are the #1 anchor. Kiosk mode removes device/connectivity barriers. Per HHS Section 504, must meet WCAG 2.1 AA by May 2026 |
| 5 | **🔥 "Walk with me" AR navigation** — Phone camera overlays directional arrows to walk from the anchor to the nearest service | Provocative: eliminates the need to read a map. Useful for users with limited English who struggle with written directions |
| 6 | **🔥 Community-curated trust scores** — Anchors are rated by immigrant community members on a simple thumbs-up system, with ratings visible per language community | Provocative: crowdsourced trust signals from the actual user population. Addresses the "who decided these are trustworthy?" question |
| 7 | **Service desert detector** — Overlay demographic data (ACS immigrant population) against transit reach to identify neighborhoods with high need but low anchor coverage | Per research: NLC's Civic Mapping Initiative prompted bus stop relocations in Memphis and Alexandria. Same pattern for Richmond |
| 8 | **WhatsApp location share → nearest anchors** — Share your WhatsApp location, receive a list of nearest anchors with bus directions | Bridges the WhatsApp channel (dominant in immigrant communities per 804me research) with the map tool |

## 3. Rapid Design Sprint

**Problem sentence:** Richmond's immigrant and refugee residents cannot easily determine which trusted community locations (libraries, clinics, churches) are reachable by GRTC bus within a reasonable time from where they live, leading to missed services and reliance on word-of-mouth navigation that doesn't account for transit reality.

**User journey (5 steps):**
1. Resident visits the map (via QR code at library, WhatsApp link from CBO, or 211 Virginia referral)
2. Selects their starting point: current location, a neighborhood, or a specific anchor they already know
3. Map displays nearby anchors with icons for type (library, clinic, church) and language tags
4. Selects an anchor to see: services available there, hours, languages, and bus routes serving it
5. Optionally views a 30-minute transit isochrone showing what else is reachable, or prints a "routes to help" one-pager

**Prototype shape:** Leaflet.js map with GeoJSON anchor points and GRTC GTFS route polylines. Filterable by anchor type and language. Mobile-first responsive design. Precomputed isochrones for the 10 highest-traffic anchors. Deploy as static site.

**First test:** Install the map on 3 Richmond Public Library branch computers. Observe 10 LEP users attempting to find a health clinic reachable by bus from their branch. Measure: task success rate, time-to-answer, and whether users understood the transit overlay.

## 4. Opportunity Mapper

### Opportunity 1: Library-Anchored Service Discovery

| Dimension | Detail |
|-----------|--------|
| **User** | LEP residents who use Richmond Public Library branches as community hubs |
| **Outcome** | Resident discovers that the clinic they need is 2 bus routes and 25 minutes from their branch — and gets printed directions |
| **Workflow** | Open map at library → select "my branch" → see nearby services with transit times → print one-pager |
| **Dependencies** | Richmond Public Library partnership; anchor dataset with hours and language tags; GRTC GTFS feed (public) |
| **Richmond relevance** | Richmond Public Library has 9 branches across the city; several serve neighborhoods with high immigrant populations (Broad Rock, Hull Street) |

### Opportunity 2: Transit Equity Analysis for Planners

| Dimension | Detail |
|-----------|--------|
| **User** | City planners and GRTC route planners |
| **Outcome** | Identify neighborhoods where immigrant populations are transit-isolated from anchor services; inform route adjustments |
| **Workflow** | Overlay ACS demographic data → generate isochrones for all anchors → identify coverage gaps → report to GRTC |
| **Dependencies** | ACS data (public); GRTC willingness to engage; GeoHub demographic layers |
| **Richmond relevance** | NLC's Civic Mapping Initiative prompted 3 bus stop relocations in Memphis — same advocacy model applicable to GRTC |

### Opportunity 3: CBO Outreach Targeting

| Dimension | Detail |
|-----------|--------|
| **User** | ReEstablish Richmond, Commonwealth Catholic Charities, and other immigrant-serving CBOs |
| **Outcome** | CBOs identify which anchors are within transit reach of their clients' neighborhoods and partner with those anchors for outreach |
| **Workflow** | CBO selects client ZIP codes → map shows reachable anchors → CBO contacts anchor to co-locate services |
| **Dependencies** | CBO engagement; willingness to share aggregate client geography (not individual data) |
| **Richmond relevance** | Richmond's immigrant-serving CBOs are concentrated downtown; many clients live in Southside or East End with different transit access |

## 5. Problem Scoping

| Dimension | Score (1-5) | Rationale |
|-----------|:-----------:|-----------|
| **Impact** | 4 | Addresses a structural gap: no US city has deployed a transit-integrated immigrant service map. The anchor-first model reframes discovery around trust rather than taxonomy |
| **Feasibility** | 4 | GRTC GTFS is public. Facility locations are on GeoHub. Leaflet.js is mature. Main lift: curating anchor dataset with community input and precomputing isochrones |
| **Data readiness** | 4 | GRTC GTFS: public. Library/clinic/community center locations: available via GeoHub or city data. Gap: language tags and "no-ID" flags require manual curation with CBOs |
| **Problem clarity** | 4 | Clear for the primary user (immigrant resident seeking services). Less clear whether the transit overlay adds enough value over a simple directory to justify the complexity |
| **Demo-ability** | 5 | A map with colored anchors and bus routes is visually compelling. Isochrone polygons are eye-catching. Printing a "routes to help" page is a tangible demo artifact |

**Weekend MVP shapes:**
- **Minimal:** Leaflet map with 20 hand-curated Richmond anchors (libraries, clinics, churches) as GeoJSON markers. GRTC bus routes as polylines from static GTFS. Filter by anchor type. Mobile-responsive.
- **Stretch:** Add precomputed 30-minute isochrones for 5 key anchors using R5 or OTP batch API. Add language tags per anchor. Add printable one-pager generation. Add Spanish UI toggle.

## 6. Assumption Mapping

| # | Assumption | Risk (1-5) | Uncertainty (1-5) | R × U | Validation Method |
|---|-----------|:----------:|:-----------------:|:-----:|-------------------|
| 1 | Immigrant residents will use a map tool rather than relying on word-of-mouth or caseworker referrals | 4 | 4 | **16** | Observe 10 LEP users at a library branch; compare task success with map vs. asking a librarian |
| 2 | The "anchor-first" model is more intuitive than a service-first directory for LEP populations | 4 | 4 | **16** | A/B test: anchor-first map vs. Findhelp-style category search. Measure task completion and comprehension |
| 3 | GRTC GTFS data accurately represents real transit accessibility in immigrant-heavy neighborhoods | 3 | 3 | **9** | Compare scheduled vs. actual arrival times on 5 routes serving Southside/East End over 2 weeks |
| 4 | Community anchor data (language tags, hours, trust signals) can be curated and maintained | 4 | 3 | **12** | Pilot: curate 20 anchors with 2 CBOs. Measure time-to-curate and data accuracy at 90 days |
| 5 | The FindHello discontinuation risk (targeting) can be mitigated by tiered visibility for sensitive services | 5 | 3 | **15** | Privacy threat model with immigrant advocacy organizations; test whether tiered visibility is sufficient |
| 6 | Library staff will promote and support the tool at their branches | 3 | 3 | **9** | Interview 5 Richmond Public Library branch managers about willingness to display QR codes and assist patrons |

**Top 3 to validate first:**
1. **Assumption 1 (R×U=16):** If immigrants don't use map tools, the entire concept fails regardless of data quality. Observational testing at library branches is essential.
2. **Assumption 2 (R×U=16):** The anchor-first model is the core innovation; if it's not more intuitive than a standard directory, there's no reason to build this instead of linking to Findhelp. A/B test required.
3. **Assumption 5 (R×U=15):** FindHello's 2026 discontinuation is a concrete warning. If sensitive location data can be weaponized against immigrants, the tool causes harm. Privacy threat modeling is non-negotiable.

---

## Key Takeaway

The Neighborhood Anchor Map is the pillar's most visually distinctive idea and introduces a genuinely novel framing: anchor-first discovery with transit reality overlay. No US city has deployed this combination for immigrant services. The critical insight from research is that the map must start from trust (the places immigrants already go) rather than taxonomy (the services they need). The biggest risk is the FindHello precedent — any tool that maps services used by immigrants can be weaponized. Tiered visibility, privacy-by-design, and explicit partnership with immigrant advocacy organizations are prerequisites, not afterthoughts.
