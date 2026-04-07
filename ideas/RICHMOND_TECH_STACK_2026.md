# Richmond City Government — Technology Stack Reference (2026)

**Purpose:** Single source of truth for scoring ideas against the Implementation Reality Rubric. Synthesized from 43 post-event research files, 7 PILLAR_FOUNDATION_DOCs, outreach drafts, and targeted web research (April 2026).

**Caveat:** This is research collateral, not an official City IT inventory. Point-in-time data may drift.

---

## Department of Information Technology (DIT)

- **Director:** Charles Todd
- **Reports to:** Deputy CAO of Finance and Administration
- **App inventory:** 428 applications citywide; 67 classified high-criticality
- **Endpoints:** ~5,000 computers (2,000 still on Windows 10 as of FY25; upgrades targeted by Oct 2025)
- **FY25 budget increase:** $5.4M operating ($2M baseline inflation + $3.2M one-time/replacement)
- **FY26 overall city budget:** $3B adopted by Council

### Active Modernization Projects (FY25-26)
- DPU customer information system replacement (targeted Feb implementation)
- Planning & permitting system RFP (**EnerGov/Intergov replacement**)
- Revenue admin transition from Munis → Oracle-based RVA Pay
- Social services case management (Harmony) replacement
- Legacy budget software modernization
- Windows 10 → Windows 11 device upgrades

### AI Policy (AR 2.13, effective June 2025)
- Applies to **all departments, agencies, offices** and contractors
- DIT oversees all AI governance, risk assessment, review/approval
- **Acceptable uses:** service optimization, public safety (with safeguards), chatbots/customer engagement, data analysis for policy, basic productivity (drafting, proofreading)
- **Requirements:** human oversight, transparency to public ("citizens shall be advised when interacting with AI"), minimize data collection, anonymization, explicit consent for personal data
- **Procurement:** must comply with existing procurement reqs; suppliers must document algorithms, training data, known biases
- **Enforcement:** disciplinary action up to termination; legal consequences for significant violations
- **Implication for ideas:** AI-powered tools are explicitly permitted but require DIT review/approval. Chatbots are a named acceptable use. Ideas using AI should expect a governance review before deployment.

---

## Systems — Open / Public API Access

These systems have confirmed programmatic access paths usable without City partnership:

### Socrata Open Data Portal (`data.richmondgov.com`)
- **Access:** SODA API (free, no auth required for public datasets)
- **Known datasets:**

| Dataset ID | Name | Update Cadence | Notes |
|------------|------|----------------|-------|
| `xqn7-jvv2` | City Contracts | ~Monthly | Last confirmed Mar 2026; ~1,367 rows |
| `5y73-enav` | Payment Register FY16+ | Regular | Multi-year spend history |
| `2dh8-bzzs` | Street Sweeping Zones | Unknown | GIS-adjacent; zone boundaries |
| `aq4i-4gpd` | Richmond Impact Map | **STALE** | Last updated Mar 31, 2023 |
| `vgg4-hjn8` | Service Requests (legacy) | **DEAD** | 2013-2015 SeeClickFix era; not current AvePoint |

- **Portal categories:** Well-Managed Government, Neighborhoods/Communities, Economic Growth, Community Safety, Transportation, Education/Workforce, Sustainability

### Legistar (Granicus) — Legislative Data
- **API:** OData, no auth: `https://webapi.legistar.com/v1/richmondva/`
- **Endpoints:** Matters, Bodies, Events, Attachments (with visibility flags)
- **Pagination:** 1,000 rows/page via `$top`/`$skip`
- **Data:** Council votes, Planning Commission actions, rezoning cases, SUPs
- **Limitation:** PDF-heavy attachments limit automation; no full-text search of staff reports

### GeoHub / ArcGIS (Esri)
- **Access:** ArcGIS REST Feature Services (no auth for public layers)
- **Key layers:**
  - Parcels / addresses (Assessor data)
  - Zoning districts
  - Plans of Development (**last updated June 2022 — stale**)
  - SUP/BZA layers (item pages exist; REST discoverable)
  - Neighborhoods (148 polygon features)
  - Development Tracker (projects >$1.5M since 2016)
- **Coordinate system:** StatePlane 2284 native; WGS84 via REST params
- **CIP Dashboard:** Beta, quarterly cadence. **Not anonymously queryable** — requires `geo.richmondgov.com` sign-in

### OpenGov Procurement Portal
- **URL:** `https://procurement.opengov.com/portal/rva`
- **Access:** Public browsing of IFBs/RFPs; electronic submission for vendors
- **Limitation:** No documented bulk API for solicitation data

### GRTC Transit (GTFS)
- **Access:** Static GTFS via Transitland or published ZIP
- **Data:** Routes, stops, schedules, trip geometries
- **Update:** Schedule changes published per service change

### State / Federal Open Data
- **eVA procurement data:** Virginia Open Data Portal (daily CSV updates)
- **HUD LIHTC/NHPD:** Federal property-level datasets (download/API)
- **VDH maternal/child health:** Dashboard exports, Richmond-filtered
- **Census ACS:** Standard API
- **VDOT:** FeatureServer layers for transportation projects

---

