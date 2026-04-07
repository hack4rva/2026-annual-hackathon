# Executive Summary

Minority-owned Business Enterprises (MBEs) attempting to become vendors for the City of Richmond face significant systemic barriers that create functional, emotional, and administrative pain points, ultimately undermining equity in procurement. The primary systemic failure is a highly fragmented and confusing onboarding process that spans at least five distinct, non-integrated digital portals: the City's Finance portal for a BPOL license, the state's SBSD portal for SWaM certification, the City's OMBD B2GNow portal for local registration, the OpenGov portal for bidding, and the iSupplier portal for payments. This siloed structure forces businesses to repeatedly enter the same information, navigate unclear sequences with conflicting timelines (e.g., a 60-business-day lead time for state SWaM certification versus a 3-5 day approval for the city's iSupplier), and manage communications from multiple channels, including an obscurely named 'RAPIDS Workflow Mailer' that can be mistaken for spam. This complexity is compounded by a history of low MBE utilization, with reports indicating as little as 5 cents of every dollar being spent with nonwhite-owned firms in a prior fiscal year, which erodes trust and discourages participation. The equity impact is disproportionately borne by MBE newcomers, micro-businesses, and sole proprietors who lack the back-office capacity to manage the high administrative load. The cognitive burden of navigating specialized acronyms and processes also presents a higher barrier for non-native English speakers and new immigrant entrepreneurs, effectively excluding the very businesses the city aims to support.

# Project Context Vendor Onboarding Wizard

The 'vendor-onboarding-wizard' is a proposed civic tech project for the City of Richmond designed to address the significant challenges minority-owned businesses (MBEs) face in navigating the complex process of becoming eligible to bid on city contracts. The project's primary goal is to help MBEs find and qualify for contracting opportunities that match their capabilities by simplifying the convoluted registration and certification journey. The proposed solution is a 5-step digital wizard that guides a business owner through the entire sequence, providing necessary documents, timelines, and direct links for each stage. The wizard aims to create a single, authoritative pathway through the city's currently fragmented systems. The five steps identified for the wizard are: 1) Obtaining a City Business License (BPOL) from the Department of Finance. 2) Applying for the state-level Small, Women-owned, and Minority-owned (SWaM) certification via the Virginia SBSD portal. 3) Registering with the City's Office of Minority Business Development (OMBD) through its B2GNow portal. 4) Creating a vendor account on OpenGov, which is the city's platform for viewing solicitations and submitting bids. 5) Registering on iSupplier, the city's Oracle-based supplier and payment portal, which requires submitting W-9 and ACH/EDI forms for accounts payable.

# Functional Job To Be Done Analysis

## Job Statement

When I, a Richmond-based MBE owner, have my business ready to sell services to the City, I want to know exactly which registrations/certifications (BPOL, SWaM, OMBD, OpenGov, iSupplier) I must complete and in what sequence, so I can become eligible and submit compliant bids without delays.

## Current Workaround

Users currently attempt to achieve this goal by manually piecing together information from various city and state websites, including the Finance department for BPOL, the state's SBSD for SWaM, the city's OMBD, and Procurement pages. They also rely on asking peers or OMBD staff for guidance and bookmarking multiple portal URLs to keep track of the process.

## Core Pain Point

The primary functional problem is the existence of fragmented portals with an unclear sequence and disparate lead times. For example, the state SWaM certification takes approximately 60 business days for an initial review. This lack of a clear, unified process often leads to users missing required documents, which in turn causes rework and the risk of slipping past critical bid submission deadlines.


# Emotional Trust Job To Be Done Analysis

## Job Statement

When I, an MBE unfamiliar with City procurement, consider registering, I want reassurance from official sources that I’m on the right path and that the City is actively supporting MBEs, so I can trust the process, invest time, and not feel set up to fail.

## Current Workaround

To seek reassurance, users currently attend events hosted by the Office of Minority Business Development (OMBD), rely on word-of-mouth from peers, scour various City of Richmond web pages for confirmation of steps, and wait for email responses from city staff.

## Core Pain Point

