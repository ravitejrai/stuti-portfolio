"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { profile } from "@/lib/profile";

const ease = [0.22, 1, 0.36, 1];

export function Contact() {
  const [copied, setCopied] = React.useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable — silently ignore */
    }
  };

  return (
    <section id="contact" className="py-24 md:py-40 border-t border-line">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="max-w-4xl"
        >
          <p className="text-xs uppercase tracking-widest text-ink-subtle mb-6">
            Contact
          </p>
          <h2 className="font-serif text-display text-ink leading-[0.95]">
            Let's make something <em className="italic">deliberate</em>.
          </h2>
          <p className="mt-8 text-lg md:text-xl text-ink-muted max-w-prose">
            I'm currently open to product design roles, consulting, and
            selective collaborations across Europe. The best way to reach me is
            email. I read every message.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-ink text-canvas px-6 py-3.5 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              {profile.email}
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <button
              type="button"
              onClick={copy}
              className="inline-flex items-center gap-2 rounded-full border border-line text-ink px-5 py-3.5 text-sm font-medium hover:border-ink/40 transition-colors"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? "Copied" : "Copy email"}
            </button>
          </div>

          <div className="mt-16 grid sm:grid-cols-3 gap-6 pt-8 border-t border-line">
            {profile.socials.slice(0, 3).map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-2 text-ink hover:text-accent transition-colors"
              >
                <span>{s.label}</span>
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
