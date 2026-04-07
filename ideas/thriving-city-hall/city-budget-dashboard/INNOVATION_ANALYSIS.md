# Innovation Analysis: City Budget Dashboard

**Generated:** April 2, 2026
**Inputs:** RESEARCH_RESULT.md, 6 Innovation Lenses

---

## 1. Blue Ocean Reframing (ERRC Grid)

| Factor | Action | Details |
|--------|--------|---------|
| Stale, disconnected data exports | Eliminate | Richmond's Socrata General Fund dataset was last updated July 2021. Eliminate the tolerance for multi-year-old budget data in a "transparency" portal. |
| Multiple fragmented dashboards | Reduce | Richmond currently has Socrata, a new Tableau Public dashboard (March 2026, 166 views), and a beta ArcGIS CIP dashboard. Reduce from 3 disconnected tools to one hub. |
| Participatory budget simulation | Raise | Norfolk uses Balancing Act to let residents simulate budget tradeoffs. Lawrence, KS collected ~300 responses that directly influenced allocations. Raise Richmond to this standard. |
| Public analytics on dashboard usage | Create | New Orleans publishes GA data as an open dataset. No Richmond transparency tool publishes its own engagement metrics. Create a "Budget Transparency Scorecard" published quarterly. |

**Core assumption challenged:** That publishing budget data equals budget transparency. Pittsburgh deployed an award-winning portal yet Council was "caught off guard" by a $40M shortfall. Dashboards without participatory engagement and internal data equity are transparency theater.

**Reframed value proposition:** A budget dashboard that matters isn't one people can see — it's one people can interact with and that Council uses to make decisions. Combine live data, narrative context, and citizen simulation to move from publishing to governing.

---

## 2. Rapid Ideation — 8 Divergent Approaches

1. **Stale Data Shame Clock** — A public counter showing "Richmond's Socrata budget data is X days out of date" — a forcing function to update it.
2. **Budget vs. Actuals Live Tracker** — Like Cleveland's 2026 budget, show side-by-side budget vs. actual spending in real-time, so Council and residents can track execution.
3. **"Your Tax Dollar" Receipt** — Enter your property tax amount, see a personalized breakdown: "$X went to schools, $Y to police, $Z to parks." Norfolk's Balancing Act includes this.
4. **Budget Simulation Game** — Residents allocate a fixed budget across departments. See tradeoffs: "If you add $1M to parks, you must cut $1M from roads." Publish aggregate results to Council.
5. **Department Budget Baseball Cards** — One-page visual per department: budget trend, top line items, YoY change, performance KPIs. Scannable by Council members and journalists.
6. **Capital Project Ticker** — Show CIP projects with live status: funded, in design, under construction, completed. Link each to a map location and a dollar amount.
7. **Budget Story Map** — A narrative-driven, scrollable story: "Here's where Richmond's $2B budget goes, what changed this year, and what residents said they want." Combine data with storytelling.
8. **Council Budget Alert Bot** — Notify Council members when a department's spending deviates >10% from budget in any quarter. Prevent Pittsburgh's "caught off guard" scenario.

**Most provocative:** #1 — The Stale Data Shame Clock turns a transparency failure into a public embarrassment, creating political pressure to update data. It's a one-page website that does more for accountability than a 10-tab dashboard.
**Most feasible:** #5 — Department Budget Baseball Cards use existing Socrata/Tableau data to create scannable one-pagers. 6-8 hours of design work.

---

## 3. Rapid Design Sprint

**Problem in one sentence:** Richmond publishes budget data across 3+ disconnected platforms, the core Socrata dataset is 5 years stale, and no tool lets residents interact with or influence budget priorities.

**Target user:** A Richmond City Council member preparing for a budget hearing who wants to quickly understand department spending trends and what residents care about.

**User Journey:**
- Start: Council member visits a single budget hub page. Sees a live Tableau visualization showing FY24-FY27 budget trends, a link to the checkbook, and an embed of the CIP ArcGIS dashboard.
- Friction: Currently, the Council member must navigate between Socrata (stale), Tableau Public (new but disconnected), and the CIP beta (hard to find). No single page connects these.
- Outcome: Council member sees: budget trends, a "Budget vs. Actuals" view, and a summary of resident simulation results ("500 residents prioritized affordable housing and road repair").

**Lowest-fidelity prototype:** A single landing page on GitHub Pages that embeds the existing Tableau Public dashboard, deep-links to the Socrata dataset and CIP dashboard, and adds a "Budget Priorities" section with a simple ranked-choice poll.

**First test:** Share with 2 Council members and 3 community organization leaders. Ask: "Does this page give you what you need for a budget conversation? What's missing?"

---

## 4. Opportunity Mapper

