# Analysis Overview

This analysis focuses on the 'Small Business Navigation' problem for first-time entrepreneurs in Richmond, Virginia, addressing the challenge of understanding the complex steps required to start a business. The provided context frames this through a 'Jobs To Be Done' (JTBD) lens, identifying the functional, emotional, and systemic hurdles entrepreneurs face. The project, 'tradepath-rva', is positioned as a navigator solution specifically tailored to individuals in skilled trade careers. The core issue is the fragmented and confusing sequence of requirements across multiple city and state agencies. Entrepreneurs must navigate state-level registration with the Virginia State Corporation Commission (SCC) and Virginia Business One Stop, followed by city-level compliance, including securing a Certificate of Zoning Compliance (CZC) or Certificate of Occupancy (CO) through the Online Permit Portal (OPP), before they can even apply for the mandatory Business Professional and Occupational License (BPOL) from the Department of Finance. The 'tradepath-rva' project aims to create a clear, Richmond-centric pathway through this process, reducing costly delays, anxiety, and the duplicative effort that currently defines the experience for new business owners.

# Jtbd Functional

## Situation

When I’m preparing to launch my first skilled-trade business in Richmond and don’t know the order of steps,

## Persona

first-time entrepreneur

## Motivation

I want to see a clear, Richmond-specific checklist (SCC registration, CZC/occupancy, permits, BPOL, trade licensing/insurance),

## Outcome

so I can confidently launch without costly delays or rejections.

## Current Workaround

Ask friends/contractors, Google mixed results, call 311 or visit multiple offices, trial-and-error in OPP and BPOL forms.

## Core Pain

Fragmented guidance and sequencing (e.g., zoning/occupancy prerequisites to BPOL), unclear trade-specific requirements (contractor licensing, workers’ comp), and time lost to resubmissions.


# Jtbd Emotional Trust

## Situation

When I’m unsure whether city and state approvals will be granted (zoning fit, occupancy type, BPOL class),

## Persona

first-time entrepreneur

## Motivation

I want authoritative, plain-language guidance and status visibility,

## Outcome

so I can trust I’m compliant and avoid penalties or shutdowns.

## Current Workaround

Rely on unofficial checklists, social media groups, or consultants; repeatedly call departments for confirmation.

## Core Pain

Anxiety about making an irreversible mistake, inconsistent interpretations, fear of fines or denial after investment in leases/buildouts.


# Jtbd Systems Coordination

## Situation

When my business touches multiple agencies (Zoning, Permits & Inspections, Health/ABC if applicable, Finance/BPOL, SCC/state boards),

## Persona

first-time entrepreneur

## Motivation

I want a single Richmond-centric navigator that sequences tasks, gathers required info once, and routes me to the right portals,

## Outcome

so I can coordinate submissions efficiently.

## Current Workaround

Maintain personal spreadsheets, folders of PDFs, retype details into each system, schedule calls across offices; pay third parties.

## Core Pain

Duplicative data entry, unclear dependencies (e.g., CZC/CO before BPOL), mismatched timelines across portals, and missed requirements.


# Open Questions Data

- Can we programmatically pull the City’s Business Licenses Open Data to identify new/renewed licenses for trades, and use it for outreach and benchmarking?
- Is there an API or export from the Online Permit Portal (OPP) for application statuses (CZC, CO, permits) to power status updates in the navigator?
- What fields are required on Richmond’s BPOL application by business class, and can we pre-fill or validate them against SCC data to reduce rejections?

# Open Questions User

- Which skilled-trade personas in Richmond (e.g., sole proprietor electrician, small GC, home-based handyman) struggle most with CZC/occupancy sequencing?
- What’s the baseline digital literacy and device access for first-time trade entrepreneurs in Richmond neighborhoods we aim to reach?
- What languages and accessibility needs (e.g., Spanish, ASL, screen readers) are most common among Richmond trade founders?

# Open Questions Integration

- What integration points are feasible with Virginia Business One Stop and SCC (e.g., deep links with preselected steps vs. data exchange)?
- Can we embed or link to City of Richmond OPP task flows for CZC and occupancy, and surface required attachments/checklists contextually?
- For contractors, can we guide to State Board of Contractors and workers’ comp attestations directly from the Richmond flow to prevent BPOL delays?

# Open Questions Equity

- How can the navigator route minority and emerging small business owners to Richmond’s Office of Minority Business Development services at the right moment (pre-/post-licensing)?
- Can we automatically surface funding supports (e.g., FastForward, FANTIC, Re-Employ VA) for training/licensure costs based on user profile and ZIP code?
- How will we measure equitable outcomes (neighborhood distribution, demographic reach, license approval times) using Richmond’s open data?

