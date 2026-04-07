# ADA Detour Digital Publisher

| Field | Value |
|-------|-------|
| **Pillar** | A Thriving & Sustainable Built Environment |
| **Problem Statement** | PS1 — Infrastructure Project Visibility |
| **Source** | NEW (AI-generated post-event) |
| **Implementation Reality Score** | 14/25 — Tier B (Promising) |
| **Overall Rank** | #53 of 73 ideas |

## Description

Digitizes pedestrian routing plans from active Work-in-Street Permits into an accessible web interface. Every Work-in-Street Permit requires an ADA-compliant pedestrian routing plan, meaning the City possesses detour data — but it is never published digitally. Wheelchair users and visually impaired residents arrive at sidewalk closures with no advance warning.

Each closure gets a page with: text-based turn-by-turn detour directions (screen-reader compatible), estimated detour distance and grade (for wheelchair users), and dates of closure. Integrates with GRTC CARE paratransit pickup point data to flag conflicts where a rider's pickup spot is blocked. Proactive alerts sent >2 hours before a scheduled CARE trip if a new closure affects the pickup location.

**Addresses:** JTBD 1 — Disrupted Commuter (accessibility-dependent subset)

**Why it matters:** Transforms an absolute barrier (arriving at a closed sidewalk with no alternative) into a planned detour. Prevents CARE no-show penalties. No city has published digital ADA detour routes from construction permits.

## Data Sources

- Work-in-Street Permit pedestrian routing plans (from DPW permitting; may require FOIA batch or partnership)
- GRTC CARE pickup point data (from GRTC)
- GeoHub road centerlines for routing

## Research Grounding

B5 (accessibility-dependent residents), PX.1 (compounding barriers for wheelchair/VI users), G3 (map accessibility failures — this avoids the map entirely), B5 (CARE no-show penalty risk from unannounced closures).

## Rubric Grades

| Category | Score | Rationale |
|----------|:-----:|-----------|
| Impact | 4 | Critical equity gap for a smaller but severely affected population |
| Feasibility | 4 | Detour data exists in permits; digitization pipeline is achievable. CARE integration requires partnership. |
| User Value | 5 | Absolute barrier → planned detour. Prevents CARE no-show penalties. |
| Execution | 3 | Requires understanding permit data format and creating accessible turn-by-turn output |
| Innovation | 5 | Genuinely novel — no city has done this |
| Equity | 5 | Core purpose is equity for the most physically vulnerable residents |

**Pillar Award:** 91 | **Mayor's Choice:** 89 | **Combined:** 180

## Bundle Membership

None — standalone tool, though shares the GRTC CARE data dependency with the GRTC–Construction Conflict Detector.

## Shared Research

No dedicated `_shared-*` dir for this pillar. See the pillar's `targeted_problem_statements.md` in `pillar-repos/pillar-thriving-built-environment/docs/problem_space/` for PS1 context.
