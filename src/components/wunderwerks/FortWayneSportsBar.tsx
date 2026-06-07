"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Timer } from "lucide-react";
import {
  getBroadcastStartTime,
  getCountdownParts,
  getNextBroadcast,
  getTeamById,
} from "@/lib/fortWayne";

export function FortWayneSportsBar() {
  const reduceMotion = useReducedMotion();
  const [now, setNow] = useState(() => new Date());
  const [pulseKey, setPulseKey] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setNow(new Date());
      setPulseKey((value) => value + 1);
    }, 60000);

    return () => window.clearInterval(interval);
  }, []);

  const nextBroadcast = getNextBroadcast(now);
  const team = nextBroadcast ? getTeamById(nextBroadcast.teamId) : null;
  const target = nextBroadcast ? getBroadcastStartTime(nextBroadcast) : null;
  const countdown = target ? getCountdownParts(target, now) : null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-brass/25 bg-charcoal/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-2 px-6 py-3 text-sand sm:flex-row sm:items-center sm:justify-between md:px-10">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-brass">
          <Timer className="h-4 w-4" />
          Fort Wayne Sports
        </div>

        {nextBroadcast && team && countdown ? (
          <p className="text-sm text-sand/85 md:text-base">
            Next {team.nickname} watch party:{" "}
            <motion.span
              key={pulseKey}
              initial={reduceMotion ? false : { scale: 1.08, opacity: 0.7 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="font-mono text-lg font-semibold text-brass"
            >
              {countdown.hours}h {countdown.minutes}m
            </motion.span>{" "}
            until taproom broadcast night.
            <span className="mt-1 block text-xs text-sand/50 sm:ml-2 sm:mt-0 sm:inline">
              {team.sport} · {nextBroadcast.isAway ? "@" : "vs"}{" "}
              {nextBroadcast.opponent}
            </span>
          </p>
        ) : (
          <p className="text-sm text-sand/70">
            TinCaps, Komets, and Fort Wayne FC schedules loading — check back
            for the next downtown watch party.
          </p>
        )}
      </div>
    </div>
  );
}
