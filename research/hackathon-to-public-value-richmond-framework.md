# The Architecture of Civic Innovation
### How Latent Community Capability Becomes Public Value — and Why It Usually Doesn't

---

## The Premise

Every mid-size American city sits on top of an enormous reserve of human capability that it cannot access.

Richmond, Virginia has 35,000 technology workers. They build financial systems, design user interfaces, architect cloud infrastructure, and ship software that serves millions of people. They do this five days a week, proficiently, for private employers who pay them well. On evenings and weekends, these same people coach soccer teams, serve on HOA boards, and occasionally wonder why the city's 311 system still feels like it was designed in 2004 — because it was.

This is not a Richmond problem. It is a structural feature of how modern economies distribute talent. The labor market is efficient at connecting skilled workers to private-sector demand. It is almost completely incapable of connecting those same workers to civic demand. A senior software engineer at Capital One can build a fraud detection system that processes millions of transactions per second. She cannot fix the fact that her neighborhood's streetlight outage report disappeared into a queue that nobody monitors, because nobody asked her to, nobody would know how to ask her, and even if they did, there is no mechanism through which her expertise could be applied to a municipal system governed by procurement rules, union contracts, and vendor lock-in.

The capabilities exist. The needs exist. They are separated by an institutional gap that is so familiar it has become invisible.

Civic innovation is the attempt to bridge that gap. The question is whether it works.

---

## Does It Work?

The instinctive answer is no. A weekend hackathon — 48 to 72 hours of sleep-deprived coding in a university building — sounds like a preposterous vehicle for solving problems that professional government IT departments, with years of budget authority and institutional knowledge, have failed to solve. The instinct is supported by data: a large-scale empirical study of hackathon projects found that only about 5% remain active five months after the event.[^22] The most famous civic hackathon in American history, Washington D.C.'s "Apps for Democracy," produced 47 applications worth an estimated $2.3 million in development value. The district adopted none of them.[^23]

But the instinct is wrong — or rather, it is right about the default outcome and wrong about the mechanism. The reason most hackathon projects die is not that the format is inherently broken. It is that the format is optimized for one stage of a multi-stage process and the other stages do not exist.

The Innovation Value Chain, adapted from corporate management theory, describes three stages through which any idea must pass to create value: generation, conversion, and diffusion.[^4][^6] Hackathons are extraordinarily good at Stage 1 — idea generation. They bring together diverse people with different expertise, give them a shared problem, impose a time constraint that forces decisiveness, and produce a remarkable quantity of novel approaches in a very short period. They are adequate at Stage 2 — converting an idea into a working prototype. And they do essentially nothing for Stage 3 — diffusing the innovation into the institution that needs it.

Stage 3 is where public value is created. Everything before it is preparation.

---

## The Nudge Cases: When a Weekend Is Enough

Before exploring why Stage 3 fails so consistently, it is worth understanding the cases where it doesn't — because they reveal something important about the nature of civic problems.

Sometimes, what a city is missing is not a system, not a budget, and not a political mandate. What it is missing is an idea. Specifically, it is missing a non-obvious connection between two things that already exist — a connection that, once pointed out, seems obvious, but that no one inside the institution had the vantage point to see.

Consider what happens when a traffic engineer, a data scientist, and a transit rider sit in the same room for the first time. The traffic engineer knows that the city collects GPS pings from every bus in its fleet, updated every 30 seconds. The data scientist knows that those pings, combined with historical schedule data, can generate real-time arrival predictions with high accuracy. The transit rider knows that the single most frustrating part of riding the bus is not knowing whether it is coming. None of them, individually, can solve the problem. The engineer doesn't know what a prediction model looks like. The data scientist doesn't know the data exists. The rider doesn't know either of the other two. Put them in a room for a weekend, and they produce a working prototype of a real-time bus tracker. It is ugly. It is fragile. It is also the first time anyone has demonstrated, concretely, that the city's existing infrastructure could deliver this capability. From there, the transit authority can take it — because the hard part was not the engineering. The hard part was the seeing.

