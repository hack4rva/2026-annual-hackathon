# Deep Research Queries — All 72 Scoreable Ideas

**Generated:** April 2, 2026
**Method:** Parallel AI Task API, processor=ultra, text schema (markdown reports)
**Purpose:** Ground-truth each idea with real-world evidence, prior art, failure cases, and measurable outcomes from comparable US cities. Designed to prepare ideas to survive scrutiny from Richmond civic leaders and City Hall representatives.

**Query design principles:**
- Names Richmond, VA specifically
- References the specific data source or API the idea depends on
- Asks for measurable outcomes (adoption, cost savings, user counts)
- Asks for failure cases alongside successes
- Scoped to mid-size US cities (100k-500k pop) where comparable

---

## Thriving City Hall (15 ideas)

### 1. Contract Expiry Dashboard — Score 24, Tier S
**Dir:** `thriving-city-hall/contract-expiry-dashboard`
**Query:** "Which US cities with populations between 100,000 and 500,000 have built public-facing procurement contract expiration dashboards or trackers using Socrata, open data portals, or similar structured contract datasets? For each example found, report: (1) what platform/technology was used, (2) adoption metrics among procurement staff, (3) any documented cost savings from reduced emergency procurement or improved competitive bidding, (4) impact on minority-owned or small business vendor participation, and (5) any projects that were built but abandoned or failed to gain adoption, with reasons. Include Richmond, Virginia's current procurement data landscape (Socrata dataset xqn7-jvv2) as context."

### 2. Contract Expiry Alerts — Score 22, Tier S
**Dir:** `thriving-city-hall/expiry-alerts`
**Query:** "What evidence exists that proactive email or SMS alert systems for government contract expirations reduce emergency procurement spending or improve competitive bidding outcomes in US municipal governments? Identify any city or county that has implemented automated contract renewal notification systems for procurement officers, including: technology used, measurable outcomes (cost savings, time savings, competition rates), adoption challenges, and whether push notifications outperformed dashboard-only approaches. Include any research on how missed contract renewal windows affect minority-owned business participation in government contracting."

### 3. Deterministic Service Wizard — Score 21, Tier S
**Dir:** `thriving-city-hall/service-wizard`
**Query:** "How have US cities implemented deterministic decision-tree service navigation tools (similar to GOV.UK Smart Answers) to help residents find the correct city department or service request type? Identify specific implementations in cities with 100k-500k population, including: Decatur Direct (Georgia), and any other GOV.UK Smart Answers-inspired municipal tools. For each, report: adoption metrics, reduction in misrouted service requests, impact on 311 call volume, multilingual support approach, and maintenance burden of the decision tree taxonomy. Compare outcomes of deterministic (rule-based) vs. AI/chatbot approaches to municipal service navigation. Include any failures or abandoned projects."

### 4. Contract-Payment Drift Scanner — Score 21, Tier S
**Dir:** `thriving-city-hall/contract-payment-drift-scanner`
**Query:** "Have any US municipal governments built tools that cross-reference contract metadata with payment records to detect contract overruns, payment drift, or spending that exceeds original contract values? Identify examples from cities or counties that use Socrata, open data portals, or OCDS (Open Contracting Data Standard) to monitor procurement compliance. For each example: what data was joined, what anomalies were detected, what was the financial impact of early detection, and how did procurement staff respond? Include any academic research on automated procurement anomaly detection in local government."

### 5. City Budget Dashboard — Score 21, Tier S
**Dir:** `thriving-city-hall/city-budget-dashboard`
**Query:** "What are the most successful municipal budget transparency dashboards in US cities with 100k-500k population, and what measurable impact have they had on civic engagement, budget literacy, or public trust? Identify specific platforms (Socrata, Tableau Public, OpenGov, custom builds), adoption metrics (page views, return visitors, media citations), and any documented cases where public budget dashboards influenced budget decisions or public comment. Include Richmond, Virginia's current budget data availability and any existing Tableau Public dashboards. Note any projects that were built but failed to sustain engagement."

### 6. MAP Tracker — Score 19, Tier A
**Dir:** `thriving-city-hall/map-tracker`
**Query:** "How have US cities tracked and publicly reported progress against mayoral strategic plans, action plans, or priority frameworks using technology? Identify examples of 'mayor's dashboard' or strategic plan tracker tools in cities of 100k-500k population, including: what metrics were tracked, how data was collected (manual vs. automated), public vs. internal-only access, adoption by city staff, and whether the tool survived mayoral transitions. Include any research on accountability dashboards and Goodhart's Law risks (metric gaming) in municipal government."

### 7. Council Office Routing Memo — Score 19, Tier A
**Dir:** `thriving-city-hall/council-office-routing-memo`
**Query:** "How do city council district offices in US cities route constituent service inquiries to the correct city department? Identify any tools, systems, or standardized processes that council offices use to triage and route constituent requests, including: CRM systems, shared knowledge bases, routing protocols, or memo templates. What are the most common failure modes (misrouting, delays, dropped requests)? Have any cities built tools specifically for council staff to help them navigate city department responsibilities? Include any research on the 'council office as unofficial help desk' phenomenon in local government."

