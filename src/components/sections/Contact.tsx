"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/BrandIcons";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      className="section-padding relative z-10 bg-[#0A0A0A] overflow-hidden"
    >
      {/* Decorative gold glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 100%, rgba(212,175,55,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        {/* Heading block */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex flex-col items-center gap-5"
        >
          <p
            className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-light"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Get In Touch
          </p>

          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            <span className="block text-[#F5F5F5]">Let&apos;s create something</span>
            <span className="block italic text-[#D4AF37]">that performs.</span>
          </h2>

          <p
            className="text-base md:text-lg text-[#F5F5F5]/60 font-normal leading-relaxed max-w-[600px]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            I&apos;m currently accepting 2 new clients for retainer work,
            content production, or strategy consultations. Based in Sarajevo,
            working with brands globally.
          </p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          {/* Primary — Email */}
          <a
            href="mailto:emajamak@gmail.com"
            className="group flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-[#D4AF37] text-[#0A0A0A] text-sm tracking-widest uppercase font-medium hover:bg-[#E8C84A] transition-all duration-300"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <Mail size={15} />
            emajamak@gmail.com
          </a>

          {/* Secondary — LinkedIn */}
          <a
            href="https://www.linkedin.com/in/emajamak2406/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 border border-[#D4AF37] text-[#D4AF37] text-sm tracking-widest uppercase font-light bg-transparent hover:bg-[rgba(212,175,55,0.08)] transition-all duration-300"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <LinkedInIcon size={15} />
            Connect on LinkedIn
          </a>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.35, ease: EASE }}
          style={{ transformOrigin: "center" }}
          className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.4)] to-transparent"
        />

        {/* Location / availability note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
          className="text-xs tracking-widest text-[#6B6B6B]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Sarajevo, Bosnia &amp; Herzegovina · Available for remote work internationally
        </motion.p>
      </div>
    </section>
  );
}
