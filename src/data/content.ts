export const person = {
  name: "John Jayasankar",
  role: "Lead Product Manager",
  location: "New York",
  email: "johnjayasankar@gmail.com",
  phone: "857-205-2334",
  linkedin: "https://www.linkedin.com/in/johnjayasankar",
  substack: "https://substack.com/@johnjayasankar",
  resume: "/John_Jayasankar_Resume.pdf",
  education: {
    school: "Haverford College",
    degree: "B.A., Economics & Linguistics",
    detail: "GPA 3.9 · cum laude · Linguistics High Honors",
    year: "2022",
  },
};

export const metrics = [
  { value: "3.5h → 8m", label: "expert setup, now an agent" },
  { value: "3×", label: "run volume, same headcount" },
  { value: "$3M+", label: "new and expansion ARR" },
  { value: "$6.5T", label: "notional made eligible" },
];

export type CaseBlock = { title: string; body: string | string[] };

export type CaseStudy = {
  slug: string;
  number: string;
  kicker: string;
  title: string;
  alias: string;
  company: string;
  year: string;
  stage: string;
  summary: string;
  role: string;
  problem: string;
  decision: string;
  outcome: string;
  metrics: { value: string; label: string }[];
  chips: string[];
  flow?: { stage: string; title: string; note: string }[];
  blocks: CaseBlock[];
  featured?: boolean;
};

