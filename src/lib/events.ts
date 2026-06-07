import type { BreweryEvent } from "./types";

export const events: BreweryEvent[] = [
  {
    id: "tabletop-and-taps",
    title: "Tabletop & Taps",
    schedule: "Every Wednesday",
    hook: "Bring your favorite board games or pull one from our curated house shelf of indie strategy games. A mid-week staple for those who appreciate good strategy, quiet competition, and fresh lager.",
  },
  {
    id: "fort-wayne-sports",
    title: "Fort Wayne Sports Broadcasts",
    schedule: "Thirsty Thursday · TinCaps, Komets & Fort Wayne FC",
    hook: "When our hometown teams are on — TinCaps baseball at Parkview Field, Komets hockey at the Coliseum, or Fort Wayne FC at Lutheran Health Field — we tune in at the taproom. Away-day radio feeds, home-game screens, Steins raised for Fort Wayne.",
  },
  {
    id: "slab-and-stein",
    title: "Slab & Stein BYO Vinyl Night",
    schedule: "Every Saturday",
    hook: "A night dedicated to analog sound and local collectors. Bring your favorite vinyl records, sign up on our clipboard at the bar, and let us play a side of your album over the house speakers while you enjoy a fresh pour.",
  },
  {
    id: "food-truck-spotlights",
    title: "Food Truck Spotlights",
    schedule: "Friday & Saturday Nights",
    hook: "We're brewers, not chefs. Every Friday and Saturday night, we share our industrial courtyard with Fort Wayne's best local food trucks to bring you a rotating lineup of great street food paired with our lagers.",
  },
];
