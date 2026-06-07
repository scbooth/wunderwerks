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
  "wunder-kase-soup": Soup,
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
          subtitle="Indiana Code Title 7.1 · House Menu & Local Partnerships"
        />

        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-8 text-charcoal/75 md:text-lg">
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
                className={`relative overflow-hidden rounded-sm border border-charcoal/15 bg-sand p-6 shadow-sm transition-shadow ${
                  emphasized ? "brass-glow ring-1 ring-brass/30" : ""
                }`}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-brass" />
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-brass">
                    {item.category}
                  </span>
                  <Icon className="h-5 w-5 text-forest/70" strokeWidth={1.5} />
                </div>
                <h3 className="font-[family-name:var(--font-germania)] text-2xl text-charcoal">
                  {item.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-charcoal/75 md:text-base">
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
          className={`mt-16 rounded-sm border border-brass/20 bg-charcoal p-8 text-sand md:p-10 ${
            emphasized ? "brass-glow" : ""
          }`}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-brass">
                <Truck className="h-5 w-5" strokeWidth={1.5} />
                <span className="text-xs uppercase tracking-[0.22em]">
                  Wells Street Delivery
                </span>
              </div>
              <h3 className="mt-3 font-[family-name:var(--font-germania)] text-3xl">
                Eat Local, Stay Seated
              </h3>
              <p className="mt-4 text-sm leading-7 text-sand/75 md:text-base">
                {corridorBlurb}
              </p>
            </div>
            <UtensilsCrossed
              className="hidden h-16 w-16 shrink-0 text-brass/20 md:block"
              strokeWidth={1}
            />
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {deliveryPartners.map((partner) => (
              <div
                key={partner.id}
                className="rounded-sm border border-sand/15 bg-sand/5 p-4"
              >
                <p className="font-medium text-sand">{partner.name}</p>
                <p className="mt-1 text-sm text-sand/60">{partner.specialty}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
