"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowUpRight,
  Search,
  Target,
  SlidersHorizontal,
  Sparkles,
  ChartLine,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import CountUpStat from "@/components/ui/CountUpStat";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const GOLD = "#D4AF37";
const FOREGROUND = "#F5F5F5";

/* ─── Data (from Google Search Console) ─────────────────────────── */

const STATS = [
  { value: "121K+", label: "organic clicks in Q4 2025" },
  { value: "1.38M+", label: "impressions in Q4 2025" },
  { value: "12.6K", label: "clicks in a single day" },
  { value: "#1–2", label: "Google rankings for competitive keywords" },
];

type Month = {
  label: string;
  longLabel: string;
  search: number;
  discover: number;
  searchText: string;
  discoverText: string;
  totalText: string;
};

const MONTHS: Month[] = [
  {
    label: "Oct 2025",
    longLabel: "October 2025",
    search: 421,
    discover: 11113,
    searchText: "421",
    discoverText: "11,113",
    totalText: "11,534",
  },
  {
    label: "Nov 2025",
    longLabel: "November 2025",
    search: 1383,
    discover: 61132,
    searchText: "1,383",
    discoverText: "61,132",
    totalText: "62,515",
  },
  {
    label: "Dec 2025",
    longLabel: "December 2025",
    search: 9716,
    discover: 37618,
    searchText: "9,716",
    discoverText: "37,618",
    totalText: "47,334",
  },
];

type Article = {
  title: string;
  clicks: string;
  detail: string;
  url: string;
};

const ARTICLES: Article[] = [
  {
    title: "Marlenka kuglice",
    clicks: "22.8K clicks",
    detail: "Top 4 on Google for 'marlenka kuglice recept'",
    url: "https://gastrokutak.com/marlenka-kuglice-recept",
  },
  {
    title: "Šape s orasima",
    clicks: "14.2K clicks",
    detail: "12.3K from Google Discover",
    url: "https://gastrokutak.com/sape-s-orasima-recept",
  },
  {
    title: "Schwarzwald keksići",
    clicks: "13.4K clicks",
    detail: "#1–2 on Google for 'švarcvald keksi', 47.7% CTR",
    url: "https://gastrokutak.com/schwarzwald-keksici-recept",
  },
];

type Step = {
  icon: LucideIcon;
  lead: string;
  rest: string;
};

const APPROACH: Step[] = [
  {
    icon: Search,
    lead: "Keyword research:",
    rest: " Google autocomplete, People Also Ask and Search Console before writing.",
  },
  {
    icon: Target,
    lead: "Search intent:",
    rest: " the recipe up front, clear steps, no filler.",
  },
  {
    icon: SlidersHorizontal,
    lead: "On-page optimization in Yoast SEO:",
    rest: " titles, meta descriptions, heading structure, internal links, image alt text.",
  },
  {
    icon: Sparkles,
    lead: "AI-assisted drafting",
    rest: " with ChatGPT and Claude, with every article manually edited and fact-checked.",
  },
  {
    icon: ChartLine,
    lead: "Measured in Google Search Console:",
    rest: " queries, CTR and position guide every update.",
  },
];

/* ─── Chart ─────────────────────────────────────────────────────── */

const CHART_HEIGHT = 300; // px
const PLOT_TOP = 44; // room for the total labels
const PLOT_BOTTOM = 40; // room for the month labels
const PLOT_HEIGHT = CHART_HEIGHT - PLOT_TOP - PLOT_BOTTOM;
const BASELINE = PLOT_TOP + PLOT_HEIGHT;
const MAX_TOTAL = Math.max(...MONTHS.map((m) => m.search + m.discover));

const CHART_LABEL =
  "Stacked bar chart of organic clicks to my articles by month, Q4 2025. " +
  MONTHS.map(
    (m) =>
      `${m.longLabel}: Google Search ${m.searchText}, Google Discover ${m.discoverText}, total ${m.totalText}.`
  ).join(" ");

function ClicksChart() {
  const colWidth = 100 / MONTHS.length;

  return (
    <svg
      role="img"
      aria-label={CHART_LABEL}
      width="100%"
      height={CHART_HEIGHT}
      className="block overflow-visible"
    >
      {/* Baseline */}
      <line
        x1="0"
        x2="100%"
        y1={BASELINE + 0.5}
        y2={BASELINE + 0.5}
        stroke="rgba(212,175,55,0.3)"
        strokeWidth={1}
      />

      {MONTHS.map((m, i) => {
        const searchH = (m.search / MAX_TOTAL) * PLOT_HEIGHT;
        const discoverH = (m.discover / MAX_TOTAL) * PLOT_HEIGHT;
        const top = BASELINE - searchH - discoverH;

        // Each month gets its own column; inner coordinates use % of that
        // column so bars stay centred and text keeps a fixed pixel size.
        return (
          <svg
            key={m.label}
            x={`${i * colWidth}%`}
            width={`${colWidth}%`}
            height={CHART_HEIGHT}
            className="overflow-visible"
          >
            <rect
              x="31%"
              width="38%"
              y={top}
              height={discoverH}
              fill={GOLD}
            >
              <title>{`Google Discover, ${m.label}: ${m.discoverText}`}</title>
            </rect>
            <rect
              x="31%"
              width="38%"
              y={BASELINE - searchH}
              height={searchH}
              fill={FOREGROUND}
            >
              <title>{`Google Search, ${m.label}: ${m.searchText}`}</title>
            </rect>

            {/* Monthly total */}
            <text
              x="50%"
              y={top - 12}
              textAnchor="middle"
              fill={FOREGROUND}
              fontSize={18}
              fontWeight={600}
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {m.totalText}
            </text>

            {/* Month */}
            <text
              x="50%"
              y={BASELINE + 26}
              textAnchor="middle"
              fill="rgba(245,245,245,0.55)"
              fontSize={12}
              letterSpacing="0.1em"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {m.label}
            </text>
          </svg>
        );
      })}
    </svg>
  );
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span
        aria-hidden
        className="inline-block w-3 h-3 rounded-[1px]"
        style={{ backgroundColor: color }}
      />
      {label}
    </span>
  );
}

