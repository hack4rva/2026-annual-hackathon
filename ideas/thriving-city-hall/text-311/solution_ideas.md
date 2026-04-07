# Solution Ideas — Text 311

**Pillar:** A Thriving City Hall
**Problem Statement:** Help residents find the right City service or department quickly, so requests get routed correctly the first time.
**Demo:** Text 311 (Byrd Park Geese)
**Date:** March 31, 2026

---

## Idea 1: Adopt the New Orleans Textable 311 Model as Reference Architecture
**JTBD:** Job 1 (resident with urgent problem)
**Prior art:** New Orleans AI-powered textable 311 chatbot (live 2025) — SMS-based, no app required, directly comparable to Text 311's approach.
**Data source:** New Orleans city documentation on their 311 chatbot implementation; RVA311 AvePoint/Dynamics 365 platform for integration target.
**What to build:** Contact New Orleans 311 leadership to obtain their integration architecture, cost model, and adoption data. Use this as the basis for Text 311's integration with Richmond's AvePoint platform rather than inventing from scratch. Focus engineering effort on the Richmond-specific taxonomy mapping, not the SMS infrastructure.

## Idea 2: Wizard-Style Decision Tree for Low-Confidence Classifications
**JTBD:** Job 1 (resident with urgent problem), Job 3 (staff drowning in misroutes)
**Prior art:** GOV.UK Smart Answers — deterministic decision trees that are auditable and never hallucinate; "Ask Indiana" no-link-no-answer principle.
**Data source:** RVA311 service request taxonomy (~50-70 categories from AvePoint/Dynamics 365).
**What to build:** When the AI's classification confidence is below a threshold (e.g., 80%), instead of guessing, present the resident with 2-3 plain-language options via text: "Is this about (A) a road problem, (B) a sidewalk problem, or (C) something else? Reply A, B, or C." This converts ambiguous AI routing into a resident-confirmed classification, reducing misroutes without requiring the resident to know government categories.

## Idea 3: Spanish-First Bilingual Pilot (Equity)
**JTBD:** Job 2 (non-English-speaking resident)
**Prior art:** Citibot — 94% inbound handled, 75+ languages, SMS + web; ACS language data showing 71.57% of Richmond's LEP population speaks Spanish.
**Data source:** ACS language data (12.8% non-English at home, 5.9% LEP); RVA311 for submission target.
**What to build:** Instead of claiming "any language," build and thoroughly test a Spanish-language experience end-to-end. Recruit 5-10 Spanish-speaking Richmond residents to test the full flow: text in Spanish → AI understands → asks clarifying questions in Spanish → submits a correctly classified request. Validate that government terminology translates meaningfully (not jargon-to-jargon). This is a higher-value pilot than broad multilingual claims.

## Idea 4: Duplicate Detection Dashboard for 311 Staff
**JTBD:** Job 3 (staff drowning in misroutes)
**Prior art:** Text 311's own duplicate detection feature; national 311 systems reporting 15-30% duplicate rates.
**Data source:** RVA311 AvePoint/Dynamics 365 active request database (requires API or data export access).
**What to build:** Expose the duplicate detection logic as a tool for 311 staff, not just residents. When a new request comes in, automatically flag potential duplicates based on location + category match. Staff can merge duplicates in one click instead of manually identifying them. This reduces the processing burden and improves workload metrics accuracy — a quick win that benefits staff even if the SMS submission pathway isn't approved.

## Idea 5: Location-Aware Auto-Routing Using GIS Data
**JTBD:** Job 1 (resident with urgent problem), Job 3 (staff misroutes)
**Prior art:** Richmond's existing GIS/GeoHub platform; RVA311 React Native app's GIS-integrated duplicate detection.
**Data source:** Richmond GeoHub (GIS layers for council districts, DPW zones, utility service areas); RVA311 service taxonomy.
**What to build:** When a resident provides a location (address or GPS from their phone), automatically determine which department jurisdiction covers that location. A pothole at 1st and Main routes to the correct DPW district. A streetlight issue routes to the correct utility provider. Location data resolves many routing ambiguities that plain-language classification alone cannot.

## Idea 6: Transparent Request Status via SMS (Equity)
**JTBD:** Job 1 (resident with urgent problem), Job 2 (non-English-speaking resident)
**Prior art:** Pain point P3.3 — no feedback loop to residents generates follow-up calls; GetCalFresh model of proactive status updates.
**Data source:** RVA311 AvePoint request status data (requires read API access).
**What to build:** After a resident submits via Text 311, send proactive SMS status updates: "Your pothole report at [address] has been assigned to DPW. Estimated response: 5-10 business days." This closes the feedback loop that currently generates repeat calls to 311. Works in any language the original submission was made in. Reduces staff burden from "Did you get my request?" calls.

## Idea 7: Structured Escalation Path for AI Failures
**JTBD:** Job 1 (resident with urgent problem)
**Prior art:** NYC MyCity chatbot failure — told businesses to break the law because it generated answers instead of routing; Denver "Sunny" chatbot failure on ambiguous requests.
**Data source:** RVA311 call center hours and phone number (311 / 804-646-7000).
**What to build:** Define explicit failure modes: (1) AI can't classify → "I'm not sure what department handles this. Want me to connect you to a 311 operator? Reply YES." (2) AI detects emergency keywords → immediate redirect to 911/non-emergency. (3) AI confidence is moderate → present options (Idea 2). (4) Resident is frustrated or repeating → offer phone callback. Never leave the resident in a dead end.

## Idea 8: Adopt AvePoint's Existing Category Taxonomy as the AI's Classification Target
**JTBD:** Job 3 (staff drowning in misroutes)
**Prior art:** RVA311 AvePoint/Dynamics 365 platform — already has ~50-70 request types that staff use daily.
**Data source:** AvePoint 311 service request category list (requires City IT access).
**What to build:** The AI classification layer must map to the exact categories staff already use in AvePoint, not a parallel taxonomy. Export the current AvePoint category tree, use it as the AI's classification target, and validate that every AI-assigned category exists in the AvePoint system. This ensures zero taxonomy mismatch at submission time.

## Idea 9: Community Organization SMS Bridge for Trust-Barrier Populations
**JTBD:** Job 2 (non-English-speaking resident)
**Prior art:** Trust barriers for immigrant communities — government-affiliated tools avoided by undocumented residents regardless of functionality; 2020 Census undercounting pattern.
**Data source:** Community organization contact databases (Sacred Heart Center, ReEstablish Richmond, Commonwealth Catholic Charities); RVA311 for submission target.
**What to build:** Partner with trusted community organizations that serve immigrant populations. Train caseworkers to use Text 311 on behalf of residents who won't interact with a government-affiliated number directly. The caseworker texts from a community org phone; the resident never touches a government system. This is an equity-first adoption strategy, not a technical feature.

## Idea 10: Off-Hours Coverage Gap Filler
**JTBD:** Job 1 (resident with urgent problem)
**Prior art:** Pain point P1.2 — 311 call center business-hours-only; RVA311 app/website available 24/7 but require self-navigation.
**Data source:** RVA311 call center operating hours (Mon-Sat); RVA311 web submission portal.
**What to build:** Position Text 311 explicitly as the off-hours front door. During call center hours, Text 311 handles what it can and offers "Want to talk to a 311 operator instead? Call 311." Outside hours, Text 311 is the only interactive option. Track submission volume by hour to demonstrate the unmet demand that currently has no channel. This data alone — "X residents tried to reach 311 at 10pm last Tuesday" — is valuable to City leadership.
