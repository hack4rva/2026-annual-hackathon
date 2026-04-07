# Gap Analysis — Text 311

**Pillar:** A Thriving City Hall
**Problem Statement (verbatim):** "Help residents find the right City service or department quickly, so requests get routed correctly the first time."
**Demo:** Text 311 (Byrd Park Geese — Anna, Johnny, Charlie, Daniel)
**Primary User:** Richmond resident with an urgent city problem (broken sidewalk, pothole) who lacks a smartphone, reliable internet, or tech literacy to navigate the existing RVA311 app/website.
**Pain:** The City has services for nearly every problem a resident encounters, but the three existing channels (phone, app, web) each have access barriers — business hours, smartphone required, or navigation complexity — that lock out the residents who need services most.
**Desired Outcome:** Any resident, on any phone, in any language, at any time, can describe a city problem in plain language via text message and get it correctly routed into the existing 311 system without needing to understand government structure.

---

## Data Source Map

| Data Claim in Demo | Real or Synthetic? | Source | Owner | Access | Cadence | Notes |
|---|---|---|---|---|---|---|
| "Up-to-the-minute RVA 311 data source" for checking existing requests | **Unverified / likely synthetic** | Unknown — demo claims real-time access | City of Richmond / AvePoint | No public API confirmed | Unknown | The RVA311 Socrata dataset (vgg4-hjn8) contains only 2014–2015 legacy SeeClickFix data, NOT current AvePoint data. There is no confirmed public API for current RVA311. This is the critical data gap. |
| "Submits directly to existing RVA 311 site" | **Unverified** | RVA311.com (AvePoint/Dynamics 365) | City of Richmond | Web submission exists; API integration unknown | Real-time | Demo claims direct submission. Whether this is via web scraping, an undocumented API, or manual entry is not shown. Formal integration would require City IT/procurement involvement. |
| OpenAI API for conversation handling | **Real** | OpenAI API | OpenAI (commercial) | API key | Real-time | Standard commercial API. Cost and data-handling implications for government use need review. |
| Duplicate detection ("this issue has already been reported") | **Synthetic or demo-only** | Requires read access to current 311 request database | City of Richmond | Not publicly accessible | Would need real-time | This is the strongest claim in the demo and the hardest to validate. Requires either API access to AvePoint or a data sharing agreement. |

### Gaps Requiring SME Access
- **311 API access:** Does the AvePoint platform expose an API for reading existing requests or submitting new ones? This is the single biggest blocker.
- **311 service taxonomy:** What are the current ~50-70 request type categories? Can they be accessed programmatically?
- **SMS gateway compliance:** Would the City allow a third-party SMS number to submit into the 311 system? What procurement/security review is needed?

---

## Gap Analysis by JTBD

### Job 1: Resident with urgent problem, no idea where to start
**Coverage: Partial**

What works:
- SMS interface removes the smartphone/internet barrier entirely — this is Text 311's strongest contribution
- Plain-language intake via AI means the resident doesn't need to know government structure
- 24/7 availability (text works anytime, unlike the call center)
- Duplicate detection prevents wasted submissions (if the data source is real)

What's missing:
- Only 2 request types demonstrated (pothole, sidewalk). The 311 system has ~50-70 categories. Scaling the AI to classify across all categories is non-trivial.
- No demonstration of what happens when the AI can't classify a request — the "I don't know" path is not shown
- No demonstration of request status tracking after submission — the resident texts and then what?
- No fallback to a human if the AI conversation fails

**Gap fixable or fundamental?** Fixable. Expanding request types is engineering work, not a design flaw. The SMS-first architecture is sound.

### Job 2: Non-English-speaking resident trying to access services
**Coverage: Partial**

What works:
- Demo claims "any language" support
- SMS is low-barrier for immigrant communities (no account creation, no identity verification)

What's missing:
- No live demonstration of non-English interaction in the demo
- "Any language" is a claim, not a demonstration — which languages were actually tested?
- Machine translation of government terminology is a known failure mode (pain point P2.3 — translating jargon into jargon doesn't help)
- No evidence that the OpenAI API's multilingual capabilities were tested against Richmond-specific government vocabulary
- 5.9% of Richmond residents are LEP; 71.57% of LEP = Spanish. Was Spanish specifically tested?

**Gap fixable or fundamental?** Fixable but requires deliberate effort. Adding tested multilingual support (starting with Spanish) is achievable. The risk is deploying "any language" without validation.

### Job 3: City staff drowning in misrouted requests
**Coverage: Partial**

What works:
- AI-powered classification and routing should reduce misclassification
- Duplicate detection reduces redundant tickets
- Structured intake (AI asks follow-up questions) means staff receive clearer requests

What's missing:
- No demonstration of the staff-side experience — what does a Text 311 submission look like when it arrives in the AvePoint system?
- No confidence threshold shown — what happens when the AI is only 60% sure of the classification?
- No metrics on current misroute rates to benchmark improvement against
- The demo routes to categories, but doesn't show whether those categories map 1:1 to the actual AvePoint taxonomy

**Gap fixable or fundamental?** Fixable with City IT cooperation. The routing logic needs to be validated against the actual 311 taxonomy, which requires access to AvePoint category data.

---

## Opportunities

### Opportunity 1: SMS-First 311 Pilot (Adopt New Orleans Model)
New Orleans launched a textable AI-powered 311 chatbot in 2025, proving this exact model works in a comparable city. Richmond could study New Orleans' implementation for integration patterns, cost data, and adoption metrics. Text 311's SMS approach directly addresses the digital divide: 12.3% of Richmond residents are cellular-only (no broadband), and SMS works on any phone including basic/flip phones.

**Dependencies:** 311 API access or formal submission pathway; New Orleans implementation case study; City IT buy-in for SMS gateway.

### Opportunity 2: Confidence-Gated Routing with Human Fallback
The biggest risk in AI-powered 311 is confident misrouting (NYC MyCity failure pattern). Text 311 should adopt a confidence threshold: below 80% confidence, escalate to a human operator or present the resident with 2-3 options to choose from. This is the GOV.UK Smart Answers pattern — deterministic decision trees where the AI is uncertain, auditable human paths where it isn't.

**Dependencies:** Logging and classification confidence scoring in the AI layer; defined escalation pathway; 311 call center integration for handoff.

### Opportunity 3: Duplicate Detection as a Standalone City Service
Text 311's duplicate detection feature — "this issue has already been reported and assigned" — could be valuable even without the full SMS submission flow. If the City exposed a read-only view of active 311 requests by location, residents could check status before calling/submitting, reducing the 15-30% national duplicate rate. This could be a quick win deployed on rva.gov without touching the submission pipeline.

**Dependencies:** Read access to current 311 request data (AvePoint API or data export); GIS integration for location matching.
