"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Coffee, Soup, type LucideIcon } from "lucide-react";
import { complianceMenu } from "@/lib/complianceMenu";
import type { ComplianceItem } from "@/lib/types";
import type { ComplianceMode } from "@/lib/types";
import { SectionHeading, SectionShell } from "./ui/SectionHeading";

const iconsById: Record<ComplianceItem["id"], LucideIcon> = {
  "bier-kase-suppe": Soup,
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
          title="The Compliance Board"
          subtitle="Indiana Code Title 7.1 · Minimum Food Service, Elevated"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
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
                className={`relative overflow-hidden rounded-sm border border-charcoal/10 bg-sand p-6 shadow-sm transition-shadow ${
                  emphasized ? "brass-glow ring-1 ring-brass/30" : ""
                }`}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-brass" />
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
      </div>
    </SectionShell>
  );
}
