"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Beer, CalendarDays, Droplets, Factory } from "lucide-react";
import { beerPhilosophy } from "@/lib/beers";
import { scrollToSection } from "@/lib/scroll";
import { grandOpening } from "@/lib/site";
import { PlaceholderImage } from "./ui/PlaceholderImage";

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-screen scroll-mt-32 overflow-hidden bg-sand text-gunmetal"
    >
      <div className="absolute inset-0 brick-grid opacity-60" />
      <div className="absolute inset-0 warm-gradient-hero" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-28 pt-32 lg:grid-cols-2 lg:items-center lg:px-16 lg:pb-32 lg:pt-36">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-sm border border-brick/25 bg-brick/8 px-3 py-1.5 text-label-light">
            <CalendarDays className="h-3.5 w-3.5 text-brick" />
            {grandOpening.month}
          </div>
          <p className="mb-4 text-label-light">
            1515 Wells Street · Fort Wayne, Indiana
          </p>
          <h1 className="font-display text-5xl font-semibold leading-tight text-gunmetal md:text-6xl lg:text-7xl">
            Good Beer.
            <br />
            Good Company.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-[1.75] text-gunmetal/90 md:text-xl md:leading-[1.8]">
            A neighborhood brewery in a restored early-1900s brick building on
            Wells Street. {beerPhilosophy} {grandOpening.detail}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {["Wells Street", "Rivergreenway", "Parkview Field", "Downtown"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-steel/25 bg-white/50 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-steel"
                >
                  {tag}
                </span>
              ),
            )}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => scrollToSection("featured-beer")}
              className="group inline-flex items-center justify-center gap-2 rounded-sm border border-brick bg-brick px-6 py-3 text-sm font-medium uppercase tracking-[0.16em] text-cream transition hover:border-copper hover:bg-copper"
            >
              Meet iLUMENate
              <ArrowDownRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("tap-list")}
              className="group inline-flex items-center justify-center gap-2 rounded-sm border border-steel/35 bg-white/60 px-6 py-3 text-sm font-medium uppercase tracking-[0.16em] text-gunmetal transition hover:border-brick hover:text-brick"
            >
              Full Tap List
              <ArrowDownRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-2"
          >
            <PlaceholderImage
              label="Historic Brick Taproom"
              icon={Factory}
              variant="brick"
              className="min-h-52"
            />
          </motion.div>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <PlaceholderImage
              label="Copper Brewing Tanks"
              icon={Beer}
              variant="copper"
              className="min-h-44"
            />
          </motion.div>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <PlaceholderImage
              label="Fresh-Poured Pints"
              icon={Droplets}
              variant="glass"
              className="min-h-44"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
