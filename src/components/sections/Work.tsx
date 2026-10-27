"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  FacebookLogo,
  InstagramLogo,
  TikTokLogo,
} from "@/components/icons/PlatformIcons";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

type Card = {
  image: string;
  alt: string;
  title: string;
  platform: string;
  tags: string[];
  link: string;
  ratio: "9/16" | "1/1";
};

/* ─── Platform card data ────────────────────────────────────────── */

const FACEBOOK_CARDS: Card[] = [
  {
    image: "/portfolio/gastrokutak/baklava-thumbnail-clean.jpg",
    alt: "Baklava recipe video with 1 million views on Facebook",
    title: "Domaća baklava",
    platform: "Facebook · 1M views",
    tags: ["Viral", "Recipe Video", "AI-Generated"],
    link: "https://www.facebook.com/reel/4030760100479727",
    ratio: "9/16",
  },
  {
    image: "/portfolio/gastrokutak/mascarpone-thumbnail-clean.jpg",
    alt: "Homemade mascarpone recipe video with 1 million views on Facebook",
    title: "Domaći mascarpone",
    platform: "Facebook · 1M views",
    tags: ["Viral", "Recipe Video", "AI-Generated"],
    link: "https://www.facebook.com/reel/4281329572117936",
    ratio: "9/16",
  },
  {
    image: "/portfolio/gastrokutak/lotus-thumbnail-clean.jpg",
    alt: "Lotus cheesecake recipe video with 466K Facebook views",
    title: "Lotus cheesecake u čaši",
    platform: "Facebook · 466K views",
    tags: ["Recipe Video", "AI-Generated"],
    link: "https://www.facebook.com/reel/1468208248354922",
    ratio: "9/16",
  },
  {
    image: "/portfolio/gastrokutak/facebook-cimet-rolice.jpg",
    alt: "Cimet rolice Facebook post with 640K views",
    title: "Cimet rolice",
    platform: "Facebook Post · 640K views",
    tags: ["High Reach", "Static Post"],
    link: "https://www.facebook.com/photo.php?fbid=122193782048708587",
    ratio: "1/1",
  },
  {
    image: "/portfolio/gastrokutak/facebook-coko-ljesnjak-torta.jpg",
    alt: "Čoko lješnjak torta Facebook post with 580K views",
    title: "Čoko lješnjak torta",
    platform: "Facebook Post · 580K views",
    tags: ["High Reach", "Static Post"],
    link: "https://www.facebook.com/photo.php?fbid=122194039226708587",
    ratio: "1/1",
  },
  {
    image: "/portfolio/gastrokutak/facebook-kolac-s-jabukama.jpg",
    alt: "Kolač s jabukama Facebook post with 450K views",
    title: "Kolač s jabukama",
    platform: "Facebook Post · 450K views",
    tags: ["Static Post", "Recipe"],
    link: "https://www.facebook.com/photo.php?fbid=122193682634708587",
    ratio: "1/1",
  },
];

const INSTAGRAM_CARDS: Card[] = [
  {
    image: "/portfolio/gastrokutak/instagram-keks-kolac.jpg",
    alt: "Keks kolač Instagram Reel with 634K views and 13.9K saves",
    title: "Keks kolač",
    platform: "Instagram Reel · 634K views · 13.9K saves",
    tags: ["Viral", "Recipe Video"],
    link: "https://www.instagram.com/p/DeClD_at5e-/",
    ratio: "9/16",
  },
  {
    image: "/portfolio/gastrokutak/instagram-pileca-juha.jpg",
    alt: "Krem juha od piletine Instagram Reel with 504K views and 13.2K saves",
    title: "Krem juha od piletine",
    platform: "Instagram Reel · 504K views · 13.2K saves",
    tags: ["High Saves", "Recipe Video"],
    link: "https://www.instagram.com/p/DeMmBAhNeyJ/",
    ratio: "9/16",
  },
  {
    image: "/portfolio/gastrokutak/instagram-kljukusa.jpg",
    alt: "Kljukuša Instagram Reel with 299K views and 3.8K saves",
    title: "Kljukuša",
    platform: "Instagram Reel · 299K views · 3.8K saves",
    tags: ["Recipe Video"],
    link: "https://www.instagram.com/reel/DeW5XKhNatc/",
    ratio: "9/16",
  },
];

