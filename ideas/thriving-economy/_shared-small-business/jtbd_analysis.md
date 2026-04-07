# JTBD Analysis — Small Business Navigation

**Pillar:** Thriving Economy
**Problem Statement (verbatim):** Small Business Navigation — Help first-time entrepreneurs understand what steps to take, in what order, to start and register a business in Richmond.
**Applies to:** You Get What You Give RVA, TradePath RVA
**Likely misaligned:** Career Bridge (better fits Thriving Families / Youth Employment Pathways)

---

## Jobs To Be Done

### Job 1 — The First-Time Entrepreneur Who Doesn't Know Where to Start
> "When I (a Richmond resident with an idea for a business but no prior experience starting one) decide I want to turn my idea into a real business, I want to see every permit, license, and registration I need — in the right order, from the right agencies — so I can move from idea to legally operating business without missing a step or wasting money on mistakes."

**Current workaround:** Google "how to start a business in Richmond VA" and land on a mix of state, city, and federal pages that don't cross-reference each other. Download the City's 21-item Business License Application Checklist PDF and try to figure out which items apply. Call RVA 311 during business hours to ask clarifying questions. Visit the Virginia Business One Stop portal, which directs to the SBDC for counseling but cannot complete any registrations itself. Attempt to register with the Virginia State Corporation Commission, then discover the IRS EIN application is a separate federal system, then discover the Virginia Department of Taxation is yet another system. Learn only at the BPOL application stage that a Certificate of Zoning Compliance was required first — and that it's a separate portal, separate fee, and separate timeline (`A2_problem_landscape_small_business_journey.md`). Piece together the sequence through trial and error, multiple phone calls, and repeated visits to City Hall.

**Pain:** Richmond's business startup process requires navigating at least five distinct government systems — SCC for entity formation, IRS for EIN, Virginia Department of Taxation for state tax registration, City Zoning Administration for CZC, and City Finance for BPOL — with no cross-referencing, no shared data, and no documented sequencing (`A2_problem_landscape_small_business_journey.md`, `C3_services_front_door.md`). The City's own checklist is a matrix of 21 separate authorities, which functions as an admission that no unified process exists (`A2_problem_landscape_small_business_journey.md`). Hard dependencies are undocumented — the CZC must precede the BPOL, but this is discovered only mid-application (`C3_services_front_door.md`). Industry-specific permits (health, ABC, DPOR) add additional layers that are not integrated into any general-purpose guide (`A2_problem_landscape_small_business_journey.md`). The result is what the research calls a "journey of surprises" where each step reveals requirements the entrepreneur didn't anticipate (`A2_problem_landscape_small_business_journey.md`).

### Job 2 — The Resident Transitioning to Self-Employment Who Can't Afford Mistakes
> "When I (a Richmond resident leaving a job or starting a side business) need to understand the financial, legal, and regulatory steps to become self-employed in Richmond — city license, state registration, zoning, taxes — I want a clear, sequenced path specific to my situation, so I don't waste limited savings on wrong-order filings, missed deadlines, or penalties I didn't know existed."

**Current workaround:** Consult the SBDC or SCORE for free counseling, but these advisors provide general guidance — the entrepreneur must still navigate each agency's portal independently. Ask peers who have started businesses, but their experience may reflect a different business type or an older version of the process. Estimate costs by scanning individual agency fee pages — $100 SCC filing, $50 annual maintenance, $30+ BPOL, $40 food service permit if applicable — but no consolidated cost estimate exists (`A2_problem_landscape_small_business_journey.md`). Attempt to determine which tax types apply (Sales Tax, Meals Tax, BTPP) by reading the Department of Finance website, but the site is organized by tax category rather than by business type, forcing the entrepreneur to self-diagnose which obligations apply (`C3_services_front_door.md`). Risk a 10% late filing penalty if the BPOL license is not obtained within 30 days of opening (`A2_problem_landscape_small_business_journey.md`).

