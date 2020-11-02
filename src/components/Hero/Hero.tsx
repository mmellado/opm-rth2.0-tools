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
  [HeroRank.rare]: 'rgb(102, 144, 198)',
  [HeroRank.rarePlus]: 'rgb(102, 144, 198)',
  [HeroRank.elite]: 'rgb(123,77,190)',
  [HeroRank.elitePlus]: 'rgb(123,77,190)',
  [HeroRank.epic]: 'rgb(248, 222, 137)',
  [HeroRank.epicPlus]: 'rgb(248, 222, 137)',
  [HeroRank.legendary]: 'rgb(144, 42, 61)',
  [HeroRank.legendaryPlus]: 'rgb(144, 42, 61)',
  [HeroRank.mythical]: 'rgb(246, 252, 248)',
  [HeroRank.mythical1]: 'rgb(246, 252, 248)',
  [HeroRank.mythical2]: 'rgb(246, 252, 248)',
  [HeroRank.mythical3]: 'rgb(246, 252, 248)',
  [HeroRank.mythical4]: 'rgb(246, 252, 248)',
  [HeroRank.mythical5]: 'rgb(246, 252, 248)',
};

const borderCornerColor = {
  [HeroRank.rarePlus]: 'rgb(123,77,190)',
  [HeroRank.elitePlus]: 'rgb(248, 222, 137)',
  [HeroRank.epicPlus]: 'rgb(144, 42, 61)',
  [HeroRank.legendaryPlus]: 'rgb(246, 252, 248)',
};

const Border = styled.div<BorderProps>`
  width: 100%;
  height: 100%;
  position: relative;
  border: 5px solid ${({ rank }) => borderColors[rank]};
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eee;
  text-align: center;
`;

const TopRightCorner = styled.div<BorderProps>`
  position: absolute;
  top: 0;
  right: 0;

  width: 20px;
  height: 20px;

  border-top: 5px solid rgb(155, 155, 155);
  border-right: 5px solid rgb(155, 155, 155);

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
  [HeroType.complete]: 'rgb(214, 221, 239)',
  [HeroType.hiTech]: 'rgb(145, 178, 229)',
  [HeroType.weapon]: 'rgb(146, 171, 70)',
  [HeroType.physical]: 'rgb(128, 51, 39)',
  [HeroType.psychic]: 'rgb(185, 147, 243)',
};

const Badge = styled.div<{ type: HeroType; rank: HeroRank }>`
  position: absolute;
  top: -1px;
  left: -1px;

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
    border: 2px solid white;
    border-radius: 100%;
    background: ${({ type }) => badgeColor[type]};
    position: relative;
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
      <Border rank={rank}>
        <Badge type={type} rank={rank} />
        {name}
      </Border>
      {borderCornerColor[rank] && (
        <>
          <TopRightCorner rank={rank} />
          <BottomLeftCorner rank={rank} />
        </>
      )}
    </Wrapper>
  );
};

export default Hero;
