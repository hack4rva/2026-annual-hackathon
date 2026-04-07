#!/usr/bin/env python3
"""
Universe Expansion — batch Parallel.ai deep research runner.

For each graded idea (has lifecycle_review.md), reads IDEA.md + lifecycle_review.md,
builds a universe expansion prompt, submits to Parallel.ai API, polls until complete,
and saves UNIVERSE_EXPANSION.md to the idea directory.

Usage:
    python universe_expansion.py [--processor pro-fast|ultra-fast|ultra] [--dry-run]
"""

from __future__ import annotations

import argparse
import json
import os
import sys
import time
from pathlib import Path
from typing import Any
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen

BASE_URL = "https://api.parallel.ai/v1/tasks/runs"
IDEAS_ROOT = Path(__file__).parent.parent / "ideas"

PILLAR_LABELS = {
    "city-storytelling": "A City That Tells Its Stories",
    "thriving-built-environment": "A Thriving and Sustainable Built Environment",
    "thriving-city-hall": "A Thriving City Hall",
    "thriving-economy": "A Thriving Economy",
    "thriving-families": "Thriving Families",
    "thriving-inclusive-communities": "Thriving and Inclusive Communities",
    "thriving-neighborhoods": "Thriving Neighborhoods",
}


def api_key() -> str:
    # Support both env var names (zshrc uses PARALLEL_AI_KEY, parallel-cli uses PARALLEL_API_KEY)
    key = os.getenv("PARALLEL_API_KEY") or os.getenv("PARALLEL_AI_KEY", "")
    if not key:
        raise RuntimeError("Neither PARALLEL_API_KEY nor PARALLEL_AI_KEY env var is set")
    return key


def api_request(method: str, path: str = "", data: Any = None, timeout: int = 30) -> dict:
    url = BASE_URL + path
    body = json.dumps(data).encode() if data is not None else None
    req = Request(url, data=body, method=method)
    req.add_header("x-api-key", api_key())
    req.add_header("Content-Type", "application/json")
    with urlopen(req, timeout=timeout) as resp:
        return json.loads(resp.read().decode())


def submit_task(prompt: str, processor: str) -> str:
    resp = api_request("POST", "", {
        "input": prompt,
        "processor": processor,
        "task_spec": {"output_schema": {"type": "text"}},
    })
    return resp["run_id"]


def poll_status(run_id: str) -> str:
    resp = api_request("GET", f"/{run_id}")
    return resp.get("status", "unknown")


def fetch_result(run_id: str) -> str:
    resp = api_request("GET", f"/{run_id}/result")
    content = resp.get("output", {}).get("content", "")
    return content if isinstance(content, str) else json.dumps(content, indent=2)


def read_file(path: Path) -> str:
    try:
        return path.read_text(encoding="utf-8")
    except Exception:
        return ""


