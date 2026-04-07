# Roundtable (Condensed): Unboxed RVA

**Initiated:** 2026-04-02  
**Idea:** Unboxed RVA — Youth Project Marketplace  
**Pillar:** Thriving Families  
**Problem statement (MAP):** Youth Employment Pathways — one clear place for summer jobs, internships, and first-job guidance (reframed by team as **paid, project-based work** with local SMBs)  
**Recognition:** Thriving Families Pillar Award Winner — Hack for RVA 2026  

## Input materials

| Source | Status |
|--------|--------|
| `IDEA.md` | Loaded — canonical product: marketplace + RIA + parental consent + flows |
| `RESEARCH_RESULT.md` | Loaded — national “disconnected youth” stack (SMS, CRM, closed-loop referrals) |
| `INNOVATION_ANALYSIS.md` | Loaded — ERRC grid + MVP shapes A/B/C skew toward referral/SMS model |
| `RICHMOND_TECH_STACK_2026.md` | Loaded — AI policy, GTFS, closed systems (Help1RVA, Unite Us) |
| `pillar-thriving-families/research/INDEX.md` | Loaded — corpus map; youth jobs + privacy + MVP boundaries (F5, G1, H4, H5) |

---

## Seven personas (single pass)

### 1 — Innovator (product / future-of-work)

**Take:** The wedge is correct: Gen Z-shaped **projects with deliverables** beat “alphabetize in a closet” internships for motivation and portfolio value. RIA as a **bilingual guide** (youth ↔ employer language) is the differentiator versus a static job board. **Tension:** INNOVATION_ANALYSIS argues “portals don’t find youth — outreach finds youth”; that critique applies to *disconnected* youth, while IDEA.md targets engaged seekers and SMBs. The team should name which population is primary or explicitly split tracks.

### 2 — Activist (equity / access)

**Take:** Built-in **parental consent** and “experience from family/volunteering counts” lowers credentialism and respects minor safety. **Risk:** Digital-only onboarding excludes young people without stable devices or connectivity; pillar index (`B5`, `G3`) flags mobile-first and inclusion guardrails. GRTC integration (vision in IDEA) aligns with `D5` / open GTFS — good, but still unbuilt in the 48-hour slice.

### 3 — Frontliner (youth workforce / school partner)

**Take:** Schools and WIOA providers need **work permits, hours, hazard rules** (see pillar `D1` / compliance research). A marketplace that matches minors to “gigs” without embedded compliance checks creates **downstream liability** for employers and reputational risk for any partner org. MVP must either restrict to age bands with clear legal packaging or partner with an org that already runs compliant youth employment.

### 4 — Employer (Richmond SMB)

**Take:** Posting a **brief + timeline + deliverable** is easier than writing a job description; RIA helping shape youth-friendly scopes is practical. **Cold start:** Without a curated pipeline of businesses, the marketplace is empty. Chamber, Main Street, or a workforce intermediary must feed supply; tech alone does not create trust to hire minors.

### 5 — Parent / guardian

**Take:** Consent-in-the-flow is the right ethical move. Parents will ask: **Who is the employer?** **What happens if payment or safety issues arise?** The prototype’s strength is onboarding clarity; the gap is **dispute, supervision, and insurance** — not solvable in a weekend but mandatory for real operations.

### 6 — Architect (DIT / stack reality)

**Take:** Hosting a matching UI is compatible with “commodity cloud + no City API” patterns in `RICHMOND_TECH_STACK_2026.md`. **RIA triggers Administrative Regulation 2.13:** generative assistance for minors and employers implies **DIT governance**, transparency (“AI in use”), and minimized data collection. Help1RVA / Unite Us **are not public APIs** — Unboxed does not need them if it stays **direct SMB ↔ youth**, but it also does not get a free closed-loop referral network without partnerships.

### 7 — Mayor’s office (implementation / ownership)

**Take:** Pillar win signals **narrative fit**: thriving families, economic development, and youth opportunity in one story. **Ownership is fuzzy:** City is not the natural operator of a private marketplace; success looks like **RPS + workforce + OED-style champion** and SMB networks adopting it. No formal hackathon-to-production path exists per tech stack doc — the product needs a **named steward** and pilot MOU, not just a repo.

---

## Tensions (three)

