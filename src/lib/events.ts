import type { BreweryEvent } from "./types";

export const events: BreweryEvent[] = [
  {
    id: "analog-night",
    title: "Analog Night",
    schedule: "Every Saturday",
    hook: "A standing taproom tradition for vinyl collectors. Bring a record, sign the clipboard at the bar, and take a turn on the house speakers. Not a scheduled show — just a regular night for people who like their beer fresh and their music on wax.",
  },
  {
    id: "trail-and-tap",
    title: "Trail & Tap",
    schedule: "First Sunday each month",
    hook: "Meet at the Rivergreenway, log a few miles together, and finish back at the bar. A simple club for neighbors who earn their pint before they order one.",
  },
  {
    id: "quiet-pints",
    title: "Quiet Pints Reading Society",
    schedule: "Third Tuesday each month",
    hook: "One book, one month, no microphones. Read at your own pace and show up ready to talk over a pint — more reading society than event series.",
  },
  {
    id: "neighborhood-league",
    title: "Neighborhood League",
    schedule: "Every Wednesday",
    hook: "Pull a board game from the house shelf or bring your own. Same faces, rotating tables, quiet competition — the mid-week fixture for Wells Street regulars.",
  },
  {
    id: "fort-wayne-radio-club",
    title: "Fort Wayne Radio Club",
    schedule: "Thirsty Thursday · TinCaps, Komets & Fort Wayne FC seasons",
    hook: "When hometown teams are on, the taproom becomes the neighborhood watch party. Away feeds on the radio, home games on the screens — cold pints, loyal crowd, same city pride.",
  },
];
