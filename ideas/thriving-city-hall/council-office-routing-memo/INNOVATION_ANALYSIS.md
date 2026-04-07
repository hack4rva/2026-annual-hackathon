# Innovation Analysis: Council Office Routing Memo

**Generated:** April 2, 2026
**Inputs:** IDEA.md, RESEARCH_RESULT.md, 6 Innovation Lenses

---

## 1. Blue Ocean Reframing (ERRC Grid)

| Factor | Action | Details |
|--------|--------|---------|
| Council staff acting as manual switchboards | Eliminate | San Diego's 311 planning report flagged that council offices frequently transferred calls manually due to lack of a centralized knowledge base. Eliminate the "human switchboard" pattern entirely. |
| Complex CRM software for council offices | Reduce | NYC's CouncilStat required a custom build. Elected-office CRMs like Indigov deploy in weeks but cost money. Reduce to a simple lookup tool that generates a printable memo — no CRM needed. |
| Routing accuracy and traceability | Raise | LA's 311 audit found 40% of calls transferred. Chicago's CHI311 integration raised closure rates from 82% to 94%. Raise Council routing to include structured fields: issue type, department, contact, form link, and 311 case ID. |
| Structured routing memo as an output format | Create | No existing tool generates a printable/emailable routing document for Council staff. Create a memo format that captures the resident's issue, identifies the responsible department, and provides specific next steps. |

**Core assumption challenged:** That Council offices need a dashboard or CRM. They don't — they need a lookup tool that produces a document. Council staff work through email, calls, and walk-ins. The output format must be a memo, not a web interface.

**Reframed value proposition:** A routing memo generator that turns Council staff from switchboards into service navigators. The taxonomy is shared with the Deterministic Service Wizard but the UX is designed for the staff member on the phone, not the resident on a mobile device.

---

## 2. Rapid Ideation — 8 Divergent Approaches

1. **Memo Generator Web App** — Staff selects issue type from a dropdown, enters resident details, clicks "Generate." Output: a printable PDF/email with department, contact, form link, and follow-up instructions.
2. **Laminated Cheat Sheet** — A physical quick-reference card mapping the top 30 constituent issues to departments and contacts. Taped next to every Council staff desk phone.
3. **Outlook/Gmail Template Library** — Pre-written email templates for each issue type: "Dear [Department], a constituent in District [X] has reported [issue]. Please find details below..." One-click send.
4. **311 Integration Bridge** — Instead of a standalone tool, build a lightweight bridge that lets Council staff create 311 tickets directly, eliminating shadow tickets and ensuring tracking.
5. **Voice Assistant for Routing** — Council staff says "pothole on Main Street" into a microphone. The tool identifies the department and generates the memo. Hands-free for phone calls.
6. **Constituent Issue Tracker + Follow-up** — Beyond routing, track whether the department responded. If no response in 5 business days, auto-escalate. Adds accountability to the referral.
7. **Knowledge Base Wiki** — A searchable wiki of "who handles what" maintained by the 311 team. Council staff search it during calls. Cheaper than a CRM, more flexible than a static list.
8. **Council-to-311 Referral Form** — A standardized web form with required fields (constituent name, issue, location, 311 case ID) that emails directly to the responsible department's intake queue. Eliminates free-form email referrals.

**Most provocative:** #4 — The 311 Integration Bridge eliminates the Council-as-middleman pattern entirely. If Council staff can create 311 tickets directly, there's no need for a routing memo — the ticket IS the routing.
**Most feasible:** #1 — The Memo Generator Web App mirrors the IDEA.md spec exactly. A simple web form with a taxonomy dropdown that generates a formatted document.

---

## 3. Rapid Design Sprint

**Problem in one sentence:** When a resident contacts their Council member's office about a City service issue, staff don't know which department handles it and resort to forwarding emails or transferring calls blindly.

**Target user:** A Council district office staff member who receives 5-10 constituent service inquiries per week, mostly via phone and email.

**User Journey:**
- Start: Staff receives a call from a resident about a drainage problem. Opens the routing tool on their desktop.
- Friction: Currently, staff would Google "Richmond drainage," call 311 themselves, or email the generic city info address. Response time: hours to days. High risk of misrouting.
- Outcome: Staff selects "Drainage/Stormwater" from the issue dropdown, enters the resident's address and description. Clicks "Generate Memo." Receives a formatted document with: DPU as the responsible department, the specific contact, a link to the online form, and a pre-filled email they can forward.

**Lowest-fidelity prototype:** An HTML form with a single `<select>` dropdown of 30 issue types. On submit, display a formatted memo with the department, contact info, and form link pulled from a JSON taxonomy. Add a "Copy to Clipboard" and "Print" button.

**First test:** Sit with one Council office staff member for a half-day. Have them use the tool for every constituent inquiry that day. Ask: "Did this save you time? Was the routing correct?"

---

## 4. Opportunity Mapper