**Pain:** The total cost and timeline of the startup process is unknowable in advance because no government source provides a consolidated estimate (`A2_problem_landscape_small_business_journey.md`). Entrepreneurs must provide the same identifying information — name, address, business description — to multiple agencies with no data sharing (`A2_problem_landscape_small_business_journey.md`). Business structure selection (sole proprietorship vs. LLC vs. corporation) has profound downstream implications for liability, taxes, and ongoing admin burden, yet Richmond provides no comparative guidance or decision tree — the entrepreneur must consult private legal counsel or hope to reach the right SBDC advisor (`A2_problem_landscape_small_business_journey.md`, `B2_users_personas_setup.md`). The BTPP tax filing is required even if the business owns no tangible property — the entrepreneur must file a return entering "NONE" and explain how the business operates without property, a requirement that confuses digital-only businesses (`A2_problem_landscape_small_business_journey.md`). Home-based businesses face strict zoning constraints (25% of floor area or 500 sq ft, no more than 4 client vehicles/day, restricted hours, certain business types prohibited) that are buried in a separate zoning document not linked from any startup guide (`A2_problem_landscape_small_business_journey.md`).

### Job 3 — The SBDC Counselor or City Staff Member Answering the Same Questions
> "When I (a Capital Region SBDC counselor, SCORE mentor, OMBD staff member, or RVA 311 agent) spend the majority of my time answering the same basic 'where do I start?' and 'what do I need?' questions from first-time entrepreneurs, I want a self-service tool that handles the common path — business type identification, sequenced steps, agency links, cost estimates — so I can focus my limited time on complex cases, specialized industries, and the entrepreneurs who need hands-on help most."

**Current workaround:** Walk each entrepreneur through the same sequence manually: SCC registration → EIN → state tax → CZC → BPOL, adjusting for business type. Maintain personal reference documents and checklists that are not published or standardized across the ecosystem. Refer entrepreneurs to the City's Business License Application Checklist PDF, then spend time explaining what each line item means and which ones apply. Answer 311 calls about business licensing during limited hours (Mon–Fri 8–7, Sat 9–1), with no ability to resolve state or federal questions (`C3_services_front_door.md`). The Capital Region SBDC has served 1,500 clients since 2020 and assisted 111 new business starts — meaningful scale, but still one-to-one (`C1_services_existing_landscape.md`).

**Pain:** Staff knowledge about the actual startup process — the real sequence, the gotchas, the workarounds — lives in the heads of experienced counselors and is not captured in any public-facing system (`B5_users_staff_knowledge.md`). Tacit knowledge accounts for roughly 80% of operational knowledge in organizations, and the Richmond ecosystem is no exception — experienced SBDC and OMBD staff know which agencies are slow, which forms trip people up, and which requirements are commonly missed, but none of this is documented (`B5_users_staff_knowledge.md`). The 1717 Collective coordinates ecosystem organizations but lacks visibility among entrepreneurs who don't already know it exists (`C1_services_existing_landscape.md`). RVA 311 handles ~13,500 calls/month but is a general-purpose municipal help desk, not a business startup navigator (`C3_services_front_door.md`). Every hour spent on a "where do I start?" question is an hour not spent on a minority business owner navigating MBE certification, a food entrepreneur understanding HACCP requirements, or a contractor sorting out Workers' Compensation compliance (`B2_users_personas_setup.md`).

---

## Open Questions

### Data Questions
1. Does the City of Richmond or Virginia SCC publish machine-readable data on business registrations (formation date, entity type, NAICS code, address) that could power a "businesses like yours" recommendation engine? The SCC has an online search tool, but it is unclear whether bulk data or an API exists.
2. What is the actual processing time for a Certificate of Zoning Compliance application? The City documentation says "upon completion you will receive a verified status" but provides no SLA or average turnaround (`A2_problem_landscape_small_business_journey.md`).
3. Is the RVA Business Portal (rvapay.rva.gov/bpp) API-accessible or scrape-able for BPOL tax rate schedules by business type, or must rates be manually extracted from the Department of Finance website?
4. Does the City maintain a structured, machine-readable version of the 21-item Business License Application Checklist, or does it exist only as a PDF?

### User Questions
5. What percentage of first-time entrepreneurs in Richmond attempt the process without any SBDC/SCORE/OMBD counseling — i.e., how large is the "unguided" population that a self-service tool would primarily serve?
6. At what point in the journey do entrepreneurs most commonly abandon the process or operate without proper licensing? Is it the CZC step, the multi-agency registration sequence, or the industry-specific permits?
7. How do Richmond's skilled trades workers (electricians, plumbers, HVAC) currently navigate the overlapping requirements of DPOR licensing, Workers' Comp, and City contractor licensing — is there a distinct pain point for this population that TradePath RVA addresses?
8. What fraction of RVA 311 business-related calls are "where do I start?" routing questions vs. specific compliance questions about an existing business?

