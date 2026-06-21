"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface PlaceholderImageProps {
  label: string;
  icon: LucideIcon;
  className?: string;
  variant?: "copper" | "brick" | "glass";
}

const variantStyles = {
  copper:
    "from-[#3a3530] via-[#4a3828] to-[#8b5e4a] border-brass/25",
  brick:
    "from-[#3a2f28] via-[#5c4038] to-[#2c2925] border-brick/30",
  glass:
    "from-forest/60 via-[#3a3530] to-[#4a5568] border-brass/20",
};

export function PlaceholderImage({
  label,
  icon: Icon,
  className = "",
  variant = "copper",
}: PlaceholderImageProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={reduceMotion ? undefined : { scale: 1.01 }}
      className={`relative overflow-hidden rounded-sm border bg-linear-to-br shadow-md ${variantStyles[variant]} ${className}`}
    >
      <div className="absolute inset-0 steel-grid opacity-30" />
      <div className="absolute inset-0 bg-linear-to-t from-charcoal/60 via-transparent to-transparent" />
      <div className="relative flex h-full min-h-40 flex-col items-center justify-center gap-3 p-6 text-center">
        <Icon className="h-10 w-10 text-brass/75" strokeWidth={1.25} />
        <p className="text-xs uppercase tracking-[0.2em] text-cream-muted">
          {label}
        </p>
      </div>
    </motion.div>
  );
}
