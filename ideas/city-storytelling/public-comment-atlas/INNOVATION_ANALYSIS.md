# Innovation Analysis: Public Comment Atlas

## 1. Blue Ocean Reframing (ERRC Grid)

**Core assumption challenged:** Public comments are an input to government decisions — not a dataset residents should see mapped back to them.

| Action | Element | Rationale |
|--------|---------|-----------|
| **Eliminate** | Assumption that public comments are consumed only by staff and officials | Comments are public records; surfacing them geographically transforms them from bureaucratic artifacts to civic intelligence |
| **Eliminate** | Reliance on Facebook/social media for gauging neighborhood sentiment | Legistar eComments are structured, official, and already tied to specific agenda items — far more actionable than social media noise |
| **Reduce** | Manual comment processing by planning staff | Python-legistar-scraper automates extraction; NLP geoparsing recovers locations from free text at 0.91 accuracy@161km |
| **Reduce** | IP-based geolocation (coarse, VPN-skewed) | Prefer explicit addresses from comment text; geocode within city bounding box with confidence scores |
| **Raise** | Geographic equity analysis of civic voice | Compute "representation ratios" comparing commenter demographics to baseline population by census tract — expose participation deserts |
| **Raise** | District-level routing of feedback | PublicInput's "Regions" feature segments comments by council district; replicate this for Richmond council members |
| **Create** | A public, browsable "atlas" of where Richmond residents have spoken — and where they haven't | No US city currently publishes a persistent, geographic archive of planning comments; this creates a first-of-its-kind civic participation record |
| **Create** | Participation gap alerts for underrepresented neighborhoods | When a planning matter gets zero comments from affected census tracts, trigger targeted outreach — Hillsborough County captured 79,572 responses using geofenced CRM |

**Key reframe:** Public comments aren't just input for officials — they're a spatial dataset that reveals who participates in city governance and who doesn't. The atlas makes silence visible.

## 2. Rapid Ideation (Crazy 8s)

| # | Idea | Provocation Level |
|---|------|-------------------|
| 1 | **Legistar Comment Extractor** — Python script using `python-legistar-scraper` to pull all eComments from Richmond's Legistar API, geocode addresses, and output GeoJSON. | Practical |
| 2 | **District Sentiment Dashboard** — For each council district, show support/oppose/neutral breakdown per agenda item. Brief council members before meetings. | Practical |
| 3 | **Participation Desert Map** — Overlay comment density per 1,000 residents against median household income and renter percentage by census tract. Publicly expose which neighborhoods are silent. | Provocative |
| 4 | **"Your Neighborhood Spoke" Email Digest** — After each planning commission meeting, auto-send residents a summary of comments from their neighborhood and how their council member voted. | Moderate |
| 5 | **NLP Location Extractor** — When comments lack addresses, use spaCy/Mistral 7B to extract toponyms from free text ("the lot on Broad Street near the old bus station") and geocode them. | Moderate |
| 6 | **Comment Time Machine** — Visualize how public comment geography has shifted over 5-10 years. Which neighborhoods started commenting? Which stopped? Pair with demographic change data. | Provocative |
| 7 | **Anonymous Participation Layer** — Allow residents to see the atlas and add anonymous "I care about this" pins to planning matters without submitting a formal comment. Lower the participation floor. | Provocative |
| 8 | **Planning Staff Equity Scorecard** — Before approving any planning matter, staff must see: how many comments, from how many unique tracts, and the representation ratio. If below threshold, mandate additional outreach. | Moderate |

## 3. Rapid Design Sprint

**Problem sentence:** Richmond's public comments on planning and zoning matters are buried in Legistar meeting agendas — invisible to residents, with no geographic view of who is participating and which neighborhoods are silent.

**User journey (5 steps):**
1. Resident hears about a rezoning proposal near their home → visits the Public Comment Atlas
2. Sees a map of all comments on that planning matter, color-coded by support/oppose/neutral
3. Notices their census tract has zero comments → sees a "participation gap" indicator
4. Clicks "Submit Comment" → redirected to Legistar's official eComment form for that agenda item
5. After the meeting, the atlas updates with the decision and a representation ratio showing which neighborhoods were heard

**Prototype shape:** A Leaflet/Mapbox web map. Data pipeline: `python-legistar-scraper` → CSV of eComments with agenda item, position, text → geocode via Nominatim (city bounding box) → spatial join to census tracts and council districts → GeoJSON. Frontend: filterable by meeting date, agenda item, district, and support/oppose. Overlay: census tract demographics from ACS for representation ratio. No user accounts.

**First test:** Extract all Planning Commission eComments from the last 12 months via Legistar API. Geocode them. Publish the map. Share with 3 council members and 3 civic association leaders. Measure: engagement, feedback quality, "I didn't know this existed" reactions.

## 4. Opportunity Mapper

### Opportunity 1: Civic Voice Visibility

| Dimension | Detail |
|-----------|--------|
| **User** | Richmond residents, civic association leaders, journalists |
| **Outcome** | See where public comments originate geographically; identify participation hotspots and deserts |
| **Workflow** | Legistar API → extract eComments → geocode → map → publish |
| **Dependencies** | Legistar API (public, no auth, 1000-record pagination cap); GeoHub parcel data for geocoding |
| **Richmond relevance** | Richmond uses Legistar (OData API); the Legistar-to-GeoJSON pipeline is shared with 3 other bundle ideas (Site-Sign Text-Back, RVA Plotlines, Participation Analytics Dashboard) |

