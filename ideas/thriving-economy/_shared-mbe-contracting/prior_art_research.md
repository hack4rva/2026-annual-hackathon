# Prior Art Research — MBE Contracting Discovery

**Pillar:** A Thriving Economy
**Problem Statement:** Help minority-owned businesses identify and understand City contracting opportunities that match their capabilities.
**Applies to:** Richmond Contract Navigator
**Research Date:** April 1, 2026
**Method:** Synthesis of existing pillar research corpus (`pillar-repos/pillar-thriving-economy/research/`)

**Primary sources from existing corpus:**
- `E1_prior_art_catalog.md` — Comparable tools nationally
- `E2_prior_art_pattern_transfer.md` — Patterns from other cities
- `E4_prior_art_pitfalls.md` — Failures and cautionary tales
- `E5_prior_art_weekend_viability.md` — Weekend-build patterns
- `C1_services_existing_landscape.md` — Existing Richmond services
- `C2_services_contracting_support.md` — Contracting support ecosystem
- `D1_data_inventory_contracting.md` — Procurement data sources
- `D2_data_formats_procurement.md` — Data formats and API access
- `A1_problem_landscape_mbe_contracting.md` — Core problem landscape

---

## 1. Federal Procurement Platforms and Their Limitations for Local MBEs

The federal government operates a layered discovery ecosystem — SAM.gov for registration and active opportunities above $25,000, the Small Business Search for vendor profiles, FPDS-NG for historical award data, and USASpending.gov for award tracking (`E1_prior_art_catalog.md`). Specialized programs layer on top: 8(a) sole-source contracts up to $4.5M (non-manufacturing) or $7M (manufacturing), HUBZone set-asides with 10% price preference, and WOSB/EDWOSB certifications for women-owned firms (`C2_services_contracting_support.md`).

These federal systems are architecturally mature but irrelevant for the core problem. A Richmond MBE owner seeking *City of Richmond* contracts must navigate an entirely separate stack — BidNet Direct, OpenGov, iSupplier — none of which interoperate with the federal platforms. The federal ecosystem demonstrates what standardized procurement discovery looks like at scale (centralized posting, registered vendor profiles, historical analytics), but no city has successfully replicated this architecture locally (`E1_prior_art_catalog.md`, `C2_services_contracting_support.md`).

**Transferable pattern:** SAM.gov's model of a single vendor profile reusable across all federal solicitations is the conceptual target. The problem is that no equivalent exists at the municipal level — vendors must maintain parallel registrations in BidNet Direct, iSupplier, OMBD, and the state SWaM directory (`E2_prior_art_pattern_transfer.md`).

---

## 2. Municipal Procurement Platforms: Commercial and Open-Source

### Commercial Platforms in Use

**BidNet Direct / MITN** — The City of Richmond's primary solicitation platform. Vendors register, subscribe to commodity code notifications, and access IFBs and RFPs. The platform provides a centralized web-based interface but has no documented public API for third-party integration (`D2_data_formats_procurement.md`).

**OpenGov Procurement** — The City uses OpenGov for managing formal IFBs and RFPs, accessible at `procurement.opengov.com`. Publishes successful and unsuccessful bidders, bid amounts, and procurement documents for both open and closed solicitations. Provides supplementary bid-level data that the City Contracts dataset on Socrata does not include (`D2_data_formats_procurement.md`).

**eVA (Virginia eProcurement)** — The state-level marketplace used by state agencies, colleges, and many local governments. A Richmond MBE seeking both state and city opportunities must maintain separate registrations in eVA and BidNet Direct (`C2_services_contracting_support.md`).

**iSupplier** — The City's separate vendor payment and management portal, requiring W-9 forms, ACH/EDI documentation, and bank letters. Architecturally decoupled from both BidNet Direct and OMBD (`D2_data_formats_procurement.md`).

### Open-Source and Civic Tech Approaches

**OpenProcurement** — An open-source e-procurement toolkit implemented at national scale through Ukraine's Prozorro system. Demonstrates that transparent, competitive procurement can be built on open APIs with multiple front-end "e-Malls" accessing a central data layer. The architectural pattern — open API backend with competing interfaces — is transferable, but the implementation scale (national government) dwarfs a municipal weekend build (`E1_prior_art_catalog.md`).

**BillTrack50 Regulation Tracking** — Transforms inconsistent regulatory bulletins across state agencies into searchable, actionable intelligence using AI-powered contextual matching. Demonstrates the pattern of using NLP to normalize jargon-heavy government publications into plain language — directly relevant to making procurement solicitations accessible to MBE owners who don't speak procurement (`E1_prior_art_catalog.md`).

---

## 3. Richmond's Existing Procurement Data Landscape

### City Contracts Dataset (Socrata)

The primary open data source is the City Contracts dataset (`xqn7-jvv2`) on `data.richmondgov.com`, containing five years of awarded contracts with monthly updates. Fields include Agency/Department, Contract Number, Contract Value, Supplier, Procurement Type (IFB, RFP, Agency Request), Description, Solicitation Type, and Effective dates (`D2_data_formats_procurement.md`).

