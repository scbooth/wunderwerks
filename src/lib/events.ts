import type { BreweryEvent } from "./types";

export const events: BreweryEvent[] = [
  {
    id: "slab-and-stein",
    title: "Slab & Stein BYO Vinyl Night",
    schedule: "Every Tuesday",
    hook: "We set up a turntable at the bar. Bring your favorite records, sign the clipboard, and we spin them over the taproom speakers. No host, no prep — just good beer and community-curated playlists.",
  },
  {
    id: "tabletop-and-taps",
    title: "Tabletop & Taps",
    schedule: "Every Wednesday",
    hook: "Skip the loud trivia hosts. Our Haus Board Game Shelf is stocked with premium indie favorites — Carcassonne, Ticket to Ride, Catan, and more. Grab friends, grab a table, buy pints, and play. It runs itself.",
  },
  {
    id: "wunder-caps-away",
    title: "Wunder-Caps Away Game Rallies",
    schedule: "Thirsty Thursday · TinCaps Away Games",
    hook: "When the Fort Wayne TinCaps are on the road, we pipe the live audio into the taproom, put the game on, and take $1 off cold Stein fills. Downtown baseball energy with zero extra labor from us.",
  },
  {
    id: "food-truck-takeover",
    title: "Wells Street Food Truck Takeover",
    schedule: "Friday & Saturday Nights",
    hook: "Local food trucks roll into our industrial courtyard. They cook, serve, and clean up — we pour clean lagers. Real food, real easy for a two-person crew.",
  },
];