def build_prompt(idea_dir: Path, pillar: str) -> str:
    idea_name = idea_dir.name
    pillar_label = PILLAR_LABELS.get(pillar, pillar)
    idea_text = read_file(idea_dir / "IDEA.md")
    lifecycle_text = read_file(idea_dir / "lifecycle_review.md")
    innovation_text = read_file(idea_dir / "INNOVATION_ANALYSIS.md")
    research_text = read_file(idea_dir / "RESEARCH_RESULT.md")

    # Trim to reasonable size
    idea_excerpt = idea_text[:3000] if len(idea_text) > 3000 else idea_text
    innovation_excerpt = innovation_text[:2000] if len(innovation_text) > 2000 else innovation_text

    # Use lifecycle_review if present; fall back to RESEARCH_RESULT for ungraded ideas
    if lifecycle_text.strip():
        eval_excerpt = lifecycle_text[:4000] if len(lifecycle_text) > 4000 else lifecycle_text
        eval_label = "EXISTING EVALUATION (lifecycle review + innovation analysis)"
    else:
        eval_excerpt = research_text[:4000] if len(research_text) > 4000 else research_text
        eval_label = "EXISTING EVALUATION (research results + innovation analysis)"

    return f"""You are conducting deep research for a civic innovation idea produced during the Richmond Civic Hackathon (RVA Hacks, March 2026). Your job is NOT to evaluate the idea. It has already been evaluated. Your job is to EXPAND ITS UNIVERSE.

CONTEXT
City: Richmond, Virginia
Civic frame: Mayor Danny Avula's Mayoral Action Plan (MAP), pillar: {pillar_label}
Goal: Determine whether this idea should remain city-owned, become nonprofit-led, become a hybrid city/nonprofit effort, or potentially be better owned or funded at the regional, state, or federal level.

INPUT IDEA
Name: {idea_name}

IDEA SUMMARY:
{idea_excerpt}

{eval_label}:
{eval_excerpt}

{innovation_excerpt}

PRIMARY RESEARCH OBJECTIVE
Expand the universe of this idea by identifying:
1. Relevant local, regional, Virginia-state, and federal grants or funding programs
2. Relevant local, regional, Virginia-state, and national nonprofits, foundations, coalitions, civic groups, or quasi-public organizations that might adopt, partner on, fund, pilot, or champion the idea
3. Whether ownership is best suited to: City of Richmond, a Richmond-area nonprofit, a regional body, a Virginia state agency, a federal/national program partner, or a hybrid model
4. Whether adjacent jurisdictions, nonprofits, agencies, or prior efforts suggest a larger framing
5. Whether the idea is a symptom-level fix for a broader systems problem better addressed elsewhere

RESEARCH INSTRUCTIONS
Search broadly across:
- City of Richmond and surrounding region / Central Virginia / PlanRVA / GRTC where relevant
- Virginia state agencies, commissions, grant programs, and policy initiatives
- Federal agencies and grant programs (HUD, DOT, HHS, DOL, NEA, EPA, USDA, etc.)
- Private and community foundations (Community Foundation for a Greater Richmond, JPB Foundation, Annie E. Casey, Robert Wood Johnson, Knight Foundation, Luminate, etc.)
- National civic innovation organizations (Beeck Center, Code for America, Sunlight Foundation, National League of Cities, Bloomberg Philanthropies, etc.)
- Relevant nonprofit ecosystems for this specific problem domain

For each funding source or organization found, state:
- Why it is relevant to THIS idea specifically
- Likely role: funder, adopter, implementation partner, convener, owner, policy enabler, or amplifier
- Geographic level: local, regional, state, national, federal
- Match strength: strong, moderate, or weak
- Supporting evidence

REQUIRED OUTPUT FORMAT

## 1. EXECUTIVE SUMMARY
Sharp 1-2 paragraph synthesis of how this idea's universe expands beyond Richmond city government.

## 2. EXPANDED OWNERSHIP RECOMMENDATION
State the recommended model (city-owned / nonprofit-led / hybrid / regional / state-level / other).
Explain: what the city should own, what partners should own, what should NOT be city-owned.

## 3. FUNDING LANDSCAPE
Table with columns: Funding Source | Level | Why It Fits | What It Could Fund | Eligibility Notes | Match Strength | Citation
Include only the most relevant opportunities (aim for 8-15 entries).

## 4. ORGANIZATION / NONPROFIT LANDSCAPE
Table with columns: Organization | Geography | Type | Why It Fits | Possible Role | Richmond/VA Connection | Match Strength | Citation
Include only plausibly relevant organizations (aim for 8-15 entries).

## 5. EXISTING EFFORTS / PRIOR ART
List similar efforts from Richmond, Virginia, or other cities/states.
For each: what was attempted, who owned it, what worked, what failed, lesson for this idea.

## 6. SCALE SHIFT ANALYSIS
Answer: Why might this idea be too small framed only as a Richmond project? What changes if the frame becomes regional? Statewide? If a nonprofit owns the resident-facing layer while the city provides data? If the city only pilots and a partner scales?

## 7. RISK AND CONSTRAINT ANALYSIS
Biggest blockers: procurement, legal authority, data-sharing, trust, technical integration, staffing, political feasibility, grant dependence, maintenance burden, community legitimacy.

## 8. RECOMMENDED NEXT MOVES
10 most practical next moves in priority order. Each: action, owner type, why now, effort level, expected learning.

## 9. SOURCES
Use citations throughout. Prioritize primary sources, official grant pages, actual organization sites, government pages, annual reports, credible local reporting.

UNIVERSE EXPANSION VERDICT:
[One sentence naming the best ownership model, the best funding path, and the most promising partner category for this idea.]"""


SKIP_SLUGS = {"unknown-corrupted", "rva-neighborhood-watch"}


def find_all_ideas() -> list[tuple[Path, str]]:
    """Return (idea_dir, pillar_slug) for every idea directory that has IDEA.md."""
    results = []
    for pillar_dir in IDEAS_ROOT.iterdir():
        if not pillar_dir.is_dir() or pillar_dir.name.startswith("_"):
            continue
        pillar = pillar_dir.name
        for idea_dir in pillar_dir.iterdir():
            if not idea_dir.is_dir() or idea_dir.name.startswith("_"):
                continue
            if idea_dir.name in SKIP_SLUGS:
                continue
            if (idea_dir / "IDEA.md").exists():
                results.append((idea_dir, pillar))
    return sorted(results, key=lambda x: (x[1], x[0].name))


