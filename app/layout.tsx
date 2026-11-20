import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";
import { MotionProvider } from "@/components/Motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--nf-body", display: "swap" });
const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--nf-display",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--nf-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? profile.site;
const description =
  "Masum Reza is a full-stack software developer building fintech products and fast web apps with React, Next.js, Node.js and Supabase. Backend integrations, APIs, dashboards, VPS deployment, hosting and SEO.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Masum Reza | Full-Stack Developer (React, Next.js, Node.js)",
    template: "%s | Masum Reza",
  },
  description,
  keywords: [
    "Masum Reza",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Backend Developer",
    "REST APIs",
    "Supabase",
    "Redux Toolkit",
    "FinTech dashboard",
    "Freelance web developer",
    "SEO",
    "India",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Masum Reza | Full-Stack Developer",
    description,
    siteName: "Masum Reza",
  },
  twitter: {
    card: "summary_large_image",
    title: "Masum Reza | Full-Stack Developer",
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#F8F9F5",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${display.variable} ${mono.variable}`}
    >
      <body className="overflow-x-scroll bg-bg font-sans leading-relaxed text-ink antialiased">
        <MotionProvider>
          <Navbar />
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
