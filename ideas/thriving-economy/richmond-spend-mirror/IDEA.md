# Richmond Spend Mirror

| Field | Value |
|-------|-------|
| **Pillar** | A Thriving Economy |
| **Problem Statement** | PS1 — MBE Contracting Discovery |
| **Source** | BLUESKY (ERRC reframing) |
| **Implementation Reality Score** | 23/25 — Tier S (Ship It) |
| **Overall Rank** | #2 of 73 ideas |

## Description

The same City Contracts Socrata dataset (`xqn7-jvv2`) used by the Contract Expiry Dashboard, reframed for minority-owned business (MBE) vendors. Instead of showing procurement officers what's expiring, this tool shows MBE vendors where City spending is concentrated — by NAICS code, department, contract size, and renewal cycle — so they can identify opportunities that match their capabilities.

A vendor enters their NAICS codes or business description and sees: which departments spend the most in their category, which contracts are coming up for renewal, what the typical contract size range is, and whether there's a pattern of incumbent renewal vs. competitive bidding. The equity dimension is central: the tool exists because MBE vendors lack the institutional knowledge that incumbent vendors accumulate over years of City contracting.

**Origin:** Generated through Blue Ocean ERRC reframing. The broader blue sky — "Turning City Data Into Opportunity" (19/27 Needs work) — was too broad. The ERRC process narrowed it to one specific user (MBE vendor) and one specific dataset (Socrata contracts) to create a focused discovery tool.

## Data Sources

- City Contracts Socrata dataset (`xqn7-jvv2`) — same dataset as Contract Expiry Dashboard
- NAICS code mapping table (requires weekend curation task to map codes to plain-language descriptions)

## Why It Ships

Same Socrata contract dataset as the #1-ranked idea. NAICS mapping is the only manual step — a weekend curation task. Zero permissions, zero API keys, zero City cooperation.

## Bundle Membership

**Bundle 1: Socrata Contracts Pipeline** — Fifth product from the same data pipeline. The dashboard is the foundation; alerts add push; drift scanner adds audit; this tool reframes for MBE vendors; Contract Navigator adds AI matching.

Combined bundle score: 109/125 (avg 21.8)

Related ideas: Contract Expiry Dashboard, Contract Expiry Alerts, Contract-Payment Drift Scanner, Richmond Contract Navigator

## Shared Research

See `../_shared-mbe-contracting/` for problem-statement-level JTBD analysis, pain points, and prior art research.

## Recommendations

**Short-term (30-90 days):** Needs NAICS-to-plain-language mapping table (weekend curation task). Everything else reuses the Socrata Contracts Pipeline infrastructure.
