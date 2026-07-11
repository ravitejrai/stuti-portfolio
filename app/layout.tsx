import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://stutigautam.design"),
  title: {
    default: "Stuti Gautam, UX Designer, Stockholm",
    template: "%s · Stuti Gautam",
  },
  description:
    "Stuti Gautam is a Stockholm-based UX designer with 4+ years crafting intuitive web and mobile experiences, combining user-centered design, visual craft, and AI-assisted workflows.",
  keywords: [
    "UX Designer",
    "Product Designer",
    "UI Designer",
    "Stockholm",
    "Portfolio",
    "Design Systems",
    "Interaction Design",
  ],
  authors: [{ name: "Stuti Gautam" }],
  openGraph: {
    title: "Stuti Gautam, UX Designer",
    description:
      "Designing intuitive experiences where user needs, business goals, and technology meet.",
    type: "website",
    locale: "en_SE",
  },
  twitter: { card: "summary_large_image", creator: "@stutigautam" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF9F6" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0B" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sans.variable} ${serif.variable} ${mono.variable}`}
    >
      <body className="grain font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:bg-ink focus:text-canvas focus:px-3 focus:py-2 focus:rounded"
          >
            Skip to content
          </a>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
