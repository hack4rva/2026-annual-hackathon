# Prior Art Research — Small Business Navigation

**Pillar:** Thriving Economy
**Problem Statement (verbatim):** Small Business Navigation — Help first-time entrepreneurs understand what steps to take, in what order, to start and register a business in Richmond.
**Applies to:** You Get What You Give RVA, TradePath RVA

---

## Corpus Sources

| File | Relevance | Used |
|------|-----------|------|
| `E1_prior_art_catalog.md` | Comparable tools nationally — municipal portals, permitting platforms, civic tech | **Yes** |
| `C1_services_existing_landscape.md` | Richmond's existing entrepreneurial support ecosystem | **Yes** |
| `C3_services_front_door.md` | How entrepreneurs currently find services; front-door assessment | **Yes** |
| `A2_problem_landscape_small_business_journey.md` | Core problem: regulatory fragmentation and sequencing confusion | **Yes** |
| `E3_prior_art_archetype_mapping.md` | Off-topic: patent archetype taxonomy (Metaphor: ReFantazio references) | **No** |
| `E4_prior_art_pitfalls.md` | Off-topic: USPTO prior-art rejections under 35 U.S.C. § 102/103 | **No** |
| `E5_prior_art_weekend_viability.md` | Off-topic: patent grace period weekend/holiday rules | **No** |
| `D3_data_inventory_business_setup.md` | Off-topic: generic "D3 platform" data model (companies, chart of accounts) | **No** |

Three of eight assigned prior-art files and the data inventory file contain AI-generated content unrelated to small business navigation. This synthesis draws from the four relevant files plus supporting context from A2 and other corpus documents.

---

## National Landscape: What Exists Elsewhere

### Step-by-Step Wizard Models (Highest Relevance)

**NYC MyCity Business** is the clearest prior art for what both demos attempt. It uses a questionnaire to generate a personalized list of required licenses and permits based on business type, location, and operations. It supports 10+ languages, integrates with city services through a single account, and translates professional regulatory terminology into plain language (`E1_prior_art_catalog.md`). This is the gold standard for the "which steps, in what order" problem.

**Chicago Business Direct** consolidates license applications, renewals, tax return filing, and tax payments into a unified online system. Its explicit design goal: "entrepreneurs focus more time on their own business and less time at City Hall" (`E1_prior_art_catalog.md`). It demonstrates that a single portal can meaningfully reduce friction even without solving the upstream state/federal fragmentation.

**Philadelphia** provides detailed multi-pathway registration guidance recognizing that different business structures (sole proprietorship vs. LLC vs. corporation) require different registration sequences at federal and municipal levels (`E1_prior_art_catalog.md`). This is relevant because Richmond's documentation provides no comparative guidance on structure selection — a gap both demos could address.

**Denver e-permits** extends beyond licensing into inspection scheduling with real-time arrival estimates (45-minute buffer), addressing the time-management dimension that Richmond's system completely ignores (`E1_prior_art_catalog.md`).

**Boston's Office of Small Business** provides neighborhood business managers for in-person guidance — a hybrid model acknowledging that digital tools alone are insufficient for many entrepreneurs (`E1_prior_art_catalog.md`). Richmond's OMBD fills a similar role but is centralized downtown rather than distributed by neighborhood.

### Enterprise Permitting Platforms (Background Context)

Commercial platforms like **Accela**, **OpenGov**, **Granicus**, and **Trimble Cityworks** power municipal permitting and licensing in hundreds of jurisdictions. Documented improvements include 50–80% reductions in turnaround times and 80%+ online submission rates (`E1_prior_art_catalog.md`). Richmond uses EnerGov for permits (no public API) and has launched the RVA Business Portal for BPOL/BTPP — but these are compliance filing tools, not navigation tools. The distinction matters: **filing a form is not the same as knowing which form to file, in what order, after which prerequisites**.

**Granicus Government Experience Agent** represents an emerging pattern: an AI-powered conversational interface providing 24/7 jurisdictionally relevant information without requiring users to navigate government websites. This is conceptually similar to what both demos attempt — replacing "hunt through websites" with "ask a question and get a sequenced answer" (`E1_prior_art_catalog.md`).

### Civic Tech Patterns

**Code for America** has organized 105+ brigades comprising ~16,000 members creating civic tech solutions, and its Fellowship program places developer teams inside government agencies for one-year engagements (`E1_prior_art_catalog.md`). No Code for RVA project addressing business navigation was found in the corpus.

**ClearForms** (formerly CityGrows) targets municipalities seeking low-cost digital permitting without enterprise platform complexity. It allows non-technical government staff to configure workflows — relevant if Richmond wanted to build a lightweight step-by-step tool without procuring a major platform (`E1_prior_art_catalog.md`).

---

## Richmond's Existing Front Doors

The corpus documents twelve distinct entry points an entrepreneur might encounter when trying to start a business in Richmond (`C3_services_front_door.md`). None provides a complete, sequenced path:

