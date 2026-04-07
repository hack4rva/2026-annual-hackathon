# Innovation Analysis: RVA Plotlines

**Generated:** April 2, 2026
**Inputs:** RESEARCH_RESULT.md, 6 Innovation Lenses

---

## 1. Blue Ocean Reframing (ERRC Grid)

| Factor | Action | Details |
|--------|--------|---------|
| Separate portals per data domain (zoning, permits, demographics) | Eliminate | NYC splits across ZoLa, ZAP, DOB NOW, and Population FactFinder; SF splits PIM, DataSF, and Pipeline. Plotlines eliminates this fragmentation by stitching all domains onto a single parcel-centric timeline |
| Static snapshots of neighborhood data | Reduce | Current city tools show "what is" but not "what happened and when." Reduce static dashboard views in favor of event-driven timelines with elapsed durations |
| Narrative scaffolding across project lifecycle | Raise | The research scores all major cities at 2.0-3.0 on "Integration Depth" because none guide residents through the full Proposal → Approval → Permit → Construction → Occupancy lifecycle. Raise this by building a stepper UI with city-median comparison times |
| Demographic change context tied to development events | Create | No US city currently overlays ACS demographic shifts (income, race, tenure) onto specific development milestones (rezone date, certificate of occupancy date). Create "before/after" demographic cards at development events |

**Core assumption challenged:** That residents can assemble a coherent neighborhood narrative from multiple open data portals. The research confirms this is false — even in cities like NYC and SF with 3.0/5 integration depth, the "narrative gap" remains the top pain point. No city has built a guided, time-aware story of how a place changed.

**Reframed value proposition:** Instead of yet another map or dashboard, build a "place biography" — a chronological narrative for any Richmond address that tells the story of what happened, when, why, and what changed for the people who live there.

---

## 2. Rapid Ideation — 8 Divergent Approaches

