# Implementation Reality Review — A Thriving City Hall

**Reviewed:** April 1, 2026
**Ideas scored:** 14 (9 demos + 3 NEW_IDEAS + 2 BLUESKY)
**Rubric:** IMPLEMENTATION_REALITY_RUBRIC.md (5 dimensions, 1-5 each, max 25)

---

## Summary Table

| # | Idea | Source | Own | Data | Tech | Int | Maint | **Total** | **Tier** |
|---|------|--------|:---:|:----:|:----:|:---:|:-----:|:---------:|:--------:|
| 1 | Contract Expiry Dashboard | NEW_IDEAS | 5 | 5 | 4 | 5 | 5 | **24** | S |
| 2 | Contract Expiry Alerts | NEW_IDEAS | 5 | 5 | 4 | 4 | 4 | **22** | S |
| 3 | Deterministic Service Wizard | NEW_IDEAS | 4 | 3 | 5 | 5 | 4 | **21** | S |
| 4 | Contract-Payment Drift Scanner | BLUESKY | 4 | 4 | 4 | 5 | 4 | **21** | S |
| 5 | City Budget Dashboard | Demo | 4 | 4 | 4 | 5 | 4 | **21** | S |
| 6 | MAP Tracker | Demo | 5 | 3 | 4 | 4 | 3 | **19** | A |
| 7 | Council Office Routing Memo | BLUESKY | 3 | 3 | 4 | 5 | 4 | **19** | A |
| 8 | Hey804 | Demo | 3 | 3 | 3 | 4 | 3 | **16** | A |
| 9 | Mira | Demo | 4 | 3 | 2 | 4 | 2 | **15** | B |
| 10 | CivicPulse AI | Demo | 4 | 3 | 2 | 3 | 2 | **14** | B |
| 11 | Vendor Contract Mgmt | Demo | 3 | 3 | 2 | 3 | 2 | **13** | B |
| 12 | RVA Help | Demo | 3 | 2 | 3 | 1 | 2 | **11** | B |
| 13 | RVA Contract Lens | Demo | 4 | 3 | 1 | 2 | 1 | **11** | B |
| 14 | Text 311 | Demo | 3 | 2 | 2 | 1 | 2 | **10** | C |

---

## Detailed Scores

### Contract Expiry Dashboard — NEW_IDEAS

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 5 | Procurement Department (32 FTE) — renewal tracking is core mandate; this is literally what they do manually today. |
| Data Readiness | 5 | City Contracts `xqn7-jvv2` is public Socrata, updated monthly, 1,362 records, 0% missing expiration dates — the cleanest dataset in this pillar. |
| Tech Stack Fit | 4 | Static web dashboard loading CSV; commodity cloud or GitHub Pages hosting; no enterprise software required. |
| Integration Surface | 5 | Reads one public CSV via Socrata download — no API keys, no MOUs, no closed-system integration. |
| Maintenance Burden | 5 | Socrata data auto-updates monthly; dashboard is stateless and read-only; no staff intervention unless UI changes needed. |
| **Total** | **24** | **Tier S** |

**Key blocker:** Political — Procurement leadership may view public visibility into expiry clusters and $0/$1 placeholder contracts as exposing dysfunction rather than enabling efficiency.
**Key accelerator:** The data is already public and complete. A competent team can ship this in a weekend with zero permissions needed from anyone.

---

### Contract Expiry Alerts — NEW_IDEAS

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 5 | Procurement Department — push alerts for their own staff against their own renewal deadlines; no ambiguity. |
| Data Readiness | 5 | Same `xqn7-jvv2` dataset with 0% missing expiration dates and known surge clusters at quarter/year-end. |
| Tech Stack Fit | 4 | Scheduled cloud function + email service (SendGrid, SES, or SMTP relay); one commodity SaaS dependency. |
| Integration Surface | 4 | Reads public Socrata CSV; needs a department contact/email list for routing, which is a one-time manual seed. |
| Maintenance Burden | 4 | Cron job runs weekly unattended; only breaks if Socrata schema changes or email service has delivery issues — monthly check at most. |
| **Total** | **22** | **Tier S** |

**Key blocker:** Getting the procurement officer email list organized by department/portfolio — this doesn't exist as structured data and requires someone to build and maintain the distribution map.
**Key accelerator:** Complement to Contract Expiry Dashboard — the dashboard is pull, this is push. Together they cover both usage patterns with the same data source and near-zero incremental cost.

---