A civic hacker in Philadelphia used open train arrival data to audit the city's official schedule, finding discrepancies that the transit authority's own staff had missed.[^3] The technical work was trivial — a few scripts, a comparison table. But nobody inside the institution had thought to do it, because the institutional frame was "publish the schedule" and the hacker's frame was "verify the schedule." The value was not in the code. It was in the reframe.

These are the nudge cases. They work because the institutional absorptive capacity required is low — the city already has the infrastructure, the data, the authority, and the operational capability to act. What it lacked was the vision to connect A to B. A weekend is enough to provide that vision, especially when the room contains people whose professional expertise makes the connection legible in a way it was not before.

The nudge cases are real and they matter. But they are not the whole story, and designing a civic innovation system around the assumption that every problem is a nudge case is a recipe for producing 47 apps that nobody adopts.

---

## The Unit Economics of Showing Up

To understand why civic innovation works the way it does — inconsistently, with occasional brilliance and frequent abandonment — you have to understand the economics of participation from the perspective of the person who shows up.

A senior developer at a Richmond technology company earns, conservatively, $75 per hour. A weekend hackathon represents roughly 30 to 40 hours of work, which means the opportunity cost of participation is $2,250 to $3,000 in forgone leisure, family time, or freelance income. This is not an abstraction. It is the real cost that a real person is choosing to bear.

What do they get in return?

Researchers who have studied hackathon participation identify a mix of intrinsic and extrinsic motivations.[^20][^21] The extrinsic rewards — prizes, job leads, portfolio pieces — are secondary. The primary driver is what the literature calls "ecstatic labor": the emotional high of intense, time-bounded collaboration with skilled peers on a problem that feels meaningful.[^20] Hackathons use "rituals of play and pleasure" to create an environment where highly talented people will do expensive work for free, sustained by the energy of the room and the feeling that what they are building matters.

This is not exploitation, exactly — but it is not far from it. The same research notes a significant "asymmetry of power" between the organizations that sponsor hackathons and the participants who do the work.[^20] In the corporate context, sponsors use hackathons to crowdsource R&D and identify talent for recruitment. In the civic context, the dynamic is more complex: the state is asking citizens to donate professional-grade labor to solve problems that the state has, in some sense, failed to solve with its own resources.

The viability of this exchange can be modeled simply:

**Expected Value = P(implementation) × V(social impact) − C(total cost)**

Where P(implementation) is the probability that the participant's work will actually be adopted and used to create change, V(social impact) is the perceived value of the public good created, and C(total cost) is the full cost of participation — time, opportunity cost, and the emotional labor of navigating institutional indifference.

When P(implementation) is high — when participants can see a credible path from their prototype to real-world use — the expected value is positive even at modest levels of social impact. People will show up, work hard, and come back. When P(implementation) is near zero — when the historical record shows that prototypes are celebrated and then abandoned — the expected value goes negative and must be salvaged through secondary returns: networking, skill acquisition, the social experience itself.

This is exactly what happened with Apps for Democracy. The participants had a great weekend. They built impressive things. The city adopted nothing. The message to the participant community was: your work does not matter to us. The number of high-quality applicants for subsequent civic hackathons in D.C. declined.[^23]

The unit economics are merciless. If you cannot raise P(implementation), you will lose your best participants first — because they are the ones with the highest opportunity cost and the most options. What remains is a self-selecting group for whom the secondary rewards are sufficient, which tends to mean students, career-switchers, and hobbyists. They are valuable. They are not the people who will build the system that transforms how a city delivers services.

The entire design challenge of civic innovation, reduced to one sentence: **raise P(implementation).**

---

## Why P(implementation) Is Usually Zero

The failure of civic hackathon projects to reach implementation is one of the most thoroughly documented phenomena in the civic technology literature. The reasons are structural, not accidental, and they recur with remarkable consistency across cities, countries, and decades.

### The "Second Act" Syndrome

The civic technology writer Bill Hunt coined the term "Second Act" to describe the phase that follows the excitement of the initial hack.[^15] In the First Act, everything is energy and possibility: teams form, ideas spark, prototypes ship, demos get applause. In the Second Act, the project must navigate maintenance, user acquisition, institutional buy-in, legal review, data access negotiations, and the question of who will keep the servers running when the hackathon organizers move on.

