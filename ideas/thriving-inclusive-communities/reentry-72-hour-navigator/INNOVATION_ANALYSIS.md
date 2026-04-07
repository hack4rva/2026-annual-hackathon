# Innovation Analysis: Reentry 72-Hour Navigator

## 1. Blue Ocean Reframing (ERRC Grid)

| Action | Element | Rationale |
|--------|---------|-----------|
| **Eliminate** | Multi-year recidivism tracking as the primary success metric | Research shows intensive case management has mixed/null recidivism impacts (Second Chance Act evaluation). Focus on measurable first-week stability metrics instead |
| **Eliminate** | Generic national directories as the referral mechanism | Findhelp covers 100+ languages but isn't curated for reentry. Washington State's Verified Provider List (VPL) cut first-referral time from 51 to 21 days — curation beats comprehensiveness |
| **Reduce** | Dependency on smartphone ownership at release | Research: 94% of PEH had phone access in LA study, but many newly released lack devices. UC Davis Digital SAFE-T provisioned free smartphones — but a paper-first fallback is essential |
| **Reduce** | Scope from "all reentry needs" to "first 72 hours only" | BOP's handbook covers the first month. Sacramento/SF 72-hour checklists focus tighter. The tighter the scope, the more actionable the tool |
| **Raise** | Pre-release ID issuance visibility | Virginia DMV Connect issued ~41,000 ID credentials to inmates. Cohorts with IDs had 17.9% 3-year re-incarceration vs. 23.4% without. Making ID status the #1 pre-release checklist item is evidence-based |
| **Raise** | Immediate transportation to "non-negotiable" | Dakota County: 67% of transit passes used within 24 hours. Riverside County: $2.16M Uber contract for after-hours releases. The "first mile" from jail to shelter is the highest-risk moment |
| **Create** | A time-sequenced, printable 72-hour action plan specific to Richmond | No Richmond-specific 72-hour checklist exists. Sacramento and SF have theirs. Richmond needs one covering: parole reporting (24h), ID pickup (DMV Connect), SNAP enrollment, shelter access, GRTC routes |
| **Create** | A navigator dashboard with VPL-style verified provider ratings | Per Washington DOC model: equip Richmond reentry navigators with a curated, verified list of providers — not a search engine, but a pre-vetted referral tool |

**Core assumption challenged:** "Reentry support requires comprehensive case management." Research shows the strongest causal signals cluster around specific, concrete interventions — ID issuance, verified referrals, and transportation — not holistic case management programs. The 72-hour navigator should be a logistics tool, not a case management platform.

## 2. Rapid Ideation (Crazy 8s)

| # | Idea | Notes |
|---|------|-------|
| 1 | **Printable Richmond 72-hour checklist** — Structured one-pager with time-sequenced tasks: 0-24h (report to probation, get transit pass), 24-48h (ID pickup, food pantry), 48-72h (housing intake, benefits enrollment) | Baseline. Per Sacramento/SF model. Printable at the gate |
| 2 | **SMS-based checklist with reminders** — Text "START" to get the checklist; receive timed reminders for each task (e.g., "Report to probation by 5pm today — here's the address") | Per CARE+ Corrections model. Research shows high acceptability but engagement is the bottleneck — keep messages short and actionable |
| 3 | **Navigator referral dashboard** — Web app where reentry navigators search a curated Richmond provider list, sorted by availability, distance, and verified status | Per Washington DOC VPL. Tracks time-to-first-referral as a core metric. Target: < 21 days (VPL benchmark) |
| 4 | **"Welcome backpack" digital companion** — Pairs with physical welcome kits (per ARC Ride Home model) with a QR code inside that links to the digital 72-hour plan | Combines tangible immediate support with digital follow-up. The First 72+ in New Orleans provides physical kits |
| 5 | **🔥 Peer-navigator matching** — Match newly released individuals with formerly incarcerated mentors based on neighborhood, charge type, and needs | Provocative: ARC's Ride Home uses formerly incarcerated drivers. Extends the peer model from transportation to full 72-hour navigation |
| 6 | **🔥 "Gate guarantee" pledge board** — Community members and organizations publicly pledge specific first-72-hour resources (rides, meals, shelter beds) visible to release planners | Provocative: makes community support visible and committal before release. Transforms reentry from an individual crisis to a community response |
| 7 | **GRTC route overlay for reentry locations** — Map showing the top 20 reentry-critical locations (probation office, DSS, shelters, food pantries) with GRTC transit times from Richmond City Jail | Per Neighborhood Anchor Map pattern. Specific to the reentry corridor |
| 8 | **Pre-release countdown app** — Begins 30 days before release; sequences pre-release tasks (ID application, benefit pre-enrollment, housing waitlist) with progress tracking | Per research: MOUs between DOC/DMV/SSA must be executed 90-120 days pre-release. A countdown makes the timeline tangible |

