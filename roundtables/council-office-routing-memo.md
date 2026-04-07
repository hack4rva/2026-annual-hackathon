# Roundtable: Council Office Routing Memo (CONDENSED)

**Initiated:** 2026-04-02  
**Idea:** Council Office Routing Memo  
**Pillar:** A Thriving City Hall  
**Problem Statement:** PS1 — Resident Service Navigation  
**Source:** BLUESKY (ERRC reframing)  
**Implementation Reality Score:** 19/25 — Tier A (Strong)  
**Overall Rank:** #24 of 73 ideas  

## Input Materials

| File | Status |
|------|--------|
| IDEA.md | Loaded |
| RESEARCH_RESULT.md | Loaded |
| INNOVATION_ANALYSIS.md | Loaded |
| README.md | Loaded |
| `pillar-repos/pillar-thriving-city-hall/research/INDEX.md` | Loaded — corpus maps PS1 to A1/A5, B1/B2, C2/C4, D4/D5, E2, F2, G1/G3/G5, H2/H4/H5 |
| `RICHMOND_TECH_STACK_2026.md` | Loaded — 311 AvePoint no public API; rva.gov + open data only for hackathon path |

## Rubric Grades (table consensus)

| Category | Score | Rationale (one line) |
|----------|:-----:|----------------------|
| Impact | 4 | Nine district offices as unofficial help desk; correct routing lifts outcomes citywide without replacing 311. |
| Feasibility | 4 | No 311 write API needed for Pattern A; curation + one pilot office are real but achievable gates. |
| User Value | 4 | Council staff get structured handoff; residents get fewer wrong-department loops. |
| Execution | 4 | Weekend-credible: form + JSON taxonomy → memo, copy/print; demo is judge-ready if contacts are real. |
| Innovation | 3 | Memo-as-product vs CRM/dashboard is a sharp ERRC “create,” not a new civic paradigm. |
| Equity | 3 | Helps all districts if adopted; does not by itself fix LEP, digital divide, or 311 access gaps. |

**Mayor's Choice (MC)** — weights: Impact×5 + Feasibility×5 + User Value×4 + Execution×3 + Equity×3 + Innovation×1  

**MC score:** 4×5 + 4×5 + 4×4 + 4×3 + 3×3 + 3×1 = **80**

**Pillar Award** — Impact×5 + User Value×4 + Feasibility×3 + Innovation×3 + Execution×3 + Equity×3  

**Pillar score:** 4×5 + 4×4 + 4×3 + 3×3 + 4×3 + 3×3 = **78**

**Moonshot** — Innovation×5 + Impact×4 + User Value×3 + Equity×3 + Feasibility×2 + Execution×2  

**Moonshot score:** 3×5 + 4×4 + 4×3 + 3×3 + 4×2 + 4×2 = **68**

*Awards fit:* Strong **Pillar (City Hall)** contender if pilot proves adoption; **Mayor's Choice** plausible as a “ship a pilot with DIT/Council blessing” story; **Moonshot** weak — intentionally practical, not visionary.

---

## Seven Personas (single pass)

### 1 — Innovator (ERRC)
Eliminate the council “switchboard”; reduce CRM scope to a lookup; raise routing accuracy with mandatory fields (issue, department, contact, form link, **311 case ID when available**); **create** the printable/emailable memo as the artifact staff actually use on phone/email days.

### 2 — Activist / inclusion
District offices see everyone who falls out of self-serve flows. A memo that standardizes referral language and ADA/LEP callouts (per research template patterns) reduces arbitrary treatment; it does **not** replace bilingual 311 or outreach — flag as adjacent work.

### 3 — Frontliner (Council staff)
Job-to-be-done: “resident on the line, I need the right department in under two minutes.” Wins if output drops straight into Outlook and matches their muscle memory; loses if taxonomy is wrong or they already keep a private cheat sheet.

### 4 — Citizen
Doesn’t touch the tool; cares that the office stops bouncing them. Success metric: fewer misroutes and duplicate tickets — **invisible** unless paired with follow-up or 311 ID discipline.

### 5 — Mayor / CAO lens
Aligns with MAP “find the right door first time” without owning 311 modernization. Political upside: council–executive coordination narrative; risk: perceived as papering over 311 UX if not framed as **complement**.

### 6 — Architect (DIT / stack)
**Pattern A** (memo generator) fits hackathon reality: static site + curated JSON + no AvePoint API. **Pattern B** (ticket bridge) hits the **311 / AvePoint wall** — no public API per tech stack doc; email-to-ticket only if City exposes a governed gateway. Legistar/OData irrelevant to operational service routing; rva.gov crawl/structure work (INDEX **D4**) is the content engineering spine shared with Deterministic Service Wizard.

### 7 — Judge / synthesis
Clear problem, credible MVP, honest dependency on **curation + pilot**. Not Tier S because adoption and taxonomy accuracy are unproven; not lower tier because no exotic integrations for v1.

---

## Tensions (three)

1. **Memo vs integration** — Research shows API/Open311 handoff beats email for traceability and deduplication; Richmond’s 311 stack makes **integration the long pole**. Memo-first is correct for a weekend; institutionally, tension remains until case IDs are routine.  
2. **Shadow tickets vs discipline** — RESEARCH_RESULT and national playbooks: referrals without 311 IDs recreate duplicate work. Tool can **prompt** for ID; it cannot enforce City-wide SOP.  
3. **Buy/configure CRM vs build** — Indigov/CivicTrack patterns scale with budget; this idea bets on **minimal build** + shared taxonomy with Service Wizard — tension if offices want inbox analytics and dedupe out of the box.

---

## Fatal flaw (single)

**Adoption and taxonomy accuracy are simultaneously the value and the failure mode:** If staff do not switch from ad-hoc forwarding, or if the curated map misroutes high-stakes issues (INDEX **G1** wrong-routing guardrails), the memo becomes **confidently wrong** infrastructure — worse than the status quo because it looks official.

*Mitigation (not eliminating the flaw):* pilot with one office, 20-case backtest ≥80% first-pass routing (per INNOVATION_ANALYSIS), explicit “uncertain → 311/human” path, privacy footer for PII.

---

## Verdict

**Pilot-first, ship Pattern A; treat Pattern B as roadmap gated on DIT/311 partnership.** Tier A (#24) is fair: strong fit to Thriving City Hall research (service navigation, KB governance, council as intake edge) and to realistic tech constraints; success depends on **operational** validation, not more code.

**Rollback:** Retire static generator; taxonomy lives on in Service Wizard or internal KB — low sunk cost if pilot fails.

---

## Status

| Item | Value |
|------|--------|
| Phase | COMPLETE (condensed roundtable) |
| Verdict | Pilot-first; Pattern A only until 311 bridge is governed |
| Fatal flaw | Adoption + wrong taxonomy = confidently wrong memos |
| MC / Pillar / Moonshot | 80 / 78 / 68 |
