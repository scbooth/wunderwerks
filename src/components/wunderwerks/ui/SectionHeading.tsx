"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

export function SectionHeading({
  title,
  subtitle,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  const reduceMotion = useReducedMotion();
  const isDark = tone === "dark";

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={align === "center" ? "text-center" : "text-left"}
    >
      <h2
        className={`font-display text-4xl font-semibold md:text-5xl ${
          isDark ? "text-cream" : "text-gunmetal"
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-4 h-px w-24 bg-copper ${align === "center" ? "mx-auto" : ""}`}
      />
      {subtitle ? (
        <p
          className={`mt-4 max-w-2xl text-xs uppercase tracking-[0.18em] md:text-sm ${
            isDark ? "text-on-dark-muted" : "text-label-light"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
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
    <section id={id} className={`scroll-mt-32 px-6 py-20 md:px-10 lg:px-16 ${className}`}>
      {children}
    </section>
  );
}
