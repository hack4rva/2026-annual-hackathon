# Implementation Reality Check — A Thriving & Sustainable Built Environment

**Pillar:** A Thriving and Sustainable Built Environment
**Ideas scored:** 9 (4 demos, 3 NEW_IDEAS, 2 BLUESKY)
**Rubric:** `../IMPLEMENTATION_REALITY_RUBRIC.md` — 5 dimensions × 1–5, max 25
**Date:** April 1, 2026

---

## Summary Table

| # | Idea | Source | Own | Data | Tech | Integ | Maint | **Total** | **Tier** |
|---|------|--------|:---:|:----:|:----:|:-----:|:-----:|:---------:|:--------:|
| 1 | StreetLights | Demo | 4 | 4 | 4 | 5 | 4 | **21** | **S** |
| 2 | Snow Tier Compass | Blue Sky | 4 | 3 | 5 | 5 | 4 | **21** | **S** |
| 3 | "What's On My Street?" | NEW_IDEAS | 4 | 3 | 4 | 4 | 4 | **19** | **A** |
| 4 | Storefront Work-Window Brief | Blue Sky | 3 | 3 | 4 | 5 | 4 | **19** | **A** |
| 5 | GRTC–Construction Conflict Detector | NEW_IDEAS | 2 | 3 | 4 | 3 | 4 | **16** | **A** |
| 6 | RideShift RVA | Demo | 2 | 3 | 3 | 4 | 2 | **14** | **B** |
| 7 | ADA Detour Digital Publisher | NEW_IDEAS | 3 | 2 | 4 | 3 | 2 | **14** | **B** |
| 8 | All Your Bass (Stay Informed) | Demo | 4 | 2 | 3 | 2 | 2 | **13** | **B** |
| 9 | Road Maintenance Fleet Tracker | Demo | 4 | 2 | 3 | 2 | 2 | **13** | **B** |

---

## Detailed Scores

### 1. StreetLights — Demo (Team Aurea)

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 4 | DPW / Capital Improvement division publishes the GeoHub CIP data this tool reads; displaying their own projects to residents is aligned with their public-transparency mandate, though staff capacity for a new resident-facing channel is unverified. |
| Data Readiness | 4 | GeoHub CIP FeatureLayer (270285e87d684a95bd1ebd9a078aa6df) is live, public REST, and the demo already pulls real records from it; deducted from 5 because the CIP Dashboard itself is beta with quarterly refresh cycles, so data currency depends on how often DPW updates the layer. |
| Tech Stack Fit | 4 | Static site on GitHub Pages consuming GeoHub REST — confirmed City data platform plus commodity hosting; SMS notifications would need Twilio or similar (no procurement, free tier). |
| Integration Surface | 5 | Completely standalone; reads public ArcGIS REST endpoints, writes nothing back to any City system. |
| Maintenance Burden | 4 | Core address-lookup is automated via GeoHub pulls; the community issue-reporting and upvoting features would add moderation burden if shipped, but the core product runs itself. |
| **Total** | **21** | **Tier S** |

**Key blocker:** The community issue-reporting feature creates a shadow 311 — if included, ownership and moderation become unsolved problems. Ship the core lookup without it.
**Key accelerator:** Already built and working with real data. A high-school team demonstrated this in a weekend, which is strong evidence the core concept is achievable.

---

### 2. Snow Tier Compass — Blue Sky

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 4 | DPW Snow Operations already publishes P1/P2/P3 route priority materials and the ArcGIS Instant App; making the existing policy machine-readable and address-queryable is a direct extension of what they do today. |
| Data Readiness | 3 | Snow route priority tiers are published as PDFs and an ArcGIS Instant App, but no clean shapefiles or API; requires a one-time hackathon digitization of published maps into GeoJSON — the idea is explicit about this and the source materials are all public. |
| Tech Stack Fit | 5 | Address geocoder + point-in-polygon against a static GeoJSON layer; could ship as a static site with zero backend, using only confirmed public platforms (Socrata for sweeping zones, VDOT Plow Map for state-road handoff). |
| Integration Surface | 5 | Completely standalone; reads public data, links out to VDOT's plow map for state roads, changes nothing in any City system. |
| Maintenance Burden | 4 | Static GeoJSON updated only when snow priority routes change (annually at most); street sweeping zone bonus pulls from Socrata API automatically; honest "policy-based, not live ops" framing means no real-time data dependency to break. |
| **Total** | **21** | **Tier S** |

