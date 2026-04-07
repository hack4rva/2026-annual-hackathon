# Innovation Analysis: Richmond Spend Mirror

## 1. Blue Ocean Reframing (ERRC Grid)

**Core assumption challenged:** MBE vendors need another directory of opportunities. They don't — they need to understand *spending patterns* so they can position themselves before RFPs drop.

| Action | Element | Rationale |
|--------|---------|-----------|
| **Eliminate** | Vendor registration gates | Boston IQC and NYC PASSPort require enrollment before discovery. Spend Mirror inverts this: see the data first, no login required. Removes the chicken-and-egg problem that leaves 78% of NYC's certified M/WBEs without a new contract in FY25. |
| **Reduce** | NAICS code complexity | Research shows 5-digit NIGP precision matters (BidNet Direct warns broad 3-digit codes cause alert fatigue), but vendors shouldn't need to know their codes. Reduce the interface to plain-language business descriptions that auto-map to NAICS. |
| **Raise** | Historical spend transparency | Portland's OCDS publishes tender-to-payment, but most cities only show active solicitations. Raise the bar by showing 3-5 years of spending concentration by department and NAICS — the institutional knowledge incumbents have but MBE newcomers lack. |
| **Create** | Renewal-cycle intelligence | No city tool currently tells MBE vendors *when* contracts typically rebid. Create a renewal forecast layer from Socrata contract end-dates, giving vendors 6-12 months of lead time — something Boston's Buying Plan attempts but most cities skip entirely. |

## 2. Rapid Ideation (Crazy 8s)

| # | Idea | Provocation Level |
|---|------|-------------------|
| 1 | **Spend Heatmap by NAICS** — Choropleth map of Richmond departments colored by spending intensity per NAICS code. Vendor clicks their trade, sees where the money flows. | Standard |
| 2 | **"Contracts Like Yours" Feed** — Vendor enters business description; system finds the 10 most similar past contracts by dollar range and NAICS, showing who won, for how much, and when it expires. | Standard |
| 3 | **Incumbent Concentration Score** — For each NAICS/department pair, calculate a Herfindahl index. High concentration = one vendor dominates = harder to break in. Low concentration = competitive market = opportunity. | Moderate |
| 4 | **Renewal Countdown Ticker** — Live countdown timers for the top 50 contracts by value approaching expiration. MBE vendors subscribe to categories and get push alerts at 12/6/3-month marks. | Standard |
| 5 | **"Ghost Bid" Simulator** — Vendor enters a hypothetical bid amount for an expiring contract. System shows how it compares to historical award ranges for that NAICS. No real bid — just intelligence. | **Provocative** |
| 6 | **Department Spend Personality Profiles** — AI-generated summaries of each department's procurement behavior: "Parks & Rec spends 73% with the same 4 vendors in landscaping; average contract is $45K; they rebid every 2 years." | Moderate |
| 7 | **MBE Teaming Board** — Vendors post their NAICS codes and capacity; other MBEs find complementary partners for joint ventures on larger contracts. Addresses the subcontracting blind spot the NYC Comptroller flagged ($33B in contracts with zero subcontract records). | **Provocative** |
| 8 | **Spend Shift Alerts** — Track year-over-year changes in department spending by category. If DPW suddenly doubles IT spending, alert IT MBEs. Pattern detection, not just static data. | Moderate |

## 3. Rapid Design Sprint

**Problem sentence:** MBE vendors in Richmond cannot see where City money is being spent by category, who is winning contracts, or when renewals are coming — information that incumbent vendors accumulate over years of relationship-building.

**User journey (4 steps):**
1. Vendor lands on Spend Mirror → enters business description or selects NAICS codes
2. Dashboard shows: top departments by spend in that category, contract size distribution, renewal timeline
3. Vendor drills into a specific department → sees historical vendors, contract values, rebid patterns
4. Vendor bookmarks categories and gets email alerts when contracts in those categories approach renewal

**Prototype shape:** Single-page web app with a search bar (business description → NAICS mapping), a spending heatmap by department, and a contract timeline view. All powered by the Socrata `xqn7-jvv2` dataset with a NAICS lookup table.

**First test:** Recruit 5 MBE vendors through SCORE Richmond or the Metropolitan Business League. Give them the prototype and ask: "Find a contract opportunity that matches your business." Measure time-to-first-insight and whether the vendor identifies a real opportunity they didn't previously know about.

## 4. Opportunity Mapper

### Opportunity 1: MBE Pre-Positioning Intelligence
- **User:** Certified or aspiring MBE vendors in Richmond
- **Outcome:** Vendors identify and prepare for contract opportunities 6-12 months before RFPs drop
- **Workflow:** Search by capability → see spend concentration → track renewal timelines → prepare capacity
- **Dependencies:** Socrata City Contracts dataset (`xqn7-jvv2`), NAICS-to-plain-language mapping table
- **Richmond relevance:** Richmond's OMBD currently uses B2Gnow, which has no public API (a documented structural wall). Spend Mirror sidesteps this entirely by using public Socrata data.

