# Executive Summary

Civic technology solutions for government procurement face significant documented challenges, including common failure modes, substantial barriers to adoption, and persistent equity gaps. A primary failure mode is the tendency to simply “digitalize paper” without simplifying underlying processes, leading to projects with cost overruns, delays, and low adoption. The effectiveness of AI and automated analytics is severely constrained by poor data quality, a lack of data standards, and reliance on free-text fields. Vendor lock-in presents a major risk, exacerbated by proprietary data formats, limited APIs, and non-competitive procurement practices like 'piggybacking,' which reduce a government's leverage and ability to ensure performance and transparency. Adoption is further hindered by staff-level barriers, including resistance to change, fear of job displacement, risk aversion, and a lack of digital skills to oversee complex AI systems. Systemic and organizational barriers are also pervasive, including siloed procurement offices, outdated legacy infrastructure, and a lack of interoperability standards. These issues disproportionately impact small, minority, and women-owned businesses (MBE/MWBE/SWaM), who already face inequities from opaque processes and slow payment cycles. Opportunities for success lie in adopting open standards, pursuing modular e-procurement architectures, ensuring robust data governance, and intentionally designing for equity. Successful implementations, like Ukraine's Prozorro system, demonstrate that automated monitoring can work when built on quality data and continuous refinement, while cautionary cases highlight the need for user-centered design and strong contractual safeguards.

# Key Failure Modes

Common failure modes for procurement automation tools are well-documented and often stem from a mismatch between the technology and the governmental context. A primary failure is the implementation of platforms that simply “digitalize paper” without simplifying the underlying, often convoluted, procurement tasks. This leads to systems that are difficult to adopt and incompatible with established processes. Such large-scale technology projects frequently fall into a pattern of cost overruns, delays, and delivering lower-than-expected benefits, as seen in the case of Nuevo León, Mexico [1].

Technical shortcomings, particularly around data, are another critical failure point. The effectiveness of AI analytics and automated risk indicators is fundamentally constrained by the quality of input data. Systems often fail because the data is of uneven quality, lacks standardization, and relies heavily on free-text fields, which are difficult for automated systems to parse. This lack of reliable and trustworthy data can stall rollouts and limit the utility of the tools [2].

Vendor lock-in represents a strategic failure, where governments become overly dependent on a single provider. This is caused by proprietary data formats that hinder interoperability, a lack of comprehensive and well-documented APIs, and restrictive contract terms. For instance, some city contracts have been found to severely limit technical support, such as allowing only five support calls [6]. This dynamic reduces a city's leverage to negotiate on performance, transparency, or corrective actions, and can entrench vendors even if their solutions are not fit for purpose [5, 8].

Finally, projects can fail due to a fundamental mismatch with agency needs and risk tolerance. Agencies often hesitate to adopt AI tools due to unclear responsibility for oversight, fear of errors, and concerns about radical transparency that might expose internal mistakes. Without a coherent framework to measure and manage the risks of AI, these concerns can go unaddressed, creating skepticism and stalling adoption [4, 5].

# Staff Adoption Barriers

The adoption of new procurement technologies is frequently impeded by significant human-centric barriers among government staff. A primary obstacle is a general resistance to change, coupled with specific fears about the impact of automation. Staff may fear job displacement as tasks become automated, or they may be risk-averse and fear the personal and professional consequences of a failed technology implementation [4]. There is also a documented fear of “radical transparency,” where new digital systems might expose past mistakes or current inefficiencies, leading to reluctance from those accustomed to more opaque processes [4].

Beyond psychological resistance, there are practical barriers related to skills and existing workflows. Procurement professionals may lack the digital skills necessary to operate new systems effectively. The introduction of AI tools creates an even wider expertise gap, as staff may not be equipped to audit or monitor the algorithms, and the added oversight requirements can erase the promised “efficiency” gains [4, 5]. Insufficient training and inadequate change management are implied as major contributors to this challenge.

Furthermore, deeply ingrained paper-first practices create significant friction that slows down buy-in and participation from both internal users and external vendors. When processes still require bids to be submitted in sealed envelopes, physically delivered, and logged by hand, it creates a logistical burden that discourages participation and makes a transition to a fully digital workflow difficult. This inertia of traditional processes can undermine the value proposition of new digital tools, as the pace of work remains dictated by physical logistics rather than digital urgency [9].

