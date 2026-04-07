# Gap Analysis — You Get What You Give RVA

**Pillar:** Thriving Economy
**Problem Statement (verbatim):** "Help first-time entrepreneurs understand what steps to take, in what order, to start and register a business in Richmond."
**Demo:** You Get What You Give RVA (Sam Pritchard)
**Primary User (as built):** Existing Richmond business owner looking for local partnership, vendor, and customer connections.
**Pain (as built):** New and existing business owners lack the network and context to identify who to partner with, buy from, or sell to in the Richmond business ecosystem.
**Desired Outcome (as built):** A business owner enters their business info and receives curated lists of strategic partners, potential vendors, and potential customers from among ~14,000 active Richmond businesses.

---

## Problem Grounding — Alignment Assessment

**The demo does not address the stated problem statement.**

PS2 asks: *"Help first-time entrepreneurs understand what steps to take, in what order, to start and register a business in Richmond."* The core problem is regulatory navigation — sequencing SCC registration, EIN, state tax, CZC, BPOL, and industry-specific permits for someone who has never started a business before.

You Get What You Give RVA is a **business partnership finder for existing businesses**. It assumes the user already has a business (the demo example is "RVA IT Pros — an IT services firm") and needs to identify other Richmond businesses to partner with, buy from, or sell to. This is a networking and business development tool, not a startup navigation tool.

The gap is not incidental — the demo solves a fundamentally different problem than what PS2 describes. A first-time entrepreneur who doesn't know what a Certificate of Zoning Compliance is, or that it must precede their BPOL license, would not benefit from a list of strategic partners. They need to know what steps to take, in what order, before they can operate at all.

**Honest assessment:** The demo is well-built and solves a real problem (business networking in Richmond is hard, especially for newcomers). But that problem is not PS2. Judges should evaluate execution quality independently from pillar alignment.

---

## Data Source Map

| Data Claim in Demo | Real or Synthetic? | Source | Access | Notes |
|---|---|---|---|---|
| ~3.5 million Virginia businesses | **Real** | Virginia State Corporation Commission (SCC) | Public — SCC has a searchable online database; bulk data availability unclear | SCC is the authoritative source for Virginia business entity filings. |
| Filtered to ~14,000 active Richmond businesses | **Real (derived)** | SCC data, filtered by: (1) remove inactive, (2) filter to Richmond zip codes, (3) remove border zips with non-Richmond addresses (Chesterfield, Henrico, Glen Allen, Bon Air) | Derived pipeline | The filtering methodology is sound. Border-zip handling shows attention to data quality. |
| Claude AI enrichment and categorization | **Real (AI-generated)** | Claude API applied to SCC business records | Commercial API | SCC records contain entity name, type, address, registered agent, formation date — limited operational detail. Claude is used to infer business category/description from entity name and available fields. Accuracy of AI-inferred categorization is unvalidated. |
| Three categorized result lists (strategic partners, vendors, customers) | **AI-generated at query time** | Claude API matching user input against enriched dataset | Commercial API | The matching logic, mutual benefit statements, and categorization are all AI-generated. No ground-truth validation of match quality shown. |

### Data Pipeline Summary

```
SCC bulk data (~3.5M VA businesses)
  → Remove inactive entities
  → Filter to Richmond zip codes
  → Remove border-zip non-Richmond addresses
  → ~14,000 active Richmond businesses
  → Claude enrichment (categorize each business)
  → Stored as queryable dataset
  → User enters business info → Claude generates 3 match lists
```

**Strengths:** Real authoritative data source. Thoughtful geographic filtering. Working pipeline from raw data to user-facing results.

**Weaknesses:** SCC data is entity-level (legal name, type, address), not operational-level (what the business actually does, who it serves). Claude's categorization bridges this gap but introduces AI inference error. No validation of enrichment accuracy is shown or described.

---

## Gap Analysis by JTBD

### Job 1: The First-Time Entrepreneur Who Doesn't Know Where to Start

> "I want to see every permit, license, and registration I need — in the right order, from the right agencies — so I can move from idea to legally operating business without missing a step."

**Coverage: Not addressed.**

The demo provides no information about permits, licenses, registrations, sequencing, or regulatory requirements. A first-time entrepreneur using this tool would receive a list of potential business partners — but they cannot legally partner with anyone until they have registered their own entity, obtained an EIN, completed state tax registration, secured a CZC, and filed for BPOL. The demo skips the entire startup journey that Job 1 describes.

