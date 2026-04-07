# Innovation Analysis: RVA Development Tracker

**Generated:** April 2, 2026
**Inputs:** RESEARCH_RESULT.md, 6 Innovation Lenses

---

## 1. Blue Ocean Reframing (ERRC Grid)

| Factor | Action | Details |
|--------|--------|---------|
| Separate portals for permits, zoning, and hearings | Eliminate | Richmond currently sends users to EnerGov for permits and Legistar for agendas with no cross-linking; Colorado Springs proves a unified routing page works |
| Real-time API joins across EnerGov and Legistar | Reduce | Accela rate-limits APIs dynamically (HTTP 429); Legistar caps at 1000 records per call. Reduce reliance on live joins by adopting nightly ETL to ArcGIS, as Hartford and Portland do |
| Cross-system wayfinding (map → permit → hearing) | Raise | Colorado Springs' ArcGIS dashboard provides three CTAs per popup: View Case Details, View Documents, View Upcoming Hearing. Richmond's Planning Commission page only lists links; no map-integrated routing exists |
| Case-ID-based traversal between systems | Create | No Richmond tool currently carries the EnerGov record ID into Legistar agenda items or vice versa; creating a shared ID convention is the foundational integration |

**Core assumption challenged:** That a development tracker requires a custom-built application. The research shows the "stitch-together" model (ArcGIS map + existing EnerGov portal + existing Legistar calendar, connected by shared Case IDs) is the dominant pattern in every successful city deployment. Richmond already has all three systems — the missing piece is the connective tissue.

**Reframed value proposition:** Instead of building a new system, build a routing layer — an ArcGIS map that connects Richmond's existing EnerGov and Legistar instances via shared Case IDs, giving residents one place to start and clear paths to every document and hearing.

---

## 2. Rapid Ideation — 8 Divergent Approaches

1. **Classic Stitch-Together** — ArcGIS Experience Builder map reading EnerGov permit data (nightly ETL) with popups linking to EnerGov documents and Legistar hearings, following Colorado Springs' biweekly-updated model.
2. **Legistar-First Timeline** — Since Richmond's Planning Commission already uses Legistar, build the tracker anchored to Legistar legislative file IDs (like Madison) and link out to EnerGov for permit details.
3. **SMS + Map Hybrid** — Combine Site-Sign Text-Back (Bundle 2) with the tracker: the map is the web interface, SMS is the field interface, both query the same backend data.
4. **Neighborhood Alert Zones** — Let residents draw a polygon on the map (their block, their neighborhood) and subscribe to email/SMS alerts whenever a new permit or hearing is filed within that area.
5. **"What's Happening On My Street"** — A simplified version: enter a street address, see every active permit, zoning case, and upcoming hearing within 500 feet, rendered as a timeline rather than a map.
6. **Planning Commission Preview** — Before each meeting, auto-generate a newsletter summarizing every agenda item with a map pin, EnerGov documents link, and "how to comment" instructions.
7. **Developer Portal Companion** — A parallel interface for developers/applicants showing their own cases' status, next required action, and timeline to decision — reducing staff inquiries.
8. **Historical Development Atlas** — Archive past cases with outcomes (approved/denied/withdrawn) to let researchers and advocates analyze development patterns over time (which neighborhoods get approved, which get denied).

**Most provocative:** #8 — A historical atlas of approval/denial patterns by neighborhood could reveal systemic inequities in development review, but politically sensitive.
**Most feasible:** #1 — Richmond already runs EnerGov and Legistar; ArcGIS GeoHub is live; the ETL + map + deep-link pattern is proven in Colorado Springs, Denver, and Hartford.

---

## 3. Rapid Design Sprint

**Problem in one sentence:** Richmond residents cannot see a map of all active development proposals, permits, and upcoming hearings in their neighborhood in one place.

**Target user:** A homeowner in Scott's Addition who heard a building is being demolished on their block and wants to know what's replacing it, when the hearing is, and how to comment.

**User Journey:**
- **Start:** Neighbor mentions "they're tearing down the warehouse on Summit"
- **Friction:** Resident goes to rva.gov → finds the Planning Commission page → sees a list of quick links to EnerGov and Legistar separately → doesn't know the case number → searches EnerGov by address but gets permit records, not zoning cases → tries Legistar but gets an overwhelming list of all legislative matters → gives up
- **Outcome:** Resident opens the RVA Development Tracker map → zooms to their block → sees a pin on the warehouse → clicks and sees: "Rezoning application for 12-unit mixed-use. Hearing: April 28, 2026, 6pm. [View Documents] [View Hearing Agenda] [Submit Comment]"

**Lowest-fidelity prototype:** An ArcGIS Web Map with a manually curated GeoJSON layer of 20 active cases, each with popup links to the corresponding EnerGov and Legistar pages.

**First test:** Share the map with 10 residents in Scott's Addition (Richmond's most active development area) and measure whether they can find the case on their block within 30 seconds.

---

## 4. Opportunity Mapper

### Pattern A: ArcGIS Map + Deep Links (Quick Win)

