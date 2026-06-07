"use client";

interface FilterChipProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export function FilterChip({ label, active, onClick }: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-4 py-2 text-sm transition-all duration-200 ${
        active
          ? "border-brass bg-brass text-charcoal shadow-sm"
          : "border-charcoal/15 bg-white/60 text-charcoal hover:border-brass/50 hover:text-forest"
      }`}
    >
      {label}
    </button>
  );
}