### 8. Hey804 — Score 16, Tier A
**Dir:** `thriving-city-hall/hey804`
**Query:** "What outcomes have US cities achieved with AI-powered or chatbot-based 311 service request systems that accept natural language input from residents? Identify specific deployments (e.g., New Orleans 'Jazz' chatbot, Durham NC chatbot RFP, Decatur Direct), including: accuracy rates for intent classification, percentage of requests successfully routed without human intervention, resident satisfaction scores, equity concerns (language access, digital divide), and any cases where AI 311 tools were rolled back or abandoned due to accuracy or trust issues. How do these compare to traditional 311 phone and web form approaches?"

### 9. Mira — Score 15, Tier B
**Dir:** `thriving-city-hall/mira`
**Query:** "Have any US municipal governments successfully deployed AI-powered contract analysis or compliance review tools that extract and analyze information from procurement PDFs, contract documents, or enterprise content management systems like OnBase? Identify any city or county implementations, including: what document types were analyzed, accuracy rates for key data extraction (dates, amounts, clauses), staff time savings, and barriers to adoption. Include any research on the challenges of AI document extraction in government procurement, particularly with legacy ECM systems."

### 10. CivicPulse AI — Score 14, Tier B
**Dir:** `thriving-city-hall/civicpulse-ai`
**Query:** "What is the current state of AI-powered procurement intelligence platforms in US local government? Identify any municipal deployments of tools that aggregate contract data across federal (SAM.gov), state (eVA or equivalent), and local sources for procurement staff. For each: what sources were integrated, how was data quality managed across heterogeneous sources, what was the demonstrated value to procurement officers, and what were the barriers (data access, IT security review, AI policy compliance)? Include any DIT-equivalent AI use policy review processes that cities have implemented."

### 11. Vendor Contract Mgmt — Score 13, Tier B
**Dir:** `thriving-city-hall/vendor-contract-mgmt`
**Query:** "How do US cities with 100k-500k population currently manage vendor contract lifecycles, and what technology modernization efforts have been attempted? Identify specific tools or platforms used for contract management (Oracle E-Business Suite/RAPIDS, SAP, custom systems), any attempted modernizations, success/failure rates, and what made some transitions work while others stalled. Include any data on how legacy contract management systems (like Oracle RAPIDS or OnBase ECM) create barriers to transparency and efficiency in mid-size city procurement offices."

### 12. RVA Help — Score 11, Tier B
**Dir:** `thriving-city-hall/rva-help`
**Query:** "What evidence exists on the effectiveness of AI-powered service navigation tools for municipal residents, specifically those that attempt to match resident descriptions of problems to the correct city department or service? Compare AI/NLP approaches vs. structured decision trees vs. keyword search for municipal service routing. What accuracy rates have been achieved? What happens when the AI gets it wrong for a vulnerable resident? Include any equity research on AI service navigation for residents with limited English proficiency or low digital literacy."

### 13. RVA Contract Lens — Score 11, Tier B
**Dir:** `thriving-city-hall/rva-contract-lens`
**Query:** "Have any US local governments built tools that provide a unified search interface across multiple procurement data sources (local contracts, state purchasing cooperatives, federal SAM.gov registrations) for procurement staff or vendors? What data integration challenges arose from schema differences across sources? What was the demonstrated value vs. the maintenance burden of keeping multiple data feeds synchronized? Include any OCDS (Open Contracting Data Standard) adoption examples in US local government."

### 14. Text 311 — Score 10, Tier C
**Dir:** `thriving-city-hall/text-311`
**Query:** "Which US cities have successfully implemented SMS/text-based 311 service request submission, and what were the adoption rates, equity impacts, and technical requirements? Specifically: did SMS 311 reach populations underserved by web and app channels? What CRM/311 platform integrations were required (AvePoint, Dynamics 365, Salesforce, Cityworks)? Have any cities attempted SMS 311 without direct API access to their 311 backend, and if so, how? Include any cases where SMS 311 projects were blocked by vendor API limitations."

### 15. City Activity Transparency System — Special (not in IRS)
**Dir:** `thriving-city-hall/city-activity-transparency-system`
**Query:** "Have any US cities built unified 'municipal operational picture' or 'city activity transparency' platforms that aggregate real-time or near-real-time data across multiple city departments (311, permits, procurement, infrastructure projects, fleet operations) into a single dashboard or feed? Identify any implementations, including: what data sources were integrated, what presentation paradigm was used (dashboard, event stream, narrative feed, knowledge graph), what adoption looked like among both city staff and residents, and what killed projects that attempted this scope. Include any research on the 'civic operating system' or 'city data platform' concept."

---

## Thriving Built Environment (9 ideas)

### 16. StreetLights — Score 21, Tier S
**Dir:** `thriving-built-environment/streetlights`
**Query:** "How have US cities used ArcGIS/GeoHub Capital Improvement Project (CIP) data to build public-facing infrastructure project trackers, and what adoption metrics have they achieved? Identify specific implementations in cities of 100k-500k population that display streetlight, road, or infrastructure projects on interactive maps using municipal GIS data. For each: what data refresh frequency was achieved, how were project status updates communicated to residents, and did the tool reduce 311 calls about infrastructure projects? Include any examples built by high school or university students for civic hackathons."

