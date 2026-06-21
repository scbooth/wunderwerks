"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Circle, Goal, Trophy } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  fortWayneTeams,
  localHighlights,
} from "@/lib/fortWayne";
import type { ComplianceMode, FortWayneTeamId } from "@/lib/types";
import { SectionHeading, SectionShell } from "./ui/SectionHeading";

const teamIcons: Record<FortWayneTeamId, LucideIcon> = {
  tincaps: Trophy,
  komets: Circle,
  fwfc: Goal,
};

interface FortWayneSectionProps {
  complianceMode: ComplianceMode;
}

export function FortWayneSection({ complianceMode }: FortWayneSectionProps) {
  const reduceMotion = useReducedMotion();
  const isProhibition = complianceMode === "prohibition";

  if (isProhibition) return null;

  return (
    <SectionShell id="fort-wayne" className="bg-cream">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Fort Wayne"
          subtitle="Wells Street · Downtown corridor · Our city"
          align="center"
        />

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-[1.75] text-gunmetal/90 md:text-xl md:leading-[1.8]">
          Wunderwerks sits on Wells Street in the middle of Fort Wayne&apos;s
          downtown corridor — a short walk from Parkview Field, the Memorial
          Coliseum, and the rivers that give the city its name. We built this
          taproom for neighbors who love where they live.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {fortWayneTeams.map((team, index) => {
            const Icon = teamIcons[team.id];

            return (
              <motion.article
                key={team.id}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className="relative overflow-hidden rounded-sm border border-brick/15 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-label-light">
                    {team.league}
                  </span>
                  <Icon className="h-5 w-5 text-copper" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-semibold text-gunmetal">
                  {team.name}
                </h3>
                <p className="mt-1 text-sm text-steel">
                  {team.sport} · {team.venue}
                </p>
                <p className="mt-4 text-base leading-[1.75] text-gunmetal/90">
                  {team.taproomHook}
                </p>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-16">
          <h3 className="font-display text-2xl font-semibold text-gunmetal md:text-3xl">
            Around Town
          </h3>
          <div className="mt-2 h-px w-24 bg-copper" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {localHighlights.map((place, index) => (
              <motion.div
                key={place.id}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-sm border border-steel/15 bg-white p-5"
              >
                <p className="font-medium text-gunmetal">{place.name}</p>
                <p className="mt-2 text-base leading-[1.75] text-steel">
                  {place.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
