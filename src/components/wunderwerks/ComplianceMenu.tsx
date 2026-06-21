"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Coffee,
  Sandwich,
  Soup,
  Truck,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import {
  complianceMenu,
  corridorBlurb,
  corridorIntro,
  deliveryPartners,
} from "@/lib/complianceMenu";
import type { ComplianceItem, ComplianceMode } from "@/lib/types";
import { SectionHeading, SectionShell } from "./ui/SectionHeading";

const iconsById: Record<ComplianceItem["id"], LucideIcon> = {
  "beer-cheese-soup": Soup,
  "compliance-brat": Sandwich,
  "legal-beverages": Coffee,
};

interface ComplianceMenuProps {
  complianceMode: ComplianceMode;
}

export function ComplianceMenu({ complianceMode }: ComplianceMenuProps) {
  const reduceMotion = useReducedMotion();
  const emphasized = complianceMode === "prohibition";

  return (
    <SectionShell id="compliance" className="bg-white">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="The Wells Street Corridor"
          subtitle="House menu · Local delivery · Neighborhood kitchens"
        />

        <p className="mx-auto mt-6 max-w-3xl text-center text-prose md:text-lg">
          {corridorIntro}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {complianceMenu.map((item, index) => {
            const Icon = iconsById[item.id] ?? Coffee;

            return (
              <motion.article
                key={item.id}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className={`relative overflow-hidden rounded-sm border border-steel/15 bg-sand p-6 shadow-sm transition-shadow ${
                  emphasized ? "copper-glow ring-1 ring-copper/30" : ""
                }`}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-copper/50" />
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-label-light">
                    {item.category}
                  </span>
                  <Icon className="h-5 w-5 text-brick/80" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-semibold text-gunmetal">
                  {item.name}
                </h3>
                <p className="mt-3 text-prose">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-16 rounded-sm border border-brick/20 bg-brick p-8 text-cream md:p-10 ${
            emphasized ? "copper-glow" : ""
          }`}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-label">
                <Truck className="h-5 w-5 text-amber" strokeWidth={1.5} />
                <span>Wells Street Delivery</span>
              </div>
              <h3 className="font-display mt-3 text-3xl font-semibold text-cream">
                Eat Local, Stay Seated
              </h3>
              <p className="mt-4 text-base leading-[1.75] text-cream md:text-lg md:leading-[1.8]">
                {corridorBlurb}
              </p>
            </div>
            <UtensilsCrossed
              className="hidden h-16 w-16 shrink-0 text-cream/20 md:block"
              strokeWidth={1}
            />
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {deliveryPartners.map((partner) => (
              <div
                key={partner.id}
                className="rounded-sm border border-cream/20 bg-cream/10 p-4"
              >
                <p className="font-medium text-cream">{partner.name}</p>
                <p className="mt-1 text-sm text-on-dark-muted">{partner.specialty}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
