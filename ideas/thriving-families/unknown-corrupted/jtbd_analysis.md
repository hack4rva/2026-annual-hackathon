# Project Summary

## Pillar

Thriving Families

## Problem Statement

Youth Employment Pathways - Give Richmond youth one clear place to explore summer jobs, internships, and first-job guidance.

## Project Context

The project is rooted in Richmond's 'Thriving Families' policy pillar, which mandates connecting students to post-K-12 opportunities and aims to reduce the rate of 16-19 year olds who are not in school or employed. Currently, the city's youth employment landscape is managed by Youth Engagement Services (YES), formerly the Mayor's Youth Academy (MYA), which operates programs like Youth Works RVA, an eight-week summer program with various tracks for individuals aged 14-24. Additionally, the YES Forward program targets 18-24 year olds who are not in school or employed. The ecosystem also involves employers who can partner or sponsor participants, covering costs like transportation and uniforms. The Office of Equitable Transit and Mobility (OETM) is piloting initiatives like free rides to work and bikeshare access to mitigate commute barriers. However, the primary challenge is information fragmentation; details about programs, eligibility, and timelines are dispersed across different RVA.gov pages, FAQs, PDFs, and partner social media posts. This project aims to create a centralized, trusted digital hub for discovery and coordination to reduce this friction, enhance equity, and align program reporting with the Mayoral Action Plan (MAP) metrics.

## Location

Richmond, VA


# Jobs To Be Done Statements

## Job Type

Functional

## Persona

a Richmond Public Schools high schooler (14–19)

## Situation

summer is approaching and I’m looking for my first paid experience

## Motivation

one clear place to discover and apply to city-backed summer jobs, internships, and work-based learning tracks (like Youth Works RVA, TRIP, CIT, in-person, Virtual Earn & Learn)

## Outcome

quickly find age-eligible roles that align with my interests and meet deadlines without juggling multiple forms and websites

## Current Workaround

Ask counselors/teachers, follow scattered social posts, check RVA.gov pages, ChamberRVA partner links, general job boards; rely on word-of-mouth.

## Core Pain

Fragmented info, varying eligibility (age, school enrollment, residency), shifting timelines, unclear placement expectations and pay, transportation unknowns.

## Job Type

Emotional/Trust

## Persona

a parent/guardian in Richmond

## Situation

trying to help my teen secure a safe and constructive summer opportunity

## Motivation

a trustworthy, city-endorsed hub that clarifies eligibility, timelines, expectations, supervision, stipends, and transportation supports

## Outcome

feel confident my child is safe, learning, and not missing critical steps

## Current Workaround

Call city numbers, parse FAQs, email staff, attend info sessions if discovered.

## Core Pain

Anxiety about safety/supervision, inconsistent/dated FAQ pages, uncertainty about notifications, hours, and who pays/stipends; language access needs.

## Job Type

Systems/Coordination

## Persona

a Richmond employer or youth-serving nonprofit

## Situation

ready to host interns (16–24) or provide programming

## Motivation

a coordinated intake/matching and partner portal (roles, dates, onboarding, payroll/sponsorship, transportation supports)

## Outcome

reliably plan placements and report outcomes aligned to the City’s Thriving Families metrics

## Current Workaround

Separate forms (bit.ly and PDFs), email chains with coordinators, ad hoc interviews at Opportunity Fairs.

## Core Pain

Duplicative data entry, unclear funding/sponsorship options, coordination across agencies, limited visibility into transport or wraparound supports, uneven reporting.


# Data Questions

## Question

What unified data schema will capture age bands (14–15 vs 16–19 vs 18–24), residency, school enrollment, foster care status, track selection, placement, hours, wages/stipends, and completion aligned to MAP “Thriving Families” metrics?

## Rationale

A unified schema is essential for accurately tracking participant demographics and outcomes, ensuring the platform can measure its success against the specific goals laid out in the city's Mayoral Action Plan, such as reducing the number of youth not in school or employed.

## Potential Source

Youth Engagement Services (YES), Office of Community Wealth Building (OCWB), City of Richmond IT department

## Question

How will the platform ingest/update authoritative dates (application open/close, training, July–August placement windows) and track notifications (e.g., second week of April) across cohorts?

## Rationale

One of the core pain points for users is managing shifting timelines and deadlines. This question addresses the need for a reliable system to manage and communicate critical dates, ensuring users don't miss opportunities due to fragmented information.

## Potential Source

Youth Engagement Services (YES) program coordinators, partner organizations

## Question

What transportation fields are needed (GRTC access, bikeshare/van pilot eligibility, commute time) to surface supports automatically?

## Rationale

Transportation is a significant barrier to employment for youth. Integrating transportation data allows the platform to proactively surface relevant supports (like free rides-to-work pilots) to users, making opportunities more accessible.

## Potential Source

Office of Equitable Transit and Mobility (OETM), GRTC, Richmond's Path to Equity report


# User Questions

## Question

