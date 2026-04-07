# Roundtable (Condensed): CareerBridge

**Date:** 2026-04-02  
**Idea:** CareerBridge  
**Pillar (submitted):** A Thriving Economy  
**Team:** River City Hackers (Jake Yazbek)  
**Source:** Hackathon demo (Hack for RVA)

## Input materials

| File | Status |
|------|--------|
| `IDEA.md` | Loaded |
| `RESEARCH_RESULT.md` | Loaded — city/WDB pathway platforms, NYC/Birmingham evidence, WIOA metrics, SWIS |
| `INNOVATION_ANALYSIS.md` | Loaded — ERRC, assumptions R×U, problem scoping 16/25 (internal scale) |
| `RICHMOND_TECH_STACK_2026.md` | Loaded — AI AR 2.13, open data patterns, Help1RVA/B2GNow walls |
| `pillar-repos/pillar-thriving-economy/research/INDEX.md` | Loaded — corpus aimed at MBE + small-business setup (B2, C3, D3, F3/F5, G1/G4, H3) |
| `lifecycle_review.md` | Loaded — **misaligned** to Economy PS1/PS2 |

**Implementation reality (synthesis):** **16 / 25** — Tier **A** (strong; solvable blockers)

---

## Seven personas (single-round synthesis)

### 1 — Mayor (Decider)

**Advance → Refine.** MAP fit as submitted is weak: Thriving Economy’s official problems are **MBE contracting discovery** and **small business navigation**; CareerBridge serves **resident career exploration**, not vendors or new business formation. That mismatch caps **Impact** in pillar judging regardless of polish (`lifecycle_review.md`). If reframed under **Thriving Families — Youth Employment Pathways**, the same product aligns cleanly with MAP language. No named City or WDB owner in the demo artifact — **ownership is the gating item** for a public-sector pilot. KPI that would eventually matter: placement / Q2–Q4 retention / median earnings (WIOA-style), not quiz completions.

### 2 — Innovator (Expander)

ERRC insight stands: **eliminate generic job-board parity**; **raise employer- and training-accountability visibility**. The compelling version is not “AI career Tinder” but **one end-to-end pathway card**: entry wage → credentialed training → employer commitment or externship → audited outcome band — as in Birmingham/UAB + Guild or NYC sector centers + ITGs (`RESEARCH_RESULT.md`). The hackathon build is directionally right (barriers, resources, Q&A) but **breadth trades away the proof** the research says wins.

### 3 — Frontliner (Operator)

**Workforce center staff: Maybe.** **Community navigators: Maybe → Use** if the product is explicitly a **front door** that hands off to a human with case notes, not a parallel mystery shop. Risk: another glossy intake that **does not write to** Virginia Workforce Connection / local CMS and creates duplicate storytelling. **Citizen-facing:** optional account and colorblind mode reduce friction; still need **offline / low-literacy** path (pillar G-section: inclusion risks).

### 4 — Citizen (Engaged / Service user / Invisible resident)

- **Engaged resident:** High visibility — swipe + quiz are legible; AI Q&A feels supportive.  
- **Service user:** Barrier-tagged resources (e.g., childcare) match real JTBD **if** links stay accurate and local.  
- **Invisible resident:** Digital-only + **AI answers without escalation** can mislead or exclude; AR 2.13 implies **DIT governance** for AI features and transparency to users. Help1RVA has **no public API** (`RICHMOND_TECH_STACK_2026.md`) — deep program directory integration needs partnership, not scraping assumptions.

### 5 — Architect (Systems)

**Build / Adapt — not Ship inside City without review.** Stack fit is fine for a **hosted web app**: public labor-market stats (BLS, etc.), manual curation of training links, commodity LLM with guardrails. **Walls touched:** no RVA 311 dependency; **Help1RVA** and **employer commitment data** are partnership-dependent. AI is **permitted** under AR 2.13 but requires **human oversight, disclosure, and DIT review** before anything branded as City-owned.

### 6 — Activist (Ecosystem)

**Partner / Reframe.** Prior art is crowded: Lightcast Career Coach, state WDB portals, MassHire CIS-style tools (`RESEARCH_RESULT.md`). Richmond’s **Capital Region Workforce Partnership** is the natural anchor, not “City Hall” generically. Pillar research index for **Economy** targets **contracting and business setup** (A2, B2, C1–C3, D1/D3) — **minimal overlap** with this demo; the relevant pillar corpus for *this* product is **Families / youth employment** (per lifecycle). Decision: **do not claim Economy PS coverage**; either **move pillar** or **add explicit Economy bridge** (e.g., talent pipelines into MBE hiring — speculative, needs sponsor).

### 7 — Funder (Sustainability)

