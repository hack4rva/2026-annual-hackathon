# Roundtable (Condensed): RVA Helps

**Initiated:** 2026-04-02  
**Idea:** RVA Helps  
**Pillar:** Thriving and Inclusive Communities  
**Problem Statement:** PS1 — Immigrant Service Discovery (privacy-safe discovery; no accounts / minimal identifying data) — *note:* sibling JTBD files also frame cross-agency navigation (PS2 themes).  
**Source:** Demo (concept extended in NEW-style research artifacts)  
**Implementation Reality:** **13/25 — Tier B** (Ownership 2, Data 2, Tech 4, Integration 3, Maintenance 2)  
**Overall context:** Pillar research index — 51 reports; key themes: trust-first tools, Help1RVA/findhelp/Unite Us stack, D3=1 navigation without PHI, red flags for false safety and PII.

## Input Materials

| File | Status |
|------|--------|
| `IDEA.md` | Loaded |
| `RESEARCH_RESULT.md` | Loaded |
| `INNOVATION_ANALYSIS.md` | Loaded |
| `RICHMOND_TECH_STACK_2026.md` | Loaded |
| `pillar-repos/pillar-thriving-inclusive-communities/research/INDEX.md` | Loaded |
| `IMPLEMENTATION_REALITY_REVIEW.md` (RVA Helps row) | Referenced |

---

## Seven Personas (Condensed)

### 1 — MAYOR (Decider)

**MAP:** Primary — Thriving and Inclusive Communities (service access, trust). Secondary — Thriving Families where navigation touches youth/workforce programs.  
**KPIs that could move:** Successful Connection Rate (SCR) by domain; % listings verified ≤90 days; reduced repeat-intake burden (proxy: navigator time studies).  
**Owner gap:** No named City department owns a federated social-care directory; United Way / 211 Virginia is the plausible **data** steward; OIRE or DSS for **equity** alignment — none are assigned in the demo artifacts.  
**Decision:** **Refine** — strategy aligns with MAP; execution requires a signed steward and a pilot metric, not another unfunded microsite.

### 2 — INNOVATOR (Expander)

**Reframe:** The product is not “a directory” but a **resource data utility**: HSDS canonical model, federation with 211 NDP where licensed, AI-assisted dedupe (Open Referral Record-Matcher pattern), and **SCR** instead of closed-loop vanity metrics (Duke/NCCARE360 lesson: 99% CLR ≠ real receipt).  
**Leverage:** Eliminate greenfield listings where NDP already offers cadence; raise freshness SLAs and outcome measurement; create grant-conditioned CBO updates (DC CRIE precedent).  
**MVP wedge:** 100-service HSDS slice + freshness badges + flag workflow — prove audit delta vs. baseline 211 Virginia accuracy before promising full utility.

### 3 — FRONTLINER (Operator)

**City staff:** 311 cannot ingest referrals without AvePoint partnership — design must stay **outbound** (information + warm handoff links), not 311 ticket integration.  
**CBO / navigator:** Widget-in-CRM beats a standalone portal; provider self-update only works if friction is lower than ignoring the fifth spreadsheet request (CAQH burden narrative).  
**Verdict:** **Maybe → Use** only after embed path + SLA on stale listings; wrong listing in housing/legal = high harm; user flags need human resolution capacity.

### 4 — ARCHITECT (Systems)

**Walls:** **Help1RVA (findhelp)** — partner/paid API only; no free bulk access per tech stack doc. **Unite Virginia** — enterprise closed loop; not a prototype integration. **311** — no public API.  
**Workarounds:** Socrata/Legistar/GeoHub irrelevant to program directory; realistic path is **211 NDP / HSDS exports**, manual curation, Airtable or static JSON with provenance, Twilio for optional SMS follow-up (commodity).  
**AI:** AR 2.13 — chatbots acceptable with DIT governance; dedupe/QA AI is lower risk than generative advice to immigrants.  
**Recommendation:** **Adapt** — federate and standardize; do not promise Help1RVA or Unite Us pipes without MOUs.

### 5 — FUNDER (Sustainability)

**Assumption 6 (R×U=20)** dominates: maintenance funding collapses quality (SCR fell 65% → 38% when funding waned in cited health-system study).  
**Model:** United Way core + HRSA/CMS-style navigation dollars + **city grant conditions** for listing hygiene; without two viable pots, Tier B stays honest.  
**Year 1 vs Year 3:** Pilot can be cheap (static + curated); **utility** needs FTE stewards + verification cadence — negative case is “free demo, then rot.”

### 6 — ACTIVIST (Ecosystem)

**Already in market:** Help1RVA (~1,800 programs), 211, findhelp front ends, Unite Us for enrolled orgs — fragmentation is real; RVA Helps must **complement** GRCoC Coordinated Entry / HCL / EmpowerNet (jtbd_analysis.md) and avoid queue-jumping perception.  
**Decision tree:** **Partner + Build** — partner with 211/UW for backbone; build differentiation on freshness discipline, SCR measurement, and embeddable widgets — not a fourth opaque portal.

