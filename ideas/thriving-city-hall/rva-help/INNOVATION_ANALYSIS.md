# Innovation Analysis: RVA Help

**Generated:** April 2, 2026
**Inputs:** RESEARCH_RESULT.md, 6 Innovation Lenses

---

## 1. Blue Ocean Reframing (ERRC Grid)

| Factor | Action | Details |
|--------|--------|---------|
| Unconstrained AI response scope | Eliminate | NYC's MyCity provided illegal business advice. Atlanta's chatbot handled only 1.79-2.58% of total 311 requests. Eliminate the ambition to answer "everything" — scope to what works. |
| Reliance on complex NLP for all routing | Reduce | Cross-city NLP generalization drops to 74-83% without strict taxonomy discipline. Reduce AI dependence: use deterministic rules for high-risk topics, AI only for free-text triage. |
| Confidence-based response quality | Raise | Nashville's Auto311 achieved 94.49% accuracy using confidence-guided dynamic adjustment. Raise the bar: if confidence is below threshold, don't guess — present top-3 options and ask for clarification. |
| Dual-intent classification (service vs. policy) | Create | No Richmond tool distinguishes between actionable service requests ("fix this pothole") and contested policy queries ("what is the city doing about homelessness?"). Create a dual-intent classifier that routes these differently. |

**Core assumption challenged:** That NLP routing accuracy in the mid-70s to low-80s is acceptable for municipal service navigation. The research shows that the "Other" catch-all category absorbs 50-75% of misclassified cases (Cincinnati/San Diego study). If the taxonomy isn't clean, no amount of AI fixes the routing.

**Reframed value proposition:** RVA Help is not a chatbot — it's a confidence-aware triage system. It classifies resident requests into two buckets (service request vs. information query), routes service requests via the cleanest possible taxonomy, and answers information queries via RAG grounded strictly in rva.gov content. When confidence is low, it asks clarifying questions. When topics are sensitive, it escalates to humans.

---

## 2. Rapid Ideation — 8 Divergent Approaches

1. **Taxonomy-First Classifier** — Clean the RVA311 taxonomy to eliminate "Other" as a catch-all. Train a simple text classifier on the cleaned categories. The taxonomy IS the product.
2. **Top-3 Suggestion Interface** — Don't auto-route. Present the top 3 most likely service categories with descriptions. Let the resident choose. Reduces misrouting at the cost of one extra click.
3. **RAG-Grounded Policy Assistant** — For information queries ("what are the parking rules downtown?"), use RAG against rva.gov content. Cite the exact page. Refuse to generate opinions.
4. **Photo-Based Issue Reporter** — Resident uploads a photo of the problem. Computer vision identifies: pothole, graffiti, fallen tree, broken streetlight. Routes to the correct category without text at all.
5. **Neighborhood-Aware Triage** — Ask for the resident's address first. Customize the available categories based on location (e.g., flood-prone zones see stormwater options, historic districts see preservation contacts).
6. **Conversational Escalation Chain** — Start with AI triage → if ambiguous, offer top-3 → if still unclear, connect to live 311 agent → if sensitive (DV, immigration), escalate immediately to human with warm handoff.
7. **Multilingual Intake with Human QA** — Accept requests in any language via AI translation. Route to the correct department. Flag non-English requests for bilingual staff review before response, following San Jose's model for quality control.
8. **311 Data Quality Feedback Loop** — Use misrouted requests (from 311 reassignment logs) as training data to continuously improve the classifier. The system gets smarter from its own mistakes.

**Most provocative:** #4 — Photo-Based Issue Reporter eliminates the text classification problem entirely. If you can identify a pothole from a photo, you don't need NLP at all. This sidesteps every accuracy concern in the research.
**Most feasible:** #2 — Top-3 Suggestion Interface is the safest deployment pattern. Even at 80% accuracy, showing the top 3 options covers 95%+ of correct answers. The resident makes the final decision.

---

## 3. Rapid Design Sprint

**Problem in one sentence:** Richmond residents describing city service problems in their own words get misrouted because the 311 taxonomy doesn't match how people naturally talk about issues.

**Target user:** A resident who sees water pooling in the street after rain and doesn't know if it's a DPU, DPW, or stormwater management issue.

**User Journey:**
- Start: Resident visits RVA Help and describes the problem in plain language: "There's standing water on my street after every rain."
- Friction: The existing 311 categories don't include "standing water." The resident might choose "Pothole" (wrong) or "Other" (black hole). Either way, the request gets misrouted.
- Outcome: RVA Help classifies the intent and presents: "This sounds like it could be: (1) Stormwater/Drainage — DPU handles this [link], (2) Street Flooding — DPW handles this [link], (3) Sewer Backup — DPU emergency [link]. Which best describes your situation?"

**Lowest-fidelity prototype:** A text input box + a simple classifier (even TF-IDF + logistic regression on 20-30 categories) that returns top-3 results with department info and form links. No LLM required for the core routing.

**First test:** Collect 50 past 311 requests (with categories). Feed the description text into the classifier. Measure whether the correct category appears in the top-3 results. Target: >90% top-3 accuracy.

---

## 4. Opportunity Mapper

### Pattern A: Top-3 Suggestion Classifier (Quick Win)
- **User:** Richmond residents submitting service requests
- **Outcome:** Accurate routing via top-3 category suggestions, reducing misrouting and "Other" categorization
- **Workflow:** Clean RVA311 taxonomy → train a text classifier on historical 311 data or curated examples → present top-3 categories with descriptions → resident selects correct category → link to appropriate 311 form
- **Dependencies:** Historical 311 request data (or curated training examples), cleaned taxonomy, hosting for the classifier
- **Richmond relevance:** Cincinnati/San Diego research found 50-75% of misclassified cases landed in "Other." RVA311 likely has a similar problem. The classifier's job is to kill the "Other" category.