### Opportunity 2: Economic Development Spend Equity Audit
- **User:** City Council members, OMBD staff, equity advocates
- **Outcome:** Quantify how concentrated City spending is and whether MBE participation is improving over time
- **Workflow:** Dashboard view of spend by vendor diversity status → trend lines → department scorecards
- **Dependencies:** Same Socrata dataset, plus any available MBE certification flags (may not be in Socrata)
- **Richmond relevance:** Philadelphia's OEO publishes 31.4% M/W/DSBE utilization rates; Boston publishes $155.6M in M/WBE discretionary spend. Richmond publishes neither — this tool could change that.

### Opportunity 3: Procurement Officer Contract Planning
- **User:** Department procurement officers preparing annual buying plans
- **Outcome:** Officers see which contracts are expiring and can proactively plan MBE outreach
- **Workflow:** Filter by department → see expiring contracts → flag high-value renewals for IQC-style outreach
- **Dependencies:** Socrata dataset with reliable contract end dates
- **Richmond relevance:** Boston's IQC program awarded 54 contracts to certified small businesses using a simplified quote process. Richmond has no equivalent — Spend Mirror could inform the creation of one.

## 5. Problem Scoping

| Dimension | Score (1-5) | Rationale |
|-----------|:-----------:|-----------|
| **Impact** | 4 | Directly addresses the information asymmetry that keeps MBEs from competing. Boston's data-to-awards flywheel moved $155.6M to M/WBEs. |
| **Feasibility** | 5 | Same Socrata dataset as the #1-ranked idea. NAICS mapping is the only manual step. Zero permissions, zero API keys. |
| **Data readiness** | 5 | `xqn7-jvv2` is live, public, and updated. NAICS codes are standardized. |
| **Problem clarity** | 4 | Well-defined user (MBE vendor) and well-defined pain (can't see where money goes). Slight ambiguity on whether MBE certification status is in the Socrata data. |
| **Demo-ability** | 5 | A spending heatmap with contract timelines is visually compelling and immediately understandable. |
| **Total** | **23/25** | |

**Weekend MVP shapes:**
- **Shape A (8 hours):** Static dashboard built on the Socrata dataset. Search by NAICS, see spend by department, see top contracts by value and expiration date. No alerts, no login.
- **Shape B (16 hours):** Add plain-language search (business description → NAICS auto-map), renewal countdown timers, and email subscription for category alerts.
- **Shape C (24 hours):** Add incumbent concentration scoring, historical trend lines, and a "contracts like yours" recommendation engine.

## 6. Assumption Mapping

| # | Assumption | Risk (1-5) | Uncertainty (1-5) | R × U | Validation Method |
|---|-----------|:----------:|:-----------------:|:-----:|-------------------|
| 1 | The Socrata `xqn7-jvv2` dataset contains contract end dates accurate enough to predict renewal windows | 4 | 3 | **12** | Download dataset; check completeness of end-date field across 500+ records |
| 2 | MBE vendors will use a self-service data tool rather than relying on personal networks and OMBD staff | 4 | 4 | **16** | Interview 5 MBE vendors: "How do you currently find City contract opportunities?" |
| 3 | NAICS codes in the Socrata dataset are granular enough (5-digit) to be useful for matching | 3 | 3 | **9** | Audit NAICS field in dataset; count records by code granularity |
| 4 | Contract renewal patterns are predictable from historical data (not ad-hoc rebids) | 3 | 4 | **12** | Compare predicted vs. actual rebid timing for 20 expired contracts |
| 5 | The tool creates net-new awareness, not just confirming what vendors already know | 5 | 4 | **20** | User test: ask vendors to identify opportunities they didn't know about before using the tool |
| 6 | Richmond's procurement culture will not resist transparency (departments won't object) | 2 | 3 | **6** | Data is already public; resistance is unlikely but worth a stakeholder check |

**Top 3 to validate first:**
1. **Assumption 5 (R×U=20):** Does the tool surface genuinely new information? If MBE vendors already know where the money goes, the tool adds no value.
2. **Assumption 2 (R×U=16):** Will MBE vendors adopt a self-service tool? NYC found that 78% of certified M/WBEs never won a new contract despite having access to PASSPort — discovery tools don't guarantee action.
3. **Assumption 1 (R×U=12):** Are contract end dates in Socrata accurate? If dates are stale or missing, the renewal intelligence layer collapses.

## Key Takeaway

Richmond Spend Mirror is the rare hackathon idea that is both high-impact and trivially shippable. The Socrata dataset is live, public, and requires zero City cooperation. The critical design choice is not technical — it's whether to build a passive dashboard (like Portland's OCDS portal, which has no published adoption metrics) or an active intelligence tool (like Boston's Buying Plan + IQC pipeline, which moved $232.5M to M/WBEs). The research strongly favors the latter: discovery must be paired with channeling mechanisms. The weekend build should prioritize renewal-cycle intelligence and plain-language search over static charts. Validate assumption #5 first — if MBE vendors say "I already knew that," the tool is a mirror reflecting nothing new.
