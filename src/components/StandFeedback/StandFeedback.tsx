import './StandFeedback.css';

import { IconChatFilled } from '@consta/icons/IconChatFilled';
import { breakpointsAtom } from '@consta/stand/src/modules/breakpoints';
import { addPrefix } from '@consta/uikit/useBreakpoints';
import { useAtom } from '@reatom/npm-react';
import React from 'react';

import { FeedbackCard } from '##/components/FeedbackCard';
import IconGitHub from '##/icons/Github.icon.svg';
import { cn } from '##/utils/bem';

const cnStandFeedback = cn('StandFeedback');

const data = [
  {
    icon: IconChatFilled,
    title: 'Если хотите оставить фидбек, запрос или вопрос',
    message: (
      <>
        Напишите в чат нашего сообщества. Мы учитываем обратную связь при
        доработках.
        <br />
        <br />
        Здесь можно задавать вопросы о компонентах.
      </>
    ),
    button: {
      text: 'Написать в Telegram —>',
      link: 'https://t.me/Consta_Chat',
    },
  },
  {
    icon: IconGitHub,
    title: 'Если есть аккаунт GitHub и несколько минут',
    message: (
      <>
        Заведите Issue в нашем GitHub — детально опишите баг или запрос.
        <br />
        <br />
        Так запрос быстрее попадёт в наш бэклог.
      </>
    ),
    button: {
      text: 'Создать запрос на GitHub —>',
      link: 'https://github.com/consta-design-system/uikit/issues/new?assignees=&labels=bug&template=bug_report.md&title=название+компонента%2Flanding%2Fstorybook%2Fdoc%3A+Что+нужно+сделать',
    },
  },
];

export const StandFeedback = () => {
  const [breakpoints] = useAtom(breakpointsAtom);
  return (
    <div className={cnStandFeedback()}>
      <div className={cnStandFeedback('Wrapper', addPrefix(breakpoints))}>
        {data.map((props, index) => (
          <FeedbackCard key={index} {...props} />
        ))}
      </div>
    </div>
  );
};