# Organizational And Systemic Barriers

Systemic and organizational challenges within government create a difficult environment for adopting new procurement technologies. A major barrier is the presence of outdated legacy IT infrastructure and a lack of interoperability standards. Procurement offices are often siloed and disconnected from policy and IT departments, making integrated digital transformation difficult [4]. This is compounded by a lack of comprehensive, well-supported, and documented APIs for procured software, which creates significant barriers to connecting different vendor solutions and programmatically using data [5].

The very process of acquiring new technology is often a barrier itself. Many governments use non-competitive pathways like “piggybacking” on other jurisdictions' contracts or using “cooperative purchasing” agreements. These methods often allow governments to bypass competitive solicitations and crucial contract negotiations. As a result, AI-specific terms related to data rights, fairness, and performance are not included, and cities find they lack leverage with vendors [6, 8]. This practice entrenches an ecosystem of traditional government contractors and deepens vendor lock-in [5].

Data governance is another systemic weakness. The lack of a shared understanding among users on how data should be entered and the reliance on free-text fields leads to uneven data quality. This fundamentally limits the effectiveness of automated tools and AI, which depend on systematic, structured data to function reliably [2].

Finally, convoluted and paper-based procurement processes create systemic equity gaps. Opaque processes, unreadable documentation, and the sheer effort required to participate in paper-based bidding disproportionately affect smaller, local, and minority/women-owned businesses (MBE/MWBE/SWaM), discouraging them from competing [3, 9]. Slow payment cycles further disadvantage these firms, which have less capital to absorb delays, making government contracts less appealing [3].

# Ai Accuracy For Contract Data Extraction

## Benchmark Dataset

Contract Understanding Atticus Dataset (CUAD)

## Model Type

AI algorithms and tools used by law firms and government entities, such as Kira Systems, for analyzing contracts.

## Performance Metric

Clause-identification performance

## Accuracy Score

Performance is described as improving over time, but results are variable depending on the specific clause type being identified. No specific quantitative score is provided, but the context emphasizes that it is not yet fully autonomous and requires governance.

## Limitations

Effective AI-assisted review is critically dependent on the complete digitization of contracts, including the use of Optical Character Recognition (OCR) for paper documents. The accuracy of data extraction is contingent upon the quality of the input data and the use of standardized data structures. The process must be paired with robust data pipelines and consistent human validation to ensure reliability and manage risks in a public-sector context.


# Vendor Concentration And Lock In Risks

## Risk Description

Vendor lock-in is a significant risk where a government becomes dependent on a specific technology provider and its proprietary systems. This entrenchment reduces the government's leverage, makes it difficult to switch vendors even if their solutions are not fit for purpose, and can lead to a loss of control over procurement processes and policy.

## Causes

The root causes of vendor lock-in include vendors using proprietary data formats that hinder interoperability, a lack of comprehensive and well-documented APIs, and an ecosystem of entrenched traditional government contractors. The risk is exacerbated by legacy contract structures with restrictive terms, such as limiting support calls, and procurement practices like "cooperative purchasing" or "piggybacking," which allow agencies to bypass competitive bidding and negotiation, leading to the adoption of unfavorable terms.

## Impact On Cities

The negative consequences for municipalities are substantial. They experience reduced leverage in negotiations and find it difficult to advocate for their interests. This can result in being trapped in a rigid, single-vendor platform, unable to integrate components from multiple providers. Furthermore, cities may be unable to renegotiate contracts to include critical AI-specific terms related to bias, fairness, and liability. In some cases, vendors can exploit this dependency to effectively privatize the policy-making process.

## Mitigation Strategies

To avoid or reduce vendor lock-in, it is recommended that governments adopt modular, standards-based e-procurement architectures. They should require open, well-documented APIs to ensure interoperability and avoid single-suite dependencies for the entire procurement cycle. Cities can also insert AI-specific clauses and reporting requirements into their RFPs, demanding details on performance metrics, fairness, and robustness. Ultimately, municipalities can use their procurement power to reject opaque tools and insist on terms that prevent lock-in.


