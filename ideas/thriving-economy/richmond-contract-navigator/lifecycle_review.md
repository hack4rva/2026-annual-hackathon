# Lifecycle Review — Richmond Contract Navigator

**Pillar:** A Thriving Economy
**Problem Statement:** MBE Contracting Discovery — Help minority-owned businesses identify and understand City contracting opportunities that match their capabilities.
**Demo:** Richmond Contract Navigator (Mia Wan, Team Silverlight)
**Review Date:** April 1, 2026

---

## Rubric Checklist

| Category | Notes |
|----------|-------|
| **Impact** | Directly targets the primary root cause identified in the research: "lack of a trusted front door" (`A5_problem_landscape_root_causes.md`). The plain-language matching approach addresses information asymmetry — the core disparity keeping MBEs from City contracts (P1.3). Aligns to MAP Pillar 4's goal of lowering barriers for minority-owned and first-time businesses. Real civic problem with documented structural barriers. The impact is constrained by the data source question: if matching against historical awards rather than active solicitations, the tool informs but does not enable bidding. |
| **Feasibility** | The AI matching layer, glossary, and readiness checklists are all demonstrable and technically sound for a weekend build. The critical feasibility question is data: active solicitation data from BidNet Direct or OpenGov has no confirmed public API (`D2_data_formats_procurement.md`). If the demo uses the Socrata City Contracts dataset (monthly, awarded contracts only), the tool cannot power real-time opportunity discovery without a new data pipeline. Email alerts compound this — they require a live feed of new solicitations. Pilotable if the City provides a structured solicitation feed; blocked without it. |
| **User Value** | High for the target user (Job 1). An MBE owner who today must decode IFBs, NAICS codes, and bonding requirements across four platforms can instead type "I run a cleaning business" and see plain-English results with match explanations and readiness checklists. The glossary and vendor roadmap add genuine educational value. User value for Job 2 (first-time vendors) is partial — the roadmap exists but lacks the specific 5-step registration sequence. User value for Job 3 (OMBD staff) is minimal — the tool has no staff-facing surface. |
| **Execution** | Working prototype demonstrated end-to-end: business description input → AI matching → results with explanations → readiness checklists → glossary → dataset links. Multiple features shown functioning, not just slides. The demo used Mia's own business (Lotus Love LLC) as the test case, grounding it in a real scenario. Email alerts and the vendor roadmap were shown as available features. Polished for a hackathon build. |
| **Innovation** | The prior art research confirms: "No U.S. city has deployed a production-grade AI-powered contract matcher for MBEs" (`E1_prior_art_catalog.md`). The closest analogs are BillTrack50 (regulatory language normalization) and NYC MyCity Business (personalized requirement wizard), but neither combines plain-language business description → procurement opportunity matching with per-result explanations. The "Why it matched" feature is a genuine contribution — it doesn't just return results, it explains the reasoning, which builds user trust and procurement literacy simultaneously. |
| **Equity & Inclusion** | Targets MBE owners — the population the MAP pillar is designed to serve. Plain-language input lowers the literacy barrier that functions as an invisible filter (P1.1). However: no multilingual support was demonstrated despite research documenting that Richmond's immigrant business community faces compounded language and digital literacy barriers (`G3_risks_inclusion_accessibility.md`). No discussion of algorithmic matching bias mitigation, which the research flags as a concrete risk for LLM-powered procurement matching (`G4_risks_matching_bias.md`). No privacy/data handling disclosure for sensitive business information. No mobile optimization discussed despite research showing MBE owners in economically disadvantaged communities disproportionately rely on mobile devices (`G3_risks_inclusion_accessibility.md`). |

---

## What the Demo Does Well

**Nails the core value proposition.** The research identifies "lack of a trusted front door" as the primary root cause — no single entry point where MBE owners can describe what they do and see matching opportunities. Richmond Contract Navigator is exactly that front door. The design decision to accept plain-language business descriptions rather than requiring NAICS codes or commodity classifications is the right call and directly addresses the vocabulary barrier (P1.1, Job 1).

