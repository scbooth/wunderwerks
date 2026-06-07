"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { Beer } from "lucide-react";
import { beers } from "@/lib/beers";
import type { ComplianceMode, TapFilter } from "@/lib/types";
import { FilterChip } from "./ui/FilterChip";
import { SectionHeading, SectionShell } from "./ui/SectionHeading";

const filters: { id: TapFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "light", label: "Light & Crisp" },
  { id: "dark", label: "Dark & Malty" },
  { id: "seasonal", label: "Seasonal" },
];

interface TapListProps {
  activeFilter: TapFilter;
  onFilterChange: (filter: TapFilter) => void;
  complianceMode: ComplianceMode;
}

export function TapList({
  activeFilter,
  onFilterChange,
  complianceMode,
}: TapListProps) {
  const reduceMotion = useReducedMotion();
  const isProhibition = complianceMode === "prohibition";

  const filteredBeers = useMemo(() => {
    if (activeFilter === "all") return beers;
    return beers.filter((beer) => beer.tag === activeFilter);
  }, [activeFilter]);

  const [selectedId, setSelectedId] = useState(beers[0]?.id ?? "");

  const selectedBeer =
    filteredBeers.find((beer) => beer.id === selectedId) ??
    filteredBeers[0] ??
    beers[0];

  return (
    <SectionShell id="tap-list" className="relative bg-charcoal text-sand">
      {isProhibition ? (
        <div className="mx-auto flex min-h-[280px] max-w-7xl items-center justify-center px-6 text-center">
          <p className="font-[family-name:var(--font-germania)] text-3xl text-brass md:text-4xl">
            Legally compliant. Emotionally devastated.
          </p>
        </div>
      ) : (
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="On Tap Today"
          subtitle="Clean Lagers · Plain English · Two Brewers Behind the Bar"
        />

        <div className="mt-8 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <FilterChip
              key={filter.id}
              label={filter.label}
              active={activeFilter === filter.id}
              onClick={() => {
                onFilterChange(filter.id);
                const nextBeer =
                  filter.id === "all"
                    ? beers[0]
                    : beers.find((beer) => beer.tag === filter.id);
                if (nextBeer) setSelectedId(nextBeer.id);
              }}
            />
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div className="space-y-3">
            {filteredBeers.map((beer) => {
              const active = selectedBeer?.id === beer.id;

              return (
                <motion.button
                  key={beer.id}
                  type="button"
                  onClick={() => setSelectedId(beer.id)}
                  whileHover={reduceMotion ? undefined : { x: 4 }}
                  className={`w-full rounded-sm border px-5 py-4 text-left transition ${
                    active
                      ? "border-brass bg-forest/40"
                      : "border-sand/10 bg-charcoal hover:border-brass/40"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-medium text-sand">{beer.name}</span>
                    <span className="shrink-0 text-sm text-brass">
                      {beer.abv}% ABV
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            {selectedBeer ? (
              <motion.div
                key={selectedBeer.id}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="rounded-sm border border-brass/25 bg-linear-to-br from-forest/30 to-charcoal p-8 shadow-xl"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-brass">
                      Selected Tap
                    </p>
                    <h3 className="mt-2 font-[family-name:var(--font-germania)] text-3xl">
                      {selectedBeer.name}
                    </h3>
                  </div>
                  <Beer className="h-8 w-8 text-brass/80" />
                </div>
                <p className="text-lg leading-8 text-sand/80">
                  {selectedBeer.description}
                </p>
                <div className="mt-8 grid gap-4 border-t border-sand/10 pt-6 sm:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-brass">
                      ABV
                    </p>
                    <p className="mt-1 text-2xl font-semibold">
                      {selectedBeer.abv}%
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-brass">
                      Glassware
                    </p>
                    <p className="mt-1 text-sand/85">{selectedBeer.glassware}</p>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
      )}
    </SectionShell>
  );
}