### Deterministic Service Wizard — NEW_IDEAS

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 4 | 311/CSR team manages service routing and knows the taxonomy; they're the natural owner but their primary mandate is operating AvePoint, not building new web tools. |
| Data Readiness | 3 | rva.gov Services directory and CSR pages are public but unstructured — someone must curate ~50-70 leaf categories with synonyms into a JSON taxonomy from scratch. |
| Tech Stack Fit | 5 | Static HTML/JS with a JSON config file — can embed directly in rva.gov's Drupal CMS or run standalone; no AI, no API keys, no cloud services. |
| Integration Surface | 5 | Links out to existing RVA 311 forms and department phone numbers — zero API calls, zero system integration; purely a navigation layer over public URLs. |
| Maintenance Burden | 4 | JSON taxonomy needs updating when services or contacts change; version-controllable and auditable by non-technical staff; estimate monthly at <2 hours. |
| **Total** | **21** | **Tier S** |

**Key blocker:** The initial JSON taxonomy curation is 40-80 hours of domain expert time — the 311 team knows the routing rules in their heads but nobody has written them down as machine-readable decision trees.
**Key accelerator:** GOV.UK Smart Answers has proven this pattern at national scale since 2012; the design is boring, auditable, and translatable without Google Translate — which Richmond's Language Access Plan explicitly flags as insufficient.

---

### Contract-Payment Drift Scanner — BLUESKY

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 4 | Procurement/Finance internal controls function — clear user (analyst doing post-p-card-reset or pre-renewal reviews) but sits at the seam between procurement and audit. |
| Data Readiness | 4 | Both `xqn7-jvv2` (contracts) and `5y73-enav` (payments FY16+) are public Socrata datasets with regular updates, but vendor name normalization across the two requires a fuzzy-match alias table. |
| Tech Stack Fit | 4 | Data join + anomaly rules + CSV export; buildable as a Python script or lightweight web app on commodity cloud; no enterprise software. |
| Integration Surface | 5 | Reads two public Socrata datasets, outputs CSV for manual follow-up in OnBase/RAPIDS — no write integration with closed systems, no MOUs. |
| Maintenance Burden | 4 | Vendor alias table needs periodic updates as new vendors appear; anomaly thresholds may need tuning; estimate monthly at <2 hours. |
| **Total** | **21** | **Tier S** |

**Key blocker:** Vendor name inconsistency across the two datasets — "Richmond Mechanical Inc" vs "RICHMOND MECHANICAL" vs "Richmond Mech." — the alias table will never be 100% complete, and false positives erode analyst trust.
**Key accelerator:** This is the only idea in the pillar that creates a spend-vs-authority reconciliation lens. The two Socrata datasets have never been joined before — the insight surface is entirely new with zero new data collection.

---

### City Budget Dashboard — Demo

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 4 | Budget & Strategic Planning or Finance Department — clear owner for a transparency dashboard; capacity to maintain a Tableau workbook is well within their skill set. |
| Data Readiness | 4 | Richmond Open Data Portal budget data is public and structured; currently FY14-FY22 which is stale — FY23-25 data exists but hasn't been plugged in yet. |
| Tech Stack Fit | 4 | Tableau Public is free, hosted, and requires no City infrastructure; the LLM-pillar-mapping feature would need an AI service but could be replaced with a static lookup table. |
| Integration Surface | 5 | Pulls from public Open Data Portal, publishes to Tableau Public — completely standalone, no City system integration whatsoever. |
| Maintenance Burden | 4 | Annual update to plug in new fiscal year data; Tableau Public handles hosting; <2 hours per year once the workflow is established. |
| **Total** | **21** | **Tier S** |

**Key blocker:** Data currency — FY14-22 is already 3+ years stale; value drops sharply if the pipeline to ingest FY23-26 data isn't established as a routine annual task.
**Key accelerator:** Already built and published on Tableau Public. Updating it is a data-refresh task, not a development project. Easiest "ship tomorrow" path in the entire pillar.

---

