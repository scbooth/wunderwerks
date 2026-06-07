import type { TinCapsGame } from "./types";

/** Upcoming Fort Wayne TinCaps home games at Parkview Field. Update manually. */
export const tinCapsSchedule: TinCapsGame[] = [
  {
    id: "game-1",
    date: "2026-06-12T19:05:00",
    opponent: "Dayton Dragons",
    isHome: true,
  },
  {
    id: "game-2",
    date: "2026-06-19T19:05:00",
    opponent: "Lake County Captains",
    isHome: true,
  },
  {
    id: "game-3",
    date: "2026-07-03T19:05:00",
    opponent: "West Michigan Whitecaps",
    isHome: true,
  },
  {
    id: "game-4",
    date: "2026-07-17T19:05:00",
    opponent: "Great Lakes Loons",
    isHome: true,
  },
];

export const TAPROOM_OPEN_HOUR = 16;

export function getNextHomeGame(now = new Date()): TinCapsGame | null {
  const upcoming = tinCapsSchedule
    .filter((game) => game.isHome && new Date(game.date) > now)
    .sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );

  return upcoming[0] ?? null;
}

export function getSpecialsStartTime(game: TinCapsGame): Date {
  const gameDate = new Date(game.date);
  const specialsStart = new Date(gameDate);
  specialsStart.setHours(TAPROOM_OPEN_HOUR, 0, 0, 0);
  return specialsStart;
}

export function getCountdownParts(target: Date, now = new Date()) {
  const diffMs = Math.max(0, target.getTime() - now.getTime());
  const totalMinutes = Math.floor(diffMs / 60000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return { hours, minutes, totalMinutes };
}