Access is well-documented: CSV download with BOM encoding for Excel compatibility, SODA 3.0 API (requires application token), SODA 2.1 legacy endpoints, and OData v4 for Power BI/Excel integration. Contract values range from tens of thousands to the $33.6M Motorola public safety radio system (`D2_data_formats_procurement.md`).

**Critical limitation:** This dataset reflects *awarded* contracts, not *open* opportunities. It is useful for historical pattern analysis (which departments spend on what, which vendors win) but cannot power a real-time matching tool. The monthly update cadence means a newly posted solicitation won't appear in this dataset until after it's been awarded (`D2_data_formats_procurement.md`).

### OMBD Vendor and MBE/ESB Directories

OMBD maintains directories of registered Minority Business Enterprises and Emerging Small Businesses with company names, contacts, addresses, business types, and commodity codes. MBE/ESB registration completes within 24-48 hours (information) and 30 days (certification). These directories are accessible through the Procurement Transparency Dashboard but lack a documented API for automated matching (`D2_data_formats_procurement.md`, `C1_services_existing_landscape.md`).

### FPDS-NG / D1 Dataset (Federal)

The D1 dataset covers all federal contract awards reported to FPDS-NG, with fields including Award ID, Agency, Vendor Name, Award Date, Contract Value, NAICS Code, and Set-Aside designation. Accessible via bulk CSV download, REST API, and interactive explorer. Useful for federal opportunity analysis but irrelevant for City-level contracting (`D1_data_inventory_contracting.md`).

---

## 4. The Support Ecosystem: Rich but Fragmented

Richmond's MBE support ecosystem includes at least ten distinct organizations providing overlapping but uncoordinated services (`C1_services_existing_landscape.md`, `C2_services_contracting_support.md`):

| Organization | Primary Service | Contracting-Specific? |
|---|---|---|
| **OMBD** (City) | MBE registration, 1-on-1 counseling, workshops, vendor directory | Yes — direct procurement support |
| **SBSD** (State) | SWaM/DBE certification, Scaling4Growth, vendor directory | Yes — state certification gateway |
| **Virginia APEX Accelerator** | Free 1-on-1 procurement counseling, Bid Match Service | Yes — federal and state focus |
| **Capital Region SBDC** | No-cost business advising, government contracting guidance | Partially — general + contracting |
| **SCORE Richmond** | Mentoring, workshops ("Selling to the Federal Government") | Partially — workshops on contracting |
| **Metropolitan Business League** | Networking, VCU Procurement Connector, teaming relationships | Indirectly — relational, not informational |
| **Richmond Public Library** | Richmond Room 1-on-1 appointments, legal forms, databases | Indirectly — research support |
| **OCWB** (City) | Entrepreneurship training, financial empowerment | No — general business support |
| **Women's Business Center** | Counseling, seminars, office space for women entrepreneurs | No — general business support |
| **RVA Works** | Training, community, 1 Million Cups | No — general business support |

**The coordination gap is the defining problem.** No single entity maintains responsibility for ensuring MBE owners receive appropriate referrals across this ecosystem. A business owner visiting OMBD receives local procurement support but may not be referred to Virginia APEX Accelerator for federal opportunities or SBDC for business plan development. The 1717 Collective coordinates ecosystem-wide, but its own visibility among MBE owners is limited (`C1_services_existing_landscape.md`, `C2_services_contracting_support.md`).

---

## 5. Transferable Patterns from Other Jurisdictions

### Pattern: Unified Vendor Profile (UK Find a Tender)
The UK's Find a Tender platform, launched February 2025 under the Procurement Act 2023, is the single central digital platform for all UK contracting authorities. Suppliers register once, store core business details reusable across bids, and manage procurement notices from planning through award. This is the architectural ideal — one profile, one platform, full lifecycle — that no U.S. municipality has achieved (`E1_prior_art_catalog.md`).

### Pattern: Personalized Requirement Wizards (NYC MyCity Business)
NYC's MyCity Business Step-by-Step Wizard asks entrepreneurs a short questionnaire and generates personalized lists of required licenses and permits. Available in 10+ languages. Demonstrates the pattern of replacing "go read all the regulations" with "answer these questions and we'll tell you what you need." Directly transferable to a "what do I need to bid on City contracts?" onboarding flow (`E1_prior_art_catalog.md`).

### Pattern: AI-Powered Jargon Translation (BillTrack50)
BillTrack50 uses AI contextual matching to normalize inconsistent regulatory language across agencies into searchable, plain-language intelligence. The same pattern applies to procurement: translate IFB/RFP documents from procurement-speak into capability descriptions that MBE owners can match against their own services (`E1_prior_art_catalog.md`).

### Pattern: Neighborhood Business Managers (Boston)
Boston's Office of Small Business provides neighborhood business managers who answer permitting and licensing questions in person, plus dedicated documentation office hours. This hybrid digital-plus-human model acknowledges that some entrepreneurs need personal guidance alongside any digital tool (`E1_prior_art_catalog.md`).

