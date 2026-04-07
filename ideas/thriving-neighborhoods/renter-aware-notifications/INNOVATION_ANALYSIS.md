# Innovation Analysis: Renter-Aware Notifications

**Generated:** April 2, 2026
**Inputs:** RESEARCH_RESULT.md, 6 Innovation Lenses

---

## 1. Blue Ocean Reframing (ERRC Grid)

| Factor | Action | Details |
|--------|--------|---------|
| Owner-only mailed notice for zoning hearings | Eliminate | Only 12 of 75 major US cities notify renters of land-use hearings; Richmond is in the silent majority. Eliminate the owner-only default |
| Dependency on PII for tenant notification | Reduce | San Francisco's "to the extent practicable" model addresses mail to "Occupant" — no names, no PII collection, no privacy risk. Reduce the data requirement to zero PII |
| Geographic precision of notification buffers | Raise | Most cities use 100-300ft; Tacoma goes up to 2,500ft for heavy industrial. Raise Richmond's buffer to at least 300ft with USPS Delivery Point Validation (DPV) for unit-level accuracy in multifamily buildings |
| Automatic triggering from permitting system | Create | No Richmond process currently auto-generates renter notifications when a zoning case is filed. Create a GIS-triggered workflow in EnerGov that draws the buffer, extracts addresses, and sends "Occupant" mail |

**Core assumption challenged:** That notifying renters requires knowing who they are. Dallas staff identified "no easy way to access multifamily/multiunit data" as the blocker. The research proves this is a solved problem: address mail to "Occupant" at each unit using USPS DPV-validated delivery points, covering apartments down to the suite number without any tenant PII.

**Reframed value proposition:** Instead of trying to build a tenant database, build an address database. Every deliverable unit within the notification buffer gets a postcard addressed to "Occupant" — achieving legal sufficiency (per *Mullane v. Central Hanover Bank* standard) while avoiding all privacy concerns.

---

## 2. Rapid Ideation — 8 Divergent Approaches

1. **GIS-Triggered Occupant Postcards** — When a zoning case is filed in EnerGov, GIS auto-draws the 300ft buffer, pulls all DPV-validated delivery points, and sends plain-language postcards to "Occupant" via a print-and-mail API.
2. **Dual-Channel: Mail + SMS Opt-In** — Postcards are the legal baseline; include a QR code and SMS keyword ("Text ZONE 23220 to get future alerts") to build a voluntary digital notification list for that neighborhood.
3. **Renter Rights Information Sheet** — Instead of just notifying about the specific case, include a half-page insert explaining: "As a renter, here are your rights regarding this proposed change, how to attend the hearing, and who to contact."
4. **Language-First Postcards** — Detect the predominant non-English language per census tract (Spanish in Southside, Vietnamese in parts of Henrico) and print the postcard in that language first, with English second.
5. **Community Liaison Network** — For major rezonings, partner with CBOs and tenant associations to do in-building outreach, supplementing mail with face-to-face engagement (as Seattle does with community liaisons).
6. **Digital Notification Portal** — A public web portal where any resident can enter their address and opt in to email/SMS alerts for all zoning activity within 300ft. No PII beyond email/phone required.
7. **Landlord Responsibility Mandate** — Require property managers of 5+ unit buildings to post zoning notices in lobbies and common areas within 48 hours, mirroring NYC's Admin Code §28-120.1.3 (within 10 feet of elevators).
8. **Renter Impact Assessment** — Before any rezoning vote, require staff to report: how many rental units are within the notification buffer, what percentage of affected residents are renters, and whether renter engagement was representative.

**Most provocative:** #8 — Requiring a "renter impact assessment" before rezoning votes forces elected officials to confront the homeowner bias in engagement data documented by the ProMarket/SSRN study.
**Most feasible:** #1 — USPS DPV is a commodity service; GIS buffer drawing is standard ArcGIS functionality; print-and-mail vendors (Lob, PostGrid) have APIs for automated mailings.

---

## 3. Rapid Design Sprint

