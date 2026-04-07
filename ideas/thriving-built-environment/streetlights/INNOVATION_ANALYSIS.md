# Innovation Analysis: StreetLights (CIP Infrastructure Tracker)

**Generated:** April 2, 2026
**Inputs:** RESEARCH_RESULT.md, 6 Innovation Lenses

---

## 1. Blue Ocean Reframing (ERRC Grid)

| Factor | Action | Details |
|--------|--------|---------|
| Separate departmental map layers | Eliminate | Current model (Sandy Springs, Nampa) fragments CIP, lighting, and signals into siloed layers. Eliminate the expectation that residents navigate multiple Hub items. |
| Manual "last updated" dating | Reduce | Richmond's quarterly timestamp is table-stakes. Reduce the cognitive cost by auto-generating freshness badges per layer rather than a single static date. |
| District-level filtering | Raise | Richmond already offers council district filters — raise this by defaulting the view to the user's district via browser geolocation, removing the selection step entirely. |
| Streetlight-specific project narrative | Create | No city in the research (Sandy Springs, Nampa, Tacoma, Reno, Bakersfield) links a streetlight asset record to its parent CIP project narrative. Create a "Why is this light out?" explainer that connects outage reports to planned upgrade timelines. |

**Core assumption challenged:** That residents care about *projects* — they actually care about *assets they can see* (a dark streetlight, a torn-up sidewalk). The research shows Tacoma publishes pole-level data and Bakersfield publishes asset inventories, but neither connects them to project intent.

**Reframed value proposition:** Instead of a project tracker that happens to include streetlights, build an asset-first lookup ("What's happening to the streetlight at 4th and Main?") that links back to the CIP project only when the user wants more.

---

## 2. Rapid Ideation — 8 Divergent Approaches