## 3. Rapid Design Sprint

**Problem sentence:** Individuals released from Richmond City Jail face a critical 72-hour window where they must secure shelter, report to probation, obtain identification, access food, and arrange transportation — but receive no structured, time-sequenced, Richmond-specific guidance to navigate these concurrent demands.

**User journey (5 steps):**
1. At release, individual receives a printed 72-hour checklist and a GRTC day pass (or rideshare voucher)
2. Checklist sequences immediate actions: report to probation (address + hours), get to emergency shelter (name + bus route), call 211 for food
3. Within 24 hours, individual (or navigator) opens the digital companion to access the full provider list and appointment booking
4. SMS reminders prompt remaining tasks: "Tomorrow: go to DMV Connect at [location] to pick up your ID" 
5. At 72 hours, navigator conducts a check-in: shelter secured? ID obtained? Benefits application started?

**Prototype shape:** Two components: (1) A printable PDF checklist generator — enter release date, parole office, nearest shelter, and generate a personalized 72-hour plan. (2) A simple web dashboard for navigators to track clients against the checklist and search a verified provider list. The checklist is client-side PDF (same zero-server pattern as the handoff memo). The dashboard is a lightweight CRUD app.

**First test:** Partner with OAR of Richmond. Generate personalized checklists for 10 individuals being released. Track: (a) which checklist items were completed within 72 hours, (b) whether the checklist was still in the person's possession at the 72-hour check-in, (c) time-to-first-service-connection.

## 4. Opportunity Mapper

### Opportunity 1: Gate-Day Logistics Coordination

| Dimension | Detail |
|-----------|--------|
| **User** | Individuals released from Richmond City Jail and their reentry navigators |
| **Outcome** | Every person leaves the gate with a printed plan, a transit pass, and a confirmed first-night shelter |
| **Workflow** | Pre-release: navigator generates personalized checklist → Day-of: checklist + transit pass issued at gate → 24h: navigator confirms shelter |
| **Dependencies** | OAR or Richmond Justice Initiative partnership; GRTC transit pass agreement; shelter bed availability data |
| **Richmond relevance** | Richmond City Jail releases ~3,000 individuals annually. No standardized gate-day protocol exists. VADOC's DMV Connect program is active statewide but local coordination is ad hoc |

### Opportunity 2: Verified Provider Referral Network

| Dimension | Detail |
|-----------|--------|
| **User** | Reentry navigators and case managers at Richmond CBOs |
| **Outcome** | Navigators make warm referrals to verified providers in < 21 days (Washington DOC VPL benchmark) instead of cold calls to generic directories |
| **Workflow** | Navigator searches curated list → filters by need/availability → refers client → tracks outcome |
| **Dependencies** | Provider verification and onboarding; CBO willingness to maintain listing accuracy; data sharing agreements |
| **Richmond relevance** | Richmond has a fragmented reentry ecosystem — OAR, HomeAgain, Richmond Justice Initiative, RBHA all serve overlapping populations with no shared referral tool |

### Opportunity 3: ID-on-Release Acceleration

| Dimension | Detail |
|-----------|--------|
| **User** | Individuals who lack valid ID at release |
| **Outcome** | Every person released has a state ID in hand (or a confirmed DMV Connect appointment within 7 days) |
| **Workflow** | Pre-release checklist flags ID status → navigator initiates DMV Connect request → ID issued before or at release |
| **Dependencies** | VADOC/DMV Connect coordination; Richmond City Jail cooperation; birth certificate access |
| **Richmond relevance** | Virginia DMV Connect has issued ~41,000 credentials statewide. Research shows ID-holding cohorts had 17.9% vs. 23.4% 3-year re-incarceration rates |

## 5. Problem Scoping