**"Why it matched" is the standout feature.** Most search tools return results and leave the user to figure out relevance. The per-result explanation of why a contract matched the business description reduces the cognitive load that the JTBD identifies as the core barrier. It also builds procurement literacy — users learn the connection between their capabilities and procurement categories over time, which is a second-order benefit no other approach provides.

**Vendor readiness checklists ground the tool in action.** Showing "here's a matching contract" without "here's what you need to bid on it" would leave users at a dead end. The per-contract readiness checklist bridges the gap between discovery and action. This directly responds to the "don't know what to do first" barrier in Job 2.

**Glossary converts jargon into an educational resource.** Rather than avoiding procurement terms entirely, the glossary teaches users what IFB, bonding, and NAICS codes mean in plain English. This is the right design: the user needs to eventually understand this vocabulary to participate in procurement, and providing a translation layer helps them build that knowledge incrementally.

**Transparency via dataset links.** Direct links to the underlying datasets from within the tool is a trust-building decision. Users can verify that the tool's recommendations come from real City data, not fabricated results. This matters particularly for MBE owners who may be skeptical of AI-generated recommendations about government processes.

---

## Fundamentally Missed

**Active vs. historical data is the unresolved question.** The demo references an "open city dataset" but does not clarify whether it queries active solicitations (biddable opportunities) or the Socrata City Contracts dataset (awarded contracts, monthly update, not biddable). The prior art research is explicit: "The City Contracts dataset on Socrata is sometimes cited as a procurement transparency resource, but its monthly update cadence and focus on awarded (not open) contracts make it useless for real-time opportunity matching. A tool built on this dataset alone would show MBE owners contracts they've already missed" (`E4_prior_art_pitfalls.md`). If the demo is matching against historical awards, it is demonstrating a pattern-analysis tool, not an opportunity-discovery tool — a different (and less urgent) product.

**Job 3 (OMBD staff proactive outreach) is not addressed.** The third JTBD describes OMBD staff who want to match solicitations to registered vendors proactively — not wait for vendors to find opportunities themselves. The demo is entirely vendor-facing. No staff dashboard, no batch matching against the OMBD vendor database, no outreach workflow. This is the job where the research identifies the biggest institutional leverage: "The gap between 'posting opportunities' and 'matching them to businesses' is where MBE participation falls through the cracks" (P3.2). Email alerts partially step toward proactive notification, but from the vendor side, not the staff side.

**The 5-step vendor registration sequence is not surfaced.** The pain point research documents that a first-time vendor must complete five separate registrations: BPOL → SWaM/MBE certification → OMBD → BidNet Direct → iSupplier, with no existing resource laying out the sequence (P2.1). The demo includes a "general vendor readiness roadmap" but does not indicate whether it covers this specific, documented path. A first-time vendor who finds a matching contract through the tool and then needs to navigate five separate registration systems is still stuck at the wayfinding problem the JTBD describes.

**No multilingual support.** The cross-cutting equity research documents that Richmond's immigrant business community faces compounded barriers: procurement jargon is no more intelligible when translated word-for-word, and digital literacy gaps compound language barriers (`G3_risks_inclusion_accessibility.md`). The demo operates in English only. Given that the tool already uses an LLM, accepting input in Spanish and generating Spanish-language explanations is technically feasible and would extend the tool's reach to a population facing the steepest barriers.

**No algorithmic bias mitigation.** The risk research documents that LLMs exhibit "matching bias" — over-reliance on surface-level lexical similarity — which in a procurement context could favor businesses whose self-descriptions already use procurement vocabulary over equally qualified businesses that describe capabilities in plain language, or match firms to historically awarded categories while missing new categories where MBEs are qualified but underrepresented (`G4_risks_matching_bias.md`). The demo shows no awareness of this risk — no diversified retrieval, no adversarial prompt ensembles, no human-in-the-loop validation. For a tool explicitly targeting equity outcomes, unmitigated AI bias is a substantive gap.

