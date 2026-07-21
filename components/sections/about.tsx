"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-line">
      <div className="mx-auto max-w-content px-6 lg:px-10 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-widest text-ink-subtle mb-4 sticky top-24">
            About
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="md:col-span-8 max-w-prose space-y-6 text-lg md:text-xl text-ink leading-relaxed"
        >
          <p className="font-serif text-3xl md:text-5xl leading-[1.15] text-ink">
            I started in computer science, fell for typography, and stayed for
            the moments when an interface stops feeling like an interface.
          </p>
          <p className="text-ink-muted">
            My route into design wasn't a straight line. An engineering degree
            taught me how systems behave; a love of editorial design taught me
            why hierarchy matters. UX was where the two finally met, and where
            I've spent the last four years.
          </p>
          <p className="text-ink-muted">
            I care most about the <em className="italic">middle</em> of a
            project, after the brief is set and before the polish goes on.
            That's where research turns into structure, structure into flow,
            and flow into the small decisions that make a product feel inevitable.
          </p>
          <p className="text-ink-muted">
            Today I'm based in Stockholm, working on tools that respect the
            people using them. I'm happiest at the intersection of interaction
            design, motion, and quiet, considered systems thinking.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-line">
            <Detail label="Currently" value="Open to roles" />
            <Detail label="Based in" value="Stockholm, SE" />
            <Detail label="Languages" value="English, Hindi" />
            <Detail label="Industries" value="SaaS, EdTech, FinTech" />
            <Detail label="Outside work" value="Cycling, books, time with my daughter" />
            <Detail label="Tea" value="Chai" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <p className="text-xs uppercase tracking-widest text-ink-subtle">{label}</p>
      <p className="text-ink">{value}</p>
    </div>
  );
}
