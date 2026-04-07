# New Solution Ideas — Thriving & Sustainable Built Environment

**Trimmed to top 3 by combined score (Pillar + Mayor's Choice).**

**Pillar:** Thriving and Sustainable Built Environment
**Generated:** April 1, 2026
**Method:** Gap synthesis from JTBD analyses, pain point research, and demo gap analyses for StreetLights, Stay Informed (All Your Bass), and Road Maintenance Fleet Tracker
**Retained:** 3 ideas (ranked by Pillar + Mayor's combined score)

---

## Top 3 ideas

### Idea 12: GRTC–Construction Conflict Detector

**PS:** PS1
**JTBD:** Job 1 (Disrupted Commuter — transit-dependent subset)
**Problem it solves:** When construction blocks a GRTC bus stop or CARE paratransit pickup point, riders discover the disruption upon arrival — CARE riders who can't reach pickup spots accumulate "no-show" penalties (up to 14-day service suspension) through no fault of their own.
**How it works:** Performs a nightly spatial join between active construction project geometries (from GeoHub) and GRTC bus stop locations + CARE paratransit service areas (from GRTC GTFS feed). When a conflict is detected — a construction zone within 50m of an active bus stop or CARE pickup zone — the system generates: (1) a public alert on the affected route page, (2) a notification to GRTC operations for route/stop adjustment, and (3) a proactive alert to affected CARE riders >2 hours before their next scheduled trip. Prevents avoidable no-show penalties and reduces stranding of transit-dependent residents.
**Data sources:** GeoHub CIP Dashboard + paving schedule (project geometries), GRTC GTFS static feed (stop locations, routes), GRTC CARE pickup zone data (requires GRTC partnership), Work-in-Street Permit locations.
**Research grounding:** B5 (CARE no-show penalties from unannounced closures), PX.1 (compounding barriers for accessibility-dependent residents), Open Question 15 from JTBD analysis (CARE penalty waiver question).

---

### Idea 1: "What's On My Street?" Address Lookup

**PS:** PS1
**JTBD:** Job 1 (Disrupted Commuter), Job 3 (City Staffer deflecting calls)
**Problem it solves:** Residents cannot enter an address and see all active infrastructure work — data is scattered across GeoHub, Open Data Portal, CIP PDFs, VDOT, and the permit portal with no cross-links.
**How it works:** A text-first search interface where a resident types an address and gets a unified results list of all projects within a configurable radius — CIP capital projects, paving schedules, VDOT transportation projects, and utility work. Results are sorted by proximity and include plain-language status (not internal project codes). The map is an optional enhancement; the primary UI is an accessible list view that passes WCAG 2.2 AA. Nightly ETL normalizes data from GeoHub REST API, Socrata Open Data Portal, and VDOT SMART Scale feeds into a single GeoJSON layer with a "last refreshed" timestamp per source.
**Data sources:** Richmond GeoHub CIP Dashboard (FeatureLayer 270285e87d684a95bd1ebd9a078aa6df), Socrata Open Data Portal (Impact Map aq4i-4gpd, paving lists), VDOT FeatureServer (statewide projects filtered to Richmond), DPW Construction Projects page (scraped or FOIA'd if no API).
**Research grounding:** A5 (data fragmentation), C4 (DPW info gaps), E1 (Philadelphia StreetSmartPHL, Boston Citywide Project Tracker), B1 (resident persona), PX.2 (map accessibility barriers from G3).

---

### Idea 5: ADA Detour Digital Publisher

**PS:** PS1
**JTBD:** Job 1 (Disrupted Commuter — accessibility-dependent subset)
**Problem it solves:** Every Work-in-Street Permit requires an ADA-compliant pedestrian routing plan, meaning the City possesses detour data — but it is never published digitally. Wheelchair users and visually impaired residents arrive at sidewalk closures with no advance warning.
**How it works:** Digitizes pedestrian routing plans from active Work-in-Street Permits into an accessible web interface. Each closure gets a page with: text-based turn-by-turn detour directions (screen-reader compatible), estimated detour distance and grade (for wheelchair users), and dates of closure. Integrates with GRTC CARE paratransit pickup point data to flag conflicts where a rider's pickup spot is blocked. Proactive alerts sent >2 hours before a scheduled CARE trip if a new closure affects the pickup location.
**Data sources:** Work-in-Street Permit pedestrian routing plans (from DPW permitting; may require FOIA batch or partnership), GRTC CARE pickup point data (from GRTC), GeoHub road centerlines for routing.
**Research grounding:** B5 (accessibility-dependent residents), PX.1 (compounding barriers for wheelchair/VI users), G3 (map accessibility failures — this avoids the map entirely), B5 (CARE no-show penalty risk from unannounced closures).
