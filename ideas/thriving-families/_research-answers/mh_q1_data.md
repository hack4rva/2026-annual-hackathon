# Executive Summary

The Virginia Department of Health (VDH) provides public access to several key maternal health datasets for Richmond City, though with some significant limitations. Data on infant mortality, preterm birth, and low birthweight are available at the city level through the VDH Maternal & Child Health (MCH) Indicators dashboard, with the most recent data from 2023, and can be disaggregated by race and ethnicity. However, a city-specific maternal mortality ratio (MMR) is not published by VDH due to small case numbers, which prevents the direct calculation of local Black-White disparities for maternal deaths; this data is only available at the statewide level. VDH employs variable data suppression rules, sometimes suppressing cell counts under 5 or flagging estimates based on counts under 20, to protect confidentiality and ensure statistical stability. For vital statistics, VDH uses a single-race classification system combined with a separate field for Hispanic origin. Notably, VDH's public-facing dashboards do not appear to flag the 2018 national methodological change related to the pregnancy checkbox on death certificates.

# Richmond Maternal Health Snapshot

## Infant Mortality

Data on the infant mortality rate for Richmond City is available on the Virginia Department of Health's (VDH) Maternal & Child Health (MCH) Indicators dashboard. The data can be disaggregated by race and ethnicity, allowing for the analysis of disparities. The most recent year of data available is 2023. Users can retrieve the precise current rate by using the filters for Richmond City and the year 2023 on the dashboard. However, rates may be suppressed or flagged as unstable in years with low numbers of infant deaths.

## Preterm Birth

The preterm birth rate for Richmond City is reported as 12.5% by the March of Dimes Peristats report card, which gives the city a grade of 'F'. This data is also available on the VDH MCH Indicators dashboard, which provides locality-level data with 2023 as the most recent year and includes options for race/ethnicity disaggregation.

## Maternal Mortality

A specific maternal mortality ratio (MMR) for Richmond City is not routinely published or publicly available from the VDH. Due to the small number of maternal deaths at the local level, publishing this data would pose risks to confidentiality and statistical stability. VDH provides maternal mortality data at the statewide and other higher geographic levels, where rates can be more reliably calculated and analyzed.

## Black White Disparities Summary

Black-White disparities for infant mortality and preterm birth in Richmond City can be analyzed using the VDH MCH Indicators dashboard, which allows for data filtering by race. However, a reliable Black-White disparity for the maternal mortality ratio cannot be calculated specifically for Richmond City because city-level MMR data is not publicly available. Disparities in maternal mortality can only be examined at the statewide level using VDH's Maternal Mortality dashboard and related reports.

## Most Recent Data Year

2023 is the most recent year for which data on infant mortality and preterm birth are available for Richmond City through the VDH Maternal & Child Health (MCH) Indicators dashboard.


# Vdh Dataset Availability Richmond

## Indicator

Infant Mortality

## Is Available For Richmond

True

## Most Recent Data Year

2023

## Is Race Disaggregated

True

## Data Source Portal

VDH Maternal & Child Health (MCH) Indicators Dashboard

## Indicator

Preterm Birth Rate

## Is Available For Richmond

True

## Most Recent Data Year

2023

## Is Race Disaggregated

True

## Data Source Portal

VDH Maternal & Child Health (MCH) Indicators Dashboard

## Indicator

Low Birth Weight

## Is Available For Richmond

True

## Most Recent Data Year

2023

## Is Race Disaggregated

True

## Data Source Portal

VDH Maternal & Child Health (MCH) Indicators Dashboard

## Indicator

Maternal Mortality

## Is Available For Richmond

False

## Most Recent Data Year

Not available at city level

## Is Race Disaggregated

True

## Data Source Portal

VDH Maternal Mortality Dashboard (Statewide Data)

## Indicator

Severe Maternal Morbidity (SMM)

## Is Available For Richmond

True

## Most Recent Data Year

2025

## Is Race Disaggregated

True

## Data Source Portal

VDH SMM Dashboard

## Indicator

PRAMS (Pregnancy Risk Assessment Monitoring System)

## Is Available For Richmond

True

## Most Recent Data Year

2025

## Is Race Disaggregated

True

## Data Source Portal

VDH PRAMS Data Dashboards


# Data Suppression Rules Analysis

## Vdh Suppression Policy

The Virginia Department of Health (VDH) does not apply a single, uniform suppression rule across all its datasets; the policy is context- and program-specific. For instance, the VDH NSSP/BioSense platform confidentiality policy mandates that any data cell with a count greater than zero and less than five must be suppressed. In contrast, other VDH dashboards, such as those for MCH indicators and health behaviors, use a different threshold, suppressing or advising caution for estimates derived from counts of less than 20 or those with wide confidence intervals. Furthermore, disease prevention pages note that data may be suppressed to maintain confidentiality when population sizes or case counts are small, without specifying a universal number.

## Cdc Wonder Suppression Policy

