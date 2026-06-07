"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Beer, CalendarDays, Droplets, Factory } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";
import { grandOpening } from "@/lib/site";
import { PlaceholderImage } from "./ui/PlaceholderImage";

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-screen scroll-mt-32 overflow-hidden bg-charcoal text-sand"
    >
      <div className="absolute inset-0 steel-grid opacity-30" />
      <div className="absolute inset-0 bg-linear-to-br from-charcoal via-[#121212] to-forest/40" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-28 pt-40 lg:grid-cols-2 lg:items-center lg:px-16 lg:pb-32 lg:pt-44">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-sm border border-brass/40 bg-brass/10 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-brass">
            <CalendarDays className="h-3.5 w-3.5" />
            {grandOpening.headline}
          </div>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-brass/80">
            1515 Wells Street · Fort Wayne, Indiana
          </p>
          <h1 className="font-[family-name:var(--font-germania)] text-5xl leading-tight text-sand md:text-6xl lg:text-7xl">
            Forged in Grit.
            <br />
            Poured in Stein.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-sand/75 md:text-xl">
            A neighborhood brewery on Wells Street — between the rivers, the
            TinCaps, the Komets, and Fort Wayne FC. Two brewers, clean honest
            lagers, and a taproom built for easy conversation.{" "}
            {grandOpening.detail}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {["TinCaps", "Komets", "Fort Wayne FC", "Rivergreenway"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-sand/15 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-sand/60"
                >
                  {tag}
                </span>
              ),
            )}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => scrollToSection("tap-list")}
              className="group inline-flex items-center justify-center gap-2 rounded-sm border border-brass px-6 py-3 text-sm uppercase tracking-[0.2em] text-brass transition hover:bg-brass hover:text-charcoal"
            >
              On Tap Today
              <ArrowDownRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("fort-wayne")}
              className="group inline-flex items-center justify-center gap-2 rounded-sm border border-sand/25 px-6 py-3 text-sm uppercase tracking-[0.2em] text-sand transition hover:border-brass hover:text-brass"
            >
              Root for Fort Wayne
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
              label="Industrial Chic Interior"
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
              label="Condensation-Beaded Glassware"
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
