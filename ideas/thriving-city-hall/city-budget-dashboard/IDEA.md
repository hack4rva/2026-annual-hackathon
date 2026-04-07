# Richmond City Budget Dashboard

**Presenter:** Andre Toleris
**Pillar:** Thriving City Hall — Making the City's Financial Data More Visible
**Tool:** Tableau
**Data Source:** Richmond Open Data Portal
**Hackathon:** Hack for RVA

---

## Problem Statement

Richmond's city budget data exists, but it has never been made easily visible or navigable to the general public or to local elected officials. Understanding where money goes — at the agency, cost center, and account level — has historically required direct access to raw government documents or expertise in public finance.

---

## Solution

Richmond's **first-ever publicly available budget dashboard**, built by pulling raw budget data from the **Richmond Open Data Portal** and visualizing it in **Tableau**. The tool is designed to serve two audiences simultaneously:
1. **The general public** — to understand where their tax money goes
2. **Local elected officials** — to quickly interrogate budget allocations across agencies and fiscal years

---

## What the Dashboard Covers

The dataset spans **FY14 through FY22** (the presenter notes the data is not the most recent available, but the model could accept FY23–25 data as a direct plug-in without rebuilding anything).

Every single data point in the budget is navigable:
- **Fiscal year** (granular, year-by-year)
- **Agency** (every city agency)
- **Cost center** (department-level breakdowns)
- **Account description** (line-item detail — e.g., FICA, full-time permanent staff, conference and conventions)

---

## Demo Walkthrough

### High-Level Budget Trends Over Time
- Users can see macro-level shifts in budget allocation from FY14 to FY22
- Observed trends from the data:
  - More money allocated to **public schools** over time
  - More money allocated to the **police department** over time
  - **Fluctuation** in social services spending

### Agency-Level Drilldown
- Example shown: filtering to the **General Registrar**
  - Clear growth in budget allocation is visible over the last 7 years
  - Can drill into exact line items like conference and convention spending, FICA contributions, and full-time permanent staff costs

### Pillar Mapping via LLM
- A unique feature: the team used an **LLM to map every city agency to a mayoral pillar**
- This allows users to view the budget through the lens of the Mayor's Action Plan

### Click-Through Visual Drill-Down
- Users can click on a specific year and agency block (e.g., Social Services at 7.96% of the budget for a given year)
- Instantly generates a second visual showing all **cost centers and account descriptions** for that agency in that fiscal year
- The experience goes from high-level overview to granular line-item in two clicks

### Additional Features
- **Definitions page** — explains budget terminology for non-expert users
- **Yearly budget change analysis** — highlights year-over-year changes in spending across the full budget

---

## Scalability

The dashboard is built as a reusable model:
- Any new fiscal year's data (e.g., FY23, FY24, FY25) can be **plugged directly into the existing model** without rebuilding the visualizations
- The framework already accommodates every agency, cost center, and account description — it just needs updated source data

---

## Mission

> "We're really excited about making Richmond's financial data more visible and improving government transparency through data visualization."
