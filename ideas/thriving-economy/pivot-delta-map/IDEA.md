# Pivot Delta Map

| Field | Value |
|-------|-------|
| **Pillar** | A Thriving Economy |
| **Problem Statement** | PS2 — Small Business Navigation |
| **Source** | BLUESKY (ERRC reframing) |
| **Implementation Reality Score** | 16/25 — Tier A (Strong) |
| **Overall Rank** | #39 of 73 ideas |

## Description

A geographic visualization tool that maps where new business registrations, closures, and ownership changes are happening across Richmond neighborhoods. The "delta" is the change — where is entrepreneurial activity growing, shifting, or declining? The tool surfaces patterns that individual entrepreneurs and economic development staff cannot see from their own experience: which corridors are gaining new food businesses, which neighborhoods are losing retail, where ownership turnover suggests either opportunity or instability.

Designed for economic development staff and small business support organizations (like SCORE, SBDC, LISC) who need to understand neighborhood-level business dynamics to target outreach and resources. Also useful for aspiring entrepreneurs trying to understand market conditions in a specific area.

**Origin:** Generated through Blue Ocean ERRC reframing. The broader blue sky — "Turning City Data Into Opportunity" (19/27 Needs work) — was too broad. The ERRC process narrowed it to the specific question: "Where are the deltas in Richmond's small business landscape?"

## Data Sources

- Virginia SCC business registration data (public)
- City business license data (may require partnership or FOIA)
- GeoHub parcel data for geocoding business addresses
- Census Business Builder / ACS economic data for context

## Why It's Tier A (Not S)

Business registration data is public at the state level (Virginia SCC), but matching registrations to specific Richmond locations requires geocoding and cross-referencing with City business license data — which may not be readily accessible in structured form. The analysis is valuable but the data pipeline has 1-2 blockers to clear.

## Bundle Membership

None — standalone tool. Uses geographic data but with a different analytical purpose than the GeoHub Infrastructure Lookup bundle.

## Shared Research

See `../_shared-small-business/` for problem-statement-level JTBD analysis, pain points, and prior art research.
