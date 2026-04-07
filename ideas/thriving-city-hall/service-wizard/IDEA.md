# Deterministic Service Wizard

| Field | Value |
|-------|-------|
| **Pillar** | A Thriving City Hall |
| **Problem Statement** | PS1 — Resident Service Navigation |
| **Source** | NEW (AI-generated post-event) |
| **Implementation Reality Score** | 21/25 — Tier S (Ship It) |
| **Overall Rank** | #7 of 73 ideas |

## Description

A GOV.UK Smart Answers-style decision tree for Richmond residents. A resident visits a mobile-first page, answers 3–6 plain-language questions ("What's the problem?" → "Where is it?" → "Is there standing water or a gas smell?"), and gets routed to the exact RVA311 form or department contact. No account creation. No AI. Every path is version-controlled in a JSON file that the 311 team can audit and update. An "I'm not sure" branch shows the 5 most common request types and a fallback to 311 phone (804-646-7000). Static HTML/JS with a curated JSON taxonomy. Embeddable in rva.gov's Drupal CMS.

**Addresses:** JTBD 1 — The resident with an urgent problem who doesn't know where to start

**Why No Demo Built This:** All three service navigation demos (Text 311, Hey804, RVA Help) chose AI/NLP approaches because they're more impressive in a demo. The research ranks deterministic decision trees as the #1 approach on safety, auditability, and adoption — but they're less flashy at a hackathon.

## Data Sources

- rva.gov Services directory + RVA311 Helpful Numbers page + CSR department pages
- Curate ~50–70 leaf categories with 5–10 synonyms each from existing Drupal content

## Prior Art

GOV.UK Smart Answers (proven at national scale since 2012); Decatur Direct (Ordinal Connect, March 2026); Canada.ca AI help guidance

## Build Estimate

8–12 hours for a 3–6 step wizard covering top 20 request types.

## Rubric Grades

| Category | Score | Rationale |
|----------|:-----:|-----------|
| Impact | 5 | Highest-safety path to "route right first time" |
| Feasibility | 4 | Requires taxonomy curation, not API access |
| User Value | 5 | Answers the exact question residents ask |
| Execution | 4 | Achievable in hackathon timeframe |
| Innovation | 3 | Pattern is known (GOV.UK) — novel for Richmond |
| Equity | 5 | No AI hallucination risk; mobile-first; human-translatable to Spanish without Google Translate |

**Pillar Award:** 93 | **Mayor's Choice:** 95 | **Combined:** 188

## Bundle Membership

None — standalone tool. Treats 311 as a destination (links to web forms/phone numbers), not a dependency.

## Shared Research

See `../_shared-service-navigation/` for problem-statement-level JTBD analysis, pain points, and prior art research.

## Recommendations

**Immediate (0-30 days):** Static HTML/JS deployable anywhere. The JSON taxonomy can be human-translated into Spanish without relying on Google Translate. Works on any device, no app install, no AI.
