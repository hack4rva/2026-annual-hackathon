**Trimmed to top 3 by combined score (Pillar + Mayor's Choice).**

# New Solution Ideas — Thriving City Hall

3 ideas (top by combined Pillar + Mayor's Choice weighted scores). Full descriptions below.

---

## Procurement Ideas

### Idea 12: Contract Expiry Dashboard (The Research's #1 Recommendation)

**Addresses:** JTBD 1 — Procurement officer facing a renewal deadline
**Prior Art:** Tempe Procurement Contracts dashboard (filters by renewal/expiry date, CSV export); NYC Checkbook; Portland OCDS dashboards
**Data Source:** City Contracts Socrata dataset (xqn7-jvv2) — 1,362 records, updated monthly, last updated March 16, 2026. 0% missing expiration dates. CSV download (bypass SODA API bug that drops Description field).
**Build Estimate:** 8–12 hours — the research scores this 23/25 on the feasibility matrix, highest of all seven evaluated approaches
**Why No Demo Built This:** Four teams built AI-powered contract review tools (CivicPulse AI, Mira, Vendor Contract Mgmt, RVA Contract Lens). All focused on extraction, compliance checking, and multi-source search. Nobody built the simple, obvious tool: a sortable, filterable dashboard showing what expires when. The research ranks this #1 because the data is clean, public, and requires zero ETL.
**What It Would Look Like:** Load xqn7-jvv2 CSV. Display contracts with quick-filter buttons: expiring in 30/60/90/180/365 days. Filter by department, vendor, procurement type. Show "surge warnings" for months with clustered expirations (e.g., 20 contracts expire Dec 31, 2026; 18 expire Jun 30, 2026). CSV export button. "Data Health" panel showing contracts with missing/placeholder values ($0, $1, far-future dates). Advisory disclaimer per DOJ/SBA patterns. Done.
**Equity Dimension:** Better renewal planning means more competitive bidding, which means more opportunities for small and minority-owned vendors who lose out when contracts auto-renew to incumbents. The research cites $28M in potential savings from better competitive bidding.

---

### Idea 19: Automated Contract Expiry Alerts (Email/SMS Notifications)

**Addresses:** JTBD 1 — Procurement officer who misses renewal deadlines
**Prior Art:** F3_opportunities_procurement.md recommends automated email exports for 90-day expirations as a Phase 1.1 feature. Tempe Procurement Contracts dashboard includes notification features.
**Data Source:** City Contracts (xqn7-jvv2) — 0% missing expiration dates; known surge clusters at end-of-quarter/year
**Build Estimate:** 6–10 hours (scheduled job that checks xqn7-jvv2, sends emails/SMS for contracts approaching expiry thresholds)
**Why No Demo Built This:** Demos built dashboards and search tools — all pull-based (user has to look). Nobody built a push-based system: proactive alerts that tell the procurement officer "3 contracts in your portfolio expire in 30 days" without them having to check a dashboard. The research notes that missed renewal windows force emergency procurement (expensive, reduced competition) or contract lapse (service interruption).
**What It Would Look Like:** A lightweight scheduled job runs weekly against the xqn7-jvv2 CSV. For each department, it identifies contracts expiring in 30/60/90/180 days. Department procurement contacts receive a weekly email digest: "You have 3 contracts expiring in 90 days. [Contract #, Vendor, Value, Expiry Date]. Click to view details." Surge warnings are highlighted: "December 2026 has 20 contracts expiring — plan now." No dashboard required. The value is in the push notification, not the interface.
**Equity Dimension:** Missed renewals default to incumbent renewal without price competition. Proactive alerts give procurement officers time to open competitive bidding — which is the primary mechanism for MBE/SWaM vendor participation.

---

## Service Navigation Ideas

### Idea 1: Deterministic Service Wizard (GOV.UK Smart Answers Pattern)

**Addresses:** JTBD 1 — The resident with an urgent problem who doesn't know where to start
**Prior Art:** GOV.UK Smart Answers (proven at national scale since 2012); Decatur Direct (Ordinal Connect, March 2026); Canada.ca AI help guidance
**Data Source:** rva.gov Services directory + RVA311 Helpful Numbers page + CSR department pages. Curate ~50–70 leaf categories with 5–10 synonyms each from existing Drupal content.
**Build Estimate:** 8–12 hours for a 3–6 step wizard covering top 20 request types
**Why No Demo Built This:** All three service navigation demos (Text 311, Hey804, RVA Help) chose AI/NLP approaches because they're more impressive in a demo. The research ranks deterministic decision trees as the #1 recommended approach on safety, auditability, and adoption — but they're less flashy at a hackathon.
**What It Would Look Like:** A resident visits a mobile-first page, answers 3–6 plain-language questions ("What's the problem?" → "Where is it?" → "Is there standing water or a gas smell?"), and gets routed to the exact RVA311 form or department contact. No account creation. No AI. Every path is version-controlled in a JSON file that the 311 team can audit and update. An "I'm not sure" branch shows the 5 most common request types and a fallback to 311 phone (804-646-7000).
**Equity Dimension:** Works on any device (mobile-first, no app install). No AI means no hallucination risk for vulnerable residents. The static JSON taxonomy can be human-translated into Spanish without relying on Google Translate — which the City's Language Access Plan explicitly warns is insufficient for vital services.
