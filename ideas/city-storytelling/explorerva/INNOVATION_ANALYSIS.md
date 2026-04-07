# Innovation Analysis: ExploreRVA

## 1. Blue Ocean Reframing (ERRC Grid)

**Core assumption challenged:** Self-guided cultural exploration requires building a custom native app.

| Action | Element | Rationale |
|--------|---------|-----------|
| **Eliminate** | Custom native app as the default delivery channel | 90% of museum/cultural apps are used by less than 3% of visitors (avg 1.3% pickup rate); native apps are a graveyard of wasted development budgets |
| **Eliminate** | BLE beacon deployments for indoor positioning | Batteries last 6-18 months; museum environments scatter signals; $3K-15K installation + $1.5-5K annual maintenance. Unless there's a high-value indoor use case, skip entirely |
| **Reduce** | Friction between "learn about it" and "go there" | ArcGIS StoryMaps provides zero-install, QR-code-accessible map tours. No app store, no download, no account. Scan and explore |
| **Reduce** | Dependency on proprietary content management | VoiceMap and STQRY Marketplace have built-in distribution, SEO, and audiences. Publishing on a marketplace solves discovery; a custom app does not |
| **Raise** | Distribution via established platforms | One NY tour publisher saw 83% of annual sales come through VoiceMap within a year of switching from their own app. Distribution > ownership |
| **Raise** | Offline capability for spotty connectivity | VoiceMap and NPS App allow full offline download of maps and audio; ArcGIS StoryMaps Briefings app supports offline presentation. Mandatory for any self-guided tour |
| **Create** | A web-first, QR-code-triggered cultural trail network across Richmond neighborhoods | Physical QR codes at cultural waypoints → ArcGIS StoryMap page loads → audio/text/image content about that site → "next stop" navigation. No app. No download. Works on any phone |
| **Create** | Resident vs. visitor content tracks | Tourists want "best of Richmond." Residents want "hidden gems in my neighborhood." Same infrastructure, different content curation. DoStuff Media serves 60M event-goers across 22 cities with profile-based matching |

**Key reframe:** ExploreRVA should be a **content strategy**, not an app. Publish Richmond cultural trails on VoiceMap (for tourists who search "Richmond audio tour") AND as ArcGIS StoryMaps (for residents who scan a QR code on a lamppost). Same content, two distribution channels, zero app downloads required.

## 2. Rapid Ideation (Crazy 8s)

| # | Idea | Provocation Level |
|---|------|-------------------|
| 1 | **QR Trail Network** — 50 QR code markers across Richmond cultural sites. Each links to a StoryMap page with 90-second audio, a photo, and a map to the next stop. Zero-install. | Practical |
| 2 | **VoiceMap Richmond Collection** — Publish 5 GPS-triggered audio tours on VoiceMap marketplace: Jackson Ward Jazz Trail, Carytown Art Walk, Church Hill History Walk, Canal Walk Heritage, and Shockoe Bottom Ghost Tour. Reach VoiceMap's global tourist audience. | Practical |
| 3 | **Neighborhood Challenge Passport** — Bandwango-style digital passport: visit 10 cultural sites across 5 neighborhoods. Check in at each. Complete the challenge → earn a discount at a local restaurant. Proves economic impact. | Moderate |
| 4 | **Resident Discovery Mode** — "I've lived in Richmond for 10 years and never explored Southside." The system builds a custom mini-tour based on what you haven't visited. Anti-tourist, pro-resident. | Moderate |
| 5 | **Oral History Waypoints** — Integrate clips from the Fulton Oral History Project and JXN Project into walking tours. At a specific GPS coordinate, hear a displaced resident's memory of what used to be there. | Moderate |
| 6 | **"Surprise Me" Random Walk** — Enter your starting location and how much time you have (30 min / 1 hr / 2 hrs). The system generates a random cultural walk with 3-5 stops you wouldn't have chosen yourself. | Moderate |
| 7 | **Seasonal Rotating Content** — Same QR markers, different content each season. Spring: garden and nature walk. Summer: mural and street art tour. Fall: culinary history trail. Winter: indoor gallery tour. Keeps residents coming back. | Moderate |
| 8 | **Community-Contributed Waypoints** — Residents submit "hidden gems" (their favorite mural, a historical plaque they love, a quiet park). Curated submissions become new waypoints on the trail. Crowdsourced expansion. | Provocative |

