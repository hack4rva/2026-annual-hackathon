# Innovation Analysis: Contract Expiry Dashboard

**Generated:** April 2, 2026
**Inputs:** IDEA.md, RESEARCH_RESULT.md, 6 Innovation Lenses

---

## 1. Blue Ocean Reframing (ERRC Grid)

| Factor | Action | Details |
|--------|--------|---------|
| AI/NLP extraction from PDFs | Eliminate | Four hackathon teams built AI contract review tools. The data is already structured in Socrata — no extraction needed. |
| Multi-source aggregation complexity | Reduce | Stop trying to unify federal/state/local. One dataset (`xqn7-jvv2`, 1,362 records) covers the immediate use case. |
| Proactive time-horizon filtering | Raise | Most city portals show all contracts. Raise urgency by defaulting to "expiring in 90 days" and showing surge-month clustering. |
| MWBE re-compete planning view | Create | No mid-sized city pairs expiration data with equity pipeline visibility. Create a "diversity opportunity" overlay showing which expiring categories had low MBE participation historically. |

**Core assumption challenged:** That procurement transparency requires sophisticated technology. Richmond already publishes `effective_to` on Socrata — the only confirmed mid-sized city to do so. The barrier is UX, not data.

**Reframed value proposition:** The most valuable procurement tool isn't the smartest — it's the most obvious. A sortable, filterable view of what expires when, deployed on GitHub Pages, beats every AI prototype that requires City cooperation.

---

## 2. Rapid Ideation — 8 Divergent Approaches

1. **The Fridge Calendar** — A physical printout generated monthly showing the next 90 days of expirations, posted in procurement offices. Zero tech adoption barrier.
2. **Slack/Teams Bot** — A bot that posts daily into the procurement team's channel: "3 contracts expire this week." No dashboard needed.
3. **Vendor Self-Service Portal** — Flip the audience: let vendors see when their contracts expire and prompt *them* to initiate renewal conversations.
4. **Budget Heatmap** — Overlay contract expirations on a calendar heatmap showing dollar value at risk per month, making fiscal exposure viscerally visible.
5. **Procurement Baseball Card** — One-page snapshot per department: contracts count, next 5 expirations, % re-competed on time, MBE share. Gamify departmental performance.
6. **"Dead Contract" Cemetery** — A public shame board of contracts that expired without renewal, showing the cost of emergency procurement that followed.
7. **Contract Genealogy Viewer** — Show the lineage of each contract: original award → amendments → renewals → current state. Reveal contracts that have been renewed without competition for 10+ years.
8. **Expiry Countdown Twitter/X Bot** — Automated public posts: "Richmond contract #X with [Vendor] for [Service] expires in 30 days. $X value." Radical transparency.

**Most provocative:** #6 — The "Dead Contract Cemetery" reframes transparency as accountability. It names the cost of inaction.
**Most feasible:** #4 — Budget Heatmap is a single Tableau/D3 visualization built directly from `xqn7-jvv2` in under 4 hours.

---

## 3. Rapid Design Sprint

**Problem in one sentence:** Procurement officers don't know which contracts expire soon enough to plan competitive re-solicitations.

**Target user:** Richmond Department of Procurement Services contract specialist managing a portfolio of 50+ active contracts.

**User Journey:**
- Start: Officer opens a spreadsheet export of Socrata data, manually sorts by date, scans for their department's contracts.
- Friction: No filtering by department, no surge warnings, no visual urgency cues. The export is stale by the time they open it.
- Outcome: Officer sees a live, filterable dashboard with 30/60/90/180/365-day quick filters, department drill-down, and a "Data Health" panel flagging contracts with missing values.

**Lowest-fidelity prototype:** A single HTML page with a JavaScript table loaded from the Socrata CSV, quick-filter buttons for time horizons, and a red/yellow/green urgency column.

**First test:** Share with 2-3 procurement officers at the Department of Procurement Services. Ask: "Does this show you something you didn't already know? Would you bookmark this?"

---

## 4. Opportunity Mapper

### Pattern A: Static Expiry Dashboard (Quick Win)
- **User:** Procurement officers and department contract managers
- **Outcome:** See all expiring contracts in one filterable view, sorted by urgency
- **Workflow:** Load `xqn7-jvv2` CSV → parse dates → render table with quick-filter buttons → deploy on GitHub Pages
- **Dependencies:** Socrata dataset (public, no auth, monthly refresh)
- **Richmond relevance:** Richmond is the only confirmed mid-sized city with public `effective_to` dates. This is a first-mover advantage.

