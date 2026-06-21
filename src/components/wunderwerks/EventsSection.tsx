"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Users } from "lucide-react";
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
          <p className="font-display text-3xl font-semibold text-steel md:text-4xl">
            Traditions paused. Compliance in session.
          </p>
        </div>
      ) : (
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Taproom Traditions"
          subtitle="Clubs & regulars · Wells Street community"
        />

        <p className="mt-6 max-w-3xl text-prose md:text-lg">
          These aren&apos;t ticketed events — they&apos;re standing invitations.
          Show up when it fits your week, stay because the beer and the company
          are worth it.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {events.map((event, index) => (
            <motion.article
              key={event.id}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              className="group rounded-sm border border-steel/15 bg-white p-6 shadow-sm transition-shadow hover:border-copper/35 hover:shadow-md"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-copper/25 bg-copper/8 px-3 py-1 text-label-light">
                <Users className="h-3.5 w-3.5 text-copper" />
                {event.schedule}
              </div>
              <h3 className="font-display text-2xl font-semibold text-gunmetal">
                {event.title}
              </h3>
              <p className="mt-4 text-prose">
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
