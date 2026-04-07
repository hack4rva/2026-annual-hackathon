# Roundtable (CONDENSED): RVA Plotlines

**Initiated:** 2026-04-02  
**Idea:** RVA Plotlines — Zoning & Legislative Change Discovery  
**Pillar:** Thriving Neighborhoods  
**Problem Statement:** PS1 — Neighborhood Development Discovery  
**Source:** Demo (Row 39, Morgan Stewart)  
**Live demo:** https://rva-plotline.fly.dev/

## Input Materials

| File | Status |
|------|--------|
| IDEA.md | Loaded |
| RESEARCH_RESULT.md | Loaded (national “neighborhood story” / place-timeline research) |
| INNOVATION_ANALYSIS.md | Loaded |
| RICHMOND_TECH_STACK_2026.md | Loaded |
| pillar-repos/pillar-thriving-neighborhoods/research/INDEX.md | Loaded — corpus keyed to A2 (development transparency), B1/B3/B5 (users), C1/C4/C5 (services), D1/D2/D5 (Legistar + GIS + quality), E1/E2/E4/E5 (prior art & failures), F2/F4 (notify / where software helps), G3/G4/G5 (inclusion, data honesty, guardrails), H2/H4/H5 (dev tracker MVP, constraints, scope), I2/I4/I5 (demo pitch & credibility) |

---

## Implementation Reality (from IMPLEMENTATION_REALITY_SYNTHESIS / pillar review)

| Dimension | Score |
|-----------|:-----:|
| Ownership Clarity | 3 |
| Data Readiness | 4 |
| Tech Stack Fit | 3 |
| Integration Surface | 5 |
| Maintenance Burden | 2 |
| **Total** | **17/25** |
| **Tier** | **A** (16–20) |
| **Overall rank (73 ideas)** | #33 |

**Primary blocker:** Sustainability — bus factor 1, no institutional steward, LLM + Fly.dev costs unmodeled, broken click-through at demo.  
**Primary accelerator:** 23k+ Legistar matters ingested and mapped; public Legistar OData + commodity hosting; adding Legistar Events (hearings) is a documented, API-feasible upgrade.

---

## Hackathon Rubric Grades (inferred — not in IDEA.md front matter)

| Category | Score | Note |
|----------|:-----:|------|
| Impact | 5 | Directly targets PS1; national research frames “narrative gap” as top pain |
| Feasibility | 3 | Demo shipped; full “place biography” vision blocked on EnerGov / linkage (per INNOVATION_ANALYSIS) |
| User Value | 4 | Strong for engaged residents with address search + map + chat; weak on “when to act” without Events |
| Execution | 3 | Map + chat ready; click-through detail broken; geocoding quality unverified |
| Innovation | 4 | “Place timeline / story” reframe; ambition beyond typical Legistar viewers |
| Equity | 2 | Lifecycle: English-only, web-only, pull-only; no answer to renter notice / digital divide (aligns G3) |

**Weighted award scores (same formulas as hackathon rubric):**

| Award | Weighted total |
|-------|----------------|
| **Pillar (Thriving Neighborhoods)** | **77** — (5×5 + 4×4 + 3×3 + 4×3 + 3×3 + 2×3) |
| **Mayor's Choice** | **75** — (5×5 + 3×5 + 4×4 + 3×3 + 2×3 + 4×1) |
| **Moonshot** | **70** — (4×5 + 5×4 + 4×3 + 2×3 + 3×2 + 3×2) |

*Treat inferred rubric as editorial until judges’ sheets exist.*

---

## Seven Personas — Condensed Takes

### 1. Mayor (Decider)
**Advance → Refine.** Clear MAP fit (Thriving Neighborhoods, PS1). KPI: earlier, broader participation in planning processes — but only if hearing dates and deadlines surface. Natural owner candidates: **PDR** (transparency mandate) or **City Clerk** (Legistar custodian); no one has requested the product yet. Political risk: low if labeled unofficial/community-built; AI summaries need transparency per **AR 2.13** (DIT oversight, disclosure to users).

### 2. Innovator (Expander)
**Reframe:** Stop selling “23k dots” — sell **place biography** (chronological story at an address). Smallest credible leap: **Legistar Events + Matter linkage** = “what’s coming + when to act.” Stretch vision (permits + CO + ACS cards) matches RESEARCH_RESULT.md’s 90-day city playbook — Richmond version is **Pattern A** (curated StoryMaps / pilot corridors) before **Pattern B** (automated pipeline).

### 3. Frontliner — City staff (PDR / Clerk)
**Maybe.** Does not add case management load if public-only. Risk: residents show up misquoting AI summaries — staff need a **single canonical link** (Legistar matter URL) on every point. Broken detail view at demo undermines trust in briefings to boards.

