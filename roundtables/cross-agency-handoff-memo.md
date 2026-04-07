# Roundtable (Condensed): Cross-Agency Handoff Memo

**Initiated:** 2026-04-02  
**Idea:** Cross-Agency Handoff Memo  
**Pillar:** Thriving & Inclusive Communities  
**Problem Statement:** PS2 — Cross-Agency Service Navigation  
**Source:** BLUESKY (ERRC reframing)  
**Implementation Reality:** 22/25 — Tier S (Ship It)  
**Overall Rank:** #6 of 73  

## Input materials

| File | Status |
|------|--------|
| `IDEA.md` | Loaded |
| `RESEARCH_RESULT.md` | Loaded (client-carried “passport” playbook, VA H-PACT, regulatory framing) |
| `INNOVATION_ANALYSIS.md` | Loaded (ERRC, assumptions R×U, opportunity corridors) |
| `RICHMOND_TECH_STACK_2026.md` | Loaded — **no walls hit**; Unite Us / Help1RVA APIs closed reinforces “client-carried artifact” path |
| `pillar-repos/pillar-thriving-inclusive-communities/research/INDEX.md` | Loaded — anchor refs: A2 cross-agency navigation, B1–B3 users, C4/C5 fragmentation, F3/H3/I3 cross-agency MVP & demo framing, G2/G4/G5 privacy & data walls |

---

## Seven personas (condensed)

### 1 — Mayor (Decider)

**MAP:** Primary — Thriving & Inclusive Communities (PS2). Secondary — Thriving Families if framed around coordinated support for youth/families in crisis handoffs.  
**Metric to move:** Time-to-stable intake + client-reported burden (aligned with pillar research KPIs: intake minutes, re-trauma Likert — RESEARCH_RESULT §Measurement).  
**Owner:** Not a City IT product day one; **pilot owner** = **DSS / RBHA / Continuum of Care adjacent nonprofit coalition** (e.g., reentry + housing corridor named in INNOVATION_ANALYSIS). City role = **endorse template + optional portal link**, not data integration.  
**Decision:** **Refine → Advance** once one receiving agency commits to *read* the memo in intake SOP.  
**Temporal:** **Appreciating** if coordinated-entry and HMIS norms mature; **Stable** for the zero-server artifact itself.

### 2 — Innovator (Expander)

**Reframe:** The problem is not “missing software” but **missing portable legibility** at handoffs. ERRC correctly **eliminates** shared case systems; **raises** client agency via trauma-informed minimalism.  
**Insight:** Same mechanism as VA wallet cards / discharge summaries — **physical + structured** beats interoperability for D3=1 weekend reality (pillar INDEX: F3, H3, I3).  
**Stretch (non-MVP):** Bilingual + icon sections; “progressive memo” stamped per visit; hybrid QR — all increase value but add scope.

### 3 — Frontliner (Operator)

**Community workers:** **Use / Maybe** — fills ~5–10 min if caseworker-led; **high Maybe** if clients self-serve on phones in waiting rooms. **City staff:** **Maybe** — less central unless City-run intake is in the pilot path.  
**Top failure mode:** Receiving intake **ignores PDF** → sender wasted effort + false confidence (**Assumption 1, R×U = 15**). Second: **liability anxiety** on what was written (**Assumption 6, R×U = 16**).  
**Mitigation:** Job aid for receivers (“this is voluntary client communication, not medical record”); shadow intake before scale.

### 4 — Citizen (Recipient)

- **Engaged resident:** Indirect benefit unless they’re in navigation networks; visibility low unless CBOs distribute URL/QR.  
- **Service user:** **High value if** the next desk actually uses it — fewer repeated questions, faster routing.  
- **Invisible resident:** **Strength** — no account, no server, client chooses fields; **risk** — English-only MVP excludes; literacy/device friction without assisted completion.  
**Trust:** Client-held data reduces surveillance feel vs. shared DB; still need clear “what not to put on paper” (stigma/DV — RESEARCH_RESULT risk register).

### 5 — Architect (System guardian)

**Walls hit:** **None** of the five structural walls (311, OnBase/RAPIDS, EnerGov, B2GNow, DPW GPS). **Unite Us / Help1RVA** non-integration is a *feature* for this pattern (RICHMOND_TECH_STACK: closed APIs → artifact, not sync).  
**Integration complexity:** **None** (static site / client-side PDF). **Security:** No storage lowers breach surface; **content risk** is user-entered sensitive info on a printout — mitigate via UX copy and optional toggles.  
**Recommendation:** **Ship** (independent hosting; DIT optional review if City-linked domain).

### 6 — Funder (Resource realist)

