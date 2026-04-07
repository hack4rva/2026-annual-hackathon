# Innovation Analysis: Hey804

**Generated:** April 2, 2026
**Inputs:** RESEARCH_RESULT.md, 6 Innovation Lenses

---

## 1. Blue Ocean Reframing (ERRC Grid)

| Factor | Action | Details |
|--------|--------|---------|
| Open-ended AI chat for all city inquiries | Eliminate | NYC's MyCity chatbot answered legal/policy questions and was shut down after giving illegal advice (71.4% negative feedback). Eliminate unconstrained AI response scope entirely. |
| Human call center as the only real-time channel | Reduce | Denver's Sunny chatbot handles 100K+ questions at $0.35/interaction vs $4 for human agents. Reduce human agent load on the top 50 highest-volume, lowest-complexity FAQs. |
| Source grounding and citation | Raise | Decatur Direct (Ordinal Connect) grounds every response in official city documents with direct source links. Raise the standard from "AI answers" to "AI answers with verifiable citations." |
| Domain blocklists for legal/policy/emergency topics | Create | No Richmond service navigation tool explicitly blocks AI from answering legal, tax, or emergency questions. Create a hard blocklist that routes these to humans or deterministic flows. |

**Core assumption challenged:** That an AI chatbot is a single tool for all resident inquiries. The research shows a stark dichotomy: constrained-scope AI for FAQs delivers 82-90% accuracy and massive cost savings, while AI for legal/policy questions causes reputational and legal harm. Hey804 must choose its scope or fail like MyCity.

**Reframed value proposition:** Hey804 is not a chatbot — it's an AI triage layer. It answers the 50 most common FAQs with cited sources, routes ambiguous questions to a deterministic wizard, and escalates sensitive topics to humans. The value is in what it refuses to answer, not what it attempts.

---

## 2. Rapid Ideation — 8 Divergent Approaches

1. **FAQ-Only Bot** — Restrict to the top 50 FAQs (trash schedule, pothole reporting, court dates). Cite rva.gov page for each answer. No generative text.
2. **Bilingual SMS Triage** — Text "Hey804" to a shortcode. Bot responds in English or Spanish based on the first message. Routes to 311 forms or phone numbers.
3. **RAG-Grounded City Assistant** — Use Retrieval-Augmented Generation against the full rva.gov content corpus. Every answer includes a source URL. Blocklist legal/tax/emergency.
4. **Voice-First 311 Deflector** — An AI phone agent (like Denver's Sunny) that answers common 311 questions before connecting to a human. Reduces hold times.
5. **Proactive Community Alerts** — Flip the model: instead of residents asking questions, Hey804 pushes personalized alerts based on location (boil water advisory, street sweeping schedule, permit activity).
6. **Multi-Channel Hub** — A single bot that lives on rva.gov, Facebook Messenger, WhatsApp, and SMS. Meet residents on whatever channel they already use.
7. **Confidence-Gated Responder** — The bot only answers when confidence exceeds 85%. Below that, it presents top-3 likely topics and asks: "Is this what you mean?" Below 50%, it routes to a human.
8. **Community Knowledge Builder** — Residents can suggest corrections to bot answers. A 311 team member reviews and approves. The bot improves through community feedback.

**Most provocative:** #5 — Proactive Community Alerts invert the relationship. Instead of residents searching for information, the city reaches out. This eliminates the "I didn't know to ask" problem entirely.
**Most feasible:** #1 — FAQ-Only Bot with source citations is the safest, simplest deployment. 50 curated Q&A pairs, no generative risk.

---

## 3. Rapid Design Sprint

**Problem in one sentence:** Richmond residents with simple city service questions either call 311 and wait on hold or navigate a complex rva.gov website that doesn't match how they describe their problem.

**Target user:** A resident who wants to know their bulk trash pickup date and would prefer to text or chat rather than call 311 or navigate a website.

**User Journey:**
- Start: Resident texts "Hey804" or opens a chat widget on rva.gov. Types: "When is my bulk trash pickup?"
- Friction: Currently, the resident would need to find the DPW page on rva.gov, locate the bulk trash schedule, and cross-reference their address. If they call 311, they may wait on hold.
- Outcome: Bot responds in 5 seconds: "Bulk trash pickup for [your district] is on [date]. Details: [rva.gov/dpw/bulk-trash]. To schedule a pickup, call 311 or submit this form: [link]."

**Lowest-fidelity prototype:** A web chat widget powered by a simple intent classifier (even keyword matching for 50 topics) with curated responses stored in a JSON file. Each response includes a source URL.

**First test:** Deploy on a test page. Have 10 residents submit 3 questions each. Measure: correct answers, source relevance, and whether residents felt helped or frustrated.

---

## 4. Opportunity Mapper

### Pattern A: Curated FAQ Bot (Quick Win)
- **User:** Residents with common service questions
- **Outcome:** Instant answers to the top 50 city service FAQs with source citations, available 24/7
- **Workflow:** Curate 50 FAQ pairs from rva.gov and 311 call data → build a simple intent classifier → deploy as a web chat widget → blocklist legal/tax/emergency topics → escalate low-confidence queries to 311
- **Dependencies:** rva.gov content (public), hosting for the chat widget, 311 phone number as fallback
- **Richmond relevance:** San Jose achieved 82% success rate on its FAQ bot in the first 6 months with 46,000 uses. A Richmond FAQ bot targeting similar scope could deflect thousands of 311 calls.

### Pattern B: RAG-Grounded Multi-Channel Assistant (Stretch)
- **User:** All Richmond residents across web, SMS, and social channels
- **Outcome:** Natural-language city service navigation with grounded, cited responses in English and Spanish
- **Workflow:** Ingest full rva.gov corpus into a RAG pipeline → deploy across web chat, SMS (Twilio), and Facebook Messenger → implement confidence-gated responses → add Spanish language support via bilingual model → publish accuracy dashboard
- **Dependencies:** LLM API (OpenAI/Anthropic), Twilio for SMS, content scraping of rva.gov, ongoing model monitoring, bilingual QA
- **Richmond relevance:** Denver's Sunny serves 45+ languages and 100K+ questions. New Orleans' Jazz proved resilience during Hurricane Ida. A Richmond deployment at even 10% of that scale would meaningfully reduce 311 load.

**Recommendation:** Pattern A is the hackathon build — 50 FAQ pairs, zero generative risk, immediate value. Pattern B requires ongoing operational investment (model monitoring, content updates, bilingual QA) that goes beyond a hackathon.

---

## 5. Problem Scoping

| Dimension | Score (1-5) | Notes |
|-----------|-------------|-------|
| Impact | 4 | Denver proves the model works at scale ($0.35/interaction, 90% satisfaction). The impact scales with adoption. |
| Feasibility | 3 | A curated FAQ bot is buildable in a weekend. A full RAG deployment requires LLM APIs, monitoring, and content governance. |
| Data availability | 3 | rva.gov content is public but not structured for bot consumption. Requires manual curation of FAQ pairs or web scraping + RAG pipeline. |
| Clarity | 4 | "Answer common city questions via chat" is clear. The scope boundary (what NOT to answer) is the hard design decision. |
| Demo credibility | 4 | A live chat answering real Richmond questions is a strong demo. Risk: a judge asks a question outside the 50 FAQs and gets a poor response. |

**Richmond-specific alignment:** Richmond's 311 runs on AvePoint/Dynamics 365 — a structural wall for deep integration. Hey804 sidesteps this wall by treating 311 as a referral destination, not an integration target. The bot links to 311 forms and phone numbers rather than creating tickets.

**Policy/eligibility risks:** Richmond's Administrative Regulation 2.13 (effective June 2025) permits AI with DIT oversight. Any AI deployment must comply. Key risks: hallucination providing incorrect legal/safety advice (NYC precedent), PII exposure in chat logs (New Orleans' ChatNOLA was paused for this), and equity concerns if translation quality varies by language (San Jose found Vietnamese-to-English was poor).

