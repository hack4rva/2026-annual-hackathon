# JTBD Analysis — MBE Contracting Discovery

**Pillar:** A Thriving Economy
**Problem Statement (verbatim):** MBE Contracting Discovery — Help minority-owned businesses identify and understand City contracting opportunities that match their capabilities.
**Applies to:** Richmond Contract Navigator

---

## Jobs To Be Done

### Job 1 — The MBE Owner Who Can't Decode Procurement Jargon
> "When I (a minority-owned business owner in Richmond) hear that the City has contracting opportunities for businesses like mine, I want to search by what my company actually does — 'commercial cleaning,' 'IT support,' 'landscaping' — and see matching opportunities explained in plain English, so I can decide whether to bid without needing a procurement consultant to translate IFB numbers, NAICS codes, bonding requirements, and solicitation types."

**Current workaround:** Monitor BidNet Direct for City of Richmond postings. Separately check eVA for state-level opportunities. Search SAM.gov for federal contracts. Each system uses different terminology, different registration, and different login credentials. When an opportunity appears relevant, read multi-page solicitation documents full of acronyms (IFB, RFP, IDIQ, BPA) and legal boilerplate to determine whether the contract matches the business's size, capabilities, and certification status. Call OMBD staff at 804-646-5947 during business hours for help interpreting requirements. Ask peers at Metropolitan Business League networking events whether they've seen anything relevant. Many owners simply give up and never bid (`C2_services_contracting_support.md`, `D2_data_formats_procurement.md`, `A1_problem_landscape_mbe_contracting.md`).

**Pain:** Richmond's procurement data lives across at least four unlinked platforms — BidNet Direct (City IFBs/RFPs), the OpenGov procurement portal, the Socrata open data portal (historical City Contracts dataset `xqn7-jvv2`), and the OMBD vendor directory — with no shared search or matching layer across them (`D2_data_formats_procurement.md`). Solicitation documents use federal procurement vocabulary (NAICS codes, NIGP codes, commodity classifications) that presumes familiarity with government contracting culture (`C2_services_contracting_support.md`). MBEs often lack staff time to monitor multiple portals daily; OMBD's Vendor Registration provides notifications but only for opportunities the City pushes, not a self-service match (`C1_services_existing_landscape.md`). The operational barrier is not a lack of opportunities — it's information asymmetry and jargon density that filter out exactly the businesses the City wants to include (`A1_problem_landscape_mbe_contracting.md`).

### Job 2 — The First-Time Vendor Who Doesn't Know Where to Start
> "When I (a Richmond entrepreneur who has never done business with the City) decide I want to pursue a government contract, I want a step-by-step guide that tells me exactly what certifications to get, what registrations to complete, and in what order — including SWaM, OMBD Vendor Registration, BidNet Direct, and iSupplier — so I don't waste months discovering requirements one rejection at a time."

**Current workaround:** Google "how to get a City of Richmond contract." Land on the OMBD page listing services but no linear process. Learn about SWaM certification from SBSD (60 business days to process). Separately discover that the City uses BidNet Direct for solicitations and iSupplier for vendor payment setup, each requiring its own registration with different documentation (W-9, ACH forms, bank letters). Attend a SCORE Richmond workshop on "Selling to the Federal Government" and learn about SAM.gov, 8(a), HUBZone — a different universe from City contracting. Visit the Richmond Public Library's Richmond Room for one-on-one help. Eventually piece together that the full path is: (1) get a BPOL license, (2) obtain SWaM/MBE certification, (3) register in BidNet Direct, (4) register in iSupplier, (5) monitor OpenGov for formal solicitations. No single resource lays out this sequence. The SBDC, SCORE, OMBD, and Virginia APEX Accelerator each know pieces but have no shared intake or referral protocol (`C1_services_existing_landscape.md`, `C2_services_contracting_support.md`, `A1_problem_landscape_mbe_contracting.md`).

**Pain:** Virginia's support ecosystem is extensive but deeply fragmented. A first-time vendor interacts with OMBD (City), SBSD (state SWaM certification), BidNet Direct (solicitation platform), iSupplier (payment portal), and potentially SAM.gov (federal) — five separate systems with no cross-referencing and no unified onboarding path (`C2_services_contracting_support.md`). Certification timelines create real barriers: SWaM applications take ~60 business days; many RFPs require current certification at time of bid, so firms mid-process are excluded (`A1_problem_landscape_mbe_contracting.md`). The coordination gap between support organizations means no single entity owns the "front door" for new vendors entering the City procurement ecosystem (`C1_services_existing_landscape.md`). This isn't a data problem — it's a sequence-and-wayfinding problem where the lack of a clear path functions as a de facto barrier to entry (`A5_problem_landscape_root_causes.md`).

### Job 3 — The OMBD Staff Member Who Wants More MBE Participation
> "When I (a staff member in the City's Office of Minority Business Development) see that the same handful of MBE firms bid on City contracts while hundreds of registered vendors never respond to opportunities, I want a tool that proactively matches open solicitations to registered MBE capabilities — by commodity code, contract size, and certification status — so I can push relevant opportunities to qualified firms instead of waiting for them to find and decode postings on their own."

