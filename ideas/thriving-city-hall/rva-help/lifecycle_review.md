# Lifecycle Review — RVA Help

**Pillar:** A Thriving City Hall
**Problem Statement:** Help residents find the right City service or department quickly, so requests get routed correctly the first time.
**Demo:** RVA Help (The Hackstreet Boys — Josh and Nadeesh)
**Review Date:** March 31, 2026

---

## Rubric Checklist

| Step | Name | Output File | Status | Notes |
|------|------|-------------|--------|-------|
| 1 | Problem Grounding | `gap_analysis.md` (header) | ✅ Complete | Problem statement verbatim, primary user (resident submitting vague/misclassified request), pain (misroutes, staff callbacks, no status visibility), desired outcome (guided intake with structured classification). |
| 2 | JTBD Analysis | `jtbd_analysis.md` | ✅ Complete | Shared file — 3 jobs in proper format. |
| 3 | Question Generation | `jtbd_analysis.md` (Open Questions) | ✅ Complete | Shared file — 16 open questions. |
| 4 | Prior Art Research | `prior_art_research.md` | ✅ Complete | Shared file — regional implementations, data sources, failure modes, synthesis. |
| 5 | Pain Point Research | `pain_points.md` | ✅ Complete | Shared file — pain points per JTBD with evidence and equity dimension. |
| 6 | Data Source Mapping | `gap_analysis.md` (Data Source Map) | ✅ Complete | 8 data claims mapped. Ticket system and staff dashboard flagged as synthetic/demo-only. Google Maps API and Spanish translation verified as real. |
| 7 | SME Outreach | — | ⚠️ Blocked | No outreach email drafted for this demo. Critical questions: (1) AvePoint submission API, (2) 311 service taxonomy export, (3) staff workflow compatibility. Same AvePoint integration blocker as Text 311. |
| 8 | Gap Analysis | `gap_analysis.md` (Gap Analysis) | ✅ Complete | All 3 JTBDs assessed — Job 1 Full, Job 2 Partial (strongest accessibility), Job 3 Full (strongest staff story). |
| 9 | Opportunity Mapping | `gap_analysis.md` (Opportunities) | ✅ Complete | 3 opportunities with dependencies. |
| 10 | Solution Ideation | `solution_ideas.md` | ✅ Complete | 10 ideas; prior art cited; data sources named; JTBDs addressed; 3 equity ideas (Ideas 4, 6, 9); 1 adopt-existing (Idea 1). |
| 11 | Lifecycle Review | `lifecycle_review.md` | ✅ Complete | This file. |

---

## What Was Fundamentally Missed

RVA Help has the strongest end-to-end design of the three demos. The structured intake flow (describe → clarify → review → submit) is exactly the intervention the research identified as highest-impact: reduce vague and misrouted submissions at the source, before they enter the 311 system. The staff-side story (classified context, conversation transcript, internal notes) is the most complete of any demo. The accessibility panel (Spanish, simple language, high contrast, font size, reduced motion) is the most comprehensive.

The fundamental miss is that **RVA Help built its own ticketing system instead of integrating with the existing one.** The demo shows a beautiful ticket view, activity log, and staff dashboard — but none of it connects to AvePoint/Dynamics 365. In a real deployment, staff would need to check two systems (AvePoint for everything else, RVA Help for AI-assisted submissions). This increases burden rather than reducing it. The structured intake is valuable; the parallel ticketing system is not.

The secondary miss is web-only deployment. Like Hey804, RVA Help does not reach residents without internet access. However, this is less severe for RVA Help because it's positioned as a submission tool (comparable to the existing RVA311 website), not as a universal access channel. The SMS gap is real but not the primary design intent.

Built by high school students in a weekend, RVA Help demonstrates remarkable product thinking. The design decisions — structured intake, staff-side context, accessibility-first, internal/external note separation — are exactly right. The gap is integration, not design.

---

## Blockers

| Blocker | Severity | Specific Ask |
|---------|----------|--------------|
| Standalone ticket system — not integrated with AvePoint | **Critical** | The entire staff-side value proposition depends on submissions landing in AvePoint, not a separate system. Determine: (1) Does AvePoint expose a submission API? (2) Can structured metadata (AI classification, conversation transcript) be attached to AvePoint requests? (3) What format does AvePoint expect for programmatic submissions? |
| 311 service taxonomy not mapped | **Critical** | RVA Help's AI classifies issues, but whether its categories match the actual AvePoint taxonomy is unknown. Obtain the AvePoint category list and validate 1:1 mapping. If the taxonomies don't align, every AI-classified submission will be misrouted anyway. |
| Staff workflow not validated with real 311 staff | **High** | The staff dashboard is well-designed but untested with actual 311 operators. Would they use a separate interface? Would they prefer the same information surfaced inside AvePoint? This requires a 1-hour sit-down with 2-3 311 staff to learn their current workflow. |
| AI classification accuracy unquantified | **Medium** | The demo shows one classification (pothole). What is the accuracy rate across the full category taxonomy? What is the misclassification rate? Without metrics, the "reduces misroutes" claim is unsubstantiated. Need a test set of 50-100 representative resident descriptions, classified by both AI and a human 311 operator, compared. |
| Web-only deployment | **Medium** | No SMS or phone channel. Reaches residents who find RVA311.com but not those who never get online. Less severe than Hey804's gap because RVA Help is a submission tool, not a navigation tool. |

---

## Recommended Next Steps (Priority Order)

1. **Validate AvePoint integration pathway** — this is the same critical blocker as Text 311. Contact City IT or 311 Operations to determine API availability. If AvePoint has no submission API, investigate whether RVA Help could submit via the web form programmatically (fragile but possible) or whether a data export/import pipeline could work.

2. **Obtain and map the 311 service taxonomy** — export the AvePoint category tree. Map RVA Help's AI classifications to the exact AvePoint categories. Test with 50+ representative resident descriptions. Measure classification accuracy and identify the categories where the AI struggles.

3. **Shadow 311 staff for one day** — observe the current AvePoint workflow. Identify where structured intake and AI classification would save the most time. Ask staff: "If you could change one thing about how requests arrive, what would it be?" Use this to prioritize which RVA Help features to integrate first.

4. **Run Spanish-language usability testing** — RVA Help has the strongest Spanish support of any demo. Validate end-to-end with 5-10 Spanish-speaking residents. Document: Does the AI classify correctly in Spanish? Are the structured summaries accurate? Is the full flow comprehensible without English?

5. **Build the structured intake as an AvePoint frontend, not a standalone system** — the highest-value path is to deploy RVA Help's intake flow as the front door to the existing 311 system, not as a parallel system. The intake logic, Google Maps location capture, and AI classification should all pipe directly into AvePoint. The standalone ticket view and staff dashboard become unnecessary if AvePoint receives the structured data natively.
