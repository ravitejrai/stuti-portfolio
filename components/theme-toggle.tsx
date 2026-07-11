"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-line text-ink-muted hover:text-ink hover:border-ink/40 transition-colors"
    >
      {mounted ? (isDark ? <Sun size={16} /> : <Moon size={16} />) : <Moon size={16} />}
    </button>
  );
}
