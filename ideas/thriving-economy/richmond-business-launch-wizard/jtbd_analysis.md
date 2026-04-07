# Report Title

Jobs To Be Done (JTBD) Analysis: Richmond Business Launch Wizard

# Executive Summary

This report presents a Jobs To Be Done (JTBD) analysis for the proposed Richmond Business Launch Wizard, a civic technology project aimed at simplifying the process of starting a business in Richmond, Virginia. First-time entrepreneurs currently face a fragmented and confusing landscape, requiring them to manually piece together information from numerous city (PDR, Finance) and state (SCC, Virginia Business One Stop) websites, forms, and offices. This leads to significant challenges, including missing critical dependencies like obtaining a Certificate of Zoning Compliance (CZC) before a business license (BPOL), uncertainty about timelines and fees, and a lack of a unified view to track application statuses across different agencies. The core pains for these entrepreneurs are not just functional but also emotional, stemming from the anxiety of making costly mistakes, facing penalties for late filings, and feeling that the city's processes are a barrier rather than a support system. This JTBD analysis deconstructs these challenges to provide a clear understanding of the user's needs, informing the design and development of a wizard that can provide a single, accurate, and dependency-ordered checklist to help entrepreneurs open legally, on time, and with confidence.

# Project Background

## Strategic Pillar

Thriving Economy

## Problem Statement

Small Business Navigation - Help first-time entrepreneurs understand steps to start a business in Richmond.

## Project Name

richmond-business-launch-wizard

## Project Description

NYC MyCity-style wizard generating personalized sequenced checklist for every permit, license, registration in correct dependency order.


# Functional Job To Be Done

## Situation

When I’m a first-time entrepreneur in Richmond picking a location and preparing to open.

## Persona

A first-time entrepreneur in Richmond.

## Motivation

To get a single, accurate sequence of city and state steps, including SCC registration, Certificate of Zoning Compliance (CZC), building/trade permits, health/ABC permits, and obtaining a Business, Professional, and Occupational License (BPOL) within 30 days.

## Outcome

So I can open my business legally and on time with no failed inspections or rework.

## Current Workaround

Entrepreneurs currently have to manually piece together information from various sources like the State Corporation Commission (SCC)/Clerk's Information System (CIS), Virginia Business One Stop, City of Richmond's Planning and Development Review (PDR) pages, PDF forms, and by making phone calls. They also rely on informal channels like forums or advice from peers.

## Core Pain

The primary frustration is missing critical dependencies, such as the requirement to obtain a Certificate of Zoning Compliance (CZC) or Certificate of Occupancy (CO) before getting a business license. This is compounded by fragmented online portals, uncertain timelines for reviews (which can take 2-3 weeks), and the risk of financial penalties if the BPOL is not acquired within 30 days of opening.


# Emotional Trust Job To Be Done

## Situation

When I’m investing my limited savings into my first storefront or home-based business.

## Persona

A first-time entrepreneur.

## Motivation

To have confidence that the checklist of steps I am following reflects Richmond’s current rules, fees, and deadlines.

## Outcome

So I can avoid costly surprises like application denials, financial penalties, or extra build-out costs, and feel that the city is a partner that wants my business to succeed.

## Current Workaround

To gain confidence, entrepreneurs currently ask city clerks, inspectors, or counselors at the Office of Minority Business Development (OMBD) or Small Business Development Centers (SBDC) to sanity-check their plans. They also bookmark scattered PDF documents from various city websites and hope they have not missed a critical step.

## Core Pain

The core emotional pain is the anxiety stemming from potentially contradictory guidance and the unreliability of versioned PDFs that may be outdated. There is a significant fear of incurring penalties (like the 10% late fee for BPOL), experiencing opening delays that drain capital, and general uncertainty about which specific permits apply to their business use case.


# Systems Coordination Job To Be Done

## Situation

When multiple agencies are involved in the business launch process, including Planning and Development Review (PDR) for Permits & Inspections, Zoning, Fire, Health, ABC, the Department of Finance, the Office of Minority Business Development (OMBD), and state-level bodies like the SCC and Virginia Tax.

## Persona

A founder or coordinator managing the launch process.

## Motivation

To have a cross-agency, dependency-ordered plan and a unified view of the status of all applications.

## Outcome

So I can coordinate all submissions, inspections, and payments efficiently across different departments without needing to backtrack or redo steps.

## Current Workaround

