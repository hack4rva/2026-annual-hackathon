# From Packets to Plain English: How U.S. Cities Are Turning Planning Meetings into Resident-Readable Summaries

## Executive Summary

U.S. municipalities are actively deploying tools to translate dense planning commission agendas, decisions, and meeting outcomes into plain-language narrative summaries. Driven by the need to increase transparency and accessibility for residents who cannot attend hours-long hearings, cities are leveraging both human-led civic journalism and emerging generative AI technologies. 

**Key Insights:**
* **Hybrid beats AI-only for trust:** Clerks and vendors emphasize "AI + human review" as the reliable path for meeting summaries. External AI tools help staff create clear, plain-language summaries from agenda packets, but outputs always require human review to ensure accuracy and context [1]. 
* **Real deployments exist:** Cities and platforms are publishing plain-language recaps today. Saratoga, California, released an AI platform known as Hamlet to transform City Council meetings into concise, digestible recaps [2] [3]. Santa Cruz County is piloting an AI-enabled tool to help residents search planning commission meeting agendas and minutes [3].
* **Human Documenters close the comprehension gap:** Community-run Documenters programs produce accessible, plain-language notes that outperform official minutes on readability. A study comparing 46 meetings in Grand Rapids found Documenters' notes were nearly 5,000 words shorter on average and scored better for readability than official minutes [4].
* **Accuracy risks are real and require governance:** AI summarizers can misstate motions, hallucinate votes, or paraphrase legal terms inaccurately [5]. Robust governance frameworks, such as the NIST AI Risk Management Framework (AI RMF) [6] and San José's AI Policy [7], are critical for mitigating these risks.
* **Early signs point to better resident experience:** While planning-specific engagement lift is still being quantified, adjacent evidence is highly positive. Boston's beta AI search on its municipal website garnered 34.3% positive feedback, outperforming traditional search by 23.4 percentage points [8].

## What's Live Today: Who's Publishing Plain-Language Planning Summaries

Hybrid models across cities and vendors are already translating government meetings into resident-readable narratives, with planning commissions increasingly included in these efforts.

### Active municipal deployments and civic partnerships

| City/Organization | Body/Focus | Tool/Platform | Approach | Accuracy Controls | Engagement Signals |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Saratoga, CA** | City Council | Hamlet GovCenter | AI + Editorial | Synthesizes official agendas, audio, and video into summaries [2] [3] | Intended to make complicated meetings "more easily digested" and improve outreach [3] |
| **Santa Cruz County, CA** | Planning Commission | Custom AI Search | AI (RAG) | Uses data already vetted and in the public view to minimize risk [3] | Positioned as a "safe space" pilot for operational efficiency [3] |
| **Aware** | Multi-city coverage | Aware Capture / Portal | AI + Guardrails | Detects agendas, speakers, and decisions to deliver plain-English updates stripped of jargon [9] | Covers over 3,000 towns, allowing residents to search across topics [9] |
| **Documenters (City Bureau)** | Multiple cities (e.g., Grand Rapids) | Community note-taking | Human with Editor QA | Trained residents take notes which are edited by network staff [10] [11] | Notes are ~5,000 words shorter, simpler, and ensure public comments are recorded [4] |

The landscape shows a clear bifurcation between highly structured, human-curated civic journalism (like the Documenters program) and emerging AI platforms that ingest municipal data to generate automated recaps. Both approaches aim to lower the barrier to entry for civic participation.

### Vendor capabilities accelerating municipal adoption

