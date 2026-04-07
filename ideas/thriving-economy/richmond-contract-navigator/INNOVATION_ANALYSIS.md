# Innovation Analysis: Richmond Contract Navigator

## 1. Blue Ocean Reframing (ERRC Grid)

**Core assumption challenged:** Cities should build their own AI matching tools for vendor-to-contract matching. The research says otherwise — cities overwhelmingly buy commercial platforms (OpenGov, Bonfire, Hazel) and no city has published independently-audited precision/recall metrics for any AI procurement matcher.

| Action | Element | Rationale |
|--------|---------|-----------|
| **Eliminate** | The expectation of multi-source aggregation (federal + state + local) | SamSearch, McCarren.ai, and PlanetBids VendorLine already aggregate SAM.gov + state + local across 50 states. A hackathon project cannot compete. Eliminate this scope entirely. |
| **Reduce** | AI complexity | Dallas-Hazel and Seattle-OpenGov deployments focus on scope drafting and internal workflow, not vendor-facing AI matching. Reduce the AI ambition to a focused semantic search over Richmond's own Socrata contracts dataset — achievable in a weekend. |
| **Raise** | Transparency of matching logic | No commercial platform publishes its matching methodology. Raise transparency by making the matching algorithm fully open — show vendors exactly why a contract was recommended (NAICS overlap, dollar range, department history). |
| **Create** | Richmond-specific contract intelligence layer | Commercial aggregators treat all cities the same. Create Richmond-specific value: historical award patterns, department procurement behavior, renewal cycles — intelligence that SamSearch and McCarren.ai cannot provide because they lack deep local data. |

## 2. Rapid Ideation (Crazy 8s)

| # | Idea | Provocation Level |
|---|------|-------------------|
| 1 | **Semantic Contract Search** — Vendor describes their services in plain English; system finds the 10 most similar historical Richmond contracts using embedding-based similarity against Socrata data. | Standard |
| 2 | **"Why This Match?" Explainer Cards** — Each recommended contract shows exactly why it matched: NAICS overlap %, dollar range fit, department history. Addresses the black-box problem that no commercial platform solves. | Standard |
| 3 | **Contract Complexity Scorer** — Rate each contract by complexity signals: number of amendment cycles, subcontracting requirements, insurance thresholds. Help MBEs avoid contracts they can't service. | Moderate |
| 4 | **"Contracts You're Missing" Audit** — Vendor enters their NAICS codes; system shows contracts in matching categories they've *never* bid on, ranked by dollar value and frequency. Surfaces blind spots. | Moderate |
| 5 | **Anti-Matching: "Don't Bid On This"** — PlanetBids VendorLine offers AI bid/no-bid assessment. Invert it: flag contracts where the incumbent has won 5+ consecutive cycles and the average bid count is 1-2. Saves vendor effort on unwinnable bids. | **Provocative** |
| 6 | **Cooperative Contract Finder** — Link Richmond contracts to equivalent NASPO ValuePoint or Sourcewell cooperative vehicles. If Richmond buys software through a state contract, show vendors the cooperative pathway as an alternative entry point. | Moderate |
| 7 | **"If You Like This Contract, You'll Like These"** — Collaborative filtering across NAICS codes: vendors who bid on X also bid on Y. Build a recommendation engine from public bid data. | **Provocative** |
| 8 | **Contract Language Simplifier** — Run contract documents through an LLM to produce plain-language summaries of scope, deliverables, and key compliance requirements. PlanetBids VendorLine does this commercially at $497/year. | Standard |

## 3. Rapid Design Sprint

**Problem sentence:** Richmond MBE vendors cannot efficiently match their capabilities to City contract opportunities because solicitations are scattered, described in procurement jargon, and lack the contextual intelligence (who won before, how competitive is this, when does it rebid) that makes bid/no-bid decisions rational.

**User journey (4 steps):**
1. Vendor enters a plain-language description of their business capabilities
2. System returns ranked contract matches from Socrata with match-quality explanations
3. Vendor explores a match → sees historical context: past winners, award amounts, rebid cycle, competitiveness score
4. Vendor saves matches to a watchlist and gets alerts when similar new contracts appear

**Prototype shape:** Search interface with a text input field, embedding-based similarity engine (OpenAI embeddings or similar), and Socrata `xqn7-jvv2` as the corpus. Results displayed as cards with match scores and context.

**First test:** Pre-load 5 vendor profiles (from public MBE directories). Run each through the navigator. Compare recommended contracts against what a human procurement expert would recommend. Measure precision@10 and vendor satisfaction.

## 4. Opportunity Mapper

