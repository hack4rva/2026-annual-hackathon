# Innovation Analysis: Maternal Metric Lock-In

## Idea Summary

A shared metric definition registry and validation tool for Richmond's maternal health ecosystem. Multiple agencies (VDH, RHHD, hospital systems, CBOs) track maternal health outcomes using slightly different definitions, denominators, and time windows. This tool locks in canonical definitions — specifying the exact data source, calculation, and denominator for each key metric — and validates whether an organization's reported values match the locked-in standard. Tier S (21/25), ranked #13 of 73 ideas.

---

## Lens 1 — Blue Ocean Reframing (ERRC Grid)

| Action | Factor | Rationale |
|--------|--------|-----------|
| **Eliminate** | Conflicting statistics across organizations for the same metric | VDH uses resident-based denominators; CBOs using CDC WONDER may get occurrence-based numbers; hospital systems use discharge-based counts — same "infant mortality rate," three different answers |
| **Eliminate** | Undocumented calculation methods | Currently, no Richmond organization publishes its exact denominator, residency rule, and suppression threshold alongside reported rates |
| **Reduce** | Time spent reconciling discrepancies in coalition meetings | Partners currently waste meeting time debugging why their numbers disagree instead of acting on them |
| **Reduce** | Risk of funders seeing contradictory data across grant applications from the same service area | Multiple CBOs submitting different infant mortality figures for the same tract undermines credibility |
| **Raise** | Methodological transparency | Every metric gets a published definition card: source, numerator, denominator, residency rule, suppression threshold, ACS vintage, ICD code list |
| **Raise** | Confidence in cross-agency comparisons | When RHHD and VDH cite the same metric, it means the same thing |
| **Create** | Automated validation engine | Organization inputs their calculated rate → tool checks it against canonical calculation from the locked data source → flags discrepancies with explanation |
| **Create** | Versioned metric catalog with change tracking | When CDC updates SMM indicator ICD codes or ACS releases a new vintage, the catalog version bumps and all downstream users are notified |

**Core assumption challenged:** "Agencies just need better dashboards." The research shows the problem isn't data visibility — it's definitional drift. Delaware's SIMC audit found misclassified <500g births artificially altered infant mortality rates. The fix isn't a prettier chart; it's locking the definitions before anyone charts anything.

---

## Lens 2 — Rapid Ideation (Crazy 8s)

| # | Variant | Twist |
|---|---------|-------|
| 1 | **Metric Definition Registry** — Searchable catalog of locked MCH metric definitions with source, formula, denominator, residency rule, and suppression policy | Baseline concept |
| 2 | **Validation API** — REST endpoint where a CBO POSTs their calculated metric values and gets back pass/fail/discrepancy explanations | Automation-first approach; integrates into existing workflows |
| 3 | **Coalition Data Dictionary Generator** — Wizard that walks a new coalition through selecting standards (NVSS vs. WONDER, resident vs. occurrence) and auto-generates a publishable PDF data dictionary | 🔥 Provocative: makes governance creation self-service rather than consultant-dependent |
| 4 | **Drift Detector Dashboard** — Automated comparison of the same metric across VDH, RHHD, CDC WONDER, and KIDS COUNT for the same geography, highlighting when they disagree and why | Visual proof of the problem that motivates adoption |
| 5 | **Suppression Rule Enforcer** — Automated check that flags any published rate based on <20 events (VDH standard) or <10 events (CDC WONDER standard) | Prevents the most common source of misleading small-area statistics |
| 6 | **ACS Vintage Lock** — Tool that detects when an organization's data section uses mixed ACS vintages (e.g., 2018 5-year and 2022 5-year in the same report) and flags the inconsistency | 🔥 Provocative: catches a subtle error that even experienced analysts miss |
| 7 | **CMQCC-Lite for Richmond** — Modeled on California's Maternal Data Center, a lightweight version that links birth certificates to hospital discharge data for Richmond-area hospitals | Aspirational; requires data access Richmond doesn't currently have |
| 8 | **Metric Adoption Scorecard** — Tracks which coalition partners have adopted the locked definitions vs. still using their own, creating gentle accountability | Governance tool that makes adoption visible |

---

## Lens 3 — Rapid Design Sprint

**Problem sentence:** Richmond's maternal health coalition cannot coordinate effectively because each partner agency calculates the same metrics differently, producing contradictory numbers that erode trust and waste meeting time on reconciliation.

**User journey (primary persona: RHHD Epidemiologist):**
1. Epidemiologist prepares quarterly MCH briefing for coalition partners
2. Opens Maternal Metric Lock-In registry, selects "Infant Mortality Rate"
3. Sees canonical definition: NVSS linked period file, denominator = resident live births, NCHS suppression (<10 suppress, <20 flag), 3-year pooled, ACS 5-year 2020-2024 vintage for population adjustment
4. Runs validation: inputs their calculated rate and underlying count → tool confirms match or flags discrepancy (e.g., "Your denominator appears to use occurrence-based births, not resident-based")
5. Shares the metric definition card URL with coalition partners so everyone references the same standard
6. At coalition meeting, all partners present aligned numbers; discussion shifts from "why don't our numbers match?" to "what do we do about this trend?"

**Prototype shape:** Static site (Markdown or simple React) with a searchable metric catalog. Each metric card shows: name, definition, data source, numerator, denominator, residency rule, suppression threshold, ACS vintage, ICD codes (if applicable), last updated date. Bonus: simple validation form (input count + denominator → compare to expected rate).

**First test:** Pick three metrics (infant mortality rate, low birthweight rate, teen pregnancy rate) and pull the "same" metric from VDH dashboard, CDC WONDER, and KIDS COUNT for Richmond. Document whether they match. If they don't, show why (different denominators, different years, different residency rules).

