import { Hero } from './heros';
import shallowEqual from './utils/shallowEqual'

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

const isSameHero = (hero1: Hero, hero2: Hero, hero3?: Hero) => {
    if (hero3) {
        return (hero1.name === hero2.name) && (hero1.name === hero3.name);
    } else {
        hero1.name === hero2.name;
    }
}

const promoteRarePlus = (hero1: Hero, hero2: Hero, hero3: Hero)  => {
    return hero1.name ===
}