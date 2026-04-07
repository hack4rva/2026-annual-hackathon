# Solution Ideas — Hey804

**Pillar:** A Thriving City Hall
**Problem Statement:** Help residents find the right City service or department quickly, so requests get routed correctly the first time.
**Demo:** Hey804
**Date:** March 31, 2026

---

## Idea 1: Adopt the Ordinal Connect / Decatur Direct Knowledge Base Pattern
**JTBD:** Job 1 (resident with urgent problem)
**Prior art:** Decatur, IN "Decatur Direct" (live March 2026) — plain-language search grounded exclusively in official city documents with source links; "Ask Indiana" no-link-no-answer principle.
**Data source:** rva.gov department pages (Drupal HTML); RVA311.com service categories.
**What to build:** Formalize Hey804's SQLite knowledge base using a systematic rva.gov content scrape. Every answer must link to a specific rva.gov page or RVA311.com form. Establish a monthly review cadence with department web content owners. The "no link, no answer" rule means Hey804 stays silent on topics where no verified city resource exists — the explicit anti-hallucination contract.

## Idea 2: Structured rva.gov Content Inventory as Shared City Asset
**JTBD:** Job 1 (resident with urgent problem), Job 3 (staff misroutes)
**Prior art:** GOV.UK design system — all government content indexed, categorized, and maintained as a structured asset, not a collection of department pages.
**Data source:** rva.gov (no sitemap.xml, no JSON API — Drupal HTML only); City department directory.
**What to build:** The knowledge base Hey804 needs is also the content inventory the City doesn't have. Scrape rva.gov, build a structured index of every service page, form, and contact number. Categorize by department and service type. This asset is valuable to the City regardless of whether Hey804 is deployed — it surfaces broken links, outdated pages, and content gaps. Position this as a civic infrastructure deliverable, not just a chatbot feature.

## Idea 3: Confidence-Gated "I Don't Know" Response (Anti-Hallucination)
**JTBD:** Job 1 (resident with urgent problem)
**Prior art:** NYC MyCity chatbot failure — gave confident wrong answers, told businesses to break the law; Denver "Sunny" failure on ambiguous policy-vs-service questions.
**Data source:** Hey804 SQLite knowledge base; Claude classification confidence scores.
**What to build:** When Claude's classification confidence falls below a threshold (e.g., 75%), Hey804 should respond: "I'm not sure I found the right answer. Here are the closest matches I found — or you can call 311 at 804-646-7000 for direct help." This is the explicit anti-pattern to NYC's failure: never be confidently wrong. Log low-confidence queries separately — they reveal knowledge base gaps that need filling.

## Idea 4: Spanish-Language End-to-End Validation with Translated Landing Pages (Equity)
**JTBD:** Job 2 (non-English-speaking resident)
**Prior art:** ACS language data — 71.57% of Richmond's LEP population speaks Spanish; Citibot's 75+ language support.
**Data source:** ACS 5-year estimates for Richmond language data; rva.gov department pages (check which have Spanish translations).
**What to build:** Audit which rva.gov pages Hey804 links to have Spanish versions. For the top-20 most-linked pages, create plain-language Spanish summaries that appear inline before the link: "This page helps you report a pothole. The form is in English. You will need your street address." This bridges the gap between Hey804's multilingual input and rva.gov's English-only content. Recruit 5-10 Spanish-speaking residents to test.

## Idea 5: Civic Intelligence Dashboard for City Leadership
**JTBD:** Job 3 (staff misroutes — proactive version)
**Prior art:** GetCalFresh model — used intake data to identify systemic access barriers; Louisville Office of AI institutional approach.
**Data source:** Hey804 query logs (anonymized); RVA311 request volume data for correlation.
**What to build:** Aggregate and anonymize all resident questions. Build a simple dashboard: top questions this week, trending topics, questions with no answer (knowledge base gaps), questions by language. Share with City communications and 311 leadership weekly. When "bulk trash" questions spike, the City knows to push out proactive communications. This transforms Hey804 from a navigation tool into a civic listening tool.

