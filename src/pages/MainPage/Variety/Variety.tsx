import './Variety.css';

import { useLink } from '@consta/stand/src/hooks/useLink';
import { routesNames } from '@consta/stand/src/modules/router';
import { Text } from '@consta/uikit/Text';
import React from 'react';

import { cn } from '##/utils/bem';

const cnVariety = cn('Variety');

export const Variety: React.FC = () => {
  const [libLink] = useLink({
    to: routesNames.LIBS,
  });

  return (
    <section className={cnVariety(null, ['Container Section'])}>
      <Text
        className={cnVariety('Title', [
          'decorator decorator_indent-t_none decorator_indent-b_2xl',
        ])}
        size="5xl"
        weight="bold"
        as="h3"
        lineHeight="2xs"
      >
        Используйте готовые компоненты
      </Text>
      <Text size="2xl" view="secondary" as="p" lineHeight="m">
        Основа, из которой легко построить интерфейс — для любых задач. Большой
        выбор, много вариантов, можно менять и дорабатывать. Посмотреть, как
        выглядят и работают компоненты дизайн-системы, можно в нашей{' '}
        <Text view="link" as="a" href={libLink} target="_blank">
          библиотеке
        </Text>
        .
      </Text>
    </section>
  );
};
