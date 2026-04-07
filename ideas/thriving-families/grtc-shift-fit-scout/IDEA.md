# GRTC Shift-Fit Scout

| Field | Value |
|-------|-------|
| **Pillar** | Thriving Families |
| **Problem Statement** | PS1 — Youth Employment Pathways |
| **Source** | BLUESKY (ERRC reframing) |
| **Implementation Reality Score** | 20/25 — Tier A (Strong) |
| **Overall Rank** | #19 of 73 ideas |

## Description

A transit-aware job shift checker for Richmond youth. A teen entering the workforce needs to know: "Can I get to this job by bus and still make it home before the last bus?" This tool takes a home address and a shift time window, queries the GRTC GTFS feed, and answers: what's the latest shift end time that still lets you catch a bus home? Which employers along your bus line have shifts that fit?

The simplest proof is: address + shift end time → last bus check. If the last bus from the job site leaves at 10:15 PM and the shift ends at 10:30 PM, the tool flags the conflict before the teen accepts the job. This prevents the common failure mode where a teen accepts a job, misses the last bus, can't get home, and loses the job within the first week.

**Origin:** Generated through Blue Ocean ERRC reframing. The broader blue sky — "Connecting Youth and Employers Across the City" (21/27 Strong) — asked how to improve youth-employer matching. The ERRC process narrowed it to the single biggest hidden barrier: transit access as a constraint on which jobs are actually reachable.

## Data Sources

- GRTC static GTFS feed (routes, stops, schedules) — public
- GRTC real-time feed (for accuracy during service changes) — public

## Why It's Tier A (Not S)

GTFS data is public and well-structured. The core logic (address → nearest stop → last departure time) is straightforward. Tier A rather than S because it requires building the GTFS-to-nearest-stop-and-trip-time library, and employer location data would need curation for the "which employers fit" feature.

## Bundle Membership

**Bundle 5: GRTC Transit Overlay** — Four ideas across three pillars need "how do I get there by bus?" answered. A shared GTFS-to-nearest-stop-and-trip-time library would serve all four. This is the simplest proof (address + time → last bus check).

Combined bundle score: 74/100 (avg 18.5)

Related ideas: GRTC–Construction Conflict Detector, Neighborhood Anchor Map, Reentry 72-Hour Navigator

## Shared Research

See `../_shared-youth-employment/` for problem-statement-level JTBD analysis, pain points, and prior art research.
