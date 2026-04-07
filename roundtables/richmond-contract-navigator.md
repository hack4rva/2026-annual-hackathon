# Roundtable (Condensed): Richmond Contract Navigator

**Initiated:** 2026-04-02  
**Idea:** Richmond Contract Navigator  
**Pillar:** A Thriving Economy — PS1 MBE Contracting Discovery  
**Source:** Demo (Team Silverlight, Mia Wan)  
**Implementation Reality:** **19/25 — Tier A** (1–2 solvable blockers)  
**Synthesis rank:** #25 of 73 (`IMPLEMENTATION_REALITY_SYNTHESIS.md`)

## Input materials

| File | Status |
|------|--------|
| `IDEA.md` | Loaded |
| `RESEARCH_RESULT.md` | Loaded — vendor-matching / build-vs-buy / governance |
| `INNOVATION_ANALYSIS.md` | Loaded — ERRC, assumptions, problem scoping 21/25 |
| `lifecycle_review.md` | Referenced — rubric + blockers |
| `RICHMOND_TECH_STACK_2026.md` | Loaded |
| `pillar-repos/pillar-thriving-economy/research/INDEX.md` | Loaded — corpus A–I; anchor refs: A1, B1, D1/D2, E1/E4, F2, G3/G4, H2 |

## Tech stack touchpoints

- **Uses well:** Socrata SODA `xqn7-jvv2` (City Contracts, ~monthly), commodity hosting, optional email (Twilio-class).
- **Friction:** **OpenGov procurement** (`procurement.opengov.com/portal/rva`) — public browse, **no documented bulk API** → live solicitation matching and “new opportunity” alerts are not fully supported by open data alone.
- **Wall (adjacent):** **B2GNow / OMBD vendor directory** — no API; certified MBE directory joins and staff-side proactive matching stay manual or partnership-gated.
- **Policy:** **AR 2.13** — LLM use permitted with DIT oversight, transparency to users, human review for high-risk generative outputs.

---

## Seven personas (single pass)

### 1 — MAYOR (Decider)

**MAP fit:** Pillar 4 — lowers jargon and navigation barriers for minority-owned and first-time vendors. Plausible owners: **OMBD** (outreach, diversity participation) and **Department of Procurement Services** (solicitations, vendor qualification); joint stewardship is realistic but neither has a committed product owner for a third-party AI tool today. **Refine:** pilot only if scope, data source, and disclaimers are aligned with what the City can stand behind publicly.

### 2 — INNOVATOR (Expander)

**ERRC read:** Eliminate multi-source federal/state scrapers (SamSearch-class territory). Reduce opaque “magic” AI; **raise** explainability (“Why it matched”). **Create** Richmond-specific layer (historical award patterns, department behavior) that national aggregators do not own. **Risk:** If Socrata descriptions are thin, semantic search **collapses to a dressed-up NAICS filter** — validates Assumption 1 in `INNOVATION_ANALYSIS.md` first.

### 3 — FRONTLINER (Operator)

Procurement and OMBD staff already do informal matching and clinics; a vendor-facing matcher **does not replace** BidNet/OpenGov workflow or iSupplier. Highest utility is **education + triage**: glossary, readiness framing, links to authoritative solicitation pages — not a substitute for reading the IFB. Staff will resist any tool that implies bid eligibility without document-grounded checklists.

### 4 — CITIZEN (Recipient)

**Job 1 (MBE discovery):** Plain-language in and plain-language “why” out directly targets the “trusted front door” gap (`A5`, `lifecycle_review.md`). **Job 2 (first-time):** General roadmap helps; the **five-step registration sequence** (BPOL → SWaM → OMBD → BidNet → iSupplier) is still fragmented elsewhere. **Job 3 (OMBD proactive outreach):** not served — no staff dashboard, B2GNow blocks automated vendor directory joins.

### 5 — ARCHITECT (System guardian)

**Tier A** is right: read-only public API, low integration surface. **Watch:** LLM-generated readiness lines that are not grounded in solicitation PDFs can **hallucinate** bonding or insurance requirements — architectural fix is retrieval from source docs or clearly labeled “general guidance only.” **AI governance:** fact sheet, logging, and DIT review path should be designed in, not bolted on.

### 6 — FUNDER (Resource realist)

Weekend-to-pilot is credible for **semantic search + explanations + glossary** on a defined corpus. **Ongoing:** embedding/API cost, prompt tuning, monitoring email infra. **Buy-vs-build research** (`RESEARCH_RESULT.md`): cities buy OpenGov/Bonfire/Hazel-class platforms; this prototype is defensible as **free, transparent, local** — not as a full procurement suite.

