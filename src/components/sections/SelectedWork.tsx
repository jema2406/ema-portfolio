"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

/* ─── Types ─────────────────────────────────────────────────────── */

type GalleryImage = {
  src: string;
  alt: string;
};

type Notable = {
  heading: string;
  description: string;
};

type Client = {
  id: string;
  hero: { src: string; alt: string };
  name: string;
  subtitle: string;
  industry: string;
  handle: string;
  role: string;
  deliverables: string[];
  notable?: Notable;
  gallery: GalleryImage[];
  instagram: string;
};

/* ─── Client data ───────────────────────────────────────────────── */

const CLIENTS: Client[] = [
  {
    id: "mrkva",
    hero: {
      src: "/portfolio/agency/mrkva/mrkva-reel-1-thumbnail.jpg",
      alt: "Mrkva — premium food content showcasing burger close-up",
    },
    name: "Mrkva",
    subtitle: "Ćevabdžinica · Sarajevo",
    industry: "Food / Restaurant",
    handle: "@mrkva_cevabdzinica",
    role: "Social Media Manager & Content Creator",
    deliverables: [
      "Short-form video (Reels, TikTok)",
      "AI-generated visuals",
      "Carousel posts",
      "Copywriting",
      "In-house photography & filming",
    ],
    notable: {
      heading: "Brand Identity (Team Project)",
      description:
        "Contributed to brand visual refresh across 3 locations as part of a multidisciplinary team — providing creative direction in collaboration with graphic designers, based on stakeholder briefings and brand goals. Scope included menu systems (wall and tabletop), in-store packaging, and digital display content. Samples available on request.",
    },
    gallery: [
      {
        src: "/portfolio/agency/mrkva/mrkva-reel-2-thumbnail.jpg",
        alt: "Mrkva — ćevapi na žaru video thumbnail",
      },
      {
        src: "/portfolio/agency/mrkva/mrkva-burger-post.jpg",
        alt: "Mrkva — Pasha burger post",
      },
      {
        src: "/portfolio/agency/mrkva/mrkva-carousel-1.jpg",
        alt: "Mrkva carousel slide 1",
      },
      {
        src: "/portfolio/agency/mrkva/mrkva-carousel-3.jpg",
        alt: "Mrkva carousel slide 3",
      },
      {
        src: "/portfolio/agency/mrkva/mrkva-carousel-5.jpg",
        alt: "Mrkva carousel slide 5",
      },
    ],
    instagram: "https://www.instagram.com/mrkva_cevabdzinica/",
  },
  {
    id: "vimar",
    hero: {
      src: "/portfolio/agency/vimar/vimar-philips-konzum-mercator-clean.jpg",
      alt: "Vimar BiH multi-brand campaign with Philips, Konzum, and Mercator",
    },
    name: "Vimar BiH",
    subtitle: "Meat Industry · Visoko, BiH",
    industry: "Food / FMCG",
    handle: "@vimar.bih",
    role: "Social Media Manager & Content Creator",
    deliverables: [
      "AI-generated short-form video",
      "AI visuals",
      "Carousel content (recipes)",
      "Copywriting",
      "Product photoshoots",
    ],
    notable: {
      heading: "Notable",
      description:
        "Multi-brand campaign with Philips, Konzum, and Mercator.",
    },
    gallery: [
      {
        src: "/portfolio/agency/vimar/vimar-doner-post.jpg",
        alt: "Vimar BiH — döner post",
      },
      {
        src: "/portfolio/agency/vimar/vimar-lasagne-1.jpg",
        alt: "Vimar BiH — lasagne series 1",
      },
      {
        src: "/portfolio/agency/vimar/vimar-lasagne-2.jpg",
        alt: "Vimar BiH — lasagne series 2",
      },
      {
        src: "/portfolio/agency/vimar/vimar-lasagne-3.jpg",
        alt: "Vimar BiH — lasagne series 3",
      },
      {
        src: "/portfolio/agency/vimar/vimar-reel-1-thumbnail.jpg",
        alt: "Vimar BiH — reel 1 thumbnail",
      },
      {
        src: "/portfolio/agency/vimar/vimar-reel-2-thumbnail.jpg",
        alt: "Vimar BiH — reel 2 thumbnail",
      },
    ],
    instagram: "https://www.instagram.com/vimar.bih/",
  },
  {
    id: "termalna",
    hero: {
      src: "/portfolio/agency/termalna-rivijera/termalna-3-razloga.jpg",
      alt: "Termalna Rivijera Ilidža premium hospitality content",
    },
    name: "Termalna Rivijera Ilidža",
    subtitle: "Wellness Destination · Sarajevo",
    industry: "Hospitality / Wellness",
    handle: "@termalnarivijera",
    role: "Social Media Manager & Content Creator",
    deliverables: [
      "Static and carousel posts",
      "CapCut video editing",
      "Copywriting",
      "Brand-aligned visual direction",
    ],
    gallery: [
      {
        src: "/portfolio/agency/termalna-rivijera/termalna-ljeto.jpg",
        alt: "Termalna Rivijera Ilidža — summer campaign visual",
      },
    ],
    instagram: "https://www.instagram.com/termalnarivijera/",
  },
  {
    id: "sokak",
    hero: {
      src: "/portfolio/agency/sokak/sokak-toplo-hrskavo.jpg",
      alt: "Restoran Sokak premium food editorial content",
    },
    name: "Restoran Sokak",
    subtitle: "Restaurant · Ilidža, Sarajevo",
    industry: "Food / Restaurant",
    handle: "@restoransokak",
    role: "Social Media Manager & Content Creator",
    deliverables: [
      "AI-generated visuals",
      "Copywriting",
      "In-house photography & filming",
      "Editorial content direction",
    ],
    gallery: [
      {
        src: "/portfolio/agency/sokak/sokak-zalogaj-prica-pricu.jpg",
        alt: "Restoran Sokak — zalogaj priča priču editorial visual",
      },
    ],
    instagram: "https://www.instagram.com/restoransokak/",
  },
];

