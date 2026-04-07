# You Get What You Give RVA — Business Partnership Finder

**Presenter:** Sam Pritchard
**Pillar:** Thriving Economy — Smarter Front Door for Starting a Business in Richmond
**Data Source:** Virginia State Corporation Commission (SCC) — ~3.5 million Virginia businesses, filtered to ~14,000 active Richmond businesses
**AI Used:** Claude (for business data enrichment and categorization)
**Inspiration:** Robert Kiyosaki — *"Business and investing are team sports"*; New Radicals — *"You Get What You Give"* (1998)
**Hackathon:** Hack for RVA

---

## Problem Statement

Starting or growing a business in Richmond is hard — not because the businesses aren't there, but because the connections aren't obvious. New entrepreneurs especially lack the network and context to identify:
- Who they should partner with
- Who they could buy from locally
- Who might actually need their services

Sam's personal experience led to this insight: *"Conversations I started as a favor or just to help someone out turned out to be very beneficial for me."* The best way to enter business conversations is by focusing on **what you can give** more than what you can get.

---

## Solution

**You Get What You Give RVA** is a tool where business owners — both new and established — can enter information about their business and receive a curated list of other Richmond businesses across three categories:

1. **Potential Strategic Partners** — businesses where mutual benefit exists; each result includes a statement describing what that mutual benefit might be
2. **Potential Vendors** — Richmond-based businesses the user could buy from locally
3. **Potential Customers** — businesses that might need what the user offers

---

## Demo Walkthrough

### Input
- The user enters information about their business
- Example used: **RVA IT Pros** — an IT services firm focused on new businesses and startups in Richmond

### Results
After clicking to generate results, the tool returns three categorized lists:

#### Strategic Partners
- A list of Richmond businesses with a **mutual benefit statement** for each — explaining what the partnership opportunity is and why it makes sense for both parties

#### Potential Vendors
- Richmond-based businesses that RVA IT Pros **could buy from**, keeping spend local

#### Potential Customers
- Businesses in Richmond that might **need RVA IT Pros' services**

### Download
- The results are downloadable — the presenter notes that business owners "really find them valuable"

---

## Data Pipeline

1. Downloaded data for **every business in Virginia** from the **State Corporation Commission (SCC) site** — approximately **3.5 million businesses**
2. Removed inactive businesses
3. Filtered to businesses with **zip codes in the City of Richmond**
4. Further filtered out businesses in zip codes that are only partially in Richmond — removed those with addresses in Chesterfield, Henrico, Glen Allen, Bon Air, etc.
5. Final dataset: approximately **14,000 active businesses in the City of Richmond**
6. Used **Claude** to enrich the data and **categorize each business** to make it easy to query and match

---

## Vision

> "I hope this tool is the basis for many fruitful and profitable partnership conversations for businesses in Richmond in the years to come."

The tool is designed to lower the barrier to entry for business networking in Richmond — particularly for new entrepreneurs who don't yet have the connections that more established business owners take for granted.