The Second Act is where projects die, and they die for a specific reason: the civic technology movement, in its early years, failed to adopt the evaluation tools that the broader nonprofit sector had been using for decades.[^15] Logic models — structured frameworks that map a program's inputs to its activities to its outputs to its outcomes — were standard practice in every other domain of social impact work. Civic technologists, many of whom came from the startup world rather than the nonprofit world, treated them as bureaucratic overhead. The result was projects that had no waypoints for evaluation, no criteria for success or failure, and no mechanism for deciding when to stop.

Without those tools, projects lingered in what Hunt calls a state of "over-engineering and hubris," serving imagined users rather than real ones, adding features instead of validating assumptions, and consuming volunteer time long past the point of diminishing returns.[^15]

### Solutionism

A second, deeper failure mode is what researchers call "solutionism" — the tendency to propose purely technological solutions to complex sociotechnical problems.[^16] The hackathon format, with its emphasis on building and shipping, systematically rewards the production of artifacts (apps, dashboards, tools) over the production of understanding (user research, institutional analysis, stakeholder mapping).

Catherine D'Ignazio's research on feminist approaches to hackathons demonstrated that the default format undervalues what she calls "structured listening" — the slow, relationship-intensive work of understanding a problem from the perspective of the people who live with it.[^16] The result is that hackathon teams tend to build solutions for problems they personally understand, which skews heavily toward the problems of educated, technically literate, relatively affluent people. Scheduling apps. Information directories. Data visualizations. These are useful, but they are not necessarily the highest-value interventions for a city whose most pressing problems involve housing instability, maternal mortality, youth disconnection, and the legacy of redlining.

The solutionism problem is not about bad intentions. It is about the information environment that the hackathon format creates. If you give a room full of developers 48 hours to solve a problem, they will build software. Whether software is the right solution is a question the format does not make time to ask.

### The Feedback Loop Breach

The third failure mode is specific to the "monitorial" model of civic technology — tools that allow citizens to report problems and track government responses. MySociety's FixMyStreet platform is the canonical example: citizens report potholes, broken streetlights, and other infrastructure defects on a public map, and the reports are routed to the responsible government agency.[^18]

The model works when the government can close the loop — when reports are acknowledged, acted on, and resolved in a timeframe that citizens perceive as responsive. The model destroys value when the loop is not closed. An unresolved report on a public platform is not merely a missed opportunity; it is active evidence that the government does not care. Longitudinal studies of FixMyStreet found that the "participation chain" frequently breaks between the demand made and the policy response, and that this breakdown erodes civic trust rather than building it.[^29]

Worse, data from FixMyStreet deployments in Brussels and across the UK revealed a significant digital divide: participation skewed toward higher-income, ethnically homogenous districts.[^30] Without intentional design, crowdsourced civic participation platforms can redirect municipal maintenance resources toward the neighborhoods that are already best served — not because of malice, but because those neighborhoods have the digital access, the time, and the civic confidence to report.

---

## What Predicts Success

The failure modes are well-documented. So are the success factors. Across every studied case of civic innovation that produced durable public value, three conditions were present before the project had code:

1. **A named institutional partner with adoption authority.** Not a "stakeholder" who expressed interest. A specific person in a specific organization who had the power to say yes to a pilot and the operational capacity to execute it. Scotland's CivTech program names government partners before teams start building. Code for America's Clear My Record project — which ultimately dismissed 144,000 criminal convictions — had a defined institutional partner and a legislative hook from day one.[^1]

2. **A defined path to funding beyond the hackathon.** The prototype is not the product. The product requires maintenance, hosting, security review, accessibility compliance, user support, and iteration based on real-world feedback. All of that costs money. GovTech Singapore addressed this through "agile budgeting" — releasing funding in small increments tied to short defined cycles, allowing projects to demonstrate progress before receiving further investment.[^9] Without this, prototypes exist in a financial vacuum.

