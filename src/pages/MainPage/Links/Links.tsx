import './Links.css';

import { useLink } from '@consta/stand/src/hooks/useLink';
import { routesNames } from '@consta/stand/src/modules/router';
import { Text } from '@consta/uikit/Text';
import { useTheme } from '@consta/uikit/Theme';
import React from 'react';

import IconFigma from '##/icons/Figma.icon.svg';
import IconGithub from '##/icons/Github.icon.svg';
import IconStorybook from '##/icons/Storybook.icon.svg';
import {
  constaGitHub,
  constaTelegram,
  contsaCommunityFigma,
} from '##/modules/api/links';
import { cn } from '##/utils/bem';

import { LinksCard } from './LinksCard/LinksCard';

export const cnLinks = cn('Links');

export const Links: React.FC = () => {
  const { themeClassNames } = useTheme();

  const [libsLink, libsOnClick] = useLink({
    to: routesNames.LIBS,
  });

  return (
    <section className={cnLinks(null, ['Container', 'Section'])}>
      <Text
        className={cnLinks('Title', [
          'decorator decorator_indent-t_none decorator_indent-b_5xl',
        ])}
        size="5xl"
        weight="bold"
        as="h3"
        lineHeight="2xs"
        align="center"
      >
        Берите и пользуйтесь
      </Text>
      <div className={cnLinks('List', ['decorator decorator_indent-b_4xl'])}>
        <div className="tpl-grid tpl-grid_m-ratio_1-1-1">
          <LinksCard
            className={themeClassNames.color.accent}
            view="storybook"
            icon={IconStorybook}
            title="Витрина компонентов и документация"
            hrefKit={libsLink}
            buttonClick={libsOnClick}
            description="Посмотрите, как выглядят компоненты, как они меняются и прочитайте, где и когда их лучше использовать."
          />
          <LinksCard
            className={themeClassNames.color.invert}
            view="figma"
            icon={IconFigma}
            title="Библиотека в Figma"
            hrefKit={contsaCommunityFigma}
            description="Набор компонентов для создания макетов проекта в Figma Community. Отправьте эту ссылку дизайнеру — он разберётся."
          />
          <LinksCard
            className={themeClassNames.color.invert}
            view="github"
            icon={IconGithub}
            title="React-библиотека"
            hrefKit={constaGitHub}
            description="Репозитории библиотек на React, TypeScript и PostCSS. Отправьте эту ссылку фронтенд разработчику — он знает, что с ней делать."
          />
        </div>
      </div>
      <div className="decorator decorator_distribute_center decorator_vertical_align_baseline">
        <Text size="xl" view="secondary" as="p" align="center">
          Следите за обновлениями{' '}
          <Text
            as="a"
            href={constaTelegram}
            size="xl"
            view="link"
            target="_blank"
          >
            в Телеграм-канале
          </Text>
          .
        </Text>
      </div>
    </section>
  );
};
