import type { ComplianceItem, DeliveryPartner } from "./types";

export const complianceMenu: ComplianceItem[] = [
  {
    id: "wunder-kase-soup",
    category: "The Soup",
    name: "Wunder-Käse Soup",
    description:
      "Premium pre-made beer cheese soup kept hot in a single kettle behind the bar. Served with soft pretzel bites. Zero kitchen, zero drama.",
  },
  {
    id: "compliance-brat",
    category: "The Sandwich",
    name: "The Compliance Brat",
    description:
      "High-quality local smoked brats kept warm in a steam drawer. Bun, mustard, done. No assembly line, no prep stress.",
  },
  {
    id: "legal-beverages",
    category: "The Legal Beverages",
    name: "Compliance Pour",
    description:
      "Cold brew coffee, ginger beer, and local organic milk — available because Indiana said so. Milk served in a shot glass for the true believers.",
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
    name: "Don Chava's Mexican Grill",
    specialty: "Tacos and margaritas",
  },
  {
    id: "big-eyed-fish",
    name: "The Original Big Eyed Fish",
    specialty: "Voted Fort Wayne's best fried fish",
  },
];

export const deliveryBlurb =
  "Hungry for more than soup and a brat? Order delivery straight to your bar stool. We partner with Wells Street legends so you eat well while we stay behind the taps.";