export const cases: CaseStudy[] = [
  {
    slug: "iport",
    number: "01",
    kicker: "Production AI",
    title: "Operations agent that collapsed a 3.5-hour bottleneck",
    alias: "I-Port",
    company: "Quantile · LSEG",
    year: "2025",
    stage: "0→1 to production",
    featured: true,
    summary:
      "A production AI agent sitting inside a live operations workflow — not beside it. Bounded actions, operator visibility, and a quality bar the system had to hold.",
    role: "Lead Product Manager. Owned 0-to-1 strategy and launch: framed the workflow, defined the agent boundary and success metrics, designed controls and rollout, and tied the product to operating leverage.",
    problem:
      "High-value compression-run setup depended on a lengthy senior-engineering workflow. It was reliable. It was also the throughput constraint — higher volume meant more expert hours the team did not have.",
    decision:
      "Treat the bottleneck as an operations product, not a chatbot. The agent receives authorized live context (run state, configurations, client data) and acts only through typed, bounded surfaces. Operators stay in the loop.",
    outcome:
      "Setup fell from 3.5 hours to 8 minutes. Run volume scaled 3× at constant headcount. Zero AI-initiated configuration errors in the first six months.",
    metrics: [
      { value: "3.5h → 8m", label: "setup time" },
      { value: "3×", label: "run volume" },
      { value: "0", label: "AI config errors / 6 mo" },
    ],
    chips: ["Bounded autonomy", "Human visibility", "Live context", "Production quality metric"],
    flow: [
      { stage: "Before", title: "3.5h expert setup", note: "Senior engineering was the throughput bottleneck." },
      { stage: "Decision", title: "Bounded agent in the workflow", note: "Live context, typed actions, operator control." },
      { stage: "After", title: "8 minutes, 3× volume", note: "Operations absorbed the load without added headcount." },
    ],
    blocks: [
      {
        title: "System pattern",
        body: [
          "Assembles only the context needed for the current run",
          "Uses controlled tool actions rather than open-ended system access",
          "Keeps operator visibility and intervention in the execution loop",
          "Measures setup speed, throughput, and configuration quality in production",
        ],
      },
    ],
  },
  {
    slug: "coco",
    number: "02",
    kicker: "Production AI · MCP",
    title: "Incident agent that returned 750 engineering hours a year",
    alias: "QT CoCo",
    company: "Quantile · LSEG",
    year: "2025",
    stage: "Production",
    summary:
      "Years of production knowledge, two domain MCP servers, and a product that diagnoses before it escalates.",
    role: "Lead Product Manager. Led development and launch, shaped domain boundaries and support workflows, and focused the product on actionable diagnosis — not generic Q&A.",
    problem:
      "Institutional production support depended on deep system knowledge accumulated over years. Investigations were slow and routinely escalated from operations to senior engineering.",
    decision:
      "Build for diagnosis. The agent retrieves evidence through two specialized MCP surfaces, applies six years of production-support knowledge, and sharpens the incident before anyone pages an expert.",
    outcome:
      "Expert investigation fell from 4.5 hours to 11 minutes. Escalations to engineering dropped 78%. 750+ senior engineering hours a year went back to product development.",
    metrics: [
      { value: "4.5h → 11m", label: "investigation" },
      { value: "−78%", label: "escalations" },
      { value: "750+", label: "eng hours / year" },
    ],
    chips: ["Domain MCP", "Evidence first", "Escalation boundary", "Expert time as KPI"],
    flow: [
      { stage: "Before", title: "4.5h investigation", note: "Deep knowledge lived with a small set of experts." },
      { stage: "Decision", title: "MCP-backed evidence triage", note: "Retrieve domain evidence, then escalate only if needed." },
      { stage: "After", title: "11 minutes", note: "Fewer escalations, engineering time returned." },
    ],
    blocks: [
      {
        title: "System pattern",
        body: [
          "Connects the agent to curated operational context through domain-specific MCP",
          "Surfaces evidence relevant to the incident instead of generic answers",
          "Structures triage so issues can be resolved or sharply scoped before escalation",
          "Uses investigation time and escalation rate as production success criteria",
        ],
      },
    ],
  },
  {
    slug: "cross-currency",
    number: "03",
    kicker: "0→1 · Market structure",
    title: "Multilateral compression for $6.5T of trapped notional",
    alias: "LCH SwapAgent",
    company: "Quantile · LSEG",
    year: "2024",
    stage: "0→1 launch",
    summary:
      "A new settlement path turned bilateral exposure into a network-level product — executable, eligible, and valuable.",
    role: "Product Manager. Owned the 0-to-1 launch across product design, eligibility, workflow, institutional onboarding, and GTM.",
    problem:
      "Cross-currency exposures were optimized in bilateral relationships. Network-level offsets sat on the table because there was no settlement structure that could support a multilateral outcome.",
    decision:
      "Launch multilateral cross-currency compression with LCH SwapAgent as settlement counterparty. Optimization value only matters if eligibility and settlement remain operationally executable.",
    outcome:
      "$6.5T of previously ineligible bilateral notional became available across 12 currency pairs. 18 banks achieved 34% greater notional reduction per run than bilateral optimization.",
    metrics: [
      { value: "$6.5T", label: "eligible notional" },
      { value: "18 banks", label: "12 currency pairs" },
      { value: "+34%", label: "notional reduction / run" },
    ],
    chips: ["Multilateral network", "Settlement design", "Eligibility", "Executable outcome"],
    flow: [
      { stage: "Before", title: "Bilateral only", note: "Offsets across the wider network were unreachable." },
      { stage: "Decision", title: "SwapAgent settlement", note: "A structure that could actually clear a multilateral result." },
      { stage: "After", title: "$6.5T unlocked", note: "18 banks, 34% more reduction per run." },
    ],
    blocks: [
      {
        title: "How it works",
        body: [
          "Expands optimization from bilateral pairings to a multilateral network",
          "Uses the settlement structure to support executable outcomes",
          "Applies portfolio optimization across eligible cross-currency positions",
          "Measures value in notional made eligible and notional eliminated",
        ],
      },
    ],
  },
  {
    slug: "valuation",
    number: "04",
    kicker: "Reliability · Infrastructure",
    title: "Dual-source engine that stopped $6T cycles from failing late",
    alias: "Simplified Compression",
    company: "Quantile · LSEG",
    year: "2024",
    stage: "0→1 launch",
    summary:
      "An independent valuation view plus dual-source validation. Data quality became a product control, not an operations cleanup step.",
    role: "Product Manager. Defined product strategy and launched the valuation and validation engine.",
    problem:
      "Institution-scale compression cycles depended on consistent valuation across sources. A discrepancy found late could halt a live cycle and force an expensive resubmission.",
    decision:
      "Create an independent valuation view and compare two sources before the live window. Move failure upstream, while it is still cheap.",
    outcome:
      "Discrepancies surfaced 48 hours earlier. Failed-run resubmissions fell 91% across 24 banks running $6T+ cycles.",
    metrics: [
      { value: "$6T+", label: "cycle notional" },
      { value: "48h", label: "earlier detection" },
      { value: "−91%", label: "resubmissions" },
    ],
    chips: ["Independent valuation", "Dual-source", "Shift-left controls", "Reliability KPI"],
    blocks: [
      {
        title: "How it works",
        body: [
          "Produces an independent valuation view",
          "Compares results across two sources before live execution",
          "Surfaces discrepancies early enough for teams to resolve them",
          "Turns data quality from a late-stage failure into an explicit product control",
        ],
      },
    ],
  },
  {
    slug: "fx-compression",
    number: "05",
    kicker: "FX · Production",
    title: "FX compression with margin intelligence in the optimizer",
    alias: "ForexClear",
    company: "Quantile · LSEG",
    year: "2024",
    stage: "Production",
    summary:
      "A mathematically good proposal still fails if margin inputs disagree. Reliability had to live inside the product.",
    role: "Product Manager. Designed and shipped FX-forward and NDF compression with the ForexClear margin API embedded in the optimizer.",
    problem:
      "FX optimization only creates value if the proposal survives margin constraints, data-quality checks, and live execution. Late validation made good math fail in production.",
    decision:
      "Embed the ForexClear margin API in the optimizer. Add a four-source validation layer around production inputs, before the live window.",
    outcome:
      "100% proposal acceptance across 40+ live runs. Four-source validation cut live-run failures 94%.",
    metrics: [
      { value: "40+", label: "live runs" },
      { value: "100%", label: "proposal acceptance" },
      { value: "−94%", label: "live failures" },
    ],
    chips: ["Embedded margin API", "Four-source validation", "Pre-live quality gate", "Acceptance KPI"],
    blocks: [
      {
        title: "How it works",
        body: [
          "Validates margin constraints inside the optimization workflow",
          "Cross-checks critical data across four sources",
          "Surfaces quality issues before the live production window",
          "Measures success through proposal acceptance and live-run reliability",
        ],
      },
    ],
  },
  {
    slug: "platform",
    number: "06",
    kicker: "Agent platform",
    title: "A reusable control plane for five enterprise agents",
    alias: "AI Platform & Controls",
    company: "Quantile · LSEG",
    year: "2025",
    stage: "Platform",
    summary:
      "One-off agent integrations do not scale. The scarce work was making context, tools, actions, and evaluation consistent.",
    role: "Lead Product Manager. Standardized the product and control pattern across five enterprise systems.",
    problem:
      "Individual AI workflows were becoming one-off integrations. Production scale needed a repeatable way to expose domain context and actions while keeping behavior bounded, observable, and reviewable.",
    decision:
      "Standardize human-supervised architecture: reusable MCP servers, domain APIs, Pydantic-typed actions, deterministic services, HITL gates, and shared evaluation / QA baselines.",
    outcome:
      "New agent workflows reuse proven interfaces instead of starting from zero. Agent development became a product capability, not a sequence of prototypes.",
    metrics: [
      { value: "5", label: "enterprise systems" },
      { value: "MCP + APIs", label: "reusable interfaces" },
      { value: "HITL + evals", label: "production controls" },
    ],
    chips: ["Reusable interfaces", "Typed actions", "Deterministic services", "Evaluation baseline"],
    blocks: [
      {
        title: "Control model",
        body: [
          "Typed actions constrain what an agent can attempt",
          "Deterministic services keep high-consequence logic outside the model",
          "Human approval gates consequential workflow steps",
          "Evaluation and QA baselines create a repeatable path from prototype to production",
        ],
      },
    ],
  },
  {
    slug: "margin-simulator",
    number: "07",
    kicker: "0→1 · Pre-trade",
    title: "Pre-trade simulator that made capital a decision, not a surprise",
    alias: "OpenGamma What-If",
    company: "OpenGamma · Trading Technologies",
    year: "2022–23",
    stage: "0→1",
    summary:
      "Trading teams could see current margin. They could not see the incremental consequence of the next trade — across broker, venue, and product.",
    role: "Product Analyst. Originated and shipped the 0→1 product. Led discovery across trading, treasury, risk, and operations.",
    problem:
      "Front-office teams lacked a simple way to compare incremental margin impact of a proposed trade across brokers, venues, and products before execution.",
    decision:
      "Build a scenario engine validated against native clearing methodologies (CME SPAN and ICE IRM) across OTC and exchange-traded venues, and put it in the trading workflow.",
    outcome:
      "Institutional clients identified allocations with up to 30% lower initial margin for equivalent risk. Discovery and adoption spanned 20+ enterprise clients — banks, asset managers, commodity firms, and hedge funds.",
    metrics: [
      { value: "0→1", label: "originated and shipped" },
      { value: "up to −30%", label: "initial margin" },
      { value: "20+", label: "enterprise clients" },
    ],
    chips: ["Scenario before trade", "Native methodology", "Decision UX", "Capital efficiency"],
    blocks: [
      {
        title: "How it works",
        body: [
          "Models proposed trades before execution",
          "Compares margin outcomes across broker, venue, and product scenarios",
          "Uses native clearing methodologies as validation anchors",
          "Turns capital efficiency into a decision input inside the trading workflow",
        ],
      },
    ],
  },
  {
    slug: "agentfit",
    number: "08",
    kicker: "Independent product",
    title: "AgentFit — when should a workflow get an agent?",
    alias: "Workflow opportunity mapper",
    company: "Independent",
    year: "2026",
    stage: "Interactive prototype",
    summary:
      "“Can AI do this?” is the wrong question. AgentFit makes economics, reversibility, system access, and autonomy explicit before anyone writes an orchestration graph.",
    role: "Product and builder. Designed the decision model, scoring, and the live prototype.",
    problem:
      "Teams jump from “an LLM could help” to “we should build an agent.” The missing product work is scoring repetition, context access, reversibility, consequence, and whether the operating model actually changes.",
    decision:
      "A browser-based mapper that turns those characteristics into a fit score, autonomy recommendation, system pattern, and capacity hypothesis — for discovery, not production authorization.",
    outcome:
      "A working product in this site. It encodes how I prioritize AI work: the scarce skill is finding where software changes the operating model enough to matter.",
    metrics: [
      { value: "Fit score", label: "workflow suitability" },
      { value: "Autonomy", label: "assist → bounded" },
      { value: "Capacity", label: "hours returned" },
    ],
    chips: ["Workflow-first", "Autonomy ladder", "Control pattern", "Economic hypothesis"],
    blocks: [
      {
        title: "Product logic",
        body: [
          "Start from workflow volume and time cost",
          "Score structure, context access, and reversibility before increasing autonomy",
          "Map higher-risk workflows toward supervised patterns and approval gates",
          "Treat the output as a hypothesis for discovery, not a production authorization",
        ],
      },
    ],
  },
];

