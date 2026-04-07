# GRTC–Construction Conflict Detector

| Field | Value |
|-------|-------|
| **Pillar** | A Thriving & Sustainable Built Environment |
| **Problem Statement** | PS1 — Infrastructure Project Visibility |
| **Source** | NEW (AI-generated post-event) |
| **Implementation Reality Score** | 16/25 — Tier A (Strong) |
| **Overall Rank** | #41 of 73 ideas |

## Description

When construction blocks a GRTC bus stop or CARE paratransit pickup point, riders discover the disruption upon arrival. CARE riders who can't reach pickup spots accumulate "no-show" penalties (up to 14-day service suspension) through no fault of their own.

Performs a nightly spatial join between active construction project geometries (from GeoHub) and GRTC bus stop locations + CARE paratransit service areas (from GRTC GTFS feed). When a conflict is detected — a construction zone within 50m of an active bus stop or CARE pickup zone — the system generates: (1) a public alert on the affected route page, (2) a notification to GRTC operations for route/stop adjustment, and (3) a proactive alert to affected CARE riders >2 hours before their next scheduled trip.

**Addresses:** JTBD 1 — Disrupted Commuter (transit-dependent subset)

**Why it matters:** Prevents avoidable no-show penalties and reduces stranding of transit-dependent residents. No city has cross-referenced construction zones with paratransit routing to protect vulnerable riders.

## Data Sources

- GeoHub CIP Dashboard + paving schedule (project geometries)
- GRTC GTFS static feed (stop locations, routes)
- GRTC CARE pickup zone data (requires GRTC partnership)
- Work-in-Street Permit locations

## Research Grounding

B5 (CARE no-show penalties from unannounced closures), PX.1 (compounding barriers for accessibility-dependent residents), Open Question 15 from JTBD analysis (CARE penalty waiver question).

## Rubric Grades

| Category | Score | Rationale |
|----------|:-----:|-----------|
| Impact | 4 | Critical compound harm: construction → blocked stops → missed pickups → CARE suspension |
| Feasibility | 4 | GRTC publishes GTFS; GeoHub has geometries; spatial join is standard GIS. CARE data requires partnership. |
| User Value | 5 | Prevents stranding and CARE no-show penalties that compound into 14-day suspensions |
| Execution | 4 | Nightly spatial join of two public datasets is hackathon-achievable |
| Innovation | 5 | Genuinely novel — no city has done this |
| Equity | 5 | Explicitly protects disabled, elderly, and transit-dependent residents |

**Pillar Award:** 94 | **Mayor's Choice:** 92 | **Combined:** 186

## Bundle Membership

**Bundle 5: GRTC Transit Overlay** — Four ideas across three pillars need "how do I get there by bus?" answered. A shared GTFS-to-nearest-stop-and-trip-time library would serve all four. This detector adds spatial join intelligence.

Related ideas: GRTC Shift-Fit Scout, Neighborhood Anchor Map, Reentry 72-Hour Navigator

## Shared Research

No dedicated `_shared-*` dir for this pillar. See the pillar's `targeted_problem_statements.md` in `pillar-repos/pillar-thriving-built-environment/docs/problem_space/` for PS1 context.