---

## Blockers

| Blocker | Severity | Specific Ask |
|---------|----------|--------------|
| Data source ambiguity — active solicitations vs. historical awards | **Critical** | Clarify which dataset powers the matching. If Socrata (awarded contracts), the tool cannot serve its stated purpose of helping MBEs *identify* opportunities. Secure access to active solicitation data from BidNet Direct or OpenGov, or establish a data pipeline with the City's Procurement Services office. |
| BidNet Direct API access unknown | **Critical** | Contact City Procurement Services to determine: (1) Does BidNet Direct expose an API for active Richmond solicitations? (2) Does OpenGov? (3) Would the City permit a third-party tool to surface active solicitations? Without this, real-time matching and email alerts are not feasible (`D2_data_formats_procurement.md`, Open Question #2). |
| AI match quality unvalidated | **High** | The match strength ratings (Strong/Good) and "Why it matched" explanations were not validated against ground truth. Run the tool against a set of historical solicitations where the correct matches are known (e.g., ask OMBD staff which vendors should have matched which contracts) and measure precision/recall. Document the results. |
| No multilingual support | **High** | Richmond's LEP business community cannot use an English-only tool. Add Spanish-language input/output as a minimum. Test with actual Spanish-speaking MBE owners, not just machine translation of English prompts (`G3_risks_inclusion_accessibility.md`). |
| No privacy/data handling disclosure | **Medium** | The tool collects business descriptions and email addresses. MBE owners — especially those from immigrant communities — may be cautious about sharing business details with systems connected to government data. Publish a clear statement on what data is collected, how it's stored, who can access it, and whether registration creates public visibility (`G3_risks_inclusion_accessibility.md`). |
| Vendor readiness checklists may hallucinate requirements | **Medium** | If the per-contract checklists are LLM-generated without grounding in actual solicitation documents, they may include incorrect bonding amounts, wrong certification requirements, or fabricated insurance thresholds. Validate checklist accuracy against actual IFB/RFP documents for the contracts shown in the demo. |

---

## Recommended Next Steps (Priority Order)

1. **Resolve the data source question.** Contact City Procurement Services to determine API access for active solicitations on BidNet Direct and OpenGov. This is binary: either there's a path to real-time opportunity data, or the tool is limited to historical analysis. Everything else depends on this answer. Draft an SME outreach email to the City's procurement office.

2. **Validate AI match quality against known-good matches.** Select 10-20 historical solicitations. Ask OMBD staff or procurement officers to identify which vendor types should match. Run the tool and compare. Document precision, recall, and failure modes. This is the evidence needed to trust the "Strong/Good" ratings.

3. **Enrich the vendor readiness roadmap with the documented 5-step sequence.** Replace or supplement the general roadmap with: BPOL license → SWaM/MBE certification (note ~60-day timeline) → OMBD Vendor Registration → BidNet Direct registration → iSupplier registration. Add required documents per step, estimated timelines, and links to each portal. Model this on NYC's MyCity Business Step-by-Step Wizard (`E1_prior_art_catalog.md`).

4. **Add Spanish-language support.** Accept business descriptions in Spanish. Generate match explanations and readiness checklists in Spanish. Test end-to-end with Spanish-speaking MBE owners in Richmond. Don't claim "multilingual" — claim "English and Spanish, tested."

5. **Build an OMBD staff-facing dashboard.** Run the matching logic in reverse: when a solicitation is posted, identify registered MBE vendors whose profiles match. Surface as a simple dashboard for OMBD staff to review and push notifications. This addresses Job 3 and creates institutional value beyond the individual vendor use case.

6. **Add algorithmic bias safeguards.** Implement at least one mitigation from the research: diversified retrieval augmentation (ground matches in structured commodity codes, not just LLM inference), or human-in-the-loop review for match recommendations. Document the approach and make it visible to users (`G4_risks_matching_bias.md`).