1. **"Dark Block" Reporter** — A resident photographs a dark streetlight; the app geocodes the photo, matches it to the asset layer, and returns the CIP project status or opens a 311 ticket if no project exists.
2. **Fiscal Year Budget Ticker** — A real-time budget burn-down widget showing how much of the FY lighting CIP budget has been committed vs. spent, updated from the same FeatureService that powers the map.
3. **Streetlight Equity Heatmap** — Overlay Census tract income data with streetlight outage density to surface equity gaps in lighting infrastructure investment.
4. **"Adopt a Block" Notification** — Let residents subscribe to a single block for push alerts when a CIP project affecting their block changes phase (30-60-90 design → construction → complete).
5. **Voice-First Lookup** — An Alexa/Google Home skill: "Hey Google, what's the streetlight project on Broad Street?" Returns plain-language status from the FeatureService REST endpoint.
6. **Construction Photo Timeline** — Crowdsource before/during/after photos tagged to CIP project IDs, creating a visual narrative of infrastructure change that builds trust better than status codes.
7. **Council District Scorecard** — Auto-generate a monthly one-pager per council district showing projects started, completed, and overdue — formatted for council members to share in newsletters.
8. **"Ghost Layer" Detector** — An automated audit tool that identifies stale or orphaned ArcGIS Hub items (like Denver's completed-projects-2021 layer cited in the research) and flags them for archival.

**Most provocative:** #5 (Voice-First Lookup) — Bypasses all map accessibility issues identified in the research and serves residents who would never open a GIS dashboard.
**Most feasible:** #4 ("Adopt a Block" Notification) — Uses existing FeatureService change tracking and ArcGIS Webhooks; requires no new data.

---

## 3. Rapid Design Sprint

**Problem in one sentence:** Richmond residents cannot find out what infrastructure work is planned or underway near their home without navigating fragmented GIS layers across multiple city portals.

**Target user:** A homeowner on a residential street who sees construction activity and wants to know what it is, how long it will last, and who to call.

**User Journey:**
- Start: Resident notices construction barrels or a dark streetlight on their street.
- Friction: They Google "Richmond street construction" → land on rva.gov CIP page → see a dashboard filtered by department, not address → can't figure out which project affects their block → give up or call 311.
- Outcome: Resident enters their address, sees a plain-language list of all active projects within 500 feet, each with a timeline bar, current phase, and contact.

**Lowest-fidelity prototype:** A single HTML page with an address text input that queries Richmond's existing Capital Projects FeatureServer (`services2.arcgis.com/Q6Lq3evZUGfPrN7o/...`), buffers 500 feet, and returns a styled list of results. No map required for v0.

**First test:** 10 residents from Church Hill or Jackson Ward (neighborhoods with active CIP projects per the GeoHub dashboard) enter their address and rate whether the results match what they see on their street.

---

## 4. Opportunity Mapper

### Pattern A: Address-First CIP Lookup (Quick Win)
- **User:** Any Richmond resident with an address.
- **Outcome:** Type address → see all CIP projects within walking distance, with plain-language phase descriptions.
- **Workflow:** Address input → geocode via GeoHub → spatial query against Capital Projects FeatureServer → render list with timeline bars.
- **Dependencies:** Richmond GeoHub Capital Projects layer (confirmed live, 4,186 views, updated quarterly). Geocoder available via ArcGIS REST.
- **Richmond relevance:** Richmond's dashboard already exists but has only ~0.38 views/1k residents/month — the lowest engagement rate in the research. An address-first UX could significantly increase this.

### Pattern B: Cross-Linked Asset + CIP Explorer (Stretch)
- **User:** Council members, neighborhood association leaders, DPW staff.
- **Outcome:** See the relationship between individual assets (streetlights, water mains) and the CIP projects that affect them — Tacoma's model extended to all infrastructure types.
- **Workflow:** Asset inventory layers (lighting, water, sewer) joined to CIP projects via spatial intersection + project type matching. Experience Builder multi-page app with asset-level drill-down.
- **Dependencies:** Richmond would need to expose asset inventory layers (not just CIP projects) via GeoHub. Tacoma and Bakersfield have done this for lighting; Richmond has not confirmed public asset layers.
- **Richmond relevance:** Would position Richmond ahead of every city in the research by unifying what Tacoma does for lighting with what Sandy Springs does for CIP.

**Recommendation:** Start with Pattern A — it requires zero new data and can be built in a weekend using Richmond's existing FeatureServer. Pattern B is a 6-month city initiative.

---

## 5. Problem Scoping

| Dimension | Score (1-5) | Notes |
|-----------|-------------|-------|
| Impact | 4 | Directly improves CIP transparency for 233k residents; aligns with MAP Pillar 6 goal. |
| Feasibility | 5 | Richmond's Capital Projects FeatureServer is live and public. The geocoder works. ArcGIS Dashboards already exist. |
| Data availability | 4 | CIP data confirmed; streetlight asset layer not confirmed public. Quarterly updates are a freshness concern. |
| Clarity | 4 | Problem is well-defined. The gap between Richmond's 0.38 views/1k/month and Sandy Springs' 1.18 is a clear metric to improve. |
| Demo credibility | 5 | A working address lookup hitting live Richmond data is immediately demonstrable to judges. |

**Richmond-specific alignment:** Richmond's CIP dashboard already exists on GeoHub with council district filtering. This idea improves an existing city investment rather than creating something from scratch. Aligns directly with PS1 (Infrastructure Project Visibility).

**Policy/eligibility risks:** None significant. All data is already public. Risk is limited to quarterly staleness — a project could complete between updates.

**Weekend MVP shapes:**
1. **Static site + FeatureServer query:** HTML page with address input → ArcGIS REST API spatial query → styled results list. No backend needed. Deploy on GitHub Pages.
2. **Enhanced Richmond Dashboard fork:** Clone Richmond's existing ArcGIS Dashboard configuration, add address search as the primary entry point (currently buried), add a "Lighting/Signals" project type toggle as recommended in the research.

---

## 6. Assumption Mapping

| # | Assumption | Risk | Uncertainty | Priority |
|---|-----------|------|-------------|----------|
| 1 | Richmond's Capital Projects FeatureServer returns useful data when queried by spatial buffer | High | Low | TEST FIRST |
| 2 | Residents will use an address-based text input rather than browse a map | High | Medium | TEST FIRST |
| 3 | The quarterly update cadence is sufficient for resident trust | Medium | High | TEST FIRST |
| 4 | Streetlight-specific data exists in the CIP layer's project type field | Medium | High | Validate early |
| 5 | The GeoHub geocoder resolves Richmond addresses accurately | Medium | Low | Validate early |
| 6 | Residents know their council district (required for current dashboard) | Low | Low | Monitor |
| 7 | ArcGIS REST API rate limits won't throttle a public-facing app | Medium | Medium | Monitor |

**Top 3 to validate:**
1. **FeatureServer spatial query returns useful data** — Validation: Run 10 test addresses through `Capital Projects/FeatureServer/0/query?geometry=...&spatialRel=esriSpatialRelIntersects` and verify response quality.
2. **Residents prefer text-first over map-first** — Validation: A/B test with 20 users: half get address input first, half get map first. Measure time-to-answer and satisfaction.
3. **Quarterly updates are sufficient** — Validation: Compare FeatureServer project phases against physical construction status at 5 sites. If >1 is stale, freshness is a real issue.

---

## Key Takeaway

Richmond already has the data infrastructure (live FeatureServer, GeoHub, ArcGIS Dashboard) but the worst engagement rate in the research (0.38 views/1k residents/month vs. Sandy Springs' 1.18). The problem isn't data — it's UX. An address-first entry point that bypasses the map and returns plain-language results could be the single highest-leverage change, buildable in a weekend with zero new data sources.
