# Mid-sized cities’ contract expiration transparency: what exists, what works, what’s next

## Executive Summary

An analysis of mid-sized U.S. cities (100,000–500,000 population) reveals a stark reality: true public-facing procurement contract expiration dashboards are exceptionally rare. While many cities publish open data or utilize eProcurement portals, the specific exposure of structured contract expiration dates (`end_date`) remains a critical missing link. 

* **Scarcity of true public expiration trackers:** Among the cities reviewed, Richmond, VA is the only confirmed example with public contract data explicitly exposing expiration dates (`effective_to`) alongside a dedicated procurement transparency landing page [1] [2]. Most peers rely on solicitation portals or PDF repositories without structured end dates.
* **Data model is the linchpin for expirations:** Where datasets include `end_date` or `term_end_date` (e.g., Cambridge, MA's dataset includes `start_date`, `end_date`, `has_renewal_option`, and `renewals_remaining` [3]), building an expiration tracker is technically trivial. Where cities only publish PDFs (e.g., Long Beach [4]) or rely solely on eProcurement portals (e.g., Tacoma [5]), public expiration tracking stalls.
* **Adoption signals are weak unless embedded in workflow:** Few cities publish staff usage metrics. Proxy signals show interest in procurement data when it’s findable, but do not prove internal adoption. For instance, Cincinnati’s older procurement opportunities dataset accrued over 318,000 views before being archived, but it was not an expirations tool [6] [7].
* **No hard-dollar savings publicly tied to dashboards:** We found no mid-sized city case documenting measurable cost savings from an expiration dashboard alone. Audits point to compliance gaps that such tools can help surface, but the tools themselves do not fix the process [8].
* **Equity impact requires tagging and targets:** Dashboards without Minority/Women-owned Business Enterprise (MWBE) or Small Business Enterprise (SMB) attributes will not move participation. Disparity studies recommend exactly the data reforms a tracker needs [9] [10].
* **Common failure mode is "link farm" transparency:** Several cities centralize links to eProcurement, PDF contracts, and vendor registries but lack a machine-readable contracts table with an `end_date` [11] [4].

## Objective and scope

The decisive barrier to contract expiration transparency is not tooling, but the presence of an `end_date` and renewal schema fed from the Enterprise Resource Planning (ERP) system and embedded in procurement Standard Operating Procedures (SOPs). Without this structured data, public dashboards stall.

### Defining a public expiration tracker

A true public expiration tracker requires minimum data elements: `contract_id`, `supplier`, `start_date`, `end_date`, `renewals_remaining`, and `status`. This distinguishes it from standard solicitation portals (which only show active bids) and PDF repositories (which are not machine-readable for expiration alerting).

## Confirmed examples and near-misses

Richmond is the only confirmed mid-sized city with public end dates and a transparency hub [1] [2]. Cambridge exposes the right fields and is moving toward a procurement dashboard [10] [3]. Other cities lack structured end dates.

### Mid-sized cities and public contract-expiration transparency (as of 2026-04-02)

| City | Pop (approx) | Platform | Expiration field present? | Public expiration dashboard? | Adoption metrics | Cost-savings evidence | MWBE/SMB impact evidence |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Richmond, VA** | ~240k [12] | Socrata + OpenGov | Yes (`effective_to`) [1] | Landing page consolidates data; no dedicated interactive expiry list published yet [2] | None published | None published | Links to Minority Business registry; no impact metrics [2] |
| **Cambridge, MA** | ~118k | Socrata + OpenGov | Yes (`start_date`, `end_date`, `has_renewal_option`, `renewals_remaining`) [3] | No public expiry dashboard found; dataset enables it | Dataset views 533; downloads 55 [3] | None published | Disparity study shows underutilization; council urged "Create a Procurement Dashboard" [9] [10] |
| **Tacoma, WA** | ~221k | Open data portal + SAP Ariba | Not found | No | — | — | — |
| **Long Beach, CA** | ~462k | Opendatasoft + Laserfiche + Long Beach Buys | No (contracts stored as PDFs) [4] | No | — | — | Has local SBE program; no dashboard metrics [13] |
| **Spokane, WA** | ~230k | OpenData page + ProcureWare | Not found | No | — | — | — |
| **Cincinnati, OH** | ~309k | Socrata | N/A (opportunities dataset, now archived) [6] | No | High public views (318k) pre-archive [6] | — | Inclusion goal fields in solicitations (SBE/MBE/WBE) [7] |
| **Baton Rouge, LA**| ~227k | Socrata | PO/Contracts dataset exists but legacy PO table shows no `end_date` [14] | No | — | — | — |

*Takeaway: The presence of a structured `end_date` field is the primary bottleneck. Cities using Socrata (Richmond, Cambridge) have successfully exposed this data, while those relying on document repositories (Long Beach) or pure solicitation portals cannot support automated expiration tracking.*

### Richmond, VA: Socrata xqn7-jvv2 + OpenGov

Richmond’s Socrata dataset (City Contracts `xqn7-jvv2`) is updated monthly and includes `effective_from` and `effective_to` fields [1]. The city recently launched a Procurement Transparency Dashboard to consolidate links to the Open Data Portal, OpenGov (for bids), and the Minority Business Development Vendor Registry [2] [11]. While this is a strong foundation, impact metrics and specific adoption rates are not yet published.

### Cambridge, MA: end_date + renewals fields present

Cambridge publishes a "Contracts bid list" dataset (`gp98-ja4f`) on Socrata that includes `start_date`, `end_date`, `has_renewal_option`, and `renewals_remaining` [3]. A 2023 disparity study found significant underutilization of MBEs (3.43% of dollars vs. 17.93% availability) and recommended creating a procurement dashboard and tracking vendor demographics [9] [10]. Furthermore, a FY24 audit highlighted procurement compliance issues, underscoring the need for better process controls [8].

### West/Midwest/South scans: why dashboards haven’t emerged

In cities like Tacoma, Long Beach, and Spokane, reliance on eProcurement portals (SAP Ariba, ProcureWare) and document repositories (Laserfiche) without a dedicated contracts API blocks expiration tracking [5] [4] [15]. To unlock dashboards, these cities must publish minimal contract tables extracted from their ERPs.

## Adoption and impact

Public usage proxies exist, but staff adoption and hard-dollar savings are rarely published. Impact depends entirely on integrating the tracker into the procurement cadence and measuring process KPIs. For example, Cambridge's dataset shows minimal engagement (533 views) [3], while Cincinnati's archived opportunities dataset had over 318,000 views, indicating public appetite for procurement data when it is relevant to winning business [6].

## Equity implications

Dashboards without MWBE/SMB attributes will not move participation. Disparity studies, such as the one conducted in Cambridge, recommend the exact data reforms an expiration tracker needs: tracking vendor ethnicity, race, and gender, and setting goals [10]. Pairing expiration data with MWBE pipeline planning allows cities to focus outreach on expiring categories with historical underutilization.

## Common failure modes and risk mitigations

"Link farms" and static PDFs fail to provide actionable transparency [11] [4]. Data freshness and governance are hidden risks; compliance gaps will blunt benefits unless SOPs change. 
* **Risks:** No `end_date` field, stale data, no clear data owner, and siloed ERPs.
* **Mitigations:** Establish a minimum schema, enforce a monthly refresh SLA, name a product owner, and drive change management within the procurement team.

## Platform and integration guidance

Socrata (or ArcGIS Hub) combined with ERP extracts delivers the fastest path to a tracker. While platforms like OpenGov handle sourcing well, they do not automatically expose an `end_date` API for executed contracts [2]. Document systems like Laserfiche require a parallel structured contracts table to be useful for analytics [4].

## Implementation playbook

* **Phase 0 (2 weeks):** Confirm ERP fields; map `end_date` and renewals; designate an owner; define a refresh SLA.
* **Phase 1 (4–6 weeks):** Publish the dataset; ship public expiry pages (e.g., 90/180/365-day views); set alert subscriptions; train buyers.
* **Phase 2 (6–12 weeks):** Add MWBE tags; build an equity re-compete planner; publish a quarterly KPI scorecard.

## Metrics and accountability

Public dashboards need public metrics to sustain support. Cities should track:
1. % of contracts re-competed on time (≥120 days pre-expiration).
2. Emergency/sole-source share.
3. Average bids per re-compete.
4. MWBE/SMB share of re-competed awards.

## Richmond, VA context appendix

Richmond has all the building blocks in place. The Socrata dataset (`xqn7-jvv2`) includes `effective_to` and is updated monthly [1]. The city uses OpenGov for IFBs/RFPs [2]. The immediate next steps should be to publish specific expiring-with/without-renewals views, set up automated alerts, define the Department of Procurement as the data owner, and plan phase 2 equity tagging tied to the OMBD registry [1] [2] [16].

## References

1. *City Contracts | Open Data Portal | City of Richmond, Virginia*. https://data.richmondgov.com/Well-Managed-Government/City-Contracts/xqn7-jvv2
2. *Procurement Transparency Dashboard | Richmond*. https://rva.gov/procurement-services/procurement-transparency-dashboard
3. *Contracts bid list | Open Data Portal | City of Cambridge*. https://data.cambridgema.gov/Purchasing/Contracts-bid-list/gp98-ja4f
4. *Contracts online*. https://www.longbeach.gov/cityclerk/services/contracts-online/
5. *Contracting Opportunities | City of Tacoma*. https://tacoma.gov/government/departments/finance/procurement-and-payables-division/purchasing/contracting-opportunities/
6. *Fetched web page*. https://data.cincinnati-oh.gov/api/views/pid3-z56k
7. *Business Opportunities (Archived) | Tyler Data & Insights*. https://data.cincinnati-oh.gov/dataset/Procurement-Opportunities-and-Contract-Awards/pid3-z56k
8. *city of cambridge, massachusetts*. https://www.cambridgema.gov/Departments/Finance/publications/2025/fy24singleaudita133
9. *City disparity study finds significant underutilization of minority‑owned firms; staff to draft legislation to adopt recommendations | Citizen Portal*. https://citizenportal.ai/articles/6515201/virginia/richmond-city-independent-city/city-disparity-study-finds-significant-underutilization-of-minorityowned-firms-staff-to-draft-legislation-to-adopt-recommendations
10. *Economic Development and University Relations Committee*. https://cambridgema.granicus.com/MinutesViewer.php?view_id=1&clip_id=580&doc_id=e0475e50-6912-11ee-b4aa-0050569183fa
11. *City Administration Expands Transparency, Releases Procurement Transparency Dashboard | Richmond*. https://rva.gov/press-releases-and-announcements/news/city-administration-expands-transparency-releases-procurement
12. *Richmond city, Virginia Population 2026*. https://worldpopulationreview.com/us-counties/virginia/richmond-city
13. *Small Business Enterprises*. https://www.longbeach.gov/finance/business-info/compliance/small-business-enterprises/
14. *Legacy Purchase Orders | Open Data BR*. https://data.brla.gov/Government/Purchase-Orders/54bn-2sqf
15. *Procurement Portal - City of Spokane, Washington*. https://my.spokanecity.org/administrative/purchasing/procurement-portal/
16. *City of Richmond - Supplier Diversity Management System*. https://richmondombd.diversitycompliance.com/
