import type { Beer } from "./types";

export const beerPhilosophy =
  "Traditional lagers, hop-forward ales, and small-batch experimental beers brewed in a historic Fort Wayne landmark.";

export const featuredBeer: Beer = {
  id: "ilumenate",
  name: "iLUMENate",
  abv: 6.0,
  style: "New England IPA",
  description:
    "Bright, juicy, and packed with tropical character. The beer that introduced many local drinkers to Johnny's brewing style and remains one of the brewery's most popular pours.",
  glassware: "IPA tulip",
  tag: "seasonal",
  series: "flagship",
};

export const flagshipBeers: Beer[] = [
  featuredBeer,
  {
    id: "slaughterhouse-hefe",
    name: "Slaughterhouse Hefe",
    abv: 5.4,
    description:
      "Cloudy, unfiltered wheat beer with soft banana and clove notes. Easy-drinking and perfect in a tall glass.",
    glassware: "Weizen glass",
    tag: "light",
    series: "flagship",
  },
  {
    id: "cleaver-amber-lager",
    name: "Cleaver Amber Lager",
    abv: 5.8,
    description:
      "Smooth amber lager with toasted malt and a clean finish. Built for cool evenings on the Wells Street patio.",
    glassware: "Pint or mug",
    tag: "seasonal",
    series: "flagship",
  },
  {
    id: "compliance-pilsner",
    name: "The Compliance Pilsner",
    abv: 4.8,
    description:
      "Crisp, bright, and bone-dry. Our go-to pint when you want something cold, clean, and uncomplicated.",
    glassware: "Pilsner glass",
    tag: "light",
    series: "flagship",
  },
];

export const friendsFamilyBeers: Beer[] = [
  {
    id: "kukers-shift-lager",
    name: "Kuker's Shift Lager",
    abv: 5.1,
    style: "Crisp Lager",
    description:
      "Crisp, dependable, and always ready to put in a full day's work. Built for early mornings, long shifts, and the people who keep things running.",
    tagline: "Clock in. Pour out.",
    glassware: "Pilsner glass",
    tag: "light",
    series: "friends-family",
  },
  {
    id: "the-gunkle-dunkle",
    name: "The Gunkle Dunkle",
    abv: 6.5,
    style: "Hazy IPA",
    description:
      "Bright citrus, tropical fruit, and just enough personality to become everyone's favorite relative. Loud in the best possible way.",
    tagline: "Everybody knows a Gunkle.",
    glassware: "IPA tulip",
    tag: "seasonal",
    series: "friends-family",
  },
];

/** @deprecated Use flagshipBeers — kept for filter compatibility */
export const beers = flagshipBeers;

export const friendsFamilySeriesIntro =
  "Not every beer needs a serious backstory. Our Friends & Family Series celebrates the people who helped build Wunderwerks one conversation, favor, and late-night idea at a time.";

export const friendsFamilySeriesDisclaimer =
  "Rotating small-batch releases. Availability varies.";
