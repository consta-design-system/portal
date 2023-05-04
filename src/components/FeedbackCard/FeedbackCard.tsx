import './FeedbackCard.css';

import { IconComponent } from '@consta/icons/Icon';
import { Card } from '@consta/uikit/Card';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Text } from '@consta/uikit/Text';
import React from 'react';

import { cn } from '##/utils/bem';

const cnFeedbackCard = cn('FeedbackCard');

type Props = {
  icon?: IconComponent;
  title: string;
  message?: React.ReactElement;
  className?: string;
  size?: 'm' | 's';
  button?: {
    text: string;
    link: string;
  };
};

export const FeedbackCard = (props: Props) => {
  const { icon: Icon, title, message, className, button, size = 'm' } = props;
  return (
    <Card
      verticalSpace="2xl"
      horizontalSpace="xl"
      shadow={false}
      border
      className={cnFeedbackCard(null, [className])}
    >
      {Icon && (
        <Icon
          size="l"
          className={cnFeedbackCard('Image', [
            cnMixSpace({ mB: size === 'm' ? 'xl' : 'l' }),
          ])}
        />
      )}
      <Text
        className={cnFeedbackCard('Title')}
        size={size === 'm' ? 'm' : 's'}
        weight="bold"
        lineHeight="m"
      >
        {title}
      </Text>
      {message && (
        <Text
          size={size === 'm' ? 's' : 'xs'}
          lineHeight="m"
          className={cnMixSpace({ mT: size === 'm' ? 'm' : 's' })}
        >
          {message}
        </Text>
      )}
      {button && (
        <Text
          as="a"
          size={size === 'm' ? 's' : 'xs'}
          lineHeight="m"
          href={button.link}
          view="link"
          className={cnFeedbackCard('Button', [
            cnMixSpace({ mT: size === 'm' ? 'xl' : 'l' }),
          ])}
        >
          {button.text}
        </Text>
      )}
    </Card>
  );
};