# Open Questions Prior Art

- How does our approach complement, not duplicate, Virginia Business One Stop and City web guidance, especially around trade-specific steps?
- Which local providers (e.g., CCWA, unions, workforce boards) have the strongest placement pipelines we can feature in TradePath-like journeys?
- What existing City programs (e.g., TechDesk for permitting consultations) can be embedded as in-product referrals at decision points?

# Richmond Business Startup Process Summary

Starting a business in Richmond, Virginia involves a multi-step process that requires interaction with both state and city agencies. The sequence is critical, as some steps are prerequisites for others. The general process is as follows:

1.  **State-Level Registration:** The first step is to formally establish the business entity. This is done with the Virginia State Corporation Commission (SCC), where the entrepreneur selects a business type, chooses a name, designates a registered agent, and files the necessary registration documents. The Virginia Business One Stop portal is a state-provided resource designed to help organize these steps online for a one-time fee of $20, though other agency fees may apply.

2.  **City Zoning Compliance:** Before a business can be licensed to operate in Richmond, it must comply with city zoning laws. An entrepreneur must apply for and obtain a Certificate of Zoning Compliance (CZC) from the city's Zoning Administration office. This application is submitted through the city's Online Permit Portal (OPP). For certain business types, such as restaurants or day nurseries (classified as 'assembly uses'), a Certificate of Occupancy (H-CO) is required instead of a CZC, and this is also processed via the OPP. This zoning approval is a mandatory prerequisite for obtaining a city business license.

3.  **City Business Licensing:** After securing zoning approval, the entrepreneur must obtain a Business, Professional, and Occupational License (BPOL) from the City of Richmond's Department of Finance. New businesses are required to get this license within 30 days of opening. As of January 2025, the city has launched the RVA Business Portal to streamline this application process, which was previously manual. 

4.  **Trade-Specific Requirements:** For certain industries, particularly skilled trades, there are additional hurdles. For example, contractors who accept projects of $1,000 or more must register with the Virginia State Board of Contractors. Furthermore, they must comply with Virginia Workers’ Compensation Insurance regulations before the City of Richmond will issue them a business license.

# Key Agencies And Portals

## Name

Virginia State Corporation Commission (SCC)

## Type

State Agency

## Url

https://www.scc.virginia.gov/businesses/new-business-resources/

## Purpose

Guides entrepreneurs on how to register a new business at the state level, including selecting a business type, choosing a name, and filing registration documents.

## Name

Virginia Business One Stop

## Type

Online Portal

## Url

https://bos.sbsd.virginia.gov/

## Purpose

A state-level online portal that helps entrepreneurs organize all the steps to create a business in one place for a one-time registration fee.

## Name

City of Richmond Department of Finance

## Type

City Department

## Url

https://www.rva.gov/finance/bpol-tax

## Purpose

Responsible for issuing the annual Business, Professional, and Occupational License (BPOL) required for all businesses operating within the City of Richmond.

## Name

RVA Business Portal

## Type

Online Portal

## Url

https://www.rva.gov/finance/bpol-tax

## Purpose

Launched in January 2025, this is the city's new online portal for filing and renewing the BPOL tax and business license, replacing the previous manual process.

## Name

City of Richmond Department of Planning and Development Review

## Type

City Department

## Url

https://www.rva.gov/planning-development-review/permits-and-inspections

## Purpose

The overarching city department that oversees zoning, permits, and inspections. It ensures businesses comply with city zoning laws before a business license can be issued.

## Name

Zoning Administration

## Type

City Department

## Url

https://www.rva.gov/planning-development-review/zoning-administration

## Purpose

A specific office within the Department of Planning and Development Review that handles applications for Certificates of Zoning Compliances (CZCs).

## Name

Bureau of Permits and Inspections

## Type

City Department

## Url

https://www.rva.gov/planning-development-review/permits-and-inspections

## Purpose

Reviews applications and construction documents for all new and existing structures in Richmond, processing them through the Online Permit Portal.

## Name

Online Permit Portal (OPP)

## Type

Online Portal

## Url

https://www.rva.gov/planning-development-review/permits-and-inspections

## Purpose

The city's primary online system for submitting applications for Certificates of Zoning Compliance (CZCs), Certificates of Occupancy (COs), building permits, and other development-related plans.

## Name

State Board of Contractors

## Type

State Agency

## Url

https://www.rva.gov/finance/bpol-tax

## Purpose

A state-level board where contractors accepting projects of $1,000 or more must register before they can be issued a business license in Richmond.

## Name

Office of Minority Business Development

## Type

City Department

## Url

https://www.rva.gov/minority-business

## Purpose

Provides technical and business development assistance to minority-owned and emerging small businesses in Richmond.


