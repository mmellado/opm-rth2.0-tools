import React, { useState, useEffect, useCallback } from 'react';
import Crypto from 'crypto-js';
import { nanoid } from 'nanoid';

import Hero from '@components/Hero';
import HeroSelector from '@components/HeroSelector';
import { Hero as HeroType } from '@data/types';

const secret = 'r04dt0Her0';

const Team: React.FC = () => {
  const [team, setTeam] = useState<HeroType[]>([]);
  const [teamId, setTeamId] = useState('');
  const [heroSelectorOpen, setHeroSelectorOpen] = useState(false);

  // Update the query parameter when the team changes
  useEffect(() => {
    if (window) {
      const queryParams = new URLSearchParams(window.location.search);
      if (team.length) {
        const newTeamId = Crypto.AES.encrypt(
          JSON.stringify(team),
          secret
        ).toString();

        setTeamId(newTeamId);
        queryParams.set('teamId', newTeamId);
      } else {
        setTeamId('');
        queryParams.delete('teamId');
      }
    }
  }, [team]);

  // Load initial team from query paramtere if present
  useEffect(() => {
    if (window) {
      const queryParams = new URLSearchParams(window.location.search);
      const queryTeamId = queryParams.get('teamId');
      if (queryTeamId) {
        const initialTeamJSON = Crypto.AES.decrypt(queryTeamId, secret);
        const initialTeam = JSON.parse(
          initialTeamJSON.toString(Crypto.enc.Utf8)
        );
        if (initialTeam?.length && initialTeam[0].name) {
          setTeamId(queryTeamId);
          const initialTeamWithIds = initialTeam.map((h: HeroType) => ({
            ...h,
            id: nanoid(),
          }));
          setTeam(initialTeamWithIds);
        } else {
          queryParams.delete('teamId');
        }
      }
    }
  }, []);

  const toggleHeroSelector = useCallback(() => {
    setHeroSelectorOpen((s) => !s);
  }, []);

  const addHero = useCallback(
    (hero: HeroType): void => {
      setTeam((t) => [...t, { ...hero, id: nanoid() }]);
      toggleHeroSelector();
    },
    [toggleHeroSelector]
  );

  const removeHero = useCallback((heroId: string): void => {
    setTeam((t) => t.filter((h: HeroType) => h.id !== heroId));
  }, []);

  return (
    <div>
      {teamId && <span>Your team id: {teamId}</span>}
      <button onClick={toggleHeroSelector}>
        {heroSelectorOpen ? 'Cancel' : 'Add Hero'}
      </button>
      {heroSelectorOpen && <HeroSelector onSelect={addHero} />}
      {team.map((hero) => (
        <button
          onClick={() => removeHero(hero.id as string)}
          key={hero.id as string}
        >
          <Hero {...hero} />
        </button>
      ))}
    </div>
  );
};

export default Team;