### Pattern: Core vs. Discretionary Components (Implementation Science)
The implementation science literature distinguishes core intervention components (must retain for effectiveness) from discretionary components (can adapt to context). For a weekend-build MBE matching tool, the core component is "plain-language search over active opportunities matched to business capabilities." Everything else — certification tracking, referral routing, multilingual support — is discretionary and can be deferred without undermining the core value proposition (`E2_prior_art_pattern_transfer.md`).

---

## 6. Why Similar Tools Fail

### Failure Mode: Platform Fragmentation Without Integration
The research identifies platform fragmentation as the primary gap nationally. Small businesses must register with multiple platforms (eVA, SAM, BidNet Direct, iSupplier), monitor opportunities across fragmented sources, and maintain separate credentials. Every jurisdiction that has attempted to improve MBE participation without addressing this fragmentation has produced tools that add a layer rather than replace one (`C2_services_contracting_support.md`).

### Failure Mode: Relying on Vendor Self-Service for Discovery
Virginia APEX Accelerator offers a Bid Match Service, but it operates on a request basis — vendors must provide detailed capability descriptions and wait for staff to run matches. This is not self-service, real-time discovery. Any tool that requires MBE owners to invest significant upfront effort before receiving value will see low adoption (`C2_services_contracting_support.md`).

### Failure Mode: Building for the Already-Connected
The Metropolitan Business League, NAWBO, and ChamberRVA provide excellent relational networking — for businesses already plugged into those networks. MBE owners who are socially isolated, non-English-speaking, or operating in sectors without strong trade associations are structurally excluded from these channels. A digital tool that assumes users will discover it through the same networks that already serve connected businesses reproduces the access gap it's trying to close (`C1_services_existing_landscape.md`).

### Failure Mode: Historical Data Masquerading as Opportunity Discovery
The City Contracts dataset on Socrata is sometimes cited as a procurement transparency resource, but its monthly update cadence and focus on awarded (not open) contracts make it useless for real-time opportunity matching. A tool built on this dataset alone would show MBE owners contracts they've already missed (`D2_data_formats_procurement.md`).

### Failure Mode: Certification Timing Mismatch
Nationally, many RFPs require MBE certification at time of bid. Virginia's SWaM certification takes ~60 business days. Firms mid-process are excluded from opportunities even when they're qualified. No existing tool addresses this pipeline gap between "I want to bid" and "I'm certified to bid" (`A1_problem_landscape_mbe_contracting.md`).

---

## 7. Weekend-Build Viability Assessment

The research corpus identifies patterns that ship in a weekend and survive:

**Static-first architecture.** The 2nd City Zoning model (Chicago) demonstrates that pre-fetched data served from static hosting (GitHub Pages) can ship in a weekend and run for years with minimal ops. A weekend-viable MBE tool could pre-fetch the Socrata City Contracts dataset and OMBD directory, enable keyword search with plain-language descriptions, and serve from static hosting (`E5_prior_art_weekend_viability.md`).

**AI-powered translation layer.** An LLM can convert procurement jargon into plain-English capability descriptions at query time. This is the core innovation in "Richmond Contract Navigator" — use an AI layer to bridge the vocabulary gap between how procurement officers write solicitations and how MBE owners describe their businesses. This is feasible in a weekend if the data source is accessible (`E1_prior_art_catalog.md`).

**Minimum viable data pipeline.** The Socrata SODA API provides programmatic access to the City Contracts dataset. If BidNet Direct or OpenGov expose any feed for active solicitations (even RSS), a weekend build can ingest it. If not, a manual seed dataset of recent solicitations suffices for demo purposes (`D2_data_formats_procurement.md`).

**What's NOT weekend-viable:** Unified vendor registration across BidNet Direct, iSupplier, and OMBD. Real-time push notifications to MBE owners. Multilingual support beyond what an LLM provides natively. Integration with the state SWaM certification workflow. These require institutional partnerships, not code.

---

## 8. Key Takeaways for Judging

1. **The core problem is information asymmetry, not information absence.** Richmond publishes procurement data openly. The barrier is that solicitation documents are written in procurement jargon, scattered across multiple platforms, and never matched to business capabilities.

2. **No U.S. city has deployed a production-grade AI-powered contract matcher for MBEs.** This is genuinely novel territory. The closest analogs are BillTrack50 (regulatory language normalization) and NYC MyCity Business (personalized requirement wizard).

3. **The fragmentation is structural.** BidNet Direct, OpenGov, iSupplier, OMBD, eVA, and SAM.gov are architecturally separate systems with no shared vendor identifier. Any tool that doesn't acknowledge this fragmentation is oversimplifying the problem.

4. **The support ecosystem is rich but uncoordinated.** OMBD, SBSD, APEX Accelerator, SBDC, SCORE, and MBL each own a piece of the puzzle. The highest-leverage intervention may be connecting existing resources, not building new ones.

5. **Weekend viability depends on data access.** If a team can access active solicitation data (not just historical awards), an AI-powered plain-language matcher is technically feasible in 48 hours. If they can only access the Socrata dataset, the demo is limited to historical analysis.