**Current workaround:** Maintain the OMBD Vendor Registration database with firm profiles including commodity codes, contact info, and certification status. When a new solicitation is posted on BidNet Direct or OpenGov, manually review whether any registered vendors might be a fit. Send email blasts about upcoming workshops and general procurement opportunities. Schedule one-on-one consultations with vendors who call or email. Rely on Metropolitan Business League and the Virginia APEX Accelerator to provide supplemental outreach. Track MBE participation informally — there is no automated pipeline from "opportunity posted" to "matching vendors notified" (`C1_services_existing_landscape.md`, `C2_services_contracting_support.md`).

**Pain:** OMBD staff are structurally limited to reactive support. The Vendor Registration system captures business profiles but has no automated link to the live solicitation feeds on BidNet Direct or OpenGov (`C2_services_contracting_support.md`). The City Contracts dataset on Socrata is updated monthly and reflects awards, not open opportunities — it is useful for historical analysis but useless for real-time matching (`D2_data_formats_procurement.md`). Staff spend the majority of their time on individual consultations and workshop logistics rather than proactive outreach because they lack tooling to identify which of their hundreds of registered vendors match which of the dozens of active solicitations (`C1_services_existing_landscape.md`). The gap between "posting opportunities" and "matching them to businesses" is where MBE participation falls through the cracks, and it is the gap no existing tool fills (`A1_problem_landscape_mbe_contracting.md`).

---

## Open Questions

### Data Questions
1. What is the actual field schema of OMBD's Vendor Registration database? Are commodity codes stored as NAICS, NIGP, or a City-specific taxonomy — and do they align with the codes used in BidNet Direct solicitations?
2. Does BidNet Direct expose a public or authenticated API for active City of Richmond solicitations, or is scraping the web portal the only automated access path?
3. The City Contracts dataset on Socrata (`xqn7-jvv2`) is updated monthly. Is there a more frequent feed for newly posted solicitations (as opposed to awarded contracts)?
4. What is the overlap between the OMBD MBE directory and the state SBSD SWaM directory? Do firms registered with OMBD automatically appear in the state directory, or are these fully independent systems?
5. How many active, registered MBE/ESB vendors does OMBD currently have, and what percentage have ever bid on a City contract?

