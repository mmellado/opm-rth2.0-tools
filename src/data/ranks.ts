import { Hero, HeroRank } from './types';

const isSameHero = (hero1: Hero, hero2: Hero, hero3?: Hero): boolean => {
  if (hero3) {
    return hero1.name === hero2.name && hero1.name === hero3.name;
  }
  return hero1.name === hero2.name;
};

const isSameRank = (hero1: Hero, hero2: Hero, hero3?: Hero): boolean => {
  if (hero3) {
    return (
      hero1.currentRank === hero2.currentRank &&
      hero1.currentRank === hero3.currentRank
    );
  }
  return hero1.currentRank === hero2.currentRank;
};

const isSameType = (hero1: Hero, hero2: Hero, hero3?: Hero): boolean => {
  if (hero3) {
    return hero1.type === hero2.type && hero1.type === hero3.type;
  }
  return hero1.type === hero2.type;
};

const promoteRarePlus = (hero1: Hero, hero2: Hero, hero3: Hero) => {
  return (
    hero1.currentRank === HeroRank.rare &&
    isSameHero(hero1, hero2, hero3) &&
    isSameRank(hero1, hero2, hero3) &&
    isSameType(hero1, hero2, hero3)
  );
};