3. **A mechanism for recurring accountability.** Not a one-time demo. A structured, recurring event at which progress is reported, blockers are surfaced, and next steps are committed to before the room empties. The evidence on hackathon continuation found that immediate high-intensity activity post-event — the burst of commits in the first week — is actually a negative predictor of project survival (−12% chance of continuation).[^31] What works is steady, measured engagement with clear milestones. Burst energy burns out. Cadence sustains.

The empirical research identifies additional factors that predict whether a specific team's project will survive:

- **Skill diversity** on the team increases continuation probability by 71%. Teams that mix technical, design, and domain expertise handle the complexity of real-world implementation.[^31]
- **Skill matching** — when a team's existing skills fit the project's technical requirements — increases continuation probability by 53%.[^31]
- **Expansion intent** — teams that begin with the explicit goal of acquiring users or building something lasting — are more likely to persist.[^31]
- **Team size** has negligible effect. Larger teams are not more durable.[^31]

These are not aspirational recommendations. They are statistical findings from large-scale studies of real hackathon outcomes. They tell us something important: the difference between a hackathon that produces public value and one that produces a fun weekend is not talent, not enthusiasm, and not the quality of the ideas. It is structure — the organizational scaffolding that exists (or does not exist) around the event.

---

## Absorptive Capacity: The Other Side of the Equation

Everything discussed so far concerns the supply side — the participants, their motivations, their projects, and the conditions under which those projects survive. But civic innovation is a two-sided problem. The other side is institutional: can the government actually absorb what is being offered?

The academic literature calls this "absorptive capacity" — the ability of an organization to recognize, assimilate, and apply external knowledge.[^13][^14] Research on school districts and local governance identifies four preconditions for absorptive capacity in the public sector:

**Prior Related Knowledge.** Someone inside the institution must have enough domain expertise to recognize the value of what is being offered. If a city department has no one who understands what an API is, they cannot evaluate — let alone integrate — a prototype that depends on one. This is not a criticism of government employees. It is a structural observation about a workforce that is hired for regulatory compliance, constituent services, and operational management, not for software evaluation.[^14]

**Communication Pathways.** Even when someone inside the institution recognizes the value of an external innovation, there must be a mechanism for that recognition to reach the people who make decisions. In most city governments, information flows vertically within departments and rarely horizontally across them. An innovation lab can evaluate a prototype, but if the lab has no institutional pathway to the procurement office, the IT department, and the department head who controls the budget, the evaluation dies in a silo.[^14]

**Strategic Knowledge Leadership.** Leadership must actively manage how external knowledge is used. This means more than signing off on a pilot. It means directing attention, allocating staff time, resolving conflicts between the innovation and existing operations, and protecting the pilot from the institutional antibodies that treat anything new as a threat to existing workflows.[^14]

**Resources to Partner.** Integration is not free. It requires staff time to evaluate, test, and iterate. It requires budget for hosting, security review, and compliance. It requires the political capital to justify why a department is spending time on a hackathon prototype instead of clearing its backlog. Without dedicated resources, even a willing institution cannot absorb what is offered.[^14]

High-performing agencies treat innovation as an "experimental laboratory" where failure is a source of information rather than a political liability.[^12] Low-performing agencies treat any evidence of imperfection as a threat — and respond to external innovation with defensiveness, delay, and the quiet suffocation of pilots that no one officially kills but no one officially supports.

The absorptive capacity of the receiving institution is, in many cases, the binding constraint on civic innovation — not the quality of the ideas, not the talent of the participants, and not the format of the event.

---

## The Hidden Leverage Point: Problem Reframing

If the nudge cases teach us anything, it is that the most significant leverage point in civic innovation is often not the technology. It is the way the problem is framed.

Many civic problems are "sociotechnical" — they exist at the intersection of social norms, structural inequality, institutional practice, and technology.[^16] A purely technical solution to a sociotechnical problem will fail, not because the technology is wrong, but because the problem definition was incomplete.