| Vendor | Key Feature | Planning Fit | Safeguards | Procurement Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Granicus GXA** | Conversational agent integrating with Agenda LE (Legistar) [12] | High | Built-in guardrails to ensure safe interactions; surfaces voting records in plain language [12] | Leverages existing Legistar API endpoints (Events, Matters, Votes) [13] |
| **CivicPlus** | AI Editing Assistant for Agenda and Meeting Management [14] | Medium/High | Human-in-the-loop safeguards, explainable AI, privacy protections [14] | Integrated into the Civic Impact Platform [14] |
| **ClerkMinutes** | AI-powered meeting minutes from audio and agendas [15] | Medium | Requires strict prompting to avoid paraphrasing legal/zoning terminology [5] | Flat-rate pricing; data deleted upon request [16] |
| **CivicCA** | AI-generated plain-language summaries for agendas [17] | Medium | Compliance checks run automatically before publishing [17] | Transparent, flat-rate monthly pricing starting at $49/mo [17] |

These vendors are embedding AI directly into the tools clerks already use, transforming the generation of plain-language summaries from a bespoke IT project into a standard software feature.

## How They Do It: Three Operating Models Compared

Municipalities generally choose between three operating models for generating meeting summaries. AI-only is fastest but riskiest; human-only is trusted but costly; hybrid delivers scale without sacrificing accuracy.

### Operating models for meeting summarization

| Model | Strengths | Weaknesses | Typical Cost Drivers | When to Use |
| :--- | :--- | :--- | :--- | :--- |
| **AI-Only (LLM + RAG)** | Speed; low marginal cost; on-demand generation | Hallucinations; risk of rewriting formal legal language [5] | Token usage, infrastructure, observability tools | Internal research; low-risk public notices |
| **Human-Only (Documenters)** | High trust; nuanced context; captures public voice accurately [4] | Slow turnaround; capacity limits; variable coverage | Stipends for note-takers; editorial staff [10] | High-salience or sensitive planning items |
| **Hybrid (AI Draft + Human QA)** | Balance of scale and accuracy; predictable cadence | Requires strict SOPs; reviewer workload | SaaS licensing + staff review time | Default for resident-facing planning recaps |

### Accuracy guardrails that work in practice

To mitigate the risks of AI hallucination—such as declaring a motion "carried" when no vote was taken, or rewriting precise zoning descriptions into casual text—clerks must employ strict guardrails [5]. 
* **Structured Prompts:** AI tools must be explicitly instructed: "Do not paraphrase any legal or technical language. Quote it exactly as written" [5].
* **Agenda Anchoring:** The full agenda must be provided upfront to force the model to anchor all summaries to the correct sequence and prevent it from blending sections together [5].
* **Human-in-the-Loop (HITL):** Staff must verify all outputs, particularly vote tallies, motion formatting, and public comments, ensuring that multiple speakers are not improperly blended into a single generic summary [1] [5].

## Building the Pipeline: Data, Tools, and Workflow

Your existing legislative management systems likely expose all the data needed to automate draft summaries. 

### Integration blueprint via Legistar API

Municipalities using systems like Granicus Legistar can leverage existing APIs to build automated pipelines. The Legistar Web API exposes data directly over HTTPS, allowing retrieval of matters, events, roll calls, and votes [18] [13]. 
1. **Ingest:** Pull agendas, items, and votes via the `v1/{Client}/Events` and `v1/{Client}/Matters` endpoints [13].
2. **Transform:** Feed the structured data into an LLM with strict prompts to generate plain-English narratives.
3. **QA & Publish:** Route the draft to a clerk for review against the official recording, then publish to a public-facing portal.

### Tech stack options for municipalities

| Option | Stack Components | Pros | Cons |
| :--- | :--- | :--- | :--- |
| **Vendor-Native** | Granicus GXA [12], CivicPlus AI [14] | Fast deployment; built-in compliance; utilizes existing contracts | Less flexible; dependent on vendor roadmaps |
| **SaaS Summarizer** | ClerkMinutes [15], Aware [9] | Minimal IT setup; purpose-built for municipal meetings | Requires uploading audio/agendas to third parties |
| **In-House RAG** | OpenAI/Anthropic APIs + Legistar API | Full control over prompts and data retention | High engineering effort; requires internal monitoring |

## Keeping It True: Governance, Accuracy, and Legal Risk

The increasing use of AI-enabled meeting tools creates a complex ecosystem of recordings, machine transcripts, AI summaries, and conventional minutes, which can escalate risks of inconsistent records and discovery exposure [19].

