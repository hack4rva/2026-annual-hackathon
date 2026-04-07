# Gap Analysis — RVA Help

**Pillar:** A Thriving City Hall
**Problem Statement (verbatim):** "Help residents find the right City service or department quickly, so requests get routed correctly the first time."
**Demo:** RVA Help (The Hackstreet Boys — Josh and Nadeesh, high school students)
**Primary User:** Richmond resident trying to report a city issue (pothole, trash, streetlight) who doesn't know which department handles it, can't navigate the existing RVA311 form categories, and submits vague or misclassified requests that staff then have to re-route manually.
**Pain:** Residents who try to use 311 often submit vague, misclassified requests because the system requires them to know government categories upfront. Staff spend time calling residents back for clarification, re-routing to the correct department, and managing confusion. Residents don't know what happens after they submit and generate follow-up calls asking for status.
**Desired Outcome:** A guided intake experience that structures and classifies the resident's problem before submission, routes to the correct department automatically, and gives the resident transparent status visibility — reducing vague submissions, misroutes, and follow-up calls.

---

## Data Source Map

| Data Claim in Demo | Real or Synthetic? | Source | Owner | Access | Cadence | Notes |
|---|---|---|---|---|---|---|
| AI-powered chat for issue classification | **Real (technology)** | Unnamed AI model (likely OpenAI or similar) | Team-hosted | API key | Real-time | The specific AI model/API is not named in the demo. Classification quality depends on training against real 311 categories. |
| Google Maps API for location pinning | **Real** | Google Maps Platform | Google (commercial) | API key | Real-time | Standard commercial API. Enables precise location capture, which is one of the highest-value features for staff. |
| "Real, public city information" | **Claimed real, unverified** | rva.gov and/or RVA311 | City of Richmond | Public web | Variable | The demo claims to use real city information but does not specify which datasets, pages, or APIs. The knowledge base contents are not demonstrated. |
| Structured request submission to city system | **Synthetic / demo-only** | Demo's own backend | Team-built | Local | N/A | The ticket view, activity log, and staff dashboard appear to be a standalone system, not integrated with AvePoint/Dynamics 365. No evidence of submission to the actual 311 platform. |
| Staff dashboard with AI-classified context | **Synthetic / demo-only** | Demo's own backend | Team-built | Local | N/A | The staff experience is compelling but exists only within RVA Help's own system. Real staff use AvePoint. Integration is not demonstrated. |
| Activity log with status explanations | **Synthetic / demo-only** | Demo's own backend | Team-built | Local | N/A | Status tracking within RVA Help's system, not within the real 311 platform. |
| English/Spanish full app translation | **Real (technology)** | Built-in i18n | Team-built | App setting | N/A | Spanish translation demonstrated in demo. Quality and completeness not independently validated. |
| Accessibility panel (theme, font, contrast, motion, language complexity) | **Real (technology)** | Built-in accessibility features | Team-built | App settings | N/A | Comprehensive accessibility feature set. Simple language mode is particularly relevant for this user population. |

### Gaps Requiring SME Access
- **AvePoint integration pathway:** RVA Help built its own ticketing system. For real deployment, submissions must flow into AvePoint/Dynamics 365. Does AvePoint expose a submission API? Can a third-party tool create requests in the 311 system?
- **311 service taxonomy:** RVA Help's AI classifies issues, but does its classification map to the actual AvePoint categories? The taxonomy alignment is the critical question.
- **Staff workflow compatibility:** Would 311 staff actually use a separate dashboard, or does everything need to appear in their existing AvePoint interface?

---

## Gap Analysis by JTBD

### Job 1: Resident with urgent problem, no idea where to start
**Coverage: Full (strongest among the three demos)**

What works:
- The structured intake flow — describe in plain language → AI clarifies → structured summary → review → submit — is exactly the right pattern. It's the most thorough intake process of the three demos.
- Location capture via Google Maps eliminates the "where exactly?" back-and-forth that wastes staff time
- Request summary before submission lets the resident confirm classification is correct
- Ticket view with activity log and status explanations closes the feedback loop (pain point P3.3)
- The "simple language mode" accessibility feature directly addresses the plain-language gap