| Front Door | What It Covers | What It Misses |
|------------|---------------|----------------|
| **RVA Business Portal** (rvapay.rva.gov/bpp) | BPOL and BTPP filing/payment | Everything upstream: SCC, EIN, state tax, CZC. Cannot be accessed until prerequisites are complete. |
| **Virginia Business One Stop** (bos.sbsd.virginia.gov) | Directory of state resources, links to SBDC | No transactions. Functions as a referral hub, not a process tool. |
| **Department of Finance web pages** | Tax types and fee schedules | Organized by tax category, not by startup sequence. |
| **Zoning Administration / Online Permit Portal** | CZC applications | Separate system from Business Portal. No cross-link. |
| **Virginia State Corporation Commission** | Entity formation (LLC, Corp) | No integration with city or federal systems. |
| **Capital Region SBDC** | Free counseling, business planning | Advisory only. Entrepreneur must still navigate every portal independently. |
| **OMBD** | Free workshops, one-on-one coaching for minority businesses | Parallel service layer; does not replace formal system navigation. |
| **RVA 311** | General municipal questions | Help desk, not a navigator. Cannot resolve state/federal questions. |
| **SCORE Richmond** | Free mentoring, workshops | Generalist advice. Does not provide Richmond-specific sequenced steps. |
| **Business License Application Checklist (PDF)** | All 21 authorities/requirements listed | A map of the fragmentation, not a solution to it. No sequencing. |
| **Richmond Economic Development Authority** | Market data, recruitment | Business attraction, not startup formation. |
| **Startup accelerators** (Lighthouse Labs, Startup VA) | Seed capital, mentorship for growth-stage | Serve tech/scalable ventures, not traditional small business formation. |

**Critical finding:** The RVA Business Portal (launched January 2025) is the most integrated entry point but addresses only the municipal compliance stage. It is a middle-stage system, not a front door (`C3_services_front_door.md`).

---

## Richmond's Support Ecosystem

Richmond has a well-developed but fragmented support ecosystem (`C1_services_existing_landscape.md`):

- **Capital Region SBDC**: 1,500 clients served since 2020, 111 new business starts, $41.7M in capital facilitated. Free, no-cost advising. The primary professional advisory resource.
- **OMBD**: Free technical assistance, workshops, business plan templates, vendor registration for city procurement. Located at 1500 E. Main St., 5th Floor.
- **Office of Community Wealth Building**: Entrepreneurship training, financial empowerment, workforce development. First municipal anti-poverty department in the US (est. 2014).
- **Richmond Public Library / Richmond Room**: One-on-one appointments, sample legal documents specific to Virginia law, free database access (Gale Legal Forms, LexisNexis, Universal Class).
- **RVA Works**: Nonprofit providing business training, 1 Million Cups peer learning, Fasttrac curriculum.
- **SCORE Richmond**: Free mentoring since 1965. Extensive workshop calendar covering entity setup, marketing, federal contracting, AI for small business.
- **Women's Business Center of Metro Richmond**: Seminars, Business Model Canvas training, affordable office space.
- **Metropolitan Business League**: 53+ years of networking and procurement advocacy for minority businesses. VCU Procurement Connector.
- **1717 Collective**: Coordination mechanism via Community Foundation of Greater Richmond — but the collective itself may lack visibility among the entrepreneurs it aims to serve.

**Key pattern:** The ecosystem compensates for regulatory fragmentation through human intermediaries. The existence of all these advisory organizations is itself evidence that the formal system is not navigable without help (`C3_services_front_door.md`, `C1_services_existing_landscape.md`).

---

## What Survives vs. What Dies

The corpus and national prior art reveal clear patterns for civic tech tool longevity (`E1_prior_art_catalog.md`):

**Survivors share:**
1. **Durable data pipelines** connected to official, stable sources (Legistar, ArcGIS, SCC filings)
2. **Institutional stewardship** — a dedicated maintainer or host organization (DataMade for Councilmatic, NYC for MyCity)
3. **Clearly defined scope** — solves one real user problem rather than trying to be a platform
4. **Robust deployment/hosting** with minimal ongoing maintenance burden

**Failures share:**
1. **No stable data feeds** — data drifts as source systems change
2. **No ongoing maintainers** — volunteer burnout after initial hackathon energy
3. **Scope creep** — tried to solve everything, maintained nothing
4. **No institutional adoption** — tool exists outside government, government has no incentive to keep it alive

---

## Weekend-Build Viability Patterns

The corpus intended to address weekend-build viability (`E5_prior_art_weekend_viability.md`) is off-topic, but the national prior art suggests viable hackathon patterns for this PS:

| Pattern | Example | Weekend-Build Feasibility |
|---------|---------|--------------------------|
| **Questionnaire → personalized checklist** | NYC MyCity wizard | **High.** Rules engine is finite (business type × location → required steps). Can be built as a static decision tree with curated data. |
| **Business matching / discovery** | You Get What You Give RVA (SCC data + Claude enrichment) | **High.** SCC data is publicly searchable. Enrichment via LLM is demo-ready. |
| **Career pathway + financial product** | TradePath RVA (skilled trades + revolving loan) | **Medium.** Pathway content is buildable. Loan fund integration requires real partnership (People's Advantage FCU). |
| **AI conversational navigator** | Granicus Government Experience Agent | **Medium.** RAG over curated Richmond startup content is achievable. Accuracy/hallucination risk is the constraint. |
| **Integrated multi-agency portal** | Chicago Business Direct | **Not feasible.** Requires government system integration that cannot be built in a weekend. |

---

## Implications for Judging

Both demos address a problem with clear national prior art and a well-documented local gap. Judges should evaluate:

1. **Does the demo reduce the sequencing problem?** The core pain is "what steps, in what order." A tool that surfaces the right steps for a specific business type is more valuable than a general resource directory.
2. **Does it work with real Richmond data?** You Get What You Give RVA uses 14k active Richmond businesses from SCC data. TradePath RVA builds on real skilled trades pathways. Judges should probe whether the data is current, accurate, and maintainable.
3. **Could it survive Monday?** The prior art is clear: tools that depend on manual data curation die. Tools connected to stable public data sources live. Which pattern does each demo follow?
4. **Does it reach the people who need it most?** The equity dimension matters. First-generation immigrants, non-English speakers, and residents without broadband are the hardest to serve and the most harmed by the current fragmentation (`G3_risks_inclusion_accessibility.md`).
