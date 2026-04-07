# Innovation Analysis: Multi-Pillar AI

## Idea Summary

A cross-pillar AI platform for Richmond city services — an LLM-powered assistant or "City Brain" that routes resident queries across multiple MAP pillar domains (families, housing, workforce, health, etc.) rather than siloing each pillar into its own tool. Modeled on the ambition of Singapore's VICA (800K monthly queries, 92% resolution) and the cautionary tale of Toronto's Quayside collapse.

---

## Lens 1 — Blue Ocean Reframing (ERRC Grid)

| Action | Factor | Rationale |
|--------|--------|-----------|
| **Eliminate** | Siloed chatbots per department/pillar | Singapore consolidated 100 agency chatbots into VICA; having 7 separate pillar tools creates the same fragmentation the hackathon is trying to solve |
| **Eliminate** | "Kitchen sink" RFP procurement that locks the city into one vendor | OECD data: only 17% of governments use monolithic systems; 45% use distinct, interconnected modular systems |
| **Reduce** | Resident burden of knowing which department to contact | A resident with a family crisis doesn't know if they need workforce services, housing, or health — cross-pillar routing solves this |
| **Reduce** | Risk of Sidewalk Labs / Quayside-style governance failure | Toronto spent $50M and failed due to opaque data governance; scope and transparency must be constrained from day one |
| **Raise** | Modular architecture over monolithic ambition | Barcelona's Sentilo succeeded by being a horizontal data router (10,350 sensors) rather than a vertical silo |
| **Raise** | Governance and citizen consent as first-class design requirements | Singapore's Model AI Governance Framework + AI Verify toolkit test against 11 ethical principles |
| **Create** | Cross-domain query routing powered by LLM understanding of resident intent | No existing Richmond tool can take "I just lost my job and my kid needs health insurance" and route to both workforce and Medicaid |
| **Create** | Richmond-specific knowledge base trained on MAP pillars, city services, and eligibility rules | Moves beyond generic chatbot to context-aware civic assistant |

**Core assumption challenged:** "Richmond needs one AI platform to rule them all." The research emphatically warns against this. The Philippines' FASTRAC succeeded with tiered deployment (Starter, Basic, Premium) matched to local capacity. Hangzhou's City Brain worked only because of massive centralized authority that doesn't exist in a US city. The right model is narrow tools connected by a lightweight routing layer — not a monolith.

---

## Lens 2 — Rapid Ideation (Crazy 8s)

| # | Variant | Twist |
|---|---------|-------|
| 1 | **MAP Pillar Router** — Resident types a question → LLM classifies which pillar(s) it touches → routes to the right resource or department | Baseline concept |
| 2 | **311-to-LLM Bridge** — Intercepts Richmond 311 calls/texts and provides AI-assisted triage before routing to the right department | Practical narrow entry point using existing infrastructure |
| 3 | **Cross-Pillar Needs Detector** — Resident describes one problem → system identifies 2–3 related needs across pillars and surfaces all relevant services simultaneously | 🔥 Provocative: "I need childcare" → also surfaces transit passes, food assistance, and job training |
| 4 | **Modular Plugin Architecture** — Each pillar team builds their own chatbot; the platform provides the routing layer and shared knowledge base only | Barcelona Sentilo model: horizontal backbone, vertical specialization |
| 5 | **Civic FAQ Generator** — Scrape Richmond's city website, 311 data, and MAP documents → auto-generate answers to the top 100 resident questions per pillar | 🔥 Provocative: replaces the need for a chatbot entirely — just publish better FAQs |
| 6 | **Privacy-First Local LLM** — Run a small open-source model (Llama, Mistral) on city infrastructure so no resident data ever leaves city servers | Addresses the Quayside/Palantir surveillance critique head-on |
| 7 | **Tiered Rollout (FASTRAC Model)** — Starter: FAQ bot for 1 pillar. Basic: multi-pillar routing. Premium: cross-agency case management integration | Philippines-inspired phased deployment matched to Richmond's IT capacity |
| 8 | **Council Meeting Summarizer** — LLM processes Richmond City Council meeting transcripts and answers resident questions about decisions affecting their neighborhood | Narrow, high-value use case that avoids the governance complexity of service routing |

---

## Lens 3 — Rapid Design Sprint

**Problem sentence:** Richmond residents facing intersecting challenges (job loss + childcare + housing) must navigate siloed city departments independently, with no tool that understands multi-domain needs or routes across pillar boundaries.

**User journey (primary persona: Single parent who just lost their job):**
1. Parent texts a Richmond helpline number: "I just lost my job. I have two kids and I'm worried about rent."
2. Multi-Pillar AI classifies: Workforce (job loss) + Families (childcare) + Housing (rent risk)
3. Responds: "I can help with several things. For jobs: [RVA Works link]. For childcare assistance: [Connect4Care]. For rent help: [RRHA emergency assistance]. Which would you like to start with?"
4. Parent replies "jobs" → hands off to workforce pillar tool or case manager
5. Follow-up text next day: "Did you connect with RVA Works? Also, here's info on childcare subsidies that can help while you job search."

**Prototype shape:** Twilio SMS endpoint → OpenAI API (or local LLM) with system prompt containing Richmond service directory → intent classification → response with curated links. Knowledge base: manually compiled directory of 30–50 Richmond services across 7 pillars with eligibility rules.

**First test:** Collect the 20 most common 311 call types in Richmond. For each, test whether the AI can correctly identify the pillar(s) involved and route to the right service. Measure accuracy and identify failure modes.

---

## Lens 4 — Opportunity Mapper

### Pattern 1: "Cross-Pillar Triage for Residents"

