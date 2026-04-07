# Roundtable: SIMBY (Soon In My Backyard)

**Initiated:** 2026-04-02  
**Idea:** SIMBY / SimBy  
**Pillar:** Thriving Neighborhoods  
**Problem Statement:** PS1 — Neighborhood Development Discovery  
**Source:** Hack for RVA demo (Team Singlestone)  
**Implementation Reality:** **15/25 — Tier B** (Promising; meaningful investment needed)  
**Synthesis rank (queries):** #33 of 73 — score 15, Tier B

---

## Input materials

| File | Status |
|------|--------|
| `IDEA.md` | Loaded — product: multilingual planning view, pin-drop requests, zip notifications, Richmond 300 seed |
| `RESEARCH_RESULT.md` | Loaded — *topic mismatch:* US municipal scenario / impact simulation (ArcGIS Urban, ITE, chip games) |
| `INNOVATION_ANALYSIS.md` | Loaded — reframes as **SimBy** impact calculator + participatory modeling; aligns to PS1 as “layer on Dev Tracker” |
| `RICHMOND_TECH_STACK_2026.md` | Loaded — Legistar OData, GeoHub REST, EnerGov UI-only, AR 2.13 AI governance |
| `pillar-repos/.../research/INDEX.md` | Loaded — cross-refs A2 dev transparency, D2 GIS, G1 AI summary risk, H2/H4 MVP constraints, `92_red_flags.md` |

---

## Artifact tension (read this first)

**IDEA.md** and **RESEARCH_RESULT.md** describe different products. The hackathon pitch is an engagement and discovery app (“plain language,” requests map, notifications). The research pack is a **pre-zoning simulation** playbook (traffic, schools, fiscal proxies). **INNOVATION_ANALYSIS.md** bridges by positioning an ITE/SGR calculator as MVP and “chip game” as vision — that is **not** what IDEA.md promises line-for-line. Any verdict must score the **as-demo’d discovery + equity story**, while treating simulation depth as **optional roadmap**, not delivered scope.

---

## Seven personas (condensed)

### 1 — Innovator

Participatory modeling beats black-box consultant PDFs (Boulder, Grand Junction). The highest-leverage reframe is not “more projects on a map” but **resident-owned scenarios with published methodology** — yet that is the SimBy research track, not the shipped SIMBY narrative. If the team keeps both names and both visions without merging, judges see scope creep. If they merge: **Legistar + GeoHub → discovery**, then optional **slider impact module** with ± bands and no parcel-level AVMs (per research).

### 2 — Neighborhood activist / organizer

Zip-code alerts beat the legal 150-foot owner mailer (renters and nearby owners excluded) — aligned with pillar research on **notification equity**. But **civic association boundaries** beat zip for Richmond; the INDEX and pain-point corpus stress hyperlocal geometry. The request map + upvotes risk **loudest-voice bias** unless paired with outreach in disinvested areas (Jackson Ward–type signals in `jtbd_analysis.md`).

### 3 — Resident (limited English)

“If you can’t read it, you can’t shape it” is the strongest equity claim in the pillar. **Multilingual UI + summaries** directly address PS1. **Caveat:** AI-generated planning summaries trigger **AR 2.13** (DIT oversight, transparency to users, bias documentation). G-series research flags **inaccurate planning summaries** as legal and trust risks — every string needs source links and a “machine-assisted / verify with official PDF” pattern.

### 4 — Planning / PDR frontliner

The pitch promises **less** staff work (no translation, fewer meetings). In practice, **unverified third-party summaries** create *more* risk: angry calls about wrong heights/units, FOIA-adjacent confusion. A **signal** from resident requests is useful only if someone **owns** moderation, duplication, and alignment with real comp-plan policy — ownership is split between PDR and engagement (`IMPLEMENTATION_REALITY_REVIEW.md`).

### 5 — Architect (DIT / data)

**Durable path:** mirror **Dev Tracker** — Legistar OData + GeoHub Development Tracker / parcels; static or cron pipeline; avoid EnerGov as system of record (no public API). **Anti-pattern:** sign-up wall before seeing public-interest data (trust + open-government friction). **Notifications:** commodity SMS/email is fine; meeting dates from Legistar; **staleness** must be explicit (GeoHub POD layer stale since 2022 per tech stack).

### 6 — Mayor / political

