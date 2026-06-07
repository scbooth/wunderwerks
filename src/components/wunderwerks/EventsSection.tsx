"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { events } from "@/lib/events";
import type { ComplianceMode } from "@/lib/types";
import { SectionHeading, SectionShell } from "./ui/SectionHeading";

interface EventsSectionProps {
  complianceMode: ComplianceMode;
}

export function EventsSection({ complianceMode }: EventsSectionProps) {
  const reduceMotion = useReducedMotion();
  const isProhibition = complianceMode === "prohibition";

  return (
    <SectionShell id="events" className="relative bg-sand">
      {isProhibition ? (
        <div className="mx-auto flex min-h-[240px] max-w-7xl items-center justify-center px-6 text-center">
          <p className="font-[family-name:var(--font-germania)] text-3xl text-charcoal/70 md:text-4xl">
            Events paused. Compliance in session.
          </p>
        </div>
      ) : (
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Weekly Hangouts"
          subtitle="Self-Sustaining Taproom Nights · Zero Extra Labor"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {events.map((event, index) => (
            <motion.article
              key={event.id}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={reduceMotion ? undefined : { y: -6 }}
              className="group rounded-sm border border-charcoal/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brass/30 bg-brass/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-forest">
                <CalendarDays className="h-3.5 w-3.5" />
                {event.schedule}
              </div>
              <h3 className="font-[family-name:var(--font-germania)] text-2xl text-charcoal">
                {event.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-charcoal/75 md:text-base">
                {event.hook}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
      )}
    </SectionShell>
  );
}
