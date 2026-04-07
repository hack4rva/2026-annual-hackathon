# Lifecycle Review — Text 311

**Pillar:** A Thriving City Hall
**Problem Statement:** Help residents find the right City service or department quickly, so requests get routed correctly the first time.
**Demo:** Text 311 (Byrd Park Geese — Anna, Johnny, Charlie, Daniel)
**Review Date:** March 31, 2026

---

## Rubric Checklist

| Step | Name | Output File | Status | Notes |
|------|------|-------------|--------|-------|
| 1 | Problem Grounding | `gap_analysis.md` (header) | ✅ Complete | Problem statement verbatim, primary user, pain, desired outcome all present. |
| 2 | JTBD Analysis | `jtbd_analysis.md` | ✅ Complete | Shared file — 3 jobs in proper format with triggering situations and outcomes. |
| 3 | Question Generation | `jtbd_analysis.md` (Open Questions) | ✅ Complete | Shared file — 16 open questions across data, user, integration, equity, prior art categories. |
| 4 | Prior Art Research | `prior_art_research.md` | ✅ Complete | Shared file — 7+ regional implementations, data sources, failure modes, synthesis. |
| 5 | Pain Point Research | `pain_points.md` | ✅ Complete | Shared file — pain points per JTBD, evidence-grounded, equity dimension addressed. |
| 6 | Data Source Mapping | `gap_analysis.md` (Data Source Map) | ✅ Complete | 4 data claims mapped; 2 flagged as unverified/synthetic; SME access needs identified. |
| 7 | SME Outreach | — | ⚠️ Blocked | No outreach email drafted for this demo. The 311 API access question (AvePoint integration) is the critical blocker and requires a draft email to City IT / 311 operations. An existing draft at `outreach/thriving-built-environment/311-service-data.md` partially covers this but is scoped to Built Environment, not City Hall. |
| 8 | Gap Analysis | `gap_analysis.md` (Gap Analysis) | ✅ Complete | All 3 JTBDs assessed (Partial/Partial/Partial). Missing items and fixability documented. |
| 9 | Opportunity Mapping | `gap_analysis.md` (Opportunities) | ✅ Complete | 3 opportunities named with dependencies. |
| 10 | Solution Ideation | `solution_ideas.md` | ✅ Complete | 10 ideas; prior art cited; data sources named; JTBDs addressed; 3 equity ideas (Ideas 3, 6, 9); 1 adopt-existing (Idea 1). |
| 11 | Lifecycle Review | `lifecycle_review.md` | ✅ Complete | This file. |

---

## What Was Fundamentally Missed

Text 311's core architecture — SMS-based 311 access for any phone, any language, any time — is the strongest accessibility play among the three demos. It directly addresses the digital divide that the other demos (web-based) do not. However, the demo's two strongest claims — real-time duplicate detection and direct submission to RVA311 — both depend on API access to the AvePoint/Dynamics 365 platform, which has no confirmed public API. Without that access, Text 311 is an SMS chatbot that talks about 311 but doesn't connect to it.

The multilingual claim ("any language") was not demonstrated and is unvalidated. Given that 71.57% of Richmond's LEP population speaks Spanish, a single validated Spanish-language flow would be worth more than a theoretical "any language" capability.

---

## Blockers

| Blocker | Severity | Specific Ask |
|---------|----------|--------------|
| No confirmed API for AvePoint/Dynamics 365 311 platform | **Critical** | Contact City IT or 311 Operations to determine: (1) Does AvePoint expose a submission API? (2) Does it expose a read API for existing requests? (3) What procurement/security review is required for a third-party tool to submit? |
| Multilingual capability unvalidated | **High** | Conduct end-to-end testing with Spanish-speaking users. Validate that OpenAI API handles Richmond-specific government terminology in Spanish. Document which languages were tested and results. |
| Only 2 of ~50-70 311 categories implemented | **Medium** | Obtain the full AvePoint service request taxonomy. Map each category to plain-language descriptions. Assess which categories are high-volume and should be prioritized for AI classification. |
| No staff-side experience shown | **Medium** | Demo what a Text 311 submission looks like when it arrives in the AvePoint system. Validate that classification matches AvePoint categories 1:1. Show the staff workflow for requests submitted via SMS. |

---

## Recommended Next Steps (Priority Order)

1. **Draft and send SME outreach to 311 Operations / City IT** — the single question that unlocks or kills this project is AvePoint API access. Everything else is engineering. This question is binary: either there's a pathway to integrate, or there isn't.

2. **Contact New Orleans 311 team** — they launched a directly comparable SMS-based AI 311 chatbot in 2025. Ask for: integration architecture, cost model, adoption data, lessons learned. This saves months of experimentation.

3. **Run a Spanish-language validation pilot** — recruit 5-10 Spanish-speaking Richmond residents. Test the full SMS flow end-to-end. Document failures. Fix before claiming multilingual support.

4. **Expand from 2 categories to the top-10 by volume** — get the AvePoint category list, identify the highest-volume request types, and train/test the AI classifier on those first. Don't try to cover all ~50-70 categories at once.

5. **Design the confidence-threshold escalation path** — define what happens when the AI is unsure: present options (wizard pattern), escalate to human, or offer to call 311. Never leave the resident in a dead end.
