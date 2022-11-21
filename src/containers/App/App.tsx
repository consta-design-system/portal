import './App.css';
import './wtpr.css';

import { Theme } from '@consta/uikit/Theme';
import { useAtom } from '@reatom/npm-react';
import React from 'react';

import { SnackBarContainer } from '##/containers/SnackBarContainer';
import { themeAtom } from '##/modules/theme';
import { cn } from '##/utils/bem';

const cnApp = cn('App');

export const App: React.FC<{
  children?: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  const [theme] = useAtom(themeAtom);

  return (
    <Theme
      className={cnApp(null, ['theme_gap_large', className])}
      preset={theme}
    >
      {children}
      <SnackBarContainer />
    </Theme>
  );
};
