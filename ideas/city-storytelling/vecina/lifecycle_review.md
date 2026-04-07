# Lifecycle Review — Vecina

**Pillar:** A City That Tells Its Stories
**Problem Statement:** Aggregate Richmond's arts and cultural events into one discoverable place.
**Demo:** Vecina (Shatij Haroud and Harshit Kohale)
**Live Site:** vicino2.vercel.app
**Review Date:** April 1, 2026

---

## Rubric Checklist

| Step | Name | Output File | Status | Notes |
|------|------|-------------|--------|-------|
| 1 | Problem Grounding | `gap_analysis.md` (header) | ✅ Complete | Problem statement verbatim, primary user, pain, desired outcome all present. |
| 2 | JTBD Analysis | `_shared-arts-discovery/jtbd_analysis.md` | ✅ Complete | Shared file — 3 jobs covering resident discovery, artist/venue promotion, and institutional view. |
| 3 | Question Generation | `_shared-arts-discovery/jtbd_analysis.md` (Open Questions) | ✅ Complete | Shared file — 20 open questions across data, user, integration, equity, and prior art categories. |
| 4 | Prior Art Research | `_shared-arts-discovery/prior_art_research.md` | ✅ Complete | Shared file — Richmond aggregator ecosystem, data source tiers, national prior art, weekend-viable patterns. |
| 5 | Pain Point Research | `_shared-arts-discovery/pain_points.md` | ✅ Complete | Shared file — 17 pain points per JTBD with evidence and equity dimension. |
| 6 | Data Source Mapping | `gap_analysis.md` (Data Source Map) | ✅ Complete | 6 data claims mapped. **CultureWorks confirmed as real, authoritative source.** Cache method and refresh cadence need clarification. |
| 7 | SME Outreach | — | ⚠️ Not Started | No formal outreach to CultureWorks drafted. The data connection exists but should be formalized into a partnership agreement. |
| 8 | Gap Analysis | `gap_analysis.md` (Gap Analysis) | ✅ Complete | All 3 JTBDs assessed (Strong / Partial / Not Directly Addressed). |
| 9 | Opportunity Mapping | `gap_analysis.md` (Opportunities) | ✅ Complete | 3 opportunities named with dependencies. |
| 10 | Solution Ideation | — | ⚠️ Not Started | No solution ideas file generated for this demo. |
| 11 | Lifecycle Review | `lifecycle_review.md` | ✅ Complete | This file. |

---

## What the Demo Does Well

**1. Only PS1 demo with a confirmed, authoritative data source.** This is Vecina's most significant differentiator — not just among the three Pillar 7 PS1 demos, but as a design principle. CultureWorks maintains the most comprehensive structured arts dataset in Richmond (478 Exhibits, 252 Music, 93 Theatre) with granular Region, Audience, and Topic facets. By building on CultureWorks rather than an unspecified or synthetic data source, Vecina avoids the existential risk that kills civic event platforms: data rot. Prior art research (`E4_prior_art_failures.md`) is unambiguous — tools with durable data pipelines connected to official feeds survive; tools without them die.

**2. Neighborhood-first design matches how residents think.** Most event platforms organize by date or category. Vecina makes neighborhood the primary organizing principle. For a city where neighborhoods carry strong cultural identity (Jackson Ward, Scott's Addition, The Fan), this is the right frame. It directly answers "What's happening near me?" rather than forcing residents to filter from a city-wide list down to their area.

**3. Map view with embedded Google Maps per event.** The map isn't just a visual — it's functional. Each event shows an embedded Google Maps view that provides directions-ready context without leaving the platform. This eliminates the "copy address, open Maps, paste" friction that every other Richmond event platform imposes.

**4. Links back to CultureWorks for detail, doesn't replicate it.** Vecina owns discovery; CultureWorks owns detail. This avoids data staleness on the detail layer (if CultureWorks updates an event description, Vecina doesn't need to detect and propagate the change). It also respects CultureWorks as the source of truth rather than competing with it.

**5. Caching layer demonstrates scalability thinking.** The team built a caching layer between CultureWorks and the Vecina front end. This shows awareness that hitting an external data source on every page load is unsustainable — a technical maturity signal that matters for post-hackathon viability.

---

## What Was Fundamentally Missed

