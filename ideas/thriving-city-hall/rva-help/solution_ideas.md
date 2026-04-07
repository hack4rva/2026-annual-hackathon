# Solution Ideas — RVA Help

**Pillar:** A Thriving City Hall
**Problem Statement:** Help residents find the right City service or department quickly, so requests get routed correctly the first time.
**Demo:** RVA Help (The Hackstreet Boys — Josh and Nadeesh)
**Date:** March 31, 2026

---

## Idea 1: Deploy Structured Intake as a Pre-Processor on RVA311.com (Adopt Existing Pattern)
**JTBD:** Job 1 (resident with urgent problem), Job 3 (staff misroutes)
**Prior art:** GetCalFresh — plain-language guided intake that serves 6.2M people by walking users through structured questions before submission.
**Data source:** RVA311.com (AvePoint/Dynamics 365) web submission forms; AvePoint service request taxonomy (~50-70 categories).
**What to build:** Embed RVA Help's structured intake flow directly on RVA311.com as an alternative to the existing form-based submission. Resident describes the problem → AI asks 1-2 clarifying questions → structured summary shown for confirmation → resident submits. The request enters AvePoint already classified and structured. This is the GetCalFresh pattern applied to 311: don't make the user navigate categories, build the form around their description.

## Idea 2: Wizard-First Classification with AI Assist
**JTBD:** Job 1 (resident with urgent problem), Job 3 (staff misroutes)
**Prior art:** GOV.UK Smart Answers — deterministic decision trees, auditable, zero hallucination risk; ranked as #1 opportunity in research corpus.
**Data source:** RVA311 AvePoint service taxonomy; RVA Help's existing AI classification logic.
**What to build:** Combine RVA Help's AI with a deterministic fallback. For the top-20 request types (by volume), build explicit decision trees: "Is this about a road, sidewalk, or utility? → Road → Is the road damaged or blocked? → Damaged → Pothole report form." The AI handles long-tail requests outside the top 20. This hybrid approach is more auditable than pure AI and more flexible than pure decision trees. The wizard path never hallucinates because every path leads to a verified form.

## Idea 3: Google Maps Location Capture as Standard 311 Feature
**JTBD:** Job 1 (resident with urgent problem), Job 3 (staff burden)
**Prior art:** RVA311 React Native app already has GIS-integrated duplicate detection; RVA Help's Google Maps pin-drop is a web-based equivalent.
**Data source:** Google Maps Platform API; Richmond GeoHub GIS layers (council districts, DPW zones).
**What to build:** Extract RVA Help's Google Maps location capture as a standalone component. Embed it in the RVA311 web form and any future submission tool. Precise location capture eliminates the "where exactly?" callback that wastes staff time on every vague report. Layer Richmond GIS data on top: auto-detect the council district, DPW zone, and utility service area from the pin location. This turns a pin drop into automatic department routing.

## Idea 4: Simple Language Mode as rva.gov Content Standard (Equity)
**JTBD:** Job 2 (non-English-speaking resident), Job 1 (any resident confused by government jargon)
**Prior art:** Pain point P2.3 — translating government jargon into another language's jargon doesn't help; GOV.UK content design principles (plain English mandatory for all government content).
**Data source:** rva.gov department pages; RVA Help's simple language mode feature.
**What to build:** RVA Help's "simple language mode" solves a problem that translation alone cannot. Extend this concept: for every city service description on rva.gov, create a plain-language version (reading level: 6th grade). This becomes the default content, with detailed/technical content available for those who need it. Pilot with the top-20 most-visited service pages. This benefits English speakers with low literacy as much as non-English speakers using machine translation.

## Idea 5: Transparent Status Tracking with Plain-Language Explanations
**JTBD:** Job 1 (resident with urgent problem — post-submission), Job 3 (staff burden from follow-up calls)
**Prior art:** Pain point P3.3 — no feedback loop to residents generates follow-up calls; RVA Help's activity log with status explanations.
**Data source:** RVA311 AvePoint request status data (requires read API or status webhook).
**What to build:** RVA Help's ticket status view with plain-language explanations ("Your request has been assigned to Public Works. This means a crew will inspect the location within 5-10 business days.") should be available to every 311 submitter, not just RVA Help users. Build a status lookup page on RVA311.com: enter your ticket number → see current status with a human-readable explanation of what that status means. This directly reduces "Did you get my request?" calls.

