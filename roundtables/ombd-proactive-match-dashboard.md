# Roundtable (Condensed): OMBD Proactive Match Dashboard

**Initiated:** 2026-04-02  
**Idea:** OMBD Proactive Match Dashboard  
**Pillar:** A Thriving Economy  
**Problem Statement:** PS1 — MBE Contracting Discovery  
**Source:** NEW (post-event)  
**Implementation Reality:** **15/25 — Tier B** (Promising; meaningful investment / partnership needed)  
**Overall Rank:** #44 of 73 (per `IMPLEMENTATION_REALITY_SYNTHESIS.md`)

## Input Materials

| File | Status |
|------|--------|
| `IDEA.md` | Loaded |
| `RESEARCH_RESULT.md` | Loaded |
| `INNOVATION_ANALYSIS.md` | Loaded |
| `RICHMOND_TECH_STACK_2026.md` | Loaded |
| `pillar-repos/pillar-thriving-economy/research/INDEX.md` | Loaded — corpus maps to A1, B1, D1, F2, G4, H2, H4 |

---

## Seven Personas (Condensed)

### 1 — MAYOR (Decider)

- **MAP fit:** Strong — Economy pillar, PS1 (minority-owned businesses finding City contracting opportunities).
- **Metric that could move:** MBE bid participation rate, dollars to certified firms, time-to-discovery of relevant solicitations (if measured).
- **Owner:** **Office of Minority Business Development (OMBD)** with **Department of Procurement Services** as co-stakeholder for solicitation timing and commodity codes.
- **Decision:** **Refine** — Political story is good; execution needs a named OMBD champion and clarity that this *complements* B2Gnow, not competes with it.

### 2 — INNOVATOR (Expander)

- **Reframe:** The product is not “a better directory” but **proactive, code-precise matching** (5-digit NIGP/NAICS), aligned with NYC Comptroller–style **curated shortlists** instead of listserv noise.
- **Leverage inside constraints:** Public Socrata contracts (`xqn7-jvv2`) + **self-reported vendor profiles** as a **shadow layer** until OMBD can supply exports.
- **Stretch paths:** Staff shortlist generator; optional accountability views if diversity fields exist in open data (often weak).

### 3 — FRONTLINER (Operator)

- **OMBD staff:** **Maybe** — Adds a parallel system unless workflows stay “export → review → outreach” inside tools they already use. Risk: “another dashboard” if matches are wrong (false positives erode trust fast).
- **MBE vendor:** **Maybe** — Value is high *if* matches are tight and deadlines are real; **Maybe→No** if they must re-enter data that already lives in B2Gnow.
- **Failure mode:** Broad codes → same alert fatigue BidNet and peers warn about; bad matches teach vendors to ignore the tool.

### 4 — CITIZEN (Recipient of value)

- **Engaged MBE / service-oriented vendor:** Direct visibility; trusts tool if rationale (why this contract) is transparent.
- **Invisible / low-digital:** Largely **indirect exclusion** — browser-based profile + English-heavy procurement language; not a fatal flaw for the *stated* user (certified firms bidding) but equity guardrails (plain language, office-hours support) matter for **Equity** scoring, not necessarily for killing the idea.

### 5 — ARCHITECT (System guardian)

- **Structural wall:** **B2GNow** (`richmondombd.diversitycompliance.com`) — **no public API** per tech stack; vendor truth data is vendor-gated.
- **Workaround (documented in synthesis):** Scheduled **CSV export** from OMBD / vendor negotiation — even monthly unlocks core matching.
- **Integration complexity:** **Medium** as a City-integrated product; **Low** as a civic standalone on public data + voluntary profiles.
- **Recommendation:** **Adapt** — Ship thin external MVP to prove match quality; pair with OMBD for export path. **AR 2.13:** If AI matching is added later, plan for DIT governance.

### 6 — FUNDER (Resource realist)

- **Year 1:** Near **zero** for static/open-data MVP (hosting only). **Higher** if OMBD staff time, export automation, or integration.
- **Year 3:** Sustainability **Medium** — Without a budget line or nonprofit operator, “free” tools stall on data freshness and trust.
- **Negative business case:** Staff hours lost to broad outreach and vendors missing fit-for-purpose bids.

### 7 — ACTIVIST (Universe expander)

