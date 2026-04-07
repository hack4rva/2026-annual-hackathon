# Blue Sky ERRC Ideas — A Thriving & Sustainable Built Environment

**Generated:** April 1, 2026
**Method:** Blue Ocean ERRC (Eliminate, Reduce, Raise, Create) applied to shared JTBD and pain points
**Purpose:** Structurally different ideas that complement, not duplicate, the existing NEW_IDEAS set

---

## ERRC Grid

| | Eliminate | Reduce | Raise | Create |
|---|-----------|--------|-------|--------|
| Current approaches | Dependence on live AVL/GPS and "dots on a map" as the default answer; treating 311 scripts as enough without spatial truth | Expectation that one portal must unify every silo before shipping value; jargon-heavy project cards residents must decode | Honest uncertainty (staleness, jurisdiction City vs. VDOT); accessibility of the primary UX (text/list before map) | Visibility into "invisible" policy layers (snow tiers, sweeping zones); workflows for leaders and merchants, not only generic residents |

---

## Idea 1: Snow Tier Compass

**Problem Statement:** PS2 — Fleet Operations & Street Service Tracking
**User:** A Richmond resident on a residential side street during a snow event (especially someone deciding whether to drive, arrange care, or wait)
**One-liner:** Explains where your address sits in the City's published P1/P2/P3 snow-priority system and whether your street is City- or VDOT-maintained — without needing live plow pings.

**ERRC moves applied:**
- **Eliminate:** Live fleet telemetry, per-street "last plowed" timestamps, and operator radio chains as prerequisites for useful self-serve guidance
- **Reduce:** Real-time precision and animated vehicle tracking — replaced with policy-grounded expectations and clear jurisdiction labeling
- **Raise:** Transparency of the priority hierarchy residents currently cannot see, plus explicit "this is policy-based, not live ops" guardrails to protect trust
- **Create:** A text-first "tier + maintenance owner + where to look next" result (including a direct handoff to VDOT's plow map for state roads)

**How it works:** The resident enters an address or intersection; the app geocodes it, performs point-in-polygon against a weekend-built GeoJSON derived from the City's published snow-route materials (DPW snow pages / route PDFs / ArcGIS Instant App geometry traced once for the prototype), classifies P1 vs. P2 vs. P3, and returns a short readable summary with jurisdiction (City vs. VDOT) and links to official storm updates. Optional: show street-sweeping zone ID from open data for "non-snow" reuse of the same stack.

**Data sources:** Richmond DPW snow removal policy and route publications (public web/PDF + ArcGIS Instant App references); VDOT Plow Map (`https://plows.vdot.virginia.gov/`) for state-maintained segments; City of Richmond Open Data street sweeping zones dataset `2dh8-bzzs` (Socrata API) for shared geocoding/zone context; a one-time hackathon digitization layer for snow polygons (sourced only from those public maps/PDFs, with clear attribution).

**Why it's different:** Deliberately avoids the real-time fleet-tracker pattern (All Your Bass, Road Maintenance Fleet Tracker) and instead attacks the **"invisible priority system" pain** called out in fleet research. Honest about not showing trucks while still answering the most common storm question with authoritative, accessible City-published geometry.

---

## Idea 2: Storefront Work-Window Brief

**Problem Statement:** PS1 — Infrastructure Project Visibility
**User:** A small business owner or storefront manager on a corridor where wrong timing assumptions can mean staffing and revenue hits
**One-liner:** For a business address, produces a one-page "likely work windows" brief by joining scheduled cyclic maintenance and nearby capital/paving signals with explicit freshness and source links — optimized for printing or emailing to staff.

**ERRC moves applied:**
- **Eliminate:** The need for merchants to hunt five silos or parse internal project codes just to understand "will my block be torn up this season?"
- **Reduce:** Scope to planning-grade certainty (scheduled programs + nearby projects), not a promise of live closure minutes
- **Raise:** Plain-language summaries, per-field "last updated" badges, and prominent disclaimers so stale open data does not masquerade as real-time truth
- **Create:** A **merchant-specific artifact** (PDF/Markdown brief) suitable for shift huddles and landlord conversations — not only a map exploration session

**How it works:** The owner enters the business address; the app lists, in accessible text-first form, the intersecting street-sweeping zone (next scheduled pattern from open data), whether the street segment appears on published FY paving lists/PDFs from the portal, and any nearby entries from open datasets such as the Richmond Impact Map (`aq4i-4gpd`) with a visible stale-date warning if the dataset has not updated. Each line item links back to the official source URL or dataset API row.

**Data sources:** City of Richmond Open Data Portal — street sweeping zones `2dh8-bzzs` (API); paving program PDFs / lists published alongside DPW paving materials on the open data portal; Socrata Impact Map dataset `aq4i-4gpd` (with explicit last-modified handling); optional VDOT transportation project open layers filtered to Richmond bbox for state-corridor context; Richmond address geocoding via a standard public geocoder with City boundary check.

**Why it's different:** "What's On My Street?" centers unified lookup for general residents. This targets **economic timing decisions for merchants**, emphasizes exportable briefs and freshness discipline, and does not duplicate GRTC conflict detection, ADA detour publishing, or corridor commute tooling.
