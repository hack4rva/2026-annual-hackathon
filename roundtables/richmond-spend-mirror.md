# Roundtable (Condensed): Richmond Spend Mirror

**Initiated:** 2026-04-02  
**Idea:** Richmond Spend Mirror  
**Pillar:** A Thriving Economy  
**Problem Statement:** PS1 — MBE Contracting Discovery  
**Source:** BLUESKY (ERRC reframing)  
**Implementation Reality Score:** 23/25 — Tier S (Ship It)  
**Overall Rank:** #2 of 73  

## Input Materials

| File | Status |
|------|--------|
| `IDEA.md` | Loaded |
| `RESEARCH_RESULT.md` | Loaded |
| `INNOVATION_ANALYSIS.md` | Loaded |
| `RICHMOND_TECH_STACK_2026.md` | Loaded — Socrata `xqn7-jvv2`, `5y73-enav`; B2GNow no API (wall); RAPIDS/OnBase closed |
| `pillar-repos/pillar-thriving-economy/research/INDEX.md` | Loaded — corpus keyed to MBE contracting (A1, B1, C2, D1, E*, F2, G4, H2) |

**Bundle:** Socrata Contracts Pipeline (5th product) — combined bundle avg 21.8.

---

## Seven Personas (Condensed)

### 1 — INNOVATOR
The ERRC reframe is the product: eliminate login gates, reduce raw NAICS friction via plain language, raise historical spend concentration (incumbent institutional knowledge), create renewal-cycle lead time from contract end dates. The non-obvious risk is **discovery without conversion** — RESEARCH_RESULT shows cities that move dollars pair data with IQC/small-purchase channels and subcontract reporting; a mirror alone does not close the loop. MVP should bias toward **renewal intelligence + explainable “where money clusters”** first, fancy concentration indices second.

### 2 — ACTIVIST
Prior art is rich (Boston equity dashboard + IQC, NYC PASSPort, Portland OCDS, Chicago payments). Richmond is not starting a category; it is **shipping a zero-permission slice** that avoids B2GNow (no public API — documented wall) by using Socrata contracts. **Decision: BUILD outside, offer inside** — civic org or regional MBDA/SCORE-adjacent host; natural City ally is **OMBD / Procurement Services** for credibility, not for day-one infra. National portability if parameterized as a Socrata consumer.

### 3 — CITIZEN (Engaged / Service / Invisible)
**Engaged MBE:** High potential value — surfaces department × category concentration and timelines without pre-registration. **Service-oriented navigators:** Can use it in coaching sessions if the UI is plain-language first. **Invisible resident risk:** Vendors with low digital literacy or English fluency may still be excluded if the tool is NAICS-first; mitigation is mandatory **curated plain-language mapping** and simple flows (IDEA.md already flags this). No evidence the tool *harms* if it stays read-only public data; harm risk is **false precision** (stale dates, wrong NAICS) creating wasted bid prep — needs staleness labeling (Architect pattern from sibling ideas).

### 4 — MAYOR
**MAP:** Thriving Economy — MBE contracting discovery. **KPI story:** funnel metrics (awareness → pursuit of opportunities) and, longer term, utilization if paired with City programs — but the **City cannot claim MBE outcome attribution** from spend visibility alone. **Owner:** ambiguous for a pure civic build; **Refine → Advance** if Procurement Services or OMBD names a liaison for feedback and comms. **Political risk:** low — data already public; medium if framed as “naming and shaming” departments without context.

### 5 — ARCHITECT
**Structural walls hit:** **0** for core MVP (public Socrata `xqn7-jvv2`). **B2GNow bypassed** by design. Optional enhancement: join **Payment Register** (`5y73-enav`) for payment timing narratives — still public, slightly more ETL. **Integration:** None required. **Caveats:** Contract end-date completeness drives renewal layer (INNOVATION assumption R×U 12); NAICS granularity must be validated on real rows. **Recommendation:** Ship static or JAMstack client; surface dataset `rowsUpdatedAt` for trust.

