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
    "from-charcoal via-[#3d2b1f] to-[#8b5a2b] border-brass/30",
  brick:
    "from-[#2a1f1a] via-[#4a2f28] to-charcoal border-brass/20",
  glass:
    "from-forest/80 via-charcoal to-[#2c3e50] border-brass/25",
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
      whileHover={reduceMotion ? undefined : { scale: 1.02 }}
      className={`relative overflow-hidden rounded-sm border bg-linear-to-br shadow-lg ${variantStyles[variant]} ${className}`}
    >
      <div className="absolute inset-0 steel-grid opacity-40" />
      <div className="absolute inset-0 bg-linear-to-t from-charcoal/70 via-transparent to-transparent" />
      <div className="relative flex h-full min-h-40 flex-col items-center justify-center gap-3 p-6 text-center">
        <Icon className="h-10 w-10 text-brass/80" strokeWidth={1.25} />
        <p className="text-xs uppercase tracking-[0.25em] text-sand/70">
          {label}
        </p>
      </div>
    </motion.div>
  );
}