| Dimension | Detail |
|-----------|--------|
| **User** | Richmond residents with multi-domain needs (intersecting workforce, housing, family, health challenges) |
| **Outcome** | Single entry point surfaces relevant services across all 7 MAP pillars simultaneously |
| **Workflow** | Natural language query → intent classification → multi-pillar response with curated service links |
| **Dependencies** | Comprehensive Richmond service directory; LLM API or local model; SMS/web interface |
| **Richmond relevance** | Richmond's 311 system (AvePoint on Dynamics 365) has no public API — this could serve as an accessible alternative for service discovery |

### Pattern 2: "Department-Agnostic FAQ System"

| Dimension | Detail |
|-----------|--------|
| **User** | City staff answering resident questions and 311 operators |
| **Outcome** | Consistent answers to common questions regardless of which department the resident initially contacts |
| **Workflow** | Staff inputs resident question → AI returns the canonical answer with source citation → staff relays to resident |
| **Dependencies** | Knowledge base compiled from city website, department pages, and MAP documents |
| **Richmond relevance** | Singapore's VICA handles 800K queries/month across 100 chatbots; Richmond could start with the top 50 questions |

### Pattern 3: "Hackathon Integration Layer"

| Dimension | Detail |
|-----------|--------|
| **User** | Other hackathon teams building pillar-specific tools |
| **Outcome** | A shared routing layer that connects all pillar prototypes into a unified resident experience |
| **Workflow** | Resident query → multi-pillar AI routes to the appropriate pillar tool (GRTC Shift-Fit Scout, Maternal Metric Lock-In, etc.) |
| **Dependencies** | Other teams exposing their prototypes via web URL or API |
| **Richmond relevance** | Prevents the hackathon itself from producing 7 disconnected pillar tools that replicate the fragmentation they're trying to fix |

---

## Lens 5 — Problem Scoping

| Dimension | Score (1-5) | Rationale |
|-----------|:-----------:|-----------|
| **Impact** | 4 | Cross-pillar routing addresses a real navigation burden; but the impact depends on the quality of underlying services, not the router |
| **Feasibility** | 2 | Comprehensive service directory curation is enormous; LLM accuracy for civic routing is unproven; governance and AI policy (AR 2.13) compliance adds complexity |
| **Data readiness** | 2 | No structured Richmond service directory exists in machine-readable format; would need manual compilation |
| **Problem clarity** | 4 | "Residents don't know which department to call" is well-understood; less clear that an AI chatbot is the right solution vs. better website organization |
| **Demo-ability** | 4 | Text a question, get a multi-pillar response — demos well. But accuracy failures in demo are embarrassing |
| **Total** | **16/25** | |

### Weekend MVP Shapes

- **Shape A (Minimum):** Hardcoded decision tree: user selects a category (jobs, housing, health, childcare, etc.) → gets curated link list. No LLM, no natural language. Proves the service directory, not the AI.
- **Shape B (Demo-ready):** OpenAI API with a system prompt containing 30 Richmond services and their descriptions. User texts a question → gets a pillar-classified response with service links. Works for the demo; accuracy is unpredictable.
- **Shape C (Stretch):** Add RAG (Retrieval Augmented Generation) over a scraped Richmond city website + MAP documents. Embed citations in responses. Include confidence scoring to avoid hallucinated service recommendations.

---

## Lens 6 — Assumption Mapping

| # | Assumption | Risk (1-5) | Uncertainty (1-5) | R × U | Validation approach |
|---|-----------|:----------:|:-----------------:|:-----:|-------------------|
| 1 | An LLM can accurately classify Richmond resident queries into MAP pillars | 4 | 4 | **16** | Test 20 real 311 call descriptions against GPT-4 classification; measure accuracy |
| 2 | A comprehensive Richmond service directory can be compiled in a weekend | 5 | 3 | **15** | Attempt to list 30 services with eligibility rules, hours, and contact info; measure time required |
| 3 | Richmond's AI policy (AR 2.13) permits a resident-facing AI chatbot with DIT oversight | 4 | 4 | **16** | Review AR 2.13 text; determine whether a hackathon prototype falls under its scope or requires DIT approval |
| 4 | Residents will trust and use an AI assistant for civic services | 3 | 4 | 12 | Toronto's Quayside failed on trust; test with 5 residents whether they'd text an AI for service routing |
| 5 | Cross-pillar routing adds value over just improving the city website's navigation | 3 | 3 | 9 | Compare time-to-find-service: AI chatbot vs. current richmond.gov website for 5 common scenarios |
| 6 | The LLM won't hallucinate services that don't exist or provide incorrect eligibility information | 5 | 3 | **15** | Run 20 test queries; audit every response for factual accuracy against known service directory |

**Top 3 to validate first:**
1. **LLM classification accuracy** (R×U=16) — If the AI misroutes residents, it's worse than no tool at all
2. **AI policy compliance** (R×U=16) — Richmond's AR 2.13 may require DIT oversight for any resident-facing AI deployment
3. **Service directory completeness** (R×U=15) — The AI is only as good as its knowledge base; an incomplete directory creates dangerous gaps

---

## Key Takeaway

Multi-Pillar AI is the highest-ambition, highest-risk idea in the Thriving Families pillar. The research is clear on both the potential (Singapore's VICA resolves 92% of 800K monthly queries) and the danger (Toronto's $50M Quayside collapse, Palantir's HessenDATA transparency controversies). For Richmond, the OECD finding is decisive: 83% of advanced governments do not use monolithic platforms. The right approach is Barcelona's Sentilo model — a horizontal routing layer connecting narrow, well-built pillar tools — not a City Brain that tries to do everything. A weekend MVP should focus on proving LLM classification accuracy against real Richmond 311 queries, not building a full chatbot, and must address AR 2.13 compliance before any resident-facing deployment.
