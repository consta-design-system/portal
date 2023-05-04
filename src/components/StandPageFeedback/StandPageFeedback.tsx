import './StandPageFeedback.css';

import React from 'react';

import { FeedbackCard } from '##/componets/FeedbackCard';
import { IconBug } from '##/icons/IconBug';
import { IconEmoji } from '##/icons/IconEmoji';
import { cn } from '##/utils/bem';

const cnStandPageFeedback = cn('StandPageFeedback');

const getData = (type: 'bug' | 'question') => {
  return {
    icon: type === 'question' ? IconEmoji : IconBug,
    title:
      type === 'question'
        ? 'Если хотите оставить фидбек, запрос или вопрос'
        : 'Если есть аккаунт GitHub и несколько минут',
    message:
      type === 'question' ? (
        <>
          Напишите в чат нашего сообщества. Мы учитываем обратную связь при
          доработках.
          <br />
          <br />
          Здесь можно задавать вопросы о компонентах.
        </>
      ) : (
        <>
          Заведите Issue в нашем GitHub — детально опишите баг или запрос.
          <br />
          <br />
          Так запрос быстрее попадёт в наш бэклог.
        </>
      ),
    button:
      type === 'question'
        ? {
            text: 'Написать в Telegram —>',
            link: 'https://t.me/Consta_Chat',
          }
        : {
            text: 'Создать запрос на GitHub —>',
            link: 'https://github.com/consta-design-system/uikit/issues/new?assignees=&labels=bug&template=bug_report.md&title=название+компонента%2Flanding%2Fstorybook%2Fdoc%3A+Что+нужно+сделать',
          },
  };
};

export const StandPageFeedback: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <div className={cnStandPageFeedback(null, [className])}>
      <FeedbackCard {...getData('question')} />
      <FeedbackCard {...getData('bug')} />
    </div>
  );
};
