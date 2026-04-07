# Innovation Analysis: iBuild

## 1. Blue Ocean Reframing (ERRC Grid)

**Core assumption challenged:** Permit applicants need a faster permitting system. They don't — the permitting system (EnerGov) isn't changing. What they need is a *pre-application intelligence layer* that tells them what permits they need, what they'll cost, and how long they'll take *before* they enter the formal system. Washington DC, Philadelphia, and LA County have all built this layer on top of their existing backend systems.

| Action | Element | Rationale |
|--------|---------|-----------|
| **Eliminate** | The assumption that you need backend system access for a useful tool | Salt Lake City's OpenCounter processed 6,949 inquiries at 95% self-service *without* being deeply integrated into the backend permitting system. The wizard logic can be built from publicly available fee schedules and zoning codes. |
| **Reduce** | Counter visit frequency | Tacoma saved 30 hours/month on over-the-counter permits and 44 hours/month via ePermits. Reduce Richmond's counter traffic by answering the three questions that drive most visits: "What permits do I need?", "What will they cost?", and "How long will it take?" |
| **Raise** | Fee transparency and predictability | Berkeley and Honolulu audits found that outdated valuation tables and poor data entry controls led to significant fee variances, eroding public trust. Raise Richmond's fee transparency by publishing an estimator with clear effective dates and disclaimers. |
| **Create** | Richmond-specific permit decision engine | EnerGov (Tyler Technologies) includes a Decision Engine product that loads local ordinance data and routes applicants through branching Q&A. Richmond uses EnerGov but the Decision Engine may not be activated or public-facing. Create an independent decision engine using Richmond's published fee schedules and zoning codes. |

## 2. Rapid Ideation (Crazy 8s)

| # | Idea | Provocation Level |
|---|------|-------------------|
| 1 | **"What Permits Do I Need?" Wizard** — Homeowner or contractor enters project type (deck, fence, water heater, ADU, commercial TI) + address. System returns: required permits, estimated fees, and approximate timeline. DC DOB Permit Wizard model. | Standard |
| 2 | **Zoning Pre-Check** — Enter address → see zoning district, permitted uses, setback requirements, and any overlay restrictions (historic, flood). Uses GeoHub parcel data. Prevents the most expensive discovery failure: "your project isn't allowed here." | Standard |
| 3 | **Fee Calculator with Itemized Breakdown** — Input project type, square footage, and valuation. Output: itemized fee breakdown by department (building, planning, fire, utilities) with effective date stamp. Seattle SDCI and LA City Planning models. | Standard |
| 4 | **"How Long Will This Take?" Timeline Estimator** — Show median and 80th percentile processing times by permit type, based on historical data (if available) or published SLAs. LA County's EPIC-LA uses default turnaround time entries from EnerGov workflow templates. | Moderate |
| 5 | **Permit Package Builder** — For each project type, generate a downloadable checklist of required application documents (site plans, structural calcs, energy compliance, etc.) with specs (scale, format, content requirements). Prevents incomplete submissions. | **Provocative** |
| 6 | **"Track My Permit" Status Dashboard** — If EnerGov has a public-facing portal, aggregate permit status across all departments into a single timeline view. Show: which reviews are complete, which are pending, estimated remaining time. | Moderate |
| 7 | **Contractor Readiness Verifier** — Contractor enters their license number; system verifies active status and shows which permit types they're qualified to pull. Reduces rejection at the counter for unlicensed work. | Moderate |
| 8 | **"What Did My Neighbor Pay?" Comparables** — For a given address, show permits pulled at nearby properties: types, fees, and timelines. Normalizes expectations and prevents sticker shock. Similar to Zillow comps but for permits. | **Provocative** |

## 3. Rapid Design Sprint

**Problem sentence:** Richmond homeowners, contractors, and small business owners cannot determine what permits they need, what they'll cost, or how long they'll take without calling or visiting City offices — creating delays, surprise costs, and multiple unnecessary trips, especially for first-time applicants and small businesses.

