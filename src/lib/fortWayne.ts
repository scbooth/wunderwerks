import type {
  FortWayneTeam,
  FortWayneTeamId,
  LocalHighlight,
  SportsBroadcast,
} from "./types";

export const fortWayneTeams: FortWayneTeam[] = [
  {
    id: "tincaps",
    name: "Fort Wayne TinCaps",
    nickname: "TinCaps",
    sport: "Baseball",
    league: "Midwest League",
    venue: "Parkview Field",
    taproomHook:
      "When the Caps are on the road, we pipe the broadcast into the taproom — baseball, Steins, and Wells Street on a Thursday.",
  },
  {
    id: "komets",
    name: "Fort Wayne Komets",
    nickname: "Komets",
    sport: "Hockey",
    league: "ECHL",
    venue: "Allen County War Memorial Coliseum",
    taproomHook:
      "Komets nights mean hockey on the screens, cold lagers, and the kind of loud, loyal crowd the Coliseum is famous for — without leaving downtown.",
  },
  {
    id: "fwfc",
    name: "Fort Wayne FC",
    nickname: "Fort Wayne FC",
    sport: "Soccer",
    league: "USL League One",
    venue: "Lutheran Health Field",
    taproomHook:
      "We cheer on Fort Wayne FC with match-day pours and a taproom full of supporters — local soccer, local beer, same city pride.",
  },
];

export const localHighlights: LocalHighlight[] = [
  {
    id: "rivergreenway",
    name: "Rivergreenway",
    description:
      "Twenty-five miles of trails along the St. Marys, St. Joseph, and Maumee — perfect for a pre-pint walk from downtown.",
  },
  {
    id: "three-rivers",
    name: "Three Rivers Festival",
    description:
      "Fort Wayne's signature summer block party. We're a short walk from the action when the city comes out to celebrate.",
  },
  {
    id: "arts-campus",
    name: "Arts Campus Fort Wayne",
    description:
      "The Embassy Theatre, Arts United Center, and Hall Community Arts Center — culture and concerts at the heart of the city.",
  },
  {
    id: "headwaters",
    name: "Headwaters Park",
    description:
      "Ice skating in winter, festivals in summer, and one of the best gathering spots between the rivers and downtown.",
  },
  {
    id: "science-central",
    name: "Science Central",
    description:
      "A Fort Wayne institution in the old City Light & Power plant — family-friendly, industrial bones, very Wells Street energy.",
  },
  {
    id: "johnny-appleseed",
    name: "Johnny Appleseed Park",
    description:
      "Home of the Johnny Appleseed Festival each fall — heritage, community, and the kind of local tradition we built this taproom for.",
  },
];

/** Upcoming watch-party broadcasts. Update manually each season. */
export const sportsBroadcasts: SportsBroadcast[] = [
  {
    id: "caps-1",
    teamId: "tincaps",
    date: "2026-09-10T19:05:00",
    opponent: "Dayton Dragons",
    isAway: true,
  },
  {
    id: "fwfc-1",
    teamId: "fwfc",
    date: "2026-09-13T19:00:00",
    opponent: "Union Omaha",
    isAway: false,
  },
  {
    id: "komets-1",
    teamId: "komets",
    date: "2026-10-15T19:30:00",
    opponent: "Toledo Walleye",
    isAway: false,
  },
  {
    id: "caps-2",
    teamId: "tincaps",
    date: "2026-09-17T19:05:00",
    opponent: "Lake County Captains",
    isAway: true,
  },
  {
    id: "fwfc-2",
    teamId: "fwfc",
    date: "2026-09-20T18:00:00",
    opponent: "Lexington SC",
    isAway: true,
  },
  {
    id: "komets-2",
    teamId: "komets",
    date: "2026-10-22T19:30:00",
    opponent: "Kalamazoo Wings",
    isAway: true,
  },
];

export const TAPROOM_OPEN_HOUR = 16;

export function getTeamById(teamId: FortWayneTeamId) {
  return fortWayneTeams.find((team) => team.id === teamId);
}

export function getNextBroadcast(now = new Date()): SportsBroadcast | null {
  const upcoming = sportsBroadcasts
    .filter((game) => new Date(game.date) > now)
    .sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );

  return upcoming[0] ?? null;
}

export function getBroadcastStartTime(broadcast: SportsBroadcast): Date {
  const gameDate = new Date(broadcast.date);
  const start = new Date(gameDate);
  start.setHours(TAPROOM_OPEN_HOUR, 0, 0, 0);
  return start;
}

export function getCountdownParts(target: Date, now = new Date()) {
  const diffMs = Math.max(0, target.getTime() - now.getTime());
  const totalMinutes = Math.floor(diffMs / 60000);
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;

  return { days, hours, minutes, totalMinutes };
}