Founders currently use manual tools like spreadsheets to track tasks. They are forced to juggle separate submissions to different portals like the Online Permitting Portal (OPP) for permits, in-person processes for Finance items, and various state portals. They frequently have to call staff at different agencies to verify the correct sequence of operations.

## Core Pain

The central pain point is the complete lack of a unified status view across the city's OPP, the Finance department's new RVA Business Portal for BPOL, and state-level filings. This creates unclear handoffs between agencies (e.g., knowing when a completed CZC/CO officially unlocks the ability to get a BPOL) and leads to significant rework when the sequence of applications is performed incorrectly.


# Open Questions Introduction

To ensure the successful development and implementation of the Richmond Business Launch Wizard, a series of open questions must be addressed. These inquiries are designed to de-risk the project by clarifying critical unknowns across several domains. Answering these questions will provide the foundational knowledge needed to build a tool that is not only technically sound and data-driven but also genuinely meets the needs of first-time entrepreneurs in Richmond, ultimately helping them navigate the complex process of launching a business legally and efficiently.

# Data Related Questions

## Question

What is the authoritative data model for Richmond permit types in OPP (including Certificates of Zoning Compliance, Certificates of Occupancy, sign permits, trade permits) and their prerequisites? Can we access it via API or scheduled export?

## Rationale

The wizard's primary function is to create a dependency-ordered checklist. Access to a structured, authoritative data model of permits and their prerequisites is essential to build the core logic that determines the correct sequence of steps for any given business type.

## Question

Can the Finance Business Unit expose BPOL categories, rates, and documentation requirements as structured data, including the “BPOL within 30 days” rule and penalties, to drive rules logic?

## Rationale

To provide a comprehensive and accurate checklist, the wizard must incorporate specific financial obligations like the BPOL tax. Structured data on categories, rates, deadlines, and penalties is necessary to correctly inform users and help them avoid costly late fees.

## Question

How will we keep time-sensitive content current (e.g., processing times 2–3 weeks, portal upgrades, fees, forms)? What’s the change-notification source of truth?

## Rationale

The business-launch landscape is not static; fees, forms, and processing times change. This question is critical for maintaining user trust and the wizard's utility. An unreliable or outdated tool would be detrimental to entrepreneurs who are investing their limited savings.

## Question

Can the RVA Business Portal (2025) surface machine-readable statuses for BPOL filings to the wizard for real-time checklist updates?

## Rationale

A static checklist is helpful, but a dynamic one that reflects real-time progress is far more powerful. This capability would allow the wizard to update the user's checklist as they complete steps, providing a clear view of their progress and what's next.


# User Centric Questions

## Question

Which top Richmond business archetypes should the wizard optimize for first (e.g., small restaurant, retail, contractor, sidewalk vendor, home occupation, salon, professional services), based on volume and failure points?

## Rationale

To maximize the project's impact with limited resources, it's crucial to prioritize development. This question aims to identify the most common or most challenging business types for first-time entrepreneurs in Richmond, ensuring the wizard addresses the most significant needs first.

## Question

What language accessibility and reading-level targets are needed (e.g., Spanish, Vietnamese)? Any required plain-language standards for City content?

## Rationale

To be an equitable and effective tool for all of Richmond's entrepreneurs, the wizard must be accessible. This question addresses the need to understand the linguistic diversity of the target users and any city-mandated standards for clear communication, ensuring the content is understandable to everyone.

## Question

What are the most common first-time errors (e.g., starting work before permits, skipping CZC, wrong occupancy type) that we should preempt with questions/tooltips?

## Rationale

A key value of the wizard is to help users avoid costly mistakes and rework. By identifying the most common pitfalls, the tool can be designed with proactive guidance, warnings, and tooltips that steer entrepreneurs away from these errors, directly addressing a core pain point.


# Integration And Systems Questions

## Question

What is the authoritative data model for Richmond permit types in OPP (including Certificates of Zoning Compliance, Certificates of Occupancy, sign permits, trade permits) and their prerequisites? Can we access it via API or scheduled export?

## Rationale

To create a dependency-ordered checklist, the wizard's logic must be built on the official, underlying data structure of permits and their prerequisites. Accessing this model directly from the Online Permitting Portal (OPP) is crucial for accuracy and to avoid creating a system based on outdated or incomplete information.

## Question

Can the Finance Business Unit expose BPOL categories, rates, and documentation requirements as structured data, including the “BPOL within 30 days” rule and penalties, to drive rules logic?

## Rationale

The Business, Professional, and Occupational License (BPOL) is a critical, time-sensitive step with financial penalties. Exposing this information as structured data allows the wizard to automatically incorporate these rules, calculate potential fees, and provide accurate, timely warnings to the user, directly addressing a major pain point.

