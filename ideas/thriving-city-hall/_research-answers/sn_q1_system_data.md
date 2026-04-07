# Executive Summary

As of 2025-2026, the City of Richmond's 311 system, known as RVA 311, operates on the AvePoint Citizen Services platform, which is built on Microsoft Dynamics 365 and hosted on Microsoft Azure. This system was launched around June 2017, coinciding with the creation of the city's Department of Citizen Service and Response. The system does not offer a public-facing API for third-party service request submissions; access is limited to phone calls, the RVA311.com web portal, and mobile apps. While internal integrations exist, such as a connection to the Cityworks system via Microsoft BizTalk, they are not available for public use. The city does not publish a formal, versioned taxonomy of its service request categories, nor does it specify an update frequency. Richmond's Socrata open data portal contains a legacy service request dataset (ID: vgg4-hjn8) with data from the 2013-2015 period, but there is no evidence of currently updated data from the RVA 311 system. The 311 call center operates Monday to Friday from 8 a.m. to 7 p.m. and Saturday from 9 a.m. to 1 p.m., with online and mobile submissions accepted 24/7 and queued for processing during business hours. There is no chatbot or AI assistant on the city's website. While a basic service directory and a 'Helpful Links' page exist, they do not constitute a comprehensive, structured knowledge base mapping all service types to responsible departments. Notably, there are no publicly available audits or performance metrics tracking the misroute or reclassification rate of 311 requests.

# Crm Platform Details

## Platform Name

RVA 311 / AvePoint Citizen Services

## Vendor

AvePoint

## Underlying Technology

Microsoft Dynamics 365 / Microsoft Azure

## Adoption Date

June 2017


# Api And Integration Options

## Api Availability

False

## Api Name

AvePoint Graph API (General platform API, no public endpoint for Richmond 311 submissions)

## Authentication Methods

Not specified in the provided context for a public 311 submission API, as one is not available.

## Integration Capabilities

Internal integration with the City of Richmond's Cityworks implementation exists, facilitated by Microsoft BizTalk middleware to handle inbound requests.

## Documentation Url

https://learn.avepoint.com/docs/Overview.html


# Service Request Taxonomy

## Partner Department Count

20.0

## Example Categories

Public Works, Public Utilities, Social Services, Finance

## Example Service Types

Permits (Energov), Code Enforcement Cases, Public Works Services

## Taxonomy Update Frequency

Not published


# Open Data Portal Status

## Portal Url

https://data.richmondgov.com/

## Dataset Found

True

## Dataset Id

vgg4-hjn8

## Data Fields

SCFId, ReporterDisplayName, Status, Summary, Rating, Description, CreatedDate, Category, Location 1

## Data Recency

2015

## Update Cadence

None; legacy dataset not actively updated.


# Call Center Operations

## Weekday Hours

Monday - Friday, 8:00 a.m. - 7:00 p.m.

## Saturday Hours

Saturday, 9:00 a.m. - 1:00 p.m.

## Sunday Status

Closed

## After Hours Handling

Requests can be submitted 24 hours a day, 7 days a week via the self-serve web portal (RVA311.com) and mobile apps. These after-hours submissions are queued and then processed by agents or departments during normal business operations.


# Chatbot And Ai Assistant Status

## Chatbot Exists

False

## Findings

There is no evidence of an active or retired chatbot or AI assistant on rva.gov's customer service pages. The city's website and its Citizen Service and Response (CSR) pages direct residents to contact the 311 center via phone, the RVA311.com web portal, or the official mobile apps. While the City of Richmond has an Artificial Intelligence (AI) Policy in place as of 2025 to govern the use of such technologies, the policy does not indicate the deployment of a public-facing chatbot on the city's website.


# Service Directory And Knowledge Base

## Directory Exists

True

## Directory Url

https://rva.gov/common/services and https://www.rva.gov/citizen-service-and-response/rva-311-helpful-links

## Description

The rva.gov website features a 'Services' directory and a 'Helpful Links' page provided by the Citizen Service & Response (CSR) department. These resources function as a partial service directory, routing residents to the appropriate department pages, contact information, and external tools like the permit portal or code enforcement case lookup. However, this is not a structured, maintained, or comprehensive knowledge base that formally maps every individual 311 service request category to the specific department responsible for handling it.


# Request Misroute Rate Information

## Metrics Found

False

## Findings

No published metrics or audit reports tracking the misroute or reclassification rate for RVA 311 requests were found. A review of the Office of the City Auditor’s 'Reports Issued' index, which lists all audits since January 1, 2012, does not include any specific audit on this topic for the 311 system or the Department of Citizen Service & Response. Furthermore, the department's own public pages do not publish any such key performance indicators (KPIs). While it is possible that such metrics are tracked internally for operational purposes, there is no publicly available information to confirm this.

