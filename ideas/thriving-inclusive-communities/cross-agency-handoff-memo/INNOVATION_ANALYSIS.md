# Innovation Analysis: Cross-Agency Handoff Memo

## 1. Blue Ocean Reframing (ERRC Grid)

| Action | Element | Rationale |
|--------|---------|-----------|
| **Eliminate** | Shared case management systems (HMIS interoperability, API integrations) | The ERRC origin story explicitly eliminated infrastructure dependency — the parent idea "Community Support Network That Works Like a Care Team" scored 17/27 because it required HIPAA-compliant data sharing that won't exist for years |
| **Eliminate** | Agency-to-agency data exchange | The client carries the artifact; no system-to-system integration needed |
| **Reduce** | Information scope to "minimum necessary" | Per VA's "red box" approach: goals, medications, support team, key contacts. Research shows overloading documents reduces utility and increases privacy risk |
| **Reduce** | Consent complexity | The memo is a communication artifact, not a case file — client chooses what to share. No HIPAA BAA required because no PHI is stored |
| **Raise** | Client agency and dignity | Client controls the narrative. Research cites a trauma-informed statement: "Please avoid asking me to retell traumatic experiences; see summary and case contact" |
| **Raise** | Cross-agency legibility | Structured format means the receiving agency can quickly parse services-received, services-sought, and key dates |
| **Create** | A portable, client-owned handoff protocol | No US city has standardized a client-carried handoff memo for social services. VA Homeless Wallet Cards and discharge summaries exist but are siloed within healthcare |
| **Create** | A "trauma-informed minimalism" design pattern | Deliberately constraining the data set to protect the client from over-disclosure |

**Core assumption challenged:** "Cross-agency coordination requires shared systems." The research shows the VA H-PACT model reduced ED use by ~25% using wallet cards and discharge summaries — physical artifacts, not data exchanges. The memo applies this pattern to housing/workforce/reentry navigation.

## 2. Rapid Ideation (Crazy 8s)

| # | Idea | Notes |
|---|------|-------|
| 1 | **Structured PDF memo** — form fields map to a two-page PDF with sections for "Services Received," "Services Sought," "Key Dates," and "Contact My Caseworker" | Baseline. Directly implements the IDEA.md description |
| 2 | **Laminated wallet card + QR to full memo** — CR80 PVC card with top-5 fields; QR links to a locally-stored full version | Per VA "My Personal Health Plan" wallet card pattern. Durable, fits in a pocket |
| 3 | **Caseworker-to-caseworker variant** — separate form optimized for the sending caseworker to fill, not the client | Research shows 95.6% completion when CBO-assisted. Build for the assister workflow |
| 4 | **Multi-language memo with icon-based sections** — visual icons for housing, food, health, employment reduce language dependency | Research recommends 6th-grade reading level (CDC Clear Communication Index) and icon-based quick guides |
| 5 | **🔥 Voice-recorded memo attachment** — client records a 60-second audio summary that's embedded as a QR-linked audio file | Provocative: addresses low-literacy populations directly. Audio is the most natural "retelling" medium |
| 6 | **🔥 Memo as a smart NFC card** — tap-to-read NFC card loaded with structured data at the issuing agency | Provocative: eliminates paper loss risk. NFC readers are ubiquitous on modern phones. Cost ~$1/card |
| 7 | **Coordinated Entry integration** — form pre-populates from HMIS Coordinated Entry data (with client consent) via API | Higher-complexity variant that bridges the zero-server pattern with existing homeless services infrastructure |
| 8 | **"Story once" progressive memo** — each agency stamps the memo with their contribution; the document grows over time | Like a medical chart but client-held. Each visit adds a line. Addresses the longitudinal coordination gap |

## 3. Rapid Design Sprint

**Problem sentence:** When a Richmond resident navigating housing, workforce, or reentry services moves from one organization to the next, they repeat their story from scratch — causing re-trauma, wasted time, and lost context — because no portable handoff artifact exists.

**User journey (5 steps):**
1. Client (or caseworker) opens the form at the current agency (via bookmarked URL or QR poster in waiting room)
2. Fills structured sections: services already received, services sought next, key dates, eligibility determinations, caseworker contacts
3. Optionally adds a "trauma-informed statement" requesting the next agency not re-ask sensitive history
4. Generates a two-page PDF memo with the client's name, date, and a summary header
5. Client prints or downloads the memo and hands it to the intake worker at the next agency

**Prototype shape:** Single HTML page with a multi-section form. Each section is a collapsible accordion. "Generate Memo" button produces a two-page PDF via pdfmake. No backend. Total build: <400 lines of JavaScript.

**First test:** Partner with one Richmond reentry organization and one housing agency. Have 5 clients carry the memo between them. Measure: (a) did the receiving agency read it? (b) did it reduce intake questions? (c) client-reported re-trauma burden (Likert scale).

## 4. Opportunity Mapper

### Opportunity 1: Reentry-to-Housing Handoff

