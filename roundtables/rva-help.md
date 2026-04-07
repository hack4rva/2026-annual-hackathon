# Roundtable: RVA Help (CONDENSED)

**Initiated:** 2026-04-02  
**Idea:** RVA Help — AI-assisted 311 request system  
**Pillar:** A Thriving City Hall — **PS1 — Resident Service Navigation** (311 improvement)  
**Team:** The Hackstreet Boys (Hack for RVA)  
**Source:** Hackathon demo

## Input Materials

| File | Status |
|------|--------|
| `IDEA.md` | Loaded |
| `RESEARCH_RESULT.md` | Loaded |
| `INNOVATION_ANALYSIS.md` | Loaded |
| `RICHMOND_TECH_STACK_2026.md` | Loaded |
| `pillar-thriving-city-hall/research/INDEX.md` | Loaded — keyed sections: A1/A5 (navigation), B1/B2/B5 (residents, 311 staff, equity), C1/C4 (311 landscape, gaps), D1 (legacy 311 data), E2/E4 (nav tools, chatbot failures), F2/F5 (311 MVP, do-not-build), G1/G3/G5 (routing wrongness, inclusion, guardrails), H2/H4/H5 (service nav MVP, no-API builds, scope), I2/I4 (311 demo, credibility) |

---

## Seven Personas (Condensed)

### 1 — INNOVATOR

**Lens:** Reframe beyond “chatbot.”

The compelling version matches **INNOVATION_ANALYSIS**: not open-ended AI answers, but **confidence-aware triage** — dual-intent (service vs. policy), **top-3 category suggestions** with resident final pick, RAG only for information queries with citations, escalation for sensitive domains. Nashville-style **abstention** beats demo-friendly auto-routing. Photo-based or taxonomy-first patterns are undervalued alternatives to pure LLM routing.

**Challenge to IDEA.md:** The walkthrough emphasizes AI “clarifying” and structured summaries; research says **mid-70s–low-80s** top-1 accuracy is typical without taxonomy discipline — the product is the **taxonomy + HITL**, not the model glamour.

---

### 2 — ACTIVIST

**Lens:** Who gets hurt when routing fails?

**RESEARCH_RESULT.md** is decisive: misclassification can route **homelessness-related** inquiries toward **enforcement** workflows; **DV** and **immigration** contexts need human escalation, not persistent chat logs. NYC MyCity showed **illegal policy advice** at scale. RVA Help must ship **domain blocklists**, **minimal PII retention**, and **plain disclosure** that the user is interacting with AI (AR 2.13). A slick UX without these is actively dangerous.

---

### 3 — CITIZEN

**Lens:** Does this reduce my confusion or add a middleman?

The **structured review before submit** and **plain-language status** directly address “what did I send?” and “what happens next?” — high user value *if* trustworthy. Concerns: **another account/app**, **trust in AI labels**, and whether I still end up on the same broken category list. **Top-3 with links to official channels** beats a black-box “we filed it for you” story unless integration is real.

---

### 4 — MAYOR

**Lens:** MAP alignment, owner, 90-day pilot realism.

**Primary pillar:** Thriving City Hall — resident access to services. **Owner candidates:** DIT (AR 2.13 governance), CSR/311 operations leadership — not “the City.” **Decision: Refine.** Political risk is **front-page** if the bot misadvises or misroutes like national failures. **Duplicate check:** rva.gov navigation, RVA311 channels, and future vendor roadmap must be mapped before claiming novelty.

**Pilot path:** Start as **external referral layer** (correct form/phone/deep link) with performance metrics; **no** claim of replacing AvePoint until partnership exists.

---

### 5 — ARCHITECT

**Lens:** Tech stack truth.

**RICHMOND_TECH_STACK_2026.md:** **RVA 311 (AvePoint / Dynamics 365) has no public API** — read/write integration is a **structural wall** without DIT partnership. Legacy Socrata 311 data is **dead (2013–2015)** — not a training corpus for current taxonomy. **Help1RVA/findhelp** is partner/paid API, not a free join for social-service discovery.

**Implication:** A judge-ready demo must **label integration honestly** (simulated queue, manual export, or deep-link handoff). **Feasible weekend shape:** static/RAG over **rva.gov** + **top-3 classifier** + links to **RVA311.com** — matches INDEX **H4** (“No-API navigator”).

**AR 2.13:** Chatbots are an acceptable use case **with** DIT review, transparency, and human oversight — budget **governance time**, not only model time.

---

### 6 — FRONTLINER

**Lens:** 311 and dispatch reality.

Staff benefit from **structured category + transcript** *if* it arrives **inside** their system. A parallel “ticket” in a hackathon app **duplicates** work unless integrated — otherwise CSR still re-keys or ignores it. **Internal notes vs. resident view** is good product thinking and matches real workflow needs.

**Ask:** Is the prototype **training data** aligned to **live** RVA311 categories and Cityworks routing, or a simplified demo taxonomy? Mismatch recreates misrouting at the handoff.

---

### 7 — FUNDER

**Lens:** Sustain, scale, evidence.

