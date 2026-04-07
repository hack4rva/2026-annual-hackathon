# Roundtable: Deterministic Service Wizard (CONDENSED)

**Initiated:** 2026-04-02  
**Idea:** Deterministic Service Wizard  
**Pillar:** A Thriving City Hall  
**Problem Statement:** PS1 — Resident Service Navigation  
**Source:** NEW (AI-generated post-event)  
**Implementation Reality Score:** 21/25 — Tier S (Ship It) — *per IDEA.md*  
**Overall Rank:** #7 of 73 ideas — *per IDEA.md*

---

## Input Materials

| File | Status |
|------|--------|
| `service-wizard/IDEA.md` | Loaded |
| `service-wizard/RESEARCH_RESULT.md` | Loaded |
| `service-wizard/INNOVATION_ANALYSIS.md` | Loaded |
| `ideas/RICHMOND_TECH_STACK_2026.md` | Loaded — 311/AvePoint no public API; static + public web content viable |
| `pillar-thriving-city-hall/research/INDEX.md` | Loaded — F2 wizard-first, H2/H4/H5 MVP service nav, G1 wrong-routing, D4 rva.gov content |

---

## Rubric Grades (from IDEA.md)

| Category | Score |
|----------|:-----:|
| Impact | 5 |
| Feasibility | 4 |
| User Value | 5 |
| Execution | 4 |
| Innovation | 3 |
| Equity | 5 |

**Pillar Award:** 93 | **Mayor's Choice:** 95 | **Combined:** 188

---

## Seven Personas (condensed voices)

### 1 — Resident (urgent, first-time caller)

“I don’t know if flooding is DPU, DPW, or 311. I need one place that doesn’t make me read ten department pages. If this wizard gets me to the right form or number in a minute, it’s worth more than a chatbot that sounds smart but guesses wrong.”

### 2 — 311 / CSR frontline

“If it cuts wrong tickets, we still pay. A JSON file we can audit and update beats mystery AI. If the City doesn’t own updates, though, the wizard becomes another stale bookmark and we’re back to transfers.”

### 3 — DIT / enterprise architect

“No AvePoint API is a hard wall for anything that submits or reads 311 tickets. This idea treats 311 as a *destination* (links + phone) — that’s the realistic hackathon and pre-partnership path. Static HTML/JS + embed fits commodity hosting; Drupal embed is coordination, not a new platform.”

### 4 — Equity & LEP advocate

“No AI means no hallucinated eligibility; human-translatable Spanish matches AR 2.13’s transparency and minimizes machine-translation harm. Deferring full Spanish to Phase 2 is a real tension: Pattern A helps English-first fast, but we need a committed timeline for bilingual strings.”

### 5 — Mayor’s office / implementation champion

“Highest-safety story for ‘route right first time’ aligns with MAP City Hall goals. Winning adoption means a named owner (311 or digital services) and a refresh cadence when forms move — not just a launch press hit.”

### 6 — Civic innovator

“GOV.UK Smart Answers is proven since 2012; mid-sized U.S. cities mostly use taxonomies or leap to vendor chatbots — true Smart Answers–style wizards are rare here. The provocative insight: the ‘most boring’ pattern may be the most trustworthy; hackathon demos skew flashy, not optimal.”

### 7 — Research / evidence skeptic

“RESEARCH_RESULT.md is clear: published misrouting metrics for deterministic municipal wizards are scarce. The honest position is ship + instrument (reassignment proxy, completion time, CSAT). Also correct the record: ‘Decatur Direct’ in the prior-art discussion is Decatur, *Indiana* (AI), not a GA deterministic tree — avoid sloppy citations in pitches.”

---

## Tensions (unresolved tradeoffs)

| Tension | A side | B side |
|---------|--------|--------|
| **Flash vs fidelity** | AI demos win rooms | Deterministic wins auditability and legal safety |
| **Reach vs accuracy** | AI scales languages cheaply | Human translation scales poorly but protects LEP users |
| **Behavior change** | “Everyone still calls 311” | Wizard only helps if residents find and trust it on rva.gov |
| **Scope vs coverage** | Top 20 types = fast MVP | Assumption that 20 ≈ 80% volume needs 311 category data |
| **Maintenance** | Version-controlled JSON is simple | Taxonomy drift when departments reorganize is guaranteed without process |
| **Hybrid future** | Research recommends AI for broad Q&A | This product is deliberately non-AI; eventual pairing needs explicit boundaries |

---

## Fatal flaw

**Governance vacuum after launch.** The wizard is only as good as the last time someone updated the JSON against live RVA311 forms and department contacts. Without a named City or formal partner owner, a refresh cadence, and a path to bilingual content, the tool decays into **confident wrong routing** — the same harm it was designed to prevent, just slower than an LLM.

*Mitigation (table consensus):* Treat maintenance as part of the MVP story; pair with 311/content governance; publish “last reviewed” metadata; plan Spanish Phase 2 with dates, not vibes.

---

## Verdict

**Ship as a Tier-S adjacent resident-facing prototype** — technically shippable without 311 API access, strong equity and impact narrative, aligns with pillar research (wizard-first, guarded routing). **Conditions:** (1) validate top-N categories with real volume or triage data where possible, (2) secure explicit post-hackathon owner for taxonomy updates, (3) don’t oversell innovation — sell **reliability** and **inspectability**.

---

## Score + awards (summary)

- **Hackathon rubric (IDEA.md):** Impact 5, Feasibility 4, User Value 5, Execution 4, Innovation 3, Equity 5.  
- **Weighted highlights:** Pillar **93**, Mayor’s Choice **95**.  
- **Implementation Reality (IDEA.md):** **21/25 — S**; aligns with tech stack note that static + public content avoids the **311 / AvePoint** wall while still depending on organizational follow-through for freshness.

---

## Status

| Field | Value |
|-------|--------|
| Phase | COMPLETE (condensed roundtable) |
| Verdict | Ship with governance conditions |
| Fatal flaw | Taxonomy drift without named owner |
| Structural wall avoided | No 311 read/write required for v1 |
