export enum HeroRank {
  rare = 'Rare',
  rarePlus = 'Rare+',
  elite = 'Elite',
  elitePlus = 'Elite+',
  epic = 'Epic',
  epicPlus = 'Epic+',
  legendary = 'Legendary',
  legendaryPlus = 'Legendary+',
  mythical = 'Mythical',
  mythical1 = 'Mythical *',
  mythical2 = 'Mythical **',
  mythical3 = 'Mythical ***',
  mythical4 = 'Mythical ****',
  mythical5 = 'Mythical *****',
}

export enum HeroType {
  weapon,
  psychic,
  hiTech,
  physical,
  complete,
}

export type Hero = {
  id?: string;
  name: string;
  type: HeroType;
  initialRank: HeroRank;
  currentRank?: HeroRank;
};

export type HeroFilter = {
  sameHero: boolean;
  rank: HeroRank;
  numberOfHeros: number;
};
