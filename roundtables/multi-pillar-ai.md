# Roundtable: Multi-Pillar AI Platform (CONDENSED)

**Initiated:** 2026-04-02  
**Idea:** Multi-Pillar AI Platform  
**Presenter (demo):** Subhash Krishnamurthy  
**Pillar (primary filing):** Thriving Families — Youth Employment Pathways (PS1)  
**Stated scope:** All 7 MAP pillars; Google Cloud; multi-agent + live data  

## Input Materials

| File | Status |
|------|--------|
| `IDEA.md` | Loaded — demo narrative: youth module (registration, jobs, AI coach, video agent, ATS resume, routing), Stories pillar (Ticketmaster, story hub), “all seven pillars” claimed, not walkthrough |
| `RESEARCH_RESULT.md` | Loaded — monolith vs modular public IT; Quayside governance failure; narrow civic tech ROI; Sentilo / VICA / FASTRAC / City Brain patterns |
| `INNOVATION_ANALYSIS.md` | Loaded — ERRC grid, crazy-8s, SMS router MVP, assumption map (LLM routing risk, directory gap, AR 2.13), Lens 5 scores 16/25 on scoped problem rubric |
| `pillar-thriving-families/research/INDEX.md` | Loaded — corpus points to youth + maternal tracks, data (VDH, ACS, KIDS COUNT, GTFS), risks G1–G5 (minors, health claims, inclusion, quality, guardrails) |
| `RICHMOND_TECH_STACK_2026.md` | Loaded — AR 2.13 (DIT oversight, transparency, consent for personal data); Help1RVA / Unite Us / 311 no public API; hackathon adoption path informal |
| `lifecycle_review.md` | Referenced — PS1-only critique: breadth vs depth, no employer side, resume-first misfit for first-job teens, no VA youth labor compliance, minor PII / VCDPA / COPPA gaps |

---

## Seven Personas (single pass)

**1 — Teen first-job seeker (14–16)**  
Wants one trustworthy place for legal, age-appropriate opportunities and plain steps. Sees flashy AI and video coaching but not work permits, hour caps, or prohibited tasks. Fear: being pointed at jobs they cannot legally do.

**2 — Youth workforce program staff (e.g., YES / OCWB ecosystem)**  
Needs accurate handoffs and no wrong eligibility advice. A “city brain” that improvises outside curated lists creates liability and undermines trusted navigators.

**3 — DIT / AI governance (AR 2.13)**  
Chatbots are an acceptable use class, but resident-facing AI requires human oversight, public disclosure, minimized collection, and review. A real-time video agent processing minors’ data triggers a long compliance path, not a weekend toggle.

**4 — Civic architect (modular Richmond reality)**  
OECD-style modular ecosystems beat monoliths for most peers. Asks: where is the open data backbone or API layer? Without it, this is a vertical product on GCP, not a city-integrable platform.

**5 — Maternal-health / cross-pillar resident**  
INNOVATION_ANALYSIS’s “lost job + kids + rent” scenario is the right pain. IDEA.md barely proves that journey; Thriving Families research warns against health misstatement and fragmented service truth (G2, C4).

**6 — Cultural / Stories pillar advocate**  
Ticketmaster + community story hub are plausible demo slices but depend on third-party terms and moderation policy. Not a substitute for proving Families or cross-pillar routing.

**7 — Judge (Pillar + Mayor’s Choice + Moonshot)**  
Execution demo is broad; scoring must separate **wow** from **fit to PS1** and from **city shippability**. Moonshot framing is natural; Pillar Award wants depth on one problem statement.

---

## Tensions (resolved for scoring)

| Tension | Resolution |
|---------|--------------|
| **7-pillar ambition vs PS1 depth** | Lifecycle review: breadth wins spectacle, loses “one clear place” for Richmond youth. Pillar Award penalizes; Moonshot may reward vision if reframed. |
| **Singapore VICA vs Richmond** | VICA sits atop institutional AI governance and curated corpora. Richmond lacks a machine-readable cross-agency service graph; 311 is not API-accessible. |
| **AI router value vs harm** | Wrong routing is worse than no tool (INNOVATION_ANALYSIS). Youth + eligibility + health-adjacent topics amplify downside. |
| **Video / GenAI “best part” vs minors** | G1 index theme: skip the privacy minefield or engineer consent, retention, and data minimization explicitly — absent in IDEA.md. |
| **External feeds (Ticketmaster, maps) vs City partnership** | TECH_STACK: many high-value family services (Help1RVA, Unite Us) are partnership-gated. “Live data everywhere” is not reproducible without contracts. |

---

## Fatal flaw

**No verified Richmond-wide service graph + high-stakes domains (minors, work eligibility, potentially health-adjacent routing) + maximum scope.** The prototype can impress as a **capability demo** but cannot be trusted as civic infrastructure without curated directories, compliance layers, and DIT-governed AI behavior. Misrouting or hallucinated services is an active harm vector; breadth prevents fixing any single pillar to award-grade depth.

---

## Verdict

- **Strategic label:** High-ambition **integration fantasy** with a **strong Families-module concept** (coach, video practice, resume) that is **misaligned** with PS1’s zero-resume, compliance-heavy user.  
- **Ship path:** Not credible as one City-owned platform short term. Credible **narrowing** would be: (a) horizontal **router + citations** over a vetted small directory, or (b) **deepen PS1 only** with VA youth labor guardrails and employer supply — not both in one unowned prototype.  
- **Awards:** Competitive as **Moonshot narrative** if judges weight innovation and long-horizon integration; **weak Pillar (Families)** vs a focused youth navigator; **weak Mayor’s Choice** (feasibility, ownership, maintenance).

---

## Scores & awards (working rubric — 1–5 categories)

*Derived from INNOVATION_ANALYSIS Lens 5, lifecycle_review blockers, and TECH_STACK constraints. Judges’ scores may differ.*

| Category | Score | Note |
|----------|:-----:|------|
| Impact | 4 | Real cross-silo navigation pain; impact capped by backend truth and depth |
| Feasibility | 2 | AR 2.13, no 311 API, no public service directory, employer gap, compliance gap |
| User Value | 4 | High if narrowed; as demo’d, value uneven across personas |
| Execution | 3 | Technically broad demo; brittle on facts and policy fit |
| Innovation | 5 | Multi-agent, video, cross-pillar framing — standout ambition |
| Equity | 2 | Minor data / misrouting risk; benefits skew to digitally confident users unless guardrails explicit |

**Weighted (illustrative)**  
- **Pillar Award (Families):** Impact×5 + User Value×4 + Feasibility×3 + Innovation×3 + Execution×3 + Equity×3 → **72** (on same linear scale as other roundtables)  
- **Mayor’s Choice:** Impact×5 + Feasibility×5 + User Value×4 + Execution×3 + Equity×3 + Innovation×1 → **66**  
- **Moonshot:** Innovation×5 + Impact×4 + User Value×3 + Equity×3 + Feasibility×2 + Execution×2 → **69**

**Implementation Reality (survivability, aligned with TECH_STACK + INDEX risk sections):** **~9–11 / 25 — Tier C** — ownership unclear, multiple integration walls, AI governance and minor-data burden, maintenance-heavy monolith unless modularized.

---

## Status

- **Phase:** CONDENSED COMPLETE  
- **Verdict:** **Do not treat as shippable city platform;** extract **narrow pilots** (PS1 compliance + curated listings, or citation-bound router) before any resident scale-up.
