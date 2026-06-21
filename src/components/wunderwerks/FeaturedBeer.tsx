"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { featuredBeer } from "@/lib/beers";
import type { ComplianceMode } from "@/lib/types";
import { PlaceholderImage } from "./ui/PlaceholderImage";
import { SectionHeading, SectionShell } from "./ui/SectionHeading";

interface FeaturedBeerProps {
  complianceMode: ComplianceMode;
}

export function FeaturedBeer({ complianceMode }: FeaturedBeerProps) {
  const reduceMotion = useReducedMotion();
  const isProhibition = complianceMode === "prohibition";

  if (isProhibition) return null;

  return (
    <SectionShell id="featured-beer" className="bg-sand">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Featured Beer"
          subtitle="Johnny's signature pour · Wells Street favorite"
        />

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center"
        >
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber/35 bg-amber/12 px-3 py-1 text-label-light">
              <Sparkles className="h-3.5 w-3.5 text-amber" />
              Most Popular Pour
            </span>

            <h3 className="font-display mt-6 text-5xl font-semibold text-brick md:text-6xl">
              {featuredBeer.name}
            </h3>

            <p className="mt-3 text-sm font-medium uppercase tracking-[0.14em] text-steel">
              {featuredBeer.style} · {featuredBeer.abv}% ABV
            </p>

            <p className="mt-6 max-w-xl text-prose md:text-lg">
              {featuredBeer.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-6 border-t border-steel/15 pt-6">
              <div>
                <p className="text-label-light">ABV</p>
                <p className="mt-1 text-2xl font-semibold tabular-nums text-brick">
                  {featuredBeer.abv}%
                </p>
              </div>
              <div>
                <p className="text-label-light">Glassware</p>
                <p className="mt-1 text-lg text-gunmetal">
                  {featuredBeer.glassware}
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <PlaceholderImage
              label="iLUMENate · New England IPA"
              icon={Sparkles}
              variant="glass"
              className="min-h-[320px] lg:min-h-[400px]"
            />
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
