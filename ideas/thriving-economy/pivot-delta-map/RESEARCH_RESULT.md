# Mapping Main Street Dynamics: How U.S. cities visualize openings, closures, and ownership shifts to steer neighborhood investment

## Executive Summary

* **Cities already do this—using local admin data plus storefront inventories:** New York City, San Francisco, Philadelphia, Chicago, and Seattle run neighborhood-scale maps and dashboards that track openings, closures, vacancy, and ownership changes. They rely heavily on local business licenses and commercial inventories (e.g., Live XYZ) rather than state or federal data. For example, NYC's 2024 Storefront Activity report maps vacancy and turnover quarterly, revealing that 1 in 3 storefront businesses opened since Q1 2020 [1]. 
* **Local business-license data outperform state filings for neighborhood mapping:** San Francisco’s Registered Business Locations dataset (updated daily) includes location start/end dates, NAICS codes, and an "Administratively Closed" flag, with built-in joins to corridors and neighborhoods [2] [3]. Philadelphia’s L&I licenses add issuance, expiration, and inactive dates alongside owner fields [4]. 
* **Commercial storefront inventories close the “ground truth” gap:** NYC’s Live XYZ dataset relies on ground surveys conducted on a rolling 90-day basis [1] [5]. This provides near-real-time visibility into occupancy, turnover, and corridor health, capturing shifts like the growth in food and beverage establishments [1].
* **Turnover + vacancy together reveal market condition and program fit:** High turnover with falling vacancy signals a recovering market, while high turnover with flat or rising vacancy flags market friction (e.g., high rents or quality-of-life issues) [1]. 
* **Public realm and BID stewardship measurably reduce vacancy:** NYC data shows that storefronts under scaffolding have a 17.6% vacancy rate, significantly higher than the citywide average, while areas near plazas or Privately Owned Public Spaces (POPS) have materially lower vacancy [1]. Business Improvement Districts (BIDs) also consistently outperform surrounding neighborhoods [1].
* **Ownership-change analytics are possible—but require entity resolution:** Detecting owner transfers requires record linkage over time (normalizing LLC/DBA strings, address continuity). The U.S. Census Bureau's MAMBA (Multiple Algorithm Matching for Better Analytics) approach demonstrates that machine-learning string matching (using Jaro-Winkler, q-grams, etc.) outperforms simple rule-based joins [6].
* **Equity targeting strengthened outcomes during recovery:** Seattle’s Office of Economic Development (OED) mapped COVID-19 recovery investments by census tract and Race and Social Equity Index, prioritizing high-displacement tracts for stabilization grants and empty-storefront activations [7].
* **Census Business Builder and CBP are context layers—not real-time event feeds:** Cities use Census products and Bureau of Labor Statistics (BLS) data to benchmark sector mix and wages, but they do not support block-level, high-frequency closure detection [8].
* **KPI discipline and cadence convert maps to management:** NYC updates storefront metrics quarterly and shares its Live NYC Map across 15+ agencies [1] [5]. Seattle adopted outcome KPIs (jobs retained, reopenings, foot traffic) tied to specific project types [7].

## What U.S. cities are doing now — proven tools and where they work best

Leading cities use local license and tax files combined with storefront inventories to map openings, closures, and vacancy at the corridor and neighborhood scale. Ownership-change tracking is emerging via entity resolution.

### NYC’s two-track model: Live NYC Map + DCP Storefront Activity

New York City utilizes a comprehensive storefront dataset powered by Live XYZ, which maps over 150,000 storefronts and public spaces [5]. The Department of City Planning (DCP) uses this data for its Storefront Activity report, providing nearly real-time occupancy, vacancy, and turnover metrics by corridor and Neighborhood Tabulation Area (NTA) [1]. The data reveals that 1 in 3 storefronts are new since Q1 2020, and the insights are used quarterly across 15+ agencies to target public realm and BID investments [1] [5].

### San Francisco’s “Registered Business Locations”

San Francisco publishes a daily-updating "Registered Business Locations" dataset maintained by the Treasurer & Tax Collector [2] [3]. It includes location start and end dates, NAICS codes, owner names, and an "Administratively Closed" flag for businesses that have not communicated with the city for three years [2] [3]. The data is geocoded and joined to supervisor districts and analysis neighborhoods, providing a strong base for mapping closures and inferring ownership changes [9].

### Philadelphia licenses and the Pew dashboard

Philadelphia provides L&I Business Licenses data featuring issue, expiration, and inactive dates, along with owner and legal entity names [4] [10]. While the city notes that some records are missing associated addresses, the data is updated daily and supports corridor-level dynamics [4] [10]. Additionally, the Pew Charitable Trusts built a Philadelphia Business Dashboard using Experian credit data to track financial stability and bankruptcy risk at the ZIP code level [8] [11].