## Idea 6: Full Spanish-Language 311 Submission Flow (Equity)
**JTBD:** Job 2 (non-English-speaking resident)
**Prior art:** ACS language data — 71.57% of Richmond's LEP population speaks Spanish; Citibot's 75+ language support across SMS + web.
**Data source:** ACS 5-year estimates for Richmond language data; RVA311 AvePoint service taxonomy (need Spanish-equivalent category names); RVA Help's existing Spanish translation.
**What to build:** RVA Help already has English/Spanish full app translation — the most complete of the three demos. Extend this to a fully validated Spanish-language 311 submission experience: describe problem in Spanish → AI classifies in Spanish → structured summary in Spanish → submit. Validate that AI classification accuracy is equivalent in English and Spanish (this is the untested assumption). Recruit Spanish-speaking Richmond residents for usability testing. This is the highest-impact equity intervention because it makes 311 functionally accessible to the largest LEP group.

## Idea 7: AI Confidence Scoring with Staff-Side Triage Flags
**JTBD:** Job 3 (staff drowning in misroutes)
**Prior art:** NYC MyCity failure — confident wrong classification had real consequences; GOV.UK Smart Answers auditability principle.
**Data source:** RVA Help's AI classification output (confidence scores); RVA311 AvePoint staff interface.
**What to build:** Every AI classification should carry a confidence score visible to staff. High confidence (>90%): auto-route, staff sees green flag. Medium confidence (70-90%): route with yellow flag — "AI classified as pothole but consider also: sidewalk repair." Low confidence (<70%): hold for manual triage, staff sees red flag. This prevents the NYC pattern (confidently wrong routing) while still reducing manual classification workload for the majority of clear-cut requests.

## Idea 8: Internal Notes System for Cross-Department Request Handoff
**JTBD:** Job 3 (staff burden — multi-department requests)
**Prior art:** Pain point P3.1 — every misroute touches at minimum two departments; RVA Help's internal vs. resident-facing communication separation.
**Data source:** RVA311 AvePoint internal notes/comments functionality (if it exists); RVA Help's internal notes feature.
**What to build:** RVA Help's separation of internal notes from resident-visible updates is a workflow pattern, not just a feature. When Department A re-routes a request to Department B, the internal note ("This is actually a utility issue, not DPW — the resident mentioned a water leak in the follow-up") travels with it. Department B has full context without calling the resident back. Check whether AvePoint already supports internal notes — if so, this is a training/process change, not a technology build.

## Idea 9: Accessibility-First Submission Kiosk for City Offices (Equity)
**JTBD:** Job 1 (resident with urgent problem — in-person), Job 2 (non-English-speaking resident)
**Prior art:** Pain point P1.4 — residents who give up are invisible; Atlanta/Phoenix/Detroit app-only tools exclude vulnerable residents.
**Data source:** Richmond city office and library locations; RVA Help's web application with accessibility panel.
**What to build:** Deploy RVA Help (with its full accessibility panel: language toggle, simple language, high contrast, large font) as a kiosk at city offices and libraries where residents walk in for help. Staff currently redirect confused visitors verbally. A kiosk with RVA Help lets the resident self-serve in their language with accessibility support, or a staff member can assist by walking through the guided intake together. This reaches residents who will never use a website from home.

## Idea 10: Conversation Transcript as Training Data for 311 Category Improvement
**JTBD:** Job 3 (staff misroutes — systemic fix)
**Prior art:** Hey804's civic intelligence concept — captured questions reveal what residents actually need; Louisville Office of AI institutional approach.
**Data source:** RVA Help conversation transcripts (anonymized); RVA311 AvePoint misroute/reclassification data (if tracked).
**What to build:** Every RVA Help conversation is a training signal: "Resident said X, AI classified as Y, staff confirmed/corrected to Z." Aggregate these signals to: (1) identify which 311 categories are most confused by residents and AI, (2) improve category names and descriptions to reduce future misclassification, (3) detect emerging request types that don't fit existing categories. Feed this analysis back to the 311 operations team quarterly. The classification system gets better over time from real usage, not hypothetical training data.
