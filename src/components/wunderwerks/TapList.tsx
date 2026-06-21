"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { Beer } from "lucide-react";
import { beerPhilosophy, flagshipBeers } from "@/lib/beers";
import type { ComplianceMode, TapFilter } from "@/lib/types";
import { FriendsFamilySeries } from "./FriendsFamilySeries";
import { FilterChip } from "./ui/FilterChip";
import { SectionHeading, SectionShell } from "./ui/SectionHeading";

const filters: { id: TapFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "light", label: "Light & Crisp" },
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
    if (activeFilter === "all") return flagshipBeers;
    return flagshipBeers.filter((beer) => beer.tag === activeFilter);
  }, [activeFilter]);

  const [selectedId, setSelectedId] = useState(flagshipBeers[0]?.id ?? "");

  const selectedBeer =
    filteredBeers.find((beer) => beer.id === selectedId) ??
    filteredBeers[0] ??
    flagshipBeers[0];

  return (
    <SectionShell id="tap-list" className="relative bg-charcoal text-on-dark">
      {isProhibition ? (
        <div className="mx-auto flex min-h-[280px] max-w-7xl items-center justify-center px-6 text-center">
          <p className="font-display text-3xl font-semibold text-brass md:text-4xl">
            Legally compliant. Emotionally devastated.
          </p>
        </div>
      ) : (
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="On Tap Today"
          subtitle={beerPhilosophy}
          tone="dark"
        />

        <div className="mt-8 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <FilterChip
              key={filter.id}
              label={filter.label}
              active={activeFilter === filter.id}
              variant="dark"
              onClick={() => {
                onFilterChange(filter.id);
                const nextBeer =
                  filter.id === "all"
                    ? flagshipBeers[0]
                    : flagshipBeers.find((beer) => beer.tag === filter.id);
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
                      : "border-cream-subtle/25 bg-charcoal hover:border-brass/50"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-medium text-cream">{beer.name}</span>
                    <span className="shrink-0 text-sm font-medium text-cream-muted">
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
                className="rounded-sm border border-brass/25 bg-linear-to-br from-forest/25 to-charcoal p-8 shadow-lg"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-label text-cream-muted">Selected Tap</p>
                    <h3 className="font-display mt-2 text-3xl font-semibold text-cream md:text-4xl">
                      {selectedBeer.name}
                    </h3>
                    {selectedBeer.style ? (
                      <p className="mt-2 text-sm text-cream-muted">
                        {selectedBeer.style}
                      </p>
                    ) : null}
                  </div>
                  <Beer className="h-8 w-8 shrink-0 text-brass" />
                </div>
                <p className="text-lg leading-[1.75] text-cream md:text-xl md:leading-[1.8]">
                  {selectedBeer.description}
                </p>
                <div className="mt-8 grid gap-6 border-t border-cream-subtle/20 pt-6 sm:grid-cols-2">
                  <div>
                    <p className="text-label text-cream-muted">ABV</p>
                    <p className="mt-2 text-3xl font-semibold tabular-nums text-cream">
                      {selectedBeer.abv}%
                    </p>
                  </div>
                  <div>
                    <p className="text-label text-cream-muted">Glassware</p>
                    <p className="mt-2 text-lg text-cream">{selectedBeer.glassware}</p>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        <FriendsFamilySeries />
      </div>
      )}
    </SectionShell>
  );
}
