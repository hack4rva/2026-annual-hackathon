# Weekend Culture SMS

| Field | Value |
|-------|-------|
| **Pillar** | A City That Tells Its Stories |
| **Problem Statement** | PS1 — Arts & Cultural Event Discovery |
| **Source** | BLUESKY (ERRC reframing) |
| **Implementation Reality Score** | 20/25 — Tier A (Strong) |
| **Overall Rank** | #22 of 73 ideas |

## Description

A weekly SMS digest of Richmond arts and cultural events. Every Friday, subscribers receive a text message with 3–5 curated events happening that weekend — concerts, gallery openings, theater, community festivals, cultural events. No app to install, no website to check. The curation pulls from CultureWorks/Localist event feeds and filters by weekend dates, geographic area, and event category.

The push-over-pull design is the key insight: Richmond's cultural events are already listed in multiple places (CultureWorks, Localist, venue sites, Facebook events), but discovery requires active searching across fragmented sources. SMS delivery brings the information to residents who wouldn't seek it out.

**Origin:** Generated through Blue Ocean ERRC reframing. The highest-scoring blue sky across all pillars — "Exploring Richmond Through Its Stories" (24/27 Exceptional) — asked how to make Richmond's culture more accessible. The ERRC process eliminated the discovery friction entirely by pushing curated events to residents' phones.

## Data Sources

- CultureWorks/Localist ICS, RSS, JSON API (event listings)
- Venue calendars and event feeds (supplemental)
- SMS gateway (Twilio or similar)

## Why It's Tier A (Not S)

The CultureWorks data exists and is accessible. SMS delivery is commodity infrastructure. Tier A because a CultureWorks partnership agreement is needed to formalize API access — one conversation, not a technical blocker.

## Bundle Membership

**Bundle 6: SMS/Twilio Channel** — Shares SMS infrastructure with Site-Sign Text-Back, First Job SMS Kit, and Contract Expiry Alerts. A shared Twilio account reduces per-idea setup cost and creates a recognizable channel.

Combined bundle score: 81/100 (avg 20.3)

**Bundle 7: CultureWorks Events Feed** — A single CultureWorks partnership agreement would unlock three ideas simultaneously. Vecina already has a working integration. This adds push delivery. What's On RVA adds AI discovery.

Combined bundle score: 54/75 (avg 18.0)

Related ideas: Vecina, What's On RVA

## Shared Research

See `../_shared-arts-discovery/` for problem-statement-level JTBD analysis, pain points, and prior art research.

## Recommendations

**Medium-term (90-180 days):** One CultureWorks partnership agreement unlocks this alongside Vecina and What's On RVA.
