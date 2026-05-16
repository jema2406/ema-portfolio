"use client";

import { motion } from "framer-motion";
import { Mail, ArrowDown } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/BrandIcons";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;
const WORD_EASE = [0.25, 0.4, 0, 1] as const;

// Tagline: word-by-word stagger
// "Food" "content" "that" each start 0.12s apart from 0.5s base
// "performs." has extra 0.15s delay + scale emphasis
const TAGLINE_WORDS = ["Food", "content", "that"] as const;
const TAGLINE_BASE_DELAY = 0.5;
const WORD_STAGGER = 0.12;
const PERFORMS_DELAY =
  TAGLINE_BASE_DELAY + TAGLINE_WORDS.length * WORD_STAGGER + 0.15;
const TAGLINE_END = PERFORMS_DELAY + 0.5; // last word finishes at ~1.51s

// Sub-tagline: 4-word chunk stagger, starts 0.3s after tagline finishes
const SUB_CHUNKS = [
  "I create scroll-stopping video",
  "content and SEO-driven strategy",
  "for food, hospitality, and",
  "lifestyle brands — with",
  "measurable results across Instagram,",
  "Facebook, TikTok, and Google.",
] as const;
const SUB_START = TAGLINE_END + 0.3; // ~1.81s
const SUB_STAGGER = 0.08;

// CTA follows after sub-tagline finishes
const CTA_DELAY = SUB_START + (SUB_CHUNKS.length - 1) * SUB_STAGGER + 0.3; // ~2.5s

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 text-center overflow-hidden"
    >
      {/* Radial gold glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 60%, rgba(212,175,55,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6 md:gap-8">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="text-[#D4AF37] text-xs md:text-sm tracking-[0.3em] uppercase font-light"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Content Creator &amp; Social Media Manager
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-none tracking-tight text-[#F5F5F5]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Ema Jamak
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
          style={{ width: "80px", transformOrigin: "center" }}
          className="h-px bg-[#D4AF37]"
        />

        {/* Tagline — word by word reveal */}
        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] tracking-tight text-[#F5F5F5]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {TAGLINE_WORDS.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: TAGLINE_BASE_DELAY + i * WORD_STAGGER,
                ease: WORD_EASE,
              }}
              style={{ display: "inline-block", marginRight: "0.25em" }}
            >
              {word}
            </motion.span>
          ))}
          {/* "performs." — italic gold, extra delay + scale emphasis */}
          <motion.span
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: PERFORMS_DELAY,
              ease: WORD_EASE,
            }}
            style={{ display: "inline-block" }}
            className="italic text-[#D4AF37]"
          >
            performs.
          </motion.span>
        </h2>

        {/* Sub-tagline — 4-word chunk stagger, fade only */}
        <p
          className="text-base md:text-lg text-[#F5F5F5]/65 font-normal max-w-[600px] leading-relaxed"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {SUB_CHUNKS.map((chunk, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: SUB_START + i * SUB_STAGGER,
                ease: EASE,
              }}
              style={{ display: "inline" }}
            >
              {chunk}
              {i < SUB_CHUNKS.length - 1 ? " " : ""}
            </motion.span>
          ))}
        </p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: CTA_DELAY, ease: EASE }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-2"
        >
          {/* Primary — Email */}
          <a
            href="mailto:emajamak@gmail.com"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#D4AF37] text-[#0A0A0A] text-sm tracking-widest uppercase font-medium hover:bg-[#E8C84A] hover:scale-[1.02] transition-all duration-300"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <Mail size={15} />
            Get in Touch
          </a>

          {/* Secondary — LinkedIn */}
          <a
            href="https://www.linkedin.com/in/emajamak2406/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 border border-[#D4AF37] text-[#D4AF37] text-sm tracking-widest uppercase font-light bg-transparent hover:bg-[rgba(212,175,55,0.1)] transition-all duration-300"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <LinkedInIcon size={15} />
            LinkedIn
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: CTA_DELAY + 0.4, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#6B6B6B]"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={18} />
        </motion.div>
        <span
          className="text-xs tracking-widest uppercase"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