### Opportunity 1: Intelligent Contract Discovery for MBEs
- **User:** Certified MBE vendors seeking Richmond City contracts
- **Outcome:** Vendors find relevant contracts in minutes instead of hours of manual searching
- **Workflow:** Describe capabilities → receive ranked matches → explore context → decide bid/no-bid
- **Dependencies:** Socrata contracts dataset (`xqn7-jvv2`), embedding model (OpenAI API or open-source), NAICS mapping
- **Richmond relevance:** Richmond's B2Gnow system (the structural wall) has no public API. This tool provides an alternative discovery path using only public data.

### Opportunity 2: Procurement Office Vendor Recruitment
- **User:** Richmond procurement officers seeking to diversify their vendor pool
- **Outcome:** Officers identify qualified MBE vendors for upcoming solicitations without relying solely on B2Gnow
- **Workflow:** Enter upcoming contract scope → system recommends vendor categories and historical participation rates → flag categories with low MBE engagement
- **Dependencies:** Same Socrata dataset, plus NAICS-to-vendor-capability mapping
- **Richmond relevance:** The NYC Comptroller recommended "curated M/WBE lists for specific commodities" — this tool could generate those lists automatically.

## 5. Problem Scoping

| Dimension | Score (1-5) | Rationale |
|-----------|:-----------:|-----------|
| **Impact** | 4 | Addresses core MBE discovery problem. Seattle's OpenGov rollout saw 28% WMBE participation increase (multi-factor, but portal was key). |
| **Feasibility** | 4 | Socrata data is public. Embedding-based search is well-understood. OpenAI API or local model can run in a weekend. |
| **Data readiness** | 4 | Socrata contracts dataset is live. Quality of contract descriptions will determine match quality — may need text enrichment. |
| **Problem clarity** | 4 | Clear user (MBE vendor), clear pain (can't find relevant contracts). The NYC Comptroller explicitly flagged PASSPort's poor search as a barrier. |
| **Demo-ability** | 5 | "Type your business, see matching contracts" is immediately compelling. Match explanation cards add visual sophistication. |
| **Total** | **21/25** | |

**Weekend MVP shapes:**
- **Shape A (8 hours):** Keyword search over Socrata contracts with NAICS filtering. Results show contract name, department, value, and expiration date. No AI.
- **Shape B (16 hours):** Add embedding-based semantic search. Vendor types plain English, system finds similar contracts by semantic similarity. Add match explanation cards.
- **Shape C (24 hours):** Add historical context (past winners, rebid cycle, competitiveness score), a watchlist feature, and a "contracts like yours" recommendation engine.

## 6. Assumption Mapping

| # | Assumption | Risk (1-5) | Uncertainty (1-5) | R × U | Validation Method |
|---|-----------|:----------:|:-----------------:|:-----:|-------------------|
| 1 | Socrata contract descriptions contain enough textual detail for meaningful semantic matching | 5 | 3 | **15** | Sample 50 contracts from Socrata; assess description length and specificity |
| 2 | Vendors will trust AI-generated contract recommendations over personal networks or OMBD referrals | 4 | 4 | **16** | Interview 5 MBE vendors: "Would you use an AI tool to find contract opportunities?" |
| 3 | The AI matching provides meaningfully better results than simple NAICS code filtering | 4 | 3 | **12** | Compare precision@10 of semantic search vs. NAICS-only filter on a test set of 20 vendor profiles |
| 4 | No commercial platform already serves this exact niche for Richmond (would make the tool redundant) | 3 | 2 | **6** | Check DemandStar, PlanetBids, and SamSearch for Richmond-specific coverage |
| 5 | Contract Navigator adds value beyond what Spend Mirror already provides | 3 | 3 | **9** | Define distinct use cases: Spend Mirror = "where does money go?" vs. Navigator = "which contracts match me?" |

**Top 3 to validate first:**
1. **Assumption 2 (R×U=16):** Will vendors trust and use AI recommendations? Dallas-Hazel is the first major city AI procurement deployment (July 2025) — vendor adoption data doesn't exist yet.
2. **Assumption 1 (R×U=15):** Is the Socrata text rich enough? If descriptions are sparse (e.g., "Consulting Services"), semantic matching degrades to keyword matching.
3. **Assumption 3 (R×U=12):** Does AI outperform simple filtering? If NAICS codes in the dataset are already 5-digit, simple filtering might be "good enough" and the AI adds complexity without value.

## Key Takeaway

The research reveals a critical market gap: commercial AI procurement tools (SamSearch, McCarren.ai, PlanetBids VendorLine) serve vendors at $497+/year and none publish audited accuracy metrics. Dallas's Hazel partnership is the first major city AI deployment (July 2025), and no results are public yet. Richmond Contract Navigator can differentiate by being (a) free, (b) Richmond-specific with local intelligence commercial tools can't replicate, and (c) transparent in its matching logic — something no commercial platform offers. The biggest risk is not technical feasibility but whether Socrata contract descriptions are textually rich enough for semantic matching. Validate that first. If descriptions are sparse, the tool collapses to a fancy NAICS filter, which isn't novel enough to win.
