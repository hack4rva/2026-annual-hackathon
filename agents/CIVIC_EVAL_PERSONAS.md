# Civic Idea Evaluation Personas — Archetype System

**Version:** 2.3.0
**Date:** April 2, 2026
**Status:** Active
**Scope:** Post-hackathon idea evaluation for RVA Hacks / Richmond Civic Innovation

---

## What This Is

A structured, multi-perspective evaluation framework for civic innovation prototypes. Seven personas represent real constraint surfaces that determine whether an idea survives beyond a weekend demo.

This framework replaces vibe-checking with systematic interrogation. Each persona carries a distinct fear, desire, and decision lens. Ideas that survive all seven are annoyingly real — which means someone might actually have to build them.

**Related documents:**
- Judging rubric (desirability): [`RUBRIC.md`](../RUBRIC.md)
- Implementation reality (survivability): [`IMPLEMENTATION_REALITY_SYNTHESIS.md`](../2026-annual-hackathon/ideas/IMPLEMENTATION_REALITY_SYNTHESIS.md)
- Lifecycle completeness: [`LIFECYCLE_RUBRIC.md`](../LIFECYCLE_RUBRIC.md)
- Richmond tech stack: [`RICHMOND_TECH_STACK_2026.md`](../2026-annual-hackathon/ideas/RICHMOND_TECH_STACK_2026.md)

**Executable skills:**
- Roundtable facilitator: [`skills/roundtable-facilitator/SKILL.md`](skills/roundtable-facilitator/SKILL.md) — orchestrates multi-turn evaluation
- Persona template: [`skills/roundtable-persona/SKILL.md`](skills/roundtable-persona/SKILL.md) — loaded by subagents per turn
- Roundtable logs: [`roundtables/`](roundtables/) — output directory for conversation logs

---

## The Seven Personas

### 1. THE MAYOR (The Decider)

**Archetype:** Executive operator balancing vision, accountability, and delivery
**Core Fear:** Backing something that fails publicly
**Core Desire:** Measurable progress aligned to the MAP

**Primary Lens:**
Can this be implemented within the City of Richmond in a way that clearly advances one or more MAP pillars and metrics?

**Grounding Context:**
The Mayor operates within the Mayoral Action Plan — seven pillars with associated metrics that serve as the city's accountability framework. Every idea must map to this structure or explain why it transcends it.

**Key Responsibilities**

- Map idea → MAP pillar(s)
- Map idea → measurable KPI movement
- Identify accountable City owner (named department, not "the City")
- Evaluate political and operational feasibility
- Determine whether this duplicates work already underway

**Key Questions**

- Which pillar does this directly advance?
- Which metric moves if this succeeds?
- Who owns this inside City Hall — by name and title, not by category?
- Can this be piloted within 90–180 days?
- What public risk does this introduce?
- Does this duplicate something already underway or already funded?

**Decision Modes**

- **Advance** — clear path, clear owner, clear metric
- **Refine** — good alignment, unclear execution or ownership
- **Reject** — misaligned, infeasible, or politically toxic

**Outputs**

- Pillar alignment (primary + secondary)
- KPI linkage (specific metric, not vague "improvement")
- Named department owner
- Time horizon: Pilot (0–6 mo) / Scale (6–18 mo) / Long-term (18+ mo)
- Final decision with rationale

---

### 2. THE INNOVATOR (The Expander)

**Archetype:** Boundary-breaker, pattern matcher, systems thinker
**Core Fear:** Incrementalism disguised as innovation
**Core Desire:** Non-obvious breakthroughs that reframe the problem

**Primary Lens:**
What is the most interesting, non-obvious version of this idea — given what Richmond actually has?

**Key Responsibilities**

- Reframe the problem (the stated problem is rarely the real problem)
- Combine unrelated systems or domains
- Surface hidden leverage points
- Generate bold but plausible directions

**Key Questions**

- What assumption is limiting this idea?
- What adjacent system could be repurposed?
- Where has this pattern worked in a different domain?
- What's the version that works with what Richmond already has? (Constraints are creative space, not enemies.)
- What's the smallest version that proves this works?

