# Innovation Analysis: RVA Helps

## 1. Blue Ocean Reframing (ERRC Grid)

| Action | Element | Rationale |
|--------|---------|-----------|
| **Eliminate** | "Build a new directory from scratch" mentality | 211 National Data Platform already exposes HSDS-aligned APIs with daily-to-monthly updates. Research: "Federation beats fragmentation" — don't rebuild what 211 already maintains |
| **Eliminate** | Vanity metrics (searches, page views) as success indicators | Duke Health NCCARE360: 99% "Closed Loop Rate" but only 65% actual Successful Connection Rate (SCR), dropping to 38% when funding ended. "Closed" ≠ "connected" |
| **Reduce** | Manual data maintenance burden on CBOs | Healthcare industry spends $2.76B annually on provider data maintenance. Practices spend ~$1,000/month responding to redundant requests. Must reduce this to near-zero for Richmond CBOs |
| **Reduce** | Directory scope to Richmond-relevant services | Missouri 211 study: 91% tried referrals but only 36% received assistance (67% for food, 17% for housing). Comprehensive coverage with stale data is worse than curated coverage with fresh data |
| **Raise** | Data freshness to 90-day verification cadence | B2B contact records decay 30% annually. CAQH DirectAssure found 63% of Texas health plan records were erroneous. Active verification every 90 days for Tier 1 resources is the minimum |
| **Raise** | AI-assisted deduplication and maintenance | Open Referral Resource Record-Matcher reduces dataset comparison from days/weeks to 30 minutes. Deploy for continuous reconciliation of 211, city, and CBO data sources |
| **Create** | A Richmond "Resource Data Utility" with HSDS as canonical standard | Per DC Community Resource Information Exchange model: single accountable entity for data standards and stewardship, with CBO data maintenance as a grant condition |
| **Create** | Successful Connection Rate (SCR) as the primary metric | Track whether residents actually received the service, not just whether the referral was made. Per Duke Health research: only 6 of 41 studied e-referral systems confirmed service receipt |

**Core assumption challenged:** "The problem is that a directory doesn't exist." Research shows directories exist everywhere — the problem is they're stale, fragmented, and measure the wrong things. Missouri 211 callers: 91% contacted the referral, but only 36% got help. The gap is data quality and outcome tracking, not directory availability.

## 2. Rapid Ideation (Crazy 8s)

| # | Idea | Notes |
|---|------|-------|
| 1 | **HSDS-native Richmond service directory** — Web app backed by HSDS-formatted data, federated with 211 Virginia. Provider self-service portal for updates. Plausible analytics | Baseline. Per Open Referral standards. Uses 211 NDP as data backbone |
| 2 | **AI-powered freshness engine** — Automated crawlers check provider websites for hours/address changes; flag discrepancies for human review | Per Resource Record-Matcher model. AI suggests merges and flags anomalies; human stewards approve changes to canonical records |
| 3 | **"Is this still open?" user-flagging system** — Residents can flag a listing as "closed," "wrong address," or "wrong hours" with a 5-day resolution SLA | Crowdsourced data quality. Research recommends strict SLAs for user-flagged corrections to maintain trust |
| 4 | **Embedded referral widgets for partner systems** — Drop-in search widget for 211, CBOs, clinics, and library websites that pulls from the same HSDS backend | Per research: "Directories only move the needle when integrated into workflows." Embed into EHRs, 311, and CBO CRMs |
| 5 | **🔥 "Service receipt confirmation" from clients** — After a referral, send a follow-up SMS asking "Did you receive the service?" to calculate actual SCR | Provocative: flips the measurement model from provider-reported to client-reported. Per Duke Health findings: SCR is the only metric that matters |
| 6 | **🔥 Predictive capacity alerts** — ML model predicts when high-demand services (shelter, food pantry) will hit capacity based on historical patterns, alerting navigators before overflow | Provocative: shifts from reactive referrals to proactive capacity management. No existing social service directory does this |
| 7 | **CBO data maintenance as grant condition** — City-funded CBOs must maintain their service listings in RVA Helps as a condition of receiving grants, creating a self-sustaining data quality loop | Policy innovation, not technology. Per DC Community Resource Information Exchange Phase One Report |
| 8 | **Multilingual community data stewards** — Train volunteers from each language community to verify listings in their network, combining cultural knowledge with data quality | Addresses the finding that directories struggle with immigrant-serving organizations where English-speaking callers can't verify |

