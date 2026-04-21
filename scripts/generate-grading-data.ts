#!/usr/bin/env tsx
/**
 * Reads the canonical judging CSVs and emits rvahacks/src/data/grading.ts
 * as a Record<slug, IdeaGrading> keyed by idea slug.
 *
 * Source of truth: ../../data/*.csv (produced by scripts/extract_judging.py
 * from "Copy of Hack RVA Master Judging Tracker.xlsx").
 *
 *   team_scorecard.csv  — per-team, per-category human averages + AI scores + deltas
 *   ai_evaluations.csv  — AI rubric for every evaluated team (incl. verdict headline)
 *   ai_only_ideas.csv   — AI rubric for NEW/BLUESKY ideas with no hackathon team
 *
 * Invariants enforced:
 *   1. Every site-side slug must be covered by at least one CSV row.
 *   2. For teams with both human & AI grades, deltas = ai − human (1-5 scale each).
 *   3. The generator fails if any slug in the CSVs isn't represented.
 *
 * Usage: npx tsx 2026-annual-hackathon/scripts/generate-grading-data.ts
 */

import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, "..", "..");
const DATA_DIR = join(REPO_ROOT, "data");
const OUT_FILE = join(REPO_ROOT, "rvahacks", "src", "data", "grading.ts");
const IDEAS_TS = join(REPO_ROOT, "rvahacks", "src", "data", "ideas.ts");

// ---------------------------------------------------------------------------
// Minimal CSV parser — the extractor produces RFC 4180 output (quoted fields
// containing commas/newlines/quotes). Node has no stdlib CSV, and pulling in
// csv-parse for one generator isn't worth it.
// ---------------------------------------------------------------------------

function parseCsv(text: string): Record<string, string>[] {
  const rows: string[][] = [];
  let field = "";
  let row: string[] = [];
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field);
      rows.push(row);
      field = "";
      row = [];
    } else {
      field += c;
    }
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  if (rows.length === 0) return [];
  const header = rows[0];
  return rows.slice(1).filter(r => r.length > 1 || (r.length === 1 && r[0] !== "")).map(r => {
    const obj: Record<string, string> = {};
    header.forEach((h, idx) => { obj[h] = r[idx] ?? ""; });
    return obj;
  });
}

function readCsv(name: string): Record<string, string>[] {
  return parseCsv(readFileSync(join(DATA_DIR, name), "utf-8"));
}

// ---------------------------------------------------------------------------
// Types mirrored to rvahacks/src/data/grading.ts output
// ---------------------------------------------------------------------------

type Rubric = {
  impact: number;
  userValue: number;
  feasibility: number;
  innovation: number;
  execution: number;
  equity: number;
};

