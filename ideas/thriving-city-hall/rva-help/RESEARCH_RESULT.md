# Routing 311 Right: Evidence on AI vs Rules vs Search

## Executive Summary
Municipalities are increasingly turning to artificial intelligence to manage the overwhelming volume of 311 service requests, but the evidence on effectiveness reveals a stark divide between controlled pilots and messy real-world deployments. Natural Language Processing (NLP) routing can be highly accurate when the scope is tight and the model is confidence-aware, with some systems achieving over 92% accuracy [1]. However, cross-city generalization drops significantly without strict taxonomy discipline, often falling to the 70-80% range [2]. 

When these systems fail, the consequences disproportionately impact vulnerable residents. Chatbots lacking proper grounding have provided illegal housing and labor advice [3] [4], while misclassification can route sensitive policy inquiries about homelessness into punitive encampment removal workflows. To safely deploy AI in municipal service navigation, cities must move beyond basic keyword search and brittle decision trees. The most effective architectures combine NLP intent classification with confidence-based abstention, Retrieval-Augmented Generation (RAG) for policy questions, and seamless escalation to human dispatchers for sensitive or low-confidence requests.

## What the Evidence Really Shows: Accuracy Bands and Limits
The effectiveness of AI-powered service navigation tools depends heavily on taxonomy granularity, class imbalance, and label quality. NLP routers can reach 88–95% accuracy in scoped settings but fall to 74–83% across cities without rigorous taxonomy alignment.

### Reported Accuracies in Municipal Routing
Real-world deployments and academic evaluations demonstrate a wide band of performance based on the deployment context:

| Study / Deployment | Taxonomy Size | Metric | Result | Key Context & Limitations |
| :--- | :--- | :--- | :--- | :--- |
| **Auto311 (Nashville DEC)** | 11 incident types | F1 Score / Accuracy | 92.54% average F1; 94.49% mean accuracy | Achieved 0.93 consistency on information itemization; dynamically adjusts to shifting incident types [1] [5]. |
| **Cincinnati & San Diego 311** | 41/24 minor classes | Generalization Accuracy | 71.33%–80.85% (minor); 78.44%–83.03% (major) | Combined accuracy was 73.85% (minor) and 78.79% (major). 50–75% of misclassified cases were concentrated in the "Other" category [2] [6]. |
| **Amsterdam 311-style Classifier** | 8 main, 50 sub-classes | Macro-weighted F1 | ~0.88 | Trained on over 500,000 citizen reports; performance was best for larger classes [7]. |
| **Saudi Municipal Dataset** | 8 classes | Accuracy | 91.04% | Evaluated on 3,714 Arabic text items using optimized ML baselines [8]. |

**Takeaway:** Expect mid-70s to low-80s top-1 accuracy unless taxonomies and labels are highly mature. Cleaning taxonomies and strictly limiting "Other" catch-all categories is critical before model training [2].

## Choosing the Right Tool: NLP vs Decision Trees vs Keyword Search
Municipalities typically evaluate three technical approaches for routing resident requests. Each presents distinct trade-offs in accuracy, maintainability, and user experience.

| Approach | Reported Accuracy | Robustness & Maintenance | Interpretability & Auditability | Best-Fit Municipal Use Cases |
| :--- | :--- | :--- | :--- | :--- |
| **AI / NLP (Transformers/ML)** | 74%–95% (context-dependent) | Highly robust to slang, misspellings, and multilingual inputs if trained properly. Requires labeled data and periodic retraining. | Opaque without calibration and confidence scoring. | Best for noisy, free-text 311 routing and intent classification [2] [5]. |
| **Structured Decision Trees** | N/A (Deterministic) | Brittle to phrasing variations. Requires heavy manual authoring and continuous updates to flows. | Highly auditable; exact routing logic is transparent. | Best for strict policy/eligibility screening and highly sensitive topics where deviation is unacceptable. |
| **Keyword Search** | Highly variable; low reliability | Brittle to synonym gaps. Low setup cost but high false positive/negative rates. | Low audit burden but difficult to scale effectively. | Best used only as a backstop or feature enrichment, never as the primary router [9]. |

