import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { CaseHero } from "@/components/case/case-hero";
import { CaseSection } from "@/components/case/case-section";
import { Reveal } from "@/components/case/reveal";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) return { title: "Not found" };
  return {
    title: c.title,
    description: c.tagline,
    openGraph: { title: c.title, description: c.tagline },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) notFound();

  const idx = caseStudies.findIndex((x) => x.slug === c.slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  // Keep section numbers continuous when the Wireframes section is hidden.
  const sec = (num: number) =>
    String(c.hideWireframes && num > 7 ? num - 1 : num).padStart(2, "0");

  return (
    <article className="pt-28 pb-0">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <Link
          href="/work"
          className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-ink mb-10"
        >
          <ArrowLeft size={14} /> All work
        </Link>
      </div>

      <CaseHero c={c} />

      <div className="mx-auto max-w-content px-6 lg:px-10">
        <CaseSection number="01" title="Overview">
          <p className="text-xl md:text-2xl text-ink leading-relaxed font-serif">
            {c.overview}
          </p>
        </CaseSection>

        <CaseSection number="02" title="The Problem">
          <p className="text-lg text-ink leading-relaxed">{c.problem}</p>
        </CaseSection>

        <CaseSection number="03" title="Research">
          <ul className="space-y-3">
            {c.research.map((r) => (
              <li key={r} className="flex gap-4 text-ink leading-relaxed">
                <span className="font-mono text-xs text-ink-subtle pt-1.5 shrink-0">
                  ─
                </span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </CaseSection>

        <CaseSection number="04" title="User Insights">
          <div className="grid gap-6 md:grid-cols-2">
            {c.insights.map((q, i) => (
              <Reveal key={i} className="rounded-2xl border border-line bg-canvas-raised p-8">
                <span aria-hidden className="font-serif text-5xl text-ink-subtle leading-none">
                  "
                </span>
                <p className="font-serif text-xl md:text-2xl text-ink leading-snug mt-2">
                  {q.quote}
                </p>
                <p className="mt-6 text-xs uppercase tracking-widest text-ink-subtle">
                  {q.source}
                </p>
              </Reveal>
            ))}
          </div>
        </CaseSection>

        <CaseSection number="05" title="Competitive Analysis">
          <p className="text-lg text-ink leading-relaxed">{c.competitive}</p>
        </CaseSection>

        <CaseSection number="06" title="User Flow">
          <ol className="space-y-4">
            {c.userFlow.map((step, i) => (
              <li
                key={step}
                className="flex gap-5 text-ink leading-relaxed border-b border-line pb-4 last:border-0"
              >
                <span className="font-mono text-sm text-ink-subtle shrink-0 w-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </CaseSection>

        <CaseSection number="07" title="Wireframes" hidden={c.hideWireframes}>
          <p className="text-lg text-ink leading-relaxed">{c.wireframes}</p>
          {c.wireframeImages && c.wireframeImages.length > 0 ? (
            <div className="mt-8 space-y-6">
              {c.wireframeImages.map((img) => (
                <div
                  key={img.src}
                  className="rounded-xl border border-line bg-canvas-sunken overflow-hidden"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={1600}
                    height={1000}
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    className={
                      img.zoom
                        ? "w-full h-auto scale-110 origin-center"
                        : "w-full h-auto"
                    }
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="aspect-[4/3] rounded-xl border border-line bg-canvas-sunken relative overflow-hidden"
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "linear-gradient(0deg, transparent 95%, rgb(var(--ink-subtle)) 95%), linear-gradient(90deg, transparent 95%, rgb(var(--ink-subtle)) 95%)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  <div className="absolute bottom-3 left-3 text-[11px] font-mono text-ink-subtle">
                    wireframe-0{n}.fig
                  </div>
                </div>
              ))}
            </div>
          )}
        </CaseSection>

        <CaseSection number={sec(8)} title="Design Iterations">
          <div className="space-y-px bg-line border border-line rounded-2xl overflow-hidden">
            {c.iterations.map((it) => (
              <div key={it.title} className="bg-canvas-raised p-6 md:p-8">
                <h4 className="font-serif text-xl text-ink mb-2">{it.title}</h4>
                <p className="text-ink-muted leading-relaxed">{it.body}</p>
              </div>
            ))}
          </div>
        </CaseSection>

        <CaseSection number={sec(9)} title="Final UI">
          <p className="text-lg text-ink leading-relaxed">{c.finalUI}</p>
          {c.gallery && c.gallery.length > 0 ? (
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {c.gallery.map((img) => (
                <div
                  key={img.src}
                  className="rounded-2xl border border-line bg-canvas-sunken overflow-hidden"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={1200}
                    height={900}
                    sizes="(max-width: 640px) 100vw, 640px"
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div
              className="mt-8 aspect-[16/10] rounded-2xl border border-line relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${c.cover.from}, ${c.cover.to})`,
              }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_60%)]" />
              <div className="absolute bottom-4 left-5 text-white/80 font-mono text-xs">
                {c.client} · final-ui.fig
              </div>
            </div>
          )}
        </CaseSection>

        <CaseSection number={sec(10)} title="Prototype">
          <p className="text-lg text-ink leading-relaxed">{c.prototype}</p>
        </CaseSection>

        <CaseSection number={sec(11)} title="Impact">
          <div className="grid gap-px sm:grid-cols-3 bg-line border border-line rounded-2xl overflow-hidden">
            {c.impact.map((m) => (
              <div key={m.label} className="bg-canvas-raised p-8">
                <p className="font-serif text-5xl md:text-6xl text-ink leading-none">
                  {m.value}
                </p>
                <p className="mt-4 text-sm text-ink-muted">{m.label}</p>
              </div>
            ))}
          </div>
        </CaseSection>

        <CaseSection number={sec(12)} title="Reflection" last>
          <p className="text-xl md:text-2xl font-serif italic text-ink leading-relaxed">
            {c.reflection}
          </p>
        </CaseSection>

        {/* Next case study */}
        <div className="mt-24 mb-8 border-t border-line pt-8">
          <Link
            href={`/work/${next.slug}`}
            className="group flex flex-col gap-3 py-6"
          >
            <span className="text-xs uppercase tracking-widest text-ink-subtle">
              Next case study
            </span>
            <span className="flex items-center gap-3 font-serif text-3xl md:text-5xl text-ink group-hover:text-accent transition-colors">
              {next.title}
              <ArrowUpRight
                size={28}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
