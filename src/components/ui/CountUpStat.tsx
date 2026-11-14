"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const DURATION_MS = 2000;

/**
 * Renders a stat value such as "4M+", "1.9M+" or "12.6K".
 *
 * The final value is the initial state, so the server-rendered HTML (crawlers,
 * link previews, no-JS) always contains the real figure. The count-up runs
 * only on the client once `isActive` turns true, and is skipped for
 * reduced-motion users and for values that aren't a plain number + suffix
 * (e.g. "#1–2").
 */
export default function CountUpStat({
  value,
  staggerDelay = 0,
  isActive,
  className,
}: {
  value: string;
  staggerDelay?: number;
  isActive: boolean;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  // null = show the final value exactly as written
  const [count, setCount] = useState<string | null>(null);

  useEffect(() => {
    if (!isActive || reduceMotion) return;

    const match = /^(\d+(?:\.\d+)?)(\D*)$/.exec(value);
    if (!match) return;

    const target = parseFloat(match[1]);
    const decimals = match[1].split(".")[1]?.length ?? 0;

    let startTime: number | null = null;
    let rafId = 0;

    const startTimer = setTimeout(() => {
      const tick = (ts: number) => {
        if (startTime === null) startTime = ts;
        const progress = Math.min((ts - startTime) / DURATION_MS, 1);
        // cubic ease-out: fast start, satisfying slow finish
        const eased = 1 - (1 - progress) ** 3;

        if (progress < 1) {
          setCount((eased * target).toFixed(decimals));
          rafId = requestAnimationFrame(tick);
        } else {
          setCount(null);
        }
      };
      setCount((0).toFixed(decimals));
      rafId = requestAnimationFrame(tick);
    }, staggerDelay);

    return () => {
      clearTimeout(startTimer);
      cancelAnimationFrame(rafId);
      setCount(null);
    };
  }, [isActive, reduceMotion, value, staggerDelay]);

  const suffix = /^\d+(?:\.\d+)?(\D*)$/.exec(value)?.[1] ?? "";

  return (
    <p
      className={className}
      style={{ fontFamily: "var(--font-playfair)" }}
    >
      {count === null ? (
        value
      ) : (
        <>
          <span className="sr-only">{value}</span>
          <span aria-hidden>
            {count}
            <span style={{ opacity: 0 }}>{suffix}</span>
          </span>
        </>
      )}
    </p>
  );
}
