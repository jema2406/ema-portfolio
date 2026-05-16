"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const STATS = [
  { number: 4, suffix: "M+", label: "Views generated across viral video content" },
  { number: 300, suffix: "K+", label: "SEO impressions on Google Discover" },
  { number: 20, suffix: "+", label: "Countries reached organically" },
  { number: 9, suffix: "", label: "Brands worked with across food & hospitality" },
];

const EASE = [0.25, 0.46, 0.45, 0.94] as const;
const DURATION_MS = 2000;

function StatCounter({
  number,
  suffix,
  staggerDelay,
  isActive,
}: {
  number: number;
  suffix: string;
  staggerDelay: number;
  isActive: boolean;
}) {
  const [count, setCount] = useState(0);
  const [showSuffix, setShowSuffix] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    let startTime: number | null = null;
    let rafId: number;
    let suffixTimer: ReturnType<typeof setTimeout>;

    const startTimer = setTimeout(() => {
      const tick = (ts: number) => {
        if (startTime === null) startTime = ts;
        const progress = Math.min((ts - startTime) / DURATION_MS, 1);
        // cubic ease-out: fast start, satisfying slow finish
        const eased = 1 - (1 - progress) ** 3;
        setCount(Math.round(eased * number));

        if (progress < 1) {
          rafId = requestAnimationFrame(tick);
        } else {
          setCount(number);
          suffixTimer = setTimeout(() => setShowSuffix(true), 100);
        }
      };
      rafId = requestAnimationFrame(tick);
    }, staggerDelay);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(suffixTimer);
      cancelAnimationFrame(rafId);
    };
  }, [isActive, number, staggerDelay]);

  return (
    <p
      className="text-5xl md:text-6xl font-bold leading-none text-[#D4AF37]"
      style={{ fontFamily: "var(--font-playfair)" }}
    >
      {count}
      <span
        style={{
          opacity: showSuffix ? 1 : 0,
          transition: "opacity 0.2s ease",
        }}
      >
        {suffix}
      </span>
    </p>
  );
}

export default function StatsBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-60px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stats"
      ref={sectionRef}
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
              key={stat.suffix + stat.number}
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
              <StatCounter
                number={stat.number}
                suffix={stat.suffix}
                staggerDelay={i * 150}
                isActive={isInView}
              />
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