## 3. Rapid Design Sprint

**Problem sentence:** Richmond residents, caseworkers, and navigators cannot reliably find accurate, current information about available social services because existing directories are fragmented across 211, CBOs, and city systems — with no shared data standard, no freshness guarantee, and no measurement of whether referrals actually result in service receipt.

**User journey (5 steps):**
1. Resident or navigator searches RVA Helps by need category (food, housing, health, legal) and neighborhood
2. Results show verified services with freshness badges ("verified 12 days ago"), hours, languages, and eligibility notes
3. User selects a service → sees availability status, directions, and "start referral" button
4. Referral is logged; user receives a follow-up SMS at 7 days asking "Did you get help?"
5. Provider receives a quarterly data quality report showing listing accuracy and referral outcomes

**Prototype shape:** Next.js web app with Airtable backend (HSDS-mapped). Search by category + location. Freshness badge per listing (based on last verification date). User-flagging for stale data. Basic referral tracking (click → SMS follow-up). Deploy to Vercel.

**First test:** Populate with 100 Richmond services from 211 Virginia data. Recruit 5 navigators from partner CBOs. Measure over 30 days: (a) search-to-referral conversion, (b) user flag submission rate, (c) 7-day SCR from SMS follow-ups, (d) data accuracy (spot-check 20 listings by calling).

## 4. Opportunity Mapper

### Opportunity 1: Unified Richmond Service Data Layer

| Dimension | Detail |
|-----------|--------|
| **User** | 211 Virginia, Richmond CBOs, City of Richmond 311, healthcare navigators |
| **Outcome** | A single, HSDS-compliant data source for Richmond services that all partners consume, reducing duplication and improving accuracy |
| **Workflow** | 211 NDP API feeds baseline data → AI Record-Matcher deduplicates against CBO lists → provider portal enables self-updates → 90-day verification cycle enforced |
| **Dependencies** | 211 Virginia API access; CBO data sharing agreements; provider portal development; AI matching tool deployment |
| **Richmond relevance** | Richmond has no shared service data standard. United Way of Greater Richmond operates 211 locally but integration with city and CBO data is ad hoc |

### Opportunity 2: Outcome-Measured Referral System

| Dimension | Detail |
|-----------|--------|
| **User** | Caseworkers, navigators, and residents who make and receive referrals |
| **Outcome** | Replace vanity metrics (referrals made) with Successful Connection Rates (client actually received service) by domain |
| **Workflow** | Referral logged → SMS follow-up at 7 days → client reports outcome → aggregate SCR dashboard by service domain |
| **Dependencies** | SMS follow-up infrastructure (Twilio); client consent for follow-up; sufficient response rate for statistical validity |
| **Richmond relevance** | No Richmond referral system currently tracks whether services are actually received. Missouri 211 data shows only 36% receive assistance — Richmond likely faces similar gaps |

### Opportunity 3: CBO Workflow Integration

| Dimension | Detail |
|-----------|--------|
| **User** | CBO caseworkers who currently maintain personal contact lists and organizational spreadsheets |
| **Outcome** | Replace fragmented, personal referral networks with a shared, verified directory embedded in CBO workflows |
| **Workflow** | CBO opens their existing CRM/intake tool → RVA Helps widget provides search → caseworker selects and refers → outcome tracked |
| **Dependencies** | Widget/API development; CBO willingness to change workflow; compatibility with existing CRM systems |
| **Richmond relevance** | CMS Accountable Health Communities model showed 6% decline in inpatient stays for Medicaid beneficiaries receiving navigation — Richmond could pilot similar integration with local FQHCs |

## 5. Problem Scoping