# Identified Entrepreneur Pain Points

## Pain Point

Fragmented guidance and information

## Description

Entrepreneurs struggle because information is scattered across multiple city and state websites, with no single, clear roadmap. They are forced to rely on asking friends, searching Google for mixed results, or making multiple calls to different government offices.

## Process Stage

Entire Process

## Pain Point

Unclear sequencing of required steps

## Description

First-time entrepreneurs do not know the correct order of operations, leading to costly delays and rejections. A common example is not realizing that obtaining a Certificate of Zoning Compliance (CZC) is a mandatory prerequisite before applying for a city business license (BPOL).

## Process Stage

City Zoning and Business Licensing

## Pain Point

Duplicative data entry across multiple systems

## Description

Entrepreneurs must repeatedly enter the same business information into different, un-integrated government portals, such as the state's SCC registration, the city's Online Permit Portal (OPP) for zoning, and the city's RVA Business Portal for licensing. This is inefficient and frustrating.

## Process Stage

State Registration, City Zoning, and Business Licensing

## Pain Point

Anxiety and fear of non-compliance

## Description

The lack of clear, authoritative guidance and visibility into application status creates significant anxiety. Entrepreneurs worry about making irreversible mistakes, receiving inconsistent advice, and facing potential fines or having their business shut down after investing in leases or equipment.

## Process Stage

Entire Process

## Pain Point

Unclear dependencies and mismatched timelines

## Description

The startup process involves multiple agencies (Zoning, Permits, Finance, etc.) that have their own internal timelines and dependencies which are not clearly communicated to the applicant. This makes it difficult to coordinate submissions and plan for the business launch.

## Process Stage

City Zoning and Business Licensing

## Pain Point

Confusion over trade-specific requirements

## Description

Entrepreneurs in skilled trades face additional confusion regarding requirements specific to their industry, such as when and how to register with the State Board of Contractors or provide proof of workers' compensation, which can cause delays in getting their Richmond business license.

## Process Stage

Business Licensing


# Skilled Trades Entrepreneur Considerations

Entrepreneurs starting a business in the skilled trades in Richmond face unique challenges and additional regulatory steps beyond general business formation, which directly informs the purpose of the 'tradepath-rva' project. A primary hurdle is the multi-layered licensing requirement. In addition to the standard city BPOL, contractors who accept projects valued at $1,000 or more must register with the Virginia State Board of Contractors. Furthermore, compliance with Virginia Workers’ Compensation Insurance regulations is a mandatory prerequisite before the City of Richmond will issue a business license. The process is further complicated by zoning and occupancy requirements, which vary significantly for tradespeople. For example, a home-based handyman must navigate the specific 'Home Occupation' Certificate of Zoning Compliance (CZC) process via the Online Permit Portal (OPP), while a plumber or electrician needing a workshop must secure appropriate commercial zoning and a Certificate of Occupancy. The 'tradepath-rva' name suggests a solution that not only guides users through these business-licensing steps but also connects them to the initial career pathways, such as training and apprenticeship programs offered by organizations like the Community College Workforce Alliance (CCWA). The core pain point is the unclear sequencing and interdependence of these trade-specific state requirements and the general city business licensing process, which can lead to significant delays and frustration.

# Relevant Support Organizations

## Name

City of Richmond Office of Minority Business Development

## Focus Area

Minority-owned and emerging small businesses

## Services Offered

Provides technical and business development assistance to support the growth of minority-owned and emerging small businesses within the city of Richmond.

## Website

https://www.rva.gov/minority-business

## Name

Virginia State Corporation Commission (SCC)

## Focus Area

State-level business registration and entity formation

## Services Offered

Guides new entrepreneurs through the essential first steps of state-level business formation, including selecting a business type, choosing and registering a business name, selecting a registered agent, and filing the necessary registration documents, with an emphasis on a faster online filing process.

## Website

https://www.scc.virginia.gov/businesses/new-business-resources/

## Name

Virginia Business One Stop

## Focus Area

Centralized state-level business registration

## Services Offered

Offers a consolidated online portal where entrepreneurs can organize all the necessary state-level registration steps in one place for a one-time registration fee of $20.

## Website

https://bos.sbsd.virginia.gov/

## Name

Community College Workforce Alliance (CCWA)

## Focus Area

Skilled trades training and workforce development

## Services Offered

Provides stackable skilled trade courses, starting with the NCCER CORE credential. Offers a fully accredited Year 1 Electrical Apprenticeship program leading to a journey worker's license. Connects students to funding opportunities such as FastForward, FANTIC, and Re-Employ VA scholarships.

## Website

https://ccwatraining.org/training-for-individuals/career-paths/skilled-trades