### 17. Snow Tier Compass — Score 21, Tier S
**Dir:** `thriving-built-environment/snow-tier-compass`
**Query:** "Which US cities have built public-facing snow plow priority/tier lookup tools that let residents enter an address and see their snow removal priority level? Identify specific implementations, including: how snow tier data was digitized (from PDF maps, GIS layers, or manual entry), what platforms were used, adoption during snow events (page views, unique visitors), and impact on 311 call volume during storms. Include any cities that attempted this but abandoned it, and whether real-time plow tracking vs. static tier lookup performed better for resident satisfaction."

### 18. "What's On My Street?" — Score 19, Tier A
**Dir:** `thriving-built-environment/whats-on-my-street`
**Query:** "Which US cities have built address-based infrastructure project lookup tools that aggregate multiple data sources (CIP projects, paving schedules, utility work, VDOT/state DOT projects) into a single search interface? Identify implementations like Philadelphia StreetSmartPHL, Boston Citywide Project Tracker, or Chicago infrastructure portals. For each: how many data sources were integrated, what ETL/refresh approach was used, was the primary UI map-based or list-based, what accessibility (WCAG) compliance was achieved, and what adoption metrics were reported? Include any that failed due to data source maintenance burden."

### 19. Storefront Work-Window Brief — Score 19, Tier A
**Dir:** `thriving-built-environment/storefront-work-window-brief`
**Query:** "How have US cities communicated construction project impacts to small businesses affected by nearby infrastructure work? Identify any programs, tools, or notification systems that proactively inform storefront businesses about construction timelines, sidewalk/parking access changes, and project contacts. Include any examples of client-side PDF generators or printable brief tools used in civic contexts. What evidence exists on the economic impact of construction on adjacent small businesses, and do proactive communication tools reduce revenue loss?"

### 20. RideShift RVA — Score 14, Tier B
**Dir:** `thriving-built-environment/rideshift-rva`
**Query:** "What tools or platforms have US cities or transit agencies built to help residents understand how transportation infrastructure changes (road closures, new bike lanes, transit route changes) affect their personal commute? Identify any implementations that combine real-time or near-real-time transportation data with personalized impact assessment. What data sources were used, what adoption was achieved, and how did these tools handle the challenge of personalization without requiring user accounts or location tracking?"

### 21. Road Maintenance Fleet Tracker — Score 13, Tier B
**Dir:** `thriving-built-environment/road-maintenance-fleet-tracker`
**Query:** "Which US cities have implemented public-facing DPW fleet tracking or street service progress dashboards (snow plowing, street sweeping, pothole repair) that show residents real-time or zone-level service completion status? Identify specific implementations, including: what GPS/telemetry data was used, was it vehicle-level or zone-level, how was data shared publicly (map, dashboard, 311 integration), and what privacy or labor concerns arose from making fleet data public? Include any cases where DPW unions or staff resisted GPS tracking transparency."

### 22. All Your Bass — Score 13, Tier B
**Dir:** `thriving-built-environment/all-your-bass`
**Query:** "Have any US cities built public-facing tools that track DPW service operations (snow removal, street sweeping, leaf collection) at the neighborhood or zone level without requiring real-time vehicle GPS telemetry? What alternative data sources (zone completion reports, crew check-ins, scheduled routes) have been used to provide residents with service progress information? What was the demonstrated impact on resident satisfaction and 311 call reduction for 'when will my street be plowed/swept' inquiries?"

### 23. GRTC–Construction Conflict Detector — Score 16, Tier A
**Dir:** `thriving-built-environment/grtc-construction-conflict-detector`
**Query:** "Have any US transit agencies or cities built systems that automatically detect conflicts between active construction zones and bus stop locations or paratransit pickup points? Specifically: has any transit agency cross-referenced construction permit data with GTFS stop locations to proactively alert riders about blocked stops? What evidence exists on the impact of unannounced bus stop closures on paratransit (ADA complementary service) riders, including missed-trip penalties or 'no-show' accumulation? Include any research on CARE-equivalent paratransit penalty policies and construction-related access barriers."

### 24. ADA Detour Digital Publisher — Score 14, Tier B
**Dir:** `thriving-built-environment/ada-detour-publisher`
**Query:** "Have any US cities digitized and published ADA-compliant pedestrian detour routes from construction Work-in-Street Permits or similar permits? What tools exist for communicating sidewalk closure detours to wheelchair users, visually impaired pedestrians, or paratransit riders in digital formats (text directions, accessible web pages, screen-reader compatible maps)? Include any research on the impact of construction sidewalk closures on people with mobility disabilities, and any legal or ADA compliance requirements for digital detour notification."

---

## Thriving Neighborhoods (11 ideas)

### 25. HUD Rent-Cap Auto-Validator — Score 22, Tier S
**Dir:** `thriving-neighborhoods/hud-rent-cap-validator`
**Query:** "How do US cities and housing authorities currently validate whether publicly funded affordable housing units comply with HUD rent caps and income targeting requirements? Identify any tools, automated systems, or technology-assisted workflows that replace or supplement manual PDF-to-Excel compliance checking. What data sources are available (HUD API, LIHTC databases, local housing authority records), how frequently must compliance be verified, and what is the cost of manual compliance monitoring vs. automated approaches? Include any examples of cities where the City Auditor flagged broken compliance monitoring processes."

