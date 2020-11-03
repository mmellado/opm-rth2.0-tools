import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import { grid, eightOneColumns } from '@styles/grid';

const Header = styled.header`
  ${grid}
  height: 100px;
`;

const Inner = styled.div`
  ${eightOneColumns}
  display: flex;
  align-items: center;
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
      </Inner>
    </Header>
  );
};

export default NavBar;