| Dimension | Score (1-5) | Rationale |
|-----------|:-----------:|-----------|
| **Impact** | 4 | Foundational infrastructure: a reliable directory improves every downstream tool (WhatsApp finder, anchor map, 72-hour navigator all need accurate service data). Missouri 211: receiving assistance tripled odds of problem resolution (OR=3.0) |
| **Feasibility** | 3 | 211 Virginia provides a data backbone. But HSDS adoption, AI deduplication, provider portals, and outcome tracking each add complexity. This is a system, not a weekend app |
| **Data readiness** | 4 | 211 Virginia data exists and is HSDS-aligned via NDP. Open Referral Airtable templates enable quick bootstrapping. Gap: Richmond-specific freshness and verification infrastructure |
| **Problem clarity** | 4 | "Service directories are stale and fragmented" is well-documented. Less clear: who owns the data utility, and how is maintenance funded long-term? |
| **Demo-ability** | 3 | A directory search is not visually exciting. Demonstrating freshness badges and SCR tracking is technically interesting but less immediately compelling than a map or WhatsApp conversation |

**Weekend MVP shapes:**
- **Minimal:** Airtable with 50 Richmond services in HSDS-mapped fields. Simple web frontend with category + neighborhood search. Freshness badge per listing. User flag button. Deploy to Vercel.
- **Stretch:** Add 211 Virginia API integration for baseline data. Add AI-powered duplicate detection (Open Referral Record-Matcher). Add SMS follow-up for referral outcome tracking. Add embeddable widget for CBO websites.

## 6. Assumption Mapping

| # | Assumption | Risk (1-5) | Uncertainty (1-5) | R × U | Validation Method |
|---|-----------|:----------:|:-----------------:|:-----:|-------------------|
| 1 | A new Richmond directory can achieve significantly better freshness than 211 Virginia alone | 4 | 4 | **16** | Audit 50 211 Virginia listings by calling providers. Measure baseline accuracy. Compare to 90-day verification target |
| 2 | Providers will self-update their listings via a portal | 4 | 4 | **16** | Onboard 10 providers to a portal. Measure self-update rate over 90 days without active outreach |
| 3 | SMS follow-up yields reliable Successful Connection Rate data | 3 | 4 | **12** | Send follow-ups for 50 referrals. Measure response rate. Target: >30% response for statistical validity |
| 4 | CBOs will adopt a shared directory over their personal contact lists | 4 | 3 | **12** | Interview 5 CBO caseworkers about current referral workflows and willingness to switch |
| 5 | AI deduplication (Record-Matcher) works reliably on Richmond-scale data | 2 | 3 | **6** | Run Record-Matcher on 211 + CBO datasets. Measure precision/recall on 100 manually-reviewed pairs |
| 6 | Long-term data maintenance funding can be secured (grants, city budget, CBO conditions) | 5 | 4 | **20** | Map potential funding sources: United Way, City of Richmond 311 budget, HRSA, CMS HRSN waivers. Confirm at least 2 are viable |

**Top 3 to validate first:**
1. **Assumption 6 (R×U=20):** Directories die when maintenance funding ends. Duke Health SCR dropped from 65% to 38% when funding waned. Sustainable funding must be identified before building.
2. **Assumption 1 (R×U=16):** If 211 Virginia data is already accurate enough, building a parallel system wastes resources. Audit the baseline first.
3. **Assumption 2 (R×U=16):** If providers don't self-update, the maintenance burden falls entirely on the data steward. CAQH found providers ignore redundant requests — the portal must be genuinely low-friction.

---

## Key Takeaway

RVA Helps is the infrastructure play in the pillar — it doesn't serve residents directly but provides the data foundation that every other idea needs. The research is clear: directories fail not because they don't exist, but because data decays (30% annually), metrics are misleading (99% closed-loop ≠ 65% actual connection), and adoption requires workflow integration, not standalone portals. The innovation here is not "build a directory" but "build a data utility with HSDS standards, AI-assisted maintenance, and outcome measurement." The critical risk is funding sustainability — every precedent shows that directory quality collapses when dedicated maintenance funding ends. CBO data maintenance as a grant condition (per the DC model) is the most promising sustainability mechanism.