### 6 — FRONTLINER
**City procurement staff:** Mixed — some will see it as **noise** (“another window on the same contracts”); leadership may value portfolio view for planning. **MBE vendor:** Fits JTBD **if** it beats “ask someone who knows someone.” Biggest adoption killer is **“I already knew that”** (assumption 5, R×U 20). **Verdict:** MBE side **Use / Maybe** until user tests; staff side **Maybe**. Weekend Shape A (filterable dashboard, no alerts) is honest scope.

### 7 — FUNDER
**Year 1:** negligible — hosting + domain + curation time for NAICS table. **Year 3:** maintenance = keeping mappings and field assumptions current when Socrata schema shifts; no Oracle/B2Gnow license path. **Sustainability:** Low burn if volunteer-maintained; **medium risk** if nobody owns refresh cadence. **Negative business case:** none for a thin open-source layer; risk is **orphan product** without a named maintainer.

---

## Tensions (Three)

| Tension | Resolution (for this condensed pass) |
|---------|--------------------------------------|
| **Innovator vs. Funder** — Active intelligence (alerts, IQC-style pairing) vs. cheapest ship | Ship **read-only intelligence first**; document explicit **Phase 2** hooks for alerts and City program pairing so funders know the lift. |
| **Mayor vs. Activist** — City ownership vs. civic build | **Hybrid:** outside hosts MVP; City provides **non-binding** validation of field interpretations if willing. |
| **Frontliner vs. Innovator** — “Dashboards don’t change awards” vs. “renewal lead time is leverage” | Accept INNOVATION’s conclusion: validate **net-new insight** with 5 vendors early; if validation fails, pivot to **procurement planning** primary user (Opportunity 3 in INNOVATION_ANALYSIS). |

---

## Fatal Flaw Test

| Check | Result |
|-------|--------|
| No identifiable owner | **PASS (conditional)** — owner can be civic + optional OMBD champion; not a blank. |
| Structural wall, no workaround | **PASS** — Socrata path documented in tech stack. |
| Net negative for frontline | **PASS** — read-only; no new staff workflow imposed. |
| No funding path beyond pilot | **PASS** — commodity hosting; no license cliff. |
| Harms Invisible Resident | **PASS** if plain-language + accessibility are in scope; **FAIL** if shipped NAICS-only with no curation — treat curation as **blocking for “equity-complete”**. |

**Fatal flaw:** None for **Tier S technical ship**; **equity-complete** variant fails until NAICS-to-plain-language table and basic accessibility are in the Definition of Done.

---

## Rubric Grades (Estimated — not listed in `IDEA.md`)

| Category | Score (1–5) | Note |
|----------|:-----------:|------|
| Impact | 5 | Addresses information asymmetry vs. incumbents; aligned to national evidence on discovery + channels |
| Feasibility | 5 | Same public dataset family as #1 idea; no keys |
| User Value | 5 | Sharp MBE JTBD; contingent on validation |
| Execution | 4 | Clear MVP shapes; depends on team polish |
| Innovation | 4 | ERRC + renewal layer; not wholly novel globally |
| Equity | 5 | Equity is the thesis; execution must match |

### Award Weighted Scores (hackathon formulas)

- **Mayor’s Choice** (Impact×5 + Feasibility×5 + User Value×4 + Execution×3 + Equity×3 + Innovation×1): **101**  
- **Moonshot** (Innovation×5 + Impact×4 + User Value×3 + Equity×3 + Feasibility×2 + Execution×2): **88**  
- **Pillar Award — Thriving Economy** (Impact×5 + User Value×4 + Feasibility×3 + Innovation×3 + Execution×3 + Equity×3): **99**  

---

## Final Verdict

**GO** — Ship as **Bundle 1** sibling: public Socrata client, NAICS curation, renewal views, staleness signal. **REFINE** parallel track: (1) vendor user tests for assumption #5, (2) optional Payment Register join, (3) named City or nonprofit steward for communications. **Temporal:** **Appreciating** if open data quality improves or permitting/finance modernization adds fields; **stable** on core contract extract.

---

## Status

| Field | Value |
|-------|-------|
| Phase | COMPLETE (condensed) |
| Verdict | **GO** with equity DoD and validation gates |
| Fatal flaws (technical) | 0 |
| Pillar research used | INDEX sections A (problem), B (personas), D (data), E (prior art), F (opportunities), G (risks), H (MVP) — via index routing, not full 51 files |