1. **Place Timeline Stepper** — Enter an address, see a vertical timeline of every event: zoning change, permit filed, permit issued, inspection passed, CO issued, ACS demographic shift — with elapsed times compared to city medians.
2. **StoryMap Pilot** — Use ArcGIS StoryMaps (already proven by LA City Planning) to create guided narratives for 3-5 Richmond neighborhoods experiencing rapid change (Scott's Addition, Manchester, Church Hill).
3. **"What Changed?" Before/After** — For any address, show a split-screen: left side shows the zoning, land use, and demographics at a historical date; right side shows today. Slider moves through time.
4. **Corridor Chronicle** — Instead of parcel-level, zoom out to a corridor (e.g., Broad Street) and show a map-based timeline of every development event along the entire corridor over 5 years.
5. **Displacement Risk Timeline** — Overlay Seattle-style equitable development indicators (income, tenure, race shifts) onto Richmond parcels that received zoning changes, creating a visual link between development approvals and demographic displacement.
6. **Neighborhood Newsletter Generator** — Auto-generate a monthly "What's happening on your block" newsletter for any census tract, pulling from Legistar, EnerGov, and ACS data.
7. **Community Memory Layer** — Let residents add their own annotations to the timeline: "This used to be a Black-owned barbershop" or "The community garden was here before the condos." Qualitative overlay on quantitative data.
8. **Developer Accountability Card** — For each developer with multiple Richmond projects, aggregate their timeline performance: average time from permit to CO, number of code violations, demographic impact of their portfolio.

**Most provocative:** #5 — Directly linking zoning approvals to demographic displacement creates a powerful equity narrative, but requires careful framing to avoid implying causation from correlation.
**Most feasible:** #2 — ArcGIS StoryMaps is already in Richmond's GeoHub stack, LA has proven the pattern, and 3-5 hand-curated neighborhood stories can be built in a weekend.

---

## 3. Rapid Design Sprint

**Problem in one sentence:** Richmond residents have no way to see the chronological story of how their neighborhood changed — from zoning decisions to construction to demographic shifts — in one place.

**Target user:** A long-time Church Hill resident who has watched the neighborhood transform over 10 years and wants to understand *how* it happened — what was approved, when, by whom, and what changed for the people who live there.

**User Journey:**
- **Start:** Resident sees a new building going up on their street and wonders "How did this get approved? What was here before? Who decided this?"
- **Friction:** Legistar has the hearing records but no map; EnerGov has the permits but no timeline; ACS has the demographics but no connection to specific developments; no tool stitches these together
- **Outcome:** Resident opens RVA Plotlines, enters their address, and sees: "2018: Zoning changed from R-5 to B-3 (Legistar ORD 2018-112). 2019: Demolition permit issued. 2020: Building permit for 24-unit apartment. 2022: Certificate of Occupancy. Demographics: Tract median income rose from $38K (2015-19 ACS) to $52K (2020-24 ACS). Renter share: 72% → 65%."

**Lowest-fidelity prototype:** An ArcGIS StoryMap for one neighborhood (Church Hill) with a curated timeline of 10 major development events, each annotated with Legistar links, permit details, and ACS demographic snapshots.

**First test:** Present the StoryMap to the Church Hill Association's monthly meeting (they are already engaged in development issues) and measure whether attendees report better understanding of how decisions led to current conditions.

---

## 4. Opportunity Mapper

### Pattern A: Curated Neighborhood StoryMaps (Quick Win)

- **Target user:** Engaged residents and neighborhood associations in Richmond's fastest-changing areas
- **Desired outcome:** A compelling, shareable narrative showing how their neighborhood changed, with links to source documents
- **Core workflow:** Select 3-5 neighborhoods → manually compile major development events from Legistar and EnerGov → geocode to parcels → pull ACS demographic snapshots at T-5 and T+5 → build ArcGIS StoryMap with timeline, map, and demographic cards
- **Dependencies:** ArcGIS StoryMaps (available via GeoHub), Legistar API (public), ACS data (free via Census API), GeoHub parcels (public)
- **Pros:** StoryMaps is proven (LA City Planning uses it); no ETL pipeline needed for curated content; compelling visual storytelling; shareable URL
- **Cons:** Manual curation doesn't scale beyond a few neighborhoods; static content requires periodic updates; no automated data pipeline
- **Richmond relevance:** Scott's Addition, Manchester, and Church Hill have experienced dramatic change visible to residents; these neighborhoods have active civic associations ready to engage

### Pattern B: Automated Place Timeline API (Stretch)

- **Target user:** Any Richmond resident for any address
- **Desired outcome:** Enter any address and see an auto-generated chronological timeline of all development events and demographic shifts
- **Core workflow:** Build a parcel crosswalk (GeoHub APN as primary key) → nightly ETL from Legistar (OData API) and EnerGov (export/API) → join events to parcels → overlay ACS tract-level demographics by year → serve via OGC API - Features → render with a stepper UI
- **Dependencies:** EnerGov data access (the blocker), address normalization pipeline (libpostal or similar for historical address changes), Census API for ACS time series, nightly ETL infrastructure
- **Pros:** Scales to every parcel; enables the "subscribe to place" notification feature; becomes living infrastructure
- **Cons:** EnerGov data access is uncertain (EnerGov wall); address-history resolver adds complexity; ACS is tract-level, not parcel-level, limiting demographic precision
- **Richmond relevance:** Research scores the "narrative gap" as the #1 pain point across all cities studied; an automated place timeline would be a national first

**Recommendation:** Build Pattern A (3 neighborhood StoryMaps) as the hackathon demo — it's visually compelling and achievable in a weekend. Pitch Pattern B as the technical vision that justifies investment in the Legistar Development Pipeline bundle.

---

## 5. Problem Scoping

| Dimension | Score (1-5) | Notes |
|-----------|-------------|-------|
| Impact | 5 | Addresses the #1 gap identified in the research: no city has built a coherent place-level narrative combining zoning, permits, and demographics |
| Feasibility | 3 | Curated StoryMaps: high feasibility. Automated pipeline: moderate, blocked by EnerGov access and address normalization |
| Data availability | 3 | Legistar and ACS are public; EnerGov data access is uncertain; historical address changes complicate parcel linkage |
| Clarity | 4 | "Tell me the story of my neighborhood" is immediately understood; the technical complexity is hidden |
| Demo credibility | 5 | A StoryMap for Church Hill or Scott's Addition with real data is inherently compelling — judges can see their own neighborhoods |

**Richmond-specific alignment:** Pillar 2 (Thriving Neighborhoods), PS1 (Neighborhood Development Discovery). Part of Bundle 2 (Legistar Development Pipeline). The research positions this as the highest-ambition version of the development transparency problem — the other ideas in the bundle (Site-Sign Text-Back, Dev Tracker, Participation Analytics) are components that a full Plotlines implementation would subsume.

**Policy/eligibility risks:** Overlaying demographic change onto development events risks implying causation (this building caused displacement). Must clearly label ACS data as tract-level estimates with margins of error, and note that correlation ≠ causation. Privacy: aggregate demographics at tract level to prevent re-identification per NYC privacy policy guidance.

**Weekend MVP shapes:**
1. **StoryMap trio:** Three ArcGIS StoryMaps (Church Hill, Scott's Addition, Manchester) each telling a 10-year development story with curated events, maps, and ACS demographic cards
2. **Address Timeline prototype:** A simple web page where entering an address returns a JSON timeline of Legistar events (from the API) and ACS demographics (from Census API), rendered as a vertical timeline

---

## 6. Assumption Mapping

| # | Assumption | Risk (1-5) | Uncertainty (1-5) | Priority |
|---|-----------|------|-------------|----------|
| 1 | Legistar Matters can be reliably geocoded to specific addresses/parcels | 4 | 4 | **High** |
| 2 | ACS tract-level demographics are meaningful when overlaid on parcel-level events | 3 | 2 | Medium |
| 3 | Residents want a chronological narrative, not just a map with pins | 3 | 3 | Medium |
| 4 | EnerGov permit data can be obtained for the automated version | 5 | 4 | **High** |
| 5 | Historical address changes won't break the parcel crosswalk over a 10-year timeline | 4 | 4 | **High** |
| 6 | Demographic change data won't be weaponized to block development ("see, this project caused displacement") | 4 | 3 | Medium |
| 7 | StoryMaps are accessible on mobile devices (where most residents will encounter the link) | 2 | 2 | Low |

**Top 3 to validate:**
1. **#1 — Legistar geocoding:** Pull 50 recent Matters from `webapi.legistar.com/v1/richmondva/matters` and check what percentage contain a street address in the title or body text. If <70% have geocodable addresses, the automated pipeline needs a manual enrichment step. Validation: 1-hour API analysis.
2. **#4 — EnerGov access:** Same as RVA Development Tracker — determine if permit data can be exported. Without permits, the timeline covers only the legislative lifecycle (zoning changes, hearings) and misses the construction lifecycle. Validation: DIT inquiry.
3. **#5 — Address history stability:** Check 10 parcels in Scott's Addition (a rapidly redeveloped area) to see if addresses changed during demolition/reconstruction. If addresses are unstable, the timeline will have gaps. Validation: GeoHub parcel history review.

---

## Key Takeaway

RVA Plotlines is the most ambitious idea in the Legistar Development Pipeline bundle — it aspires to build what no US city has achieved: a coherent, time-aware narrative of neighborhood change at the parcel level. The weekend-feasible version (3 curated StoryMaps) is highly demo-worthy, while the automated version is a multi-month infrastructure project that would position Richmond as a national leader in planning transparency.
