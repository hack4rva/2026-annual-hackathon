# Analysis Summary

The Jobs To Be Done (JTBD) analysis for the 'grant-pack-builder' project identifies three critical user needs within Richmond's maternal health ecosystem. The primary functional job is for CBO grant writers who need to quickly assemble defensible, auto-cited PDF fact sheets from disparate health data sources (VDH, CDC, Census) to meet grant deadlines, alleviating the pain of manual, error-prone data compilation. The emotional job is for CBO directors who need to trust the data's accuracy and equity framing to confidently vouch for proposals and maintain credibility with funders and community partners, addressing the fear of being challenged on their numbers. The systems/coordination job is for agency data leads who need a centralized, auto-updating tool to standardize metrics and reduce the burden of handling repetitive, one-off data requests from multiple CBOs. The analysis also surfaces numerous strategic questions regarding data definitions, geographic scope, user workflow, technical integration, and ensuring an equitable narrative, underscoring the complexity of creating a truly valuable and trusted resource.

# Project Overview

## Project Name

grant-pack-builder

## Pillar

Thriving Families

## Problem Statement

Maternal Health Data Coordination: Reduce duplicated data analysis across agencies for shared consistent metrics.

## Description

A web tool designed to generate formatted PDF fact sheets with automatic citations for Community-Based Organization (CBO) grant writers. The tool will utilize maternal health data from the Virginia Department of Health (VDH), U.S. Census, and the Centers for Disease Control and Prevention (CDC) to streamline the grant application process.

## Target User

The primary user persona is a grant writer at a Community-Based Organization (CBO) in Richmond, VA. Secondary personas include CBO program directors who need to ensure data accuracy and credibility, and data analysts at partner agencies (like RHHD) who aim to standardize metric reporting.

## Data Sources

The tool is intended to pull data from multiple official sources, including various Virginia Department of Health (VDH) dashboards (MCH Indicators, Maternal Mortality, PRAMS), U.S. Census tables, and CDC data. It will also need to reconcile this data with local reports like the Richmond and Henrico Community Health Assessment (CHA).


# Functional Job To Be Done

## Situation

When I need to assemble a maternal health fact sheet for a deadline using VDH, Census, and CDC data.

## Persona

A Richmond CBO grant writer

## Motivation

I want a web tool that auto-pulls Richmond/Henrico locality metrics with correct definitions and auto-citations.

## Outcome

So I can quickly produce a defensible, formatted PDF that aligns with state dashboards and funder expectations.

## Current Workaround

Manually pulling figures from VDH MCH/PRAMS dashboards, RHHD/CHA PDFs, CDC pages, and Census tables; reconciling definitions and timeframes; pasting into Word or Canva; and tracking sources in footnotes.

## Core Pain

Duplicated effort across agencies, inconsistent metrics and definitions (e.g., maternal vs pregnancy-associated deaths), risk of miscitation or using outdated data, and time-consuming formatting.


# Emotional Trust Job To Be Done

## Situation

When I must vouch for the accuracy and equity framing of our proposals.

## Persona

A CBO program director or executive at a Richmond maternal health CBO

## Motivation

I want fact sheets that use the same official local dashboards RHHD/VDH use and surface race/ethnicity gaps transparently.

## Outcome

So I can trust that our narrative won’t be challenged and community partners see us as aligned and accountable.

## Current Workaround

Asking analysts or partner agencies to verify numbers, double-checking race/ethnicity filters and locality rollups, and adding context paragraphs about disparities.

## Core Pain

Anxiety about discrepancies with RHHD/VDH dashboards; fear of undermining credibility with funders and community when numbers or definitions don’t match.


# Systems Coordination Job To Be Done

## Situation

When I am asked by multiple CBOs for the “right” maternal health stats.

## Persona

A coalition/agency data lead in Richmond/Henrico

## Motivation

I want a shared, auto-updating fact-sheet generator that standardizes metric definitions, time windows, geographies, and citations.

## Outcome

So I can reduce repetitive one-off requests and ensure citywide consistency for Thriving Families metrics.

## Current Workaround

Sharing links and screenshots from dashboards, providing custom data extracts, and hosting ad hoc trainings.

## Core Pain

Fragmented requests, metric drift across organizations, and limited capacity to maintain a single source of truth.


# Data Questions

## Question

Which maternal outcomes are in scope for first release: maternal mortality (≤42 days), pregnancy-associated deaths (≤365 days), severe maternal morbidity, PRAMS indicators, infant outcomes (preterm, LBW), Medicaid births?

## Rationale

