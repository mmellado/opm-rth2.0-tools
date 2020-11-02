import { HeroFilter, HeroRank } from './types';

export const rankFilters = {
  [HeroRank.rare]: {
    sameHero: true,
    rank: HeroRank.rare,
    numberOfHeros: 2,
  } as HeroFilter,
  [HeroRank.rarePlus]: {
    sameHero: false,
    rank: HeroRank.rarePlus,
    numberOfHeros: 2,
  } as HeroFilter,
  [HeroRank.elite]: {
    sameHero: true,
    rank: HeroRank.elite,
    numberOfHeros: 2,
  } as HeroFilter,
  [HeroRank.elitePlus]: {
    sameHero: false,
    rank: HeroRank.elitePlus,
    numberOfHeros: 1,
  } as HeroFilter,
  [HeroRank.epic]: {
    sameHero: true,
    rank: HeroRank.elitePlus,
    numberOfHeros: 2,
  } as HeroFilter,
  [HeroRank.epicPlus]: {
    sameHero: false,
    rank: HeroRank.epicPlus,
    numberOfHeros: 1,
  } as HeroFilter,
  [HeroRank.legendary]: {
    sameHero: false,
    rank: HeroRank.epicPlus,
    numberOfHeros: 1,
  } as HeroFilter,
  [HeroRank.legendaryPlus]: {
    sameHero: true,
    rank: HeroRank.elitePlus,
    numberOfHeros: 2,
  } as HeroFilter,
  [HeroRank.mythical]: {
    sameHero: true,
    rank: HeroRank.elitePlus,
    numberOfHeros: 1,
  } as HeroFilter,
  [HeroRank.mythical1]: {
    sameHero: true,
    rank: HeroRank.elitePlus,
    numberOfHeros: 1,
  } as HeroFilter,
  [HeroRank.mythical2]: {
    sameHero: true,
    rank: HeroRank.elitePlus,
    numberOfHeros: 1,
  } as HeroFilter,
  [HeroRank.mythical3]: {
    sameHero: true,
    rank: HeroRank.elitePlus,
    numberOfHeros: 1,
  } as HeroFilter,
  [HeroRank.mythical4]: {
    sameHero: true,
    rank: HeroRank.elitePlus,
    numberOfHeros: 1,
  } as HeroFilter,
  [HeroRank.mythical5]: {
    sameHero: true,
    rank: HeroRank.elitePlus,
    numberOfHeros: 1,
  } as HeroFilter,
};