### Pattern A: Routing Memo Generator (Quick Win)
- **User:** Council district office staff (9 district offices × 1-3 staff each)
- **Outcome:** Accurate routing of constituent inquiries to the correct department in under 2 minutes
- **Workflow:** Staff opens web tool → selects issue type → enters resident details → generates printable/emailable memo with department, contact, and form link
- **Dependencies:** Same service taxonomy as the Deterministic Service Wizard (shared data, different UX). Buy-in from at least one Council office to pilot.
- **Richmond relevance:** Chicago's CHI311 modernization cut graffiti dispatch from 45 min to 5 min by connecting intake to departments. This tool applies the same principle at the Council level.

### Pattern B: Council-to-311 API Bridge (Stretch)
- **User:** Council staff and 311 dispatchers
- **Outcome:** Council staff create 311 tickets directly from their routing tool, eliminating shadow tickets and enabling end-to-end tracking
- **Workflow:** Build a lightweight adapter that posts structured referral data to Richmond's 311 system via Open311 or email-to-ticket gateway → include 311 case ID in the memo → enable follow-up tracking
- **Dependencies:** Access to Richmond's 311 ticket creation mechanism (email-to-ticket at minimum, API preferred). This runs into the AvePoint/311 structural wall unless an email gateway exists.
- **Richmond relevance:** Houston's Administrative Policy 2-23 mandates SLA targets and escalation protocols for 311 — Council staff need case IDs to hold departments accountable.

**Recommendation:** Pattern A is the hackathon build. It's standalone, requires no 311 API access, and delivers immediate value. Pattern B is the institutional upgrade that requires navigating the AvePoint structural wall.

---

## 5. Problem Scoping

| Dimension | Score (1-5) | Notes |
|-----------|-------------|-------|
| Impact | 4 | Directly improves constituent service quality across 9 district offices. Reduces misrouting and duplicate tickets. |
| Feasibility | 4 | Shares taxonomy with the Service Wizard. Requires buy-in from at least one Council office. No 311 API needed for Pattern A. |
| Data availability | 4 | rva.gov Services directory, RVA311 categories, and department contacts are all public. Curation into a routing taxonomy is the main effort. |
| Clarity | 5 | "Help Council staff route constituent issues to the right department" is unambiguous. |
| Demo credibility | 4 | A working memo generator with real Richmond departments and contacts is a compelling demo. Best if a Council staffer is present to vouch for the need. |

**Richmond-specific alignment:** This idea was generated through ERRC reframing of the service navigation problem space. It scores 19/25 (Tier A) because it requires taxonomy curation and Council office buy-in — both achievable but not automatic. The taxonomy overlaps with the Service Wizard, so building one accelerates the other.

**Policy/eligibility risks:** The memo may include constituent PII (name, address, phone). Must include a privacy footer and ensure the tool doesn't store PII beyond the session. The Washington Governor's IQ referral SOP provides a model template with privacy controls.

**Weekend MVP shapes:**
1. **Minimal:** HTML form + JSON taxonomy → formatted memo with department, contact, form link. "Copy" and "Print" buttons. 6-8 hours.
2. **Enhanced:** Add email-to-department feature (auto-populate a mailto link), constituent follow-up tracking, and a "History" log for the Council office. 10-14 hours.

---

## 6. Assumption Mapping

| # | Assumption | Risk | Uncertainty | Priority |
|---|-----------|------|-------------|----------|
| 1 | Council office staff will adopt a new routing tool instead of their existing ad-hoc methods | High | High | TEST FIRST |
| 2 | The routing taxonomy accurately maps issues to departments | High | Medium | TEST SECOND |
| 3 | A memo/document output format matches Council staff workflow better than a dashboard | Medium | Medium | TEST THIRD |
| 4 | One Council office will pilot the tool | Medium | Medium | VALIDATE |
| 5 | The taxonomy shared with the Service Wizard is reusable without modification | Low | Medium | VERIFY |
| 6 | PII handling in the memo is legally compliant | Medium | Low | CONFIRM |
| 7 | Council staff handle 5-10 routing-eligible inquiries per week (sufficient volume to justify the tool) | Medium | Medium | MEASURE |

**Top 3 to validate:**
1. **Staff will adopt it** — Validation: Shadow a Council office for one day. Count routing inquiries. Show the prototype. Ask: "Would you use this?" If they say "I already have my own list," learn what's on it and incorporate it.
2. **Taxonomy is accurate** — Validation: Take 20 recent constituent inquiries from a Council office. Run them through the taxonomy. Score correct routing %. If <80%, the taxonomy needs refinement.
3. **Memo format fits the workflow** — Validation: Generate 5 sample memos. Give them to Council staff. Ask: "Would you email this to the department? Print it for the resident? Both?" If neither, the output format is wrong.

---

## Key Takeaway

Council offices are the City's unofficial help desk — residents call their Council member when they don't know where else to go. The research shows this creates misrouting, duplicate tickets, and audit trail gaps (San Diego found council offices acting as switchboards). The routing memo is a low-tech, high-trust solution: it doesn't replace 311, it makes Council staff more effective at connecting residents to 311. The taxonomy investment is shared with the Service Wizard, so building one tool accelerates the other.
