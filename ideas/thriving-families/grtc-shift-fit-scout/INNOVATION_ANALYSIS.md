# Innovation Analysis: GRTC Shift-Fit Scout

## Idea Summary

A transit-aware job shift checker for Richmond youth. A teen enters their home address and a shift end time; the tool queries the GRTC GTFS feed and answers: "Can you catch a bus home?" If the last bus leaves at 10:15 PM and the shift ends at 10:30 PM, the tool flags the conflict before the teen accepts the job. Tier A (20/25), ranked #19 of 73 ideas. Part of Bundle 5 (GRTC Transit Overlay) with three other transit-dependent ideas.

---

## Lens 1 — Blue Ocean Reframing (ERRC Grid)

| Action | Factor | Rationale |
|--------|--------|-----------|
| **Eliminate** | Trial-and-error discovery of transit conflicts (accept job → miss bus → lose job) | Research shows 32% of youth cite transportation as reason for not participating in workforce programs (YouthBuild) |
| **Eliminate** | Manual "Can I get home?" trip planning per shift change | Transit App and Moovit offer "arrive by" but require re-checking for every schedule variation |
| **Reduce** | Youth job attrition from transit mismatch | Memphis MPO data: 32% of shifts start 3–7 AM, 11% run 9 PM–2 AM; 63% of employers require exact start/end times |
| **Reduce** | Information asymmetry between youth and employers about commute viability | Employers don't know which shifts strand bus-dependent workers |
| **Raise** | Pre-acceptance shift screening | No existing tool checks "does this specific shift work with my bus route?" before a teen commits |
| **Raise** | Safety awareness for after-dark transit | LA Metro data: only 20% of female riders feel safe at night vs. 60% during the day |
| **Create** | Address + shift time → last-bus conflict check as a single API call | Research confirms no mainstream tool offers bulk shift-to-transit-fit matching (Transit App, Moovit, RideAmigos, Swiftly all lack this) |
| **Create** | Employer-side roster scanner | Upload a weekly CSV of shift assignments → get a per-employee transit-fit report flagging who will miss the last bus |

**Core assumption challenged:** "Youth lose jobs because they're unreliable." The research reframes this: in DC's MBSYEP, employers reported a 14% year-over-year increase in "youth transportation challenges" alongside an 11% increase in "frequent absences." The problem is structural (transit schedule gaps), not behavioral (teen irresponsibility).

---

## Lens 2 — Rapid Ideation (Crazy 8s)

| # | Variant | Twist |
|---|---------|-------|
| 1 | **Last-Bus Checker** — Address + shift end time → "Yes you can get home" or "No, last bus at route X leaves at Y" | Baseline concept |
| 2 | **Shift Window Calculator** — Input address → output the latest possible shift end time that still allows a bus home, per GRTC route | Flips the question: "What's the latest I can work?" |
| 3 | **Employer Heat Map** — Map of Richmond employers color-coded by transit accessibility at closing time (10 PM, 11 PM, midnight) | 🔥 Provocative: publicly reveals which employer locations strand workers |
| 4 | **GRH (Guaranteed Ride Home) Integration** — When shift-fit fails, automatically text the youth a backup rideshare voucher funded by the employer or workforce board | Closes the gap rather than just flagging it |
| 5 | **Schedule Change Alert** — Subscribe to a route; get an SMS when GRTC changes the schedule for your route, with a re-check of your shift fit | Handles the dynamic nature of transit schedules |
| 6 | **Employer Roster Scanner** — Manager uploads shift CSV → report shows which employees will miss the last bus this week → enables schedule adjustment before it's too late | 🔥 Provocative: makes transit-fit an employer responsibility, not just a teen burden |
| 7 | **Multi-Modal Fallback** — When the last bus doesn't work, suggest bike-share + bus combo, walking route with safety score, or carpool match with another teen on the same shift | Expands beyond pure GRTC dependency |
| 8 | **Fair Workweek Transit Hook** — Tool generates a report for city council showing how many youth shifts end after last bus, supporting policy advocacy for "transit-compatible scheduling" laws | Turns data into policy leverage, modeled on NYC/Seattle Fair Workweek ordinances |

---

## Lens 3 — Rapid Design Sprint

**Problem sentence:** Richmond teens lose jobs within the first week because they accept shifts without knowing the last GRTC bus leaves before their shift ends, and no tool connects shift times to transit schedules before commitment.

**User journey (primary persona: 16-year-old applying for first retail job):**
1. Teen gets a job offer at a fast-food restaurant with a closing shift ending at 10:30 PM
2. Opens GRTC Shift-Fit Scout on phone, enters home address and work address
3. Tool queries GRTC GTFS static feed, finds nearest stop to workplace
4. Shows: "Last bus on Route 1 departs [stop name] at 10:05 PM. Your shift ends at 10:30 PM. ❌ You will miss the last bus."
5. Suggests: "Latest shift end that works: 9:45 PM (allows 20-min walk to stop + 10-min buffer)"
6. Teen negotiates with employer or chooses a different shift before accepting

**Prototype shape:** Mobile-friendly web page. Two inputs: home address, shift end time. Backend: GRTC GTFS static feed (publicly available) → nearest-stop lookup → latest departure time calculation → pass/fail response. No auth, no account.

**First test:** Pick 5 real fast-food locations along GRTC Route 1 (Broad Street). For each, check the last bus departure from the nearest stop. Compare against typical closing shift times (10 PM, 10:30 PM, 11 PM). Document how many result in a "miss the last bus" conflict.

---

## Lens 4 — Opportunity Mapper

### Pattern 1: "Pre-Hire Transit Screening"

