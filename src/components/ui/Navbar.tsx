"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[rgba(212,175,55,0.15)] shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="font-display text-base md:text-lg font-semibold tracking-wide text-[#D4AF37] hover:opacity-80 transition-opacity"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ema Jamak
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-light text-[#F5F5F5]/70 hover:text-[#D4AF37] transition-colors duration-300 tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 border border-[#D4AF37] text-[#D4AF37] text-sm tracking-widest uppercase font-light hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all duration-300"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Let&apos;s Talk
          </a>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden text-[#F5F5F5] hover:text-[#D4AF37] transition-colors p-1"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-lg flex flex-col items-center justify-center gap-10"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-2xl font-light tracking-widest uppercase text-[#F5F5F5]/80 hover:text-[#D4AF37] transition-colors"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-4 px-8 py-3 border border-[#D4AF37] text-[#D4AF37] tracking-widest uppercase text-sm hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all duration-300"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Let&apos;s Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