**Key blocker:** The one-time digitization of snow-tier polygons from DPW PDFs and Instant App screenshots — tedious but bounded and requires no City cooperation.
**Key accelerator:** Deliberately avoids the real-time fleet-tracker trap. By scoping to policy data (which tier is your street?) rather than operational data (where is the plow right now?), it sidesteps the DPW GPS data problem entirely.

---

### 3. "What's On My Street?" Address Lookup — NEW_IDEAS

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 4 | DPW / CIP division fields the "what's happening on my street?" calls today and publishes the fragmented data across GeoHub and the Open Data Portal; giving residents self-serve answers reduces call volume — clear mandate alignment. |
| Data Readiness | 3 | GeoHub CIP FeatureLayer and VDOT FeatureServer are live public REST; but Socrata Impact Map `aq4i-4gpd` is stale since March 2023, paving schedules are PDF, and DPW Construction Projects page has no API — the nightly ETL would need to handle mixed-quality sources with honest freshness timestamps. |
| Tech Stack Fit | 4 | Nightly ETL normalizing multiple public feeds into GeoJSON, served via static site or lightweight backend — commodity cloud, no procurement; text-first / WCAG 2.2 AA design is well within standard web tooling. |
| Integration Surface | 4 | Reads public APIs (GeoHub, Socrata SODA, VDOT FeatureServer) today; would benefit from a DPW construction-projects feed later but works without it. |
| Maintenance Burden | 4 | Nightly automated ETL with per-source "last refreshed" timestamps; graceful degradation by design — if Socrata goes stale, the tool shows when data was last updated rather than breaking. |
| **Total** | **19** | **Tier A** |

**Key blocker:** The Socrata Impact Map (`aq4i-4gpd`) has been stale since March 2023 and paving schedules remain PDF-only — two of the four data sources are degraded, which limits the "unified" promise.
**Key accelerator:** StreetLights already proved the GeoHub core works in a weekend; this idea extends it with multi-source aggregation and honest freshness labeling rather than pretending stale data is current.

---

### 4. Storefront Work-Window Brief — Blue Sky

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 3 | DPW publishes the underlying data and Economic Development cares about merchant impact, but a "merchant-facing work-window brief" isn't a stated priority of either department — it's adjacent to both without being core to either. |
| Data Readiness | 3 | Street sweeping zones `2dh8-bzzs` are live on Socrata; VDOT layers are public; but the Impact Map `aq4i-4gpd` is stale (March 2023) and paving lists are PDF — the idea is honest about this, building freshness badges into the design. |
| Tech Stack Fit | 4 | Web app generating PDF/Markdown briefs from public API pulls — standard commodity stack, no procurement. |
| Integration Surface | 5 | Completely standalone; reads only public Socrata/VDOT APIs and published PDFs; the exportable brief format (PDF for shift huddles) means zero dependency on City systems for delivery. |
| Maintenance Burden | 4 | Automated Socrata and VDOT pulls with explicit per-field "last updated" badges; the stale-data-is-labeled-not-hidden design means the tool degrades honestly rather than breaking. |
| **Total** | **19** | **Tier A** |

**Key blocker:** Stale Impact Map and PDF-only paving data limit the brief's completeness — merchants get sweeping schedules and VDOT projects reliably, but City paving information is degraded.
**Key accelerator:** The exportable PDF/Markdown artifact is a genuine differentiator — merchants can print it, email it to staff, hand it to a landlord. No map literacy or repeat visits required.

---

### 5. GRTC–Construction Conflict Detector — NEW_IDEAS

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 2 | Requires cooperation between DPW (construction permits, GeoHub data) and GRTC (transit authority — not a City department); neither alone owns the "construction blocks a bus stop" intersection, and GRTC's CARE program is administered independently of City government. |
| Data Readiness | 3 | GeoHub CIP geometries and GRTC GTFS static feed (stop locations, routes) are both public; but CARE paratransit pickup zone data requires a GRTC partnership, and Work-in-Street Permit locations are not confirmed as public data. |
| Tech Stack Fit | 4 | Nightly spatial join (PostGIS or Turf.js) between two public geometry sources is standard ETL; web alerts are commodity; no enterprise procurement. |
| Integration Surface | 3 | Public GeoHub + GTFS work without partnership; but the highest-value feature (proactive CARE rider alerts >2 hours before a trip) requires GRTC cooperation to access rider schedules and deliver notifications. |
| Maintenance Burden | 4 | Nightly automated spatial join; if sources go stale, conflicts simply aren't detected (fails safe); the CARE notification piece adds a dependency on GRTC systems but the public alert function runs independently. |
| **Total** | **16** | **Tier A** |

