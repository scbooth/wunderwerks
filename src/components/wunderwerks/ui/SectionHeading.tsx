"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={align === "center" ? "text-center" : "text-left"}
    >
      <h2 className="font-[family-name:var(--font-germania)] text-4xl tracking-wide text-charcoal md:text-5xl">
        {title}
      </h2>
      <div
        className={`mt-4 h-px w-24 bg-brass ${align === "center" ? "mx-auto" : ""}`}
      />
      {subtitle ? (
        <p className="mt-4 max-w-2xl text-sm uppercase tracking-[0.2em] text-brass md:text-base">
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
}

interface SectionShellProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function SectionShell({ id, children, className = "" }: SectionShellProps) {
  return (
    <section id={id} className={`scroll-mt-24 px-6 py-20 md:px-10 lg:px-16 ${className}`}>
      {children}
    </section>
  );
}
