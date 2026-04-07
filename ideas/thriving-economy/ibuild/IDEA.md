# iBuild

**Source:** NEW  
**Pillar:** A Thriving Economy  
**Problem Statement:** Help first-time entrepreneurs understand what steps to take, in what order, to start and register a business in Richmond.

---

## Description

**Core assumption challenged:** Applicants need a faster EnerGov backend; the analysis argues they need a **pre-application intelligence layer** that answers what permits they need, what they will cost, and how long they will take *before* entering the formal system — a pattern used in multiple large cities on top of existing permitting backends. Richmond homeowners, contractors, and small business owners currently struggle to learn requirements without calls and visits, causing delays and surprise costs. The proposed **Richmond-specific permit decision engine** uses published fee schedules and zoning information to operate **upstream** of EnerGov, so lack of deep EnerGov integration does not block an MVP.

## Key Approach

- Web wizard: project type + address → zoning check where data allows → required permits (sequenced), fee estimates, timeline guidance, document checklist, downloadable “permit roadmap.”
- Primary users: homeowners, small contractors, and counter staff who can deflect repetitive “what do I need?” questions to self-service.
- Data: GeoHub (or equivalent) for zoning lookup; published City fee schedules and permit catalogs manually encoded for top scenarios.
- Ground in research on self-service permit discovery in other cities (counter hours saved, high self-service rates where city-backed tools exist).
- Emphasize accuracy, effective dates, and “subject to staff review” disclaimers so estimates do not erode trust.
