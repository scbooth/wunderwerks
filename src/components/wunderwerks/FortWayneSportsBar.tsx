"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  getBroadcastStartTime,
  getCountdownParts,
  getNextBroadcast,
  getTeamById,
} from "@/lib/fortWayne";
import { CountdownDisplay } from "./ui/CountdownDisplay";

export function FortWayneSportsBar() {
  const reduceMotion = useReducedMotion();
  const [now, setNow] = useState(() => new Date());
  const [pulseKey, setPulseKey] = useState(0);

  useEffect(() => {
    const tick = () => {
      setNow(new Date());
      setPulseKey((value) => value + 1);
    };

    tick();
    const interval = window.setInterval(tick, 60_000);
    return () => window.clearInterval(interval);
  }, []);

  const nextBroadcast = getNextBroadcast(now);
  const team = nextBroadcast ? getTeamById(nextBroadcast.teamId) : null;
  const target = nextBroadcast ? getBroadcastStartTime(nextBroadcast) : null;
  const countdown = target ? getCountdownParts(target, now) : null;

  const eventTitle = team
    ? `Next ${team.nickname} Watch Party`
    : "Next Fort Wayne Watch Party";

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-brass/30 bg-charcoal/98 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-4 md:px-10 md:py-5">
        {nextBroadcast && team && countdown ? (
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-8">
            <div className="min-w-0 space-y-1">
              <p className="font-[family-name:var(--font-germania)] text-xl leading-tight text-cream sm:text-2xl">
                {eventTitle}
              </p>
              <p className="text-sm text-cream-muted">
                {nextBroadcast.isAway ? "@" : "vs"} {nextBroadcast.opponent}
              </p>
            </div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="shrink-0"
            >
              <CountdownDisplay
                days={countdown.days}
                hours={countdown.hours}
                minutes={countdown.minutes}
                pulseKey={pulseKey}
              />
            </motion.div>
          </div>
        ) : (
          <p className="text-center text-sm text-cream-muted md:text-left md:text-base">
            Watch party schedule coming soon — TinCaps, Komets, and Fort Wayne
            FC.
          </p>
        )}
      </div>
    </div>
  );
}
