# Parallel AI Deep Research — Beginner Quickstart

This file teaches you how to run Parallel.ai Deep Research tasks quickly, then provides deeper reference. If you’re new, start here — you can be running in minutes.

## TL;DR (2 ways)

- Option A — Use our no-dependency Python client (recommended to learn the API):
  1) Create `.env` with `PARALLEL_API_KEY=your_key`
  2) Run the Python snippet below to submit a task and fetch results.

- Option B — Use the built-in runners in the pillar repos (batch friendly):
  - See `pillar-repos/*/05_prompts/parallel_runner/README.md` for exact commands,
    or run the root helper script: `python pillar-repos/run_all_pillars_research.py`.

## Minimal Python Client (no SDK)

Copy-paste this into a file like `quickstart_parallel.py` and run it. It uses only the Python standard library and the Task API.

```python
import json, os, time
from urllib.request import Request, urlopen

API_KEY = os.getenv("PARALLEL_API_KEY")
if not API_KEY:
    raise SystemExit("Set PARALLEL_API_KEY in your shell or .env")

BASE = "https://api.parallel.ai/v1/tasks/runs"

def _req(method, path="", data=None, timeout=60):
    body = json.dumps(data).encode("utf-8") if data is not None else None
    r = Request(BASE + path, data=body, method=method)
    r.add_header("x-api-key", API_KEY)
    r.add_header("Content-Type", "application/json")
    with urlopen(r, timeout=timeout) as resp:
        return json.loads(resp.read().decode("utf-8"))

# 1) Submit a task (text output is easiest to start with)
run = _req("POST", data={
    "input": "Summarize the mission of the City of Richmond planning department.",
    "processor": "pro-fast",  # beginner-friendly default
    "task_spec": {"output_schema": {"type": "text"}}
})
run_id = run["run_id"]
print("Submitted:", run_id)

# 2) Poll until completed
while True:
    status = _req("GET", f"/{run_id}").get("status")
    print("Status:", status)
    if status in ("completed", "failed"): break
    time.sleep(10)

# 3) Fetch the result
res = _req("GET", f"/{run_id}/result")
content = res.get("output", {}).get("content", "")
print("\n=== OUTPUT (markdown) ===\n")
print(content if isinstance(content, str) else json.dumps(content, indent=2))
```

Tip: To persist your key locally, create a `.env` file next to the script with `PARALLEL_API_KEY=your_key` and export it in your shell: `export $(cat .env | xargs)`.

## Quickstart via cURL

```bash
# Submit a task
curl -sS -X POST "https://api.parallel.ai/v1/tasks/runs" \
  -H "x-api-key: $PARALLEL_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
        "input": "Find the founding date of Parallel Web Systems (parallel.ai).",
        "processor": "core-fast",
        "task_spec": {"output_schema": {"type": "text"}}
      }'

# Later, poll status
curl -sS -H "x-api-key: $PARALLEL_API_KEY" \
  "https://api.parallel.ai/v1/tasks/runs/<RUN_ID>"

# And fetch result
curl -sS -H "x-api-key: $PARALLEL_API_KEY" \
  "https://api.parallel.ai/v1/tasks/runs/<RUN_ID>/result"
```

## Pick a Processor (beginner defaults)

- Start with `pro-fast` for interactive speed and good depth.
- If you need cheaper/shallower: `base-fast` or `core-fast`.
- For hardest prompts: `ultra`/`ultra-fast`.

## When you need structure (JSON output)

Begin with text output. When you’re ready for structured results, set a JSON schema for `task_spec.output_schema`:

```json
{
  "type": "object",
  "description": "Basic company snapshot",
  "properties": {
    "founding_date": {"type": "string", "description": "YYYY-MM or YYYY if month unknown"},
    "headquarters_city": {"type": "string", "description": "City name only"}
  },
  "required": ["founding_date", "headquarters_city"],
  "additionalProperties": false
}
```

Then send that as `task_spec.output_schema` instead of `{ "type": "text" }`.

## Quickstart: City Hall Runner (single pillar)

Run the curated prompts for the City Hall pillar and save outputs to `research/`:

```bash
cd pillar-repos/pillar-thriving-city-hall
cp 05_prompts/parallel_runner/.env.example 05_prompts/parallel_runner/.env
"$EDITOR" 05_prompts/parallel_runner/.env   # set PARALLEL_API_KEY=your_key

# Run all pending prompts (skip ones with existing output)
python 05_prompts/parallel_runner/run_all.py --processor pro-fast

# Or run one prompt explicitly
python 05_prompts/parallel_runner/run_one.py 05_prompts/research/A1_problem_landscape_resident_service.txt --processor pro-fast

# Or use the root helper (from repo root):
cd ../../..
python pillar-repos/pillar-thriving-city-hall/scripts/run_all_deep_research.py --processor pro-fast
```

## Troubleshooting

- 401/403: Invalid or missing API key — ensure header `x-api-key` and a valid key.
- 422 schema error: Root must be an object with `properties`; include all fields in `required`; set `additionalProperties: false`.
- 413/size errors: Combined task spec + input must be <= 25k characters; simplify descriptions or split tasks.
- Slow runs: Use `*-fast` processors; keep `output_schema` simple during iteration.

---

# Verification TODO — Top 10 Claims to Verify

These are the highest-priority claims to verify before or at the start of the hackathon. Each one affects key build decisions.

---

## 1. Richmond's Legistar API endpoint
**Claim:** Richmond's Legistar instance exposes the Granicus Web API at a public endpoint.
**Why it matters:** The neighborhood development notifier and Legistar translator both depend on API access. If unavailable, teams must fall back to web scraping or pre-seeded data.
**How to verify:** Visit https://webapi.legistar.com/help, identify the Richmond client name, and test an API call (e.g., `GET /api/v1/{client}/Matters`).
**Evidence log ID:** E-011

---

## 2. Richmond GeoHub — Development layers are current and accessible
**Claim:** The Richmond GeoHub Land Use Project Mapper and Development Activity Mapper layers contain current data accessible via ArcGIS REST API.
**How to verify:** Navigate to Richmond's ArcGIS hub, find the service URL, check the last-updated metadata, and test a REST query.
**Evidence log ID:** E-012

---

## 3. Legistar address field consistency
**Claim:** Development case records in Richmond's Legistar include structured or parseable address fields that can be geocoded.
**How to verify:** Pull several recent Planning Commission cases from Legistar and inspect the address field format.
**Evidence log ID:** TBD

---

## 4. HUD CHAS data is available at census tract level for Richmond
**Claim:** HUD CHAS data can be accessed at census tract level for Richmond, not just city or county level.
**How to verify:** Download the CHAS data files and verify that Richmond census tracts are included.
**Evidence log ID:** E-014

---

## 5. Sharon Ebert's current role and availability as champion
**Claim:** Sharon Ebert (DCAO) is the appropriate City contact for continuation pathway conversations.
**How to verify:** Confirm with hackathon organizers (Christian Markow, Michael Kolbe) that Sharon Ebert is still the relevant DCAO contact.
**Evidence log ID:** E-013

---

## 6. Richmond Planning Commission notification requirements
**Claim:** Richmond's notification requirements for development cases include specific mailing radius and timeline requirements that create a gap before Legistar posting.
**How to verify:** Find the City's land use notification requirements in the City Code or Planning Department website.
**Evidence log ID:** TBD

---

## 7. NLIHC Preservation Database coverage for Richmond
**Claim:** The NLIHC National Housing Preservation Database contains meaningful Richmond property coverage, not just federal public housing.
**How to verify:** Search the NLIHC database for Richmond properties and assess coverage.
**Evidence log ID:** E-002

---

## 8. Richmond Open Data Portal — active permit dataset
**Claim:** The Richmond Open Data Portal (Socrata) has an active building permit dataset that is current enough to be useful for neighborhood change analysis.
**How to verify:** Visit data.richmondgov.com, find the permits dataset, and check the last-updated date and completeness.
**Evidence log ID:** TBD

---

## 9. Councilmatic open-source project — current maintenance status
**Claim:** The django-councilmatic open-source project is actively maintained and could be used as a starting point for a Richmond development tracker.
**How to verify:** Check the GitHub repository for recent commits and any Richmond-specific forks.
**Evidence log ID:** TBD

---

