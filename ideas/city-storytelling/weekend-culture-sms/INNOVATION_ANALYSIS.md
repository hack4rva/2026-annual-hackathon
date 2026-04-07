# Innovation Analysis: Weekend Culture SMS

## 1. Blue Ocean Reframing (ERRC Grid)

**Core assumption challenged:** Cultural event discovery requires residents to actively seek information — visiting websites, checking apps, or scrolling social media.

| Action | Element | Rationale |
|--------|---------|-----------|
| **Eliminate** | App downloads and website visits as prerequisites for discovery | SMS reaches 98% open rates vs. email's 58.8% and social's 5-20% organic reach; no app install, no bookmark needed |
| **Eliminate** | Long-form event listings | SMS forces curation to 3-5 events max per message; this constraint is the product, not a limitation |
| **Reduce** | Dependency on residents having smartphones with data plans | SMS works on any cell phone, including basic feature phones — broadens reach to populations excluded by app-based discovery |
| **Reduce** | Event discovery effort to zero | Push-over-pull: the digest arrives Friday, curated for the weekend. No searching, filtering, or decision fatigue |
| **Raise** | Click-through action rates | SMS achieves 22.2% CTR vs. email's 2.5%; for a 10,000-subscriber list, that's ~1,842 unique clicks vs. ~120-250 for email |
| **Raise** | Attendance impact through reminder psychology | Healthcare meta-analysis: SMS reminders increase attendance likelihood by 50%; UK education study: 4-7 percentage point attendance increase over a year |
| **Create** | A city-branded cultural "channel" residents can subscribe to with one text | "Text RVAARTS to 55555" — single opt-in creates a persistent relationship between the city's cultural ecosystem and the resident |
| **Create** | Behavior-triggered flows for high-value moments | Klaviyo data: behavior-triggered SMS flows achieve ~10% click rate (2x broadcast) and account for 45.2% of SMS revenue despite only 7.6% of send volume |

**Key reframe:** The product isn't an SMS platform — it's a **weekly habit**. SFMOMA's "Send Me SFMOMA" got 2 million texts in a week, proving massive appetite. But it also got temporarily blacklisted by carriers. The lesson: register A2P 10DLC first, build the habit second.

## 2. Rapid Ideation (Crazy 8s)

| # | Idea | Provocation Level |
|---|------|-------------------|
| 1 | **Friday 3pm Digest** — Every Friday at 3pm, subscribers get: "This weekend in RVA 🎭: [Event 1] [Event 2] [Event 3]. Reply 1/2/3 for details." Three events, three reply options, zero friction. | Practical |
| 2 | **Neighborhood Edition** — Subscribers pick a neighborhood at signup (Church Hill, Fan, Southside, etc.). Each Friday they get events within 2 miles. Hyperlocal curation. | Practical |
| 3 | **"Text Back to RSVP"** — Reply "1" to RSVP to the first event. The system confirms and sends a reminder Saturday morning. No app, no website, no ticket platform. | Moderate |
| 4 | **Venue of the Week Spotlight** — Each digest highlights one small venue or grassroots organizer. Rotates through underrepresented neighborhoods. Equity by editorial design. | Moderate |
| 5 | **"Bring a Friend" Referral Loop** — "Forward this text to a friend. If they subscribe, you both get next week's digest early (Thursday night preview)." Viral growth mechanic. | Moderate |
| 6 | **Emergency Culture Alert** — Flash ticket drops, free pop-up shows, surprise street performances. Triggered by CultureWorks feed updates, not on a weekly schedule. Behavior-triggered flow. | Provocative |
| 7 | **Multilingual Digest** — At signup, select language (English, Spanish, etc.). Digest auto-translates event names and descriptions. Richmond's growing Latino population gets included. | Moderate |
| 8 | **"Dead Weekend" Detector** — If the CultureWorks feed shows fewer than 3 events for a given weekend, auto-escalate to CultureWorks: "Your event calendar is thin this weekend. Anything missing?" Quality feedback loop. | Provocative |

