# Executive Summary

Cross-agency service navigation for reentry residents in Richmond, Virginia, is highly fragmented, with no evidence of a shared intake or eligibility verification system across key agencies like the Department of Social Services (DSS), Richmond Redevelopment and Housing Authority (RRHA), and Virginia Career Works. Upon release, individuals under supervision must report to probation or parole within 72 hours and then navigate a series of independent intake processes for various services, with the number of forms varying based on the programs accessed. Current warm handoffs between agencies rely on a mix of methods, including HMIS for housing-related coordinated entry, traditional phone and email referrals, and no publicly documented dominant platform, such as Unite Us, for the broader reentry sector. While Virginia has a statutory framework for a Workforce Data Trust, there is no public evidence of operational cross-agency data sharing resulting from it. In contrast, Allegheny County, PA, offers a durable model of a shared client view through its DHS Data Warehouse, supported by a strong county-led governance structure. Furthermore, accessible open-source tools like Solid and OpenReferral present viable technological pathways for developing a prototype for a more integrated, resident-controlled data portability system.

# Reentry First 72 Hours

## First Contact Agency

If the individual is under supervision, they must first contact their designated Probation or Parole Officer.

## Reporting Timeline Hours

72.0

## Reentry Planning Origin

Reentry planning officially begins at the point of first contact or reception into a Virginia Department of Corrections (VADOC) prison facility. The process is designed to span the individual's entire length of sentence.

## Key Program Pillars

Based on the programs at the Richmond City Justice Center (RCJC), the key pillars of reentry support are housing, job preparation, mental health, substance use, educational attainment, and reentry planning.


# Case Manager Handoff Methods

In Richmond, case managers use a mix of methods for warm handoffs, with no single dominant system for all reentry services. For housing and homelessness services, the Greater Richmond Continuum of Care (GRCoC) utilizes a Coordinated Entry system, with referrals managed through the Homeless Management Information System (HMIS). This represents a structured electronic referral process within that specific sector. For other services, and for communication between agencies not integrated into the HMIS, traditional methods such as phone calls and email remain prevalent. The Richmond Department of Social Services (DSS), for example, directs clients to the statewide CommonHelp portal and phone lines. There is no public evidence to suggest that the Unite Us platform has become the dominant or mandated method for warm handoffs among the full spectrum of reentry-serving organizations in Richmond.

# Unite Us Adoption In Richmond

The Unite Us platform operates in Virginia as the 'Unite Virginia' network, which is described as a statewide care network connecting health, government, and community partners. However, based on available public information, the specific adoption level of this platform among reentry-serving organizations in Richmond, VA, cannot be determined. The public network page for Unite Virginia does not publish a roster of participating organizations specific to Richmond or provide any data on its penetration within the local reentry ecosystem. Consequently, it is not possible to substantiate the current adoption level or to analyze whether potential barriers to wider use are primarily technical, contractual, or related to a lack of awareness among local providers.

# Richmond Agency Data Systems

The Richmond Department of Social Services (DSS), Virginia Career Works, and the Richmond Redevelopment and Housing Authority (RRHA) do not utilize a shared intake or eligibility verification system. Each agency operates independently with its own distinct platform. Richmond DSS directs clients to the statewide CommonHelp portal, which is backed by the Virginia Case Management System (VaCMS), for determining eligibility and managing applications for a variety of benefit programs. This system is shared among local DSS offices across the Commonwealth but is not integrated with other state or local agencies like workforce or housing authorities. Virginia Career Works uses the Virginia Workforce Connection (VaWC), a platform for Workforce Innovation and Opportunity Act (WIOA) intake and case management, which is separate from the DSS systems. Similarly, the RRHA manages its own eligibility processes for public housing and Housing Choice Vouchers through its own dedicated online portal, which is not connected to either the DSS or workforce systems. Therefore, clients must navigate each agency's application and verification process separately.

# Virginia Workforce Data Trust Status

