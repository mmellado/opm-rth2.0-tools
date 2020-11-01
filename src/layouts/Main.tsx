import React from 'react';
import GlobalStyles from '@styles/GlobalStyles';

const Main: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <header>Navigation here</header>
      <main>{children}</main>
      <footer>Footer here</footer>
    </>
  );
};

export default Main;
