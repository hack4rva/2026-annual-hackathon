# Lifecycle Review — Hey804

**Pillar:** A Thriving City Hall
**Problem Statement:** Help residents find the right City service or department quickly, so requests get routed correctly the first time.
**Demo:** Hey804
**Review Date:** March 31, 2026

---

## Rubric Checklist

| Step | Name | Output File | Status | Notes |
|------|------|-------------|--------|-------|
| 1 | Problem Grounding | `gap_analysis.md` (header) | ✅ Complete | Problem statement verbatim, primary user (rva.gov visitor), pain (maze navigation, wrong forms, giving up), desired outcome (single plain-language entry point). |
| 2 | JTBD Analysis | `jtbd_analysis.md` | ✅ Complete | Shared file — 3 jobs in proper format. |
| 3 | Question Generation | `jtbd_analysis.md` (Open Questions) | ✅ Complete | Shared file — 16 open questions. |
| 4 | Prior Art Research | `prior_art_research.md` | ✅ Complete | Shared file — regional implementations, data sources, failure modes, synthesis. |
| 5 | Pain Point Research | `pain_points.md` | ✅ Complete | Shared file — pain points per JTBD with evidence and equity dimension. |
| 6 | Data Source Mapping | `gap_analysis.md` (Data Source Map) | ✅ Complete | 8 data claims mapped. Knowledge base flagged as synthetic/demo-scoped. rva.gov content gaps identified. |
| 7 | SME Outreach | — | ⚠️ Blocked | No outreach email drafted for this demo. Critical questions: (1) rva.gov content inventory and URL stability, (2) department web content ownership, (3) CivicReady integration for crisis content. Need contact at City IT / web services and City Communications. |
| 8 | Gap Analysis | `gap_analysis.md` (Gap Analysis) | ✅ Complete | All 3 JTBDs assessed — Job 1 Full (web users only), Job 2 Partial, Job 3 Partial. |
| 9 | Opportunity Mapping | `gap_analysis.md` (Opportunities) | ✅ Complete | 3 opportunities with dependencies. |
| 10 | Solution Ideation | `solution_ideas.md` | ✅ Complete | 10 ideas; prior art cited; data sources named; JTBDs addressed; 3 equity ideas (Ideas 4, 8, 9); 1 adopt-existing (Idea 1). |
| 11 | Lifecycle Review | `lifecycle_review.md` | ✅ Complete | This file. |

---

## What Was Fundamentally Missed

Hey804's architecture — Claude for classification only, never for answer generation — is the strongest anti-hallucination design among the three demos. It directly addresses the NYC MyCity failure mode and aligns with the Decatur Direct / "no link, no answer" pattern identified in research as best practice. The widget-based deployment (single `<script>` tag on rva.gov) is the lowest-friction integration path.

However, Hey804 is **web-only**. It does not work via SMS, does not work on basic phones, and does not work without internet. This means it is inaccessible to the 12.3% of Richmond residents who are cellular-only and the 9.7% with no internet at home. These are disproportionately the same low-income and elderly residents who struggle most with service navigation. Hey804 improves navigation for people who are already on rva.gov — it does not reach people who never get there.

The SQLite knowledge base is the critical unknown. Its comprehensiveness, accuracy, and maintenance plan are not demonstrated. If it contains 20 hand-curated entries, Hey804 is a demo. If it maps to a complete rva.gov content inventory with an update cadence, it's a deployable tool. This distinction was not addressed.

---

## Blockers

| Blocker | Severity | Specific Ask |
|---------|----------|--------------|
| Knowledge base scope and accuracy unknown | **Critical** | How many entries does the SQLite KB contain? What percentage of rva.gov service pages are covered? Are the links verified as current? Is there a process for detecting and updating stale links? |
| Web-only — no SMS or phone channel | **High** | Hey804's classification logic is channel-independent, but the deployment is web-only. Extending to SMS (Idea 8) would address the digital divide. This requires a separate engineering effort and SMS gateway infrastructure. |
| rva.gov has no sitemap or structured API | **High** | rva.gov is Drupal HTML with no sitemap.xml, no JSON API. Building a comprehensive knowledge base requires scraping, which is fragile and breaks when the site is reorganized. Need to ask City IT whether a content export or structured data source exists. |
| Multilingual UX unvalidated | **Medium** | Google Translate handles input/output, but rva.gov landing pages are English. Residents who ask in Spanish get a Spanish response pointing to an English page. The last-mile experience is broken for non-English speakers. |
| Crisis response content pipeline undefined | **Medium** | The demo claims Hey804 could answer crisis questions. Where does verified crisis content come from? CivicReady? City communications? Without a formal content pipeline, crisis answers risk being stale or wrong — exactly when accuracy matters most. |

---

## Recommended Next Steps (Priority Order)

1. **Audit and publish the knowledge base contents** — export the SQLite DB, list every entry, verify every link is live and correct. This is the single action that determines whether Hey804 is a demo or a deployable tool. If the KB is thin, the next step is building it out, not deploying the widget.

2. **Draft SME outreach to City web services / IT** — ask about rva.gov content inventory, URL change notification, and whether a structured data export exists. Also ask about the CivicReady integration path for crisis content.

3. **Build a rva.gov content scraper with stale-link detection** — since rva.gov has no API, build a scraper that runs weekly, compares results to the knowledge base, and flags changed/broken URLs. This is the maintenance foundation for any knowledge-base-driven navigation tool.

4. **Test multilingual flow end-to-end with Spanish-speaking users** — verify that the experience works from question to resolution, not just question to link. Document where the flow breaks (likely on the English-only landing pages).

5. **Prototype SMS extension** — use the existing Claude classification logic with a Twilio SMS gateway. This is the highest-impact channel expansion because it reaches residents who never visit rva.gov. Start with the top-10 most-asked questions.