## Question

How will we keep time-sensitive content current (e.g., processing times 2–3 weeks, portal upgrades, fees, forms)? What’s the change-notification source of truth?

## Rationale

The value of the wizard depends on its trustworthiness. Information like processing times, fees, and form versions changes. This question addresses the vital need for a sustainable process to keep the wizard's content synchronized with the official sources of truth, preventing the tool from becoming another source of outdated information.

## Question

Can the RVA Business Portal (2025) surface machine-readable statuses for BPOL filings to the wizard for real-time checklist updates?

## Rationale

A key user need is a unified status view. This question explores the possibility of moving beyond a static checklist to a dynamic one that updates as the user completes steps in external systems like the RVA Business Portal. This integration would significantly enhance the user experience and provide real-time visibility into their progress.

## Question

Can we integrate with OPP for account linking, pre-populated applications, and status checks for CZC/permits/inspections, and with Finance for BPOL validation? What authentication is required?

## Rationale

This question probes the potential for deep integration that would reduce user effort and errors. Pre-populating applications and checking statuses directly within the wizard's workflow would make the process smoother and more efficient, requiring an understanding of the technical and security requirements for such connections.

## Question

How will the wizard incorporate state-level steps (SCC/CIS, Virginia Business One Stop, DPOR, VDACS, VDH, ABC) without duplicating or conflicting with state portals? Deep links vs. data integration?

## Rationale

Businesses must navigate both city and state requirements. This question addresses the architectural decision of how to guide users through state processes. The choice between simple deep links and more complex data integration will determine the seamlessness of the user journey and the wizard's ability to present a truly comprehensive checklist.

## Question

Can the wizard capture location context (address/APN, zoning district, use table) to recommend the correct path (e.g., when a Special Use Permit might be needed) and generate a location-specific checklist?

## Rationale

In Richmond, many requirements (like zoning compliance) are location-dependent. A generic checklist is insufficient. This question focuses on leveraging location data to provide a truly personalized and accurate checklist, which is essential for preventing costly errors related to zoning and property use.


# Equity And Accessibility Questions

## Question

What language accessibility and reading-level targets are needed (e.g., Spanish, Vietnamese)? Any required plain-language standards for City content?

## Rationale

To ensure the wizard is accessible to all of Richmond's aspiring entrepreneurs, it must be available in languages they understand and written in simple, clear terms. This question addresses the need to define specific accessibility targets to avoid excluding non-native English speakers or those with lower reading literacy.

## Question

How will the wizard surface OMBD, SBDC, Enterprise Zone/CARE, and Revolving Loan supports at the right moment (e.g., before build-out, before BPOL) for SWaM, micro, and LMI founders?

## Rationale

Many support programs for small, women-owned, minority-owned (SWaM), and low-to-moderate income (LMI) founders are underutilized because entrepreneurs don't know they exist or when to apply. This question focuses on integrating these resources contextually into the wizard to proactively connect underserved founders with critical financial and technical assistance.

## Question

What barriers most affect home occupations and micro-retailers in Richmond (fees, inspections scheduling, documentation, digital access), and how can the wizard mitigate them (fee transparency, appointment help, printable packets)?

## Rationale

Home-based businesses and micro-retailers represent a significant portion of new enterprises but face unique challenges. This question aims to identify those specific barriers and design features within the wizard—such as fee transparency or printable checklists—that can directly alleviate these pain points and support the smallest businesses.

## Question

What accommodations are needed for founders without reliable broadband or who prefer in-person help (e.g., printable checklists, SMS reminders, referrals to OMBD counselors)?

## Rationale

A purely digital solution can exclude entrepreneurs who lack reliable internet access or digital skills. This question addresses the need for an 'off-ramp' from the digital tool, ensuring that users can still benefit from the wizard's logic through features like printable summaries and clear referrals to in-person assistance, thereby bridging the digital divide.


# Prior Art And Learning Questions

## Question

Which top Richmond business archetypes should the wizard optimize for first (e.g., small restaurant, retail, contractor, sidewalk vendor, home occupation, salon, professional services), based on volume and failure points?

## Rationale

Attempting to serve all business types at once is risky. This question prioritizes development by focusing on learning from local data about which business types are most common and which face the most significant hurdles. This allows the project to deliver maximum impact with its initial release.

## Question

What are the most common first-time errors (e.g., starting work before permits, skipping CZC, wrong occupancy type) that we should preempt with questions/tooltips?