### Pattern A: Budget Hub Landing Page (Quick Win)
- **User:** Council members, journalists, civic organizations, engaged residents
- **Outcome:** One URL that connects all existing Richmond budget tools with narrative context
- **Workflow:** Create a static landing page → embed Tableau dashboard → link to Socrata dataset, checkbook, and CIP dashboard → add narrative context per the September 2025 Council transparency ordinance
- **Dependencies:** Existing Tableau Public dashboard (published March 28, 2026), Socrata dataset (even if stale), CIP ArcGIS dashboard (beta)
- **Richmond relevance:** The September 2025 Council ordinance mandates publishing departmental budget requests online by January 15. This hub fulfills the spirit of that mandate by consolidating all budget data in one place.

### Pattern B: Participatory Budget Simulator (Stretch)
- **User:** All Richmond residents
- **Outcome:** Residents simulate budget tradeoffs and submit priorities that are published to Council before hearings
- **Workflow:** Build a Balancing Act-style simulator with Richmond's actual department budgets → collect resident submissions → publish aggregated results alongside the budget hub
- **Dependencies:** Current FY budget data by department (available from the Tableau dashboard), a survey/simulation platform, promotional outreach
- **Richmond relevance:** Lawrence, KS used Balancing Act to collect ~300 responses that directly influenced their homeless programs budget. Norfolk explicitly states public input via Balancing Act informs their budget.

**Recommendation:** Pattern A is a weekend build that immediately improves the experience for Council and press. Pattern B requires data refresh and a community engagement campaign but delivers the outcome that actually changes budget decisions.

---

## 5. Problem Scoping

| Dimension | Score (1-5) | Notes |
|-----------|-------------|-------|
| Impact | 4 | Budget transparency is table stakes for good governance. The participatory layer is where real impact happens (Lawrence, Norfolk). |
| Feasibility | 3 | The hub page is easy. But meaningful impact requires refreshing the stale Socrata data (FY21), which requires City cooperation. |
| Data availability | 2 | Core Socrata dataset last updated July 2021. Tableau Public dashboard is new but limited. CIP dashboard is beta. The data exists but is fragmented and stale. |
| Clarity | 4 | "Show me where my tax dollars go" is universally understood. The spec varies by ambition level. |
| Demo credibility | 3 | A hub page with stale data undermines the demo. Best if paired with an ask to refresh Socrata as a deliverable. |

**Richmond-specific alignment:** Directly supports the September 2025 Council transparency ordinance. Addresses the specific gap between Richmond's 3 existing tools and a coherent budget transparency experience.

**Policy/eligibility risks:** Publishing budget data is non-controversial. The participatory simulation carries a risk of raising expectations that resident input will influence outcomes. Must include clear framing: "This is informational, not a binding vote."

**Weekend MVP shapes:**
1. **Minimal:** Single landing page embedding existing Tableau dashboard, linking to Socrata and CIP, adding narrative context. 4-6 hours.
2. **Enhanced:** Add a simple budget priorities poll (ranked-choice among 5-7 categories), publish results in real-time on the same page. 8-12 hours.

---

## 6. Assumption Mapping

| # | Assumption | Risk | Uncertainty | Priority |
|---|-----------|------|-------------|----------|
| 1 | Stale Socrata data (FY21) will be refreshed by the City | High | High | TEST FIRST |
| 2 | Residents will engage with a budget simulation or poll | Medium | High | TEST SECOND |
| 3 | Council members will reference the dashboard in budget hearings | High | High | TEST THIRD |
| 4 | The Tableau Public dashboard is accurate and will be maintained | Medium | Medium | VERIFY |
| 5 | A hub page provides sufficient value even without fresh data | Medium | Medium | VALIDATE |
| 6 | The CIP ArcGIS dashboard will exit beta and become reliable | Low | Medium | MONITOR |
| 7 | GA4 analytics can be configured on the hub to measure engagement | Low | Low | CONFIRMED |

**Top 3 to validate:**
1. **Socrata data will be refreshed** — Validation: Contact the Department of Budget and Strategic Planning. Ask whether FY24-FY27 data can be uploaded. If not, the dashboard has a credibility problem.
2. **Residents will engage with a simulation** — Validation: Run a 1-week pilot poll promoted via social media and Council newsletters. If >50 responses, there's demand. Lawrence got ~300 with targeted outreach.
3. **Council will use it** — Validation: Demo to 2 Council members before a budget hearing. Track whether the dashboard URL appears in any hearing materials or social media posts.

---

## Key Takeaway

Richmond has all the building blocks for budget transparency — Socrata, Tableau, ArcGIS CIP — but they're scattered across 3 platforms and the core data is 5 years stale. Pittsburgh's experience proves that even award-winning portals fail if Council doesn't have real data access. The most impactful move isn't building another dashboard — it's consolidating what exists, refreshing the data, and adding a participatory layer that connects resident priorities to Council decisions. The technology is trivial; the institutional will to keep data fresh is the real innovation.
