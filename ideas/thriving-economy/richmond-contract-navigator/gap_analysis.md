# Gap Analysis — Richmond Contract Navigator

**Pillar:** A Thriving Economy
**Problem Statement (verbatim):** "MBE Contracting Discovery — Help minority-owned businesses identify and understand City contracting opportunities that match their capabilities."
**Demo:** Richmond Contract Navigator (Mia Wan, Team Silverlight)
**Primary User:** Minority-owned or first-time business owner in Richmond who wants to bid on City contracts but cannot navigate the procurement system's jargon, fragmented platforms, or registration requirements.
**Pain:** Richmond publishes procurement data openly across BidNet Direct, OpenGov, Socrata, and OMBD — but solicitations are written in federal acquisition vocabulary (IFBs, NAICS codes, bonding requirements), scattered across four unlinked platforms with separate logins, and never matched to business capabilities. The result is information asymmetry that filters out exactly the businesses the City's MBE program is designed to include (`A1_problem_landscape_mbe_contracting.md`).
**Desired Outcome:** An MBE owner describes what their business does in plain English and sees matching City contracting opportunities explained in plain language, with clear guidance on what they need to do to bid.

---

## Data Source Map

| Data Claim in Demo | Real or Synthetic? | Source | Owner | Access | Cadence | Notes |
|---|---|---|---|---|---|---|
| "Open city dataset" of procurement opportunities used for AI matching | **Ambiguous** | Most likely the City Contracts dataset on Socrata (`xqn7-jvv2`) | City of Richmond | SODA 3.0 API, CSV download | Monthly | **Critical issue:** This dataset contains *awarded* contracts, not *open* solicitations. If this is the data source, the tool matches businesses against historical awards — contracts they cannot bid on. Active opportunities live on BidNet Direct and OpenGov, neither of which has a confirmed public API (`D2_data_formats_procurement.md`). |
| Match strength ratings (Strong/Good) and "Why it matched" explanations | **AI-generated** | LLM inference layer over procurement data | Team Silverlight | Internal | Real-time | The matching quality depends entirely on the underlying data. If grounded in real solicitation fields (NAICS codes, commodity codes, scope descriptions), this is valuable. If grounded only in contract titles and brief descriptions from Socrata, matching accuracy is limited. No confidence calibration or validation methodology was shown. |
| Vendor readiness checklist per contract | **Likely AI-generated** | LLM inference from contract requirements | Team Silverlight | Internal | Real-time | Useful if grounded in actual solicitation documents (bonding amounts, insurance requirements, certification prerequisites). Risky if hallucinated from generic procurement knowledge rather than parsed from specific IFB/RFP documents. |
| Email alerts for future matches | **Claimed, not demonstrated** | Would require monitoring a live feed of new solicitations | Team Silverlight | Internal | Ongoing | Requires an automated data pipeline from a source of new solicitations. If the underlying data source is the monthly-updated Socrata dataset, alerts would lag by weeks — too slow for solicitations with 2-3 week response windows. |

### Gaps Requiring SME Access

