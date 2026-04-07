# Innovation Analysis: Pivot Delta Map

## 1. Blue Ocean Reframing (ERRC Grid)

**Core assumption challenged:** Entrepreneurs need help *starting* businesses. The Pivot Delta Map challenges this: sometimes the most valuable intelligence is understanding where businesses are *dying, shifting, and consolidating* — and what that means for market opportunity or community displacement.

| Action | Element | Rationale |
|--------|---------|-----------|
| **Eliminate** | National/state aggregate economic data for local decisions | Census Business Builder and BLS QCEW are context layers, not real-time event feeds. They operate at tract/ZIP/MSA level with annual/quarterly lag. Eliminate the pretense that federal data tells you what's happening on a Richmond corridor this month. |
| **Reduce** | Reliance on self-reported business health metrics | Surveys and voluntary registrations miss the "zombie" businesses — those that stopped operating but never formally dissolved. San Francisco flags these with an "Administratively Closed" marker in their tax data. Reduce reliance on active registrations by cross-referencing license expiration with ground-truth signals. |
| **Raise** | Ownership-change detection | Chicago publishes a Business Owners dataset linked to licenses, enabling consolidation monitoring. NYC's Live XYZ maps 150,000+ storefronts quarterly. Raise the bar from simple open/close counting to detecting ownership transfers, chain displacement, and corridor consolidation patterns. |
| **Create** | Corridor health scores | NYC proved that BIDs outperform surrounding neighborhoods (Morris Park: 2.7% vacancy vs. neighborhood average), and that storefronts under scaffolding have 17.6% vacancy. Create a composite corridor health score combining turnover rate, vacancy rate, ownership concentration, and new business formation — something no city currently publishes as a single metric. |

## 2. Rapid Ideation (Crazy 8s)

| # | Idea | Provocation Level |
|---|------|-------------------|
| 1 | **Corridor Delta Heatmap** — Map Richmond corridors by net business change (openings minus closures) over trailing 12 months. Green = growing, red = shrinking, yellow = churning (high turnover but stable count). | Standard |
| 2 | **NAICS Sector Shifts** — Show which business types are growing vs. declining by neighborhood. "Food & beverage +12% in Scott's Addition; retail -8% in Carytown." Uses Virginia SCC registration data + City licenses. | Standard |
| 3 | **Vacancy Chain Tracker** — When a business closes, track how long the space sits empty before a new tenant arrives. NYC's DCP does this with Live XYZ ground surveys. Could Richmond use Google Places or Yelp status changes as a proxy? Research says yes — academic studies show Google Places can detect closures in real-time. |  Moderate |
| 4 | **Ownership Concentration Index** — For each corridor, calculate what percentage of businesses are owned by the same legal entity (after LLC/DBA normalization). Flags corridors at risk of chain displacement. Requires entity resolution per Census MAMBA methodology. | Moderate |
| 5 | **"Opportunity Score" for Empty Storefronts** — Combine: vacancy duration, corridor foot traffic trend, nearby business mix, and zoning compatibility. Score each empty storefront as an opportunity for different business types. | **Provocative** |
| 6 | **Equity Displacement Alerts** — When a corridor shows rapid ownership change + rising rents + declining independently-owned businesses, trigger an alert to economic development staff. Seattle's OED mapped recovery investments against Race and Social Equity Index — apply the same logic proactively. | **Provocative** |
| 7 | **"What Closed Here Before?" Timeline** — For any address, show the history of businesses that operated at that location: name, type, duration, and closure reason (if known). Entity resolution across historical license records. | Moderate |
| 8 | **Entrepreneur Location Intelligence** — An aspiring business owner enters their business type; system shows the 5 best corridors in Richmond for that type based on: competitor density, foot traffic, vacancy availability, and complementary business mix. | Standard |

## 3. Rapid Design Sprint

**Problem sentence:** Richmond economic development staff and aspiring entrepreneurs cannot see neighborhood-level business dynamics — where new businesses are opening, where they're closing, which corridors are gaining energy, and which are losing it — because this intelligence is locked in fragmented state registrations and City license databases that nobody aggregates or visualizes.

**User journey (4 steps):**
1. User (ED staff or entrepreneur) selects a Richmond corridor or enters an address
2. Map shows: recent openings (green dots), recent closures (red dots), current vacancies (gray), with NAICS category filters
3. Drill-down panel shows: corridor metrics (turnover rate, vacancy rate, net change, dominant business types), trend charts over time
4. For entrepreneurs: "If you're opening a [business type], here are the corridors with the best conditions" recommendation

**Prototype shape:** Interactive web map (Leaflet/Mapbox) with Virginia SCC business registration data geocoded to Richmond addresses. Colored dots for openings/closures. Side panel with corridor-level metrics. Optional: GeoHub parcel data for address matching.

**First test:** Show the prototype to 3 Richmond economic development staff (LISC, SCORE, City ED office). Ask: (a) "Does this match what you observe on the ground?" (b) "What would you do differently with this information?" (c) "What's missing?" Ground-truth the data against their lived knowledge of corridor health.

## 4. Opportunity Mapper

### Opportunity 1: Economic Development Corridor Monitoring
- **User:** Richmond economic development staff, LISC, SCORE, Main Street organizations
- **Outcome:** Data-driven targeting of business support resources to corridors showing decline or displacement
- **Workflow:** Monitor corridor health scores → identify at-risk corridors → deploy targeted outreach and grants
- **Dependencies:** Virginia SCC data (public), City business license data (may need FOIA/partnership), GeoHub parcels for geocoding
- **Richmond relevance:** Seattle mapped Small Business Stabilization Fund grants against Race and Social Equity Index to target recovery investments. Richmond has no equivalent corridor monitoring capability.