**Takeaway:** Use NLP for free-text routing with human-in-the-loop (HITL) fallbacks. Rely on structured rules or RAG-grounded responses for regulated topics, and avoid relying on pure keyword search for triage.

## Failure and Harm Cases: What Goes Wrong and Who Pays
When municipal AI gets it wrong, the harms are not distributed equally. Misrouting and misinformation disproportionately impact vulnerable populations, leading to denial of services, wrongful enforcement, and privacy breaches.

### NYC MyCity Chatbot's Illegal Guidance
New York City's MyCity chatbot systematically provided illegal advice on fundamental policy questions. It falsely advised that landlords could discriminate against tenants using Section 8 housing vouchers, that employers could take workers' tips, and that businesses could refuse cash payments [3] [4]. Despite agency claims of 95–99% accuracy, independent audits recalculated the accuracy at 84.8%–92.7%, with 71% of user feedback (50 out of 70 respondents) expressing dissatisfaction [10] [11].

### Homelessness, Encampments, and Surveillance
Misclassification can turn a request for social services into a punitive enforcement action. Furthermore, the use of AI to detect homeless encampments—such as San Jose's pilot using vehicle-mounted cameras—raises severe surveillance and privacy concerns for unhoused individuals [12]. Service inequities also compound these harms; in San Francisco, the median time to close 311 encampment cases in the Bayview neighborhood was 14.6 days, compared to a citywide median of 1.5 days [13].

### Privacy Breaches and Domestic Violence Risks
Data security is a critical vulnerability. A data leak in Baltimore's 311 system exposed the personal information (names, emails, phone numbers) of 13.5 million complaints [14]. For domestic violence survivors, interacting with chatbots poses severe risks, including device monitoring by abusers and the retention of sensitive conversation data that could be subpoenaed, as chatbots do not fall under the strict confidentiality rules of human advocates [15].

## A Safer Architecture: Confidence, Clarification, and Human-in-the-Loop
To mitigate these harms, municipalities must implement architectures that prioritize safety over maximal automation. Confidence-guided abstention, interactive disambiguation, and human escalation measurably reduce risk.

### Confidence-Based Abstention
Models must be calibrated to know when they do not know the answer. The Auto311 system in Nashville utilized confidence guidance to dynamically adjust to shifting incident types within three turns, achieving 100% recall on critical binary questions (e.g., traffic blockages) [5]. Systems should evaluate metrics like *Reliable Accuracy* (accuracy when the model does not abstain) and *Coverage@Acc* to tune thresholds effectively [16].

### Interactive Disambiguation and Escalation
When confidence is low, the system should present the top-3 most likely categories with a clarifying question rather than guessing. If the user's intent remains ambiguous, or if the query touches on sensitive topics (e.g., domestic violence, immigration, homelessness), the system must automatically escalate to a human dispatcher [17] [9].

## Policy vs Service: Dual-Intent and Policy-Aware Responses
Municipal tools must distinguish between actionable service requests (e.g., "fix this pothole") and contested civic or policy-oriented queries (e.g., "what is the city doing about homelessness?"). 

### Dual-Intent Classification and RAG
Systems should utilize dual-intent classifiers to separate service workflows from information requests. For policy inquiries, chatbots should employ Retrieval-Augmented Generation (RAG) grounded strictly in vetted, authoritative sources (e.g., official city code, government guidance) [18] [19]. The system must explicitly cite its sources and be programmed with refusal/abstain behaviors to prevent it from generating out-of-scope legal or medical advice [4].

## Evaluation Framework and Benchmarks You Can Run Now
Cities must standardize their evaluation frameworks before deploying AI routing tools. 

