export type CaseStudy = {
  slug: string;
  index: string;        // "01", "02"…
  title: string;
  client: string;
  year: string;
  role: string;
  duration: string;
  category: string;
  tagline: string;
  cover: { from: string; to: string }; // gradient stops
  metrics: { value: string; label: string }[];
  overview: string;
  problem: string;
  research: string[];
  insights: { quote: string; source: string }[];
  competitive: string;
  userFlow: string[];
  wireframes: string;
  iterations: { title: string; body: string }[];
  finalUI: string;
  prototype: string;
  impact: { value: string; label: string }[];
  reflection: string;
  tags: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "grantigo",
    index: "01",
    title: "Grantigo Website Experience",
    client: "Grantigo",
    year: "2025",
    role: "UI/UX Design Intern",
    duration: "10 weeks",
    category: "Responsive Web · AI Workflow",
    tagline:
      "Rebuilding a grants-discovery platform with an AI-accelerated design pipeline and accessibility at its core.",
    cover: { from: "#0F172A", to: "#4F46E5" },
    metrics: [
      { value: "AA", label: "WCAG conformance" },
      { value: "−42%", label: "Time-to-publish landing pages" },
      { value: "8", label: "Reusable templates shipped" },
    ],
    overview:
      "Grantigo helps non-profits and SMEs find funding opportunities. The marketing site had grown organically inside WordPress: inconsistent type, slow pages, and barriers for screen-reader users. I led the redesign of the public experience and introduced an AI-assisted workflow that compressed the path from brief to live page.",
    problem:
      "The team was shipping landing pages in days, not hours. Visual inconsistency eroded trust, and accessibility audits flagged colour-contrast and focus-state issues. Content writers were blocked on design throughput.",
    research: [
      "Heuristic audit across 24 existing pages, scored against Nielsen's 10 heuristics.",
      "Stakeholder interviews with marketing, content, and the founder to map publishing pain.",
      "Lighthouse and axe-core sweeps to baseline performance and a11y debt.",
      "Comparative analysis of 6 funding-discovery competitors.",
    ],
    insights: [
      {
        quote:
          "I want to publish a campaign page on a Tuesday, not file a design ticket and wait until Friday.",
        source: "Marketing lead, internal interview",
      },
      {
        quote:
          "Half the visitors land from screen readers or older browsers. The site needs to work, not impress.",
        source: "Founder, kickoff",
      },
    ],
    competitive:
      "Competitors leaned on dense data tables and jargon. The opportunity was to lead with clarity: strong typographic hierarchy, generous whitespace, and a calm, editorial tone that signalled credibility to a non-technical audience.",
    userFlow: [
      "Land → understand the value proposition in under 8 seconds",
      "Browse curated grants by sector and region",
      "Read a grant detail page with eligibility, deadlines, and a clear apply path",
      "Convert via newsletter or consultation booking",
    ],
    wireframes:
      "Greyscale wireframes in Figma at three fidelities: sketches for divergence, mid-fi for IA validation, and high-fi for stakeholder sign-off. AI-generated copy stubs let me pressure-test layouts with realistic content density before visual polish.",
    iterations: [
      {
        title: "Iteration 1: Editorial grid",
        body: "12-column grid with a serif display face. Felt premium but misread as a magazine, not a tool.",
      },
      {
        title: "Iteration 2: Utility-first",
        body: "Pulled the type back, introduced data cards. Lost the warmth that distinguishes Grantigo from enterprise competitors.",
      },
      {
        title: "Iteration 3: Calm utility",
        body: "Final synthesis: warm neutrals, one bold sans, restrained accent. Editorial in voice, utilitarian in structure.",
      },
    ],
    finalUI:
      "A modular WordPress theme with eight content blocks (hero, grant card, eligibility table, testimonial, CTA, FAQ, partner row, footer), each accessibility-tested and documented with usage rules.",
    prototype:
      "High-fidelity Figma prototype covering the homepage, two landing variants, and the grant detail flow on desktop and mobile.",
    impact: [
      { value: "AA", label: "WCAG 2.1 conformance reached" },
      { value: "−42%", label: "Reduction in landing page production time" },
      { value: "+18%", label: "Newsletter conversion on redesigned hero" },
    ],
    reflection:
      "AI tools are most useful as a research partner (drafting copy, exploring tone variants, summarising audits), not as a designer. The bottleneck was never pixels; it was decisions. Building a documented system gave the team permission to move fast without losing coherence.",
    tags: ["Responsive Web", "WordPress", "Accessibility", "AI Workflow", "Design System"],
  },
  {
    slug: "pryvx",
    index: "02",
    title: "Pryvx Dashboard",
    client: "Pryvx",
    year: "2024",
    role: "UI/UX Design Intern",
    duration: "12 weeks",
    category: "Dashboard · Design System",
    tagline:
      "A privacy-first collaboration dashboard, redesigned around the moments that matter: sharing, reviewing, and trust.",
    cover: { from: "#111827", to: "#10B981" },
    metrics: [
      { value: "31", label: "Dashboard surfaces audited" },
      { value: "+24%", label: "Task-completion rate (post-redesign)" },
      { value: "1", label: "Design system, contributed to" },
    ],
    overview:
      "Pryvx is a secure collaboration tool. The original dashboard had grown feature-by-feature, and key flows, collaboration rooms in particular, were buried. I led the audit and redesign, partnered with engineering on tokens, and contributed components back to the system.",
    problem:
      "Power users could navigate, but new users abandoned during onboarding. The collaboration room, the product's headline feature, required four clicks from the dashboard, and its empty state taught users nothing.",
    research: [
      "UX audit of 31 screens against task success and cognitive load.",
      "Moderated usability tests with 8 participants across two personas.",
      "Support ticket review: 3 months, clustered by surface.",
      "Card-sort with 14 internal users to validate IA.",
    ],
    insights: [
      {
        quote:
          "I know the room exists. I just can't remember how I got there last time.",
        source: "Test participant, P4",
      },
      {
        quote:
          "Onboarding tells me what the product is. It doesn't show me what I can do.",
        source: "Test participant, P7",
      },
    ],
    competitive:
      "Notion and Linear set the bar for dense-but-calm dashboards. The lesson: hierarchy through restraint, not through chrome. Pryvx's privacy positioning meant we could lean into a quieter, more deliberate aesthetic.",
    userFlow: [
      "Sign in → land on a contextual dashboard (recent rooms, pending reviews, activity)",
      "Open a collaboration room in one click from the dashboard",
      "Invite, share, and revoke access without leaving the room",
      "Audit trail accessible from any document view",
    ],
    wireframes:
      "Low-fi flows in FigJam to align stakeholders, then mid-fi wireframes covering the dashboard, room, and settings. Pressure-tested with synthetic data at 10×, 100×, and 1000× scale.",
    iterations: [
      {
        title: "Iteration 1: Sidebar-heavy",
        body: "Mirrored Slack-style nav. Familiar, but pushed primary actions below the fold on 13\" laptops.",
      },
      {
        title: "Iteration 2: Command-first",
        body: "Cmd-K palette as the primary entry. Loved by power users, intimidating in usability tests with new accounts.",
      },
      {
        title: "Iteration 3: Progressive surface",
        body: "Dashboard as a calm landing strip; command palette layered on top for those who want it. Best of both.",
      },
    ],
    finalUI:
      "A redesigned dashboard, room view, and settings surface, all built on shared tokens (spacing, type, colour, motion) contributed to the design system.",
    prototype:
      "Interactive Figma prototype covering 12 key flows, with motion specs handed to engineering as Lottie + Framer Motion references.",
    impact: [
      { value: "+24%", label: "Task-completion rate uplift" },
      { value: "−38%", label: "Time-to-first-room for new users" },
      { value: "12", label: "New components added to the system" },
    ],
    reflection:
      "The biggest win was political, not visual. Getting engineering and design on a shared token language meant the next 50 screens would look right by default. Design systems compound, and the most valuable work is often the least visible.",
    tags: ["Dashboard", "Design System", "UX Audit", "Usability Testing", "Tokens"],
  },
  {
    slug: "chemx",
    index: "03",
    title: "CHEMX Education",
    client: "CHEMX",
    year: "2024",
    role: "UI/UX Design Intern",
    duration: "8 weeks",
    category: "Onboarding · EdTech",
    tagline:
      "Reframing onboarding from a checklist into a first lesson, and cutting time-to-value by a third.",
    cover: { from: "#1E293B", to: "#F59E0B" },
    metrics: [
      { value: "−30%", label: "Onboarding time" },
      { value: "+22%", label: "Day-7 retention" },
      { value: "1", label: "Scalable design system shipped" },
    ],
    overview:
      "CHEMX is an online chemistry-learning platform for high-school students. The legacy onboarding asked twelve questions across five screens before the learner saw any content. I redesigned it around the principle that onboarding is the first lesson.",
    problem:
      "Students were churning before reaching their first interactive question. Teachers, the secondary buyers, couldn't see classroom-level value during evaluation. One product had to satisfy two audiences with very different attention budgets.",
    research: [
      "1:1 interviews with 6 students (ages 15–17) and 4 teachers.",
      "Funnel analytics showing a 47% drop on screen 3 of onboarding.",
      "Content audit of the existing question bank to map difficulty curves.",
      "Inspiration scan of Duolingo, Brilliant, and Khan Academy.",
    ],
    insights: [
      {
        quote: "Just let me try a question. I'll tell you if I like it.",
        source: "Student, age 16",
      },
      {
        quote:
          "I need to know in 90 seconds whether this is worth assigning to thirty kids.",
        source: "Teacher interview",
      },
    ],
    competitive:
      "Duolingo proves onboarding can be a product surface, not a form. The opportunity was to borrow that pattern but apply it to chemistry, a domain where 'getting it wrong' carries more weight for older learners.",
    userFlow: [
      "Land → answer one diagnostic question, immediately",
      "See an instant explanation tailored to the answer",
      "Choose a path (exam prep / curiosity / classroom)",
      "Land in lesson 1, with progress already on the board",
    ],
    wireframes:
      "Twelve wireframe variants tested against three personas. We deliberately removed the account-creation step until after the first 'win', a small change with outsized retention impact.",
    iterations: [
      {
        title: "Iteration 1: Quiz-first",
        body: "Diagnostic question as the first screen. Worked for confident students, intimidating for the rest.",
      },
      {
        title: "Iteration 2: Story-led",
        body: "Opened with a real-world chemistry vignette. Beautiful, but pushed the first interaction too far down.",
      },
      {
        title: "Iteration 3: Question-with-hint",
        body: "Diagnostic question with an inline hint and a generous 'show me' affordance. Confidence + agency.",
      },
    ],
    finalUI:
      "A three-screen onboarding (down from five), a teacher-evaluation mode behind a single toggle, and a refreshed lesson UI built on a token-based system covering type, colour, and motion.",
    prototype:
      "Figma prototype with branching logic for student vs. teacher paths, plus a clickable lesson sample for classroom demos.",
    impact: [
      { value: "−30%", label: "Median onboarding time" },
      { value: "+22%", label: "Day-7 retention" },
      { value: "+15%", label: "Teacher evaluation-to-trial conversion" },
    ],
    reflection:
      "Onboarding isn't a wrapper around the product: it is the product, compressed. Designing for two audiences with one flow forced clarity I'd have ducked otherwise.",
    tags: ["Onboarding", "EdTech", "User Research", "Design System", "Retention"],
  },
  {
    slug: "lifebonder",
    index: "04",
    title: "LifeBonder",
    client: "LifeBonder",
    year: "2023",
    role: "UI Designer Intern",
    duration: "9 months",
    category: "Design System · Documentation",
    tagline:
      "Migrating a product from Adobe XD to Figma and turning a sketch library into a documented system.",
    cover: { from: "#0F0F12", to: "#EC4899" },
    metrics: [
      { value: "100%", label: "Adobe XD → Figma migration" },
      { value: "+19%", label: "Coupon conversion (best A/B variant)" },
      { value: "60+", label: "Documented components" },
    ],
    overview:
      "LifeBonder is a community app. I joined as the team was outgrowing Adobe XD and needed a real design system. Over nine months I led the migration to Figma, rebuilt the component library, wrote the documentation, and ran A/B experiments on conversion surfaces.",
    problem:
      "Designers were duplicating components across files; engineers were rebuilding them from screenshots. Every release introduced visual drift. The team needed one source of truth, and the discipline to maintain it.",
    research: [
      "Inventoried every screen across 4 product surfaces.",
      "Interviewed 3 designers and 5 engineers on handoff pain points.",
      "Benchmarked component libraries from Polaris, Material, and Carbon.",
      "Audited the existing XD library for redundancy and naming consistency.",
    ],
    insights: [
      {
        quote:
          "I don't need more components. I need to know which one to use, and why.",
        source: "Engineering lead",
      },
      {
        quote: "Documentation is design. If it's not written down, it doesn't exist.",
        source: "Personal note from week 2",
      },
    ],
    competitive:
      "Shopify Polaris remains the gold standard for documentation tone: opinionated, generous with examples, ruthless about scope. We borrowed the structure (anatomy, do/don't, accessibility, content) and adapted it to a smaller team.",
    userFlow: [
      "Designer opens Figma library → finds a component by name or tag",
      "Reads inline documentation: anatomy, props, do/don't, a11y notes",
      "Drops the component in; design tokens cascade automatically",
      "Engineer reads matching docs in Storybook with identical props",
    ],
    wireframes:
      "The 'wireframe' here was the system architecture itself: a token layer (primitive → semantic → component), a component naming convention, and a contribution model for designers.",
    iterations: [
      {
        title: "Iteration 1: One-to-one port",
        body: "Recreated XD components in Figma, file-for-file. Quick, but inherited every flaw.",
      },
      {
        title: "Iteration 2: Token-first rebuild",
        body: "Reset to primitive tokens (spacing, colour, type) and rebuilt up. Slower, but every later component came cheap.",
      },
      {
        title: "Iteration 3: Documentation as product",
        body: "Treated the docs themselves as the deliverable. If a component wasn't documented, it didn't ship.",
      },
    ],
    finalUI:
      "A Figma library of 60+ components, a tokens file used by both design and engineering, and a documentation site that became the team's onboarding material.",
    prototype:
      "Two A/B variants of the coupon flow, prototyped in Figma and instrumented for conversion testing in production.",
    impact: [
      { value: "100%", label: "Migration to Figma completed" },
      { value: "+19%", label: "Coupon conversion (winning variant)" },
      { value: "−2 days", label: "Average design-to-dev handoff time" },
    ],
    reflection:
      "A design system isn't a Figma file: it's a contract. The hardest part wasn't building the components; it was negotiating the contract with engineering and holding the line when shortcuts were tempting.",
    tags: ["Design System", "Documentation", "A/B Testing", "Figma Migration", "Components"],
  },
  {
    slug: "banyanbrain",
    index: "05",
    title: "Banyanbrain Digital",
    client: "Banyanbrain Digital",
    year: "2019 — 2021",
    role: "UI/UX Designer",
    duration: "2.5 years",
    category: "Agency · Multi-client",
    tagline: "Where the craft began: end-to-end product design across industries, clients, and constraints.",
    cover: { from: "#0B132B", to: "#5BC0BE" },
    metrics: [
      { value: "20+", label: "Client projects shipped" },
      { value: "8", label: "Industries served" },
      { value: "100%", label: "Pixel-perfect dev handoff" },
    ],
    overview:
      "Banyanbrain was the foundation of my UX career. Across two and a half years I designed responsive websites and mobile apps for clients in healthcare, hospitality, retail, and finance, owning research, IA, visual design, and developer handoff.",
    problem:
      "Agency work has one constant: every project is a different product. The challenge was building a personal practice that travelled: methods, files, and rituals that made the second project faster than the first, and the tenth faster than the second.",
    research: [
      "Stakeholder workshops at the start of every engagement.",
      "Lightweight user interviews: 3–5 per project, every project.",
      "Competitive scans tailored to each industry's conventions.",
      "Usability testing on prototypes before development began.",
    ],
    insights: [
      {
        quote:
          "Clients don't buy designs. They buy confidence that the next decision will be a good one.",
        source: "Personal reflection",
      },
      {
        quote:
          "The cheapest user research is the kind you do before the deck is built.",
        source: "Personal reflection",
      },
    ],
    competitive:
      "Each project demanded its own benchmark. The transferable skill was knowing which conventions to honour (e-commerce checkout patterns) and which to question (every dashboard does not need a sidebar).",
    userFlow: [
      "Discovery → align on the one decision the project must enable",
      "Research → just enough, never theatre",
      "Design → low-fi to high-fi, with the client in the room",
      "Handoff → annotated specs, working prototype, dev pairing",
    ],
    wireframes:
      "Built a personal wireframing kit in the first six months and refined it across every subsequent project. The kit cut new-project ramp-up from a week to two days.",
    iterations: [
      {
        title: "Year 1: Pixel craft",
        body: "Focused on visual fidelity and tooling fluency. Learned what 'good' looks like in twenty different contexts.",
      },
      {
        title: "Year 2: Process",
        body: "Learned that process is the deliverable. Repeatable rituals beat heroic effort, every time.",
      },
      {
        title: "Year 3: Strategy",
        body: "Started leading discovery. Realised the most valuable design decision is often whether to design at all.",
      },
    ],
    finalUI:
      "20+ shipped products, each documented with style guides, prototype links, and post-launch reviews, the portfolio that opened the door to specialised work.",
    prototype:
      "Standardised on Figma prototypes for client review: every project shipped with a clickable artefact, not just static screens.",
    impact: [
      { value: "20+", label: "Products shipped" },
      { value: "8", label: "Industries served" },
      { value: "0", label: "Missed handoff deadlines" },
    ],
    reflection:
      "Agency life teaches you breadth before depth. Every cliché about constraints is true: the projects with the tightest budgets produced the sharpest work, and the clients who pushed hardest taught me the most.",
    tags: ["Agency", "Multi-client", "End-to-End", "Research", "Visual Design"],
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