# Equity Gaps For Mbe And Swam Vendors

## Identified Barriers

Minority- and Women-Owned Business Enterprises (MBE/MWBE) and Small, Women-owned, and Minority-owned (SWaM) vendors face significant barriers in government procurement due to longstanding inequities and biases. These include closed and opaque processes, complex and unreadable documentation, and slow payment cycles that hinder their participation and financial stability. Traditional procurement methods are often paper-first, requiring vendors to physically deliver hundreds of pages of sealed bids by a fixed deadline, a process that is logged by hand. This logistical burden disproportionately affects smaller and local businesses, as the effort required can discourage otherwise qualified firms from competing for government contracts.

## Impact Of Automation

Automation can have a dual impact on these equity gaps. If designed poorly, it can exacerbate existing barriers by simply 'digitalizing paper'—replicating complex, legacy processes in a digital format that remains difficult to adopt and navigate, especially for smaller vendors with limited resources. However, if approached with an equity focus, automation can significantly alleviate these barriers. Equity-centered digitization involves creating open and accessible digital systems and processes that are easy to understand and use. By conducting user-centered design research with smaller vendors, governments can build platforms that genuinely lower the barrier to entry, improve transparency, and streamline participation.

## Key Recommendations

To improve equity for MBE/SWaM vendors, several key solutions are recommended. First, governments must ensure vendors are paid on time, as prompt payment is critical for the cash flow and survival of small businesses. Second, procurement processes should be made more accessible by breaking up large procurements into smaller lots and implementing more flexible experience requirements to help SMEs/MWBEs qualify for more bids. Third, a core principle is to 'co-design' digital procurement solutions with MBE/MWBE/SWaM vendors to ensure the tools meet their specific needs. Finally, governments should digitize, link, and publish all procurement information and data, from the planning stage through to implementation, to create a transparent and open marketplace.


# Public Transparency And Data Standards

## Standard Name

Open Contracting Data Standard (OCDS)

## Purpose

The primary goal of the Open Contracting Data Standard (OCDS) is to make government contracting data open, accessible, and usable for public oversight, monitoring, and analysis. By digitizing, linking, and publishing procurement data 'from planning to implementation,' the standard aims to increase transparency and competition. This, in turn, helps reduce barriers to entry for small and medium-sized enterprises (SMEs) and enables civil society, journalists, and auditors to monitor the efficiency and fairness of public spending.

## Key Data Structures

The core principle of the standard is to structure and connect data across the entire procurement lifecycle. This involves creating an integrated data trail that covers all stages, including initial planning, tendering, award, contract signing, implementation, and final payment. Rather than isolated data points, the standard promotes a linked dataset that allows users to follow a single contracting process from start to finish, ensuring a comprehensive view of public transactions. This structure is essential for building a complete picture and enabling meaningful analysis.

## Relevance To Automation

Adopting a data standard like OCDS is foundational for procurement automation. AI and automated analytics tools are highly dependent on the quality and structure of input data; they are constrained by 'uneven, free-text-heavy inputs and lack of shared data-entry practices.' By mandating complete digitization and structured data fields aligned with OCDS, governments create the high-quality data pipelines necessary for AI to perform tasks like risk analysis and compliance checking effectively. Furthermore, standards-based architectures promote modularity and interoperability, preventing vendor lock-in by allowing governments to integrate components from multiple vendors rather than being trapped in a single proprietary platform.


# Successful Implementation Case Studies

## City Or Region

Ukraine

## System Name

Prozorro (with Dozorro monitoring portal)

## Positive Outcomes

The system successfully implemented ex-ante monitoring with 27 unique algorithms and 35 automated risk indicators. This allows officials to track and monitor procurement transactions in real-time, flagging potential issues for investigation, such as incorrectly uploaded tender documentation, missed deadlines, or discriminatory disqualifications. It enables proactive risk screening and streamlines compliance.

## Key Success Factors

Success is attributed to several factors: the use of a sophisticated set of automated risk indicators, a focus on continuous refinement, and an emphasis on data quality. The system's effectiveness is contingent on the complete digitization of procurement data, moving away from free-text fields to systematic, structured data. It also incorporates human-in-the-loop review for issues flagged by the automated system.

