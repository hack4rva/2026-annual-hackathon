# Roundtable (Condensed): Contract-Payment Drift Scanner

**Initiated:** 2026-04-02  
**Slug:** `contract-payment-drift-scanner`  
**Idea:** Contract-Payment Drift Scanner  
**Pillar:** A Thriving City Hall  
**Problem Statement:** PS2 — Procurement Risk & Opportunity Review  
**Source:** BLUESKY (ERRC reframing)  
**Implementation Reality:** 21/25 — Tier S (Ship It) | **Overall Rank:** #8 of 73  

## Input materials

| File | Status |
|------|--------|
| `IDEA.md` | Loaded |
| `RESEARCH_RESULT.md` | Loaded |
| `INNOVATION_ANALYSIS.md` | Loaded |
| `README.md` | Loaded (pointer only) |
| `RICHMOND_TECH_STACK_2026.md` | Loaded — Socrata `xqn7-jvv2` (City Contracts, ~monthly), `5y73-enav` (Payment Register FY16+); RAPIDS/OnBase **no public API** (derivatives only via open data) |
| `pillar-repos/pillar-thriving-city-hall/research/INDEX.md` | Loaded — corpus map; procurement anchors: A2, B3, C3, D2, E3, F3, G2, H3, I3 |

**Bundle:** Socrata Contracts Pipeline (Bundle 1) — analytical layer after expiry visibility; combined bundle research cites ~109/125 avg 21.8.

---

## Seven persona turns (condensed)

### 1 — Innovator
Cross-domain proof is strong: Portland (OCDS contract↔payment), Austin (cap vs inception-to-date), Chicago/SF (joins surfacing millions in improper or split patterns). The non-obvious lift is not ML—it is **defaulting** contract-plus-payment reconciliation the way those cities did, but tuned to Richmond’s two Socrata tables. Stretch value: move from “overrun leaderboard” to **exception queue semantics** (triage, not verdict).

### 2 — Activist
Fits “build outside, offer inside”: no City IT permission needed for a read-only join prototype. Political upside aligns with MAP “well-managed government” narrative; risk is **weaponized misreads** if amendments live in OnBase but not in `xqn7-jvv2`. Advocacy position: ship with **investigative** framing—flags warrant staff review, not public conviction.

### 3 — Citizen
Residents benefit indirectly through accountability and press/council use, not daily UX. A fully public “name and shame” leaderboard without appeals process undermines trust and can harm vendors unfairly. Prefer **aggregate transparency** plus restricted detail, or clear “unverified flag” language, consistent with pillar research on procurement compliance and reputational harm (G2).

### 4 — Mayor
Implementable pilot: arithmetic rules on open data, aligns with DIT’s commodity-hosting pattern and AR 2.13 if any ML triage is added later (governance). Does **not** close the loop inside RAPIDS—enforcement still policy and ERP. Mayor’s Choice story: **low integration cost, high oversight signal**; Moonshot story weaker unless paired with process change.

### 5 — Architect
Data path is clean per tech stack: SODA to both datasets, no AvePoint/EnerGov/B2GNow dependency for core overrun math. **Integration surface** stays low for Phase 1. Hard part is **data model fidelity**: contract number normalization, whether payments are actuals vs encumbrances, and amendment lag—must be documented in-product (staleness / field-definition disclaimers per G4).

### 6 — Frontliner (procurement / finance)
Primary users are auditor, CPO office, budget analyst—not every buyer. Matches INNOVATION_ANALYSIS journey: friction today is Excel glue work; a sortable, join-backed view is credible. Concern: **false positive load** if every amendment mismatch surfaces as “fraud tone”; needs buyer-readable drill-down to contract record and contact for resolution.

### 7 — Funder
Replicable to other Socrata cities with contracts + checks; good OCP / civic-tech narrative. Sustainability requires a **named steward** (procurement or CAO audit liaison) and a path from prototype to periodic refresh job—same adoption cliff as rest of Bundle 1, not a unique funding blocker.

---

## Tensions (three)

