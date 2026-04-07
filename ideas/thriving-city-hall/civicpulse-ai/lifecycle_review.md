# Lifecycle Review — CivicPulse AI

**Pillar:** A Thriving City Hall
**Problem Statement (verbatim):** Procurement Risk & Opportunity Review — Help City staff identify valid, compliant contracts across City, state, and federal sources without manual PDF hunting.
**Demo:** CivicPulse AI — SmartGo Procurement Intelligence Hub
**Team:** Civic Pulse AI — Bhaskaran Jairajan, Prasanna Partiban, Vardarajan Seduraman
**Review Date:** March 31, 2026
**Status:** Capability Demo — correct architecture, no real data integration

---

## Rubric Checklist

| Step | Item | Status | Notes |
|------|------|--------|-------|
| 1 | Problem Grounding | ✅ Complete | gap_analysis.md header section |
| 2 | JTBD Analysis (3 jobs) | ✅ Complete | jtbd_analysis.md — shared across procurement demos |
| 3 | Question Generation (10+ questions) | ✅ Complete | jtbd_analysis.md — 17 questions across 5 categories |
| 4 | Prior Art Research | ✅ Complete | prior_art_research.md — CompareX, SquarePact, Tempe, NYC Checkbook, regional implementations documented |
| 5 | Pain Point Research | ✅ Complete | pain_points.md — evidence-grounded for all 3 JTBDs |
| 6 | Data Source Mapping | ✅ Complete | gap_analysis.md — all data claims mapped; no real data source confirmed |
| 7 | SME Outreach | ⚠️ Blocked | No outreach drafted — procurement staff and IT contacts needed to validate data integration path |
| 8 | Gap Analysis | ✅ Complete | gap_analysis.md — Job 1 partial, Jobs 2 and 3 unaddressed |
| 9 | Opportunity Mapping | ✅ Complete | gap_analysis.md — 3 opportunities grounded in prior art |
| 10 | Solution Ideation | ✅ Complete | solution_ideas.md — 10 ideas, all advisory-only, citing prior art |
| 11 | Lifecycle Review | ✅ Complete | This file |

---

## What Was Fundamentally Missed

CivicPulse AI built the right architectural concept — a dashboard for urgency triage and an AI engine for PDF extraction — but connected it to no real data. The demo operates on synthetic or unidentified data, which means it cannot be evaluated as a procurement tool, only as a capability demonstration. The problem statement asks for compliance identification "across City, state, and federal sources." CivicPulse AI extracts data from uploaded PDFs (a single source at a time) and does not check any external compliance registry. The cross-source integration that defines the problem is entirely absent.

The second fundamental miss is scope. CivicPulse AI addresses only the staff-facing PDF review workflow. It has no public transparency component (Job 3) and no institutional memory feature (Job 2). Two of three jobs are not touched.

The third miss is the advisory-only constraint. CivicPulse AI's framing ("enabling a smarter, more responsive city hall") is careful to position itself as a decision-support tool, which is correct. But without external compliance data, there is nothing advisory to surface — the system extracts contract data but has no compliance intelligence to advise on.

---

## Blockers

1. **No real data integration.** The dashboard needs to be connected to Socrata xqn7-jvv2 (freely available SODA API, 1,362 records) as a minimum viable data source. Without this, the demo cannot be evaluated against the problem statement.
   - **Ask:** Can the team connect the Contract Pulse View dashboard to the SODA API endpoint at data.richmondgov.com/resource/xqn7-jvv2.json? This is the fastest path to real data.

2. **No SAM.gov or external registry integration.** The core problem is cross-source compliance checking. Without at least one external registry check, the tool does not address the problem as stated.
   - **Ask:** Can the team obtain a SAM.gov API key (api.sam.gov) and add an exclusion check to the extraction pipeline? Personal keys allow 10 req/day; .gov keys are substantially higher.

3. **SME outreach not drafted.** No outreach to procurement staff or City IT to validate whether the PDF extraction approach fits actual staff workflows. The 2010 MUNIS audit and 2025 OCA audit provide evidence of the problem, but no one has confirmed whether CivicPulse AI's approach is one staff would use.
   - **Ask:** Draft outreach to Doug Gernat (pillar champion) or procurement operations staff to validate: (a) Is PDF extraction the bottleneck, or is it cross-registry checking? (b) Would staff upload PDFs to a new tool, or does the tool need to pull from wherever PDFs currently live?

---

## Recommended Next Steps

**Priority 1:** Connect the dashboard to Socrata xqn7-jvv2. This is a single API integration that transforms the demo from synthetic to real. The SODA API is freely available and returns JSON with contract_number, supplier, contract_value, effective_from, effective_to, agency_department. This populates the Contract Pulse View with Richmond's actual contract portfolio.

**Priority 2:** Add SAM.gov exclusion checking to the extraction pipeline. When a vendor name is extracted from a PDF, query SAM.gov for exclusion status. Display result as an advisory flag. This is the minimum viable cross-source compliance feature.

**Priority 3:** Add a decision log per contract. Staff record their review decision (renew/rebid/escalate) with a rationale and timestamp. This begins to address Job 2 (institutional memory) and creates an audit trail that has value independent of the AI features.

**Priority 4:** Evaluate whether to build a public dashboard or defer to another team. Job 3 (public transparency) is significant scope. If another demo (RVA Contract Lens) already addresses this well, CivicPulse AI should focus on its PDF extraction strength rather than duplicating effort.

**Priority 5:** Draft outreach to City procurement staff to validate the workflow. The biggest risk is not technical — it's adoption. If staff won't upload PDFs to a new tool, the extraction engine has no input.
