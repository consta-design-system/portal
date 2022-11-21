import './Footer.css';

import { IconOpenInNew } from '@consta/uikit/IconOpenInNew';
import { Text } from '@consta/uikit/Text';
import React from 'react';

// import { FooterForm } from './FooterForm/FooterForm';
import { constaLandingRepository } from '##/modules/api/links';
import { cn } from '##/utils/bem';

const cnFooter = cn('Footer');

export const Footer: React.FC = () => {
  return (
    <section className={cnFooter(null, ['Section_space_small'])}>
      <div className="Container">
        <Text
          className={cnFooter('Title', [
            'decorator decorator_indent-t_3xl decorator_indent-b_2xl',
          ])}
          size="3xl"
          weight="bold"
          as="h2"
          lineHeight="2xs"
        >
          Остались вопросы?
        </Text>
        <div className="tpl-grid tpl-grid_m-columns_8 tpl-grid_l-columns_12 tpl-grid_col-gap_full decorator decorator_indent-b_4xl">
          {/* <FooterForm className="tpl-grid__fraction_m-col_5 tpl-grid__fraction_l-col_7" /> */}
          <div
            className={cnFooter('Text', [
              'tpl-grid__fraction_m-col_3 tpl-grid__fraction_l-col_5',
            ])}
          >
            <Text
              className="decorator decorator_indent-b_m"
              size="xl"
              view="secondary"
              as="p"
            >
              Пишите нам в{' '}
              <Text
                as="a"
                href="https://t.me/Consta_Chat"
                size="xl"
                view="link"
                target="_blank"
              >
                чате
              </Text>
              .
            </Text>
          </div>
        </div>
        <div className={cnFooter('Copyright')}>
          <Text
            as="a"
            href={constaLandingRepository}
            target="_blank"
            size="m"
            view="link"
          >
            Репозиторий этой страницы <IconOpenInNew size="s" />
          </Text>
        </div>
      </div>
    </section>
  );
};
