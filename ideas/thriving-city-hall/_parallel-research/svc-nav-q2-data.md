# Executive Summary

Public data sources in Richmond, Virginia, for resident service navigation are centered around the operational RVA311 system and the city's primary website, RVA.gov. The main channel for submitting and tracking service requests is the RVA311 portal and its associated mobile apps, which function as a real-time operational system but do not offer a public developer API for third-party integration. The city's Open Data Portal (data.richmondgov.com), built on the Socrata platform, hosts only one relevant but legacy dataset: a sample of SeeClickFix reports from 2014-2015, which is not current. The RVA.gov website itself serves as the city's service catalog and department directory, organizing services by category and providing contact information. There is no public documentation indicating the use of an Open311-compatible API or identifying the specific CRM platform vendor for the current RVA311 system.

# Public Data Sources

## Source Name

RVA 311 Operational Portal & Mobile Apps

## Description

The city's official system for service request intake and tracking. Residents can submit new requests online or via mobile apps, track their existing requests, follow the requests of others, and show support by upvoting. It partners with over 30 different city departments and agencies. Tracking is available via a registered account or by using the request ID for public requests.

## Update Frequency

Real-time

## Access Method

Web Portal and Mobile Apps (iOS/Android)

## Access Link

https://www.rva311.com/rvaone#/

## Data Provider

City of Richmond - Citizen Service & Response

## Source Name

SeeClickFix Sample Data Aug 2014 to Aug 2015

## Description

A legacy sample dataset of 43,300 311-style reports from the SeeClickFix platform, covering the period from August 2014 to August 2015. It contains 19 columns of data. This is not the current operational data.

## Update Frequency

Manual

## Access Method

OData API (v2/v4), GeoJSON, and other file exports via Socrata platform.

## Access Link

https://data.richmondgov.com/d/vgg4-hjn8

## Data Provider

City of Richmond (via Open Data Portal)

## Source Name

RVA 311 Helpful Links Page

## Description

A curated webpage of links to commonly requested city resources and systems. This includes tools like towed vehicle lookup, city tree map, parcel/zoning mappers, permit portals, code enforcement cases, paving dashboards, and property search. It serves as a navigation aid for residents seeking information related to common service requests.

## Update Frequency

As needed

## Access Method

Web Portal (collection of links)

## Access Link

https://www.rva.gov/citizen-service-and-response/rva-311-helpful-links

## Data Provider

City of Richmond - Citizen Service & Response

## Source Name

Richmond Open Data Portal

## Description

The city's central platform (Socrata) for public datasets. It provides tools for data exploration, visualization, and access via downloadable exports (e.g., GeoJSON) and APIs (e.g., OData).

## Update Frequency

Varies by dataset

## Access Method

Web Portal, OData API, File Downloads

## Access Link

https://data.richmondgov.com/

## Data Provider

City of Richmond - Department of Information Technology


# Rva 311 System Details

The Richmond RVA311 system is the city's centralized platform for non-emergency service requests, partnering with over 30 different city departments, agencies, and teams. Its mission is to provide a single point of contact for residents. Requests can be submitted through multiple channels: by dialing 3-1-1 within city limits (or 804-646-7000 from outside), or 24/7 via the self-serve web portal at RVA311.com and the RVA311 mobile apps for iOS and Android. Users can create an account to submit new requests, track their existing requests, and follow or 'upvote' requests made by others. For those without an account, it is still possible to search for and track any public service request using its unique request ID. The RVA.gov website also features an 'RVA 311 Helpful Links' page, which curates links to commonly requested resources and city dashboards, such as towed vehicle lookups, property and zoning mappers, permit portals, and paving schedules, further aiding resident service navigation.

# Richmond Open Data Portal

