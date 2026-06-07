export const grandOpening = {
  label: "Grand Opening",
  month: "September 2026",
  headline: "Grand Opening · September 2026",
  detail:
    "Doors open this September at 1515 Wells Street. Follow along as we finish the build-out and get ready to pour.",
  /** Used for optional countdown — adjust if a firm date is set. */
  date: "2026-09-12T16:00:00",
} as const;

export function getGrandOpeningCountdown(now = new Date()) {
  const target = new Date(grandOpening.date);
  const diffMs = Math.max(0, target.getTime() - now.getTime());
  const totalDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  return { target, totalDays, hasOpened: diffMs === 0 && now >= target };
}
