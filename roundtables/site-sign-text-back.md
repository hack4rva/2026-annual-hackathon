# Roundtable (Condensed): Site-Sign Case Number Text-Back

**Initiated:** 2026-04-02  
**Idea:** Site-Sign Case Number Text-Back  
**Pillar:** Thriving Neighborhoods  
**Problem Statement:** PS1 — Neighborhood Development Discovery  
**Source:** BLUESKY (ERRC reframing)  
**Implementation Reality Score:** 21/25 — Tier S (Ship It)  
**Overall Rank:** #10 of 73  

## Input Materials

| File | Status |
|------|--------|
| `IDEA.md` | Loaded |
| `RESEARCH_RESULT.md` | Loaded |
| `INNOVATION_ANALYSIS.md` | Loaded |
| `RICHMOND_TECH_STACK_2026.md` | Loaded — Legistar OData public; Twilio/SMS listed as realistic external stack; no 311 dependency |
| `pillar-repos/pillar-thriving-neighborhoods/research/INDEX.md` | Loaded — corpus maps development transparency, Legistar/GIS data playbooks (C1, D1, D2, F2, G3, H2, H4, H5) |

**Bundles:** Legistar Development Pipeline (Bundle 2); SMS/Twilio Channel (Bundle 6). Shared research: `../_shared-dev-discovery/` (per IDEA).

---

## Seven Personas — Condensed Turns

### 1 — MAYOR (Decider)

**Advance with owner named.** PS1 alignment is direct: residents discover what a case means at the physical moment of notice. MAP-relevant KPI is *earlier, clearer engagement* (comment windows, hearing attendance), not a vanity app metric. Natural owner: **Planning** (sign templates, public-notification policy) with **DIT** for records retention if logs are official. Political risk is low if messaging stays informational and links to authoritative Legistar. Duplicate check: cities default to QR/URL on signs (per research); Richmond would be adding an **accessibility channel**, not replacing web. **Pilot:** 90-day, 10–20 signs, dual-channel (QR primary + SMS fallback) matches RESEARCH_RESULT playbook.

### 2 — INNOVATOR (Expander)

ERRC holds: **eliminate** manual Legistar navigation; **reduce** smartphone dependence vs QR-only; **raise** plain-language summaries (Legistar raw text is hostile in SMS); **create** sign-to-SMS zoning pattern (no verified US peer at scale — transit “text stop ID” is the honest analog). Most leverage is **Pattern A** (lookup) first; **Pattern B** (subscribe/comment via SMS) is the provocative stretch but spikes TCPA, PRA, and clerk workflow risk. Non-obvious win: position as **dual-channel pilot** so QR advocates and accessibility advocates both get a win — avoids “SMS vs industry standard” false fight.

### 3 — FRONTLINER (Operator)