The Richmond Open Data Portal, accessible at data.richmondgov.com, is the city's platform for sharing public data. It is built on the Socrata platform, which provides standardized access to datasets through downloadable file exports (e.g., GeoJSON, CSV) and API endpoints (OData v2/v4). However, the portal's relevance to current 311 operations is limited. The only identified 311-style dataset is titled 'SeeClickFix Sample Data Aug 2014 to Aug 2015'. This is a legacy dataset containing 43,300 rows of service reports from a period ending in August 2015. The update cadence is listed as 'Manual,' and the data was last updated on September 2, 2015, making it a historical snapshot rather than a reflection of current operations. While this specific dataset can be accessed via its Socrata OData and download links, there are no other datasets on the portal that represent the city's current RVA311 service request activity.

# Rva Gov Department Directory

## Department Name

Finance

## Phone Number

(804) 646-7000

## Email Address

Not specified in the provided context.

## Physical Address

Not specified in the provided context.


# City Of Richmond Service Catalogs

## Service Category

Bills & Taxes

## Service Name

Real Estate Assessment Information

## Service Link

https://rva.gov/common/services

## Responsible Department

Assessor of Real Estate


# Crm Platform Information

## Platform Name

rvaone

## Platform Provider

Not specified. The City of Richmond does not provide public vendor attribution for the RVA311 platform.

## Web Portal Url

https://www.rva311.com/rvaone#/

## Ios App Link

The RVA311 Mobile App is available for free in the App Store. A direct link is not provided in the source documents.

## Android App Link

The RVA311 Mobile App is available for free in the Play Store. A direct link is not provided in the source documents.

## Historical Platforms

The city's open data portal contains a legacy dataset from SeeClickFix, titled 'SeeClickFix Sample Data Aug 2014 to Aug 2015', indicating this platform was previously used or evaluated.


# Api And Developer Resources

## Resource Name

OData for SeeClickFix Sample Data

## Resource Type

OData v2 / OData v4

## Endpoint Url

https://data.richmondgov.com/d/vgg4-hjn8

## Description

Provides API access to a legacy sample dataset of 43,300 SeeClickFix reports from August 2014 to August 2015. The data includes 19 columns of information related to 311-style service requests from that period.

## Notes

This API is for historical data only and is not connected to the current RVA311 system. The data was last updated on September 2, 2015. There is no public indication that the current City of Richmond 311 system exposes an Open311-compatible API or any other public developer endpoint.


# Service Request Submission Methods

## Method

Phone, Web Portal, and Mobile App

## Contact Or Link

