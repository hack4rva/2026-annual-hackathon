# Outreach: Procurement Services + Office of Minority Business Development — Research & Questions

### What we've confirmed through public sources

- **Procurement dataset:** The City Contracts dataset on Socrata (`xqn7-jvv2`) is live and updated monthly with 10 fields including Agency/Department, Contract Number, Contract Value, Supplier, Procurement Type, Description, Type of Solicitation, Effective From/To, and Contract Specialist. It covers approximately the last five years of awarded contracts.
- **Solicitation platform:** The City is actively transitioning to the OpenGov e-Procurement Portal (`procurement.opengov.com/portal/rva`) for electronic bid submission, with eVA/VBO as a secondary channel during the transition. The City does not officially use BidNet Direct — official pages do not direct vendors to a Richmond-specific BidNet portal.
- **OMBD registration:** OMBD vendor registration can be completed entirely online through the B2GNow Supplier Diversity Management System (`richmondombd.diversitycompliance.com`) without a stated in-person requirement. Registered vendors receive notifications about workshops, seminars, and procurement opportunities.
- **Separate vendor systems:** The iSupplier portal (mandatory for all vendor registration and accounts payable) and OMBD's Supplier Diversity system are architecturally separate and not integrated. A vendor seeking MBE certification must register in both systems independently.
- **Independent directories:** The OMBD MBE/ESB directory and the Virginia SBSD SWaM directory are independent systems. The 2021 City Auditor's report confirmed that OMBD uses data from both for goal-setting, but they are not a single integrated registry.
- **No cross-org data sharing:** No published data-sharing agreements or MOUs exist between OMBD and the Virginia SBSD, Virginia APEX Accelerator, or Capital Region SBDC.
- **SWaM certification timeline:** SWaM applications through SBSD take approximately 60 business days to process. Many RFPs require current certification at time of bid, meaning firms mid-process are excluded from opportunities.
- **Transparency dashboard:** The 2025 Procurement Transparency Dashboard consolidates links to the Open Data Portal, OpenGov solicitations, and OMBD vendor registry — but does not integrate the underlying systems or add matching functionality.
- **Hybrid bidding process:** During the OpenGov transition, some solicitations require electronic submission through the portal while others still require paper submission at City Hall, creating inconsistency for vendors.
- **Staff-side AI exists, vendor-side does not:** OpenGov includes an AI Scope Builder that helps procurement staff draft solicitation scopes. However, no US city has deployed an AI-powered plain-language contract matching tool for MBE or small business vendors with published municipal outcomes.
- **OMBD services:** OMBD provides one-on-one business counseling, financial options/counseling/referrals, and training through workshops, conferences, and seminars promoted on the OMBD public events calendar.
- **Digital equity context:** Richmond's LEP population is approximately 6.1% (ACS 2022), with Spanish as the primary non-English language. The City's Digital Equity Implementation Plan mandates non-digital outreach methods including signs, kiosks, in-person ambassadors, and pamphlets.
- **Closest US analogue:** LA's Regional Alliance Marketplace for Procurement (RAMPLA) is the closest US equivalent to a unified procurement portal, requiring mandatory supplier registration across city departments. Richmond operates a federated model with at least four separate systems.

### What we haven't been able to determine — and where we need your help

We have **five specific questions** that only your teams can answer:

1. **OMBD vendor database field schema:** The OMBD Vendor Registration database captures firm profiles including commodity codes, contact info, and certification status. Are commodity codes stored as NAICS, NIGP, or a City-specific taxonomy — and do they align with the codes used in OpenGov solicitations? This is the critical question for any automated matching tool.

2. **Active vendor count and bidding participation:** How many active, registered MBE/ESB vendors does OMBD currently have, and what percentage have ever bid on a City contract? The 2021 City Auditor report referenced OMBD's processes but did not supply this metric, and the public portal does not publish aggregate counts.

3. **OpenGov API or data feed for solicitations:** The OpenGov portal serves active IFBs and RFPs, but we found no documented public or partner API for programmatic access to Richmond solicitations. Does the City's OpenGov deployment expose any endpoint — or a structured data export — that a third-party prototype could use to surface matching opportunities to MBE vendors?

