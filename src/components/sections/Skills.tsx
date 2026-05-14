"use client";

import { motion } from "framer-motion";
import { Video, FileText, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

/* ─── Services ──────────────────────────────────────────────────── */

type Service = {
  icon: LucideIcon;
  heading: string;
  items: string[];
};

const SERVICES: Service[] = [
  {
    icon: Video,
    heading: "Visual Content",
    items: [
      "Short-form video (Reels, TikTok)",
      "AI-generated visuals & video",
      "Product photography direction",
      "Carousels & static posts",
    ],
  },
  {
    icon: FileText,
    heading: "Written Content",
    items: [
      "SEO blog writing",
      "Captions & brand voice",
      "WordPress publishing",
      "Copywriting",
    ],
  },
  {
    icon: TrendingUp,
    heading: "Strategy",
    items: [
      "Content calendars",
      "Platform-native planning",
      "Performance analytics",
      "Community management",
    ],
  },
];

/* ─── Tools ─────────────────────────────────────────────────────── */

type ToolGroup = {
  label: string;
  items: string[];
};

const TOOL_GROUPS: ToolGroup[] = [
  {
    label: "AI Workflow",
    items: [
      "Higgsfield AI (multiple models)",
      "Nano Banana",
      "Google Flow",
      "ChatGPT · Claude",
    ],
  },
  {
    label: "Content Production",
    items: [
      "CapCut · Canva",
      "Adobe Suite basics",
      "WordPress",
    ],
  },
  {
    label: "Analytics & SEO",
    items: [
      "Google Analytics 4",
      "Google Search Console",
      "Meta Business Suite",
      "Basic SEO",
    ],
  },
  {
    label: "Languages",
    items: [
      "Bosnian (Native)",
      "English (Professional)",
    ],
  },
];

/* ─── Service column ────────────────────────────────────────────── */

function ServiceColumn({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: EASE }}
      className="flex flex-col gap-5"
    >
      {/* Icon */}
      <div className="w-10 h-10 flex items-center justify-center border border-[rgba(212,175,55,0.3)] text-[#D4AF37]">
        <Icon size={18} />
      </div>

      {/* Heading */}
      <h3
        className="text-xl font-semibold text-[#D4AF37]"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {service.heading}
      </h3>

      {/* Items */}
      <ul className="flex flex-col gap-2">
        {service.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-sm text-[#F5F5F5]/60"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <span className="mt-[0.45em] w-1 h-1 rounded-full bg-[#D4AF37] shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

/* ─── Tool group ────────────────────────────────────────────────── */

function ToolGroup({ group, index }: { group: ToolGroup; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: EASE }}
      className="flex flex-col gap-3"
    >
      <p
        className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-light pb-2 border-b border-[rgba(212,175,55,0.2)]"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {group.label}
      </p>
      <ul className="flex flex-col gap-2">
        {group.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm text-[#F5F5F5]/55"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <span className="mt-[0.45em] w-1 h-1 rounded-full bg-[rgba(212,175,55,0.5)] shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

/* ─── Section ───────────────────────────────────────────────────── */

export default function Skills() {
  return (
    <section id="services" className="section-padding relative z-10 bg-[#111111]">
      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

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
            What I Do
          </p>
          <h2
            className="text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            <span className="block text-[#F5F5F5]">A full-service</span>
            <span className="block italic text-[#D4AF37]">content partner.</span>
          </h2>
        </motion.div>

        {/* 3 service columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {SERVICES.map((service, i) => (
            <ServiceColumn key={service.heading} service={service} index={i} />
          ))}
        </div>

        {/* ── Tools subsection ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-20 md:mt-24"
        >
          <h3
            className="text-2xl md:text-3xl font-semibold text-[#F5F5F5] mb-10 md:mb-12"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            My production stack.
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
            {TOOL_GROUPS.map((group, i) => (
              <ToolGroup key={group.label} group={group} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