### Opportunity 2: Aspiring Entrepreneur Location Intelligence
- **User:** Prospective Richmond business owners choosing a location
- **Outcome:** Data-informed site selection showing which corridors are favorable for their business type
- **Workflow:** Enter business type → see corridor rankings by relevant metrics (vacancy, competition, foot traffic proxies, business mix)
- **Dependencies:** Same data stack plus optional foot-traffic proxy data (Google Places or Placer.ai)
- **Richmond relevance:** No Richmond tool currently helps entrepreneurs understand neighborhood business dynamics. NYC's DCP Storefront Activity report is the gold standard — this would be Richmond's first equivalent.

### Opportunity 3: Displacement Early Warning System
- **User:** City Council, equity advocates, affordable commercial space organizations
- **Outcome:** Early identification of corridors experiencing rapid ownership change, chain displacement, or business loss in communities of color
- **Workflow:** Dashboard flags corridors with: rising turnover + declining independent ownership + demographic overlay
- **Dependencies:** Entity resolution on ownership data (challenging), Census demographic data, corridor boundaries
- **Richmond relevance:** Richmond's equity priorities align directly with this use case. Seattle's OED used Race and Social Equity Index for grant targeting — Richmond could use a similar approach for commercial corridor preservation.

## 5. Problem Scoping

| Dimension | Score (1-5) | Rationale |
|-----------|:-----------:|-----------|
| **Impact** | 4 | Unique visibility into Richmond's business landscape. NYC uses storefront data across 15+ agencies to target BID investments and public realm interventions. |
| **Feasibility** | 3 | Virginia SCC data is public but requires geocoding and entity resolution. City license data may need FOIA. The analysis is meaningful but the data pipeline has 1-2 blockers. |
| **Data readiness** | 3 | Virginia SCC filings are public but often lack precise street addresses (SCC has registered agent addresses, not business locations). City license data would solve this but access is uncertain. |
| **Problem clarity** | 4 | Well-understood by ED professionals. San Francisco, NYC, Philadelphia, Chicago, and Seattle all address this problem with varying tools. |
| **Demo-ability** | 5 | A map showing where businesses are opening and closing, with corridor health scores, is immediately gripping. Visual storytelling at its best. |
| **Total** | **19/25** | |

**Weekend MVP shapes:**
- **Shape A (8 hours):** Static map of Richmond with Virginia SCC new business registrations (last 12 months) geocoded by registered agent address. Color-coded by NAICS sector. Basic corridor counts.
- **Shape B (16 hours):** Add historical comparison (year-over-year change). Incorporate dissolution/withdrawal filings as "closures." Calculate net change by corridor. Add a side panel with corridor metrics.
- **Shape C (24 hours):** Add entity resolution for ownership change detection (using Census MAMBA-inspired fuzzy matching on LLC names). Include a "corridor health score" combining turnover, net change, and sector diversity. Optional Google Places verification.

## 6. Assumption Mapping

| # | Assumption | Risk (1-5) | Uncertainty (1-5) | R × U | Validation Method |
|---|-----------|:----------:|:-----------------:|:-----:|-------------------|
| 1 | Virginia SCC registrations can be reliably geocoded to specific Richmond corridors (not just registered agent offices, which may be attorney/CPA addresses) | 5 | 4 | **20** | Download SCC data for Richmond; check address quality; compare against known business locations for 20 businesses |
| 2 | SCC dissolution/withdrawal filings meaningfully approximate actual business closures (vs. legal restructurings) | 4 | 4 | **16** | Cross-reference 20 SCC dissolutions against ground-truth (Yelp/Google Places "permanently closed" markers) |
| 3 | City business license data is obtainable in structured form within the hackathon timeframe | 4 | 5 | **20** | Contact City licensing office or check Richmond open data portal for business license datasets |
| 4 | Corridor boundaries exist in a standardized, mappable form for Richmond | 3 | 3 | **9** | Check GeoHub for commercial corridor polygon layers; if absent, use Census tract boundaries as fallback |
| 5 | The resulting visualization reveals patterns that ED professionals don't already know from experience | 4 | 3 | **12** | Show prototype to 2 LISC or SCORE staff; ask "Does anything here surprise you?" |
| 6 | Entity resolution on LLC names is feasible at reasonable accuracy without commercial tools | 3 | 3 | **9** | Test Python `recordlinkage` or `dedupe` library on a sample of 100 SCC records with Jaro-Winkler matching |

**Top 3 to validate first:**
1. **Assumption 1 (R×U=20):** Can SCC addresses be geocoded to actual business locations? SCC registered agent addresses are frequently attorneys or CPAs, not business storefronts. OpenCorporates warns that state registry data often has poor spatial precision.
2. **Assumption 3 (R×U=20):** Is City license data obtainable? Philadelphia and San Francisco publish daily-updating license datasets. Richmond may or may not. This is a binary go/no-go gate.
3. **Assumption 2 (R×U=16):** Do SCC dissolutions = real closures? San Francisco's "Administratively Closed" flag explicitly addresses this gap. Without a similar signal, you're counting legal events, not economic events.

## Key Takeaway

Pivot Delta Map is one of the most visually compelling ideas in the entire pillar — a map showing where Richmond's commercial corridors are thriving or dying is immediately graspable and emotionally resonant. But the research reveals a critical data quality challenge: state SCC registrations are legal events, not physical business operations. NYC solves this with Live XYZ ground surveys of 150,000+ storefronts. San Francisco solves it with a daily-updating Registered Business Locations dataset with geocoded addresses and "Administratively Closed" flags. Richmond lacks both. The weekend build succeeds or fails on data access: if City license data is obtainable in structured form, the map is credible. If you're limited to SCC registered agent addresses, the visualization will show attorney offices, not storefronts. Validate data access on day one, hour one.
