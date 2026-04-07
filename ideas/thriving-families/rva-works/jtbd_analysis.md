# Project Summary

## Pillar

Thriving Families

## Problem Statement

Youth Employment Pathways - Give Richmond youth one clear place to explore summer jobs, internships, and first-job guidance.

## Project Name

rva-works

## Project Description

A youth employment pathways platform with a 'First Job Kit' concept designed to help teenagers in Richmond, VA, navigate various programs and achieve work readiness. The project aims to create a single, clear online destination for Richmond youth, particularly RPS students aged 16-17, to explore and apply for summer jobs and internships. It intends to consolidate fragmented information from sources like the City of Richmond's Youth Engagement Services (YES)/Youth Works, Richmond Public Schools' Work-Based Learning (RPS WBL), and local employers. The platform will provide crucial details such as age eligibility, application deadlines, pay rates, required documentation, and transportation options. The 'First Job Kit' component will focus on addressing common first-job hurdles identified for local youth, including I-9 documentation, banking and direct deposit setup, resume creation, work-permit regulations for 14-15 year-olds, and securing parental consent.


# Functional Job To Be Done

## Situation

When summer is approaching and applications open

## Persona

a Richmond RPS student age 16–17

## Motivation

to have one place to see real, age-eligible jobs/internships, key dates, pay, documents, and transit options across YES/Youth Works, RPS WBL, and local employers

## Outcome

to apply on time and land my first paid experience

## Current Workaround

Piecing together info from the YES page/application link, school announcements, Instagram/word-of-mouth, and individual employer sites.

## Core Pain

Fragmented info and timelines; unclear age/eligibility; missed deadlines; confusion about required documents and transportation.


# Emotional Trust Job To Be Done

## Situation

When my teen is looking for a first job

## Persona

a Richmond parent/guardian

## Motivation

to have a vetted, city-backed directory with clear guidance on safety, stipends/wages, and required paperwork (I-9, bank, SSN, work-permit rules)

## Outcome

to trust the opportunity is legitimate, safe, and pays on time

## Current Workaround

Relying on friends/Facebook groups and past experiences with YES/NextUp/RPS.

## Core Pain

Uncertainty about legitimacy and pay; difficulty understanding requirements; inconsistent communication.


# Systems Coordination Job To Be Done

## Situation

When planning summer placements

## Persona

a City/nonprofit coordinator or employer partner

## Motivation

to have a shared pipeline and lightweight matching view that shows applicant status, documents, onboarding, and transit needs across YES, RPS, and partner employers

## Outcome

to fill positions equitably and on schedule without duplicate data entry

## Current Workaround

Separate portals (rva.gov forms/Cityspan), spreadsheets, email threads, and manual outreach to employers and schools.

## Core Pain

Duplicative intake; siloed data; misaligned calendars; last-minute no-shows; equity gaps by neighborhood.


# Data Questions

- Can rva-works ingest application status feeds from Youth Works RVA (YES) and/or Cityspan (NextUp) to show 'one clear place' without duplicating intake? What fields are available (age, school, neighborhood, placement, stipend, documents)?
- What privacy, consent, and data-sharing MOUs are needed among OCWB/YES, RPS, NextUp, and employers for cross-entity visibility and texting/email reminders to youth/parents?
- What KPIs will the Thriving Families pillar track for youth employment (applications started/completed, placements, on-time onboarding, retention, credentials earned)? Baselines for 2024–2025?
- Can we safely infer transportation needs (home/census tract to worksite) and surface GRTC trip info without storing sensitive PII? Any data minimization standards required by the City?

# User Questions

- For 14–17 year-olds, what are the most-used comms channels in Richmond (RPS email, SMS, Instagram, Remind, WhatsApp for families)? Preferred languages (English/Spanish/others) and accessibility needs?
- Which first-job hurdles are most common locally: I-9 docs, banking/direct deposit, resume, work-permit rules for 14–15, parent consent, or inconsistent schedules? Where should the 'First Job Kit' focus?
- What times/locations are best for in-person onboarding support (school-based, East/West End career stations, community centers) before summer starts?

# Integration Questions

- Can rva-works support SSO for RPS students/parents and link out to YES’s live application while pulling non-PII status for a unified dashboard?
- Should the platform embed NextUp’s Program Locator for summer enrichment alongside paid roles so families can compare options?
- Can we deep-link to GRTC trip planners from each placement and show zero-fare updates or alternate assistance (e.g., employer-provided passes) if fares resume?
- What is the minimal employer integration (intake form/API) to publish roles, collect youth interest, and confirm placements without forcing HR system changes?

# Equity Questions

- Which neighborhoods/schools are underrepresented in Youth Works/Work-Based Learning placements today, and what targets will we set for equitable outreach and matching?
- If zero-fare funding lapses, what’s the mitigation plan for transit-dependent youth (stipends, employer shuttles, microtransit, placement proximity rules)?
- How will we prioritize foster youth, disconnected 18–24-year-olds (YES Forward), English learners, and youth with disabilities while keeping the experience simple for all?

# Prior Art Questions

- What can we borrow from One Summer Chicago, DC SYEP, and Philly’s WorkReady: e.g., eligibility screening, document checklists, staged onboarding, two-sided matching, SMS nudges, and employer playbooks? Any off-the-shelf components (Cityspan modules, open-source portals) we can reuse?
