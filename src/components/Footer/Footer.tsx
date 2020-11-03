import React from 'react';
import styled from 'styled-components';

import { grid, eightOneColumns } from '@styles/grid';

const FooterWrapper = styled.footer`
  ${grid}
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Inner = styled.div`
  ${eightOneColumns}
  text-align: center;
  font-size: 10px;
  color: #666;
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Inner>
        <p style={{ marginBottom: '10px' }}>
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
        </p>
        <p>
          For any issues or feature requests, please file a ticket on{' '}
          <a
            href="https://github.com/mmellado/opm-rth2.0-tools/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </Inner>
    </FooterWrapper>
  );
};

export default Footer;
