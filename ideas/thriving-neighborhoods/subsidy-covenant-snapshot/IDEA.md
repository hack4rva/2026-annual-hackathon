# Subsidy & Covenant Snapshot

| Field | Value |
|-------|-------|
| **Pillar** | Thriving Neighborhoods |
| **Problem Statement** | PS2 — Affordable Housing Compliance Monitoring |
| **Source** | BLUESKY (ERRC reframing) |
| **Implementation Reality Score** | 20/25 — Tier A (Strong) |
| **Overall Rank** | #18 of 73 ideas |

## Description

A parcel-level lookup tool that shows what affordability covenants or subsidy obligations are attached to a specific property. When a property receives public funding for affordable housing, it typically comes with compliance requirements (rent caps, income targeting, reporting) that span 15–40 years. This tool provides a snapshot for any address: what subsidies were applied, what covenants are active, when they expire, and what compliance requirements remain.

Uses the same GeoHub parcel/assessor layer as StreetLights and the HUD Rent-Cap Validator but focuses on the covenant timeline rather than current rent compliance. The target users are HCD compliance staff, housing advocates, and City Auditor staff who need to track whether publicly funded housing stays affordable over time.

**Origin:** Generated through Blue Ocean ERRC reframing. The broader blue sky — "Making Neighborhood Change Easier to Understand" (22/27 Strong) — inspired looking at housing affordability as a dimension of neighborhood change that is currently invisible to residents and compliance staff alike.

## Data Sources

- GeoHub parcel and assessor layers (property identification, ownership)
- HCD-provided subsidy and covenant records (may require partnership or FOIA)
- HUD affordability databases (public)
- City Auditor compliance audit records

## Why It's Tier A (Not S)

The parcel lookup infrastructure is proven (GeoHub), but covenant/subsidy records are not yet in a single structured dataset. Requires HCD partnership to compile or export subsidy records into a usable format.

## Bundle Membership

**Bundle 3: GeoHub Infrastructure Lookup** — Shared geocoding and address-to-polygon infrastructure benefits all five members. This tool uses parcels/assessor layers for a housing compliance use case.

Combined bundle score: 103/125 (avg 20.6)

Related ideas: StreetLights, "What's On My Street?", Snow Tier Compass, HUD Rent-Cap Validator

## Shared Research

See `../_shared-housing-compliance/` for problem-statement-level JTBD analysis, pain points, and prior art research.
