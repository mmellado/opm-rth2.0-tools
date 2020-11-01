import React, { useCallback, useState, useMemo, useEffect } from 'react';
import { Hero, HeroRank } from '@data/types';
import Select from 'react-select';
import heroes from '@data/heroes';

interface HeroSelectorProps {
  onSelect: (hero: Hero) => void;
}

const HeroSelector: React.FC<HeroSelectorProps> = ({ onSelect }) => {
  const allRanks: HeroRank[] = useMemo(() => {
    return Object.keys(HeroRank).map((k) => HeroRank[k]);
  }, []);
  const [selectedHero, setSelectedHero] = useState<Hero | undefined>();
  const [selectedRank, setSelectedRank] = useState<HeroRank | undefined>();
  const [validRanks, setValidRanks] = useState<HeroRank[]>(allRanks);

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

  const selectHero = useCallback(({ value }) => {
    const hero = heroes.find((h) => h.name === value);
    if (hero) {
      setSelectedHero(hero);
      setSelectedRank(hero.initialRank);
    } else {
      setSelectedHero(undefined);
      setSelectedRank(undefined);
    }
  }, []);

  const updateRank = useCallback(({ value }) => {
    setSelectedRank(value);
  }, []);

  const submitHero = useCallback(() => {
    if (selectedHero && selectedRank) {
      onSelect({ ...selectedHero, currentRank: selectedRank } as Hero);
    }
  }, [selectedHero, onSelect, selectedRank]);

  useEffect(() => {
    getValidRanks();
  }, [selectedHero, getValidRanks]);

  return (
    <form onSubmit={submitHero}>
      Hero
      <Select
        isClearable
        isSearchable
        options={heroes.map((h) => ({ value: h.name, label: h.name }))}
        onChange={selectHero}
      />
      {selectedHero && (
        <>
          Rank
          <Select
            options={validRanks.map((rank) => ({
              value: rank,
              label: rank,
            }))}
            onChange={updateRank}
          />
        </>
      )}
      <input type="submit" value="Select" />
    </form>
  );
};

export default HeroSelector;
