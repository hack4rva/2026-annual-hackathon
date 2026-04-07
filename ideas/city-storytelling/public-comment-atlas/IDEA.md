# Public Comment Atlas

| Field | Value |
|-------|-------|
| **Pillar** | A City That Tells Its Stories |
| **Problem Statement** | PS2 — Resident Stories as Civic Insight |
| **Source** | BLUESKY (ERRC reframing) |
| **Implementation Reality Score** | 20/25 — Tier A (Strong) |
| **Overall Rank** | #21 of 73 ideas |

## Description

A geographic visualization of public comments submitted through Richmond's planning and zoning process. The Legistar API contains public comment records attached to planning matters, but these comments are buried in meeting agendas and minutes — invisible to anyone who doesn't attend hearings or manually search Legistar. This tool extracts public comments, geocodes them to the relevant parcel or neighborhood, and maps them — creating a visible, searchable archive of what residents have said about development in their neighborhoods.

The "atlas" framing is intentional: this isn't a dashboard or a tracker, it's a geographic record of civic voice. Where have residents spoken up? Where have they been silent? Which proposals generated the most engagement? The patterns reveal both participation hotspots and participation deserts.

**Origin:** Generated through Blue Ocean ERRC reframing. The highest-scoring blue sky across all pillars — "Exploring Richmond Through Its Stories" (24/27 Exceptional) — asked how to make community voices more accessible. The ERRC process reframed "stories" to include the most structured form of resident voice: public comments on planning matters.

## Data Sources

- Legistar API (`webapi.legistar.com/v1/richmondva/`) — Matters, Events, public comment records
- GeoHub parcel data for geocoding matter addresses

## Why It's Tier A (Not S)

Legistar API is public and well-documented. The geocoding pipeline (matter → address → map pin) is shared with other Legistar bundle ideas. Tier A because public comment records in Legistar vary in structure and completeness — some matters have rich comment records, others have none.

## Bundle Membership

**Bundle 2: Legistar Development Pipeline** — A shared Legistar-to-GeoJSON ETL (matters → addresses → map pins) would serve all four bundle members. This atlas adds the public comment dimension.

Combined bundle score: 78/100 (avg 19.5)

Related ideas: Site-Sign Text-Back, RVA Plotlines/Dev Tracker, Participation Analytics Dashboard

## Shared Research

See `../_shared-resident-stories/` for problem-statement-level JTBD analysis, pain points, and prior art research.