## City Or Region

Global (Supreme Audit Institutions)

## System Name

AI tools for ex-ante audits

## Positive Outcomes

Supreme Audit Institutions (SAIs) are using AI to transform audits of government contracts. AI tools can analyze contracts to flag inconsistencies and legal risks, automatically check for the presence of essential clauses like performance guarantees or liability terms, and streamline compliance checks. Furthermore, AI plays a vital role in identifying early red flags for fraud or irregularities, such as unusual payment schedules, significant price deviations, or anomalies in bidder behavior.

## Key Success Factors

The crucial first step and key success factor is the complete digitization of contracts. Technologies like Optical Character Recognition (OCR) are vital for converting non-digital contracts into a format that AI systems can analyze. Success is also dependent on pairing AI analysis with real-time monitoring and human-in-the-loop review to validate the system's findings.


# Failed Or Problematic Implementation Case Studies

## City Or Region

Nuevo León, Mexico

## System Name

Unnamed digital procurement platform

## Documented Problems

The implementation of a digital procurement platform was considered a failure. It suffered from a lack of adoption by users, was incompatible with established government processes, and fell into a recurring pattern for large-scale tech projects: significant cost overruns, project delays, and lower-than-expected benefits.

## Analysis Of Failure

The primary reason for failure was that the project simply “digitalized paper” without simplifying the underlying complex tasks. Instead of re-engineering the process for efficiency, it replicated legacy workflows in a digital format, making it difficult to use and incompatible with how staff worked. This case highlights the critical need for user-centered redesign and process simplification, not just technological replacement.

## City Or Region

Multiple U.S. Cities

## System Name

Various procured AI and procurement tech systems

## Documented Problems

Empirical interviews revealed persistent vendor "lock-in" dynamics, where cities have weak negotiating leverage. This results in unfavorable contract terms, such as one city being limited to only five support calls. Vendors exploit "cooperative purchasing" agreements and "piggybacking" to bypass competitive solicitations, preventing cities from negotiating AI-specific terms for fairness, robustness, and transparency. This entrenches proprietary systems and reduces city control.

## Analysis Of Failure

The failure is systemic, stemming from a combination of legacy procurement practices and vendor strategies. Proprietary data formats and a lack of well-documented APIs from vendors hinder interoperability and create over-reliance on a single provider. Purchasing pathways that avoid competitive negotiation mean that even when cities develop AI-specific RFP requirements, they cannot apply them, leading to a lack of accountability and an inability to mitigate risks associated with AI systems.

## City Or Region

General (U.S. Municipalities)

## System Name

Legacy paper-based procurement systems

## Documented Problems

Many government procurement processes remain fundamentally paper-based, with bids physically delivered, logged by hand, and stored in filing cabinets. This creates significant logistical bottlenecks, slowing down contract awards. The high effort required to participate in these paper-based processes disproportionately affects and discourages smaller, local, and minority-owned businesses (MBE/MWBE/SWaM) from competing for government contracts.

## Analysis Of Failure

This represents a failure to modernize. The persistence of these outdated, manual processes is a systemic problem that creates inherent inefficiencies and barriers to entry. It prevents the realization of benefits that digital systems are meant to provide, such as increased competition, transparency, and speed. The failure is not in a specific digital tool but in the organizational resistance to change and the inertia of paper-first practices.


# Role Of Ai In Auditing And Compliance

## Audit Type

AI is primarily applied in the context of ex-ante (preventive) audits and monitoring, which occur before a procurement contract is finalized. This approach, as highlighted in the practices of Supreme Audit Institutions and systems like Ukraine's Prozorro, allows officials to track and monitor transactions in real-time to identify and address issues proactively, rather than reactively after the fact.

## Ai Function

The AI's function is to automate compliance checks and risk detection by analyzing large volumes of procurement data. This includes scanning contracts to flag inconsistencies, legal risks, or missing essential clauses like performance guarantees and liability terms. It also involves analyzing historical and real-time data to detect fraud patterns, anomalies, and procedural errors, such as incorrectly uploaded tender documents or missed deadlines. Furthermore, AI can be used to automate the evaluation of supplier performance.

