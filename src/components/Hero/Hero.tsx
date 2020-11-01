import React from 'react';
import styled from 'styled-components';
import { Hero as HeroProps, HeroRank, HeroType } from '@data/types';

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  margin: 10px;
`;

type BorderProps = {
  rank: HeroRank;
};

const borderColors = {
  [HeroRank.rare]: 'blue',
  [HeroRank.rarePlus]: 'blue',
  [HeroRank.elite]: 'purple',
  [HeroRank.elitePlus]: 'purple',
  [HeroRank.epic]: 'yellow',
  [HeroRank.epicPlus]: 'yellow',
  [HeroRank.legendary]: 'red',
  [HeroRank.legendaryPlus]: 'red',
  [HeroRank.mythical]: 'silver',
  [HeroRank.mythical1]: 'silver',
  [HeroRank.mythical2]: 'silver',
  [HeroRank.mythical3]: 'silver',
  [HeroRank.mythical4]: 'silver',
  [HeroRank.mythical5]: 'silver',
};

const borderCornerColor = {
  [HeroRank.rarePlus]: 'purple',
  [HeroRank.elitePlus]: 'yellow',
  [HeroRank.epicPlus]: 'red',
  [HeroRank.legendaryPlus]: 'silver',
};

const Border = styled.div<BorderProps>`
  width: 100%;
  height: 100%;
  position: relative;
  border: 5px solid ${({ rank }) => borderColors[rank]};
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
`;

const TopRightCorner = styled.div<BorderProps>`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;

  width: 20px;
  height: 20px;

  border-top: 5px solid silver;
  border-right: 5px solid silver;

  &:before {
    content: '';
    display: block;
    border-style: solid;
    border-width: 0 12px 12px 0;
    border-color: transparent ${({ rank }) => borderCornerColor[rank]}
      transparent transparent;

    position: absolute;
    top: 0px;
    right: 0px;
  }

  &:after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px 0 0 8px;
    border-color: transparent transparent transparent
      ${({ rank }) => borderCornerColor[rank]};

    position: absolute;
    bottom: 6px;
    left: 6px;
  }
`;

const BottomLeftCorner = styled(TopRightCorner)`
  bottom: 0px;
  left: 0px;
  top: initial;
  right: initial;
  transform: rotate(180deg);
`;

const badgeColor = {
  [HeroType.complete]: 'silver',
  [HeroType.hiTech]: 'cyan',
  [HeroType.weapon]: 'green',
  [HeroType.physical]: 'red',
  [HeroType.psychic]: 'purple',
};

const Badge = styled.div<{ type: HeroType; rank: HeroRank }>`
  position: absolute;
  top: -1px;
  left: -1px;
  z-index: 1;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;

    width: 0;
    height: 0;
    border-style: solid;
    border-width: 30px 30px 0 0;
    border-color: ${({ rank }) => borderColors[rank]} transparent transparent
      transparent;
  }

  &:after {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background: ${({ type }) => badgeColor[type]};
    position: relative;
    z-index: 1;
    top: 5px;
    left: 5px;
  }
`;

const Hero: React.FC<HeroProps> = ({
  initialRank,
  currentRank,
  name,
  type,
}) => {
  const rank = currentRank || initialRank;
  return (
    <Wrapper>
      {borderCornerColor[rank] && <TopRightCorner rank={rank} />}
      <Border rank={rank}>
        <Badge type={type} rank={rank} />
        {name}
      </Border>
      {borderCornerColor[rank] && <BottomLeftCorner rank={rank} />}
    </Wrapper>
  );
};

export default Hero;
