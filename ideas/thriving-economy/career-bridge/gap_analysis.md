# Gap Analysis — CareerBridge

**Pillar (submitted):** A Thriving Economy  
**Problem Statements (Economy):**  
- **PS1 — MBE Contracting Discovery:** Help minority-owned businesses identify and understand City contracting opportunities that match their capabilities.  
- **PS2 — Small Business Navigation:** Help first-time entrepreneurs understand what steps to take, in what order, to start and register a business in Richmond.  

**Demo:** CareerBridge (Row 24 — Jake Yazbek, Team River City Hackers)  
**Platform:** Web and mobile web application  
**Review Date:** April 1, 2026  

---

## 1. Problem Grounding

CareerBridge is **misaligned** with both Thriving Economy problem statements.

The hackathon submission is under **Thriving Economy**, but the product is a **career exploration and job-matching tool** for residents who want to change careers or find their next role. It addresses **workforce development for job seekers** — quiz-based matching, Richmond-area job/career data, barrier identification (e.g., childcare), and links to training and scholarships — not **government contracting**, **vendor registration**, **bid discovery**, or **business formation / BPOL / sequencing of permits and licenses**.

- **Against PS1 (MBE Contracting):** The demo does not surface IFBs/RFPs, NAICS/NIGP alignment, OMBD vendor paths, or opportunity-to-firm matching for minority-owned businesses bidding on City work.  
- **Against PS2 (Small Business Navigation):** The demo does not guide first-time entrepreneurs through SCC, EIN, CZC, BPOL, or agency-specific startup sequencing. “Starting a business” is not the user journey shown.

**Better pillar fit:** **Thriving Families — Youth Employment Pathways** (“Give Richmond youth one clear place to explore summer jobs, internships, and first-job guidance”). CareerBridge’s pattern — discover paths, understand requirements, reduce barriers, link to programs — is structurally closer to **employment and career navigation** than to **economy pillar** procurement or business startup compliance.

---

## 2. Data Source Mapping

| Data claim in demo | Real or synthetic? | Source | Owner | Access | Cadence | Notes |
|---|---|---|---|---|---|---|
| Richmond-specific jobs / career database | **Unclear** | Described as “publicly accessible career and job data” | Not specified in transcript | Unknown | Unknown | No named feed (BLS, O*NET, state LMI, etc.) or City dataset cited. Precision and freshness unverified. |
| Quiz → career matching | **Real (prototype)** | In-app logic + AI | Team | N/A | Per session | Matching quality depends on underlying job/career corpus and model behavior — not mapped to a documented source contract. |
| AI-powered Q&A on careers | **Real (prototype)** | AI (vendor not named in transcript) | Team / API provider | API key (assumed) | Real-time | Standard pattern; governance (accuracy, disclaimers) not covered in transcript. |
| Barrier-specific resources (e.g., Child Care Subsidy, J. Sargent Reynolds programs, VA Nursing & Allied Health Scholarships) | **Partially verifiable** | Curated links / program pages | Mixed (public programs + institutions) | Public web | Static until team updates | Demonstrated as **personalized surfacing** from user situation (e.g., children → childcare resource). Provenance and completeness of the resource graph not documented. |
| Growth data (e.g., “22% projected growth in Virginia”) | **Unclear** | Implied occupational/outlook statistics | Typically BLS or state LMI — **not attributed in transcript** | Unknown | Unknown | Should be tied to a named series and year for auditability. |
| “Government-specific data” (planned) | **Future / not shown** | City or other government feeds | City / agencies | Not integrated | N/A | Stated as roadmap only; no integration demonstrated. |

### Gaps requiring clarification

- **Primary job/career dataset:** What exact sources power “Richmond-specific” claims (geography filter, employer listings, SOC/O*NET mapping)?  
- **Licensing of data:** Can third parties republish or derive matches from those sources under hackathon/prod use?  
- **Government data roadmap:** Which agencies and datasets are targets, and for what fields (youth programs, registered apprenticeships, City jobs)?  

---

## 3. Gap Analysis Against JTBDs

Shared JTBD definitions live in:

- `_shared-mbe-contracting/jtbd_analysis.md` (PS1 — three jobs)  
- `_shared-small-business/jtbd_analysis.md` (PS2 — three jobs; CareerBridge already noted there as likely misaligned)  

### PS1 — MBE Contracting Discovery

| Job | Summary | CareerBridge coverage |
|-----|---------|------------------------|
| **Job 1** | MBE owner decodes procurement jargon; plain-English match to **City contracting opportunities** | **None** — No solicitations, NAICS/NIGP, BidNet/OpenGov, or capability-to-opportunity matching. |
| **Job 2** | First-time **vendor**; ordered steps for SWaM, OMBD, BidNet, iSupplier | **None** — Tool is for **employees / career changers**, not vendor onboarding. |
| **Job 3** | OMBD staff: match **open solicitations** to registered MBE profiles | **None** — No staff workflow, vendor registry, or solicitation feeds. |

### PS2 — Small Business Navigation

| Job | Summary | CareerBridge coverage |
|-----|---------|------------------------|
| **Job 1** | First-time **entrepreneur**; permits/licenses/registrations in order for **starting a business** | **None** — No SCC/EIN/CZC/BPOL path or agency sequencing. |
| **Job 2** | **Self-employment** transition; financial/legal/regulatory steps for **operating a business** in Richmond | **None** — Barriers addressed are **personal/career** (childcare, training), not business compliance or tax/zoning sequencing. |
| **Job 3** | SBDC/SCORE/311: self-service for **repeat “where do I start?” business questions** | **None** — Could reduce repetitive **career** questions in another context, but does not capture startup checklists or agency handoffs for new businesses. |

**Summary:** CareerBridge does **not** materially advance any of the **six** Economy JTBDs (3 MBE + 3 Small Business). Any overlap is incidental (e.g., “barriers”) without the **procurement** or **business formation** object those jobs require.

---

## 4. Opportunities

### Opportunity 1: Barrier identification + resource matching (reusable pattern)

The demo’s pattern — infer barriers from intake (e.g., children → childcare subsidies) and surface **concrete programs and links** — is strong civic-tech DNA. The same pattern could support **Youth Employment Pathways** (transportation, work permits, training programs) or, with different content, **economy** journeys — but only after **problem alignment** and **curated, maintained** resource data.

**Dependencies:** SME-validated resource lists; update cadence; equity review of who is included/excluded from recommendations.

### Opportunity 2: Quiz-based intake + card UX for exploration

Rapid quiz → **scored or ranked** options → **low-friction exploration** (card swipe, save matches) lowers intimidation for users who feel “stuck.” That interaction model transfers well to **youth-facing** career and program discovery where engagement and clarity matter.

**Dependencies:** Content model tied to real opportunities (jobs, internships, programs); accessibility testing beyond colorblind mode (screen readers, literacy, languages).

### Opportunity 3: Re-score under Thriving Families / Youth Employment Pathways

Re-evaluating CareerBridge against **Youth Employment Pathways** JTBDs (once defined or borrowed from Families research) would give a fair **Impact** and **User Value** read relative to the problem the team actually built for — rather than forcing fit to MBE or small-business navigation.

**Dependencies:** Pillar reassignment for judging or documentation; optional SME conversation with workforce/youth programs stakeholders.