The primary emotional problem is a combination of anxiety about submitting to the wrong portal or missing a step, coupled with slow or opaque confirmation processes. For instance, receiving an email from an unfamiliar source like 'RAPIDS workflow' can cause confusion. This is compounded by a fear of wasting significant time and effort on certifications if they do not ultimately translate into tangible contracting opportunities.


# Systems Coordination Job To Be Done Analysis

## Job Statement

When I, a certified MBE with limited admin capacity, start pursuing bids, I want my profiles and documents to carry over or be referenced across portals (BPOL proof, SWaM certificate, OMBD profile, OpenGov vendor profile, iSupplier vendor master), so I can reduce duplicate data entry and keep everything current before deadlines.

## Current Workaround

To deal with system fragmentation, users resort to creating personal checklists and setting calendar reminders to manage the different steps and timelines. They also save PDF versions of all documents locally for repeated uploading and frequently have to contact various support lines for assistance with each separate portal.

## Core Pain Point

The primary systems problem is the high administrative burden of managing disconnected profiles across multiple, non-integrated portals. This forces users to re-enter core company information and upload the same documents (like certifications) repeatedly. This inefficiency increases the risk of errors, data inconsistencies, and missing critical deadlines or solicitation addenda.


# Mbe Owner Persona Pain Points

## Pain Point

Fragmented, multi-portal sequence with unclear handoffs and sequencing risk.

## Evidence

The vendor onboarding process is spread across at least five different systems: the City Finance portal for the Business, Professional and Occupational License (BPOL), the state's SBSD portal for SWaM certification, the City's Office of Minority Business Development (OMBD) B2GNow portal for local registration/certification, the OpenGov portal for bidding, and the iSupplier portal for payments. There is no single, unified guide that sequences these steps. For example, the state SWaM certification has a lead time of approximately 60 business days for initial review, creating a significant risk if not started well in advance of any potential bid deadlines.

## Current Breakdown

Applicants often start the process in the wrong portal or in the incorrect order (e.g., trying to register on the OpenGov bidding portal before setting up a vendor profile in iSupplier). This leads to them submitting bids without the required certifications or missing critical email confirmations from the 'RAPIDS Workflow Mailer' system, which is used for iSupplier and does not come from a standard City email address.

## Workaround

To navigate this complexity, business owners must manually bookmark multiple websites, make numerous calls and send emails to various city departments like OMBD and Procurement for clarification, attend in-person or virtual events to get information, and rely on guidance from peers who have successfully completed the process.

## Cost Of Status Quo

The tangible costs are significant delays, including a 60-90 calendar day wait for SWaM certification and a 3-5 business day approval time for the iSupplier setup. This results in lost bid cycles, wasted time on re-submissions, and many hours of administrative overhead. There is also a risk of missing important bid addenda if the business is not properly registered and following the opportunity in the OpenGov portal.

## Pain Point

Confusion between different types of 'certifications' and 'registrations' from city and state entities.

## Evidence

There is a lack of clarity between the city's local MBE/ESB certification and registry managed by OMBD via the B2GNow portal, and the state-level SWaM certification managed by the SBSD. Furthermore, these are distinct from system-specific 'registrations' for the OpenGov bidding portal and the iSupplier payment portal. Each serves a different purpose and requires different data, but the city's websites discuss them on separate pages without providing a consolidated, step-by-step guide explaining the differences and requirements.

## Current Breakdown

This confusion causes business owners to be unsure whether a local OMBD certification or a state SWaM certification is required for a specific city contract. They may pursue the wrong credential or not have the correct one in place by the bid deadline, leading to a non-compliant submission.

## Workaround

Users attempt to resolve this by attending OMBD workshops, directly calling city staff for guidance, and trying to piece together the requirements from scattered information across different city and state government web pages.

## Cost Of Status Quo

The cost includes wasted time and money pursuing a certification that may not be necessary for a particular opportunity, delays in becoming fully eligible to bid, and the potential for bid disqualification due to not meeting the specific certification requirements listed in the solicitation.

## Pain Point

Erosion of trust due to historical underutilization of MBEs and unofficial-looking communications.