## 3. Rapid Design Sprint

**Problem sentence:** Richmond has rich cultural sites across its neighborhoods, but there's no low-friction, self-guided way for residents or visitors to discover and explore them — and building a custom app is the wrong solution.

**User journey (5 steps):**
1. Visitor or resident sees a QR code on a cultural marker in Carytown (or searches "Richmond audio tour" on VoiceMap)
2. Scans QR → lands on an ArcGIS StoryMap page (or opens VoiceMap tour) showing the cultural trail with waypoints
3. At each waypoint: reads/hears a 90-second story about the site — what it is, why it matters, and a local perspective
4. Taps "Next Stop" → map navigation to the next waypoint (walking directions via Google Maps deep link)
5. At trail end: prompted to rate the experience, share with a friend, and try another neighborhood trail

**Prototype shape:** (1) Select one neighborhood (e.g., Carytown) with 8 cultural waypoints. (2) Write 90-second audio scripts for each (or 200-word text narratives). (3) Build an ArcGIS StoryMap with a "guided map tour" sidecar layout — each stop has text, photo, and optional audio. (4) Generate QR codes for each waypoint. (5) Optionally, publish the same 8 stops as a VoiceMap GPS-triggered audio tour for tourist marketplace distribution. Web-first: no app, no backend, no accounts.

**First test:** Install 8 QR codes (laminated, weatherproof) at Carytown cultural sites. Share the StoryMap URL via Carytown Merchants Association social media and at the Fan visitor center. Measure: QR scans (via UTM-tagged URLs), StoryMap page views, completion rate (% who visit 5+ stops), and qualitative feedback via an end-of-trail survey.

## 4. Opportunity Mapper

### Opportunity 1: Web-First Cultural Trail Network

| Dimension | Detail |
|-----------|--------|
| **User** | Richmond visitors and residents seeking self-guided cultural exploration |
| **Outcome** | Discover and explore cultural sites without downloading an app — scan a QR code, start walking |
| **Workflow** | Create StoryMap tours per neighborhood → install QR codes at waypoints → measure engagement via GA4 |
| **Dependencies** | ArcGIS StoryMaps (Esri license — Richmond likely already has one); physical QR code markers (city partnership for installation); content creation (8 waypoints per trail) |
| **Richmond relevance** | Portland uses ArcGIS StoryMaps for its Freedom Trail and cultural landmarks; Harlem StoryMap documents Black-designed spaces. Richmond has no equivalent |

### Opportunity 2: Marketplace Distribution for Tourism Revenue

| Dimension | Detail |
|-----------|--------|
| **User** | Tourists searching for "things to do in Richmond" on VoiceMap, TripAdvisor, or Google |
| **Outcome** | Richmond cultural tours appear in global marketplace search results; GPS-triggered audio plays automatically as tourists walk |
| **Workflow** | Publish 3-5 Richmond tours on VoiceMap → leverage VoiceMap's SEO and app store ranking → earn revenue per download |
| **Dependencies** | VoiceMap publishing account (revenue sharing model); audio recording (professional or volunteer voice talent); GPS route testing |
| **Richmond relevance** | One NYC tour publisher saw 83% of annual sales come through VoiceMap after switching from a custom app; Boston Freedom Trail uses STQRY for $9.99 paid tours |

### Opportunity 3: Neighborhood Passport for Economic Impact

| Dimension | Detail |
|-----------|--------|
| **User** | Residents looking for new experiences; local businesses seeking foot traffic |
| **Outcome** | Gamified exploration that drives measurable spending at participating merchants |
| **Workflow** | Bandwango-style digital passport → check-in at cultural sites → earn rewards at partner businesses → measure spending |
| **Dependencies** | Bandwango or similar platform; 15-20 merchant partners; incentive budget |
| **Richmond relevance** | Toledo's Coffee Quest 419 drove $200K+ spending at 28 local shops in 3 months; Travel South Dakota recorded 42,631 check-ins across state passports |

## 5. Problem Scoping

