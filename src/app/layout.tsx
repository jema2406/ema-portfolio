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

const SITE_URL = "https://ema-portfolio-theta.vercel.app";
const TITLE = "Ema Jamak — Content Creator for Food & Hospitality Brands";
const DESCRIPTION =
  "Sarajevo-based content creator and SEO writer. 4M+ video views and 150K+ Google clicks for food and lifestyle brands. Available for remote work.";
const OG_IMAGE = {
  url: "/portfolio/headshot/headshot-final-crna.jpeg",
  width: 1200,
  height: 630,
  alt: "Ema Jamak — Content Creator & Social Media Manager",
};

const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ema Jamak",
  jobTitle: "Content Creator & SEO",
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sarajevo",
    addressCountry: "Bosnia and Herzegovina",
  },
  sameAs: ["https://www.linkedin.com/in/emajamak2406/"],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  title: TITLE,
  description:
    DESCRIPTION,
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
    url: SITE_URL,
    siteName: "Ema Jamak Portfolio",
    title: TITLE,
    description:
      DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
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
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(PERSON_JSON_LD).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
