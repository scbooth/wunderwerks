"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Anchor } from "lucide-react";
import { SectionHeading, SectionShell } from "./ui/SectionHeading";
import { PlaceholderImage } from "./ui/PlaceholderImage";

export function StorySection() {
  const reduceMotion = useReducedMotion();

  return (
    <SectionShell id="story" className="bg-sand">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading title="The Resurrection of the Pack" />
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8 space-y-6 text-base leading-8 text-charcoal/85 md:text-lg"
          >
            <div className="flex items-start gap-3">
              <Anchor className="mt-1 h-5 w-5 shrink-0 text-brass" />
              <p>
                Built in the early 1900s as a local slaughterhouse, 1515 Wells
                Street is now a small-batch brewery run by two brewers. We kept
                the iron rafters and exposed brick, swapped meat hooks for tap
                handles, and focused on making clean, approachable lagers you
                can actually read the menu for.
              </p>
            </div>
          </motion.div>
        </div>

        <PlaceholderImage
          label="Exposed Brick & Iron Rafters"
          icon={Anchor}
          variant="brick"
          className="min-h-[420px]"
        />
      </div>
    </SectionShell>
  );
}
