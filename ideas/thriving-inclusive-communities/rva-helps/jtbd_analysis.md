# Project Summary

The 'rva-helps' project is a civic tech initiative under the 'Thriving Inclusive Communities' pillar. It aims to address the problem of cross-agency service navigation in Richmond, VA. The core problem is that residents seeking help for housing, workforce, or reentry services often have to repeat their story to multiple agencies. 'rva-helps' is envisioned as a service navigation tool designed to help residents find and connect to these cross-agency services more efficiently, streamlining the process and reducing the burden on individuals in need.

# Functional Job To Be Done

## Situation

When I am a Richmond resident facing housing instability or job loss and don’t know where to start

## Persona

A Richmond resident

## Motivation

I want to quickly understand my eligibility and be routed to the right resources across housing (RRHA/CoC), workforce (Virginia Career Works–Capital Region/OCWB), and reentry supports

## Outcome

So I can get timely help without re-explaining my situation to every agency.

## Current Workaround

Call 2-1-1 Virginia, the GRCoC Homeless Connection Line, visit connection points (e.g., City Resource Center, Virginia Career Works), or rely on a YMCA Help1RVA navigator; then repeat info at each intake.

## Core Pain

Fragmented access points and repeated intakes; unclear eligibility; slow handoffs; limited visibility into referral status.


# Emotional Job To Be Done

## Situation

When I am hesitant to share sensitive details

## Persona

A returning citizen or survivor

## Motivation

I want a trusted, privacy-protecting experience endorsed by familiar Richmond providers (Homeward GRCoC, OCWB, RRHA)

## Outcome

So I can feel safe that my information is only shared as needed and I’m not retraumatized by retelling.

## Current Workaround

Share minimal information, ask a known navigator (Help1RVA, shelter staff, probation officer) to advocate, or avoid services until crisis.

## Core Pain

Low trust from repeated storytelling; uncertainty about data use; stigma; fear of information being misused across systems.


# Systems Job To Be Done

## Situation

When I am a case worker at a Richmond connection point

## Persona

A case worker at a Richmond connection point

## Motivation

I want a shared, closed-loop referral and intake-lite tool that aligns with GRCoC Coordinated Entry and local workforce/housing processes

## Outcome

So I can reduce duplicate data entry, track outcomes, and coordinate across agencies.

## Current Workaround

Maintain separate spreadsheets, email/fax referrals, check both HCIS/EmpowerNet for homelessness/DV, and possibly Unite Virginia or 2-1-1/findhelp directories.

## Core Pain

Duplicative data entry; inconsistent referral closure; unclear accountability; siloed systems and policies.


# Data Questions

## Question

What minimal, standardized intake fields will satisfy GRCoC Coordinated Entry screening while avoiding duplication with HCIS and EmpowerNet requirements?

## Context

This question addresses the need for an 'intake-lite' process that aligns with the Greater Richmond Continuum of Care's (GRCoC) Coordinated Entry (CE) system. The goal is to gather enough information for initial screening without duplicating the full data collection already performed by the region's Homelessness Crisis Information System (HCIS) and EmpowerNet, the system used for domestic violence cases.

## Question

What data-sharing agreements (MOUs/BAAs/Part 2 consents) are required to exchange data among RRHA, OCWB, GRCoC providers, Virginia Career Works, and CBOs while complying with Virginia’s Government Data Collection and Dissemination Practices Act (and HIPAA/VAWA/42 CFR Part 2 where applicable)?

## Context

This question focuses on the legal and administrative prerequisites for creating a cross-agency data exchange. It specifically references the need for formal agreements (Memoranda of Understanding, Business Associate Agreements) between key Richmond entities like the Richmond Redevelopment and Housing Authority (RRHA), the Office of Community Wealth Building (OCWB), and Virginia Career Works. Compliance must be maintained with state-level privacy laws like the Virginia Government Data Collection and Dissemination Practices Act, as well as relevant federal regulations such as HIPAA, VAWA, and 42 CFR Part 2 for substance abuse records.

## Question

How will rva-helps log and protect DV-related data and route to EmpowerNet without storing protected information in non-comparable systems?

## Context

This question highlights the critical need for a secure and compliant pathway for individuals experiencing domestic violence (DV). The system must be able to route these cases directly to EmpowerNet, the designated access point for DV services within the GRCoC, while ensuring that highly sensitive, protected information is not stored in the 'rva-helps' system itself, which may not have the same security designations as a comparable database like EmpowerNet.


# User Questions

## Question

Which primary user flows should launch first: residents self-service, navigator-assisted, or provider-to-provider handoffs at GRCoC Connection Points?

## Context

This question addresses the fundamental interaction model for the service. The context mentions several existing points of contact for Richmond residents, including the City of Richmond Resource Center and Virginia Career Works, which are designated as GRCoC Connection Points. The choice of user flow will determine how residents initially engage with the 'rva-helps' tool and has significant implications for design, training, and outreach.

## Question

What language access and accessibility features are essential at launch (Spanish, ASL, screen readers)?

## Context

This question focuses on digital accessibility and inclusivity for Richmond's diverse population. The context specifically references the YMCA Help1RVA’s multilingual navigation model, suggesting an existing precedent and need for services that are not limited to English-speakers. Ensuring features like Spanish language support, ASL, and screen reader compatibility is critical for equitable access.