| Dimension | Score (1-5) | Rationale |
|-----------|:-----------:|-----------|
| **Impact** | 5 | Risk of death within 2 weeks of release is 13× general population. First 72 hours are literally life-or-death. Evidence links ID issuance and transportation to lower recidivism |
| **Feasibility** | 3 | Printable checklist is trivially buildable. Navigator dashboard is moderate. But the real impact requires inter-agency coordination (DOC, DMV, GRTC, shelters) that is politically complex |
| **Data readiness** | 3 | Richmond-specific provider data must be manually curated. Release schedules, shelter bed availability, and GRTC routes are obtainable but not currently integrated |
| **Problem clarity** | 5 | "What do I do in my first 72 hours?" is the clearest, most time-bounded problem in the pillar. Sacramento, SF, and New Orleans have answered it — Richmond hasn't |
| **Demo-ability** | 4 | Printed checklist is tangible. SMS reminder flow is demonstrable. Navigator dashboard shows professional tooling. Slightly complex to demo the full system in 3 minutes |

**Weekend MVP shapes:**
- **Minimal:** Printable 72-hour checklist generator. User enters: release date, parole office, nearest shelter. Generates a personalized PDF with time-sequenced tasks and Richmond-specific addresses/phone numbers. Client-side PDF via pdfmake.
- **Stretch:** Add SMS reminder integration (Twilio). Add navigator view with a simple provider directory (Airtable-backed). Add GRTC route overlay for top 10 reentry locations.

## 6. Assumption Mapping

| # | Assumption | Risk (1-5) | Uncertainty (1-5) | R × U | Validation Method |
|---|-----------|:----------:|:-----------------:|:-----:|-------------------|
| 1 | Individuals at release will retain and use a printed checklist | 4 | 3 | **12** | Track checklist retention at 72-hour follow-up for 10 individuals; compare with/without a welcome backpack |
| 2 | Richmond has enough shelter capacity for every release to have a confirmed first-night bed | 5 | 4 | **20** | Audit current shelter bed availability on 5 random release days; determine gap between demand and supply |
| 3 | Reentry navigators will adopt a digital referral dashboard over their current methods (phone contacts, personal knowledge) | 4 | 3 | **12** | Pilot the dashboard with 3 navigators for 30 days; measure adoption rate and time-to-first-referral |
| 4 | SMS reminders will be received and acted upon by recently released individuals | 3 | 4 | **12** | Opt-in 10 individuals to SMS flow; track message delivery rate and task completion correlation |
| 5 | GRTC service is frequent enough to serve as reliable transportation for time-sensitive tasks (parole reporting, shelter check-in) | 4 | 3 | **12** | Map GRTC headways for routes serving the jail, probation office, and top 3 shelters during release hours |
| 6 | Inter-agency coordination (jail, DMV Connect, GRTC, shelters) can be established for a pilot | 4 | 4 | **16** | Secure MOUs or letters of support from OAR + one other partner within 30 days |

**Top 3 to validate first:**
1. **Assumption 2 (R×U=20):** If there aren't enough shelter beds, no checklist solves the problem. This is a capacity question, not a technology question. Audit real shelter availability first.
2. **Assumption 6 (R×U=16):** The tool's impact depends on multi-agency cooperation. If the jail won't distribute checklists or GRTC won't provide passes, the system breaks at distribution.
3. **Assumption 1 (R×U=12) / 3 (R×U=12) / 4 (R×U=12):** Three assumptions tied at 12 — all relate to whether the target users (individuals and navigators) will actually use the tools provided. Validate through direct pilot observation.

---

## Key Takeaway

The Reentry 72-Hour Navigator addresses the highest-stakes moment in the pillar: the first 72 hours after release, when death risk is 13× the general population. Research provides strong evidence for specific interventions — Virginia DMV Connect (17.9% vs. 23.4% recidivism), Washington DOC VPL (51→21 days to first referral), Dakota County transit passes (67% used within 24 hours). The weekend MVP is a printable, time-sequenced Richmond checklist — essentially a localized version of what Sacramento and San Francisco already distribute. The stretch goal is a navigator dashboard with verified providers. The critical blocker is not technology but coordination: shelter capacity, GRTC passes, and jail cooperation determine whether the checklist's promises can actually be fulfilled.