**Planning / PC staff:** Inbound volume could rise if residents misunderstand the reply as a decision or ask follow-ups the bot cannot answer — needs **clear “information only” copy** and a **single staffed path** (phone/email) on failure. **Call center:** Research targets 10–30% inquiry deflection; unproven until pilot. **Failure modes:** mistyped case IDs (assumption #2 high priority), canceled matters, no hearing scheduled — parser must fuzzy-match and degrade to human-readable errors + portal link. Adoption risk for staff is **medium** until sign template and training are settled; technical build risk is **low**.

### 4 — CITIZEN (Recipient)

**Engaged resident:** High clarity if the SMS is short and links out for depth. **Service user:** “I saw a sign, I got an answer” — strong JTBD fit. **Invisible resident:** SMS helps **non-smartphone** users vs QR-only; still excludes those without SMS, with low literacy, or non-English unless multilingual templates ship (INNOVATION flagged Spanish/Vietnamese). Trust: official number on **official sign** matters; spoofing risk is a communications design issue. Discovery: useless until the number is printed — **visibility is entirely downstream of Planning**.

### 5 — ARCHITECT (System Guardian)

**Walls:** Does not require 311, EnerGov API, OnBase, B2GNow, or fleet GPS. **Legistar** OData is public, no auth (`webapi.legistar.com/v1/richmondva/`), pagination cap (1000 rows) irrelevant for single-case lookup by filter. **SMS:** 10DLC registration, TCPA-compliant signage, STOP/HELP, carrier filtering — operational complexity, not a structural wall. **PRA:** message logs as public records — retention pipeline must exist before scale (RESEARCH_RESULT). **AI:** plain-language summarization would trigger **AR 2.13** review if used; templated fields from Legistar reduce need. **TCO:** low per-message; ongoing cost is **predictable** but non-zero vs free QR.

### 6 — FUNDER (Resource Realist)

RESEARCH_RESULT brackets **$5k–$15k** for a 90-day pilot (excl. staff), driven by integration labor + messaging + reprinted signs. **Cheapest viable:** civic org or city pilot on **one 10DLC**, serverless webhook, no short code. **Sustainability:** medium cliff if only grant-funded — needs **departmental line item** or **shared SMS bundle** (Contract Expiry Alerts, etc., per Bundle 6). **Negative business case:** staff time on repetitive “what is this case?” inquiries and residents missing comment windows.

### 7 — ACTIVIST (Universe Expander)

**Adopt/adapt:** No municipal product to adopt off-the-shelf for “zoning sign SMS”; **build** is appropriate. **Owner:** City Planning for signage authority; **operate** could be nonprofit with City endorsement (common civic-tech pattern). **Scale:** Legistar + SMS pattern is **replicable** to other Granicus cities; Richmond as pilot has narrative value. **Ecosystem:** aligns with pillar research emphasis on Legistar-forward transparency (INDEX: C1, D1, F2, H2) and honest scope boundaries (H4, H5).

---

## Tensions (Challenge Round)

| # | Tension | Resolution |
|---|---------|------------|
| **T1** | **Municipal norm is QR/URL, not SMS** — cost and compliance favor QR. | **Dual-channel pilot:** QR as primary per national pattern; SMS as documented accessibility/equity layer — not a replacement. |
| **T2** | **“Tier S” vs organizational gate** — IDEA says ships; INNOVATION flags Planning sign-template buy-in as highest-risk assumption. | **Feasibility scores tech + org together:** shippable *as software* immediately; shippable *as civic product* only with named Planning champion + legal sign-off — verdict **conditional**, not contradictory. |
| **T3** | **Innovation claim** — “first US zoning SMS-on-sign” is empty if volume is zero. | **Innovation** credits the *interaction design* at the sign (ERRC **Create**); **Impact** and **User Value** stay tied to measured pilot KPIs (valid ID rate, CTR, deflection) — no credit for novelty alone without adoption evidence. |

---

## Fatal Flaw Test

| Test | Result | Notes |
|------|--------|-------|
| Identifiable owner | **Conditional pass** | Planning + legal + (if official logs) records — **fatal if no champion** for sign template after 90 days. |
| Structural wall | **Pass** | Legistar public; SMS commodity; no five-wall dependency for MVP lookup. |
| Net harm to frontline | **Pass** | Risk mitigated by error handling and “info only” framing; monitor inquiry volume in pilot. |
| Funding cliff | **Medium risk, not fatal** | Ongoing SMS + maintenance need a line item or shared service; pilot cost is modest. |
| Harms Invisible Resident | **Pass (with gaps)** | Improves non-smartphone path vs QR-only; still excludes some groups until multilingual + disability accommodations are explicit. |

**Fatal flaw:** **None** if Planning champion + TCPA/PRA gates clear. **Latent kill:** signs never updated → product becomes demo-only with no resident reach.

---

## Verdict

### SHIP WITH CONDITIONS

1. **Named Planning sponsor** and path to **update standard site-sign graphics** (or pilot subset of active sites).  
2. **Legal review** of on-sign TCPA disclosure and message content; **STOP/HELP** and retention policy **before** public launch.  
3. **Dual-channel** pilot design (QR + SMS) with UTM + gateway analytics for KPIs in RESEARCH_RESULT.  
4. **Scope lock v1:** case lookup + link; defer subscribe/comment-via-SMS until consent and clerk workflow are designed.  
5. **Plain-language** templating: avoid ungoverned LLM summaries in v1 unless DIT AR 2.13 path is explicit.

---

## Consensus Rubric & Awards

Baseline rubric was not tabulated in `IDEA.md`; **INNOVATION_ANALYSIS** scored Impact **4**, Feasibility **5** on a 5-dimension problem scope. Roundtable **adjusts Feasibility to 4** (org + compliance + sign deployment) and sets full six-category consensus below.

| Category | Consensus (1–5) | Rationale |
|----------|-----------------|-----------|
| **Impact** | **4** | Strong PS1 fit at physical discovery; magnitude depends on sign rollout and volume. |
| **Feasibility** | **4** | Tech trivial against public Legistar; 10DLC/TCPA/PRA and Planning adoption are real gates. |
| **User Value** | **4** | High when live on signs; until then, value is prospective — “exceptional” reserved after pilot proof. |
| **Execution** | **5** | Weekend-viable webhook + live demo; judge-visible and credible. |
| **Innovation** | **4** | New municipal interaction pattern for zoning; grounded by transit SMS analogs, not sci-fi. |
| **Equity & Inclusion** | **4** | Explicit accessibility story vs QR; multilingual and trust gaps remain work items. |

### Award Scores (computed)

**Mayor's Choice** — Impact×5 + Feasibility×5 + User Value×4 + Execution×3 + Equity×3 + Innovation×1  
= 20 + 20 + 16 + 15 + 12 + 4 = **87**

**Pillar Award** — Impact×5 + User Value×4 + Feasibility×3 + Innovation×3 + Execution×3 + Equity×3  
= 20 + 16 + 12 + 12 + 15 + 12 = **87**

**Moonshot Award** — Innovation×5 + Impact×4 + User Value×3 + Equity×3 + Feasibility×2 + Execution×2  
= 20 + 16 + 12 + 12 + 8 + 10 = **78**

---

## One-Paragraph Synthesis

Site-Sign Text-Back is a **high-demo, wall-free technical MVP** that sits on Richmond’s best public API (Legistar) and commodity SMS, matching Thriving Neighborhoods research that favors **Legistar-forward, resident-legible** tools. The idea is **not** blocked by vendor walls; it is **gated by policy and operations**: sign-template authority, TCPA-safe copy, public-records retention, and honest **dual-channel** positioning next to QR. Consensus keeps **Impact, User Value, and Equity** strong but not maximal until adoption is measured; **Innovation** is elevated above a pure “Legistar wrapper” because the sign-native SMS pattern is substantively new in US zoning practice. **Verdict: ship with conditions** — resolve owner and compliance, pilot small, instrument KPIs, then scale.

---

*Condensed roundtable: seven persona lenses, three tensions, fatal-flaw screen, verdict, and award math. No separate full multi-turn log.*
