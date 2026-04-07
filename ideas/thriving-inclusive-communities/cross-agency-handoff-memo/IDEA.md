# Cross-Agency Handoff Memo

| Field | Value |
|-------|-------|
| **Pillar** | Thriving & Inclusive Communities |
| **Problem Statement** | PS2 — Cross-Agency Service Navigation |
| **Source** | BLUESKY (ERRC reframing) |
| **Implementation Reality Score** | 22/25 — Tier S (Ship It) |
| **Overall Rank** | #6 of 73 ideas |

## Description

A browser-based form that generates a printable memo a client carries between service agencies. When a resident navigating housing, workforce, or reentry services moves from one organization to the next, they currently repeat their story from scratch. This tool lets either the resident or a caseworker fill out a structured form — what services the client has already received, what they're seeking next, key dates, and any eligibility determinations already made — and generates a printable PDF memo the client can hand to the next agency.

Zero server, zero data storage. The form runs entirely in the browser. The PDF is generated client-side and never touches a server. No PHI is stored anywhere. The memo is a communication artifact, not a case file — it contains only what the client chooses to share.

**Origin:** Generated through Blue Ocean ERRC reframing. The broader blue sky — "A Community Support Network That Works Like a Care Team" (17/27 Needs work) — required shared case management infrastructure and HIPAA-compliant data sharing that won't exist for years. The ERRC process eliminated the infrastructure dependency entirely by putting the artifact in the client's hands.

## Data Sources

None required. The tool is a form → PDF generator. Content comes from the client/caseworker filling out the form.

## Why It Ships

Same zero-server pattern as the Core Eligibility Pack Builder. Browser-based form → PDF generation. No backend, no data storage, no MOU, no HIPAA concerns. Deploy on any hosting. The pattern scores highest on Integration Surface and Maintenance Burden because there's nothing to integrate and nothing to maintain.

## Bundle Membership

**Bundle 4: Client-Side PDF / Zero-Server Tools** — Four ideas independently converged on this pattern: client-side tools that generate printable artifacts without storing any data.

Combined bundle score: 84/100 (avg 21.0)

Related ideas: Core Eligibility Pack Builder, Grant Pack Builder, Storefront Work-Window Brief

## Shared Research

See `../_shared-cross-agency/` for problem-statement-level JTBD analysis, pain points, and prior art research.

## Recommendations

**Immediate (0-30 days):** Same zero-server pattern as the Eligibility Pack. Deploy on any hosting. No data stored. Zero City cooperation required.
