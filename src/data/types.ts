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

export enum HeroType {
  weapon,
  psychic,
  hiTech,
  physical,
  complete,
}

export type Hero = {
  name: string;
  type: HeroType;
  initialRank: HeroRank;
  currentRank?: HeroRank;
};
