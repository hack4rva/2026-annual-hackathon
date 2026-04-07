# Executive Summary

The City of Richmond, VA, maintains a regularly updated procurement dataset on its Socrata Open Data Portal (data.richmondgov.com), specifically the "City Contracts" dataset (ID: xqn7-jvv2), which is refreshed monthly. For active solicitations, the city is transitioning to the OpenGov platform (procurement.opengov.com/portal/rva) for electronic submissions, while also continuing to post on the state's eVA/VBO portal during this period; it does not officially use BidNet Direct. The statewide Virginia SBSD SWaM vendor directory is searchable by locality, including Richmond, through a web interface, but it does not offer a public API for programmatic queries. Crucially, specific data on the number of active MBE/ESB vendors registered with the city's Office of Minority Business Development (OMBD) and their bidding participation rates are not publicly published. The city's OMBD and the state's SBSD operate independent directory systems, although the city utilizes data from both for its goal-setting processes. There is no official city policy allowing third-party tools to surface solicitations from BidNet Direct.

# Richmond Open Data Portal Analysis

## Dataset Name

City Contracts

## Dataset Id

xqn7-jvv2

## Is Live And Updated

True

## Update Frequency

monthly

## Last Update Date

Available via the Socrata metadata API endpoint (viewLastModified / rowsUpdatedAt field)

## Row Count

0.0


# Procurement Dataset Schema

## Field Name

Agency/Department

## Field Description

The city agency or department associated with the contract.

## Field Name

Contract Number

## Field Description

The unique identifier assigned to the contract.

## Field Name

Contract Value

## Field Description

The total monetary value of the contract.

## Field Name

Supplier

## Field Description

The name of the vendor or company awarded the contract.

## Field Name

Procurement Type

## Field Description

The method used to procure the goods or services (e.g., competitive bid, sole source).

## Field Name

Description

## Field Description

A brief description of the scope of the contract.

## Field Name

Type of Solicitation

## Field Description

The type of public notice issued for the procurement (e.g., Invitation for Bid, Request for Proposal).

## Field Name

Effective From

## Field Description

The start date of the contract period.

## Field Name

Effective To

## Field Description

The end date of the contract period.

## Field Name

Contract Specialist

## Field Description

The name of the city's contract specialist managing the agreement.


# Solicitation Platform Details

The City of Richmond primarily uses the OpenGov platform as its new electronic e-Procurement Portal for the submission of bids and proposals. According to the city's official Procurement Services solicitations page, vendors are directed to submit electronically through this portal, which can be accessed at https://procurement.opengov.com/portal/rva. During the ongoing transition to this new system, the city also continues to post some solicitations on the Commonwealth of Virginia's eVA - Virginia Business Opportunities (VBO) platform. There is no indication that the City of Richmond officially uses BidNet Direct for its solicitations; official city web pages do not direct vendors to a Richmond-specific BidNet Direct portal.

# Virginia Swam Directory Capabilities

## Directory Url

https://directory.sbsd.virginia.gov/

## Is Searchable By Locality

True

## Locality Search Confirmed For Richmond

True

## Programmatic Access Available

False

## Programmatic Access Details

No public API is documented on the Virginia SBSD's directory pages. Access is provided exclusively through the web user interface. There are no official API endpoints or developer documentation available for programmatic querying.


# Richmond Mbd Vendor Statistics

## Directory Name

OMBD MBE Registered Directory

## Directory Url

https://richmondombd.diversitycompliance.com/?TN=richmondombd

## Active Vendors Count

Not publicly available. The City of Richmond does not publish a public aggregate count of its active registered MBE/ESB vendors.

## Bidding Participation Rate

Not publicly available. The city does not publish a statistic on the percentage of registered vendors that have ever bid on a city contract. The 2021 City Auditor's report did not provide this metric.

## Data Source And Date

Analysis of the OMBD's public portal and the 2021 City Auditor's OMBD report, which confirm the lack of publicly available aggregate statistics.


# Directory Systems Overlap Analysis

The City of Richmond's Office of Minority Business Development (OMBD) directory and the Virginia Department of Small Business and Supplier Diversity (SBSD) SWaM directory are independent systems serving different purposes. The OMBD system is specific to the City of Richmond, used for registering Minority Business Enterprises (MBEs) and certifying Emerging Small Businesses (ESBs) for the city's local program. In contrast, the SBSD directory administers statewide Small, Women-owned, and Minority-owned (SWaM) and Disadvantaged Business Enterprise (DBE) certifications. Although they are separate, the 2021 City Auditor's report confirmed that the OMBD uses data from external sources, including the SBSD directory, alongside its own OMBD Business Directory when setting project goals. This demonstrates that they are separate datasets used in tandem rather than being a single, integrated system.

# Third Party Solicitation Access Policy

The City of Richmond's Procurement Services office does not have a published policy that allows or governs third-party tools surfacing its active solicitations from BidNet Direct. The city's official procurement process directs vendors to its OpenGov portal and the state's eVA platform. Since the city does not officially use BidNet Direct for its solicitations, it does not provide a policy for third-party access to them on that platform. Any attempt to scrape or programmatically access solicitations from BidNet Direct would be subject to BidNet's own Terms of Use, which do not provide for an open public API for third-party surfacing, and would not be operating under an explicit policy or permission from the City of Richmond.