**Key blocker:** GRTC partnership — the tool's most compelling use case (preventing CARE no-show penalties for paratransit riders) is gated behind an MOU with a separate regional transit authority.
**Key accelerator:** The basic spatial join (construction zone near a bus stop → public alert on the route page) works entirely on public data today and delivers value without the CARE integration.

---

### 6. RideShift RVA — Demo (The Supply and Command Line)

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 2 | No City department operates incentive/rewards platforms; the Office of Sustainability or Transportation might champion the concept, but the business-partnership-management and rewards-fulfillment work has no natural home in City government — this is structurally a nonprofit or startup model. |
| Data Readiness | 3 | GRTC GTFS is public and Richmond Connects data is available; but the core value proposition (rewards from local businesses) requires creating and continuously maintaining a partnership pipeline and rewards catalog — that data must be built, not consumed. |
| Tech Stack Fit | 3 | Full-stack web app with auth (magic links), email system, rewards database, and business partner management — technically achievable but well beyond what City IT typically operates; more akin to a consumer product than a civic tool. |
| Integration Surface | 4 | Mostly standalone; links out to GRTC and Richmond Connects but doesn't write to any City system; the barrier-reporting data could feed transportation planning but no formal integration is required. |
| Maintenance Burden | 2 | Business partnerships require constant relationship management; weekly user check-in emails need a live backend; rewards must be updated as businesses join or leave; this is operating a consumer service, not maintaining a civic data tool. |
| **Total** | **14** | **Tier B** |

**Key blocker:** Sustained business-partnership management — five local businesses signed on during the hackathon's energy, but maintaining and growing that network is an ongoing operational commitment with no clear City owner.
**Key accelerator:** The barrier-reporting data (what prevents Richmonders from using multimodal transit?) is potentially the most valuable City asset the tool produces — even if the rewards platform doesn't survive, that dataset could inform transportation planning.

---

### 7. ADA Detour Digital Publisher — NEW_IDEAS

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 3 | DPW issues Work-in-Street Permits that already contain ADA-compliant pedestrian routing plans; publishing those plans digitally is adjacent to their permitting work but not currently part of their process or stated mandate. |
| Data Readiness | 2 | Pedestrian routing plans exist inside Work-in-Street Permits but are not digitized or published; the idea doc acknowledges "may require FOIA batch or partnership" — this is a data-creation problem, not a data-access problem. |
| Tech Stack Fit | 4 | Web interface with text-based turn-by-turn directions, screen-reader compatible — deliberately avoids maps; simple commodity stack with no enterprise procurement. |
| Integration Surface | 3 | Requires DPW permit data (not currently exposed publicly) and GRTC CARE pickup points (requires GRTC partnership); the routing plans are locked inside the permitting workflow. |
| Maintenance Burden | 2 | Every new Work-in-Street Permit's pedestrian routing plan must be digitized and entered — this is ongoing manual work unless DPW changes their permitting process to output structured digital routing data, which would be a process change beyond the tool's control. |
| **Total** | **14** | **Tier B** |

**Key blocker:** Ongoing data entry — each permit's routing plan must be digitized manually. Without a DPW process change to require digital routing plan submission, this tool requires constant human effort to stay current.
**Key accelerator:** The moral urgency is high (CARE riders losing service due to unannounced sidewalk closures), and the text-first, no-map design is genuinely accessible — if DPW can be convinced to add a structured routing-plan field to their permit process, the ongoing cost drops dramatically.

---

### 8. All Your Bass / Stay Informed — Demo

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 4 | DPW Fleet Operations is the named owner for both street sweeping and snow clearance; they already manage the fleet and would benefit from a unified communication tool — clear mandate and existing staff. |
| Data Readiness | 2 | The demo ran entirely on synthetic/mock data because DPW fleet GPS data is blocked — no public data, no documented access path; street sweeping zones exist on Socrata (`2dh8-bzzs`) but the real-time vehicle telemetry that powers both the staff and resident portals does not exist in any accessible form. |
| Tech Stack Fit | 3 | The resident zone-status portal could run on commodity cloud, but the staff portal's real-time fleet telemetry dashboard (vehicle direction, per-truck IDs, advanced snow telemetry) requires streaming infrastructure and GPS integration the City does not currently operate publicly. |
| Integration Surface | 2 | Requires DPW fleet GPS data — the core premise of the tool; this is not available via any public API, not documented as accessible via MOU, and was explicitly not provided for the hackathon. |
| Maintenance Burden | 2 | Real-time fleet tracking requires live GPS feeds, monitoring, and a backend that processes streaming telemetry; if the GPS feed drops, both portals go dark — no graceful degradation path for the real-time features. |
| **Total** | **13** | **Tier B** |

