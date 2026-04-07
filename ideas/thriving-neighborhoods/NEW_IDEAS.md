**Trimmed to top 3 by combined score (Pillar + Mayor's Choice).**

# New Solution Ideas — Thriving Neighborhoods

3 ideas (ranked by combined Pillar + Mayor's Choice weighted totals). Each represents a viable next step that could be prototyped or piloted. For rubric scores and methodology, see `NEW_IDEAS_RUBRIC_GRADES.md`.

**Ranking:** (1) Idea 6 — Pillar 95, Mayor's 93, combined 188 · (2) Idea 14 — Pillar 88, Mayor's 92, combined 180 · (3) Idea 4 — Pillar 90, Mayor's 88, combined 178.

---

### Idea 6: Participation Analytics Dashboard

**Addresses:** JTBD 3 — The planning staff who only hear from insiders
**Prior Art:** No city currently tracks who participates in Planning Commission hearings. The research confirms: "Staff have no metrics on who sees development proposals, who understands them, and who is structurally excluded" (`pain_points.md §P3.4`). San Diego's "Get It Done" audit exposed demand patterns the City couldn't see — 1M phone calls vs. 300K app requests — but only retrospectively.
**Data Source:** Self-instrumented. The tool captures its own engagement data: searches by ZIP code, views by device type, language selections, notification opens, comment submissions. Cross-referenced with Census ACS demographics (renter %, income, broadband penetration) by census tract.
**Build Estimate:** Weekend (analytics layer on any development tool); 2-week sprint (with Census cross-referencing)
**Why No Demo Built This:** Demos measured whether they worked, not who they reached. The research explicitly identifies this as the critical missing capability: "No one tracks who participates in Planning Commission hearings... teams cannot validate whether their tool is actually reaching underrepresented residents without building their own measurement" (`jtbd_analysis.md §Critical Data Gap`).
**What It Looks Like Working:** A dashboard shows Planning staff: "Last month, 1,200 residents searched for development proposals. 68% from ZIP codes with >50% homeownership. 4% in Spanish. 0 searches from ZIP 23224 (highest eviction rate). 89% on mobile devices." The dashboard overlays engagement data against Census tract demographics to show which neighborhoods are participating and which are invisible. Staff can target offline outreach to the ZIP codes with zero digital engagement.
**Equity Dimension:** The entire purpose is equity measurement. This is the first tool that would answer: "Is our transparency effort reaching the people who need it most, or is it reinforcing the existing participation gap?" Without measurement, the City cannot calibrate outreach. The research finding that "only 10% of adults earning $20,000-$39,999 participate in two or more online political activities per year" (`pain_points.md §Cross-Cutting Equity`) means any web-only tool will have a measurable equity gap — this dashboard makes that gap visible and actionable.

---

### Idea 14: HUD Rent-Cap Auto-Validator

**Addresses:** JTBD 1 — Analyst manually cross-referencing rent vs. AMI limits
**Prior Art:** Denver's portal automates rent-limit lookups. HUD provides API access for both FMR and Income Limits datasets with clear, predictable update schedules (`jtbd_analysis.md §Q3`). Richmond's current process requires "manually re-keying rent roll data from PDFs into Excel to calculate if rent exceeds the 30% income cap" (`pain_points.md §P1.3`).
**Data Source:** HUD API (Income Limits by household size + FMR by metro area) + program rules for AHTF (30% and 80% AMI tiers), AHTEP (up to 80% AMI), EAHP (varies). FY2025 values hardcoded; parameterized for FY2026 update on May 1.
**Build Estimate:** Weekend (calculator with HUD API integration); 2-week sprint (with batch upload for annual certifications)
**Why No Demo Built This:** The demo displayed compliance status but did not implement the actual rent-cap calculation logic against live HUD data. The manual PDF-to-Excel workflow was identified as the highest-pain step for analysts (`pain_points.md §P1.3`) but no demo replaced it.
**What It Looks Like Working:** An analyst enters (or uploads via CSV) a property's unit data: unit count, bedroom count, tenant household size, reported income, and reported rent. The tool fetches current AMI limits from the HUD API, calculates the rent ceiling for each unit's AMI tier, and flags any unit where reported rent exceeds 30% of the applicable income limit. Output: a pass/fail report per unit with the exact calculation shown (HUD limit × AMI% × 30% = max rent). The tool handles utility allowance adjustments and household size variations.
**Equity Dimension:** Indirect but significant. Accurate, automated rent validation catches cases where tenants are being overcharged relative to their income — protecting the residents in affordable housing from affordability erosion. The research notes that "just over 40% of inclusionary housing programs do not track units or fees despite 97% claiming to monitor rental compliance" (`pain_points.md §P3.2`) — automated validation closes this gap.

---

### Idea 4: Renter-Aware Notification System

**Addresses:** JTBD 2 — The excluded resident; cross-cutting equity gap: 59% renters excluded from mailed notice
**Prior Art:** No prior art addresses renter notification specifically. The research documents the structural gap: legal notice goes to property owners within 150 feet, systematically excluding the 59% of Richmond households that rent (`pain_points.md §P2.3`). The equitable design research recommends "notification by building address, not property deed record" and "printable door-hanger assets for multifamily buildings" (`pain_points.md §Cross-Cutting Equity`).
**Data Source:** ArcGIS Parcels (owner vs. multi-family use code) + Legistar Matters (geocoded via Idea 1) + Assessor data for building type classification.
**Build Estimate:** Weekend (printable PDF generator); 2-week sprint (with building-level targeting)
**Why No Demo Built This:** Every demo used web-based notification models that replicate the existing homeowner bias. The research identifies this as the default failure mode: "A web-only, English-only development tracker will structurally replicate the existing inequity" (`pain_points.md §Cross-Cutting Equity`).
**What It Looks Like Working:** When a development proposal is filed within ¼ mile of a multifamily building, the system generates a printable, plain-language door-hanger PDF (English + Spanish) with: what's proposed, when the hearing is, how to comment, and a QR code linking to the full Legistar record. Civic associations, tenant unions, and property managers can download these for distribution. The system also generates building-address-level email/SMS alerts for residents who opt in via the QR code — no property ownership required.
**Equity Dimension:** The entire design premise is equity. Addresses the 59% renter exclusion gap. Printable assets bypass the digital divide entirely. Building-address targeting reaches renters that deed-based notification structurally misses. Partnering with confirmed organizations (Richmond Tenants Union, Union Hill Civic Association — `jtbd_analysis.md §Q18`) for distribution leverages existing trust networks.
