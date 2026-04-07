# Implementation Reality Check — Rubric

**Purpose:** Complementary to the RVA Hacks judging rubric (Impact, Feasibility, User Value, Execution, Innovation, Equity), this rubric tests whether an idea will survive past prototype. It targets the three most common civic tech failure modes: (a) no clear departmental owner, (b) data that doesn't exist, and (c) technology the city will never acquire.

**When to use:** After an idea has been scored for desirability. This rubric scores for *survivability*.

---

## The Five Dimensions

Each scored 1–5. Maximum total: 25.

---

### 1. Ownership Clarity

*Is there a named City department that would own and champion this?*

| Score | Meaning | What it looks like |
|:-----:|---------|-------------------|
| 5 | Named owner with mandate + capacity | Department's mission includes this; staff exist who do related work today |
| 4 | Department identified, mandate clear, capacity unknown | Right department obvious but staffing/budget not verified |
| 3 | Plausible owner but not their stated priority | Could live in a department, but it's adjacent to their core work |
| 2 | Cross-department negotiation required | Needs two+ departments to agree on who owns it |
| 1 | No credible owner in City government | Belongs to a nonprofit, coalition, or nobody |

**Why this matters:** Ideas without an owner become orphans. A department head must be able to say "this is mine" without a committee meeting.

---

### 2. Data Readiness

*Does the data already exist, in accessible form, actively maintained?*

| Score | Meaning | What it looks like |
|:-----:|---------|-------------------|
| 5 | All public, API-accessible, actively maintained | Socrata SODA, Legistar OData, GeoHub REST — confirmed endpoints, recent updates |
| 4 | Public but stale or bulk-only | Data exists on open portals but last updated months ago, or CSV/Excel only |
| 3 | Exists but requires curation or one-time digitization | PDF-to-structured, manual geocoding, or seeding from published announcements |
| 2 | Requires partnerships, MOUs, or FOIA | Key data locked behind agency agreements, vendor contracts, or formal requests |
| 1 | Does not exist — must be created from scratch | No dataset, no collection process, no institutional habit of recording this |

**Why this matters:** "If we just had the data" is the most common last words of a civic tech project. Data that doesn't exist today won't exist next quarter.

---

### 3. Tech Stack Fit

*Does it run on what Richmond already has or can trivially acquire?*

| Score | Meaning | What it looks like |
|:-----:|---------|-------------------|
| 5 | Only confirmed City platforms | Socrata, GeoHub, Legistar, rva.gov hosting, existing CMS |
| 4 | City platforms + commodity cloud, no procurement | Static site on GitHub Pages/Netlify, Twilio SMS, free-tier services |
| 3 | Requires one new low-cost SaaS or open-source tool | Needs a small service but no enterprise procurement cycle |
| 2 | Requires new enterprise software or significant IT involvement | Needs DIT security review, new vendor contract, or server infrastructure |
| 1 | Technology the City has no experience operating | ML pipelines, real-time streaming, custom database clusters, blockchain |

**Why this matters:** Richmond runs AvePoint/Dynamics, Oracle ERP, Tyler EnerGov, Esri ArcGIS, Granicus Legistar, and Socrata. Anything outside that orbit requires a procurement cycle measured in quarters, not weeks.

---

### 4. Integration Surface

*How does it connect to existing City systems?*

| Score | Meaning | What it looks like |
|:-----:|---------|-------------------|
| 5 | Standalone — reads public APIs only, zero City system changes | Consumes Socrata/Legistar/GeoHub, outputs to browser/PDF/SMS |
| 4 | Standalone but benefits from one internal feed later | Works on public data now; richer with one City data export added over time |
| 3 | Requires one partnership or informal data-sharing arrangement | Needs a department to share a spreadsheet, schedule, or internal list |
| 2 | Requires formal MOU, IT security review, or system modification | Cross-agency data sharing, API key from a vendor, or write access to a City system |
| 1 | Deep integration with closed systems | Must read/write AvePoint 311, Oracle RAPIDS, EnerGov, or HIPAA-covered systems |

**Why this matters:** The documented closed systems (AvePoint, RAPIDS, OnBase, EnerGov, Help1RVA) have no public APIs. Any idea that depends on integrating with them is blocked until a procurement or partnership conversation succeeds — and those conversations take 6-18 months.

---

### 5. Maintenance Burden

*What does it cost to keep running after launch?*

| Score | Meaning | What it looks like |
|:-----:|---------|-------------------|
| 5 | Automated refresh, no staff time, graceful degradation | Nightly API pull, static rebuild; if source goes stale, tool shows "last updated" and still works |
| 4 | Monthly content review or minor curation | <2 hrs/month; someone checks links, updates a small config, reviews flagged items |
| 3 | Regular staff attention needed | Weekly updates, content management, responding to user reports |
| 2 | Requires dedicated technical staff or vendor | Needs a developer on call, a paid SaaS subscription with active management |
| 1 | Breaks without constant attention | Single point of failure, no monitoring, manual data entry required for every use |

**Why this matters:** City departments are understaffed. A tool that needs 4 hours/week of engineer time will be abandoned within 90 days. The best civic tools are ones that keep working even when nobody is watching.

---

## Tier Definitions

| Tier | Score Range | Meaning | Action |
|------|:-----------:|---------|--------|
| **S** | 21–25 | **Ship it** — could launch with minimal friction | Prioritize for immediate pilot |
| **A** | 16–20 | **Strong** — needs 1-2 solvable blockers cleared | Invest in clearing the blockers |
| **B** | 11–15 | **Promising** — requires meaningful investment or partnerships | Worth pursuing if a champion emerges |
| **C** | 6–10 | **Aspirational** — significant structural barriers | Park until conditions change |
| **D** | 1–5 | **Fantasy** — does not survive contact with reality | Archive; do not allocate resources |

---

## Scoring Template

For each idea:

```
### [Idea Name] — [Source: Demo/NEW_IDEAS/BLUESKY]

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | X | [1 sentence] |
| Data Readiness | X | [1 sentence] |
| Tech Stack Fit | X | [1 sentence] |
| Integration Surface | X | [1 sentence] |
| Maintenance Burden | X | [1 sentence] |
| **Total** | **XX** | **Tier X** |

**Key blocker:** [what would kill this]
**Key accelerator:** [what makes this easier than it looks]
```

---

## Relationship to the Judging Rubric

This rubric is **not a replacement** for Impact, Feasibility, User Value, Execution, Innovation, and Equity scoring. It is a **complementary filter**. An idea can score 95/105 on the Pillar Award and still score 8/25 on Implementation Reality — meaning it's a great idea that will never ship.

The most valuable ideas score high on both: **desirable AND survivable**.

**Combined Potential = (Pillar Award + Mayor's Choice) + (Implementation Reality × 4)**

The ×4 multiplier puts Implementation Reality on a comparable scale to the combined award scores (max 210 + 100 = 310).
