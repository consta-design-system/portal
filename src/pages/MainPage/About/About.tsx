import './About.css';

import { IconThumbUp } from '@consta/icons/IconThumbUp';
import { Text } from '@consta/uikit/Text';
import React from 'react';

import { licenceMit } from '##/modules/api/links';
import { cn } from '##/utils/bem';

const cnAbout = cn('About');

export const About: React.FC = () => {
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
