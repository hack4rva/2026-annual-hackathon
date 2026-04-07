# Solution Ideas — Procurement Risk & Opportunity Review (Vendor Contract Mgmt Context)

**Pillar:** A Thriving City Hall
**Problem Statement (verbatim):** Help City staff identify valid, compliant contracts across City, state, and federal sources without manual PDF hunting.
**Demo Context:** Vendor & Contract Management Web App
**Date:** March 31, 2026
**Basis:** Prior art research (CompareX, SquarePact, NYC Checkbook 2.0, Tempe Procurement Dashboard, CobblestoneContracts); Socrata xqn7-jvv2; SAM.gov; eVA; VITA; documented staff and vendor pain points

All ideas below are advisory-only. No idea auto-awards, auto-disqualifies, or replaces human procurement judgment.

---

## Idea 1 — ADOPT+BUILD: Complete VITA Integration via CobblestoneContracts Data Partnership
**Prior art:** VITA already uses CobblestoneContracts for state IT contract management (vita.cobblestonesystems.com/public/); CobblestoneContracts is a commercial CLM platform with data export capabilities; Vendor Contract Mgmt attempted this integration and was blocked by API unavailability
**JTBD addressed:** Job 1 (Compliance across City and state sources)
**Real data required:** VITA CobblestoneContracts (state IT contracts — web-only, no public API); formal data-sharing arrangement between City of Richmond and VITA
**How it works:** Instead of building an API integration to a system that doesn't offer one, request a periodic data export from VITA through the City's existing intergovernmental channels. VITA publishes state IT contract data on its public web portal — the data is not secret, just not API-accessible. A quarterly CSV export or a formal web scraping agreement would provide state contract data to cross-reference against the City's Socrata records. All cross-reference results are advisory — staff compare city and state contract terms, the system does not determine validity.
**Constraint:** Requires a formal request from City procurement to VITA. This is a relationship and process blocker, not a technical one. The team's PDF upload workaround demonstrates they understand the need.

---

## Idea 2 — BUILD: SAM.gov Exclusion Advisory Check on Socrata Vendor List
**Prior art:** FEMA deobligated $805,630 for one false-negative debarment check; vendor verification failures = ~26% of Single Audit findings; SquarePact automates debarment verification
**JTBD addressed:** Job 1 (Federal compliance in the procurement workflow)
**Real data required:** SAM.gov Entity/Exclusion API (api.sam.gov — API key required); Socrata xqn7-jvv2 supplier field (735 distinct vendor names)
**How it works:** For each vendor in the Socrata-fed dashboard, run a SAM.gov exclusion check. Display results as advisory flags: "SAM.gov: Active — No Exclusions" or "⚠️ Exclusion Found — Review Required." Batch-check all 735 unique suppliers on initial load (within rate limits), then check individual vendors on each contract view. System flags, never determines compliance. Staff review each flag.
**Constraint:** SAM.gov API rate limits. 735 vendors at 10 req/day personal tier = 74 days for full portfolio. A .gov API key resolves this. Vendor name matching imprecise — fuzzy matching needed.

---

## Idea 3 — BUILD: Vendor Self-Service Portal with MBE/SWaM Opportunity Matching (Equity)
**Prior art:** VA DSBSD SWaM database (sbsd.virginia.gov); eVA vendor registration portal; no comparable municipal vendor self-service portal exists in Virginia
**JTBD addressed:** Job 1 (Vendor compliance visibility); equity dimension (lower barrier for small/minority vendors)
**Real data required:** Socrata xqn7-jvv2 (upcoming contract expirations = rebid opportunities); VA DSBSD SWaM certification database; NAICS codes (not in Socrata — would need vendor self-reported or SWaM-linked)
**Equity dimension:** This is an equity idea. Procurement complexity is a documented barrier for MBE/SWaM businesses. A portal where certified businesses see opportunities matched to their capabilities — without navigating eVA, OpenGov, and City Council agendas separately — lowers the barrier to entry.
**How it works:** The existing vendor-side portal is extended. Vendors log in, see their active contracts, and receive advisory alerts about upcoming procurement opportunities that match their certification and NAICS codes. The system does not pre-qualify or guarantee anything — it surfaces relevant opportunities. "Contract [X] with [Department] expires in 90 days and may be rebid. Your SWaM certification in [category] is relevant."
**Constraint:** Requires NAICS code linkage (not in Socrata). Requires SWaM database integration. Must clearly state that opportunity alerts are informational, not commitments.

