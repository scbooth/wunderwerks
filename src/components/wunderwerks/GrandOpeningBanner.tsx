"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { useEffect, useState } from "react";
import { getGrandOpeningCountdown, grandOpening } from "@/lib/site";

export function GrandOpeningBanner() {
  const reduceMotion = useReducedMotion();
  const [daysUntil, setDaysUntil] = useState<number | null>(null);

  useEffect(() => {
    const update = () => {
      const { totalDays, hasOpened } = getGrandOpeningCountdown();
      setDaysUntil(hasOpened ? 0 : totalDays);
    };

    update();
    const interval = window.setInterval(update, 60_000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed inset-x-0 top-[4.25rem] z-20 border-b border-brass/25 bg-forest"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-1 px-6 py-2.5 text-center sm:flex-row sm:gap-3 md:px-10">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-brass">
          <CalendarDays className="h-3.5 w-3.5" />
          {grandOpening.headline}
        </div>
        {daysUntil !== null && daysUntil > 0 ? (
          <span className="text-xs text-sand/75">
            {daysUntil} day{daysUntil === 1 ? "" : "s"} until we open the
            taproom
          </span>
        ) : null}
      </div>
    </motion.div>
  );
}