## 3. Rapid Design Sprint

**Problem sentence:** Richmond residents miss weekend cultural events because discovery requires active searching across CultureWorks, Facebook, Eventbrite, and venue sites — and most residents don't search at all.

**User journey (5 steps):**
1. Resident texts "RVAARTS" to a short code → receives welcome message with neighborhood selection prompt
2. Every Friday at 3pm, receives: "This weekend in [Neighborhood]: [Event 1] [Event 2] [Event 3]. Reply # for details. STOP to unsubscribe."
3. Replies "2" → receives detail text with venue, time, cost, and a link to the event page (Vecina or CultureWorks)
4. Saturday morning: receives a reminder for any event they replied to
5. Following Monday: system logs which events got replies → feeds back into curation algorithm for next week

**Prototype shape:** Twilio + CultureWorks ICS feed + a curation script. Pipeline: (1) Python script pulls CultureWorks ICS feed every Thursday, filters for Friday-Sunday events, scores by neighborhood proximity and category diversity. (2) Human curator selects 3-5 events from the scored list (10-minute editorial step). (3) Twilio sends the digest Friday at 3pm. (4) Reply handler routes "1"/"2"/"3" responses to detail messages. A2P 10DLC registration required before launch.

**First test:** Recruit 100 subscribers via a "Text RVAARTS to [number]" campaign at a single CultureWorks event. Send 4 weekly digests. Measure: opt-in rate, open proxy (reply rate), click-through (link clicks via UTM), opt-out rate, and qualitative feedback via a 5th-week survey text.

## 4. Opportunity Mapper

### Opportunity 1: Zero-Friction Cultural Push Channel

