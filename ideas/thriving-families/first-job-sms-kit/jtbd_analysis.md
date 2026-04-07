# Project Summary And Goals

The 'first-job-sms-kit' is a civic tech project in Richmond, VA, situated within the 'Thriving Families' strategic pillar. It directly addresses the problem statement of fragmented 'Youth Employment Pathways' by aiming to provide Richmond youth with a single, clear, and accessible resource to explore summer jobs, internships, and guidance for their first job. The project is an SMS-based toolkit designed for teenagers. By texting a specific keyword, users receive step-by-step readiness information, which includes a checklist of necessary documents, sample scripts for communicating with potential employers, summaries of Virginia labor laws tailored by age group, and the locations of the nearest program offices based on the user's ZIP code. A key feature of this project is its accessibility, as it functions entirely via standard text messaging, eliminating the need for a smartphone or a dedicated application.

# Jobs To Be Done Analysis

## Job Type

Functional

## Persona

teen jobseeker

## Situation

When summer opportunities open and I’m 14–17 in Richmond

## Motivation

I want to text one number to learn what I can legally do at my age, what documents I need, and where to apply near my ZIP

## Outcome

so I can quickly secure a first paid experience that fits school and transportation.

## Current Workaround

Search rva.gov program pages, ask school staff, scroll social posts, and visit Virginia Career Works centers.

## Core Pain

Info is spread across sites; age rules/permits are confusing; office hours/locations aren’t clear; missed deadlines.


# Open Questions By Category

## Category

Data

## Questions

1) What ZIP-to-office mapping will the SMS use (e.g., routing to Virginia Career Works – Capital Region at 4914 Radford Ave 23230 vs. other satellites)?
2) What authoritative data feeds/URLs will we use for Youth Works RVA application windows, tracks by age (14–15 vs. 16–24), and info sessions?
3) How will we encode Virginia child labor restrictions for 14–15 vs. 16–17 in messages (short summaries + links) and keep them current as the Admin Code updates?
4) What is the source of truth for employment certificate steps (DOLI portal) and any local school-issued guidance we should reference?


# Functional Job Details

When summer opportunities open and I’m 14–17 in Richmond, I (teen jobseeker) want to text one number to learn what I can legally do at my age, what documents I need, and where to apply near my ZIP, so I can quickly secure a first paid experience that fits school and transportation.

*   **Current workaround**: Searching through various rva.gov program pages, asking school staff for guidance, scrolling through social media posts for opportunities, and physically visiting Virginia Career Works centers.
*   **Core pain**: Information is fragmented and spread across multiple websites and physical locations. The rules regarding age-specific work and necessary permits are confusing. It's difficult to find clear information on office hours and locations, leading to the risk of missing important application deadlines.

# Emotional Trust Job Details

When I’m about to contact an employer, I (anxious first-time applicant) want scripts, labor-law guardrails, and verified Richmond programs, so I can feel confident I’m safe, not being exploited, and making a professional first impression.

*   **Current workaround**: Copying scripts from peers or unverified online sources, and relying on hearsay or informal advice regarding work hours and job duties.
*   **Core pain**: A significant fear of saying the wrong thing to a potential employer. There is uncertainty about what tasks are legally prohibited for their age and the number of hours they are allowed to work. There is also a pervasive worry about encountering job scams or exploitative situations.

# Systems Coordination Job Details

When Youth Works/OST windows open, I (RPS counselor/OST staff) want a texting kit that routes youth by age/ZIP to the right city program, workforce center, and legal steps, so I can reduce one-off questions and ensure equitable, on-time applications.

*   **Current workaround**: Relying on manual and often inconsistent methods such as sending out email blasts, posting hallway flyers, and making individual, manual referrals to various programs and centers like Youth Engagement Services (YES), Virginia Career Works (VCW), and NextUp.
*   **Core pain**: The system for youth employment is characterized by fragmented intake processes and varying eligibility criteria across different programs. This results in staff repeatedly answering the same questions and creates an uneven awareness of opportunities across different neighborhoods, potentially leading to inequitable access for youth.

# Data Source And Management Questions

- What ZIP-to-office mapping will the SMS use (e.g., routing to Virginia Career Works – Capital Region at 4914 Radford Ave 23230 vs. other satellites)?
- What authoritative data feeds/URLs will we use for Youth Works RVA application windows, tracks by age (14–15 vs. 16–24), and info sessions?
- How will we encode Virginia child labor restrictions for 14–15 vs. 16–17 in messages (short summaries + links) and keep them current as the Admin Code updates?
- What is the source of truth for employment certificate steps (DOLI portal) and any local school-issued guidance we should reference?