/* ─── Gallery strip ─────────────────────────────────────────────── */

function GalleryStrip({ images }: { images: GalleryImage[] }) {
  return (
    <div className="flex flex-row flex-wrap gap-2 md:gap-3">
      {images.map((img) => (
        <div
          key={img.src}
          className="relative w-[72px] h-[72px] md:w-20 md:h-20 shrink-0 overflow-hidden rounded-sm border border-[rgba(212,175,55,0.3)] hover:border-[rgba(212,175,55,0.8)] hover:scale-[1.05] transition-all duration-300"
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

/* ─── Client card ───────────────────────────────────────────────── */

function ClientCard({ client, index }: { client: Client; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: EASE }}
      className="flex flex-col md:flex-row gap-8 md:gap-12 bg-[#161616] border border-[rgba(212,175,55,0.2)] rounded-sm p-6 md:p-10 hover:border-[rgba(212,175,55,0.4)] transition-colors duration-500"
    >
      {/* ── Hero image (left / top) ── */}
      <div className="w-full md:w-2/5 shrink-0">
        <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm border border-[rgba(212,175,55,0.4)]">
          <Image
            src={client.hero.src}
            alt={client.hero.alt}
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* ── Content (right / bottom) ── */}
      <div className="flex flex-col gap-5 md:w-3/5 justify-center">
        {/* Name + subtitle */}
        <div className="flex flex-col gap-1">
          <h3
            className="text-3xl md:text-4xl font-semibold text-[#F5F5F5] leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {client.name}
          </h3>
          <p
            className="text-sm text-[#D4AF37] font-light"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {client.subtitle}
          </p>
        </div>

        {/* Industry + handle */}
        <div
          className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-[#F5F5F5]/50"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <span>{client.industry}</span>
          <span className="text-[#D4AF37]/70">{client.handle}</span>
        </div>

        {/* Role */}
        <div className="flex flex-col gap-1">
          <p
            className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] font-light"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Role
          </p>
          <p
            className="text-sm text-[#F5F5F5]/80"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {client.role}
          </p>
        </div>

        {/* Deliverables */}
        <div className="flex flex-col gap-2">
          <p
            className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] font-light"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Deliverables
          </p>
          <ul className="flex flex-col gap-1">
            {client.deliverables.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-[#F5F5F5]/60"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <span className="mt-[0.4em] w-1 h-1 rounded-full bg-[#D4AF37] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Notable / Team project callout */}
        {client.notable && (
          <div className="border-l-2 border-[rgba(212,175,55,0.4)] pl-4 flex flex-col gap-1">
            <p
              className="text-xs italic text-[#D4AF37]/80 font-light"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {client.notable.heading}
            </p>
            <p
              className="text-sm text-[#F5F5F5]/50 leading-relaxed"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {client.notable.description}
            </p>
          </div>
        )}

        {/* Gallery strip */}
        {client.gallery.length > 0 && (
          <div className="flex flex-col gap-2">
            <p
              className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] font-light"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Work Samples
            </p>
            <GalleryStrip images={client.gallery} />
          </div>
        )}

        {/* Instagram link */}
        <a
          href={client.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 self-start text-sm text-[#D4AF37] border-b border-[rgba(212,175,55,0.4)] pb-px hover:border-[#D4AF37] hover:brightness-125 transition-all duration-300 font-light tracking-wide"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          View on Instagram
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </motion.div>
  );
}

/* ─── Section ───────────────────────────────────────────────────── */

export default function SelectedWork() {
  return (
    <section id="selected-work" className="section-padding relative z-10 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-14 md:mb-16 max-w-3xl"
        >
          <p
            className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-light mb-4"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Selected Work
          </p>
          <h2
            className="text-4xl md:text-5xl font-semibold leading-tight mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Brands I work with.
          </h2>
          <p
            className="text-base md:text-lg text-[#F5F5F5]/65 leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Through The Simple Agency and direct collaborations, I create
            content for restaurants, food brands, and hospitality clients
            across Bosnia and Herzegovina.
          </p>
        </motion.div>

        {/* Client cards — vertical stack */}
        <div className="flex flex-col gap-10 md:gap-14">
          {CLIENTS.map((client, i) => (
            <ClientCard key={client.id} client={client} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