### Integration Questions
9. Could a tool pre-populate downstream applications (BPOL, CZC) with data already entered during SCC registration or EIN application, or are there legal/technical barriers to cross-agency data reuse?
10. Does the RVA Business Portal's January 2025 modernization include any API or webhook capability that a third-party tool could integrate with, or is it a closed system?
11. Is there a canonical list of Richmond business types mapped to required permits, licenses, and tax obligations that could serve as the rules engine for a step-by-step wizard? Or must this be assembled from scratch across agency websites?

### Equity Questions
12. What languages are most spoken by Richmond's aspiring entrepreneurs after English? The OMBD and SBDC materials reviewed are English-only. Does the RVA Business Portal support any other languages (`G3_risks_inclusion_accessibility.md`)?
13. How do entrepreneurs without broadband access or a computer currently complete the increasingly digital registration process (SCC online filing, IRS online EIN, RVA Business Portal)? Is there a paper fallback path, and is it meaningfully usable (`G3_risks_inclusion_accessibility.md`)?
14. Are there neighborhoods in Richmond where informal/unlicensed businesses are concentrated — and if so, is the barrier awareness, cost, language, or distrust of government?
15. Does the OMBD's free technical assistance reach entrepreneurs outside downtown Richmond, or is geographic access a limiting factor for residents in the East End, Southside, or surrounding counties (`C1_services_existing_landscape.md`)?

### Prior Art Questions
16. NYC's MyCity Business Step-by-Step Wizard generates personalized permit/license lists based on a questionnaire. Has any Virginia city or the state itself attempted a similar tool? What happened (`E1_prior_art_catalog.md`)?
17. Virginia Business One Stop (bos.sbsd.virginia.gov) claims 33,000+ users but functions as a directory, not a transaction system. Has there been any attempt to upgrade it into an interactive, sequenced guide (`C3_services_front_door.md`)?
18. Boston's Office of Small Business provides neighborhood business managers for in-person guidance. Has Richmond considered a similar model, or does the OMBD's counseling fill that role (`E1_prior_art_catalog.md`, `C1_services_existing_landscape.md`)?
19. What distinguishes the business navigation tools that achieve sustained adoption (NYC MyCity, Chicago Business Direct) from those that stall — is it institutional maintenance, data pipeline durability, or scope discipline (`E1_prior_art_catalog.md`)?

---

## Corpus Coverage Note

Three research files assigned to the prior-art series (`E3_prior_art_archetype_mapping.md`, `E4_prior_art_pitfalls.md`, `E5_prior_art_weekend_viability.md`) contain off-topic AI-generated content about patent law archetypes, USPTO prior-art rejections, and patent filing weekend rules respectively — none address small business navigation tools. Similarly, `D3_data_inventory_business_setup.md` describes a generic "D3 platform" data model (companies, chart of accounts, fiscal calendars) unrelated to Richmond business registration data. These files are excluded from synthesis. The remaining corpus files provide substantial coverage of the problem space.

## Answered Questions

Parallel AI research (`sb_q1_system_data.md`, `sb_q2_usage_equity.md`, `sb_q3_prior_art.md`) addresses the open questions below. Verdicts reflect how fully the research answered each question, not whether the underlying fact is favorable to a product hypothesis.

