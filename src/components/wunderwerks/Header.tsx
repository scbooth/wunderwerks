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
    <header className="fixed inset-x-0 top-0 z-30 border-b border-brick/15 bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <button
          type="button"
          onClick={() => scrollToSection("hero")}
          className="group text-left"
        >
          <span className="font-display text-2xl font-semibold text-brick md:text-3xl">
            Wunderwerks
          </span>
          <span className="mt-1 block h-0.5 w-0 bg-copper transition-all duration-300 group-hover:w-full" />
        </button>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-medium uppercase tracking-[0.14em] text-steel transition hover:text-brick"
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
          className="rounded-full border border-steel/30 p-2 text-gunmetal transition hover:border-brick hover:text-brick lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
