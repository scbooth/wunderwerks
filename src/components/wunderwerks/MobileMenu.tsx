"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import type { ComplianceMode } from "@/lib/types";
import { navLinks, scrollToSection } from "@/lib/scroll";
import { ComplianceToggle } from "./ComplianceToggle";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  complianceMode: ComplianceMode;
  onComplianceChange: (mode: ComplianceMode) => void;
}

export function MobileMenu({
  open,
  onClose,
  complianceMode,
  onComplianceChange,
}: MobileMenuProps) {
  const reduceMotion = useReducedMotion();

  const handleNav = (id: string) => {
    scrollToSection(id);
    onClose();
  };

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            aria-label="Close menu overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            className="fixed inset-0 z-40 bg-charcoal/60 backdrop-blur-sm lg:hidden"
            onClick={onClose}
          />
          <motion.aside
            initial={reduceMotion ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="fixed right-0 top-0 z-50 flex h-full w-[min(88vw,320px)] flex-col border-l border-brass/20 bg-charcoal px-6 py-8 text-cream lg:hidden"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="font-[family-name:var(--font-germania)] text-2xl text-cream">
                Wunderwerks
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={onClose}
                className="rounded-full border border-sand/20 p-2 transition hover:border-brass"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNav(link.id)}
                  className="border-b border-cream-subtle/15 pb-3 text-left text-lg text-cream transition hover:text-brass"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="mt-auto border-t border-sand/10 pt-6">
              <ComplianceToggle
                mode={complianceMode}
                onChange={onComplianceChange}
                compact
              />
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