**Key blocker:** DPW fleet GPS data does not exist in any publicly or partnership-accessible form — the entire product depends on data that was not available even for the hackathon.
**Key accelerator:** The dual-portal design (public sees zone status, staff sees vehicle-level telemetry) is a sound privacy architecture — if DPW ever opens fleet data, this design is ready.

---

### 9. Road Maintenance Fleet Tracker — Demo

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 4 | Same as All Your Bass: DPW Fleet Operations is the clear owner with existing mandate and staff for street maintenance and snow operations. |
| Data Readiness | 2 | Same constraint: entirely synthetic data; DPW fleet GPS is blocked with no public data or documented access path; the team created their own mock telemetry to power the demo. |
| Tech Stack Fit | 3 | Same architecture: zone-level resident portal is feasible, but the staff-facing real-time fleet dashboard with per-vehicle tracking and snow telemetry requires streaming GPS infrastructure the City doesn't operate. |
| Integration Surface | 2 | Same dependency: requires DPW fleet GPS data that has no public API, no documented MOU path, and was not made available for the hackathon. |
| Maintenance Burden | 2 | Same burden: real-time fleet tracking requires continuous GPS feeds and monitoring; failure of the data feed breaks the entire product with no fallback. |
| **Total** | **13** | **Tier B** |

**Key blocker:** Identical to All Your Bass — DPW fleet GPS data is the single blocking dependency and it does not exist in accessible form.
**Key accelerator:** Two independent teams built nearly identical products for the same problem statement, which is a strong signal of demand — DPW should read this as evidence that opening fleet data (even at zone-aggregate level, not vehicle-level) would unlock immediate value.

---

## Pillar Observations

### The fleet-GPS wall is real

Three of nine ideas (All Your Bass, Road Maintenance Fleet Tracker, and partly the GRTC Conflict Detector) depend on operational data that DPW does not publish. Two independent hackathon teams hit the same wall and built synthetic datasets to demonstrate the concept. This is the single biggest infrastructure gap in this pillar. A zone-level "pass status" feed (not vehicle GPS) would unblock the resident-facing use case without exposing operational telemetry.

### Policy data beats operational data

The two Tier S ideas (StreetLights and Snow Tier Compass) succeed precisely because they avoid real-time operational data. StreetLights reads the CIP FeatureLayer (project planning data, not live construction status). Snow Tier Compass reads snow-priority policy (which tier is your street?), not plow positions. The pattern: **published policy and planning data is available and sufficient for high-value resident tools; real-time operational data is blocked and unnecessary for the highest-scoring use cases.**

### Stale open data limits the "unified lookup" promise

Both "What's On My Street?" and Storefront Work-Window Brief aspire to aggregate multiple data sources, but the Socrata Impact Map (`aq4i-4gpd`) has been stale since March 2023 and paving schedules remain PDF-only. These ideas are honest about this (freshness timestamps, stale-date warnings), which is the right design response, but the unified experience will feel incomplete until those sources are refreshed or replaced.

### GRTC partnership is the accessibility unlock

The two most equity-compelling ideas (GRTC Conflict Detector and ADA Detour Publisher) both require GRTC cooperation for their highest-impact features — protecting CARE paratransit riders from no-show penalties caused by unannounced construction. GRTC is a regional authority, not a City department, making this a cross-agency coordination problem. A single MOU covering CARE pickup-zone data and rider notification access would unblock both ideas simultaneously.

### RideShift is a great product that isn't a City tool

RideShift RVA is the most polished demo and secured real business partnerships in 36 hours — impressive execution. But a rewards-and-incentives platform with business partnership management is structurally a startup or nonprofit, not a City department function. The barrier-reporting data it collects may be more valuable to the City than the rewards platform itself.

### StreetLights already proved the core concept

A team of high-school juniors built a working address-lookup tool reading real GeoHub data in a weekend. That's strong evidence that the "What's On My Street?" concept is achievable — the question is whether to extend the existing StreetLights prototype (adding sources, freshness labels, text-first accessibility) or build from scratch. Extending is cheaper.