---

## Idea 4 — BUILD: Contract Expiry Calendar with Department-Level Views
**Prior art:** Tempe Procurement Dashboard (filter by renewal/expiry, department-level views); staff currently use Outlook calendars for renewal tracking; 2010 MUNIS audit found expired contract still treated as active
**JTBD addressed:** Job 1 (Missed renewal window prevention)
**Real data required:** Socrata xqn7-jvv2 effective_to and agency_department fields (both present, 100% date completeness)
**How it works:** A calendar view showing contract expirations by department. Department heads see only their contracts; procurement leadership sees the full portfolio. Color-coded by urgency: red (<14 days), yellow (14–30 days), green (30–90 days). Each calendar entry links to the contract detail page. Advisory email alerts at 90/60/30/14 days before expiration. No auto-renewal — alerts inform, staff decide.
**Constraint:** Socrata lacks renewal terms. The system flags expiry but cannot advise on renewal eligibility without additional data. The PDF extraction tool could supply renewal terms from uploaded documents.

---

## Idea 5 — ADOPT: Enhance OpenGov Portal with Vendor Contract Mgmt's Two-Sided Architecture
**Prior art:** Richmond already operates OpenGov procurement portal at procurement.opengov.com/portal/rva; no existing vendor self-service layer; Vendor Contract Mgmt's dual-portal concept is the unique contribution
**JTBD addressed:** Job 1 (Staff view); equity (vendor access reduces information asymmetry)
**Real data required:** OpenGov portal data (already live); Firebase authentication (already built by team)
**How it works:** Rather than building a parallel system, propose the two-sided architecture to OpenGov as a feature enhancement. Government officials see the existing OpenGov portal enhanced with AI summarization. Vendors get a new self-service view showing their own contracts, status, and upcoming opportunities. Both sides operate from the same data. This preserves the City's existing OpenGov investment while adding the vendor dimension that no current tool provides.
**Why adoption is the right frame:** The City already has a procurement portal. Adding a vendor-facing layer to it is cheaper than maintaining two systems.
**Constraint:** Requires OpenGov's cooperation or API access. May conflict with OpenGov's product roadmap. Vendor authentication adds identity verification complexity.

---

## Idea 6 — BUILD: Public Procurement Spending Dashboard (Equity — Transparency)
**Prior art:** NYC Checkbook 2.0 (open-source contracts UI, sub-vendor tracking); Richmond JustFOIA pilot (May 2026); Socrata data is already public — this is a presentation layer
**JTBD addressed:** Job 3 (Resident/watchdog asking "where does the money go?")
**Real data required:** Socrata xqn7-jvv2 (1,362 records — contract_value, agency_department, supplier, procurement_type); SODA API (no auth needed for public data)
**Equity dimension:** Makes procurement spending visible to any resident without FOIA. Enables public oversight of vendor concentration and department spending.
**How it works:** A read-only public page (no login required) showing: total active contract value, top departments by spend, top vendors by contract count and value, procurement type breakdown. Built entirely from Socrata data that is already public. Available in English and Spanish. The Vendor Contract Mgmt team already fetches and cleans Socrata data — this adds a public display layer to what they've already built.
**Constraint:** Must exclude any vendor-proprietary information. Socrata data is already public record. 29 rows at $1 and 18 at $0 should be filtered or annotated as placeholder records.

---

## Idea 7 — BUILD: AI Contract Portfolio Briefing for Department Heads
**Prior art:** CompareX AI stakeholder chat; Vendor Contract Mgmt's existing AI summarization agent
**JTBD addressed:** Job 2 (New staff or department heads inheriting portfolio context)
**Real data required:** Socrata xqn7-jvv2 filtered by agency_department; AI summarization agent (already built)
**How it works:** Department heads receive a monthly AI-generated briefing: "Department of Public Utilities has 47 active contracts totaling $X. 5 expire in the next 90 days. Largest vendor by spend: [name] ($Y across 3 contracts). Advisory: vendor concentration in [category] exceeds 40% of department spend." The briefing is advisory and generated from real Socrata data. New department heads get historical briefings on demand. Staff review and decide what to act on.
**Constraint:** Quality depends on Socrata data completeness. Briefing must carry an explicit "advisory — verify before action" disclaimer.

---