- **Prior art:** B2Gnow itself (outreach modules), DemandStar / PlanetBids / OpenGov patterns — cities already pay for **push** infrastructure; Richmond’s gap is **vendor-facing clarity** + **code hygiene**, not lack of any software category.
- **Ownership:** **Hybrid** default — nonprofit or civic org prototypes; **City** must own vendor data relationship and **commodity-code policy** for scale.
- **Decision tree:** **Adapt + Build** — Don’t replace B2Gnow; add a public interpretive layer and pressure-test whether **open data alone** suffices.

---

## Cross-Persona Tensions

| Tension | Personas | Resolution (table view) |
|---------|----------|-------------------------|
| **Vendor data: inside B2Gnow vs outside self-report** | Architect, Frontliner, Citizen | Partnership/export beats duplicate entry; self-report only for **proof** or **gap-fill**. |
| **“Proactive” vs what Socrata actually contains** | Innovator, Architect | Audit `xqn7-jvv2` for **forward-looking** fields; if mostly historical awards, rebrand MVP as **renewal / expiring / rebid signal** not “upcoming IFB feed.” |
| **Precision vs reach** | Frontliner, Innovator | Enforce **5-digit** minimum matching; reject 3-digit blast patterns. |
| **City ownership vs speed** | Mayor, Activist | External pilot first; OMBD endorsement second; procurement policy third. |

---

## Fatal Flaw

**No single kill criterion triggered** — owner (OMBD) is identifiable; B2Gnow has a **documented workaround** (CSV/export); funding can start at zero; frontline harm is **manageable** if quality is guarded.

**Near-fatal risk (idea dies in practice, not in theory):**  
**“Proactive matching” without forward-looking opportunity data or authoritative vendor profiles** collapses the value prop into a **low-trust recommender**. If Assumptions 2 & 3 in `INNOVATION_ANALYSIS.md` fail (no vendor self-report + Socrata too historical), the concept **requires** B2Gnow cooperation — which is **not** a weekend unlock.

---

## Verdict

| Dimension | Call |
|-----------|------|
| **GO / REFINE / KILL** | **REFINE** |
| **Rationale** | Ship a **narrow MVP** only after Socrata field audit + 5–10 real vendor profile tests; parallel **OMBD conversation** on export cadence. Do not promise “upcoming bids” until the data supports it. |
| **Temporal** | **Appreciating** if open procurement data improves or B2Gnow export is agreed; **Depreciating** if matching quality is poor and vendors disengage early. |

---

## Rubric-Style Scores & Awards

*Derived from `INNOVATION_ANALYSIS.md` problem scoping + table judgment. Not a judge’s ballot.*

| Category | Score (1–5) | Note |
|----------|:-----------:|------|
| Impact | 5 | Direct hit on PS1; national research (NYC, peer cities) supports the problem framing. |
| Feasibility | 3 | B2Gnow wall + data/behavior assumptions. |
| User Value | 4 | High if matches are precise; erodes quickly with noise. |
| Execution | 3 | Demo-able weekend shape; production needs partnership. |
| Innovation | 4 | Public “match feed” over internal B2Gnow is a clear ERRC *Create*. |
| Equity | 4 | Targets historically excluded firms; digital access limits remain. |

### Weighted award totals (same formulas as event rubric)

| Award | Calculation | Total |
|-------|-------------|------:|
| **Pillar (Economy)** | I×5 + UV×4 + F×3 + Inn×3 + E×3 + Eq×3 | **83** |
| **Mayor’s Choice** | I×5 + F×5 + UV×4 + E×3 + Eq×3 + Inn×1 | **81** |
| **Moonshot** | Inn×5 + I×4 + UV×3 + Eq×3 + F×2 + E×2 | **76** |

**Read:** Strong **pillar** story (impact + user value); **Mayor’s Choice** pulled down by feasibility; **Moonshot** moderate — innovative but not the most visionary in the catalog.

---

## Status

- **Phase:** COMPLETE (condensed pass)  
- **Implementation Reality reference:** `IMPLEMENTATION_REALITY_SYNTHESIS.md` — B2GNow wall explicitly lists this idea; **hidden connection:** bundle with **Contract Expiry Dashboard** / open contracts pipeline for **renewal-driven** matching if solicitations are thin on Socrata.
