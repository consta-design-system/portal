import './HeaderFlexible.css';

import React from 'react';

import { Header, HeaderProps } from '##/components/Header/Header';
import { cn } from '##/utils/bem';

export type HeaderFlexibleProps = {
  fixed: boolean;
  fixebleLogo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  visibleHeadrer?: HeaderProps;
  fixebleHeadrer?: HeaderProps;
} & HeaderProps;

const cnHeaderFlexible = cn('HeaderFlexible');

export const HeaderFlexible: React.FC<HeaderFlexibleProps> = (props) => {
  const {
    logo,
    menu,
    fixed,
    fixebleLogo,
    className,
    visibleHeadrer,
    fixebleHeadrer,
    ...otherProps
  } = props;
  return (
    <>
      <Header
        {...otherProps}
        {...visibleHeadrer}
        className={cnHeaderFlexible('Visible', [className])}
        logo={logo}
        menu={menu}
      />
      <Header
        {...otherProps}
        {...fixebleHeadrer}
        className={cnHeaderFlexible('Fixeble', { fixed }, [className])}
        logo={fixebleLogo || logo}
        menu={menu}
      />
    </>
  );
};
