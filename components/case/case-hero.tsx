"use client";

import { motion } from "framer-motion";
import type { CaseStudy } from "@/lib/case-studies";

const ease = [0.22, 1, 0.36, 1];

export function CaseHero({ c }: { c: CaseStudy }) {
  return (
    <header className="mx-auto max-w-content px-6 lg:px-10 mb-16 md:mb-24">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
        className="font-mono text-xs uppercase tracking-widest text-ink-subtle mb-6"
      >
        Case study {c.index} · {c.year} · {c.role}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease, delay: 0.05 }}
        className="font-serif text-5xl md:text-7xl text-ink leading-[1.02] max-w-[18ch]"
      >
        {c.title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease, delay: 0.15 }}
        className="mt-8 max-w-prose text-xl text-ink-muted leading-relaxed"
      >
        {c.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease, delay: 0.25 }}
        className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 border-t border-line pt-8"
      >
        <Meta label="Client" value={c.client} />
        <Meta label="Role" value={c.role} />
        <Meta label="Duration" value={c.duration} />
        <Meta label="Category" value={c.category} />
      </motion.div>

      {/* Cover band */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease, delay: 0.3 }}
        className="mt-16 relative aspect-[16/9] md:aspect-[16/7] rounded-2xl overflow-hidden border border-line"
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${c.cover.from}, ${c.cover.to})`,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_60%)]" />
        <div className="absolute inset-0 flex items-end p-8">
          <div className="flex w-full justify-between items-end text-white/80 font-mono text-xs">
            <span>{c.client.toLowerCase()}.case-study</span>
            <span>{c.year}</span>
          </div>
        </div>
      </motion.div>

      {/* Tags */}
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease, delay: 0.45 }}
        className="mt-8 flex flex-wrap gap-2"
      >
        {c.tags.map((t) => (
          <li
            key={t}
            className="text-xs uppercase tracking-widest text-ink-muted border border-line rounded-full px-3 py-1.5"
          >
            {t}
          </li>
        ))}
      </motion.ul>
    </header>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1.5">
      <p className="text-xs uppercase tracking-widest text-ink-subtle">{label}</p>
      <p className="text-ink">{value}</p>
    </div>
  );
}
