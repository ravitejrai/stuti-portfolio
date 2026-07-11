"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/profile";
import { ThemeToggle } from "./theme-toggle";

export function Nav() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-spring",
        scrolled
          ? "backdrop-blur-xl bg-canvas/70 border-b border-line"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-content px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-2 font-medium tracking-tight"
          aria-label="Home"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-ink group-hover:bg-accent transition-colors" />
          <span>{profile.name}</span>
          <span className="hidden sm:inline text-ink-subtle">, {profile.role}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-ink-muted hover:text-ink transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
          <Link
            href="/#contact"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-ink text-canvas px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Get in touch
          </Link>
        </nav>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 -mr-2 text-ink"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-line bg-canvas"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-3 text-lg text-ink"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-3 pt-3">
                <ThemeToggle />
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-ink text-canvas px-4 py-2 text-sm font-medium"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
