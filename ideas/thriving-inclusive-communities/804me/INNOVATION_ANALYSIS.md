# Innovation Analysis: 804me

## 1. Blue Ocean Reframing (ERRC Grid)

| Action | Element | Rationale |
|--------|---------|-----------|
| **Eliminate** | Account creation for basic service discovery | Findhelp allows anonymous search but requires accounts to apply. 804me must be fully zero-login. Research: "You are free to search... without providing any information about yourself" — extend this to the entire interaction |
| **Eliminate** | English-first design | Research shows NYC MOIA translates vital documents into 10 designated languages. 804me should launch with language selection as the first screen, not a settings toggle |
| **Reduce** | Comprehensive directory scope | Don't compete with Findhelp's national database. Curate Richmond-specific services verified by local CBOs. Research: Missouri 211 study shows 91% tried referrals but only 36% received assistance — quality over quantity |
| **Reduce** | Reliance on web-only delivery | 71M+ people use smartphones without broadband. Research: LinkNYC delivered 171M free Wi-Fi sessions and 5M free calls in 2025 — multi-channel reach matters more than web features |
| **Raise** | Privacy posture to "sanctuary-grade" | 2026 state privacy laws (TX, OR, NE, NH) introduce strict obligations around immigration status data. Municipal sanctuary policies restrict ICE data sharing. 804me must enforce zero-PII collection by design |
| **Raise** | Kiosk and physical-space presence | LinkNYC's 4,000 screens earned 25M impressions/month for MOIA's "Know Your Rights" campaign. Richmond's GRTC shelters and library branches are equivalent surfaces |
| **Create** | A Richmond-specific "push + pull + people" stack | Research framework: kiosk push awareness → anonymous web pull → WhatsApp cohort engagement → 211 human escalation. No US mid-size city has deployed this layered approach |
| **Create** | Privacy-first analytics baseline | Replace Google Analytics with Matomo/Plausible (100% data ownership, no cookie consent needed). Research confirms these preserve privacy while enabling measurement |

**Core assumption challenged:** "Service discovery requires a comprehensive directory." Research shows the real gap is channel — immigrants need information delivered through platforms they already use (WhatsApp, SMS, kiosks) with language support built in, not another searchable database.

## 2. Rapid Ideation (Crazy 8s)

| # | Idea | Notes |
|---|------|-------|
| 1 | **Multilingual microsite with zero login** — Mobile-first site organized by need (food, shelter, legal, health, work) with top 5 Richmond services per category | Baseline. Per research: no-login browsing + curated local content. Deploy as static site with Plausible analytics |
| 2 | **SMS keyword menus** — Text "AYUDA" or "HELP" to a short code; receive a menu of service categories; reply with a number to get local resources | Per 211 Virginia model: text zip to 898-211. But with Richmond-curated content and multilingual menus |
| 3 | **QR code poster network** — Distribute QR-coded posters at GRTC stops, libraries, and CBOs linking to the microsite in the user's detected language | Per LinkNYC model: MOIA's $630K campaign used 4,000 screens. Richmond equivalent: 100 GRTC shelter posters + 9 library branches |
| 4 | **WhatsApp broadcast channel** — Opt-in broadcast list for urgent community alerts (ICE activity, emergency resources, seasonal programs) | Per Documented Semanal model: 4,000+ registrants, drives 60% of site readers. WhatsApp response rate 27pp higher than SMS |
| 5 | **🔥 Voice-first service finder** — Call a local number, speak your need in any language, get routed to the right resource via Tarjimly interpreter integration | Provocative: Tarjimly provides interpreters in 250+ languages within 30 seconds. Eliminates digital literacy requirement entirely |
| 6 | **🔥 Anti-scam verification service** — Text a phone number or organization name to verify if it's a trusted Richmond service provider | Provocative: research documents WhatsApp scams impersonating Catholic Charities in LA and Houston. A "verify before you trust" tool fills a real safety gap |
| 7 | **Library "navigator hours" booking** — Microsite includes a simple booking widget for in-person navigator sessions at library branches | Bridges digital discovery to human assistance. Research: CBO-assisted submissions reach 95.6% completion |
| 8 | **Seasonal resource calendar** — Push notifications for time-sensitive programs (tax prep, school enrollment, cooling centers, flu clinics) | Addresses the "freshness" problem: B2B contact records decay 30% annually. A calendar-based approach surfaces time-relevant resources proactively |