## Example Risk Indicators

AI systems can identify and flag numerous risk indicators and red flags. Examples cited include unusual payment schedules, significant deviations in pricing from market norms, irregularities in bidder behavior (such as patterns suggesting collusion), and discriminatory disqualifications that might unfairly narrow the field to a single bidder. These indicators help auditors focus their attention on the highest-risk procurements.

## Benefit

The primary benefit of using AI in procurement auditing is the shift from traditional, reactive oversight to a proactive, preventive, and real-time monitoring model. This enables government agencies to identify and potentially rectify compliance issues, fraud risks, and procedural errors before a contract is awarded, enhancing the integrity and efficiency of the procurement process. It allows for continuous monitoring rather than periodic, post-mortem audits.


# Emerging Governance Practices For Ai Procurement

Cities are beginning to develop and implement new governance practices to manage the unique risks associated with procuring AI and algorithmic systems. A key strategy involves modifying Request for Proposal (RFP) templates to include AI-specific requirements. For example, cities are asking vendors to report 'essential technical details' about their AI systems, including performance metrics and the steps taken to promote fairness, robustness, and explainability. Another emerging practice is the insertion of new contract language that addresses AI risks directly. This includes clauses specifying the datasets used for training, validation metrics, fairness and robustness reporting standards, support service level agreements (SLAs), and clear terms for audit rights and indemnification for harms caused by the AI system. However, the application of these new governance measures is inconsistent. Empirical evidence shows that AI systems acquired under certain cost thresholds or through 'piggybacking' on existing contracts often bypass competitive solicitation and contract negotiation, meaning these crucial AI-specific terms are not included. This leaves public employees feeling they lack the leverage to advocate on behalf of their city and properly manage the risks of the procured technology.

# Technical Prerequisites For Ai Adoption

The foundational technical requirements for successfully implementing AI in public procurement begin with the complete digitization of all contracting documents. This is described as the 'first and most crucial step' and necessitates the use of technologies like Optical Character Recognition (OCR) to convert non-digital, paper-based contracts into machine-readable formats. Secondly, establishing high-quality, standardized data is 'vital' for the effectiveness of any automated tool. This requires moving away from unreliable systems that depend heavily on free-text fields and establishing a shared understanding and practice for data entry to ensure data is systematic and trustworthy. Finally, the underlying infrastructure must support direct, real-time data access for audit and oversight bodies, enabling continuous monitoring. This should be built on state-of-the-art, modular, and flexible e-procurement tools that feature comprehensive, well-documented APIs to ensure interoperability and prevent vendor lock-in.

# Recommendations For Equitable Automation

To implement procurement automation effectively and equitably, government agencies should adopt a multi-faceted strategy. First, focus on data and standards by building high-quality, standardized data pipelines, ideally aligned with open standards like the Open Contracting Data Standard (OCDS). This requires mandating complete digitization of all procurement documents, using technologies like OCR for legacy paper contracts, and prioritizing structured data fields over free-text entry to support reliable analytics. Second, to avoid vendor lock-in and ensure flexibility, agencies must pursue modular technology architectures. This involves requiring open, well-documented APIs from all vendors, using contract terms that prevent lock-in, and avoiding dependency on a single, monolithic suite for the entire procurement lifecycle. Third, establish robust governance and accountability. Contracts for AI systems must include specific clauses detailing the datasets used for training, performance and validation metrics, fairness and robustness reporting, support service level agreements (SLAs), government audit rights, and clear indemnification for harms caused by the system. Independent monitoring and human-in-the-loop oversight are critical. Fourth, embed equity by design. This means co-designing systems with Minority and Women-Owned Business Enterprises (MWBE/SWaM) vendors to ensure usability. It also requires process reforms such as simplifying documentation, breaking up large procurements into smaller lots, relaxing overly restrictive experience requirements, and, crucially, enforcing prompt payment to support the cash flow of smaller businesses. Finally, invest in change management by providing staff training, aligning procurement teams with IT and policy departments, and using staged rollouts to build confidence and incorporate feedback.
