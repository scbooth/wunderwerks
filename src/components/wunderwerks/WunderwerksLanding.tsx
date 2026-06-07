"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Camera, CalendarDays, Clock, MapPin } from "lucide-react";
import type { ComplianceMode, TapFilter } from "@/lib/types";
import { ComplianceToggle } from "./ComplianceToggle";
import { ComplianceMenu } from "./ComplianceMenu";
import { EventsSection } from "./EventsSection";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { MobileMenu } from "./MobileMenu";
import { StorySection } from "./StorySection";
import { TapList } from "./TapList";
import { FortWayneSection } from "./FortWayneSection";
import { FortWayneSportsBar } from "./FortWayneSportsBar";
import { GrandOpeningBanner } from "./GrandOpeningBanner";

export function WunderwerksLanding() {
  const reduceMotion = useReducedMotion();
  const [complianceMode, setComplianceMode] =
    useState<ComplianceMode>("wunderwerks");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTapFilter, setActiveTapFilter] = useState<TapFilter>("all");

  const isProhibition = complianceMode === "prohibition";

  return (
    <div
      className={`relative min-h-screen pb-24 transition-[filter] duration-300 ${
        isProhibition ? "grayscale" : ""
      }`}
    >
      <Header
        mobileMenuOpen={mobileMenuOpen}
        onMobileMenuToggle={() => setMobileMenuOpen((open) => !open)}
        complianceMode={complianceMode}
        onComplianceChange={setComplianceMode}
      />

      <GrandOpeningBanner />

      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        complianceMode={complianceMode}
        onComplianceChange={setComplianceMode}
      />

      <AnimatePresence>
        {isProhibition ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.3 }}
            className="pointer-events-none fixed inset-0 z-20 bg-charcoal/35"
          />
        ) : null}
      </AnimatePresence>

      <main className="relative z-10">
        <HeroSection />
        <StorySection />
        <ComplianceMenu complianceMode={complianceMode} />
        <TapList
          activeFilter={activeTapFilter}
          onFilterChange={setActiveTapFilter}
          complianceMode={complianceMode}
        />
        <EventsSection complianceMode={complianceMode} />
        <FortWayneSection complianceMode={complianceMode} />
      </main>

      <footer className="relative z-10 border-t border-charcoal/10 bg-charcoal px-6 py-12 text-sand md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-[family-name:var(--font-germania)] text-2xl text-brass">
              Wunderwerks
            </p>
            <div className="mt-4 flex items-start gap-2 text-sm text-sand/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
              <span>1515 Wells Street, Fort Wayne, IN</span>
            </div>
            <div className="mt-2 flex items-start gap-2 text-sm text-sand/70">
              <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
              <span>Grand Opening · September 2026</span>
            </div>
            <div className="mt-2 flex items-start gap-2 text-sm text-sand/70">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
              <span>Taproom hours posted at opening · Thu–Sun planned</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Wunderwerks on Instagram"
              className="rounded-full border border-sand/20 p-3 transition hover:border-brass hover:text-brass"
            >
              <Camera className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-20 left-4 z-40 hidden lg:block">
        <ComplianceToggle
          mode={complianceMode}
          onChange={setComplianceMode}
        />
      </div>

      <FortWayneSportsBar />
    </div>
  );
}