### 26. Site-Sign Text-Back — Score 21, Tier S
**Dir:** `thriving-neighborhoods/site-sign-text-back`
**Query:** "Have any US cities implemented SMS-based information services linked to physical zoning or development notice signs, allowing residents to text a case number and receive project details? Identify any implementations using Legistar, Accela, or similar planning/zoning platforms with SMS integration. What adoption rates were achieved? How was the SMS number publicized (printed on signs, QR codes, community outreach)? Include any research on resident engagement with physical development notice signs and barriers to participation in planning/zoning processes for residents who don't attend public hearings."

### 27. Participation Analytics Dashboard — Score 20, Tier A
**Dir:** `thriving-neighborhoods/participation-analytics-dashboard`
**Query:** "Have any US cities built analytics dashboards that measure and visualize public participation patterns in planning and zoning processes — showing which neighborhoods engage most/least, demographic representation at hearings, and participation trends over time? What data sources were used (Legistar, public comment records, hearing attendance, online engagement platforms)? What insights were generated, and did participation analytics lead to changes in outreach strategy? Include any equity-focused participation analysis tools."

### 28. Subsidy & Covenant Snapshot — Score 20, Tier A
**Dir:** `thriving-neighborhoods/subsidy-covenant-snapshot`
**Query:** "How do US cities track affordability covenants and subsidy compliance timelines for publicly funded housing? Identify any parcel-level lookup tools or databases that show what affordability restrictions are attached to specific properties, when covenants expire, and what compliance requirements remain. What data systems are used (HUD databases, local housing authority records, deed restrictions, LIHTC tracking)? Include any cases where expiring affordability covenants led to loss of affordable units, and tools built to provide early warning."

### 29. RVA Development Tracker — Score 17, Tier A
**Dir:** `thriving-neighborhoods/rva-development-tracker`
**Query:** "Which US cities have built public-facing development project trackers that aggregate zoning applications, building permits, and planning commission matters into a searchable map or database? Identify specific implementations using Legistar, Accela, or Tyler EnerGov data. For each: what data was included, how were projects geocoded to specific parcels, what was the update frequency, and what adoption did the tool achieve among residents and community organizations? Include any that integrated with community notification systems."

### 30. RVA Plotlines — Score 17, Tier A
**Dir:** `thriving-neighborhoods/rva-plotlines`
**Query:** "What tools or platforms have US cities built to help residents visualize the narrative arc of neighborhood development — connecting zoning changes, permit approvals, construction activity, and demographic shifts into a coherent timeline or story for a specific area? Identify any implementations that go beyond simple project listings to show development patterns, trends, or cumulative neighborhood change. Include any community-facing tools that combine quantitative development data with qualitative resident perspectives."

### 31. Renter-Aware Notification System — Score 17, Tier A
**Dir:** `thriving-neighborhoods/renter-aware-notifications`
**Query:** "Have any US cities built notification systems that specifically target renters (not just property owners) about development proposals, zoning changes, or infrastructure projects near their address? What are the technical and legal barriers to notifying renters about neighborhood changes (address databases that track units vs. parcels, landlord vs. tenant notification requirements)? Include any research on the participation gap between homeowners and renters in planning and zoning processes, and tools designed to close that gap."

### 32. Affordable Housing Dashboard — Score 14, Tier B
**Dir:** `thriving-neighborhoods/affordable-housing-dashboard`
**Query:** "What are the most effective public-facing affordable housing dashboards in US cities of 100k-500k population? Identify specific implementations that track affordable housing inventory, subsidized unit counts, waitlist sizes, or housing cost burden by neighborhood. What data sources were used, what metrics were most useful to residents vs. policymakers vs. housing advocates, and what adoption was achieved? Include any examples built on Tyler EnerGov or similar permitting platform data, and challenges of accessing permit-level housing data."

### 33. SIMBY — Score 15, Tier B
**Dir:** `thriving-neighborhoods/simby`
**Query:** "Have any US cities built neighborhood-level simulation or 'what-if' tools that help residents understand the potential impact of proposed development (traffic, density, school capacity, property values) before zoning decisions are made? What data inputs are required, how were models validated, and how did cities handle the risk of residents using simulation outputs to oppose development? Include any research on NIMBYism and whether better information about development impacts increases or decreases community opposition."

### 34. RVA Transformers — Score 14, Tier B
**Dir:** `thriving-neighborhoods/rva-transformers`
**Query:** "What tools have US cities built to help residents understand the cumulative impact of multiple simultaneous development projects in their neighborhood — not just individual projects, but the combined effect of several projects happening at once? Include any 'neighborhood change index' or cumulative impact assessment tools, and research on how residents experience compound development pressure differently from individual project impacts."

### 35. RVA Neighborhood Watch — Not scoreable (duplicate)
**Skipped:** Duplicate of RVA Plotlines.

---

## Thriving Economy (10 ideas)

### 36. Richmond Spend Mirror — Score 23, Tier S
**Dir:** `thriving-economy/richmond-spend-mirror`
**Query:** "How have US cities used open procurement/contract data to help minority-owned businesses (MBEs) identify contracting opportunities that match their capabilities? Identify any tools that reframe municipal spending data by NAICS code, vendor size, or certification status to serve MBE discovery. What platforms were used (Socrata, procurement portals, custom tools), what adoption rates were achieved among MBE vendors, and what impact was documented on MBE contracting rates? Include any research on the information asymmetry between incumbent contractors and new MBE vendors in municipal procurement."

