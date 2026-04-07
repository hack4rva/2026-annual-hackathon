# Contract Expiry Alerts

| Field | Value |
|-------|-------|
| **Pillar** | A Thriving City Hall |
| **Problem Statement** | PS2 — Procurement Risk & Opportunity Review |
| **Source** | NEW (AI-generated post-event) |
| **Implementation Reality Score** | 22/25 — Tier S (Ship It) |
| **Overall Rank** | #3 of 73 ideas |

## Description

A push-based notification system that proactively alerts procurement officers when contracts approach expiration. A lightweight scheduled job runs weekly against the `xqn7-jvv2` CSV. For each department, it identifies contracts expiring in 30/60/90/180 days. Department procurement contacts receive a weekly email digest: "You have 3 contracts expiring in 90 days. [Contract #, Vendor, Value, Expiry Date]." Surge warnings highlighted for months with clustered expirations. No dashboard required — the value is in the push notification, not the interface.

**Addresses:** JTBD 1 — Procurement officer who misses renewal deadlines

**Why No Demo Built This:** Demos built dashboards and search tools — all pull-based. Nobody built a push-based system: proactive alerts without the user having to check. Missed renewal windows force emergency procurement (expensive, reduced competition) or contract lapse (service interruption).

## Data Sources

- City Contracts Socrata dataset (`xqn7-jvv2`) — 0% missing expiration dates; known surge clusters at end-of-quarter/year

## Prior Art

F3_opportunities_procurement.md recommends automated email exports for 90-day expirations as a Phase 1.1 feature. Tempe Procurement Contracts dashboard includes notification features.

## Build Estimate

6–10 hours (scheduled job that checks xqn7-jvv2, sends emails/SMS for contracts approaching expiry thresholds).

## Rubric Grades

| Category | Score | Rationale |
|----------|:-----:|-----------|
| Impact | 5 | Same data as dashboard, higher operational stickiness |
| Feasibility | 5 | Same clean dataset, add a cron job and email service |
| User Value | 5 | Converts insight into behavior without user effort |
| Execution | 5 | Excellent Mayor's Choice profile |
| Innovation | 2 | Lower novelty than dashboard — push is the differentiator |
| Equity | 4 | Missed renewals default to incumbent renewal without competition; alerts enable MBE/SWaM participation |

**Pillar Award:** 93 | **Mayor's Choice:** 99 | **Combined:** 192

## Bundle Membership

**Bundle 1: Socrata Contracts Pipeline** — Push complement to the Contract Expiry Dashboard. Same data source, different delivery channel.

**Bundle 6: SMS/Twilio Channel** — Shares SMS infrastructure with Site-Sign Text-Back, First Job SMS Kit, Weekend Culture SMS.

## Shared Research

See `../_shared-procurement/` for problem-statement-level JTBD analysis, pain points, and prior art research.

## Recommendations

**Short-term (30-90 days):** Needs procurement officer email list (one spreadsheet from Procurement). Same Socrata data, add a cron job and an email service.