### User Questions
6. What percentage of MBE owners in Richmond are primarily English-speaking? What languages would a plain-English contract explainer also need to support?
7. How do MBE owners currently learn about City contracting opportunities — word of mouth, OMBD emails, MBL events, or platform monitoring? What is the dominant discovery channel?
8. For first-time vendors, what is the average elapsed time from "I want to bid" to "I submit my first bid"? Where do most drop off?
9. Do MBE owners perceive the barrier as primarily informational (can't find opportunities), procedural (don't know how to register/certify), or financial (can't afford bonding/insurance)?

### Integration Questions
10. Would the City's Procurement Services office allow a third-party tool to surface active solicitations from BidNet Direct or OpenGov, or do procurement rules restrict republication?
11. Can the iSupplier registration workflow be linked or pre-populated from OMBD Vendor Registration data, or are they architecturally separate systems?
12. Does OMBD currently have any data-sharing agreements with SBSD, the Virginia APEX Accelerator, or the Capital Region SBDC that would enable cross-referral tracking?

### Equity Questions
13. Are there MBE firms with relevant capabilities who never register with OMBD because the registration process itself requires navigating City Hall during business hours? Is there a fully digital registration path?
14. How does the City ensure that AI-powered matching doesn't reproduce historical bias — e.g., favoring firms in commodity codes that have historically been awarded to MBEs while excluding firms in categories where MBEs have been underrepresented?
15. What accommodations exist for MBE owners with limited digital literacy or limited broadband access? Would SMS-based opportunity alerts be more effective than a web portal for some segments?

### Prior Art Questions
16. Has any U.S. city deployed an AI-powered plain-language contract matching tool for MBE/small business vendors? If so, what were outcomes and failure modes?
17. The UK's Find a Tender platform unifies supplier registration, opportunity publication, and lifecycle management in a single system. Has any U.S. municipality attempted a similar unified procurement portal?
18. What happened to previous Richmond-area civic tech projects aimed at procurement transparency — did any ship and survive beyond the prototype stage?

## Answered Questions

Parallel AI research (`_research-answers/mbe_q1_system_data.md`, `mbe_q2_usage_equity.md`, `mbe_q3_prior_art.md`) was synthesized against the open questions below. Verdicts: **[Confirmed]** = research gives a clear, sourced answer; **[Partial]** = some evidence or strong inference, gaps remain; **[Still Unknown]** = not answered or explicitly not public in the research corpus.

| # | Question | Verdict | Key Finding |
|---|----------|---------|---------------|
| 1 | OMBD Vendor Registration field schema (NAICS/NIGP/City taxonomy) and alignment with solicitation codes | [Still Unknown] | Internal OMBD database fields and code alignment with solicitations were not documented. ([`mbe_q1_system_data.md`](../_research-answers/mbe_q1_system_data.md)) |
| 2 | BidNet Direct API vs scraping for Richmond solicitations | [Partial] | Official city flow centers on OpenGov and eVA/VBO; Richmond does not officially use BidNet; no BidNet API assessment for City postings. ([`mbe_q1_system_data.md`](../_research-answers/mbe_q1_system_data.md)) |
| 3 | More frequent feed than monthly Socrata for new solicitations | [Confirmed] | Active IFBs/RFPs live on OpenGov (and eVA during transition); Socrata `xqn7-jvv2` is monthly historical/awards-oriented open data. ([`mbe_q1_system_data.md`](../_research-answers/mbe_q1_system_data.md)) |
| 4 | Overlap: OMBD directory vs SBSD SWaM | [Confirmed] | Independent systems; OMBD uses SBSD data plus its own directory for goal-setting, not one integrated registry. ([`mbe_q1_system_data.md`](../_research-answers/mbe_q1_system_data.md)) |
| 5 | Count of active MBE/ESB vendors and % who have bid | [Still Unknown] | Aggregate counts and bidding participation rates are not publicly published (2021 audit did not supply the latter). ([`mbe_q1_system_data.md`](../_research-answers/mbe_q1_system_data.md)) |
| 6 | English vs other languages for a plain-English explainer | [Partial] | City LEP ~6.1% (ACS 2022); Spanish and Title VI language access cited; MBE-owner language mix not published. ([`mbe_q2_usage_equity.md`](../_research-answers/mbe_q2_usage_equity.md)) |
| 7 | How MBE owners learn about opportunities; dominant channel | [Partial] | Channels include OMBD emails, OpenGov, eVA/VBO, and workshops/calendar; no quantified “dominant” channel. ([`mbe_q2_usage_equity.md`](../_research-answers/mbe_q2_usage_equity.md)) |
| 8 | First-time vendor elapsed time to first bid; where drop-off occurs | [Still Unknown] | No public cycle-time or funnel metrics. ([`mbe_q2_usage_equity.md`](../_research-answers/mbe_q2_usage_equity.md)) |
| 9 | Informational vs procedural vs financial barriers (perceived) | [Partial] | Fragmented discovery, hybrid e/paper bidding, and bonding/insurance/capital barriers are discussed with national parallels; Richmond-specific perception data not published. ([`mbe_q2_usage_equity.md`](../_research-answers/mbe_q2_usage_equity.md)) |
| 10 | Third-party tool surfacing BidNet/OpenGov solicitations | [Partial] | No published city policy for third-party BidNet surfacing; city does not officially use BidNet; official paths are OpenGov/eVA. ([`mbe_q1_system_data.md`](../_research-answers/mbe_q1_system_data.md)) |
| 11 | iSupplier linked or pre-populated from OMBD | [Confirmed] | iSupplier (mandatory supplier/AP) and OMBD’s Supplier Diversity system are separate and not integrated. ([`mbe_q3_prior_art.md`](../_research-answers/mbe_q3_prior_art.md)) |
| 12 | OMBD data-sharing with SBSD, APEX, Capital Region SBDC | [Confirmed] | No published MOUs/data-sharing agreements found on reviewed official city pages. ([`mbe_q3_prior_art.md`](../_research-answers/mbe_q3_prior_art.md)) |
| 13 | OMBD registration requiring City Hall; fully digital path | [Confirmed] | OMBD registration can be completed online via B2GNow/DiversityCompliance without a stated in-person requirement for that step. ([`mbe_q2_usage_equity.md`](../_research-answers/mbe_q2_usage_equity.md)) |
| 14 | AI matching and historical bias / underrepresented categories | [Still Unknown] | Fairness controls for vendor-facing AI matching were not researched. ([`mbe_q2_usage_equity.md`](../_research-answers/mbe_q2_usage_equity.md)) |
| 15 | Digital literacy, broadband, SMS vs web | [Partial] | Digital Equity plan and Richmond Connects emphasize non-digital outreach (signs, kiosks, ambassadors); SMS effectiveness not evaluated. ([`mbe_q2_usage_equity.md`](../_research-answers/mbe_q2_usage_equity.md)) |
| 16 | U.S. city AI plain-language contract matching for MBEs; outcomes | [Confirmed] | No documented city-run AI plain-language matching tool for MBEs/small business with published municipal outcomes. ([`mbe_q3_prior_art.md`](../_research-answers/mbe_q3_prior_art.md)) |
| 17 | U.S. unified portal analogous to UK Find a Tender | [Partial] | LA RAMPLA is a partial analogue; Richmond uses a federated stack (iSupplier, OMBD, OpenGov, open data) plus a link dashboard. ([`mbe_q3_prior_art.md`](../_research-answers/mbe_q3_prior_art.md)) |
| 18 | Prior Richmond civic tech procurement transparency; survival | [Partial] | 2025 Procurement Transparency Dashboard, OpenGov, and monthly City Contracts data are active; no evidence earlier independent prototypes were officially adopted. ([`mbe_q3_prior_art.md`](../_research-answers/mbe_q3_prior_art.md)) |

**Summary:** 6 Confirmed / 8 Partial / 4 Still Unknown out of 18 questions.
