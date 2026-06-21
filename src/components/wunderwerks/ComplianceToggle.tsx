"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ComplianceMode } from "@/lib/types";

interface ComplianceToggleProps {
  mode: ComplianceMode;
  onChange: (mode: ComplianceMode) => void;
  className?: string;
  compact?: boolean;
}

export function ComplianceToggle({
  mode,
  onChange,
  className = "",
  compact = false,
}: ComplianceToggleProps) {
  const isProhibition = mode === "prohibition";
  const reduceMotion = useReducedMotion();

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {!compact ? (
        <span className="text-[10px] uppercase tracking-[0.2em] text-cream-muted">
          {isProhibition ? "Soup & brats only" : "Full tap list unlocked"}
        </span>
      ) : null}
      <button
        type="button"
        role="switch"
        aria-checked={isProhibition}
        aria-label={
          isProhibition
            ? "Switch to Wunderwerks Mode"
            : "Switch to Prohibition Mode"
        }
        onClick={() =>
          onChange(isProhibition ? "wunderwerks" : "prohibition")
        }
        className={`relative flex h-11 w-full max-w-xs items-center rounded-full border p-1 transition-colors duration-300 sm:max-w-none sm:w-56 ${
          isProhibition
            ? "border-sand/20 bg-charcoal/90"
            : "border-brass/40 bg-forest shadow-sm shadow-brass/10"
        }`}
      >
        <motion.span
          layout={!reduceMotion}
          transition={{ type: "spring", stiffness: 500, damping: 35 }}
          className={`absolute top-1 h-9 w-[calc(50%-4px)] rounded-full ${
            isProhibition ? "bg-sand/15" : "bg-brass"
          }`}
          style={{ left: isProhibition ? "calc(50% + 2px)" : "4px" }}
        />
        <span
          className={`relative z-10 flex-1 text-center text-[11px] font-medium uppercase tracking-wide ${
            !isProhibition ? "text-charcoal" : "text-cream-muted"
          }`}
        >
          Beers On
        </span>
        <span
          className={`relative z-10 flex-1 text-center text-[11px] font-medium uppercase tracking-wide ${
            isProhibition ? "text-sand" : "text-cream-muted"
          }`}
        >
          Legal Only
        </span>
      </button>
    </div>
  );
}
