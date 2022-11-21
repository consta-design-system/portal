/* eslint-disable camelcase */
import './Why.css';

import { Text } from '@consta/uikit/Text';
import React from 'react';

import AltReason1_1x_dark from '##/images/Reasons/Alt/Dark/Reason_1_1x.jpg';
import AltReason1_2x_dark from '##/images/Reasons/Alt/Dark/Reason_1_2x.jpg';
import AltReason1_3x_dark from '##/images/Reasons/Alt/Dark/Reason_1_3x.jpg';
import AltReason2_1x_dark from '##/images/Reasons/Alt/Dark/Reason_2_1x.jpg';
import AltReason2_2x_dark from '##/images/Reasons/Alt/Dark/Reason_2_2x.jpg';
import AltReason2_3x_dark from '##/images/Reasons/Alt/Dark/Reason_2_3x.jpg';
import AltReason3_1x_dark from '##/images/Reasons/Alt/Dark/Reason_3_1x.jpg';
import AltReason3_2x_dark from '##/images/Reasons/Alt/Dark/Reason_3_2x.jpg';
import AltReason3_3x_dark from '##/images/Reasons/Alt/Dark/Reason_3_3x.jpg';
import AltReason4_1x_dark from '##/images/Reasons/Alt/Dark/Reason_4_1x.jpg';
import AltReason4_2x_dark from '##/images/Reasons/Alt/Dark/Reason_4_2x.jpg';
import AltReason4_3x_dark from '##/images/Reasons/Alt/Dark/Reason_4_3x.jpg';
import AltReason1_1x_default from '##/images/Reasons/Alt/Default/Reason_1_1x.jpg';
import AltReason1_2x_default from '##/images/Reasons/Alt/Default/Reason_1_2x.jpg';
import AltReason1_3x_default from '##/images/Reasons/Alt/Default/Reason_1_3x.jpg';
import AltReason2_1x_default from '##/images/Reasons/Alt/Default/Reason_2_1x.jpg';
import AltReason2_2x_default from '##/images/Reasons/Alt/Default/Reason_2_2x.jpg';
import AltReason2_3x_default from '##/images/Reasons/Alt/Default/Reason_2_3x.jpg';
import AltReason3_1x_default from '##/images/Reasons/Alt/Default/Reason_3_1x.jpg';
import AltReason3_2x_default from '##/images/Reasons/Alt/Default/Reason_3_2x.jpg';
import AltReason3_3x_default from '##/images/Reasons/Alt/Default/Reason_3_3x.jpg';
import AltReason4_1x_default from '##/images/Reasons/Alt/Default/Reason_4_1x.jpg';
import AltReason4_2x_default from '##/images/Reasons/Alt/Default/Reason_4_2x.jpg';
import AltReason4_3x_default from '##/images/Reasons/Alt/Default/Reason_4_3x.jpg';
import AltReason1_1x_display from '##/images/Reasons/Alt/Display/Reason_1_1x.jpg';
import AltReason1_2x_display from '##/images/Reasons/Alt/Display/Reason_1_2x.jpg';
import AltReason1_3x_display from '##/images/Reasons/Alt/Display/Reason_1_3x.jpg';
import AltReason2_1x_display from '##/images/Reasons/Alt/Display/Reason_2_1x.jpg';
import AltReason2_2x_display from '##/images/Reasons/Alt/Display/Reason_2_2x.jpg';
import AltReason2_3x_display from '##/images/Reasons/Alt/Display/Reason_2_3x.jpg';
import AltReason3_1x_display from '##/images/Reasons/Alt/Display/Reason_3_1x.jpg';
import AltReason3_2x_display from '##/images/Reasons/Alt/Display/Reason_3_2x.jpg';
import AltReason3_3x_display from '##/images/Reasons/Alt/Display/Reason_3_3x.jpg';
import AltReason4_1x_display from '##/images/Reasons/Alt/Display/Reason_4_1x.jpg';
import AltReason4_2x_display from '##/images/Reasons/Alt/Display/Reason_4_2x.jpg';
import AltReason4_3x_display from '##/images/Reasons/Alt/Display/Reason_4_3x.jpg';
import Alt2Reason1_1x_dark from '##/images/Reasons/Alt2/Dark/Reason_1_1x.jpg';
import Alt2Reason1_2x_dark from '##/images/Reasons/Alt2/Dark/Reason_1_2x.jpg';
import Alt2Reason1_3x_dark from '##/images/Reasons/Alt2/Dark/Reason_1_3x.jpg';
import Alt2Reason2_1x_dark from '##/images/Reasons/Alt2/Dark/Reason_2_1x.jpg';
import Alt2Reason2_2x_dark from '##/images/Reasons/Alt2/Dark/Reason_2_2x.jpg';
import Alt2Reason2_3x_dark from '##/images/Reasons/Alt2/Dark/Reason_2_3x.jpg';
import Alt2Reason3_1x_dark from '##/images/Reasons/Alt2/Dark/Reason_3_1x.jpg';
import Alt2Reason3_2x_dark from '##/images/Reasons/Alt2/Dark/Reason_3_2x.jpg';
import Alt2Reason3_3x_dark from '##/images/Reasons/Alt2/Dark/Reason_3_3x.jpg';
import Alt2Reason4_1x_dark from '##/images/Reasons/Alt2/Dark/Reason_4_1x.jpg';
import Alt2Reason4_2x_dark from '##/images/Reasons/Alt2/Dark/Reason_4_2x.jpg';
import Alt2Reason4_3x_dark from '##/images/Reasons/Alt2/Dark/Reason_4_3x.jpg';
import Alt2Reason1_1x_default from '##/images/Reasons/Alt2/Default/Reason_1_1x.jpg';
import Alt2Reason1_2x_default from '##/images/Reasons/Alt2/Default/Reason_1_2x.jpg';
import Alt2Reason1_3x_default from '##/images/Reasons/Alt2/Default/Reason_1_3x.jpg';
import Alt2Reason2_1x_default from '##/images/Reasons/Alt2/Default/Reason_2_1x.jpg';
import Alt2Reason2_2x_default from '##/images/Reasons/Alt2/Default/Reason_2_2x.jpg';
import Alt2Reason2_3x_default from '##/images/Reasons/Alt2/Default/Reason_2_3x.jpg';
import Alt2Reason3_1x_default from '##/images/Reasons/Alt2/Default/Reason_3_1x.jpg';
import Alt2Reason3_2x_default from '##/images/Reasons/Alt2/Default/Reason_3_2x.jpg';
import Alt2Reason3_3x_default from '##/images/Reasons/Alt2/Default/Reason_3_3x.jpg';
import Alt2Reason4_1x_default from '##/images/Reasons/Alt2/Default/Reason_4_1x.jpg';
import Alt2Reason4_2x_default from '##/images/Reasons/Alt2/Default/Reason_4_2x.jpg';
import Alt2Reason4_3x_default from '##/images/Reasons/Alt2/Default/Reason_4_3x.jpg';
import Alt2Reason1_1x_display from '##/images/Reasons/Alt2/Display/Reason_1_1x.jpg';
import Alt2Reason1_2x_display from '##/images/Reasons/Alt2/Display/Reason_1_2x.jpg';
import Alt2Reason1_3x_display from '##/images/Reasons/Alt2/Display/Reason_1_3x.jpg';
import Alt2Reason2_1x_display from '##/images/Reasons/Alt2/Display/Reason_2_1x.jpg';
import Alt2Reason2_2x_display from '##/images/Reasons/Alt2/Display/Reason_2_2x.jpg';
import Alt2Reason2_3x_display from '##/images/Reasons/Alt2/Display/Reason_2_3x.jpg';
import Alt2Reason3_1x_display from '##/images/Reasons/Alt2/Display/Reason_3_1x.jpg';
import Alt2Reason3_2x_display from '##/images/Reasons/Alt2/Display/Reason_3_2x.jpg';
import Alt2Reason3_3x_display from '##/images/Reasons/Alt2/Display/Reason_3_3x.jpg';
import Alt2Reason4_1x_display from '##/images/Reasons/Alt2/Display/Reason_4_1x.jpg';
import Alt2Reason4_2x_display from '##/images/Reasons/Alt2/Display/Reason_4_2x.jpg';
import Alt2Reason4_3x_display from '##/images/Reasons/Alt2/Display/Reason_4_3x.jpg';
import GPNReason1_1x_dark from '##/images/Reasons/GPN/Dark/Reason_1_1x.jpg';
import GPNReason1_2x_dark from '##/images/Reasons/GPN/Dark/Reason_1_2x.jpg';
import GPNReason1_3x_dark from '##/images/Reasons/GPN/Dark/Reason_1_3x.jpg';
import GPNReason2_1x_dark from '##/images/Reasons/GPN/Dark/Reason_2_1x.jpg';
import GPNReason2_2x_dark from '##/images/Reasons/GPN/Dark/Reason_2_2x.jpg';
import GPNReason2_3x_dark from '##/images/Reasons/GPN/Dark/Reason_2_3x.jpg';
import GPNReason3_1x_dark from '##/images/Reasons/GPN/Dark/Reason_3_1x.jpg';
import GPNReason3_2x_dark from '##/images/Reasons/GPN/Dark/Reason_3_2x.jpg';
import GPNReason3_3x_dark from '##/images/Reasons/GPN/Dark/Reason_3_3x.jpg';
import GPNReason4_1x_dark from '##/images/Reasons/GPN/Dark/Reason_4_1x.jpg';
import GPNReason4_2x_dark from '##/images/Reasons/GPN/Dark/Reason_4_2x.jpg';
import GPNReason4_3x_dark from '##/images/Reasons/GPN/Dark/Reason_4_3x.jpg';
import GPNReason1_1x_default from '##/images/Reasons/GPN/Default/Reason_1_1x.jpg';
import GPNReason1_2x_default from '##/images/Reasons/GPN/Default/Reason_1_2x.jpg';
import GPNReason1_3x_default from '##/images/Reasons/GPN/Default/Reason_1_3x.jpg';
import GPNReason2_1x_default from '##/images/Reasons/GPN/Default/Reason_2_1x.jpg';
import GPNReason2_2x_default from '##/images/Reasons/GPN/Default/Reason_2_2x.jpg';
import GPNReason2_3x_default from '##/images/Reasons/GPN/Default/Reason_2_3x.jpg';
import GPNReason3_1x_default from '##/images/Reasons/GPN/Default/Reason_3_1x.jpg';
import GPNReason3_2x_default from '##/images/Reasons/GPN/Default/Reason_3_2x.jpg';
import GPNReason3_3x_default from '##/images/Reasons/GPN/Default/Reason_3_3x.jpg';
import GPNReason4_1x_default from '##/images/Reasons/GPN/Default/Reason_4_1x.jpg';
import GPNReason4_2x_default from '##/images/Reasons/GPN/Default/Reason_4_2x.jpg';
import GPNReason4_3x_default from '##/images/Reasons/GPN/Default/Reason_4_3x.jpg';
import GPNReason1_1x_display from '##/images/Reasons/GPN/Display/Reason_1_1x.jpg';
import GPNReason1_2x_display from '##/images/Reasons/GPN/Display/Reason_1_2x.jpg';
import GPNReason1_3x_display from '##/images/Reasons/GPN/Display/Reason_1_3x.jpg';
import GPNReason2_1x_display from '##/images/Reasons/GPN/Display/Reason_2_1x.jpg';
import GPNReason2_2x_display from '##/images/Reasons/GPN/Display/Reason_2_2x.jpg';
import GPNReason2_3x_display from '##/images/Reasons/GPN/Display/Reason_2_3x.jpg';
import GPNReason3_1x_display from '##/images/Reasons/GPN/Display/Reason_3_1x.jpg';
import GPNReason3_2x_display from '##/images/Reasons/GPN/Display/Reason_3_2x.jpg';
import GPNReason3_3x_display from '##/images/Reasons/GPN/Display/Reason_3_3x.jpg';
import GPNReason4_1x_display from '##/images/Reasons/GPN/Display/Reason_4_1x.jpg';
import GPNReason4_2x_display from '##/images/Reasons/GPN/Display/Reason_4_2x.jpg';
import GPNReason4_3x_display from '##/images/Reasons/GPN/Display/Reason_4_3x.jpg';
import { cn } from '##/utils/bem';