### 37. Vendor Onboarding Wizard — Score 20, Tier A
**Dir:** `thriving-economy/vendor-onboarding-wizard`
**Query:** "How have US cities simplified the vendor registration and onboarding process for new government contractors, particularly small and minority-owned businesses? Identify any step-by-step wizard or guided registration tools that reduce the complexity of vendor onboarding (SAM.gov registration, eVA enrollment, local vendor portal setup, certification applications). What was the measurable impact on new vendor registration rates, time-to-first-bid, and diversity of vendor pool? Include any research on vendor registration as a barrier to MBE participation in government contracting."

### 38. Richmond Contract Navigator — Score 19, Tier A
**Dir:** `thriving-economy/richmond-contract-navigator`
**Query:** "Have any US cities built AI-powered or advanced search tools that help vendors find relevant government contracting opportunities across multiple data sources (local contracts, state cooperative purchasing, federal SAM.gov)? What matching algorithms or recommendation approaches were used, what accuracy was achieved, and did vendor-facing search tools measurably increase the number or diversity of bids received? Include any examples of vendor-facing procurement discovery tools vs. procurement-staff-facing tools, and which audience showed better adoption."

### 39. Richmond Business Launch Wizard — Score 18, Tier A
**Dir:** `thriving-economy/richmond-business-launch-wizard`
**Query:** "Which US cities have built step-by-step business startup guides or wizard tools that walk first-time entrepreneurs through the exact sequence of registrations, permits, licenses, and filings needed to legally start a business? Identify specific implementations (web tools, mobile apps, guided checklists), including: how were city-specific requirements mapped, how was the content maintained as regulations changed, what languages were supported, and what was the measured impact on new business registration rates or time-to-launch? Include any tools built specifically for immigrant or non-English-speaking entrepreneurs."

### 40. CareerBridge — Score 16, Tier A
**Dir:** `thriving-economy/career-bridge`
**Query:** "What tools or platforms have US cities or workforce development boards built to connect job seekers with employers, specifically focused on career pathway navigation (not just job listings)? Identify implementations that go beyond job boards to include skills assessment, training program matching, career pathway visualization, or employer-employee matching. What outcomes were measured (placement rates, retention, wage gains), and how did these tools compare to traditional workforce development approaches? Include any equity-focused career navigation tools for underserved populations."

### 41. Pivot Delta Map — Score 16, Tier A
**Dir:** `thriving-economy/pivot-delta-map`
**Query:** "Have any US cities or economic development organizations built geographic visualization tools that map small business registration, closure, and ownership change patterns at the neighborhood level? What data sources were used (state business registration, local business licenses, Census Business Builder), how was business activity geocoded, and what insights were generated for economic development staff or aspiring entrepreneurs? Include any 'business corridor health' or 'commercial district vitality' measurement tools."

### 42. OMBD Proactive Match Dashboard — Score 15, Tier B
**Dir:** `thriving-economy/ombd-proactive-match-dashboard`
**Query:** "How do US cities with dedicated Offices of Minority Business Development (or equivalent) currently match certified MBE vendors to upcoming contracting opportunities? Identify any proactive matching tools that go beyond directories to actively recommend opportunities based on vendor capabilities, NAICS codes, and upcoming contract renewals. What vendor directory platforms are used (B2GNow, Diversity Management Systems, custom databases), and what is the typical data export/API accessibility for these systems? Include any examples of B2GNow data being used for external-facing tools."

### 43. You Get What You Give RVA — Score 15, Tier B
**Dir:** `thriving-economy/you-get-what-you-give`
**Query:** "What tools or platforms have US cities built to encourage and track local/community spending patterns, connecting residents' purchasing decisions to local economic impact? Identify any 'buy local' technology platforms, community currency tools, or local spending trackers that cities have supported. What adoption rates were achieved, was there measurable economic impact on local businesses, and what were the main barriers to sustained engagement?"

### 44. TradePath RVA — Score 15, Tier B
**Dir:** `thriving-economy/tradepath-rva`
**Query:** "What technology tools have US cities or workforce development organizations built specifically to help residents discover and navigate pathways into skilled trades careers (construction, electrical, plumbing, HVAC, welding)? Identify platforms that connect aspiring tradespeople with apprenticeship programs, pre-apprenticeship training, union locals, or employer-sponsored training. What outcomes were measured, and how did these tools address the specific barriers to trades entry for underrepresented populations (awareness, transportation, prerequisite requirements)?"

### 45. iBuild — Score 11, Tier B
**Dir:** `thriving-economy/ibuild`
**Query:** "Have any US cities built self-service tools that help residents or small contractors understand building permit requirements before applying — predicting what permits are needed, estimated costs, and typical timelines based on project type and location? What data from permitting systems (Tyler EnerGov, Accela, OpenGov) was used, and how accurate were the predictions? Include any research on permit process opacity as a barrier to small contractor and homeowner renovation activity."

---

## Thriving Families (11 ideas)

