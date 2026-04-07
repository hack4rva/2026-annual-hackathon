# Innovation Analysis: Snow Tier Compass

**Generated:** April 2, 2026
**Inputs:** IDEA.md, RESEARCH_RESULT.md, 6 Innovation Lenses

---

## 1. Blue Ocean Reframing (ERRC Grid)

| Factor | Action | Details |
|--------|--------|---------|
| Real-time vehicle tracking complexity | Eliminate | Syracuse and Pittsburgh invested heavily in AVL telemetry (Samsara, Geotab, ArcGIS Velocity). Snow Tier Compass eliminates this entirely — no GPS, no fleet integration, no privacy negotiations. |
| Dynamic "last plowed" status | Reduce | PlowNYC and Syracuse show time-since-plowed per segment. Reduce this to a simpler signal: DPW's declared operational status ("Phase 1 active", "All routes complete"). |
| Tier explanation clarity | Raise | Fishers, IN publishes P1-P4 tiers but doesn't explain what they mean operationally. Raise this by pairing each tier with expected service timing ("Priority 1: cleared within 4 hours of 2+ inch accumulation"). |
| Year-round tier awareness | Create | Every city in the research only activates snow tools during events. Create a year-round static lookup so residents learn their tier *before* the first storm, reducing panic-driven 311 calls. |

**Core assumption challenged:** That residents need real-time plow tracking to feel informed. Syracuse's 30% call reduction came from visibility, not precision. A static tier lookup available year-round plus a simple operational status toggle during events could achieve similar deflection at 1% of the cost.

**Reframed value proposition:** Not a plow tracker — a *snow expectation setter*. "Your street is Priority 3. During a major event, Priority 1 roads are cleared first. DPW is currently working on Priority 1 routes. Your street is estimated to be reached in 8-12 hours."

---

## 2. Rapid Ideation — 8 Divergent Approaches

1. **PDF-to-GeoJSON Converter** — A one-time digitization tool that takes DPW's legacy paper tier maps, georectifies them, and outputs GeoJSON polygons tagged with tier attributes. The tool itself is the hackathon demo.
2. **SMS Tier Lookup** — Text your address to a city shortcode, get back: "Your street: Priority 2. During active snow events, expect service 4-8 hours after Priority 1 routes." No app, no website, no map.
3. **Snow Event Timeline** — A vertical timeline UI showing which priority tier DPW is currently working on, with historical data from past storms showing how long each tier took.
4. **Neighbor Plow Report** — Crowdsourced "my street has been plowed" reports from residents, overlaid on the tier map. Social proof without needing GPS on city trucks.
5. **Parking Ticket Shield** — Cross-reference snow emergency parking restrictions with tier data. Alert residents when their parked car is on a Priority 1 route about to be plowed, helping them avoid towing.
6. **Tier Equity Audit** — Map snow tiers against Census income/race data to surface whether lower-income neighborhoods are systematically assigned to lower-priority tiers.
7. **School Delay Predictor** — Combine snow accumulation forecasts with tier data to predict which school bus routes will be impacted, giving parents advance warning.
8. **DPW Crew Appreciation Board** — During active snow events, residents can post thank-you messages geotagged to their street. Visible to DPW crews. Builds trust rather than complaint infrastructure.

**Most provocative:** #6 (Tier Equity Audit) — Forces a policy conversation about whether tier assignments reflect equitable resource distribution or just traffic volume.
**Most feasible:** #2 (SMS Tier Lookup) — Requires only the digitized GeoJSON and a Twilio webhook. No frontend at all.

---

## 3. Rapid Design Sprint

**Problem in one sentence:** Richmond residents don't know what snow removal tier their street is assigned to, so they flood 311 with "when will my street be plowed?" calls during every storm.

**Target user:** A resident on a residential side street (likely Priority 2 or 3) who has never seen a city plow and doesn't know whether their street is even on DPW's list.

**User Journey:**
- Start: Snow begins accumulating. Resident wonders when their street will be plowed.
- Friction: They check rva.gov → find no snow tier information → call 311 → wait on hold → get a generic "we're working on it" response → feel ignored.
- Outcome: Resident enters their address → sees "Your street is Priority 3. During major events, DPW clears Priority 1 arterials first (typically 2-4 hours), then Priority 2 collectors (4-8 hours), then Priority 3 residential (8-16 hours). Current status: DPW is actively clearing Priority 1 routes."

**Lowest-fidelity prototype:** A single-page site with an address input. Backend: GeoJSON file of digitized tier polygons. Geocode the address, point-in-polygon test, return the tier and a canned explanation paragraph. The entire app is a static site with one API call.

**First test:** During the next Richmond snow forecast, share the tool with 50 residents via Nextdoor or a council member's email list. Measure: Did they find their tier? Did the explanation reduce their urge to call 311?

---

## 4. Opportunity Mapper

