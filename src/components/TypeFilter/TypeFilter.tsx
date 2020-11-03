import React from 'react';
import styled from 'styled-components';
import { HeroType } from '@data/types';

import complete from '@img/complete.png';
import weapon from '@img/weapon.png';
import physical from '@img/physical.png';
import psychic from '@img/psychic.png';
import hiTech from '@img/hiTech.png';
import all from '@img/all.png';
import { TypeFilterProps } from './types';

const FilterIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const TypeFilter: React.FC<TypeFilterProps> = ({ onButtonClick }) => {
  return (
    <fieldset>
      <legend>Filter team</legend>
      <button onClick={() => onButtonClick(HeroType.complete)}>
        <FilterIcon src={complete} alt="Complete" />
      </button>
      <button onClick={() => onButtonClick(HeroType.hiTech)}>
        <FilterIcon src={hiTech} alt="Hi-Tech" />
      </button>
      <button onClick={() => onButtonClick(HeroType.weapon)}>
        <FilterIcon src={weapon} alt="Weapon" />
      </button>
      <button onClick={() => onButtonClick(HeroType.physical)}>
        <FilterIcon src={physical} alt="Physical" />
      </button>
      <button onClick={() => onButtonClick(HeroType.psychic)}>
        <FilterIcon src={psychic} alt="Psychic" />
      </button>
      <button onClick={() => onButtonClick(null)}>
        <FilterIcon src={all} alt="All" />
      </button>
    </fieldset>
  );
};

export default TypeFilter;