| Dimension | Detail |
|-----------|--------|
| **User** | Richmond teens (14–18) evaluating job offers |
| **Outcome** | Prevent job acceptance when transit home is impossible; reduce first-week attrition |
| **Workflow** | Home address + shift end time → GTFS query → pass/fail with alternative shift window |
| **Dependencies** | GRTC static GTFS feed (public, well-structured); geocoding for address → nearest stop |
| **Richmond relevance** | GRTC routes have limited evening service; Route 1 (Broad St) last bus ~10:30 PM, many routes earlier |

### Pattern 2: "Employer Shift Optimization"

| Dimension | Detail |
|-----------|--------|
| **User** | Retail/restaurant managers scheduling teen workers |
| **Outcome** | Adjust closing shifts to align with last bus, reducing turnover ($1.7M–$1.9M annual savings in studied regions) |
| **Workflow** | Manager uploads shift roster CSV → tool flags employees who will miss last bus → suggests shift adjustments |
| **Dependencies** | Employer willingness to adjust schedules; GRTC GTFS data; employee home addresses (privacy sensitive) |
| **Richmond relevance** | Richmond's food service corridor along Broad Street and Carytown has high teen employment and moderate GRTC coverage |

### Pattern 3: "Policy Evidence Generator"

| Dimension | Detail |
|-----------|--------|
| **User** | Richmond workforce development staff and city council |
| **Outcome** | Quantified evidence of how many youth shifts are structurally unreachable by transit |
| **Workflow** | Aggregate analysis of employer locations × closing times × GRTC last-bus times → report showing the "gap" |
| **Dependencies** | Employer location data (Business license registry or manually curated list) |
| **Richmond relevance** | Could support advocacy for GRTC evening span extension or a municipal GRH program, modeled on Michigan's $260K "Reliable Rides" pilot |

---

## Lens 5 — Problem Scoping

| Dimension | Score (1-5) | Rationale |
|-----------|:-----------:|-----------|
| **Impact** | 5 | Directly prevents the #1 structural cause of youth job loss (transit mismatch); DC MBSYEP data confirms transportation is top employer-cited challenge |
| **Feasibility** | 4 | GRTC GTFS is public and well-structured; core logic (address → nearest stop → last departure) is straightforward; geocoding adds some complexity |
| **Data readiness** | 4 | GTFS static feed is reliable; real-time feed adds accuracy but isn't required for MVP; employer location data needs curation |
| **Problem clarity** | 5 | "Miss the last bus, lose the job" is instantly understood by every stakeholder |
| **Demo-ability** | 5 | Type address + time → get instant pass/fail. Highly visual, highly demoable in 30 seconds |
| **Total** | **23/25** | |

### Weekend MVP Shapes

- **Shape A (Minimum):** Python script: input (lat/lon, shift end time) → parse GRTC GTFS stop_times.txt → find nearest stop → return last departure time → pass/fail. CLI only.
- **Shape B (Demo-ready):** Mobile-friendly web page wrapping Shape A with address geocoding (Nominatim or Google). Visual result: green check or red X with "Last bus at [stop] departs at [time]."
- **Shape C (Stretch):** Add "Shift Window Calculator" (what's the latest I can work?), multi-route options (if Route 1 fails, try Route 2 + transfer), and a map showing the teen's home, workplace, and nearest bus stops with departure times.

---

## Lens 6 — Assumption Mapping

| # | Assumption | Risk (1-5) | Uncertainty (1-5) | R × U | Validation approach |
|---|-----------|:----------:|:-----------------:|:-----:|-------------------|
| 1 | GRTC GTFS static feed accurately reflects actual last-bus departure times | 3 | 2 | 6 | Compare GTFS stop_times for 5 stops against GRTC's published schedules on their website |
| 2 | Teens will use this tool before accepting a job (not after) | 4 | 4 | **16** | Interview 5 teens in a workforce program: at what point do they check if they can get home? |
| 3 | The "last bus" problem is a significant cause of youth job loss in Richmond specifically | 4 | 3 | **12** | Ask RVA Works or Peter Paul Development Center workforce staff if they see teens losing jobs due to transit |
| 4 | Walking distance to nearest stop is a reasonable proxy (vs. actual walking conditions, safety) | 3 | 3 | 9 | Walk 3 routes from employers to nearest stops after dark; assess safety and infrastructure |
| 5 | Employer location data for Richmond's teen-employing businesses is obtainable | 3 | 3 | 9 | Check Richmond business license database for fast-food and retail locations |
| 6 | A simple pass/fail is more useful than detailed trip planning (which Transit App already does) | 3 | 2 | 6 | Compare the user experience: ask 3 teens to use Transit App for the same task and measure time/confusion |

**Top 3 to validate first:**
1. **Teen usage timing** (R×U=16) — If teens don't check transit before accepting a job, the tool intervenes too late. Distribution through workforce programs (not app stores) may be the key.
2. **Richmond-specific evidence of transit-caused job loss** (R×U=12) — The national evidence is strong (DC MBSYEP, YouthBuild, Memphis MPO) but Richmond-specific confirmation strengthens the case.
3. **Walking safety to stops** (R×U=9) — A "reachable" stop that requires walking through an unlit area at 10 PM is not actually reachable for a teen.

---

## Key Takeaway

GRTC Shift-Fit Scout is a sharp, narrow tool that solves a well-documented structural problem — transit schedule mismatch drives youth job loss. The research base is unusually strong: Boston's 56% acceptance lift with digital notifications, DC's 14% spike in transportation challenges, Memphis's 32% early-morning shift gap, and the complete absence of any existing tool that hard-matches shift times to last-bus departures. The GRTC GTFS feed is public and well-structured, making a weekend MVP highly feasible. The critical question is distribution: the tool works only if teens encounter it before accepting a job, which means embedding it in workforce program intake (RVA Works, SYEP) rather than hoping for organic app downloads.
