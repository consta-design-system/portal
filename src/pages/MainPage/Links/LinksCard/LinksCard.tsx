import './LinksCard.css';

import { IconComponent } from '@consta/icons/Icon';
import { IconOpenInNew } from '@consta/icons/IconOpenInNew';
import { PropsWithJsxAttributes } from '@consta/uikit/__internal__/src/utils/types/PropsWithJsxAttributes';
import { cnText, Text } from '@consta/uikit/Text';
import React from 'react';

import { cn } from '##/utils/bem';

export const cnLinksCard = cn('LinksCard');

type Props = PropsWithJsxAttributes<
  {
    view: 'storybook' | 'figma' | 'github';
    title: string;
    description: string;
    icon: IconComponent;
    children?: never;
    hrefKit: string;
    buttonClick?: React.MouseEventHandler;
  },
  'div'
>;

export const LinksCard: React.FC<Props> = (props) => {
  const {
    className,
    view,
    title,
    description,
    icon: Icon,
    hrefKit,
    buttonClick,
    ...otherProps
  } = props;

  return (
    <div
      {...otherProps}
      className={cnLinksCard({ view }, [
        className,
        cnText({ view: 'primary' }),
      ])}
    >
      <div className={cnLinksCard('Content')}>
        <Icon size="m" view="primary" className={cnLinksCard('Logo')} />
        <Text
          className={cnLinksCard('Title', ['decorator decorator_indent-b_s'])}
          size="xl"
          weight="bold"
          lineHeight="s"
        >
          {title}
        </Text>
        <Text
          className={cnLinksCard('Description', [
            'decorator decorator_indent-b_xl',
          ])}
          size="l"
          as="p"
          lineHeight="m"
        >
          {description}
        </Text>
      </div>
      <div className={cnLinksCard('Footer')}>
        <a
          className={cnLinksCard('Brick')}
          href={hrefKit}
          target="_blank"
          onClick={buttonClick}
          rel="noreferrer"
        >
          <Text
            className={cnLinksCard('More', [
              'decorator decorator_distribute_left decorator_vertical-align_center decorator_indent-r_s',
            ])}
            size="l"
            as="span"
            view="primary"
            lineHeight="m"
          >
            Смотреть
          </Text>
          <IconOpenInNew
            className={cnLinksCard('Arrow')}
            size="m"
            view="primary"
          />
        </a>
      </div>
    </div>
  );
};