## 10. Legistar housing funding ordinance searchability
**Claim:** Housing grant and loan approvals can be found in Legistar by searching for specific matter types or keywords, and they contain enough information to seed a housing investment dashboard.
**How to verify:** Search Richmond's Legistar for "housing" or "Section 108" or "HOME" and assess result completeness and structure.
**Evidence log ID:** TBD

---

## Verification log

| Item | Status | Date | Notes |
|---|---|---|---|
| 1. Legistar API | Unverified | — | — |
| 2. GeoHub layers | Unverified | — | — |
| 3. Legistar address fields | Unverified | — | — |
| 4. CHAS tract level | Unverified | — | — |
| 5. Sharon Ebert contact | Unverified | — | — |
| 6. Notification requirements | Unverified | — | — |
| 7. NLIHC coverage | Unverified | — | — |
| 8. Open Data Portal permits | Unverified | — | — |
| 9. Councilmatic status | Unverified | — | — |
| 10. Legistar housing ordinances | Unverified | — | — |


> ## Documentation Index
> Fetch the complete documentation index at: https://docs.parallel.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Task Spec

> Define structured research tasks with customizable input and output schemas.

## Task Spec

A Task Specification ([Task Spec](/api-reference/tasks-v1/create-task-run#body-task-spec-output-schema)) is a declarative template that defines the structure and requirements for the outputs of a web research operation. While optional in each Task Run, Task Specs provide significant advantages when you need precise control over your research data.

Task Specs ensure consistent results by enforcing a specific output structure across multiple runs. They validate schema against expected formats and create reusable templates for common research patterns. By defining the expected outputs clearly, they also serve as self-documentation for your tasks, making them easier to understand and maintain.

| Component         | Required | Purpose                                               | Format              |
| ----------------- | -------- | ----------------------------------------------------- | ------------------- |
| **Output Schema** | Yes      | Defines the structure and fields of the task result   | JSON Schema or Text |
| **Input Schema**  | No       | Specifies expected input parameters and their formats | JSON Schema or Text |

## Task Spec Structure

A Task Spec consists of:

| Field    | Type                    | Required | Description                                     |
| -------- | ----------------------- | -------- | ----------------------------------------------- |
| `output` | Schema object or string | Yes      | Description and structure of the desired output |
| `input`  | Schema object or string | No       | Description and structure of input parameters   |

> Note: When providing a bare string for input or output, it's equivalent to a text schema with that string as the description.

## Schema Types

Task Spec supports three schema formats:

> Tip: When using the Python SDK, Parallel Tasks also support Pydantic objects in Task Spec.
> Note: `auto` mode enables Deep Research style outputs only in processors `pro` and above.

### JSON Schema
    ```json
    {
      "json_schema": {
        "type": "object",
        "properties": {
          "population": {
            "type": "string",
            "description": "Current population with year of estimate"
          },
          "area": {
            "type": "string",
            "description": "Total area in square kilometers and square miles"
          }
        },
        "required": ["population", "area"]
      },
      "type": "json"
    }
    ```

### Text Schema
    ```json
    {
      "description": "Summary of the country's economic indicators for 2023",
      "type": "text"
    }
    ```

### Auto Schema
    ```json
    {
      "type": "auto"
    }
    ```

## Task Spec Best Practices

Define what entity you're researching (input) and what specific data points you need back (output). Keep both as flat-structured as possible.

> Note: The `description` field is your primary tool for controlling output quality. Use field-level descriptions to specify format requirements, data sources, fallback behavior, and other instructions.

### Steps

- Identify what schema your use case requires
  - For Deep Research style tasks, use `auto` schema (processors `pro` and above)
  - For strict outputs, use JSON Schema for inputs and outputs
  - Otherwise, omit Task Spec and get plain text

- Define effective inputs
  - For text inputs, be specific about what you expect
  - For JSON inputs, include just enough fields to uniquely identify the entity (e.g., both company_name and company_website)
  - Avoid deep nesting; keep inputs flat

- Define effective outputs (when using JSON Schema)
  - Use field-level `description` for all instructions
  - Include: Entity, Action, Specifics, Error handling
  > Tip: Example of a well-written description:
  >
  > ```json
  > "employee_count": {
  >   "type": "string",
  >   "description": "The current number of employees at the company. Use the most recent data available from LinkedIn, company website, or press releases. Format as a range (e.g., '501-1000') if exact count unavailable. If no data found, return 'Unknown'."
  > }
  > ```
  - Naming: prefer `ceo_name`, `headquarters_address`, `annual_revenue_2024`
  - Formats: dates `YYYY-MM-DD`; ranges with units; specify list sizes (e.g., `top_5_products`)
  - Don’t add meta fields like `reasoning` or `confidence_score`

- Additional instructions
  - Use top-level `description` for global constraints, e.g.:
    ```json
    {
      "type": "object",
      "description": "Extract all information only from well-known government sites.",
      "properties": {
        "latest_funding_amount": {"type": "string", "description": "Funding amount in millions USD format (e.g., '50M'). If unavailable, return null."},
        "funding_round_type": {"type": "string", "description": "Type of funding round (Series A, Series B, etc.). If unknown, return 'Type unknown'."},
        "funding_date": {"type": "string", "description": "Date of funding round in YYYY-MM-DD format. If partial date available, use YYYY-MM or YYYY."},
        "current_employee_count": {"type": "string", "description": "Current number of employees as approximate number or range. Allow estimates when precise counts unavailable."}
      }
    }
    ```

## Output Schema Validation Rules

The Task API enforces several restrictions on output schemas to ensure compatibility and performance:

### Schema Structure Rules

| Rule                               | Type    | Description                                               |
| ---------------------------------- | ------- | --------------------------------------------------------- |
| Root type must be object           | error   | The root schema must have `"type": "object"`              |
| Root must have properties          | error   | The root object must have a `properties` field            |
| Root cannot use anyOf              | error   | The root level cannot use `anyOf`                         |
| Standalone null type               | error   | `null` type is only allowed in union types or anyOf       |
| All fields must be required        | warning | All properties should be listed in the `required` array   |
| additionalProperties must be false | warning | All object types should set `additionalProperties: false` |

> Note: While all fields must be required in the schema, you can create optional parameters by using a union type with `null`. For example, `"type": ["string", "null"]` allows a field to be either a string or null, effectively making it optional while maintaining schema compliance.

### Size and Complexity Limits

> Warning: 25,000 character limit. The combined length of your task specification AND input data cannot exceed 25,000 characters (field names/descriptions, objective/description text, and input data). If you hit this limit, simplify descriptions or split into multiple tasks.

| Rule                     | Type  | Limit            | Description                                                    |
| ------------------------ | ----- | ---------------- | -------------------------------------------------------------- |
| Nesting depth            | error | 5 levels         | Maximum nesting depth of objects and arrays                    |
| Total properties         | error | 100              | Maximum total number of properties across all levels           |
| Total string length      | error | 25,000 chars     | Maximum total string length for names and values               |
| Enum values              | error | 500              | Maximum number of enum values across all properties            |
| Large enum string length | error | 7,500 chars      | Maximum string length for enums with >250 values               |
| Task spec size           | error | 25,000 chars     | Maximum length of the task specification alone                 |
| **Total size**           | error | **25,000 chars** | **Maximum combined length of task specification + input data** |

### Unsupported Keywords

The following JSON Schema keywords are not supported in output schemas:

`contains`, `format`, `maxContains`, `maxItems`, `maxLength`, `maxProperties`, `maximum`, `minContains`, `minItems`, `minLength`, `minimum`, `minProperties`, `multipleOf`, `pattern`, `patternProperties`, `propertyNames`, `uniqueItems`, `unevaluatedItems`, `unevaluatedProperties`

This schema meets the core requirements: it has an object root type with properties, all fields are required, and `additionalProperties` is set to false.

### Common Schema Errors to Avoid

Here are examples of common schema errors and how to fix them:

### Root Type Error
    ```json
    {
      "type": "array",  // Error: Root type must be "object"
      "items": {
        "type": "object",
        "properties": {
          "name": { "type": "string" }
        }
      }
    }
    ```

    **Fix:** Change the root type to "object" and move array properties to a field:

    ```json
    {
      "type": "object",
      "properties": {
        "items": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "name": { "type": "string" }
            },
            "required": ["name"]
          }
        }
      },
      "required": ["items"],
      "additionalProperties": false
    }
    ```
### AnyOf Error
    ```json
    {
      "type": "object",
      "anyOf": [  // Error: Root level cannot use anyOf
        {
          "properties": {
            "field1": { "type": "string" }
          }
        },
        {
          "properties": {
            "field2": { "type": "string" }
          }
        }
      ]
    }
    ```

    **Fix:** Combine the properties into a single object:

    ```json
    {
      "type": "object",
      "properties": {
        "field1": { "type": "string" },
        "field2": { "type": "string" }
      },
      "required": ["field1", "field2"],
      "additionalProperties": false
    }
    ```
### Missing Required
    ```json
    {
      "type": "object",
      "properties": {
        "field1": { "type": "string" },
        "field2": { "type": "string" }
      },
      "required": ["field1"]  // Warning: All fields should be required
    }
    ```

    **Fix:** Add all fields to the required array:

    ```json
    {
      "type": "object",
      "properties": {
        "field1": { "type": "string" },
        "field2": { "type": "string" }
      },
      "required": ["field1", "field2"],
      "additionalProperties": false
    }
    ```
### Additional Properties
    ```json
    {
      "type": "object",
      "properties": {
        "field1": { "type": "string" },
        "field2": { "type": "string" }
      },
      "required": ["field1", "field2"],
      "additionalProperties": true  // Warning: should be false
    }
    ```

    **Fix:** Set additionalProperties to false:

    ```json
    {
      "type": "object",
      "properties": {
        "field1": { "type": "string" },
        "field2": { "type": "string" }
      },
      "required": ["field1", "field2"],
      "additionalProperties": false
    }
    ```
### Unsupported Keywords
    ```json
    {
      "type": "object",
      "properties": {
        "field1": {
          "type": "string",
          "minLength": 5  // Error: Unsupported keyword
        }
      },
      "required": ["field1"],
      "additionalProperties": false
    }
    ```

    **Fix:** Remove unsupported keywords and use descriptions instead:

    ```json
    {
      "type": "object",
      "properties": {
        "field1": {
          "type": "string",
          "description": "A string with at least 5 characters"
        }
      },
      "required": ["field1"],
      "additionalProperties": false
    }
    ```
    ```

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.parallel.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Processors

> Select the right Task API processor (lite, base, core, pro, ultra) based on task complexity and latency requirements

Processors are the engines that execute Task Runs. The choice of Processor determines the performance profile and reasoning behavior used. Any Task Run can be executed on any Processor.

> Tip: Choose a processor based on task complexity and latency. Use `lite`/`base` for simple enrichments, `core` for up to ~10 fields, and `pro`/`ultra` when reasoning depth is critical. Append `-fast` for lower latency.

Each processor varies in performance characteristics and supported features. Use the tables below to compare standard and fast processors.

> Note: “Max Fields” are approximate; complex fields consume more capacity. If you’re near the limit and see quality issues, try a higher-tier processor.

### Standard
    | Processor | Latency      | Strengths                                    | Max Fields  |
    | --------- | ------------ | -------------------------------------------- | ----------- |
    | `lite`    | 10s - 60s    | Basic metadata, fallback, low latency        | \~2 fields  |
    | `base`    | 15s - 100s   | Reliable standard enrichments                | \~5 fields  |
    | `core`    | 60s - 5min   | Cross-referenced, moderately complex outputs | \~10 fields |
    | `core2x`  | 60s - 10min  | High complexity cross referenced outputs     | \~10 fields |
    | `pro`     | 2min - 10min | Exploratory web research                     | \~20 fields |
    | `ultra`   | 5min - 25min | Advanced multi-source deep research          | \~20 fields |
    | `ultra2x` | 5min - 50min | Difficult deep research                      | \~25 fields |
    | `ultra4x` | 5min - 90min | Very difficult deep research                 | \~25 fields |
    | `ultra8x` | 5min - 2hr   | The most difficult deep research             | \~25 fields |
### Fast
    | Processor      | Latency      | Strengths                                    | Max Fields  |
    | -------------- | ------------ | -------------------------------------------- | ----------- |
    | `lite-fast`    | 10s - 20s    | Basic metadata, fallback, lowest latency     | \~2 fields  |
    | `base-fast`    | 15s - 50s    | Reliable standard enrichments                | \~5 fields  |
    | `core-fast`    | 15s - 100s   | Cross-referenced, moderately complex outputs | \~10 fields |
    | `core2x-fast`  | 15s - 3min   | High complexity cross referenced outputs     | \~10 fields |
    | `pro-fast`     | 30s - 5min   | Exploratory web research                     | \~20 fields |
    | `ultra-fast`   | 1min - 10min | Advanced multi-source deep research          | \~20 fields |
    | `ultra2x-fast` | 1min - 20min | Difficult deep research                      | \~25 fields |
    | `ultra4x-fast` | 1min - 40min | Very difficult deep research                 | \~25 fields |
    | `ultra8x-fast` | 1min - 1hr   | The most difficult deep research             | \~25 fields |
    

> Note: See Pricing for processor costs and API rates.

## Standard vs Fast Processors

Each processor is available in two variants: **Standard** and **Fast**. They differ in how they balance speed versus data freshness.

To use a fast processor, append `-fast` to the processor name:

```python
task_run = client.task_run.create(
    input="Parallel Web Systems (parallel.ai)",
    task_spec={"output_schema": "The founding date of the company"},
    processor="core-fast"  # Fast processor
)
```

### What's the Trade-off?

| Aspect             | Standard Processors                       | Fast Processors                   |
| ------------------ | ----------------------------------------- | --------------------------------- |
| **Latency**        | Higher                                    | 2-5x faster                       |
| **Data Freshness** | Highest freshness (prioritizes live data) | Very fresh (optimized for speed)  |
| **Best For**       | Background jobs, accuracy-critical tasks  | Interactive apps, agent workflows |

The trade-off is simple: **fast processors optimize for speed, standard processors optimize for freshness**. Both maintain high accuracy—the difference is in how they prioritize when retrieving data.

### Why are Fast Processors Faster?

Fast processors are optimized for speed—they return results as quickly as possible while maintaining high accuracy. Standard processors prioritize data freshness and will wait longer to ensure the most up-to-date information when needed.

In practice, you can expect **2-5x faster response times** with fast processors compared to standard processors for the same tier. This makes fast processors ideal for interactive applications where users are waiting for results.

### How Fresh is the Data?

Both processor types access **very fresh data** sufficient for most use cases. Our data is continuously updated, so for the vast majority of queries—company information, product details, professional backgrounds, market research—both will return accurate, current results.

**When to prefer standard processors for freshness:**

* Real-time financial data (stock prices, exchange rates)
* Breaking news or events from the last few hours
* Rapidly changing information (live scores, election results)
* Any use case where absolute data freshness is more important than speed

### When to Use Each

### Standard Processors
    * **Accuracy is paramount** - When correctness matters much more than speed
    * **Real-time data required** - Stock prices, live scores, breaking news
    * **Background/async jobs** - Tasks running without user waiting
    * **Research-heavy tasks** - Deep research benefiting from live sources
    * **High-volume async enrichments** - Processing large datasets in the background
### Fast Processors
    * **Testing agents** - Rapid iteration during development
    * **Subagent calls** - A calling agent needs low-latency responses
    * **Interactive applications** - Table UIs where users actively run tasks
    * **Latency-sensitive workflows** - Any use case where speed is critical
    

## Examples

Processors can be used flexibly depending on the scope and structure of your task. The examples below show how to:

* Use a single processor (like `lite`, `base`, `core`, `pro`, or `ultra`) to handle specific types of input and reasoning depth.
* Chain processors together to combine fast lookups with deeper synthesis.

This structure enables flexibility across a variety of tasks—whether you're extracting metadata, enriching structured records, or generating analytical reports.

### Sample Task for each Processor

#### Examples
  ```python
  task_run = client.task_run.create(
      input="Parallel Web Systems (parallel.ai)",
      task_spec={"output_schema":"The founding date of the company in the format MM-YYYY"},
      processor="lite"
  )
  print(f"Run ID: {task_run.run_id}")

  run_result = client.task_run.result(task_run.run_id, api_timeout=3600)
  print(run_result.output)
  ```

  ```python
  task_run = client.task_run.create(
      input="Parallel Web Systems (parallel.ai)",
      task_spec={"output_schema":"The founding date and most recent product launch of the company"},
      processor="base"
  )
  print(f"Run ID: {task_run.run_id}")

  run_result = client.task_run.result(task_run.run_id, api_timeout=3600)
  print(run_result.output)
  ```

  ```python
  task_run = client.task_run.create(
      input="Parallel Web Systems (parallel.ai)",
      task_spec={"output_schema":"The founding date, founders, and most recent product launch of the company"},
      processor="core"
  )
  print(f"Run ID: {task_run.run_id}")

  run_result = client.task_run.result(task_run.run_id, api_timeout=3600)
  print(run_result.output)
  ```

  ```python
  task_run = client.task_run.create(
      input="Parallel Web Systems (parallel.ai)",
      task_spec={"output_schema":"The founding date, founders, mission, benchmarked competitors and most recent product launch of the company"},
      processor="pro"
  )
  print(f"Run ID: {task_run.run_id}")

  run_result = client.task_run.result(task_run.run_id, api_timeout=3600)
  print(run_result.output)
  ```

  ```python
  task_run = client.task_run.create(
      input="Parallel Web Systems (parallel.ai)",
      task_spec={"output_schema":"A comprehensive analysis of the industry of the company, including growth factors and major competitors."},
      processor="ultra"
  )
  print(f"Run ID: {task_run.run_id}")

  run_result = client.task_run.result(task_run.run_id, api_timeout=3600)
  print(run_result.output)
  ```
    

### Sample Task for each Fast Processor

#### Fast Examples
  ```python
  task_run = client.task_run.create(
      input="Parallel Web Systems (parallel.ai)",
      task_spec={"output_schema":"The founding date of the company in the format MM-YYYY"},
      processor="lite-fast"
  )
  print(f"Run ID: {task_run.run_id}")

  run_result = client.task_run.result(task_run.run_id, api_timeout=3600)
  print(run_result.output)
  ```

  ```python
  task_run = client.task_run.create(
      input="Parallel Web Systems (parallel.ai)",
      task_spec={"output_schema":"The founding date and most recent product launch of the company"},
      processor="base-fast"
  )
  print(f"Run ID: {task_run.run_id}")

  run_result = client.task_run.result(task_run.run_id, api_timeout=3600)
  print(run_result.output)
  ```

  ```python
  task_run = client.task_run.create(
      input="Parallel Web Systems (parallel.ai)",
      task_spec={"output_schema":"The founding date, founders, and most recent product launch of the company"},
      processor="core-fast"
  )
  print(f"Run ID: {task_run.run_id}")

  run_result = client.task_run.result(task_run.run_id, api_timeout=3600)
  print(run_result.output)
  ```

  ```python
  task_run = client.task_run.create(
      input="Parallel Web Systems (parallel.ai)",
      task_spec={"output_schema":"The founding date, founders, mission, benchmarked competitors and most recent product launch of the company"},
      processor="pro-fast"
  )
  print(f"Run ID: {task_run.run_id}")

  run_result = client.task_run.result(task_run.run_id, api_timeout=3600)
  print(run_result.output)
  ```

  ```python
  task_run = client.task_run.create(
      input="Parallel Web Systems (parallel.ai)",
      task_spec={"output_schema":"A comprehensive analysis of the industry of the company, including growth factors and major competitors."},
      processor="ultra-fast"
  )
  print(f"Run ID: {task_run.run_id}")

  run_result = client.task_run.result(task_run.run_id, api_timeout=3600)
  print(run_result.output)
  ```
    

### Multi-Processor Workflows

You can combine processors in sequence to support more advanced workflows.

Start by retrieving basic information with `base`:

```python
task_run_base = client.task_run.create(
    input="Pfizer",
    task_spec={"output_schema":"Who are the current executive leaders at Pfizer? Include their full name and title. Ensure that you retrieve this information from a reliable source, such as major news outlets or the company website."},
    processor="base"
)
print(f"Run ID: {task_run_base.run_id}")

base_result = client.task_run.result(task_run_base.run_id, api_timeout=3600)
print(base_result.output)
```

Then use the result as input to `core` to generate detailed background information:

```python
import json

task_run = client.task_run.create(
    input=json.dumps(base_result.output.content),
    task_spec={"output_schema":"For the executive provided, find their professional background tenure at their current company, and notable strategic responsibilities."},
    processor="pro"
)
print(f"Run ID: {task_run.run_id}")

run_result = client.task_run.result(task_run.run_id, api_timeout=3600)
print(run_result.output)
```

This lets you use a lower compute processor for initial retrieval, then switch to a more capable one for analysis and context-building.