## Question

For returning citizens, what onboarding supports (IDs, housing, employment documents) are most needed post-release from Richmond City Sheriff/VDOC to reduce intake friction?

## Context

This question targets the specific needs of a key user group: individuals re-entering the community from incarceration. The project aims to help residents navigate reentry services, and this question seeks to understand the most critical initial barriers (like lack of documentation for IDs, housing, or jobs) that the 'rva-helps' tool could help address to make the process smoother and more effective for this population.


# Integration Questions

## Question

How will rva-helps align with GRCoC Access Points (Homeless Connection Line, Coordinated Outreach, EmpowerNet) and not duplicate Coordinated Entry, while still simplifying navigation for residents not yet in crisis?

## Context

This question addresses the project's relationship with the Greater Richmond Continuum of Care's (GRCoC) established Coordinated Entry system. The challenge is to design 'rva-helps' as a simplified front door for residents who may not be in immediate crisis, without duplicating the formal assessment and prioritization functions of the official Access Points, which include the Homeless Connection Line, Coordinated Outreach teams, and the EmpowerNet hotline for domestic violence.

## Question

Which integrations provide the highest ROI at MVP: • HCIS read/write for basic triage metadata? • Unite Virginia closed-loop referrals? • 2-1-1 directory sync? • Findhelp directory embedding? • VA Career Works appointment scheduling?

## Context

This is a strategic question about prioritizing development for a Minimum Viable Product (MVP). It weighs the potential value of several specific technical integrations with existing platforms used in Richmond, including a potential read/write connection to the local HMIS (HCIS), leveraging the Unite Virginia network for closed-loop referrals, syncing with the 2-1-1 Virginia resource directory, or enabling appointment scheduling with Virginia Career Works.

## Question

Can the tool surface RRHA Central Intake guidance (e.g., immediate housing assistance line) contextually and capture warm handoffs without implying eligibility or queue priority?

## Context

This question focuses on the specific integration with the Richmond Redevelopment and Housing Authority (RRHA). It highlights the need to provide users with accurate information, such as directing them to the RRHA's Central Intake phone line for immediate assistance, while carefully managing expectations to ensure the tool does not incorrectly suggest a user is eligible for a service or has gained a higher priority in a queue.


# Equity Questions

## Question

How will the tool prioritize outreach and content for neighborhoods with high eviction risk and digital divides, ensuring mobile-first, SMS, and offline pathways through connection points and 311/phone lines?

## Context

This question directly addresses the significant equity challenge in Richmond, which has one of the nation's highest eviction rates. It proposes that the 'rva-helps' project should not be a passive tool but should actively target its outreach to the most vulnerable neighborhoods. It also acknowledges the digital divide by suggesting multi-modal access points beyond a website, including SMS and offline support through existing physical locations, to ensure those without reliable internet can still access help.

## Question

What governance will include people with lived experience (e.g., GRCoC shelter focus group participants, returning citizens) to continuously improve the product and avoid harm?

## Context

This question focuses on ensuring the project's development and ongoing management are equitable. It calls for a governance structure that formally includes the perspectives of the end-users, specifically mentioning vulnerable groups like shelter residents and returning citizens. This approach aims to create a feedback loop that can identify and correct for potential biases or unintended negative consequences ('harm') of the tool, making it more responsive and effective.


# Prior Art Questions

## Question

What lessons from GRCoC’s Connection Points pilot, the Homeless Connection Line operations, and OCWB career services can inform rva-helps intake-lite design and handoffs?

## Context

This question addresses the need to learn from existing local initiatives that serve as precedents for rva-helps. It specifically references the Greater Richmond Continuum of Care's (GRCoC) pilot of 'Connection Points' for light-touch assistance, the operational model of the Homeless Connection Line for crisis response, and the career services provided by the Office of Community Wealth Building (OCWB). Understanding the successes and challenges of these programs is crucial for designing an effective 'intake-lite' process and warm handoff protocol for the new tool.

## Question

How do existing platforms used locally (Unite Virginia, 2-1-1, Help1RVA, findhelp, No Wrong Door) succeed or struggle in Richmond, and where should rva-helps complement rather than replace them?

## Context

This question focuses on the existing ecosystem of service navigation and referral platforms in Richmond. It calls for an analysis of several key players: Unite Virginia (a closed-loop referral platform), 2-1-1 Virginia (a statewide information service), Help1RVA (a multilingual navigation service by the YMCA), findhelp (a resource directory), and No Wrong Door (for older adults and people with disabilities). The goal is to identify gaps in the current landscape that rva-helps can fill, ensuring it complements rather than competes with or duplicates the functions of these established tools.

## Question

Which policies in the GRCoC Coordinated Entry System (e.g., prioritization, access standards) must rva-helps reflect to maintain compliance and avoid queue-jumping perceptions?

## Context

This question highlights the critical need for the proposed tool to align with the established policies and procedures of the Greater Richmond Continuum of Care's (GRCoC) Coordinated Entry System (CES). The CES is the official, federally-mandated process for assessing, prioritizing, and matching homeless individuals to resources. To be successful and accepted by the community, rva-helps must integrate with this system's rules on prioritization and access, ensuring it does not create a 'side door' or the perception of queue-jumping, which could undermine the entire coordinated system.

