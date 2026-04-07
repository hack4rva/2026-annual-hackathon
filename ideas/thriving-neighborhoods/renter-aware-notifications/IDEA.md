# Renter-Aware Notifications

**Source:** NEW  
**Pillar:** Thriving Neighborhoods  
**Problem Statement:** Richmond renters are not notified when zoning changes are proposed near their homes, silencing the majority-renter population from the planning process.

---

## Description

**Core assumption challenged:** notifying renters requires knowing who they are; the analysis argues **addressing mail to “Occupant”** at each **USPS DPV-validated** unit inside a buffer achieves notice without tenant PII. Richmond renters are often **not notified** when zoning changes are proposed nearby because notices go to owners, site signs, and publications renters may never see — in a majority-renter city this systematically excludes affected residents. **Reframed value proposition:** build an **address database** of deliverable units in the buffer, not a tenant registry.

## Key Approach

- **Pattern A:** On case filing, GIS draws notification buffer (e.g., 300 ft) from parcel → list delivery points via DPV → plain-language multilingual postcards to **Occupant** with hearing date, rights summary, QR/SMS opt-in — via print-mail API; cost-recovery models from peer cities cited.
- **Pattern B:** Add digital opt-in, ongoing alerts, and renter-impact reporting tied to participation analytics — policy and TCPA dependencies.
- Ordinance change and political will called out as primary barriers; technical pieces (GeoHub, DPV, mail APIs) described as commodity.
- Demo narrative in analysis: quantify gap between owner-only notice and full unit coverage on real cases, plus postcard and cost model.
- Optional landlord posting mandates and CBO supplement as policy layers.
