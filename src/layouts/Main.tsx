import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '@styles/GlobalStyles';
import { grid, eightOneColumns } from '@styles/grid';
import NavBar from '@components/NavBar';
import Footer from '@components/Footer';

const MainWrapper = styled.main`
  ${grid}
  min-height: 80vh;
`;

const Inner = styled.div`
  ${eightOneColumns}
`;

const Main: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />

      <NavBar />
      <MainWrapper>
        <Inner>{children}</Inner>
      </MainWrapper>
      <Footer />
    </>
  );
};

export default Main;
