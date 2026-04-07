# Maternal Metric Lock-In

| Field | Value |
|-------|-------|
| **Pillar** | Thriving Families |
| **Problem Statement** | PS2 — Maternal Health Data Coordination |
| **Source** | BLUESKY (ERRC reframing) |
| **Implementation Reality Score** | 21/25 — Tier S (Ship It) |
| **Overall Rank** | #13 of 73 ideas |

## Description

A shared metric definition registry for Richmond's maternal health ecosystem. Multiple agencies (VDH, RHHD, hospital systems, CBOs) track maternal health outcomes, but each uses slightly different definitions, time windows, and denominators for the same metrics. "Infant mortality rate" calculated by VDH uses a different denominator than the same metric calculated by a CBO using CDC WONDER data. This tool locks in shared definitions: for each key metric, it specifies the exact data source, the exact calculation, and the exact population denominator — so that every organization reporting on maternal health in Richmond is working from the same numbers.

The output is a reference document and validation tool, not a dashboard. An organization enters their metric values and the tool checks whether they match the locked-in calculation against the canonical data source. Discrepancies are flagged with an explanation of why the numbers differ.

**Origin:** Generated through Blue Ocean ERRC reframing. The broader blue sky — "A Shared Understanding of Maternal Health" (15/27 Needs work) — was too broad. The ERRC process narrowed it to the specific, tractable problem: metric definitions drift across organizations, undermining coordination.

## Data Sources

- VDH vital statistics (public)
- ACS demographic data (public)
- CDC WONDER (public)
- Kids Count data (public)
- VDOE data (public)

All seven data sources referenced in the pillar research are public APIs.

## Why It Ships

All data sources are public. The tool is a reference + validation engine, not a data warehouse. No City cooperation required — the value is in the shared definitions, not in accessing proprietary data.

## Bundle Membership

None — standalone tool. Addresses a coordination problem that doesn't share infrastructure with other ideas.

## Shared Research

See `../_shared-maternal-health/` for problem-statement-level JTBD analysis, pain points, and prior art research.