export const experience = [
  {
    company: "Quantile Technologies",
    logo: "quantile" as const,
    parent: "An LSEG business · acquired for $370M",
    location: "New York",
    roles: [
      {
        title: "Lead Product Manager, Portfolio Optimization",
        dates: "Sep 2025 — Present",
        points: [
          "Shipping production AI agents and a reusable human-supervised architecture across enterprise financial workflows.",
          "Generated $3M+ in new and expansion ARR across rates, FX, and cross-currency optimization.",
        ],
      },
      {
        title: "Product Manager, Portfolio Optimization",
        dates: "Jul 2023 — Sep 2025",
        points: [
          "Owned discovery, strategy, launch, and GTM for optimization products used by global banks.",
          "0→1 launches in multilateral compression, valuation/validation, and FX — then the agent layer on top of those systems.",
        ],
      },
    ],
  },
  {
    company: "OpenGamma",
    logo: "opengamma" as const,
    parent: "Acquired by Trading Technologies",
    location: "New York",
    roles: [
      {
        title: "Product Analyst",
        dates: "Jul 2022 — Jun 2023",
        points: [
          "Originated and shipped a 0→1 pre-trade margin simulator used in front-office workflows.",
          "Led discovery across trading, treasury, risk, and operations; adoption across 20+ enterprise clients.",
        ],
      },
    ],
  },
];

