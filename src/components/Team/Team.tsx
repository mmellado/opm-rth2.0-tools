import React, { useState, useEffect, useCallback } from 'react';
import { nanoid } from 'nanoid';
import { navigate } from 'gatsby';

import Hero from '@components/Hero';
import HeroSelector from '@components/HeroSelector';
import { Hero as HeroType } from '@data/types';

import { encryptData, decryptData } from '@utils/crypto';

const Team: React.FC = () => {
  const [team, setTeam] = useState<HeroType[]>([]);
  const [teamId, setTeamId] = useState('');
  const [heroSelectorOpen, setHeroSelectorOpen] = useState(false);

  // Load initial team from query paramtere if present
  useEffect(() => {
    if (window) {
      const queryParams = new URLSearchParams(window.location.search);
      const queryTeamId = decodeURIComponent(queryParams.get('teamId') || '');
      if (queryTeamId) {
        try {
          const initialTeam = decryptData(queryTeamId) as HeroType[];
          setTeamId(queryTeamId);
          const initialTeamWithIds = initialTeam.map((h: HeroType) => ({
            ...h,
            id: nanoid(),
          }));
          setTeam(initialTeamWithIds);
        } catch {
          navigate(window.location.pathname, {
            replace: true,
          });
        }
      }
    }
  }, []);

  // Update the query parameter when the team changes
  useEffect(() => {
    if (window) {
      if (team.length) {
        const newTeamId = encodeURIComponent(encryptData(team));
        setTeamId(newTeamId);
        navigate(`${window.location.pathname}?teamId=${newTeamId}`, {
          replace: true,
        });
      } else {
        setTeamId('');
        navigate(window.location.pathname, {
          replace: true,
        });
      }
    }
  }, [team]);

  const toggleHeroSelector = useCallback(() => {
    setHeroSelectorOpen((s) => !s);
  }, []);

  const addHero = useCallback(
    (heroes: HeroType[]): void => {
      setTeam((t) => [
        ...t,
        ...heroes.map((hero) => ({ ...hero, id: nanoid() })),
      ]);
      toggleHeroSelector();
    },
    [toggleHeroSelector]
  );

  const removeHero = useCallback((heroId: string): void => {
    setTeam((t) => t.filter((h: HeroType) => h.id !== heroId));
  }, []);

  return (
    <div>
      {teamId && (
        <div>
          Share Your team
          <pre>
            https://{window ? window.location.hostname : 'localhost'}
            {window ? window.location.pathname : '/'}?teamId={teamId}
          </pre>
        </div>
      )}
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
