# Contract-Payment Drift Scanner

| Field | Value |
|-------|-------|
| **Pillar** | A Thriving City Hall |
| **Problem Statement** | PS2 — Procurement Risk & Opportunity Review |
| **Source** | BLUESKY (ERRC reframing) |
| **Implementation Reality Score** | 21/25 — Tier S (Ship It) |
| **Overall Rank** | #8 of 73 ideas |

## Description

An audit intelligence tool that cross-references the City Contracts dataset (`xqn7-jvv2`) with the Payment Register dataset (`5y73-enav`) to detect "drift" — contracts where cumulative payments exceed the original contract value, or where payment patterns diverge significantly from the contract timeline. Surfaces potential overruns, change-order accumulation, and contracts operating beyond their stated terms without formal renewal.

This is the analytical layer on top of the Socrata Contracts Pipeline. Where the Contract Expiry Dashboard shows *when* contracts expire and Expiry Alerts push that information proactively, the Drift Scanner asks a different question: "Which contracts are already behaving outside their stated terms?"

**Origin:** Generated through Blue Ocean ERRC (Eliminate-Reduce-Raise-Create) reframing of the procurement problem space. The broader blue sky framing — "Making Fiscal Responsibility More Visible" (21/27 Strong) — asked how to make Richmond's fiscal decisions more visible to residents and oversight bodies.

## Data Sources

- City Contracts Socrata dataset (`xqn7-jvv2`) — contract amounts, terms, dates
- Payment Register Socrata dataset (`5y73-enav`) — individual payments against contracts

## Why It Ships

Both datasets are public, structured, and on the same Socrata platform. The join key (contract number) connects them. The analysis is arithmetic — compare sum(payments) to contract.value, compare payment dates to contract term. No API keys, no permissions, no City cooperation required.

## Bundle Membership

**Bundle 1: Socrata Contracts Pipeline** — Build the Socrata data pipeline once, serve five products. The dashboard is the foundation; alerts add push delivery; this scanner adds audit intelligence; Spend Mirror reframes for MBE vendors; Contract Navigator adds AI matching. Each independently valuable; together they're a procurement intelligence stack.

Combined bundle score: 109/125 (avg 21.8)

Related ideas: Contract Expiry Dashboard, Contract Expiry Alerts, Richmond Spend Mirror, Richmond Contract Navigator

## Shared Research

See `../_shared-procurement/` for problem-statement-level JTBD analysis, pain points, and prior art research.