**Gap fixable or fundamental?** Fundamental to the current product concept. The demo would need to be redesigned from a partnership finder to a startup navigator to address this job. However, the underlying SCC data pipeline could be repurposed (see Opportunities).

### Job 2: The Resident Transitioning to Self-Employment Who Can't Afford Mistakes

> "I want a clear, sequenced path specific to my situation, so I don't waste limited savings on wrong-order filings, missed deadlines, or penalties I didn't know existed."

**Coverage: Not addressed.**

Job 2 is about financial and regulatory risk for someone leaving employment. The demo provides no cost estimates, no timeline guidance, no sequencing of regulatory steps, and no information about penalties or deadlines. A user transitioning to self-employment who enters their planned business type would receive partner suggestions — but what they need is to know that the CZC must come before the BPOL, that the BPOL has a 30-day filing window after opening, and that total startup costs for their business type will be approximately $X.

**Gap fixable or fundamental?** Fundamental. Same as Job 1 — different product concept required.

### Job 3: The SBDC Counselor or City Staff Answering the Same Questions

> "I want a self-service tool that handles the common path — business type identification, sequenced steps, agency links, cost estimates — so I can focus my limited time on complex cases."

**Coverage: Not addressed.**

The demo does not reduce the advisory burden on SBDC counselors, SCORE mentors, OMBD staff, or RVA 311 agents. These staff members spend the majority of their time answering "where do I start?" and "what do I need?" questions. The demo answers "who should I connect with?" — a different question entirely, and one that typically arises later in the business lifecycle.

**Gap fixable or fundamental?** Fundamental. The tool serves a different user at a different stage.

---

## Opportunities — Repurposing the Pattern for PS2

The demo's technical foundations — SCC data pipeline, Claude AI enrichment, working prototype — are genuinely valuable. The question is whether these components could be redirected toward the actual PS2 problem.

### Opportunity 1: SCC Data as a "Businesses Like Yours" Engine

The 14,000 active Richmond businesses, categorized by Claude, could power a "businesses like yours already operating in Richmond" feature within a startup navigation tool. A first-time entrepreneur entering their planned business type could see: how many similar businesses exist in Richmond, what entity structures they chose (LLC vs. sole proprietorship vs. corporation), and what neighborhoods they operate in. This contextualizes the startup decision without replacing the regulatory navigation.

**Dependencies:** Mapping SCC entity types to business structure decision trees. Validating Claude's categorization accuracy for this use case.

### Opportunity 2: AI-Enriched Business Type → Permit/License Mapping

The Claude enrichment pattern (take sparse SCC data → infer business category) could be applied to the reverse problem: take a user's business description → infer which permits, licenses, and registrations are required. Instead of matching the user to other businesses, match the user to a sequenced checklist of regulatory steps. The SCC data would serve as training/validation data (these are real businesses that successfully navigated the process), and Claude would generate the step-by-step path.

**Dependencies:** Curated rules engine mapping business types to required permits/licenses (this data exists across City and state websites but is not consolidated). Validation against SBDC counselor knowledge to catch errors.

### Opportunity 3: Partnership Finder as a Post-Registration Feature

The current demo could be repositioned as a **Phase 2 feature** within a broader startup navigation tool. Sequence: (1) Help the entrepreneur register their business → (2) Once registered, connect them to Richmond businesses they should know. This reframes the partnership finder as a "welcome to the Richmond business community" onboarding step that follows regulatory completion, rather than replacing it.

**Dependencies:** Building the Phase 1 regulatory navigation tool first. Integrating the partnership finder as a post-completion step.

### Opportunity 4: SCC Data Pipeline as Shared Infrastructure

The data pipeline itself (SCC bulk download → filter → enrich → query) is reusable infrastructure. Other demos or future tools addressing PS2 could use the same 14,000-business dataset for different purposes: mentor matching, industry-specific guidance, neighborhood business density analysis, or competitive landscape assessment. Making the pipeline available as a shared resource would multiply its value beyond any single application.

**Dependencies:** Documenting the pipeline. Publishing the filtered/enriched dataset. Establishing a refresh cadence (SCC data changes as businesses form and dissolve).