---

## Lens 4 — Opportunity Mapper

### Pattern 1: "Denominator Drift Prevention"

| Dimension | Detail |
|-----------|--------|
| **User** | Epidemiologists and data analysts at RHHD, VDH, hospital systems |
| **Outcome** | Elimination of conflicting statistics in coalition reports and grant applications |
| **Workflow** | Analyst selects metric → views canonical definition → runs validation check → publishes with confidence |
| **Dependencies** | Agreement among 3+ organizations to adopt the locked definitions; requires a governance champion |
| **Richmond relevance** | Richmond's maternal health coalition (RHHD, VDH, VCU Health, Bon Secours, CBOs) regularly produces reports — this directly serves them |

### Pattern 2: "Grant Application Quality Assurance"

| Dimension | Detail |
|-----------|--------|
| **User** | CBO grant writers referencing MCH statistics |
| **Outcome** | All CBOs in the same service area cite identical, methodologically sound figures |
| **Workflow** | Grant writer looks up metric → copies locked value and citation → funder sees consistency across applications |
| **Dependencies** | Registry must cover the 10–15 most commonly cited MCH indicators in grant applications |
| **Richmond relevance** | Small CBO ecosystem means 3–5 organizations often apply to the same funders for the same geography |

### Pattern 3: "Transparent Methods Documentation"

| Dimension | Detail |
|-----------|--------|
| **User** | State and federal evaluators reviewing Richmond's MCH outcomes |
| **Outcome** | Auditable, versioned methodology that meets federal reporting standards |
| **Workflow** | Evaluator requests methods → coalition shares registry URL with full provenance for every metric |
| **Dependencies** | Version control for definition changes; alignment with NVSS, CDC SMM, and AIM standards |
| **Richmond relevance** | Aligns with City Health Dashboard's data dictionary model and NCHS publication standards |

---

## Lens 5 — Problem Scoping

| Dimension | Score (1-5) | Rationale |
|-----------|:-----------:|-----------|
| **Impact** | 4 | Solves a coordination problem that directly affects coalition effectiveness and grant credibility |
| **Feasibility** | 5 | All data sources are public; the tool is a reference document + validation logic, not a data warehouse |
| **Data readiness** | 5 | NVSS, ACS, CDC WONDER, VDH MCH dashboards, KIDS COUNT — all public and well-documented |
| **Problem clarity** | 5 | "Same metric, different numbers" is immediately understandable and demonstrably true |
| **Demo-ability** | 3 | A metric catalog is less visually dramatic than a map or dashboard; demo requires showing the discrepancy first, then the fix |
| **Total** | **22/25** | |

### Weekend MVP Shapes

- **Shape A (Minimum):** Markdown-based metric catalog on GitHub Pages. 5 metrics, each with a definition card (source, numerator, denominator, residency rule, suppression threshold). Include one worked example showing how VDH and WONDER produce different infant mortality rates for Richmond.
- **Shape B (Demo-ready):** Simple web form where user inputs a metric name, their calculated count, and their denominator → tool computes expected rate from canonical source and flags discrepancies.
- **Shape C (Stretch):** Add automated comparison: pull the same metric from VDH, WONDER, and KIDS COUNT APIs simultaneously, display side-by-side with explanation of differences. Version-stamp each definition card.

---

## Lens 6 — Assumption Mapping

| # | Assumption | Risk (1-5) | Uncertainty (1-5) | R × U | Validation approach |
|---|-----------|:----------:|:-----------------:|:-----:|-------------------|
| 1 | Coalition partners will agree on a single canonical definition for each metric | 5 | 4 | **20** | Convene RHHD, VDH, and one CBO; attempt to agree on infant mortality rate definition in one meeting |
| 2 | Denominator drift is actually causing problems in Richmond (not just theoretical) | 3 | 3 | 9 | Pull IMR from VDH, WONDER, and KIDS COUNT for Richmond; document whether they disagree |
| 3 | Organizations will use the validation tool rather than continuing their existing workflow | 4 | 3 | **12** | Ask 3 analysts whether they would check their numbers against a canonical source before publishing |
| 4 | A hackathon team can build meaningful validation logic in a weekend | 2 | 2 | 4 | The core validation is simple arithmetic; the hard part is agreeing on definitions, not coding them |
| 5 | The metric catalog will be maintained after the hackathon | 4 | 3 | **12** | Identify whether RHHD or a coalition lead would own updates when CDC revises SMM ICD codes |
| 6 | Funders actually notice or care when CBOs cite different numbers for the same area | 3 | 4 | 12 | Interview one local funder (e.g., Richmond Memorial Health Foundation) about whether they've seen this |

**Top 3 to validate first:**
1. **Coalition agreement on definitions** (R×U=20) — This is fundamentally a governance challenge, not a technical one. If partners won't agree on definitions, the tool has nothing to lock in.
2. **Adoption willingness** (R×U=12) — Analysts have existing workflows; a new tool needs to fit into, not replace, those workflows
3. **Post-hackathon maintenance** (R×U=12) — CDC and NVSS update code lists periodically; someone must bump the catalog version

---

## Key Takeaway

Maternal Metric Lock-In is the rare hackathon idea that is more governance than code. Its Tier S (Ship It) score reflects the fact that all required data is public, no City IT cooperation is needed, and the output is a reference document — not a complex application. The existential risk is not technical but political: will Richmond's maternal health coalition partners agree to adopt shared definitions? The research shows California's CMQCC achieved this across 200+ hospitals, and the City Health Dashboard publishes a transparent data dictionary that could serve as a template. The weekend MVP should focus on demonstrating the problem (three sources, three different IMR values for Richmond) rather than building complex validation logic — the proof of the discrepancy is the most persuasive artifact.
