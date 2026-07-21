"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownToLine, Mail, MapPin } from "lucide-react";
import { profile } from "@/lib/profile";

const ease = [0.22, 1, 0.36, 1];

export function Hero() {
  return (
    <section className="relative pt-36 md:pt-44 pb-24 md:pb-32 overflow-hidden">
      {/* Decorative ambient gradient */}
      <div
        aria-hidden
        className="absolute inset-x-0 -top-40 h-[600px] pointer-events-none opacity-60 dark:opacity-40"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 30%, rgba(99,102,241,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-content px-6 lg:px-10">
        {/* Status row */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-wrap items-center gap-3 text-sm text-ink-muted mb-10"
        >
          <span className="inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new work · 2026
          </span>
          <span className="text-ink-subtle">·</span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={14} /> {profile.location}
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="font-serif text-display text-ink max-w-[18ch]">
          {headline.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.1 + i * 0.05 }}
              className="inline-block mr-[0.25em]"
            >
              {word.italic ? <em className="italic font-serif">{word.text}</em> : word.text}
            </motion.span>
          ))}
        </h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.5 }}
          className="mt-8 max-w-prose text-lg md:text-xl text-ink-muted leading-relaxed"
        >
          {profile.intro}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.65 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-ink text-canvas px-5 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Mail size={16} /> Get in touch
          </Link>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-ink hover:border-ink/40 transition-colors"
          >
            <ArrowDownToLine size={16} /> Download resume
          </a>
        </motion.div>

        {/* Portrait placeholder + sidebar facts */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.75 }}
          className="mt-20 grid gap-6 md:grid-cols-12 items-end"
        >
          <div className="md:col-span-5 lg:col-span-4">
            <div className="group aspect-[4/5] rounded-2xl border border-line bg-canvas-raised relative overflow-hidden">
              <Image
                src="/portrait.jpg"
                alt={`${profile.name}, ${profile.role}`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-[center_20%] grayscale-[0.35] contrast-[1.03] saturate-[0.9] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:saturate-100 group-hover:scale-[1.02]"
              />
              {/* Warm tone + depth to blend with the theme */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-canvas/40 via-transparent to-transparent mix-blend-multiply"
              />
              <div
                aria-hidden
                className="absolute inset-0 ring-1 ring-inset ring-ink/5 rounded-2xl"
              />
            </div>
          </div>

          <dl className="md:col-span-7 lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8">
            {facts.map((f) => (
              <div key={f.label} className="space-y-2">
                <dt className="text-xs uppercase tracking-widest text-ink-subtle">
                  {f.label}
                </dt>
                <dd className="font-serif text-3xl md:text-4xl text-ink leading-none">
                  {f.value}
                </dd>
                <p className="text-xs text-ink-muted">{f.note}</p>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}

const headline: { text: string; italic?: boolean }[] = [
  { text: "Designing" },
  { text: "intuitive", italic: true },
  { text: "experiences" },
  { text: "where" },
  { text: "user" },
  { text: "needs," },
  { text: "business" },
  { text: "goals," },
  { text: "and" },
  { text: "technology", italic: true },
  { text: "meet." },
];

const facts = [
  { label: "Experience", value: "4+", note: "Years across product & agency" },
  { label: "Shipped", value: "20+", note: "Web & mobile products" },
  { label: "Based in", value: "Sthlm", note: "CET · open to relocate" },
  { label: "Focus", value: "UX", note: "Research → systems → polish" },
];
