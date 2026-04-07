# Executive Summary

Research into youth employment platforms and related civic technology reveals several key findings. National models like Detroit's GDYT, NYC's SYEP, and Boston's SuccessLink all serve the 14–15 age group. While all require work permits, Boston offers the most integrated support, with single-visit processing for city jobs. Specific 'permit completion rates' are not published, but a Boston study notes up to 15% of youth fail to complete onboarding due to paperwork barriers, including permits. Stable, two-sided youth/employer matching platforms have been successfully built and maintained by US cities; examples include platforms in Baltimore and Los Angeles, which are owned by city workforce departments, and Philadelphia's, which is run by a non-profit intermediary (PYN). In Richmond, VA, the Mayor's Youth Academy (MYA) brand was retired and continues as Youth Engagement Services (YES) under the Office of Community Wealth Building, running the 'Youth Works RVA' program. For transit data in Richmond, GRTC provides public access via static GTFS ZIP files, but no public developer API for real-time tracking was identified. Regarding data privacy, FERPA does not categorically block integration with school information systems; it is permissible if the platform vendor operates under a written agreement as a 'school official' with direct control by the school district. Lastly, features from state workforce navigator models are adaptable for a teen context without enterprise infrastructure; these include lightweight machine learning-based career recommendations (from NJ Career Navigator) and plain-language screeners, resource directories, and document checklists (from Washington's navigator models).

# National Youth Program Analysis

## City

Detroit

## Program Name

Grow Detroit’s Young Talent (GDYT)

## Serves 14 15 Age Band

True

## Work Permit Process Details

The Grow Detroit’s Young Talent (GDYT) program serves youth aged 14-24. It explicitly requires a work permit for all participants aged 14-17. The work permit is listed as one of the necessary documents for participation. The provided information does not indicate any in-platform or integrated system for issuing the permit; it appears to be a document the youth must acquire and provide.

## Onboarding Findings

No specific data on work permit completion rates or broader onboarding completion metrics for GDYT was found in the provided research. The focus is on the requirement of the permit as part of the necessary documentation.

## City

Boston

## Program Name

SuccessLink

## Serves 14 15 Age Band

True

## Work Permit Process Details

Boston's SuccessLink program, run by the Office of Youth Employment & Opportunity (YEO), has a well-defined work permit process. There are additional steps for 14-15 year olds, who must have a doctor or nurse practitioner sign a Certificate of Health. A key feature is the integrated support for youth employed in City of Boston agency jobs; for these positions, all steps of the permit process can be completed in a single visit to the YEO's offices, indicating a streamlined pathway where the program acts as the employer-of-record.

## Onboarding Findings

While a specific 'permit completion rate' is not published, a policy brief on the program provides a crucial related metric. It reports that significant barriers exist in the hiring paperwork process, leading to up to 15% of youth who are matched to a job failing to complete the onboarding. The challenges explicitly mentioned include locating and uploading essential documents like a work permit, social security card, and proof of residency. This figure represents an 'onboarding non-completion rate' rather than a permit-specific one, but it highlights the permit as a major hurdle.

## City

New York City

## Program Name

Summer Youth Employment Program (SYEP)

## Serves 14 15 Age Band

True

## Work Permit Process Details

New York City's Summer Youth Employment Program (SYEP) serves the 14-15 age group through a specific track called Project-Based Learning (PBL). The reviewed program pages describe this option but do not provide evidence of an integrated process for handling working papers (the equivalent of work permits) within the SYEP platform or its onboarding flow.

## Onboarding Findings

The provided research did not uncover any published data regarding work permit or working paper completion rates for NYC's SYEP. There is no mention of onboarding completion metrics or specific challenges related to documentation for the 14-15 age group.


# Work Permit Completion Rate Findings

The research across the national models in Detroit, New York City, and Boston indicates a general lack of explicitly published or tracked 'work permit completion rates.' However, a policy brief on Boston's SuccessLink program provides a significant related finding. It reports that the hiring paperwork process poses substantial barriers, to the extent that 'up to 15% of youth who are matched to a job do not complete the onboarding process.' The report specifically identifies the challenge of 'locating and uploading important documents (e.g., social security card, proof of residency, and a work permit)' as a primary cause. Therefore, while not a direct permit-only completion rate, this 15% onboarding non-completion figure for Boston is the most concrete data point available, directly linking work permit and documentation barriers to significant youth drop-off before employment begins.

# Two Sided Matching Platform Examples

## Platform Name

YouthWorks

## City

Baltimore

## Institutional Owner

Mayor's Office of Employment Development (MOED)

## Ownership Model

City Department

## Platform Name

Hire LA's Youth

## City

Los Angeles

## Institutional Owner

Economic & Workforce Development Department (EWDD)

## Ownership Model

City Department

## Platform Name

WorkReady

## City

Philadelphia

## Institutional Owner

Philadelphia Youth Network (PYN)

## Ownership Model

Non-Profit Partner


# Richmond Mya Lineage

## Former Name

Mayor's Youth Academy (MYA)

## Current Name

Youth Engagement Services (YES)

## Governing Body

Office of Community Wealth Building

## Lineage Summary

The City of Richmond's 'Mayor's Youth Academy (MYA)' was officially rebranded to 'Youth Engagement Services (YES)'. YES is the current youth-serving unit operating within the city's Office of Community Wealth Building. The program's lineage continues through YES, which now runs the 'Youth Works RVA' summer program, maintaining the core mission of youth employment and work-based learning.


