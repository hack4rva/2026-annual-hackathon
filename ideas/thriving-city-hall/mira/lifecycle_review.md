# Lifecycle Review — Mira

**Pillar:** A Thriving City Hall
**Problem Statement (verbatim):** Procurement Risk & Opportunity Review — Help City staff identify valid, compliant contracts across City, state, and federal sources without manual PDF hunting.
**Demo:** Mira — AI Procurement Intelligence Dashboard
**Team:** Daniel and Priyesh (team of two)
**Tech Stack:** Azure Document Intelligence, Azure Foundry, Azure Search, FastAPI, Azure Container
**Review Date:** March 31, 2026
**Status:** Most Deployable — real data claim, production-grade stack, $200/month cost, but lacks cross-source compliance checking

---

## Rubric Checklist

| Step | Item | Status | Notes |
|------|------|--------|-------|
| 1 | Problem Grounding | ✅ Complete | gap_analysis.md header section |
| 2 | JTBD Analysis (3 jobs) | ✅ Complete | jtbd_analysis.md — shared across procurement demos |
| 3 | Question Generation (10+ questions) | ✅ Complete | jtbd_analysis.md — 17 questions across 5 categories |
| 4 | Prior Art Research | ✅ Complete | prior_art_research.md — CompareX, SquarePact, regional implementations, data sources documented |
| 5 | Pain Point Research | ✅ Complete | pain_points.md — evidence-grounded for all 3 JTBDs |
| 6 | Data Source Mapping | ✅ Complete | gap_analysis.md — real-data claim documented and flagged for verification; external registries not connected |
| 7 | SME Outreach | ⚠️ Blocked | No outreach drafted — need to verify real-data claim with City procurement and validate Azure deployment pathway |
| 8 | Gap Analysis | ✅ Complete | gap_analysis.md — Job 1 moderate-strong (within scope), Job 2 partial, Job 3 unaddressed |
| 9 | Opportunity Mapping | ✅ Complete | gap_analysis.md — 3 opportunities including Mira+RVA Contract Lens combination |
| 10 | Solution Ideation | ✅ Complete | solution_ideas.md — 10 ideas, all advisory-only |
| 11 | Lifecycle Review | ✅ Complete | This file |

---

## What Was Fundamentally Missed

**What Mira gets right is significant.** It is the only procurement demo that claims to use real City of Richmond contract data. It has a production-grade Azure architecture at a realistic price point ($200/month). It processes contracts in under 60 seconds. It has the only collaboration feature among the procurement demos (notes, annotations, shared flagging). The team of two built this in 48 hours. For the "without manual PDF hunting" half of the problem statement, Mira is the strongest demo.

**What was missed is the other half of the problem statement:** "across City, state, and federal sources." Mira operates as a self-contained document intelligence platform. It reads and structures PDFs, but it does not cross-reference against any external compliance registry. A procurement officer using Mira still needs to separately check SAM.gov for exclusions, eVA for state contract status, and internal systems for procurement history. The fragmented-sources problem persists — Mira eliminates the PDF hunting but not the registry hunting.

**Second miss: no portfolio-level urgency view.** Mira processes contracts individually. There is no dashboard view that says "you have 12 contracts expiring this month, 3 of them high-value." The Contract Pulse View that CivicPulse AI demonstrated (urgency lanes, risk flags) is the right shape for portfolio management — Mira does not have this.

**Third miss: no public transparency.** Job 3 (resident access) is entirely unaddressed. This may be appropriate scope management for a 48-hour build, but it means Mira solves the staff problem without addressing the public accountability dimension.

---

## Blockers

1. **Real-data claim needs verification.** The transcript states "Built entirely with real City of Richmond contract data." This is the most important claim any procurement demo makes. If true, Mira has crossed the data barrier. If the data is a sample, a subset, or simulated, the claim overstates readiness.
   - **Ask:** What specific City of Richmond contracts were used? How many? Were they obtained through a formal data-sharing arrangement or from publicly accessible sources? Can the team provide a manifest of contracts processed?

2. **No cross-registry compliance integration.** The problem statement requires "across City, state, and federal sources." Mira currently operates on a single source (uploaded PDFs). Without at least one external registry check (SAM.gov exclusion is the minimum), Mira addresses the document problem but not the compliance problem.
   - **Ask:** Can the team add a SAM.gov exclusion check post-extraction? Azure Foundry can make HTTP calls to external APIs. A .gov SAM.gov API key would raise the rate limit beyond the 10/day personal tier.

3. **City IT deployment pathway unknown.** Azure is a standard cloud platform, but deploying a procurement tool that handles city contract data requires security review.
   - **Ask:** Has anyone from City IT or procurement operations reviewed Mira? Is there a lightweight pilot pathway (e.g., sandbox deployment with 50 contracts) that bypasses a full ATO?

---

## Recommended Next Steps

**Priority 1:** Verify the real-data claim. This is the single most important question. If Mira genuinely processed real Richmond contracts during the hackathon, it is the most deployment-ready tool in this pillar. If the data is synthetic or partial, it drops to the same level as the other demos.

**Priority 2:** Add SAM.gov exclusion checking. When Mira extracts a vendor name, query SAM.gov and display the result as an advisory flag. This is a single API integration that moves Mira from "document intelligence" to "compliance intelligence." This directly addresses the "across City, state, and federal sources" requirement.

**Priority 3:** Import Socrata xqn7-jvv2 as portfolio baseline. Staff should see their full portfolio on day one. Mira's extraction engine then enriches individual contracts as PDFs are uploaded. This reduces onboarding from "upload everything first" to "your data is already here."

**Priority 4:** Add urgency triage lanes. Reorganize the dashboard from a flat list to three lanes: Decide Today / Plan This Week / Review This Month. This requires either Socrata import or enough uploaded contracts to populate the view.

**Priority 5:** Evaluate Mira as the deployment candidate for the procurement problem. At $200/month with real data and a production-grade stack, Mira may be the right tool to pilot — even without solving the full problem statement. A partial solution deployed is more valuable than a complete solution on a whiteboard. The cross-source compliance features can be added incrementally.

---

## Notable Strengths (for judge briefing)

Mira was built by a team of two in 48 hours using real city contract data at a total infrastructure cost of $200/month. It processes contracts in under 60 seconds, classifies documents by type, extracts structured data with risk flags, supports team collaboration through notes and annotations, and includes an AI chat feature for deeper document questions. The Azure architecture (Document Intelligence, Foundry, Search, FastAPI, Container) is production-grade. If the real-data claim is verified, this is the most deployment-ready procurement tool demonstrated at this hackathon.
