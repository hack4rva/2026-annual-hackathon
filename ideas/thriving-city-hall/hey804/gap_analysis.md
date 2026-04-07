# Gap Analysis — Hey804

**Pillar:** A Thriving City Hall
**Problem Statement (verbatim):** "Help residents find the right City service or department quickly, so requests get routed correctly the first time."
**Demo:** Hey804 (unnamed team)
**Primary User:** Richmond resident who visits rva.gov looking for a city service — pothole report, shed permit, tax payment — and cannot figure out which department, form, or phone number to use.
**Pain:** Valuable data and services exist across Richmond's city departments, but the resident-facing interface (rva.gov) is a maze of department pages. Residents submit wrong forms, make costly calls, or give up entirely. Every failed navigation attempt erodes trust in City Hall.
**Desired Outcome:** A single, plain-language entry point ("one front door") embedded on rva.gov where residents ask what they need in natural language and are routed to the correct verified city resource — link, form, or phone number — without the AI generating answers or hallucinating.

---

## Data Source Map

| Data Claim in Demo | Real or Synthetic? | Source | Owner | Access | Cadence | Notes |
|---|---|---|---|---|---|---|
| Claude.ai for question classification (NOT answer generation) | **Real** | Anthropic Claude API | Anthropic (commercial) | API key | Real-time | Architectural choice: Claude classifies, does not answer. This is the core hallucination-prevention mechanism. |
| SQLite knowledge base of city resources | **Synthetic / demo-scoped** | Built by team during hackathon | Hey804 team | Local SQLite DB | Manual | The knowledge base contents are not shown. Whether it contains real rva.gov links and verified information, or demo placeholders, is not demonstrated. The comprehensiveness of this KB is the critical question. |
| Google Translate for multilingual support | **Real** | Google Cloud Translation API | Google (commercial) | API key | Real-time | Standard commercial API. Known limitation: government terminology translation quality varies by language. |
| Links to "correct RVA 311 submission page" (pothole example) | **Verifiable** | RVA311.com | City of Richmond | Public web link | N/A | The specific link shown in demo would need to be verified as the correct current submission URL. RVA311.com is real and publicly accessible. |
| Links to "RVA.gov permit portal" (shed permit example) | **Verifiable** | rva.gov | City of Richmond | Public web link | Manual updates | rva.gov has no sitemap.xml and no JSON API. Department pages are Drupal HTML. Link accuracy depends on manual maintenance of the knowledge base. |
| Real estate tax payment forms link | **Verifiable** | rva.gov | City of Richmond | Public web link | Manual updates | Same concern — the link is probably real, but rva.gov URLs change when departments reorganize. |
| Speech recognition for voice input | **Real** | Browser built-in Web Speech API | Browser vendor | Client-side | N/A | Standard browser capability. Works in Chrome, limited in other browsers. Not available via SMS or phone. |
| "Real-time civic intelligence" from captured questions | **Speculative** | Hey804 query logs | Hey804 system | Local/server logs | Real-time | Technically feasible — every question is logged. Whether this data is actually useful for city leaders depends on volume, representativeness, and analysis tooling. Not demonstrated. |

### Gaps Requiring SME Access
- **rva.gov content completeness:** How many department pages, forms, and service descriptions exist? Is there a content inventory? The knowledge base must map to actual rva.gov content.
- **rva.gov URL stability:** How often do URLs change? Is there a redirect policy? A knowledge base with stale links is worse than no knowledge base.
- **311 submission pathway:** Hey804 links to RVA311.com — but does it need API access, or is linking sufficient?
- **Crisis response content:** The demo claims Hey804 could answer "Is the water safe to drink?" in a crisis. Where does verified crisis information come from? CivicReady? City communications office?

---

## Gap Analysis by JTBD

### Job 1: Resident with urgent problem, no idea where to start
**Coverage: Full (for web-capable residents)**

What works:
- Plain-language question → verified resource link is exactly the right interaction pattern
- Claude-for-classification-only architecture prevents hallucination (addresses NYC MyCity failure)
- Widget embeddable on rva.gov via single `<script>` tag — low integration cost
- Voice input lowers the text-literacy barrier
- Demo shows three distinct use cases (pothole, permit, taxes) across different departments