**1. Single-source coverage gap.** CultureWorks is the best arts dataset in Richmond, but it's not everything. Events that only exist on Eventbrite, Facebook, or standalone venue websites won't appear. Flagship institutions using non-Localist ticketing — Richmond Ballet (ETIX), Virginia Repertory Theatre (proprietary), Modlin Center (Spektrix) — may have gaps in CultureWorks. The prior art research identifies supplementary ICS feeds from Style Weekly and Richmond Symphony as Tier 1 confirmed sources that could close this gap (`D3_data_rss_calendar_feeds.md`).

**2. No feedback loop from users.** Vecina is read-only. Users cannot flag missing events, report stale listings, suggest corrections, or request specific event types in their neighborhood. The prior art research (`E4_prior_art_failures.md`) identifies this as a survival risk: Eventful survived by giving users agency ("Demand It"); Upcoming died as a passive consumption tool. Even a simple "Missing an event? Let us know" link would open the loop.

**3. No equity or accessibility features.** The demo shows no multilingual support, no WCAG compliance discussion, no consideration of the broadband gap in underserved neighborhoods (P4.2), and no low-bandwidth mode. Events in the East End, Northside, and South Richmond are less likely to appear in CultureWorks (P4.1), and residents in those neighborhoods are less likely to have broadband access to use a web-only tool.

---

## Blockers

| Blocker | Severity | Specific Ask |
|---------|----------|--------------|
| CultureWorks data access not formalized | **High** | The connection works now but could break if CultureWorks changes its platform, rate-limits, or objects to unauthorized data use. Formalize the relationship: contact CultureWorks, propose a data partnership with attribution and link-backs, and clarify whether the current access method (caching) is API-based or scraping-based. |
| Cache refresh cadence unknown | **Medium** | How often does Vecina's cache update? If daily, same-day event additions or cancellations are invisible. If hourly, coverage is strong but API/scraping load increases. Document the refresh interval and its implications. |
| No supplementary data sources | **Medium** | CultureWorks alone will miss events from flagship institutions, Eventbrite-only organizers, and Facebook-only neighborhood events. Adding Style Weekly ICS + Eventbrite API would meaningfully expand coverage. |
| No accessibility or equity considerations shown | **Medium** | No multilingual UI, no WCAG compliance, no low-bandwidth mode. For a platform serving Richmond — where 5.9% of residents are LEP and ZIP 23222 has significantly lower broadband adoption — these are not post-launch additions. |
| Google Maps API cost at scale | **Low** | Embedded Google Maps per event is a strong UX feature, but Maps Embed API has usage limits. At scale, this could become a cost issue. Clarify pricing tier and plan a Leaflet/OpenStreetMap fallback. |

---

## Recommended Next Steps (Priority Order)

1. **Formalize the CultureWorks partnership.** Contact CultureWorks program staff. Propose terms: Vecina attributes all data to CultureWorks, links back for detail pages, does not modify or cache event descriptions beyond what's needed for filtering. Ask about Localist API access (preferred over scraping) and any data use policies. This is the highest-leverage action because it protects Vecina's core asset.

2. **Add Style Weekly ICS as a supplementary source.** The Style Weekly ICS endpoint is confirmed and machine-readable (`D3_data_rss_calendar_feeds.md`). Adding it closes gaps for venues that submit to Style Weekly but not CultureWorks. Implement deduplication on `normalized_title + start_time + venue_name` to avoid duplicate listings.

3. **Add a user feedback mechanism.** A "Missing an event?" button that opens a simple form (title, date, venue, URL) serves two purposes: it identifies coverage gaps in the data pipeline, and it creates the feedback loop that prior art research identifies as a survival requirement.

4. **Document and publish cache refresh cadence.** Users need to trust that events are current. A "Last updated: 2 hours ago" timestamp on the event feed builds that trust. Internally, define the refresh interval and monitor for CultureWorks availability issues.

5. **Plan for equity and accessibility.** Start with WCAG 2.1 AA compliance (color contrast, screen reader labels, keyboard navigation). Add Spanish-language UI labels as a first multilingual step (71.57% of Richmond's LEP population speaks Spanish). Consider a print-friendly event list for library kiosk distribution in neighborhoods with low broadband adoption.
