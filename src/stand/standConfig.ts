import { createConfig } from '@consta/stand';

export const { createStand, createPage } = createConfig({
  title: 'Документация дизайн-системы',
  id: 'portal',
  groups: [
    // {
    //   title: 'О дизайн-системе',
    //   id: 'about',
    // },
    // {
    //   title: 'Тематизация',
    //   id: 'theme',
    // },
    // {
    //   title: 'Как работать с Consta',
    //   id: 'workflow',
    // },
    // {
    //   title: 'Кастомизация',
    //   id: 'custom',
    // },
    // {
    //   title: 'Портал',
    //   id: 'portal',
    // },
    // {
    //   title: 'Правила и справочники',
    //   id: 'reference',
    // },
    /// новые
    {
      title: 'Начало работы',
      id: 'startwork',
      description:
        'Первое знакомство с дизайн-системой Consta: установка и использование, возможности и визуальные принципы.',
    },
    {
      title: 'Гайдлайны',
      id: 'guidelines',
      description:
        'Руководства и инструкции по работе с Consta, её кодом и дизайн-библиотеками.',
    },
    {
      title: 'Тематизация',
      id: 'theme',
    },
    {
      title: 'Контрибьютерам',
      id: 'contributers',
    },
    {
      title: 'Портал',
      id: 'portal',
    },
  ],
  group: 'Общая документация',
  order: 1,
  description:
    'Статьи о дизайн-системе и о том, как с ней работать — всё о темах, новых компонентах и контрибьюторах.  ',
  repositoryUrl: 'https://github.com/consta-design-system/portal',
});
