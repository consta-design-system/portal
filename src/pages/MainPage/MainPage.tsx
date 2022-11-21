import './MainPage.css';

import React from 'react';

import { App } from '##/containers/App';
import { HeaderContainer } from '##/containers/HeaderContainer';
import { About } from '##/pages/MainPage/About';
import { FAQ } from '##/pages/MainPage/FAQ';
import { Footer } from '##/pages/MainPage/Footer';
import { HeroScreen } from '##/pages/MainPage/HeroScreen';
import { Links } from '##/pages/MainPage/Links';
import { Showroom } from '##/pages/MainPage/Showroom';
import { Themes } from '##/pages/MainPage/Themes';
import { Variety } from '##/pages/MainPage/Variety';
import { Why } from '##/pages/MainPage/Why';
import { cn } from '##/utils/bem';

const cnMainPage = cn('MainPage');

export const MainPage: React.FC = () => (
  <App className={cnMainPage()}>
    <HeaderContainer />
    <HeroScreen />
    <About />
    <Why />
    <Themes />
    <Variety />
    <Showroom />
    <FAQ />
    <Links />
    <Footer />
  </App>
);