### Pattern B: Equity Re-Compete Planner (Stretch)
- **User:** OMBD staff and procurement leadership
- **Outcome:** Identify expiring contract categories where MBE participation was historically low, enabling targeted outreach before re-solicitation
- **Workflow:** Join `xqn7-jvv2` with OMBD vendor registry data → flag low-MBE categories approaching expiry → generate outreach list
- **Dependencies:** OMBD registry access (currently public via `richmondombd.diversitycompliance.com`), manual category-to-NAICS mapping
- **Richmond relevance:** Cambridge's disparity study found MBEs received 3.43% of contract dollars vs. 17.93% availability. Richmond likely has similar gaps.

**Recommendation:** Build Pattern A in a single hackathon sprint. Pattern B is a Phase 2 that requires the same data foundation plus one additional data source.

---

## 5. Problem Scoping

| Dimension | Score (1-5) | Notes |
|-----------|-------------|-------|
| Impact | 5 | Directly addresses the #1 procurement JTBD: knowing what expires when. Research confirms no mid-sized city has built this yet. |
| Feasibility | 5 | `xqn7-jvv2` has 0% missing expiration dates, monthly refresh, no auth required. CSV download bypasses known SODA API bug. |
| Data availability | 5 | 1,362 records, last updated March 16, 2026. All required fields present: contract_id, vendor, effective_from, effective_to, amount. |
| Clarity | 5 | Problem is unambiguous. Build a sortable, filterable table of contract expirations. |
| Demo credibility | 5 | Live data, working filters, real contract numbers. Judges can verify against the Socrata portal in real time. |

**Richmond-specific alignment:** Directly supports the Procurement Transparency Dashboard initiative launched by the City. Fills the gap between the existing landing page (which consolidates links) and a true interactive expiry tracker.

**Policy/eligibility risks:** None. All data is already public. No PII in the contracts dataset. Advisory disclaimer per DOJ/SBA patterns recommended but not legally required.

**Weekend MVP shapes:**
1. **Minimal:** HTML + vanilla JS table loading Socrata CSV, with 30/60/90-day filter buttons and department dropdown. 4-6 hours.
2. **Enhanced:** Add surge-month heatmap calendar, "Data Health" panel for missing/placeholder values, and CSV export. 8-12 hours.

---

## 6. Assumption Mapping

| # | Assumption | Risk | Uncertainty | Priority |
|---|-----------|------|-------------|----------|
| 1 | `xqn7-jvv2` data accurately reflects actual contract expiration dates | High | Low | MONITOR |
| 2 | Procurement officers will use a public dashboard rather than internal tools | High | Medium | TEST FIRST |
| 3 | The Socrata CSV download is reliable and not rate-limited for public use | Medium | Low | MONITOR |
| 4 | Surge clustering (end-of-quarter/year) is visible and actionable in the data | Medium | Low | VERIFY |
| 5 | MBE/equity tagging can be added later without restructuring the tool | Low | Medium | DEFER |
| 6 | Monthly refresh cadence is sufficient for operational decisions | Medium | Medium | TEST SECOND |
| 7 | The "Data Health" panel concept resonates with procurement staff | Low | High | TEST THIRD |

**Top 3 to validate:**
1. **Procurement officers will use a public dashboard** — Validation: Demo to 2-3 procurement staff. Ask if they'd bookmark it. Track return visits in the first week.
2. **Monthly refresh cadence is sufficient** — Validation: Ask procurement officers how far in advance they need to know about expirations. If <30 days, monthly is fine. If they need daily, the architecture changes.
3. **"Data Health" panel resonates** — Validation: Show a mockup of flagged contracts with missing values. Ask if this is useful or noise.

---

## Key Takeaway

This is the highest-ranked idea (1 of 73) for a reason: it requires zero City cooperation, uses a perfectly clean public dataset, and solves a real procurement workflow gap that no mid-sized US city has addressed. The biggest risk isn't technical — it's adoption. A hackathon team should spend 60% of effort on the build and 40% on getting a real procurement officer to use it during the demo.
