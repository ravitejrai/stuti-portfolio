import Link from "next/link";
import { profile } from "@/lib/profile";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line mt-32">
      <div className="mx-auto max-w-content px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-6 space-y-4">
          <p className="font-serif text-3xl md:text-4xl leading-tight">
            Have a problem worth solving?
          </p>
          <p className="text-ink-muted max-w-prose">
            I'm currently open to product design roles, consulting, and selective
            collaborations across Europe.
          </p>
          <Link
            href={`mailto:${profile.email}`}
            className="inline-block text-lg underline decoration-ink-subtle underline-offset-4 hover:decoration-ink transition-colors"
          >
            {profile.email}
          </Link>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-widest text-ink-subtle mb-4">
            Elsewhere
          </p>
          <ul className="space-y-2">
            {profile.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-ink hover:text-accent transition-colors"
                >
                  {s.label} →
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-widest text-ink-subtle mb-4">
            Studio
          </p>
          <ul className="space-y-2 text-ink-muted">
            <li>{profile.location}</li>
            <li>CET · GMT+1</li>
            <li>Available remote / hybrid</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto max-w-content px-6 lg:px-10 py-6 flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center text-xs text-ink-subtle">
          <p>
            © {year} {profile.name}. Designed and built in Stockholm.
          </p>
          <p className="font-mono">v1.0 · last updated {new Date().toLocaleDateString("en-GB", { month: "short", year: "numeric" })}</p>
        </div>
      </div>
    </footer>
  );
}
