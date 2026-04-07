# Innovation Analysis: GRTC–Construction Conflict Detector

**Generated:** April 2, 2026
**Inputs:** IDEA.md, RESEARCH_RESULT.md, 6 Innovation Lenses

---

## 1. Blue Ocean Reframing (ERRC Grid)

| Factor | Action | Details |
|--------|--------|---------|
| Manual dispatcher review of construction emails | Eliminate | The research shows most agencies are at Level 0 (manual): reliance on contractor emails and dispatcher review. Eliminate human-in-the-loop for conflict *detection* — automate the spatial join entirely. |
| Complex real-time geo-event infrastructure | Reduce | The research describes Level 3 (ArcGIS Velocity, real-time IoT ingestion, webhook-triggered re-dispatch) as the aspirational target. Reduce to Level 2: nightly batch processing is sufficient for a 50-meter buffer conflict check. Real-time is overkill for construction zones that don't change hourly. |
| No-show policy fairness for construction-disrupted riders | Raise | FTA requires that trips missed for reasons beyond the rider's control cannot count toward a no-show pattern. The research reveals this is poorly enforced. Raise this by generating machine-readable "agency-cause" tags when conflicts are detected, automating the FTA-required exclusion. |
| Proactive rider notification for CARE paratransit | Create | No transit agency in the research proactively notifies paratransit riders when a construction zone blocks their pickup point. Create the first system that sends an alert >2 hours before a scheduled CARE trip if a conflict exists. |

**Core assumption challenged:** That transit agencies and city DOTs operate in separate data silos. The research confirms this: "permit platforms detect permit-on-permit conflicts; they do not natively reconcile against transit stop geofences." The core innovation is the cross-domain spatial join — connecting city construction data to transit stop data, which no city has done.

**Reframed value proposition:** Not a construction tracker or a transit app — a *rights protection system*. It detects when construction violates a disabled rider's right to accessible transit and triggers the legally required mitigations before the rider is harmed.

---

## 2. Rapid Ideation — 8 Divergent Approaches

1. **Nightly Spatial Join Bot** — A cron job that downloads GeoHub construction geometries and GRTC GTFS stops, runs a 50-meter buffer intersection, and emails GRTC operations a list of conflicts with affected routes and stops. Zero UI needed for v0.
2. **CARE Trip Shield** — Cross-reference detected conflicts with CARE's trip schedule. If a rider's pickup point is within a conflict zone, automatically tag the trip as "construction-impacted" in the scheduling system. If the rider no-shows, the penalty is auto-waived per FTA requirements.
3. **Construction + Transit Overlay Map** — A public-facing map showing GRTC routes with construction zone overlays. Red dots where conflicts exist. Riders can see at a glance which stops are affected.
4. **Contractor Permit Enhancement** — Require Work-in-Street Permit applicants to declare whether their project is within 50 meters of a GRTC stop. Auto-check against GTFS data during permit review. Flag permits that don't include a transit mitigation plan.
5. **Temporary Stop Publisher** — When a conflict is detected, auto-generate a GTFS-RT service alert with the temporary stop location. Push to Google Maps, Transit app, and Apple Maps via GRTC's existing GTFS-RT feed.
6. **ADA Compliance Tracker** — For each detected conflict, track whether PROWAG-compliant alternate stops have been established. Dashboard showing: X conflicts detected, Y mitigated, Z unresolved. Published weekly as equity metrics.
7. **Rider SMS Alert Network** — Opt-in SMS alerts for GRTC riders: "Your Route 5 stop at Broad & 3rd is temporarily closed due to construction. Temporary stop: Broad & 2nd (200 feet west)." No app required.
8. **City-Transit Data MOU Template** — Instead of building technology, draft a model MOU between Richmond DPW and GRTC that requires automatic data sharing when permits are issued near transit stops. The governance fix before the tech fix.

