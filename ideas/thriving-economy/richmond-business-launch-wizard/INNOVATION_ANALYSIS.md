# Innovation Analysis: Richmond Business Launch Wizard

## 1. Blue Ocean Reframing (ERRC Grid)

**Core assumption challenged:** First-time entrepreneurs need a comprehensive information portal. They don't — they need a *sequenced, address-aware decision engine* that tells them exactly what permits they need, in what order, at what cost, for their specific business at their specific location. The research shows a stark divide between cities with static guides (San Francisco, NYC) and those with true wizards (Orlando, Cincinnati, Atlanta via OpenCounter).

| Action | Element | Rationale |
|--------|---------|-----------|
| **Eliminate** | Generic "how to start a business" content | San Francisco's 10-step guide and NYC's MyCity portal both "merely redirect users to agency websites" (NYC Comptroller audit). Eliminate the intermediary content layer — go directly to actionable, personalized requirements. |
| **Reduce** | Zoning surprises | Fort Worth's OpenCounter delivers zoning answers in <60 seconds. Reduce Richmond's zoning friction by front-loading address-based zoning checks before any other step, preventing entrepreneurs from investing weeks before discovering their location won't work. |
| **Raise** | Multilingual depth | NYC's MyCity offers 10 languages but external application links revert to English. Atlanta's OpenCounter localizes the discovery flow in 7 languages but linked PDFs are English-only. Raise the bar by localizing the entire decision path, including the final application instructions. |
| **Create** | "Time-to-open" estimate | No city currently tells an entrepreneur "Based on your business type and location, expect approximately X weeks to open." Create a timeline estimate using historical permit processing data — a metric no existing tool provides. |

## 2. Rapid Ideation (Crazy 8s)

| # | Idea | Provocation Level |
|---|------|-------------------|
| 1 | **Address-First Business Checker** — Entrepreneur enters an address and business type; system immediately shows: zoning status, required permits, estimated fees, and estimated processing time. OpenCounter model for Richmond. | Standard |
| 2 | **"Businesses Like Yours" Case Studies** — Show real examples of recently opened Richmond businesses of the same type: what permits they needed, how long it took, what they spent. Derived from City license data. | Standard |
| 3 | **Permit Cost Calculator** — Input business type, square footage, address. Output: itemized permit fee breakdown across all departments. Orlando saves 12,811 staff hours/year with this approach. | Standard |
| 4 | **"What's Blocking You?" Diagnostic** — Entrepreneur describes where they're stuck; system identifies the specific agency, form, or approval causing the delay and provides the direct contact + next action. | Moderate |
| 5 | **Business Type Autocomplete from Description** — Entrepreneur describes their business in plain language ("I want to open a bakery that also serves coffee and has a small patio"); system maps to the exact set of NAICS codes and permit categories required. | **Provocative** |
| 6 | **Peer Mentor Matching** — Connect aspiring entrepreneurs with recently-launched Richmond businesses of the same type for informal guidance. SCORE mentors are general; this is hyper-specific. | Moderate |
| 7 | **"Open Here, Not There" Location Intelligence** — Show a map of Richmond with color-coded zones: green (your business type is by-right), yellow (conditional use permit needed), red (not permitted). Include rent range estimates by corridor. | **Provocative** |
| 8 | **Business Launch Sprint Cohort** — Weekly group sessions where 10 aspiring business owners work through the wizard together with a facilitator, completing all registrations in a single sitting. Austin SMBR's pre-certification workshops proven model. | Moderate |

## 3. Rapid Design Sprint

**Problem sentence:** First-time Richmond entrepreneurs cannot determine what permits, registrations, and approvals they need, in what order, at what cost, and how long it will take — forcing them to make multiple trips to multiple agencies, often discovering new requirements late in the process.

**User journey (4 steps):**
1. Entrepreneur enters business description + planned address
2. System returns: zoning eligibility (pass/fail/conditional), required permits (sequenced), estimated fees (itemized), estimated timeline
3. Entrepreneur works through the checklist, checking off completed items
4. System provides "ready to apply" confirmation with direct links to each required application

**Prototype shape:** Step-by-step web wizard. Step 1: address + business type input. Step 2: zoning check (using GeoHub data if available). Step 3: permit requirements matrix. Step 4: fee estimate summary. Step 5: printable/emailable action plan.

**First test:** Recruit 5 aspiring entrepreneurs from a SCORE Richmond workshop. Ask each: "Walk me through what you'd need to do to open [their specific business] at [a specific address]." Compare their unprompted answers against the wizard's output. Measure gap in requirements identified and estimated costs.

## 4. Opportunity Mapper

### Opportunity 1: Entrepreneur Self-Service Discovery
- **User:** First-time Richmond entrepreneurs with no government process knowledge
- **Outcome:** Entrepreneur identifies all required steps, costs, and timelines in a single session (<15 minutes)
- **Workflow:** Describe business → enter address → receive personalized permit/license roadmap → track progress
- **Dependencies:** Richmond zoning code digitized in parseable form, City fee schedules, GeoHub parcel data
- **Richmond relevance:** Richmond has no equivalent to Orlando's OpenCounter (97% self-service, <8 min) or even San Francisco's structured 10-step guide. The gap is wide.