### Seattle’s license layer + equity-focused grant maps

Seattle maintains a nightly export of active business licenses [12]. During the pandemic recovery, the Seattle Office of Economic Development (OED) mapped Small Business Stabilization Fund grants and neighborhood economic recovery investments against the city's Race and Social Equity Index [7]. This allowed the city to target funding to highly impacted tracts and track explicit KPIs, such as jobs retained, businesses reopened, and empty storefronts activated [7].

| City/Org | Tool/Dataset | Geography | Events Tracked | Primary Sources | Refresh | Notable Use |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **NYC DCP** | Storefront Activity (Live XYZ) | Corridor, NTA | Occupancy, Vacancy, Turnover, Open/Close | Live XYZ ground survey; agency ops | Quarterly | Target public realm/BID investments; interagency operations [1] |
| **NYC SBS** | Live NYC Map | Address/corridor | Occupancy, Vacancy, Business metadata | Live XYZ | Daily / 90-day remap | 500+ users across 15 agencies and 90+ orgs [5] |
| **San Francisco TTX** | Registered Business Locations | Address/corridor/neighborhood | Start/End, Admin Closed, NAICS, Owner | TTX registrations/updates | Daily | Closures mapping; join to corridors for ED use [2] [3] |
| **Philadelphia L&I** | Business Licenses | Address/tract | Issue/Expire/Inactive, Status, Owners | L&I licensing | Daily | Corridor-level license dynamics; owner mix [4] [10] |
| **Seattle OED** | Stabilization/Recovery Grant Maps | Tract/district | Grants, activations, outcomes | OED admin + license feeds | Program cycles | Equity-targeted funding; empty storefront activation [7] |

*Takeaway: Cities that successfully map neighborhood business dynamics rely on local administrative data (licenses/taxes) and dedicated storefront surveys, rather than state or federal aggregates.*

## Data-source choices — what to use for what

To achieve near-real-time mapping of small-business openings, closures, and ownership changes, economic development teams must combine multiple data sources. Local license and tax data provide precise, frequent events, while storefront inventories offer ground-truth vacancy. State Secretary of State (SOS) filings provide legal ownership metadata but often lack spatial precision [13]. Census products offer excellent benchmarking context but cannot track real-time corridor churn [8].

| Source | Timeliness | Geocodability | Coverage | Ownership signals | Cost/Access | Best use |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Local business license/registration** | Weekly–daily | Address-level | Broad local | Owner fields; status dates | Open data | Open/close inference, owner mix |
| **Storefront inventory (Live XYZ/field)** | 90-day cycle; daily portal | Exact storefront | Public-facing uses | None legal; visual occupant | Licensed | Real-time vacancy/turnover [1] [5] |
| **State SOS filings** | Monthly–quarterly, varies | Often poor for unit addr | Legal entities | Officers/agents; formation/dissolution | Mixed; APIs/vendors | Ownership enrichment, not geocoding [13] |
| **Yelp/Google Places** | Continuous | POI level | Consumer-facing sectors | None reliable | APIs/costs | Corroborate openings/closures [14] |
| **Card/foot traffic (Placer, SafeGraph)** | Weekly–monthly | Device / panel | Visit/revenue proxies | None legal | Licensed | Program impact, demand shifts |
| **Census CBB/CBP/BDS/QCEW** | Annual/quarterly | Tract/ZIP/MSA | National | None | Public | Benchmarks, context [8] |

*Takeaway: No single data source provides a complete picture. The optimal stack uses local licenses for address-level event triggers, storefront inventories for physical vacancy verification, and Census/BLS data for macroeconomic benchmarking.*

## Making ownership-change analytics practical

Detecting ownership changes is significantly harder than detecting openings or closures because businesses frequently change legal names (e.g., LLCs) while maintaining the same consumer-facing brand. 

### Event types and decision rules

To map ownership dynamics, cities must define specific event types:
* **Ownership transfer:** The address and NAICS code remain the same, but a new owner name or legal entity appears with minimal downtime.
* **Closure:** The license becomes inactive or expires, and the space is verified as vacant via a storefront inventory.
* **Relocation:** The owner and business name persist, but the address changes. The license is terminated at the origin and opened at the destination.

### Record-linkage pipeline

Because administrative data is messy, cities must build an entity-resolution pipeline. The U.S. Census Bureau's MAMBA (Multiple Algorithm Matching for Better Analytics) framework demonstrates how to do this effectively [6]. The pipeline should:
1. Normalize names (strip entity suffixes like "LLC" or "Inc."), DBAs, and addresses.
2. Use stable identifiers when present (e.g., EINs or local account numbers).
3. Apply fuzzy-matching to owner/legal names and addresses using multiple string comparators (e.g., Jaro-Winkler, q-grams, Longest Common Substring) [6].
4. Use temporal windows (e.g., ±90 days) to classify a transfer versus a closure followed by a new opening.

