import { HeroType } from '@data/types';

export interface TypeFilterProps {
  onButtonClick: (type: HeroType | null) => void;
}
