# Gap Analysis — Road Maintenance Fleet Tracker

**Pillar:** Thriving & Sustainable Built Environment
**Problem Statement (verbatim):** Fleet Operations & Street Service Tracking — Improve how DPW supervisors and residents track the progress of services like snow removal and street cleaning in real time.
**Demo:** Road Maintenance Fleet Tracker — public + staff dual-portal
**Review Date:** March 31, 2026

---

## Problem Grounding

**Problem statement (verbatim):** Improve how DPW supervisors and residents track the progress of services like snow removal and street cleaning in real time.

**Primary user:** Same as Stay Informed review — two essential users:
- Richmond resident who cannot self-serve street service status
- DPW supervisor managing fleet with no real-time operational picture

**Pain today:** Identical to Stay Informed — no real-time data, 311 overload during storms, no feedback loop for residents.

**Desired outcome:** Real-time tracking accessible to both residents and staff, with correct data behind it.

---

## Data Source Map

| Data Claim in Demo | Real Source | Owner | Access | Cadence | Status |
|--------------------|------------|-------|--------|---------|--------|
| Plow route progress by zone | GPS telemetry from DPW trucks | DPW | No public access — requires fleet system integration | Real-time | ❌ **SYNTHETIC DATA — core gap** |
| Advanced snow telemetry | DPW fleet telematics | DPW | Unknown | Real-time | ❌ **SYNTHETIC DATA — core gap** |
| Vehicle unique identifiers | DPW fleet management system | DPW | Unknown | Real-time | ❌ **SYNTHETIC DATA — core gap** |
| Zone boundaries / schedules | Richmond GIS | City | ArcGIS REST API | Periodic | ✅ Publicly accessible |
| BMP analytics data | Hypothetical future dataset | DPW | Does not exist yet | N/A | ❌ No real source |
| Street cleaning schedule | DPW internal | DPW | Not published | Seasonal | ⚠️ SME needed |

**Critical finding:** Identical to Stay Informed — the product is a UI shell. All vehicle and route data is synthetic. The analytics section references "BMP data" that has no real-world source even hypothetically defined.

---

## Gap Analysis

### Job 1 — The Stranded Resident
**Demo coverage:** Partial (same assessment as Stay Informed)

The resident portal correctly models the right product. But it runs on synthetic data. A resident using it gets false information. The notification system has no real trigger. No language access beyond English is demonstrated.

**Missing:** Real GPS data, actual DPW schedule, real notification trigger, language access.

### Job 2 — The DPW Supervisor
**Demo coverage:** Partial

The staff portal is marginally more detailed than Stay Informed's — it includes an analytics section referencing BMP planning. However, BMP data is a future projection with no defined real source. The core dashboard is built on synthetic telemetry.

**Missing:** Real fleet system integration, realistic supervisor workflow design, actual route assignment logic.

### Job 3 — The Accountability-Seeking Resident
**Demo coverage:** No

Neither the public portal nor the staff portal includes any resident reporting mechanism. Service gaps are not surfaced or tracked. No feedback loop exists. This job is completely unaddressed.

---

## Comparison with Stay Informed (All Your Bass)

Both demos address the same problem statement and arrived at near-identical architecture: dual portal, zone-based, synthetic data. Key differences:

| Dimension | Stay Informed | Road Maintenance Tracker |
|-----------|--------------|--------------------------|
| Architecture | Dual portal | Dual portal |
| Data | Synthetic | Synthetic |
| Analytics | Basic | BMP planning (no source) |
| Resident issue reporting | No | No |
| Language access | Not demonstrated | Not demonstrated |
| Live URL | Yes (Vercel) | No |

Neither demo solves the problem. Stay Informed has a live URL and is marginally further along for resident-facing features. Neither addresses Job 3.

---

## Overall Verdict

**Does the demo solve the problem as stated?** No.

Same root cause as Stay Informed: the product is a well-designed prototype with no real data behind it. The problem statement requires real-time tracking; this demo provides a simulation of it. The gap is not UI quality — the gap is the DPW data partnership that makes the product real.

---

## Opportunities

Same three opportunities as Stay Informed, plus one additional:

### Opportunity 4 — BMP as a Long-Term Civic Data Asset
The analytics section in this demo points toward something valuable: using route completion data to improve future DPW planning. No other team or existing product has focused specifically on the staff-side analytics use case. If DPW's actual route data were available, this could become a legitimate planning tool — not just a resident-facing tracker. This is a distinct opportunity from the resident notification use case.