The difference matters in practice. "How do we fix potholes faster?" leads to a work order optimization tool. "How do we rethink the citizen experience of reporting infrastructure problems?" leads to a fundamentally different set of questions: Who reports? Who doesn't? Why? What happens to a report after it is filed? Where does the chain of responsibility break? What would it mean for a resident of a historically underserved neighborhood to feel that their report was taken as seriously as a report from the wealthiest neighborhood in the city?

The first framing produces software. The second framing produces understanding — and understanding, in the civic context, is often more valuable than software, because institutions can build or buy software once they understand what they need. What they cannot do is see their own blind spots.

This is why the most effective civic hackathons invest heavily in what happens before coding begins: problem scoping with government stakeholders, structured conversations with the people who experience the problem, and deliberate team formation that includes domain experts alongside technologists.[^10][^16] The hackathon's most important output is not a prototype. It is a room full of people who now see a problem differently than they did 48 hours ago.

---

## Richmond: A Case Study in Attempting to Get It Right

On March 27–29, 2026, approximately 30 teams presented civic technology prototypes at VCU Snead Hall in Richmond, Virginia. Each team addressed a problem drawn from Mayor Danny Avula's Mayoral Action Plan (MAP) — a set of 36 specific goals organized across seven pillars, from "A Thriving City Hall" to "A City That Tells Its Stories."

What makes Richmond's attempt worth studying is not the hackathon itself — hackathons are common — but the combination of assets that Richmond brings to the post-hackathon problem, and the specific system being designed to exploit them.

### The Asset Stack

Richmond possesses a historically rare convergence of conditions:

**A data-driven executive.** Mayor Avula trained as a pediatrician, ran Virginia's COVID-19 vaccine program (taking the state from 50th to top 10), and then ran a $1.8 billion state agency where he reduced background check processing times from months to days. His MAP includes a public data dashboard. In the language of the absorptive capacity literature, this is "strategic knowledge leadership" — the rarest of the four preconditions.

**An enormous untapped talent pool.** Capital One alone employs 7,000+ technologists in the Richmond metro. The broader regional tech workforce exceeds 35,000. None of this talent is organized for civic application. The $8 billion in regional foundation assets — across 755 foundations with $742 million in annual revenue — has zero allocation to civic technology.

**A geographic advantage.** Hundreds of civic technologists from 18F and the U.S. Digital Service were displaced from federal positions in March 2025. They are 90 minutes south of Richmond. Richmond is 35–40% cheaper than Washington. This is a time-limited asset — these people will be absorbed by other employers within 12–18 months.

**Political infrastructure.** Senator Tim Kaine, Richmond's own former mayor, co-chaired Avula's transition and sits on the Senate HELP Committee. Senator Mark Warner, author of the CHIPS Act and champion of the Technology Modernization Fund, is the most tech-literate member of the Senate. Both have personal investment in Richmond's success.

### The Equity Imperative

The I-95 corridor was routed through the heart of Jackson Ward in the 1950s, displacing more than 7,000 people — 10% of Richmond's entire Black population. Residents of formerly redlined neighborhoods today have a life expectancy 23 years shorter than residents of the affluent West End.

This is not context. It is the central design constraint. The FixMyStreet research demonstrated that without intentional structural power for underrepresented communities, civic technology platforms redirect resources toward already-privileged populations.[^30] Any civic innovation system built in Richmond that does not address this dynamic is not merely incomplete — it is actively harmful.

### The Post-Hackathon System

The system proposed for Richmond has three components, each designed to address a specific failure mode:

**A Community Ownership Interface** addresses solutionism by replacing the small-team-picks-winners model with a four-lens grading process: City departments evaluate operational feasibility, nonprofits evaluate mission alignment, businesses evaluate sustainability, and residents evaluate actual need. The goal is to catch the projects that solve the wrong problem before resources are committed. Ideas are tiered — Tier A (ready to implement), Tier B (one missing piece), Tier C (long-term queue) — and surfaced at a public "Handoff" event 30 days post-hackathon where lightweight ownership agreements are signed.[^16]