| # | Tension | Resolution (condensed) |
|---|---------|-------------------------|
| **T1** | **IDEA vs research pack:** Marketplace + RIA vs opportunity-youth SMS/referral stack in RESEARCH_RESULT / INNOVATION_ANALYSIS | Treat **IDEA.md as shipped intent.** Fold referral/SMS insights as **Phase 2 “reach” layer** if the primary KPI is disconnected youth; otherwise scope is **in-school / connected seekers + SMBs** — a different theory of change. |
| **T2** | **Innovation vs feasibility:** INNOVATION_ANALYSIS scores feasibility **2/5** and data readiness **2/5** for the *full* closed-loop regional system | Fair for the **referral-network** variant. For the **marketplace** variant, feasibility rises on **tech** (3–4) but **organizational** feasibility stays hard (liquidity, compliance, AI review). |
| **T3** | **AI helper vs minor privacy** | RIA is compelling but **high scrutiny**: align prompts and data retention with AR 2.13 and youth-privacy playbooks (`G1`, `G5` in pillar corpus). Ship RIA as **narrow, advisory, human-in-the-loop** before broad automation. |

---

## Fatal flaw test

| Test | Result | Notes |
|------|--------|--------|
| Structural wall (311, EnerGov, B2GNow, etc.) | **Pass for core MVP** | Does not depend on blocked City APIs if matching stays SMB-posted projects + open data (e.g., GTFS later). |
| **Liquidity + compliance coupling** | **Fail without mitigation** | Two-sided market + **minor employment law** + **trust** = if either side under-delivers, the product reads as “beautiful empty storefront” or creates legal exposure. This is the **primary kill zone** for naive scaling. |
| AI governance | **Conditional** | RIA requires **DIT-aligned** design; not a hard stop for hackathon, **hard stop for unsupervised city-wide launch**. |
| Doc alignment | **Process risk** | Research artifacts describe a **different archetype** than IDEA; future teams must **merge or fork** narratives to avoid funder/partner confusion. |

**Stated fatal flaw (single):** **Unboxed scales only if employer supply, youth protections, and governance move in lockstep** — technology alone does not create a lawful, liquid youth project market.

---

## Verdict

**PILOT WITH GUARDRAILS (strong hackathon outcome; conditional production path)**

Ship or extend as a **pilot** with: (1) a **named workforce or nonprofit partner** owning compliance and employer vetting, (2) **RIA** scoped and reviewed under **AR 2.13**, (3) explicit **population definition** (connected vs disconnected youth), and (4) **SMB recruitment** commitment before marketing to youth.

---

## Consensus rubric (1–5) and awards

Assumes hackathon judging categories: Impact, Feasibility, User Value, Execution, Innovation, Equity & Inclusion.

| Category | Score | One-line rationale |
|----------|:-----:|---------------------|
| Impact | **5** | Addresses real gap between youth seeking meaningful paid work and SMBs needing discrete projects; aligns to pillar. |
| Feasibility | **3** | Prototype viable; scale blocked by marketplace liquidity, labor compliance, AI governance, and partnership MOUs — not by a single vendor API wall. |
| User Value | **5** | Clear dual-sided value: profiles, consent, guided flows, employer project builder. |
| Execution | **5** | Exceptional for team composition (including youth builder); journey, brand, and working flows in 48 hours. |
| Innovation | **4** | Project-based marketplace + RIA “translation layer” reframes youth employment beyond legacy internship portals. |
| Equity | **5** | Co-designed with youth; parental consent; validates non-traditional experience; transit vision supports access (when built). |

### Award formulas (RVA Hacks weights)

- **Mayor’s Choice:** Impact×5 + Feasibility×5 + User Value×4 + Execution×3 + Equity×3 + Innovation×1  
  → 25 + 15 + 20 + 15 + 15 + **4** = **94**

- **Pillar (Thriving Families):** Impact×5 + User Value×4 + Feasibility×3 + Innovation×3 + Execution×3 + Equity×3  
  → 25 + 20 + 9 + 12 + 15 + 15 = **96**

- **Moonshot:** Innovation×5 + Impact×4 + User Value×3 + Equity×3 + Feasibility×2 + Execution×2  
  → 20 + 20 + 15 + 15 + 6 + 10 = **86**

---

## Top recommendations (three)

1. **Sign a pilot anchor:** One youth-serving org + one SMB network agrees to **post N real paid projects** with pre-checked compliance templates.  
2. **Scope RIA for review:** Document data flows, minor-facing copy, and human escalation; route through **DIT AI policy** before public beta at scale.  
3. **Reconcile research vs product:** Either update INNOVATION_ANALYSIS to match the marketplace story or split into **“Unboxed Marketplace”** vs **“Unboxed Reach”** (SMS/referral) so implementers are not pulling two roadmaps.

---

*Condensed roundtable: seven personas, three tensions, fatal flaw, verdict, scores + awards. No separate web research pass; grounded in listed repo artifacts and `RICHMOND_TECH_STACK_2026.md`.*
