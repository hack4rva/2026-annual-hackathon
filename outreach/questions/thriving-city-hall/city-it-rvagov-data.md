# Outreach: City IT / Digital Services — rva.gov Data Access — Research & Questions

### What we've confirmed through research

**The 311 system works — but the website doesn't help residents find it:**
- RVA311 handled 208,216 service requests in 2025 and call center agents resolved 116,000+ additional concerns by phone without creating tickets. The system is high-volume and operational.
- But 13.8% of Richmond households lack broadband (ACS 2020-2024), and the phone channel is clearly dominant — more than half of all concerns are resolved via phone, not digital channels. This suggests the digital self-service tools aren't reaching or serving a large portion of residents.
- Richmond has no chatbot, no AI assistant, and no automated navigation tool on rva.gov. The City has an AI Policy (2025) but nothing deployed publicly.

**rva.gov's current service information:**
- **Services directory** at rva.gov/common/services exists but is not a structured, machine-readable catalog. It's a collection of Drupal pages organized by department — not by task, problem, or resident need.
- **Helpful Links page** (rva.gov/citizen-service-and-response/rva-311-helpful-links) maps some services to departments but is static HTML, not an API or data feed.
- **No JSON-LD, sitemap.xml, or structured data markup** on rva.gov that would allow a tool to programmatically understand the service landscape.
- The site is Drupal-based (Acquia CMS), which means a content inventory is technically extractable — but nobody has done it.

**The Language Access gap:**
- The Language Access Policy (AR 5.24, July 2023) requires professional translation of vital documents.
- rva.gov uses Google Translate with an explicit disclaimer (posted in Spanish on the site) that it is "not a substitute" for the professional translation services the City offers via 311.
- 71.57% of Richmond's LEP population speaks Spanish. No RVA311 or rva.gov interface is available in human-verified Spanish.
- This means the disclaimer is currently the most prominent non-English content on the service navigation pages — telling residents to call instead. Every service navigation demo that claims "multilingual" via machine translation is running into this policy wall.

**What comparable cities do:**
- Norfolk publishes open data from its MyNorfolk citizen services portal.
- Raleigh launched "Ask Raleigh" on ServiceNow in January 2026, which includes a searchable knowledge base.
- Charlotte's CharMeck 311 offers live chat alongside phone, web, and app.
- No comparable city has a verified AI chatbot or wizard-style navigation tool. Richmond would be first if any of these prototypes deployed.

### What we need — and it's narrow

We have **four specific questions:**

1. **Content inventory:** Does rva.gov have an internal content inventory, sitemap, or content model that maps all department pages, service pages, forms, and contact information? Even a Drupal content export would work. This is the #1 data gap across all service navigation demos — every tool needs to know "what services exist and which department owns them" as structured data, and today this doesn't exist in any accessible form.

2. **Department-to-service mapping:** Is there a maintained document (internal spreadsheet, Drupal taxonomy, or wiki) that maps which department handles which service type? The Helpful Links page is the closest public version but it's incomplete and static. If a more complete version exists internally, sharing it as a CSV would unblock multiple prototypes.

3. **Dan Logons' research:** Doug Gernat mentioned during the pillar kickoff that Dan Logons (Data & AI Program Manager) has researched the permit application process — multi-step flows that residents struggle with. Is that research available for review? It may directly inform the "deterministic service wizard" concept we're developing.

4. **Widget pilot feasibility:** Hey804 demonstrated a lightweight JavaScript widget that could be embedded on rva.gov pages to provide contextual service navigation. Would the City be open to a pilot that adds a navigation widget to one or two department pages (e.g., Public Works) as a test? This would not require changing the CMS — just a script tag on selected pages.

### What we're recommending

Our highest-scoring service navigation concepts are:

1. **Deterministic Service Wizard** (Idea 1, scored 93/105 Pillar) — A GOV.UK Smart Answers-style tool: 3-6 plain-language questions → exact routing to the right RVA311 form or department contact. No AI, no hallucination risk, every path version-controlled in a JSON file the 311 team can audit. Requires the taxonomy/service mapping from Q1-Q2 above.

2. **RVA.gov Content Gap Detector** (Idea 2, scored 84/105) — A crawler that scans rva.gov department pages and identifies broken links, stale content (not updated in 12+ months), orphaned pages, and inconsistencies with the 311 Helpful Numbers guide. Outputs a prioritized "content health report" per department. Fixes the underlying information architecture before adding new navigation layers.

3. **Symptom-Based Cross-Department Triage** (Idea 6, scored 93/105 Pillar) — Encodes the actual business rules that 311 operators learn through experience: "Is there standing water near the hole?" (→ DPU, not DPW). "Is the graffiti on your property or public property?" (→ consent workflow vs. direct DPW ticket). Uses the boundary cases documented in our research to reduce misrouting.

All three are designed to work WITH rva.gov and RVA311, not replace them. The wizard and triage tool are static and auditable — no AI, no API dependency, no procurement pathway for the prototype.

---

## Context for the SME
The research corpus identifies rva.gov's department-centric information architecture as a root cause of the service navigation problem. The site has ~40 department slugs but no task-oriented structure. Every navigation tool demo needs a structured knowledge base that doesn't exist in an accessible format. A simple Drupal content export or taxonomy CSV would unblock 3+ prototypes.

The Language Access finding is politically significant: rva.gov's most prominent non-English content is a disclaimer telling residents to call instead of using the website. This undercuts any claim that digital services are accessible to LEP residents.

## Why This Person
Doug Gernat referenced Dan Logons (Data & AI Program Manager) by name during the pillar talk as the person who has researched city service flows. Dan or the web team would know the CMS structure, whether structured data export is possible, and whether a widget pilot on rva.gov is feasible.

## Data Questions (internal tracking)
- [ ] Q1: Content inventory / Drupal content export
- [ ] Q2: Department-to-service mapping (internal spreadsheet or taxonomy)
- [ ] Q3: Dan Logons' permit process research availability
- [ ] Q4: Widget pilot feasibility on rva.gov pages

## Research Sources
- `_research-answers/sn_q1_system_data.md` — rva.gov structure, no chatbot, partial directory
- `_research-answers/sn_q2_usage_equity.md` — Language Access Plan, Google Translate disclaimer, 13.8% no broadband
- `_research-answers/sn_q3_prior_art.md` — comparable cities, no AI deployed anywhere
- `_shared-service-navigation/jtbd_analysis.md` — full JTBD + answered questions
- `NEW_IDEAS_RUBRIC_GRADES.md` — scored solution ideas
