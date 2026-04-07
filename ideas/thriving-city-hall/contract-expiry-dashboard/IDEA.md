# Contract Expiry Dashboard

| Field | Value |
|-------|-------|
| **Pillar** | A Thriving City Hall |
| **Problem Statement** | PS2 — Procurement Risk & Opportunity Review |
| **Source** | NEW (AI-generated post-event) |
| **Implementation Reality Score** | 24/25 — Tier S (Ship It) |
| **Overall Rank** | #1 of 73 ideas |

## Description

A sortable, filterable dashboard showing City contract expiration timelines. Load the Socrata `xqn7-jvv2` dataset (1,362 records, updated monthly, 0% missing expiration dates). Display contracts with quick-filter buttons: expiring in 30/60/90/180/365 days. Filter by department, vendor, procurement type. Show "surge warnings" for months with clustered expirations. CSV export. "Data Health" panel for contracts with missing/placeholder values. Advisory disclaimer per DOJ/SBA patterns.

**Addresses:** JTBD 1 — Procurement officer facing a renewal deadline

**Why No Demo Built This:** Four teams built AI-powered contract review tools (CivicPulse AI, Mira, Vendor Contract Mgmt, RVA Contract Lens). All focused on extraction, compliance checking, and multi-source search. Nobody built the simple, obvious tool: a sortable dashboard showing what expires when.

## Data Sources

- City Contracts Socrata dataset (`xqn7-jvv2`) — 1,362 records, updated monthly, last updated March 16, 2026. CSV download (bypass SODA API bug that drops Description field).

## Prior Art

Tempe Procurement Contracts dashboard (filters by renewal/expiry date, CSV export); NYC Checkbook; Portland OCDS dashboards

## Build Estimate

8–12 hours. Research scores this 23/25 on the feasibility matrix, highest of all evaluated approaches.

## Rubric Grades

| Category | Score | Rationale |
|----------|:-----:|-----------|
| Impact | 5 | Best data story in the pillar |
| Feasibility | 5 | xqn7-jvv2, monthly refresh, no auth |
| User Value | 5 | Directly serves procurement JTBD 1 |
| Execution | 5 | Obvious demo; straightforward build |
| Innovation | 2 | Pattern is known — boring in a good way |
| Equity | 4 | Better renewal planning → more competitive bidding → more MBE opportunity |

**Pillar Award:** 93 | **Mayor's Choice:** 99 | **Combined:** 192

## Bundle Membership

**Bundle 1: Socrata Contracts Pipeline** — Build the data pipeline once, serve five products. This dashboard is the foundation; alerts add push delivery; drift scanner adds audit intelligence; Spend Mirror reframes for MBE vendors; Contract Navigator adds AI matching.

Related ideas: Contract Expiry Alerts → Contract-Payment Drift Scanner → Richmond Spend Mirror → Richmond Contract Navigator

## Shared Research

See `../_shared-procurement/` for problem-statement-level JTBD analysis, pain points, and prior art research.

## Recommendations

**Immediate (0-30 days):** Deploy on GitHub Pages. Socrata data auto-refreshes. Procurement officers can bookmark it tomorrow. Zero City cooperation required.