**Weekend MVP shapes:**
1. **Minimal:** Web chat widget with 30 curated FAQ pairs, keyword-based intent matching, source URLs in every response. 8-10 hours.
2. **Enhanced:** RAG-powered with rva.gov content, confidence scoring, top-3 suggestion UI for ambiguous queries, domain blocklist, and basic analytics. 14-18 hours.

---

## 6. Assumption Mapping

| # | Assumption | Risk | Uncertainty | Priority |
|---|-----------|------|-------------|----------|
| 1 | Residents will use a chat interface instead of calling 311 | High | High | TEST FIRST |
| 2 | 50 curated FAQ pairs cover 80%+ of common inquiries | High | Medium | TEST SECOND |
| 3 | The bot can avoid hallucination on out-of-scope questions | High | Medium | TEST THIRD |
| 4 | Richmond's AI policy (AR 2.13) permits this deployment | Medium | Low | CONFIRM |
| 5 | rva.gov content is accurate and current enough to ground AI responses | Medium | Medium | VERIFY |
| 6 | SMS channel will meaningfully expand reach beyond web-only | Medium | High | ASSESS |
| 7 | Spanish language support can be added without degrading accuracy | Medium | High | DEFER |

**Top 3 to validate:**
1. **Residents will use chat** — Validation: Deploy the widget on a test page. Promote via social media. If <100 interactions in the first week, channel demand is unproven.
2. **50 FAQs cover 80% of inquiries** — Validation: Request 311 call log topic distribution. If the top 50 topics cover 80%+ of volume, the scope is correct. Atlanta's study found their bot handled only 1.79-2.58% of 311 requests — scope must be realistic.
3. **Bot avoids hallucination** — Validation: Red-team the bot with 20 adversarial questions (legal advice, emergency scenarios, political opinions). If it answers any, the blocklist needs expansion. NYC's failure mode was answering questions it should have refused.

---

## Key Takeaway

The research presents a clear playbook: constrained-scope AI for high-volume FAQs delivers measurable ROI (Denver: $0.35 vs $4 per interaction), while unconstrained AI for policy/legal questions creates reputational disaster (NYC: shut down, $500K+ wasted). Hey804's success depends entirely on scope discipline — what it refuses to answer matters more than what it attempts. A 50-question FAQ bot with source citations and a hard blocklist is safer and more valuable than a "smart" chatbot that tries to answer everything.
