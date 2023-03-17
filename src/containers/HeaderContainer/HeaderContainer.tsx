import './HeaderContainer.css';

import { useLink } from '@consta/stand/src/hooks/useLink';
import { routesNames } from '@consta/stand/src/modules/router';
import { useTheme } from '@consta/uikit/Theme';
import { useAtom } from '@reatom/npm-react';
import React, { useEffect, useRef } from 'react';

import { HeaderFlexible } from '##/components/HeaderFlexible/HeaderFlexible';
import IconComponent from '##/icons/Component.icon.svg';
import IconFigma from '##/icons/FigmaSmall.icon.svg';
import IconGithub from '##/icons/GithubSmall.icon.svg';
import IconTelegram from '##/icons/TelegramSmall.icon.svg';
import ConstaLogo from '##/images/ConstaLogo2.image.svg';
import {
  constaGitHub,
  constaTelegram,
  contsaCommunityFigma,
  gazPromNeft,
} from '##/modules/api/links';
import { fixedAtom } from '##/modules/header';
import { cn } from '##/utils/bem';

const cnHeaderContainer = cn('HeaderContainer');

const mapLogoConstaColors: { [key: string]: string } = {
  gpnDefault: 'var(--color-typo-link)',
  gpnDark: 'var(--color-typo-primary)',
  gpnDisplay: 'var(--color-typo-primary)',
  altDefault: 'var(--color-typo-link)',
  altDark: 'var(--color-typo-primary)',
  altDisplay: 'var(--color-typo-primary)',
  alt2Default: 'var(--color-typo-link)',
  alt2Dark: 'var(--color-typo-primary)',
  alt2Display: 'var(--color-typo-primary)',
};

export const HeaderContainer: React.FC = () => {
  const [fixed] = useAtom(fixedAtom);
  const { theme } = useTheme();
  const visibleHeadrerRef = useRef<HTMLDivElement>(null);
  const fixebleHeadrerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fixebleHeadrerRef.current?.style.setProperty(
      '--logo-color',
      mapLogoConstaColors[theme.color.primary],
    );
  }, [theme]);

  const [componentsLink, componentsOnClick] = useLink({
    to: routesNames.LIBS,
  });

  return (
    <HeaderFlexible
      className={cnHeaderContainer()}
      fixebleLogo={ConstaLogo}
      menu={[
        {
          label: 'Компоненты',
          link: componentsLink,
          onClick: componentsOnClick,
          icon: IconComponent,
          onlyIcon: false,
        },
        {
          label: 'Figma',
          link: contsaCommunityFigma,
          icon: IconFigma,
          onlyIcon: false,
        },
        {
          label: 'GitHub',
          link: constaGitHub,
          icon: IconGithub,
          onlyIcon: false,
        },
        {
          label: 'Новости в Telegram',
          link: constaTelegram,
          icon: IconTelegram,
          onlyIcon: false,
        },
      ]}
      fixed={fixed}
      visibleHeadrer={{ ref: visibleHeadrerRef, logoLink: gazPromNeft }}
      fixebleHeadrer={{ ref: fixebleHeadrerRef }}
    />
  );
};
