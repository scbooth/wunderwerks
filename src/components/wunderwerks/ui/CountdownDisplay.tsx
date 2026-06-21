"use client";

import { motion, useReducedMotion } from "framer-motion";

interface CountdownDisplayProps {
  days: number;
  hours: number;
  minutes: number;
  pulseKey?: number;
  className?: string;
}

function Unit({
  value,
  label,
  pulseKey,
  reduceMotion,
}: {
  value: number;
  label: string;
  pulseKey: number;
  reduceMotion: boolean | null;
}) {
  return (
    <span className="inline-flex items-baseline gap-1.5">
      <motion.span
        key={`${label}-${pulseKey}`}
        initial={reduceMotion ? false : { opacity: 0.85, y: 2 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="text-2xl font-semibold tabular-nums text-cream sm:text-3xl"
      >
        {value}
      </motion.span>
      <span className="text-sm font-medium text-cream-muted sm:text-base">
        {label}
      </span>
    </span>
  );
}

export function CountdownDisplay({
  days,
  hours,
  minutes,
  pulseKey = 0,
  className = "",
}: CountdownDisplayProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={`flex flex-wrap items-baseline gap-x-2 gap-y-1 sm:gap-x-3 ${className}`}
      aria-live="polite"
    >
      <Unit
        value={days}
        label={days === 1 ? "Day" : "Days"}
        pulseKey={pulseKey}
        reduceMotion={reduceMotion}
      />
      <span className="text-cream-subtle" aria-hidden>
        •
      </span>
      <Unit
        value={hours}
        label={hours === 1 ? "Hour" : "Hours"}
        pulseKey={pulseKey}
        reduceMotion={reduceMotion}
      />
      <span className="text-cream-subtle" aria-hidden>
        •
      </span>
      <Unit
        value={minutes}
        label={minutes === 1 ? "Minute" : "Minutes"}
        pulseKey={pulseKey}
        reduceMotion={reduceMotion}
      />
    </div>
  );
}