The CDC WONDER (Wide-ranging Online Data for Epidemiologic Research) platform's suppression rules vary depending on the specific dataset being accessed. However, for National Center for Health Statistics (NCHS) mortality data, there is a defined standard that has recently changed. Beginning with the 2023 data year, CDC WONDER suppresses crude and age-specific death rates, including infant and maternal mortality rates, if they are based on fewer than 10 deaths, replacing the rate with an asterisk. Prior to the 2023 data year, the standard was to suppress rates based on fewer than 20 deaths, labeling them as 'statistically unreliable.'

## Key Difference

The key difference in suppression policies is that VDH's rules are variable and program-dependent, with different thresholds such as '<5' or '<20' applied depending on the specific dataset and confidentiality requirements. In contrast, CDC WONDER, while having dataset-specific rules, applies a more standardized threshold for its widely used NCHS mortality data, which recently shifted from suppressing rates based on '<20' deaths to a less restrictive '<10' deaths threshold starting with 2023 data.


# Vdh Data Reporting Standards

## Provisional Vs Final Data Policy

The Virginia Department of Health (VDH) provides finalized historical data series through its 'Vital Statistics Annual Reports,' which have been compiled since 1913. However, in its contemporary public-facing dashboards, such as the MCH Indicators dashboard, VDH does not explicitly label the data as 'provisional' or 'final.' The data is presented as the most current output from the Vital Event Statistics Program (e.g., 2023 is the most recent year available). The 'About the Data' sections for these dashboards do not indicate that the figures are provisional once they are posted, suggesting they are presented as the current, official statistics.

## Nvss Pregnancy Checkbox Methodology Note

Based on a review of the Virginia Department of Health's (VDH) public-facing maternal mortality and PAMSS (Pregnancy-Associated Mortality Surveillance System) web pages and dashboards, there is no evidence that VDH explicitly flags or provides notes about the 2018 National Vital Statistics System (NVSS) pregnancy checkbox methodological break. The documentation on these pages focuses on the standard ICD-10 definitions for maternal deaths and VDH's own PAMSS processes, and no specific warning about the potential data discontinuity caused by the 2018 checkbox change was identified.


# Vdh Race Ethnicity Classification Schema

## Schema Description

The Virginia Department of Health (VDH) uses a single-race plus Hispanic-ethnicity classification schema for its vital statistics data. This means that race and ethnicity are treated as two separate concepts. Individuals are first classified by their ethnicity (Hispanic or Non-Hispanic) and then separately by their race. This approach avoids combined race/ethnicity categories.

## Ethnicity Categories

In its data systems, such as the Maternal & Child Health (MCH) Indicators and Maternal Mortality dashboards, VDH recognizes and presents only two ethnic classes: 'Hispanic' and 'Non-Hispanic'.

## Race Categories Basis

The race categories presented in VDH vital statistics are based on U.S. Census Single Race Categories. The population denominators used for calculating rates are also based on single-race population estimates. For birth data, the race reported is the race of the mother at the time of birth. For death data, it is the race of the decedent at the time of death.


# Health Opportunity Index Richmond Details

## Is Available For Richmond

True

## Geographic Granularity

Census Tract

## Data Sources Summary

The Virginia Health Opportunity Index (HOI) is a composite index maintained by the Virginia Department of Health's (VDH) Office of Health Equity. It is comprised of a set of 13 indicators that provide insight into social determinants of health. The index and its underlying data are distributed as an open data resource, available through platforms like ArcGIS and the Virginia state open data portal.


# Infant Mortality Statistics

## Overall Rate

The specific rate is not provided in the source documents, but it is available on the VDH Maternal & Child Health (MCH) Indicators dashboard.

## Data Year

2023

## Black Infant Mortality Rate

The specific rate for the Black population is not provided in the source documents. This data is available on the VDH MCH Indicators dashboard, but may be suppressed in some years depending on counts.

## White Infant Mortality Rate

The specific rate for the White population is not provided in the source documents. This data is available on the VDH MCH Indicators dashboard, but may be suppressed in some years depending on counts.

## Disparity Notes

The VDH MCH Indicators dashboard allows for race/ethnicity disaggregation to analyze disparities. However, the source documents note that exact city-by-race rates may be suppressed or considered unstable in some years depending on the number of infant deaths, which can limit direct disparity calculations from the public dashboard.


# Preterm Birth Statistics

## Overall Rate

12.5%

## Data Year

2023

## Black Preterm Birth Rate

The specific rate for the Black population is not provided in the source documents, but it is available for analysis on the VDH MCH Indicators dashboard.

## White Preterm Birth Rate

The specific rate for the White population is not provided in the source documents, but it is available for analysis on the VDH MCH Indicators dashboard.

## Disparity Notes

The VDH MCH Indicators dashboard allows for filtering by race/ethnicity to assess disparities. The source text does not provide a calculated disparity for preterm births in Richmond City.


# Low Birthweight Statistics

