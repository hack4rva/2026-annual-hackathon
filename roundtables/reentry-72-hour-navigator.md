# Roundtable (Condensed): Reentry 72-Hour Navigator

**Initiated:** 2026-04-02  
**Idea:** Reentry 72-Hour Navigator  
**Pillar:** Thriving and Inclusive Communities  
**Problem Statement:** Cross-Agency Service Navigation — housing, workforce, and reentry without repeating one’s story across agencies  
**Source:** NEW (post-event)  
**Implementation Reality (estimated):** ~17/25 — Tier **B** (promising; coordination blockers)

## Input Materials

| File | Status |
|------|--------|
| `IDEA.md` | Loaded |
| `RESEARCH_RESULT.md` | Loaded |
| `INNOVATION_ANALYSIS.md` | Loaded |
| `RICHMOND_TECH_STACK_2026.md` | Loaded |
| `pillar-repos/pillar-thriving-inclusive-communities/research/INDEX.md` | Loaded — cross-pillar themes: trust-first navigation, Help1RVA/findhelp/Unite Us stack, D3=1 / no-PHI MVPs (`F3`, `H3`, `I3`), red flags (`92_red_flags.md`), data walls (`G4`) |

## Rubric Grades (inferred from INNOVATION_ANALYSIS problem scoping + narrative)

| Category | Score | Note |
|----------|:-----:|------|
| Impact | 5 | First 72h = extreme mortality/stability risk; evidence clusters on ID, transit, verified referral speed |
| Feasibility | 3 | PDF/SMS/dashboard are buildable; real impact needs jail, shelter, GRTC, DMV Connect alignment |
| User Value | 5 | Sharp users: returning residents + reentry navigators; concrete tasks vs. abstract “case management” |
| Execution | 4 | Strong weekend story: printable plan + optional navigator directory |
| Innovation | 3 | Pattern is proven (Sacramento/SF checklists, WA DOC VPL); Richmond-local packaging is the leap |
| Equity & Inclusion | 5 | Justice-involved population; transportation/ID/shelter gaps land disproportionately |

**Weighted totals (hackathon formulas)**  
- **Pillar Award:** 5×5 + 4×5 + 3×3 + 3×3 + 3×4 + 3×5 = **90**  
- **Mayor’s Choice:** 5×5 + 5×3 + 4×5 + 3×4 + 3×5 + 1×3 = **90**  
- **Moonshot:** 5×3 + 4×5 + 3×5 + 3×5 + 2×3 + 2×4 = **79**

---

## Seven Personas (Condensed Turns)

### 1 — INNOVATOR

**Reframe:** Treat this as **gate logistics software**, not “a reentry platform.” The ERRC grid is right: drop multi-year recidivism as the demo metric; lift **ID + first-mile transport + time-to-first warm referral**. The non-obvious wedge is **navigator-grade verified provider lists (VPL)** over raw findhelp-style search — Washington’s 51→21 day first-referral shift is the headline stat to steal.

**Challenge:** SMS and “digital companion” are easy to overbuild; evidence on mHealth alone is mixed — position them as **supplement**, not core proof.

### 2 — ACTIVIST

**Ecosystem:** National comparators are abundant (211 Sacramento reentry guide, SF 72h checklist, First 72+, Fortune Society, ARC Ride Home). Richmond’s gap is **localized, coordinated, gate-distributed** materials — not invention. **Build-with, not build-over:** OAR Richmond, Richmond Justice Initiative, HomeAgain, RBHA-adjacent navigators are natural stewards.

**Risk:** Without a public pledge on shelter beds and rides, the tool can **shift blame** onto individuals for systemic shortage.

### 3 — FRONTLINER (Navigator / CBO operator)

**Reality check:** Day-one wins require **paper that survives the parking lot**, a **real first-night plan**, and **someone who answers the phone**. Assumption mapping is correct: highest R×U is **shelter capacity** — if the checklist promises intake that cannot happen, navigators stop trusting it.

**Ask:** Who updates hours, eligibility, and “currently accepting” flags weekly? If it’s not funded, the VPL rots in 30 days.

### 4 — CITIZEN (Returning resident lens)

**Value:** A sequenced “what/when/where” beats another directory. **Threat:** Literacy, language, phone loss, and stigma mean **print + human handoff** matter more than app polish. Privacy: SMS content must avoid broadcasting supervision, health, or housing status (CARE+-style “encode the reminder” lesson).