# Overall Data Accessibility Assessment

The City of Richmond's procurement data ecosystem shows a mix of modern transparency efforts and significant fragmentation, which impacts overall accessibility. On one hand, the city demonstrates a commitment to open government by maintaining a "City Contracts" dataset on its Socrata portal with a monthly update cadence and by adopting a modern e-procurement platform, OpenGov. These initiatives improve access to historical contract data and current solicitations respectively. However, the ecosystem is not unified. Data is siloed across different platforms: historical contracts on Socrata, active solicitations on OpenGov and eVA, city-specific minority vendor data on a B2GNow portal, and state-certified vendor data on the SBSD website. The lack of public APIs for both the state (SBSD) and city (OMBD) vendor directories is a major barrier to programmatic access and large-scale analysis. Furthermore, the absence of publicly available key performance indicators, such as the number of registered local minority businesses and their contract bidding rates, creates an opacity that hinders assessment of the city's supplier diversity programs. While the city is moving towards modernization, the current state requires users to navigate multiple, disconnected systems to get a complete picture, indicating that accessibility and transparency are still works in progress.

# City Procurement System Transition Status

The City of Richmond's Department of Procurement Services is in an active transition period, moving from previous methods to a new electronic e-Procurement Portal, OpenGov. This new system is intended to handle electronic submissions for Invitations for Bid (IFBs) and Requests for Proposals (RFPs). During this transition, a hybrid approach is in place. For solicitations that are posted on the state's eVA platform but require electronic submission, vendors must submit their bids and proposals through the city's OpenGov portal. The city advises vendors to also check the eVA - Virginia Business Opportunities (VBO) platform for all other solicitations that may not yet be part of the new electronic submission process.

# Ombd Audit Summary

## Report Title

Office of Minority Business Development Audit Report

## Report Date

March 2021

## Auditor

City of Richmond, City Auditor’s Office

## Key Finding Goal Setting

The audit noted that the OMBD's goal-setting process relies on data from multiple, separate sources. It uses data from the statewide Virginia SBSD directory as well as its own internal OMBD MBE/ESB Business Directory, confirming these are not integrated systems.

## Key Finding Compliance Monitoring

The provided source material does not contain specific findings from the audit report regarding compliance monitoring.

## Key Finding System Implementation

The provided source material does not contain specific findings from the audit report regarding the implementation of the B2GNow supplier diversity portal.


# Key Portals And Urls

## Portal Name

City Contracts Open Data Portal

## Url

https://data.richmondgov.com/Well-Managed-Government/City-Contracts/xqn7-jvv2

## Description

The Socrata-powered open data portal page for the 'City Contracts' dataset, which is stated to be updated monthly and covers approximately the last five years of city contracts.

## Portal Name

OpenGov Procurement Portal

## Url

https://procurement.opengov.com/portal/rva

## Description

The city's primary e-Procurement portal for electronic submission of bids and proposals, providing a public view of active projects and a calendar.

## Portal Name

City Procurement Services - Solicitations

## Url

https://www.rva.gov/procurement-services/solicitations

## Description

The official city webpage providing vendors with instructions on how to find and respond to solicitations, including links to the OpenGov portal and information about the transition.

## Portal Name

Virginia SBSD SWaM Vendor Directory

## Url

https://directory.sbsd.virginia.gov/

## Description

The public web interface for the statewide directory of Small, Women-owned, and Minority-owned (SWaM) businesses, which can be searched by locality and other criteria.

## Portal Name

Richmond OMBD Supplier Diversity Portal

## Url

https://richmondombd.diversitycompliance.com/?TN=richmondombd

## Description

The City of Richmond's Office of Minority Business Development (OMBD) portal (B2GNow) for vendor registration, MBE/ESB certification, and searching the city-specific diverse vendor directory.


# Data Gaps And Limitations

The research could not determine the exact number of active Minority Business Enterprise (MBE) and Emerging Small Business (ESB) vendors currently registered with the City of Richmond's Office of Minority Business Development (OMBD). Furthermore, there is no publicly available data or statistic detailing what percentage of these registered vendors have ever bid on a city contract. This information is not published by the city or the OMBD. Accessing these specific counts and participation metrics would likely require authorized access to the city's B2GNow supplier diversity portal or a direct report from the OMBD, as it is not part of the public record.

# Defined Business Acronyms

## Acronym

MBE

## Definition

Minority Business Enterprise, a registration managed by the City of Richmond's OMBD.

## Acronym

ESB

## Definition

Emerging Small Business, a certification managed by the City of Richmond's OMBD.

## Acronym

SWaM

## Definition

Small, Women-owned, and Minority-owned Business, a statewide certification administered by the Virginia SBSD.

## Acronym

OMBD

## Definition

Office of Minority Business Development, a department within the City of Richmond government.

## Acronym

SBSD

## Definition

Virginia Department of Small Business and Supplier Diversity, a state-level agency.

## Acronym

eVA

## Definition

electronic Virginia, the Commonwealth of Virginia's official e-procurement portal.

## Acronym

VBO

## Definition

Virginia Business Opportunities, the public portal for viewing solicitations on the eVA platform.

