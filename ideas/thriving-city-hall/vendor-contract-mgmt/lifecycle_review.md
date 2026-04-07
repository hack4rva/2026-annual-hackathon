# Lifecycle Review — Vendor & Contract Management Web App

**Pillar:** A Thriving City Hall
**Problem Statement (verbatim):** Procurement Risk & Opportunity Review — Help City staff identify valid, compliant contracts across City, state, and federal sources without manual PDF hunting.
**Demo:** Vendor & Contract Management Web App
**Tech Stack:** Next.js, Firebase, Socrata datasets, VITA (attempted), AI summarization
**Review Date:** March 31, 2026
**Status:** Real Data Foundation + Unique Two-Sided Architecture — blocked on VITA and SAM.gov integration

---

## Rubric Checklist

| Step | Item | Status | Notes |
|------|------|--------|-------|
| 1 | Problem Grounding | ✅ Complete | gap_analysis.md header section |
| 2 | JTBD Analysis (3 jobs) | ✅ Complete | jtbd_analysis.md — shared across procurement demos |
| 3 | Question Generation (10+ questions) | ✅ Complete | jtbd_analysis.md — 17 questions across 5 categories |
| 4 | Prior Art Research | ✅ Complete | prior_art_research.md — CompareX, SquarePact, CobblestoneContracts, regional implementations documented |
| 5 | Pain Point Research | ✅ Complete | pain_points.md — evidence-grounded for all 3 JTBDs |
| 6 | Data Source Mapping | ✅ Complete | gap_analysis.md — Socrata confirmed real; VITA attempted and blocked; SAM.gov not attempted |
| 7 | SME Outreach | ⚠️ Blocked | No outreach drafted — need VITA data access contact and City procurement operations validation |
| 8 | Gap Analysis | ✅ Complete | gap_analysis.md — Job 1 partial, Job 2 unaddressed, Job 3 partially via vendor portal |
| 9 | Opportunity Mapping | ✅ Complete | gap_analysis.md — 3 opportunities including VITA partnership and vendor equity portal |
| 10 | Solution Ideation | ✅ Complete | solution_ideas.md — 10 ideas, all advisory-only |
| 11 | Lifecycle Review | ✅ Complete | This file |

---

## What Was Fundamentally Missed

**What Vendor Contract Mgmt gets right is underrated.** It is the only procurement demo that uses verified Socrata data (xqn7-jvv2) by name, the only one that considers vendors as users (not just government staff), and the only one that attempted integration with a second data source (VITA). The two-sided architecture — where government officials and vendors see the same data from their respective roles — is a unique insight that addresses a real equity gap. Procurement complexity is a documented barrier for small and minority-owned businesses; a vendor self-service portal reduces that barrier.

**The fundamental miss is cross-source compliance.** Like all four procurement demos, Vendor Contract Mgmt does not check compliance across registries. The Socrata data provides contract metadata, but it does not include vendor compliance status, federal exclusion status, or state registration status. The VITA integration was the right instinct — the team understood the cross-source requirement — but the API was genuinely unavailable during the hackathon.

**Second miss: no institutional memory.** There is no decision log, no audit trail, no way for a new staff member to understand why contracts were structured as they are. The AI summarization provides a current snapshot but no historical context.

**Third miss: the app performance issues.** The presenter acknowledged the app "takes time to load." For a procurement tool that staff would use daily, performance is a usability requirement. Next.js + Firebase is a standard stack — the performance issue is likely data fetching from Socrata without caching or pagination.

---

## Blockers

1. **VITA API unavailability.** The team attempted VITA CobblestoneContracts integration and was blocked. This is a genuine data access problem, not a team failure. VITA operates a web portal but does not offer a public API.
   - **Ask:** Can the City of Richmond request a periodic data export from VITA through existing intergovernmental channels? If a formal data-sharing agreement is needed, who at VITA should be contacted? Alternatively, is web scraping of the public VITA portal acceptable under Virginia state policy?

2. **No SAM.gov integration.** Federal compliance checking is the minimum viable cross-source feature. Without it, the tool addresses the "City sources" part of the problem but not "state and federal."
   - **Ask:** Can the team obtain a SAM.gov API key (api.sam.gov) and add exclusion checks? The Socrata supplier field provides vendor names to query against.

3. **Vendor name fragmentation.** Socrata contains 735 distinct supplier strings with known duplication and inconsistency. Meaningful portfolio analysis (vendor concentration, cross-department spend) requires vendor name normalization.
   - **Ask:** Does the City maintain a canonical vendor list that maps Socrata supplier strings to unique entities? If not, can a normalization exercise be scoped?

4. **App performance.** The acknowledged load-time issues need to be resolved before any pilot. Socrata API calls should be cached and paginated.
   - **Ask:** Is the performance issue API-side (Socrata response time) or client-side (rendering)? Next.js server-side rendering with incremental static regeneration would address both.

---

## Recommended Next Steps

**Priority 1:** Add SAM.gov exclusion checking to the Socrata-fed vendor list. For each vendor in the dashboard, query SAM.gov for exclusion status. Display as an advisory flag. This is the fastest path from "contract viewer" to "compliance advisory tool" and directly addresses the problem statement's cross-source requirement.

**Priority 2:** Resolve app performance issues. Cache Socrata API responses. Paginate contract lists. Use Next.js server-side rendering to pre-compute dashboard views. A procurement tool that takes 10+ seconds to load will not be adopted.

**Priority 3:** Pursue VITA data access through City channels. Request a quarterly data export of state IT contracts relevant to Richmond. This is the right data but the wrong access method — an API that doesn't exist cannot be integrated. The path forward is institutional, not technical.

**Priority 4:** Develop the vendor portal as an equity tool. Add SWaM certification status display. Show upcoming contract expirations that may become rebid opportunities. Allow MBE/SWaM-certified vendors to see opportunities matched to their capabilities. No other procurement demo addresses the vendor experience — this is Vendor Contract Mgmt's unique value.

**Priority 5:** Add a decision log per contract. When staff review a contract, they record their decision (renew/rebid/escalate) with a rationale. This creates the audit trail needed for Job 2 (institutional memory) and has compliance value independent of the other features.

---

## Notable Strengths (for judge briefing)

Vendor Contract Mgmt demonstrates two rare qualities among the procurement demos: it uses verified real data from Socrata, and it considers the vendor as a user — not just the government. The two-sided architecture (government official + vendor portals with role-based views) addresses a real equity gap: procurement complexity is a barrier for small and minority-owned businesses. The team also showed good instincts by attempting VITA integration — they understood the cross-source requirement and were blocked by a real data-access constraint, not a conceptual miss. The AI summarization agent provides useful portfolio-level intelligence. With SAM.gov integration, performance fixes, and vendor portal enhancement, this could serve as a procurement relationship management tool — complementing the document intelligence tools (Mira, CivicPulse AI) with a relationship layer they lack.