### Precision/recall targets and resourcing

Machine learning classifiers, such as Random Forests trained on clerical review data, can achieve over 95% precision in business record linkage [6]. Economic development teams should aim for ≥90% precision on owner-change flags, keeping a "human-in-the-loop" (using tools like OpenRefine) to review ambiguous LLC transfers. 

## From insight to action — what ED teams did with the data

Cities have successfully linked corridor metrics to specific programs—such as public realm improvements, BID support, and grant targeting—and measured the outcomes.

### NYC: Using vacancy/turnover to target BIDs and public-realm fixes

NYC DCP used Live XYZ data to prove that public realm improvements directly impact storefront health. The data showed that storefronts obscured by construction scaffolding suffer a 17.6% vacancy rate, while storefronts adjacent to pedestrian plazas and POPS have significantly lower vacancy rates (e.g., 3.9% at 85 Broad Street) [1]. Furthermore, BIDs like Morris Park (2.7% vacancy) and Park Slope Fifth Ave (7.1% vacancy) drastically outperformed their surrounding neighborhoods [1]. The city uses these insights to prioritize shed removal enforcement, expand Open Streets, and provide micro-grants to smaller BIDs [1].

### Seattle: Equity-driven small business stabilization and storefront activation

Seattle’s Office of Economic Development (OED) used geographic data to distribute Small Business Stabilization Fund grants. By mapping investments against the Race and Social Equity Index, the city ensured that neighborhoods most impacted by COVID-19 received targeted funding [7]. The city tracked explicit KPIs, including the number of jobs retained, businesses that remained open, and empty storefronts activated through retail and artist pop-ups [7].

### San Francisco & Philadelphia: Admin closings and license churn to steer outreach

San Francisco utilizes the "Administratively Closed" flag in its tax data to identify businesses that have ceased operations but failed to formally dissolve [2]. Philadelphia uses L&I license issuance, expiration, and inactive dates to monitor corridor churn [4]. These temporal markers allow corridor managers to trigger targeted outreach to businesses approaching expiration or to landlords sitting on chronically inactive licenses.

### Chicago: Owner datasets enable consolidation monitoring

Chicago publishes a Business Owners dataset linked to its Business Licenses via account numbers [15] [16]. This allows the city to track ownership consolidation and identify corridors where corporate landlords or chain operators are displacing independent microbusinesses, enabling tailored procurement and tenanting strategies.

## Operating model — how to stand this up in 90 days

To move from raw data to actionable insights, economic development organizations should start with a minimum viable stack and hardwire the resulting dashboard into budget and program cycles.

### Minimum viable stack and schema

* **Inputs:** Local business licenses/registrations (must include issue/expire/inactive dates and owner names), a parcel/point geocoder, and corridor/neighborhood boundary polygons. An optional commercial storefront inventory (like Live XYZ) can be added for physical vacancy verification.
* **Schema:** Create a standardized table containing `business_id`, `address_id`, `NAICS`, `owner_id`, `license_status`, and relevant dates. Build an event table that flags `open`, `close`, and `transfer` events based on the record-linkage rules.

### Governance, cadence, and KPIs

Dashboards should be refreshed quarterly, with monthly operational huddles to review the data. Role clarity is essential: ED analytics teams manage the data, while corridor managers and BIDs execute the interventions.

| KPI | Definition | Cadence | Owner |
| :--- | :--- | :--- | :--- |
| **Vacancy rate** | Unoccupied storefronts / total storefronts (excl. construction/coming soon) [1] | Quarterly | Planning/ED |
| **Turnover** | % storefronts with change of occupant/status q/q [1] | Quarterly | ED Analytics |
| **Admin-closed** | Count of admin-closed licenses [2] | Monthly | Licensing/Tax |
| **Ownership-change** | Unique addresses with owner change (based on linkage ruleset) | Quarterly | ED Analytics |
| **Equity reach** | % funds to high-need tracts (index-defined) [7] | Quarterly | OED/Finance |
| **Activation count** | Pop-ups/events/public realm completions [7] | Monthly | BIDs/DOT/ED |

*Takeaway: Tying specific KPIs to designated owners ensures that the visualization tool drives actual policy interventions rather than just serving as an informational map.*

### Budget and procurement guardrails

Adopt an open-data-first approach with a vendor-agnostic schema. If procuring commercial storefront data, include option clauses for data continuity and escrow. Ensure privacy reviews are conducted before publishing any owner-level data, restricting PII to internal operations.

## Risk, bias, and replication — what to watch

### Common error modes and fixes