| # | Tension | Resolution (consensus) |
|---|---------|-------------------------|
| **T1** | **Signal vs artifact** — Overruns may reflect amendments not reflected in open contracts rows, or timing/posting effects in Payment Register. | Treat flags as **triage**, not findings; Gate 0 = measure join coverage and manually validate top N flags against council/audit sources (per assumption map). |
| **T2** | **Public dashboard vs internal audit tool** — Full public vendor naming risks fairness and FOIA/reputation dynamics. | **Two-tier UX**: internal/detailed for oversight; public aggregates or delayed detail unless confirmed—matches INNOVATION_ANALYSIS policy note. |
| **T3** | **Detection without enforcement** — Research is explicit: dashboards without approval gates do not stop drift. | Accept scope: this product is **intelligence**, not payment block. Roadmap ties to City controls (RAPIDS policies), not hackathon scope. |

---

## Fatal flaw test

| Test | Result |
|------|--------|
| Data dependency | **Pass** — Both datasets public on Socrata; no wall dependency for read-only MVP. |
| Join viability | **Conditional** — If contract-number match rate is poor, MVP needs normalization rules; **not** a structural kill, but **launch blocker** until validated. |
| Structural wall | **Pass (Phase 1)** — No OnBase/RAPIDS write path required. |
| Harm / equity | **Conditional pass** — Automated public accusations without triage would be a **process failure**, not inherent to the idea; mitigate with disclaimers, appeals narrative, and partial-payment lessons from NYC/Philly research (don’t starve nonprofits/small vendors on false holds—this tool is read-only, but narrative matters). |
| Ownership | **Conditional** — Same as sibling bundle ideas: needs procurement/audit champion for longevity. |

**Fatal flaw:** **None** for a responsibly scoped, triage-first build. **No ship** if launched as authoritative public accusations without join validation and human review.

---

## Verdict

**SHIP WITH CONDITIONS**

### Conditions

1. **Gate 0:** Validate join key coverage and field semantics (`xqn7-jvv2` ↔ `5y73-enav`); document match rate and known failure modes in the product.  
2. **Language and UX:** Advisory / triage framing; staleness and “open data may lag amendments” disclaimers.  
3. **Public surface:** Default to aggregates or redacted mode until oversight partners agree on naming rules.  
4. **Stewardship:** Identify owner candidate (procurement leadership, auditor, or CAO office) within 90 days of demo—mirror Bundle 1 adoption pattern.

---

## Consensus rubric and awards

IDEA.md does not list six hackathon category scores; scores below are **roundtable consensus** derived from IDEA tier, INNOVATION_ANALYSIS scoping, and tensions above.

| Category | Score | One-line rationale |
|----------|:-----:|---------------------|
| Impact | 5 | Peer cities show material outcomes from contract↔payment reconciliation; aligns with PS2 and RAPIDS-control narrative. |
| Feasibility | 4 | Public data only; minus one for join/amendment semantics uncertainty. |
| User Value | 4 | Strong for oversight roles; not universal frontline buyer tool. |
| Execution | 4 | Credible weekend join + table; advanced rules are stretch. |
| Innovation | 3 | Proven municipal pattern; innovation is **application + packaging** to Richmond, not novel math. |
| Equity | 3 | Risk of reputational harm and MBE cash-flow narrative if misused; mitigations required. |

### Award totals (weighted)

- **Mayor’s Choice:** (5×5)+(4×5)+(4×4)+(4×3)+(3×3)+(3×1) = **85**  
- **Pillar Award:** (5×5)+(4×4)+(4×3)+(3×3)+(4×3)+(3×3) = **83**  
- **Moonshot:** (3×5)+(5×4)+(4×3)+(3×3)+(4×2)+(4×2) = **72**

---

## One-paragraph summary

The Contract-Payment Drift Scanner adds an **audit-intelligence layer** to Richmond’s open procurement stack by joining City Contracts and the Payment Register to flag overruns, post-term “zombie” payments, and (eventually) rule-based anomalies seen in Chicago/SF audits—using only public Socrata access, consistent with `RICHMOND_TECH_STACK_2026.md`. It is **Tier S feasible** provided the join key and field meanings validate; the main failure modes are **data artifact and amendment lag**, not missing APIs. Consensus verdict is **ship with conditions**: triage-first messaging, join validation gate, careful public disclosure, and an oversight owner so the tool becomes durable fiscal infrastructure rather than a one-off accusation engine.

---

*Condensed roundtable — 7 personas, 3 tensions, fatal flaw, verdict, scores. Full multi-turn research not re-run; grounded in idea files + tech stack + pillar INDEX.*
