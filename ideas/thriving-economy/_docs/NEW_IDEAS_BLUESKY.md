# Blue Sky ERRC Ideas — A Thriving Economy

**Generated:** April 1, 2026
**Method:** Blue Ocean ERRC (Eliminate, Reduce, Raise, Create) applied to shared JTBD and pain points
**Purpose:** Structurally different ideas that complement, not duplicate, the existing NEW_IDEAS set

---

## ERRC Grid

| | Eliminate | Reduce | Raise | Create |
|---|-----------|--------|-------|--------|
| Current approaches | Daily multi-portal hunting; treating "find an open RFP" as the only first step | One-size "start a business" wizards; commodity-code-first search; staff time on generic blasts | Compliance burden, jargon density, and uncertainty for new entrants | Unified opportunity search/match, proactive staff dashboards, linear vendor onboarding wizards |

---

## Idea 1: Richmond Spend Mirror (Category Receipts)

**Problem Statement:** PS1 — MBE Contracting Discovery
**User:** A minority-owned owner-operator (e.g., janitorial, landscaping, small construction) who is procurement-curious but does not yet monitor OpenGov/eVA and cannot tell if the City actually buys what they sell
**One-liner:** Turns recent City award history into a plain-English "receipt" for your trade — spend scale, how work was bought, and where to watch for the next similar buy — without building another opportunity search engine.

**ERRC moves applied:**
- **Eliminate:** The need to decode live solicitations before knowing whether public purchasing exists in your category
- **Reduce:** Cross-portal "monitor everything" behavior down to one evidence view plus one outbound monitoring habit
- **Raise:** Confidence and literacy grounded in real outcomes (dollars, vendors, time) rather than acronym-heavy IFB titles alone
- **Create:** A **historical demand mirror** that explains procurement patterns in everyday language and points to official live sources only after the user believes the market is real

**How it works:** The user describes what they do in plain language; the app maps that to NAICS/NIGP-style hints (manual rules table for the hackathon), then queries the City's public contracts dataset for matching awards and aggregates totals, frequency, and typical procurement labels. It renders a short narrative ("Here is what the City has actually paid for in the last 12–24 months in categories like yours") and generates a tight checklist: which official channels to bookmark, what certifications commonly appear in those awards, and "questions to ask OMBD/APEX before you chase the next posting."

**Data sources:** City of Richmond Socrata City Contracts dataset (`xqn7-jvv2`) for awards, amounts, vendors, and descriptive fields; NAICS reference (public); links out to OpenGov / eVA for active solicitations (no republication of bid documents required for the prototype).

**Why it's different:** Deliberately avoids duplicating Richmond Contract Navigator-style unified search, OMBD proactive matching, or vendor onboarding wizards by starting from **proven purchasing history** to build belief and vocabulary first. Weekend scope is analytics + storytelling + handoffs, not a live matching pipeline.

---

## Idea 2: Pivot Delta Map (Only-What-Changed)

**Problem Statement:** PS2 — Small Business Navigation
**User:** A Richmond operator who already has a legal footprint (entity + BPOL + CZC) and is expanding — for example, home-based services adding prepared food, retail adding on-premise alcohol, or online-only adding a customer-facing location
**One-liner:** A change-of-operations questionnaire that outputs only the new permits, taxes, and sequencing deltas — not another full startup wizard.

**ERRC moves applied:**
- **Eliminate:** Re-running an entire 21-authority matrix when only a slice of the business model changed
- **Reduce:** Time spent re-reading seven agency sites to find hidden dependencies that apply only after a pivot
- **Raise:** Precision of "what breaks next" (new gates, new fees, new ordering constraints) for expansions
- **Create:** An explicit **regulatory diff** artifact (ordered delta list + estimated incremental cost/time) that counselors can reuse in follow-on appointments

**How it works:** The user selects their current baseline (e.g., "already filed BPOL as X," "CZC on file," "no employees") and what they are adding/removing (food service, alcohol, employees, signage, build-out, DPOR-regulated work). A rules layer (curated for the weekend) intersects the City's checklist logic with industry add-ons (VDH food plan review/permit paths, ABC license families, DPOR + workers' comp proof expectations for contractor licensing, zoning triggers). The output is a numbered delta-only path with links to the real transaction portals and plain-English definitions for new terms encountered only because of the pivot.

**Data sources:** City Business License Application Checklist PDF (manually encoded rules for the demo), City zoning / CZC guidance pages, RVA Business Portal deep links for BPOL/tax tasks, Virginia SCC maintenance/amendment concepts where entity changes matter, VDH food establishment materials, Virginia ABC licensing outlines, DPOR contractor licensing references, and IRS EIN/hiring pages when payroll is newly introduced.

**Why it's different:** Richmond Business Launch Wizard optimizes the **cold start**; this optimizes **mid-journey change**, addressing the gap that static guides ignore when businesses evolve, without claiming a new unified government API or full cross-agency automation.