## Systems — Closed / No Public API

These systems are confirmed in use but have **no documented external integration path**:

### RVA 311 (AvePoint Citizen Services)
- **Platform:** AvePoint on Microsoft Dynamics 365 / Azure
- **Launched:** ~June 2017 (replaced SeeClickFix)
- **Channels:** Phone (weekday hours), web (RVA311.com), mobile app (24/7 with queueing)
- **Internal integration:** BizTalk middleware to Cityworks for dispatch
- **Public API:** **None.** AvePoint Graph API exists in product but not exposed for Richmond
- **Open data:** Legacy dataset only (2013-2015 SeeClickFix era)
- **Implication:** Any idea requiring 311 submission, read, or routing integration is **blocked** without a DIT partnership

### EnerGov (Tyler Technologies) — Online Permit Portal
- **URL:** `https://energov.richmondgov.com/EnerGov_Prod/selfservice`
- **Public API:** **None.** UI-only citizen self-service
- **Data:** Permits, zoning compliance, AHTEP compliance tracking
- **Support:** CSSHelp@richmondgov.com
- **Note:** Planning & permitting RFP in progress (FY25-26) — system may be replaced
- **Implication:** Ideas requiring permit data must use GeoHub layers or manual curation

### RAPIDS / Oracle E-Business Suite (ERP)
- **Role:** City financial/procurement ERP
- **Vendor portal:** Oracle iSupplier (`rva.gov/procurement-services/supplier-portal`)
- **Public API:** **None** beyond Socrata open data extracts
- **Contract documents:** Stored in OnBase ECM
- **Implication:** Financial data available only through Socrata datasets; direct ERP access requires DIT

### VITA CobblestoneContracts (State IT Contracts)
- **URL:** `https://vita.cobblestonesystems.com/public/`
- **API:** **None** — web search only
- **Implication:** State contract data must be manually searched or scraped

### Help1RVA (findhelp)
- **Listings:** ~1,800 programs
- **API:** Partner/paid access only — **not free public**
- **Implication:** Service discovery ideas cannot programmatically access Help1RVA listings

### Unite Virginia (Unite Us)
- **Type:** Closed-loop referral network for organizations
- **API:** Enterprise-only integrations
- **Implication:** Cross-agency coordination ideas cannot integrate without organizational partnership

### B2GNow (OMBD Vendor Directory)
- **URL:** `https://richmondombd.diversitycompliance.com/?TN=richmondombd`
- **API:** **None documented** — web portal only
- **Implication:** MBE vendor matching requires manual data or partnership with OMBD

---

## Systems — Partial / Partnership-Dependent

### CultureWorks / Localist (Arts Events)
- **Feeds:** ICS, RSS, JSON API
- **Rate guidance:** <1 req/s; partnership permission recommended for bulk
- **Status:** Not a City system; nonprofit-operated

### VaCMS / CommonHelp (State Social Services)
- **Owner:** Virginia DSS (state-level)
- **Integration:** Not connected to workforce/housing systems locally
- **Implication:** Cross-agency service ideas cannot access client data without state-level MOUs

### RVA Business Portal
- **Modernized:** January 2025
- **Function:** BPOL/BTPP filing
- **API:** **None documented**

---

## Infrastructure Patterns

### What the City Already Operates
- **Microsoft ecosystem:** Dynamics 365, Azure (via AvePoint), likely M365 (VITA is standardizing statewide)
- **Oracle ecosystem:** RAPIDS ERP, iSupplier, migrating to RVA Pay
- **Esri ecosystem:** GeoHub/ArcGIS for GIS
- **Tyler ecosystem:** EnerGov for permitting (replacement RFP in progress)
- **Granicus ecosystem:** Legistar for legislative management
- **Socrata/Tyler Data & Insights:** Open data portal

### What a Hackathon Prototype Can Realistically Use
1. **Static sites** hosted externally (GitHub Pages, Netlify, Vercel) — no City IT involvement
2. **Socrata SODA API** — public, documented, no auth
3. **Legistar OData API** — public, no auth, 1000-row pages
4. **GeoHub ArcGIS REST** — public layers, no auth for published services
5. **GRTC GTFS** — public transit data
6. **Federal/state open data** — HUD, VDH, Census, VDOT, eVA
7. **SMS via Twilio or similar** — commodity cloud, no procurement needed
8. **PDF generation** — client-side, no server required

### What Requires City Partnership (6-18 month timeline)
1. Any read/write to RVA 311 (AvePoint)
2. Any data from EnerGov beyond published GeoHub layers
3. Any direct RAPIDS/OnBase access
4. Any real-time DPW fleet GPS data
5. Any Help1RVA/findhelp bulk data
6. Any B2GNow/OMBD bulk vendor data
7. Any cross-agency data sharing (HIPAA, FERPA, etc.)

### Hackathon Adoption History
- **RVA Hacks 2026** is the first civic hackathon. No prior adoption precedent exists.
- **CivStart 2024** included Richmond; pilot outcomes not documented.
- **No formal pathway** for adopting hackathon prototypes into City operations exists in published materials.
- **Implication:** Ideas must be self-sustaining or have a clear champion who can navigate the informal adoption path.
