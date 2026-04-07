# Slide Deck Generation Guide

## Philosophy

These decks tell a story. They are not data dumps. Every slide should contain
ONE thought, expressed in complete sentences that a presenter can read aloud.

**Rules:**
1. Maximum 3-4 lines of text per slide. If you need more, add another slide.
2. Every line is a complete sentence. No orphan bullets. No fragments.
3. Font size is large and readable — the CSS enforces this. Do not override it smaller.
4. Persona quotes are used sparingly: ONE killer quote per idea, not four.
5. Score tables appear ONCE in the pillar overview, not on every idea slide.
6. Transitions between ideas connect them: "While X solves visibility, Y asks a harder question..."
7. The audience is non-technical city stakeholders and organizers.

## Narrative Arc

### Act 1: Setting the Stage (3 slides)
- **Slide 1 — Title**: Pillar name, tagline, "RVA Hacks 2026 — Post-Event Evaluation"
- **Slide 2 — The Problem**: 2-3 sentences about why this pillar matters to Richmond residents. Real, human language. Not a spec.
- **Slide 3 — The Two Challenges**: The two problem statements, each explained in one sentence.

### Act 2: How We Evaluated (4 slides)
- **Slide 4 — The Roundtable Model**: "We didn't just score these ideas. We put each one through a simulated roundtable with seven distinct perspectives — from the Mayor worrying about political risk to the Citizen asking who gets left out."
- **Slide 5 — The Seven Voices**: One sentence per persona. Not a bulleted list — a flowing paragraph or a clean grid of name + one-liner.
- **Slide 6 — The Process**: "Each idea went through four phases: independent assessment, convergence debate, direct challenges between personas, and a final pass/fail validation." Explain this in plain English.
- **Slide 7 — What Kills an Idea**: "We applied five fatal flaw tests. If the data doesn't exist, if a vendor wall blocks the MVP, if no one would own it, if it could harm residents, or if it would embarrass the city — the idea doesn't ship." 

### Act 3: What We Found (3-4 slides)
- **Slide 8 — At a Glance**: A clean scorecard table. This is the ONE place where you show all scores. Ranked by Mayor's Choice. Columns: Idea, Verdict (colored badge), MC, PA, MS.
- **Slide 9 — The Headlines**: "Of N ideas evaluated, X are ready to ship, Y need refinement, and Z should be set aside." Then the top 2-3 themes that emerged.
- **Slide 10 (optional)** — If there's a dominant structural wall or pattern (like "5 of 9 ideas hit the DPW Fleet GPS wall"), give it its own slide.

### Act 4: Idea Deep Dives (2 slides per idea, sorted by MC score descending)

**Slide A — The Story**: 
- Idea name large, verdict badge
- 2-3 complete sentences explaining what this idea does and why it matters.
- ONE persona quote — the most interesting, provocative, or insightful thing said during the roundtable. Choose the quote that would make someone in the audience sit up.
- Implementation reality tier and rank, stated naturally: "Ranked #2 of 73 ideas for implementation readiness."

**Slide B — The Verdict**:
- The verdict in a sentence: "The panel recommends shipping this with two conditions: [condition 1] and [condition 2]."
- OR: "The panel recommends killing this idea because [fatal flaw]. Despite strong scores, [specific blocker] makes it unviable without [what would need to change]."
- Fatal flaw results stated as prose, not a table: "It passed all five tests, though ownership remains conditional on [X] stepping forward."
- One forward-looking sentence: "If [condition], this could become [aspiration]."

For ideas that were killed, the verdict slide should be honest and specific about WHY.

### Act 5: What It Means (2-3 slides)
- **What Should Ship**: The top 3-5 ideas, each with a one-sentence pitch.
- **What Shouldn't (and Why)**: The kill list, each with the specific fatal flaw in one sentence.
- **What This Pillar Tells Us**: 3-4 sentences of cross-cutting insight. What did the roundtable reveal about this problem space? What surprised us?

## CSS Template