Early engagement reduces “surprise and shout” dynamics — good story for inclusive growth. **Political risk:** SIMBY becomes the **unofficial** record; opponents cite it in hearings; administration is asked to defend content the City did not write. Mitigation: brand as **civic companion** with deep links to Legistar/EnerGov self-service, not a replacement channel.

### 7 — Funder / civic tech steward

**Tier B** is correct: equity design is fundable; **data pipeline + maintainer** are the gates. Pillar synthesis: tools without a **named maintainer** die in months. Funding should follow **proof of automated ingest** (same lesson as Dev Tracker), then layer multilingual UX — not the reverse.

---

## Tensions (challenge round)

| # | Tension | Resolution |
|---|---------|------------|
| 1 | **Discovery app vs simulation research** | Treat simulation as Phase 2+; score demo against PS1 discovery + language access. Unify naming and narrative or accept lower **Innovation / Execution** clarity. |
| 2 | **“No extra staff burden” vs AI + moderation** | Claim is overstated without City partnership and governance. Table assumes **honest ops burden** until moderation and AR 2.13 path are specified. |
| 3 | **Representative “neighborhood pulse” vs participation bias** | Upvotes amplify engaged homeowners. Mitigation: intentional geographic/linguistic coverage metrics; do not claim representativeness without methodology. |

---

## Fatal flaw

**Unidentified or non-automated planning data feed.** If the planning view is not continuously tied to **Legistar + GeoHub (and explicit freshness UX)**, content goes stale and trust collapses — the **#1 documented civic-tech failure mode** for this pillar (`IMPLEMENTATION_REALITY_REVIEW.md`, aligned with `H4_mvp_data_constraints.md` / `G4_risks_data_gaps.md` in the INDEX). Secondary flaw: **RESEARCH_RESULT / INNOVATION** describe a different product than **IDEA.md**, which undermines demo coherence until reconciled.

---

## Verdict

**Pilot / merge — not standalone production without pipeline + governance.**

- **Ship:** Open planning browse (or reduce sign-up friction), Legistar/GeoHub-backed project list, source links, staleness banner, multilingual *templated* fields where AI is clearly labeled and optional.  
- **Partner:** PDR or civic org as **content or linkage** steward; DIT for any production AI.  
- **Defer:** Full “impact calculator” until discovery data is proven; avoid parcel-level value prediction (research + Fair Housing caution).  
- **Implementation tier:** Remains **B** until Data Readiness rises (automated feed documented) and Maintenance (moderation, translation review, hosting/LLM line item) is owned.

---

## Rubric scores (post-table consensus)

Judges score 1–5 on six categories. Figures below are **roundtable synthesis**, not official judge ballots.

| Category | Score | Rationale |
|----------|:-----:|-----------|
| Impact | **4** | Directly targets late notice, jargon, and renter exclusion; PS1 fit is strong. |
| Feasibility | **2** | Data pipeline ambiguity + EnerGov wall + AI governance + moderation = high delivery risk for “complete” vision. |
| User Value | **4** | Clear resident and entrepreneur/developer signal value if data is trustworthy. |
| Execution | **4** | Demo exists (e.g. Vercel); feature breadth impressive; weakest link is durable data story. |
| Innovation | **3** | Request map + multilingual is distinctive; aggregation alone is not novel. Simulation doc is adjacent, not shipped. |
| Equity & Inclusion | **5** | Strongest multilingual framing in pillar; must be protected with accuracy and inclusion guardrails. |

### Award-weighted totals

**Mayor’s Choice** — Impact×5 + Feasibility×5 + User Value×4 + Execution×3 + Equity×3 + Innovation×1  
= 20 + 10 + 16 + 12 + 15 + 3 = **76**

**Pillar Award (Thriving Neighborhoods)** — Impact×5 + User Value×4 + Feasibility×3 + Innovation×3 + Execution×3 + Equity×3  
= 20 + 16 + 6 + 9 + 12 + 15 = **78**

**Moonshot Award** — Innovation×5 + Impact×4 + User Value×3 + Equity×3 + Feasibility×2 + Execution×2  
= 15 + 16 + 12 + 15 + 4 + 8 = **70**

---

## Status

- **Phase:** COMPLETE (condensed format)  
- **Verdict:** **Conditional pilot** — fix data feed + narrative alignment; strongest **equity** play in pillar with **feasibility** as gating risk  
- **Fatal flaw:** **Data pipeline / staleness** (+ doc–product schism)  
- **Implementation Reality:** **15/25 · Tier B** (unchanged pending pipeline proof)
