# Innovation Analysis: Core Eligibility Pack Builder

## 1. Blue Ocean Reframing (ERRC Grid)

| Action | Element | Rationale |
|--------|---------|-----------|
| **Eliminate** | Server infrastructure, user accounts, agency MOUs | Research confirms zero production US deployments of pure client-side cross-program intake — eliminating the server removes the single largest compliance and procurement barrier (HIPAA BAAs, FOIA retention, vendor onboarding) |
| **Eliminate** | Real-time eligibility determination | No API connections to state eligibility systems; the tool prepares documents, it doesn't adjudicate |
| **Reduce** | Data collection scope | Collect only what's needed for the PDF output — not the superset required by server portals like BenefitsCal |
| **Reduce** | Dependency on CBO-assisted workflows | BenefitsCal shows 95.6% CBO-assisted completion vs. 60.6% self-service; reduce this gap by making the self-service UX radically simpler |
| **Raise** | Client data sovereignty | Client holds the only copy; no server-side PHI exposure. This is unprecedented in US social services intake |
| **Raise** | Deployment speed | Static site hosting (GitHub Pages, Netlify) means launch in days, not months of procurement |
| **Create** | Printable "eligibility packet" as a physical artifact | A tangible document the client carries — bridges digital and analog worlds for populations with intermittent connectivity |
| **Create** | Versioned eligibility logic bundles via CDN with SRI | Treat eligibility rules as signed code artifacts (per OpenFisca model), not hardcoded UI logic |

**Core assumption challenged:** "Benefits intake requires a server." Research shows the real blockers are compliance (HIPAA/FOIA) and assisted workflows, not technical capability. A hybrid pattern (client prep + consented ephemeral upload) bypasses both while preserving privacy.

## 2. Rapid Ideation (Crazy 8s)

| # | Idea | Notes |
|---|------|-------|
| 1 | **PDF-only pack builder** — static HTML form → client-side PDF via pdfmake | Baseline MVP. Uses pdfmake's declarative JSON for complex layouts. Research confirms maturity of jsPDF, pdf-lib, and pdfmake |
| 2 | **QR-code handoff wallet card** — Generate a CR80-sized card with QR linking to an encrypted blob in IndexedDB | Per Pattern C from research: BYO storage + QR/shortlink handoff tokens. No PHI in the QR itself |
| 3 | **Pre-filled form from 211 lookup** — User enters zip code, 211 API returns local programs, form pre-populates relevant fields | Bridges the "what programs exist" gap without requiring the user to know program names |
| 4 | **Offline PWA with rules version alerting** — ServiceWorker caches form + rules bundle; alerts user when a newer version is available | Addresses the research finding that client-side eligibility logic is "brittle" without versioned bundles |
| 5 | **CBO kiosk mode with print-and-wipe** — Dedicated kiosk flow that auto-prints, then scrubs all session data from memory | Per Pattern D: counselor-assisted kiosk. Addresses the 95.6% CBO-assisted completion advantage |
| 6 | **🔥 Audio-guided intake** — Voice prompts in 5+ languages walk the user through each field; no reading required | Provocative: targets the 71% mobile usage seen on BenefitsCal while addressing low-literacy barriers |
| 7 | **🔥 Eligibility pack as blockchain-anchored receipt** — Hash the PDF and anchor to a public blockchain for tamper-proof timestamping | Provocative: solves the FOIA/records-retention problem without storing PHI — only the hash is public |
| 8 | **Community-maintained rules marketplace** — Legal aid orgs publish eligibility rule bundles (DMN/JSON) that any instance can consume | Per research: OpenFisca model + json-rules-engine. Decentralizes rule maintenance across the legal aid network |

## 3. Rapid Design Sprint

**Problem sentence:** A Richmond resident navigating multiple benefit programs cannot efficiently compile the documents and eligibility information needed across agencies, leading to repeated intake, lost paperwork, and abandoned applications — especially for the 60.6% who attempt self-service without CBO assistance.

**User journey (5 steps):**
1. Resident arrives at form (via QR code at library, 211 referral, or CBO link)
2. Selects target programs (SNAP, Medicaid, housing — max 3 for MVP)
3. Fills structured fields: household size, income range, residency, existing benefits
4. Reviews generated PDF pack with program-specific pages and a cover summary
5. Downloads/prints the pack; optionally generates a QR wallet card for caseworker handoff

**Prototype shape:** Single-page PWA. No routing, no account creation. Form → preview → download. Built with pdfmake for declarative PDF generation. Entire app < 500KB. Deployable to GitHub Pages.

**First test:** 5 users at a Richmond CBO complete the flow for SNAP + Medicaid. Measure: time-to-completion, comprehension of output (teach-back test), and whether the caseworker at the receiving agency finds the packet useful.

## 4. Opportunity Mapper

### Opportunity 1: Self-Service Eligibility Preparation