### Opportunity 2: City Staff Inquiry Deflection
- **User:** Richmond permit counter staff handling walk-in and phone inquiries
- **Outcome:** Reduce repetitive "what do I need?" inquiries by 25%+ through self-service
- **Workflow:** Staff direct callers to the wizard → wizard handles discovery → staff handle complex exceptions only
- **Dependencies:** Wizard accuracy must be high enough that staff trust it as a triage tool
- **Richmond relevance:** Salt Lake City saved 2,121 staff hours with a 95% self-service rate. Cincinnati saved 5,765 hours. Even modest adoption would free Richmond staff capacity.

### Opportunity 3: Economic Development Funnel Analytics
- **User:** Richmond economic development staff
- **Outcome:** Understand what types of businesses people *want* to start, where they want to start them, and where they get stuck
- **Workflow:** Aggregate wizard usage data → identify popular business types, problem locations, high-dropout steps
- **Dependencies:** Usage analytics built into the wizard from day one
- **Richmond relevance:** No city in the research publishes "business intent" data — the gap between people exploring and people launching. This wizard could be the first to capture that funnel.

## 5. Problem Scoping

| Dimension | Score (1-5) | Rationale |
|-----------|:-----------:|-----------|
| **Impact** | 5 | Directly addresses PS2 (Small Business Navigation). Every city with a wizard reports massive staff time savings and user satisfaction. |
| **Feasibility** | 3 | Requires digitizing Richmond's permit requirements and zoning rules. This is content curation work, not technical work — but it's substantial for a weekend. |
| **Data readiness** | 2 | Richmond's zoning code, fee schedules, and permit requirements are not available in structured, machine-readable form. GeoHub has parcels but likely not business-type zoning eligibility layers. The EnerGov wall blocks direct system integration. |
| **Problem clarity** | 5 | Universally understood pain point. Every city in the research confirms this problem. |
| **Demo-ability** | 4 | A step-by-step wizard is intuitive. Demo impact depends on having real Richmond data — placeholder data weakens the story. |
| **Total** | **19/25** | |

**Weekend MVP shapes:**
- **Shape A (8 hours):** Interactive questionnaire for Richmond's top 10 most common business types (restaurant, salon, retail, food truck, home-based). Manually curated permit checklists and fee estimates. No zoning integration.
- **Shape B (16 hours):** Add address-based zoning lookup using GeoHub parcel data (if zoning layers are accessible). Add timeline estimates from manual research of average processing times.
- **Shape C (24 hours):** Add multilingual support (English + Spanish), a printable action plan PDF, and a "businesses like yours" section showing recently issued licenses of the same type (if City license data is accessible).

## 6. Assumption Mapping

| # | Assumption | Risk (1-5) | Uncertainty (1-5) | R × U | Validation Method |
|---|-----------|:----------:|:-----------------:|:-----:|-------------------|
| 1 | Richmond's permit requirements can be accurately captured in a decision tree for the top 10 business types within a weekend | 5 | 4 | **20** | Attempt to map the full permit path for 3 business types (restaurant, salon, retail) from City website and phone calls |
| 2 | GeoHub exposes zoning layers that can be queried by address to determine business-type eligibility | 4 | 4 | **16** | Query GeoHub ArcGIS REST services for zoning layer availability and attribute completeness |
| 3 | Entrepreneurs will find and use a digital wizard vs. calling the City or asking a mentor | 3 | 3 | **9** | Orlando and Cincinnati data suggest yes (95-98% self-service), but those cities actively promote their tools. Richmond would need a distribution strategy. |
| 4 | Fee schedules are publicly available in structured form | 4 | 3 | **12** | Check Richmond's building/planning department websites for published fee schedules |
| 5 | The EnerGov permitting system (a documented structural wall) does not block pre-application guidance | 2 | 2 | **4** | The wizard provides guidance *before* the formal application — it doesn't need EnerGov integration for the MVP |
| 6 | The wizard won't provide inaccurate information that leads entrepreneurs to make bad decisions | 5 | 3 | **15** | Add clear disclaimers ("estimates subject to staff review") as every successful city does. NYC's Comptroller audit flagged AI chatbot inaccuracies — avoid generative AI for regulatory content. |

**Top 3 to validate first:**
1. **Assumption 1 (R×U=20):** Can you accurately map permit paths in a weekend? This is the make-or-break content challenge. If it takes 3 hours per business type and you need 10 types, that's 30 hours just on content.
2. **Assumption 2 (R×U=16):** Does GeoHub have zoning layers? Without address-based zoning checks, the wizard loses its most powerful differentiator vs. a static checklist.
3. **Assumption 6 (R×U=15):** Will the wizard give bad advice? The NYC Comptroller's audit is a cautionary tale — inaccurate chatbot responses eroded trust in the entire MyCity platform.

## Key Takeaway

The evidence overwhelmingly supports that interactive business startup wizards work — Orlando (97% self-service, 12,811 staff hours saved), Cincinnati (98% self-service, 5,765 hours saved), Salt Lake City (95% self-service, 2,121 hours saved). But these are all OpenCounter deployments built over months with deep city cooperation on zoning and fee data. The weekend build's success hinges entirely on one question: can you accurately curate Richmond's permit requirements for 5-10 business types in 48 hours? If yes, this is a high-impact demo. If not, it becomes the thing the NYC Comptroller warned about: a portal that "merely redirects users to agency websites." Focus the weekend on content accuracy for a narrow set of business types, not on building technically sophisticated features with shallow data.