### 46. Grant Pack Builder — Score 21, Tier S
**Dir:** `thriving-families/grant-pack-builder`
**Query:** "How do community-based organizations (CBOs) serving maternal and child health currently compile community health profiles for grant applications? Identify any tools that automate the assembly of neighborhood-level health, demographic, and economic data from public sources (VDH vital statistics, ACS, CDC WONDER, Kids Count, VDOE) into a formatted report or fact sheet. What manual effort is currently required, how many hours does a typical grant narrative data section take to compile, and what would automation save? Include any examples of 'grant data pack' or 'community profile generator' tools used by health-focused nonprofits."

### 47. RVA People Data — Score 21, Tier S
**Dir:** `thriving-families/rva-people-data`
**Query:** "What tools or dashboards have US cities or research institutions built to aggregate and visualize population-level social determinants of health data (housing, income, education, health outcomes) at the neighborhood or census tract level? Identify implementations that combine multiple public data sources into a unified community health profile. What data sources were most valuable, what was the adoption among CBOs and city agencies, and how did these tools avoid the trap of creating yet another dashboard that nobody uses? Include any tools specifically focused on Richmond, Virginia's demographic and health data landscape."

### 48. First Job SMS Kit — Score 18, Tier A
**Dir:** `thriving-families/first-job-sms-kit`
**Query:** "Have any US cities, workforce development programs, or youth-serving organizations built SMS-based tools to help teenagers prepare for their first job (labor law information, document checklists, interview preparation, transportation planning)? What evidence exists that SMS-based delivery reaches youth who don't engage with websites or apps? What content was most useful, what engagement rates were achieved, and how were tools maintained as labor laws and program information changed? Include any research on digital channel preferences of 14-18 year old job seekers in low-income communities."

### 49. GRTC Shift-Fit Scout — Score 20, Tier A
**Dir:** `thriving-families/grtc-shift-fit-scout`
**Query:** "What evidence exists that transit schedule accessibility is a primary barrier to youth employment retention in US cities, specifically for teens who depend on public buses to get to and from work? Have any transit agencies or workforce programs built tools that match job shift end times to last-bus departure times to prevent the 'missed last bus → can't get home → lose the job' failure mode? What data shows the relationship between transit-accessible employment and youth job retention rates? Include any GRTC (Greater Richmond Transit Company) specific ridership or youth employment data."

### 50. Maternal Metric Lock-In — Score 21, Tier S
**Dir:** `thriving-families/maternal-metric-lock-in`
**Query:** "How do maternal health coalitions or multi-agency partnerships in US cities currently ensure they are using consistent metric definitions when reporting on infant mortality, maternal morbidity, and related outcomes? Identify any shared metric registries, data dictionaries, or validation tools that prevent 'denominator drift' across organizations using VDH, ACS, CDC WONDER, or equivalent data sources. What specific metric definition inconsistencies have been documented in maternal health reporting, and what impact do they have on coordinated advocacy and resource allocation? Include any examples from Richmond, Virginia's Healthy Moms, Healthy Babies or similar initiatives."

### 51. Richmond Youth Hub — Score 14, Tier B
**Dir:** `thriving-families/richmond-youth-hub`
**Query:** "Which US cities have built unified youth employment program navigators that aggregate summer jobs, internships, and first-job opportunities from multiple sources (city programs, nonprofits, employers) into a single searchable platform? Identify specific implementations, including: what data curation approach was used (API aggregation, manual listing, employer self-service), how current were listings, what youth engagement metrics were achieved, and what happened to the platform after initial launch (sustained vs. abandoned)? Include any tools designed specifically for 14-18 year olds with limited work history."

### 52. Multi-Pillar AI — Score 7, Tier C
**Dir:** `thriving-families/multi-pillar-ai`
**Query:** "What evidence exists on the feasibility and value of building a single AI platform that addresses multiple, distinct civic problem domains simultaneously (e.g., youth employment + maternal health + housing)? Have any cities or civic tech organizations attempted multi-domain AI tools, and what were the outcomes? Include any research on why narrow-scope civic tech tools consistently outperform broad-scope platforms, and the specific risks of multi-domain AI in government contexts (policy review scope, data governance complexity, maintenance burden)."

### 53. Stepwise — Score 12, Tier B
**Dir:** `thriving-families/stepwise`
**Query:** "What tools have US youth-serving organizations or workforce programs built to provide step-by-step guidance for teens entering the workforce for the first time — covering documents needed (work permit, ID, Social Security card), interview preparation, first-day expectations, and workplace rights? How do these tools differ from generic job search platforms, and what evidence exists that structured guidance improves first-job success rates for youth from low-support households?"

### 54. Unboxed RVA — Score 12, Tier B
**Dir:** `thriving-families/unboxed-rva`
**Query:** "What technology tools have US cities or nonprofits built to help connect disconnected youth (ages 16-24 not in school or employment) with re-engagement pathways including GED programs, vocational training, mentorship, and employment? What outreach channels reached this population effectively, and what engagement and completion rates were achieved? Include any research on technology preferences and barriers for opportunity youth."

### 55. RVA Works — Score 12, Tier B
**Dir:** `thriving-families/rva-works`
**Query:** "What workforce development platforms have US cities built that specifically serve residents with multiple barriers to employment (transportation, childcare, criminal record, housing instability)? Identify tools that go beyond job matching to coordinate wraparound services, and measure whether technology-assisted coordination improves employment outcomes compared to traditional case management approaches."

