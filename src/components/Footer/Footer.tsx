import React from 'react';
import styled from 'styled-components';

import { grid, eightOneColumns } from '@styles/grid';

const FooterWrapper = styled.footer`
  ${grid}
`;

const Inner = styled.div`
  ${eightOneColumns}
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Inner>
        This is a fan made application for fans of the One Punch Man Road to
        Hero 2.0 game. All characters and assets belong to their respective
        owners. To learn more about this game, visit the{' '}
        <a
          href="https://mopm.oasgames.com/official/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          official website.
        </a>
      </Inner>
    </FooterWrapper>
  );
};

export default Footer;
