import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Onlynazril — High School Tech Enthusiast",
  description:
    "Portfolio & project hub of Onlynazril: high school tech enthusiast with ~4 years in the game. Linux, TypeScript, Next.js, Drizzle, Bun, Dart & Kotlin.",
  keywords: [
    "Onlynazril",
    "portfolio",
    "Linux",
    "CachyOS",
    "TypeScript",
    "Next.js",
    "Drizzle ORM",
    "Bun",
    "Dart",
    "Kotlin",
    "neobrutalism",
  ],
  openGraph: {
    title: "Onlynazril — High School Tech Enthusiast",
    description:
      "Raw energy. Refusing good enough. ~4 years deep in Linux, web, and mobile engineering.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Onlynazril — High School Tech Enthusiast",
    description:
      "Raw energy. Refusing good enough. ~4 years deep in Linux, web, and mobile engineering.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f2ed" },
    { media: "(prefers-color-scheme: dark)", color: "#131313" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} antialiased`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.setAttribute("data-theme",t)}catch(e){document.documentElement.setAttribute("data-theme","dark")}})();`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-bg text-paper">
        {children}
      </body>
    </html>
  );
}