| Dimension | Score (1-5) | Rationale |
|-----------|:-----------:|-----------|
| **Impact** | 3 | Enhances cultural tourism and resident exploration; economic impact potential through passport model; but not addressing an acute civic pain point |
| **Feasibility** | 5 | ArcGIS StoryMaps is turnkey; VoiceMap publishing is self-service; QR codes cost pennies; no custom development needed |
| **Data readiness** | 3 | Cultural site inventory needs to be created — no existing dataset of Richmond cultural waypoints with descriptions/audio. Content creation is the bottleneck |
| **Problem clarity** | 3 | "Richmond lacks self-guided cultural exploration" is real but less urgent than displacement memory or civic participation gaps |
| **Demo-ability** | 5 | Hand judges a phone, have them scan a QR code, watch the tour load instantly. Walk them through 3 stops in the demo room. Frictionless and visceral |

**Weekend MVP shapes:**
- **Shape A (Single Trail StoryMap):** 8-stop Carytown cultural trail as an ArcGIS StoryMap with text + photos. QR codes generated. ~6 hours.
- **Shape B (Audio + QR):** Shape A + recorded 90-second audio for each stop + physical QR code designs ready for printing. ~10 hours.
- **Shape C (Multi-Channel):** Shape B + same trail published on VoiceMap as GPS-triggered audio tour + end-of-trail survey. ~16 hours.

## 6. Assumption Mapping

| # | Assumption | Risk (1-5) | Uncertainty (1-5) | R × U | Validation method |
|---|-----------|:----------:|:-----------------:|:-----:|-------------------|
| 1 | Residents will scan QR codes on public markers | 3 | 4 | 12 | Install 8 QR codes at Carytown sites; measure scan rate over 30 days. NPS app has 6M+ downloads — but those users are already seeking tours |
| 2 | ArcGIS StoryMap loads fast enough on mobile for a walking tour experience | 3 | 2 | 6 | Test load times on 3G/4G connections; StoryMaps are web-optimized but media-heavy maps can be slow |
| 3 | Content creation (8 waypoints with audio/text/photos) can be done in a weekend | 3 | 3 | 9 | Recruit 2 writers + 1 audio recorder; test production pipeline for 8 stops |
| 4 | Tourists will find Richmond tours on VoiceMap marketplace | 3 | 3 | 9 | Publish one tour; monitor marketplace impressions and downloads over 60 days. NYC publisher saw 83% of sales from VoiceMap |
| 5 | QR code markers will survive weather, vandalism, and city maintenance | 3 | 3 | 9 | Use weatherproof materials; partner with city for installation; budget for replacement (pennies per code) |
| 6 | Residents want neighborhood-specific trails (not just citywide "best of") | 3 | 3 | 9 | Survey 20 residents: "Would you explore a cultural trail in a neighborhood you don't usually visit?" |
| 7 | A Bandwango-style passport would drive measurable spending at Richmond merchants | 3 | 4 | 12 | Recruit 5 pilot merchants; offer free listing + analytics; test with 100 passport holders over 30 days |

**Top 3 to validate first:**
1. **QR code scan rates in public spaces (R×U=12):** If nobody scans the codes, the entire distribution model fails. Test at a high-foot-traffic location first.
2. **Passport economic impact (R×U=12):** If Richmond can't replicate even 10% of Toledo's $200K impact, the passport model isn't worth the merchant coordination effort.
3. **Content creation bottleneck (R×U=9):** The technology is trivial; the content is the work. Can 8 stops be researched, written, and recorded to sufficient quality in a weekend?

---

## Key Takeaway

ExploreRVA's critical insight is that distribution beats ownership. The research is unambiguous: 90% of museum/cultural apps are used by less than 3% of visitors. Meanwhile, VoiceMap gave one NYC publisher 83% of their annual sales, and the NPS app (which aggregates 420+ parks) has 6M+ downloads. Richmond should not build an app. Instead: (1) publish cultural trails as ArcGIS StoryMaps accessible via QR codes for zero-friction resident access, (2) publish the same trails on VoiceMap for tourist marketplace distribution, and (3) pilot a Bandwango-style passport to prove economic impact. The technology is solved; the bottleneck is content creation and physical QR code installation.
