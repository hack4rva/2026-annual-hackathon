# Roundtable (Condensed): TradePath RVA

**Initiated:** 2026-04-02  
**Idea:** TradePath RVA — Pathway to Skilled Trades Careers  
**Pillar:** A Thriving Economy  
**Stated hackathon problem:** PS2 — Small Business Navigation *(see tensions — actual fit is workforce / pathways)*  
**Source:** Demo (Hack for RVA)  
**Implementation Reality:** **15/25 — Tier B** (IMPLEMENTATION_REALITY_SYNTHESIS #46)  
**Live site:** https://tradepathrva.com  

---

## Input materials

| File | Status |
|------|--------|
| `IDEA.md` | Loaded |
| `RESEARCH_RESULT.md` | Loaded (city trades navigators, archetypes, last-mile friction) |
| `INNOVATION_ANALYSIS.md` | Loaded (ERRC, assumptions, MVP shapes) |
| `RICHMOND_TECH_STACK_2026.md` | Loaded |
| `pillar-repos/pillar-thriving-economy/research/INDEX.md` | Loaded — cross-refs: A2 small-business journey, B2/B3 users, C3 front door, D3 business setup data, F3/F4 opportunities, G2/G4 risks, H2/H3 MVP shapes, `92_red_flags.md` |
| `lifecycle_review.md` / `gap_analysis.md` | Referenced (PS2 alignment, blockers) |

---

## Rubric grades (table consensus)

Assumes judges score against **stated PS2** unless explicitly broadening to pillar language (“lowering barriers to participate in the local economy”).

| Category | Score | One-line rationale |
|----------|:-----:|--------------------|
| **Impact** | 3 | Large human impact on workforce access; **minimal impact on PS2** (no registration/permit/BPOL sequence). |
| **Feasibility** | 5 | Mobile web + **People’s Advantage FCU** ($50K + $5K city pilot), deferred-repayment micro-loans — strongest deployment story in the PS2 cohort. |
| **User Value** | 4 | High for trades-aspiring residents (gap costs, barriers); low for the entrepreneur who needs SCC → CZC/CO → BPOL clarity. |
| **Execution** | 4 | Coherent demo: explore paths, barrier assessment, loan narrative; **data citations and multilingual support still need validation** (per lifecycle). |
| **Innovation** | 5 | **Trade Pathway Revolving Loan Fund** + barrier-first UX are genuinely distinctive vs. brochure-style navigators. |
| **Equity & Inclusion** | 5 | Childcare, transport, tools, lost wages; no credit score; mobile-first — aligned with inclusion risks called out in pillar **G3/G4** research streams. |

### Weighted award scores (formula per CLAUDE.md)

| Award | Weighted total | Notes |
|-------|:--------------:|-------|
| **Pillar (Thriving Economy)** | **88** | Impact×5 + User×4 + Feasibility×3 + Innovation×3 + Execution×3 + Equity×3 |
| **Mayor’s Choice** | **88** | Feasibility and equity help; Innovation weight ×1 caps upside. |
| **Moonshot** | **82** | Innovation×5 + Impact×4 hurts if Impact stays at 3 for PS2 framing. |

*If* judges score **Impact 4** and **User Value 4** on pure pillar fit (ignoring PS2 strictness): Pillar ≈ **93**, Mayor’s ≈ **93**, Moonshot ≈ **86**.

---

## Phase 1 — Seven personas (condensed)

### Turn 1 — INNOVATOR

The ERRC analysis is directionally right: **eliminate** generic national career exploration; **raise** pre-apprenticeship (MC3) and **create** window alerts + readiness gates. IDEA.md’s product emphasizes barrier assessment and a **credit-union revolving fund** — that goes *beyond* the research paper’s CMS-directory MVP. The tension: **innovation is split** between (a) fintech + public-private capital and (b) union “last mile” accuracy. The fintech piece is novel; the navigator piece only wins if **JATC window data stays current** (INNOVATION_ANALYSIS Assumption 1, R×U = 20).

### Turn 2 — ACTIVIST

Trades pathways are an **economic mobility** lever: ~53K local trades jobs and middle wages matter for Richmond equity goals. Pre-apprenticeship evidence (LA/OC, Portland, King County) shows **structured on-ramps** beat passive directories. Risk from pillar **G2/G4**: matching and “readiness” UX can **discourage** or exclude if framed as gatekeeping; IDEA.md’s “not to screen people out” must hold in implementation. Partner dependency on one FCU is a **concentration of power** — activists should ask who gets served if underwriting tightens.

### Turn 3 — CITIZEN

As someone on a phone after a double shift, I care about **boots, childcare, gas, and timing** — TradePath speaks my language. I’m less sure the **loan** is real until I see a clear application path and terms in my language. **Multilingual** claims need verification (lifecycle: medium blocker). I don’t see **BPOL or business startup** steps here; if I’m trying to open a shop, this isn’t my app yet (**gap_analysis**).

### Turn 4 — MAYOR / STAFF CHAMPION

**Ownership is diffuse:** workforce touches DED, Community Wealth Building, VEC, schools, unions; the **loan is not a City product** — it’s the credit union’s. That matches **Implementation Reality: Ownership Clarity 2**. Still, the **$5K city pilot** is a legitimate policy hook. For **MAP / pillar** language (“lowering barriers”), this is narratable; for **PS2 scorecards**, I cannot claim we solved business navigation. **Advance** on workforce; **do not** claim PS2 without a bridge module.

### Turn 5 — ARCHITECT

**Tech stack fit 4/5:** static or light dynamic front end, no AvePoint, EnerGov, or B2GNow dependency — consistent with **RICHMOND_TECH_STACK_2026** “hackathon-realistic” list (public web, SMS via commodity providers). **Integration surface 5:** link-out model. **Data readiness 2:** training programs, union windows, and wraparound resources are **curated, not API-fed**; stale listings erode trust faster than no tool (**RESEARCH_RESULT.md** gap table). **Maintenance burden 2:** ongoing curation + **operating the revolving fund** with FCU.

### Turn 6 — FRONTLINER (workforce / partner org)

I’d use the **barrier-first intake** pattern with clients — it matches how Gulf Coast–style systems pair **apprenticeship info with childcare/transit** links. I need **warm handoffs** to JATCs and training providers; the app should not replace relationship (**RESEARCH_RESULT.md**: conversion is “last mile”). Please give me **monthly refresh SLAs** with union liaisons; otherwise I’m cleaning up wrong-window damage.

### Turn 7 — FUNDER

**$50K + $5K pilot** is rare among demos — investable if **terms are written**: default expectations, revolver mechanics, and **outcomes KPIs** (pipeline: visitors → intake → cohort → placement → retention) as in **RESEARCH_RESULT.md** KPI section. **Fragility:** if FCU commitment lapses, the **differentiator collapses** (Implementation Reality key blocker). Fund **data validation** and **union MOUs** alongside engineering.

---

## Tensions (challenge rounds)

1. **PS2 vs. actual job-to-be-done:** Official problem is **Small Business Navigation**; product is **workforce + gap financing**. *lifecycle_review* and *gap_analysis* document **fundamental PS2 misalignment**; closest MAP fit is arguably **Thriving Families — Youth Employment Pathways** extended to adults, not PS2.
2. **Fintech vs. navigator:** Revolving loan is **high leverage and high fragility**; directory + alerts need **institutional content contracts** — different failure modes.
3. **Trust vs. scale:** Beautiful UI with **wrong JATC dates** is actively harmful (**INNOVATION_ANALYSIS**); pillar **D4/D5** themes (structured vs. manual data) apply.
4. **City role:** Product does not require **City IT** integration, but also has **no clear City owner** for sustainment (scores 2 on ownership in survivability rubric).

---

## Fatal flaw

**For hackathon judging on the printed PS2 brief:** the idea **does not answer** “what steps, in what order, to start and register a business in Richmond” — no SCC/BPOL/CZC/CO sequencing (**gap_analysis**). Judges who weight problem alignment will cap Impact and User Value regardless of execution.

**For post-hackathon survival:** **dual dependency** — (1) **ongoing FCU partnership** for the loan fund’s existence, and (2) **accurate, maintained pathway content** without a named City owner or automated data feeds. Either breaks the core story.

---

## Verdict

**Conditional advance — reframe or extend.**

- **Ship / pilot** as a **trades pathway + gap-cost financing** initiative with People’s Advantage FCU and workforce partners; prioritize **written loan terms**, **VEC/BLS-cited wages**, **validated training listings**, and **JATC refresh MOUs** (*lifecycle_review* next steps).
- **Do not** market as PS2-complete without a **trades-to-business** module (DPOR, Workers’ Comp, contractor licensing, BPOL handoff) or explicit judge framing under **broad pillar** goals only.

**Status:** CONDENSED COMPLETE — 7 personas, tensions resolved into verdict, fatal flaw stated, rubric + awards computed.

---

## Rollback

N/A (documentation only). Delete or revert this file to remove the roundtable artifact.
