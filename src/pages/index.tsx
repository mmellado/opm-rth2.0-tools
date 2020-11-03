import React from 'react';
import Team from '@components/Team';

import MainLayout from '../layouts/Main';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <Team />
    </MainLayout>
  );
};
export default Home;