type IdeaGrading = {
  human?: Rubric;
  ai?: Rubric;
  deltas?: Rubric;
  nJudges?: number;
  verdictRationale?: string;
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function num(v: string): number | null {
  if (v === "" || v === undefined) return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

function buildRubric(
  impact: number | null,
  userValue: number | null,
  feasibility: number | null,
  innovation: number | null,
  execution: number | null,
  equity: number | null,
): Rubric | undefined {
  if ([impact, userValue, feasibility, innovation, execution, equity].some(v => v === null)) return undefined;
  return {
    impact: round2(impact!),
    userValue: round2(userValue!),
    feasibility: round2(feasibility!),
    innovation: round2(innovation!),
    execution: round2(execution!),
    equity: round2(equity!),
  };
}

function computeDeltas(ai: Rubric, human: Rubric): Rubric {
  return {
    impact: round2(ai.impact - human.impact),
    userValue: round2(ai.userValue - human.userValue),
    feasibility: round2(ai.feasibility - human.feasibility),
    innovation: round2(ai.innovation - human.innovation),
    execution: round2(ai.execution - human.execution),
    equity: round2(ai.equity - human.equity),
  };
}

function trimRationale(raw: string): string | undefined {
  const s = raw.trim();
  if (!s) return undefined;
  // Strip leading markdown heading / bold wrappers so the card shows clean text.
  const cleaned = s
    .replace(/^#+\s*/, "")
    .replace(/^\*+\s*/, "")
    .replace(/\*+\s*$/, "")
    .trim();
  return cleaned || undefined;
}

// ---------------------------------------------------------------------------
// Load CSVs
// ---------------------------------------------------------------------------

const scorecard = readCsv("team_scorecard.csv");
const aiEvals = readCsv("ai_evaluations.csv");
const aiOnly = readCsv("ai_only_ideas.csv");

// ---------------------------------------------------------------------------
// Extract site slugs from ideas.ts (the only source of truth for what the
// site publishes). We parse lightly — slug lines look like: `  slug: "foo",`
// and we exclude bundle-*/wall-* which share the same key but live in other
// exports.
// ---------------------------------------------------------------------------

const ideasSrc = readFileSync(IDEAS_TS, "utf-8");
const siteSlugs = new Set<string>();
{
  const ideasBlockMatch = ideasSrc.match(/export const ideas:\s*Idea\[\]\s*=\s*\[([\s\S]*?)\n\];/);
  if (!ideasBlockMatch) throw new Error("Could not locate `export const ideas` block in ideas.ts");
  const block = ideasBlockMatch[1];
  const re = /^\s{2}\{\s*\n\s*slug:\s*"([a-z0-9-]+)"/gm;
  let m: RegExpExecArray | null;
  while ((m = re.exec(block))) siteSlugs.add(m[1]);
}
console.log(`site ideas: ${siteSlugs.size}`);

// ---------------------------------------------------------------------------
// Build per-slug grading
// ---------------------------------------------------------------------------

const gradingBySlug = new Map<string, IdeaGrading>();

// Demo teams: human + (optional) AI + deltas from team_scorecard.csv.
for (const row of scorecard) {
  const slug = row.ai_slug;
  if (!slug) continue; // 3 teams (104/401/603) have no AI slug; we pick them up via team_idea_map below.
  if (!siteSlugs.has(slug)) {
    console.warn(`  [warn] scorecard slug '${slug}' not found in site ideas.ts — skipping`);
    continue;
  }
  const human = buildRubric(
    num(row.human_impact),
    num(row.human_user_value),
    num(row.human_feasibility),
    num(row.human_innovation),
    num(row.human_execution),
    num(row.human_equity),
  );
  const ai = buildRubric(
    num(row.ai_impact),
    num(row.ai_user_value),
    num(row.ai_feasibility),
    num(row.ai_innovation),
    num(row.ai_execution),
    num(row.ai_equity),
  );
  const entry: IdeaGrading = {};
  if (human) entry.human = human;
  if (ai) entry.ai = ai;
  if (human && ai) entry.deltas = computeDeltas(ai, human);
  const nJudges = num(row.n_human_judges);
  if (nJudges != null) entry.nJudges = nJudges;
  gradingBySlug.set(slug, entry);
}

// Demo teams with no AI slug in scorecard (teams 104/401/603) — still have
// human panel data we'd like to surface. Look them up via team_idea_map.
const teamIdeaMap = readCsv("team_idea_map.csv");
for (const row of scorecard) {
  if (row.ai_slug) continue;
  const teamId = row.team_id;
  const mapped = teamIdeaMap.find(r => r.team_id === teamId);
  if (!mapped || !mapped.slug || !siteSlugs.has(mapped.slug)) continue;
  if (gradingBySlug.has(mapped.slug)) continue;
  const human = buildRubric(
    num(row.human_impact),
    num(row.human_user_value),
    num(row.human_feasibility),
    num(row.human_innovation),
    num(row.human_execution),
    num(row.human_equity),
  );
  if (!human) continue;
  const entry: IdeaGrading = { human };
  const nJudges = num(row.n_human_judges);
  if (nJudges != null) entry.nJudges = nJudges;
  gradingBySlug.set(mapped.slug, entry);
}

// AI-only ideas (NEW / BLUESKY with no hackathon team) — pick up AI rubric
// from ai_only_ideas.csv if we don't already have grading for the slug.
for (const row of aiOnly) {
  const slug = row.slug;
  if (!siteSlugs.has(slug)) {
    console.warn(`  [warn] ai_only slug '${slug}' not found in site ideas.ts — skipping`);
    continue;
  }
  if (gradingBySlug.has(slug)) continue;
  const ai = buildRubric(
    num(row.impact),
    num(row.user_value),
    num(row.feasibility),
    num(row.innovation),
    num(row.execution),
    num(row.equity),
  );
  if (!ai) continue;
  gradingBySlug.set(slug, { ai });
}

// Backfill AI rubric from ai_evaluations.csv for any slug that got human-only
// above (e.g. demo teams missing AI in scorecard but evaluated elsewhere).
for (const row of aiEvals) {
  const slug = row.slug;
  if (!siteSlugs.has(slug)) continue;
  const existing = gradingBySlug.get(slug);
  if (!existing) continue;
  if (!existing.ai) {
    const ai = buildRubric(
      num(row.impact),
      num(row.user_value),
      num(row.feasibility),
      num(row.innovation),
      num(row.execution),
      num(row.equity),
    );
    if (ai) {
      existing.ai = ai;
      if (existing.human) existing.deltas = computeDeltas(ai, existing.human);
    }
  }
  // Attach verdict rationale (short verdict headline text from roundtable file).
  const rationale = trimRationale(row.verdict_raw ?? "");
  if (rationale) existing.verdictRationale = rationale;
}

// ---------------------------------------------------------------------------
// Invariant checks
// ---------------------------------------------------------------------------

const missing = [...siteSlugs].filter(s => !gradingBySlug.has(s));
if (missing.length > 0) {
  console.error("ERROR: site slugs with no grading data:");
  missing.forEach(s => console.error("  " + s));
  process.exit(1);
}

let bothCount = 0;
let aiOnlyCount = 0;
let humanOnlyCount = 0;
for (const g of gradingBySlug.values()) {
  if (g.human && g.ai) bothCount++;
  else if (g.ai) aiOnlyCount++;
  else if (g.human) humanOnlyCount++;
}

console.log(`grading entries: ${gradingBySlug.size}`);
console.log(`  both human + AI: ${bothCount}`);
console.log(`  AI only:         ${aiOnlyCount}`);
console.log(`  human only:      ${humanOnlyCount}`);

// ---------------------------------------------------------------------------
// Emit TypeScript module
// ---------------------------------------------------------------------------

function emitRubric(r: Rubric): string {
  return `{ impact: ${r.impact}, userValue: ${r.userValue}, feasibility: ${r.feasibility}, innovation: ${r.innovation}, execution: ${r.execution}, equity: ${r.equity} }`;
}

function jsonQuote(s: string): string {
  return JSON.stringify(s);
}

const sortedSlugs = [...gradingBySlug.keys()].sort();
const entries = sortedSlugs.map(slug => {
  const g = gradingBySlug.get(slug)!;
  const parts: string[] = [];
  if (g.human) parts.push(`    human: ${emitRubric(g.human)}`);
  if (g.ai) parts.push(`    ai: ${emitRubric(g.ai)}`);
  if (g.deltas) parts.push(`    deltas: ${emitRubric(g.deltas)}`);
  if (g.nJudges != null) parts.push(`    nJudges: ${g.nJudges}`);
  if (g.verdictRationale) parts.push(`    verdictRationale: ${jsonQuote(g.verdictRationale)}`);
  return `  ${jsonQuote(slug)}: {\n${parts.join(",\n")},\n  }`;
});

const output = `// Auto-generated by 2026-annual-hackathon/scripts/generate-grading-data.ts
// Do not edit manually — re-run the script to regenerate.
// Source: ../../data/*.csv (extracted from the master judging tracker xlsx).
//
// ${gradingBySlug.size} entries: ${bothCount} with both human + AI, ${aiOnlyCount} AI-only, ${humanOnlyCount} human-only.

export interface Rubric {
  /** 1-5 scale. Human values are the 16-judge mean (may be fractional). */
  impact: number;
  userValue: number;
  feasibility: number;
  innovation: number;
  execution: number;
  equity: number;
}

export interface IdeaGrading {
  /** Mean of the 16-judge panel, 1-5 per category. Present for Demo teams. */
  human?: Rubric;
  /** AI persona consensus rubric, 1-5 per category. Present for most ideas. */
  ai?: Rubric;
  /** ai − human, per category. Only present when both human and ai exist. */
  deltas?: Rubric;
  /** Number of human judges contributing to the human rubric (typically 16). */
  nJudges?: number;
  /** Short verdict headline text from the AI roundtable file. */
  verdictRationale?: string;
  /**
   * Per-category AI rationale (≤2 sentences each), synthesized from the idea's
   * AI scores + verdict + IDEA.md + lifecycle review. Labeled [AI-inferred]
   * in the UI. Populated by scripts/generate_ai_rationales_module.ts and
   * merged in ideas.ts. Present for any idea with an \`ai\` rubric.
   */
  aiRationales?: {
    impact: string;
    userValue: string;
    feasibility: string;
    innovation: string;
    execution: string;
    equity: string;
  };
}

export const gradingBySlug: Record<string, IdeaGrading> = {
${entries.join(",\n")},
};
`;

writeFileSync(OUT_FILE, output, "utf-8");
console.log(`\nWrote ${OUT_FILE}`);
console.log(`File size: ${(output.length / 1024).toFixed(1)} KB`);