## Evidence

MBE owners' trust is undermined by historical data, with local press reporting that in a prior fiscal year, only 'about 5 cents of every $1' of city spending went to nonwhite-owned companies. This fosters skepticism about whether the difficult registration process will yield any real opportunities. This is compounded by communications from multiple unfamiliar brands (OpenGov, B2GNow) and critical emails for supplier approval coming from a sender named 'RAPIDS Workflow Mailer,' which can be mistaken for phishing or spam.

## Current Breakdown

Anxiety and fear permeate the process. MBE owners worry they are submitting information to the wrong portal, that they will miss a critical email, or that they are investing significant effort into a system that is not genuinely committed to MBE success. This leads to hesitation and lower participation from new businesses.

## Workaround

To gain reassurance, business owners attend OMBD events to hear directly from city officials, rely on word-of-mouth from other MBEs, watch vendor portal tutorials, and proactively monitor multiple portals and email folders for updates.

## Cost Of Status Quo

The primary cost is lower participation from first-time MBEs who are discouraged by the perceived complexity and low expected return on investment. This creates delays, duplicated efforts, and a high cognitive load for those who do attempt the process, undermining the city's equity goals.

## Pain Point

Lack of data integration across portals requires duplicative data entry and document uploads.

## Evidence

There is no cross-portal data sharing. Core business information and documents must be entered and uploaded separately into each system: W-9 and ACH forms into iSupplier; SWaM certification documents into the SBSD portal; OMBD certification documents into B2GNow; and bid-specific information into OpenGov. The iSupplier portal further complicates this by having a session timeout of only 2 minutes of inactivity, which can cause users to lose their work.

## Current Breakdown

Business owners are forced to re-enter basic firm information (name, EIN, address, NAICS codes) multiple times. They risk losing unsaved data due to aggressive session timeouts and must upload the same documents (like certification letters) to different systems. Each system also has its own notification channel (portal messages, RAPIDS email, etc.), increasing the risk of a missed task or deadline.

## Workaround

Users create their own workarounds, such as maintaining personal checklists, setting calendar reminders for different system requirements, saving all necessary PDFs on their local computer for quick access, and contacting the separate support lines for each portal when issues arise.

## Cost Of Status Quo

This inefficiency translates directly into additional administrative hours spent per opportunity. It causes delays in onboarding and increases the risk of submitting a non-responsive bid if a required certificate or registration isn't correctly in place across all relevant systems by the deadline.


# Richmond Onboarding Process Breakdown

## Step Number

2.0

## Step Name

State SWaM Certification

## Portal Name

SBSD Portal (Virginia Department of Small Business and Supplier Diversity)

## Description

This step involves applying for state-level certification as a Small, Women-owned, and Minority-owned (SWaM) business through the Commonwealth of Virginia's automated online portal. This certification is often a key requirement or provides a competitive advantage for businesses bidding on City of Richmond contracts that have specific MBE participation goals.

## Known Issues

The most significant issue is the extremely long lead time. The state's SBSD website explicitly states that the time until an initial review for a completed application is approximately 60 business days. This equates to roughly three calendar months, creating a major sequencing risk for businesses. A firm may identify a contracting opportunity but be unable to get certified in time to meet the bid submission deadline, effectively locking them out of the opportunity.


# Portal Fragmentation And Data Redundancy

Vendors, especially Minority-owned Businesses (MBEs), face significant pain from the lack of integration between multiple city and state portals. The required sequence involves at least five separate systems: the City's Finance portal for a BPOL business license, the state's SBSD portal for SWaM certification, the City's OMBD B2GNow portal for local MBE registration, the OpenGov portal for viewing solicitations and submitting bids, and the iSupplier portal for vendor master data and payments. There is no data carryover between these platforms, forcing businesses to repeatedly enter core information like company name, EIN, address, and NAICS codes. Documents such as W-9 and ACH forms must be uploaded to the iSupplier portal, while certification documents reside in the SBSD and B2GNow systems. This redundancy is exacerbated by portal-specific friction, such as the iSupplier portal's session timing out after just two minutes of inactivity, leading to lost work and rework. This fragmentation also creates confusion between different types of 'registrations' and 'certifications', as each portal serves a different function (e.g., OpenGov for bids, iSupplier for payments) but none provide a unified view of the vendor's status.