const TIKTOK_CARDS: Card[] = [
  {
    image: "/portfolio/gastrokutak/tiktok-keks-kolac.jpg",
    alt: "Keks kolač TikTok with 1.2M views and 2.2K new followers",
    title: "Keks kolač",
    platform: "TikTok · 1.2M views · 2.2K new followers",
    tags: ["Viral", "Audience Growth"],
    link: "https://www.tiktok.com/@gastrokutak.com/video/7692495847661047046",
    ratio: "9/16",
  },
  {
    image: "/portfolio/gastrokutak/tiktok-kljukusa.jpg",
    alt: "Kljukuša TikTok with 598K views and 868 new followers",
    title: "Kljukuša",
    platform: "TikTok · 598K views · 868 new followers",
    tags: ["Audience Growth", "Recipe Video"],
    link: "https://www.tiktok.com/@gastrokutak.com/video/7695084226022051093",
    ratio: "9/16",
  },
  {
    image: "/portfolio/gastrokutak/tiktok-ruske-kape.jpg",
    alt: "Ruske kape torta TikTok with 278K views and 657 new followers",
    title: "Ruske kape torta",
    platform: "TikTok · 278K views · 657 new followers",
    tags: ["Recipe Video"],
    link: "https://www.tiktok.com/@gastrokutak.com/video/7691682338710834452",
    ratio: "9/16",
  },
];

/* ─── Platform divider ──────────────────────────────────────────── */

function PlatformDivider({
  label,
  icon,
}: {
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: EASE }}
      className="flex items-center gap-4 my-12 md:my-16"
    >
      <div className="flex-1 h-px bg-[rgba(212,175,55,0.25)]" />
      <span
        className="inline-flex items-center gap-2.5 text-xs tracking-[0.35em] uppercase text-[#D4AF37] font-light shrink-0"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {icon}
        {label}
      </span>
      <div className="flex-1 h-px bg-[rgba(212,175,55,0.25)]" />
    </motion.div>
  );
}

/* ─── Card ──────────────────────────────────────────────────────── */

function WorkCard({
  card,
  index,
}: {
  card: Card;
  index: number;
}) {
  const imageContent =
    card.ratio === "1/1" ? (
      /* Square images get letterbox padding for an editorial look */
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="relative w-full aspect-square">
          <Image
            src={card.image}
            alt={card.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          />
        </div>
      </div>
    ) : (
      <Image
        src={card.image}
        alt={card.alt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
      />
    );

  return (
    <a
      href={card.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${card.title} — open original post in new tab`}
      className="block cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-sm"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: index * 0.05, ease: EASE }}
        className="group flex flex-col bg-[#161616] border border-[rgba(212,175,55,0.2)] rounded-sm p-4 hover:border-[rgba(212,175,55,0.8)] hover:scale-[1.02] transition-all duration-300"
      >
        {/* Image — always 9/16 footprint */}
        <div className="relative w-full aspect-[9/16] overflow-hidden rounded-sm bg-[#0A0A0A]">
          {imageContent}
        </div>

        {/* Card body */}
        <div className="pt-4 flex flex-col gap-2">
          <h3
            className="text-lg md:text-xl font-semibold text-[#F5F5F5] leading-snug"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {card.title}
          </h3>
          <p
            className="text-xs text-[#D4AF37] tracking-wide"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {card.platform}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {card.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-[0.15em] uppercase px-3 py-1 border border-[rgba(212,175,55,0.4)] text-[#D4AF37] bg-transparent group-hover:bg-[rgba(212,175,55,0.06)] transition-colors duration-300"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </a>
  );
}

/* ─── Card grid ─────────────────────────────────────────────────── */

function CardGrid({ cards }: { cards: Card[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {cards.map((card, i) => (
        <WorkCard key={`${card.link}-${i}`} card={card} index={i} />
      ))}
    </div>
  );
}

/* ─── Section ───────────────────────────────────────────────────── */

export default function Work() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="work" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-4 max-w-3xl"
        >
          <p
            className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-light mb-4"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Featured Work
          </p>
          <h2
            className="text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            <span className="block text-[#F5F5F5]">Viral content.</span>
            <span className="block italic text-[#D4AF37]">Real numbers.</span>
          </h2>
          <p
            className="text-base md:text-lg text-[#F5F5F5]/65 leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Selected food content from my work with Gastrokutak — each post
            reached hundreds of thousands to millions of viewers across
            Facebook, Instagram, and TikTok.
          </p>
        </motion.div>

        {/* ── Facebook ── */}
        <PlatformDivider label="Facebook" icon={<FacebookLogo />} />
        <CardGrid cards={FACEBOOK_CARDS} />

        {/* ── Instagram ── */}
        <PlatformDivider label="Instagram" icon={<InstagramLogo />} />
        <CardGrid cards={INSTAGRAM_CARDS} />

        {/* ── TikTok ── */}
        <PlatformDivider label="TikTok" icon={<TikTokLogo />} />
        <CardGrid cards={TIKTOK_CARDS} />
      </div>
    </section>
  );
}
