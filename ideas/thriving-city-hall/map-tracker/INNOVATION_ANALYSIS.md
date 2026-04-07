# Innovation Analysis: MAP Tracker

**Generated:** April 2, 2026
**Inputs:** RESEARCH_RESULT.md, 6 Innovation Lenses

---

## 1. Blue Ocean Reframing (ERRC Grid)

| Factor | Action | Details |
|--------|--------|---------|
| Mayor-branded one-off dashboards | Eliminate | Research shows mayor-centric platforms have the highest failure rate. PhillyStat was suspended; ad-hoc launches die on leadership transition. Eliminate personality-driven branding. |
| Manual quarterly KPI entry by departments | Reduce | Irving auto-generates reports through Envisio, saving 40+ hours/quarter. Reduce the manual reporting burden by automating ERP/finance feeds first. |
| Budget-to-performance linkage | Raise | Pompano Beach links 75% of budget requests to strategic plan objectives. Durham requires data for budget requests. Raise Richmond to this standard: no budget request without linked KPIs. |
| Transition resilience and institutional memory | Create | West Palm Beach survived a mayoral handoff by tying dashboards to a 5-year strategic plan, not a person. Create a MAP-to-budget linkage that persists regardless of who is mayor. |

**Core assumption challenged:** That a performance dashboard is a technology problem. The research shows it's a governance problem. Durham's ClearPoint succeeded not because of the software but because they created an Office of Performance and Innovation, assigned metric owners, and tied data to budget decisions. Without this governance layer, any platform choice fails.

**Reframed value proposition:** The MAP Tracker isn't a dashboard — it's a governance operating system. The technology is commodity (Envisio, ClearPoint, or OpenGov all work). The innovation is in institutionalizing the cadence: monthly STAT meetings, named metric owners, budget linkage, and a public update schedule that survives political transitions.

---

## 2. Rapid Ideation — 8 Divergent Approaches

1. **ClearPoint/Envisio SaaS** — Buy and configure a purpose-built strategy execution platform. Map Richmond's 7 MAP pillars to KPIs. Monthly updates, public dashboard. Follow Durham's model.
2. **"MAP in a Spreadsheet"** — A single Google Sheet with 15-25 KPIs, traffic-light status, and update timestamps. Embedded in a simple web page. Zero procurement overhead.
3. **Pillar Champion Scorecards** — Each of the 7 MAP pillars gets a one-page public scorecard maintained by its champion. Focus on narrative, not data-heavy dashboards.
4. **Resident Report Card** — A Balancing Act-style interactive where residents grade the City on each MAP pillar. Aggregate grades published alongside official KPIs for a dual perspective.
5. **Council Packet Integration** — Don't build a standalone dashboard. Instead, require MAP progress data as a mandatory section in every Council agenda packet. Embed transparency in existing governance.
6. **100-Day Continuity Memo** — A structured document prepared for every leadership transition: current KPI status, data sources, metric owners, and unresolved issues. Ensure no incoming leader starts from zero.
7. **Open Data KPI Feed** — Publish all MAP KPIs as a Socrata dataset with API access. Let journalists, academics, and civic hackers build their own dashboards. The City focuses on data, not UX.
8. **MAP STAT Sessions** — Skip the dashboard entirely. Institute monthly Baltimore-style CitiStat sessions where department heads present progress data to the Mayor/CAO. Publish session summaries publicly.

**Most provocative:** #8 — MAP STAT sessions skip the dashboard entirely and focus on the governance mechanism that actually drives results. Baltimore held 116 sessions in 2025 and achieved 95% on-time pothole repair. The dashboard is secondary to the meeting.
**Most feasible:** #2 — "MAP in a Spreadsheet" delivers transparency in hours, not months. It's the Durham 2011 approach (before they moved to ClearPoint) and it works if governance is strong.

---

## 3. Rapid Design Sprint

**Problem in one sentence:** Richmond has no public, regularly updated mechanism to track progress against its 7 Mayor's Action Plan pillars, so residents and Council have no way to gauge whether priorities are advancing.

**Target user:** A Council member or civic journalist asking: "Is the MAP working? What progress has been made on Thriving Neighborhoods or A Thriving Economy?"

**User Journey:**
- Start: User visits a public MAP progress page. Sees 7 pillar tiles, each with a summary status (on track/needs attention/at risk) and 2-3 headline KPIs.
- Friction: Currently, MAP progress is scattered across department reports, press releases, and Council presentations. No single, regularly updated source exists.
- Outcome: User clicks into a pillar, sees specific KPIs with trends, last-updated timestamps, and narrative context. Links to underlying Socrata datasets for deep dives.

**Lowest-fidelity prototype:** A static HTML page with 7 cards (one per pillar), each showing 2-3 KPIs manually entered from publicly available data. Updated monthly by a single person. Hosted on GitHub Pages.

**First test:** Share with 3 Council members and 2 journalists. Ask: "Is this useful? What KPIs are missing? Would you cite this in a story or hearing?"

---

## 4. Opportunity Mapper