**Success looks like:** Leaving the gate with **one** credible next step completed or scheduled, not a 12-item fantasy list.

### 5 — ARCHITECT (Tech stack / integration)

**From `RICHMOND_TECH_STACK_2026.md`:** **Help1RVA (findhelp)** and **Unite Us** have **no free public APIs** — a “live” social-care graph is partnership or manual curation. **GRTC GTFS** is a realistic overlay for static routing narratives. **No RVA 311 dependency** for the core MVP (good). AI (AR 2.13) is optional; human-verified lists reduce hallucination risk.

**Implication:** Stack = static or lightly dynamic site, curated datastore (e.g. Airtable/Sheets with governance), PDF generation, optional Twilio — all **outside** City IT until invited in.

### 6 — FUNDER

**Phasing:** Phase 0 = design + legal review of messaging + **pilot n≈10** with one anchor CBO (analysis names OAR). Phase 1 = printed checklist + navigator spreadsheet. Phase 2 = SMS + metrics (time-to-first referral, first-night shelter, 24h reporting). **Do not** fund a citywide rollout before **documented** GRTC pass / ride voucher pathway or equivalent.

**Cost truth:** Exemplar jurisdictions spend real money on IDs and rides; software is the cheap part.

### 7 — MAYOR (Decider)

**MAP fit:** Direct hit on **Thriving and Inclusive Communities** and the **cross-agency navigation** problem statement — reduces friction without requiring a single City “owner” of all human-services data.

**Ownership:** No clean City department owns the whole stack; **Sheriff/Jail operations**, **Probation**, **DSS**, and **nonprofits** must co-sign distribution. **Decision:** **Refine → pilot** with named CBO lead and a letter from corrections or reentry staff on **distribution at release**; absent that, status is **demo-only**.

---

## Cross-Cutting Tensions (Resolved Enough to Ship a Pilot)

| Tension | Summary |
|---------|---------|
| **Comprehensive vs. 72h** | Table converges: **narrow scope** wins for credibility; defer “full reentry OS.” |
| **Digital vs. paper** | **Paper-first** at gate; digital for navigators and optional SMS — matches evidence and equity. |
| **Directory vs. VPL** | **Curated, verified** beats open search for speed and trust; costs ongoing maintenance. |
| **City vs. CBO build** | **CBO- or coalition-owned** MVP matches stack reality (no findhelp API); City adoption is a later chapter. |
| **Individual tool vs. system capacity** | Checklist must **surface capacity truth** (“call first,” “waitlist likely”) or it becomes harmful optimism. |

---

## Fatal Flaw Test

**Fatal flaw:** **Operational false certainty** — a polished 72-hour plan that **assumes** shelter beds, transit, and ID pickup paths that are **not guaranteed** trains users and staff to distrust every future civic navigator. Technology amplifies the harm if distribution happens **without** MOUs, pass programs, and bed reality checks.

**Mitigation (required for “not fatal”):** Co-design with navigators; **explicit uncertainty copy** on the artifact; pilot metrics tied to **Assumption 2** (capacity) and **Assumption 6** (inter-agency cooperation) from `INNOVATION_ANALYSIS.md`.

---

## Verdict

**Status:** **Pilot-ready under nonprofit leadership; not City-shippable without operational guarantees.**

Ship a **minimal, honest** printable generator + navigator-maintained provider list **if and only if** an anchor organization commits to distribution, weekly data hygiene, and documented shelter/transport assumptions. Do **not** present as solved “cross-agency data integration” — it is **logistics and curation** in a walled-garden data environment.

---

## Pillar Research Index — How This Idea Maps

The inclusive-communities corpus emphasizes **trust-first**, **privacy-safe** navigation (`F2`, `G5`, `I2`), **cross-agency navigation without PHI** (`F3`, `H3`, `I3`), and **Help1RVA / Unite Us / findhelp** roles and limits (`C1`, `C5`, `D1`, `E3`). Reentry 72h is **adjacent**: same data-wall constraints, different user journey and higher acute risk — so **guardrails and partner maintenance** matter even more than for generic service finders.

---

## Completion Block

| Item | Value |
|------|--------|
| **Verdict** | Conditional pilot (CBO-led); block city-scale claims without capacity + distribution |
| **Fatal flaw** | Checklist as false promise when shelter/transit/ID paths are unstable |
| **Pillar / Mayor’s / Moonshot** | 90 / 90 / 79 |
| **Implementation tier (est.)** | B (~17/25) — tech easy, partnerships hard |