**Most provocative:** #4 (Contractor Permit Enhancement) — Shifts the burden to the permit process itself, preventing conflicts before they're created rather than detecting them after.
**Most feasible:** #1 (Nightly Spatial Join Bot) — A Python script that runs daily, queries two public APIs, and emails results. No UI, no hosting complexity. Could be built in 4 hours.

---

## 3. Rapid Design Sprint

**Problem in one sentence:** When construction blocks a GRTC bus stop or CARE paratransit pickup, riders discover it upon arrival — and CARE riders accumulate no-show penalties that can lead to 14-day service suspensions.

**Target user:** A wheelchair user who depends on CARE paratransit for medical appointments and has a regular pickup location on a commercial corridor.

**User Journey:**
- Start: Rider schedules a CARE trip for a 2pm medical appointment, pickup at their regular spot on Broad Street.
- Friction: Construction barriers went up yesterday around their pickup location. CARE van arrives → can't access the curb → marks rider as no-show. Rider accumulates their third no-show → receives a 14-day suspension letter. Rider has no way to prove the construction caused the miss.
- Outcome: The night before the trip, the conflict detector identifies the Broad Street construction zone overlapping the rider's pickup point. GRTC operations is alerted. CARE dispatch contacts the rider: "Your pickup at Broad & 5th is blocked by construction. We'll pick you up at Broad & 3rd (temporary stop, 200 feet west)."

**Lowest-fidelity prototype:** A Python script that:
1. Downloads GRTC GTFS stops from the static feed.
2. Queries GeoHub CIP FeatureServer for active construction geometries.
3. Buffers construction geometries by 50 meters.
4. Runs a spatial intersection.
5. Outputs a list: "STOP_ID | STOP_NAME | ROUTE | CONFLICT_PROJECT_NAME | DISTANCE".
6. Emails the list to a distribution group.

No UI. No map. Just the detection logic and a daily email.

**First test:** Run the script today against live data. If it finds even one conflict that GRTC wasn't aware of, the concept is validated.

---

## 4. Opportunity Mapper

### Pattern A: Batch Conflict Detection + Notification (Quick Win)
- **User:** GRTC operations staff and CARE dispatch.
- **Outcome:** A daily email listing all GRTC stops within 50m of active construction, with project details and affected routes.
- **Workflow:** Cron job → GRTC GTFS stops (public) + GeoHub CIP geometries (public) → spatial join → email report.
- **Dependencies:** GRTC GTFS static feed (confirmed public). GeoHub CIP FeatureServer (confirmed public). Email delivery. No GRTC IT integration needed for v1.
- **Richmond relevance:** IDEA.md rates this 16/25 (Tier A). The GRTC GTFS feed is public. GeoHub CIP data is live. The only dependency beyond v1 is CARE schedule data for rider-level alerts.

### Pattern B: CARE Rider Protection System (Stretch)
- **User:** CARE paratransit riders and GRTC ADA compliance officers.
- **Outcome:** Automated "agency-cause" tagging on construction-impacted trips, proactive rider alerts >2 hours before pickup, and auto-waiver of no-show penalties per FTA requirements.
- **Workflow:** Conflict detection (Pattern A) + CARE scheduling system API → identify impacted trips → trigger rider notification → tag trip in scheduling system as "construction-impacted" → exclude from no-show pattern calculation.
- **Dependencies:** CARE scheduling system API (requires GRTC partnership — this is the key dependency). Rider contact information. Deep integration with GRTC's paratransit operations.
- **Richmond relevance:** This is where the equity impact lives. The IDEA.md scores Innovation and Equity at 5/5 because no city has done this. But the CARE data dependency is real.

**Recommendation:** Build Pattern A as the hackathon demo — it requires only public data and proves the spatial join concept. Pitch Pattern B as the vision, with Pattern A's conflict detection results as evidence of the problem's scale.

---

## 5. Problem Scoping

