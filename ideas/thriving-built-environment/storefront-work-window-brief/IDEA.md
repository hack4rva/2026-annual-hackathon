# Storefront Work-Window Brief

| Field | Value |
|-------|-------|
| **Pillar** | A Thriving & Sustainable Built Environment |
| **Problem Statement** | PS1 — Infrastructure Project Visibility |
| **Source** | BLUESKY (ERRC reframing) |
| **Implementation Reality Score** | 19/25 — Tier A (Strong) |
| **Overall Rank** | #27 of 73 ideas |

## Description

A client-side tool that generates a printable one-page brief for small business owners affected by nearby construction. When a street project begins, storefront businesses need to know: how long it will last, which sidewalk/parking access is affected, and who to contact. This tool takes a business address and generates a plain-language PDF covering active nearby projects, expected duration, pedestrian/vehicle access changes, and the project manager's contact info.

Uses the same zero-server, browser-based pattern as the Core Eligibility Pack Builder and Cross-Agency Handoff Memo: a client-side form that generates a printable artifact without storing any data on a server.

**Origin:** Generated through Blue Ocean ERRC reframing. The broader blue sky — "The Living City Map" (17/27 Needs work) — was too broad. The ERRC process narrowed it to the specific pain point of small business owners who discover construction impacts through lost foot traffic, not through proactive notification.

## Data Sources

- GeoHub CIP Dashboard (project locations, timelines)
- Work-in-Street Permit data (from DPW permitting)
- GeoHub road centerlines for proximity matching

## Architecture Pattern

Browser-based form → PDF generation, no backend, no data storage. The shared technical pattern (form → validate → render → PDF export) could be a reusable template across multiple ideas.

## Bundle Membership

**Bundle 4: Client-Side PDF / Zero-Server Tools** — Four ideas independently converged on the same architectural pattern: client-side tools that generate printable artifacts without storing any data on a server. This pattern scores highest on Integration Surface and Maintenance Burden because there's nothing to integrate and nothing to maintain.

Combined bundle score: 84/100 (avg 21.0)

Related ideas: Core Eligibility Pack Builder, Cross-Agency Handoff Memo, Grant Pack Builder

## Shared Research

No dedicated `_shared-*` dir for this pillar. See `pillar-repos/pillar-thriving-built-environment/docs/problem_space/` for pillar context.