Phone: Dial 3-1-1 (if inside City of Richmond) or 804-646-7000 (if outside city limits). Web Portal: Visit RVA311.com (https://www.rva311.com/rvaone#/). Mobile App: Download the 'RVA311 Mobile App' from the Apple App Store or Google Play Store.

## Availability

The self-serve web portal and mobile apps are available 24 hours a day, 7 days a week. The availability for the telephone service is not specified in the provided context.


# Service Request Status Tracking

Residents can track the status of submitted 311 service requests through two methods provided by the RVA311 system. The first method involves creating a registered account on the RVA311.com web portal or via the mobile app. A registered account allows a user to easily submit new requests and provides a dashboard to track all of their existing requests. It also enables them to follow requests submitted by other people and show support for an issue by 'upvoting' it. The second method is for users who do not have an account. They can track the status of any PUBLIC service request they submitted by using the unique request ID that is provided at the time of submission. This ID can be entered into the search function on the RVA311 portal to retrieve the request's current status.

# Data Source Limitations

## Data Source Name

SeeClickFix Sample Data Aug 2014 to Aug 2015

## Limitation

The dataset is a static, historical sample and is not updated with current information. The official update frequency is listed as 'Manual'.

## Last Known Update

September 2, 2015

## Impact

The data is over a decade old and does not reflect current 311 operations, service request types, or departmental performance. It is unsuitable for real-time analysis, trend monitoring, or integration with current city service systems. Its utility is limited to historical research of the 2014-2015 period.


# Privacy Considerations

The RVA311 system has mechanisms in place to handle user privacy. While the system promotes transparency, it also makes a distinction between public and private service requests. The ability for any member of the public to track a request is limited to those designated as 'PUBLIC'. As stated on the 'About RVA 311' page, a user without an account can search for any 'PUBLIC service request' using the request ID. This implies that certain requests, likely those containing sensitive or personally identifiable information (PII), are not made publicly visible to protect the privacy of the reporting individual. Although not explicitly detailed, this structure allows the city to balance open government principles with the need to safeguard resident data.

# Related Interactive Maps And Tools

## Tool Name

List of Towed Vehicles

## Description

A lookup tool for residents to find information on vehicles that have been towed within the City of Richmond.

## Url

The direct link is available on the RVA 311 Helpful Links page: https://www.rva.gov/citizen-service-and-response/rva-311-helpful-links

## Responsible Department

Public Safety / Police Department

## Tool Name

City Tree Map

## Description

An interactive map that provides information about trees located and managed by the city.

## Url

The direct link is available on the RVA 311 Helpful Links page: https://www.rva.gov/citizen-service-and-response/rva-311-helpful-links

## Responsible Department

Not specified in context

## Tool Name

Parcel Mapper

## Description

An interactive mapping tool that provides detailed information about property parcels, including ownership and assessment data.

## Url

The direct link is available on the RVA 311 Helpful Links page: https://www.rva.gov/citizen-service-and-response/rva-311-helpful-links

## Responsible Department

Assessor of Real Estate

## Tool Name

Zoning Mapper

## Description

An interactive map that displays the city's zoning districts, regulations, and related planning information.

## Url

The direct link is available on the RVA 311 Helpful Links page: https://www.rva.gov/citizen-service-and-response/rva-311-helpful-links

## Responsible Department

Permits & Planning

## Tool Name

Neighborhood Mapper

## Description

A mapping application that outlines the boundaries of various neighborhoods within the city.

## Url

The direct link is available on the RVA 311 Helpful Links page: https://www.rva.gov/citizen-service-and-response/rva-311-helpful-links

## Responsible Department

Permits & Planning

## Tool Name

Permit Portal - Energov

## Description

The city's online portal for submitting and tracking applications for various permits, likely related to construction and development.

## Url

The direct link is available on the RVA 311 Helpful Links page: https://www.rva.gov/citizen-service-and-response/rva-311-helpful-links

## Responsible Department

Permits & Planning

## Tool Name

Code Enforcement Cases

## Description

A tool or portal for residents to look up the status and details of code enforcement cases in the city.

## Url

The direct link is available on the RVA 311 Helpful Links page: https://www.rva.gov/citizen-service-and-response/rva-311-helpful-links

## Responsible Department

Permits & Planning

## Tool Name

Pavement Conditions Index

## Description

A dashboard or interactive map that displays the condition ratings of city streets and pavement infrastructure.

## Url

The direct link is available on the RVA 311 Helpful Links page: https://www.rva.gov/citizen-service-and-response/rva-311-helpful-links

## Responsible Department

Department of Public Works

## Tool Name

Public Works Services Finder

## Description

An online tool designed to help residents find information specific to services provided by the Department of Public Works.

## Url

The direct link is available on the RVA 311 Helpful Links page: https://www.rva.gov/citizen-service-and-response/rva-311-helpful-links

## Responsible Department

Department of Public Works

## Tool Name

Property Search

## Description

A search tool for accessing public records and information about properties within the City of Richmond.

## Url

The direct link is available on the RVA 311 Helpful Links page: https://www.rva.gov/citizen-service-and-response/rva-311-helpful-links

## Responsible Department

Assessor of Real Estate

## Tool Name

Vision Zero Dashboard

## Description

A data dashboard that tracks progress and key metrics related to the city's Vision Zero initiative, which aims to eliminate traffic fatalities.

## Url

The direct link is available on the RVA 311 Helpful Links page: https://www.rva.gov/citizen-service-and-response/rva-311-helpful-links

## Responsible Department

Transportation / Department of Public Works

## Tool Name

Speed Tables Planned

## Description

An informational resource, likely a map or list, showing the locations where the city plans to install speed tables for traffic calming.

## Url

The direct link is available on the RVA 311 Helpful Links page: https://www.rva.gov/citizen-service-and-response/rva-311-helpful-links

## Responsible Department

Transportation / Department of Public Works

