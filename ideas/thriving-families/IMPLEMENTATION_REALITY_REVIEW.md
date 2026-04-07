# Implementation Reality Check — Thriving Families Pillar

**Generated:** April 1, 2026
**Ideas scored:** 11 (10 scoreable + 1 corrupted submission)
**Sources:** 6 hackathon demos, 3 new ideas (NEW_IDEAS.md), 2 blue-sky ideas (NEW_IDEAS_BLUESKY.md)

---

## Rubric

| Dimension | 5 (best) | 1 (worst) |
|-----------|----------|-----------|
| **Ownership Clarity** | Named dept + mandate + capacity | No credible owner |
| **Data Readiness** | Public API / maintained | Must be created from scratch |
| **Tech Stack Fit** | Confirmed City platforms | Tech City doesn't operate |
| **Integration Surface** | Standalone / public APIs only | Deep integration with closed systems |
| **Maintenance Burden** | Automated / no staff needed | Breaks without constant attention |

**Tiers:** S (21–25) · A (16–20) · B (11–15) · C (6–10) · D (1–5)

---

## Summary Table

| # | Idea | PS | Own | Data | Stack | Integ | Maint | **Total** | **Tier** |
|---|------|----|:---:|:----:|:-----:|:-----:|:-----:|:---------:|:--------:|
| 1 | RVA People Data | 2 | 4 | 5 | 3 | 5 | 4 | **21** | **S** |
| 2 | Grant Pack Builder | 2 | 4 | 5 | 3 | 5 | 4 | **21** | **S** |
| 3 | Maternal Metric Lock-In | 2 | 4 | 5 | 3 | 5 | 4 | **21** | **S** |
| 4 | GRTC Shift-Fit Scout | 1 | 2 | 5 | 4 | 5 | 4 | **20** | **A** |
| 5 | First Job SMS Kit | 1 | 3 | 4 | 2 | 5 | 4 | **18** | **A** |
| 6 | Richmond Youth Hub | 1 | 3 | 2 | 3 | 4 | 2 | **14** | **B** |
| 7 | Unboxed RVA | 1 | 2 | 2 | 2 | 4 | 2 | **12** | **B** |
| 8 | Stepwise | 1 | 2 | 2 | 2 | 4 | 2 | **12** | **B** |
| 9 | RVA Works | 1 | 2 | 2 | 2 | 4 | 2 | **12** | **B** |
| 10 | Multi-Pillar AI | 1 | 1 | 2 | 1 | 2 | 1 | **7** | **C** |
| 11 | Unknown / Corrupted | ? | — | — | — | — | — | **—** | **N/A** |

---

## Detailed Scores

### 1. RVA People Data — Unified Public Health & Equity Data Portal · S (21)

**Source:** Hackathon demo (row-28). 173 verified indicators, 7 official sources, race-disaggregated by default, GitHub Actions annual refresh, MCP connector, custom chart builder, CSV upload pipeline.

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership | 4 | RCHD is the natural owner — Jackie Hale originated the ask, epidemiologists understand every indicator, and maternal-health data coordination is explicitly their mandate. Gap: RCHD does not currently maintain web applications, so tech operations would need a partner or DIT handoff. |
| Data Readiness | 5 | All 7 sources (VDH, ACS, CDC WONDER, CDC Places, VDOE, etc.) are public APIs or maintained public exports. GitHub Actions already automates the annual Census/CDC refresh cycle. 173 indicators are loaded and verified. |
| Tech Stack Fit | 3 | Vercel-hosted Next.js app is portable but not on City infrastructure. No exotic dependencies — could migrate to City hosting. MCP connector is novel, not City-standard. |
| Integration Surface | 5 | Completely standalone. All data pulled from public APIs. Admin CSV upload is the only write path. No City system integration required. |
| Maintenance Burden | 4 | GitHub Actions handles the annual data refresh automatically. CSV upload covers ad-hoc additions. The custom chart builder and MCP connector add some operational surface, but the core portal is read-heavy and low-touch. |

