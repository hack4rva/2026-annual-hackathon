# Executive Summary

The Jobs To Be Done (JTBD) analysis for the 'rva-people-data' project highlights critical inefficiencies and trust deficits within the Richmond, VA maternal health data ecosystem. Stakeholders, ranging from public health analysts to community organization leaders, face significant challenges due to a fragmented data landscape. The core functional problem is the extensive manual effort and duplicated analysis required to reconcile inconsistent maternal health metrics from disparate sources like various Virginia Department of Health (VDH) dashboards and static PRAMS reports. This leads to significant time lags and conflicting data points. On an emotional level, this fragmentation erodes confidence, creating fear among program managers of being discredited when presenting data to funders and community partners. Systemically, the lack of an automated, centralized mechanism for updating and disseminating metric definitions results in version control issues, widespread rework across agencies, and delayed alignment on critical health indicators.

For the 'rva-people-data' project to succeed, it must address a series of key strategic questions. The project needs to establish a definitive 'source of truth' for core indicators, develop clear protocols for handling suppressed small-number data and varying geographic definitions (e.g., health district vs. city vs. neighborhood), and ensure transparency around data refresh cadences. A deep understanding of primary user needs—from RCHD epidemiologists to home-visiting program staff—is essential to design useful outputs (like slide-ready charts and APIs) and build the necessary trust signals (like VDH endorsement). Furthermore, the project must define its integration strategy with existing state and local data systems, create a robust governance model to keep metric definitions synchronized among partners, and commit to presenting equity-focused data (e.g., by race and income proxies) responsibly to inform action without stigmatizing communities. The ultimate goal is to function as a local coordination layer that complements, rather than duplicates, state-level initiatives.

# Project Context

## Project Name

rva-people-data

## Guiding Pillar

Thriving Families

## Problem Statement

Maternal Health Data Coordination – Reduce duplicated data analysis across agencies for shared consistent metrics.

## Project Description

Data coordination tool for Richmond’s maternal health ecosystem to align metrics across agencies.


# Functional Job To Be Done

## Situation

When Richmond’s maternal health teams across RCHD, Henrico, VDH programs, and hospital systems need to brief leadership or plan interventions by neighborhood and race/ethnicity,

## Persona

a public health data analyst/program evaluator

## Motivation

to pull a single, trusted set of maternal and child health indicators filtered to Richmond/Henrico and by health district/locality,

## Outcome

so I can produce timely, consistent reports and track disparities without reconciling conflicting numbers.

## Current Workaround

Manually copy metrics from multiple dashboards (VDH MCH indicators, maternal mortality, PRAMS PDFs) into spreadsheets; request CSVs via forms; email analysts in different agencies for definitions; reconcile geography/race groupings by hand.

## Core Pain

Duplicated analysis, lag from repeated requests, mismatched definitions (e.g., county vs. independent city, health district vs. locality), suppressed small-n data and different time windows produce inconsistent trend lines.


# Emotional Trust Job To Be Done

## Situation

When I’m presenting maternal health findings to community partners and funders,

## Persona

a coalition lead/community org program manager

## Motivation

to feel confident that our numbers match what VDH, RCHD, and hospital partners recognize,

## Outcome

so I can build trust, avoid public contradictions, and focus energy on solutions instead of defending conflicting data.

## Current Workaround

Pre-brief partners separately, include wide confidence intervals/caveats, and footnote multiple sources; avoid granular cuts to prevent small-number disputes.

## Core Pain

Fear of being called out for “wrong” numbers; loss of credibility; partners disengage when data conflict and equity trends seem uncertain.


# Systems Coordination Job To Be Done

## Situation

When state task force recommendations or local initiatives change metrics (e.g., maternal mortality definitions, SMM, PRAMS indicators),

## Persona

a cross-agency coordinator/health district leader

## Motivation

to have standardized metadata, lineage, and APIs that propagate updated definitions across partners,

## Outcome

so I can ensure everyone reports consistent, equity-centered metrics and reduce duplicated ETL/QA across agencies.

## Current Workaround

Share static PDFs and email memos about definition updates; each organization reimplements transformations and QA. Quarterly meetings used to align on “the number.”

## Core Pain

Version drift, rework across agencies, delayed alignment, and inability to automatically refresh dashboards/briefs when definitions or suppression rules change.


# Data Questions

- Which indicators from the VDH’s MCH suite (infant mortality, low birthweight, preterm birth, late/no prenatal care, maternal smoking, teen pregnancy, WIC use, Medicaid births) will be considered the 'source of truth' for rva-people-data, and at what specific geographical level (Richmond City, Henrico County, combined health district, neighborhoods/tracts)?
- How will the project handle suppressed or small-number cells and the five-year groupings found in maternal mortality and pregnancy-associated death dashboards, while still enabling the neighborhood-level analysis that local partners like DataShare RVA utilize?
- Is it possible to programmatically access and integrate the PRAMS Richmond Health District indicators, such as those for depression, C-sections, and breastfeeding, which are currently only available in static PDF documents? How will they be mapped to standard years and confidence intervals?
- What is the refresh cadence for each of the source datasets (e.g., annual vital records, annual PRAMS data, dashboards last updated in 2025), and how will the rva-people-data tool clearly communicate the 'as-of' dates and last updated metadata for each indicator to its users?

# User Questions

