"use client";

import { motion } from "framer-motion";
import { skillsGroups, tools, languages } from "@/lib/profile";

const ease = [0.22, 1, 0.36, 1];

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-line bg-canvas-sunken">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-widest text-ink-subtle mb-4">
            Skills & Expertise
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-ink leading-[1.05]">
            A toolkit, <em className="italic">deliberately</em> chosen.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillsGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease, delay: i * 0.05 }}
              className="rounded-2xl border border-line bg-canvas p-6 lg:p-8 hover:border-ink/30 transition-colors"
            >
              <p className="font-mono text-xs text-ink-subtle mb-4">
                0{i + 1} · {group.title.toUpperCase()}
              </p>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-baseline justify-between text-ink py-1.5 border-b border-line last:border-0"
                  >
                    <span>{item}</span>
                    <span className="text-ink-subtle text-xs">·</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Tools marquee */}
        <div className="mt-20">
          <p className="text-xs uppercase tracking-widest text-ink-subtle mb-6 text-center">
            Tools of the trade
          </p>
          <div className="relative overflow-hidden mask-marquee">
            <div className="marquee-track flex gap-12 whitespace-nowrap font-serif text-3xl md:text-5xl text-ink/30">
              {[...tools, ...tools].map((t, i) => (
                <span key={i} className="inline-flex items-center gap-12">
                  <span className="italic">{t}</span>
                  <span aria-hidden className="text-ink-subtle">✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="mt-16 flex flex-col sm:flex-row sm:items-center gap-4 justify-center">
          <p className="text-xs uppercase tracking-widest text-ink-subtle">
            Languages
          </p>
          <ul className="flex flex-wrap gap-2 justify-center">
            {languages.map((lang) => (
              <li
                key={lang}
                className="text-sm text-ink border border-line rounded-full px-4 py-1.5 bg-canvas"
              >
                {lang}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