**Total cost of ownership** (RESEARCH_RESULT): labeling, taxonomy curation, MLOps, red-teaming, multilingual QA — often **exceeds** API spend. **Go/no-go metrics** (macro-F1, Reliable Accuracy, disparity guardrails) should exist **before** scaling, not after bad press.

**Sustainability:** Civic org or vendor pilot with **written MOU** beats a student repo without owner. **Moonshot** framing is weak unless dual-intent + RAG + evaluation harness are **proven**, not scripted demos.

---

## Tensions (3)

| # | Tension | Resolution (condensed consensus) |
|---|---------|----------------------------------|
| **1** | **IDEA.md** promises end-to-end tickets, activity logs, and staff views vs. **no 311 API** | Treat **full lifecycle** as **Phase 2+** contingent on City partnership. **Phase 1** = referral, top-3, and transparency. Demo must **state boundaries** (I4 credibility). |
| **2** | **Wow-factor LLM chat** vs. **INNOVATION** Pattern A (lighter classifier, top-3, resident chooses) | Pattern A is **safer and more accurate** for a weekend; LLM can **assist** copyediting and RAG, not sole router. Judges reward **honest guardrails** over **confident misrouting**. |
| **3** | **Strong accessibility** (Spanish, contrast, simple language) vs. **translation/routing quality** risks for LEP users | Keep accessibility; add **human escalation** and **disclaimers** for non-English; monitor disparity (San Jose–style inventory discipline). |

---

## Fatal Flaw Test

| Test | Result | Notes |
|------|--------|--------|
| Structural wall (311 API) | **Fail for “integrated product”** | No public AvePoint path; full vision **blocked** without partnership. |
| Same wall for “referral MVP” | **Pass** | Deep links + education + top-3 **do not** require 311 API. |
| Harm / wrong routing | **Conditional** | High risk if auto-routes sensitive topics; **mitigated** by blocklists, top-3, escalation, no legal/policy free-chat. |
| Data for training | **Gap** | Current open 311 history not usable; manual curation or City data share **required** for serious ML. |
| Governance | **Gap** | AR 2.13 **requires** DIT path for real deployment. |

**Verdict on fatal flaw:** No single flaw kills the **narrow** interpretation (referral + structured intake + safety UX). The **fatal** interpretation is presenting **live City integration** or **unsupervised AI routing** as production-ready — that collides with **wall + harm evidence**.

---

## Consensus Verdict

### **REFINE — pilot-shaped, wall-aware**

Ship the **problem framing** (clarity, routing, status literacy) and **accessibility** as strengths. **Tighten scope** to what the stack allows: **top-3 + official handoff + AI disclosure + sensitive-topic escalation**. Pursue **DIT** conversation early for any path beyond referral. Align narrative with **F2/F5** and **G1/G5** from pillar research — wizard-first, risk-managed, not “magic inbox.”

---

## Rubric — Consensus (post-roundtable)

| Category | Score (1–5) | One-line rationale |
|----------|:-----------:|--------------------|
| **Impact** | **4** | Real PS1 pain (misrouting, vague requests); scale tied to adoption and taxonomy fit. |
| **Feasibility** | **3** | Referral MVP is buildable; **full** ticket/staff integration blocked by 311 wall + governance. |
| **User Value** | **4** | High if residents get clarity and correct door; low if app is orphaned or non-integrated. |
| **Execution** | **4** | Strong student demo potential; dock if integration claims overshoot reality. |
| **Innovation** | **3** | AI 311 is crowded; **confidence + dual-intent + top-3** (ERRC) is the differentiated story. |
| **Equity** | **3** | Accessibility features help; AI + routing **disproportionate harm** risk keeps score from top band without proven guardrails. |

### Award scores (hackathon weights)

**Mayor’s Choice** — Impact×5, Feasibility×5, User Value×4, Execution×3, Equity×3, Innovation×1  
→ 20 + 15 + 16 + 12 + 9 + 3 = **75**

**Pillar Award** — Impact×5, User Value×4, Feasibility×3, Innovation×3, Execution×3, Equity×3  
→ 20 + 16 + 9 + 9 + 12 + 9 = **75**

**Moonshot Award** — Innovation×5, Impact×4, User Value×3, Equity×3, Feasibility×2, Execution×2  
→ 15 + 16 + 12 + 9 + 6 + 8 = **66**

---

## Top 3 Recommendations

1. **Scope lock for credibility:** Position as **311 preparation and routing assistant** with **official submit** via rva.gov/RVA311 — not a shadow CRM.  
2. **Safety package in demo:** Visible **AI disclosure**, **top-3 categories**, **sensitive-topic fast-lift to human**, and **citations** for informational answers (RAG).  
3. **Owner conversation:** One-pager for **DIT** on AR 2.13 fit and for **CSR** on category alignment — separates hackathon win from **adoption**.

---

## Unresolved

- Live taxonomy export or screen-scrape policy (if any) for classifier alignment.  
- Whether City would bless **external** intake that prepopulates (vs. only links) official forms.  
- Retention policy for **conversation transcripts** if ever integrated.

---

*Condensed roundtable: 7 personas + 3 tensions + fatal-flaw framing + verdict + scores. No separate Implementation Reality tier in source IDEA.md; survivability driven by 311 wall + governance + data gaps per tech stack and research.*
