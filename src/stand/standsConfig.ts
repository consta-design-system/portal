import { libsMenuConfig, libsPageConfig, ListCardBanner } from '@consta/stand';

import description from './standsDescription.mdx';

libsMenuConfig({
  groups: [
    {
      label: 'Отдельные компоненты',
      initialOpen: true,
    },
  ],
});

libsPageConfig({
  title: 'Обзор',
  description,
  extractLibs: ['portal'],
  groups: [
    {
      label: 'Контрибьютерам',
      renderList: ListCardBanner,
      maxCount: 1,
    },
    {
      label: 'Основные библиотеки',
      description:
        'Готовые блоки, большой набор адаптивных компонентов, графиков и мобильные UI-киты.',
    },
    {
      label: 'Отдельные компоненты',
      description:
        'Компоненты для аналитики, примеры использования карт, а также инфографика.',
    },
    {
      label: 'Адаптеры',
      description:
        'Адаптеры для стилизации таблиц, диаграмм, календаря и других компонентов для Consta.',
    },

    // {
    //   label: 'Основные библиотеки',
    //   maxCount: 2,
    //   buttonMore: true,
    // },
    // {
    //   label: 'Как работать с Consta',
    //   maxCount: 2,
    //   buttonMore: true,
    // },
  ],
});
