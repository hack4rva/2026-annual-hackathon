# Innovation Analysis: Road Maintenance Fleet Tracker

**Generated:** April 2, 2026
**Inputs:** RESEARCH_RESULT.md, 6 Innovation Lenses

---

## 1. Blue Ocean Reframing (ERRC Grid)

| Factor | Action | Details |
|--------|--------|---------|
| Individual vehicle tracking on public map | Eliminate | Pittsburgh drew union grievances and public criticism for showing truck-level dots. The research shows anonymization was required as a negotiation concession. Eliminate vehicle-level display entirely. |
| Real-time GPS telemetry requirement | Reduce | Syracuse, NYC, and Pittsburgh invest in Samsara/Geotab AVL hardware ($150k+ per fleet). Reduce the telemetry bar by accepting lower-fidelity signals: supervisor zone toggles, crew check-ins via mobile app (Esri QuickCapture pattern). |
| Segment-level "last serviced" status | Raise | Ann Arbor and Syracuse show time-since-plowed per segment. Raise this by adding *service type* (plowed, salted, swept) and *impediment flags* (blocked by parked cars, state-maintained road). Syracuse overlays illegally parked cars — replicate this. |
| Multi-service unified dashboard | Create | Every city in the research tracks snow, sweeping, and potholes in separate tools. Chicago's Sweeper Tracker, PlowNYC, and Ventura's pothole map are all isolated. Create a single "DPW Operations" dashboard covering all three services with a unified UX. |

**Core assumption challenged:** That fleet tracking requires GPS hardware on every vehicle. The research documents five non-GPS patterns (schedule/zone calendars, work-order/311 closures, supervisor toggles, crew mobile check-ins, delayed/aggregated AVL) that cities use successfully today. Richmond can start without any hardware procurement.

**Reframed value proposition:** Not a fleet tracker — a *service delivery dashboard*. "Has my street been serviced?" answered at the zone/segment level, powered by whatever data source DPW already has (work orders, supervisor updates, 311 closures), without requiring a single GPS unit.

---

## 2. Rapid Ideation — 8 Divergent Approaches

1. **Supervisor Toggle Board** — Milwaukee's leaf collection model applied to snow: DPW supervisors tap zones from "Scheduled" → "In Progress" → "Complete" on a mobile web UI. Public map updates in real-time. Zero hardware.
2. **311-Powered Progress Map** — Color-code street segments based on 311 ticket status: green = no open tickets, yellow = open "missed plow" ticket, red = multiple open tickets. Turns complaints into a progress signal.
3. **Crew Selfie Check-In** — Drivers use a simple mobile app to take a geotagged photo at the start and end of each route segment. Photos auto-publish to a public timeline. Visual proof of service.
4. **Weather-Adjusted Service Promise** — Instead of showing what's been done, show what DPW *promises* to do based on weather severity. "2-inch snow event: Priority 1 routes cleared by 6am. Priority 2 by noon." Then track against the promise.
5. **Open Data Historical Audit** — Publish historical service delivery data (segments served per storm, average time-to-clear per tier) so residents and journalists can audit DPW performance over time. NYC publishes 475M PlowNYC records.
6. **Pothole Prediction Heatmap** — Use road age, traffic volume, and past pothole 311 data to predict where potholes will form. Flag segments for proactive maintenance. Not tracking — forecasting.
7. **Resident "Snow Report" Crowdsource** — Like ski resort snow reports: residents report road conditions (clear, slushy, unplowed) via a simple mobile form. Aggregated to segment-level consensus. Doesn't require DPW data at all.
8. **"Sweeper Coming" Parking Alert** — For street sweeping: 24-hour advance SMS alert to residents on the scheduled sweep segment. "Move your car by 8am tomorrow — sweeping on your block." Reduces parking tickets and sweeping obstructions.

**Most provocative:** #7 (Resident "Snow Report") — Bypasses DPW data entirely by crowdsourcing road conditions. Could be seen as adversarial or empowering depending on framing.
**Most feasible:** #1 (Supervisor Toggle Board) — Milwaukee's model is proven, requires zero hardware, and maps directly to Richmond's DPW zone structure.

---

## 3. Rapid Design Sprint

**Problem in one sentence:** Richmond residents have no way to know whether DPW has serviced their street or when service is expected, leading to 311 call floods during snow events and sweeping season.

**Target user:** A resident on a residential side street during a snow event who can see main roads are plowed but has no information about when their street will be reached.

**User Journey:**
- Start: 6 inches of snow has fallen. Resident looks outside and sees their street is unplowed.
- Friction: They check rva.gov — no snow operations page. They call 311 — hold time is 45 minutes. They post on Nextdoor — neighbors are equally uninformed. They shovel their car out and hope for the best.
- Outcome: Resident opens the DPW dashboard → sees their zone is "Scheduled — Priority 2" → sees that DPW is currently working Priority 1 zones → reads "Priority 2 zones typically serviced 4-8 hours after Priority 1 completion" → decides to wait until afternoon to attempt driving.

**Lowest-fidelity prototype:** A static web page with a map showing Richmond divided into DPW zones. Each zone has a manually-set status indicator (Scheduled / In Progress / Complete). A sidebar explains what the statuses mean and when to expect service by priority tier. Updated by a DPW supervisor via a simple authenticated toggle UI.

**First test:** During the next Richmond snow event, have one DPW supervisor update zone statuses on the prototype. Share the URL with 100 residents via a council member's email list. Measure: How many checked it? Did it reduce their desire to call 311?

---

## 4. Opportunity Mapper

