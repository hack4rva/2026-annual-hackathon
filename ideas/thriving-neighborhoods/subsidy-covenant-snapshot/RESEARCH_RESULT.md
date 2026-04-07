# Parcel-by-Parcel Truth: How U.S. Cities Track Affordability Covenants, Expirations, and Compliance—and How to Build a Reliable Lookup

## Executive Summary

Tracking affordability covenants and subsidy compliance timelines in the U.S. is a highly fragmented process. There is no single national parcel registry that captures every recorded affordability covenant and its legal documents. Instead, effective tracking requires stitching together recorded restrictive covenants from county clerks, municipal regulated-unit registries, and federal/state program inventories. 

Key insights for navigating this landscape include:
* **National datasets act as an "expiration radar" but are not title:** Tools like the National Housing Preservation Database (NHPD) aggregate HUD, USDA, and state Housing Finance Agency (HFA) data to provide property-level "Earliest/Latest End Dates" [1] [2]. HUD's Multifamily Assistance and Section 8 (MAH) database publishes monthly contract-level expirations [3] [4]. 
* **Parcel-level certainty requires the county recorder:** While maps show where affordable housing is, the actual legal expiration and compliance terms live in recorded documents. New York City's ACRIS system allows online searches by Borough-Block-Lot (BBL) to retrieve "Regulatory Agreements" [5]. Conversely, Los Angeles County does not provide online access to real estate records, requiring in-person or assisted workflows [6].
* **Internal systems manage the real calendar:** City housing departments and HFAs rely on enterprise platforms (e.g., Yardi, Emphasys, ProLink) to schedule inspections, annual income recertifications, and fee collections [7] [8] [9]. These operational details rarely surface on public-facing maps.
* **"False expirations" are common:** End dates should be treated as risk flags rather than definitive outcomes. Many programs have renewal options, and state Qualified Allocation Plans (QAPs) often extend Low-Income Housing Tax Credit (LIHTC) affordability far beyond the federal 30-year minimum (e.g., California requires 55 years) [2].

## What Exists Today—Where Expirations and Obligations Actually Live

No single source has all the answers; combining national "radar," city building registries, and recorder instruments is necessary to get parcel-level truth.

### National and Program Datasets (The "Radar")

National databases provide the fastest way to triage properties at risk of losing affordability. 
* **National Housing Preservation Database (NHPD):** An address-level inventory of federally assisted rental housing that tracks subsidies including LIHTC, Section 8 PBRA, HOME, and USDA programs [1]. It provides explicit data fields for "Earliest End Date" and "Latest End Date" and applies state-specific extended affordability rules [2].
* **HUD Multifamily Assistance & Section 8 Database (MAH):** Provides contract-level and property-level tables updated monthly, detailing assisted unit counts and contract expiration dates [3] [4].
* **USDA Rural Development:** Publishes loan-level information on when Section 514, 515, and 538 properties are projected to pay off their loans and exit the program [10].

| Source | Property ID/Linkage | Expiration Fields | Contract/Renewal | Assisted Units | Update Cadence |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **NHPD** | Address, HUD/State IDs, Lat/Long | Earliest/Latest End Date; program-specific end dates | Status flags (Active/Inactive/Inconclusive) | Yes | Quarterly |
| **HUD MAH** | HUD property_id, Address | HAP contract expiration | Renewal option name/status | Yes | Monthly |
| **USDA RD** | Borrower/Project IDs | Estimated Property Exit Year; loan maturity | N/A | Yes | Periodic |

### Recorder Systems: The Source of Truth

The only place the covenant actually says what it says is in the county recorder's office. 
* **New York City (ACRIS):** The Automated City Register Information System allows users to search property records and view document images (like Regulatory Agreements and Restrictive Declarations) by BBL or address from 1966 to the present [5].
* **Los Angeles County:** The Registrar-Recorder does not provide online access to real estate records or indexes via the internet [6]. Researchers must use the LA City Clerk Connect system to find contract numbers and then pull the physical records offline [11] [12].

### Municipal Building Registries

