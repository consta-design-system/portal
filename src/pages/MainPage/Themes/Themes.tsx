import './Themes.css';

import { Text } from '@consta/uikit/Text';
import React from 'react';

import { cn } from '##/utils/bem';

import { ThemeControls } from '../ThemeControls/ThemeControls';

const cnThemes = cn('Themes');

export const Themes: React.FC = () => {
  return (
    <section className={cnThemes(null, ['Container Section'])}>
      <Text
        className={cnThemes('Title', [
          'decorator decorator_indent-t_none decorator_indent-b_2xl',
        ])}
        size="5xl"
        weight="bold"
        as="h3"
        lineHeight="2xs"
      >
        Гибкая тематизация
      </Text>
      <Text
        className={cnThemes(null, ['decorator decorator_indent-b_4xl'])}
        size="2xl"
        view="secondary"
        as="p"
      >
        С библиотекой Consta можно мгновенно поменять внешний вид проекта —
        цвета, шрифты, отступы и не только. Просто нажмите на кнопку и
        посмотрите, как меняется эта страница.
      </Text>

      <div
        className={cnThemes('Controls', ['decorator decorator_indent-b_2xl'])}
      >
        <ThemeControls />
      </div>
    </section>
  );
};