**A Grants and Context Matrix** addresses the funding vacuum by mapping every MAP pillar to specific federal, state, and philanthropic funding sources — NSF CIVIC, GO Virginia, EDA Build to Scale, Bloomberg What Works Cities, HUD Choice Neighborhoods, the MacArthur Foundation's $100 million democracy commitment announced in March 2026. The matrix ensures that every champion who adopts an idea leaves the Handoff with an answer to "where does the money come from?" before they walk out the door.[^9]

**A Quarterly Continuation Engine** addresses the Second Act syndrome by imposing a structured cadence: Day 0 four-filter evaluation, Week 1 ownership document, Day 30 Handoff, Day 90 progress review, fall university capstone intake, March 2027 Year 2 hackathon. The cadence is designed around the empirical finding that burst energy (high commit activity in the first week) predicts failure, while steady accountability predicts survival.[^31][^15]

The three systems are held together by a backbone entity — the Richmond Civic Innovation Collaborative (RCIC) — governed by a 15-member board with a community supermajority veto: five resident seats, and no supermajority decision can pass without at least three of them. This is the structural response to the digital divide risk.

### The Warning

As of the hackathon close, zero of the 14 problem statements had a named champion — a specific person in a specific institution who had committed to adopt and advance one of the ideas. The champion requirement is the single most reliable predictor of post-hackathon success. It is the mechanism through which P(implementation) rises above zero.

If the system works — if 10 of 30 projects have named champions by Day 30, if 5 have signed ownership agreements by Day 90, if 3 are in active pilot by March 2027 — Richmond will be one of the first American cities to convert hackathon energy into a sustained civic innovation pipeline. If it does not, Richmond will join the long list of cities that generated a great weekend and then moved on.

---

## The Fundamental Question

Civic innovation, at its core, is not about technology. It is about the relationship between a community and its government — and whether that relationship can be something other than transactional.

The default relationship is simple: residents pay taxes, government provides services, and the quality of those services is determined by the government's internal capacity. When the capacity is insufficient — when the 311 system is outdated, when affordable housing compliance goes unmonitored, when residents cannot find the city services they need — the default response is to hire a vendor, issue an RFP, or add it to next year's budget.

Civic innovation proposes an alternative: that the community itself contains the capability to improve its shared systems, and that the role of government is to create the conditions under which that capability can be applied. This is not a libertarian argument for smaller government. It is an argument for a different kind of government — one that functions as a platform for collaborative value creation rather than a sole provider of services.

The research on civic technology is clear about what this requires. It requires that the government be willing to share its data, open its APIs, and make its problems legible to people outside the building.[^3] It requires that external contributors be treated as partners, not volunteers — which means their time must be respected, their work must have a credible path to implementation, and the secondary motivations of "ecstatic labor" cannot be a substitute for structural investment.[^20] It requires that the institutions receiving innovation have the absorptive capacity to evaluate, integrate, and sustain it.[^14] It requires that equity be a design constraint, not an afterthought — because the communities with the greatest needs are the communities with the least access to the civic innovation process.[^30]

And it requires something that no amount of institutional design can guarantee: that enough people believe the effort is worth their time.

The expected value equation — E[V] = P(impl) × V(social) − C(total) — is ultimately a statement about belief. P(implementation) is a probability estimate shaped by history and experience. V(social impact) is a judgment about whether the problem matters. C(total cost) is a personal calculation about what else you could be doing with your weekend.

The way a society answers the question "how do we work together to make our shared world better?" depends entirely on whether the people with the capability to help believe that their help will matter. The unit economics are merciless on this point. If helping doesn't matter — if the prototypes are abandoned, the feedback loops are broken, the institutions are closed — then the rational response is to stop helping. The talent goes home. The capability stays latent. The gap persists.

The evidence says the gap can be closed. Not always. Not easily. Not by hackathons alone. But by systems that take the energy of a weekend and channel it through institutional mechanisms designed to convert ideas into action — with named partners, defined funding, recurring accountability, and the absorptive capacity to actually use what is offered.

The fundamental question is not whether civic innovation works. It is whether we are willing to build the systems that make it work.

---

### References