Use this exact CSS. Do not modify font sizes smaller.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>[PILLAR NAME] — Roundtable Evaluation</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@4.6.1/dist/reveal.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@4.6.1/dist/theme/white.css">
<style>
  :root {
    --header: #1a365d;
    --ship: #22543d;
    --ship-bg: #f0fff4;
    --conditions: #744210;
    --conditions-bg: #fffff0;
    --kill: #9b2c2c;
    --kill-bg: #fff5f5;
    --hold: #553c9a;
    --hold-bg: #faf5ff;
    --accent: #2b6cb0;
    --muted: #718096;
  }

  .reveal {
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
  }

  .reveal h1 {
    color: var(--header);
    font-size: 2.4em;
    font-weight: 800;
    line-height: 1.1;
    text-transform: none;
    letter-spacing: -0.02em;
  }

  .reveal h2 {
    color: var(--header);
    font-size: 1.8em;
    font-weight: 700;
    text-transform: none;
    letter-spacing: -0.01em;
    margin-bottom: 0.4em;
  }

  .reveal h3 {
    color: var(--header);
    font-size: 1.3em;
    font-weight: 600;
    text-transform: none;
  }

  /* Body text — MUST stay large and readable */
  .reveal p {
    font-size: 0.85em;
    line-height: 1.6;
    color: #2d3748;
    max-width: 85%;
    margin: 0 auto 0.5em auto;
  }

  .reveal li {
    font-size: 0.8em;
    line-height: 1.5;
    margin-bottom: 0.4em;
    color: #2d3748;
  }

  /* Persona quote — big, impactful, one per slide max */
  .persona-quote {
    background: #f7fafc;
    border-left: 5px solid var(--accent);
    padding: 20px 28px;
    margin: 24px auto;
    max-width: 80%;
    border-radius: 0 8px 8px 0;
    font-size: 0.85em;
    line-height: 1.6;
    font-style: italic;
    color: #2d3748;
  }

  .persona-quote .name {
    display: block;
    font-style: normal;
    font-weight: 700;
    color: var(--header);
    font-size: 0.75em;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 4px;
  }

  /* Verdict badges */
  .badge {
    display: inline-block;
    padding: 6px 20px;
    border-radius: 999px;
    font-weight: 700;
    font-size: 0.55em;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    vertical-align: middle;
  }
  .badge-ship { background: var(--ship-bg); color: var(--ship); border: 2px solid var(--ship); }
  .badge-conditions { background: var(--conditions-bg); color: var(--conditions); border: 2px solid var(--conditions); }
  .badge-kill { background: var(--kill-bg); color: var(--kill); border: 2px solid var(--kill); }
  .badge-hold { background: var(--hold-bg); color: var(--hold); border: 2px solid var(--hold); }

  /* Scorecard table — used ONCE */
  .reveal table {
    border-collapse: collapse;
    width: 90%;
    margin: 0 auto;
    font-size: 0.6em;
  }
  .reveal th {
    background: var(--header);
    color: #fff;
    padding: 8px 12px;
    text-align: left;
    font-weight: 600;
  }
  .reveal td {
    padding: 6px 12px;
    border-bottom: 1px solid #e2e8f0;
  }
  .reveal tr:nth-child(even) td { background: #f7fafc; }

  /* Subtitle text */
  .subtitle {
    font-size: 0.7em;
    color: var(--muted);
    margin-top: -0.3em;
  }

  /* Tier badge */
  .tier {
    display: inline-block;
    padding: 3px 12px;
    border-radius: 4px;
    font-size: 0.55em;
    font-weight: 700;
  }
  .tier-s { background: #c6f6d5; color: #22543d; }
  .tier-a { background: #bee3f8; color: #2a4365; }
  .tier-b { background: #fefcbf; color: #975a16; }
  .tier-c { background: #fed7d7; color: #9b2c2c; }

  /* Footer */
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--header);
    color: rgba(255,255,255,0.7);
    font-size: 11px;
    padding: 5px 20px;
    text-align: center;
    z-index: 100;
  }

  .reveal .slides section {
    padding-bottom: 30px;
  }
</style>
</head>
<body>
<div class="reveal">
<div class="slides">

<!-- SLIDES GO HERE -->

</div><!-- .slides -->
</div><!-- .reveal -->

<div class="footer">RVA Hacks 2026 — Roundtable Evaluation</div>

<script src="https://cdn.jsdelivr.net/npm/reveal.js@4.6.1/dist/reveal.js"></script>
<script>
Reveal.initialize({
  hash: true,
  slideNumber: 'c/t',
  width: 1280,
  height: 720,
  margin: 0.08,
  transition: 'fade',
  transitionSpeed: 'default',
  center: true,
  controlsTutorial: false,
});
</script>
</body>
</html>
```
