"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { grandOpening } from "@/lib/site";

export function GrandOpeningStickyBanner() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.aside
      id="opening-updates"
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-copper bg-brick shadow-[0_-4px_20px_rgba(163,74,42,0.2)]"
      aria-label="Grand Opening announcement"
    >
      <div className="absolute inset-0 brick-grid opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 py-5 md:px-10 md:py-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-8">
          <div className="min-w-0 space-y-2">
            <p className="text-label">{grandOpening.label}</p>
            <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-4">
              <h2 className="font-display text-3xl font-semibold leading-none text-cream sm:text-4xl md:text-[2.75rem]">
                {grandOpening.headline}
              </h2>
              <span className="font-display text-2xl font-medium text-amber sm:text-3xl">
                {grandOpening.month}
              </span>
            </div>
            <p className="flex items-start gap-2 text-base text-cream md:text-lg">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-amber" />
              <span>{grandOpening.address}</span>
            </p>
            <p className="text-base font-medium text-cream md:text-lg">
              {grandOpening.tagline}
              <span className="text-on-dark-muted"> · {grandOpening.subline}</span>
            </p>
            <p className="max-w-2xl text-sm leading-relaxed text-on-dark-muted md:text-base">
              {grandOpening.announcement}
            </p>
          </div>

          <a
            href={grandOpening.ctaHref}
            className="group inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-sm border border-amber bg-amber px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-gunmetal transition hover:bg-cream md:self-center"
          >
            {grandOpening.ctaLabel}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </motion.aside>
  );
}
