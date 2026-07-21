"use client";

import { motion } from "framer-motion";
import { experience, education } from "@/lib/profile";

const ease = [0.22, 1, 0.36, 1];

export function Timeline() {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-line">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-widest text-ink-subtle mb-4">
            Experience
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-ink leading-[1.05]">
            Five years, four teams, one <em className="italic">throughline</em>.
          </h2>
        </div>

        <ol className="relative">
          {/* Vertical rail */}
          <span
            aria-hidden
            className="absolute left-[7px] sm:left-[15px] top-2 bottom-2 w-px bg-line"
          />
          {experience.map((e, i) => (
            <motion.li
              key={e.company + e.period}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease, delay: i * 0.06 }}
              className="relative pl-10 sm:pl-16 pb-12 last:pb-0"
            >
              <span className="absolute left-0 top-1.5 sm:top-2 inline-flex items-center justify-center w-4 sm:w-8 h-4 sm:h-8 rounded-full bg-canvas border border-line">
                <span className="w-1.5 h-1.5 rounded-full bg-ink" />
              </span>

              <div className="grid md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-3 flex md:flex-col gap-3 md:gap-1">
                  <p className="font-mono text-xs text-ink-subtle uppercase tracking-wider">
                    {e.period}
                  </p>
                  <p className="text-xs text-ink-subtle">{e.location}</p>
                </div>

                <div className="md:col-span-9">
                  <h3 className="font-serif text-2xl md:text-3xl text-ink leading-tight">
                    {e.role} <span className="text-ink-subtle">·</span>{" "}
                    <span className="italic">{e.company}</span>
                  </h3>
                  <p className="mt-3 text-ink-muted max-w-prose">{e.summary}</p>

                  <ul className="mt-5 grid gap-2 text-sm text-ink">
                    {e.achievements.map((a) => (
                      <li key={a} className="flex gap-3">
                        <span className="mt-2.5 inline-block w-1 h-1 rounded-full bg-ink-subtle shrink-0" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>

        {/* Education */}
        <div className="mt-20 pt-12 border-t border-line">
          <p className="text-xs uppercase tracking-widest text-ink-subtle mb-8">
            Education
          </p>
          <div className="grid gap-px sm:grid-cols-2 bg-line border border-line rounded-2xl overflow-hidden">
            {education.map((ed, i) => (
              <motion.div
                key={ed.school}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease, delay: i * 0.06 }}
                className="bg-canvas p-6 md:p-8"
              >
                <p className="font-mono text-xs text-ink-subtle uppercase tracking-wider">
                  {ed.period}
                </p>
                <h3 className="mt-3 font-serif text-xl md:text-2xl text-ink leading-tight">
                  {ed.program}
                </h3>
                <p className="mt-2 text-ink-muted">{ed.school}</p>
                <p className="mt-1 text-xs text-ink-subtle">{ed.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