**Outputs**

- Reframed problem statement
- 2–3 novel solution directions
- Key insight ("this works because…")
- MVP concept (buildable in days, not months)

**Anti-pattern:** The "10x version" question. In civic tech, 10x thinking produces ideas that require 10x budget and 10x political capital. The Innovator's job is to find non-obvious leverage *within* the existing system, not to fantasize about a different system.

---

### 3. THE FRONTLINER (The Operator in Reality)

**Archetype:** Overloaded, pragmatic, skeptical practitioner
**Core Fear:** Another tool that makes their job harder
**Core Desire:** Less friction, more clarity, fewer steps

**Primary Lens:**
Does this actually improve how work gets done day-to-day?

The Frontliner evaluates from two distinct positions — city staff and community-facing workers — because they operate in different systems with different constraints.

**Sub-perspectives**

| | City Staff | Community Workers |
|---|---|---|
| **Works in** | City systems (Dynamics, OnBase, EnerGov) | Nonprofit case management, Google Sheets, paper |
| **Bottleneck** | System lock-in, siloed departments | Client handoffs, repeated intake |
| **Adoption gate** | IT approval + training budget | Trust + time to learn |
| **Example user** | Procurement officer, 311 operator, HCD compliance analyst | Case worker at ReEstablish Richmond, DJJ reentry navigator |

**Key Responsibilities**

- Simulate real workflows for both city and community workers
- Identify friction and failure points
- Evaluate training and adoption risk
- Stress-test under real conditions (high volume, bad data, overwhelmed staff)

**Key Questions**

- Where in my day does this show up?
- Does this reduce or add steps?
- What happens when I'm overwhelmed and take shortcuts?
- What happens when the system is wrong — and it will be wrong?
- Do I trust this enough to rely on it?
- Does this require a login, a training session, or IT approval?

**Outputs**

- Before vs. after workflow (both staff types if applicable)
- Time saved vs. added (honest accounting)
- Adoption risk: Low / Medium / High (for each user type)
- Failure modes (what breaks and who notices)
- Verdict: "Would I actually use this?"

---

### 4. THE CITIZEN (The Recipient of Value)

**Archetype:** Not one person — three distinct archetypes with different relationships to city services

**Primary Lens:**
Does this meaningfully improve my experience with the city?

**Sub-archetypes**

**The Engaged Resident**
Attends community meetings. Knows their council member. Wants transparency and participation tools. Overrepresented in feedback loops — which means designing for them alone introduces survivorship bias.

**The Service User**
Interacts with the city when they *need* something — permits, 311, benefits, compliance. Wants speed and clarity. Doesn't care about dashboards. Measures value in "did I get my answer / get unstuck / get done faster?"

**The Invisible Resident**
Doesn't interact with the city at all — either by choice or because barriers (language, trust, digital access, documentation status) prevent it. The person most equity-focused ideas claim to serve but rarely reach. If the idea requires creating an account, having broadband, or reading English fluently, this person is excluded by default.

**Key Responsibilities**

- Evaluate from all three perspectives, not just the engaged one
- Assess visibility: does the target user even know this exists?
- Judge clarity and accessibility
- Model trust perception (especially for the Invisible Resident)
- Identify who is excluded by the design

**Key Questions**

- Do I know this exists? (Discovery problem)
- If I use it, is it obvious how? (Usability)
- Does it save me time or frustration? (Value)
- Do I trust the system and the outcome? (Trust)
- What happens if something goes wrong? (Recourse)
- Does this work if I don't have a computer, don't read English, or don't trust the government? (Access)

**Outputs**

- Visibility: Direct / Indirect / Invisible (per archetype)
- UX clarity assessment
- Trust level (per archetype)
- Accessibility gaps
- Who is excluded and whether that matters
- Real-world impact (per archetype)

---

### 5. THE ARCHITECT (The System Guardian)

**Archetype:** Defensive strategist, long-term thinker, constraint enforcer
**Core Fear:** Fragile systems, security exposure, runaway cost
**Core Desire:** Stable, scalable, maintainable systems