This is a foundational question to define the project's scope. Since VDH dashboards differ in their definitions and available metrics, clarifying which outcomes are most critical for CBO grant writers will determine the tool's core functionality and data integration priorities.

## Question

What is the authoritative year range for each metric (e.g., 2019–2023 for maternal mortality; 2018–2022 for pregnancy-associated deaths; 2023 for MCH indicators)? Should the tool lock to latest complete years or allow user selection?

## Rationale

Ensuring the tool uses the correct and most current timeframes for each specific metric is vital for data accuracy and credibility. This prevents users from making invalid comparisons or using outdated information in their grant proposals.

## Question

At what geography will the tool default: Richmond City, Henrico County, combined RHHD, census tracts/neighborhoods? Are tract-level breakouts feasible given VDH suppression rules and data sources?

## Rationale

The utility of the tool depends on its ability to provide data at the relevant geographic level for CBO service areas. This question addresses the need to balance user requirements for granular data with the technical and privacy-related constraints of the source data, such as VDH's small-n suppression rules.

## Question

How will race/ethnicity be handled to mirror VDH (maternal race at birth; Hispanic vs Non-Hispanic; bridged race)? How will small-n suppression and reliability warnings be displayed?

## Rationale

To be a trusted source, the tool must replicate the official VDH methodology for handling racial and ethnic data. It's also critical for responsibly communicating data about health disparities, which requires clear display of reliability warnings and suppression rules to prevent misinterpretation.

## Question

Can PRAMS local stratification (RCHD-only, BRHD) be included with appropriate caveats? How to prevent users from misinterpreting state-level PRAMS as locality-level data?

## Rationale

PRAMS data is valuable but has specific limitations, as it's a state-based survey with oversampling in only a few districts like Richmond City. This question is important for determining how to include this rich dataset while providing clear guardrails and caveats to ensure users interpret it correctly.


# User Questions

## Question

What fixed sections do Richmond CBO grant writers want in the PDF (e.g., Executive Summary, Key Indicators, Disparities, Program Alignment, Data Sources)? Do funders expect county vs city cutouts or service-area composites?

## Rationale

To maximize the tool's value, the generated PDF must align with the common structure of grant applications. Understanding the required sections and geographic breakdowns will ensure the output is directly usable and reduces the need for manual reformatting.

## Question

Which funders are primary targets (e.g., RHHD mini-grants, local foundations, DMAS initiatives, hospital community benefit) and what citation/format rules must PDFs satisfy?

## Rationale

Different funders have different reporting and citation requirements. Identifying the primary funding targets will allow the tool to be pre-configured with the correct formatting rules, making the output more professional and compliant, and increasing the CBO's chances of success.

## Question

What is the minimal set of user inputs (organization, service area, target population) and preferred visual styles that speed submission without requiring design skills?

## Rationale

The tool should be designed for ease of use, especially for users who may not have design skills. Determining the simplest interface and the most effective visual defaults is key to user adoption and ensuring the process is faster than their current manual workarounds.


# Integration Questions

## Question

Which VDH dashboards have stable CSV endpoints or APIs suitable for automation? What is the refresh cadence and change-log access for schema/version drift?

## Rationale

This question is critical for determining the technical feasibility of automating the tool. A sustainable tool relies on stable, machine-readable data sources (APIs or CSVs) rather than manual data entry, and understanding the data refresh cycle is essential for keeping the tool's information current.

## Question

How will the tool reconcile differences across VDH MCH Indicators, Maternal Mortality, Pregnancy-Associated Deaths, and PRAMS so auto-citations and metric notes stay accurate? Who approves definition changes citywide?

## Rationale

The various VDH dashboards may have slightly different definitions, timeframes, or methodologies. This question addresses the need for a clear governance and reconciliation process to ensure the tool presents a consistent and non-contradictory view of the data, which is key to its role as a single source of truth.

## Question

Should the builder ingest RHHD Community Health Assessment (CHA) excerpts or link out? If ingesting PDFs, what is the policy for versioning and errata?

## Rationale

The CHA provides crucial local context, but integrating information from a static PDF document presents challenges for automation and updates. This question explores the best strategy for incorporating this vital information while managing the risks of outdated content or versioning errors.


# Equity Questions

## Question

How will the tool foreground Richmond’s racial/ethnic disparities (e.g., higher risks for Black mothers) while avoiding deficit framing? Should it auto-include context boxes with SDOH notes and prevention emphasis?

## Rationale

It is ethically crucial to present data on disparities responsibly. This question addresses the need to design the tool to not only highlight inequities but also to frame them constructively, focusing on systemic causes (Social Determinants of Health) and solutions, rather than perpetuating negative stereotypes.

