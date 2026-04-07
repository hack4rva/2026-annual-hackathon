# Innovation Analysis: All Your Bass (Non-GPS DPW Service Tracker)

**Generated:** April 2, 2026
**Inputs:** RESEARCH_RESULT.md, 6 Innovation Lenses

---

## 1. Blue Ocean Reframing (ERRC Grid)

| Factor | Action | Details |
|--------|--------|---------|
| GPS hardware dependency | Eliminate | Pittsburgh, Syracuse, and NYC all required AVL hardware procurement. The research proves five non-GPS patterns deliver useful transparency. Eliminate the hardware requirement entirely — the name "All Your Bass" suggests owning the base/foundation, not the bells and whistles. |
| Real-time location precision | Reduce | Cities chase 1-5 minute GPS refresh rates (Middletown: 120 seconds, Syracuse: 5 minutes). Reduce precision expectations to shift-level: "Was this zone serviced today? Yes/No." Residents need confirmation, not surveillance. |
| Schedule and expectation transparency | Raise | Boston and Arlington publish sweeping schedules, but most cities don't explain what happens when schedules slip. Raise this by showing both the *plan* and the *deviation*: "Sweeping was scheduled for Tuesday. Delayed to Thursday due to rain." |
| Proactive compliance alerts | Create | Los Angeles and Boston offer "No-Tow" alerts for street sweeping. No city does this for snow events or leaf collection. Create a unified "move your vehicle" alert system covering all DPW services that require resident parking compliance. |

**Core assumption challenged:** That DPW transparency requires technology investment. The research documents Milwaukee's leaf collection tracker — manually updated by supervisors using green/yellow/red toggles — as an effective public tool. The highest-impact transparency pattern doesn't require a single sensor.

**Reframed value proposition:** Not a tracker — a *DPW service contract with residents*. "Here's when we plan to service your zone. Here's what we need from you (move your car). Here's whether we've done it yet. Here's why if we haven't."

---

## 2. Rapid Ideation — 8 Divergent Approaches

1. **DPW Service Calendar** — A calendar feed (.ics) per zone showing all scheduled services: sweeping dates, leaf collection weeks, and snow emergency declarations. Syncs to residents' phone calendars.
2. **"Was My Street Done?" Binary Reporter** — After each service round, DPW marks zones as done/not-done. Residents can view and also report discrepancies ("you said done, but my block wasn't swept"). Simple binary status, not GPS.
3. **Compliance Leaderboard** — Show which zones had the fewest parking obstructions during sweeping (based on 311 "car blocking sweeper" reports). Gamifies resident compliance. Neighborhood pride.
4. **Seasonal Operations Hub** — A single landing page that changes with the season: snow operations in winter, sweeping in spring/fall, leaf collection in autumn. One URL, always relevant.
5. **DPW Explainer Bot** — A chatbot trained on DPW's service policies: "Why wasn't my street plowed?" → "Your street is Priority 3. DPW is currently clearing Priority 1 roads. Estimated time to your zone: 6-10 hours."
6. **Photo Evidence Feed** — DPW crews take a geotagged photo at the start and end of each zone's service. Photos publish to a public feed. Visual proof without GPS tracking.
7. **Multilingual Alert Network** — Partner with CBOs and faith organizations to distribute DPW service alerts in Spanish, Nepali, and other languages prevalent in Richmond's immigrant communities. The research highlights Minneapolis doing this for sweeping.
8. **Work-Order Transparency API** — Expose DPW's work-order completion data as a public REST API. Let civic hackers, journalists, and neighborhood associations build their own views of service delivery.

**Most provocative:** #3 (Compliance Leaderboard) — Shifts accountability from DPW to residents by surfacing which neighborhoods' parking behavior prevents effective service delivery.
**Most feasible:** #4 (Seasonal Operations Hub) — A single-page website that shows current DPW operations status with zone-level detail. No data integration required beyond what DPW already knows internally.

---

## 3. Rapid Design Sprint

**Problem in one sentence:** Richmond residents don't know when DPW services (sweeping, leaf collection, snow removal) are scheduled for their block, whether they've happened, or why they might have been skipped.

**Target user:** A resident in a dense urban neighborhood (Jackson Ward, the Fan) who gets parking tickets during street sweeping because they didn't know the schedule, or who wonders why their leaves haven't been collected yet.

**User Journey:**
- Start: Resident parks on their normal street. Returns to find a parking ticket for blocking street sweeping.
- Friction: They had no idea sweeping was scheduled. They check rva.gov — no sweeping schedule lookup. They call 311 — told "sweeping follows a seasonal schedule" with no specifics. They pay the ticket and remain uninformed.
- Outcome: Resident subscribes to their zone's calendar → gets a push/SMS alert: "Street sweeping on your block tomorrow, 8am-2pm. Please move vehicles to alternate side." After sweeping, status updates: "Zone 4: Sweeping complete. Next service: Oct 15."

**Lowest-fidelity prototype:** A static page listing Richmond's DPW zones with their current-season service schedule (sweeping dates, leaf collection weeks). An address lookup returns the user's zone and its schedule. An opt-in SMS reminder 24 hours before service. Status toggled by DPW supervisor after completion.

**First test:** Partner with one DPW supervisor covering a single zone. Run the schedule lookup + SMS reminder for one sweeping cycle. Measure: Did opt-in residents move their cars? Did the supervisor update completion status?

---

