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
  coverImage?: string;                 // hero image (falls back to gradient)
  coverContain?: boolean;              // show full cover image (no crop)
  coverAspect?: string;                // custom cover aspect-ratio, e.g. "8 / 7"
  hideWireframes?: boolean;            // omit the Wireframes section entirely
  wireframeImages?: { src: string; alt: string; zoom?: boolean }[];
  gallery?: { src: string; alt: string }[]; // final-UI screens
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
    year: "2026",
    role: "UI/UX Design Intern",
    duration: "10 weeks",
    category: "Responsive Web · AI Workflow",
    tagline:
      "Rebuilding a grants-discovery platform with an AI-accelerated design pipeline and accessibility at its core.",
    cover: { from: "#0F172A", to: "#4F46E5" },
    coverImage: "/case-studies/grantigo/landing-on-grant-page.png",
    hideWireframes: true,
    gallery: [
      { src: "/case-studies/grantigo/ai-match-analysis.png", alt: "AI match analysis surfacing relevant grants" },
      { src: "/case-studies/grantigo/guided-qualification-questions.png", alt: "Guided qualification questions flow" },
      { src: "/case-studies/grantigo/personalized-roadmap.png", alt: "Personalized funding roadmap" },
    ],
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
    year: "2025",
    role: "UI/UX Design Intern",
    duration: "12 weeks",
    category: "Dashboard · Design System",
    tagline:
      "A privacy-first collaboration dashboard, redesigned around the moments that matter: sharing, reviewing, and trust.",
    cover: { from: "#111827", to: "#10B981" },
    coverImage: "/case-studies/pryvx/pryvx-dashboard.png",
    wireframeImages: [
      { src: "/case-studies/pryvx/pryvx-dashboard-wireframe.png", alt: "Dashboard wireframe" },
    ],
    gallery: [
      { src: "/case-studies/pryvx/pryvx-clean-room.png", alt: "Collaboration clean room" },
      { src: "/case-studies/pryvx/pryvx-overview.png", alt: "Pryvx product overview" },
    ],
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
    coverImage: "/case-studies/chemx/chemx-4.png",
    coverContain: true,
    coverAspect: "8 / 7",
    gallery: [
      { src: "/case-studies/chemx/chemx-2.png", alt: "CHEMX onboarding screen" },
      { src: "/case-studies/chemx/chemx-3.png", alt: "CHEMX lesson screen" },
      { src: "/case-studies/chemx/chemx-5.png", alt: "CHEMX learner experience" },
    ],
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
    slug: "banyanbrain",
    index: "04",
    title: "Travel Booking App",
    client: "Banyanbrain Digital",
    year: "2021",
    role: "UI/UX Designer",
    duration: "10 weeks",
    category: "Mobile App · Travel Booking",
    tagline:
      "A mobile travel-booking app that turns wanderlust into a booked trip in four calm steps: discover, decide, book, done.",
    cover: { from: "#0B132B", to: "#5BC0BE" },
    coverImage: "/case-studies/banyanbrain/travelapp-cover.png",
    wireframeImages: [
      { src: "/case-studies/banyanbrain/tourapp-wireframe.png", alt: "Travel app wireframe", zoom: true },
    ],
    gallery: [
      { src: "/case-studies/banyanbrain/tourapp-home.png", alt: "Home: find your dream destination" },
      { src: "/case-studies/banyanbrain/tourapp-about.png", alt: "Destination detail with reviews" },
      { src: "/case-studies/banyanbrain/tourapp-login.png", alt: "Login screen" },
      { src: "/case-studies/banyanbrain/tourapp-signup.png", alt: "Create account screen" },
      { src: "/case-studies/banyanbrain/tourapp-book.png", alt: "Book your travel form" },
      { src: "/case-studies/banyanbrain/tourapp-payment.png", alt: "Secure payment screen" },
      { src: "/case-studies/banyanbrain/tourapp-confirmation.png", alt: "Booking confirmation screen" },
      { src: "/case-studies/banyanbrain/tourapp-profile.png", alt: "Traveller profile screen" },
    ],
    metrics: [
      { value: "4", label: "Steps from browse to booked" },
      { value: "8", label: "Core screens designed" },
      { value: "100%", label: "Native mobile flows" },
    ],
    overview:
      "Travel is a mobile booking product for leisure travellers. The brief was simple to say and hard to do: help people go from idle browsing to a confirmed booking without the friction that plagues legacy travel sites. I designed the end-to-end experience across onboarding, destination discovery, trip detail, booking, payment, and profile as a calm, image-led flow.",
    problem:
      "Booking a trip is exciting to dream about and painful to complete. Users abandoned at the payment step, forms felt heavier than they needed to be, and destination pages buried the one thing that mattered: is this the trip for me? The app had to make deciding effortless and booking feel trustworthy.",
    research: [
      "Interviewed 8 leisure travellers about their last booking and where it stalled.",
      "Studied drop-off in a comparable booking funnel; payment was the biggest leak.",
      "Audited 6 travel apps for onboarding, discovery, and checkout patterns.",
      "Mapped the emotional arc from inspiration to confirmation.",
    ],
    insights: [
      {
        quote:
          "I'll spend an hour dreaming, then bail the second a form asks for my passport number.",
        source: "Traveller interview, P3",
      },
      {
        quote:
          "Show me the place first. Prices and paperwork can come after I'm sold.",
        source: "Traveller interview, P6",
      },
    ],
    competitive:
      "Airbnb and Booking.com win on inventory but overwhelm on choice; boutique apps win on beauty but thin out on trust. The opportunity was a middle path: editorial, image-first discovery paired with a checkout that feels as safe as a bank app.",
    userFlow: [
      "Login / Sign up → land on a curated home of dream destinations",
      "Browse → open a destination with photos, reviews, and a clear Book a trip action",
      "Book → set dates, travellers, and trip details in one calm form",
      "Pay → choose a method, confirm, and reach the booking-done screen",
      "Profile → manage trips and account details",
    ],
    wireframes:
      "Low-fidelity flows first, focused on the booking spine: home, detail, book, pay, confirm. I pressure-tested form length and the placement of price and the Book action before any visual design.",
    iterations: [
      {
        title: "Iteration 1: Search-first",
        body: "Opened on a search bar like the incumbents. Functional, but it killed the sense of discovery and wanderlust.",
      },
      {
        title: "Iteration 2: Feed-first",
        body: "Led with a scrollable feed of destinations. Beautiful, but users lost the thread to booking.",
      },
      {
        title: "Iteration 3: Discover, then book",
        body: "A curated home that flows straight into a focused booking spine. Inspiration and conversion, reconciled.",
      },
    ],
    finalUI:
      "A polished mobile app: a warm login, a Find your dream destination home, rich destination pages with reviews, a single-screen booking form, a trustworthy payment step, a celebratory confirmation, and a clean profile, all on a purple, image-led system.",
    prototype:
      "A clickable prototype covering the full happy path from login to Your booking is done, used for usability testing and stakeholder demos.",
    impact: [
      { value: "4", label: "Steps from browse to booking" },
      { value: "8", label: "Core screens shipped" },
      { value: "1", label: "Reusable mobile UI kit" },
    ],
    reflection:
      "The trip is booked in the head long before the payment screen. The real design work was protecting that early excitement all the way through checkout; every field I removed was a small act of keeping the dream alive.",
    tags: ["Mobile App", "Travel", "Booking Flow", "UX Research", "Visual Design"],
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
