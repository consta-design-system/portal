import './FAQ.css';

import { IconAdd } from '@consta/icons/IconAdd';
import { Text } from '@consta/uikit/Text';
import React, { useState } from 'react';

import { cn } from '##/utils/bem';

import { questions } from './data';

const cnFAQ = cn('FAQ');

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

const Accordion: React.FC<AccordionProps> = (props) => {
  const { title, children, className } = props;

  const [isExpand, setExpand] = useState<boolean>(false);

  return (
    <div
      className={cnFAQ(
        'Accordion',
        { view: !isExpand ? 'collapsed' : 'expanded' },
        [className],
      )}
    >
      <div
        className={cnFAQ('Question')}
        onClick={() => setExpand(!isExpand)}
        aria-hidden="true"
      >
        <Text size="2xl" lineHeight="m">
          {title}
        </Text>
        <IconAdd size="m" view="secondary" className={cnFAQ('CollapseIcon')} />
      </div>
      <div className={cnFAQ('Answer')}>{children}</div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  return (
    <section className={cnFAQ(null, ['Container', 'Section'])}>
      <Text
        className={cnFAQ('Title', [
          'decorator decorator_indent-t_none decorator_indent-b_5xl',
        ])}
        size="5xl"
        weight="bold"
        as="h3"
        lineHeight="2xs"
      >
        Частые вопросы и решения
      </Text>
      <div className={cnFAQ('Questions')}>
        {questions.map((question, index) => {
          const id = `${question.title} ${index}`;
          const Answer = question.answer;
          return (
            <Accordion key={id} title={question.title}>
              <Answer />
            </Accordion>
          );
        })}
      </div>
    </section>
  );
};