## Question

What accessibility/language features are required (Spanish/other languages per City Language Access Plan) and how will reading level be controlled for community review?

## Rationale

To be truly equitable, the tool's outputs must be accessible to all community members, not just English-speaking grant writers. This question ensures the project considers the needs of a diverse audience, including language access and readability, which is vital for community engagement and accountability.


# Prior Art Questions

## Question

Which existing resources (VDH dashboards, PRAMS facts, CHA, Virginia Mercury explainer, DataUSA, County Health Rankings) do users already compile, and what unique value will grant-pack-builder add (e.g., synchronized definitions, auto-citations, PDF formatting, locality filters)?

## Rationale

This question is critical to understanding the competitive landscape and the current, manual workflow of grant writers. By identifying the exact sources users currently piece together, the project can pinpoint the specific, high-value problems to solve—such as reconciling conflicting data definitions, automating citations, and standardizing formatting—thereby ensuring the new tool offers a significant improvement over the status quo and avoids reinventing existing capabilities.


# Richmond Va Maternal Health Context

The maternal health landscape in Richmond, VA, is a key focus area for the city, falling under the 'Thriving Families' pillar of the 2025 Mayoral Action Plan. The ecosystem involves collaboration and data sharing between state-level entities like the Virginia Department of Health (VDH), local bodies such as the Richmond and Henrico Health Districts (RHHD), and numerous Community-Based Organizations (CBOs) like Birth in Color RVA and Nurture RVA. A significant challenge is the fragmentation of data across various platforms, including VDH's MCH Indicators, Maternal Mortality, and PRAMS dashboards, as well as the local Community Health Assessment (CHA). This creates inconsistencies and inefficiencies for CBOs trying to use data for grant writing and program planning. The state has recently launched new and upgraded data dashboards to improve tracking, but the core challenge of synthesizing this information into a single, consistent narrative for local use remains.

# Key Stakeholders And Partners

## Name

Virginia Department of Health (VDH)

## Type

Government Agency

## Role In Ecosystem

Primary provider of maternal and child health data for Virginia. Creates and maintains critical data dashboards (MCH Indicators, Maternal Mortality, PRAMS) that serve as the foundational source of truth for metrics on births, deaths, and maternal experiences. These dashboards allow filtering by locality and race, making VDH the authoritative data source for the proposed tool.

## Name

Richmond and Henrico Health Districts (RHHD)

## Type

Government Agency

## Role In Ecosystem

The local public health authority for the Richmond area. RHHD utilizes VDH data, publishes the regional Community Health Assessment (CHA) which sets local priorities, and runs programs focused on issues like Black maternal health. They are a key partner for data validation, context, and potential distribution of tools or information.

## Name

Birth in Color RVA

## Type

Community-Based Organization (CBO)

## Role In Ecosystem

A local CBO providing direct services, classes, and workshops to support families through pregnancy, childbirth, and labor. As a direct service provider, they are a primary example of the intended user for the 'grant-pack-builder' tool, needing accurate data for grant applications and program planning.

## Name

Nurture RVA

## Type

Non-profit

## Role In Ecosystem

A non-profit organization focused on improving the well-being of childbearing families in Richmond by driving systems-level change. Their mission aligns with the data coordination problem, making them a key stakeholder and potential user who would leverage data to advocate for systemic improvements.

## Name

City of Richmond

## Type

Government Agency

## Role In Ecosystem

The municipal government, whose 2025 Mayoral Action Plan includes 'Thriving Families' as a core pillar with associated metrics. This demonstrates high-level strategic alignment and a potential for partnership or integration with city-wide initiatives.

## Name

Centers for Disease Control and Prevention (CDC)

## Type

Government Agency

## Role In Ecosystem

A federal agency that provides national-level data, research, and benchmarks on maternal health, such as the statistic that Black women are three times more likely to die from pregnancy-related causes. This data is used by local agencies like RHHD to frame the severity and equity dimensions of the issue.


# Existing Data Sources And Dashboards

## Source Name

VDH Maternal & Child Health (MCH) Data Dashboards

## Provider

VDH

## Data Type

Aggregated data from birth/death certificates, inpatient hospitalizations, PAMSS, and PRAMS. Provides key statistics like live births and maternal death rates.

## Key Features

Provides an overview of MCH data. An upgraded version was launched in 2025. Allows users to view various dashboards.

## Url

https://www.vdh.virginia.gov/data/maternal-child-health/

## Source Name

VDH MCH Indicators Dashboard

## Provider

VDH

## Data Type