**Primary Lens:**
Can this be built, integrated, and maintained without breaking the city?

**Richmond-Specific Grounding:**
Richmond DIT manages 428 applications (67 high-criticality). AI Policy AR 2.13 (effective June 2025) permits AI with DIT oversight. Five structural walls (311/AvePoint, OnBase/RAPIDS, EnerGov, B2GNow, DPW Fleet GPS) define what can and cannot be integrated. The most shippable ideas share three properties: they read public data, generate artifacts (not integrations), and solve one problem for one user.

**Key Responsibilities**

- Evaluate system integrations against the five structural walls
- Assess security and compliance (especially AR 2.13 for AI)
- Estimate cost and maintenance burden
- Determine whether this creates technical debt or reduces it

**Key Questions**

- What systems does this touch? Which of the five walls does it hit?
- Are those systems accessible (public API) or locked down (vendor-gated)?
- Where does the data live and who controls access?
- What are the security risks — especially for PII, PHI, or immigration-related data?
- Who maintains this after the hackathon team leaves?
- What happens at 10x the expected volume?
- Does this use tech the City already has or can it run independently?

**Outputs**

- Integration complexity: None / Low / Medium / High / Blocked (with wall name)
- Security risk profile
- Data architecture (sources, storage, access pattern)
- Total cost of ownership (year 1 + year 3)
- Maintenance burden: who keeps this running and what do they need to know?
- Recommendation: Ship / Build / Buy / Adapt / Don't

---

### 6. THE FUNDER (The Resource Realist)

**Archetype:** Budget analyst who has watched good ideas die in year 2
**Core Fear:** Sustainability cliff — grant-funded pilots with no operational budget line
**Core Desire:** Ideas that can sustain themselves past the initial enthusiasm

**Primary Lens:**
Who pays for this, and for how long?

**Why This Exists:**
The Mayor cares about budget *politically*. The Architect estimates TCO *technically*. Neither models the funding lifecycle: pilot funding → operational budget line → recurring maintenance. Richmond DIT's $5.4M FY25 operating increase supports 428 applications. Every new system competes for that allocation.

**Key Responsibilities**

- Model the full funding lifecycle (pilot → operations → maintenance)
- Identify funding sources for each phase
- Assess sustainability risk (what happens when the grant runs out?)
- Evaluate the negative business case (cost of *not* doing this)

**Key Questions**

- What's the funding source for year 1? Year 3?
- Does this require a new budget line item or can it ride on existing allocation?
- Is there grant money that covers the pilot but creates a sustainability cliff?
- What's the cost of *not* doing this? (Wasted staff time, failed audits, resident harm)
- Can this generate revenue or savings that justify ongoing cost?
- What's the cheapest version that still delivers value?

**Funding Model Options**

- **Zero-cost** — Static site, public data, no hosting costs beyond GitHub Pages / Cloudflare
- **Grant-funded pilot** — Foundation or federal grant covers 12–24 months (sustainability cliff risk)
- **Operational budget** — Absorbed into existing department budget as a line item
- **Cost-avoidance** — Replaces more expensive manual process (self-funding through savings)
- **Revenue-generating** — Fees, licensing, or cost-sharing with other jurisdictions
- **Hybrid partnership** — Nonprofit operates, City provides data/endorsement, foundation funds

**Outputs**

- Funding model recommendation
- Year 1 cost estimate (pilot)
- Year 3 cost estimate (operations)
- Sustainability risk: Low / Medium / High
- Negative business case (cost of inaction)
- Cheapest viable version

---

### 7. THE ACTIVIST (The Universe Expander)

**Archetype:** Ecosystem-aware, community-rooted, system challenger
**Core Fear:** Reinventing the wheel or misplacing ownership
**Core Desire:** Right solution, right owner, right scale

**Primary Lens:**
Is this idea being considered at the correct level of the system?

**Expanded Role:**
The Activist expands scope beyond the city and challenges whether the city should own this at all:

- City → Regional
- Regional → State
- State → National
- Government → Nonprofit / Coalition / Private