# User Persona And Experience Questions

- Which Richmond youth segments will the kit prioritize first (ages 14–15 virtual Earn & Learn vs. 16–24 internships), and what languages/reading levels are needed?
- What are the common document gaps (ID, SSN, work permit for under-16) among RPS students that the checklist should target?
- What are the most common transport patterns by neighborhood/ZIP that affect “nearest office” suggestions and job-matching radius?

# Integration And Partnership Questions

- Can we obtain a basic API or stable link pattern from rva.gov for Youth Works status, and NextUp’s Program Locator for summer offerings, to deep-link from SMS?
- Can the SMS flow hand off to Virginia Career Works (Capital Region) for WIOA Youth intake or appointment scheduling, or at least include phone/URL with hours?
- Do we need opt-in agreements and contact-sharing protocols with YES/OCWB to allow a warm transfer or callback from program staff?

# Equity And Accessibility Questions

- How will we ensure accessibility (TTY relay info, multilingual prompts) and inclusion for youth without data plans/phones (library/RPS alternatives)?
- How will the kit mitigate scams and exploitative postings (clear warnings, verified program tags, quick reporting guidance)?
- What accommodations are needed for foster youth or out-of-school 18–24-year-olds targeted by YES Forward?

# Prior Art And Competitor Questions

- Which SMS civic-tech patterns (menu trees, keyword shortcuts, call scheduling, georouting) have proven effective in youth-facing flows we can replicate?
- Are there existing city texting short codes or platforms we can piggyback on (311/alerts) to speed trust and compliance?

# Richmond Youth Employment Landscape

## Program Name

Youth Works RVA

## Managing Organization

City of Richmond, Office of Community Wealth Building / Youth Engagement Services (YES)

## Target Ages

14-24

## Program Description

An eight-week summer workforce development program that engages Richmond's youth in career exploration through work-based learning. Participants gain virtual learning and hands-on experience through internships and job placements, strengthening academic, durable, and technical skills. For youth aged 14–15, the program specifically focuses on career training and workforce readiness, including an 'A Day in the Life' series to explore diverse careers.


# Virginia Youth Labor Law Summary

## Age Group

14-15 years old

## Requirement Summary

An Employment Certificate is required for youth under 16. The Virginia Department of Labor and Industry (DOLI) provides an online application system for this purpose.

## Work Hour Restrictions

The provided context does not specify the limitations on work hours (e.g., times of day, number of hours per day/week). It primarily focuses on prohibited occupations.

## Prohibited Occupations Summary

Minors in this age group are prohibited from occupations declared hazardous, including work in any mechanical establishment, on scaffolding or in construction trades, and operating elevators. In retail food service, they are prohibited from most cooking and baking tasks and from operating, cleaning, or repairing power-driven equipment like food slicers and grinders. Permitted activities include office/clerical work and cashiering.


# Analysis Of Current Teen Workflow And Pain Points

The current process for a Richmond teen seeking their first job is highly fragmented and confusing, lacking a single, clear starting point. A teen must navigate a disjointed ecosystem of information sources, including searching through city websites like rva.gov for programs such as Youth Works RVA, scrolling social media posts for announcements, asking school staff for guidance, or physically visiting Virginia Career Works centers. This information is spread out, often leading to missed deadlines and confusion. A significant pain point is the complexity of legal and administrative requirements; teens struggle to understand Virginia's child labor laws, which differ for ages 14-15 versus 16-17, and the process for obtaining a necessary employment certificate from the DOLI portal is often buried in legal jargon. This creates uncertainty about what jobs they can legally perform and what documents they need. Furthermore, practical details like the operating hours and exact locations of workforce centers are not always clear, creating logistical hurdles, especially for youth reliant on public transportation. This convoluted process generates anxiety and fear for first-time applicants, who worry about scams, exploitation, and making a poor first impression on employers. For the adults supporting them, like school counselors and OST staff, the system is equally inefficient, relying on manual referrals, email blasts, and flyers, which results in repeated questions and inequitable awareness of opportunities across different neighborhoods.

# Key Program And Service Locations

## Location Name

Virginia Career Works - Capital Region (Richmond West Center)

## Address

4914 Radford Avenue, Richmond, VA 23230

## Zip Code

23230

## Services Offered

Provides comprehensive job assistance and serves as an intake point for programs like WIOA Youth. It is a primary physical office for workforce development services in the region.

