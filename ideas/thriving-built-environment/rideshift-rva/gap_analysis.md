# Gap Analysis — RideShift RVA

**Pillar:** Thriving & Sustainable Built Environment
**Problem Statement (verbatim):** Infrastructure Project Visibility — Help residents find and understand transportation and infrastructure projects happening in their neighborhoods.
**Demo:** RideShift RVA — rideshiftrva.com
**Team:** The Supply and Command Line
**Review Date:** March 31, 2026

---

## Problem Grounding

**Problem statement (verbatim):** Help residents find and understand transportation and infrastructure projects happening in their neighborhoods.

**Primary user (per problem statement):** A Richmond resident who wants to know what construction or infrastructure work is happening on their streets — when it starts, what it is, who approved it, and how to engage.

**Pain today:** Construction and infrastructure project information is buried in GeoHub, Legistar, and city department websites that are designed for professionals, not residents. By the time a project starts, the public comment window is often closed.

**Desired outcome:** Any Richmond resident can discover infrastructure projects near them, understand them in plain language, and engage before it's too late.

---

## Problem Statement Alignment Assessment

**RideShift's primary value proposition** is a behavior change platform for multimodal transportation (biking, transit, carpooling) incentivized by local business rewards. This is a legitimate and interesting civic product. However, it addresses the Built Environment pillar primarily through the lens of *sustainability and mode shift*, not *infrastructure project visibility*.

The Richmond Connects project map embedded in RideShift is a secondary feature — an iframe or embed that links residents to existing city project data. This is not a new solution to the visibility problem; it is a link to an existing tool.

**The core tension:** RideShift solves a real problem (transportation behavior change) but not the problem statement it's ostensibly addressing (help residents find and understand projects near them). These are related but distinct problems.

---

## Data Source Map

| Data Claim in Demo | Real Source | Owner | Access | Cadence | Status |
|--------------------|------------|-------|--------|---------|--------|
| Richmond Connects project map | Richmond Connects (city transportation project portal) | City of Richmond | Embedded link — not a direct data API | Real-time (if Richmond Connects is maintained) | ✅ Real data — but it's just a link |
| Local business reward catalog | Manual data entry by team | RideShift | Self-managed | On demand | ✅ Real partners (5 businesses) |
| Commuter barrier data | User-submitted via form | RideShift | Self-managed form | On demand | ⚠️ No confirmed City recipient |
| User goal / mode shift history | User-submitted | RideShift | Self-managed | Per week | ⚠️ Unverified (no GPS or confirmation) |
| GRTC schedules and maps | GRTC (Greater Richmond Transit Company) | GRTC | Public via GRTC website | Updated with schedule changes | ✅ Real — linked, not integrated |

**Critical finding:** RideShift does not directly solve the infrastructure project visibility problem. It links to Richmond Connects, which already exists. The unique value RideShift adds is the behavior change / reward mechanic and the barrier data collection. These are genuine contributions but do not satisfy the stated problem statement.

---

## Gap Analysis

### Job 1 — The Car-Dependent Commuter Who Wants to Change
**Demo coverage:** Strong — *but this is not the problem statement job*

RideShift directly and thoughtfully addresses this job. The goal-setting, weekly check-in, and reward mechanics are the right approach for motivating behavior change. The 5 business partners in 36 hours is a remarkable signal of real-world traction.

**Missing for this job:**
- Mode claim verification (can anyone claim they biked without evidence?)
- Equity of reward geography (are rewards accessible to outer-neighborhood residents?)
- Spanish language support
- Low-connectivity fallback (email magic link excludes residents without reliable email)

### Job 2 — The Local Business That Wants Foot Traffic
**Demo coverage:** Strong — *but this is not the problem statement job*

The business partnership model is well-executed. Five real Richmond businesses in 36 hours suggests this model resonates. The question is whether it scales — onboarding 50 or 500 businesses requires infrastructure beyond manual relationship management.

**Missing for this job:**
- Self-service business onboarding (currently requires direct relationship)
- Reward redemption system with fraud prevention
- Reporting back to businesses on traffic driven

### Job 3 — The City Planner Who Needs Transportation Barrier Data
**Demo coverage:** Moderate

The barrier reporting feature is a genuinely novel contribution. Structured, voluntary barrier data from real Richmond commuters is valuable for transportation planners. But the demo does not show where this data goes, who receives it, or what format it's in.

**Missing:** A defined City recipient for the barrier data, a data format the City can actually use, and a commitment from someone at the City or GRTC to act on the information.

---

## Alignment with the Problem Statement
**Does the demo solve the stated problem (Infrastructure Project Visibility)?** No.

RideShift addresses a related but distinct problem: *how do we get Richmond residents to change their transportation habits and reduce car use?* This is a legitimate civic challenge and arguably a better-executed hackathon submission than many others. But the problem statement it's entered under asks for a tool that helps residents find and understand infrastructure projects — and RideShift's answer to that is an embedded link to Richmond Connects.

This is not a failure of execution. It is a misalignment between what was built and what the problem statement asks for. A judge scoring RideShift against the Built Environment pillar rubric should weight this misalignment heavily under Impact.

---

## Overall Verdict

**Does the demo solve the problem as stated?** No — it solves a related but different problem.

**Is RideShift a good project?** Yes. The behavior change mechanics are thoughtful, the business partnerships are real, and the barrier data collection is a novel civic contribution. It should be evaluated seriously for the Thriving Economy pillar.

**Recommendation:** RideShift should be considered primarily as a Thriving Economy entry (it directly addresses economic development for minority-owned businesses) and secondarily for the Moonshot award (original reframing of transportation as civic participation). For the Built Environment pillar award, it does not directly address the stated problem.

---

## Opportunities

### Opportunity 1 — Deepen the Infrastructure Connection
If RideShift wanted to genuinely address Infrastructure Project Visibility, it could add a feature that notifies riders when a planned construction project will affect their preferred route — and suggests an alternate. This connects the behavior change platform to the project visibility problem in a meaningful way.

### Opportunity 2 — Make Barrier Data City-Actionable
The barrier reporting feature becomes valuable if and only if someone at the City (Richmond Department of Transportation, GRTC, Office of Sustainability) receives and acts on it. The missing step is a defined City stakeholder who commits to reviewing the data quarterly and incorporating it into planning decisions.