4. **First-time vendor onboarding timeline:** No published metric exists for the average time from "I want to bid on a City contract" to "I submit my first bid." Where do first-time MBE vendors most commonly stall or drop off — is it SWaM certification, BidNet/OpenGov registration, iSupplier setup, or interpreting solicitation requirements?

5. **AI matching and historical bias:** If an automated tool matched open solicitations to registered MBE capabilities by commodity code and contract size, how would the City want to ensure it doesn't reproduce historical patterns — e.g., favoring firms in commodity codes that have historically been awarded to MBEs while excluding firms in categories where MBEs have been underrepresented?

### Why this matters

We've been generating new solution ideas grounded in the research. The highest-scoring concepts for the MBE contracting problem are:

- **OMBD Proactive Match Dashboard** (Pillar Award: 90/105, Mayor's Choice: 88/105) — a staff-facing tool that automatically matches open solicitations to registered MBE capabilities by commodity code, contract size, and certification status, so OMBD can push relevant opportunities to qualified firms instead of waiting for vendors to find and decode postings. This addresses the structural gap where no automated pipeline exists from "opportunity posted" to "matching vendors notified."
- **Vendor Onboarding Wizard** (Pillar: 87, Mayor's Choice: 91) — a 5-step guided path that walks first-time vendors through the full registration sequence (BPOL → SWaM → OMBD → OpenGov → iSupplier) with plain-language explanations and progress tracking, replacing the current trial-and-error discovery of requirements.
- **SMS Bid Alert Service** (Pillar: 87, Mayor's Choice: 87) — a "Text Me Contracts" service that delivers plain-language opportunity summaries via SMS to registered MBE vendors, addressing the digital equity gap for business owners with limited broadband or who can't monitor web portals daily.

None of these require replacing existing procurement systems — they all build on top of the current OpenGov + OMBD + iSupplier stack.

We're not asking for any commitment — just trying to understand what's technically possible so we can give the Mayor's office a realistic assessment of which prototypes could move to a pilot. Happy to share the prototypes or our full research.

---

## Context for the SME
Richmond's MBE procurement ecosystem is structurally fragmented across at least four unlinked platforms — OpenGov (solicitations), Socrata (historical awards), iSupplier (vendor payment), and OMBD/B2GNow (diversity certification). The fundamental blocker for any matching tool is whether the OMBD vendor database's commodity codes align with the codes used in solicitations, and whether OpenGov exposes any data feed. If OMBD codes and solicitation codes share a taxonomy (NAICS, NIGP, or otherwise), automated matching is straightforward. If they don't, a crosswalk must be built first. The research found no city anywhere has shipped a vendor-facing AI matching tool with outcomes — Richmond would be first.

## Why This Person
The Director of Procurement Services controls access to the OpenGov platform and sets policy on third-party solicitation access. The OMBD Director controls the vendor database schema and registration data. Both are needed because the core prototype question — "can we match vendors to opportunities automatically?" — requires data from both sides: the solicitation feed (Procurement) and the vendor capability profiles (OMBD). Neither can answer both questions alone.

## Data Questions (internal tracking)
- [ ] Q1: OMBD vendor database field schema — NAICS, NIGP, or City-specific codes
- [ ] Q2: Active MBE/ESB vendor count and % who have ever bid
- [ ] Q3: OpenGov API or data feed for Richmond solicitations
- [ ] Q4: First-time vendor onboarding elapsed time and common drop-off points
- [ ] Q5: AI matching bias mitigation approach for commodity code-based matching

## Research Sources
- `_research-answers/mbe_q1_system_data.md` — Socrata dataset, OpenGov platform, SBSD directory, OMBD statistics
- `_research-answers/mbe_q2_usage_equity.md` — Discovery channels, barriers, language access, digital equity
- `_research-answers/mbe_q3_prior_art.md` — iSupplier/OMBD separation, LA RAMPLA, civic tech history, MBE utilization
- `_shared-mbe-contracting/jtbd_analysis.md` — Full JTBD + 18 answered questions (6 Confirmed, 8 Partial, 4 Still Unknown)
- `NEW_IDEAS_RUBRIC_GRADES.md` — Scored solution ideas (7 PS1 survivors of 12)