### Pattern A: Zone-Status Dashboard with Supervisor Toggles (Quick Win)
- **User:** Richmond residents during snow, sweeping, or leaf collection events.
- **Outcome:** Zone-level status ("Scheduled → In Progress → Complete") updated by DPW supervisors.
- **Workflow:** DPW zones published as polygons → supervisor mobile/web UI to toggle status → public dashboard auto-updates → optional SMS alerts for status changes.
- **Dependencies:** DPW zone/route polygons (exist internally, may need digitization). Supervisor buy-in for manual updates. ArcGIS or similar for hosting.
- **Richmond relevance:** Richmond DPW operates on zone-based service delivery. This matches Milwaukee's proven pattern. No GPS hardware needed. The DPW Fleet GPS structural wall is completely avoided.

### Pattern B: GPS-Instrumented Fleet Tracker (Stretch)
- **User:** DPW operations managers + engaged residents.
- **Outcome:** Segment-level "last serviced" status with time-since-service coloring (Syracuse/PlowNYC model).
- **Workflow:** AVL hardware on fleet → Samsara/Geotab telemetry → ArcGIS Velocity for segment snapping → intentional 5-min delay → public dashboard.
- **Dependencies:** DPW Fleet GPS (identified as one of the "Five Structural Walls" in the implementation reality analysis). Vendor contract ($150k+). Union negotiation. ArcGIS Velocity licensing.
- **Richmond relevance:** Blocked by the DPW Fleet GPS wall. The research documents Pittsburgh's backlash (trucks under 5mph not registering, trucks leaving districts to reload salt disappearing from map). High risk for a city without prior GPS deployment.

**Recommendation:** Pattern A is the only viable hackathon path and scores well on implementation reality. Pattern B is a 12-month city procurement project that Pattern A's adoption data can justify.

---

## 5. Problem Scoping

| Dimension | Score (1-5) | Notes |
|-----------|-------------|-------|
| Impact | 4 | Syracuse saw 30% 311 call reduction after deploying their snow map. Richmond could see similar deflection. Applies to snow, sweeping, and leaf collection. |
| Feasibility | 3 | Zone-status approach (Pattern A) is low-tech and achievable. But requires DPW cooperation for zone data and supervisor participation. |
| Data availability | 2 | DPW zone polygons likely exist internally but are not published. DPW Fleet GPS data is explicitly unavailable (structural wall). Schedules may be in paper or internal systems. |
| Clarity | 4 | "Has my street been serviced?" is a clear resident question. |
| Demo credibility | 3 | A zone-toggle dashboard can be demoed with mock data, but without real DPW zones it's clearly simulated. A demo with real zones is much more compelling. |

**Richmond-specific alignment:** Directly addresses PS2 (Fleet Operations & Street Service Tracking). The DPW Fleet GPS wall is the biggest constraint — this idea's innovation is working around it entirely with supervisor toggles and non-GPS patterns.

**Policy/eligibility risks:** DPW may resist publishing zone-level progress if it creates accountability pressure for slower zones. Labor concerns parallel those documented in the research (ACLU criticism of Boston fleet tracking, Connecticut union pushback on Geotab). Even supervisor toggles create a record that could be used in grievances. Pittsburgh's experience with incomplete telemetry causing public backlash is a cautionary tale.

**Weekend MVP shapes:**
1. **Mock-zone dashboard:** Create synthetic DPW zones based on Richmond's neighborhood boundaries. Build the toggle UI and public dashboard. Demo the full workflow with simulated status changes. Replace with real DPW zones post-hackathon.
2. **311-powered prototype:** Query Richmond's existing 311 data (if available via Socrata or Open Data Portal) for snow/sweeping-related requests. Map open vs. closed requests to approximate service progress without any DPW cooperation.

---

## 6. Assumption Mapping

| # | Assumption | Risk | Uncertainty | Priority |
|---|-----------|------|-------------|----------|
| 1 | DPW zone polygons exist in a digitizable format | High | High | TEST FIRST |
| 2 | DPW supervisors will consistently update zone statuses during active operations | High | High | TEST FIRST |
| 3 | Zone-level status is granular enough to satisfy residents (vs. segment-level) | High | Medium | TEST FIRST |
| 4 | DPW leadership will support publishing service progress publicly | Medium | High | Validate early |
| 5 | The non-GPS approach won't be seen as "less legitimate" than real-time tracking | Medium | Medium | Validate early |
| 6 | Richmond's 311 system captures enough snow/sweeping complaints to serve as a proxy signal | Medium | High | Validate early |
| 7 | The public dashboard won't create unrealistic expectations that DPW can't meet | Medium | Medium | Monitor |

**Top 3 to validate:**
1. **DPW zone data availability** — Validation: Contact DPW directly or file a FOIA request for snow removal zone maps. Alternatively, check if DPW zones align with existing public geographic boundaries (council districts, Census tracts) that could serve as proxies.
2. **Supervisor toggle willingness** — Validation: Interview 2-3 DPW supervisors. Ask: "During a snow event, could you spend 30 seconds at the end of each shift tapping a button to mark zones as 'complete'?" Gauge resistance.
3. **Zone granularity sufficiency** — Validation: During a snow event, ask 20 residents: "If you could see that your zone (covering ~50 blocks) was 'In Progress,' would that reduce your urge to call 311? Or would you need to know about your specific block?"

---

## Key Takeaway

The road maintenance fleet tracker faces the toughest implementation constraint in the pillar: the DPW Fleet GPS structural wall. But the research reveals a clear workaround — five non-GPS patterns that cities successfully use today. Milwaukee's supervisor toggle model achieves useful transparency with zero hardware, zero union negotiation, and zero vendor contracts. A hackathon team should build the toggle-based dashboard and use it to demonstrate that transparency doesn't require surveillance.
