# Site-Sign Case Number Text-Back

| Field | Value |
|-------|-------|
| **Pillar** | Thriving Neighborhoods |
| **Problem Statement** | PS1 — Neighborhood Development Discovery |
| **Source** | BLUESKY (ERRC reframing) |
| **Implementation Reality Score** | 21/25 — Tier S (Ship It) |
| **Overall Rank** | #10 of 73 ideas |

## Description

An SMS-based service that lets residents text a case number from a physical zoning/development sign to a phone number and receive back plain-language details about the proposal — what's being proposed, when the hearing is, how to comment. Physical zoning signs in Richmond display case numbers but provide no easy way to learn more. Residents have to search the Legistar system manually, which most don't know how to do.

The system receives an SMS with a case number, queries the Legistar API (`webapi.legistar.com/v1/richmondva/`), and returns a formatted SMS with: project description, hearing date, how to submit a public comment, and a link to the full Legistar record.

**Origin:** Generated through Blue Ocean ERRC reframing. The broader blue sky — "Making Neighborhood Change Easier to Understand" (22/27 Strong) — asked how to help residents understand change. The ERRC process narrowed it to the physical touchpoint where residents first encounter development proposals: the sign on the site.

## Data Sources

- Legistar API (`webapi.legistar.com/v1/richmondva/`) — Matters, Events, Bodies
- SMS gateway (Twilio or similar)

## Why It Ships

Legistar is the most underused high-quality API in Richmond's stack. The API is public and well-documented. SMS delivery is commodity infrastructure (Twilio). The only non-technical prerequisite is getting the SMS number printed on physical zoning signs — which requires one champion in Planning.

## Bundle Membership

**Bundle 2: Legistar Development Pipeline** — Four ideas independently discovered the Legistar API. A shared Legistar-to-GeoJSON ETL (matters → addresses → map pins) would serve all four. This SMS service is the fastest proof-of-concept.

Combined bundle score: 78/100 (avg 19.5)

Related ideas: RVA Plotlines/Dev Tracker, Public Comment Atlas, Participation Analytics Dashboard

**Bundle 6: SMS/Twilio Channel** — Shares SMS infrastructure with First Job SMS Kit, Weekend Culture SMS, and Contract Expiry Alerts.

Combined bundle score: 81/100 (avg 20.3)

## Shared Research

See `../_shared-dev-discovery/` for problem-statement-level JTBD analysis, pain points, and prior art research.

## Recommendations

**Short-term (30-90 days):** Needs one champion to put the SMS number on physical zoning signs. Everything else is public API + commodity SMS.