The Virginia Workforce Data Trust, established by the Code of Virginia § 2.2-2041, is a legal framework intended to create an encrypted workforce database. The statute mandates that various state agencies, including those overseeing workforce development, social services, and education, enter into Memoranda of Understanding (MOUs) to facilitate data sharing. The primary purpose of this data sharing is for program evaluation, research, and reporting, with specific requirements for coordination with the Virginia Longitudinal Data System (VLDS) and for the eventual destruction of shared data. However, based on a review of public documentation, there is no evidence that the Workforce Data Trust has produced any operational, cross-agency data sharing deliverables for day-to-day client case management or integrated intake. The statute provides the legal basis for data sharing for analytical purposes, but it has not resulted in a functional, shared system that gives case managers a unified view of clients across different agencies.

# Open Source Data Portability Tools

Yes, there are several open-source tools and standards available that are suitable for use in a hackathon prototype for consent-mediated data portability, allowing for resident-controlled intake snapshots. The research identifies the following options:
1.  **Solid (Inrupt/Community Solid Server):** An open-source project that provides personal data 'pods' where users can store their data and grant granular, revokable access to applications and services.
2.  **OpenReferral HSDS + HSDA:** An open standard (Human Services Data Standard) and open-source API (Human Services Data API) for sharing information about health, human, and social services. This can be paired with a consent layer to manage data sharing.
3.  **OAuth2/OpenID Connect with User-Managed Access (UMA 2.0):** Open standards for authorization and identity. Open-source implementations, such as Keycloak with UMA extensions, can be used to build a system that captures and enforces user-granted consent for data sharing between different applications.
4.  **Consent Receipt (Kantara Initiative):** This initiative provides open specifications for creating interoperable records of consent. Open-source libraries exist to help generate and manage these receipts, providing a clear record of what data sharing a user has agreed to. These are general-purpose building blocks rather than Richmond-specific solutions, but they are viable for prototyping.

# Successful Cross Agency City Models

## City And State

Allegheny County, PA

## System Name

DHS Data Warehouse

## Governance Model

A county-led model where the Department of Human Services (DHS) acts as the data steward. The governance framework includes internal data governance practices for county agencies and formal Memorandums of Understanding (MOUs) and data-sharing agreements with external entities, such as school districts.

## Key Features

The system's hallmark feature is 'Client View,' a secure, shared record accessible to contracted providers. This enables interoperability and a cross-agency view of clients. The model is noted for its strong executive sponsorship, robust data governance, and long-term sustainability.

## Funding Summary

The initiative was initially funded through philanthropic start-up grants and has since been sustained by being incorporated into the county's official budget.


# Allegheny County Model Deep Dive

## System Name

Department of Human Services (DHS) Data Warehouse

## Governance And Legal

Governance is centrally managed by the Allegheny County Department of Human Services (DHS). Data sharing within the county's own departments is handled through internal governance policies. For external partners, such as the Pittsburgh Public Schools, formal and legally binding Memorandums of Understanding (MOUs) are established to govern data sharing. This legal process is thorough, with the text noting that drafting the MOU with the school district took over 18 months.

## Technology Components

The key technological component highlighted is 'Client View,' a secure, externally-accessible web tool. It is designed to give contracted service providers access to the client data available in the DHS Data Warehouse, facilitating a more holistic view of the client and their service history across different agencies.

## Integrated Data Sources

The data warehouse is extensive, containing over 640 million records from a wide array of human services programs. It integrates data from both internal DHS departments and external agencies. The provided text gives a specific example of data sharing agreements with Pittsburgh Public Schools, demonstrating integration beyond the county's direct human services.

## Client Access Portal

The provided documentation does not contain information about a planned or existing portal for clients to directly view and access their own service information. The system's described tools, such as 'Client View,' are provider-facing and designed to aid in case management.


# Richmond Agency System Details

## Agency Name

Richmond Department of Social Services (DSS)

## System Name

CommonHelp / Virginia Case Management System (VaCMS)

## System Purpose

Online portal for Virginia residents to check eligibility, apply for, and manage a wide range of social service benefits, including SNAP, TANF, and medical assistance.

## Integration Status

Independent. The system is shared among local DSS offices across Virginia but is not integrated with workforce, housing, or other non-DSS agency systems for shared intake.