**User journey (4 steps):**
1. User enters project type (from a menu of common scenarios) + property address
2. System checks zoning eligibility (pass/fail/conditional) and returns: required permits (sequenced), estimated fees (itemized), estimated timeline
3. User reviews the permit package checklist: required documents, formats, and submission method for each permit
4. User downloads or emails a complete "permit roadmap" — personalized to their project and address — and proceeds to formal application

**Prototype shape:** Step-by-step web wizard. Step 1: project type selector (top 10 residential + top 5 commercial scenarios). Step 2: address input with GeoHub zoning lookup. Step 3: permit matrix with fees. Step 4: downloadable PDF action plan with direct links to application forms.

**First test:** Select 5 common project types (deck, fence, water heater replacement, restaurant buildout, ADU). Have 3 contractors and 2 homeowners use the wizard. Compare the wizard's output against what a Richmond permit technician would tell them. Measure: (a) accuracy of permit list, (b) accuracy of fee estimate (±5% target for flat fees), (c) completeness of document checklist.

## 4. Opportunity Mapper

### Opportunity 1: Homeowner Self-Service Permit Discovery
- **User:** Richmond homeowners planning home improvement projects
- **Outcome:** Homeowner understands full permit requirements, costs, and timeline before contacting the City
- **Workflow:** Describe project → enter address → get zoning check + permit list + fee estimate + document checklist
- **Dependencies:** Richmond zoning code (from GeoHub), published fee schedules, permit type catalog
- **Richmond relevance:** Richmond uses EnerGov (a documented structural wall — replacement RFP pending). The permit wizard operates *upstream* of EnerGov, providing guidance before the formal application. EnerGov integration is not required for the MVP.

### Opportunity 2: Contractor Pre-Application Efficiency
- **User:** Small contractors pulling multiple permits per month in Richmond
- **Outcome:** Reduce time spent on pre-application research and counter visits; fewer incomplete submissions
- **Workflow:** Enter project details → get complete permit package requirements → submit with correct documents on first attempt
- **Dependencies:** Same data stack plus contractor-specific requirements (insurance, bonding, license verification)
- **Richmond relevance:** Tacoma saved 30 staff hours/month on over-the-counter permits. Small contractors are the backbone of Richmond's home improvement economy.

### Opportunity 3: Permit Office Workload Reduction
- **User:** Richmond building department staff handling counter and phone inquiries
- **Outcome:** 25%+ reduction in "what do I need?" inquiries through self-service deflection
- **Workflow:** Staff direct callers/walk-ins to the wizard → wizard handles discovery → staff handle complex exceptions
- **Dependencies:** Wizard accuracy high enough for staff to trust it; clear disclaimers ("subject to final review")
- **Richmond relevance:** Salt Lake City: 95% self-service, 2,121 hours saved. Orlando: 97% self-service, 12,811 hours saved. Even modest adoption in Richmond would meaningfully reduce counter workload.

## 5. Problem Scoping

| Dimension | Score (1-5) | Rationale |
|-----------|:-----------:|-----------|
| **Impact** | 4 | Addresses a universal pain point. Every city in the research reports massive self-service adoption and staff time savings. |
| **Feasibility** | 3 | Requires manually digitizing Richmond's permit requirements and fee schedules for 10-15 project types. Technically simple but content-intensive. EnerGov structural wall irrelevant — tool operates upstream. |
| **Data readiness** | 2 | Richmond's fee schedules and permit type requirements must be manually extracted from City documents. GeoHub may have zoning layers but depth is uncertain. No structured API for permit logic. |
| **Problem clarity** | 5 | Universally understood. DC, Philadelphia, LA County, Seattle, Salt Lake City, Orlando, Cincinnati, Fort Worth, and Atlanta have all built solutions. |
| **Demo-ability** | 4 | A wizard that outputs "you need these permits, they cost this much, and here's your checklist" is immediately compelling. |
| **Total** | **18/25** | |

