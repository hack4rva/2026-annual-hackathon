# Gap Analysis — RVA MAP Tracker

**Pillar:** A Thriving City Hall
**Problem Statement (assigned):** Resident Service Navigation — Help residents find the right City service or department quickly, so requests get routed correctly the first time.
**Alternate Problem Statement:** Procurement Risk & Opportunity Review — Help City staff identify valid, compliant contracts across City, state, and federal sources without manual PDF hunting.
**Demo:** RVA MAP Tracker — Mayoral Action Plan Progress Dashboard
**Build Method:** Conversational AI (single-file web app)
**Review Date:** March 31, 2026

---

## Problem Grounding

**Problem statements (verbatim):**
1. "Help residents find the right City service or department quickly, so requests get routed correctly the first time."
2. "Help City staff identify valid, compliant contracts across City, state, and federal sources without manual PDF hunting."

**What the demo actually addresses:** "There is no unified, public-facing way for residents to see where the city stands on each commitment — or for staff to enter updates and maintain that visibility in real time."

**Primary user (per problem statements):** A resident who has a problem and doesn't know where to go (PS1), or a procurement officer verifying contract compliance (PS2).

**Primary user (actual):** A resident who wants to know whether the city is delivering on MAP commitments, and a city staff member who needs to enter progress updates.

**Pain addressed:** MAP commitments exist but have no public-facing accountability mechanism. Residents cannot see whether goals have been met. Staff have no lightweight way to publish progress data outside internal systems like AchieveIt.

---

## Problem Statement Alignment Assessment

### Against Service Navigation (PS1)
**Alignment: None.**

Service navigation helps a resident with an immediate problem ("my trash wasn't picked up — who do I call?"). MAP Tracker shows whether the city has met its strategic goals ("did graduation rates increase?"). These are completely different interactions serving different user needs at different timescales.

MAP Tracker does not route anyone anywhere. It does not help a confused resident find the right department. It does not reduce misrouted 311 requests. There is no path from "view MAP progress by pillar" to "get my problem solved."

### Against Procurement Review (PS2)
**Alignment: None.**

Procurement review addresses contract verification across fragmented databases. MAP Tracker has no contract data, no vendor information, no compliance checking, and no connection to procurement systems. The data types (binary/directional metrics vs. contract terms/dates/vendor compliance) share nothing.

### Against Pillar Blue Sky Statement
**Alignment: Strong.**

The Thriving City Hall Blue Sky framing — "Making City services easier to find and use for residents and staff" — can encompass government transparency and accountability. Making MAP progress visible is a form of making government work visible. The demo directly serves the broader vision by giving residents an accountability mechanism for the Mayor's stated priorities.

---

## Data Source Map

| Data Claim in Demo | Real Source | Owner | Access | Cadence | Status |
|--------------------|------------|-------|--------|---------|--------|
| MAP goal metrics | Manual entry by department heads during hackathon | City department heads | Admin interface | Manual per update | ✅ Real data — entered by actual city officials |
| Pillar structure | Mayor's Action Plan (public) | Mayor's Office | Public document | Static (updated per administration) | ✅ Real structure |
| Binary metrics (plan adopted, agreement signed) | Department heads during hackathon week | Various departments | Manual entry | Per event | ✅ Real — verified by contributing staff |
| Directional metrics (rates, counts) | Department heads during hackathon week | Various departments | Manual entry | Quarterly target | ✅ Real — but currency degrades without automation |
| AchieveIt integration path | AchieveIt (city internal reporting tool) | City of Richmond | Internal — requires API access | Updated per department schedule | ⚠️ Identified but not implemented |

---

## Gap Analysis

### Gap 1 — No Service Routing Capability
MAP Tracker shows strategic performance. Service navigation routes tactical requests. A resident who visits MAP Tracker because they have a pothole will see that the city has goals around infrastructure — but won't be told to file a 311 request with Public Works. There is no routing, no intake, no department directory, and no problem-to-service mapping.

**What would be needed:** An entirely different product — a problem taxonomy, a routing engine, and integration with 311 or rva.gov service pages.

### Gap 2 — No Contract or Procurement Data
MAP Tracker contains performance metrics, not procurement data. There are no contracts, vendors, expiration dates, compliance statuses, or financial obligations.

**What would be needed:** Replacing the MAP metric data model with the City Contracts dataset (xqn7-jvv2) and adding procurement-specific features.

### Gap 3 — Data Sustainability Without Automation
The tool's value proposition depends on data being current. Department heads entered data during the hackathon because they were physically present and motivated by the event. Post-hackathon, manual data entry has a near-100% abandonment rate for tools without institutional mandate or automated pipelines.

**What would be needed:** AchieveIt API integration (identified in the demo as the upgrade path), or an institutional mandate from the Mayor's Office requiring quarterly updates.

### Gap 4 — No Access Control or Security
A single-file web app with an admin interface that lets anyone enter data has no authentication, no role-based access, and no protection against unauthorized edits. For a public-facing government accountability tool, this is a deployment blocker.

**What would be needed:** Authentication (city staff credentials), role-based access (department heads can edit their metrics only), and audit logging beyond timestamps.

---

## Opportunities

### Opportunity 1 — Standalone Adoption as Government Transparency Tool
MAP Tracker serves a real, if unassigned, civic need. The department head participation during the hackathon is the strongest institutional signal in the Thriving City Hall pillar. If the Mayor's Office wants a public MAP accountability dashboard and AchieveIt integration is feasible, this tool has a path to real deployment — independent of the hackathon problem statements.

### Opportunity 2 — Data Entry as an Analytics Probe
MAP Tracker's admin interface is a lightweight data collection tool. If expanded beyond MAP metrics, the same binary/directional data model could collect departmental KPIs that the city currently tracks only in AchieveIt (if at all). The tool's value might be less as a public dashboard and more as a quick-and-dirty KPI collection system for departments that don't yet use AchieveIt consistently.

### Opportunity 3 — Combine with Budget Dashboard for Full Transparency Suite
MAP Tracker (are we meeting our goals?) + City Budget Dashboard (where does the money go?) = a comprehensive civic transparency platform. Neither addresses the problem statements, but together they would create something Richmond currently lacks: a public-facing accountability suite that connects spending to outcomes.
