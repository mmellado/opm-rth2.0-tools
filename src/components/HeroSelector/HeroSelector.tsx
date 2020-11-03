import React, {
  useCallback,
  useState,
  useMemo,
  useEffect,
  CSSProperties,
} from 'react';
import styled, { css } from 'styled-components';
import Select from 'react-select';
import { Hero, HeroRank } from '@data/types';
import useHeroData from '@data/heroes';
import Button from '@components/Button';
import { mediaquery } from '@styles/mediaquery';
import { HeroSelectorProps } from './types';

const SelectBox = styled(Select)`
  margin-bottom: 20px;
`;

const Label = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 5px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  background-color: hsl(0, 0%, 100%);
  border-color: hsl(0, 0%, 80%);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  height: 38px;
  padding: 2px 8px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 18px;
  line-height: 1.2;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;

  ${mediaquery.md(css`
    font-size: 25px;
  `)}
`;

const customSelectStyles = {
  menu: (provided: CSSProperties) => ({
    ...provided,
    marginTop: 0,
  }),
};

const StyledButton = styled(Button)`
  width: 100%;
`;

const HeroSelector: React.FC<HeroSelectorProps> = ({ onSelect }) => {
  const allRanks: HeroRank[] = useMemo(() => {
    return Object.keys(HeroRank).map((k) => HeroRank[k]);
  }, []);
  const [selectedHero, setSelectedHero] = useState<Hero | undefined>();
  const [selectedRank, setSelectedRank] = useState<HeroRank | undefined>();
  const [amount, setAmount] = useState(1);
  const [validRanks, setValidRanks] = useState<HeroRank[]>(allRanks);

  const heroes = useHeroData();

  const getValidRanks = useCallback(() => {
    if (selectedHero) {
      if (selectedHero.initialRank === HeroRank.rare) {
        setValidRanks(
          allRanks.filter(
            (rank) => !rank.includes('Legendary') && !rank.includes('Mythical')
          )
        );
      } else if (selectedHero.initialRank === HeroRank.elite) {
        setValidRanks(allRanks.filter((rank) => !rank.includes('Rare')));
      }
    } else {
      setValidRanks(allRanks);
    }
  }, [allRanks, selectedHero]);

  const selectHero = useCallback(
    ({ value }) => {
      const hero = heroes.find((h) => h.name === value);
      if (hero) {
        setSelectedHero(hero);
        setSelectedRank(hero.initialRank);
      } else {
        setSelectedHero(undefined);
        setSelectedRank(undefined);
      }
    },
    [heroes]
  );

  const updateRank = useCallback(({ value }) => {
    setSelectedRank(value);
  }, []);

  const updateAmount = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(e.target.value, 10));
  }, []);

  const submitHero = useCallback(() => {
    if (selectedHero && selectedRank) {
      const newHero = { ...selectedHero, currentRank: selectedRank } as Hero;

      onSelect(new Array(amount).fill(newHero) as Hero[]);
    }
  }, [selectedHero, onSelect, selectedRank, amount]);

  useEffect(() => {
    getValidRanks();
  }, [selectedHero, getValidRanks]);

  return (
    <form onSubmit={submitHero}>
      <Title>Select a Hero</Title>

      <Label>Hero</Label>
      <SelectBox
        isSearchable
        styles={customSelectStyles}
        placeholder="Hero"
        options={heroes.map((h) => ({ value: h.name, label: h.name }))}
        onChange={selectHero}
      />
      {selectedHero && (
        <>
          <Label>Hero Rank</Label>
          <SelectBox
            placeholder="Hero Rank"
            styles={customSelectStyles}
            options={validRanks.map((rank) => ({
              value: rank,
              label: rank,
            }))}
            defaultValue={{
              value: validRanks[0],
              label: validRanks[0],
            }}
            onChange={updateRank}
          />
          <Label>Number of Heroes</Label>
          <Input type="number" min="1" value={amount} onChange={updateAmount} />

          <StyledButton type="submit">Select</StyledButton>
        </>
      )}
    </form>
  );
};

export default HeroSelector;