### Policy essentials for AI summaries

* **Authority of Record:** Organizations must clearly define that the formal, approved minutes remain the authoritative record, while AI summaries serve only as accessible guides [19].
* **Disclosure and Transparency:** Policies, such as Boston's Interim Guidelines, mandate that staff disclose when AI is used to generate content (e.g., "This text was summarized using Google Bard") [20]. San José's policy emphasizes transparency and accountability, ensuring staff are responsible for what AI creates [7].
* **Data Privacy:** Sensitive, internal content, personally identifiable information (PII), and closed-session records must never be fed into public AI prompts [1] [7].
* **Inclusive Language:** Summaries should adhere to plain-language and inclusive terminology guidelines, ensuring content is accessible to people with cognitive disabilities, low literacy skills, or limited English proficiency [21] [22].

## Does It Move the Needle? Evidence and Evaluation Plan

While direct, quantitative studies isolating the impact of AI-generated planning summaries on community engagement are still emerging, adjacent evidence strongly supports the efficacy of plain-language interventions.

### What we know now about comprehension and satisfaction

The Grand Rapids Documenters study proved that shifting from official minutes to plain-language notes significantly improves accessibility. Documenters' notes were substantially shorter, scored better for readability, and consistently captured public comments that official minutes often omitted [4]. Furthermore, Boston's implementation of an AI search tool to aggregate and summarize information yielded a 34.3% positive feedback rate, outperforming traditional search by 23.4 percentage points [8].

### Measurement plan for planning commissions

| KPI | Baseline Source | Target Delta (6 Months) | Notes |
| :--- | :--- | :--- | :--- |
| **Unique visitors to summaries** | Web analytics | +30% | Focus on planning meeting pages |
| **Time-on-page** | Web analytics | 1.5–2x vs traditional agendas | Indicates improved readability and engagement |
| **Click-through to packets** | Web analytics | +20% | Measures deeper engagement with source material |
| **Resident satisfaction** | On-page survey | >70% useful/clear | Quick pulse check on AI summary utility |

## Fast Start Roadmap for a Mid-Sized City

A 90-day pilot can deliver credible planning summaries with manageable risk and clear ROI, primarily realized through staff time savings.

### 0–30 days: Foundations
* **Approve Policy:** Establish guidelines for AI use, disclosure, and data privacy, referencing frameworks like the NIST AI RMF [6] and local examples [7] [20].
* **Stand up Pipeline:** Select a vendor-native tool (e.g., CivicPlus, Granicus) or a SaaS summarizer (e.g., ClerkMinutes) and connect it to existing agenda management systems.
* **Draft SOPs:** Create strict prompting guidelines to prevent the paraphrasing of zoning codes and legal descriptions [5].

### 31–60 days: Pilot content
* **Publish Summaries:** Roll out 4–6 meeting summaries for the Planning Commission.
* **Enhance Accessibility:** Ensure summaries meet plain-language standards (e.g., active voice, short sentences) [21] and provide translations for non-English speaking residents.

### 61–90 days: Evaluate and expand
* **Review KPIs:** Analyze web traffic, time-on-page, and resident feedback against baselines.
* **Audit Accuracy:** Conduct a red-team review to ensure vote tallies and motion wording fidelity remain perfectly aligned with official records.

### Budget bands for implementation

| Model | Software/Month | Staff Time/Meeting | Notes |
| :--- | :--- | :--- | :--- |
| **Vendor-Native (Granicus/CivicPlus)** | $500–$2,500 | 1–1.5 hrs QA | Leverages existing enterprise contracts |
| **SaaS Summarizer (ClerkMinutes/Aware)** | $200–$1,000 | 1.5–2 hrs QA | Best for a quick, low-friction start |
| **In-House RAG (OpenAI/Anthropic)** | $300–$1,000 (tokens) | 2–3 hrs QA + Eng. setup | Maximum flexibility; requires IT resources |