- **Target user:** Richmond residents seeking to understand nearby development activity
- **Desired outcome:** A single map showing all active development proposals with one-click access to documents and hearings
- **Core workflow:** Nightly ETL from EnerGov (via API or database export) → geocode to parcels → publish as ArcGIS Feature Layer → Experience Builder map with popup deep links to EnerGov record pages and Legistar agenda items
- **Dependencies:** EnerGov data access (API or scheduled export), Legistar OData API (public, no auth), GeoHub ArcGIS infrastructure (already live), case ID crosswalk convention
- **Pros:** Follows the proven Colorado Springs/Madison model; uses Richmond's existing infrastructure; no new systems required
- **Cons:** EnerGov API access may require Tyler Technologies coordination; nightly ETL means data is 24 hours stale (acceptable per research); manual case ID crosswalk until staff adopt shared conventions
- **Richmond relevance:** Richmond's Planning Commission page already links to both EnerGov and Legistar but without spatial integration. The city's GeoHub has active parcel and zoning layers ready for overlay.

### Pattern B: Real-Time Aggregated Portal (Stretch)

- **Target user:** Planning staff, developers, power-user residents
- **Desired outcome:** A unified search portal combining EnerGov permits, Legistar hearings, and GeoHub spatial data with real-time status updates
- **Core workflow:** API facade (OGC API - Features) serving combined data from EnerGov + Legistar + GeoHub → custom web app with search, filter, and notification features → case ID auto-linking
- **Dependencies:** Tyler EnerGov Citizen Self Service API access (may require contract modification), Legistar OData pagination handling (1000-record cap), development resources for custom API facade
- **Pros:** Eliminates ETL lag; provides real-time status; enables advanced features like alerts and search
- **Cons:** Accela/EnerGov rate-limiting is a real risk (Manhattan Beach abandoned an Accela rollout due to resourcing); custom development required; higher maintenance burden
- **Richmond relevance:** Richmond's EnerGov CSS already has native GIS integration — the stretch goal leverages this but adds Legistar data

**Recommendation:** Build Pattern A for the hackathon — a curated ArcGIS map with 20-30 active cases and deep links. The nightly ETL can be simulated with a one-time data load for demo purposes. Pitch Pattern B as the production roadmap.

---

## 5. Problem Scoping

| Dimension | Score (1-5) | Notes |
|-----------|-------------|-------|
| Impact | 4 | Affects every resident near an active development; Scott's Addition alone has dozens of active cases |
| Feasibility | 4 | All three systems exist (EnerGov, Legistar, GeoHub); the challenge is data plumbing, not system acquisition |
| Data availability | 3 | Legistar API is public; EnerGov data access varies by city agreement with Tyler; GeoHub parcels are public |
| Clarity | 5 | Problem is immediately understandable: "I want to see what's being built near me" |
| Demo credibility | 4 | A map with real Richmond cases, clickable popups, and deep links is visually compelling |

**Richmond-specific alignment:** Pillar 2 (Thriving Neighborhoods), PS1 (Neighborhood Development Discovery). Part of Bundle 2 (Legistar Development Pipeline) alongside Site-Sign Text-Back, RVA Plotlines, and Participation Analytics. Richmond's Planning Commission page already references both EnerGov and Legistar — this idea is the spatial glue.

**Policy/eligibility risks:** The EnerGov wall is real — Tyler Technologies' permitting system has no public API, and a replacement RFP is pending. If EnerGov data cannot be exported, the tracker is limited to Legistar-only cases (zoning/legislative) without permit data. Explicit scope statements (like Colorado Springs' "applications submitted after January 1, 2024") manage public expectations.

**Weekend MVP shapes:**
1. **Curated ArcGIS map:** Manually geocode 20-30 active cases from Legistar, create a Feature Layer, build an Experience Builder app with popup deep links
2. **Legistar-only auto-map:** Write a script to pull all active Matters from Legistar API, geocode addresses, and publish as a live ArcGIS layer (covers legislative cases but not building permits)

---

## 6. Assumption Mapping

| # | Assumption | Risk (1-5) | Uncertainty (1-5) | Priority |
|---|-----------|------|-------------|----------|
| 1 | EnerGov data can be exported or accessed via API for the tracker | 5 | 4 | **High** |
| 2 | Legistar Matters contain geocodable address information | 3 | 3 | Medium |
| 3 | A shared Case ID convention can be established between EnerGov and Legistar | 4 | 4 | **High** |
| 4 | Residents will find and use a map-based interface (vs. expecting a Google-style search) | 3 | 3 | Medium |
| 5 | Nightly ETL freshness is acceptable to residents (not real-time) | 2 | 2 | Low |
| 6 | Planning staff will maintain the case ID crosswalk as part of their workflow | 4 | 3 | **High** |
| 7 | The EnerGov replacement RFP won't invalidate the integration architecture | 3 | 4 | Medium |

**Top 3 to validate:**
1. **#1 — EnerGov data access:** Contact Richmond's DIT or Planning Department to determine if EnerGov data can be exported (even as a CSV) for the pilot. If access is blocked, the tracker is Legistar-only, which still covers zoning cases but misses building permits. Validation: one inquiry to DIT.
2. **#3 — Case ID crosswalk:** Review 10 recent Planning Commission agenda items in Legistar and check whether the EnerGov record number appears in the agenda text or attachments. If IDs are already present informally, the crosswalk is achievable. Validation: 30-minute Legistar review.
3. **#6 — Staff maintenance burden:** The Manhattan Beach case study warns that resource gaps derailed their Accela implementation. Confirm that Planning has capacity to maintain the data feed. Validation: conversation with the Planning Director.

---

## Key Takeaway

RVA Development Tracker is the "connective tissue" idea for Richmond's planning stack. The city already owns all three required systems (EnerGov, Legistar, GeoHub) but has never connected them spatially. The Colorado Springs model proves this can be done with biweekly ArcGIS updates and deep links rather than a custom application. The EnerGov data access question is the single highest-risk assumption.
