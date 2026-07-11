"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/profile";

const ease = [0.22, 1, 0.36, 1];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 border-t border-line bg-canvas-sunken">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-widest text-ink-subtle mb-4">
            How I work
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-ink leading-[1.05]">
            A process, <em className="italic">not</em> a script.
          </h2>
          <p className="mt-6 text-ink-muted text-lg max-w-prose">
            Every project is different. The shape of the work isn't, eight loops
            from the first conversation to the post-launch retro.
          </p>
        </div>

        <ol className="grid gap-px sm:grid-cols-2 lg:grid-cols-4 bg-line border border-line rounded-2xl overflow-hidden">
          {processSteps.map((s, i) => (
            <motion.li
              key={s.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease, delay: (i % 4) * 0.05 }}
              className="group relative bg-canvas p-6 lg:p-8 hover:bg-canvas-raised transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-xs text-ink-subtle">{s.step}</span>
                <span className="w-6 h-6 rounded-full border border-line group-hover:border-ink/40 group-hover:bg-ink group-hover:text-canvas flex items-center justify-center transition-all">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M1 5h8M5 1l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="font-serif text-2xl text-ink mb-2">{s.title}</h3>
              <p className="text-sm text-ink-muted leading-relaxed">{s.body}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
