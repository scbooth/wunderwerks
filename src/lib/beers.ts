import type { Beer } from "./types";

export const beers: Beer[] = [
  {
    id: "slaughterhouse-hefe",
    name: "Slaughterhouse Hefe (Hefeweizen)",
    abv: 5.4,
    description:
      "Cloudy, unfiltered wheat beer with soft banana and clove notes. Easy-drinking and perfect in a tall glass.",
    glassware: "Weizen glass",
    tag: "light",
  },
  {
    id: "cleaver-amber-lager",
    name: "Cleaver Amber Lager",
    abv: 5.8,
    description:
      "Smooth amber lager with toasted malt and a clean finish. Built for cool evenings on the Wells Street patio.",
    glassware: "Stein or mug",
    tag: "seasonal",
  },
  {
    id: "compliance-pilsner",
    name: "The Compliance Pilsner",
    abv: 4.8,
    description:
      "Crisp, bright, and bone-dry. Our go-to pint when you want something cold, clean, and uncomplicated.",
    glassware: "Pilsner glass",
    tag: "light",
  },
  {
    id: "double-bock-down",
    name: "Double Bock Down",
    abv: 7.8,
    description:
      "Rich dark lager with caramel, dark bread, and a slow, warming finish. Sip slow — it's a heavy hitter.",
    glassware: "Dimpled mug",
    tag: "dark",
  },
];
