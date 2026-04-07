# Lifecycle Review — You Get What You Give RVA

**Pillar:** Thriving Economy
**Problem Statement:** Help first-time entrepreneurs understand what steps to take, in what order, to start and register a business in Richmond.
**Demo:** You Get What You Give RVA (Sam Pritchard)
**Review Date:** April 1, 2026

---

## Rubric Checklist

| Category | Score (1–5) | Rationale |
|----------|-------------|-----------|
| **Impact** | 2 — Emerging | The demo solves a real problem (business networking), but it is not the problem PS2 defines. PS2 asks for startup navigation for first-time entrepreneurs; this tool serves existing businesses seeking partnerships. Impact on the stated civic challenge is low because the target user and use case diverge from the problem statement. |
| **Feasibility** | 4 — Strong | The SCC data pipeline is real, reproducible, and grounded in an authoritative public data source. The filtering methodology (3.5M → inactive removed → Richmond zips → border-zip cleanup → 14k) is sound. Claude enrichment is a reasonable approach for categorizing sparse entity data. Deployment as a web tool with downloadable results is straightforward. |
| **User Value** | 3 — Solid | For an existing Richmond business owner looking for local connections, the tool provides genuine value — three categorized lists with mutual benefit statements, real data, downloadable results. The presenter notes users "really find them valuable." However, the user being served is not the user PS2 describes (first-time entrepreneur who doesn't know where to start). |
| **Execution** | 4 — Strong | Working prototype demonstrated with real data. Complete pipeline from SCC bulk data to user-facing results. Three distinct output categories with AI-generated mutual benefit statements. Downloadable results. Clean demo flow. This is one of the more technically complete demos — it works, it uses real data, and it produces tangible output. |
| **Innovation** | 3 — Solid | Applying LLM enrichment to sparse SCC entity data to infer business categories and generate partnership recommendations is a creative use of available data. The "give first" framing (focus on what you can offer, not what you need) is a distinctive design philosophy. The approach is not technically novel (LLM + structured data → recommendations is a well-established pattern), but the specific application to Richmond's SCC data is original. |
| **Equity & Inclusion** | 2 — Emerging | The tool requires existing business knowledge to use effectively (you need to describe your business to get results). No multilingual support shown. No accessibility features demonstrated. No consideration of how the tool reaches minority-owned businesses, immigrant entrepreneurs, or businesses in underserved neighborhoods. The SCC dataset itself may underrepresent informal and unregistered businesses — the populations most in need of support. |

### Award Alignment

**Mayor's Choice** (Impact ×5, Feasibility ×5, User Value ×4, Execution ×3, Equity ×3, Innovation ×1):
Weighted score: (2×5) + (4×5) + (3×4) + (4×3) + (2×3) + (3×1) = 10 + 20 + 12 + 12 + 6 + 3 = **63 / 105**
Feasibility and Execution carry this score, but Impact is halved by PS2 misalignment.

**Moonshot** (Innovation ×5, Impact ×4, User Value ×3, Equity ×3, Feasibility ×2, Execution ×2):
Weighted score: (3×5) + (2×4) + (3×3) + (2×3) + (4×2) + (4×2) = 15 + 8 + 9 + 6 + 8 + 8 = **54 / 105**

**Pillar Award — Thriving Economy** (Impact ×5, User Value ×4, Feasibility ×3, Innovation ×3, Execution ×3, Equity ×3):
Weighted score: (2×5) + (3×4) + (4×3) + (3×3) + (4×3) + (2×3) = 10 + 12 + 12 + 9 + 12 + 6 = **61 / 105**

---

## What the Demo Does Well

**Real data, real pipeline.** The SCC data source is authoritative and public. The filtering methodology — removing inactive entities, filtering to Richmond zips, cleaning border-zip addresses — demonstrates genuine data engineering, not synthetic demo data. The final dataset of ~14,000 active Richmond businesses is a meaningful civic data asset.

**Working prototype with tangible output.** The demo produces three categorized lists with AI-generated mutual benefit statements. Results are downloadable. The presenter has tested it with real users who find the output valuable. This is a functional tool, not a slide deck.

**Distinctive design philosophy.** The "give first" framing — enter your business and discover who you can help, not just who can help you — is a genuine insight about how business relationships form. The presenter's personal experience validates this approach. It differentiates the tool from a generic business directory.

**Reusable infrastructure.** The SCC data pipeline (bulk download → filter → enrich → query) is valuable beyond this specific application. The pattern could be repurposed for PS2-aligned tools, business density analysis, mentor matching, or competitive landscape assessment.

---

## What Was Fundamentally Missed

**The startup navigation problem.** PS2 is about a first-time entrepreneur who has never started a business, doesn't know what a Certificate of Zoning Compliance is, doesn't know that SCC registration must precede EIN application, and can't find a consolidated list of required permits, licenses, and registrations in the right order. This demo assumes the user already has a functioning business and needs networking connections. The gap between "I don't know how to start a business" and "I need to find partners for my business" is the entire regulatory journey that PS2 asks teams to solve.

**The target user.** PS2's user is a first-time entrepreneur — someone who may be leaving a job, operating informally, or exploring an idea. The demo's user is an existing business owner with enough operational maturity to describe their business, its services, and its needs. These are different people at different stages of the business lifecycle.

**The pain points documented in the research.** The shared JTBD analysis, pain points research, and prior art all center on regulatory sequencing, information fragmentation, opaque terminology, unknowable costs/timelines, and scattered government systems. The demo addresses none of these. It addresses a pain (lack of business connections) that is real but is not the pain PS2 defines.

---

## Blockers

| Blocker | Severity | Detail |
|---------|----------|--------|
| PS2 misalignment | **Critical (for scoring)** | The demo does not address the stated problem statement. Judges scoring Impact against PS2 will find limited alignment. This is not fixable without redesigning the product concept. |
| AI enrichment accuracy unvalidated | **Medium** | Claude infers business categories from SCC entity names and addresses. SCC data is sparse (legal name, entity type, registered agent, address) — many entity names are opaque (e.g., "JRP Holdings LLC"). No accuracy assessment of the categorization was shown. Bad categorizations would produce bad match recommendations. |
| Match quality unvalidated | **Medium** | The strategic partner, vendor, and customer recommendations are AI-generated with no ground-truth evaluation. Do recommended partners actually make sense? Are mutual benefit statements accurate? Without user validation at scale, match quality is an open question. |
| SCC data refresh | **Low** | Businesses form and dissolve continuously. The 14k dataset is a snapshot. Without a refresh mechanism, the data decays over time. SCC data access for bulk refresh is not documented. |
| No equity features | **Low** | No multilingual support, no accessibility features, no consideration of how underserved populations access the tool. |

---

## Recommended Next Steps (Priority Order)

1. **Decide on PS2 alignment.** The team should honestly assess whether they want to pivot toward the stated problem (startup navigation) or continue building the partnership finder as a standalone tool. Both are valid — but they lead to different products. If pivoting, the SCC data pipeline and Claude enrichment pattern are transferable assets (see gap_analysis.md, Opportunities 1–4).

2. **Validate AI enrichment accuracy.** Sample 100 businesses from the 14k dataset. Compare Claude's inferred categories against manual research (business websites, Google, LinkedIn). Calculate accuracy rate. If below 80%, the categorization methodology needs refinement before the tool can be trusted at scale.

3. **Validate match quality with real users.** Have 5–10 Richmond business owners use the tool and rate the relevance of their top-3 results in each category (strategic partners, vendors, customers). Document hit rate and failure modes.

4. **Establish SCC data refresh pipeline.** Document how to re-download and re-process SCC data. Determine refresh cadence (quarterly is likely sufficient given business formation/dissolution rates). Automate if possible.

5. **Add equity considerations.** If the tool continues as a partnership finder: add Spanish language support (Richmond's largest LEP population), ensure mobile responsiveness, and consider how to reach businesses in underserved neighborhoods (Southside, East End) that may not be well-represented in SCC data.