---

## Thriving Inclusive Communities (8 ideas)

### 56. Core Eligibility Pack Builder — Score 22, Tier S
**Dir:** `thriving-inclusive-communities/core-eligibility-pack-builder`
**Query:** "Have any US social service organizations or cities built client-side (browser-based, no-server) tools that help residents compile the documents and information needed for intake across multiple social service agencies? Identify any 'eligibility document builder' or 'intake preparation' tools that generate printable PDFs without storing personal data on a server. What was the adoption among case workers and clients, did it measurably reduce intake time or client frustration, and how was the tool maintained as eligibility requirements changed? Include any HIPAA, privacy, or data minimization considerations for client-facing social service tools."

### 57. Cross-Agency Handoff Memo — Score 22, Tier S
**Dir:** `thriving-inclusive-communities/cross-agency-handoff-memo`
**Query:** "Have any US social service ecosystems implemented client-carried coordination documents — paper or digital memos that a client carries from one service agency to the next — to reduce the burden of repeating their story during intake at each new organization? Identify any implementations, including: what format was used (paper, PDF, digital card), what information was included, how was client consent managed, what impact was measured on intake time and client experience, and what privacy/HIPAA considerations shaped the design? Include any research on the 'tell your story once' concept in human services coordination."

### 58. Neighborhood Anchor Map — Score 21, Tier S
**Dir:** `thriving-inclusive-communities/neighborhood-anchor-map`
**Query:** "Have any US cities built geographic tools that map 'trusted anchor institutions' (libraries, community centers, health clinics, churches, schools) as access points for immigrant and refugee service discovery — starting from places residents already go rather than from service directories? Include any implementations that add transit accessibility overlays (GTFS bus route data) to show how reachable each anchor is from residential areas with high immigrant populations. What evidence exists that place-based service discovery outperforms directory-based approaches for immigrant communities?"

### 59. 804Me — Score 17, Tier A
**Dir:** `thriving-inclusive-communities/804me`
**Query:** "What technology tools have US cities or nonprofits built specifically to help immigrant and refugee residents discover and connect to community services without requiring account creation, personal data submission, or English proficiency? Identify any implementations that prioritize trust, anonymity, and multilingual access. What channels (web, SMS, WhatsApp, in-person kiosks) were most effective for reaching immigrant communities, and what role did community organizations play as trusted intermediaries? Include any tools used in Richmond, Virginia's immigrant service ecosystem."

### 60. Reentry 72-Hour Navigator — Score 17, Tier A
**Dir:** `thriving-inclusive-communities/reentry-72-hour-navigator`
**Query:** "What tools or resources exist to help people leaving incarceration navigate the critical first 72 hours — finding immediate shelter, food, identification documents, transit access, and reporting requirements? Identify any digital tools, printed guides, or SMS-based systems used in US cities for reentry navigation. What was the measured impact on recidivism, shelter access, or first-week stability? How were tools designed to work for people with no phone, no data plan, or limited digital literacy? Include any GRTC or Richmond-specific reentry transportation resources."

### 61. WhatsApp Service Finder Bot — Score 16, Tier A
**Dir:** `thriving-inclusive-communities/whatsapp-service-finder`
**Query:** "Have any US cities, nonprofits, or refugee resettlement agencies deployed WhatsApp-based service discovery bots or information lines for immigrant communities? What languages were supported, what services were most frequently requested, what engagement rates were achieved, and how was content kept current as services changed? Include any comparisons of WhatsApp vs. SMS vs. web-based service discovery for immigrant populations, and any Signpost or IRC (International Rescue Committee) technology deployments in US cities."

### 62. RVA Helps — Score 13, Tier B
**Dir:** `thriving-inclusive-communities/rva-helps`
**Query:** "What are the most effective technology approaches for building and maintaining comprehensive social service directories in US cities of 100k-500k population? Compare approaches: 211 systems, custom databases, community-maintained wikis, AI-curated directories. What is the typical update frequency and data staleness problem, how do directories handle service eligibility complexity, and what evidence exists that service directories actually lead to service connections (not just information delivery)? Include any data on Richmond, Virginia's 211 Virginia system and its coverage gaps."

### 63. Circle Trust — Score 11, Tier B
**Dir:** `thriving-inclusive-communities/circle-trust`
**Query:** "What technology tools have been built to facilitate trust-based community support networks — connecting residents who need help with community members willing to help — while maintaining safety, privacy, and avoiding the pitfalls of mutual aid platforms that don't scale? Include any research on the role of trust and personal relationships in immigrant community service discovery, and how technology can support (or undermine) organic community trust networks."

---

## City Storytelling (10 ideas)

### 64. Vecina — Score 19, Tier A
**Dir:** `city-storytelling/vecina`
**Query:** "What technology platforms have US cities or cultural organizations built to aggregate and surface local arts, cultural, and community events from multiple sources (CultureWorks/Localist, venue calendars, community organizations, social media) into a unified discovery experience? Identify specific implementations, including: what data sources and APIs were integrated, how was content curated (automated vs. human), what was the adoption among residents, and how did these platforms compare to existing event listing sites (Eventbrite, Facebook Events, local media)? Include any CultureWorks or Localist API integration examples."

