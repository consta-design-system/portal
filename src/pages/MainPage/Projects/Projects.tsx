import './Projects.css';

import { Button } from '@consta/uikit/Button';
import { Text } from '@consta/uikit/Text';
import { useTheme } from '@consta/uikit/Theme';
import React from 'react';

import { allProjects } from '##/modules/api/links';
import { cn } from '##/utils/bem';

const cnProjects = cn('Projects');

export const Projects: React.FC = () => {
  const { themeClassNames } = useTheme();
  return (
    <section className="Container Section_space_small">
      <div className={cnProjects(null, [themeClassNames.color.accent])}>
        <Text
          className={cnProjects('Title', [
            'decorator decorator_indent-t_none decorator_indent-b_xl',
          ])}
          size="5xl"
          weight="bold"
          as="h3"
          lineHeight="xs"
          align="center"
        >
          Проекты
        </Text>
        <Text
          className={cnProjects('Description', [
            'decorator decorator_indent-b_2xl',
          ])}
          size="2xl"
          as="p"
          align="center"
        >
          Больше 120 проектов компании создаётся с помощью Consta. С каждым днём
          их становится всё больше. Хотите посмотреть?
        </Text>
        <Button
          as="a"
          href={allProjects}
          target="_blank"
          size="l"
          label="Посмотреть проекты"
          className={cnProjects('Button')}
        />
      </div>
    </section>
  );
};
