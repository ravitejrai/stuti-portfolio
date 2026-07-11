import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"],
      },
      colors: {
        ink: {
          DEFAULT: "rgb(var(--ink) / <alpha-value>)",
          muted: "rgb(var(--ink-muted) / <alpha-value>)",
          subtle: "rgb(var(--ink-subtle) / <alpha-value>)",
        },
        canvas: {
          DEFAULT: "rgb(var(--canvas) / <alpha-value>)",
          raised: "rgb(var(--canvas-raised) / <alpha-value>)",
          sunken: "rgb(var(--canvas-sunken) / <alpha-value>)",
        },
        line: "rgb(var(--line) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
      },
      fontSize: {
        display: ["clamp(3rem, 9vw, 8.5rem)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
      },
      maxWidth: { content: "1280px", prose: "68ch" },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: { shimmer: "shimmer 8s linear infinite" },
    },
  },
  plugins: [],
};

export default config;
