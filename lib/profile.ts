export const profile = {
  name: "Stuti Gautam",
  role: "UX Designer",
  location: "Stockholm, Sweden",
  email: "stuti.gautam90@gmail.com",
  phone: null as string | null,
  resumeUrl: "/stuti-gautam-resume.pdf",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/stuti-gautam-948b9776" },
    { label: "Dribbble", href: "https://dribbble.com/stuti90" },
    { label: "Email", href: "mailto:stuti.gautam90@gmail.com" },
  ],
  headline:
    "Designing intuitive experiences where user needs, business goals, and technology meet.",
  intro:
    "I'm Stuti, a UX designer with 4+ years of experience shaping web and mobile products. I combine user-centered research, visual craft, and AI-assisted workflows to ship work that's calm, considered, and quietly ambitious.",
};

export const experience = [
  {
    company: "Grantigo",
    role: "UI/UX Design Intern",
    period: "Jan 2026 — May 2026",
    location: "Stockholm, Sweden",
    summary:
      "Leading the redesign of a grants-discovery platform: accessibility, performance, and an AI-accelerated production pipeline.",
    achievements: [
      "Reached WCAG AA conformance across the public site.",
      "Cut landing-page production time by 42% with a templated WordPress system.",
      "Embedded AI tools (research synthesis, copy drafting) into the design workflow.",
    ],
  },
  {
    company: "Pryvx",
    role: "UI/UX Design Intern",
    period: "Jan 2025 — June 2025",
    location: "Stockholm, Sweden",
    summary:
      "Redesigned the dashboard and collaboration-room experience; contributed components and tokens back to the system.",
    achievements: [
      "Audited 31 dashboard surfaces and shipped a redesign that lifted task completion by 24%.",
      "Reduced time-to-first-room for new users by 38%.",
      "Added 12 documented components to the design system.",
    ],
  },
  {
    company: "CHEMX Education",
    role: "UI/UX Design Intern",
    period: "Feb 2024 — Aug 2024",
    location: "Stockholm, Sweden",
    summary:
      "Redesigned the learner onboarding flow and shipped a scalable design system for the EdTech platform.",
    achievements: [
      "Reduced onboarding time by 30%.",
      "Lifted day-7 retention by 22%.",
      "Built a token-based system covering type, colour, and motion.",
    ],
  },
  {
    company: "LifeBonder",
    role: "UI Designer Intern",
    period: "Apr 2023 — Dec 2023",
    location: "Remote",
    summary:
      "Led the migration from Adobe XD to Figma and rebuilt the component library and documentation.",
    achievements: [
      "Migrated 100% of design assets from Adobe XD to Figma.",
      "Documented 60+ components with anatomy, props, and a11y notes.",
      "Designed A/B variants that improved coupon conversion by 19%.",
    ],
  },
  {
    company: "Banyanbrain Digital",
    role: "UI/UX Designer",
    period: "Jun 2019 — Dec 2021",
    location: "Gurugram, India",
    summary:
      "End-to-end product design across 20+ client engagements: research, IA, visual design, and developer handoff.",
    achievements: [
      "Shipped 20+ products across 8 industries.",
      "Established a personal research-to-handoff toolkit reused across every project.",
      "Maintained pixel-perfect dev handoff with annotated specs and pairing rituals.",
    ],
  },
];

export const skillsGroups = [
  {
    title: "Research",
    items: ["UX Research", "User Testing", "A/B Testing", "Heuristic Audits", "Card Sorting"],
  },
  {
    title: "Design",
    items: [
      "Wireframing",
      "Interaction Design",
      "Prototyping",
      "Accessibility (WCAG)",
      "Motion Design",
    ],
  },
  {
    title: "Systems",
    items: ["Design Systems", "Information Architecture", "Design Tokens", "Documentation"],
  },
  {
    title: "Technology",
    items: ["AI-Assisted Design", "WordPress", "HTML / CSS", "Developer Collaboration"],
  },
];

export const tools = [
  "Figma",
  "Adobe XD",
  "Photoshop",
  "Illustrator",
  "InDesign",
  "WordPress",
  "Framer",
  "Notion",
];

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    body: "Understand the business, the people, and the constraint that matters most.",
  },
  {
    step: "02",
    title: "Research",
    body: "Interview, audit, and observe. Just enough research, never theatre.",
  },
  {
    step: "03",
    title: "Define",
    body: "Frame the problem in a sentence. If it doesn't fit, it isn't framed yet.",
  },
  {
    step: "04",
    title: "Ideate",
    body: "Diverge wide, in low fidelity. Bad ideas are how good ones get found.",
  },
  {
    step: "05",
    title: "Prototype",
    body: "Make it real enough to test. Not a pixel more.",
  },
  { step: "06", title: "Test", body: "With real users, against the original problem." },
  {
    step: "07",
    title: "Iterate",
    body: "Small loops over big rewrites. Every loop is a chance to learn.",
  },
  {
    step: "08",
    title: "Launch",
    body: "Ship, measure, and write down what you learned for the next one.",
  },
];

export const testimonials = [
  {
    quote:
      "Stuti completed her internship at Grantigo as a UX/UI Designer. During her time with us, she demonstrated a positive attitude, strong engagement, and a willingness to contribute to the team. She worked well both independently and collaboratively, showed a sense of responsibility in her assignments, and approached her tasks with dedication and professionalism. We appreciate her contributions during her internship and wish her all the best in her future endeavors.",
    name: "Fredrik Lundberg",
    role: "CEO, Grantigo",
  },
  {
    quote:
      "Stuti is a talented UI/UX Designer who played a key role in advancing our product through user-centered design, wireframing, research, and design system development. She collaborates effectively across teams, adapts quickly in a fast-paced startup environment, and consistently demonstrates professionalism, initiative, and a strong willingness to learn.",
    name: "Terence Wayburne",
    role: "CEO, CHEMX Education",
  },
];

export const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/#experience", label: "Experience" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];
