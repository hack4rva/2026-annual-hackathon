# Core Eligibility Pack Builder

**Source:** NEW  
**Pillar:** Thriving and Inclusive Communities  
**Problem Statement:** Help residents navigate housing, workforce, and reentry services without repeating their story across every agency.

---

## Description

**Core assumption challenged:** benefits intake requires a server; the analysis argues compliance and assisted-workflow friction are the real blockers, and a **client-side** pattern (no accounts, no server-side PHI) can prepare a printable **eligibility packet** while avoiding many procurement and BAA issues. A Richmond resident navigating multiple programs cannot efficiently compile documents and eligibility information across agencies, causing repeated intake, lost paperwork, and abandoned applications — especially for those attempting self-service without CBO help. The tool prepares documents and structured summaries; it does **not** adjudicate eligibility via state APIs.

## Key Approach

- Single-page PWA: select target programs (e.g., SNAP, Medicaid, housing — scoped for MVP) → structured fields → client-side PDF (e.g., pdfmake) → download/print; optional QR handoff card concept from research.
- Zero server storage by design; rules bundles versioned and cacheable; optional offline/PWA and language toggles in stretch shapes.
- CBO modes: staff-assisted kiosk or walk-in flow to accelerate intake and produce a packet the client carries forward.
- Validate whether receiving agencies accept client-generated packets and whether unassisted completion rates are viable.
- Contrast with server-based portals that drive high assisted-completion rates in cited research.