What's missing:
- **Web-only.** Requires internet access and a device with a modern browser. Does not work on basic phones, does not work via SMS, does not work offline. This excludes 12.3% cellular-only residents and the 9.7% with no internet at home.
- No demonstration of what happens when the knowledge base doesn't have an answer — the "I don't know" path
- No demonstration of handling ambiguous questions that could route to multiple departments
- The knowledge base scope and maintenance plan are undefined

**Gap fixable or fundamental?** Partially fixable. Adding SMS/phone channels would require a separate effort (this is a web widget). The web-only limitation is architectural, not just missing a feature. However, the classification logic could be reused across channels.

### Job 2: Non-English-speaking resident trying to access services
**Coverage: Partial**

What works:
- Auto-detects question language and replies in the same language
- Google Translate integration is production-ready
- No account creation or identity information required

What's missing:
- Google Translate is machine translation — government terminology quality is unvalidated for non-English languages
- Pain point P2.3 applies: translating English government jargon into Spanish government jargon doesn't help. The links Hey804 returns still go to English-language rva.gov pages (unless the pages themselves are translated)
- No evidence of testing with non-English-speaking residents
- The landing pages Hey804 links to — are they available in Spanish? If not, the multilingual front door leads to an English-only room
- Voice input for non-English languages may not work reliably (Web Speech API language support varies)

**Gap fixable or fundamental?** Partially fixable. Google Translate handles the input/output, but the underlying city resources (web pages, forms, phone trees) are English. Hey804 can't fix rva.gov's language gaps. It could mitigate by providing plain-language summaries in the target language alongside the English link.

### Job 3: City staff drowning in misrouted requests
**Coverage: Partial**

What works:
- If residents find the correct resource via Hey804 before calling/submitting, misrouted requests decrease upstream
- "Real-time civic intelligence" — aggregated question data could show staff what residents are actually looking for, enabling proactive improvements
- Reduced call volume to 311 if web navigation succeeds

What's missing:
- Hey804 navigates residents to the right page, but doesn't submit requests on their behalf. Residents still need to fill out the correct form or make the correct call after Hey804 routes them. If the form itself is confusing, Hey804 hasn't solved the last-mile problem.
- No integration with the 311 system — requests that should go to 311 are linked to RVA311.com, but not submitted automatically
- No measurement of whether Hey804's routing actually reduces misroutes (would need before/after 311 data)

**Gap fixable or fundamental?** Fixable. Hey804's navigation layer reduces the routing problem upstream. Adding submission integration (like Text 311 attempts) would close the last-mile gap, but that requires AvePoint API access — the same blocker all three demos face.

---

## Opportunities

### Opportunity 1: rva.gov Navigation Layer (Adopt Decatur Direct / Ordinal Connect Pattern)
Decatur, IN's "Decatur Direct" (March 2026) does exactly what Hey804 does: plain-language search, responses grounded exclusively in official city documents with source links, 24/7 availability. Hey804 is Richmond's version of this proven pattern. The opportunity is to formalize the knowledge base — scrape rva.gov systematically, build a verified content inventory, and establish an update cadence. This is the "no-link-no-answer" principle from Ask Indiana applied to Richmond.

**Dependencies:** rva.gov content inventory; URL change notification system; content owner for each department section.

### Opportunity 2: Civic Intelligence Dashboard from Query Logs
Every question residents ask Hey804 is a signal about what government services are hard to find. Aggregated, anonymized query data — "60% of questions this week are about bulk trash pickup" — gives city leaders something they've never had: real-time demand data from the resident's perspective, not the department's. This is valuable even if Hey804 handles only informational queries, not submissions.

**Dependencies:** Query logging infrastructure; anonymization policy; dashboard for city leadership; minimum adoption threshold for data to be meaningful.

### Opportunity 3: Multi-Channel Expansion Using Shared Classification Logic
Hey804's Claude-for-classification architecture is channel-independent. The same classification logic that routes questions on the web widget could route SMS messages (Text 311's channel) or phone IVR inputs. Rather than building separate AI systems for web, SMS, and phone, Richmond could build one classification engine and multiple channel-specific frontends. This is the Louisville institutional-AI approach applied pragmatically.

**Dependencies:** Shared classification API; SMS gateway (for text channel); IVR integration (for phone channel); unified knowledge base.