[^1]: "Civic Hacking," *Open Government Data: The Book*. https://opengovdata.io/2014/civic-hacking/
[^3]: "Civic technology," *Wikipedia*. https://en.wikipedia.org/wiki/Civic_technology
[^4]: "Innovation Value Chain: Definition, Explanation, and Use Cases," *Vation Ventures*. https://www.vationventures.com/glossary/innovation-value-chain-definition-explanation-and-use-cases
[^6]: "Modelling the Innovation Value Chain," *Research Policy* 37(6-7), 961-977. https://ideas.repec.org/a/eee/respol/v37y2008i6-7p961-977.html
[^9]: "Agile Budgeting in the Public Sector," *Agile Business Consortium*. https://www.agilebusiness.org/resource/article-agile-budgeting-in-the-public-sector.html
[^10]: "Hotspot 4 – Turf Wars: What is a Civic Hacker?" *USC Annenberg*. https://civicpaths.uscannenberg.org/hotspot-4-turf-wars-what-is-a-civic-hacker/
[^12]: "The Evolution of Hackathons as an Innovation Tool: A Systematic Analysis," *IJACSA* 16(11). https://thesai.org/Downloads/Volume16No11/Paper_48-The_Evolution_of_Hackathons_as_an_Innovation_Tool.pdf
[^13]: "The Impact of Absorptive Capacity on Innovation," *PMC*. https://pmc.ncbi.nlm.nih.gov/articles/PMC8776093/
[^14]: Farrell & Coburn, "Absorptive capacity: A conceptual framework for understanding district central office learning." https://www.aypf.org/wp-content/uploads/2018/10/Farrell-Coburn_Absorptive-Capacity.pdf
[^15]: Hunt, B., "The End of the Second Act of Civic Tech," *Medium*. https://krusynth.medium.com/the-end-of-the-second-act-of-civic-tech-2d8d9c766309
[^16]: D'Ignazio, C. et al., "Towards a Feminist Hackathon," *Journal of Peer Production*. https://kanarinka.com/wp-content/uploads/2021/01/DIgnazio-et-al.-2016-Towards-a-Feminist-Hackathon-The-Make-the-Breast.pdf
[^18]: "mySociety – written evidence (DAD0024)," *UK Parliament Committees*. https://committees.parliament.uk/writtenevidence/364/pdf/
[^20]: Zukin & Papadantonakis, "Hackathons as Co-optation Ritual: Socializing Workers and Institutionalizing Innovation in the 'New' Economy," *CUNY Academic Works*. https://academicworks.cuny.edu/cgi/viewcontent.cgi?article=1575&context=gc_pubs
[^21]: Zukin & Papadantonakis, "Hackathons as Co-optation Ritual," *ResearchGate*. https://www.researchgate.net/publication/321494863
[^22]: "Factors influencing post-hackathon project continuation in an African corporate setting," *SciELO South Africa*. https://scielo.org.za/scielo.php?script=sci_arttext&pid=S2077-72132023000100004
[^23]: Turkel, "Civic Hackathons as Deliberative Democracy," *University of Delaware*. https://bpb-us-w2.wpmucdn.com/sites.udel.edu/dist/4/10696/files/2019/04/Turkel_Hackathon-2j9uu8g.pdf
[^29]: "The Haves and the Have Nots: Civic Technologies and the Pathways to Government Responsiveness," *World Bank*. https://openknowledge.worldbank.org/bitstream/handle/10986/38086/IDU0348c81df0b38e044840b3770b94dced6276f.pdf
[^30]: "FixMyStreet Brussels: Socio-Demographic Inequality in Crowdsourced Civic Participation," *ResearchGate*. https://www.researchgate.net/publication/316030107
[^31]: Nolte et al., "Identifying Factors to Promote Hackathon Project Continuation," *CSCW 2020*. https://hackathon-planning-kit.org/files/Nolte-CSCW-2020_2.pdf

---

*Prepared in connection with Hack for RVA · March 27–29, 2026 · VCU Snead Hall, Richmond, VA*
*City of Richmond · AI Ready RVA · Plan RVA · VCU School of Business*
*Organized by Flying Pig Labs · April 2026*
