# Innovation Analysis: OMBD Proactive Match Dashboard

## 1. Blue Ocean Reframing (ERRC Grid)

**Core assumption challenged:** Richmond's OMBD needs a better vendor directory. The research says OMBD already has B2Gnow — the dominant diversity management system in the US, federating 200+ directories with 125+ certification types. The problem isn't the directory; it's the *proactive matching* between certified vendors and upcoming opportunities, which B2Gnow supports but Richmond may not be using.

| Action | Element | Rationale |
|--------|---------|-----------|
| **Eliminate** | Passive directory browsing | NYC's SBS Online Directory hosts 11,382 certified M/WBEs, but only 21.77% won a new contract in FY25. Static directories don't convert. Eliminate the "browse and hope" model entirely. |
| **Reduce** | Alert fatigue from broad commodity codes | BidNet Direct documents that 3-digit NIGP codes cause vendor fatigue and irrelevant alerts. B2Gnow integrated 9,000+ five-digit NIGP codes and 40,000+ seven-digit codes specifically to enable precise targeting. Reduce noise by enforcing 5-digit minimum matching. |
| **Raise** | Outreach precision and timing | B2Gnow's Outreach Management module supports targeted campaigns by certification type, NAICS/NIGP codes, geography, and demographics. Raise the bar from blast emails to curated, opportunity-specific vendor shortlists — what the NYC Comptroller explicitly recommends. |
| **Create** | A public-facing match dashboard showing MBEs which upcoming City contracts match their capabilities | B2Gnow is an internal tool. No city publishes a vendor-facing dashboard that says "Here are the 5 upcoming contracts that best match your certified capabilities." Create this as a public layer over OMBD's internal system. |

## 2. Rapid Ideation (Crazy 8s)

| # | Idea | Provocation Level |
|---|------|-------------------|
| 1 | **"Contracts Coming Your Way" Feed** — Certified MBE logs in → sees a personalized feed of upcoming Richmond contracts matched to their NIGP/NAICS codes, sorted by relevance and timeline. | Standard |
| 2 | **Match Quality Score** — Each contract recommendation shows a transparency score: "85% match — your NAICS codes overlap, you've done similar dollar-range work, and this department has historically contracted your business type." | Standard |
| 3 | **"You Missed This" Alerts** — Retroactive notifications showing MBEs contracts they *would have* matched but didn't bid on. Creates awareness of patterns and missed opportunities. | Moderate |
| 4 | **Subcontractor Teaming Board** — The NYC Comptroller found $33B in contracts with zero subcontract records. Create a matching board where primes post subcontracting needs and MBEs post availability, by NIGP code. | **Provocative** |
| 5 | **Procurement Calendar with Push Notifications** — A public calendar of upcoming solicitations with SMS/email alerts triggered 30/14/7 days before bid deadlines. Linked to vendor NIGP profiles. | Standard |
| 6 | **"OMBD Scorecard" — Public Accountability Dashboard** — Show Richmond's M/WBE spend percentage, top departments by MBE utilization, and trend over time. Philadelphia publishes 31.4% M/W/DSBE utilization; Boston publishes $155.6M in M/WBE spend. Richmond publishes neither. | **Provocative** |
| 7 | **Capacity Signal Matching** — Go beyond NAICS codes: match on capacity signals like revenue band, employee count, bonding capacity, and geographic service area. B2Gnow captures this data; it's about surfacing it in matches. | Moderate |
| 8 | **Pre-Bid Coaching Sessions** — For each high-value upcoming contract, host a 30-minute virtual session where OMBD explains the scope and evaluation criteria. DemandStar claims 3x more bid responses from similar vendor engagement. | Moderate |

## 3. Rapid Design Sprint

**Problem sentence:** Richmond's certified MBE vendors cannot efficiently discover which upcoming City contracts match their capabilities because OMBD's B2Gnow system operates internally, no public matching tool exists, and vendors rely on personal networks or broad, noisy email blasts.

**User journey (4 steps):**
1. MBE vendor registers with their NIGP/NAICS codes and business capabilities (or imports from existing OMBD certification)
2. Dashboard shows upcoming Richmond contracts matched to their profile, sorted by relevance score and bid deadline
3. Vendor drills into a match → sees: contract scope summary, estimated value, department, historical incumbents (from Socrata), and match rationale
4. Vendor opts in for push notifications on new matches and bid deadline reminders

**Prototype shape:** Web dashboard with a vendor profile input form (NAICS codes + business description), a matched contracts feed pulling from Socrata `xqn7-jvv2`, and match scores based on NAICS overlap and contract characteristics. Separate view for OMBD staff showing aggregate match analytics.

**First test:** Load 10 real MBE vendor profiles (from public certification directories). Run matching against active/expiring Socrata contracts. Present results to 3 OMBD-affiliated MBE vendors and ask: "Are these matches relevant? Would you bid on any of these?"

## 4. Opportunity Mapper

### Opportunity 1: Vendor-Facing Proactive Contract Matching
- **User:** Richmond certified MBE vendors
- **Outcome:** Vendors discover relevant contracts weeks before bid deadlines without manual searching
- **Workflow:** Create profile → receive matched contract feed → get push alerts → prepare bids
- **Dependencies:** Socrata contracts dataset (`xqn7-jvv2`) for contract data, NAICS/NIGP code mapping, vendor profile input
- **Richmond relevance:** B2Gnow has no public API (a documented structural wall). This tool sidesteps B2Gnow by using Socrata data + vendor self-reported profiles to create matching externally.