**Pilot fundable; scale fragile.** Year 1 can be grant + volunteer curation. Year 3 needs **WDB / nonprofit owner**, **content SLAs**, and **evaluation dollars** (telemetry + SWIS/UI linkage if claiming outcomes — `RESEARCH_RESULT.md`). Without **pre-registered metrics**, funders see **vanity engagement**, consistent with Abt meta-analysis: **navigation alone** → small short-term earnings effects; **employer-tethered training** → where NYC-style numbers appear.

---

## Tensions (challenge map)

| Tension | Personas | Resolution direction |
|--------|----------|----------------------|
| **Pillar label vs. user problem** | Mayor ↔ Activist | Reframe under **Youth Employment Pathways** or narrow Economy story to workforce–employer linkage with SME buy-in. |
| **Delightful breadth vs. evidence** | Innovator ↔ Funder | One sector, real providers, real outcomes story — even if N is small. |
| **AI coaching vs. liability / equity** | Architect ↔ Citizen | Disclosure, guardrails, “talk to a counselor” escape hatch; DIT path if City-affiliated. |
| **Digital self-serve vs. what actually converts** | Frontliner ↔ Innovator | Position as **scheduled handoff** to staff; design for workforce-center tablet workflow. |
| **Economy research corpus vs. product** | Activist ↔ Mayor | INDEX.md is the wrong primary corpus for this idea; don’t over-claim MBE/SB research fit. |

---

## Fatal flaw

**No single “kill” on the five-test grid if treated as a civic nonprofit pilot — but combined viability flaw is decisive for *City-grade* claims:**

| Test | Result |
|------|--------|
| No owner | **FAIL / conditional** — no named department, WDB, or nonprofit owner in `IDEA.md`. |
| Structural wall, no workaround | **PASS** for MVP (public stats + manual curation). **FAIL** for automated wraparound directory at scale without Help1RVA partnership. |
| Net negative for frontline | **PASS** if handoff-first; **FAIL** if centers perceive duplicate intake. |
| No funding past pilot | **REFINE** — typical civic tech cliff without institutional contract. |
| Harms Invisible Resident | **REFINE** — AI misinformation risk + digital divide; not proven harmful but **unguarded** = exposure. |

**Named flaw:** **Outcome–ownership gap** — the evidence base says **digital navigation without employer-tethered programs and measurement does not produce durable wage gains**; the demo does not yet show the **Birmingham/NYC-style program layer** or **WIOA-aligned metrics**, and **Economy pillar alignment is not truthful** without scope change.

---

## Verdict

**REFINE** (strong prototype, wrong pillar box; missing owner and outcomes story).

**Must change:**

1. **Re-home** problem statement under **Thriving Families — Youth Employment Pathways** *or* materially reconnect to Economy (e.g., employer/MBE talent pipeline — only with sponsor).  
2. **Name an owner** (CRWP, nonprofit, or City workforce liaison) and a **handoff workflow**.  
3. **Shrink scope** to one high-demand sector with **verifiable training links** and, where possible, **stated employer or externship pathway**.  
4. **AI:** user disclosure + escalation path + plan for **AR 2.13** if City-associated.

**Temporal tag:** **Appreciating** if permitting/workforce modernization opens more structured APIs; **stable** risk that without partnerships the product stays a thin layer on national job data.

---

## Hackathon rubric (1–5) + awards

**Important:** Scores below are **honest for “as submitted” under Thriving Economy**. If reclassified under Families / youth employment, **Impact** and **Innovation (pillar story)** would rise.

| Category | Score | Note |
|----------|:-----:|------|
| Impact | **2** | Real civic need; **misaligned** to Economy MAP PS1/PS2 (`lifecycle_review.md`). |
| Feasibility | **3** | Prototype viable; city-grade needs partnerships + data agreements. |
| User Value | **4** | Clear resident value: quiz, cards, barriers, resources, Q&A. |
| Execution | **4** | Working flow, colorblind mode, optional accounts. |
| Innovation | **3** | Engaging UX + AI; not novel at ecosystem level. |
| Equity & Inclusion | **3** | Colorblind mode + barrier hints; language/digital divide not closed. |

**Weighted totals** (integer sum of category × weight):

| Award | Formula | Score |
|-------|---------|------:|
| **Pillar (Economy)** | Impact×5 + User×4 + Feas×3 + Inno×3 + Exec×3 + Equity×3 | **65** |
| **Mayor’s Choice** | Impact×5 + Feas×5 + User×4 + Exec×3 + Equity×3 + Inno×1 | **65** |

**Moonshot:** not a fit as scored (Innovation and long-arc story undersold vs. execution-heavy demo).

**Contrast (illustrative if reframed to Youth Employment Pathways, holding other scores):** Impact **4** → Pillar-weighted sum **≈78**, Mayor’s **≈78** (illustrative only; judges must rescale consistently).

---

## Status

- **Phase:** Condensed roundtable complete (single pass, no subagent turns).  
- **Verdict:** **REFINE** — fix pillar/owner/outcomes narrative.  
- **Implementation tier:** **A (16/25)** per `IMPLEMENTATION_REALITY_SYNTHESIS.md`.
