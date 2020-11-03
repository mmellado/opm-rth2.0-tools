import { FluidObject } from 'gatsby-image';

export enum HeroRank {
  rare,
  rarePlus,
  elite,
  elitePlus,
  epic,
  epicPlus,
  legendary,
  legendaryPlus,
  mythical,
  mythical1,
  mythical2,
  mythical3,
  mythical4,
  mythical5,
}
export const HeroRankNames = {
  [HeroRank.rare]: 'Rare',
  [HeroRank.rarePlus]: 'Rare+',
  [HeroRank.elite]: 'Elite',
  [HeroRank.elitePlus]: 'Elite+',
  [HeroRank.epic]: 'Epic',
  [HeroRank.epicPlus]: 'Epic+',
  [HeroRank.legendary]: 'Legendary',
  [HeroRank.legendaryPlus]: 'Legendary+',
  [HeroRank.mythical]: 'Mythical',
  [HeroRank.mythical1]: 'Mythical*',
  [HeroRank.mythical2]: 'Mythical**',
  [HeroRank.mythical3]: 'Mythical***',
  [HeroRank.mythical4]: 'Mythical****',
  [HeroRank.mythical5]: 'Mythical*****',
};

export enum HeroType {
  weapon,
  psychic,
  hiTech,
  physical,
  complete,
}

export type Hero = {
  heroId: string;
  id?: string;
  name: string;
  type: HeroType;
  initialRank: HeroRank;
  currentRank?: HeroRank;
  avatar?: FluidObject;
};

export type HeroFilter = {
  sameHero: boolean;
  rank: HeroRank;
  numberOfHeros: number;
};
