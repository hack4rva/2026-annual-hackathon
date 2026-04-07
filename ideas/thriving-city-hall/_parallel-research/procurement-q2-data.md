# Report Summary

A comprehensive inventory of public data sources exists for government procurement and contract management relevant to Richmond, Virginia, spanning federal, state, and local levels. At the federal level, SAM.gov provides extensive data on contract opportunities, entity registrations, and exclusion lists (debarments), accessible via APIs. Additional federal compliance sources include the FCC's 'Covered List' of prohibited telecommunications equipment and the Department of Commerce's Consolidated Screening List for export-related restrictions. At the state level, the Commonwealth of Virginia offers the eVA portal for general procurement data (available for bulk download), the VITA database for statewide IT contracts, and the DGS portal for non-IT statewide contracts. Vendor certification and business registration are managed through the Virginia SBSD's SWaM & DBE Directory and the SCC's business entity datasets. At the city level, the City of Richmond provides a dataset of its contracts from the past five years via its Socrata Open Data portal, which is updated monthly and accessible via API and file downloads. The city also maintains a web-based Supplier Portal for vendor registration and account management.

# Data Source Overview

The public data sources for procurement and contract management can be categorized into three governmental levels, each serving a distinct purpose:

**Federal-Level Resources:**
These sources provide access to opportunities and compliance data for contracting with the U.S. federal government. Their purpose is to centralize federal procurement and ensure vendors meet national standards.
- **SAM.gov:** The primary portal for federal procurement. It offers APIs for accessing active and archived contract opportunities, entity registration data (reps & certs), and the Exclusions list, which identifies debarred or suspended entities.
- **FCC "Covered List":** A compliance resource maintained by the Federal Communications Commission that lists communications equipment and services deemed a national security threat. Its purpose is to prevent government funds from being used to purchase these prohibited items.
- **Consolidated Screening List (CSL):** A tool from the Department of Commerce that consolidates multiple export screening lists from the Departments of Commerce, State, and Treasury. It is used to verify that potential partners are not restricted from certain export, re-export, or transfer activities.

**State-Level Resources (Virginia):**
These sources manage procurement and vendor compliance for the Commonwealth of Virginia. They provide a framework for statewide purchasing and support programs for local businesses.
- **eVA Procurement Data:** Virginia's central procurement portal. It provides historical and current purchase order data for the Commonwealth, accessible via bulk download from the Virginia Open Data Portal. Its purpose is transparency and analysis of state spending.
- **VITA Statewide IT Contracts:** A specialized database for all IT-related contracts for the state, managed by the Virginia Information Technologies Agency. It allows agencies to find and use pre-negotiated IT contracts.
- **DGS Statewide Contracts:** The portal for non-IT statewide contracts, managed by the Department of General Services, serving a similar purpose to VITA for general goods and services.
- **SWaM & DBE Directory:** A database of firms certified as Small, Women-owned, and Minority-owned (SWaM) or as a Disadvantaged Business Enterprise (DBE). Its purpose is to promote diversity in state contracting by making it easy to find certified vendors.
- **Virginia SCC Business Registration Data:** Datasets from the State Corporation Commission's Clerk’s Information System (CIS), available on the state's open data portal. This allows for the verification of a business's legal status and registration in Virginia.

**City-Level Resources (Richmond):**
These sources are specific to doing business with the City of Richmond.
- **City Contracts (Socrata Open Data):** A public dataset containing open and closed city contracts for the last five years. Updated monthly and available via API, its purpose is to provide transparency into the city's procurement activities.
- **City of Richmond Supplier Portal (iSupplier):** The web portal where all current and prospective suppliers must register to do business with the city. Its purpose is to manage the vendor lifecycle, from registration to payment.

# Virginia Eva Database

## Dataset Name

eVA Procurement Data (Commonwealth purchase order line items)

## Update Frequency

Not explicitly stated on the portal page; the dataset is actively maintained, with a publication date of March 26, 2026, for the 2026 file.

## Access Portal

Virginia Open Data Portal

## Api Access Method

CKAN API is available for accessing metadata and resources.

## Download Format

Bulk CSV download


# Vita Statewide Contracts

## Database Name

VITA Statewide IT Contract Database

## Description

A database of active statewide IT contracts, including approved products and services.

## Access Method

Web database search on the VITA website, allowing users to view contract detail pages.

## Data Export Options

Downloadable documents are provided on contract detail pages where available. No public API for data export is documented.


# Sam Gov Federal Data

## Component Name

Exclusions (debarments/suspensions)

## Update Frequency

Not stated on the API page, but data is available via the API.

## Access Method

Access is provided via the Exclusions API, which requires an API key. Successful requests containing the format parameter will provide a file downloadable URL in the response.

## Available Formats

CSV or JSON


# Richmond Socrata Open Data

## Dataset Name

City Contracts

## Update Frequency

Monthly

## Api Access

The data is accessible via the Socrata Open Data API (SODA).

## Download Formats

The dataset is available for download in various formats, including CSV, RDF, and others.


# Richmond Vendor Portal

## Portal Name

City of Richmond Supplier Portal (iSupplier)

## Purpose

