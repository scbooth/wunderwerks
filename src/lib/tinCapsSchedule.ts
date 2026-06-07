import type { TinCapsGame } from "./types";

/** Upcoming Fort Wayne TinCaps away games. Update manually. */
export const tinCapsSchedule: TinCapsGame[] = [
  {
    id: "away-1",
    date: "2026-06-11T19:05:00",
    opponent: "Dayton Dragons",
    isHome: false,
  },
  {
    id: "away-2",
    date: "2026-06-18T19:05:00",
    opponent: "Lake County Captains",
    isHome: false,
  },
  {
    id: "away-3",
    date: "2026-07-02T19:05:00",
    opponent: "West Michigan Whitecaps",
    isHome: false,
  },
  {
    id: "away-4",
    date: "2026-07-16T19:05:00",
    opponent: "Great Lakes Loons",
    isHome: false,
  },
];

export const TAPROOM_OPEN_HOUR = 16;

export function getNextAwayGame(now = new Date()): TinCapsGame | null {
  const upcoming = tinCapsSchedule
    .filter((game) => !game.isHome && new Date(game.date) > now)
    .sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );

  return upcoming[0] ?? null;
}

export function getRallyStartTime(game: TinCapsGame): Date {
  const gameDate = new Date(game.date);
  const rallyStart = new Date(gameDate);
  rallyStart.setHours(TAPROOM_OPEN_HOUR, 0, 0, 0);
  return rallyStart;
}

export function getCountdownParts(target: Date, now = new Date()) {
  const diffMs = Math.max(0, target.getTime() - now.getTime());
  const totalMinutes = Math.floor(diffMs / 60000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return { hours, minutes, totalMinutes };
}
