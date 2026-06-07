import type { ComplianceItem, DeliveryPartner } from "./types";

export const corridorIntro =
  "Under Indiana Code Title 7.1, we maintain a small house menu featuring a rich Beer Cheese Soup and hot smoked brats. However, we highly encourage our guests to support the legendary restaurants sharing the Wells Street Corridor with us. Order delivery directly to your stool from neighbors like Klemm's Kafe, Don Chava's, or the Original Big Eyed Fish.";

export const complianceMenu: ComplianceItem[] = [
  {
    id: "wunder-kase-soup",
    category: "House Menu",
    name: "Wunder-Käse Soup",
    description:
      "Rich beer cheese soup kept warm behind the bar and served with soft pretzel bites — our answer to Indiana's food-service requirement, done well.",
  },
  {
    id: "compliance-brat",
    category: "House Menu",
    name: "The Compliance Brat",
    description:
      "Hot smoked brats from a local producer, served simply on a bun with mustard. Honest, hearty, and always ready when you need a pint partner.",
  },
  {
    id: "legal-beverages",
    category: "House Menu",
    name: "Compliance Pour",
    description:
      "Cold brew coffee, ginger beer, and local organic milk — on the menu because the law asks, available because we like good neighbors.",
  },
];

export const deliveryPartners: DeliveryPartner[] = [
  {
    id: "klemms-kafe",
    name: "Klemm's Kafe",
    specialty: "Classic diner sandwiches",
  },
  {
    id: "don-chavas",
    name: "Don Chava's",
    specialty: "Tacos and margaritas",
  },
  {
    id: "big-eyed-fish",
    name: "The Original Big Eyed Fish",
    specialty: "Fort Wayne's best fried fish",
  },
];

export const corridorBlurb =
  "The Wells Street Corridor is home to some of Fort Wayne's most beloved kitchens. Pull up a stool, order in, and eat local while we keep the lagers flowing.";