What's missing:
- **Web-only.** Like Hey804, this requires internet and a modern browser. No SMS, no basic phone, no offline access.
- The demo shows pothole reporting. Whether the AI can handle the full ~50-70 category taxonomy is not demonstrated.
- No "I don't know" path shown — what happens when the AI can't classify?
- The system appears to be standalone — not integrated with the actual AvePoint 311 platform

**Gap fixable or fundamental?** Fixable. The intake design is the strongest of the three demos. The integration gap (connecting to AvePoint) is the same blocker all demos face. The web-only limitation is architectural but less severe than Hey804 because RVA Help is positioned as a submission tool (like the existing RVA311 website), not as an omnibus navigation tool.

### Job 2: Non-English-speaking resident trying to access services
**Coverage: Partial (strongest accessibility suite among the three demos)**

What works:
- Full app translation to Spanish (not just input detection — the entire interface translates)
- New chats started in Spanish reply in Spanish throughout the flow
- Simple language mode reduces government jargon
- Accessibility panel (font size, high contrast, reduced motion) addresses additional access barriers

What's missing:
- Only 2 languages demonstrated (English, Spanish). Richmond's LEP population includes Arabic, Vietnamese, Nepali, and other languages.
- Whether the AI classification works correctly in Spanish (not just the UI chrome) is not demonstrated. Can a resident describe a pothole in Spanish and get it correctly classified?
- The structured review summary — does it translate correctly into government-appropriate Spanish, or is it machine-translated jargon?
- No evidence of testing with non-English-speaking residents

**Gap fixable or fundamental?** Fixable. The Spanish support is the most complete of any demo. Expanding to additional languages is incremental. Validating AI classification in non-English languages requires testing, not architecture changes.

### Job 3: City staff drowning in misrouted requests
**Coverage: Full (strongest staff-side story among the three demos)**

What works:
- Staff receive AI-classified category context, not raw resident text — this is the core misroute reduction mechanism
- Original conversation transcript preserved for context
- Internal notes separated from resident-facing communications — staff can discuss without exposing workflow
- Structured submission means staff don't need to call back for basic information (location, category, description)

What's missing:
- The staff dashboard exists only in RVA Help's system. Real staff use AvePoint. If submissions don't land in AvePoint, staff must check two systems — which increases burden instead of reducing it.
- No confidence threshold shown — what happens when the AI is only 60% sure of the classification? Does the staff member get a flag?
- No measurement of misroute reduction — would need before/after 311 data
- No demonstration of handling the ~50-70 real categories, only pothole-type reports

**Gap fixable or fundamental?** Fixable if AvePoint integration is achievable. The staff-side design (structured context, internal notes, transcript) is excellent. The gap is delivering that information into the system staff already use, not building a parallel system.

---

## Opportunities

### Opportunity 1: Structured Intake as AvePoint Pre-Processor
RVA Help's strongest contribution is not the AI — it's the structured intake flow. The pattern (describe → clarify → review → confirm → submit) could be deployed as a pre-processing layer before requests enter AvePoint. Whether built as a standalone web app or embedded as a widget on RVA311.com, the structured intake eliminates vague submissions at the source. This addresses pain point P3.2 directly and is the highest-impact single intervention for staff burden.

**Dependencies:** AvePoint submission API or web form integration; 311 service taxonomy for classification targets; City IT approval for frontend changes to RVA311.com.

### Opportunity 2: Accessibility-First Design as City Standard
RVA Help's accessibility panel — language toggle, simple language mode, font size, high contrast, reduced motion — is the most comprehensive of any demo. These features should be a baseline standard for any city-facing digital tool, not just this one. The "simple language mode" in particular addresses the government jargon problem (pain point P2.3) that pure translation cannot solve. This could influence the rva.gov redesign or any future city digital service.

**Dependencies:** City digital accessibility policy; rva.gov redesign timeline; content authoring guidelines for simple language.

### Opportunity 3: Internal Notes and Transcript-Forwarding for Cross-Department Coordination
RVA Help's separation of internal notes from resident-facing communications, combined with the original AI conversation transcript, solves a coordination problem that exists beyond 311. When a request touches multiple departments, the full context travels with it. Staff in Department B can see what Department A discussed internally without the resident having to re-explain. This pattern could be applied to any cross-department workflow.

**Dependencies:** AvePoint integration for attaching notes/transcripts; department workflow mapping for multi-touch requests; staff training on the internal-vs-external note distinction.
