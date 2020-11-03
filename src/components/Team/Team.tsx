import React, { useState, useEffect, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { navigate } from 'gatsby';
import copy from 'copy-text-to-clipboard';

import Hero from '@components/Hero';
import HeroSelector from '@components/HeroSelector';
import Modal from '@components/Modal';
import TypeFilter from '@components/TypeFilter';
import { Hero as HeroProps, HeroType } from '@data/types';

import { encryptData, decryptData } from '@utils/crypto';

const TeamWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  position: relative;
  border: 1px solid #666;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const ShareWrapper = styled.pre`
  overflow: scroll;
  padding: 20px;
  border-radius: 5px;
  background: #ccc;
  border: 1px solid #ddd;
  font-family: monospace;
  box-shadow: inset 0 0 5px #666;
`;

const HeroWrapper = styled.div`
  position: relative;
  button {
    display: none;
  }

  &:hover button {
    display: flex;
  }
`;

const RemoveHero = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background: white;
  color: black;
  position: absolute;
  top: 5px;
  right: 0;
  cursor: pointer;
  border: 1px solid #666;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: monospace;
`;

const Team: React.FC = () => {
  const [team, setTeam] = useState<HeroProps[]>([]);
  const [filter, setFilter] = useState<HeroType | null>(null);
  const [teamId, setTeamId] = useState('');
  const [heroSelectorOpen, setHeroSelectorOpen] = useState(false);

  // Load initial team from query paramtere if present
  useEffect(() => {
    if (window) {
      const queryParams = new URLSearchParams(window.location.search);
      const queryTeamId = decodeURIComponent(queryParams.get('teamId') || '');
      if (queryTeamId) {
        try {
          const initialTeam = decryptData(queryTeamId) as HeroProps[];
          setTeamId(queryTeamId);
          const initialTeamWithIds = initialTeam.map((h: HeroProps) => ({
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
    (heroes: HeroProps[]): void => {
      setTeam((t) => [
        ...t,
        ...heroes.map((hero) => ({ ...hero, id: nanoid() })),
      ]);
      toggleHeroSelector();
    },
    [toggleHeroSelector]
  );

  const removeHero = useCallback((heroId: string): void => {
    setTeam((t) => t.filter((h: HeroProps) => h.id !== heroId));
  }, []);

  const shareUrl = useMemo(
    () =>
      `https://${window ? window.location.hostname : 'localhost'}${
        window ? window.location.pathname : '/'
      }?teamId=${teamId}`,
    [teamId]
  );

  const copyShareUrl = useCallback(() => {
    copy(shareUrl);
    alert('Url copied to clipboard');
  }, [shareUrl]);

  const updateFilter = useCallback((type: HeroType | null): void => {
    setFilter(type);
  }, []);

  return (
    <div>
      <h1>Team Builder</h1>
      <button onClick={toggleHeroSelector}>
        {heroSelectorOpen ? 'Cancel' : 'Add Hero'}
      </button>
      {(team.length && <TypeFilter onButtonClick={updateFilter} />) || null}
      <TeamWrapper>
        {team
          .filter((h) => {
            if (filter !== null) {
              return h.type === filter;
            }
            return true;
          })
          .map((hero) => (
            <HeroWrapper key={hero.id as string}>
              <Hero {...hero} />
              <RemoveHero
                onClick={() => removeHero(hero.id as string)}
                title="Remove"
              >
                x
              </RemoveHero>
            </HeroWrapper>
          ))}
      </TeamWrapper>

      {teamId && (
        <div>
          <h2>Share Your team</h2>
          <button onClick={copyShareUrl}>Copy URL</button>
          <ShareWrapper>{shareUrl}</ShareWrapper>
        </div>
      )}

      <Modal isOpen={heroSelectorOpen} onClose={toggleHeroSelector}>
        <HeroSelector onSelect={addHero} />
      </Modal>
    </div>
  );
};

export default Team;
