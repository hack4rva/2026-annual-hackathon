# Blue Sky ERRC Ideas — Thriving and Inclusive Communities

**Generated:** April 1, 2026
**Method:** Blue Ocean ERRC (Eliminate, Reduce, Raise, Create) applied to shared JTBD and pain points
**Purpose:** Structurally different ideas that complement, not duplicate, the existing NEW_IDEAS set

---

## ERRC Grid

| | Eliminate | Reduce | Raise | Create |
|---|-----------|--------|-------|--------|
| Current approaches | Resident accounts and long-term digital footprints on discovery tools; assumption that a single mega-directory is the front door; "protected area" trust in physical sites | Reliance on English-first web search and long forms; phone-only first contact; navigator time lost retyping Help1RVA into Unite Us | Human-verified, culturally grounded trust signals; plain-language and low-literacy affordances; visible "last verified" freshness | Safe anonymous channels; portable handoffs that do not require new government IT or MOUs; offline/low-data paths aligned with WhatsApp/radio/word-of-mouth |

---

## Idea 1: Neighborhood Anchor Map + Bus-Linked Static Guide

**Problem Statement:** PS1 — Immigrant Service Discovery
**User:** A Spanish-speaking parent in Southwood who will not use government-branded apps but will open a paper flyer from church or a static link shared in WhatsApp/Facebook
**One-liner:** A zero-login, no-analytics static map and printable ward one-pager that shows trusted faith and community anchors, OIRE-backed organizations, and exact GRTC trips to get there — using icons and phone-first actions instead of eligibility paragraphs.

**ERRC moves applied:**
- **Eliminate:** Central search logs, user accounts, machine-translated eligibility text on the page (replace with "call to confirm" and human-reviewed blurbs for a small curated set)
- **Reduce:** Dependence on Help1RVA as the only discovery surface and on scrolling English-heavy program descriptions
- **Raise:** Trust density by foregrounding OIRE-trusted orgs and multicultural church locations as first-hop anchors; clarity of "how to get there" via transit
- **Create:** A print-primary + map-primary experience (posters/QR in community spaces) that meets smartphone-only, low-literacy users where OIRE research says they already are

**How it works:** The team exports OIRE's multicultural church Google My Maps layer to KML/GeoJSON, merges pin metadata with the OIRE trusted-organization roster and a manually verified short list of Help1RVA program deep links (names, phones, hours only on the static site). Each pin opens a minimal card: address, languages spoken (if known), phone tap-to-call, and a pre-filled trip plan using published GRTC GTFS. A "ward kit" PDF mirrors the same content for sites without reliable data.

**Data sources:** OIRE trusted-organization list (names/notes); OIRE multicultural churches Google My Maps (KML export → GeoJSON); curated stable Help1RVA/findhelp program URLs for Richmond; GRTC GTFS feeds (routes/stops); optional City of Richmond open GIS layers for community facilities if used for map context only.

**Why it's different:** Not a chatbot, not a timeline-based reentry guide, and not a structured eligibility PDF — it is an **anchor-first, print-and-map distribution model** that deliberately avoids storing resident behavior or hosting eligibility-critical auto-translation.

---

## Idea 2: Local-Only Cross-Agency Handoff Memo

**Problem Statement:** PS2 — Cross-Agency Service Navigation
**User:** A case manager at a Richmond reentry nonprofit (e.g., OAR) who must warm-handoff a client to Virginia Career Works or a housing partner without retyping the client's story into another system
**One-liner:** A browser-based, serverless form that lives entirely in the tab: the worker pastes a short, consent-scoped narrative and checklist of already-gathered documents, then generates a one-page PDF "handoff memo" the client carries — no cloud storage of PHI/PII.

**ERRC moves applied:**
- **Eliminate:** A shared client identifier, new MOUs, and any central database of resident stories for the prototype
- **Reduce:** Duplicate storytelling at the next desk to a 60-second read instead of a full re-intake
- **Raise:** Clarity of what the receiving agency should do first (appointment vs. walk-in, interpreter need, documents already in hand) using public intake norms
- **Create:** A **narrative portability layer** distinct from eligibility packets — optimized for human readability at the next window, not for matching fields in legacy systems

**How it works:** The case manager selects destination setting (workforce, shelter, benefits access site) from a short menu keyed to public requirements; enters non-sensitive headings only in browser memory (e.g., "needs ID assistance," "household size attested," "Language: Spanish — interpreter requested"); the tool renders a standardized memo with timestamps and organization letterhead placeholders. Export is PDF from the client device; optional QR on the PDF encodes only a static "how to use this memo" help URL, not client data.

**Data sources:** Published Virginia Career Works / VEC intake and LEP-access guidance (incl. VWL-24-03 self-attestation framing); public DSS/CommonHelp field descriptions for what clients typically need at first touch; public OAR/reentry partner walk-in and referral guidance; public RRHA or coordinated-entry "what to bring" summaries for housing handoffs (summarized, not scraped PII).

**Why it's different:** Core Eligibility Pack Builder standardizes structured fields across agencies; this tool standardizes a **brief, consent-bounded story + next-step script** for the receiving desk, does not attempt one-form-fits-all eligibility, and stays off a server — reducing subpoena surface and implementation time compared to integration plays.