Administrative data is prone to artifacts. Address nulls are common (as noted in Philadelphia's L&I data) and should be fixed with parcel joins [4]. License renewals do not always equal continued physical operation; this should be validated with street-level imagery or ground surveys. Finally, "Administratively Closed" statuses often lag true physical closures by months or years [2]; combining this data with foot-traffic proxies can help identify "zombie" licenses.

### Vendor dependence and continuity

Relying heavily on a single commercial vendor (e.g., Live XYZ) creates continuity risks if the contract ends. Cities should document metric definitions independently of the vendor feed and pilot alternative validation methods, such as structured ground surveys conducted by BID staff.

### Privacy/ethics

While tracking ownership changes is vital for understanding market consolidation, publishing raw owner names and home addresses can violate privacy. Cities must publish aggregates at the corridor or tract level and mask PII in public-facing dashboards.

## Appendix A — Field checklist for actionable analytics

To successfully map openings, closures, and owner changes, your administrative datasets must contain the following fields:
* **Must-have:** `business_id`/account number, `owner_name`/entity type, `DBA` (Doing Business As), `address` (standardized), `NAICS` code, `license_type`/status, `issue_date`, `expiration_date`, `inactive_date`, and `administratively_closed` flags.
* **Nice-to-have:** `EIN` (hashed for privacy), `parcel_id`, phone/web details, joins to violation/inspection records, and corridor/neighborhood IDs.

## Appendix B — Corridor boundary options and joins

Adopt locally meaningful boundaries for analysis. Use city-defined commercial corridors or BID boundaries where available, as these reflect actual economic ecosystems better than arbitrary census tracts. Fall back to Census Tracts or Neighborhood Tabulation Areas (NTAs) only for joining demographic context (e.g., Census Business Builder data).

## Appendix C — Example SQL/Python patterns

Simple reproducible transformations are required to build the event table. Use Python libraries like `recordlinkage` or `dedupe` to apply Jaro-Winkler and q-gram string comparators to owner names [6]. In SQL, use window functions (`LAG()`, `LEAD()`) partitioned by `address_id` to detect when a license expires and a new license with a different `owner_id` but the same `NAICS` appears within a 90-day window, flagging this as a probable ownership transfer.

## References

1. *Storefront Activity in NYC Neighborhoods -2024*. https://www.nyc.gov/assets/planning/download/pdf/planning-level/housing-economy/nyc_dcp_storefront_report_1024.pdf
2. *Registered Business Locations - San Francisco | DataSF*. https://data.sfgov.org/Economy-and-Community/Registered-Business-Locations-San-Francisco/g8m3-pdis
3. *Registered Business Locations - San Francisco | DataSF*. https://data.sfgov.org/Economy-and-Community/Registered-Business-Locations-San-Francisco/g8m3-pdis/about_data
4. *L&I Business Licenses*. https://data.phila.gov/visualizations/li-business-licenses
5. *SBS Rolls Out Live NYC Map Featuring Real-Time Comprehensive Data on Small Businesses & Public Places Across NYC - SBS*. https://www.nyc.gov/site/sbs/about/pr20231122-livenycmap.page
6. *Business Record Linkage with Python by John Cuffe U.S. ...*. https://www2.census.gov/ces/wp/2018/CES-WP-18-46.pdf
7. *City of Seattle, Washington Recovery Plan Performance ...*. https://home.treasury.gov/system/files/136/Seattle_2021-Recovery-Plan_SLT-3134.pdf
8. *Methodology*. https://www.pew.org/-/media/assets/2022/11/pew-philadelphia-business-dashboard-methodology.pdf
9. *Registered Business Locations - San Francisco (from DataSF, pulled daily) | ArcGIS Hub*. https://hub.arcgis.com/maps/acf4f7e7a34b4f1c93ece37aff05bb1a
10. *Licenses and Inspections Business Licenses - OpenDataPhilly*. https://opendataphilly.org/datasets/licenses-and-inspections-business-licenses/
11. *Philadelphia Business Dashboard - Dataset - Catalog - Data.gov*. https://catalog.data.gov/dataset/philadelphia-business-dashboard
12. *Seattle Business License | Seattle GeoData*. https://data-seattlecitygis.opendata.arcgis.com/datasets/SeattleCityGIS::seattle-business-license/about
13. *What you need to know before sourcing data directly from US state registries – OpenCorporates*. https://blog.opencorporates.com/2025/09/15/sourcing-data-directly-from-us-state-registries/
14. *Business Closures and (Re)Openings in Real-Time Using Google Places: Proof of Concept*. https://www.mdpi.com/1911-8074/15/4/183
15. *licenses - Dataset - Catalog - Data.gov*. https://catalog.data.gov/dataset/?tags=licenses
16. *Business Owners - Catalog*. https://catalog.data.gov/dataset/business-owners