import { WhyReason } from './WhyReason/WhyReason';

const cnWhy = cn('Why');

export const Why: React.FC = () => {
  return (
    <section className={cnWhy(null, ['Container Section'])}>
      <Text
        className={cnWhy('Title', [
          'decorator decorator_indent-t_none decorator_indent-b_5xl',
        ])}
        size="5xl"
        weight="bold"
        as="h3"
        lineHeight="2xs"
      >
        Зачем вам дизайн&#8209;система?
      </Text>
      <div className="tpl-grid tpl-grid_m-ratio_1-1 tpl-grid_col-gap_full tpl-grid_row-gap_full">
        <WhyReason
          picture={{
            mode: 1,
            src: {
              gpnDefault: {
                '1x': GPNReason1_1x_default,
                '2x': GPNReason1_2x_default,
                '4x': GPNReason1_3x_default,
              },
              gpnDark: {
                '1x': GPNReason1_1x_dark,
                '2x': GPNReason1_2x_dark,
                '4x': GPNReason1_3x_dark,
              },
              gpnDisplay: {
                '1x': GPNReason1_1x_display,
                '2x': GPNReason1_2x_display,
                '4x': GPNReason1_3x_display,
              },
              altDefault: {
                '1x': AltReason1_1x_default,
                '2x': AltReason1_2x_default,
                '4x': AltReason1_3x_default,
              },
              altDark: {
                '1x': AltReason1_1x_dark,
                '2x': AltReason1_2x_dark,
                '4x': AltReason1_3x_dark,
              },
              altDisplay: {
                '1x': AltReason1_1x_display,
                '2x': AltReason1_2x_display,
                '4x': AltReason1_3x_display,
              },
              alt2Default: {
                '1x': Alt2Reason1_1x_default,
                '2x': Alt2Reason1_2x_default,
                '4x': Alt2Reason1_3x_default,
              },
              alt2Dark: {
                '1x': Alt2Reason1_1x_dark,
                '2x': Alt2Reason1_2x_dark,
                '4x': Alt2Reason1_3x_dark,
              },
              alt2Display: {
                '1x': Alt2Reason1_1x_display,
                '2x': Alt2Reason1_2x_display,
                '4x': Alt2Reason1_3x_display,
              },
            },
          }}
          lead="Запускать продукты быстрее и дешевле. "
          text="Часть работы по созданию интерфейса уже сделана — в рамках нашей дизайн‑системы."
        />
        <WhyReason
          picture={{
            mode: 1,
            src: {
              gpnDefault: {
                '1x': GPNReason2_1x_default,
                '2x': GPNReason2_2x_default,
                '4x': GPNReason2_3x_default,
              },
              gpnDark: {
                '1x': GPNReason2_1x_dark,
                '2x': GPNReason2_2x_dark,
                '4x': GPNReason2_3x_dark,
              },
              gpnDisplay: {
                '1x': GPNReason2_1x_display,
                '2x': GPNReason2_2x_display,
                '4x': GPNReason2_3x_display,
              },
              altDefault: {
                '1x': AltReason2_1x_default,
                '2x': AltReason2_2x_default,
                '4x': AltReason2_3x_default,
              },
              altDark: {
                '1x': AltReason2_1x_dark,
                '2x': AltReason2_2x_dark,
                '4x': AltReason2_3x_dark,
              },
              altDisplay: {
                '1x': AltReason2_1x_display,
                '2x': AltReason2_2x_display,
                '4x': AltReason2_3x_display,
              },
              alt2Default: {
                '1x': Alt2Reason2_1x_default,
                '2x': Alt2Reason2_2x_default,
                '4x': Alt2Reason2_3x_default,
              },
              alt2Dark: {
                '1x': Alt2Reason2_1x_dark,
                '2x': Alt2Reason2_2x_dark,
                '4x': Alt2Reason2_3x_dark,
              },
              alt2Display: {
                '1x': Alt2Reason2_1x_display,
                '2x': Alt2Reason2_2x_display,
                '4x': Alt2Reason2_3x_display,
              },
            },
          }}
          lead="Просто проверять гипотезы. "
          text="Вы сможете собрать прототип интерфейса, показать пользователям и проверить, что в интерфейсе всё понятно — до начала разработки."
        />
        <WhyReason
          picture={{
            mode: 1,
            src: {
              gpnDefault: {
                '1x': GPNReason3_1x_default,
                '2x': GPNReason3_2x_default,
                '4x': GPNReason3_3x_default,
              },
              gpnDark: {
                '1x': GPNReason3_1x_dark,
                '2x': GPNReason3_2x_dark,
                '4x': GPNReason3_3x_dark,
              },
              gpnDisplay: {
                '1x': GPNReason3_1x_display,
                '2x': GPNReason3_2x_display,
                '4x': GPNReason3_3x_display,
              },
              altDefault: {
                '1x': AltReason3_1x_default,
                '2x': AltReason3_2x_default,
                '4x': AltReason3_3x_default,
              },
              altDark: {
                '1x': AltReason3_1x_dark,
                '2x': AltReason3_2x_dark,
                '4x': AltReason3_3x_dark,
              },
              altDisplay: {
                '1x': AltReason3_1x_display,
                '2x': AltReason3_2x_display,
                '4x': AltReason3_3x_display,
              },
              alt2Default: {
                '1x': Alt2Reason3_1x_default,
                '2x': Alt2Reason3_2x_default,
                '4x': Alt2Reason3_3x_default,
              },
              alt2Dark: {
                '1x': Alt2Reason3_1x_dark,
                '2x': Alt2Reason3_2x_dark,
                '4x': Alt2Reason3_3x_dark,
              },
              alt2Display: {
                '1x': Alt2Reason3_1x_display,
                '2x': Alt2Reason3_2x_display,
                '4x': Alt2Reason3_3x_display,
              },
            },
          }}
          lead="Только лучшие практики. "
          text="Мы проверяем работу компонентов в реальных продуктах нашей компании и выбираем наилучшие варианты. Постоянно добавляем в библиотеку новые компоненты и улучшаем то, что есть."
        />
        <WhyReason
          picture={{
            mode: 1,
            src: {
              gpnDefault: {
                '1x': GPNReason4_1x_default,
                '2x': GPNReason4_2x_default,
                '4x': GPNReason4_3x_default,
              },
              gpnDark: {
                '1x': GPNReason4_1x_dark,
                '2x': GPNReason4_2x_dark,
                '4x': GPNReason4_3x_dark,
              },
              gpnDisplay: {
                '1x': GPNReason4_1x_display,
                '2x': GPNReason4_2x_display,
                '4x': GPNReason4_3x_display,
              },
              altDefault: {
                '1x': AltReason4_1x_default,
                '2x': AltReason4_2x_default,
                '4x': AltReason4_3x_default,
              },
              altDark: {
                '1x': AltReason4_1x_dark,
                '2x': AltReason4_2x_dark,
                '4x': AltReason4_3x_dark,
              },
              altDisplay: {
                '1x': AltReason4_1x_display,
                '2x': AltReason4_2x_display,
                '4x': AltReason4_3x_display,
              },
              alt2Default: {
                '1x': Alt2Reason4_1x_default,
                '2x': Alt2Reason4_2x_default,
                '4x': Alt2Reason4_3x_default,
              },
              alt2Dark: {
                '1x': Alt2Reason4_1x_dark,
                '2x': Alt2Reason4_2x_dark,
                '4x': Alt2Reason4_3x_dark,
              },
              alt2Display: {
                '1x': Alt2Reason4_1x_display,
                '2x': Alt2Reason4_2x_display,
                '4x': Alt2Reason4_3x_display,
              },
            },
          }}
          lead="Довольные пользователи. "
          text="Проще осваивать новое, когда продукты компании выглядят похоже и построены по сходным принципам. А вам — меньше доработок и затрат на поддержку продукта."
        />
      </div>
    </section>
  );
};
