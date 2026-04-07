# Innovation Analysis: Site-Sign Case Number Text-Back

**Generated:** April 2, 2026
**Inputs:** IDEA.md, RESEARCH_RESULT.md, 6 Innovation Lenses

---

## 1. Blue Ocean Reframing (ERRC Grid)

| Factor | Action | Details |
|--------|--------|---------|
| Requirement to search Legistar manually | Eliminate | Residents currently must know the Legistar URL, navigate to richmondva's instance, and search by case number; SMS removes this entirely |
| QR code dependency (requires smartphone camera + data) | Reduce | Research shows Raleigh, Portland, Durham all default to QR/URL; SMS works on any phone including non-smartphones, reducing the tech barrier |
| Plain-language project descriptions | Raise | Legistar returns raw legislative text; the SMS reply should translate this into "A developer wants to build X at Y — hearing is Z" |
| Physical-to-digital bridge at the moment of discovery | Create | No US city has deployed sign-to-SMS for zoning cases (confirmed by nationwide sweep); this creates a new interaction pattern at the exact moment a resident notices a sign |

**Core assumption challenged:** That digital engagement with zoning cases requires a smartphone with a camera and data plan. The research confirms zero US cities have deployed SMS-on-signs for zoning, yet transit agencies (DART Dallas, TriMet Portland, King County Metro) prove the "text a stop ID" pattern works at scale.

**Reframed value proposition:** Instead of competing with QR codes (the default municipal pattern), position SMS as an accessibility layer that reaches the ~15% of US adults without smartphones — particularly elderly residents and lower-income renters who are most affected by zoning changes.

---

## 2. Rapid Ideation — 8 Divergent Approaches

1. **Classic Text-Back** — Text "CASE 1234" to a Twilio number → query Legistar OData API → return plain-language SMS with hearing date, description, and link.
2. **Subscribe-to-Case** — After the initial reply, offer "Reply YES to get updates on this case" — creating an ongoing notification channel for hearing changes, decisions, and comment periods.
3. **Multilingual Auto-Detect** — If a user texts "CASO 1234" (Spanish) or "TRƯỜNG HỢP 1234" (Vietnamese), detect the language and return the reply in that language. Richmond's top non-English languages are Spanish and Vietnamese.
4. **Voice Call Fallback** — For users who can't read SMS, offer "Reply CALL to hear this information read aloud" — a Twilio-powered IVR that reads the case summary.
5. **QR+SMS Hybrid Sign** — Print both a QR code and an SMS number on the sign, with A/B tracking via UTM parameters to measure which channel residents actually use.
6. **Community Comment via SMS** — After receiving case info, residents can reply with a comment that gets forwarded to the Planning Commission clerk as public testimony, with automatic PRA archival.
7. **Neighborhood Alert Network** — When a new case is filed, auto-text all residents who have previously texted about cases within a 500-foot radius, creating a location-based notification list.
8. **Sign-to-Map** — The SMS reply includes a short link to a GeoHub map centered on the case location, showing all active cases nearby — turning one sign into a gateway to the full development pipeline.

**Most provocative:** #6 — Letting residents submit public comments via SMS text reply fundamentally lowers the barrier to civic participation, but raises PRA retention and TCPA compliance challenges.
**Most feasible:** #1 — Legistar's OData API is public, no-auth, and well-documented; Twilio SMS is commodity; the entire flow can be built in a weekend.

---

## 3. Rapid Design Sprint

**Problem in one sentence:** Richmond residents who see a zoning sign on their block have no easy way to learn what's being proposed without navigating the Legistar system.

**Target user:** A homeowner or renter in Church Hill who walks past a zoning sign with "ORD 2026-045" and wants to know what it means for their street.

**User Journey:**
- **Start:** Resident sees a physical sign with a case number on a vacant lot or building facade
- **Friction:** Sign says "Case ORD 2026-045" but nothing else useful; resident would need to go to `richmond.legistar.com`, search for the case, parse legislative language, and find the hearing date
- **Outcome:** Resident texts "CASE ORD2026045" to the printed number and within 10 seconds receives: "A rezoning request at 2100 E Broad St to allow a 4-story mixed-use building. Public hearing: May 15, 2026 at 6pm. Comment: planning@rva.gov. Details: [link]"

**Lowest-fidelity prototype:** A Twilio webhook → Node.js function → Legistar API query (`webapi.legistar.com/v1/richmondva/matters?$filter=MatterFile eq 'ORD2026045'`) → formatted SMS reply.

**First test:** Print 5 test signs with the SMS number, place them at active zoning case sites in Scott's Addition and Manchester, and measure inbound texts over 2 weeks.

---

## 4. Opportunity Mapper

### Pattern A: Case Lookup SMS (Quick Win)

- **Target user:** Any Richmond resident who encounters a zoning sign
- **Desired outcome:** Instant plain-language understanding of what's proposed and when to show up
- **Core workflow:** Resident texts case number → Twilio webhook → parse case ID → query Legistar Matters API → extract description, hearing date, body → format and send SMS reply
- **Dependencies:** Twilio account ($1.15/mo for long code, ~$0.0083/msg), Legistar API (public, no auth, 1000-record pagination cap), one champion in Planning to print SMS numbers on signs
- **Pros:** Zero data dependencies beyond public Legistar; commodity SMS; instant demo value; Tier S implementation reality (21/25)
- **Cons:** Legistar API has 1000-record pagination cap; TCPA compliance required on signs; Planning Dept must agree to modify sign templates
- **Richmond relevance:** Richmond already runs Legistar (`webapi.legistar.com/v1/richmondva/`); the API is the most underused high-quality data source in the city's stack per the IDEA.md assessment

