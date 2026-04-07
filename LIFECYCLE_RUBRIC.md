# Lifecycle Completeness Rubric

This rubric is used by the `ralph-loop` skill to assess whether a project has been fully reviewed through the innovation lifecycle. It is applied to the contents of `ideas/[pillar]/[project]/`.

**Related rubrics:**
- **Desirability** — `RUBRIC.md` (6-category judging rubric, weighted by award)
- **Implementation Reality** — `ideas/IMPLEMENTATION_REALITY_RUBRIC.md` (5-dimension survivability filter)

**Status values:**
- ✅ Complete — output file exists and contains the required content
- 🔄 In Progress — work has started but is not finished
- ⚠️ Blocked — cannot proceed without external input (name the blocker)
- ❌ Missing — not started, no output file

---

## How to Apply This Rubric

For each item, check whether the corresponding output file exists and contains what's described. Do not mark Complete based on intent or partial work. If content exists but is thin or incomplete, mark In Progress and note what's missing.

---

## Step 1 — Problem Grounding
**Output file:** `gap_analysis.md` (header section)
**Required content:**
- [ ] Problem statement restated verbatim (not paraphrased)
- [ ] Primary user identified with specificity (not "residents" — name the actual person and situation)
- [ ] Pain stated (what fails today without this solution)
- [ ] Desired outcome stated (what changes if the problem is fully solved)

---

## Step 2 — JTBD Analysis
**Output file:** `jtbd_analysis.md`
**Required content:**
- [ ] Exactly 3 job statements in "When / I / want to / so I can" format
- [ ] Each job names a specific, concrete user
- [ ] Each job names a triggering situation
- [ ] Each job states a real-world outcome

---

## Step 3 — Question Generation
**Output file:** `jtbd_analysis.md` (Open Questions section)
**Required content:**
- [ ] At least 10 open questions
- [ ] At least 2 data questions
- [ ] At least 2 user questions
- [ ] At least 1 equity question
- [ ] At least 1 prior art question

---

## Step 4 — Prior Art Research
**Output file:** `prior_art_research.md`
**Required content:**
- [ ] Regional implementations section (3+ comparable city tools or implementations cited)
- [ ] Real data sources section (named datasets with access method and cadence)
- [ ] Failure modes and equity gaps section
- [ ] Synthesis section (what Richmond could adopt, what's been tried, biggest gap)

---

## Step 5 — Pain Point Research
**Output file:** `pain_points.md`
**Required content:**
- [ ] Pain points for each of the 3 JTBD statements
- [ ] At least one pain point grounded in documented evidence (study, 311 data, complaint record, etc.)
- [ ] At least one equity or access dimension addressed

---

## Step 6 — Data Source Mapping
**Output file:** `gap_analysis.md` (Data Source Map section)
**Required content:**
- [ ] Every data claim in the demo is mapped to a real source OR flagged as synthetic/demo data
- [ ] Each real source has: name, owner, access method, update cadence
- [ ] Synthetic/demo data violations are explicitly flagged and marked as gaps
- [ ] Each gap that requires SME access is flagged for outreach

---

## Step 7 — SME Outreach
**Output file:** `outreach/[pillar]/[contact-slug].md`
**Required content:**
- [ ] At least one outreach email drafted for each data gap requiring human access
- [ ] Email includes specific, actionable questions (not vague asks)
- [ ] Each email names a specific contact or flags `[CONTACT NEEDED]`

Note: this step is considered Complete when the draft is written, not when a response is received.

---

## Step 8 — Gap Analysis
**Output file:** `gap_analysis.md` (Gap Analysis section)
**Required content:**
- [ ] Each of the 3 JTBDs assessed: does the demo address it? (Full / Partial / No)
- [ ] What specifically is missing for each partially or unaddressed job
- [ ] Whether each gap is fixable or fundamental
- [ ] Overall verdict: does the demo solve the problem as stated?

---

## Step 9 — Opportunity Mapping
**Output file:** `gap_analysis.md` (Opportunities section)
**Required content:**
- [ ] 2–3 opportunity patterns named
- [ ] Each opportunity grounded in prior art and pain point findings
- [ ] Dependencies named (data, system integrations, partnerships)

---

## Step 10 — Solution Ideation
**Output file:** `solution_ideas.md`
**Required content:**
- [ ] Exactly 10 solution ideas
- [ ] Each idea cites at least one prior art finding
- [ ] Each idea names the real data source it depends on
- [ ] Each idea addresses at least one JTBD
- [ ] At least 2 ideas address an equity dimension
- [ ] At least 1 idea is "adopt or adapt what already exists"

---

## Step 11 — Lifecycle Review (ralph-loop output)
**Output file:** `lifecycle_review.md`
**Required content:**
- [ ] Rubric checklist table with status for all 10 steps
- [ ] "What Was Fundamentally Missed" section (1–3 sentences, plain language)
- [ ] Blockers listed with specific asks
- [ ] Recommended next steps in priority order

---

## Pillar-Level Rubric

After all projects in a pillar are reviewed, the pillar itself gets a lifecycle review:
- [ ] All demos reviewed individually
- [ ] Problem statement coverage assessed (are both problem statements covered by at least one demo?)
- [ ] Cross-demo comparison: which demo comes closest to solving the stated problem?
- [ ] Shared gaps identified across all demos in the pillar
- [ ] Pillar-level outreach consolidated (avoid sending duplicate emails to the same SME)