**Model:** **Zero-cost** static hosting; optional **grant** for translation, laminated cards, training (RESEARCH_RESULT: braided funding, cents-per-card).  
**Y1:** Near-zero engineering + modest nonprofit staff time for pilot. **Y3:** Still low if maintained as open-source static tool; **sustainability risk: Low** for code, **Medium** for *organizational* habit (training churn).  
**Negative case:** Repeated intakes and re-trauma burn staff time and drop-out; memo is cheap experiment vs. years waiting for HIE/Unite Us integration.

### 7 — Activist (Universe expander)

**Prior art:** VA wallet cards, discharge one-pagers, Elation-style passports — **silos in health**; **no US city standard** for Richmond-style housing/workforce/reentry memo (INNOVATION_ANALYSIS).  
**Decision tree:** **Build** (lightweight) + **Partner** (CBO-led). **Not** City-monopoly — speed and trust live with community intermediaries (pillar INDEX B3, C4).  
**Scale:** Pattern portable to any metro with static hosting; Richmond-specific value = **named corridor pilots** (reentry↔housing; immigrant referral mesh).

---

## Productive tensions (resolved in brief)

| Tension | Resolution |
|---------|------------|
| **Innovator vs. Architect** | Ambition (QR, NFC, HMIS pre-fill) deferred; zero-server PDF preserves **Ship** verdict. |
| **Mayor vs. Activist** | City **endorses / links**; **nonprofit coalition pilots** — avoids IT queue without abdicating MAP story. |
| **Frontliner vs. Innovator** | “Interesting” features (voice memo, NFC) wait until **baseline memo** proven read at intake. |
| **Citizen vs. System** | Benefit realized only if **receiving** SOP changes — citizen value is **conditional**. |
| **Funder vs. Innovator** | Grant money for **training + languages**, not for backend. |
| **Architect vs. Frontliner** | Clean architecture (no server) vs. messy reality (paper lost, PDF unread on clerk’s machine) — mitigate with **print + optional QR** hybrid per RESEARCH_RESULT. |

---

## Fatal flaw test

| Criterion | Result |
|-----------|--------|
| No identifiable owner? | **PASS** — CBO / CoC-adjacent pilot owner; City optional champion. |
| Structural wall, no workaround? | **PASS** — deliberately avoids integrated systems. |
| Net negative for frontline? | **PASS** *if* pilot validates use; **latent FAIL** if memos are ignored → becomes extra work without payoff. **Mitigation = mandatory pilot with receiving agency.** |
| No funding path beyond pilot? | **PASS** — zero-cost core. |
| Harms Invisible Resident? | **PASS** with **REFINE** — ship **Spanish + plain language + assisted pathway** early to avoid exclusion. |

**Synthesis:** No hard kill; **operational** kill risk if validation skipped (Frontliner + Citizen chain breaks).

---

## Final verdict

**GO** — **Pilot with paired agencies** (sender + receiver), success criterion = receiving intake **references memo** in first 5 minutes or measurable question-count drop.  
**REFINE** items: (1) legal/compliance sign-off for issuing orgs on “communication not case file”; (2) bilingual MVP; (3) receiver job aid.  
**Temporal tag:** **Appreciating** for interoperability context; **Stable** for technical pattern.

---

## Hackathon rubric scores & awards

*IDEA.md does not list six-category scores; table below is **roundtable synthesis** from INNOVATION_ANALYSIS problem scoping + viability pass (1–5 scale).*

| Category | Score | Note |
|----------|:-----:|------|
| Impact | 4 | Strong mechanism; US “story repetition” metrics still thin (RESEARCH_RESULT). |
| Feasibility | 5 | Tier S; zero server, zero MOU for core. |
| User Value | 5 | Directly targets repeat intake / re-trauma when adopted. |
| Execution | 4 | Demo-ready; scale depends on workflow change. |
| Innovation | 4 | ERRC reframe (client-carried vs. shared infrastructure) is the leap. |
| Equity | 5 | Account-free, client-controlled; must add language/access guardrails. |

**Weighted award scores** (same formulas as hackathon brief):

| Award | Calculation | Score |
|-------|-------------|------:|
| **Pillar** (Impact×5 + UV×4 + Feas×3 + Inno×3 + Exec×3 + Eq×3) | 20+20+15+12+12+15 | **94** |
| **Mayor's Choice** (Imp×5 + Feas×5 + UV×4 + Exec×3 + Eq×3 + Inno×1) | 20+25+20+12+15+4 | **96** |
| **Moonshot** (Inno×5 + Imp×4 + UV×3 + Eq×3 + Feas×2 + Exec×2) | 20+16+15+15+10+8 | **84** |

**Pillar award:** Strong fit — best answers PS2 without waiting for Unite Us / HMIS integration.

---

## Status

- **Phase:** Condensed single-pass (7 lenses + tensions + fatal flaw + verdict)  
- **Evidence:** Repository sources only; no fresh web research in this pass  

**Rollback:** Delete or revert `agents/roundtables/cross-agency-handoff-memo.md`.