| Dimension | Detail |
|-----------|--------|
| **User** | Individuals released from Richmond City Jail navigating to transitional housing |
| **Outcome** | Reduce time-to-intake at housing agencies by providing pre-filled context on parole status, ID status, and immediate needs |
| **Workflow** | Reentry navigator fills memo → client carries to housing agency → housing intake worker reads memo before interview |
| **Dependencies** | Reentry navigator willingness to use the tool; housing agency willingness to accept the memo |
| **Richmond relevance** | OAR of Richmond, Richmond Justice Initiative, and HomeAgain operate in this handoff corridor |

### Opportunity 2: Immigrant Multi-Service Navigation

| Dimension | Detail |
|-----------|--------|
| **User** | Immigrant residents referred between resettlement agencies, health clinics, and workforce programs |
| **Outcome** | Client doesn't retell immigration history, language needs, and family composition at each stop |
| **Workflow** | Resettlement caseworker fills memo in client's language → client carries to health clinic → clinic reads memo |
| **Dependencies** | Multilingual form and PDF output; cultural competency in form design |
| **Richmond relevance** | ReEstablish Richmond, Commonwealth Catholic Charities, and CrossOver Healthcare Ministry form a dense referral network |

### Opportunity 3: Behavioral Health Warm Handoff

| Dimension | Detail |
|-----------|--------|
| **User** | Clients transitioning between behavioral health crisis services and outpatient providers |
| **Outcome** | Receiving provider knows current medications, treatment history, and crisis contacts without requiring client to retell |
| **Workflow** | Crisis counselor fills memo (with client consent) → client carries to outpatient appointment |
| **Dependencies** | 42 CFR Part 2 consent for SUD information (research confirms 2024 Final Rule allows single consent for TPO) |
| **Richmond relevance** | Richmond Behavioral Health Authority serves as primary crisis point; warm handoffs to private providers are a known gap |

## 5. Problem Scoping

| Dimension | Score (1-5) | Rationale |
|-----------|:-----------:|-----------|
| **Impact** | 4 | Directly addresses the "story repetition" problem cited across every cross-agency navigation study. VA H-PACT wallet cards associated with ~25% ED reduction — the mechanism (portable context) is the same |
| **Feasibility** | 5 | Implementation Reality Score: 22/25 (Tier S). Zero server, zero data storage, zero City cooperation required. Identical pattern to the Core Eligibility Pack Builder |
| **Data readiness** | 5 | No external data required. Content comes entirely from the client/caseworker filling out the form |
| **Problem clarity** | 5 | The problem statement is one of the clearest in the pillar: "clients repeat their story." Every stakeholder interviewed in social services confirms this |
| **Demo-ability** | 5 | Fill a form, generate a PDF, hand it to someone. Immediately tangible. Judges can physically hold the output |

**Weekend MVP shapes:**
- **Minimal:** Five-section HTML form → two-page PDF. Sections: Who I Am, Where I've Been, What I Need Next, Key Dates, My Contacts. English only. Deploy to GitHub Pages.
- **Stretch:** Add Spanish, add trauma-informed statement toggle, add QR code on the memo linking to a locally-encrypted copy (WebCrypto + IndexedDB), add caseworker-facing variant with additional clinical fields.

## 6. Assumption Mapping

| # | Assumption | Risk (1-5) | Uncertainty (1-5) | R × U | Validation Method |
|---|-----------|:----------:|:-----------------:|:-----:|-------------------|
| 1 | Receiving agencies will read and use a client-generated memo during intake | 5 | 3 | **15** | Shadow 3 intake sessions at partner agencies; present the memo and observe whether intake workers reference it |
| 2 | Clients are willing to carry a physical document containing service history | 4 | 3 | **12** | Interview 10 clients at a reentry organization about comfort level with carrying a printed memo |
| 3 | The memo reduces intake time measurably (target: -25% per research KPIs) | 4 | 4 | **16** | Time-motion study: compare intake duration with and without memo at a single agency |
| 4 | A structured form captures enough context to be useful without being burdensome to fill | 3 | 3 | **9** | Usability test: measure form completion time and completeness across 10 users |
| 5 | Clients won't lose the physical document between agencies | 3 | 4 | **12** | Track memo retention rate over 5 handoffs; compare paper-only vs. paper+QR hybrid |
| 6 | The memo doesn't inadvertently create liability for the issuing caseworker | 4 | 4 | **16** | Legal review with 2 agency compliance officers; confirm the memo is "communication, not case file" |

**Top 3 to validate first:**
1. **Assumption 3 (R×U=16):** If the memo doesn't measurably reduce intake time, the tool is a nice gesture but not a system change. Time-motion study is essential.
2. **Assumption 6 (R×U=16):** If caseworkers fear liability for what's in the memo, adoption dies at the source. Legal review before building.
3. **Assumption 1 (R×U=15):** If receiving agencies ignore the memo, the entire value chain breaks. Observational validation at real intake sessions.

---

## Key Takeaway

The Cross-Agency Handoff Memo is the highest-feasibility idea in the pillar (22/25, Tier S, rank #6 of 73). Its power comes from radical simplicity: a form that makes a PDF. The innovation is not technical — it's conceptual. By putting the coordination artifact in the client's hands rather than building system-to-system interoperability, it sidesteps every infrastructure wall (311/AvePoint, HMIS integration, HIPAA data sharing) that blocks more ambitious approaches. The critical validation is whether the receiving agency actually reads and uses it.