| Dimension | Score (1-5) | Notes |
|-----------|-------------|-------|
| Impact | 5 | Compound harm chain: construction → blocked stop → missed pickup → CARE suspension → loss of medical access. Prevents cascading harm. |
| Feasibility | 4 | Both data sources (GRTC GTFS, GeoHub CIP) are public. Spatial join is standard GIS. CARE integration requires partnership. |
| Data availability | 4 | GRTC GTFS: public. GeoHub CIP: public. CARE pickup points: requires GRTC partnership. Work-in-Street Permits: uncertain. |
| Clarity | 5 | "Find stops blocked by construction" is a precisely defined spatial operation. |
| Demo credibility | 5 | Run the spatial join live against real Richmond data. If conflicts exist, show them on screen. Judges can verify by looking at a map. |

**Richmond-specific alignment:** Scored 94 (Pillar Award) and 92 (Mayor's Choice) — second-highest combined score in the pillar. Innovation: 5/5 (genuinely novel — no city has done this). Equity: 5/5 (explicitly protects disabled, elderly, and transit-dependent residents). Directly addresses PS1 and the compound barrier documented in B5 of the JTBD analysis.

**Policy/eligibility risks:** GRTC is an independent authority. This tool works best with GRTC cooperation but v1 can operate entirely on public data. FTA no-show policy compliance is a GRTC responsibility — this tool surfaces the problem but GRTC must change its internal processes to act on it. If conflicts are found but GRTC doesn't act, the tool could become evidence in a DOJ complaint (DOJ's 2022 NJ Transit Access Link settlement is a precedent).

**Weekend MVP shapes:**
1. **Python spatial join script:** Download GRTC GTFS, query GeoHub CIP, buffer and intersect. Output: CSV/JSON of conflicts. Print to terminal or email. 6 hours of work.
2. **Script + web dashboard:** Same backend, plus a Leaflet/Mapbox map showing GRTC stops as dots, construction zones as polygons, and conflicts highlighted in red. 12 hours of work.

---

## 6. Assumption Mapping

| # | Assumption | Risk | Uncertainty | Priority |
|---|-----------|------|-------------|----------|
| 1 | Active construction geometries in GeoHub are spatially accurate enough for 50m buffer detection | High | Medium | TEST FIRST |
| 2 | GRTC GTFS stop locations are accurate and current | High | Low | TEST FIRST |
| 3 | Conflicts actually exist today in Richmond (the problem is real, not theoretical) | High | Medium | TEST FIRST |
| 4 | CARE pickup points align with or are derivable from GTFS stop locations | Medium | High | Validate early |
| 5 | GRTC would act on conflict notifications (vs. ignoring them) | Medium | High | Validate early |
| 6 | The 50m buffer is the right threshold (too small misses impacts, too large creates false positives) | Medium | Medium | Validate early |
| 7 | No-show penalties for construction-caused misses are actually happening (not just theoretical) | Medium | High | Monitor |

**Top 3 to validate:**
1. **Conflicts exist today** — Validation: Run the spatial join now against live GeoHub CIP data and GRTC GTFS stops. If the result set is empty, the problem may be seasonal or theoretical. If conflicts are found, the demo writes itself.
2. **GeoHub geometry accuracy** — Validation: For any detected conflicts, physically visit the location. Is there actually construction within 50m of the bus stop? If GeoHub geometries are point-level (not polygons), the buffer analysis may be unreliable.
3. **GRTC engagement willingness** — Validation: Contact GRTC's ADA coordinator. Ask: "Are you aware of bus stops currently impacted by construction? How do you handle CARE no-shows caused by construction? Would a daily conflict report be useful?"

---

## Key Takeaway

The GRTC–Construction Conflict Detector is the highest-innovation idea in the pillar (Innovation: 5/5) because it creates a genuinely new data connection: city construction zones × transit stop locations × paratransit rider rights. The research confirms no US city does this. The technical implementation is straightforward (a spatial join between two public datasets), but the *impact* is extraordinary — preventing disabled riders from being penalized for construction they can't control. The hackathon demo should be the spatial join running against live data, with any real conflicts displayed as proof of concept.