Data on low birth weight for Richmond City is available through the Virginia Department of Health (VDH). The VDH Maternal & Child Health (MCH) Indicators dashboard provides this indicator with 2023 as the most recent data year. The dashboard allows users to filter by geography (including Richmond City) and by race/ethnicity, which enables the analysis of Black-white disparities. Additionally, the VDH HealthStats portal provides tables for resident low/very low weight births by race and city/county. While the existence and accessibility of this data are confirmed, the specific current rates, historical trends, and calculated disparities for Richmond City are not enumerated in the provided source material; users are directed to these interactive VDH data portals to retrieve the information. Data may be subject to suppression rules if based on small counts.

# Maternal Morbidity And Mortality Statistics

## Indicator

Severe Maternal Morbidity (SMM)

## Rate Or Ratio

Not specified in the source text. The VDH dashboard notes that counts lower than 20 and their associated rates should be interpreted with caution, and city-level data may be suppressed.

## Geographic Level

Richmond City (data available via geography filters on the VDH SMM dashboard, but display may be limited by small numbers).

## Data Year Or Range

The VDH SMM dashboard was last updated on November 18, 2025, reflecting the latest processed hospital data at that time.

## Disparity Notes

The VDH SMM dashboard allows for filtering by race/ethnicity, but specific disparity data for Richmond City is not provided in the source text and may be limited by small count suppression. For maternal mortality (MMR), VDH does not publish city-level ratios due to small numbers; statewide race disparities are available in the Maternal Mortality dashboard and PAMSS/MMRT reports.


# Summary Of Racial Disparities

Significant racial disparities in maternal health outcomes can be analyzed for Richmond City, but with critical data gaps. The Virginia Department of Health's (VDH) public data portals, specifically the MCH Indicators dashboard, facilitate the examination of Black-White disparities for infant mortality and preterm birth rates at the city level, with data available up to 2023. These datasets use a single-race classification along with a separate Hispanic ethnicity variable, allowing for detailed demographic analysis. However, a major limitation in understanding local racial inequities is the absence of a publicly available maternal mortality ratio (MMR) for Richmond City. VDH does not publish this data at the local level due to the small number of events, which raises confidentiality and statistical stability concerns. Consequently, any analysis of Black-White disparities in maternal deaths must rely on statewide figures from the VDH Maternal Mortality dashboard and associated reports. This means that while disparities in infant outcomes are directly observable for Richmond, the full extent of racial disparities in maternal mortality within the city cannot be precisely quantified using publicly available data.

# Key Data Portals And Sources

## Portal Name

VDH Maternal & Child Health (MCH) Indicators Dashboard

## Description

Provides data and visualizations on key maternal and child health measures, including infant mortality, low birthweight, and preterm birth. Data is sourced from the Virginia Vital Event Statistics Program and can be filtered by year, geography (city/county), and race/ethnicity. The most recent data available is for 2023.

## Url

https://www.vdh.virginia.gov/data/maternal-child-health/mch-indicators/

## Portal Name

VDH Maternal Mortality Dashboard

## Description

Presents statewide data on maternal deaths, which are sourced from the Vital Event Statistics Program. It includes disaggregation by race/ethnicity. Due to small numbers and confidentiality, city-level data for maternal mortality is not published on this dashboard.

## Url

https://www.vdh.virginia.gov/data/maternal-child-health/maternal-mortality/

## Portal Name

VDH Severe Maternal Morbidity (SMM) Dashboard

## Description

Displays data on in-hospital deliveries from hospital discharge data. The dashboard includes filters for year, SMM type, geography, and race/ethnicity. It is noted that counts lower than 20 should be interpreted with caution, and city-level data may be suppressed.

## Url

https://www.vdh.virginia.gov/data/maternal-child-health/smm/

## Portal Name

VDH PRAMS Data Dashboards

## Description

Presents data from the Pregnancy Risk Assessment Monitoring System (PRAMS), a state-based survey. While the survey is statewide, the data can be specifically stratified for the Richmond City Health District (RCHD) due to oversampling in that area.

## Url

https://www.vdh.virginia.gov/prams/data-dashboards/

## Portal Name

VDH HealthStats Statistical Reports and Tables

## Description

A collection of updated statistical tables providing data on vital events such as total live births, low/very low weight births, and infant deaths, broken down by race and city/county. It also includes city/county profiles for births and infant/fetal deaths.

## Url

https://apps.vdh.virginia.gov/HealthStats/stats.htm

## Portal Name

VDH Vital Statistics Annual Reports

## Description

A historical archive of finalized vital statistics data for Virginia, with compilations available for each year since 1913. These serve as the finalized data series for vital events.

## Url

https://www.vdh.virginia.gov/vital-event-statistics-program/vital-events-statistics-progam/annual-report/

## Portal Name

VDH Health Opportunity Index (HOI)

## Description

A composite index available at the census tract level that provides insight into social determinants of health. It is maintained by the VDH Office of Health Equity and distributed via ArcGIS and the state's open data portal.

## Url

https://www.arcgis.com/home/item.html?id=b003c53b5e65488c90dfcd71df41bd1a


# Glossary Of Maternal Health Terms

## Term

Maternal Mortality

## Definition

A death while pregnant or within 42 days of the end of pregnancy, based on specific ICD-10 codes. The data is gathered from the Vital Event Statistics Program.

## Source Of Definition

VDH (Virginia Department of Health)