- Who are the primary user personas for this tool in Richmond? Are they the maternal navigation teams at RCHD, epidemiologists, community benefit staff at VCU/Bon Secours, home-visiting programs like CHIP and Family Lifeline, or coalition leaders? What are their non-negotiable data slices, such as race/ethnicity, payer status (Medicaid births), timing of prenatal care, and data on Spanish language navigation?
- What are the most frequent decision-making contexts that will drive the use of this tool? Are users primarily engaged in grant reporting, designing new programs for maternity navigation, or creating presentations for community partners? How do these contexts dictate the required output formats, such as slide-ready charts, CSV files, or API access?
- What specific 'trust signals' are required to ensure that partner organizations will accept and use the numbers from this tool in high-stakes meetings? Would this include shared definitions, direct links to VDH sources, an official endorsement from RCHD, or prominent 'last-updated' badges?

# Integration Questions

- Which existing data systems should rva-people-data prioritize for initial integration? Should the focus be on the VDH MCH Indicators dashboard, the Maternal Mortality and Pregnancy-Associated Death dashboards, PRAMS dashboards, data from the RCHD/HHHD maternity navigation program, or the DataShare RVA neighborhood profiles?
- What are the technical requirements of partner organizations for data access? Do they need direct API endpoints for programmatic access, the ability to download bulk CSV files for offline analysis, or embeddable widgets to display data on their own dashboards, such as those used for hospital community health needs assessments?
- How will the project create and maintain a shared, up-to-date geographical crosswalk to align the different spatial units used by various sources, such as the independent city of Richmond, Henrico County, the combined Richmond-Henrico Health District, census tracts, and custom neighborhood definitions?

# Equity Questions

- Which specific equity-focused data cuts are considered essential by local stakeholders? This includes disaggregation by race/ethnicity, using Medicaid births as a proxy for income, and tracking data related to language access through maternity navigation for Spanish-speaking populations. Additionally, how will the tool communicate the limitations of the data where it is suppressed or not collected for certain groups?
- How will the project document and display the necessary context surrounding health disparities, such as the higher incidence of pregnancy-associated deaths among Black women or differential access to prenatal care, in a manner that avoids stigmatizing communities and instead empowers advocacy and action?

# Prior Art Questions

- How can the rva-people-data project strategically align with the recommendations from the Virginia Maternal Health Data & Quality Measures Task Force to avoid duplicating state-level dashboards and instead position itself as a complementary local coordination and metadata/lineage layer?
- What specific governance model will be established to keep metric definitions synchronized across a diverse group of partners including RCHD, Henrico Health District, VDH, VCU Health, Bon Secours, and community organizations? This includes processes for change control, identifying data stewards, and setting a cadence for review.
- What constitutes the minimum viable Richmond-specific metric catalog and data dictionary—complete with definitions, caveats, and direct links back to VDH dashboards—that key partners will accept and adopt as their shared reference standard?

# Identified Stakeholders

## Name

Richmond City Health District (RCHD)

## Type

Government Agency

## Potential Role

End User, Partner, Data Provider

## Name

Henrico Health District

## Type

Government Agency

## Potential Role

End User, Partner

## Name

Virginia Department of Health (VDH)

## Type

Government Agency

## Potential Role

Data Provider, Partner

## Name

VCU Health

## Type

Healthcare Provider

## Potential Role

End User, Partner

## Name

Bon Secours

## Type

Healthcare Provider

## Potential Role

End User, Partner

## Name

CHIP of Richmond

## Type

Non-Profit

## Potential Role

End User, Partner

## Name

Family Lifeline

## Type

Non-Profit

## Potential Role

End User, Partner

## Name

Virginia Maternal Health Data & Quality Measures Task Force

## Type

Government Initiative

## Potential Role

Partner, Governance

## Name

DataShare RVA

## Type

Data Collaborative

## Potential Role

Data Provider, Partner


# Relevant Data Initiatives

## Name

Maternal & Child Health (MCH) Indicators Dashboard

## Managing Organization

Virginia Department of Health (VDH), Division of Population Health Data

## Relevance

Considered the standard or 'source of truth' for key indicators like infant mortality, low birthweight, preterm birth, and prenatal care access. Data is filterable by health district, locality, and race/ethnicity, making it a foundational dataset for the project.

## Source Url

https://www.vdh.virginia.gov/data/maternal-child-health/mch-indicators/

## Name

Maternal Mortality Dashboard

## Managing Organization

Virginia Department of Health (VDH), Office of Vital Records

## Relevance

Provides crucial data on maternal mortality, a key outcome measure. Its use of five-year groupings presents a data handling challenge that the 'rva-people-data' project aims to address for local analysis.

## Source Url

https://www.vdh.virginia.gov/data/maternal-child-health/maternal-mortality/

## Name

Pregnancy-Associated Deaths Dashboard

## Managing Organization

Virginia Department of Health (VDH), Office of Vital Records

## Relevance

Focuses on pregnancy-associated deaths, another critical metric for understanding maternal health disparities. Like the maternal mortality dashboard, it uses five-year groupings that need to be reconciled for local use.

## Source Url

https://www.vdh.virginia.gov/data/maternal-child-health/pregnancy-associated-deaths/

## Name

Pregnancy Risk Assessment Monitoring System (PRAMS) Factsheets

## Managing Organization

Virginia Department of Health (VDH)

## Relevance

Provides unique, Richmond Health District-specific indicators not available in other dashboards, such as postpartum depression, C-section rates, and breastfeeding. A key challenge is that this data is currently in static PDF factsheets, which the project would need to ingest programmatically.

## Source Url

https://www.vdh.virginia.gov/content/uploads/sites/67/2021/10/Richmond-Health-District.pdf

## Name

Virginia Maternal Health Data & Quality Measures Task Force

## Managing Organization

Virginia General Assembly

## Relevance

A state-level initiative whose recommendations focus on standardizing quality metrics and improving data access across systems. Aligning with this task force is critical to ensure the 'rva-people-data' project complements, rather than duplicates, state efforts.

## Source Url

https://govnpc.org/creating-bridges-to-share-maternal-health-data/