City maps rarely expose expiration dates—use them for parcel keys, not answers. For example, NYC's "Housing New York by Building" dataset provides BBLs, BINs, and unit counts for affordable projects, but does not list covenant expirations [13]. Chicago's ARO Map shows rental properties with affordable units and their Area Median Income (AMI) levels, but omits maturity dates [14].

## City/Portal Comparison—What You Can (and Can't) See Publicly

Most city portals help you find the parcel and the program; you still need recorder documents or agency exports to see expirations and compliance duties.

| City / Tool | Parcel Query | Shows Restrictions? | Shows Expiration? | Recorder / Document Link | Limitations |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **New York City** (Housing New York / ACRIS) | Address / BBL | Program and unit counts | Yes, via ACRIS docs | ACRIS PDFs (1966-present) | HNY dataset excludes public housing; requires cross-referencing ACRIS. |
| **Los Angeles** (LAHD / City Clerk / County Recorder) | Address / APN | Yes (in recorded docs) | Derivable (often 55/99 years) | City Clerk Connect; Recorder is offline | County has no online records; requires manual retrieval. |
| **San Francisco** (MOHCD Pipeline/Portfolio) | Address / Project | Targeting, unit mix | No | SF Assessor-Recorder | Project-focused dashboards, not covenant-focused. |
| **Chicago** (ARO Map / Data Portal) | Address | AMI tiers | No | Cook County Recorder | Focuses on inclusionary zoning units; expirations hidden. |
| **Seattle** (Affordable Housing Search) | Address / Parcel | Program/site info | No | King County Recorder | Emphasis on rental registration, not covenants. |

## Compliance Operations—What Agencies Track Internally

Internal systems manage the real compliance calendar—inspections, income recertifications, fees, and expirations—while public portals only expose a subset of this data.

Housing departments and HFAs widely use enterprise platforms to schedule monitoring activities across programs. Common systems include:
* **Yardi Voyager (Affordable/PHA):** Used for 50058/50059 compliance, inspections, rent reasonableness, and document management [8].
* **Emphasys:** Provides multifamily allocation, compliance tracking, and portfolio management for PHAs and HFAs [7].
* **ProLinkHFA:** Helps state HFAs manage compliance across bonds, loans, and grants [9].

**The Los Angeles Example:** LAHD explicitly requires annual tenant income recertifications and annual owner reporting "for the entire term" of the covenant [11]. They also charge an annual monitoring fee of $173 per restricted unit and require subordination agreements to ensure the covenant is in the first lien position [11].

## Build A Parcel-Level Master Inventory—Canonical Schema and Method

A repeatable schema, combined with record linkage, document retrieval, and QA, delivers reliable parcel-level restrictions, expirations, and obligations.

### Canonical Schema
* **Identifiers:** APN/BBL, address, latitude/longitude, HUD property_id, USDA borrower/project IDs, recorder instrument number.
* **Program/Subsidy:** Program name, contract/loan number, assisted units, AMI targeting bands.
* **Dates:** Program start, Earliest End Date, Latest End Date, renewal status, and a "calculated end date" with rule provenance.
* **Compliance Metadata:** Monitoring entity, recertification frequency, required reports, and fees.

### Record Linkage & Deduplication
Normalize addresses and crosswalk national program IDs (HUD MAH, USDA RD) to local parcels using spatial proximity and fuzzy matching. In NYC, the PLUTO dataset provides extensive land use and geographic data at the tax lot (BBL) level to serve as the base map [15].

### Expiration Inference Rules
When explicit dates are missing, infer them based on program rules:
* **LIHTC:** If allocated after 1989, the end date is generally the Placed-in-Service (PIS) year + 30 years [16]. Overlay state extensions (e.g., California requires 55 years) [2].
* **PBRA:** Use the HUD MAH contract expiration date [3].
* **USDA 538:** Date of loan closing + 40 years [16].

### Document Retrieval & OCR Validation
Retrieve recorded documents (e.g., via ACRIS in NYC) and use OCR and NLP to extract term lengths (e.g., "55 years from C of O"), income targeting, and post-expiration clauses [17]. 

## NYC and LA Implementation Playbooks—90 Days to a Usable Map

