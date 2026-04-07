# Roundtable (Condensed): What's On RVA

**Initiated:** 2026-04-02  
**Slug:** `whats-on-rva`  
**Pillar:** A City That Tells Its Stories (Arts & Cultural Event Discovery)  
**Problem statement:** PS1 — Arts & Cultural Event Discovery  
**Source paths:** `2026-annual-hackathon/ideas/city-storytelling/whats-on-rva/`, `pillar-repos/pillar-city-storytelling/research/INDEX.md`, `RICHMOND_TECH_STACK_2026.md`

## Input materials

| File | Status |
|------|--------|
| IDEA.md | Loaded |
| RESEARCH_RESULT.md | Loaded |
| INNOVATION_ANALYSIS.md | Loaded |
| RICHMOND_TECH_STACK_2026.md | Loaded (CultureWorks = partial/partnership; AR 2.13 AI governance) |
| Pillar research INDEX.md | Loaded (cross-refs: C1–C2 aggregators, E4 failures, G5 guardrails, H2 MVP) |

---

## Seven persona simulations (condensed)

Each persona: 3–5 sentences. Web grounding noted where used.

### 1 — Arts-curious resident (Fan / weekend planner)

Fragmentation is real: CultureWorks, Visit Richmond VA arts listings, Eventbrite, RVA.Events-style boards, and social feeds all overlap but none feels like “ask once, get a trustworthy plan.” A no-login browse plus optional account matches how people actually decide to go out. Web: multiple Richmond aggregators exist (e.g. CultureWorks calendar, visitrichmondva.com arts events, rva.events-style boards), so the product must win on **experience and completeness**, not on being the only listing site.

### 2 — Grassroots venue / organizer

Organizers already post in many places; they will not want another **mandatory** channel. Value is upside if What's On RVA pulls from CultureWorks (and similar) without forcing duplicate data entry—aligned with the team’s “not replacing Instagram” stance. Risk: small venues with weak metadata get buried unless equity-tuning and clear attribution are explicit.

### 3 — CultureWorks / nonprofit ecosystem partner

Tech stack lists CultureWorks/Localist with ICS, RSS, JSON API and **partnership permission recommended for bulk**—so scale and politeness matter. A hackathon demo can use thin slices; sustained operation needs a named relationship and respect for rate guidance (<1 req/s). This idea is a natural **downstream consumer** of the same feeds called out in Bundle 7 (per INNOVATION_ANALYSIS), not a competing calendar of record.

### 4 — City DIT / communications (AI governance)

Administrative Regulation 2.13 (June 2025) allows chatbots/customer engagement with DIT oversight, transparency to the public, and minimized collection of personal data. A public “AI chat” must disclose AI use, avoid inventing events, and handle optional accounts with clear consent—otherwise reputational and compliance risk lands on the City if this is ever branded as civic infrastructure.

### 5 — Equity & digital access advocate

Neighborhood stories and map views can counter **downtown-first** bias if editorial rules and metrics are designed deliberately (pillar research stresses representational bias and inclusion). Phone-first users need fast mobile performance; multilingual value is high for Richmond and is a proven DMO pattern (GuideGeek-style deployments cited in RESEARCH_RESULT), but only if languages are actually supported—not a single-language chat pasted on top.

### 6 — Regional tourism / DMO perspective

DMO AI assistants (e.g. GuideGeek-powered Ellis/Emerald patterns in RESEARCH_RESULT) skew **visitor and planner** use cases; What’s On RVA’s pitch as **resident-first** cultural concierge is differentiated but harder to fund than tourism ROI. If Richmond Region Tourism sees economic narrative value (dispersal, night-time economy), partnership is plausible; without it, the product stays civic/community-hosted.

### 7 — Maintainer / skeptic (sustainability)

National pattern: aggregators die from **stale data, ghost events, and unfunded curation** (pillar index E4 theme; ICS/sync issues are a known class of failure in calendar integrations). LLM layers add **hallucination** risk—INNOVATION_ANALYSIS correctly flags “fake event” as trust-destroying. Verdict hinge: strict RAG-to-verified corpus, staleness signals, and a clear ops owner after demo day.

**Web searches used (representative):** Richmond arts discovery landscape; CultureWorks calendar presence; GuideGeek/DMO AI chat pattern; generic ICS/ghost-event maintenance risks (illustrative of sync/curation failure class).