## 3. Rapid Design Sprint

**Problem sentence:** Richmond's immigrant and refugee residents cannot safely and privately find trusted community services in their language without creating accounts, sharing identifying information, or navigating English-first websites — leaving them dependent on word-of-mouth networks that may be incomplete or outdated.

**User journey (5 steps):**
1. Resident encounters a QR code at a GRTC bus stop, library, or CBO waiting room
2. Scans QR; site opens in detected language (or language selector as first screen)
3. Selects a need category (food, shelter, legal help, health, work) via icon-based menu
4. Sees top 3-5 verified Richmond services for that category with address, hours, languages, and "no ID required" badges
5. Taps to call, get directions, or text "more info" via SMS — no login, no data stored

**Prototype shape:** Static microsite (Next.js export or plain HTML). 5 need categories × 5 services each = 25 curated listings. Language toggle for English, Spanish, and one additional language (based on Richmond demographics — likely Arabic or Dari). QR codes generated for print distribution. Plausible analytics for aggregate traffic. Total build: ~20 files, deployable to Vercel/Netlify.

**First test:** Print 50 QR posters in English/Spanish. Place at 5 GRTC stops near Southside immigrant neighborhoods and 3 library branches. Track QR scans (via Plausible) over 2 weeks. Interview 5 users who scanned: did they find what they needed? Did they feel safe using it?

## 4. Opportunity Mapper

### Opportunity 1: Zero-Login Service Discovery

| Dimension | Detail |
|-----------|--------|
| **User** | Richmond immigrants and refugees who avoid digital tools due to surveillance fears or account-creation barriers |
| **Outcome** | Resident finds a trusted service provider in their language without providing any identifying information |
| **Workflow** | QR scan → language select → need category → curated service listing → call/directions |
| **Dependencies** | Curated, verified service listings (25-50 initially); CBO partnerships for verification; print distribution network |
| **Richmond relevance** | ReEstablish Richmond reports clients routinely avoid online tools due to ICE fears. 804me's zero-PII design directly addresses this |

### Opportunity 2: Multi-Channel Push Awareness

| Dimension | Detail |
|-----------|--------|
| **User** | Immigrant residents who don't actively search for services but encounter them in physical spaces |
| **Outcome** | Passive awareness of available services via QR codes, SMS keywords, and WhatsApp broadcasts |
| **Workflow** | See poster at bus stop → scan QR or text keyword → receive service list → optionally opt into WhatsApp channel |
| **Dependencies** | GRTC and library partnerships for poster placement; WhatsApp Business API account; SMS short code |
| **Richmond relevance** | GRTC serves as the primary transit system; many immigrant-heavy neighborhoods (Southside, East End) have high ridership |

### Opportunity 3: CBO Referral Enhancement

| Dimension | Detail |
|-----------|--------|
| **User** | CBO caseworkers who need to quickly find and share service information with clients |
| **Outcome** | Caseworker sends a client a WhatsApp or SMS link to a curated resource page in the client's language |
| **Workflow** | Caseworker opens microsite → selects client's need → shares link via WhatsApp/SMS → client receives page in their language |
| **Dependencies** | CBO adoption; caseworker training; mobile-friendly sharable URLs per service category |
| **Richmond relevance** | Richmond's CBO network is dense but fragmented; caseworkers often rely on personal contact lists rather than a shared directory |

## 5. Problem Scoping

