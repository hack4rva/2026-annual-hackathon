# New Solution Ideas — Thriving Economy Pillar

**Trimmed to top 3 by combined score (Pillar + Mayor's Choice).**

**Generated:** April 1, 2026  
**Grounding:** JTBD analyses, pain point research, and gap analyses for MBE Contracting Discovery (PS1) and Small Business Navigation (PS2).

This document retains **3 ideas**, ranked by combined Pillar + Mayor's Choice weighted scores (182, 178, 178).

---

### Idea 13: Richmond Business Launch Wizard
**PS:** PS2  
**JTBD:** Job 1 (first-time entrepreneur), Job 2 (can't afford mistakes)  
**Problem it solves:** No government source provides a sequenced, personalized checklist of every step needed to start a business in Richmond — entrepreneurs discover requirements by trial and error across 7+ agency websites.  
**How it works:** NYC MyCity-style step-by-step wizard. The user answers 5-8 questions: business type, entity structure (or "help me decide"), location (or "home-based"), employees (yes/no), food service (yes/no), alcohol (yes/no), professional license required (yes/no). The tool generates a personalized, sequenced checklist with every permit, license, and registration required — in the correct order based on hard dependencies (CZC before BPOL, SCC before EIN). Each step includes estimated cost, estimated processing time, required documents, direct link to the agency portal, and plain-English explanation of what the step is and why it's required.  
**Data sources:** City Business License Application Checklist PDF (digitized into rules engine), SCC filing requirements and fees, Virginia Dept. of Taxation registration, City zoning ordinance (permitted uses by zone), BPOL rate schedule, industry-specific permit requirements (VDH, ABC, DPOR).  
**Research grounding:** P1 sequencing is invisible — "no government source provides a numbered, sequenced checklist." P5 cost and timeline unknowable. E1 prior art — NYC MyCity is the gold standard; no Virginia equivalent exists (`A2_problem_landscape_small_business_journey.md`, `sb_q3_prior_art.md`).

---

### Idea 4: OMBD Proactive Match Dashboard
**PS:** PS1  
**JTBD:** Job 3 (OMBD staff member who wants more MBE participation)  
**Problem it solves:** OMBD staff maintain a vendor database and know solicitations exist, but have no automated way to match the two — so they default to reactive, one-at-a-time support while hundreds of registered vendors never bid.  
**How it works:** Staff-facing dashboard that, for each new solicitation, automatically identifies registered MBE vendors whose commodity codes, certification status, and contract-size capacity match. Provides one-click email or SMS notification to matching vendors, batch outreach capabilities, and a participation gap report ("these 20 vendors match this solicitation type but have never bid"). Historical view shows which commodity codes have the most MBE-eligible spending and the least MBE participation — identifying where targeted outreach would have the highest ROI.  
**Data sources:** OMBD vendor directory (commodity codes, certifications, contact info), OpenGov/eVA active solicitations, Socrata `xqn7-jvv2` historical awards for participation gap analysis.  
**Research grounding:** P3.1 reactive model limits reach, P3.2 no automated matching, P3.3 historical data can't drive proactive outreach (`C1_services_existing_landscape.md`, `C2_services_contracting_support.md`). Richmond Contract Navigator gap analysis identifies the staff-side view as "a second product, not a feature toggle."

---

### Idea 2: Vendor Onboarding Wizard (5-Step Path)
**PS:** PS1  
**JTBD:** Job 2 (first-time vendor who doesn't know where to start)  
**Problem it solves:** No single resource documents the complete vendor registration sequence; first-time vendors discover requirements one rejection at a time.  
**How it works:** Interactive step-by-step wizard walks vendors through the documented 5-step path: (1) BPOL license → (2) SWaM/MBE certification via SBSD (~60 business days) → (3) OMBD Vendor Registration → (4) BidNet Direct registration → (5) iSupplier registration. Each step shows required documents, estimated processing time, direct links to portals, and "what to do while you wait" guidance. Progress is saved so vendors can return. At each step, the tool recommends relevant support organizations (SBDC, APEX Accelerator, SCORE) for hands-on help.  
**Data sources:** OMBD registration requirements, SBSD SWaM application documentation, BidNet Direct registration, iSupplier vendor setup, BPOL application checklist.  
**Research grounding:** P2.1 no linear onboarding path exists, P2.2 certification timing catch-22, A5 "lack of sequence" root cause (`A5_problem_landscape_root_causes.md`, `C2_services_contracting_support.md`). Richmond Contract Navigator gap analysis identifies the 5-step sequence as a specific missing feature.
