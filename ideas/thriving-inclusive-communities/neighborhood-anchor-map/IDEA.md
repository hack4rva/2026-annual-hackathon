# Neighborhood Anchor Map

| Field | Value |
|-------|-------|
| **Pillar** | Thriving & Inclusive Communities |
| **Problem Statement** | PS1 — Immigrant Service Discovery |
| **Source** | BLUESKY (ERRC reframing) |
| **Implementation Reality Score** | 21/25 — Tier S (Ship It) |
| **Overall Rank** | #14 of 73 ideas |

## Description

A geographic tool that maps "anchor institutions" — libraries, community centers, health clinics, churches, schools — that serve as trusted access points for immigrant and refugee communities in Richmond. Instead of building another service directory (which assumes residents know what services they need and trust the system enough to search), this tool starts from the places residents already go and shows what services are available through or near those anchors.

Adds a transit layer: for each anchor, the tool shows which bus routes serve it and how long it takes to reach from key residential areas with high immigrant/refugee populations. Uses GRTC GTFS data for the transit overlay.

**Origin:** Generated through Blue Ocean ERRC reframing. The broader blue sky — "A City Where Everyone Knows Where to Turn for Help" (20/27 Strong) — asked how residents find help. The ERRC process reframed from "discover the service" to "discover the place you already trust, then find services there."

## Data Sources

- Public facility locations (libraries, community centers, health clinics) from GeoHub or City data
- GRTC static GTFS feed for transit accessibility overlay
- Community organization locations (curated, potentially from 211 Virginia or partner orgs)

## Why It Ships

Facility locations are public data. GRTC GTFS is public. The core tool is a map with a transit accessibility overlay — a proven pattern. The curation of which facilities serve as trusted anchors for immigrant communities requires community input but doesn't require technical infrastructure.

## Bundle Membership

**Bundle 5: GRTC Transit Overlay** — Adds geographic context to the transit accessibility question. The Shift-Fit Scout answers "can I get to work by bus?"; the Anchor Map answers "which trusted places can I reach by bus?"

Combined bundle score: 74/100 (avg 18.5)

Related ideas: GRTC Shift-Fit Scout, GRTC–Construction Conflict Detector, Reentry 72-Hour Navigator

## Shared Research

See `../_shared-immigrant-discovery/` for problem-statement-level JTBD analysis, pain points, and prior art research.