## Rationale

An effective wizard should be preventative, not just informative. By identifying and learning from the most frequent and costly mistakes entrepreneurs currently make, the wizard can be designed with specific questions, warnings, and tooltips to guide users away from these pitfalls.

## Question

Which elements of NYC’s MyCity Step-by-Step should be replicated (personalized checklist, permit/licensing consolidation, status) and which must adapt to Richmond’s CZC/BPOL specifics?

## Rationale

This question is about critically evaluating the primary source of inspiration. It's crucial to learn from the NYC model by understanding its core successful components while recognizing that a simple copy-paste will fail without adapting to Richmond's unique regulatory landscape, such as the critical CZC/BPOL dependency.

## Question

How should the wizard sequence Richmond’s unique dependencies (CZC/CO before BPOL issuance; health/ABC prerequisites) in contrast to general state guidance from Virginia Business One Stop?

## Rationale

The core value of the wizard is its correctly sequenced checklist. This question addresses the challenge of learning from and reconciling potentially conflicting or generic guidance from state-level resources (like Virginia Business One Stop) with the specific, non-negotiable dependencies of Richmond's local process. Getting this sequence right is essential for the wizard's success.


# Summary Of Entrepreneur Pain Points

First-time entrepreneurs in Richmond face a fragmented, complex, and anxiety-inducing process to legally start their businesses. The core pain stems from the lack of a single, authoritative source of information, forcing them to manually piece together requirements from numerous city and state websites (PDR, Finance, SCC, etc.), outdated PDFs, and phone calls. This leads to a high risk of missing critical dependencies, such as needing a Certificate of Zoning Compliance (CZC) before a business license (BPOL), which can cause significant delays and rework. Entrepreneurs currently use inefficient workarounds like spreadsheets and constant follow-up calls to manage the process, as there is no unified system to track application statuses across different agencies like the Online Permitting Portal (OPP) and the Finance Department's RVA Business Portal. This operational chaos creates significant emotional distress, including anxiety about contradictory information, fear of costly penalties for late filings (e.g., 10% for BPOL), and a feeling that the city's processes are a barrier to success rather than a support system.

# Key Richmond Agencies And Requirements

## Requirement Name

Business, Professional, and Occupational License (BPOL)

## Issuing Agency

City of Richmond Department of Finance

## Agency Level

City

## Purpose

A mandatory annual license for all businesses operating within the City of Richmond. New businesses are required to obtain this license within 30 days of opening to avoid a 10% penalty. A Certificate of Zoning Compliance is a prerequisite for issuance.

## Requirement Name

Certificate of Zoning Compliance (CZC)

## Issuing Agency

City of Richmond Planning and Development Review (Zoning Administration Office)

## Agency Level

City

## Purpose

A permit that certifies a business's location and operations conform to the City's Zoning Ordinance. It is typically required before a BPOL can be issued. Applications are processed through the Online Permitting Portal (OPP).

## Requirement Name

Business Entity and Trade Name Registration

## Issuing Agency

Virginia State Corporation Commission (SCC)

## Agency Level

State

## Purpose

The legal registration of a business entity (e.g., LLC, Corporation) and any associated trade names ('doing business as') with the state. This is a foundational step for establishing a legal business structure in Virginia.

## Requirement Name

Building/Trade Permits

## Issuing Agency

City of Richmond Planning and Development Review (Permits and Inspections Bureau)

## Agency Level

City

## Purpose

Permits required for any construction, renovation, or trade-specific work (e.g., electrical, plumbing) at a commercial location. Applications are managed through the city's Online Permitting Portal (OPP).

## Requirement Name

Certificate of Occupancy (CO)

## Issuing Agency

City of Richmond Planning and Development Review

## Agency Level

City

## Purpose

A certificate required for many business uses before they can legally open to the public. It confirms that a building is safe for its intended use and complies with all relevant codes after any construction or change of use.

## Requirement Name

Health Permit

## Issuing Agency

Virginia Department of Health (VDH)

## Agency Level

State

## Purpose

A mandatory permit for any business that sells or serves prepared food and/or beverages. It is a prerequisite for obtaining a city business license for such establishments.

## Requirement Name

Alcoholic Beverage License (ABC Permit)

## Issuing Agency

Virginia Alcoholic Beverage Control Authority (ABC)

## Agency Level

State

## Purpose

A required license for any business intending to sell beer, wine, or mixed beverages. This is a state-level requirement that must be met before such sales can begin.

## Requirement Name

