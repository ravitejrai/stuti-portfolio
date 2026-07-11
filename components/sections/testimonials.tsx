"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/profile";

const ease = [0.22, 1, 0.36, 1];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 border-t border-line bg-canvas-sunken">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-widest text-ink-subtle mb-4">
            Words from collaborators
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-ink leading-[1.05]">
            What it's like to <em className="italic">work together</em>.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name + i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              className="rounded-2xl border border-line bg-canvas p-6 md:p-8 flex flex-col"
            >
              <span aria-hidden className="font-serif text-5xl text-ink-subtle leading-none mb-4">
                "
              </span>
              <blockquote className="text-ink leading-relaxed flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-line">
                <p className="text-ink font-medium">{t.name}</p>
                <p className="text-sm text-ink-muted">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