### 7 — CITIZEN (User / Invisible Resident)

**Engaged resident:** Freshness badges and multilingual fields match pillar research (B5 digital equity, A5 language access).  
**Risk:** SMS “did you get help?” can feel surveillant; ICE-adjacent fear means **opt-in, minimal retention, clear non-government branding** (G2/G5 playbook).  
**Exclusion:** People without phones/SMS; need in-person anchor partners (libraries, sacred spaces) per Neighborhood Anchor Map–style bridges.  
**Verdict:** **High upside if trust-first; high harm if metrics trump privacy.**

---

## Productive Tensions

| Tension | What it surfaces |
|--------|------------------|
| Innovator vs. Architect | “Full utility + SCR” ambition vs. Help1RVA/Unite Us/API reality — federation and manual gates required. |
| Mayor vs. Activist | City credibility vs. 211/UW stewardship — hybrid ownership must be explicit on slide one. |
| Frontliner vs. Innovator | 90-day verification and provider portals vs. CBO bandwidth — who staffs SLAs? |
| Citizen vs. Funder | Outcome tracking vs. surveillance — consent and data minimization cost money and design time. |
| Funder vs. Innovator | Record-Matcher and AI QA need ongoing support — not a one-time hackathon line item. |

---

## Fatal Flaw Test

| Criterion | Result | Notes |
|-----------|--------|--------|
| No identifiable owner | **FAIL** (as documented) | Impl. review: no institutional operator; IDEA names stewardship model but no assignee. |
| Structural wall, no workaround | **PASS** | Help1RVA blocked for bulk API; 211 NDP + HSDS + curation is a documented alternate path. |
| Net negative for frontline | **PASS** (conditional) | Becomes FAIL if widgets add logging burden without relieving duplicate intake. |
| No funding beyond pilot | **FAIL** (vision) / **PASS** (minimal static MVP) | Assumption 6; full utility requires sustained OPEX. |
| Harms Invisible Resident | **PASS** (conditional) | SCR/SMS and mistranslation (G3) are manageable with guardrails; not inherently disqualifying. |

**Composite:** **No owner** + **funding fragility** for the stated “utility” scope — not KILL for the concept, but **blocker for GO** until resolved.

---

## Final Verdict

**Status:** **REFINE** (strong direction, execution prerequisites missing)

**Must change before pilot GO:**

1. **Named steward** — United Way Greater Richmond / 211 Virginia lead, or City OIRE/DSS sponsor letter; align with GRCoC access-point rules (jtbd_analysis.md).  
2. **Data contract** — Document baseline source (NDP export vs. manual), update cadence, and last-verified fields; reproduceability beats feature count.  
3. **Funding line** — Even modest: verification hours + flag triage; tie to one grant condition pilot with 2–3 CBOs.  
4. **Privacy stance** — Written policy for SMS follow-up and PII minimization (G2/G5); optional kill switch for ICE-sensitive flows.

**Temporal tag:** **Appreciating** if 211 NDP and Open Referral tooling widen; **Depreciating** if shipped as static list without steward (staleness dominates within months).

---

## Hackathon Rubric (Estimated — not present in `IDEA.md`)

Judges use six categories (1–5). Below is a **reasoned estimate** from `INNOVATION_ANALYSIS.md` problem scoping + synthesis; official scores may differ.

| Category | Est. | Rationale |
|----------|:----:|-----------|
| Impact | 5 | Foundational; correct problem (stale data + wrong metrics); OR=3.0 resolution effect cited. |
| Feasibility | 3 | System build; owner/funding gaps; weekend MVP possible only scoped down. |
| User Value | 4 | High for navigators/CBOs if embedded; moderate for walk-up residents without outreach. |
| Execution | 3 | Live demo noted in impl. review; missing video/pipeline docs hurt evidence. |
| Innovation | 4 | ERRC reframe (utility not directory), SCR north star, AI dedupe — not generic 211 clone. |
| Equity & Inclusion | 5 | Core pillar fit; multilingual + trust; must prove in implementation not marketing. |

### Weighted Awards (formula per event rubric)

- **Pillar Award** (Impact×5, User Value×4, Feasibility×3, Innovation×3, Execution×3, Equity×3): **86**  
- **Mayor’s Choice** (Impact×5, Feasibility×5, User Value×4, Execution×3, Equity×3, Innovation×1): **84**  
- **Moonshot** (Innovation×5, Impact×4, User Value×3, Equity×3, Feasibility×2, Execution×2): **79**

**Implementation Reality (survivability):** **13/25 — Tier B** — Promising; meaningful investment in ownership, data pipeline, and maintenance required before “ship it.”

---

## Phase / Meta

- **Format:** Condensed single-pass synthesis (not 7 subagent turns).  
- **Challenge rounds captured as:** tension table + fatal flaw matrix.  
- **Next artifact:** Pair with `92_red_flags.md` and `F5_opportunities_do_not_build.md` from pillar research before any production pilot brief.
