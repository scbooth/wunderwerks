"use client";

interface FilterChipProps {
  label: string;
  active: boolean;
  onClick: () => void;
  variant?: "light" | "dark";
}

export function FilterChip({
  label,
  active,
  onClick,
}: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-4 py-2 text-sm transition-all duration-200 ${
        active
          ? "border-brick bg-brick text-cream shadow-sm"
          : "border-steel/25 bg-white text-gunmetal hover:border-copper hover:text-brick"
      }`}
    >
      {label}
    </button>
  );
}