| Dimension | Detail |
|-----------|--------|
| **User** | Richmond residents who enjoy cultural events but don't actively search for them |
| **Outcome** | 3-5 curated weekend events delivered to their phone every Friday — no app, no search, no effort |
| **Workflow** | CultureWorks ICS → curation script → human editorial review → Twilio broadcast → reply handling |
| **Dependencies** | CultureWorks API/ICS access (shared with Vecina, What's On RVA — Bundle 7); Twilio account with A2P 10DLC registration |
| **Richmond relevance** | MCA Chicago's SMS program generated $158K revenue and 20x ROI in one month; Richmond's cultural ecosystem could see similar engagement lift |

### Opportunity 2: Digital Divide Bridge

| Dimension | Detail |
|-----------|--------|
| **User** | Older residents, low-income residents, residents without smartphones or data plans |
| **Outcome** | Cultural event information reaches populations excluded by app-based and web-based discovery |
| **Workflow** | SMS works on any cell phone; plain-text format; no data plan required for receiving |
| **Dependencies** | Subscriber acquisition through offline channels (library signage, community centers, church bulletins) |
| **Richmond relevance** | Richmond's digital divide is real; SMS is the most inclusive digital channel available |

### Opportunity 3: Shared SMS Infrastructure (Bundle 6)

| Dimension | Detail |
|-----------|--------|
| **User** | Multiple city programs: Weekend Culture SMS, Site-Sign Text-Back, First Job SMS Kit, Contract Expiry Alerts |
| **Outcome** | One Twilio account, one A2P 10DLC registration, one compliance framework serves four ideas |
| **Workflow** | Shared Twilio subaccount with separate messaging services per program; unified compliance and consent management |
| **Dependencies** | Twilio account setup; A2P 10DLC brand registration ($4 one-time) + campaign registration ($3-10/month) |
| **Richmond relevance** | Bundle 6 combined score: 81/100 (avg 20.3); shared infrastructure reduces per-idea cost and creates a recognizable city SMS channel |

## 5. Problem Scoping

| Dimension | Score (1-5) | Rationale |
|-----------|:-----------:|-----------|
| **Impact** | 4 | Directly addresses discovery friction for cultural events; SMS benchmarks show massive engagement advantage over email/social |
| **Feasibility** | 5 | Twilio is commodity infrastructure; CultureWorks data exists; SMS delivery is solved technology; all-in cost ~$120-130/week for 10K subscribers |
| **Data readiness** | 4 | CultureWorks publishes event feeds; Twilio pricing is transparent ($0.012-0.013/message all-in); A2P 10DLC registration is straightforward |
| **Problem clarity** | 5 | Extremely clear: residents miss events because discovery requires active searching; SMS eliminates the search |
| **Demo-ability** | 5 | Send a live text message to judges' phones during the demo. Immediate, visceral proof of concept. |

**Weekend MVP shapes:**
- **Shape A (Manual Curation + Twilio):** Human curator selects 3 events from CultureWorks. Sends via Twilio to 50 test subscribers. Reply "1"/"2"/"3" returns event details. ~4 hours.
- **Shape B (Automated Pipeline):** Python script ingests CultureWorks ICS, filters by weekend, scores by diversity. Curator reviews scored list. Twilio sends + handles replies. ~8 hours.
- **Shape C (Neighborhood Edition):** Shape B + subscriber neighborhood preference at signup + per-neighborhood digest routing. ~14 hours.

## 6. Assumption Mapping

| # | Assumption | Risk (1-5) | Uncertainty (1-5) | R × U | Validation method |
|---|-----------|:----------:|:-----------------:|:-----:|-------------------|
| 1 | CultureWorks will provide API/ICS access for event data | 5 | 3 | 15 | Direct conversation; check if feed is already public; same dependency as Vecina |
| 2 | Residents will opt in and stay subscribed at 1x/week cadence | 4 | 3 | 12 | MCA Chicago found 2-3 texts/week was "sweet spot"; 1x/week is conservative. Test opt-out rate (benchmark: 0.53%) |
| 3 | A2P 10DLC registration will be approved without delays | 3 | 3 | 9 | Nonprofits/government get favorable treatment; T-Mobile allows unlimited daily caps; register 30 days before launch |
| 4 | 3-5 events per message is the right density | 3 | 3 | 9 | Test 3 vs. 5 events; measure reply rates per option. SFMOMA's single-artwork format was wildly popular — less may be more |
| 5 | SMS click-through will approach the 22.2% benchmark | 3 | 4 | 12 | Benchmark is cross-industry; arts/culture may differ. Measure actual CTR against benchmark after 4 weeks |
| 6 | Curation can be done in 10 minutes by a human curator weekly | 2 | 2 | 4 | If CultureWorks feed is clean and scored, human review is fast. Test with real feed data |
| 7 | TCPA compliance and carrier rules won't block the program | 4 | 2 | 8 | Government entities get favorable A2P 10DLC treatment; follow TCPA consent requirements strictly; observe quiet hours |

**Top 3 to validate first:**
1. **CultureWorks API access (R×U=15):** Single dependency shared across Bundle 7 (Vecina, Weekend Culture SMS, What's On RVA). Validate once, unlock three ideas.
2. **Subscriber retention at 1x/week (R×U=12):** If opt-out rates spike above 2%, the list erodes quickly. MCA Chicago's 2-3x/week success suggests 1x/week is safe, but test with Richmond audience.
3. **Actual SMS click-through rate (R×U=12):** The 22.2% benchmark is cross-industry. If Richmond cultural events see only 5%, the ROI story weakens. Run a 4-week pilot to measure.

---

## Key Takeaway

Weekend Culture SMS is the most implementable idea in the city-storytelling pillar: commodity infrastructure (Twilio), proven channel performance (22.2% CTR, 98% open rate), clear ROI model ($120-130/week for 10K subscribers), and a shared dependency (CultureWorks API) that unlocks two sibling ideas. The only real risk is subscriber acquisition and retention — and the research shows MCA Chicago generated $158K revenue and 1,000 email signups from their SMS program alone. The critical first move: register A2P 10DLC and formalize the CultureWorks partnership. Everything else is a weekend build.