### Opportunity 2: Equity-Driven Outreach Targeting

| Dimension | Detail |
|-----------|--------|
| **User** | City planning staff, council members, community engagement coordinators |
| **Outcome** | Identify underrepresented neighborhoods before decisions are made; target outreach where silence indicates exclusion |
| **Workflow** | Compute representation ratios by census tract → flag gaps → trigger geofenced outreach (email/SMS/door-to-door) |
| **Dependencies** | ACS demographic data; council district boundaries; CRM or outreach tool (PublicInput, Granicus) |
| **Richmond relevance** | Hillsborough County's geofenced CRM outreach captured 79,572 survey responses for disaster recovery; Richmond can replicate for planning engagement |

### Opportunity 3: Longitudinal Civic Participation Tracking

| Dimension | Detail |
|-----------|--------|
| **User** | Researchers, city administration, civic tech community |
| **Outcome** | Track changes in participation geography over time; correlate with demographic shifts, development patterns |
| **Workflow** | Build historical dataset from Legistar archive → normalize by population → visualize trends |
| **Dependencies** | Legistar historical data availability; consistent geocoding over time |
| **Richmond relevance** | No US city currently publishes this longitudinal view; Richmond could set the standard for transparent civic participation measurement |

## 5. Problem Scoping

| Dimension | Score (1-5) | Rationale |
|-----------|:-----------:|-----------|
| **Impact** | 5 | Makes civic participation visible; exposes equity gaps; directly informs city decisions |
| **Feasibility** | 5 | Legistar API is public and well-documented; geocoding is commodity; the pipeline is shared with 3 other bundle ideas |
| **Data readiness** | 4 | Legistar eComments exist but vary in structure/completeness; some matters have rich comments, others have none; IP-based locations are coarse |
| **Problem clarity** | 5 | Pain point is crystal clear: comments buried in agendas, no geographic view, no equity analysis |
| **Demo-ability** | 5 | A map with colored dots (support/oppose/neutral) overlaid on neighborhoods is immediately legible and compelling |

**Weekend MVP shapes:**
- **Shape A (Extract + Map):** Python script pulling Legistar eComments → geocode → Leaflet map with pins color-coded by position. ~6 hours.
- **Shape B (District Dashboard):** Shape A + spatial join to council districts → per-district sentiment breakdown table + representation ratio per census tract. ~12 hours.
- **Shape C (Full Atlas):** Shape B + NLP geoparsing for free-text locations (spaCy) + time slider for historical view + embeddable widget for council member pages. ~20 hours.

## 6. Assumption Mapping

| # | Assumption | Risk (1-5) | Uncertainty (1-5) | R × U | Validation method |
|---|-----------|:----------:|:-----------------:|:-----:|-------------------|
| 1 | Richmond's Legistar API exposes eComments with usable location data | 4 | 3 | 12 | Query `webapi.legistar.com/v1/richmondva/` for Events and Matters; check eComment fields |
| 2 | Geocoding eComment locations within Richmond produces adequate match rates | 4 | 3 | 12 | Run geocoder on 100 sample comments; measure match rate and confidence distribution |
| 3 | Public display of comment geography doesn't chill participation | 5 | 3 | 15 | Consult with civic engagement experts; review PublicInput/Community Remarks precedents; consider PII aggregation |
| 4 | Planning staff would use a participation equity scorecard | 3 | 4 | 12 | Interview 2-3 Richmond planning staff; ask if representation ratios would change their outreach decisions |
| 5 | Council members want district-level sentiment breakdowns | 3 | 2 | 6 | Offer a sample report to one council office; measure interest |
| 6 | NLP geoparsing of free-text comments produces actionable locations | 3 | 3 | 9 | Test spaCy/Mistral on 50 Richmond Legistar comments; measure extraction accuracy |
| 7 | Historical Legistar data goes back far enough for longitudinal analysis | 2 | 3 | 6 | Query API for earliest event dates; check data completeness |

**Top 3 to validate first:**
1. **Participation chilling effect (R×U=15):** If mapping comment origins discourages future participation, the project backfires. Must implement PII redaction and block-group aggregation. Consult civic engagement literature on PPGIS response bias.
2. **Legistar eComment location data quality (R×U=12):** IP-based locations may be too coarse; explicit addresses may be rare. Test with real Richmond data.
3. **Geocoding match rate (R×U=12):** If only 20% of comments have geocodable locations, the map looks empty. NLP extraction becomes essential.

---

## Key Takeaway

The Public Comment Atlas is the highest-scoring blue sky idea across all pillars for good reason: it sits on top of public, well-documented infrastructure (Legistar API), serves a clear civic need (making participation visible), and creates a first-of-its-kind artifact (no US city publishes a persistent geographic archive of planning comments). The critical risk isn't technical — it's ethical. Mapping comment origins could chill participation if residents fear visibility. The mitigation: aggregate to census tract or block group, redact PII, and frame the atlas as a tool for equity (exposing silence) rather than surveillance (tracking speakers).
