import { Mail } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/BrandIcons";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[rgba(212,175,55,0.15)] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 pb-6 flex flex-col gap-8">
        {/* Top row: brand left, links right */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col gap-1">
            <span
              className="text-[#D4AF37] text-lg font-semibold tracking-wide"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Ema Jamak
            </span>
            <span
              className="text-[#F5F5F5]/45 text-xs tracking-wide"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Content Creator &amp; Social Media Manager
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:emajamak@gmail.com"
              className="flex items-center gap-2 text-sm text-[#F5F5F5]/55 hover:text-[#D4AF37] transition-colors duration-300"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <Mail size={14} />
              emajamak@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/emajamak2406/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-2 text-sm text-[#F5F5F5]/55 hover:text-[#D4AF37] transition-colors duration-300"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <LinkedInIcon size={14} />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom row: copyright centered */}
        <div className="border-t border-[rgba(212,175,55,0.1)] pt-5 text-center">
          <p
            className="text-[#6B6B6B] text-xs tracking-widest"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            &copy; {new Date().getFullYear()} Ema Jamak. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
