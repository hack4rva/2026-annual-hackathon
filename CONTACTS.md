# SME Contacts

This file is the canonical list of subject matter experts who can answer questions that deep research and demo analysis cannot resolve. It is read by the `sme-outreach` skill when drafting outreach emails.

**How to add a contact:** Fill in each field. "Topics" should name the specific question domains they can answer — be concrete, not generic.

---

## City of Richmond Staff

| Name | Department | Title / Role | Email | Phone | Topics They Can Answer |
|------|-----------|-------------|-------|-------|----------------------|
| [NEEDED] | Department of Public Works (DPW) | Fleet Operations Manager or equivalent | | | Real-time GPS/telemetry on plow trucks; route assignment systems; current software for fleet dispatch; data export format and cadence |
| [NEEDED] | Department of Public Works (DPW) | Director or Deputy Director | | | Data sharing agreements; procurement pathway for new civic tech; pilot program authorization |
| [NEEDED] | Richmond GIS / Technology | GIS Manager | | | GeoHub data layers; update cadence; API access; which datasets are live vs. stale |
| [NEEDED] | Department of Planning and Development Review | Project Manager or GIS Analyst | | | How infrastructure projects are entered into GeoHub; what Legistar data is available; notification processes |
| [NEEDED] | 311 / Customer Experience | 311 Operations Lead | | | Current 311 call volume for DPW services; call types for road/snow complaints; whether 311 data is available via API; equity breakdowns by neighborhood |
| [NEEDED] | Office of Sustainability | Sustainability Coordinator | | | RVA Green 2050 plan data; multimodal transportation targets; climate equity mapping |
| [NEEDED] | Department of Social Services | Data Analyst or Program Manager | | | Maternal health coordination data; agency data sharing agreements |
| [NEEDED] | Richmond Redevelopment and Housing Authority (RRHA) | Compliance staff | | | Affordable housing covenant tracking; data on publicly funded units |
| [NEEDED] | Office of Minority Business Development (OMBD) | Director or program staff | | | MBE certification process; how contracts are currently matched to certified businesses; gaps in current outreach |
| [NEEDED] | City Procurement | Procurement Officer | | | SWaM/MBE requirements; contract visibility; current vendor portal status |

---

## State Agencies

| Name | Agency | Title / Role | Email | Topics |
|------|--------|-------------|-------|--------|
| [NEEDED] | Virginia Department of Transportation (VDOT) | Data / GIS staff | | VDOT project feeds; infrastructure data for Richmond region; open data access |
| [NEEDED] | Virginia Department of Social Services | Data team | | Cross-agency data sharing; maternal health reporting datasets |
| [NEEDED] | Virginia State Corporation Commission (SCC) | Business Registration staff | | SCC business registration API; entity data format and update cadence |

---

## Nonprofit / Community Organizations

| Name | Organization | Role | Email | Topics |
|------|-------------|------|-------|--------|
| [NEEDED] | [Richmond immigrant services org] | Executive Director or Program staff | | Trusted service discovery for immigrant communities; privacy concerns; language access barriers |
| [NEEDED] | [Richmond reentry / workforce org] | Case management staff | | Cross-agency navigation; how clients are handed off between systems; what data clients repeat across agencies |
| [NEEDED] | [Richmond maternal health coalition or org] | Data or program staff | | Which agencies collect maternal health data; where duplication happens; what a shared metric looks like |
| [NEEDED] | [Richmond arts/culture organization] | Events coordinator | | How Richmond arts events are currently listed and discovered; what platforms are used; what's missing |
| [NEEDED] | People's Advantage FCU | Loan program staff | | Revolving loan fund access; what documentation minority-owned businesses struggle with |
| [NEEDED] | [Richmond neighborhood association] | President or representative | | How residents currently learn about construction/development near them; what the pain looks like in practice |

---

## Academic / Research

| Name | Institution | Role | Email | Topics |
|------|------------|------|-------|--------|
| [NEEDED] | VCU or UR | Urban planning faculty | | Richmond planning process; neighborhood development notification requirements |
| [NEEDED] | VCU Health or Bon Secours | Maternal health researcher | | Richmond maternal health data landscape; key agencies and gaps |

---

## Hackathon Organizers (Internal Team — Already Known)

| Name | Role | Slack / Contact | Topics |
|------|------|----------------|--------|
| Michael Kolbe | Programming / Planning / Pillar Coordination | @michael | Pillar assignment; problem statement intent; team context |
| Ford Prior | Platform / Tech / Community / Leadership | @ford | Platform; continuation pathway; city relationships |
| Crystal Harvey | Operations / Logistics | @crystal | Event logistics; team contacts |
| Heather Lyne | Entrepreneurial Ecosystems / Support Lounges | @heather | Economy pillar context; small business ecosystem |
| Will Melton | Partnerships / Community | @will | Community org connections; potential SME introductions |
| Mike Huddleston | Sponsorships / Corporate Relations | @mike | Corporate partner contacts; sponsor relationships |
| Sinclair Jenks | Marketing / Communications | @sinclair | Outreach strategy; public communications |

---

## Priority Contacts (from Implementation Reality Review)

The following contacts are highest priority because they unblock the most shippable ideas. See `ideas/IMPLEMENTATION_REALITY_SYNTHESIS.md` for full rationale.

| Priority | Contact Role | Department / Org | Why | Ideas Unblocked |
|:--------:|-------------|-----------------|-----|:---------------:|
| **1** | OMBD Director or Program Staff | Office of Minority Business Development | B2GNow CSV export would unblock the highest-ownership idea in Economy pillar | 1 (+ 2 indirect) |
| **2** | HCD Compliance Staff | Housing & Community Development | Test HUD Rent-Cap Auto-Validator alongside existing Excel workflow | 2 |
| **3** | DPW Supervisor | Department of Public Works | Snow-tier PDF digitization; zone-level service confirmation | 3 |
| **4** | CultureWorks Partnership Contact | CultureWorks | One partnership agreement unlocks 3 arts/culture ideas | 3 |
| **5** | OIRE / Immigrant Services Contact | Office of Immigrant & Refugee Engagement | Trusted-org list for zero-account service discovery | 2 |
| **6** | DIT Review Contact | Dept. of Innovation & Technology | AI policy (AR 2.13) review for any idea using AI/LLM | 5+ |
| **7** | Procurement Data Contact | City Procurement | Contract email list for expiry alerts; NAICS mapping table | 2 |

---

## Notes
- This file should be populated before running the `sme-outreach` skill on any pillar
- If a contact is reached and responds, add the response summary under their row as a note
- Contacts marked `[NEEDED]` are roles that have been identified as necessary but not yet filled in — the hackathon organizers (above) may be able to make introductions
- **Priority ordering above is based on Implementation Reality scoring** — see `ideas/IMPLEMENTATION_REALITY_SYNTHESIS.md` for the full ranked list and structural wall analysis
