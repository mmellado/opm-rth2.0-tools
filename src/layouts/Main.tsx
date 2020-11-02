import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '@styles/GlobalStyles';

const MainWrapper = styled.main`
  width: 90vw;
  margin: 0 auto;
`;

const Main: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />

      <header>Navigation here</header>
      <MainWrapper>{children}</MainWrapper>
      <footer>Footer here</footer>
    </>
  );
};

export default Main;
