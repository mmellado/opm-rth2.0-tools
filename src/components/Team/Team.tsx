import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from 'react';
import styled, { css } from 'styled-components';
import { nanoid } from 'nanoid';
import { navigate } from 'gatsby';
import { FaTimes } from 'react-icons/fa';

import Hero from '@components/Hero';
import HeroSelector from '@components/HeroSelector';
import Modal from '@components/Modal';
import TypeFilter from '@components/TypeFilter';
import ShareUrl from '@components/ShareUrl';
import Button from '@components/Button';

import useHeroData from '@data/heroes';
import { Hero as HeroProps, HeroType, HeroRank } from '@data/types';
import { mediaquery } from '@styles/mediaquery';
import { encryptTeam, decryptTeamID, decryptTeam } from '@utils/crypto';

const TeamWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  position: relative;
  background: #eee;
  border: 1px solid #ddd;
  box-shadow: inset 0 0 5px #ccc;
  border-radius: 5px;
  margin-bottom: 50px;
  min-height: 162px;
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

  svg {
    width: 10px;
    height: 10px;
  }
`;

const NoHeroes = styled.p`
  width: 70%;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Notice = styled.span`
  margin-bottom: 20px;
`;

const Actions = styled.div`
  margin-bottom: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  ${mediaquery.md(css`
    flex-direction: row;
  `)}
`;

const Title = styled.h1`
  font-size: 25px;
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: 50px;
  text-align: center;

  ${mediaquery.md(css`
    font-size: 35px;
  `)}
`;

const StyledButton = styled(Button)`
  width: 100%;
  margin-bottom: 20px;

  ${mediaquery.md(css`
    width: auto;
    margin-bottom: 0;
  `)}
`;

const Team: React.FC = () => {
  const [team, setTeam] = useState<HeroProps[]>([]);
  const [filter, setFilter] = useState<HeroType | null>(null);
  const [teamId, setTeamId] = useState('');
  const [heroSelectorOpen, setHeroSelectorOpen] = useState(false);
  const shareUrl = useRef('');
  const heroes = useHeroData();

  // Load initial team from query paramtere if present
  useEffect(() => {
    if (window) {
      const queryParams = new URLSearchParams(window.location.search);
      const queryTeamId = decryptTeamID(queryParams.get('teamId') || '');
      if (queryTeamId && !teamId) {
        try {
          const encryptedTeam = decryptTeam(queryTeamId);
          setTeamId(queryTeamId);
          const initialTeam = encryptedTeam.map(
            (encryptedHero: string): HeroProps => {
              const [heroId, heroRank] = encryptedHero.split(':');
              const hero = heroes.find((h) => h.heroId === heroId) as HeroProps;
              return {
                ...hero,
                id: nanoid(),
                currentRank: parseInt(heroRank, 10) as HeroRank,
              };
            }
          );
          setTeam(initialTeam);
        } catch {
          navigate(window.location.pathname, {
            replace: true,
          });
        }
      }
    }
  }, [heroes, teamId]);

  // Update the query parameter when the team changes
  useEffect(() => {
    if (window) {
      if (team.length) {
        const newTeamId = encryptTeam(team);
        setTeamId(newTeamId);
        navigate(`${window.location.pathname}?teamId=${newTeamId}`, {
          replace: true,
        });
      } else {
        setTeamId('');
        setFilter(null);
        navigate(window.location.pathname, {
          replace: true,
        });
      }
    }
  }, [team]);

  useEffect(() => {
    shareUrl.current = `https://${
      window ? window.location.hostname : 'localhost'
    }${window ? window.location.pathname : '/'}?teamId=${teamId}`;
  }, [teamId]);

  const toggleHeroSelector = useCallback(() => {
    setHeroSelectorOpen((s) => !s);
  }, []);

  const addHero = useCallback(
    (newHeroes: HeroProps[]): void => {
      setTeam((t) => [
        ...t,
        ...newHeroes.map((hero) => ({ ...hero, id: nanoid() })),
      ]);
      toggleHeroSelector();
    },
    [toggleHeroSelector]
  );

  const removeHero = useCallback((heroId: string): void => {
    setTeam((t) => t.filter((h: HeroProps) => h.id !== heroId));
  }, []);

  const updateFilter = useCallback((type: HeroType | null): void => {
    setFilter(type);
  }, []);

  const renderedTeam = useMemo(() => {
    return team.filter((h) => {
      if (filter !== null) {
        return h.type === filter;
      }
      return true;
    });
  }, [team, filter]);

  return (
    <div>
      <Title>Team Builder</Title>
      <Actions>
        <StyledButton onClick={toggleHeroSelector}>Add Hero</StyledButton>
        {(team.length && <TypeFilter onButtonClick={updateFilter} />) || null}
      </Actions>
      <TeamWrapper>
        {(renderedTeam.length &&
          renderedTeam.map((hero) => (
            <HeroWrapper key={hero.id as string}>
              <Hero {...hero} />
              <RemoveHero
                onClick={() => removeHero(hero.id as string)}
                title="Remove"
              >
                <FaTimes />
              </RemoveHero>
            </HeroWrapper>
          ))) || (
          <NoHeroes>
            {filter !== null ? (
              'No heroes in your team for this Type'
            ) : (
              <>
                <Notice>Add heroes to your team</Notice>
                <Button onClick={toggleHeroSelector}>Add Hero</Button>
              </>
            )}
          </NoHeroes>
        )}
      </TeamWrapper>

      {teamId && <ShareUrl url={shareUrl.current} title="Share your team" />}

      <Modal isOpen={heroSelectorOpen} onClose={toggleHeroSelector}>
        <HeroSelector onSelect={addHero} />
      </Modal>
    </div>
  );
};

export default Team;
