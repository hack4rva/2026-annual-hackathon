# Project Summary

## Pillar

Thriving Families

## Problem Statement

Youth Employment Pathways - Give Richmond youth one clear place to explore summer jobs, internships, and first-job guidance.

## Project Name

multi-pillar-ai

## Project Description

AI platform spanning youth employment and maternal health data coordination.


# Functional Job To Be Done

## Situation

When it’s March–May and I’m a Richmond Public Schools high school student (16–18) looking for a summer job or internship

## Persona

a Richmond Public Schools high school student (16–18)

## Motivation

I want one clear site that shows all Richmond youth opportunities (Youth Works RVA tracks, city agency placements, employer internships, NextUp career-readiness offerings), with eligibility, pay, locations, and transportation info

## Outcome

so I can quickly apply to a few right-fit roles before deadlines.

## Current Workaround

Checking multiple sites (RVA.gov Youth Engagement Services page, individual employer postings, RPS notices, NextUp locator), asking counselors, and relying on social media/word of mouth.

## Core Pain

Fragmented information, shifting deadlines, unclear eligibility, and uncertainty about transit to worksites.


# Emotional Trust Job To Be Done

## Situation

When I’m a parent/guardian in Richmond’s East End or Southside and my teen wants a first job

## Persona

a parent/guardian in Richmond’s East End or Southside

## Motivation

I want a trusted city-backed hub that vets employers, shows safety and mentorship details, and explains stipends and expectations

## Outcome

so I feel confident my child will be safe, supported, and paid fairly.

## Current Workaround

Calling programs (Youth Works/YES), school staff, or community orgs for reassurance; relying on anecdotes.

## Core Pain

Low trust from inconsistent info quality across sites and fear of unsafe or exploitative placements.


# Systems Coordination Job To Be Done

## Situation

When I’m a city workforce coordinator or nonprofit partner planning summer placements

## Persona

a city workforce coordinator or nonprofit partner

## Motivation

I want a shared AI-enabled platform that maps demand (youth interest, eligibility) to supply (host sites, skills, locations), integrates RPS OST and GRTC access, and captures outcomes

## Outcome

so I can coordinate equitable placements, reduce no-shows, and report results.

## Current Workaround

Spreadsheets, forms, emails, siloed databases (application forms, partner lists), manual matching.

## Core Pain

Duplicated outreach, mismatched placements, limited visibility into transportation, and time-consuming reporting.


# Data Questions

- Which datasets can be shared from Youth Works RVA (applications, eligibility, placement, attendance, stipends) and under what agreements with OCWB/YES?
- Can the platform consume RHHD maternal/child health indicators at neighborhood or ZIP level to inform equity targeting while preserving privacy (e.g., PRAMS, CHA indicators)?
- Is GRTC ridership or eligibility data for student passes available via API to estimate transit feasibility for job sites?
- What relevant City Open Data (e.g., neighborhood boundaries, employer locations) and RPS OST participation feeds can be integrated?
- What is the minimal data model to link youth, placements, mentors, transportation options, and outcomes while complying with FERPA/HIPAA where applicable?

# User Questions

- Primary personas to prioritize at launch: 14–15 (Earn & Learn), 16–18 (in-person internships), 18–24 (YES Forward/older youth)?
- What application pain points do youth report (documentation, deadlines, device/data access, interview prep)?
- What trust signals matter to parents/guardians (background checks, supervisor info, stipend schedule, safety protocols)?
- What languages and accessibility needs are common among RPS families (Spanish, Arabic, etc.)?
- How do youth prefer notifications (SMS, Instagram/Discord, email) and what cadence prevents drop-off?

# Integration Questions

- Required integrations: RVA.gov forms (application), ChamberRVA employer onboarding, NextUp program locator (career readiness), RPS OST rosters, and potential GRTC info—what technical methods are feasible (APIs, data drops, SSO)?
- How will employer partner data (host capacity, skills, schedules, zip codes) be updated and validated? Who owns source-of-truth?
- Can placement matching incorporate transit time estimates (GRTC routes, walking), worksite hours, and youth home ZIPs?

# Equity Questions

- How will the platform ensure equitable access across ZIPs 23223, 23224, 23225, 23231, etc., considering transit and digital access gaps?
- What supports will be surfaced (bus passes, uniforms, meals) and how will they be matched to youth with need?
- How will we measure equity outcomes (placements by neighborhood, race/ethnicity, income proxy, disability status) and publish transparent reports?

# Prior Art Questions

- Which existing portals (Youth Works RVA application hub, NextUp locator) should be integrated rather than duplicated?
- What lessons from other cities’ youth job portals (e.g., SuccessLink Boston, One Summer Chicago, NYC SYEP) inform matching, comms, and transportation supports?
- For maternal health data coordination, what successful city models or VDH initiatives demonstrate secure cross-domain data use for targeting supports without individual-level exposure?

# Youth Employment Ecosystem Summary

