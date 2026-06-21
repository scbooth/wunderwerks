"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Heart, Users } from "lucide-react";
import type { Beer } from "@/lib/types";
import {
  friendsFamilyBeers,
  friendsFamilySeriesDisclaimer,
  friendsFamilySeriesIntro,
} from "@/lib/beers";

function FriendsFamilyBeerCard({
  beer,
  index,
}: {
  beer: Beer;
  index: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="relative flex flex-col rounded-sm border border-dashed border-brass/30 bg-sand/5 p-6"
    >
      <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-brass/35 bg-brass/8 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-brass">
        <Users className="h-3 w-3" />
        Friends &amp; Family Series
      </span>

      <h4 className="font-display mt-4 text-2xl font-semibold text-cream">
        {beer.name}
      </h4>

      <p className="mt-1 text-sm text-cream-muted">
        {beer.style} · {beer.abv}% ABV
      </p>

      <p className="mt-4 flex-1 text-base leading-[1.75] text-cream">
        {beer.description}
      </p>

      {beer.tagline ? (
        <p className="mt-4 border-t border-brass/20 pt-4 text-sm italic text-brass">
          &ldquo;{beer.tagline}&rdquo;
        </p>
      ) : null}
    </motion.article>
  );
}

export function FriendsFamilySeries() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="mt-20 border-t border-cream-subtle/15 pt-16"
    >
      <div className="flex items-start gap-3">
        <Heart className="mt-1 h-5 w-5 shrink-0 text-brass/80" strokeWidth={1.5} />
        <div>
          <h3 className="font-display text-2xl font-semibold text-cream md:text-3xl">
            Friends &amp; Family Series
          </h3>
          <div className="mt-3 h-px w-16 bg-brass/60" />
        </div>
      </div>

      <p className="mt-6 max-w-2xl text-base leading-[1.75] text-cream-muted md:text-lg md:leading-[1.8]">
        {friendsFamilySeriesIntro}
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {friendsFamilyBeers.map((beer, index) => (
          <FriendsFamilyBeerCard key={beer.id} beer={beer} index={index} />
        ))}
      </div>

      <p className="mt-6 text-sm text-cream-subtle">
        {friendsFamilySeriesDisclaimer}
      </p>
    </motion.div>
  );
}
