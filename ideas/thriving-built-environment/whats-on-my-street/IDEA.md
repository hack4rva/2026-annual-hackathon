# "What's On My Street?" Address Lookup

| Field | Value |
|-------|-------|
| **Pillar** | A Thriving & Sustainable Built Environment |
| **Problem Statement** | PS1 — Infrastructure Project Visibility |
| **Source** | NEW (AI-generated post-event) |
| **Implementation Reality Score** | 19/25 — Tier A (Strong) |
| **Overall Rank** | #26 of 73 ideas |

## Description

A text-first search interface where a resident types an address and gets a unified results list of all active infrastructure work within a configurable radius — CIP capital projects, paving schedules, VDOT transportation projects, and utility work. Results sorted by proximity with plain-language status (not internal project codes). The map is optional; the primary UI is an accessible list view that passes WCAG 2.2 AA. Nightly ETL normalizes data from GeoHub REST API, Socrata Open Data Portal, and VDOT SMART Scale feeds into a single GeoJSON layer with a "last refreshed" timestamp per source.

**Addresses:** JTBD 1 (Disrupted Commuter), JTBD 3 (City Staffer deflecting calls)

**Why it matters:** Residents cannot enter an address and see all active infrastructure work — data is scattered across GeoHub, Open Data Portal, CIP PDFs, VDOT, and the permit portal with no cross-links. This is the #1 prioritized gap.

## Data Sources

- Richmond GeoHub CIP Dashboard (FeatureLayer `270285e87d684a95bd1ebd9a078aa6df`)
- Socrata Open Data Portal (Impact Map `aq4i-4gpd`, paving lists)
- VDOT FeatureServer (statewide projects filtered to Richmond)
- DPW Construction Projects page (scraped or FOIA'd if no API)

## Prior Art

Philadelphia StreetSmartPHL, Boston Citywide Project Tracker, Chicago infrastructure portals. Novel for Richmond but not a new concept nationally.

## Rubric Grades

| Category | Score | Rationale |
|----------|:-----:|-----------|
| Impact | 5 | Directly addresses #1 prioritized gap; serves all three JTBDs simultaneously |
| Feasibility | 4 | GeoHub REST API accessible; Socrata documented; VDOT has FeatureServer. Permit portal is hardest source. |
| User Value | 5 | Answers the exact question residents ask most: "What is happening on my street?" |
| Execution | 4 | Text-first search with nightly ETL is hackathon-achievable |
| Innovation | 3 | Exists in other cities — novel for Richmond |
| Equity | 4 | Text-first list view serves screen reader users; address input works across literacy levels |

**Pillar Award:** 90 | **Mayor's Choice:** 92 | **Combined:** 182

## Bundle Membership

**Bundle 3: GeoHub Infrastructure Lookup** — StreetLights already proved the GeoHub CIP pattern works. This idea extends it with multi-source aggregation. Shared geocoding and address-to-polygon infrastructure benefits all five bundle members.

Related ideas: StreetLights, Snow Tier Compass, HUD Rent-Cap Validator, Subsidy & Covenant Snapshot

## Shared Research

No dedicated `_shared-*` dir for this pillar. See the pillar's `targeted_problem_statements.md` in `pillar-repos/pillar-thriving-built-environment/docs/problem_space/` for PS1 context.