---

### 2. Grant Pack Builder — One-Click CBO Fact Sheet Generator · S (21)

**Source:** NEW_IDEAS.md (Rank 1, combined 186). Web tool for grant writers to select topic, comparison frame, and disaggregation level → generates formatted PDF fact sheet with auto-generated citations.

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership | 4 | RCHD is the natural home — they serve the CBOs who do the grant writing, and the maternal-health coalition infrastructure already exists. The documented pain point (half a day per fact sheet) comes directly from their partners. Gap: same as RVA People Data — RCHD would need tech support to operate a web tool. |
| Data Readiness | 5 | VDH MCH Dashboard, Census ACS API, CDC WONDER, March of Dimes PeriStats, VDH PRAMS aggregates — all public, all maintained on known publication schedules. Same data ecosystem as RVA People Data, already proven accessible. |
| Tech Stack Fit | 3 | Web tool generating PDFs is standard technology. No dependency on City-specific platforms, but also not built on them. Could run on any cloud or City hosting. |
| Integration Surface | 5 | Standalone. Reads from public APIs and exports. Generates PDFs for download. Zero City system integration. |
| Maintenance Burden | 4 | Data sources update on known federal/state schedules. Citation templates need periodic review when source agencies change methodology (e.g., NVSS 2018 break). PDF generation is stateless. Main ongoing cost is keeping vintage metadata current. |

---

### 3. Maternal Metric Lock-In (Meeting Mode) · S (21)

**Source:** NEW_IDEAS_BLUESKY.md (Idea 2). Browser "meeting mode" that forces a definition pick, locks vintage and geography, renders one comparison block with auto-generated citations and suppression/provisional warnings.

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership | 4 | RCHD runs the monthly maternal-health coalition meetings where this tool would be used. They are the facilitator, they experience the definitional conflict firsthand, and they have the domain expertise to curate the definition logic. Gap: same tech-operations dependency as the other PS2 tools. |
| Data Readiness | 5 | Same public data ecosystem: VDH MCH exports, VDH maternal mortality dashboards, PeriStats, Census ACS. Weekend-buildable with frozen CSV extracts; production version could pull live. |
| Tech Stack Fit | 3 | Small React app with frozen CSV extracts. Standard web tech. No exotic dependencies. |
| Integration Surface | 5 | Completely standalone. Designed to run on a laptop in a meeting room. Frozen CSVs bundled in repo; optional public API pulls for benchmark lines. |
| Maintenance Burden | 4 | Definition logic (the core IP) is relatively stable — definitional breaks like NVSS 2018 are rare, well-documented events. CSV extracts need periodic refresh tied to VDH publication schedule. Projector-friendly output is stateless. |

---

### 4. GRTC Shift-Fit Scout · A (20)

**Source:** NEW_IDEAS_BLUESKY.md (Idea 1). Lightweight web tool pairing work address + shift end time + home ZIP with static GRTC GTFS and VA minor hour rules → flags stranded risk, curfew risk, nearest stop.

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership | 2 | No City department owns the transit-youth intersection. OCWB has youth-employment mandate but no tech capacity. GRTC is a regional transit authority, not a City department. A narrow utility tool with no natural institutional home. |
| Data Readiness | 5 | GRTC static GTFS is public (Transitland or direct download). OpenStreetMap Nominatim geocoding is public. VA child labor hour rules are static, publicly documented. RPS calendar is public. All data confirmed available. |
| Tech Stack Fit | 4 | Static site with bundled GTFS subset and client-side routing. No server required. Can be hosted on GitHub Pages, a CDN, or any City web hosting. Simplest possible deployment model. |
| Integration Surface | 5 | Completely standalone. All data is public and can be bundled at build time. No APIs to call at runtime if desired. Zero City system integration. |
| Maintenance Burden | 4 | GRTC GTFS refreshes when routes change (periodic, predictable). VA labor law changes rarely. RPS calendar is annual. Could be mostly static with a scheduled GTFS rebuild step. |