### MAP Tracker — Demo

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 5 | Mayor's Office — they own the Mayor's Action Plan by definition; department heads already provided baseline data during the hackathon, proving executive buy-in. |
| Data Readiness | 3 | MAP metrics exist scattered across departments and AchieveIt (City's internal reporting tool) but not in any public or structured format — requires manual quarterly entry or future AchieveIt API integration. |
| Tech Stack Fit | 4 | Single-file web app is trivially hostable; needs a lightweight backend/database for multi-user staff data entry; commodity cloud or City web hosting. |
| Integration Surface | 4 | Standalone now with manual data entry; clear upgrade path to AchieveIt API for automated metric feeds — one future integration. |
| Maintenance Burden | 3 | Requires quarterly data entry from department staff — the operational burden is human discipline, not technical complexity; the app itself is simple. |
| **Total** | **19** | **Tier A** |

**Key blocker:** Sustained staff discipline for quarterly data entry — without AchieveIt integration, this becomes another reporting obligation that atrophies after the initial enthusiasm fades.
**Key accelerator:** The Mayor's Office has direct authority to mandate department participation. Department heads already volunteered data during hackathon week. Political will exists today.

---

### Council Office Routing Memo — BLUESKY

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 3 | Council constituent services is distributed across 9 district offices with no single department owner — would need a Council Services Coordinator or the City Clerk's office to champion adoption. |
| Data Readiness | 3 | Same rva.gov Services directory and CSR pages as the Service Wizard — public but needs curation into a structured JSON map of symptoms → department → URL/phone. |
| Tech Stack Fit | 4 | Small internal web form + curated JSON + optional lightweight NLP; commodity cloud hosting; no enterprise software required. |
| Integration Surface | 5 | Completely standalone — reads from curated JSON, produces a routing memo as text output; no system integration, no API calls, no data writes. |
| Maintenance Burden | 4 | JSON map needs monthly-ish updates when services change; memo template is static; council aides can flag stale routes as they encounter them. |
| **Total** | **19** | **Tier A** |

**Key blocker:** No single champion — adoption requires convincing 9 independent council offices to change their intake workflow, or finding one early-adopter office willing to pilot.
**Key accelerator:** Distinct user base (council staff, not residents) means it doesn't compete with or duplicate Text 311/Hey804/RVA Help/Service Wizard — it can coexist and launch independently.

---

### Hey804 — Demo

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 3 | Sits between 311/CSR (service routing) and DIT (rva.gov web platform) — embedding the widget on rva.gov requires DIT approval; maintaining the knowledge base requires 311 expertise; neither clearly owns both. |
| Data Readiness | 3 | Knowledge base is a manually curated SQLite database seeded from public rva.gov pages — useful but requires ongoing curation every time a service URL, phone number, or department structure changes. |
| Tech Stack Fit | 3 | Claude AI for classification + Google Translate + Docker deployment; AI policy AR 2.13 permits chatbots with DIT review, but Claude is a new vendor dependency and Docker isn't in City's standard stack. |
| Integration Surface | 4 | Widget embeds via single `<script>` tag on rva.gov — standalone otherwise; links out to existing City pages; no write integration with 311 or any backend system. |
| Maintenance Burden | 3 | Knowledge base needs updating whenever City services change; Claude API needs monitoring for cost and quality; Google Translate quality is uneven for civic content — cumulative effort is weekly-level. |
| **Total** | **16** | **Tier A** |

**Key blocker:** DIT review of Claude AI usage under AR 2.13 — the AI policy permits chatbots but requires approval, and classification-only usage still means an AI vendor in the resident-facing path.
**Key accelerator:** The `<script>` tag embed pattern means zero rva.gov backend changes — DIT adds one line of HTML. Operating cost under $10/day is well within pilot budgets.

---

### Mira — Demo

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 4 | Procurement Department (32 FTE) — they're the direct users; department is identified but capacity to adopt and maintain a full Azure AI stack alongside Oracle RAPIDS/OnBase is uncertain. |
| Data Readiness | 3 | Demo used real City contract data; Socrata `xqn7-jvv2` is public, but the high-value use case (PDF extraction) requires the actual contract documents which live in OnBase with no API. |
| Tech Stack Fit | 2 | Full Azure deployment: Document Intelligence (OCR), Foundry (RAG), Search (indexing), Container (hosting) — four Azure services that DIT doesn't currently operate, requiring new vendor relationship and IT involvement. |
| Integration Surface | 4 | Standalone upload-and-search workflow; no integration with closed systems required for basic function; future OnBase feed would unlock scale but isn't needed for pilot. |
| Maintenance Burden | 2 | Azure stack at $200/month needs monitoring across four services; AI models need quality checks; index needs rebuilding as contracts are added — requires dedicated technical staff. |
| **Total** | **15** | **Tier B** |

**Key blocker:** The PDF bottleneck — Mira's value proposition is reading contract PDFs, but those PDFs live in OnBase which has no API. Without OnBase access, staff must manually upload every document, negating much of the automation promise.
**Key accelerator:** Azure alignment — the City already runs AvePoint/311 on Azure/Dynamics 365, so Azure as a platform isn't entirely foreign; the $200/month cost is trivial against procurement staff time.

---

### CivicPulse AI — Demo

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 4 | Procurement Department — direct users of contract intelligence; department identified but the dual-component system (dashboard + AI extraction) adds adoption complexity. |
| Data Readiness | 3 | Contract Pulse View could use Socrata `xqn7-jvv2` for timeline data; Document Insight Extractor needs actual contract PDFs from OnBase (no API) for its core value proposition. |
| Tech Stack Fit | 2 | AI extraction engine (model unspecified) + web dashboard — any AI PDF processing requires DIT review under AR 2.13; the unspecified model makes vendor evaluation impossible. |
| Integration Surface | 3 | PDF upload is standalone; dashboard could pull from Socrata; but real value requires OnBase access for PDF pipeline — one critical partnership. |
| Maintenance Burden | 2 | AI model quality monitoring, dashboard data freshness, extraction accuracy auditing — this is an AI system that makes procurement recommendations, so errors have contract/compliance consequences. |
| **Total** | **14** | **Tier B** |

**Key blocker:** Same as Mira — contract PDFs live in OnBase with no API; without that pipeline, staff upload every document manually, which doesn't save time over just reading the PDF.
**Key accelerator:** The Contract Pulse View component (expiry timeline + urgency flags) is independently valuable even without the AI extraction — could ship that slice first using only Socrata data.

---

### Vendor Contract Mgmt — Demo

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 3 | Procurement is the primary user but the two-sided design (government + vendor portals) implies a vendor-relations stakeholder and account management that the 32-FTE team doesn't currently staff for. |
| Data Readiness | 3 | Socrata datasets provide contract data; VITA statewide contract API was unavailable during hackathon and remains unreliable; PDF upload workaround works but doesn't scale. |
| Tech Stack Fit | 2 | Next.js + Firebase Auth + AI summarization agent — Firebase is not a City platform, Next.js deployment needs cloud hosting, and AI summarization requires DIT review; three new dependencies. |
| Integration Surface | 3 | Socrata data is public; Firebase auth is standalone but would eventually need City AD/SSO integration for government users; VITA integration remains aspirational. |
| Maintenance Burden | 2 | Full web application with authentication, two user roles, AI agent, and Socrata data pipeline — requires dedicated developer for ongoing operation. |
| **Total** | **13** | **Tier B** |

**Key blocker:** The two-sided portal design assumes vendors will create accounts and actively use the system — a significant adoption challenge when vendors already have their own contract tracking and the City isn't mandating portal usage.
**Key accelerator:** The Socrata-backed contract view is functional today and doesn't depend on the vendor portal or VITA API — could ship the government-only dashboard slice independently.

---

### RVA Help — Demo

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 3 | 311/CSR team is the natural owner — but this is a replacement-grade ticket management system (submission, routing, staff view, activity log) sitting alongside AvePoint, not a lightweight layer on top of it. |
| Data Readiness | 2 | Claims to use real public city information but the ticket submission and status tracking features require write access to or synchronization with the 311 system, which runs on AvePoint/Dynamics 365 with no public API. |
| Tech Stack Fit | 3 | AI chat + Google Maps API + custom web app — one new SaaS (AI provider) plus commodity cloud; simpler stack than Mira/CivicPulse but still requires DIT review for AI. |
| Integration Surface | 1 | The core value proposition — structured 311 ticket submission and staff-side views — requires deep integration with AvePoint/Dynamics 365/BizTalk/Cityworks, all closed systems with no public APIs. |
| Maintenance Burden | 2 | Full ticket management system with AI classification, Google Maps integration, accessibility features, and staff/resident dual views — requires dedicated technical staff to operate. |
| **Total** | **11** | **Tier B** |

**Key blocker:** RVA Help is architecturally a parallel 311 system, not a front-end to the existing one. Without AvePoint integration, tickets submitted through RVA Help would exist in a separate database invisible to 311 staff using the real system — creating worse fragmentation.
**Key accelerator:** The structured-submission UX pattern (AI clarifies → user confirms → categorized ticket) is genuinely better than the current 311 web form; if AvePoint ever exposes an intake API, this pattern could be adapted.

---

### RVA Contract Lens — Demo

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 4 | Procurement Department is the clear user — urgency-triaged dashboard and federated compliance checking directly serve procurement officers making renewal/rebid decisions. |
| Data Readiness | 3 | Socrata `xqn7-jvv2` for contract data and SAM.gov for federal compliance are public APIs; but the OCR-on-PDFs feature requires OnBase access (no API), and FCC/FBI screening databases have varying access models. |
| Tech Stack Fit | 1 | Federated search across 8 live sources + OCR pipeline + AI scoring/recommendation engine + public portal with accessibility features — this is an enterprise-grade system the City has no capacity to operate; DIT manages 428 apps and would not add this without major justification. |
| Integration Surface | 2 | Queries 8 external data sources including federal registries; the institutional memory/decision timeline feature creates a new persistent data store alongside RAPIDS/OnBase — formal security review and data governance required. |
| Maintenance Burden | 1 | Eight data source connections, AI scoring model, OCR pipeline, public-facing portal, decision audit log — any one of these could break independently; requires a dedicated team, not a single maintainer. |
| **Total** | **11** | **Tier B** |

**Key blocker:** Architectural ambition — this is a 6-12 month enterprise software project presented as a hackathon demo. The federated search + AI scoring + OCR + audit trail + public portal is five products, not one. No clear path from demo to deployable without a dedicated engineering team.
**Key accelerator:** The urgency-triage UX concept (today/this week/this month lanes) is excellent and could be extracted as a standalone feature layered on top of the Contract Expiry Dashboard using only Socrata data.

---

### Text 311 — Demo

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 3 | 311/CSR team manages service intake but their mandate is the AvePoint system; adding an SMS channel requires Twilio infrastructure and AI moderation that falls outside their current operational scope. |
| Data Readiness | 2 | Demo claims "up-to-the-minute RVA 311 data source" for duplicate checking, but RVA 311 runs on AvePoint/Dynamics 365 with no public API — legacy Socrata 311 data covers 2013-2015 only (SeeClickFix era, dead). |
| Tech Stack Fit | 2 | OpenAI API + SMS gateway (likely Twilio) + custom web app — two new vendor dependencies (AI + telephony) requiring DIT review under AR 2.13 and telecom procurement. |
| Integration Surface | 1 | Core feature is submitting directly to RVA 311 and reading existing requests — both require deep integration with AvePoint/Dynamics 365 which exposes no public API and uses BizTalk internally for Cityworks routing. |
| Maintenance Burden | 2 | AI conversation model needs prompt tuning, SMS gateway needs monitoring, 311 integration must track AvePoint changes — any AvePoint update could break the submission pipeline silently. |
| **Total** | **10** | **Tier C** |

**Key blocker:** The entire value proposition depends on bidirectional 311 integration (read existing tickets + write new ones) against a system with no API. Without it, the SMS channel creates orphaned tickets in a parallel database.
**Key accelerator:** The equity argument is strong — SMS works on any phone, any language, no app install. If AvePoint ever exposes an intake API, Text 311's UX pattern is the right delivery mechanism for underserved residents.

---

## Pillar-Level Observations

**The 311 integration wall divides this pillar in half.** Every service-navigation idea (Text 311, Hey804, RVA Help, Service Wizard, Council Routing Memo) runs into the same constraint: RVA 311 is an AvePoint system on Dynamics 365/Azure with no public API. Ideas that only *link to* 311 web forms and phone numbers (Hey804, Service Wizard, Council Memo) score well. Ideas that try to *submit into* or *read from* 311 programmatically (Text 311, RVA Help) hit a hard wall. Until the City negotiates an AvePoint intake API or builds a middleware layer, no hackathon project can do real 311 integration. The deterministic Service Wizard and Council Routing Memo cleverly avoid this wall entirely by treating 311 as a destination, not a dependency.

**Procurement has the best public data in City government, and almost nobody used it.** The Socrata City Contracts dataset (`xqn7-jvv2`) is clean, complete (0% missing expirations), and updated monthly. The Payment Register (`5y73-enav`) is equally accessible. Yet four out of five procurement demos built AI-powered PDF extraction tools that depend on OnBase documents with no API access. The simplest and highest-scoring ideas in this pillar — the Contract Expiry Dashboard, Expiry Alerts, and Drift Scanner — all work exclusively with public tabular data that requires zero permissions. The gap between what teams built (impressive AI) and what the City can deploy (Socrata dashboards) is the defining tension of this pillar.

**The viable implementation path is a layered stack, not picking one winner.** The S-tier ideas are complementary: Contract Expiry Dashboard (visual awareness) → Contract Expiry Alerts (push notifications) → Contract-Payment Drift Scanner (audit/control) → City Budget Dashboard (public transparency) → Deterministic Service Wizard (resident self-service). Each addresses a different user, uses different data, and can ship independently. A realistic 90-day pilot could launch the Contract Expiry Dashboard in week 1, add email alerts by week 4, and pilot the Service Wizard with the 311 team by week 8 — all using only public data and commodity cloud hosting, with no DIT security review, no AI policy approval, and no integration with closed systems.
