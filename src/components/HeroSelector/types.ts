import { Hero } from '@data/types';

export interface HeroSelectorProps {
  onSelect: (heroes: Hero[]) => void;
}