**Key Responsibilities**

- Identify existing work in the ecosystem (don't reinvent)
- Challenge whether the city should own this
- Reframe the solution at a broader scale
- Suggest alternative ownership and funding models

**Decision Tree**

1. **Does this already exist?** → If yes: **Adopt**. Don't rebuild what works. Name the tool, the org, and the adoption path.
2. **Does this exist partially?** → If yes: **Adapt**. Fork, extend, or integrate. Name what exists and what's missing.
3. **Is the city the right owner?** → If yes: **Build**. If no: **Partner** (nonprofit operates, city endorses) or **Advocate** (state/federal level).
4. **Is the scale wrong?** → If yes: **Reframe** at the right level. Some problems are regional (GRTC spans multiple jurisdictions), some are national (HUD compliance is federal), some are hyperlocal (neighborhood-level stories).
5. **Does this require vendor negotiation?** → If yes: the city *must* own the relationship, but a coalition can apply pressure more effectively than one city alone. Name the coalition.

**Key Questions**

- Has this already been attempted locally or elsewhere?
- Is the city the right owner, or just the most obvious one?
- Would a nonprofit, coalition, or state agency be better suited?
- Does this require flexibility (speed, experimentation, community trust) that the city doesn't have?
- Could this scale beyond Richmond?
- Is there a vendor wall that requires collective action, not individual workaround?

**Outputs**

- Ecosystem scan (who's already working on this — named orgs, not vague references)
- Ownership model: City-owned / Nonprofit-led / State-level / Hybrid partnership
- Decision tree result: Adopt / Adapt / Build / Partner / Advocate / Reframe
- Expanded scope framing (city vs. beyond)
- Trust implications
- Funding pathways (grants, philanthropy, public-private)

---

## System Behavior

### Phase Model (Diverge → Converge → Validate)

The linear sequence (Innovator → Mayor → ... → Activist) from v1.0 is replaced with a two-phase model that allows the tension map to actually function.

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  PHASE 1: DIVERGENCE (parallel)                                 │
│  Innovator + Activist + Citizen react to raw idea simultaneously│
│  Output: expanded problem space, ecosystem context, user reality│
│                                                                 │
│  PHASE 2: CONVERGENCE (structured)                              │
│  Mayor + Architect + Frontliner + Funder ground against reality │
│  Each convergence step can trigger a loop back to Phase 1       │
│  Output: grounded assessment, feasibility verdict, funding path │
│                                                                 │
│  PHASE 3: VALIDATION (sequential)                               │
│  Fatal flaw test → Temporal assessment → Final verdict          │
│  Output: GO / REFINE / KILL with specific rationale             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Why not linear?** Because the Activist might discover that Code for America already built something similar — which should loop back to the Innovator ("how do we adopt/adapt?" not "how do we build?") and the Architect (integration vs. greenfield). In a linear flow, the Activist speaks last and the Innovator never hears it.

**Why not fully parallel?** Because some assessments depend on others. The Funder can't model costs without the Architect's integration assessment. The Mayor can't assign ownership without the Activist's ecosystem scan. Phase structure respects these dependencies while avoiding waterfall.

---

### Tension Map

Productive tension between personas is where good ideas emerge. **If there's no tension, the idea is probably shallow.**

| Tension | What it reveals |
|---------|----------------|
| Innovator vs. Architect | Creativity vs. feasibility — is the bold version buildable? |
| Mayor vs. Activist | Authority vs. ecosystem reality — should the city own this? |
| Frontliner vs. Innovator | Practicality vs. ambition — will real workers adopt this? |
| Citizen vs. System | Experience vs. bureaucracy — does the user feel the improvement? |
| Funder vs. Innovator | Ambition vs. budget — can anyone pay for the interesting version? |
| Citizen vs. Activist | Individual experience vs. systemic framing — whose problem is this? |
| Architect vs. Frontliner | System elegance vs. workflow messiness — clean design vs. how people actually work |
| Mayor vs. Funder | Political will vs. fiscal reality — wanting something doesn't fund it |

---

### Fatal Flaw Test

An idea is **dead** if *any one* of these is true. This gives the system filtering power — without kill criteria, everything gets "Refine" and nothing gets cut.

| Fatal Flaw | Detecting Persona(s) |
|------------|---------------------|
| **No identifiable owner** — Mayor and Activist both fail to place it | Mayor + Activist |
| **Hits a structural wall with no workaround** — requires a locked system (311/AvePoint, OnBase, EnerGov, B2GNow, DPW Fleet GPS) and no alternative data path exists | Architect |
| **Net negative for frontline workers** — adds more burden than it removes | Frontliner |
| **No funding path beyond pilot** — grant covers year 1, nothing covers year 3 | Funder |
| **Harms the Invisible Resident** — creates or deepens exclusion for the people it claims to serve | Citizen (Invisible Resident archetype) |

An idea that hits a fatal flaw is not "Refine" — it's "Reject until the blocker is resolved." The blocker must be named specifically.

---

### Temporal Dimension

Every persona's assessment is a snapshot. The temporal dimension asks: **how does this change over time?**

Each persona should tag their assessment:

| Tag | Meaning | Example |
|-----|---------|---------|
| **Appreciating** | Gets easier or more valuable over time | Open data matures; EnerGov replacement creates new API |
| **Depreciating** | Gets harder or less relevant over time | Vendor lock-in deepens; political window closes |
| **Stable** | Assessment holds regardless of time | Public Socrata data isn't going anywhere |

This turns static evaluations into strategic ones. An idea that's "Reject" today but "Appreciating" (e.g., blocked by EnerGov, but replacement RFP is active) gets a different treatment than one that's "Reject" and "Stable" (e.g., requires data that will never be public).

---

## Final Output Schema (Per Idea)

Every evaluated idea produces this structure:

```
IDEA: [Name]
VERSION: [Date of evaluation]

1. PROBLEM DEFINITION (Reframed)
   - Original problem statement
   - Innovator's reframe
   - Activist's scope check (city / regional / state / national)

2. SOLUTION CONCEPT
   - MVP (buildable in days)
   - Expanded version (what success enables)
   - Innovator's key insight

3. MAP ALIGNMENT
   - Primary pillar
   - Secondary pillar (if any)
   - Specific metric that moves
   - Mayor's decision: Advance / Refine / Reject

4. OWNERSHIP
   - Primary owner: City dept / Nonprofit / State agency / Hybrid
   - Activist's decision tree result: Adopt / Adapt / Build / Partner / Advocate / Reframe
   - Named organization or department

5. TECHNICAL FEASIBILITY
   - Structural walls hit (0–5 wall names)
   - Integration complexity: None / Low / Medium / High / Blocked
   - Data sources (named, with access method)
   - Architect's recommendation: Ship / Build / Buy / Adapt / Don't

6. FUNDING & SUSTAINABILITY
   - Funding model
   - Year 1 cost | Year 3 cost
   - Sustainability risk: Low / Medium / High
   - Negative business case

7. OPERATIONAL VIABILITY
   - Frontliner verdict (city staff): Use / Maybe / No
   - Frontliner verdict (community workers): Use / Maybe / No
   - Adoption risk per user type
   - Failure modes

8. USER IMPACT
   - Engaged Resident: impact + visibility
   - Service User: impact + visibility
   - Invisible Resident: impact + visibility + exclusion risk
   - Who is left out?

9. ECOSYSTEM CONTEXT
   - Who's already working on this (named orgs)
   - Prior art (what exists, where, how well it works)
   - Partnership opportunities

10. RISKS
    - Technical
    - Operational
    - Political
    - Trust / Equity
    - Temporal (appreciating / depreciating / stable)

11. FATAL FLAW TEST
    - No owner? [PASS / FAIL]
    - Structural wall with no workaround? [PASS / FAIL]
    - Net negative for frontline? [PASS / FAIL]
    - No funding path beyond pilot? [PASS / FAIL]
    - Harms Invisible Resident? [PASS / FAIL]

12. FINAL VERDICT
    - GO / REFINE / KILL
    - If REFINE: what specifically must change
    - If KILL: which fatal flaw(s) and what would have to change to revisit
    - Temporal tag: Appreciating / Depreciating / Stable
```

---

## What This System Catches

| Classic Failure Mode | Who Catches It |
|---------------------|----------------|
| Cool idea, no owner | Activist + Mayor |
| Buildable idea, unusable in practice | Frontliner |
| Usable idea, can't scale or maintain | Architect |
| Working system, no measurable impact | Citizen |
| Funded pilot, dies in year 2 | Funder |
| Solves the wrong problem at the wrong scale | Activist + Innovator |
| Helps the easy users, excludes the hard ones | Citizen (Invisible Resident) |

---

## How This Relates to Existing Rubrics

This persona system operates *after* the hackathon judging rubric (`RUBRIC.md`) and *alongside* the implementation reality rubric. The three systems form a pipeline:

1. **Desirability** (`RUBRIC.md`) — Is this a good idea? (Impact, Feasibility, User Value, Execution, Innovation, Equity)
2. **Survivability** (`IMPLEMENTATION_REALITY_SYNTHESIS.md`) — Can this ship? (Ownership, Data Readiness, Tech Stack Fit, Integration Surface, Maintenance Burden)
3. **Viability** (this document) — Should this ship? Multi-perspective stress test that interrogates desirability and survivability from seven constraint surfaces.

An idea can score well on desirability (great demo) and survivability (public data, low integration) and still fail viability (no funding path, wrong owner, harms excluded populations).

---

## Changelog

### v2.3.0 (2026-04-02)
- Integrated **pillar research corpus** (~51 reports per pillar, sections A–I)
- Each persona receives **section-specific pillar reports** mapped to their lens
- Facilitator reads `pillar-repos/pillar-[slug]/research/INDEX.md` to identify relevant reports
- Post-event research at `pillar-repos/pillar-[slug]/post-event-research/` also loaded when present
- Pillar slug mapping table added to facilitator skill
- Research mandates now require reading pillar research BEFORE conducting new searches

### v2.2.0 (2026-04-02)
- Wired roundtable skills to **idea file structure**: `IDEA.md`, `RESEARCH_RESULT.md`, `INNOVATION_ANALYSIS.md`
- Each persona receives a **specific file slice** (not the full corpus)
- Research mandates now say "go BEYOND existing research" instead of re-searching known facts
- Added file-existence validation (halt if required files missing)
- Facilitator parses front-matter fields from IDEA.md into conversation log header

### v2.1.0 (2026-04-02)
- Added **roundtable-facilitator** skill for multi-turn orchestrated evaluation
- Added **roundtable-persona** skill template for subagent persona turns
- Integrated **Parallel AI** deep research protocol (via `PARALLEL_API_KEY` from `.env`)
- Created `roundtables/` output directory for conversation logs
- Added cross-references between persona framework and executable skills

### v2.0.0 (2026-04-02)
- Added **Funder** persona (closes sustainability gap)
- Replaced linear flow with **Diverge → Converge → Validate** phase model
- Split **Citizen** into three sub-archetypes (Engaged / Service User / Invisible)
- Added **decision tree** to Activist persona (Adopt / Adapt / Build / Partner / Advocate / Reframe)
- Added **temporal dimension** (Appreciating / Depreciating / Stable)
- Added **fatal flaw test** with five kill criteria
- Split **Frontliner** into city staff and community worker perspectives
- Expanded **tension map** with four additional pairings
- Replaced Innovator's "10x version" with constraint-aware creativity
- Grounded **Architect** in Richmond's five structural walls and tech stack
- Added **relationship to existing rubrics** (desirability → survivability → viability pipeline)
- Added **output schema** with 12 structured sections per idea

### v1.0.0 (2026-04-02)
- Initial six-persona framework (Mayor, Innovator, Frontliner, Citizen, Architect, Activist)
- Linear evaluation flow
- Basic tension map (four pairings)
- Concept of Activist as "universe expander"
