import type { Beer } from "./types";

export const beers: Beer[] = [
  {
    id: "schlacht-hefe",
    name: "Schlacht-Hefe (The Slaughterhouse Hefeweizen)",
    abv: 5.4,
    description:
      "Traditional banana & clove notes, unfiltered, poured in a tall weizen glass.",
    glassware: "Tall weizen glass",
    tag: "light",
  },
  {
    id: "iron-cleaver-marzen",
    name: "Iron Cleaver Märzen",
    abv: 5.8,
    description:
      "Rich, amber, malty lager celebrating the building's industrial bones. Perfect for fall drinking.",
    glassware: "Mug or stein",
    tag: "seasonal",
  },
  {
    id: "compliance-pilsner",
    name: "The Compliance Pilsner",
    abv: 4.8,
    description:
      "Super crisp, clean, single-decoction German-style Pilsner.",
    glassware: "Pilsner flute",
    tag: "light",
  },
  {
    id: "doppelbock-down",
    name: "Doppelbock Down",
    abv: 7.8,
    description:
      "Heavy dark lager with complex caramel and dark fruit notes.",
    glassware: "Snifter or dimpled mug",
    tag: "dark",
  },
];
