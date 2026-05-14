"use client";

import { motion } from "framer-motion";

const STATS = [
  {
    value: "4M+",
    label: "Views generated across viral video content",
  },
  {
    value: "300K+",
    label: "SEO impressions on Google Discover",
  },
  {
    value: "20+",
    label: "Countries reached organically",
  },
  {
    value: "9",
    label: "Brands worked with across food & hospitality",
  },
];

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export default function StatsBar() {
  return (
    <section
      id="stats"
      className="relative z-10 bg-[#111111] border-y border-[rgba(212,175,55,0.2)] py-16 md:py-20 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-light mb-12 md:mb-14"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          The Numbers
        </motion.p>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: EASE,
              }}
              className="flex flex-col items-center text-center gap-3 md:gap-4"
            >
              <p
                className="text-5xl md:text-6xl font-bold leading-none text-[#D4AF37]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {stat.value}
              </p>
              <p
                className="text-sm text-[#F5F5F5]/65 font-normal leading-relaxed max-w-[200px]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