**What holds it back:** Ownership is the sole constraint. The tool is technically elegant and data-ready, but without a department willing to adopt and maintain it, it stays a hackathon artifact. If OCWB or the Office of Children and Families adopted it as a resource, it jumps to S-tier.

---

### 5. First Job SMS Kit — SMS-Accessible Readiness Toolkit · A (18)

**Source:** NEW_IDEAS.md (Rank 3, combined 178). SMS-based interactive toolkit — teen texts a keyword, receives step-by-step readiness flow: document checklist, message scripts, age-based legal guide, nearest program offices by ZIP.

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership | 3 | OCWB has mandate for youth workforce outreach and already tries to reach high-need teens. SMS is a new channel but aligns with their mission. Gap: OCWB doesn't currently operate digital products — they'd need a vendor or DIT partnership. |
| Data Readiness | 4 | Content is mostly static regulatory information: DOLI work permit rules, DMV Child ID requirements, VA labor law by age band. Program office locations are manually curated but stable. Only gap: nearest-program-by-ZIP lookup needs a maintained location file. |
| Tech Stack Fit | 2 | SMS platforms (Twilio, etc.) are commodity infrastructure but not something the City currently operates. Procurement/contracting required. AR 2.13 addresses AI chatbots, not SMS flows, creating policy ambiguity. |
| Integration Surface | 5 | Standalone SMS service. No integration with any City system. Reads from static content. One-way information delivery. |
| Maintenance Burden | 4 | Content is overwhelmingly static — VA labor law, document requirements, and ID rules change on legislative cycles, not daily. Program office locations need periodic updates. SMS platform has hosting costs but minimal operational overhead. |

**What holds it back:** SMS platform procurement and the City's lack of an existing SMS channel. The content itself is ready; the delivery mechanism needs institutional buy-in.

---

### 6. Richmond Youth Hub — Unified Program Navigator · B (14)

