# Council Office Routing Memo

| Field | Value |
|-------|-------|
| **Pillar** | A Thriving City Hall |
| **Problem Statement** | PS1 — Resident Service Navigation |
| **Source** | BLUESKY (ERRC reframing) |
| **Implementation Reality Score** | 19/25 — Tier A (Strong) |
| **Overall Rank** | #24 of 73 ideas |

## Description

A lightweight tool that helps Council district offices route constituent inquiries to the correct City department. When a resident contacts their Council member's office with a service issue, staff often don't know which department handles it. This tool generates a structured routing memo — a printable/emailable document that captures the resident's issue, identifies the responsible department, and provides the specific contact, form, or process for that request type.

The routing logic mirrors the Deterministic Service Wizard but is designed for Council staff as the user, not residents directly. The output is a memo (not a web interface) because Council offices work through email, calls, and walk-ins — not dashboards.

**Origin:** Generated through Blue Ocean ERRC reframing of the service navigation problem space. The broader blue sky framing — "Better Communication Between City and Residents" (19/27 Needs work) — asked how to improve two-way communication. The ERRC process narrowed this to the specific pain point of Council offices as an unofficial help desk.

## Data Sources

- Same taxonomy as Deterministic Service Wizard: rva.gov Services directory, RVA311 categories, department contact information
- Curated routing rules mapping issue types to departments

## Why It's Tier A (Not S)

Requires curation of the routing taxonomy and buy-in from at least one Council office to validate the workflow. The taxonomy overlaps with the Service Wizard, so building one accelerates the other.

## Bundle Membership

None — standalone tool. Shares the service taxonomy with the Deterministic Service Wizard but targets a different user (Council staff vs. residents).

## Shared Research

See `../_shared-service-navigation/` for problem-statement-level JTBD analysis, pain points, and prior art research.