## Appendices

### Templates and checklists

* **QA Checklist:** Verify source links, motion/vote accuracy (mover/second/tally), verbatim legal text, readability score, AI disclosures, and accessibility formatting.
* **Prompt Skeleton:** "You are a municipal clerk. Using the attached agenda, transcript, and staff reports, produce a plain-language summary. Do not paraphrase legal descriptions or zoning codes; quote them exactly. List all motions with the mover, seconder, and exact vote tally. Summarize public comments individually without altering their meaning." [5]
* **Disclosure Language:** "This summary was drafted with assistance from an AI tool and reviewed for accuracy by city staff. Official approved minutes remain the authoritative record." [20] [19]

## References

1. *AI for Smart Cities: Tech Enhanced Agenda Meetings - CivicPlus*. https://www.civicplus.com/blog/cxp/special-districts-ai-for-smart-cities-ai-public-meetings/
2. *Saratoga City Council Meeting Summaries - Hamlet GovCenter*. https://gov.myhamlet.com/ca/santa-clara-county/saratoga
3. *Cities Using AI for Transparency, Resident Engagement*. https://www.govtech.com/artificial-intelligence/cities-using-ai-for-transparency-resident-engagement
4. *Bridging the Civic Information Gap: How We Record Public Meetings Matters — City Bureau*. https://www.citybureau.org/notebook/2025/5/28/bridging-the-civic-information-gap-how-we-record-public-meetings-matters
5. *How to Generate Municipal Meeting Minutes with ChatGPT*. https://clerkminutes.com/meeting-minutes-with-chatgpt
6. *Fetched web page*. https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf
7. *
	
    San José AI Guidelines and Policies | City of San José

*. https://www.sanjoseca.gov/your-government/departments-offices/information-technology/itd-generative-ai-guideline
8. *Ensuring the Responsible Public Use of Generative Artificial Intelligence | Boston.gov*. https://www.boston.gov/news/ensuring-responsible-public-use-generative-artificial-intelligence
9. *How Aware Works: AI-Powered Meeting Summaries Explained*. https://www.awarenow.ai/how-it-works
10. *Documenters — City Bureau*. https://www.citybureau.org/documenters
11. *Bridging the Civic Information Gap*. https://journals.flvc.org/civic/article/download/138710/143930/274908
12. *Granicus January 2026 Semiannual Update: AI agents and federal cloud solutions | Granicus*. https://granicus.com/blog/granicus-january-2026-semiannual-update-ai-agents-and-federal-cloud-solutions/
13. *Legistar Web API | Granicus Support*. https://support.granicus.com/s/article/Legistar-Web-API
14. *CivicPlus' New AI Tools Work for Meetings, CRM, Websites*. https://www.govtech.com/biz/civicplus-new-ai-tools-work-for-meetings-crm-websites
15. *ClerkMinutes: Meeting Minutes Software | AI Tool for ...*. https://clerkminutes.com/
16. *Data Privacy and Municipal Security*. https://clerkminutes.com/privacy-and-security
17. *City Council Software — Replace Legistar with CivicCA*. https://www.civicca.com/solutions/city-councils
18. *Legistar Web API - Granicus*. https://webapi.legistar.com/
19. *When every word is recorded: AI meeting tools and the new governance risks | White & Case LLP*. https://www.whitecase.com/insight-alert/when-every-word-recorded-ai-meeting-tools-and-new-governance-risks
20. *City of Boston Interim Guidelines for Using Generative AI*. https://www.boston.gov/sites/default/files/file/2023/05/Guidelines-for-Using-Generative-AI-2023.pdf
21. *Plain language | Portland.gov*. https://www.portland.gov/officeofequity/digital-accessibility/how-make-accessible-web-content/plain-language
22. *Inclusive Planning Language Guide*. https://planning.lacity.gov/odocument/dc777c07-8bd7-4403-be5d-50a04ebe14f3/Inclusive_Planning_Language_Guide_Draft17.pdf