## Idea 8 — BUILD: Cross-Department Vendor Concentration Alert
**Prior art:** RVA Contract Lens flags vendor concentration risk; 2025 OCA audit found $5M in "questionable expenses"; Tempe Procurement Dashboard provides department-level filtering
**JTBD addressed:** Job 1 (Portfolio-level compliance risk)
**Real data required:** Socrata xqn7-jvv2 (supplier, agency_department, contract_value)
**How it works:** Identify vendors that hold contracts across multiple departments. Flag any vendor whose total contract value exceeds a configurable threshold (e.g., $1M or 10% of any department's budget). Display as an advisory alert: "Vendor [X] holds contracts in 4 departments totaling $Y. Review for concentration risk." System surfaces the pattern — staff assess whether concentration is a risk or justified.
**Constraint:** Socrata supplier names are fragmented (735 distinct strings, many duplicates). Requires vendor name normalization before meaningful concentration analysis.

---

## Idea 9 — BUILD: MBE/SWaM Spend Tracking Dashboard (Equity)
**Prior art:** VA DSBSD SWaM certification database; procurement equity research documenting systemic disadvantage for small/minority vendors; Richmond's stated equity procurement goals
**JTBD addressed:** Job 3 (Public accountability for equitable spending); equity dimension
**Real data required:** Socrata xqn7-jvv2 supplier field; VA DSBSD SWaM certification database; fuzzy matching between supplier names and certified businesses
**Equity dimension:** This is the equity idea. Answers: "What share of Richmond's contract dollars go to MBE/SWaM-certified businesses?" Tracks trends over time. Publicly accessible.
**How it works:** Cross-reference Socrata suppliers with SWaM certification records. Dashboard shows: % of contract dollars to certified vendors, by department, by year. Available publicly (extends the two-sided architecture to a third side: the public). Advisory and informational — surfaces data for policy discussion.
**Constraint:** Vendor name matching across databases is imperfect. SWaM database access method needs verification. Some vendor data may be stale.

---

## Idea 10 — BUILD: Vendor Compliance Self-Check Tool
**Prior art:** eVA vendor registration portal; SAM.gov entity registration; SWaM certification database; no single tool lets a vendor check their own compliance across all three
**JTBD addressed:** Job 1 (Vendor-side compliance — unique to this demo's two-sided architecture); equity (reduces compliance barrier for small vendors)
**Real data required:** SAM.gov Entity API; eVA registration status (web-based); VA DSBSD SWaM certification database; vendor self-reported information
**How it works:** A vendor logs into the portal and runs a "compliance self-check." The system queries SAM.gov for active entity registration, checks SWaM certification status, and displays a checklist: "✅ SAM.gov: Active ✅ SWaM: Certified ⚠️ eVA: Registration expired — renew at eva.virginia.gov." The tool is advisory — it tells the vendor what registries show, not whether they qualify for a specific contract. Helps small vendors stay compliant without navigating multiple portals independently.
**Constraint:** eVA has no public API — status check would be manual or require web scraping. SAM.gov rate limits apply. Must clearly state that the compliance check is informational and does not constitute eligibility determination.

---

## Summary Table

| # | Type | JTBD | Key Data Required | Equity Dimension | Advisory-Only |
|---|------|------|------------------|-----------------|---------------|
| 1 | Adopt+Build | J1 | VITA CobblestoneContracts | — | ✅ Cross-reference only |
| 2 | Build | J1 | SAM.gov API + Socrata | — | ✅ Flags status |
| 3 | Build | J1, equity | Socrata + SWaM DB + NAICS | ✅ MBE/SWaM opportunity matching | ✅ Surfaces opportunities |
| 4 | Build | J1 | Socrata xqn7-jvv2 | — | ✅ Alerts, no action |
| 5 | Adopt | J1, equity | OpenGov + Firebase auth | ✅ Vendor access | ✅ Display only |
| 6 | Build | J3 | Socrata xqn7-jvv2 | ✅ Public transparency | ✅ Read-only |
| 7 | Build | J2 | Socrata by department | — | ✅ Advisory briefing |
| 8 | Build | J1 | Socrata xqn7-jvv2 | — | ✅ Flags pattern |
| 9 | Build | J3, equity | Socrata + SWaM DB | ✅ MBE/SWaM tracking | ✅ Informational |
| 10 | Build | J1, equity | SAM.gov + eVA + SWaM | ✅ Vendor compliance access | ✅ Informational |
