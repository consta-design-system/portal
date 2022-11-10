import { createConfig } from '@consta/stand';

import image from './ConstaImage.png';
import description from './description.mdx';

export const { createStand, createPage } = createConfig({
  title: 'Документация дизайн-системы',
  id: 'portal',
  groups: [
    {
      title: 'О дизайн-системе',
      id: 'about',
    },
    {
      title: 'Тематизация',
      id: 'theme',
    },
    {
      title: 'Как работать с Consta',
      id: 'workflow',
    },
    {
      title: 'Кастомизация',
      id: 'custom',
    },
    {
      title: 'Портал',
      id: 'portal',
    },
    {
      title: 'Правила и справочники',
      id: 'reference',
    },
  ],
  group: 'Общая документация',
  image,
  description,
  repositoryUrl: 'https://github.com/consta-design-system/portal',
});