Serves as the registration and account management system for all suppliers and prospective suppliers wishing to do business with the City of Richmond.

## Access Method

Access is via a web portal that requires a supplier account login.

## Bulk Data Availability

The portal is a transactional system for vendor management and does not offer public APIs or bulk data downloads.


# Swam Mbe Certification Databases

## Directory Name

SWaM & DBE Directory

## Managing Agency

Virginia SBSD (Department of Small Business and Supplier Diversity)

## Update Frequency

The update cadence is not explicitly stated, but the directory is maintained to reflect the current certification status of firms.

## Access Method

The directory is accessible via a public web search interface that allows filtering by Certification Type, NIGP code, NAICS code, City, and/or Zip Code. No public API is documented.


# Virginia Scc Business Data

## Access Point Name

Virginia Open Data Portal (sourcing data from the SCC Clerk’s Information System - CIS)

## Data Type

Static business entity datasets, such as the 'Corporation' dataset.

## Update Frequency

Ad Hoc

## Access Method

Data is accessible via the CKAN API and direct CSV downloads from the Virginia Open Data Portal.


# Fcc Prohibited Vendors List

## List Name

FCC “Covered List” under the Secure and Trusted Communications Networks Act

## Purpose

The list is compiled to identify communications equipment and services determined to be a threat to national security, in accordance with the Commission’s rules at 47 C.F.R. § 1.50000 et seq.

## Update Frequency

Updated as Commission actions occur; the webpage displays the date of the most recent update (e.g., March 23, 2026).

## Access Method

The list is accessible via an FCC webpage that lists the entities. Documents and downloads are provided on this page. The context does not mention a public API for this specific list.


# Consolidated Screening List

## List Name

Consolidated Screening List (CSL)

## Update Frequency

The API and downloadable files are updated daily at 5:00 AM EST/EDT. The source notes a sync issue with the API since April 21, 2025, but confirms the downloadable files are still current.

## Api Access

A REST API is available at api.trade.gov/consolidated_screening_list/search, which allows for machine-readable access to the CSL.

## Download Formats

The entire list can be downloaded in CSV, TSV, and JSON formats.

## Web Search Engine

The provided context focuses on programmatic access via API and bulk file downloads and does not contain specific details about a web-based search tool.


# Api And Download Method Comparison

## Data Source

Multiple Government Procurement and Compliance Data Sources

## Access Category

Mixed (API, File Download, and Web Portal Access)

## Specific Methods

A variety of access methods are available across the specified data sources: 
- **eVA (Virginia Procurement):** Bulk CSV download via Virginia Open Data Portal and a CKAN API for metadata and resource access. 
- **VITA (Virginia IT Contracts):** Web database search on the VITA site with downloadable documents for specific contracts; no public API is documented. 
- **SAM.gov (Federal):** Offers multiple APIs requiring a key, including a public REST API for Contract Opportunities, an Exclusions API for CSV/JSON extracts, and an Entity Management API for CSV/JSON extracts. 
- **City of Richmond Open Data:** Provides a Socrata SODA API and file downloads in formats like CSV and RDF for its City Contracts dataset. 
- **City of Richmond Supplier Portal:** Access is limited to a web portal (iSupplier) for registration and account management; no public API or data download is indicated. 
- **SWaM & DBE Directory (Virginia SBSD):** A public web directory search is the sole access method; no public API is documented. 
- **Virginia SCC Business Data:** Available via the Virginia Open Data Portal with a CKAN API and CSV downloads. 
- **FCC Covered List:** Information is presented on an FCC webpage with associated downloadable documents; no specific public API for the list is mentioned. 
- **Consolidated Screening List (CSL):** Offers both a REST API and downloadable files in CSV, TSV, and JSON formats.


# Data Update Frequency Summary

## Data Source

Multiple Government Procurement and Compliance Data Sources

## Update Frequency

The update frequencies vary significantly by data source: 
- **eVA Procurement Data:** Not explicitly stated, but the dataset is actively maintained, with a publication date of March 26, 2026, for the 2026 file. 
- **VITA IT Contracts:** Not stated; updated as contracts are added or modified. 
- **SAM.gov Contract Opportunities:** Active notices are updated daily, while archived notices are updated weekly. 
- **SAM.gov Exclusions & Entity Management:** Not stated on the API pages. 
- **City of Richmond City Contracts:** Updated monthly. 
- **City of Richmond Supplier Portal:** Not applicable as it is a transactional portal. 
- **SWaM & DBE Directory:** Not stated; the directory reflects the current certification status of firms. 
- **Virginia SCC Business Entity Data:** Described as 'Ad Hoc' in the dataset metadata. 
- **FCC Covered List:** Updated as Commission actions occur. 
- **Consolidated Screening List (CSL):** The API and downloadable files are updated daily at 5:00 AM ET.


# Key Acronyms And Agencies

## Acronym

VITA

## Full Name

Virginia Information Technologies Agency

## Description

The Virginia Information Technologies Agency (VITA) is the entity responsible for managing the Commonwealth of Virginia's statewide IT contracts. It maintains a database of active contracts, along with approved products and services, which is searchable through its public website.