### Opportunity 2: OMBD Staff Outreach Targeting
- **User:** OMBD procurement officers and equity program staff
- **Outcome:** Staff can generate curated MBE shortlists for specific upcoming procurements, rather than sending blast emails
- **Workflow:** Select an upcoming contract → system recommends qualified MBEs by NAICS match → staff reviews and conducts targeted outreach
- **Dependencies:** Vendor profile database (built by the tool or imported), Socrata contract data
- **Richmond relevance:** The NYC Comptroller explicitly recommends "curated M/WBE lists for specific commodities" to replace broad listserv blasts. This implements that recommendation.

### Opportunity 3: MBE Utilization Accountability
- **User:** City Council, equity advocates, OMBD leadership
- **Outcome:** Public visibility into Richmond's MBE contracting performance over time
- **Workflow:** Dashboard shows: total MBE spend, MBE spend by department, trend over time, comparison to peer cities
- **Dependencies:** Socrata contracts data (ideally with vendor diversity flags, which may not exist)
- **Richmond relevance:** Boston ($155.6M, 12% discretionary), Philadelphia (31.4% M/W/DSBE), NYC (14.17% prime M/WBE) all publish utilization rates. Richmond does not.

## 5. Problem Scoping

| Dimension | Score (1-5) | Rationale |
|-----------|:-----------:|-----------|
| **Impact** | 5 | Directly addresses PS1 (MBE Contracting Discovery). Proactive matching is the single highest-leverage intervention per the research. |
| **Feasibility** | 3 | B2Gnow has no public API — the documented structural wall. Must work around it using Socrata data + vendor self-reporting. Matching logic is straightforward (NAICS overlap + dollar range). |
| **Data readiness** | 3 | Socrata contracts data is public. But vendor profiles must be self-reported or manually seeded. No structured list of Richmond's certified MBEs is publicly accessible. |
| **Problem clarity** | 5 | The NYC Comptroller's reports document this exact problem in exhaustive detail. 78% of certified M/WBEs in NYC never won a new contract in FY25 despite having access to discovery tools. |
| **Demo-ability** | 4 | A personalized "contracts for you" feed is immediately compelling. Showing the match rationale adds credibility. |
| **Total** | **20/25** | |

**Weekend MVP shapes:**
- **Shape A (8 hours):** Vendor enters NAICS codes → system returns matching contracts from Socrata, sorted by expiration date and value. Simple keyword + NAICS overlap matching. No account system.
- **Shape B (16 hours):** Add match quality scoring (NAICS overlap %, dollar range fit, department history). Add a vendor profile save/recall system. Show historical context for each contract (past winners, rebid patterns).
- **Shape C (24 hours):** Add an OMBD staff view with aggregate analytics (how many MBEs matched to each contract, most underserved NAICS categories). Add a "subcontractor teaming board" for MBEs to find joint venture partners by capability.

## 6. Assumption Mapping

| # | Assumption | Risk (1-5) | Uncertainty (1-5) | R × U | Validation Method |
|---|-----------|:----------:|:-----------------:|:-----:|-------------------|
| 1 | B2Gnow's lack of public API can be meaningfully worked around using Socrata data + vendor self-reporting | 5 | 3 | **15** | Build the matching prototype with Socrata data only; test whether results are useful without B2Gnow vendor data |
| 2 | MBE vendors will self-report their NAICS codes and capabilities into a new tool (instead of relying on OMBD) | 4 | 4 | **16** | Interview 5 MBE vendors: "Would you create a profile in a new tool to receive matched contract alerts?" |
| 3 | Socrata contracts data contains enough upcoming/active solicitations (not just historical awards) to power proactive matching | 4 | 4 | **16** | Audit Socrata `xqn7-jvv2`: how many contracts have future end dates? Are there fields for solicitation status? |
| 4 | NAICS code matching is precise enough to generate relevant recommendations (vs. too many false positives) | 3 | 3 | **9** | Test matching logic with 10 vendor profiles against Socrata data; measure precision by manual review |
| 5 | OMBD staff would adopt a tool that supplements (not replaces) B2Gnow | 3 | 4 | **12** | The tool positions itself as a vendor-facing complement, not an internal replacement. Political risk is lower if OMBD isn't asked to change workflows. |

**Top 3 to validate first:**
1. **Assumption 2 (R×U=16):** Will vendors self-report? If MBEs won't create profiles in a new tool, the matching engine has no inputs. NYC's PASSPort enrolled 13,000+ vendors — but it was mandatory for City contracting.
2. **Assumption 3 (R×U=16):** Does Socrata have forward-looking data? If the dataset only contains historical awards (not upcoming solicitations), the tool is retrospective, not proactive.
3. **Assumption 1 (R×U=15):** Can you work around B2Gnow? This is the core architectural bet. If the Socrata workaround produces useful matches, the structural wall is bypassed. If not, the tool needs data that only B2Gnow holds.

## Key Takeaway

The OMBD Proactive Match Dashboard addresses the single biggest documented problem in MBE contracting: passive directories don't convert. NYC has 11,382 certified M/WBEs but 78% never won a new contract in FY25. The NYC Comptroller's recommendation — curated shortlists by commodity code, proactive push notifications, and subcontractor matching — is exactly what this tool builds. The critical design constraint is the B2Gnow structural wall: Richmond's MBE data is locked in a system with no public API. The weekend build must demonstrate that useful matching is possible using *only* public Socrata data and vendor self-reporting. If this works, it proves the concept without requiring any City system access. If it doesn't — if the Socrata data is too historical or too sparse for forward-looking matching — the tool needs B2Gnow cooperation, which won't happen in a weekend.
