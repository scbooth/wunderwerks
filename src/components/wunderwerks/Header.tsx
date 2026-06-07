"use client";

import { Menu } from "lucide-react";
import type { ComplianceMode } from "@/lib/types";
import { navLinks, scrollToSection } from "@/lib/scroll";
import { ComplianceToggle } from "./ComplianceToggle";

interface HeaderProps {
  mobileMenuOpen: boolean;
  onMobileMenuToggle: () => void;
  complianceMode: ComplianceMode;
  onComplianceChange: (mode: ComplianceMode) => void;
}

export function Header({
  mobileMenuOpen,
  onMobileMenuToggle,
  complianceMode,
  onComplianceChange,
}: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-brass/20 bg-charcoal/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <button
          type="button"
          onClick={() => scrollToSection("hero")}
          className="group text-left"
        >
          <span className="font-[family-name:var(--font-germania)] text-2xl tracking-wide text-sand md:text-3xl">
            Wunderwerks
          </span>
          <span className="mt-1 block h-0.5 w-0 bg-brass transition-all duration-300 group-hover:w-full" />
        </button>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              className="text-sm uppercase tracking-[0.18em] text-sand/80 transition hover:text-brass"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ComplianceToggle
            mode={complianceMode}
            onChange={onComplianceChange}
          />
        </div>

        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          onClick={onMobileMenuToggle}
          className="rounded-full border border-sand/20 p-2 text-sand transition hover:border-brass lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