* **Dataset Construction:** Align taxonomies, map legacy labels, create gold-standard labels, and rigorously redact PII. Ensure the dataset includes multilingual inputs and noisy text typical of resident submissions [20].
* **Metrics:** Track top-1 and top-3 accuracy, macro/micro F1 scores, Reliable Accuracy, and Abstain F1 [16]. 
* **Fairness and Disparity:** Measure performance disparities across languages, neighborhoods, and disability accommodations. For example, San Jose's AI inventory review noted that while English-to-Spanish translation performed well, Vietnamese-to-English translation lagged, requiring targeted improvements [21].

## Governance, Compliance, and Ops: Make It Auditable and Equitable
Algorithmic accountability requires robust institutional governance, not just technical fixes.

* **Algorithmic Impact Assessments (AIA):** Agencies should conduct self-assessments evaluating potential impacts on fairness and justice, provide public notice of automated systems, and allow external researcher review [22].
* **NIST AI RMF:** Adopt frameworks like the NIST AI Risk Management Framework to guide bias testing, red-teaming, and performance reporting [23].
* **Transparency and FOIA:** Ensure that routing decisions are reproducible and that audit logs are maintained for public records requests and appeals [24] [25].

## Cost and Procurement: What to Budget and How to Buy
The total cost of ownership for AI routing extends far beyond software licenses or API token costs. 

* **Cost Drivers:** Budget heavily for data labeling (typically $0.02–$0.15 per text entity or $5–$12/hour for annotators) [26] [27], taxonomy curation, and ongoing MLOps. Human data annotation now frequently exceeds compute costs for model training [28].
* **Procurement:** When contracting with vendors, insist on audit access, bias/accuracy reporting, incident SLAs, and the right to export your data and knowledge base to avoid vendor lock-in.

## Go/No-Go Gates and Rollback Rules
Define strict numerical thresholds before launch. Favor safety and coverage over maximal automation in early phases.

| Metric | Target Threshold | Rollback Trigger |
| :--- | :--- | :--- |
| **Macro-F1 (Overall Top-1)** | ≥ 0.85 | 3 consecutive days below threshold |
| **Reliable Accuracy (Answered Subset)** | ≥ 0.95 | Sustained dip below 0.90 |
| **Coverage@Acc** | 70%–80% | N/A |
| **Top-3 Suggestion Accuracy** | ≥ 0.95 | ≥ 3 severe misrouting incidents/week |
| **Disparity Guardrails** | < 10% variance by language/neighborhood | Widening disparity trend across demographics |

## Implementation Roadmap (90-Day Pilot to Scale)
* **Weeks 1–4:** Clean the taxonomy, sample and adjudicate labels to build a gold dataset, configure the dual-intent classifier, and establish a governance board.
* **Weeks 5–8:** Train the baseline NLP model, integrate confidence scoring and top-3 UI clarification, set up human escalation queues, and conduct multilingual evaluation and red-teaming.
* **Weeks 9–12:** Launch a canary rollout on two high-volume service request families. A/B test confidence thresholds, publish a public performance dashboard, and evaluate against go/no-go metrics before scaling.

## References