/* ─── Section ───────────────────────────────────────────────────── */

export default function Seo() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });

  return (
    <section id="seo" className="section-padding relative z-10 bg-[#111111]">
      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-14 md:mb-16 max-w-3xl"
        >
          <p
            className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-light mb-4"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            SEO
          </p>
          <h2
            className="text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            <span className="block text-[#F5F5F5]">Content that ranks.</span>
            <span className="block italic text-[#D4AF37]">
              Traffic that compounds.
            </span>
          </h2>
          <p
            className="text-base md:text-lg text-[#F5F5F5]/65 leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            In Q4 2025 I wrote and optimized a series of SEO recipe articles
            for Gastrokutak, a Croatian-language recipe site with 1,200+
            recipes. Within three months they brought 121,000+ organic clicks
            from Google Search and Discover, and several still rank #1–2 for
            their main keywords.
          </p>
        </motion.div>

        {/* Stat row */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 py-12 md:py-14 border-y border-[rgba(212,175,55,0.2)]"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
              className="flex flex-col items-center text-center gap-3 md:gap-4"
            >
              <CountUpStat
                value={stat.value}
                staggerDelay={i * 150}
                isActive={statsInView}
                className="text-5xl md:text-6xl font-bold leading-none text-[#D4AF37]"
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

        {/* Chart */}
        <motion.figure
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-16 md:mt-20 bg-[#161616] border border-[rgba(212,175,55,0.2)] rounded-sm p-6 md:p-10"
        >
          <div
            className="flex flex-wrap gap-x-6 gap-y-2 mb-8 text-xs text-[#F5F5F5]/70 tracking-wide"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <LegendItem color={FOREGROUND} label="Google Search" />
            <LegendItem color={GOLD} label="Google Discover" />
          </div>
          <div className="max-w-3xl mx-auto">
            <ClicksChart />
          </div>
          <figcaption
            className="mt-6 text-sm text-[#F5F5F5]/50"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Organic clicks to my articles by month, Q4 2025.
          </figcaption>
        </motion.figure>

        {/* Top articles */}
        <div className="mt-16 md:mt-20">
          <p
            className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] font-light mb-6"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Top articles, clicks to date
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {ARTICLES.map((article, i) => (
              <motion.div
                key={article.url}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: EASE }}
                className="group flex flex-col gap-2 bg-[#161616] border border-[rgba(212,175,55,0.2)] rounded-sm p-6 hover:border-[rgba(212,175,55,0.8)] hover:scale-[1.02] transition-all duration-300"
              >
                <h3
                  className="text-lg md:text-xl font-semibold text-[#F5F5F5] leading-snug"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-start gap-1.5 hover:text-[#D4AF37] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-sm"
                  >
                    {article.title}
                    <ArrowUpRight
                      size={16}
                      aria-hidden
                      className="mt-1 shrink-0 text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </h3>
                <p
                  className="text-xs text-[#D4AF37] tracking-wide"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {article.clicks}
                </p>
                <p
                  className="text-sm text-[#F5F5F5]/60 leading-relaxed"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {article.detail}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Highlight callout */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mt-10 border-l-2 border-[rgba(212,175,55,0.4)] pl-4 text-base text-[#F5F5F5]/80 leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            21 of my articles reached 1,000+ clicks each from Google Discover.
          </motion.p>
        </div>

        {/* Approach */}
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
            My approach.
          </h3>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-8">
            {APPROACH.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.li
                  key={step.lead}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
                  className="flex flex-col gap-4"
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-[rgba(212,175,55,0.3)] text-[#D4AF37]">
                    <Icon size={18} aria-hidden />
                  </div>
                  <p
                    className="text-sm text-[#F5F5F5]/60 leading-relaxed"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    <span className="text-[#F5F5F5]/90 font-medium">
                      {step.lead}
                    </span>
                    {step.rest}
                  </p>
                </motion.li>
              );
            })}
          </ol>
        </motion.div>

        {/* Source */}
        <p
          className="mt-16 md:mt-20 pt-6 border-t border-[rgba(212,175,55,0.1)] text-xs text-[#F5F5F5]/40 leading-relaxed"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Source: Google Search Console (Search and Discover reports), filtered
          to my articles. Team metrics and my individual results are reported
          separately.
        </p>
      </div>
    </section>
  );
}
