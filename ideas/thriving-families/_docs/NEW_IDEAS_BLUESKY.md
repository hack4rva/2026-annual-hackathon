# Blue Sky ERRC Ideas — Thriving Families

**Generated:** April 1, 2026
**Method:** Blue Ocean ERRC (Eliminate, Reduce, Raise, Create) applied to shared JTBD and pain points
**Purpose:** Structurally different ideas that complement, not duplicate, the existing NEW_IDEAS set

---

## ERRC Grid

| | Eliminate | Reduce | Raise | Create |
|---|-----------|--------|-------|--------|
| Current approaches | Little removed: silos (7+ youth programs; 6+ maternal data portals) stay intact | Employer guidance, offline/low-literacy paths, and "stable year" discipline stay thin vs. feature-rich directories and dashboards | Volume of indicators, program listings, and AI/chat surfaces is treated as success | Warm cross-program accountability, permit/schedule logistics, and real-time definitional mediation at the point of conflict are largely absent |

---

## Idea 1: GRTC Shift-Fit Scout

**Problem Statement:** PS1 — Youth Employment Pathways
**User:** A 15- or 16-year-old in Southside or the East End who has a verbal or written offer (or a trial shift time) and must know, before accepting, whether they can get home legally and on time using GRTC given school-night hour caps and last-bus times
**One-liner:** A lightweight web tool that pairs a work address, shift end time, and home ZIP with static GRTC GTFS schedules and Virginia/Richmond minor hour rules to flag "stranded risk," "curfew/legal hours risk," and the nearest reasonable stop — without pretending to be a job board or program directory.

**ERRC moves applied:**
- **Eliminate:** The need to "shop every program first" before solving the commute-and-hours failure mode that quietly kills Day 1 starts
- **Reduce:** Scope to a single decision (feasibility of this shift + this location), not a full youth career platform or employer CRM
- **Raise:** **Transit–shift fit** and **calendar-aware legal hour guardrails** above the usual "here is a list of jobs" experience
- **Create:** A **stranded-worker preview** (last bus vs. closing time, frequency gaps) tied to Richmond's real route geometry via public GTFS

**How it works:** The teen enters an address or picks a point on a map, shift end time, and school vs. summer dates. The app loads static GTFS (e.g., Transitland feed for GRTC), walks a few candidate return trips after shift, and surfaces pass/fail against DOLI school-night windows and Richmond curfew context. Output is a one-screen "green / yellow / red" card plus plain-language "what to ask the manager" text. Weekend build: static site + bundled GTFS subset + client-side routing.

**Data sources:** Public GRTC static GTFS (via Transitland or published zip); OpenStreetMap Nominatim or Richmond address/geocoding from open data; rule text from DOLI / VA child labor public summaries (hard-coded tables); optional RPS calendar dates for school vs. summer toggles (public calendar or hand-curated key dates for demo).

**Why it's different:** Existing PS1 concepts center program discovery (hub), readiness via SMS (kit), or broad workforce AI — none treat **post-offer logistics and legal scheduling** as the primary object. This is a narrow feasibility wedge that complements navigators and kits.

---

## Idea 2: Maternal Metric Lock-In (Meeting Mode)

**Problem Statement:** PS2 — Maternal Health Data Coordination
**User:** A coalition facilitator or RCHD program analyst running a monthly maternal-health partner meeting who has just heard two organizations cite different "maternal mortality" or infant-outcome numbers and needs a credible, single-slide reconciliation in under five minutes
**One-liner:** A browser "meeting mode" that forces a definition pick (e.g., 42-day maternal mortality vs. 365-day pregnancy-associated death vs. MMRC-style framing), locks vintage and geography (Richmond city vs. Planning District 15 vs. Virginia), then renders one comparison block with auto-generated citation strings and explicit suppression / provisional / NVSS 2018 break warnings.

**ERRC moves applied:**
- **Eliminate:** The expectation that users already know which of three incompatible definitions they are looking at
- **Reduce:** Indicator count to **one question at a time** (not 173-tile portals or multi-page fact sheets)
- **Raise:** **Definitional hygiene and audit trail** above "more charts"
- **Create:** A **live reconciliation artifact** (projector-friendly slide or PNG) designed for the exact moment coalition trust breaks

**How it works:** Facilitator selects indicator family → the UI hard-blocks incompatible mixes (e.g., cannot plot pre/post 2018 NVSS trends without showing a break note). Pulls the latest public CSV/exports from VDH MCH and VDH maternal mortality pages for demo; displays side-by-side numbers only when definitions align, otherwise shows "cannot compare" with plain-language explanation. Weekend build: small React app + frozen CSV extracts in repo + citation string templates.

**Data sources:** VDH MCH Indicators Dashboard exports (Richmond-filtered); VDH Maternal Mortality / pregnancy-associated public dashboard aggregates; optional March of Dimes PeriStats or CDC WONDER pulled values for external benchmark lines with the same locked year; Census ACS table snippets for denominator context when the chosen indicator requires it.

**Why it's different:** Grant Pack Builder optimizes multi-indicator grant PDFs for writers; RVA People Data is a broad portal. This tool optimizes **facilitated meetings** with **definition locks and conflict detection**, not comprehensive reporting or exploration.