### 65. Fulton Oral History Map — Score 18, Tier A
**Dir:** `city-storytelling/fulton-oral-history`
**Query:** "What technology tools have US cities, museums, or universities built to collect, preserve, and make accessible place-based oral histories — stories tied to specific geographic locations in a neighborhood or community? Identify implementations that combine oral history recordings with interactive maps, including: what platforms were used (StoryMap, Mapbox, custom), how were stories collected (community events, interviews, self-submission), how was community consent and cultural sensitivity managed, and what was the long-term sustainability plan? Include any projects focused on historically Black neighborhoods or communities experiencing rapid gentrification."

### 66. Public Comment Atlas — Score 20, Tier A
**Dir:** `city-storytelling/public-comment-atlas`
**Query:** "Have any US cities built geographic visualizations of public comments submitted through planning, zoning, or city council processes — mapping where civic voice comes from, which neighborhoods engage, and which are silent? Identify any implementations that extract public comment data from Legistar, Accela, or similar platforms and geocode them to specific parcels or neighborhoods. What patterns were revealed (participation hotspots vs. deserts, demographic representation), and did the visualization change how cities conducted outreach? Include any equity-focused public participation analysis tools."

### 67. Weekend Culture SMS — Score 20, Tier A
**Dir:** `city-storytelling/weekend-culture-sms`
**Query:** "Have any US cities or cultural organizations deployed SMS-based weekly event digests that push curated arts and cultural event listings to subscribers? What was the subscription growth rate, open/engagement rate, and impact on event attendance compared to email newsletters or social media? Include any comparisons of push (SMS) vs. pull (website/app) approaches for cultural event discovery, and any partnerships between cities and cultural organizations (like CultureWorks) for event data access."

### 68. What's On RVA — Score 15, Tier B
**Dir:** `city-storytelling/whats-on-rva`
**Query:** "Have any US cities deployed AI-powered event discovery or recommendation tools that go beyond simple listings to personalize cultural event suggestions based on user interests, location, or past attendance? What AI approaches were used (collaborative filtering, content-based, NLP), what event data sources were integrated, and what adoption was achieved? Include any city government AI policy review processes that would apply to an AI-powered cultural discovery tool, and whether cities have found AI adds value over simple curated listings."

### 69. Planning Commission Story Feed — Score 14, Tier B
**Dir:** `city-storytelling/planning-commission-story-feed`
**Query:** "Have any US cities built tools that translate planning commission agendas, decisions, and meeting outcomes into plain-language narrative summaries accessible to residents who don't attend hearings? Identify any implementations that convert legislative/planning jargon into readable stories or feeds, including: what AI or human curation approach was used, how was accuracy ensured, what adoption was achieved among residents, and did plain-language summaries increase community engagement in planning processes?"

### 70. Richmond Stories Online — Score 10, Tier C
**Dir:** `city-storytelling/richmond-stories-online`
**Query:** "What technology platforms have US cities or community organizations used for resident-submitted storytelling — allowing residents to share lived experiences, neighborhood histories, or community narratives through a digital platform? Identify specific implementations, including: what submission formats were supported (text, audio, video, photo), how was content moderated, what privacy protections were offered, what submission volumes were achieved, and what happened to the platform after initial launch (sustained community engagement vs. abandonment)? Include any projects that attempted to use resident stories as input to city decision-making."

### 71. Community Story Pop-Up Kit — Score 10, Tier C
**Dir:** `city-storytelling/community-story-popup-kit`
**Query:** "What technology or facilitation toolkits have been created for collecting resident stories at community events (pop-ups, festivals, community meetings) in US cities? Identify any 'story booth' or 'community recording' kits that include hardware, software, consent processes, and facilitator guides. What was the typical cost, how many stories were collected per event, how was cultural sensitivity managed, and what happened to collected stories (archived, published, used in policy)? Include StoryCorps and similar models adapted for civic contexts."

### 72. Displacement Memory Archive — Score 9, Tier C
**Dir:** `city-storytelling/displacement-memory-archive`
**Query:** "What digital archive platforms or oral history projects have been created specifically to preserve the stories and memories of communities displaced by urban renewal, gentrification, or infrastructure projects in US cities? Identify specific projects (e.g., related to Jackson Ward, Fulton, or other historically Black neighborhoods), including: what institutions led the work (universities, museums, community organizations), what funding sources sustained the project (NEH, IMLS, foundation grants), what technology platform was used, and what community engagement and long-term preservation outcomes were achieved? Include any Richmond, Virginia-specific displacement history projects."

### 73. ExploreRVA — Score 12, Tier B
**Dir:** `city-storytelling/explorerva`
**Query:** "What technology tools have US cities or tourism organizations built to help residents and visitors explore a city's neighborhoods, culture, and history through self-guided digital experiences (walking tours, neighborhood guides, cultural trails)? Identify specific implementations beyond standard tourism apps, focusing on tools that surface neighborhood-specific culture, hidden gems, and local perspectives rather than mainstream tourist attractions. What adoption was achieved among residents vs. visitors, and how was local/community content sourced and maintained?"

---

## Not Queried

- `thriving-families/unknown-corrupted` — Corrupted demo video, not scoreable
- `thriving-neighborhoods/rva-neighborhood-watch` — Duplicate of RVA Plotlines