1. *Auto311 | Proceedings of the Thirty-Eighth AAAI Conference on Artificial Intelligence and Thirty-Sixth Conference on Innovative Applications of Artificial Intelligence and Fourteenth Symposium on Educational Advances in Artificial Intelligence*. https://dl.acm.org/doi/10.1609/aaai.v38i20.30199
2. *Full article: Automatic Type Detection of 311 Service Requests Based on Customer Provided Descriptions*. https://www.tandfonline.com/doi/full/10.1080/08839514.2022.2073717
3. *Mamdani to kill the NYC AI chatbot we caught telling businesses to break the law – The Markup*. https://themarkup.org/artificial-intelligence/2026/01/30/mamdani-to-kill-the-nyc-ai-chatbot-we-caught-telling-businesses-to-break-the-law
4. *Case Study of NYC's MyCity Chatbot Giving Wrong Legal Advice*. https://www.envive.ai/post/case-study-nycs-mycity-chatbot
5. *Auto311: A Confidence-Guided Automated System for Non ...*. https://ojs.aaai.org/index.php/AAAI/article/view/30199/32129
6. *Automatic Type Detection of 311 Service Requests Based ...*. https://www.tandfonline.com/doi/pdf/10.1080/08839514.2022.2073717
7. *How to use machine learning for the classification of citizen service requests | by Maarten Sukel | Maarten Sukel | Medium*. https://medium.com/maarten-sukel/how-to-use-machine-learning-for-the-classification-of-citizen-service-requests-b71159a85f36
8. *Utilizing NLP to Optimize Municipal Services Delivery ...*. https://thesai.org/Downloads/Volume16No2/Paper_78-Utilizing_NLP_to_Optimize_Municipal_Services_Delivery.pdf
9. *Designing chatbots: how to design fallback logic*. https://uxcontent.com/designing-chatbots-fallbacks
10. *Audit Report on the New York City Office of Technology and ...*. https://comptroller.nyc.gov/wp-content/uploads/2026/02/MyCity-System-Development-Public-Final-report-12-30-25-final-copy.pdf
11. *Audit Report on the New York City Office of Technology and ...*. https://comptroller.nyc.gov/reports/audit-report-on-the-new-york-city-office-of-technology-and-innovations-mycity-system/
12. *Revealed: a California city is training AI to spot homeless encampments | AI (artificial intelligence) | The Guardian*. https://www.theguardian.com/technology/2024/mar/25/san-jose-homelessness-ai-detection
13. *After 50K homeless camp complaints, SF's response time ...*. https://sfstandard.com/2025/03/19/san-francisco-homeless-311-response-times/
14. *Baltimore 311 callers’ personal data exposed in leak, researchers say*. https://technical.ly/civic-news/baltimore-311-data-breach-personal-information-cybernews/
15. *Considersations of Using AI ChatBots — NextStep Domestic Violence Project*. https://www.nextstepdvproject.org/considersations-of-using-ai-chatbots
16. *Know Your Limits: A Survey of Abstention in Large Language Models | Transactions of the Association for Computational Linguistics | MIT Press*. https://direct.mit.edu/tacl/article/doi/10.1162/tacl_a_00754/131566/Know-Your-Limits-A-Survey-of-Abstention-in-Large
17. *Researchers Find Opportunities for 311 Chatbots to Foster Community Engagement | Research*. https://research.gatech.edu/researchers-find-opportunities-311-chatbots-foster-community-engagement
18. *AI chatbot to offer housing advice*. https://www.homelessnessimpact.org/projects/ai-chatbot-to-offer-housing-advice
19. *
            Retrieval Augmented Generation (RAG) for Evaluating Regulatory Compliance of Drug Information and Clinical Trial Protocols - PMC
        *. https://pmc.ncbi.nlm.nih.gov/articles/PMC12917324/
20. *Principles for Open Data Curation: A Case Study with the New York City 311 Service Request Data*. https://arxiv.org/html/2502.08649v2
21. *
	
    Artificial Intelligence & Inventory | City of San José

*. https://www.sanjoseca.gov/your-government/departments-offices/information-technology/digital-privacy/ai-reviews-algorithm-register
22. *ALGORITHMIC IMPACT ASSESSMENTS:*. https://ainowinstitute.org/wp-content/uploads/2023/04/aiareport2018.pdf
23. *Artificial Intelligence Risk Management Framework*. https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf
24. *Breaking the Lock: Tech Requests | FOIA Basics for Activists*. https://www.foiabasics.org/breaking-the-lock
25. *Access to Algorithms*. https://ir.lawnet.fordham.edu/cgi/viewcontent.cgi?article=5649&context=flr
26. *Data Annotation Pricing: Free Cost Calculator for Video and Image Annotation*. https://labelyourdata.com/pricing
27. *Data Annotation Pricing: Key Models & Cost Factors Explained*. https://www.gdsonline.tech/data-annotation-pricing/
28. *What is the cost of training large language models?*. https://www.cudocompute.com/blog/what-is-the-cost-of-training-large-language-models
