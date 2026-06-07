"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ComplianceMode } from "@/lib/types";

interface ComplianceToggleProps {
  mode: ComplianceMode;
  onChange: (mode: ComplianceMode) => void;
  className?: string;
}

export function ComplianceToggle({
  mode,
  onChange,
  className = "",
}: ComplianceToggleProps) {
  const isProhibition = mode === "prohibition";
  const reduceMotion = useReducedMotion();

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <span className="text-[10px] uppercase tracking-[0.25em] text-sand/70">
        Compliance Mode
      </span>
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
        className={`relative flex h-11 w-56 items-center rounded-full border p-1 transition-colors duration-300 ${
          isProhibition
            ? "border-sand/20 bg-charcoal/90"
            : "border-brass/40 bg-forest"
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
            !isProhibition ? "text-charcoal" : "text-sand/50"
          }`}
        >
          Wunderwerks
        </span>
        <span
          className={`relative z-10 flex-1 text-center text-[11px] font-medium uppercase tracking-wide ${
            isProhibition ? "text-sand" : "text-sand/50"
          }`}
        >
          Prohibition
        </span>
      </button>
    </div>
  );
}
