"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* ─── Text column ─── */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="order-2 md:order-1 flex flex-col gap-6"
          >
            <p
              className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-light"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              About
            </p>

            <h2
              className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              <span className="block text-[#F5F5F5]">I make brands</span>
              <span className="block italic text-[#D4AF37]">
                worth watching.
              </span>
            </h2>

            <div
              className="flex flex-col gap-5 text-[#F5F5F5]/65 font-normal leading-relaxed text-base"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <p>
                I&apos;m a Sarajevo-based content creator and social media
                manager building scroll-stopping content for food, hospitality,
                and lifestyle brands — locally and internationally. My approach
                combines AI-driven production workflows with the fundamentals
                that actually move metrics: strong hooks, platform-native
                formats, and SEO that converts.
              </p>
              <p>
                In 2025, I joined Gastrokutak as part of a 3-person content
                team and helped grow the brand to 10M+ views in 8 months. My
                personal video content generated 4M+ views, while my SEO blog
                work drove 300K+ impressions and 19K clicks via Google
                Discover. I now work with brands across the Balkans through
                agency partnerships and direct collaborations.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 self-start mt-2 text-sm tracking-widest uppercase text-[#D4AF37] border-b border-[rgba(212,175,55,0.4)] pb-1 hover:border-[#D4AF37] transition-colors font-light"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Currently accepting 2 new clients
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          {/* ─── Headshot column ─── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            className="order-1 md:order-2 flex justify-center md:justify-end"
          >
            <div className="group relative w-full max-w-[500px] aspect-[4/5] rounded-md overflow-hidden border border-[rgba(212,175,55,0.4)] hover:border-[rgba(212,175,55,0.8)] transition-all duration-500 hover:scale-[1.02]">
              <Image
                src="/portfolio/headshot/headshot-final-crna.jpeg"
                alt="Ema Jamak — Content Creator & Social Media Manager"
                fill
                priority
                sizes="(min-width: 768px) 500px, 100vw"
                className="object-cover"
              />
              {/* Decorative gold L-shape in top-right */}
              <span className="pointer-events-none absolute top-3 right-3 w-10 h-10">
                <span className="absolute top-0 right-0 w-full h-px bg-[#D4AF37]" />
                <span className="absolute top-0 right-0 h-full w-px bg-[#D4AF37]" />
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