### Pattern A: Static KPI Scorecard (Quick Win)
- **User:** Council members, civic journalists, engaged residents
- **Outcome:** Monthly snapshot of MAP progress across 7 pillars
- **Workflow:** Define 15-25 KPIs (2-3 per pillar) → collect data from existing public sources (Socrata, ArcGIS, department reports) → publish on a static web page with last-updated stamps
- **Dependencies:** Named KPI owners per department, monthly update commitment, public data sources for each metric
- **Richmond relevance:** The September 2025 Council transparency ordinance demonstrates political will for this kind of accountability. This tool delivers on that mandate at the strategic level.

### Pattern B: Institutionalized Performance Platform (Stretch)
- **User:** Mayor's office, department heads, Council, and residents
- **Outcome:** A durable performance management system with budget linkage, STAT cadence, and public transparency
- **Workflow:** Procure Envisio or ClearPoint → map MAP pillars to KPIs → automate ERP/finance feeds → institute monthly STAT meetings → publish public dashboard → link KPIs to budget requests
- **Dependencies:** Budget for SaaS (~$20K/year for Envisio), dedicated performance team (1-2 FTEs), executive sponsorship, department cooperation
- **Richmond relevance:** Durham (similar population ~285K) has sustained ClearPoint since 2011 across multiple administrations. The model is proven for cities of Richmond's size.

**Recommendation:** Pattern A is the hackathon build. Pattern B is the post-hackathon implementation that requires institutional commitment. The hackathon prototype proves the concept; the city must fund the governance.

---

## 5. Problem Scoping

| Dimension | Score (1-5) | Notes |
|-----------|-------------|-------|
| Impact | 4 | Strategic alignment tool that could influence budget priorities and public trust. Baltimore's CitiStat drives tangible operational outcomes. |
| Feasibility | 3 | The static scorecard is easy. The institutional platform requires procurement, staffing, and governance changes. |
| Data availability | 3 | Some KPIs are available from Socrata (budget, contracts). Others require manual collection from department reports. No single automated feed covers all 7 pillars. |
| Clarity | 4 | "Track progress against the MAP" is clear. Defining the right KPIs is the hard part. |
| Demo credibility | 3 | A static scorecard with manually entered data demos adequately. Real credibility comes from live data feeds and institutional commitment. |

**Richmond-specific alignment:** Richmond's MAP has 7 pillars with 14 problem statements — this is the exact structure that platforms like Envisio and ClearPoint are designed to track. The hackathon itself is organized around these pillars, demonstrating political commitment to the framework.

**Policy/eligibility risks:** Publishing performance data creates accountability expectations. If KPIs are poorly chosen or data stops being updated, the tool becomes a liability. The California State Auditor abandoned its dashboard because manual data entry was unsustainable. Must commit to automated feeds and named owners.

**Weekend MVP shapes:**
1. **Minimal:** Static HTML page with 7 pillar cards, 2-3 KPIs each, manually populated from public data. 6-8 hours.
2. **Enhanced:** Add trend charts (sparklines), link each KPI to its Socrata/ArcGIS source, add a "last updated" stamp per metric, and a simple Balancing Act-style priority poll. 12-16 hours.

---

## 6. Assumption Mapping

| # | Assumption | Risk | Uncertainty | Priority |
|---|-----------|------|-------------|----------|
| 1 | Department heads will commit to monthly KPI updates | High | High | TEST FIRST |
| 2 | 15-25 KPIs can be defined that meaningfully represent MAP progress | High | Medium | TEST SECOND |
| 3 | The MAP framework will survive the next mayoral transition | High | High | TEST THIRD |
| 4 | Public data sources exist for most KPIs | Medium | Medium | VERIFY |
| 5 | Residents will engage with a performance dashboard | Medium | High | VALIDATE |
| 6 | A 1-2 FTE performance team can be funded | Medium | Medium | ASSESS |
| 7 | SaaS platforms (Envisio ~$20K/yr) are within budget | Low | Low | CONFIRMED |

**Top 3 to validate:**
1. **Department heads will update KPIs** — Validation: Identify 3 pilot departments. Ask their directors to commit to monthly updates for 3 months. If they default to "we'll get to it," the governance layer is missing and must be addressed before technology.
2. **KPIs can be defined** — Validation: Workshop with MAP pillar champions. For each pillar, propose 2-3 KPIs. If champions can't agree on measurable outcomes, the MAP is too abstract for a tracker.
3. **MAP survives transition** — Validation: Codify the tracker in a Council resolution (like Baltimore's CitiStat is codified in city code). Tie it to the strategic plan, not the mayor's name.

---

## Key Takeaway

The research is unambiguous: dashboards that last are plan-centric, budget-embedded, and manager-owned. Mayor-branded one-offs die. The technology choice (Envisio, ClearPoint, or even a spreadsheet) is secondary to the governance commitment: named metric owners, monthly STAT cadence, budget linkage, and a transition resilience plan. Durham has done this since 2011. Baltimore codified CitiStat into city law. Richmond has the MAP framework — the missing piece is the institutional machinery to track it.