| Dimension | Detail |
|-----------|--------|
| **User** | Richmond residents applying for 2+ benefit programs simultaneously |
| **Outcome** | Reduce repeated data entry across agencies; give residents a "source of truth" document to carry |
| **Workflow** | Form intake → client-side PDF → print/download → hand to next agency |
| **Dependencies** | Eligibility rules for target programs (SNAP, Medicaid, TANF); pdfmake or pdf-lib |
| **Richmond relevance** | Richmond's social services span multiple city/state agencies with no shared intake; 211 Virginia provides program lookup but not document assembly |

### Opportunity 2: CBO Intake Acceleration

| Dimension | Detail |
|-----------|--------|
| **User** | CBO caseworkers conducting intake for walk-in clients |
| **Outcome** | Cut intake time by pre-populating known fields; generate a packet that follows the client to their next appointment |
| **Workflow** | Caseworker fills form with client → prints packet → client carries to DSS/housing authority |
| **Dependencies** | CBO willingness to adopt the tool; printer access; form fields aligned to actual agency intake forms |
| **Richmond relevance** | Richmond CBOs (Commonwealth Catholic Charities, YWCA, ReEstablish Richmond) serve as frontline intake points for immigrant and low-income populations |

### Opportunity 3: Legal Aid Document Assembly

| Dimension | Detail |
|-----------|--------|
| **User** | Legal aid attorneys and paralegals preparing benefits applications |
| **Outcome** | Replace manual PDF-filling with structured form → auto-generated packets |
| **Workflow** | Attorney enters client data → generates program-specific application packets → client signs and submits |
| **Dependencies** | Accurate, current program forms; legal review of generated documents |
| **Richmond relevance** | Central Virginia Legal Aid Society handles benefits cases; Docassemble is used nationally but requires server infrastructure they may lack |

## 5. Problem Scoping

| Dimension | Score (1-5) | Rationale |
|-----------|:-----------:|-----------|
| **Impact** | 4 | Addresses a real, daily friction point for multi-program applicants; BenefitsCal data shows 60.6% self-service completion vs. 95.6% CBO-assisted — closing this gap has measurable value |
| **Feasibility** | 5 | Zero server, zero data storage, zero MOUs. pdfmake/pdf-lib are production-ready. Static hosting is free. Research confirms technical maturity |
| **Data readiness** | 3 | Eligibility rules must be manually encoded; no existing machine-readable rule sets for Virginia programs. OpenFisca has no Virginia module |
| **Problem clarity** | 4 | Well-defined: residents repeat information across agencies. The "handoff memo" variant (cross-agency-handoff-memo) proves the problem is widely recognized |
| **Demo-ability** | 5 | Form → PDF in a browser is immediately demonstrable. Judges can try it live. Output is tangible (printed document) |

**Weekend MVP shapes:**
- **Minimal:** HTML form with 10 fields → single-page PDF summary via pdfmake. Covers SNAP + Medicaid only. Deploy to GitHub Pages.
- **Stretch:** Add household member sub-forms, program-specific pages, and a QR wallet card. Add Spanish language toggle. Use pdf-lib to fill actual Virginia DSS form PDFs.

## 6. Assumption Mapping

| # | Assumption | Risk (1-5) | Uncertainty (1-5) | R × U | Validation Method |
|---|-----------|:----------:|:-----------------:|:-----:|-------------------|
| 1 | Receiving agencies will accept a client-generated PDF as useful intake input | 5 | 4 | **20** | Interview 3 Richmond DSS/housing intake workers about what documents they actually need and accept |
| 2 | Residents can complete the form without CBO assistance | 4 | 4 | **16** | Usability test with 5 walk-in clients at a CBO; measure unassisted completion rate |
| 3 | Client-side PDF generation produces accessible, print-ready output across devices | 3 | 3 | **9** | Test pdfmake output on 5 device/browser combinations; verify print fidelity and WCAG compliance |
| 4 | Eligibility rules can be encoded accurately without access to state eligibility system APIs | 4 | 3 | **12** | Compare manually encoded rules against 20 real eligibility decisions from a partner CBO |
| 5 | Users trust a tool that stores nothing — no "save progress" creates abandonment risk | 4 | 4 | **16** | A/B test: pure client-side vs. IndexedDB local save. Measure completion rates |
| 6 | The "zero server" framing is a meaningful differentiator for privacy-concerned populations | 3 | 4 | **12** | Survey 20 immigrant-serving CBO clients on willingness to use a "no data stored" tool vs. a standard web form |

**Top 3 to validate first:**
1. **Assumption 1 (R×U=20):** If agencies won't accept the output, the tool has no downstream value. Validate via direct agency interviews before building.
2. **Assumption 2 (R×U=16):** If unassisted completion is too low, the tool replicates the same CBO-dependency problem. Validate via usability testing.
3. **Assumption 5 (R×U=16):** If no save-progress causes abandonment, the privacy benefit backfires. Validate via A/B test with IndexedDB local storage option.

---

## Key Takeaway

The Core Eligibility Pack Builder occupies a genuinely novel space: zero verified US production deployments exist for pure client-side, cross-program intake tools. The technical stack is mature (pdfmake, pdf-lib, WebCrypto), the deployment model is frictionless (static hosting), and the privacy posture is unmatched. The critical risk is not "can we build it" but "will agencies accept what it produces." Validate downstream acceptance before investing in upstream eligibility logic encoding.