### Pattern B: Subscribe + Comment Channel (Stretch)

- **Target user:** Engaged residents who want ongoing updates and a voice in the process
- **Desired outcome:** Automatic hearing reminders and the ability to submit public comments via SMS
- **Core workflow:** After initial lookup, reply "YES" to subscribe → system polls Legistar Events API for hearing changes → sends reminders 48h before hearing → accepts reply comments and archives them for PRA compliance
- **Dependencies:** Everything in Pattern A plus: persistent subscriber database, PRA-compliant message archival, Planning Commission clerk buy-in for accepting SMS comments
- **Pros:** Transforms passive information into active civic participation; creates a notification list for future outreach
- **Cons:** TCPA consent management for ongoing messages; PRA retention pipeline adds engineering complexity; comment moderation questions
- **Richmond relevance:** Richmond's Planning Commission currently accepts comments via email and in-person testimony; SMS would be a third channel, potentially reaching populations that don't attend evening hearings

**Recommendation:** Build Pattern A as the weekend MVP — it's a complete, demo-ready product. Pitch Pattern B as the 90-day post-hackathon roadmap that turns a lookup tool into a civic engagement platform.

---

## 5. Problem Scoping

| Dimension | Score (1-5) | Notes |
|-----------|-------------|-------|
| Impact | 4 | Addresses a real friction point at the physical moment of discovery; affects every neighborhood with active zoning cases |
| Feasibility | 5 | Legistar API is public and no-auth; Twilio is commodity; entire MVP is buildable in hours |
| Data availability | 5 | Legistar OData API returns Matters, Events, Bodies with no authentication; Richmond's instance is active |
| Clarity | 5 | Problem is crisp: sign has case number, resident has no easy way to look it up |
| Demo credibility | 5 | Live demo: show a sign photo, text the number on stage, SMS reply arrives in real time |

**Richmond-specific alignment:** Pillar 2 (Thriving Neighborhoods), PS1 (Neighborhood Development Discovery). Ranked #10 of 73 ideas overall. Part of Bundle 2 (Legistar Development Pipeline) and Bundle 6 (SMS/Twilio Channel).

**Policy/eligibility risks:** TCPA requires printed disclosure on the sign ("Msg & data rates may apply. Reply STOP to cancel."). 10DLC registration takes 10-15 days — must be submitted before the hackathon if live SMS is needed for demo. PRA retention of all messages is required under Virginia public records law.

**Weekend MVP shapes:**
1. **Webhook MVP:** Twilio number + serverless function + Legistar API → SMS reply in <10 seconds; demo with a printed mock sign
2. **Dual-channel demo:** Same backend, but also generate a QR code on the sign linking to a web version of the same lookup — A/B comparison built into the demo

---

## 6. Assumption Mapping

| # | Assumption | Risk (1-5) | Uncertainty (1-5) | Priority |
|---|-----------|------|-------------|----------|
| 1 | Legistar API will reliably return case data for Richmond zoning matters | 2 | 1 | Low |
| 2 | Residents will correctly type the case number from the sign (no typos) | 4 | 3 | **High** |
| 3 | Richmond Planning will agree to add an SMS number to physical sign templates | 5 | 4 | **High** |
| 4 | 10DLC registration will be approved in time for demo | 3 | 3 | Medium |
| 5 | SMS channel will attract meaningful volume beyond what QR codes already serve | 3 | 4 | **High** |
| 6 | TCPA disclosure text will fit on the sign without cluttering the design | 3 | 2 | Medium |
| 7 | Legistar Matter descriptions are human-readable enough to send as-is via SMS | 3 | 2 | Medium |

**Top 3 to validate:**
1. **#3 — Planning Dept buy-in for sign changes:** This is the single non-technical blocker. Identify the Planning Director or sign coordinator and confirm willingness to modify the standard sign template. Validation: one meeting or email exchange.
2. **#2 — Typo resilience:** Test 20 people reading case numbers from a printed sign 10 feet away. Measure error rate. Build fuzzy matching (Levenshtein distance) into the parser to handle common mistakes. Validation: hallway usability test.
3. **#5 — SMS vs. QR usage split:** The research found zero cities doing SMS-on-signs for zoning, so there's no benchmark. Run the dual-channel pilot on 5 signs and compare UTM-tagged click-throughs vs. SMS inbounds to determine actual demand. Validation: 2-week field test.

---

## Key Takeaway

Site-Sign Text-Back is the single most demo-friendly idea in the Thriving Neighborhoods pillar: a live SMS sent from the audience during the demo that returns real Richmond zoning data is inherently compelling. The technical risk is near-zero (public Legistar API + Twilio). The real risk is organizational — getting Planning to print the phone number on signs — which makes this a "one champion" problem rather than a technology problem.