# Communication And Transparency Gaps

A significant pain point for vendors is the poor communication and lack of transparency throughout the onboarding process. Confirmation processes are opaque and slow; for example, supplier portal approval takes 3-5 business days. A major source of confusion and mistrust stems from automated emails related to the iSupplier portal, which are sent from a system named 'RAPIDS Workflow Mailer' rather than a recognizable City of Richmond email address. The city must explicitly warn vendors about this on its website, highlighting the potential for these critical communications to be mistaken for phishing or spam. This problem is compounded by the fact that each portal uses a different notification channel—including OpenGov portal messaging, RAPIDS emails for supplier approval, and B2GNow account notices. This fragmented communication landscape raises the risk of vendors missing critical tasks or updates, and forces them to rely on piecing together information from scattered web pages, workshops, and peer guidance rather than receiving clear, proactive instructions from the city.

# Cross Cutting Equity Analysis

## Most Affected Group

Minority-owned business (MBE) newcomers, micro-businesses, very small firms, and sole proprietors who lack dedicated back-office or administrative capacity are most negatively impacted. This group also includes new immigrant entrepreneurs and non-native English speakers who face a higher cognitive load from specialized acronyms (BPOL, SWaM, OMBD, etc.), and firms with limited digital access or literacy who risk missing critical notifications from disparate systems.

## Exclusionary Mechanisms

The system disproportionately excludes certain groups through several mechanisms: 1) A high administrative burden created by a fragmented, multi-portal system that requires duplicate data entry and navigating unclear sequences with long lead times. 2) A reliance on multiple digital notification channels (e.g., OpenGov messages, 'RAPIDS Workflow Mailer' emails) that can be missed by those with limited digital literacy or mistaken for spam, leading to missed deadlines or approvals. 3) A high cognitive load due to specialized government acronyms and processes, which creates a barrier for non-native English speakers or those unfamiliar with procurement. 4) Systemic delays, such as the 60-day SWaM certification timeline, which reduce teaming opportunities for smaller MBE subcontractors who depend on timely inclusion in official directories to be found by prime contractors.

## Quantitative Evidence

Local press reports highlight a significant equity gap, with one article noting that in a prior fiscal year, only 'about 5 cents of every $1' spent by the city went to nonwhite-owned companies. This historical underutilization reinforces skepticism among MBEs that the effort of registration will lead to actual contract opportunities.


# Cost Of The Status Quo

The current fragmented system imposes significant tangible and intangible costs on businesses, particularly MBEs. Tangible costs include a substantial number of wasted administrative hours spent navigating the confusing sequence of portals, re-entering duplicate data, and managing multiple profiles. The long lead times, such as the approximately 60-business-day wait for an initial review of a state SWaM application, create major delays and can cause firms to miss bid deadlines. This leads to lost bid cycles, the need for costly re-submissions, and delayed onboarding. Intangible costs are equally damaging. The complexity and lack of transparency erode trust in the city's procurement process, fueled by historical data showing low MBE utilization. This creates anxiety and uncertainty for vendors, who fear they are using the wrong portal or that their efforts will not lead to actual opportunities. The high cognitive load and perceived complexity result in lower participation from first-time MBEs and small firms without back-office support, who may conclude the return on investment is too low, ultimately undermining the city's economic equity goals.

# Richmond Virginia Evidence

## Source Name

rva.gov (Finance Department)

## Evidence Summary

Confirms that a Business, Professional, and Occupational License (BPOL) is required for most businesses operating in the city and directs users to a separate 'Business Portal' for filings and renewals.

## Document Type

Official Website

## Url

https://www.rva.gov/finance/bpol-tax

## Source Name

sbsd.virginia.gov (SWaM)

## Evidence Summary

States that the lead time for an initial review of a SWaM (Small, Women-owned, and Minority-owned) certification application is approximately 60 business days from the submission of a complete application and all required documents.

