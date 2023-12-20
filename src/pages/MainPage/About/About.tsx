import './About.css';

import { IconForward } from '@consta/icons/IconForward';
import { IconThumbUp } from '@consta/icons/IconThumbUp';
import { useLink } from '@consta/stand/src/hooks/useLink';
import { routesNames } from '@consta/stand/src/modules/router';
import { cnText, Text } from '@consta/uikit/Text';
import { useTheme } from '@consta/uikit/Theme';
import React, { Fragment } from 'react';

import IconFigma from '##/icons/FigmaMono.icon.svg';
import IconGithub from '##/icons/Github.icon.svg';
import IconStorybook from '##/icons/Storybook.icon.svg';
import {
  constaGitHub,
  contsaCommunityFigma,
  licenceMit,
} from '##/modules/api/links';
import { cn } from '##/utils/bem';

// import { AboutVideo } from './AboutVideo/AboutVideo';

const cnAbout = cn('About');

const cnLinks = cn('LinksToLibrary');

const More = (
  <Text
    className={cnLinks('More', [
      'decorator decorator_distribute_left decorator_vertical-align_center decorator_indent-r_s',
    ])}
    size="l"
    lineHeight="m"
    as="span"
  >
    Смотреть
    <IconForward
      className={cnLinks('Arrow', ['decorator decorator_indent-l_m'])}
      size="m"
      view="primary"
    />
  </Text>
);

export const About: React.FC = () => {
  const { themeClassNames } = useTheme();

  const [componentsLink, componentsOnClick] = useLink({
    to: routesNames.LIBS,
  });
  return (
    <section className={cnAbout(null, ['Container', 'Section'])}>
      <div
        className={cnAbout('Lead', [
          'tpl-grid tpl-grid_col-gap_half tpl-grid_row-gap_full tpl-grid_m-columns_12 decorator decorator_space-b_5xl',
        ])}
      >
        <div className="tpl-grid__fraction tpl-grid__fraction_m-col_8">
          <Text
            className={cnAbout('Title', ['decorator decorator_indent-b_2xl'])}
            size="5xl"
            weight="bold"
            as="h2"
            lineHeight="2xs"
          >
            Что такое дизайн&#8209;система?
          </Text>
          <Text
            className={cnAbout(null, ['decorator decorator_indent-v_none'])}
            size="2xl"
            view="secondary"
            as="p"
            lineHeight="m"
          >
            Это библиотеки компонентов и понятные правила их взаимодействия —
            всё, что нужно дизайнерам и разработчикам для создания интерфейсов.
          </Text>
        </div>
        {/* <div className="tpl-grid__fraction tpl-grid__fraction_m-col_4 ">
          <AboutVideo />
        </div> */}
      </div>

      <div
        className={cnAbout('Links', [
          cnLinks(),
          'decorator decorator_indent-b_5xl',
        ])}
      >
        <div className={cnLinks('Cards')}>
          {[
            {
              title: 'Всем-всем',
              subTitle:
                'Витрина компонентов с подробной документацией и правилами использования.',
              hasVersion: false,
              icon: 'storybook',
              href: componentsLink,
              onClick: componentsOnClick,
              additionalClassNames: themeClassNames.color.accent,
            },
            {
              title: 'Дизайнерам',
              subTitle:
                'Правила использования и библиотека компонентов в Figma Community.',
              hasVersion: false,
              icon: 'figma',
              href: contsaCommunityFigma,
              additionalClassNames: themeClassNames.color.invert,
            },
            {
              title: 'Разработчикам',
              subTitle: 'Репозитории библиотек на GitHub.',
              hasVersion: true,
              icon: 'github',
              href: constaGitHub,
              additionalClassNames: themeClassNames.color.invert,
            },
          ].map((item, index) => (
            <Fragment key={index}>
              <a
                href={item.href}
                target="_blank"
                className={cnLinks(
                  'Item',
                  { to: `${item.icon[0].toUpperCase()}${item.icon.slice(1)}` },
                  [item.additionalClassNames, cnText({ view: 'primary' })],
                )}
                onClick={item.onClick}
                rel="noreferrer"
              >
                <div>
                  <Text
                    className={cnLinks('Title', [
                      'decorator decorator_indent-b_m',
                    ])}
                    size="2xl"
                    weight="bold"
                    as="h3"
                    lineHeight="xs"
                  >
                    {item.title}
                  </Text>
                  <Text
                    className={cnLinks('Text')}
                    size="l"
                    as="p"
                    lineHeight="m"
                  >
                    {item.subTitle}
                  </Text>
                </div>

                <div
                  className={cnLinks('Footer', [
                    'decorator decorator_distribute_between',
                  ])}
                >
                  {item.icon === 'storybook' && (
                    <IconStorybook
                      size="m"
                      view="primary"
                      className={cnLinks('Logo')}
                    />
                  )}
                  {item.icon === 'figma' && (
                    <IconFigma
                      size="m"
                      view="primary"
                      className={cnLinks('Logo')}
                    />
                  )}
                  {item.icon === 'github' && (
                    <IconGithub
                      size="m"
                      view="primary"
                      className={cnLinks('Logo')}
                    />
                  )}

                  {More}
                </div>
              </a>
            </Fragment>
          ))}
        </div>
      </div>

      <div className="decorator decorator_distribute_center decorator_vertical_align_baseline">
        <IconThumbUp
          size="m"
          view="secondary"
          className="decorator decorator_indent-r_m"
          style={{ flexShrink: 0 }}
        />
        <Text size="l" view="secondary" as="p" lineHeight="m">
          Дизайн-систему можно использовать бесплатно, она распространяется на
          условиях открытой{' '}
          <Text href={licenceMit} target="_blank" view="link" as="a">
            лицензии MIT
          </Text>
          .
        </Text>
      </div>
    </section>
  );
};