---

## Top 3 tensions and resolutions

| Tension | Resolution |
|--------|------------|
| **Differentiation vs. duplication** — RVA already has CultureWorks, DMO calendars, Eventbrite, and indie boards. | Position as **conversational + map + neighborhood narrative layer** over verified feeds; measure “time-to-plan” and coverage, not raw URL uniqueness. |
| **AI value vs. AI trust** — Chat is compelling for demos; wrong answers are worse than no tool. | **RAG only from verified events**; visible “AI” disclosure (AR 2.13); never fabricate listings; optional human/editorial override path. |
| **Open browse vs. personalization** — Accounts and preferences improve relevance but raise privacy and equity questions. | Keep **no-login core**; minimal data for optional accounts; equity tuning as **policy** (boost underrepresented areas), not only algorithmic defaults. |

---

## Fatal flaw test (5)

| # | Test | Result |
|---|------|--------|
| 1 | **Structural wall?** — Does it require a blocked City API (311, EnerGov, etc.)? | **Pass** — Does not depend on closed City systems; depends on **nonprofit/partner feeds** (CultureWorks) and public/commercial event sources. |
| 2 | **Problem falsifiability?** — Is fragmentation a real user pain? | **Pass** — Consistent with pillar research and local multi-channel reality. |
| 3 | **Catastrophic failure mode?** — Could a bad output cause serious harm? | **Conditional pass** — Wrong event/time/venue damages **trust** and venue relationships; mitigated by corpus-bound generation and staleness handling. **Fail** if shipped as unconstrained LLM. |
| 4 | **Owner after hackathon?** | **Conditional** — Best-fit owners: CultureWorks coalition, civic nonprofit, or DMO-sponsored pilot. **Without** an owner, classic **ghost calendar** risk (E4 pattern). |
| 5 | **Sustainability of data pipeline?** | **Conditional** — Feeds + rate limits + legal/attribution need ongoing care. **Pass** if MVP scope is honest (one feed + strict guardrails) and expansion is phased. |

**Overall fatal-flaw posture:** No single hard **City IT wall**; the fatal zone is **trust + maintenance** if AI or aggregation outruns governance.

---

## Verdict

**Proceed as a partner-aligned pilot with strict AI and data boundaries.** Strong fit for Pillar 7 (discovery + place-based stories). Not Tier-S “ship alone” without a sustaining host for feeds and curation; strong hackathon and follow-on narrative if demo proves RAG fidelity and clear differentiation from existing calendars.

---

## Category scores (1–5) and award-weighted totals

| Category | Score | Notes |
|----------|:-----:|-------|
| Impact | 4 | Real visibility gap; MAP-aligned; economic story possible but not proven in MVP. |
| Feasibility | 3 | Proven stack patterns; CultureWorks access and ongoing ops are the gating factors. |
| User Value | 4 | Clear weekend planner and resident value; optional depth via accounts. |
| Execution | 4 | Highly demoable (chat + filters + map) if data is wired. |
| Innovation | 3 | DMO-style LLM discovery exists nationally; resident + neighborhood framing is meaningful but not wholly novel. |
| Equity & Inclusion | 4 | Neighborhood stories and tuning are on-spec; must be validated in metrics and design, not slides. |

**Weighted totals (same formulas as RVA Hacks judging materials):**

- **Mayor’s Choice** — weights: Impact×5, Feasibility×5, User Value×4, Execution×3, Equity×3, Innovation×1  
  **MC = 4×5 + 3×5 + 4×4 + 4×3 + 4×3 + 3×1 = 78**

- **Pillar Award (Pillar 7)** — weights: Impact×5, User Value×4, Feasibility×3, Innovation×3, Execution×3, Equity×3  
  **PA = 4×5 + 4×4 + 3×3 + 3×3 + 4×3 + 4×3 = 78**

- **Moonshot** — weights: Innovation×5, Impact×4, User Value×3, Equity×3, Feasibility×2, Execution×2  
  **MS = 3×5 + 4×4 + 4×3 + 4×3 + 3×2 + 4×2 = 69**

---

## One-sentence summary

What's On RVA is a credible **resident-facing discovery layer**—unified browse, map, neighborhood context, and optional AI—whose success hinges on **verified feed partnerships**, **AR 2.13–aligned AI guardrails**, and a **named post-demo curator**, not on replacing existing calendars.
