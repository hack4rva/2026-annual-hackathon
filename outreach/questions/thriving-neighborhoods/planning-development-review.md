# Outreach: Planning & Development Review — Development Discovery Data — Research & Questions

### What we've confirmed through public sources

- **Legistar API:** Richmond's Legistar instance uses the client slug `richmondva` and is publicly accessible without a token at `https://webapi.legistar.com/v1/richmondva/Matters`. No CORS restrictions are enforced. The primary limit is 1,000 items per response, requiring `$top`/`$skip` pagination.
- **Legistar-to-map integration:** The Legistar OData API and ArcGIS REST API can be cross-linked by a third-party tool. This pattern is proven nationally — Chicago's Councilmatic (built by DataMade) routinely ingests Legistar data and overlays ArcGIS map layers using shared identifiers like addresses and parcel IDs.
- **Plans of Development layer:** The GeoHub exposes a confirmed REST endpoint at `https://services1.arcgis.com/k3vhq11XkBNeeOfM/arcgis/rest/services/PlanOfDevelopment/FeatureServer/0`. However, this dataset was last updated June 29, 2022 — nearly four years stale.
- **SUP and BZA layers:** ArcGIS Online item pages exist for Special Use Permits (`item ID 07a2463e`) and Board of Zoning Appeals, but direct REST endpoint URLs and field schemas are not documented publicly.
- **Civic Associations boundary data:** The GeoHub publishes a "Civic Associations" feature service accessible via ArcGIS REST API and GeoJSON export at `richmond-geo-hub-cor.hub.arcgis.com/datasets/civic-associations`.
- **EnerGov (permits):** The EnerGov Citizen Self Service portal at `energov.richmondgov.com` does not expose a public API, data export, or documented integration pathway. There is no EnerGov-to-Legistar link. This is the single largest data gap for development discovery tools.
- **Notification gap:** Legal notice for rezonings and SUPs is mailed only to property owners within 150 feet. Citywide, 59% of households are renters (ACS data), meaning the majority of residents are structurally excluded from direct notification.
- **Engagement proxy:** The only available participation data comes from Richmond 300 (2018–2020): 1,030 survey respondents were 72% White and 20% Black/African American. No demographic or geographic data exists for routine Planning Commission hearings.
- **Community bridges:** Confirmed organizations currently serving as informal development information channels include Union Hill Civic Association, Church Hill Civic Association, and Richmond Tenants Union.
- **Prior development trackers:** No city-led or Code for RVA development tracker exists. The closest is the Richmond Regional Development Tracker, an ArcGIS Experience app built by PlanRVA and BizSense covering major regional projects. BizSense also operates a separate commercial tracker.
- **Survivors vs. failures:** National civic tech research shows the tools that survive post-hackathon share durable data pipelines connected to stable APIs (like Legistar), institutional stewardship, and clearly defined scope. Failures share data drift from unstable feeds, no ongoing maintainers, and volunteer burnout.

### What we still need your help with

Five specific questions only your department can answer:

1. **Hearing participation data:** Does the City collect any data on who attends or submits comments at Planning Commission public hearings — demographics, zip codes, repeat vs. first-time commenters? Our research found zero published data on routine hearing participation (only the Richmond 300 survey, which was a one-time citywide planning process).

2. **GeoHub update cadence:** The GeoHub Development Tracker layer is described as "updated periodically" with no SLA. The Plans of Development dataset hasn't been refreshed since June 2022. Is there a defined update schedule, and would your department support more frequent updates if a tool depended on it?

3. **EnerGov export capability:** We confirmed no public API exists, but does EnerGov support any internal export, scheduled data extract, or integration mechanism that could allow linking building permit data to Legistar zoning cases — even on a batch basis?

4. **Civic association boundaries — completeness:** The GeoHub Civic Associations layer is the best machine-readable boundary dataset we've found. Does your department consider it complete and current, or are there associations or boundaries it doesn't cover?

5. **Prior tool attempts:** We found no record of the City or a civic tech group attempting a resident-facing development tracker before. Has your department discussed, piloted, or been approached about such a tool? Understanding past attempts would help teams avoid repeating known problems.

### What we're recommending

Based on rubric scores and feasibility analysis, our top pilot recommendations for development discovery are:

1. **Participation Analytics Dashboard** (Idea #6, scored 95/105 Pillar, 93/105 Mayor's Choice) — The first tool to measure who civic transparency is actually reaching. Instruments any notification or discovery tool to track engagement by geography, demographics, and first-time vs. repeat participation. Strongest innovation story in the pillar — no city currently measures this.

2. **Legistar-to-Map Cross-Linker** (Idea #1, scored 87/105 Pillar, 89/105 Mayor's Choice) — Foundational data pipeline that connects Legistar legislative items to ArcGIS map locations by address. Every downstream tool (alerts, timelines, SMS lookup) depends on this linkage. Uses only publicly accessible APIs — no City system access required.

3. **Renter-Aware Notification System** (Idea #4, scored 90/105 Pillar, 88/105 Mayor's Choice) — Addresses the structural exclusion of the 59% renter population from property-owner-only mailed notices. Includes printable community assets that bypass the digital divide entirely. Highest equity score in the development discovery problem statement.

---

## Context for the SME
Three hackathon teams built development discovery tools using Legistar and ArcGIS data. The technical path is clear — the APIs are open and the cross-linking pattern is proven nationally. The blockers are EnerGov's closed system, stale GeoHub data, and the absence of any participation measurement at Planning Commission hearings. This email validates whether those blockers have workarounds the teams don't know about.

## Why This Person
The Director of Planning & Development Review (or the Zoning Administrator) controls both the data flows into GeoHub's planning layers and the operational context for Planning Commission hearings. They would know the EnerGov export situation, the GeoHub update cadence, and whether prior development tracker conversations have happened internally.

## Data Questions (internal tracking)
- [ ] Q1: Planning Commission hearing participation demographics / tracking
- [ ] Q2: GeoHub Development Tracker update cadence and SLA
- [ ] Q3: EnerGov internal export or integration capability
- [ ] Q4: Civic Associations boundary layer completeness and currency
- [ ] Q5: Prior internal discussions or pilots for a development tracker tool

## Research Sources
- `_research-answers/dd_q1_system_data.md` — Legistar API, GeoHub layers, EnerGov access
- `_research-answers/dd_q2_usage_equity.md` — Richmond 300 participation data, renter/owner split, digital divide
- `_research-answers/dd_q3_prior_art.md` — Councilmatic, regional trackers, survivor patterns
- `_shared-dev-discovery/jtbd_analysis.md` — full JTBD + 20 answered questions
- `NEW_IDEAS_RUBRIC_GRADES.md` — scored ideas with tier rankings