### Pattern B: Confidence-Gated Hybrid System (Stretch)
- **User:** All Richmond residents across web and SMS channels
- **Outcome:** Full dual-intent classification (service vs. information), RAG-grounded policy answers, confidence-based escalation, and multilingual support
- **Workflow:** Deploy NLP intent classifier + RAG pipeline → implement confidence thresholds (>85% auto-route, 50-85% present options, <50% escalate to human) → add domain blocklist (legal, emergency, DV) → support Spanish with human QA → publish performance dashboard
- **Dependencies:** LLM API for RAG, historical 311 data for training, bilingual staff for QA, 311 system integration (or referral-only mode), DIT approval under AR 2.13
- **Richmond relevance:** Nashville's Auto311 proved confidence-guided classification at 94.49% accuracy. San Jose's bot hit 82% in 6 months. Both required iterative taxonomy refinement — a 3-6 month investment.

**Recommendation:** Pattern A is the hackathon build — a text classifier with top-3 suggestions is safer and more accurate than auto-routing. Pattern B is the production system that requires ongoing MLOps and institutional governance.

---

## 5. Problem Scoping

| Dimension | Score (1-5) | Notes |
|-----------|-------------|-------|
| Impact | 4 | Misrouting wastes resident time and City resources. LA found 40% call transfer rate. Reducing misrouting by even 20% saves significant operational cost. |
| Feasibility | 3 | A curated FAQ/suggestion system is buildable in a weekend. A production NLP classifier requires labeled data, iterative training, and ongoing maintenance. |
| Data availability | 3 | Historical 311 request data would be ideal for training but may require City cooperation. Alternative: curate 200+ training examples manually from rva.gov content. |
| Clarity | 4 | "Help residents describe their problem and get routed correctly" is clear. The scope boundary (what NOT to route via AI) is the critical design decision. |
| Demo credibility | 4 | A working classifier that correctly routes real scenarios is a strong demo. Risk: an adversarial question during the demo reveals a misroute. Mitigate with top-3 suggestions. |

**Richmond-specific alignment:** Richmond's 311 runs on AvePoint/Dynamics 365 — the #1 structural wall. RVA Help should operate in referral mode: route residents to the correct 311 form/phone number, not create tickets directly. This sidesteps the wall entirely.

**Policy/eligibility risks:** NLP routing carries real harm risks. The research documents: homelessness queries misrouted to encampment removal (San Jose), DV survivors exposed via chat logs (advocacy concern), and PII leaked in Baltimore's 311 breach. RVA Help must implement domain blocklists, PII minimization, and session-based data (no persistent chat logs).

**Weekend MVP shapes:**
1. **Minimal:** Text input → keyword/TF-IDF classifier → top-3 category suggestions with department links. 8-10 hours.
2. **Enhanced:** Add RAG for information queries (grounded on rva.gov), confidence scoring, "I'm not sure" fallback, Spanish language option, and basic analytics. 16-20 hours.

---

## 6. Assumption Mapping

| # | Assumption | Risk | Uncertainty | Priority |
|---|-----------|------|-------------|----------|
| 1 | A text classifier can achieve >85% top-3 accuracy on Richmond 311 categories | High | High | TEST FIRST |
| 2 | Historical 311 data can be obtained for training | Medium | High | TEST SECOND |
| 3 | Residents will trust AI-suggested routing over calling 311 directly | High | High | TEST THIRD |
| 4 | The "Other" category in RVA311 absorbs a significant share of misclassified requests | Medium | Medium | VERIFY |
| 5 | Domain blocklists (legal, emergency, DV) can be defined and maintained | Medium | Low | IMPLEMENT |
| 6 | The top-3 suggestion pattern mitigates enough misrouting risk to be safe | Low | Low | CONFIRMED |
| 7 | Multilingual accuracy is sufficient for Spanish (Richmond's largest non-English group) | Medium | High | DEFER |

**Top 3 to validate:**
1. **Classifier achieves >85% top-3 accuracy** — Validation: Curate 200 test examples (real or synthetic) across 20-30 categories. Train a simple classifier. If top-3 accuracy is >85%, proceed. If <70%, the taxonomy needs cleaning before the model can work. Amsterdam's classifier hit ~0.88 macro-F1 on 50 sub-classes with 500K training examples.
2. **Historical 311 data is obtainable** — Validation: Check if Richmond publishes 311 data on Socrata or via FOIA. If not, curate training examples manually from rva.gov content and common sense scenarios.
3. **Residents trust AI routing** — Validation: A/B test with 20 residents: half use the classifier, half use the current rva.gov navigation. Measure time-to-correct-resource and satisfaction. Atlanta's study found only 1.79-2.58% of residents used the chatbot — adoption is the real test.

---

## Key Takeaway

The research is clear: NLP routing accuracy depends more on taxonomy quality than model sophistication. Cincinnati and San Diego's cross-city study found accuracy drops from 92% to 74% when taxonomies aren't aligned. Before building any AI router, clean the taxonomy and kill the "Other" catch-all. Then deploy a confidence-gated system that shows top-3 suggestions (safe), not auto-routing (risky). The top-3 pattern is less impressive in a demo but far safer in production — and safety is what matters when misrouting can turn a social services request into a punitive enforcement action.
