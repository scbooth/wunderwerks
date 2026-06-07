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
          <SectionHeading title="Our Story" />
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
                Once a historic meatpacking facility, 1515 Wells Street has been
                reimagined as a neighborhood brewery. We&apos;ve preserved the
                building&apos;s original brick and steel bones to create a
                simple, welcoming taproom — a few blocks from Parkview Field,
                the Memorial Coliseum, and the heart of downtown. Run by just
                two brewers, our focus is entirely on the craft—pouring clean,
                honest lagers and keeping the conversation easy.
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