export const earlier = [
  { org: "Wells Fargo", role: "Summer Analyst, FX / Rates Trading", dates: "2021" },
  { org: "Wharton School", role: "Research Assistant — reporting quality & incentives", dates: "2021" },
  { org: "Hartford Funds", role: "Summer Intern, Mutual Funds & ETFs", dates: "Prior" },
  { org: "Ocean Trail Partners", role: "Private Equity Summer Intern", dates: "Prior" },
];

export const writing = [
  {
    tag: "AI product economics",
    title: "How much intelligence is this user action worth?",
    dek: "The best AI product may not use the best model everywhere. Routing intelligence is a unit-economics decision.",
  },
  {
    tag: "Agent controls",
    title: "Autonomy is a product decision, not a model capability.",
    dek: "Evidence, reversibility, and control determine where an agent should be allowed to act.",
  },
  {
    tag: "Fintech × AI",
    title: "The hardest AI products are often infrastructure products.",
    dek: "Data quality, APIs, entitlements, and workflow design decide whether the model actually ships.",
  },
];

export const principles = [
  {
    num: "01",
    title: "Start with the workflow.",
    body: "Map handoffs, exceptions, and the cost of being wrong before choosing a model. If the operating model would not change, it is not an agent problem.",
  },
  {
    num: "02",
    title: "Agents should earn autonomy.",
    body: "Context, bounded tools, deterministic services, and human control are the product. Model capability is one layer. Scope expands when evidence says it should.",
  },
  {
    num: "03",
    title: "Reliability is a feature.",
    body: "In markets and in agents, a late failure is a product failure. Validation, evals, and operator visibility belong in the design, not in the cleanup.",
  },
];

export const skills = {
  ai: ["AI agents", "LLM orchestration", "MCP servers", "Tool calling", "HITL controls", "Agent evals & QA", "Pydantic actions"],
  product: ["0→1 strategy", "Enterprise discovery", "Platform / API products", "GTM", "Pricing & packaging", "Activation"],
  domain: ["Financial infrastructure", "Portfolio optimization", "Derivatives compression", "Margin & risk", "FX / NDFs", "CCP workflows"],
  build: ["Python", "SQL", "AWS", "API design"],
};
