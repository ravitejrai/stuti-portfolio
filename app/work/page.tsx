import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected case studies: dashboards, design systems, onboarding flows, and responsive web work by Stuti Gautam.",
};

export default function WorkIndexPage() {
  return (
    <section className="pt-36 md:pt-44 pb-24">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <p className="text-xs uppercase tracking-widest text-ink-subtle mb-6">
          Index · {caseStudies.length} projects
        </p>
        <h1 className="font-serif text-5xl md:text-7xl text-ink leading-[1.05] max-w-[20ch]">
          Work, <em className="italic">documented</em>.
        </h1>
        <p className="mt-8 text-lg text-ink-muted max-w-prose">
          Each case study is the long version: problem, research, iterations,
          and what I'd do differently next time.
        </p>

        <ul className="mt-16 divide-y divide-line border-y border-line">
          {caseStudies.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/work/${c.slug}`}
                className="group grid md:grid-cols-12 gap-4 py-8 items-baseline hover:bg-canvas-raised/60 px-2 -mx-2 rounded-lg transition-colors"
              >
                <span className="md:col-span-1 font-mono text-xs text-ink-subtle">
                  {c.index}
                </span>
                <div className="md:col-span-6">
                  <h2 className="font-serif text-2xl md:text-3xl text-ink leading-tight">
                    {c.title}
                  </h2>
                  <p className="text-ink-muted text-sm mt-1.5">{c.tagline}</p>
                </div>
                <span className="md:col-span-2 text-xs uppercase tracking-widest text-ink-subtle">
                  {c.category}
                </span>
                <span className="md:col-span-2 text-xs font-mono text-ink-subtle">
                  {c.year}
                </span>
                <span className="md:col-span-1 flex md:justify-end">
                  <ArrowUpRight
                    size={18}
                    className="text-ink-muted group-hover:text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