## 4. Opportunity Mapper

### Pattern A: Schedule Lookup + Compliance Alerts (Quick Win)
- **User:** Any Richmond resident.
- **Outcome:** Know when DPW services are scheduled for their zone. Get a reminder to move their vehicle. Know when service is complete.
- **Workflow:** Address → geocode → zone lookup → return schedule + subscribe to SMS/email alerts → DPW supervisor toggles completion status.
- **Dependencies:** DPW zone polygons (need digitization). DPW service schedules (exist internally). SMS service (Twilio or similar). Supervisor participation.
- **Richmond relevance:** Boston's No-Tow alert system and Los Angeles's sweeping notification program are proven models. Richmond has neither. This would be a first for the city.

### Pattern B: Work-Order Integrated Progress Map (Stretch)
- **User:** Residents, DPW managers, council members.
- **Outcome:** Zone-level service progress driven by work-order closures from DPW's asset management system (Cityworks, Cartegraph, or equivalent).
- **Workflow:** Work orders close in DPW's back-office system → REST API sync to public dashboard → zones auto-update from "Scheduled" to "Complete" without manual toggles.
- **Dependencies:** DPW's work-order system must have an API. Integration with Cityworks/Cartegraph/equivalent. May require IT cooperation beyond DPW operations.
- **Richmond relevance:** The research notes Cincinnati and Fairfax County successfully drive public maps from 311/work-order closures. Would require understanding Richmond's specific asset management stack.

**Recommendation:** Pattern A is achievable in a weekend and avoids all integration dependencies. Pattern B is the mature state but requires DPW IT cooperation.

---

## 5. Problem Scoping

| Dimension | Score (1-5) | Notes |
|-----------|-------------|-------|
| Impact | 4 | Covers three DPW services (snow, sweeping, leaves) with year-round relevance. Reduces 311 volume and parking citation friction. |
| Feasibility | 4 | Non-GPS patterns (schedules, supervisor toggles, SMS alerts) are proven in multiple cities. No hardware procurement. |
| Data availability | 2 | DPW zone polygons and schedules exist internally but are not published or digitized. This is the primary blocker. |
| Clarity | 4 | "When is my street being serviced?" is clear. Multi-service scope adds breadth but also complexity. |
| Demo credibility | 3 | A schedule lookup with SMS alerts can be demoed with mock zone data. Real-time status toggle adds credibility but requires DPW participation. |

**Richmond-specific alignment:** Directly addresses PS2 (Fleet Operations & Street Service Tracking). The non-GPS approach specifically avoids the DPW Fleet GPS structural wall. Proactive compliance alerts (Boston's No-Tow model) could reduce parking citation disputes — a common source of resident frustration.

**Policy/eligibility risks:** Publishing DPW service schedules creates an implicit service promise. If DPW fails to meet the published schedule (due to weather, equipment failure, staffing), residents have a documented basis for complaints. DPW may resist this accountability. The research notes Madison explicitly warns that schedules cannot be used to track crew progress — similar disclaimers would be needed.

**Weekend MVP shapes:**
1. **Single-service demo (sweeping):** Build the address → zone lookup → schedule display → SMS opt-in flow for street sweeping only. Use mock zones based on Richmond neighborhoods. 15 hours of work.
2. **Multi-service seasonal hub:** A landing page showing current DPW operations across all services with zone-level status. Address lookup returns zone assignment. No SMS — just information. 10 hours of work.

---

## 6. Assumption Mapping

| # | Assumption | Risk | Uncertainty | Priority |
|---|-----------|------|-------------|----------|
| 1 | DPW's service schedules exist in a structured format (not just oral/tribal knowledge) | High | High | TEST FIRST |
| 2 | DPW zone boundaries can be obtained and digitized | High | High | TEST FIRST |
| 3 | Residents will opt into proactive alerts (SMS/email) | Medium | Medium | TEST FIRST |
| 4 | DPW supervisors will toggle zone completion status reliably | Medium | High | Validate early |
| 5 | A multi-service hub (snow + sweeping + leaves) is more valuable than a single-service tool | Medium | Medium | Validate early |
| 6 | Schedule publication won't create more 311 calls ("you said Tuesday but it's Wednesday and you haven't come") | Medium | Medium | Validate early |
| 7 | Richmond's parking enforcement data could be linked to sweeping schedules | Low | High | Monitor |

**Top 3 to validate:**
1. **Schedule data structure** — Validation: Contact DPW operations. Ask: "Is your street sweeping schedule in a spreadsheet, a database, a paper calendar, or just in supervisors' heads?" This determines the digitization effort.
2. **Zone boundary availability** — Validation: Request DPW zone maps via FOIA or direct contact. Check if zones align with any published geographic boundaries (e.g., Census blocks, council districts). Time the digitization effort.
3. **SMS opt-in demand** — Validation: Survey 50 Richmond residents (Nextdoor or in-person at a community meeting): "Would you sign up for a free text alert reminding you to move your car before street sweeping?" Measure interest rate.

---

## Key Takeaway

All Your Bass demonstrates that DPW transparency doesn't require GPS surveillance — it requires publishing what DPW already knows (schedules, zone assignments, completion status) and giving residents a simple way to access it. The research shows cities from Milwaukee to Boston achieving real impact with non-GPS patterns. The single biggest risk is that Richmond's DPW service data may not exist in any structured, digitizable form — validating data availability should be the first action, not the last.