### New York City—BBL-First, ACRIS-Backed
1. **Base Map:** Use PLUTO to establish the BBL parcel base [15].
2. **Linkage:** Join the "Housing New York by Building" dataset on BBL to get program counts [13]. Link NHPD and HUD MAH data to compute Earliest/Latest End Dates.
3. **Validation:** Pull ACRIS documents by BBL, extract covenant terms, and store the CRFN links [5].

### Los Angeles—Clerk Connect + Recorder Appointments
1. **Base Map:** Build the parcel base using LA County Assessor APNs via the city GeoHub.
2. **Linkage:** Link NHPD and HUD MAH to parcels to compute expiration candidates.
3. **Validation:** Use LA City Clerk Connect to retrieve covenant metadata and instrument numbers [11] [12]. Because the LA County Recorder is offline [6], schedule batch appointments to image documents and extract terms.

## Operating Model—Governance, Updates, and Use Cases

Treat the master inventory as living infrastructure aligned to preservation workflows.
* **Update Cadence:** Ingest HUD MAH monthly and NHPD quarterly. Pull recorder documents on demand for properties within a 24-36 month expiration horizon.
* **Use Cases:** Use the data for pre-expiration outreach sequencing, underwriting resyndications, and powering public transparency maps where permissible.

### Appendix: Outreach Sequencing
* **T-36 months:** Validate expirations via recorder documents; engage owners; assess capital needs using REAC scores [1].
* **T-24 months:** Structure resyndication/renewal options and align gap financing.
* **T-12 months:** Finalize preservation plans, communicate with tenants, and monitor for opt-out filings.

## References

1. *How to Identify and Preserve Expiring Affordable Housing Units*. https://www.localhousingsolutions.org/analyze/identifying-expiring-affordable-housing-properties-and-units/
2. *Data Dictionary*. https://preservationdatabase.org/wp-content/uploads/2025/02/Data-Dictionary.pdf
3. *Multifamily Assistance & Section 8 Database | HUD.gov / U.S. Department of Housing and Urban Development (HUD)*. http://www.hud.gov/hud-partners/multifamily-assist-section8-database
4. *Multifamily Assistance & Section 8 Database | HUD.gov / U.S. Department of Housing and Urban Development (HUD)*. https://www.hud.gov/program_offices/housing/mfh/exp/mfhdiscl
5. *ACRIS*. https://www.nyc.gov/site/finance/property/acris.page
6. *Online Access to Real Estate Records*. https://www.lavote.gov/home/recorder/real-estate-records/viewing-real-estate-records/view-real-estate-records
7. *Enterprise Software Solutions from Emphasys Software*. https://www.emphasys-software.com/
8. *Software Service Agreement with Yardi Systems, Inc. for ...*. https://hacsb.org/wp-content/uploads/filebase/meetings_2022/items/august/Item-VI.1_Software-Service-Agreement-with-Yardi-Systems-Inc..pdf
9. *Compliance with ProLinkHFA White Paper*. https://hfahelp.prolinksolutions.com/resources/Compliance-with-ProLinkHFA-White-Paper.pdf
10. *USDA Rural Development Multi-Family Housing Program Exit Data - Catalog*. https://catalog.data.gov/dataset/usda-rural-development-multi-family-housing-program-exit-data
11. *Land Use Covenants - LAHD - City of Los Angeles*. https://housing.lacity.gov/partners/land-use-covenants
12. *LA CITY CLERK CONNECT - City of Los Angeles*. https://cityclerk.lacity.org/m.clerkconnect/
13. *Open Data - HPD*. https://www.nyc.gov/site/hpd/about/open-data.page
14. *ARO Map*. https://www.chicago.gov/city/en/sites/affordable-requirements-ordinance/home/aro-map.html
15. *Primary Land Use Tax Lot Output (PLUTO) - NYC Open Data -*. https://data.cityofnewyork.us/City-Government/Primary-Land-Use-Tax-Lot-Output-PLUTO-/64uk-42ks
16. *Data Dictionary August 2025*. https://preservationdatabase.org/wp-content/uploads/2025/09/Data-Dictionary-August-2025.pdf
17. *Combining AI and Established Methods for Historical ...*. https://www.philadelphiafed.org/-/media/FRBP/Assets/Consumer-Finance/Discussion-Papers/dp25-02.pdf
