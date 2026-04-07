# Executive Summary

As of 2025-2026, the City of Richmond, Virginia, operates a multi-faceted procurement and contract management ecosystem centered around its core Enterprise Resource Planning (ERP) system, RAPIDS, which is an implementation of Oracle E-Business Suite. The city does not use SAP, Jaggaer, or Coupa for its primary procurement functions. For solicitations, the city is transitioning to the OpenGov Procurement portal for electronic bid and proposal submissions, while still utilizing Virginia's statewide eVA platform for posting opportunities. Vendor management, including registration and accounts payable interactions, is handled through an Oracle iSupplier-based Supplier Portal, which integrates with the RAPIDS ERP. There is no single, publicly documented centralized repository for all city contracts; evidence suggests a hybrid approach where transactional data resides in RAPIDS/iSupplier, solicitation artifacts are in OpenGov, and contract documents are managed internally using the OnBase enterprise content management system. The city provides public access to key procurement data through its Socrata Open Data Portal, including the 'City Contracts' dataset (ID: xqn7-jvv2) and the 'City Payment Register FY16+' (ID: 5y73-enav). While the statewide eVA system is active and provides daily updated data, and VITA's CobblestoneContracts portal is available for searching state IT contracts, a public API for the latter is not documented. A formal IT security review or Authority to Operate (ATO) process for new software is not publicly detailed on the city's websites.

# Erp System Details

## System Acronym

RAPIDS

## System Full Name

RVA: Advancing Proven Innovative Direction System

## Technology Platform

Oracle E-Business Suite

## System Type

Enterprise Resource Planning (ERP) system


# Procurement And Solicitation Platform

## Platform Name

OpenGov

## Portal Url

https://procurement.opengov.com/portal/rva

## Primary Function

The platform is used for the electronic submission of bids and proposals for solicitations, such as Invitations for Bid (IFB) and Requests for Proposals (RFP).


# Contract Storage And Management

## Primary System

OnBase

## Storage Method

Contracts are stored in OnBase, which functions as an enterprise content and document management system. The context suggests a mixed environment where OnBase is used for document management, while transactional records are in Oracle RAPIDS and solicitation artifacts are in OpenGov.

## Integration Details

OnBase is used in conjunction with the city's RAPIDS ERP system, which is based on Oracle. A city job posting for a liaison role between the two systems confirms this integration.


# Vendor Self Service Portal

## Portal Name

Oracle iSupplier portal

## Portal Url

https://www.rva.gov/procurement-services/supplier-portal

## Key Features

The portal is the mandatory registration point for all current and prospective suppliers. It provides vendors with access to tools for managing their business with the city, including viewing opportunities, managing account information, and accessing accounts payable details. All email communications from the system originate from the 'RAPIDS Workflow Mailer'.


# City Open Data Procurement Datasets

## Dataset Name

City Contracts

## Dataset Id

xqn7-jvv2

## Fields

agency_department; contract_number; contract_value; supplier; procurement_type; description; type_of_solicitation; effective_from; effective_to

## Row Count

1367.0

## Last Updated Date

March 30, 2026


# Virginia Eva Procurement System Status

## System Name

eVA (electronic Virginia)

## Description

eVA, also known as Virginia’s eProcurement Marketplace, is the active, statewide electronic procurement system. It provides public transparency features including Virginia Business Opportunities (VBO) for solicitations, a public search for orders, suppliers, and contracts, and public spend reports. The system is actively maintained, with release notes documented through 2024.

## Data Availability

Procurement data from eVA is made publicly available through the Virginia Open Data Portal. The Commonwealth publishes a dataset titled 'eVA Procurement Data 2024' which is updated daily. This dataset can be accessed and downloaded as a CSV file and includes a data dictionary. The main eVA website also provides a link to 'eVA Open Data'.

## Api Availability

While a specific, dedicated API for the eVA system itself is not explicitly documented in the provided text, the procurement data is available on the Virginia Open Data Portal. Open data portals, like the one Virginia uses, typically provide API access (e.g., Socrata-style APIs) to their datasets, allowing for programmatic access to the daily-updated procurement data.


# Vita Cobblestone Contracts Portal

## System Name

VITA CobblestoneContracts

## Technology Provider

Cobblestone Systems Corp.

## Public Portal Url

https://vita.cobblestonesystems.com/public/

## Api Availability

There is no documented public API available for the VITA CobblestoneContracts system. Access to the statewide IT contract database is provided exclusively through the public-facing web search portal.


# Known Procurement Vendor Relationships

## Vendor Name

Oracle, OpenGov

## Relationship Status

Confirmed

## Details

The City of Richmond has confirmed relationships with two primary procurement software vendors. The city's core Enterprise Resource Planning (ERP) system is RAPIDS (RVA: Advancing Proven Innovative Direction System), which is implemented on Oracle E-Business Suite. This relationship extends to vendor management, as all suppliers must register and interact through the Oracle iSupplier portal for self-service, accounts payable, and communications. In parallel, Richmond uses OpenGov's Procurement portal for the electronic submission of solicitations such as IFBs and RFPs, marking a transition to a modern e-procurement platform for bid responses. While the city uses these two systems, the provided evidence does not indicate any current relationship with Jaggaer, SAP Ariba, or Coupa for its city-wide procurement functions.


# It Software Procurement Pathway

## Summary Of Findings

The public-facing websites for the City of Richmond do not document a formal Authority to Operate (ATO) process or a detailed IT security review workflow for the adoption of new software tools. The city's procurement activities are governed by the Virginia Public Procurement Act (VPPA) and Richmond City Code Chapter 21. Any specific security, compliance, or technical requirements for a new software solution would typically be specified within the corresponding solicitation documents (e.g., an RFP). For definitive information on the IT security review pathway, vendors are advised to coordinate directly with the Department of Procurement Services, using contact information available through the city's Supplier Portal or the general 311 service, and to closely monitor the requirements outlined in specific solicitations.

## Ato Process Confirmed

False


# System Interconnectivity Overview

The City of Richmond's procurement systems function as an interconnected ecosystem, though not all components may be technically integrated. The lifecycle typically begins with the city posting solicitations on Virginia's eVA/VBO platform and, for electronic submissions, on its OpenGov Procurement Portal. Prospective vendors must register through the Oracle iSupplier Supplier Portal to be entered into the city's master vendor file, which resides within the RAPIDS (Oracle E-Business Suite) ERP system. All communications regarding vendor records and accounts payable are managed through this iSupplier-RAPIDS connection, with emails often originating from the 'RAPIDS Workflow Mailer'. When a vendor responds to a solicitation requiring electronic submission, they use the OpenGov portal. After a contract is awarded, the financial and transactional aspects, such as purchase orders, invoicing, and payments, are processed and tracked within the RAPIDS ERP. For document management, evidence strongly indicates the use of OnBase as the city's enterprise content management system. A city job posting describes a role acting as a liaison between RAPIDS and OnBase, suggesting that contract documents, signed agreements, and other related content are stored in OnBase and linked to the corresponding procurement records in the RAPIDS ERP. Therefore, the flow is: OpenGov for solicitation submission, Oracle iSupplier/RAPIDS for vendor and financial management, and OnBase for document/record retention.