### 4. Frontliner — Community workers
**Maybe.** Useful for associations that already live in Legistar — not a replacement for door-knocking or paper notices. No offline path; **59% renter / notice-gap** problem (pillar research) stays unsolved without partners + distribution.

### 5. Citizen
- **Engaged resident:** **High** value for discovery + plain language — if detail + hearings work.  
- **Service user:** **Low** — not a permit/311 shortcut.  
- **Invisible resident:** **Excluded** by design today (English, broadband, pull UX) — conflicts with stated “equitable participation” in IDEA.md; aligns with lifecycle + **G3_risks_inclusion.md** warnings.

### 6. Architect (System guardian)
**Build / Adapt.** **No structural wall** for Legistar-only MVP (OData public, no auth — RICHMOND_TECH_STACK). **EnerGov wall** applies only to full lifecycle timeline (permits, inspections) — workaround is GeoHub layers + manual curation where APIs absent. **AR 2.13:** document model, prompts, and human-review stance for chatbot. TCO concern: **LLM at scale + Fly.dev** vs static + serverless.

### 7. Activist (Ecosystem)
**Adapt + Build outside, offer inside.** National prior art: fragmented city portals (ZoLa, Councilmatic-style tools, Citygram pattern — see shared `_shared-dev-discovery/prior_art_research.md`); none deliver Richmond’s full “single pane” story. **Code for RVA / VCU / PDR partnership** beats hoping a solo maintainer sustains national-first ambition. Replicable if Legistar→geo pipeline is open-sourced for Bundle 2 (Text-Back, Dev Tracker, Atlas).

---

## Tension Map (productive conflicts)

| Tension | What it surfaces |
|---------|------------------|
| **Innovator vs. Architect** | “Place biography” vision vs. EnerGov-less reality — scope to Legistar + Events first or drown in integration. |
| **Mayor vs. Activist** | City legitimacy vs. fastest path — civic org ships now; City adopts after proof. |
| **Citizen (Invisible) vs. Innovator** | Plain-language AI helps some while **web-only** access leaves the problem statement’s equity claims unmet. |
| **Funder vs. Architect** | Cheapest host (static/GitHub Pages) vs. chatbot + dynamic geocoding pipeline costs. |
| **Frontliner vs. product** | Staff fear **hallucinated** hearing dates — requires hard links to Legistar, not model prose alone. |

---

## Fatal Flaw Test

| Check | Result |
|-------|--------|
| No identifiable owner (Mayor + Activist both fail) | **PASS** — PDR / Clerk / civic org path exists; weakness is *assignment*, not absence of role |
| Structural wall, no workaround | **PASS** — core data is public Legistar; EnerGov optional for v2 |
| Net negative for frontline | **PASS** — optional resident tool; mitigate with canonical URLs |
| No funding path beyond pilot | **FAIL at current posture** — solo maintainer, unbudgeted LLM + hosting; **fix:** named org + line item or zero-LLM MVP |
| Harms Invisible Resident | **FAIL at current design** — claims equitable participation but English/web/pull-only; **fix:** Spanish minimum, provenance UI, partner-mediated outreach (see F2 notify patterns) |

**Synthesis:** Not all five PASS — **viability is REFINE until steward + funding + equity floor + Events** are addressed. Not KILL: blockers are named and technical path is sound.

---

## Temporal Tag

**Appreciating** — Legistar pipeline is reusable across Bundle 2; permitting RFP may eventually reduce EnerGov friction; open-sourced ETL compounds value. **Depreciating risk** — without steward, tool follows prior-art “unnamed maintainer dies in months” pattern (**E5**).

---

## Final Verdict

**REFINE → then GO for a scoped MVP**

**Must change (priority):**
1. Fix **click-through detail** and expose **Legistar matter URL** on every feature.  
2. Integrate **Legistar Events** (hearings, bodies, agendas) so the product answers *when*, not only *what*.  
3. **Geocoding audit** (sample methodology in lifecycle_review) — publish hit rate / failure modes.  
4. **AI governance:** provider, prompts, disclaimer, DIT-aligned review path (**AR 2.13**).  
5. **Steward + budget:** institutional host OR strip to static/low-ops MVP; document year-3 costs.  
6. **Equity minimum:** Spanish + honesty about limits; partner with associations for non-digital reach (pillar **F2**, **G3**).

**If unchanged:** high demo credit, **low survivability** (Maintenance 2, funding FAIL, equity FAIL).

---

## Status

| Field | Value |
|-------|--------|
| Phase | CONDENSED (single-pass synthesis) |
| Verdict | **REFINE** |
| Challenge rounds | Captured as tension table + fatal flaw |
| Bundle | **Legistar Development Pipeline (Bundle 2)** — shared ETL with Text-Back, Dev Tracker, Public Comment Atlas, Participation Analytics |