## Document Type

Official Website

## Url

https://sbsd.virginia.gov/certification-division/swam/

## Source Name

richmondombd.diversitycompliance.com

## Evidence Summary

This is the B2GNow portal used by the City of Richmond's Office of Minority Business Development (OMBD) for vendors to register in the local database and apply for the city's own MBE/ESB certifications.

## Document Type

Official Website

## Url

https://richmondombd.diversitycompliance.com/

## Source Name

rva.gov (Procurement Services)

## Evidence Summary

Specifies that the city uses the OpenGov portal for all solicitations and that bids/proposals must be submitted electronically through that platform.

## Document Type

Official Website

## Url

https://www.rva.gov/procurement-services/solicitations

## Source Name

rva.gov (Supplier Portal)

## Evidence Summary

Details critical friction points for the iSupplier portal: a session timeout after 2 minutes of inactivity, a 3-5 business day approval process, and a warning that all email communications will come from 'RAPIDS Workflow Mailer,' not a standard City of Richmond address.

## Document Type

Official Website

## Url

https://www.rva.gov/procurement-services/supplier-portal

## Source Name

rva.gov (Supplier Registration Guide)

## Evidence Summary

Instructs vendors that they must attach completed W-9 and ACH/EDI forms directly within the iSupplier portal and explicitly states that Procurement does not accept these required documents via email.

## Document Type

PDF Guide

## Url

https://www.rva.gov/sites/default/files/2025-05/Supplier%20Registration%20Guide.pdf

## Source Name

rva.gov (Procurement Transparency Dashboard)

## Evidence Summary

Contrasts the long state SWaM timeline with the city's OMBD processing times, which are approximately 24-48 hours for registration and less than 30 days for MBE/ESB certification.

## Document Type

Official Website

## Url

https://rva.gov/procurement-services/procurement-transparency-dashboard

## Source Name

Richmond Free Press

## Evidence Summary

Reports on a study showing a historical gap in city spending, noting that only 'about 5 cents of every $1' was spent with nonwhite-owned companies in a previous fiscal year, fueling distrust in the process.

## Document Type

News Article

## Url

https://m.richmondfreepress.com/news/2022/mar/24/study-may-help-reverse-shut-out-black-businesses-c/


# Comparative Us Cities Evidence

## City Name

Baltimore, MD

## Procurement Portal System

B2GNow

## Key Finding

Uses the same B2GNow portal for diversity management as Richmond's OMBD. A city disparity study underscores the ongoing need for its M/WBE program, indicating a similar ecosystem of compliance demands and multi-system navigation.

## City Name

Pittsburgh, PA

## Procurement Portal System

OpenGov/ProcureNow (Beacon)

## Key Finding

Mirrors Richmond's use of the OpenGov platform for solicitations. Vendors must similarly register on the portal, follow specific solicitations to receive updates, and submit all bids electronically, creating analogous process steps.

## City Name

Louisville, KY

## Procurement Portal System

Bonfire

## Key Finding

Directs vendors to a separate procurement portal (Bonfire) and its dedicated support channels for technical issues. This is analogous to Richmond's use of multiple third-party systems (OpenGov, B2GNow) and highlights vendor dependence on external tech support.

## City Name

Raleigh, NC

## Procurement Portal System

Supplier Connection Portal

## Key Finding

Emphasizes a centralized supplier portal for registration where vendors must submit a W-9 and select a payment method (ACH or check). This shows a similar separation between the vendor master/payment system and the solicitation/bidding system.

## City Name

Durham, NC

## Procurement Portal System

Vendor Self Service (VSS)

## Key Finding

Parallels Richmond's iSupplier with a VSS portal for registration and W-9 attachment. Notably, it also integrates a minority/UBE designation directly within the VSS registration, combining a compliance track with the main vendor setup.

## City Name

Chattanooga, TN

## Procurement Portal System

Oracle Supplier Portal

## Key Finding

Uses an Oracle-based supplier portal, analogous to Richmond's iSupplier, which is distinct from bid portals and has explicit requirements for ACH and W-9 forms during registration.