| Dimension | Score (1-5) | Rationale |
|-----------|:-----------:|-----------|
| **Impact** | 4 | Addresses a documented barrier: immigrant fear of surveillance and English-first design. Research shows 95% of Documented Semanal subscribers come from web searches for immediate help like "free food in New York" — the demand exists |
| **Feasibility** | 4 | Static microsite with curated listings is trivially deployable. SMS/WhatsApp channels require API setup but are well-documented. Main lift: content curation and translation |
| **Data readiness** | 3 | Service listings must be manually curated and verified with CBOs. No existing machine-readable, multilingual directory of Richmond immigrant services. 211 Virginia covers some but not immigrant-specific trust signals |
| **Problem clarity** | 4 | Clear user need (safe, private, multilingual service discovery). The "804" area code branding gives it local identity. Less clear: which channel(s) to prioritize for MVP |
| **Demo-ability** | 4 | Microsite demo is visually clean. QR poster mockup is tangible. WhatsApp flow can be demoed live. Slightly less dramatic than map-based tools |

**Weekend MVP shapes:**
- **Minimal:** Static microsite with 5 need categories × 5 services. English + Spanish. QR code generator for poster distribution. Plausible analytics snippet. Deploy to Netlify.
- **Stretch:** Add SMS keyword integration (Twilio), WhatsApp broadcast pilot (10 opt-in users), Arabic language toggle, "Is this a trusted organization?" verification feature.

## 6. Assumption Mapping

| # | Assumption | Risk (1-5) | Uncertainty (1-5) | R × U | Validation Method |
|---|-----------|:----------:|:-----------------:|:-----:|-------------------|
| 1 | Richmond immigrants will scan QR codes at bus stops and libraries | 4 | 4 | **16** | Deploy 20 test QR posters for 2 weeks; measure scan rates via Plausible analytics |
| 2 | A curated list of 25-50 services is more useful than a comprehensive directory like Findhelp | 4 | 3 | **12** | A/B test: curated 804me list vs. Findhelp search for the same need. Measure task success and time |
| 3 | Zero-login design meaningfully increases usage among surveillance-fearful populations | 5 | 4 | **20** | Interview 10 immigrant residents (via CBO partner) about willingness to use 804me vs. a tool requiring email/phone |
| 4 | Service listings can be kept accurate with volunteer/CBO verification cycles | 4 | 3 | **12** | Pilot 90-day verification cycle with 2 CBOs for 25 listings. Measure data accuracy at day 90 |
| 5 | SMS and WhatsApp channels add meaningful reach beyond the web microsite | 3 | 3 | **9** | Track channel-specific engagement over 30 days post-launch; compare unique users per channel |
| 6 | The "804" branding resonates with Richmond's immigrant community | 2 | 4 | **8** | Focus group with 8 immigrant residents: does "804me" convey "Richmond resource for me"? |

**Top 3 to validate first:**
1. **Assumption 3 (R×U=20):** The entire value proposition rests on privacy-fearful populations actually trusting and using a zero-login tool. If they don't, there's no differentiation from Findhelp. Must validate with target users.
2. **Assumption 1 (R×U=16):** QR codes at bus stops are the primary distribution strategy. If scan rates are near zero, the awareness channel fails and the microsite never gets traffic.
3. **Assumption 2 (R×U=12):** Curation is the key design choice. If users prefer comprehensive directories, building a curated alternative is wasted effort.

---

## Key Takeaway

804me's innovation is not the technology (a multilingual microsite is straightforward) but the delivery model: a "push + pull + people" stack that meets immigrants where they are — physically (bus stops, libraries), digitally (WhatsApp, SMS), and linguistically (language-first design). The research strongly supports this layered approach: WhatsApp achieves 27pp higher response rates than SMS, LinkNYC-style kiosks earn millions of impressions, and zero-login design is a safety requirement for surveillance-fearful populations. The critical risk is whether Richmond's immigrant community will adopt a new local tool when national platforms (Findhelp, 211) already exist. The answer depends on curation quality, language coverage, and the trust signals that only local CBOs can provide.