**Weekend MVP shapes:**
- **Shape A (8 hours):** Static permit guide for 5 common Richmond project types (deck, fence, water heater, ADU, commercial tenant improvement). Each includes: required permits, estimated fees, and document checklist. No address-based logic.
- **Shape B (16 hours):** Add address-based zoning lookup using GeoHub parcel data. Dynamic permit list changes based on zoning district (e.g., historic overlay triggers additional review). Add fee calculator for the 5 project types.
- **Shape C (24 hours):** Add a timeline estimator (based on published SLAs or manual research), a "What Did My Neighbor Pay?" comparables feature (from public permit records if accessible), and a downloadable PDF permit roadmap.

## 6. Assumption Mapping

| # | Assumption | Risk (1-5) | Uncertainty (1-5) | R × U | Validation Method |
|---|-----------|:----------:|:-----------------:|:-----:|-------------------|
| 1 | Richmond's permit fee schedules and requirements are publicly available in sufficient detail to build accurate decision logic | 5 | 3 | **15** | Download Richmond's published fee schedules and building code requirements from the City website. Can you construct an accurate permit matrix for a deck project? |
| 2 | GeoHub exposes zoning district data that can be queried by address | 4 | 3 | **12** | Query GeoHub ArcGIS REST services for zoning layers. Check if zoning district + overlay information is available at the parcel level. |
| 3 | The wizard's fee estimates are accurate enough (±5% for flat fees) to be trustworthy | 4 | 4 | **16** | Estimate fees for 5 real projects using the wizard logic. Compare against actual fees charged by Richmond (call the permit office or check public records). |
| 4 | Homeowners and small contractors will trust and use a third-party permit wizard over calling the City | 3 | 3 | **9** | OpenCounter data says yes: 95-98% self-service across multiple cities. But those tools are city-endorsed. A hackathon prototype lacks official backing. |
| 5 | The EnerGov structural wall doesn't block pre-application guidance (the wizard operates upstream of the formal system) | 2 | 2 | **4** | By design, the wizard provides information *before* formal application. EnerGov integration is a post-hackathon enhancement, not an MVP requirement. |
| 6 | Richmond's permit processes are consistent enough that a decision tree can model them (vs. case-by-case discretion) | 4 | 3 | **12** | Talk to one Richmond contractor: "For a standard deck project, is the permit process predictable or does it vary by reviewer?" |

**Top 3 to validate first:**
1. **Assumption 3 (R×U=16):** Are fee estimates accurate? Berkeley and Honolulu audits found significant fee variances from outdated tables. If Richmond's published fees don't match actual charges, the wizard erodes trust. Build in disclaimers and validate against real permits.
2. **Assumption 1 (R×U=15):** Can you extract accurate permit logic from public sources? If Richmond's requirements are buried in PDFs or inconsistent across departments, building decision trees becomes impractical in a weekend.
3. **Assumption 2 (R×U=12):** Does GeoHub have zoning? Without address-based zoning checks, the tool is a generic guide, not a personalized wizard — and loses its key differentiator.

## Key Takeaway

iBuild addresses a near-universal pain point that every city in the research confirms. The evidence is overwhelming: pre-application wizards work (Salt Lake City: 95% self-service, 2,121 hours saved; Orlando: 97%, 12,811 hours saved; LA County: 616% increase in online permits). But these are mature deployments built over months or years with deep city data partnerships. The weekend build faces a content challenge, not a technology challenge: can you accurately digitize Richmond's permit requirements for 5-10 common project types in 48 hours? The EnerGov structural wall is actually irrelevant here — the tool operates upstream of the formal permitting system. The biggest risk is accuracy: Berkeley and Honolulu audits show that inaccurate fee estimates destroy public trust faster than no estimates at all. Stamp every output with an effective date and "subject to final staff review" disclaimer. A narrow, accurate wizard for 5 project types beats a broad, approximate one for 50.
