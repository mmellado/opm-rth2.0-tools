import React from 'react';
import heroes from '@data/heroes';
import Hero from '@components/Hero';

import { HeroRank } from '@data/types';
import MainLayout from '../layouts/Main';

const Home: React.FC = () => (
  <MainLayout>
    {heroes.map((hero) => (
      <Hero {...hero} key={hero.name} currentRank={HeroRank.epicPlus} />
    ))}
  </MainLayout>
);
export default Home;