Federal and State Tax IDs

## Issuing Agency

Virginia Business One Stop / Internal Revenue Service (IRS)

## Agency Level

State/Federal

## Purpose

Registration to obtain necessary tax identification numbers for federal and state purposes. The Virginia Business One Stop website provides an online tool to facilitate this registration process.

## Requirement Name

Home Occupation Clearance

## Issuing Agency

City of Richmond Zoning Administration Office

## Agency Level

City

## Purpose

A specific zoning clearance required for businesses operated out of a residential dwelling. It ensures the business complies with city rules and limitations for home-based operations.

## Requirement Name

Professional License/Certification

## Issuing Agency

Virginia Department of Professional and Occupational Regulation (DPOR)

## Agency Level

State

## Purpose

A state-issued license or certification required for individuals in certain regulated professions to legally offer their services to the public.

## Requirement Name

Sidewalk Vendor Permit

## Issuing Agency

City of Richmond Department of Finance

## Agency Level

City

## Purpose

A specific permit for businesses operating as vendors on public sidewalks. A key requirement is providing proof of commercial liability insurance.

## Requirement Name

Sign Permit

## Issuing Agency

City of Richmond Planning and Development Review

## Agency Level

City

## Purpose

A permit required for the installation of business signage to ensure it complies with city regulations. This is processed through the Online Permitting Portal (OPP).

## Requirement Name

Agricultural/Consumer Product Permit

## Issuing Agency

Virginia Department of Agriculture and Consumer Services (VDACS)

## Agency Level

State

## Purpose

Permits required for businesses involved with specific agricultural products, food processing, or consumer services regulated by VDACS.

## Requirement Name

Small, Women-owned, and Minority-owned (SWaM) Business Certification

## Issuing Agency

Virginia Department of Small Business and Supplier Diversity (SBSD)

## Agency Level

State

## Purpose

A state-level certification that helps enhance procurement opportunities for small, women-owned, and minority-owned businesses participating in state-funded projects.


# Conclusion And Next Steps

## Conclusion Summary

The Jobs To Be Done analysis confirms that first-time entrepreneurs in Richmond struggle with the functional job of navigating a complex, multi-agency process to open their business legally. The core challenge is the lack of a single, authoritative, and sequenced source of truth, forcing them to manually coordinate between city and state requirements. This creates significant emotional strain, including anxiety about hidden costs, penalties, and delays that could jeopardize their investment. Furthermore, the lack of system-wide coordination means there is no unified view of application statuses, leading to rework and confusion. A successful Richmond Business Launch Wizard must therefore not only provide a personalized checklist but also encode specific local dependencies (e.g., CZC before BPOL), build trust through accuracy and transparency, and ideally integrate with various agency portals to reflect real-time progress.

## Recommended Next Steps

To move forward, the project team should prioritize the following actions:

**Data:**
1. Identify and secure API or data export access to the authoritative data models for Richmond permit types (CZC, CO, etc.) and their prerequisites from the Online Permitting Portal (OPP).
2. Collaborate with the Finance Business Unit to obtain structured data on BPOL categories, rates, documentation requirements, and penalty logic.
3. Establish a process for keeping time-sensitive content (e.g., processing times, fees, forms) current by identifying the source of truth for change notifications.
4. Investigate the feasibility of using the new RVA Business Portal to receive machine-readable status updates for BPOL filings.

**User Research:**
5. Conduct research to identify and prioritize the top Richmond business archetypes (e.g., restaurant, retail, home occupation) to optimize the wizard for initial launch.
6. Define language accessibility and reading-level targets (e.g., Spanish translations, plain-language standards) for all user-facing content.
7. Research and document the most common errors made by first-time entrepreneurs to proactively address them with tooltips and guided questions.

**Integration:**
8. Explore technical integration possibilities with the city's OPP and Finance portals for account linking, pre-population of forms, and status checks, and determine authentication requirements.
9. Define a strategy for incorporating state-level steps (SCC, Virginia Business One Stop) that avoids duplication and conflict, deciding between deep linking and data integration.
10. Plan for the wizard to use location data (address/APN) to determine zoning requirements and generate a location-specific checklist.

**Equity:**
11. Design the user journey to surface financial and technical support resources (OMBD, SBDC, Enterprise Zones) at contextually relevant moments.
12. Research and design features to mitigate barriers for home-based and micro-businesses, such as fee transparency and printable information packets.
13. Ensure the solution accommodates users with limited digital access by providing features like printable checklists, SMS reminders, and clear referrals to in-person assistance.

