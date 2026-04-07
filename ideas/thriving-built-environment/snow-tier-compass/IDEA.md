# Snow Tier Compass

| Field | Value |
|-------|-------|
| **Pillar** | A Thriving & Sustainable Built Environment |
| **Problem Statement** | PS2 — Fleet Operations & Street Service Tracking |
| **Source** | BLUESKY (ERRC reframing) |
| **Implementation Reality Score** | 21/25 — Tier S (Ship It) |
| **Overall Rank** | #16 of 73 ideas |

## Description

A resident-facing lookup tool that answers "What snow tier is my street?" DPW assigns every Richmond street to a snow removal tier (Priority 1 through Priority 3+), which determines when plowing will reach that street during a snow event. This information currently exists only in internal DPW PDFs. The tool digitizes snow tier assignments into a geocoded lookup: enter an address, see your tier, see what that tier means for expected service timing, and see DPW's current operational status during active snow events.

Uses the same geocoder + polygon lookup pattern as StreetLights (which already proved the GeoHub CIP pattern works), but applied to DPW's snow tier geography instead of capital improvement projects.

**Origin:** Generated through Blue Ocean ERRC reframing. The broader blue sky — "The Living City Map" (17/27 Needs work) — was too broad to build. The ERRC process narrowed it to one specific, highly demanded piece of information that residents ask about every winter.

## Data Sources

- DPW snow-tier PDF maps (require one-time digitization into GeoJSON)
- GeoHub road centerlines and geocoder for address-to-polygon lookup
- DPW operational status during snow events (manual update or scrape of DPW page)

## Why It Ships

The geocoder and polygon lookup pattern is identical to StreetLights (already built and working). The only prerequisite is digitizing DPW's snow-tier PDFs into GeoJSON — a one-time conversion task.

## Bundle Membership

**Bundle 3: GeoHub Infrastructure Lookup** — StreetLights proved the pattern. "What's On My Street?" extends it. Snow Tier Compass applies the same geocoder + polygon lookup for a different dataset. Shared geocoding and address-to-polygon infrastructure benefits all five members.

Combined bundle score: 103/125 (avg 20.6)

Related ideas: StreetLights, "What's On My Street?", HUD Rent-Cap Validator, Subsidy & Covenant Snapshot

## Shared Research

No dedicated `_shared-*` dir for this pillar. See `pillar-repos/pillar-thriving-built-environment/docs/problem_space/` for pillar context.

## Recommendations

**Short-term (30-90 days):** Needs one-time digitization of DPW snow-tier PDFs into GeoJSON. Once digitized, the tool reuses proven StreetLights infrastructure.