For teens 14–15 vs 16–19 vs 18–24 (YES Forward), what are top decision factors (pay, proximity, career interest, schedule, supervision)?

## Rationale

Understanding the varying priorities of different age groups is crucial for designing effective search filters and program descriptions that resonate with each segment, thereby increasing engagement and successful placements.

## Potential Source

Surveys and interviews with Richmond youth, school counselors, and YES program staff

## Question

What languages and accessibility features are needed per the City’s Language Access Plan to reach immigrant families?

## Rationale

To ensure equitable access and address the emotional/trust needs of all families, the platform must be accessible to non-English speakers. This aligns with city policy and removes a significant barrier for a key demographic.

## Potential Source

City of Richmond’s Language Access Plan, interviews with community organizations serving immigrant families

## Question

What trust signals (city branding, staff contacts, partner lists, testimonials) most increase parent confidence?

## Rationale

Parents and guardians are key stakeholders who need to feel confident about the safety and legitimacy of the opportunities. Identifying the most effective trust signals is essential for addressing their core emotional JTBD and encouraging them to support their child's participation.

## Potential Source

User research and focus groups with parents/guardians in Richmond


# Integration Questions

## Question

What is the minimal integration required with RVA.gov forms (Youth Works RVA application), legacy MYA assets (FAQs), and partner registration bit.ly links to avoid duplication while improving UX?

## Rationale

To create a centralized, user-friendly experience, the platform must consolidate or seamlessly link to existing, disparate application forms and information sources. This question seeks the most efficient path to improving the user journey without a costly, full-scale replacement of all backend systems.

## Potential Source

City of Richmond IT department, Youth Engagement Services (YES), Office of Community Wealth Building (OCWB)

## Question

Can the platform surface and link to transit supports (OETM free rides-to-work pilot, bikeshare access) contextually based on user profile and placement address?

## Rationale

This question explores a key value-add: moving beyond a simple list of jobs to an integrated support system. Contextual integration with transit initiatives based on a user's specific needs and location would directly address a major equity barrier.

## Potential Source

Office of Equitable Transit and Mobility (OETM), City IT department, GRTC

## Question

How will employer payroll vs hosted placements be indicated and communicated to youth and families?

## Rationale

The current system creates confusion about payment sources ('hired placements' vs 'hosted placements'). Clear technical integration and communication about payroll are necessary to manage expectations, build trust, and reduce administrative burden on families and program staff.

## Potential Source

Youth Engagement Services (YES), partner employers, City of Richmond Finance Department


# Equity Questions

## Question

How will the platform prioritize or flag supports for TANF-eligible users, foster care youth, out-of-school youth (18–24), and neighborhoods identified in Path to Equity/Richmond Connects?

## Rationale

To be truly equitable, the platform must do more than provide equal access; it must actively connect high-need populations with targeted supports and opportunities, directly aligning with the city's stated equity goals.

## Potential Source

Office of Community Wealth Building, Path to Equity report, Department of Social Services, YES Forward program

## Question

What safeguards ensure youth without photo ID or immediate proof can start applications and upload later, with guidance?

## Rationale

Documentation requirements can be a significant barrier for vulnerable youth. This question addresses the need for a flexible application process that allows users to begin exploring opportunities while providing clear guidance on how to complete requirements later.

## Potential Source

User research with community advocacy groups, legal aid organizations, and youth with lived experience

## Question

How will we handle digital divide issues (mobile-first, SMS updates, offline help at Career Stations)?

## Rationale

An online-only platform would exclude youth with limited internet or device access. This question focuses on creating a multi-channel strategy (including mobile, SMS, and in-person support) to ensure the platform is accessible to all Richmond youth, regardless of their digital resources.

## Potential Source

Richmond Public Libraries, community technology centers, user research on youth technology access and behavior


# Prior Art Questions

## Question

Which elements of current YES/Mayor’s Youth Academy processes (CIT, Opportunity Fairs, partner sponsorships) should be preserved vs redesigned?

## Rationale

Instead of replacing the entire system, it's crucial to identify and retain successful, high-value components of the existing YES program. This ensures continuity, leverages existing social capital, and focuses design efforts on the areas with the most friction.

## Potential Source

Interviews with YES staff, past participants, and partner employers

## Question

What lessons from NextUp RVA’s afterschool/summer coordination and provider network apply to internships/work-based learning discovery?

## Rationale

NextUp RVA has successfully created a coordinated system for out-of-school time programs. Analyzing their model for managing a diverse network of providers can offer valuable insights for building a similar system for employment and internship opportunities.

## Potential Source

NextUp RVA leadership, program documentation, and annual reports

## Question

Are there regional/state opportunities (Commonwealth internships, GRTC initiatives) that should be linked or federated into the hub?

## Rationale

Limiting the platform to only City of Richmond programs would be a missed opportunity. This question explores how to broaden the scope and value for users by aggregating or linking to relevant opportunities at the regional and state level.

## Potential Source

ChamberRVA, Commonwealth of Virginia government agencies, GRTC