### Pattern A: Static Tier Lookup + Operational Status (Quick Win)
- **User:** Any Richmond resident.
- **Outcome:** Know their snow tier year-round; during events, see which tier DPW is currently servicing.
- **Workflow:** Address → geocode → point-in-polygon against digitized tier GeoJSON → return tier + explanation. During events, DPW toggles a simple status field ("Currently clearing: Priority 1").
- **Dependencies:** DPW snow-tier PDFs (confirmed to exist per IDEA.md). One-time digitization into GeoJSON. GeoHub geocoder.
- **Richmond relevance:** Scored 21/25 (Tier S) precisely because it reuses the proven StreetLights geocoder + polygon pattern. The IDEA.md confirms this is the same architecture.

### Pattern B: Full PlowNYC-Style Tracker (Stretch)
- **User:** DPW operations managers + engaged residents.
- **Outcome:** Real-time segment-level "last plowed" status during active events.
- **Workflow:** Requires AVL telemetry on DPW fleet → ArcGIS Velocity pipeline → segment snapping → public dashboard.
- **Dependencies:** DPW fleet GPS hardware (DPW Fleet GPS is identified as one of the "Five Structural Walls" blocking implementation). Samsara or Geotab contract. Union negotiations for public tracking.
- **Richmond relevance:** Blocked by the DPW Fleet GPS wall. Research shows Pittsburgh's partial implementation drew criticism. Not viable without $150k+ investment and labor negotiation.

**Recommendation:** Pattern A is the clear winner. It scores Tier S for implementation reality because it avoids every structural wall. Pattern B is a multi-year initiative blocked by the Fleet GPS wall.

---

## 5. Problem Scoping

| Dimension | Score (1-5) | Notes |
|-----------|-------------|-------|
| Impact | 4 | Addresses 311 call deflection (Syracuse saw 30% reduction). Richmond averages 3-5 snow events/year — seasonal but high-intensity demand. |
| Feasibility | 5 | Reuses proven StreetLights pattern. Only blocker is one-time PDF digitization. |
| Data availability | 4 | DPW tier PDFs exist but need digitization. GeoHub geocoder is live. Operational status during events requires DPW cooperation for manual updates. |
| Clarity | 5 | Single question: "What tier is my street?" Extremely well-scoped. |
| Demo credibility | 5 | Type an address, get a tier. Instantly demonstrable with mock or real data. |

**Richmond-specific alignment:** Directly addresses PS2 (Fleet Operations & Street Service Tracking). Ranked #16 of 73 ideas. Tier S implementation reality score means this is one of the most shippable ideas in the entire hackathon.

**Policy/eligibility risks:** DPW may be reluctant to publish tier assignments if they perceive political risk (e.g., neighborhoods discovering they're Priority 3). The tier equity question (#6 in Crazy 8s) could surface uncomfortable patterns.

**Weekend MVP shapes:**
1. **Mock-tier demo:** Create synthetic tier polygons from Richmond road centerlines (arterials = P1, collectors = P2, residential = P3). Build the full UX. Replace with real digitized data post-hackathon.
2. **Real-data sprint:** If a team member can digitize even one quadrant of DPW's PDF maps during the hackathon, demo with real data for that area and mock data elsewhere.

---

## 6. Assumption Mapping

| # | Assumption | Risk | Uncertainty | Priority |
|---|-----------|------|-------------|----------|
| 1 | DPW's paper snow-tier maps can be digitized accurately into GeoJSON | High | Medium | TEST FIRST |
| 2 | DPW will cooperate with publishing tier assignments publicly | High | High | TEST FIRST |
| 3 | Knowing your tier actually reduces the urge to call 311 | High | Medium | TEST FIRST |
| 4 | The tier assignments in DPW's PDFs are current and accurate | Medium | High | Validate early |
| 5 | DPW will manually update operational status during active events | Medium | Medium | Validate early |
| 6 | Richmond's GeoHub geocoder resolves residential addresses reliably | Low | Low | Monitor |
| 7 | The StreetLights polygon lookup pattern scales to snow-tier polygons | Low | Low | Monitor |

**Top 3 to validate:**
1. **DPW PDF digitization feasibility** — Validation: Obtain one DPW snow-tier map PDF. Attempt georectification in QGIS. Time the process. If >4 hours per quadrant, the one-time cost estimate needs revision.
2. **DPW willingness to publish tiers** — Validation: Direct conversation with DPW leadership. Ask: "Would you publish your snow tier map if it meant fewer 311 calls?" Reference Syracuse's 30% reduction.
3. **Tier knowledge deflects 311 calls** — Validation: During next snow event, survey 20 residents who called 311. Ask: "If you had known your street was Priority 3 and DPW was currently on Priority 1, would you have still called?" Binary yes/no.

---

## Key Takeaway

Snow Tier Compass is a rare "just digitize what already exists" opportunity. The tier data exists in DPW PDFs, the lookup pattern is proven (StreetLights), and the 311 deflection evidence from Syracuse (30% reduction) provides a clear ROI story. The only real risk is political — DPW publishing tier assignments makes implicit service inequities explicit. A hackathon team should focus on the digitization pipeline and the explanatory UX, not on building a real-time tracker.