## Idea 6: Crisis Response Content Pipeline
**JTBD:** Job 1 (resident with urgent problem — crisis variant)
**Prior art:** CivicReady notification system already used by Richmond Public Utilities for utility alerts; New Orleans 311 chatbot crisis handling.
**Data source:** CivicReady notifications (rva.gov alerts, event-triggered); City emergency communications office.
**What to build:** Establish a content pipeline from the City's emergency communications to Hey804's knowledge base. When a boil-water advisory is issued, Hey804 automatically surfaces "Is the water safe to drink?" → verified CivicReady alert link. This requires a formal content handoff process, not just scraping — the City communications office must be in the loop for crisis content accuracy.

## Idea 7: Progressive Disclosure for Complex Government Processes
**JTBD:** Job 1 (resident with urgent problem), Job 2 (non-English-speaking resident)
**Prior art:** GOV.UK Smart Answers — deterministic decision trees that walk users through complex eligibility/process questions step by step.
**Data source:** rva.gov department pages for process documentation; RVA311 service categories.
**What to build:** For complex questions ("Do I need a permit to build a shed?"), instead of returning a single link, walk the user through 2-3 clarifying questions: "Is the shed larger than 200 sq ft? Will it be on a permanent foundation?" Then provide the specific permit type and form. This is the GOV.UK pattern — it's slower than a single-link response but far more accurate for complex processes. Build for the top-10 most-asked complex questions first.

## Idea 8: SMS Channel Extension Using Hey804's Classification Engine
**JTBD:** Job 1 (resident with urgent problem), Job 2 (non-English-speaking resident — equity bridge)
**Prior art:** New Orleans textable 311 chatbot (live 2025); Text 311's SMS approach; ACS broadband data — 12.3% cellular-only, 9.7% no internet.
**Data source:** Hey804's existing Claude classification logic and SQLite knowledge base; SMS gateway (Twilio or equivalent).
**What to build:** Extend Hey804's classification-and-routing logic to an SMS channel. Resident texts a question → same Claude classification → same knowledge base lookup → answer returned via text with a shortened link. This bridges Hey804's web-only limitation and covers the 12.3% cellular-only population. The classification engine is channel-independent; only the input/output layer changes.

## Idea 9: Community Kiosk Deployment for Digital-Divide Populations (Equity)
**JTBD:** Job 1 (resident with urgent problem), Job 2 (non-English-speaking resident)
**Prior art:** Pain point P1.4 — "I gave up" invisible failure; Atlanta "Ava" failure from limited accessibility; ACS broadband data — 9.7% no internet at home.
**Data source:** Richmond Public Library branch locations; community center addresses; Hey804 web widget.
**What to build:** Deploy Hey804 as a kiosk interface (tablet with voice input) at public libraries, community centers, and city offices. Residents who can't use Hey804 at home can walk in, speak their question, and get routed to the right resource. A volunteer or librarian can assist. This doesn't require any changes to Hey804's software — just a deployment decision and hardware.

## Idea 10: Shared Classification API for City-Wide Service Navigation
**JTBD:** Job 3 (staff misroutes — structural fix)
**Prior art:** Louisville Office of AI institutional approach — treat AI as city infrastructure, not a one-off project; Citibot's multi-channel platform.
**Data source:** Hey804's Claude classification logic; RVA311 AvePoint service taxonomy; rva.gov content inventory.
**What to build:** Extract Hey804's classification engine into a standalone API that any city system can call: "Given this resident's plain-language description, what department and service type does it map to?" The API returns a structured response (department, service type, confidence score, resource link). RVA311 web form can use it to pre-classify submissions. The 311 phone system can use it to suggest routing. Internal staff tools can use it to auto-classify emailed requests. This is the structural fix — one classification engine, many consumers.
