"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Building2 } from "lucide-react";
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
            className="mt-8 space-y-6 text-prose md:text-lg"
          >
            <div className="flex items-start gap-3">
              <Building2 className="mt-1 h-5 w-5 shrink-0 text-brass" />
              <p>
                1515 Wells Street was once a meatpacking facility. We kept the
                original brick, steel, and timber bones and turned the space into
                a neighborhood brewery — a few blocks from Parkview Field, the
                Memorial Coliseum, and downtown Fort Wayne.
              </p>
            </div>
            <p>
              Run by two brewers with family roots in the craft, our focus is
              simple: pour excellent beer and keep the taproom welcoming. The
              brewing draws on traditional lager techniques and modern IPA
              experimentation — heritage-inspired, never costume.
            </p>
            <p>
              This is a place where Wells Street neighbors meet after work,
              where regulars know each other by name, and where the beer is
              always the reason you came.
            </p>
          </motion.div>
        </div>

        <PlaceholderImage
          label="Exposed Brick & Steel Beams"
          icon={Building2}
          variant="brick"
          className="min-h-[420px]"
        />
      </div>
    </SectionShell>
  );
}
