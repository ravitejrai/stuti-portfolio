"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";

const ease = [0.22, 1, 0.36, 1];

export function FeaturedWork() {
  return (
    <section id="work" className="py-24 md:py-32 border-t border-line">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <div className="flex items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-xs uppercase tracking-widest text-ink-subtle mb-4">
              Selected Work · 2019 — 2025
            </p>
            <h2 className="font-serif text-4xl md:text-6xl text-ink max-w-[20ch] leading-[1.05]">
              Five projects, five lessons in <em className="italic">restraint</em>.
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden md:inline-flex shrink-0 items-center gap-2 text-sm text-ink-muted hover:text-ink"
          >
            All projects <ArrowUpRight size={14} />
          </Link>
        </div>

        <ul className="space-y-4">
          {caseStudies.map((c, i) => (
            <motion.li
              key={c.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease, delay: i * 0.05 }}
            >
              <Link
                href={`/work/${c.slug}`}
                className="group block relative rounded-2xl border border-line bg-canvas-raised hover:border-ink/30 transition-colors overflow-hidden"
              >
                {/* Hover gradient wash */}
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${c.cover.from}10, ${c.cover.to}10)`,
                  }}
                />

                <div className="relative grid md:grid-cols-12 gap-6 p-6 md:p-8 items-center">
                  {/* Visual */}
                  <div className="md:col-span-4 relative aspect-[5/3] md:aspect-[4/3] rounded-xl overflow-hidden">
                    <div
                      className="absolute inset-0 transition-transform duration-700 ease-spring group-hover:scale-105"
                      style={{
                        background: `linear-gradient(135deg, ${c.cover.from}, ${c.cover.to})`,
                      }}
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_60%)]" />
                    <div className="absolute bottom-3 left-3 text-white/90 font-mono text-[11px] tracking-wider">
                      {c.index} / {String(caseStudies.length).padStart(2, "0")}
                    </div>
                    <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-[11px] px-2.5 py-1">
                      {c.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-7">
                    <p className="text-xs uppercase tracking-widest text-ink-subtle mb-3">
                      {c.category}
                    </p>
                    <h3 className="font-serif text-2xl md:text-4xl text-ink leading-tight mb-3">
                      {c.title}
                    </h3>
                    <p className="text-ink-muted max-w-prose mb-5">{c.tagline}</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-ink-subtle">
                      {c.metrics.slice(0, 3).map((m) => (
                        <span key={m.label}>
                          <span className="text-ink">{m.value}</span> · {m.label}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="md:col-span-1 hidden md:flex justify-end">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-line text-ink-muted group-hover:bg-ink group-hover:text-canvas group-hover:border-ink transition-all duration-300">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