Data on key indicators including infant mortality, late or no prenatal care, low birthweight, maternal smoking, Medicaid births, preterm birth, teen pregnancy, and WIC use.

## Key Features

Allows filtering of data by year, indicator, geography, and race/ethnicity. This is a core source for granular, topic-specific metrics.

## Url

https://www.vdh.virginia.gov/data/maternal-child-health/mch-indicators/

## Source Name

VDH Maternal Mortality Dashboard

## Provider

VDH

## Data Type

Data on maternal mortality, defined as death while pregnant or within 42 days of pregnancy termination.

## Key Features

Data is reported by the decedent's city or county of residence. The dashboard allows filtering by year, region, race/ethnicity, and locality. Launched as a new dashboard in 2025.

## Url

https://www.vdh.virginia.gov/data/maternal-child-health/maternal-mortality/

## Source Name

VDH Pregnancy-Associated Deaths Dashboard

## Provider

VDH

## Data Type

Data on deaths occurring within 365 days of pregnancy termination.

## Key Features

A new dashboard announced in 2025 alongside the maternal mortality dashboard. Allows users to filter by year, region, race/ethnicity, and locality.

## Url

https://virginiamercury.com/2025/04/18/virginia-launches-new-dashboards-to-track-maternal-deaths-improve-pregnancy-outcomes/

## Source Name

VDH PRAMS Data Dashboards

## Provider

VDH

## Data Type

Survey data from mothers about their experiences before, during, and after pregnancy. Used to identify high-risk groups and investigate emerging issues.

## Key Features

State-level survey data that can be specifically stratified by Richmond City Health District (RCHD) due to targeted oversampling, making it a unique source for local insights.

## Url

https://www.vdh.virginia.gov/prams/data-dashboards/

## Source Name

RCHD PRAMS FACTS 2022

## Provider

RCHD / VDH

## Data Type

A specific fact sheet demonstrating the use of PRAMS data for the Richmond City Health District.

## Key Features

Highlights that in 2022, 348 survey respondents were from the Richmond City Health District, showing a concrete use case of the local data stratification.

## Url

https://www.vdh.virginia.gov/content/uploads/sites/67/2025/01/RCHD-PRAMS-FACTS-2022.pdf

## Source Name

Richmond & Henrico Community Health Assessment (CHA) 2024

## Provider

RHHD

## Data Type

A comprehensive report on local health status, priorities, and notable disparities among ethnic and racial groups in Richmond and Henrico.

## Key Features

Provides crucial qualitative context, narrative, and locally-identified priorities that pure quantitative dashboards may lack.

## Url

https://www.vdh.virginia.gov/content/uploads/sites/119/2025/04/2024-Richmond-and-Henrico-CHA.pdf


# Grant Writer Pain Points Analysis

The core pain points for a Community-Based Organization (CBO) grant writer in Richmond are rooted in the highly manual, time-consuming, and complex process of gathering and presenting maternal health data for grant proposals. Their current workaround involves a painstaking process of navigating and extracting information from a variety of disparate official sources, including Virginia Department of Health (VDH) dashboards for Maternal and Child Health (MCH) and PRAMS, Richmond City Health District (RHHD) Community Health Assessment (CHA) PDFs, CDC web pages, and U.S. Census tables. After finding the data, they must manually reconcile inconsistencies in metric definitions (e.g., the distinction between 'maternal mortality' and 'pregnancy-associated deaths'), differing timeframes, and geographic boundaries. This data is then copied into a document using tools like Word or Canva, and all sources must be meticulously tracked in footnotes. This process is not only inefficient, leading to duplicated efforts across different agencies, but it is also fraught with risk. There is a significant chance of introducing errors through miscitation, using outdated data, or misinterpreting complex definitions. The final, time-consuming step of formatting the data into a professional, defensible PDF adds another layer of manual labor, detracting from the grant writer's ability to focus on narrative and program design.

# Summary Of Racial Disparities

Significant racial disparities are a critical component of the maternal health landscape in Richmond, VA. According to the Centers for Disease Control and Prevention (CDC), a statistic highlighted by the Richmond and Henrico Health Districts (RHHD), Black women are three times more likely to die from a pregnancy-related cause than White women. This national statistic reflects local challenges, as the 2024 Richmond and Henrico Community Health Assessment (CHA) also identifies 'notable disparities' among different ethnic and race groups within the localities. The 'grant-pack-builder' project explicitly aims to address this by foregrounding these disparities, with a key goal of surfacing race and ethnicity gaps transparently while avoiding deficit-based framing. The project recognizes that over 80% of pregnancy-related deaths in the U.S. are preventable, making the focus on racial equity a central part of the proposed solution.
