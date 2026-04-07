# Roundtable: Text 311 (CONDENSED)

**Initiated:** 2026-04-02  
**Idea:** Text 311  
**Pillar:** A Thriving City Hall  
**Problem Statement:** Resident Service Navigation — reach residents who cannot use app/web/call-hours-limited 311  
**Source:** Demo (Byrd Park Geese)  
**Implementation Reality:** **10 / 25 — Tier C** ([IMPLEMENTATION_REALITY_SYNTHESIS.md](../../2026-annual-hackathon/ideas/IMPLEMENTATION_REALITY_SYNTHESIS.md) — overall rank **#67** of 73)

---

## Input Materials

| File | Status |
|------|--------|
| IDEA.md | Loaded — team narrative, demo walkthrough, architecture claims |
| RESEARCH_RESULT.md | Loaded — NYC/Chicago/Denver SMS 311, equity caveats, integration models |
| INNOVATION_ANALYSIS.md | Loaded — ERRC grid, Pattern A vs B, assumption map |
| RICHMOND_TECH_STACK_2026.md | Loaded — RVA 311 (AvePoint/Dynamics), **no public API**; legacy 311 Socrata dead |
| pillar-repos/.../research/INDEX.md | Loaded — corpus pointers: C1/D1/H4/H2/G1/G5 (311 navigation, data walls, MVP boundaries, wrong-routing risks) |

**Note:** IDEA.md does not include formal hackathon rubric scores; estimated scores below are derived from demo quality, research, and implementation review.

---

## Phase 1 — Divergence (three personas)

### 1 — INNOVATOR

**Reframe:** The product is not “SMS replaces 311” but an **omnichannel accessibility wedge** for cellular-only, low-literacy, and LEP residents—if and only if intake is **structured** (ChiTEXT-style menus) and **two-way** (tracking + status), not intake-only chat.

**Leverage:** Richmond’s constraint (no 311 API) forces a **Pattern A** MVP: Twilio state machine → handoff (email/CSV) → explicit SLA with 311 ops—not a fake “live Dynamics” story.

**Insight:** Free-text + LLM demo is flashier than deterministic trees, but research ranks **wizard-first** higher on safety and auditability; AI belongs at the edges (language, clarification), not unbounded classification.

**Temporal:** **Appreciating** if AvePoint/DIT ever exposes intake/read endpoints; **depreciating** if the City standardizes on app-only while SMS stays uncontracted.

---

### 2 — ACTIVIST

**Ecosystem:** NYC (hundreds of thousands of texts/year), Chicago ChiTEXT (structured, since 2011), Denver (Citibot + integration), Philadelphia Salesforce path—**this pattern exists**; Richmond is late, not novel.

**Decision tree:** **Adapt**, not greenfield. Study **New Orleans** textable 311 (2025) and Chicago’s category model; **Partner** model fits: civic org or nonprofit runs Twilio stack; City endorses and accepts formal intake path.

**Ownership:** Natural City owner is **311 / Citizen Service & Response + DIT** for production; pilot can sit outside City if handoff is honest and volume-capped.

**Vendor wall:** AvePoint integration is a **collective** problem (contract + DIT)—coalition pressure beats a hackathon team negotiating alone.

---

### 3 — CITIZEN (three archetypes)

| Archetype | Visibility / value | Trust / risk |
|-----------|-------------------|--------------|
| **Engaged Resident** | Will find SMS number if marketed | May prefer app; worries about AI mistakes |
| **Service User** | High value if it’s faster than hold times | Needs **real** ticket # and status—intake-only feels like a black hole |
| **Invisible Resident** | **Highest fit** (any phone, no broadband) | Research: digital channels can **widen** gaps without outreach + languages; trust of “government number” varies—community org proxy may be needed |

**Exclusion:** Residents without SMS-capable plans, those who fear surveillance, and anyone misrouted by NLP bear disproportionate harm—**confidence thresholds + human path** (per shared gap analysis) are not optional.

---

## Phase 2 — Convergence (four personas)

### 4 — MAYOR

**MAP:** Primary — **Thriving City Hall** (service access); KPIs: first-contact resolution, channel equity, duplicate reduction (if measurement honest).

**Decision:** **Refine** — equity story is **Advance**-worthy; **implementation story** is not yet credible for a City pilot without a named integration path and owner sign-off.

**Owner:** **Citizen Service & Response (311)** with **DIT** for AI (AR 2.13) and telecom; unclear who accepts SMS-derived tickets today.

**90-day test:** Structured pilot + written MOU on how requests enter AvePoint + bilingual script + volume cap—not “full AI integration” theater.

---

### 5 — ARCHITECT

**Walls hit:** **311 / AvePoint** — core. Demo claims **“up-to-the-minute RVA 311 data”** and **submit into existing RVA 311**; [RICHMOND_TECH_STACK_2026.md](../../2026-annual-hackathon/ideas/RICHMOND_TECH_STACK_2026.md) states **no public API**; open 311 Socrata is **legacy/dead**.

**Integration complexity:** **Blocked** for *as-demonstrated* read/write; **Medium** for degraded path (webhook → queue → manual/CSV/email per RESEARCH_RESULT cautions).

**Security / policy:** PII in SMS; OpenAI use triggers **AR 2.13** review (transparency, minimization).

**Recommendation:** **Don’t** ship the architecture **as pitched**; **Adapt** to documented workaround with migration trigger to real API (per innovation analysis).

**TCO:** Twilio + hosting modest; **cost is institutional**—staff time, dedupe, misroutes, vendor negotiation.

---

### 6 — FRONTLINER

**311 staff:** Email/CSV ingress adds **latency and triage load**; unclear category mapping to AvePoint taxonomy → **mislabeled tickets** risk. Without staff-side demo (lifecycle_review gap), adoption **Maybe**.

**Community workers:** Could text on behalf of residents (**solution_ideas** proxy model)—**Use** if training and liability are clear.

**Failure modes:** Confident wrong routing (NYC chatbot failure pattern); duplicate “detection” wrong without authoritative open data; after-hours volume with no ops commitment.

**Verdict:** **Maybe** for city staff until workflow is shown end-to-end; **Use** for org-mediated reporting with simple scripts.

---

### 7 — FUNDER

**Year 1:** Twilio + A2P 10DLC + small cloud app—**thousands of dollars** at pilot scale; AI usage variable.

**Year 3:** Needs **operational budget** for messaging, monitoring, and integration maintenance—not grant-only.

**Sustainability:** **Medium**—high cliff if City never funds formal channel; **cost of inaction** is continued exclusion and duplicate call volume (national 15–30% duplicate context).

**Cheapest honest MVP:** Keyword menu + log + **agreed** handoff—no synthetic “live 311” claims.

---

## Tension Map (condensed)

| Tension | How it shows up for Text 311 |
|---------|-------------------------------|
| **Innovator vs. Architect** | AI conversational UX vs. AvePoint wall and auditability |
| **Mayor vs. Activist** | City must own production; nonprofit may pilot faster |
| **Frontliner vs. Innovator** | Staff need clean categories; innovator wants flexible NLP |
| **Citizen vs. System** | Residents want tracking; system may only accept batch handoff |
| **Funder vs. Innovator** | Full two-way CRM integration is expensive; menu MVP is cheap |
| **Architect vs. Frontliner** | “Elegant” webhook vs. messy email inbox reality |
| **Citizen vs. Activist** | Individual SMS ease vs. structural need for City vendor access |

---

## Fatal Flaw Test

| Criterion | Result | Notes |
|-----------|--------|--------|
| No identifiable owner? | **PASS** (conditional) | 311 + DIT plausible; not signed in demo |
| Structural wall, no workaround? | **FAIL** *as demo claims* | Live read/write + dedupe against current 311 **not** available publicly; **workaround exists** only for **degraded** intake (email/CSV), not for claimed real-time integration |
| Net negative for frontline? | **PASS** (borderline) | Could become negative at scale without taxonomy alignment |
| No funding path beyond pilot? | **PASS** | Twilio/AI fundable; needs City ops line to persist |
| Harms Invisible Resident? | **PASS** (monitor) | Intent is inclusive; NLP + equity paradox requires design discipline |

**Synthesis:** Not a clean **KILL** for SMS 311 in principle; **KILL** the **integrity** of the demo’s integration story. **REFINE** until integration claims match reality or the product explicitly ships as a **bounded pilot** with handoff.

---

## Final Verdict

**REFINE** (strong **reject** for uncorrected “direct Dynamics / live dedupe” positioning).

**Must change before City or funder trust:**

1. **Honest data path** — State what is actually queried for dedupe; if not authoritative 311 API, say so and scope dedupe to what exists or drop the claim.  
2. **Structured intake** — Align categories with Richmond’s service taxonomy; add guardrails for emergencies and low-confidence AI.  
3. **Two-way design** — Plan acknowledgments + status (even if v1 is “we received your handoff”).  
4. **Staff workflow evidence** — Show what lands in 311 operations.  
5. **Governance** — AR 2.13 path for AI; PII retention policy.

**Revisit trigger:** AvePoint/DIT exposes documented intake (and ideally read) APIs — per synthesis, this **unlocks** the idea’s full score ([IMPLEMENTATION_REALITY_SYNTHESIS.md](../../2026-annual-hackathon/ideas/IMPLEMENTATION_REALITY_SYNTHESIS.md)).

**Temporal:** **Appreciating** if 311 API opens; **stable** wall until then.

---

## Hackathon Rubric (estimated — IDEA.md has no formal table)

Assumed 1–5 scores: **Impact 4**, **Feasibility 2**, **User Value 4**, **Execution 4**, **Innovation 3**, **Equity 5**

| Award | Weighted total (approx.) |
|-------|---------------------------|
| **Pillar (Thriving City Hall)** | **88** |
| **Mayor’s Choice** | **76** |
| **Moonshot** | **70** |

*Weights per [CLAUDE.md / event rubric](../../CLAUDE.md): Pillar — Impact×5, User Value×4, Feasibility×3, Innovation×3, Execution×3, Equity×3; Mayor’s Choice — Impact×5, Feasibility×5, User Value×4, Execution×3, Equity×3, Innovation×1; Moonshot — Innovation×5, Impact×4, User Value×3, Equity×3, Feasibility×2, Execution×2.*

---

## Status

- **Phase:** COMPLETE (condensed single-pass synthesis)  
- **Verdict:** **REFINE** — equity-strong channel; **blocked** on honest 311 integration / degraded pilot path  
- **Implementation Reality:** Tier **C** (10/25) — revisit after 311 intake API  