# Grtc Transit Data Availability

## Static Data Format

GTFS ZIP file

## Real Time Api Available

False

## Public Facing Real Time Tool

GRTC Bus Tracker


# Ferpa And Sis Integration Analysis

## Integration Is Permissible

True

## Key Exception

School Official Exception

## Required Conditions

Integration is permissible if the third-party service provider is under the direct control of the school or district, which must be established through a written agreement. This agreement must limit the use and redisclosure of personally identifiable information (PII) from education records. The school must maintain direct control over the use and maintenance of the data.


# Adaptable Features From Navigator Models

## Model Name

NJ Career Navigator & Washington Navigator Models

## Location

New Jersey & Washington

## Core Feature

ML-based career matching and guided benefits navigation

## Adaptability Notes

Features from both models can be adapted for a lightweight teen platform. From New Jersey's Career Navigator, the ML-driven recommendations (using user-entered skills/history) and the 'Training Explorer' can be adapted using open datasets, simple skills-to-occupation matching models, and interest surveys, all hosted as web components. From Washington's navigator models, features like plain-language screening, guided help, searchable directories, appointment/referral workflows, and document checklists can be used to build a benefits/help finder for teen-specific needs such as work permits, IDs, banking, and transit passes. These can be implemented with standard web forms and lightweight databases, avoiding the need for enterprise-level infrastructure.


# Platform Ownership Model Summary

Research into sustained, two-sided youth and employer matching platforms reveals two primary institutional ownership models. The first is direct management by a municipal government department. Examples of this model include Baltimore's YouthWorks platform, which is owned and operated by the Mayor’s Office of Employment Development (MOED), and Los Angeles's Hire LA’s Youth program, run by the city's Economic & Workforce Development Department (EWDD). The second observed model involves a designated non-profit partner acting as an intermediary. This is exemplified by Philadelphia's WorkReady platform, which is managed by the Philadelphia Youth Network (PYN), a non-profit organization that oversees the city's broader youth employment initiatives. Therefore, successful platforms are institutionally owned either by city workforce departments or by a key non-profit intermediary operating under a citywide strategy.

# New Jersey Career Navigator Overview

The New Jersey Career Navigator, also known as 'My Career NJ', is an interactive digital career hub that leverages big data and machine learning to generate personalized job and career recommendations. These recommendations are tailored to align with a user's specific skill sets, employment history, and individual goals, and can be generated from user-entered information or by parsing a resume. A key feature of the platform is the 'Training Explorer,' which allows users to apply custom filters to search for training programs, find information on tuition assistance, and get valuable insights into different training providers. The platform's core functionalities, such as ML-driven recommendations and the Training Explorer, are considered adaptable for a more lightweight context, like a teen platform, by using open datasets and simpler models (e.g., skills-to-occupation matching) hosted as web components, thereby avoiding the need for an enterprise-level technology stack.

# Washington Benefits Navigator Overview

The Washington benefits navigator ecosystem is not a direct job-matching tool but is primarily focused on helping residents navigate complex systems like health insurance and social services. The system includes 'Navigators' associated with the Washington Health Benefit Exchange who provide free assistance to help customers sign up for health coverage through the 'Washington Healthplanfinder'. These navigators are located across the state and help with insurance questions and enrollment. Additionally, the WA 211 service provides searchable directories that can guide users to these navigator programs. The key features of this model that are considered adaptable for other contexts are its process-oriented tools, such as plain-language screening questions, guided help, searchable directories for finding assistance, appointment and referral workflows, and document checklists. These elements are designed to simplify user access to services and could be repurposed, for example, to help teens navigate processes like obtaining work permits or opening bank accounts.

# Richmond Yes Program Details

## Program Initiative Name

Youth Works RVA

## Target Age Group

14-24

## Virtual Program For Younger Teens

A 'Virtual Earn and Learn Program' is offered for youth aged 14-15, which focuses on career training and workforce readiness.

## In Person Program For Older Youth

The 'Youth Works RVA' summer program provides in-person, work-based learning and internship opportunities for youth aged 16-24 by partnering with local government agencies, private sector employers, and community organizations.


# Ferpa Data Sharing Requirements

Under FERPA's 'school official' exception, a third-party vendor can receive Personally Identifiable Information (PII) from student education records without prior consent, provided specific conditions are met. The vendor must be under the 'direct control' of the school or district, a condition formalized through a written data-sharing agreement. This agreement must specify that the vendor can only use the PII for the specific purposes for which the disclosure was made and prohibits the redisclosure of PII to any other party without the district's permission. Furthermore, the agreement should outline requirements for data security and establish timelines for the destruction of the data once it is no longer needed for the specified purpose.

# Key Onboarding Challenges

A significant challenge in the youth onboarding process, as identified by the research, is the complexity and burden of completing hiring paperwork. The Boston SuccessLink program serves as a key case study, where these paperwork requirements are described as 'significant barriers.' The process involves up to 10 different steps, with the most critical hurdles being the need for youth to locate and upload important personal documents. Specifically, the required documents that pose challenges include social security cards, proof of residency, and work permits. The consequence of these complexities is severe, leading to delays and a high rate of program drop-off. According to a policy brief, these barriers result in as many as 15% of youth who have already been successfully matched with a job failing to complete the onboarding process and, consequently, never starting their work experience.

# Gtfs Data Source Links

## Source Name

Transitland

## Url

https://www.transit.land/feeds/f-grtc~va

## Data Type

Static GTFS

