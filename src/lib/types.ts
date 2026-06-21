export type ComplianceMode = "wunderwerks" | "prohibition";

export type TapFilter = "all" | "light" | "dark" | "seasonal";

export type BeerTag = "light" | "dark" | "seasonal";

export type BeerSeries = "flagship" | "friends-family";

export type FortWayneTeamId = "tincaps" | "komets" | "fwfc";

export interface Beer {
  id: string;
  name: string;
  abv: number;
  description: string;
  glassware: string;
  tag: BeerTag;
  series: BeerSeries;
  style?: string;
  tagline?: string;
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

export interface FortWayneTeam {
  id: FortWayneTeamId;
  name: string;
  nickname: string;
  sport: string;
  league: string;
  venue: string;
  taproomHook: string;
}

export interface LocalHighlight {
  id: string;
  name: string;
  description: string;
}

export interface SportsBroadcast {
  id: string;
  teamId: FortWayneTeamId;
  date: string;
  opponent: string;
  isAway: boolean;
}