### 7 — ACTIVIST (Universe expander)

**Ecosystem:** Seattle-style gains (e.g. participation lifts) are **multi-factor** (portal + policy + outreach), not provably from AI matching alone; no audited precision/recall for municipal matchers. **Scale pattern:** configurable Socrata consumer could transfer to other cities with similar datasets. **Civic accountability:** links to underlying data align with open-government norms; must not over-claim outcomes without measurement (`RESEARCH_RESULT.md` measurement blueprint).

---

## Tensions (resolved briefly)

| # | Tension | Resolution |
|---|---------|------------|
| **T1** | **Novelty vs. prior art** — vendor-side AI (SamSearch, VendorLine, OpenGov AI features) already markets “smart matching.” | **Differentiator = free + Richmond corpus + explicit match reasoning**, not generic NLP. Innovation score stays **moderate** unless evidence shows superior retrieval on City data. |
| **T2** | **Trust vs. evidence** — users may rely on AI for bid/no-bid; no public F1 for these systems. | Treat as **decision support**, publish limitations, run small labeled evaluation (precision@K) with OMBD/procurement before claiming “Strong match.” |
| **T3** | **Equity intent vs. product gaps** — English-only, no documented bias mitigation, mobile/privacy not addressed (`G3`, `G4`). | **Equity capped** until Spanish (minimum), data handling disclosure, and matching guardrails (e.g. diversified retrieval, HITL on high-stakes fields) are in scope. |

---

## Fatal flaw test

| Test | Result |
|------|--------|
| **Product truth** | **Fail if unaddressed:** Positioning as **live opportunity discovery** while the feasible open path is **Socrata awarded contracts** + manual OpenGov browsing misstates what users can act on (`lifecycle_review.md`, `IMPLEMENTATION_REALITY_REVIEW.md`). That is a **trust and purpose** failure, not a missing library. |
| **Mitigation** | Rename scope to **“understand what the City buys / find analogous awards / prep to bid”**, add prominent **data-source and date** labels, and pursue **structured active solicitation feed** with Procurement as a Phase 2 gate. |
| **Other gates** | B2GNow: limits certified MBE features. Hallucinated checklists: medium harm risk — document grounding or disclaimers required. |

**Verdict:** No hard **technical** fatal flaw; **one strategic fatal flaw** if marketing claims outrun data (historical vs. open solicitations). Fixable by **scope honesty + phased data access**.

---

## Consensus verdict

**REFINE SCOPE, THEN PILOT** — Strong hackathon demo and Tier A survivability; ship or scale only with (1) explicit data contract (what corpus, what freshness), (2) validation of match quality, (3) equity and governance minimums, (4) solicitation feed path or honest UX without it.

---

## Rubric consensus (1–5)

| Category | Score | Note |
|----------|:-----:|------|
| Impact | **4** | Real MBE/jargon barrier; damped if users cannot reach **open** bids from the tool alone. |
| Feasibility | **4** | Public API path exists; LLM + DIT review + OpenGov gap knocks a point from “effortless.” |
| User Value | **4** | High for literacy + triage; incomplete for end-to-end “I can bid tomorrow” without feed. |
| Execution | **5** | End-to-end prototype, real scenario, multiple surfaces (glossary, roadmap, transparency). |
| Innovation | **3** | Explainable local layer is differentiated; core “AI match” pattern is crowded commercially. |
| Equity & Inclusion | **3** | Right population; gaps on language, bias mitigation, privacy disclosure. |

### Award scores (weighted sums)

**Mayor's Choice:** (4×5)+(4×5)+(4×4)+(5×3)+(3×3)+(3×1) = **83**  
**Pillar Award (Economy):** (4×5)+(4×4)+(4×3)+(3×3)+(5×3)+(3×3) = **81**  
**Moonshot:** (3×5)+(4×4)+(4×3)+(3×3)+(4×2)+(5×2) = **70**

---

## Top recommendations

1. **Clarify corpus in UI and pitch:** awarded contracts vs. active IFBs; stale date; link to OpenGov for “bid here.”
2. **Ground or fence checklists** against real solicitation text; otherwise label as generic education only.
3. **Pilot with OMBD:** labeled test set + precision@K; parallel track for Spanish output and privacy notice.
4. **Phase 2:** solicitation export MOU or OpenGov integration discussion with Procurement — unlocks alerts and true opportunity matching.

---

*Condensed roundtable. Seven personas + three tensions + fatal-flaw framing + verdict + scores. Full multi-turn log not generated.*
