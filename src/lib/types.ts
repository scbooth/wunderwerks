export type ComplianceMode = "wunderwerks" | "prohibition";

export type TapFilter = "all" | "light" | "dark" | "seasonal";

export type BeerTag = "light" | "dark" | "seasonal";

export interface Beer {
  id: string;
  name: string;
  abv: number;
  description: string;
  glassware: string;
  tag: BeerTag;
}

export interface ComplianceItem {
  id: string;
  category: string;
  name: string;
  description: string;
}

export interface DeliveryPartner {
  id: string;
  name: string;
  specialty: string;
}

export interface BreweryEvent {
  id: string;
  title: string;
  schedule: string;
  hook: string;
}

export interface TinCapsGame {
  id: string;
  date: string;
  opponent: string;
  isHome: boolean;
}