def main() -> None:
    parser = argparse.ArgumentParser(description="Universe expansion batch runner")
    parser.add_argument("--processor", default="pro-fast",
                        choices=["lite", "pro-fast", "ultra-fast", "ultra"],
                        help="Parallel.ai processor tier")
    parser.add_argument("--dry-run", action="store_true",
                        help="Print prompts but do not submit")
    parser.add_argument("--skip-existing", action="store_true", default=True,
                        help="Skip ideas that already have UNIVERSE_EXPANSION.md")
    parser.add_argument("--idea", default=None,
                        help="Only process ideas matching this name substring")
    args = parser.parse_args()

    ideas = find_all_ideas()
    if args.idea:
        ideas = [(d, p) for d, p in ideas if args.idea.lower() in d.name.lower()]

    print(f"Found {len(ideas)} graded ideas")

    # Phase 1: Submit all jobs simultaneously
    jobs: list[dict] = []
    for idea_dir, pillar in ideas:
        out_file = idea_dir / "UNIVERSE_EXPANSION.md"
        if args.skip_existing and out_file.exists():
            print(f"  SKIP {idea_dir.name} (already exists)")
            continue

        prompt = build_prompt(idea_dir, pillar)

        if args.dry_run:
            print(f"\n{'='*60}")
            print(f"DRY RUN: {idea_dir.name}")
            print(f"Prompt length: {len(prompt)} chars")
            print(prompt[:500] + "...")
            continue

        print(f"  SUBMIT {idea_dir.name} ({pillar})...", end=" ", flush=True)
        try:
            run_id = submit_task(prompt, args.processor)
            jobs.append({"idea_dir": idea_dir, "run_id": run_id, "status": "pending"})
            print(f"run_id={run_id}")
        except Exception as e:
            print(f"ERROR: {e}")
            jobs.append({"idea_dir": idea_dir, "run_id": None, "status": "error", "error": str(e)})

    if args.dry_run:
        return

    if not jobs:
        print("No jobs to poll.")
        return

    submitted = [j for j in jobs if j["run_id"]]
    print(f"\nSubmitted {len(submitted)} jobs. Starting to poll...")

    # Phase 2: Poll until all complete
    pending = [j for j in submitted]
    poll_interval = 20
    deadline = time.time() + 3600  # 1 hour max

    while pending and time.time() < deadline:
        time.sleep(poll_interval)
        still_pending = []
        for job in pending:
            try:
                status = poll_status(job["run_id"])
                if status == "completed":
                    print(f"  COMPLETE {job['idea_dir'].name}")
                    try:
                        result_text = fetch_result(job["run_id"])
                        out_file = job["idea_dir"] / "UNIVERSE_EXPANSION.md"
                        header = f"# Universe Expansion — {job['idea_dir'].name}\n\n"
                        header += f"_Research generated by Parallel.ai ({args.processor}). Run ID: {job['run_id']}_\n\n---\n\n"
                        out_file.write_text(header + result_text, encoding="utf-8")
                        print(f"    Saved to {out_file}")
                    except Exception as e:
                        print(f"    ERROR fetching result: {e}")
                elif status == "failed":
                    print(f"  FAILED {job['idea_dir'].name} (run_id={job['run_id']})")
                else:
                    still_pending.append(job)
            except Exception as e:
                print(f"  POLL ERROR for {job['idea_dir'].name}: {e}")
                still_pending.append(job)

        pending = still_pending
        if pending:
            names = ", ".join(j["idea_dir"].name for j in pending)
            print(f"  Still waiting ({len(pending)}): {names}")
        poll_interval = min(poll_interval + 10, 60)

    if pending:
        print(f"\nTimeout! {len(pending)} jobs did not complete:")
        for j in pending:
            print(f"  - {j['idea_dir'].name} (run_id={j['run_id']})")
        print("Re-run the script to retry (--skip-existing will skip completed ones).")
    else:
        print(f"\nDone! All jobs complete.")

    # Save a run manifest
    manifest_path = IDEAS_ROOT / "_universe_expansion_manifest.json"
    manifest = {
        "timestamp": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "processor": args.processor,
        "jobs": [
            {
                "idea": j["idea_dir"].name,
                "pillar": str(j["idea_dir"].parent.name),
                "run_id": j.get("run_id"),
                "status": "complete" if (j["idea_dir"] / "UNIVERSE_EXPANSION.md").exists() else "failed",
            }
            for j in jobs
        ],
    }
    manifest_path.write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    print(f"Manifest saved: {manifest_path}")


if __name__ == "__main__":
    main()
