# Innovation Analysis: Deterministic Service Wizard

**Generated:** April 2, 2026
**Inputs:** IDEA.md, RESEARCH_RESULT.md, 6 Innovation Lenses

---

## 1. Blue Ocean Reframing (ERRC Grid)

| Factor | Action | Details |
|--------|--------|---------|
| AI/NLP chatbot risk | Eliminate | NYC's MyCity chatbot was shut down after giving illegal advice and receiving 71.4% negative feedback. Eliminate the entire AI hallucination risk category. |
| Account creation and app installation | Eliminate | GOV.UK Smart Answers require no login. Eliminate every friction point between "I have a problem" and "here's who to call." |
| Broad language coverage via machine translation | Reduce | Denver supports 72 languages via AI, but San Jose found Vietnamese-to-English performed poorly. Reduce scope to human-translated Spanish (Richmond's largest non-English population) rather than unreliable machine translation of dozens. |
| Auditability and version control | Raise | No Richmond service navigation tool has version-controlled routing logic. Raise to GOV.UK standard: every path auditable in a JSON file the 311 team can review. |
| "I'm not sure" fallback with top-5 common requests | Create | Most decision trees dead-end on ambiguity. Create a graceful fallback that shows the 5 most common request types and the 311 phone number, ensuring no resident hits a wall. |

**Core assumption challenged:** That AI is required for service navigation. The research ranks deterministic decision trees as #1 on safety, auditability, and adoption. The three hackathon demos that chose AI did so because it demos better — not because it serves residents better.

**Reframed value proposition:** The safest, most equitable service navigation tool is also the most boring. A 3-6 question wizard with curated paths beats every chatbot on legal safety, accessibility, and translation accuracy.

---

## 2. Rapid Ideation — 8 Divergent Approaches

1. **GOV.UK Clone** — A mobile-first wizard: 3-6 plain-language questions → exact RVA311 form or department contact. Static HTML/JS, JSON taxonomy.
2. **Bilingual Paper Flowchart** — A printable English/Spanish decision tree posted in libraries, community centers, and Council offices. Zero digital literacy required.
3. **311 Phone Tree Optimizer** — Instead of a web tool, redesign the RVA311 IVR phone tree using the same decision logic. Meet residents where they already call.
4. **Community Kiosk Mode** — A touch-screen version deployed on tablets in City Hall, libraries, and community centers. Staff can walk residents through it.
5. **Reverse Lookup: "Who Handles This?"** — Instead of starting from the problem, start from the department. Show what each department handles, so residents can browse and discover.
6. **Neighborhood-Contextual Wizard** — Ask for the resident's neighborhood first, then customize the flow to show only relevant services (e.g., flood-prone areas get stormwater options first).
7. **Voice-First Wizard** — A phone-based voice interface (not IVR menus) that asks plain-language questions and reads back the answer. For residents who can't read screens.
8. **Progressive Web App with Offline Mode** — A PWA that caches the taxonomy locally, allowing residents to navigate services even without internet connectivity (e.g., during storms).

**Most provocative:** #2 — A paper flowchart is the ultimate equity tool. It requires no device, no literacy in English, no internet, and no digital skills. It can be handed out at bus stops.
**Most feasible:** #1 — The GOV.UK clone is the core spec in the IDEA.md. Static HTML/JS with a JSON taxonomy, deployable on any web server in 8-12 hours.

---

## 3. Rapid Design Sprint

**Problem in one sentence:** Richmond residents with urgent problems don't know which City department or form to use, so they call 311 and get transferred, or give up.

**Target user:** A Richmond resident whose basement just flooded, who has never called the City before and doesn't know if this is a DPU, DPW, or 311 issue.

**User Journey:**
- Start: Resident opens a mobile-friendly web page (linked from rva.gov). Sees the question: "What's the problem?"
- Friction: In the current state, the resident would need to navigate rva.gov's department pages, guess which department handles flooding, find the right form, or call 311 and wait on hold. With the wizard, they answer 3-4 questions and get a direct link.
- Outcome: Resident sees: "This sounds like a stormwater/drainage issue. Contact DPU at [number] or submit this form: [link]. If there's a gas smell, call 911."

**Lowest-fidelity prototype:** A single HTML page with nested `<select>` dropdowns and a "Next" button. The JSON taxonomy maps ~20 common request types to department contacts and forms. No CSS framework needed.

**First test:** Recruit 5 residents (diverse ages, tech comfort) at a library. Give them 3 scenarios ("Your street light is out," "There's a pothole on your block," "You smell gas") and ask them to use the wizard. Measure time-to-answer and whether they reach the correct resource.

---

## 4. Opportunity Mapper

### Pattern A: Top-20 Service Wizard (Quick Win)
- **User:** Richmond residents with common service issues
- **Outcome:** Route to the correct RVA311 form or department contact in under 60 seconds
- **Workflow:** Curate top 20 request types from rva.gov and 311 data → build JSON taxonomy with 3-6 questions per path → render as static HTML/JS → embed in rva.gov Drupal CMS
- **Dependencies:** rva.gov Services directory (public), RVA311 Helpful Numbers page (public), CSR department pages (public)
- **Richmond relevance:** LA's 311 audit found 40% of calls transferred due to ambiguous categories. Richmond's 311 likely has similar misrouting. This directly addresses PS1: "Help residents find the right City service."

### Pattern B: Full Taxonomy with Spanish Translation (Stretch)
- **User:** All Richmond residents including ~30,000 Spanish-speaking residents
- **Outcome:** Complete service navigation in English and human-translated Spanish, covering 50-70 leaf categories
- **Workflow:** Expand taxonomy to 50-70 categories with 5-10 synonyms each → commission human Spanish translation of all strings → add language toggle → validate with bilingual community members
- **Dependencies:** Human translator (cost: ~$500-1,000 for 50-70 categories), bilingual testers, broader taxonomy curation effort
- **Richmond relevance:** SeeClickFix's own documentation warns that machine translation breaks duplicate detection and custom categories. Human translation is the only path to accurate bilingual service navigation.

**Recommendation:** Build Pattern A in the hackathon. Pattern B is a 30-day follow-up that reuses the same codebase and adds translation.

---

## 5. Problem Scoping

| Dimension | Score (1-5) | Notes |
|-----------|-------------|-------|
| Impact | 5 | Highest-safety path to "route right first time." Directly addresses the #1 resident JTBD. |
| Feasibility | 4 | Requires taxonomy curation (~50-70 categories) from existing public web content. No API access needed. |
| Data availability | 4 | All source content is on rva.gov, but it must be curated into a structured taxonomy manually. |
| Clarity | 5 | GOV.UK Smart Answers is a proven pattern since 2012. The spec is well-understood. |
| Demo credibility | 4 | Working prototype with real Richmond services. Judges can test it live with real scenarios. |

**Richmond-specific alignment:** Treats 311 as a destination (links to web forms/phone numbers), not a dependency. Does not require AvePoint/311 API access — works entirely with public information. This sidesteps the #1 structural wall for service navigation ideas.

**Policy/eligibility risks:** No AI hallucination risk. No PII collection. No account creation. The only risk is taxonomy staleness — if departments reorganize or forms change, the JSON must be updated. Mitigated by version control and a named 311 team owner.

**Weekend MVP shapes:**
1. **Minimal:** Static HTML/JS with 20 request types, 3-6 questions per path, JSON taxonomy, mobile-first. 8-10 hours.
2. **Enhanced:** Add "I'm not sure" fallback with top-5 common requests, embed in an iframe-friendly format for rva.gov, add basic analytics tracking. 10-14 hours.

---

## 6. Assumption Mapping

| # | Assumption | Risk | Uncertainty | Priority |
|---|-----------|------|-------------|----------|
| 1 | Residents will use a web wizard instead of calling 311 | High | High | TEST FIRST |
| 2 | 20 request types cover 80%+ of common service needs | High | Medium | TEST SECOND |
| 3 | 3-6 questions are sufficient to route accurately without ambiguity | Medium | Medium | TEST THIRD |
| 4 | The rva.gov Services directory content is accurate and current | Medium | Medium | VERIFY |
| 5 | The 311 team would maintain the JSON taxonomy post-hackathon | High | High | VALIDATE |
| 6 | Mobile-first design is sufficient (no app installation needed) | Low | Low | CONFIRMED |
| 7 | Spanish translation can be deferred to Phase 2 without equity harm | Medium | Medium | MONITOR |

**Top 3 to validate:**
1. **Residents will use a web wizard** — Validation: Guerrilla test with 5 residents in a library. Measure whether they complete the flow and whether the answer is correct. Compare to their experience calling 311.
2. **20 request types cover 80%+ of needs** — Validation: Request RVA311 call volume data by category. Identify the top 20 by volume. If they cover 80%+, the scope is correct. If not, expand to 30-40.
3. **3-6 questions route accurately** — Validation: Map the top 20 request types into decision trees. Test each tree with 3 scenarios. If any path leads to the wrong department, the tree needs refinement.

---

## Key Takeaway

Every hackathon team chose AI because it demos well. The research says the opposite: GOV.UK Smart Answers — boring, deterministic, version-controlled — is the #1 approach for safety, auditability, and adoption. The wizard eliminates AI hallucination risk entirely, works offline, can be human-translated to Spanish, and requires zero City IT cooperation. The biggest insight is that the most equitable tool is the least impressive at a hackathon — which is exactly why no team built it.
