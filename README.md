# Stuti Gautam — Portfolio

A premium, Scandinavian-minimal portfolio for **Stuti Gautam**, UX designer in Stockholm.

Built with **Next.js 15**, **React 19**, **Tailwind CSS**, **Framer Motion**, and **next-themes** (dark mode).

---

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build && npm start   # production
```

---

## Project structure

```
app/
  layout.tsx              # root layout, fonts, theme provider
  page.tsx                # homepage (composes all sections)
  globals.css             # design tokens (light + dark), grain, marquee
  sitemap.ts / robots.ts  # SEO
  not-found.tsx           # 404
  work/
    page.tsx              # /work — index of all case studies
    [slug]/page.tsx       # /work/<slug> — case study template
components/
  nav.tsx, footer.tsx, theme-toggle.tsx
  sections/               # one file per homepage section
    hero, featured-work, process, timeline, skills,
    about, testimonials, contact
  case/                   # case-study primitives (hero, section, reveal)
lib/
  profile.ts              # Stuti's profile, experience, skills, testimonials
  case-studies.ts         # 5 fully-written case studies
public/
  stuti-gautam-resume.pdf # placeholder — replace with the real CV
```

---

## Design system

| Token        | Light             | Dark             |
|--------------|-------------------|------------------|
| `canvas`     | `#FAF9F6` (bone)  | `#0A0A0B`        |
| `ink`        | `#111113`         | `#F0F0F2`        |
| `accent`     | indigo 600        | indigo 400       |
| `line`       | warm hairline     | near-black grey  |

- **Type:** Instrument Serif (display) + Inter (body) + JetBrains Mono (meta).
- **Spacing:** Tailwind default scale, content max-width `1280px`, prose `68ch`.
- **Motion:** `cubic-bezier(0.22, 1, 0.36, 1)` ("spring") on most transitions.
- **Grain:** SVG fractal-noise overlay at 3.5% opacity for paper feel.
- **Reduced motion:** all animations collapse via `prefers-reduced-motion`.

---

## Editing content

All copy lives in two TypeScript files — no CMS required.

- `lib/profile.ts` — name, headline, intro, experience, skills, testimonials, nav.
- `lib/case-studies.ts` — every case study end-to-end.

Add a new case study by appending an object to the `caseStudies` array; the
`/work` index, the homepage `Featured Work` section, and the dynamic
`/work/[slug]` page all pick it up automatically.

---

## Replace before going live

- `public/stuti-gautam-resume.pdf` — drop in the real CV.
- `public/portrait.jpg` — add a 4:5 portrait and reference it in
  `components/sections/hero.tsx` (currently a placeholder).
- `app/layout.tsx` → `metadataBase` and social handles.
- Social URLs in `lib/profile.ts` (`socials` array).

---

## Accessibility & performance

- WCAG AA contrast on both themes.
- Visible focus rings (`:focus-visible` outline + offset).
- Skip-to-content link.
- Semantic landmarks (`header`, `main`, `footer`, `article`).
- Static generation for every case study (`generateStaticParams`).
- System-font fallbacks via `next/font` swap strategy.
- Animations gated by `prefers-reduced-motion`.