**Source:** NEW_IDEAS.md (Rank 2, combined 182). Mobile-first web app — teen enters age, ZIP, GPA, interests → matched against HSDS-formatted directory of Richmond youth programs. Coordinator view shows aggregate search patterns.

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership | 3 | OCWB has mandate and program relationships. They already coordinate youth workforce programs. But key tech fact: "YES/OCWB: no documented API; spreadsheets/manual." They have the mandate but limited tech capacity to maintain a web directory. |
| Data Readiness | 2 | No machine-readable program database exists. The directory must be manually curated from scattered sources — program websites, PDF flyers, direct outreach to 7+ program operators. YES/OCWB operate from spreadsheets. Building the HSDS dataset is the hardest part of this project. |
| Tech Stack Fit | 3 | Standard mobile-first web app. No exotic requirements. Could be built on any platform. |
| Integration Surface | 4 | Standalone. Reads from its own curated database. Cannot integrate with program systems because they don't have APIs. |
| Maintenance Burden | 2 | The HSDS directory needs manual updates every application cycle. Programs change eligibility criteria, dates, and status frequently. Without an automated feed from program operators (who don't have one), someone must manually maintain accuracy. This is the same problem that caused the fragmentation in the first place. |

**What holds it back:** The data problem that motivates the idea is also the data problem that blocks implementation. Until YES/OCWB have a structured, maintained program database, any navigator built on top of it is only as good as its last manual update.

---

### 7. Unboxed RVA — Youth Project Marketplace · B (12)

**Source:** Hackathon demo (row-29), Thriving Families Pillar Award Winner. Project marketplace connecting Richmond youth to paid, gig-style work with local small businesses. AI assistant RIA. Built in 48 hours by a team including Awura (17, RPS student).

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership | 2 | No City department operates two-sided marketplaces. OCWB could endorse but not run it — this is fundamentally a private-sector matchmaking platform. The City's role would be promoter, not operator. |
| Data Readiness | 2 | No machine-readable employer list (confirmed in key tech facts). All content is user-generated — businesses post projects, youth sign up. Bootstrap problem: marketplace has zero value until both sides are populated. |
| Tech Stack Fit | 2 | Custom web platform built by a 17-year-old during the hackathon. No documentation of hosting, deployment, or architecture. Not on City infrastructure. |
| Integration Surface | 4 | Standalone web app. No deep system integrations needed. GRTC integration mentioned as a vision but not built. |
| Maintenance Burden | 2 | Two-sided marketplace needs constant curation: employer vetting, project quality review, youth safety oversight, dispute resolution, content moderation, and cold-start engagement. High ongoing staffing requirement. |

**Context:** The pillar award recognized the team's story and design thinking, not implementation readiness. Unboxed is a compelling vision but requires a marketplace operator, not a City IT deployment.

---

### 8. Stepwise — Youth Employment Platform · B (12)

**Source:** Hackathon demo (row-42). Three-flow platform (parents of 14–15, candidates 16–24, employers). GRTC transit accessibility, VA labor law engine, readiness checklist, invite key system, parent approval workflow.

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership | 2 | No City department runs job boards. OCWB could champion but lacks capacity to operate a platform with employer management, parent accounts, and hiring pipeline features. This needs a dedicated product team. |
| Data Readiness | 2 | GRTC GTFS is public (+1 for transit feature), but the core asset — job listings — must be employer-created. No existing machine-readable source of youth-appropriate job postings. VA labor law is static reference data, not a live feed. |
| Tech Stack Fit | 2 | Next.js 15, NestJS, Supabase, Vercel, Drizzle ORM, Upstash Redis, BullMQ — modern startup stack, none of which are City-operated platforms. |
| Integration Surface | 4 | Standalone. GRTC GTFS is a one-way public data consumption. No deep City system integration. |
| Maintenance Burden | 2 | Job board freshness requires continuous employer engagement. Parent-supervised accounts add compliance complexity (COPPA). Hiring pipeline features need ongoing support. The invite key system and multi-flow architecture increase operational surface. |

**Context:** Most technically complete PS1 demo. The engineering is solid; the institutional fit problem is that no City department can sustainably operate a three-sided hiring platform.

---

### 9. RVA Works — Youth Internship Portal · B (12)

**Source:** Hackathon demo (row-31), Eco Warriors team. Two-sided portal (teens and employers). AI-powered job posting analysis against VA youth law. First Job Kit with message scripts and step-by-step guides. Transit time from nearest bus stop.

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership | 2 | Same ownership gap as Stepwise and Unboxed — no City department operates job boards. OCWB could endorse. AI layer adds policy review overhead (AR 2.13). |
| Data Readiness | 2 | VA youth employment law is public and static. DOLI portal links are public. Transit time needs GRTC GTFS (public). But the core content — job listings — must be employer-created. No feed exists. |
| Tech Stack Fit | 2 | AI-powered, unspecified stack. AI features (job posting analysis, guidance engine) require model hosting and ongoing cost. Not City platforms. |
| Integration Surface | 4 | Standalone. References DOLI portal via links but doesn't integrate. No City system dependencies. |
| Maintenance Burden | 2 | Same job-board maintenance burden as Stepwise plus AI model management, prompt maintenance, and compliance monitoring for AI-generated legal analysis. |

**Context:** The First Job Kit concept (message scripts, guardian signature guidance, step-by-step readiness) is the most distinctive content produced by any PS1 demo — it was explicitly called out in research as high-value. But it's locked inside a job board that has the same institutional ownership problem as every other PS1 marketplace.

---

### 10. Multi-Pillar AI Platform · C (7)

**Source:** Hackathon demo (row-30). Single AI platform on Google Cloud addressing all 7 MAP pillars. Thriving Families module: career/job market with AI coach, skill/gap analysis, transportation routing, video conversation with AI agent, ATS resume builder.

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership | 1 | Spans all 7 pillars, so no single department can own it. DIT could theoretically oversee an all-pillar AI platform, but no department has mandate or capacity for a citizen-facing AI system of this scope. |
| Data Readiness | 2 | Job data source unclear. Resume input is user-provided. Transportation routing source unspecified. Ticketmaster for events is a commercial API with licensing requirements. No confirmed public data pipeline for the career module. |
| Tech Stack Fit | 1 | Google Cloud hosting, real-time video AI agent conversation, multiple AI agents in concert. AR 2.13 permits chatbots with DIT review — a live video AI coaching session goes well beyond what the policy contemplates. This is the most aggressive tech stack of any submission. |
| Integration Surface | 2 | Attempts to integrate across all 7 pillars. Each pillar has different data sources, user types, and system dependencies. The surface area is enormous and mostly unspecified. |
| Maintenance Burden | 1 | AI model hosting, video infrastructure, multi-pillar content accuracy, commercial API subscriptions (Ticketmaster), and 7 distinct domain areas requiring subject matter expertise. Would need a dedicated engineering team to keep running. |

**Context:** Impressive as a solo technical feat, but the everything-everywhere-all-at-once scope makes it the least implementable submission in the pillar. Every dimension is weakened by the breadth.

---

### 11. Unknown / Corrupted · N/A (Unscoreable)

**Source:** Hackathon demo (row-32). Video file corrupted — `moov atom not found`. No transcript, no project description, no team identification.

Cannot be scored. Follow-up: check original Google Drive source for a playable file. If recovered, score and re-rank.

---

## Pillar Observations

### PS2 (Maternal Health Data Coordination) dominates the top tier

All three S-tier ideas address PS2. This is not a coincidence — it reflects a structural advantage in the maternal-health data space:

- **Data is already public.** VDH, Census ACS, CDC WONDER, and PeriStats all provide maintained, documented, publicly accessible data. No FERPA blocks, no closed systems, no data-sharing agreements needed.
- **Ownership is clear.** RCHD has mandate, domain expertise, and existing coalition relationships. The gap is tech capacity, not institutional willingness.
- **Users are professionals.** Grant writers, epidemiologists, and coalition facilitators are sophisticated users who will adopt tools that save them time. No consumer adoption curve.
- **The problems are well-scoped.** Each S-tier idea solves one specific workflow pain point (grant fact sheets, meeting reconciliation, portal consolidation) rather than trying to build a platform.

### PS1 (Youth Employment Pathways) is structurally harder

Every PS1 idea except the two narrow utilities (Shift-Fit Scout and SMS Kit) hits the same wall:

1. **No employer data feed.** There is no machine-readable, maintained list of youth-appropriate employers or job openings in Richmond. Every job-board concept requires creating this from scratch and keeping it current — which is the exact problem the tools claim to solve.
2. **No institutional operator.** YES and OCWB work from spreadsheets with no documented APIs. They have mandate but no capacity to operate web platforms. No City department runs job boards or two-sided marketplaces.
3. **Marketplace cold-start.** Two-sided platforms (Unboxed, Stepwise, RVA Works) have zero value until both sides are populated. This is a known hard problem that requires sustained investment in user acquisition — not a one-time deployment.

The PS1 ideas that score highest (Shift-Fit Scout, SMS Kit) succeed by **not being job boards.** They solve narrow, specific problems (can I get home from this shift? what documents do I need?) with static, public data that doesn't require employer participation.

### The content-vs-platform lesson

The most implementable PS1 content is RVA Works' **First Job Kit** — message scripts, guardian signature guidance, step-by-step readiness checklists. This content is valuable, low-maintenance, and doesn't depend on employer data. But it's trapped inside a job-board platform that has all the institutional problems listed above.

The highest-impact PS1 move would be to **extract the First Job Kit content** and deliver it via the SMS Kit channel — combining RVA Works' best content with the First Job SMS Kit's most accessible delivery mechanism.

### Ownership is the binding constraint

Across the pillar, data readiness and integration surface are not the primary blockers — the public-data ecosystem for both problem statements is surprisingly strong. The binding constraint is **ownership clarity**: which department will maintain this after the hackathon ends? PS2 answers that question (RCHD). PS1 does not.