## Agency Name

Virginia Career Works (Capital Region)

## System Name

Virginia Workforce Connection (VaWC)

## System Purpose

A case management and reporting system used for participants in programs funded by the Workforce Innovation and Opportunity Act (WIOA). It is used for intake, tracking services, and performance reporting.

## Integration Status

Independent. VaWC is a statewide system for workforce services but operates separately from the systems used by DSS and local housing authorities.

## Agency Name

Richmond Redevelopment and Housing Authority (RRHA)

## System Name

RRHA Applicant Portal

## System Purpose

An online portal for individuals to apply for public housing and Housing Choice Vouchers (HCV), check their status on the waiting list, and complete the eligibility verification process.

## Integration Status

Independent. The RRHA's system is a standalone platform for its specific housing programs and is not integrated with DSS or workforce systems.

## Agency Name

Greater Richmond Continuum of Care (GRCoC)

## System Name

Homeless Management Information System (HMIS)

## System Purpose

A local information technology system used to collect client-level data and data on the provision of housing and services to homeless individuals and families and persons at risk of homelessness. It is used to manage the Coordinated Entry process for housing referrals.

## Integration Status

Siloed. While used by multiple homeless service providers within the GRCoC for referrals and coordinated entry, it is not integrated with the primary systems of DSS, RRHA, or Virginia Career Works for cross-system intake.


# Data Sharing Governance Models Analysis

## Model Name

Virginia Workforce Data Trust

## Approach

The model is based on a state-mandated statute, specifically the Code of Virginia § 2.2-2041. This law requires specified state agencies to enter into a formal memorandum of understanding (MOU) to support the data trust and its associated application ecosystem.

## Primary Purpose

The primary goal as defined by the statute is to support program evaluation and analysis. The law includes restrictions on data use and mandates the destruction or erasure of shared data after evaluations are complete.

## Scope

The scope of participation is defined by the statute and is limited to a specified list of state agencies. The law also mandates coordination with the Virginia Longitudinal Data System (VLDS). The provided research notes that no operational cross-agency data-sharing outputs from this trust were identified in public sources.


# Key Barriers To Data Integration

## Barrier Category

Technical

## Description

A key barrier to data integration among Richmond's service agencies is the use of disparate, siloed data systems for intake and eligibility. The research shows that key agencies operate independently: Richmond's Department of Social Services (DSS) uses the statewide CommonHelp/VaCMS system for benefits; Virginia Career Works uses the Virginia Workforce Connection (VaWC) platform for its services; and the Richmond Redevelopment and Housing Authority (RRHA) operates its own separate eligibility process and portal. There is no shared cross-agency intake or eligibility verification system among these three critical entities, creating a fragmented experience for residents and preventing seamless data sharing and warm handoffs between them.


# Conclusion On Richmond Data Landscape

The data sharing landscape for reentry services in Richmond, Virginia, is characterized by significant fragmentation and data silos. Key agencies operate on parallel tracks with independent systems: the Richmond Department of Social Services uses the statewide CommonHelp portal, Virginia Career Works utilizes the Virginia Workforce Connection (VaWC), and the Richmond Redevelopment and Housing Authority manages its own eligibility process. There is no shared intake or cross-agency eligibility verification among these critical entities, forcing returning residents to repeatedly provide information through separate processes. While the Greater Richmond Continuum of Care employs a Coordinated Entry process via HMIS for housing referrals, a universally adopted, dominant method for warm handoffs across all reentry service sectors is not evident; agencies still rely on traditional phone and email communication. The adoption level and impact of the Unite Virginia network specifically among Richmond's reentry organizations cannot be substantiated from public sources. This fragmented environment stands in contrast to the potential for a more integrated future. The long-standing success of Allegheny County's 'Client View' data warehouse provides a proven governance and operational model for creating a shared client record. Concurrently, the availability of open-source technologies like Solid (for personal data pods), OpenReferral (for service data standards), and UMA 2.0 (for consent management) offers the technical building blocks to prototype a resident-centric system where individuals can control and consent to the sharing of their intake data, mitigating the inefficiencies of the current siloed landscape.
