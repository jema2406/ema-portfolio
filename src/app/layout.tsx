import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ema Jamak — Content Creator for Food & Hospitality Brands",
  description:
    "Sarajevo-based content creator and social media manager. 4M+ views generated through AI-powered video content and SEO strategy for food, hospitality, and lifestyle brands. Available for international remote work.",
  keywords: [
    "content creator",
    "social media manager",
    "food content",
    "AI content production",
    "viral video creator",
    "Sarajevo",
    "Balkan",
    "hospitality content",
    "SEO blogger",
  ],
  authors: [{ name: "Ema Jamak" }],
  creator: "Ema Jamak",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ema-portfolio-theta.vercel.app",
    siteName: "Ema Jamak Portfolio",
    title: "Ema Jamak — Content Creator for Food & Hospitality Brands",
    description:
      "Sarajevo-based content creator and social media manager. 4M+ views generated through AI-powered video content and SEO strategy for food, hospitality, and lifestyle brands. Available for international remote work.",
    images: [
      {
        url: "/portfolio/headshot/headshot-final-crna.jpeg",
        width: 1200,
        height: 630,
        alt: "Ema Jamak — Content Creator & Social Media Manager",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