**Problem in one sentence:** Richmond renters are not notified when zoning changes are proposed near their homes, silencing the majority-renter population from the planning process.

**Target user:** A renter in a 20-unit apartment building in Manchester, 200 feet from a proposed rezoning to allow a 6-story mixed-use development.

**User Journey:**
- **Start:** Developer files a rezoning application with Richmond Planning
- **Friction:** Planning mails notice to the building *owner* (who may be an LLC in another state), posts a sign on the site (which the renter may not walk past), and publishes in the newspaper (which the renter doesn't read). The renter never learns about the proposal until construction begins.
- **Outcome:** Within 10 days of filing, every unit in the apartment building receives a postcard: "A development is proposed near you at [address]. Public hearing: [date/time]. How to comment: [instructions in English and Spanish]. More info: [QR code / SMS keyword]. Your voice matters."

**Lowest-fidelity prototype:** A printed mockup postcard with a 300ft buffer map, plain-language case description, hearing date, and multilingual comment instructions — presented alongside a GIS screenshot showing the buffer and all delivery points it captures.

**First test:** For the next 3 rezoning cases filed in Richmond, generate the "Occupant" mailing list from GeoHub parcels + USPS DPV, count the number of renter units that *would have* received notice, and compare to the number that actually received owner-only notice. Present the gap.

---

## 4. Opportunity Mapper

### Pattern A: Occupant Postcard System (Quick Win)

- **Target user:** Richmond Planning Department (operational) and renters (recipient)
- **Desired outcome:** Every renter within 300ft of a proposed zoning change receives a plain-language postcard about the proposal
- **Core workflow:** Zoning case filed → GIS draws 300ft buffer from case parcel → query GeoHub for all parcels in buffer → USPS DPV validation for unit-level delivery points → generate plain-language postcard (multilingual) → send via print-and-mail vendor API → log for PRA compliance
- **Dependencies:** GeoHub parcel layer (public), USPS DPV service (~$0.02/address), print-and-mail vendor (Lob/PostGrid, ~$1-2/postcard), multilingual template design, ordinance amendment to require "occupant" notice
- **Pros:** Legally defensible per *Mullane* standard; San Francisco, Tacoma, Raleigh have proven models; cost recoverable from applicant fees ($3.68-$3.77/envelope in SF); zero PII collected
- **Cons:** Ordinance amendment required (political process); Dallas warned of doubled mailing costs; USPS DPV doesn't capture every informal/unpermitted unit
- **Richmond relevance:** Richmond is a majority-renter city (55% renters per ACS), meaning the current owner-only notification system excludes more than half of affected residents

### Pattern B: Renter Engagement Platform (Stretch)

- **Target user:** Renters, housing advocates, City Council
- **Desired outcome:** A combined system: mail as legal baseline + digital opt-in portal for ongoing alerts + renter impact assessment reports for every rezoning
- **Core workflow:** Pattern A postcards as baseline → QR code on postcard drives residents to opt-in portal → portal allows SMS/email subscription by address → system tracks engagement demographics → generates "renter impact" report for each case showing % renter engagement vs. % renter population
- **Dependencies:** Everything in Pattern A plus: web portal development, SMS opt-in (TCPA compliant), engagement analytics (participant demographics vs. census demographics), Council adoption of renter impact assessment requirement
- **Pros:** Closes the loop from notification → engagement → accountability; creates the data infrastructure for the Participation Analytics Dashboard idea
- **Cons:** Multi-system integration; TCPA compliance for SMS; political will for renter impact assessment requirement
- **Richmond relevance:** Combines well with Bundle 2 (Legistar Development Pipeline) and the Participation Analytics Dashboard idea — postcards drive opt-ins, opt-ins generate engagement data, data reveals gaps

**Recommendation:** The hackathon demo should show the *gap* — present the 3 real case studies showing how many renters were excluded by owner-only notice. Then show the postcard mockup and the cost model (applicant-funded, $3.68/envelope). The policy argument is the demo.

---

## 5. Problem Scoping

| Dimension | Score (1-5) | Notes |
|-----------|-------------|-------|
| Impact | 5 | 55% of Richmond residents are renters; current owner-only notice systematically excludes the majority |
| Feasibility | 3 | Technical components are commodity (GIS, DPV, mail vendor); the hard part is the ordinance amendment and political will |
| Data availability | 4 | GeoHub parcels are public; USPS DPV is a commercial service; no tenant PII needed |
| Clarity | 5 | "Renters don't get notified" is immediately understood and empirically documented (12 of 75 cities) |
| Demo credibility | 4 | The gap analysis (current vs. proposed notification reach) is inherently compelling; postcard mockup is tangible |

**Richmond-specific alignment:** Pillar 2 (Thriving Neighborhoods), PS1 (Neighborhood Development Discovery). The ProMarket/SSRN study found this is a national problem affecting 63 of 75 major cities. Raleigh amended its UDO in 2020 (Ord. 2020-155) to add tenants — Richmond can cite this as direct precedent.

**Policy/eligibility risks:** Ordinance amendment is the primary risk — requires City Council vote. Dallas staff warned it would "at a minimum, double the mailing cost." SF's cost recovery model (applicant pays $3.68/envelope) mitigates budget concerns. EPA's Trenton study found door hangers had <1% response rate — mail alone may not drive engagement without CBO partnerships.

**Weekend MVP shapes:**
1. **Gap analysis demo:** For 3 recent Richmond rezoning cases, compute the buffer, count owner-only vs. all-occupant notification reach, and present the gap as a compelling infographic
2. **Postcard prototype + cost model:** Design a bilingual postcard mockup, calculate per-case mailing costs using USPS rates, and present the applicant-fee-recovery model based on SF's fee schedule

---

## 6. Assumption Mapping

| # | Assumption | Risk (1-5) | Uncertainty (1-5) | Priority |
|---|-----------|------|-------------|----------|
| 1 | City Council will pass an ordinance adding renters to notification requirements | 5 | 4 | **High** |
| 2 | USPS DPV can accurately identify individual units in Richmond's multifamily buildings | 3 | 3 | Medium |
| 3 | Applicants will accept the increased notification costs (or fee-recovery model will be adopted) | 4 | 3 | **High** |
| 4 | Renters will actually read and act on "Occupant" postcards (vs. treating them as junk mail) | 4 | 4 | **High** |
| 5 | GeoHub parcel data includes accurate multifamily unit counts | 3 | 3 | Medium |
| 6 | Multilingual postcards in Spanish and Vietnamese will cover the majority of LEP renters | 2 | 2 | Low |
| 7 | CBO partnerships can be established to supplement mail with in-person outreach | 3 | 2 | Medium |

**Top 3 to validate:**
1. **#1 — Political feasibility of ordinance change:** Research the current Council composition and identify champions. Raleigh passed TC-11-20 in 2020; present it as precedent. Talk to the Planning Director about appetite for the change. Validation: political mapping + one key conversation.
2. **#4 — Renter response to "Occupant" mail:** The EPA Trenton study found <1% response to door hangers even with $100 incentives. Run a micro-test: mail 100 "Occupant" postcards in one Richmond neighborhood about a real upcoming hearing, include a unique QR code, and measure scan rate. Validation: 2-week field test.
3. **#3 — Cost recovery acceptance:** Calculate the per-case cost increase (estimated: 2-5x current mailing, offset by applicant fees) and present to 3 active developers to gauge willingness. SF charges $3.68-$3.77/envelope; Richmond could benchmark against this. Validation: developer conversations.

---

## Key Takeaway

Renter-Aware Notifications addresses the most structurally inequitable aspect of Richmond's planning process: the systematic exclusion of renters from notification about zoning changes near their homes. The technical solution is commodity (GIS + DPV + mail vendor), the legal model is proven (San Francisco, Tacoma, Raleigh), and the cost is recoverable from applicants. The only real barrier is political will — making this a policy innovation challenge rather than a technology challenge.