The youth employment landscape in Richmond, VA, is a multi-faceted ecosystem involving government, non-profit, and private sector partners, but it is characterized by fragmented information sources. The central municipal initiative is Youth Works RVA, an eight-week summer workforce development program managed by the Youth Engagement Services (YES) unit within the City of Richmond's Office of Community Wealth Building (OCWB). This program, formerly known as the Mayor's Youth Academy, serves residents aged 14-24 and offers several distinct tracks, including in-person internships, virtual learning, and specialized training for older youth (18-24) through its YES Forward initiative in fields like healthcare and skilled trades. A key non-profit partner is NextUp RVA, which acts as an out-of-school time (OST) intermediary. NextUp collaborates with Richmond Public Schools (RPS) and other organizations to create a more cohesive system, reduce access barriers, and runs its own 'Youth Program Locator' to help youth find afterschool and summer programs. The business community's involvement is facilitated by organizations like ChamberRVA, which partners with the city to recruit employers to provide work-based learning internships, mentorship, and financial sponsorships. Despite these programs, a core challenge for youth is the lack of a single, centralized portal, forcing them to navigate multiple websites (RVA.gov, NextUp's locator, individual employer sites) and rely on word-of-mouth to find and apply for opportunities.

# Maternal Health Context Summary

The maternal health context in Richmond, VA, is primarily managed by the Richmond City Health District (RHHD), which oversees significant public health programs and data collection efforts. A key characteristic of this landscape is the presence of known health disparities that vary by neighborhood, a fact highlighted in the 2024 Richmond and Henrico Community Health Assessment (CHA). The RHHD collects and utilizes health data through mechanisms like the Pregnancy Risk Assessment Monitoring System (PRAMS), indicating an infrastructure for monitoring maternal and child health indicators. The scale of the RHHD's operations is substantial; for instance, its Supplemental Nutrition Program for Women, Infants, and Children (WIC) served an average of 8,500 participants per month in 2024. The project context suggests a need to leverage this neighborhood-level health data to inform equity-focused targeting for other social programs, while navigating the critical privacy and security constraints (e.g., HIPAA) associated with such sensitive information.

# Accessibility Factors Analysis

## Transportation Factors

Transportation access is a critical and challenging factor for youth employment in Richmond. The primary public transit system is the GRTC, and its ridership is predominantly composed of low-income and transit-dependent individuals, with 74% of riders from households earning less than $40,000 annually. This demographic profile underscores the importance of public transit for the youth the program aims to serve. The provided context identifies uncertainty about transit to worksites as a 'core pain' for youth, and the project's open questions highlight the need to integrate GRTC route information and transit time estimates into any solution. This suggests that the viability of a job or internship for a young person is heavily dependent on its accessibility via the GRTC network, and the lack of clear, integrated transit information is a significant barrier to equitable employment access.

## Digital Access Factors

The digital divide is a significant consideration for any technology-based solution targeting Richmond youth. The project's own foundational research identifies potential 'application pain points' for youth that include a lack of consistent device and data access. Furthermore, the 'Open Questions' on equity explicitly call for the platform to consider 'digital access gaps' across different neighborhoods. This indicates a clear awareness that not all youth and families have reliable internet, smartphones, or computers. Therefore, a tech-based solution cannot be the sole method of engagement. The platform's design must account for this divide, potentially by incorporating low-bandwidth features, SMS notifications, and ensuring that critical processes are not exclusively online, to avoid exacerbating inequities and excluding youth from underserved communities.


# Key Stakeholder Organizations

## Organization Name

Office of Community Wealth Building (OCWB)

## Sector

Government

## Role In Ecosystem

Manages the City of Richmond's primary youth employment and workforce development initiatives.

## Relevant Program Or Initiative

Youth Engagement Services (YES)

## Organization Name

Youth Engagement Services (YES)

## Sector

Government

## Role In Ecosystem

The youth-serving unit within the OCWB, directly operating the city's summer youth employment program. Formerly known as the Mayor's Youth Academy.

## Relevant Program Or Initiative

Youth Works RVA

## Organization Name

NextUp RVA

## Sector

Non-profit

## Role In Ecosystem

Acts as an out-of-school time (OST) intermediary, coordinating efforts and resources to expand access to afterschool and summer programs for Richmond youth.

## Relevant Program Or Initiative

Youth Program Locator

## Organization Name

ChamberRVA

## Sector

Private

## Role In Ecosystem

Partners with the city to engage the business community, recruiting employers to provide work-based learning opportunities, mentorship, and sponsorships for youth.

## Relevant Program Or Initiative

Y.E.S. Summer Work–Based Learning partnership

## Organization Name

Richmond Public Schools (RPS)

## Sector

Government

## Role In Ecosystem

Partners with organizations like NextUp to connect students with structured learning opportunities beyond the school day, including summer programs.

## Relevant Program Or Initiative

Out-of-School Time (OST) programs

## Organization Name

City of Richmond (RVA.gov)

## Sector

Government

## Role In Ecosystem

Provides public access to city data and hosts official information and application portals for city services.

## Relevant Program Or Initiative

Open Data Portal

## Organization Name

Richmond City Health District (RHHD)

## Sector

Government

## Role In Ecosystem

The primary public health entity responsible for maternal and child health, data collection (PRAMS, CHA), and large-scale support programs.

## Relevant Program Or Initiative

WIC (Supplemental Nutrition Program for Women, Infants, and Children)

## Organization Name

GRTC (Greater Richmond Transit Company)

## Sector

Public Transit Authority

## Role In Ecosystem

Provides essential public transportation, which is a key factor in determining youth access to employment and program sites across the city.

## Relevant Program Or Initiative

Transit Access Partnership

