"use client";

import { Reveal } from "./reveal";

export function CaseSection({
  number,
  title,
  children,
  last,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <Reveal>
      <section
        className={[
          "grid gap-8 md:grid-cols-12 py-16 md:py-20",
          last ? "" : "border-b border-line",
        ].join(" ")}
      >
        <div className="md:col-span-3">
          <p className="font-mono text-xs text-ink-subtle">{number}</p>
          <h2 className="mt-2 font-serif text-2xl md:text-3xl text-ink leading-tight">
            {title}
          </h2>
        </div>
        <div className="md:col-span-9 max-w-prose">{children}</div>
      </section>
    </Reveal>
  );
}
