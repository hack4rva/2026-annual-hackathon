# Gap Analysis — Stay Informed (All Your Bass Are Belong to Us)

**Pillar:** Thriving & Sustainable Built Environment
**Problem Statement (verbatim):** Fleet Operations & Street Service Tracking — Improve how DPW supervisors and residents track the progress of services like snow removal and street cleaning in real time.
**Demo:** Stay Informed — https://all-your-bass-are-belong-to-us-sandy.vercel.app/
**Review Date:** March 31, 2026

---

## Problem Grounding

**Problem statement (verbatim):** Improve how DPW supervisors and residents track the progress of services like snow removal and street cleaning in real time.

**Primary user:** Two users, both essential:
- A Richmond resident — specifically one who depends on knowing whether their street has been serviced (hourly worker, parent, elderly person without a car alternative) — who currently has no reliable way to check service status without calling 311
- A DPW supervisor managing a snow emergency or routine cleaning cycle who needs real-time operational visibility across a fleet of 20+ vehicles

**Pain today:**
- Residents have no self-service way to know if/when their street will be plowed or cleaned
- 311 does not provide real-time fleet status; call volume spikes during snow events and wait times are long
- DPW supervisors rely on radio, phone calls, and informal tracking to manage fleet status
- No single source of truth exists for either audience

**Desired outcome:**
- Residents can self-serve street service status from any device, in any language, without calling 311
- DPW supervisors can see real-time fleet location, route progress, and completion status on one dashboard
- Service gaps are automatically surfaced, not discovered by complaint

---

## Data Source Map

| Data Claim in Demo | Real Source | Owner | Access Method | Cadence | Status |
|--------------------|------------|-------|---------------|---------|--------|
| Fleet route zones | Richmond DPW internal | DPW | No public API — requires DPW partnership | Defined by season/event | ⚠️ SME needed |
| Plow route progress / completed passes | GPS telemetry from plow trucks | DPW | No public API — requires fleet telematics system access | Real-time | ❌ **SYNTHETIC DATA — core gap** |
| Vehicle unique identifiers and direction | Fleet telematics system | DPW | Unknown — system not documented | Real-time | ❌ **SYNTHETIC DATA — core gap** |
| Zone boundaries | Richmond GIS / GeoHub | City of Richmond | ArcGIS REST API (ags.richmond.gov) | Updated periodically | ✅ Publicly accessible |
| Snow emergency status | DPW / Mayor's Office | City | Public announcements, possibly Richmond.gov API | Event-driven | ⚠️ No structured feed confirmed |
| Street cleaning schedule by zone | DPW | DPW | Unknown — may be internal spreadsheet only | Seasonal | ⚠️ SME needed |

**Critical finding:** The two core data streams that make this product useful — real-time plow GPS telemetry and route completion status — are synthetic in the demo. The demo is a UI shell without a data layer. This is the primary gap between the prototype and a working solution.

---

## Gap Analysis

### Job 1 — The Stranded Resident
**Demo coverage:** Partial

The UI addresses this job's form: a resident can see zone status and subscribe to notifications. But the data powering it is synthetic. A resident using this product today would see fake completion data, which is worse than no data (it creates false confidence). The notification system is unconnected to any real trigger.

**Specifically missing:**
- Real GPS telemetry feed from DPW plow trucks
- Actual street cleaning schedule from DPW (which streets, which days, which zones)
- Integration with 311 or DPW dispatch to trigger real notifications
- Non-English language access (demo appears English-only)

**Fixable?** Yes — but requires a DPW data partnership, not just a build. This is not a technical gap; it's a relationship and access gap.

### Job 2 — The DPW Supervisor
**Demo coverage:** Partial

The staff portal UI is well-conceived: route progress dashboard, per-vehicle status, analytics. But it's built on synthetic telemetry. A DPW supervisor using this today would be looking at made-up data. Worse, it may not match the format of whatever system DPW actually uses for dispatch.

**Specifically missing:**
- Integration with DPW's actual fleet dispatch or GPS system (if one exists)
- Understanding of how supervisors currently manage routes (what does a realistic supervisor workflow look like?)
- Alert system that surfaces actual anomalies (truck breakdowns, unfinished routes)

**Fixable?** Yes, but needs a DPW supervisor interview first to understand the real workflow before building the staff portal.

### Job 3 — The Accountability-Seeking Resident
**Demo coverage:** No

The demo has no mechanism for residents to report a service gap or missed street. The notification system is one-directional (city to resident). There is no feedback loop, no complaint tracking, no way for a resident to create a documented record. This job is not addressed at all.

**Specifically missing:**
- Resident issue reporting (integrated with 311 or a separate channel)
- Confirmation that a report was received
- Status tracking for reported gaps
- Any equity analysis of which neighborhoods are systematically missed

**Fixable?** Yes — this is a feature that could be added, but it requires 311 integration or a standalone reporting system with a city backend.

---

## Overall Verdict

**Does the demo solve the problem as stated?** No.

The demo is a well-designed UI prototype that correctly models what the solution should look like. It does not solve the problem because:
1. The data layer is entirely synthetic — no real DPW data flows through it
2. Job 3 (accountability for underserved residents) is not addressed at all
3. No path to real data access has been documented or pursued

This is not a criticism of the team's execution — the UI work is solid and the dual-portal architecture is the right design. But the problem statement requires real-time tracking, and real-time tracking requires real data from DPW's fleet. That data relationship is the missing piece.

---

## Opportunities

### Opportunity 1 — DPW GPS Integration First
Partner with DPW to expose a read-only API from their existing fleet GPS system (most modern DPW fleets run Samsara, Verizon Connect, or similar). The resident-facing UI already exists. The unlock is the data pipeline, not more UI work. A city-approved data sharing agreement is the critical path item.

### Opportunity 2 — Adopt an Existing Plow Tracker
Several US cities have open-source or vendor-built plow trackers (Pittsburgh's "Plow Burgh", Chicago's "Plow Tracker", NYC's DOT plow map). Richmond could adopt one of these platforms and negotiate a data feed from DPW rather than building from scratch. The question is not "how do we build this" but "which existing tool fits Richmond's fleet data format?"

### Opportunity 3 — 311 as the Real-Time Signal
Even without GPS telemetry, 311 service request data could power a resident-facing service gap map. If a block has had three 311 complaints about missed street cleaning in the last 30 days, that's a real signal. Richmond's 311 data may be accessible via the Richmond Open Data Portal. This approach avoids the DPW data partnership problem entirely.