| # | Question | Verdict | Key Finding |
|---|----------|---------|-------------|
| 1 | Machine-readable SCC / City registration data for a “businesses like yours” engine | [Partial] | Virginia Open Data exposes CKAN API plus CSV/XLSX bulk for SCC entity datasets (e.g., corporations, LLCs, officers); whether fields like NAICS/address support the envisioned engine was not validated field-by-field. (`sb_q1_system_data.md`) |
| 2 | Actual Certificate of Zoning Compliance processing time / SLA | [Partial] | Home-occupation CZC is typically issued within ~10 business days after fee payment; commercial fees/timelines reference zoning schedules without a single published SLA for all cases. (`sb_q1_system_data.md`) |
| 3 | RVA Business Portal API or scrape-ability for BPOL tax rate schedules | [Confirmed] | No documented public API or webhooks for BPOL/tax rate data; portal is described as user-facing filing and payment. (`sb_q1_system_data.md`) |
| 4 | Structured vs PDF-only Business License Application Checklist | [Confirmed] | Checklist exists as a static PDF only; no JSON/CSV/XML or equivalent machine-readable version was found on public city channels. (`sb_q1_system_data.md`) |
| 5 | Share of first-time entrepreneurs who skip SBDC/SCORE/OMBD | [Still Unknown] | Richmond/Capital Region SBDC/OMBD materials do not publish a current “unguided” rate; only stale statewide SBDC client-mix hints exist. (`sb_q2_usage_equity.md`) |
| 6 | Where founders most often abandon licensing or go informal | [Still Unknown] | City and portal publish the sequence but no public analytics on drop-off by stage (SCC, CZC, permits, etc.). (`sb_q2_usage_equity.md`) |
| 7 | Skilled trades path across DPOR, Workers’ Comp, and City licensing | [Confirmed] | Documented sequence: DPOR contractor license (incl. pre-license education) → Virginia workers’ comp compliance (incl. subcontractor employees) → CZC → BPOL with proof of state license and comp. (`sb_q2_usage_equity.md`) |
| 8 | Fraction of RVA 311 business contacts that are basic “where do I start?” | [Still Unknown] | BPOL FAQ steers questions to 311, but the city does not publish a breakdown of business vs. routing vs. other categories. (`sb_q2_usage_equity.md`) |
| 9 | Pre-populating BPOL/CZC from SCC or EIN data | [Confirmed] | Pre-fill from SCC/CIS is technically plausible with integrations/MOUs; routine reuse of IRS EIN application data is largely blocked by federal confidentiality rules (e.g., 26 U.S.C. § 6103). (`sb_q3_prior_art.md`) |
| 10 | January 2025 RVA Business Portal modernization: API / webhooks | [Confirmed] | Press and product descriptions emphasize filing, history, and dashboards; no documented public API or webhook capability for third parties. (`sb_q1_system_data.md`) |
| 11 | Canonical Richmond business-type → permits/taxes rules engine | [Confirmed] | No single machine-readable authority; obligations are fragmented across Finance BPOL pages, checklist PDF, zoning/OPP, and other agencies. (`sb_q1_system_data.md`) |
| 12 | Languages of aspiring entrepreneurs after English | [Partial] | ACS shows Spanish as the main non-English language citywide; no dataset isolates languages of “aspiring entrepreneurs” or portal multilingual support. (`sb_q2_usage_equity.md`) |
| 13 | Broadband/digital divide and paper fallbacks for registration | [Confirmed] | SCC and IRS retain mail/fax paths; Richmond is digital-first for key 2025 filings (no manual paper forms for that lane) but offers in-person/virtual help, 311, and library computers/printing. (`sb_q2_usage_equity.md`) |
| 14 | Neighborhoods with concentrated informal/unlicensed activity | [Still Unknown] | No city-published map or dataset of informality by neighborhood; barriers discussed qualitatively only. (`sb_q2_usage_equity.md`) |
| 15 | OMBD reach outside downtown (East End, Southside, etc.) | [Confirmed] | Documented service delivery is centralized at City Hall without recurring satellite offices called out for those geographies. (`sb_q3_prior_art.md`) |
| 16 | Virginia city or state “MyCity-style” personalized wizard | [Confirmed] | No sustained VA equivalent found; Richmond’s OPP/EnerGov is transactional permits, not a cross-agency requirement wizard. (`sb_q3_prior_art.md`) |
| 17 | Virginia Business One Stop upgraded to interactive sequenced guide | [Partial] | VBOS remains a resource/directory with account organization; site language references a future “New Business Wizard” without evidence of an active, comparable shipped product. (`sb_q3_prior_art.md`) |
| 18 | Richmond vs. Boston-style neighborhood business managers | [Confirmed] | Richmond has not implemented Boston’s neighborhood-assigned manager model; support is centralized counters, SBDC network, EDA, OMBD. (`sb_q3_prior_art.md`) |
| 19 | What separates adopted tools (NYC, Chicago) from stalled ones | [Confirmed] | Research highlights transactionality (apply/pay/track), cross-agency profiles reducing re-entry, and executive sponsorship tied to reform—not static link farms. (`sb_q3_prior_art.md`) |

**Summary:** 11 Confirmed / 4 Partial / 4 Still Unknown out of 19 questions.