- **Active solicitation data:** Does BidNet Direct expose a public or authenticated API for City of Richmond solicitations? This is the single question that determines whether the tool can match against biddable opportunities or only historical awards (`D2_data_formats_procurement.md`, Open Question #2 from JTBD).
- **Solicitation document parsing:** Are full IFB/RFP documents (with bonding, insurance, certification requirements) available in structured form, or only as PDFs? The vendor readiness checklists depend on this.
- **OMBD vendor directory integration:** Could the tool cross-reference its matches against OMBD's registered vendor database to enable staff-side proactive outreach? (`C1_services_existing_landscape.md`)

---

## Gap Analysis by JTBD

### Job 1 — The MBE Owner Who Can't Decode Procurement Jargon
**Coverage: Strong**

What works:
- Plain-language business description input directly addresses the vocabulary barrier identified in P1.1. The user says "software and web design" instead of trying to decode "NAICS 541511" or "NIGP 920-42."
- "Why it matched" explanations per result reduce the information asymmetry that is the core disparity (P1.3) — the user doesn't just see a match, they understand the connection.
- Built-in glossary of procurement terms directly targets the jargon density problem (P1.1) — terms like IFB, bonding, and NAICS codes are explained in plain English.
- Match strength ratings (Strong/Good) give the user a triage mechanism so they don't have to evaluate every result from scratch.

What's missing:
- **Cross-platform search is absent.** The demo appears to query a single dataset. The JTBD identifies that MBE owners must search BidNet Direct, OpenGov, Socrata, and OMBD separately (P1.2 — "four platforms, zero cross-search"). The tool addresses one platform at best, not the unified search the job demands.
- **Active vs. historical data is unresolved.** If the tool matches against awarded contracts (Socrata), it shows the user opportunities they cannot bid on. This would be a fundamental mismatch with the job, which is about *identifying* opportunities, not *analyzing* history.
- **No confidence calibration.** The matching AI produces "Strong" and "Good" ratings, but there's no indication of how these were validated. The algorithmic matching bias research warns that LLMs exhibit "matching bias" — over-reliance on surface-level lexical similarity — which could produce confident but incorrect matches (`G4_risks_matching_bias.md`).

**Gap fixable or fundamental?** Fixable if active solicitation data becomes accessible. The plain-language matching architecture is sound. The data source is the bottleneck.

### Job 2 — The First-Time Vendor Who Doesn't Know Where to Start
**Coverage: Partial**

What works:
- Per-contract vendor readiness checklists tell the user what they need to bid on a specific opportunity — insurance, bonding, certifications. This is a direct response to the "don't know what to do first" barrier.
- General vendor readiness roadmap provides an overview of the steps to become a qualified City vendor, partially addressing the "lack of sequence" root cause (P2.1).

What's missing:
- **The specific 5-step registration sequence is not surfaced.** The JTBD and pain point research document that a first-time vendor must complete: (1) BPOL license, (2) SWaM/MBE certification (~60 business days), (3) OMBD Vendor Registration, (4) BidNet Direct registration, (5) iSupplier registration — in that order, with no single resource laying out the sequence (`A5_problem_landscape_root_causes.md`, P2.1). The demo shows a "general roadmap" but doesn't indicate whether it covers this specific, documented path.
- **Certification timing catch-22 is not addressed.** SWaM certification takes ~60 business days. Many RFPs require current certification at bid submission. A tool that shows matching opportunities to uncertified vendors without flagging "you cannot bid on this until your SWaM is approved, which takes ~3 months" creates a frustrating experience (P2.2). No certification-status awareness was demonstrated.
- **No referral to existing support organizations.** The support ecosystem research identifies 10+ organizations (OMBD, SBSD, APEX Accelerator, SBDC, SCORE, MBL) that each own part of the onboarding path (`C1_services_existing_landscape.md`). The tool doesn't connect users to these resources at relevant decision points — e.g., "You need SWaM certification → here's how to apply through SBSD" or "Need help with your first bid? → Virginia APEX Accelerator offers free 1-on-1 counseling."

**Gap fixable or fundamental?** Fixable. The readiness roadmap is a good foundation. It needs to be enriched with the specific registration sequence, certification timeline awareness, and referrals to the existing support ecosystem.

### Job 3 — The OMBD Staff Member Who Wants More MBE Participation
**Coverage: Minimal**

What works:
- Email alerts for future matches are a step toward proactive notification — the concept of "push relevant opportunities to qualified firms instead of waiting for them to find postings" (Job 3 statement).

What's missing:
- **The tool is built entirely for vendors, not staff.** Job 3 describes OMBD staff who want to match open solicitations to their database of registered MBE vendors proactively. The demo has no staff-facing view, no batch matching, no dashboard showing "here are 15 registered MBE firms who match this new solicitation."
- **No integration with the OMBD vendor database.** OMBD maintains vendor profiles with commodity codes and certifications. The tool doesn't connect to this data, which means it can't identify which registered vendors match which active solicitations — the core capability Job 3 demands (P3.2).
- **No participation gap analysis.** The demo can't answer "which registered MBE vendors were qualified for contracts awarded last year and didn't bid?" — the counterfactual that would let OMBD target outreach (P3.3).

**Gap fixable or fundamental?** Fixable but requires a different product surface. Adding a staff-facing dashboard that runs the same matching logic in reverse (solicitation → matching registered vendors) would address Job 3, but it's a second product, not a feature toggle on the current demo.

---

## Opportunities

### Opportunity 1: Secure Active Solicitation Data
The tool's entire value proposition depends on matching against biddable opportunities, not historical awards. If BidNet Direct or OpenGov expose any feed (API, RSS, structured export) for active City of Richmond solicitations, the tool becomes immediately more useful. If not, a partnership with the City's Procurement Services office to provide a regularly updated structured feed of open solicitations would be the minimum viable data pipeline. The prior art research notes that "weekend viability depends on data access" — this is the single question that determines whether the tool is a demo or a pilot (`E5_prior_art_weekend_viability.md`, `D2_data_formats_procurement.md`).

**Dependencies:** SME outreach to City Procurement Services and/or BidNet Direct; data sharing agreement if API access doesn't exist.

### Opportunity 2: Enrich the Vendor Readiness Roadmap with the Documented Registration Sequence
The general roadmap could be upgraded to include the specific 5-step path documented in the pain point research: BPOL → SWaM/MBE certification → OMBD registration → BidNet Direct registration → iSupplier registration. Adding estimated timelines (especially the ~60-day SWaM certification window), links to each registration portal, and required documents per step would transform this from a general guide into the "single resource that lays out the sequence" that no existing tool provides (P2.1, `A5_problem_landscape_root_causes.md`). NYC's MyCity Business Step-by-Step Wizard is a strong model for this — a short questionnaire that generates a personalized list of required steps (`E1_prior_art_catalog.md`).

**Dependencies:** Verified current registration requirements from OMBD and SBSD; validation that the 5-step sequence is accurate and complete.

### Opportunity 3: Add OMBD Staff Dashboard for Proactive Matching
Run the matching logic in reverse: when a new solicitation is posted, automatically identify registered MBE vendors whose commodity codes and capabilities match. Surface this as a staff-facing dashboard so OMBD can push relevant opportunities to qualified firms instead of waiting for vendors to self-discover. This directly addresses Job 3 and the "reactive model limits reach" pain point (P3.1). It would require integration with the OMBD vendor directory, but the matching algorithm already exists in the demo.

**Dependencies:** Access to OMBD vendor directory data (commodity codes, certifications, contact info); staff workflow design; OMBD partnership.

### Opportunity 4: Multilingual Support Starting with Spanish
Richmond's growing immigrant business community faces compounded barriers — procurement jargon is no more intelligible when translated word-for-word into another language (`G3_risks_inclusion_accessibility.md`). Given that the tool already uses an LLM, supporting plain-language input in Spanish (and generating Spanish-language explanations) is technically feasible. The prior art research notes that NYC's MyCity Business wizard is available in 10+ languages. Starting with Spanish — the language of 71.57% of Richmond's LEP population — would be the highest-leverage first step.

**Dependencies:** Spanish-language testing with actual MBE owners; validation that the LLM handles Richmond-specific procurement terminology in Spanish; UI/UX for language selection.
