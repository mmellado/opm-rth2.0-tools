import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled, { css } from 'styled-components';
import { mediaquery } from '@styles/mediaquery';

import { grid, eightOneColumns } from '@styles/grid';

const Header = styled.header`
  ${grid}
  height: 100px;
  background: #26324c;
  border-bottom: 2px solid #ebc52d;
  box-shadow: 0 4px 2px -2px gray;
`;

const Inner = styled.div`
  ${eightOneColumns}
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 18px;
  line-height: 1.2;
  font-weight: 700;
  color: #fff;
  margin-left: 20px;
  max-width: 50vw;

  ${mediaquery.md(css`
    font-size: 25px;
  `)}
`;

const NavBar: React.FC = () => {
  const query = useStaticQuery(graphql`
    query Logo {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `);

  const logo = query.logo.childImageSharp.fixed;
  return (
    <Header>
      <Inner>
        <Img fixed={logo} alt="OPMRtH 2.0 Tools" />
        <Title>One Punch Man Road to Hero 2.0 Tools</Title>
      </Inner>
    </Header>
  );
};

export default NavBar;
