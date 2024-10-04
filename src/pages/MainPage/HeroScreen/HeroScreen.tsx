/* eslint-disable camelcase */
import './HeroScreen.css';

import { Text } from '@consta/uikit/Text';
import { useAction } from '@reatom/npm-react';
import React, { useEffect, useRef } from 'react';

import { Picture } from '##/components/Picture/Picture';
import ConstaLogo from '##/images/ConstaLogo.image.svg';
import AltHeroImage_375_1x_dark from '##/images/HeroImage/Alt/Dark/HeroImage_375_1x.jpg';
import AltHeroImage_375_2x_dark from '##/images/HeroImage/Alt/Dark/HeroImage_375_2x.jpg';
import AltHeroImage_375_3x_dark from '##/images/HeroImage/Alt/Dark/HeroImage_375_3x.jpg';
import AltHeroImage_720_1x_dark from '##/images/HeroImage/Alt/Dark/HeroImage_720_1x.jpg';
import AltHeroImage_720_2x_dark from '##/images/HeroImage/Alt/Dark/HeroImage_720_2x.jpg';
import AltHeroImage_720_3x_dark from '##/images/HeroImage/Alt/Dark/HeroImage_720_3x.jpg';
import AltHeroImage_375_1x_default from '##/images/HeroImage/Alt/Default/HeroImage_375_1x.jpg';
import AltHeroImage_375_2x_default from '##/images/HeroImage/Alt/Default/HeroImage_375_2x.jpg';
import AltHeroImage_375_3x_default from '##/images/HeroImage/Alt/Default/HeroImage_375_3x.jpg';
import AltHeroImage_720_1x_default from '##/images/HeroImage/Alt/Default/HeroImage_720_1x.jpg';
import AltHeroImage_720_2x_default from '##/images/HeroImage/Alt/Default/HeroImage_720_2x.jpg';
import AltHeroImage_720_3x_default from '##/images/HeroImage/Alt/Default/HeroImage_720_3x.jpg';
import AltHeroImage_375_1x_display from '##/images/HeroImage/Alt/Display/HeroImage_375_1x.jpg';
import AltHeroImage_375_2x_display from '##/images/HeroImage/Alt/Display/HeroImage_375_2x.jpg';
import AltHeroImage_375_3x_display from '##/images/HeroImage/Alt/Display/HeroImage_375_3x.jpg';
import AltHeroImage_720_1x_display from '##/images/HeroImage/Alt/Display/HeroImage_720_1x.jpg';
import AltHeroImage_720_2x_display from '##/images/HeroImage/Alt/Display/HeroImage_720_2x.jpg';
import AltHeroImage_720_3x_display from '##/images/HeroImage/Alt/Display/HeroImage_720_3x.jpg';
import Alt2HeroImage_375_1x_dark from '##/images/HeroImage/Alt2/Dark/HeroImage_375_1x.jpg';
import Alt2HeroImage_375_2x_dark from '##/images/HeroImage/Alt2/Dark/HeroImage_375_2x.jpg';
import Alt2HeroImage_375_3x_dark from '##/images/HeroImage/Alt2/Dark/HeroImage_375_3x.jpg';
import Alt2HeroImage_720_1x_dark from '##/images/HeroImage/Alt2/Dark/HeroImage_720_1x.jpg';
import Alt2HeroImage_720_2x_dark from '##/images/HeroImage/Alt2/Dark/HeroImage_720_2x.jpg';
import Alt2HeroImage_720_3x_dark from '##/images/HeroImage/Alt2/Dark/HeroImage_720_3x.jpg';
import Alt2HeroImage_375_1x_default from '##/images/HeroImage/Alt2/Default/HeroImage_375_1x.jpg';
import Alt2HeroImage_375_2x_default from '##/images/HeroImage/Alt2/Default/HeroImage_375_2x.jpg';
import Alt2HeroImage_375_3x_default from '##/images/HeroImage/Alt2/Default/HeroImage_375_3x.jpg';
import Alt2HeroImage_720_1x_default from '##/images/HeroImage/Alt2/Default/HeroImage_720_1x.jpg';
import Alt2HeroImage_720_2x_default from '##/images/HeroImage/Alt2/Default/HeroImage_720_2x.jpg';
import Alt2HeroImage_720_3x_default from '##/images/HeroImage/Alt2/Default/HeroImage_720_3x.jpg';
import Alt2HeroImage_375_1x_display from '##/images/HeroImage/Alt2/Display/HeroImage_375_1x.jpg';
import Alt2HeroImage_375_2x_display from '##/images/HeroImage/Alt2/Display/HeroImage_375_2x.jpg';
import Alt2HeroImage_375_3x_display from '##/images/HeroImage/Alt2/Display/HeroImage_375_3x.jpg';
import Alt2HeroImage_720_1x_display from '##/images/HeroImage/Alt2/Display/HeroImage_720_1x.jpg';
import Alt2HeroImage_720_2x_display from '##/images/HeroImage/Alt2/Display/HeroImage_720_2x.jpg';
import Alt2HeroImage_720_3x_display from '##/images/HeroImage/Alt2/Display/HeroImage_720_3x.jpg';
import GPNHeroImage_375_1x_dark from '##/images/HeroImage/GPN/Dark/HeroImage_375_1x.jpg';
import GPNHeroImage_375_2x_dark from '##/images/HeroImage/GPN/Dark/HeroImage_375_2x.jpg';
import GPNHeroImage_375_3x_dark from '##/images/HeroImage/GPN/Dark/HeroImage_375_3x.jpg';
import GPNHeroImage_720_1x_dark from '##/images/HeroImage/GPN/Dark/HeroImage_720_1x.jpg';
import GPNHeroImage_720_2x_dark from '##/images/HeroImage/GPN/Dark/HeroImage_720_2x.jpg';
import GPNHeroImage_720_3x_dark from '##/images/HeroImage/GPN/Dark/HeroImage_720_3x.jpg';
import GPNHeroImage_375_1x_default from '##/images/HeroImage/GPN/Default/HeroImage_375_1x.jpg';
import GPNHeroImage_375_2x_default from '##/images/HeroImage/GPN/Default/HeroImage_375_2x.jpg';
import GPNHeroImage_375_3x_default from '##/images/HeroImage/GPN/Default/HeroImage_375_3x.jpg';
import GPNHeroImage_720_1x_default from '##/images/HeroImage/GPN/Default/HeroImage_720_1x.jpg';
import GPNHeroImage_720_2x_default from '##/images/HeroImage/GPN/Default/HeroImage_720_2x.jpg';
import GPNHeroImage_720_3x_default from '##/images/HeroImage/GPN/Default/HeroImage_720_3x.jpg';
import GPNHeroImage_375_1x_display from '##/images/HeroImage/GPN/Display/HeroImage_375_1x.jpg';
import GPNHeroImage_375_2x_display from '##/images/HeroImage/GPN/Display/HeroImage_375_2x.jpg';
import GPNHeroImage_375_3x_display from '##/images/HeroImage/GPN/Display/HeroImage_375_3x.jpg';
import GPNHeroImage_720_1x_display from '##/images/HeroImage/GPN/Display/HeroImage_720_1x.jpg';
import GPNHeroImage_720_2x_display from '##/images/HeroImage/GPN/Display/HeroImage_720_2x.jpg';
import GPNHeroImage_720_3x_display from '##/images/HeroImage/GPN/Display/HeroImage_720_3x.jpg';
import { fixedAtom } from '##/modules/header';
import { cn } from '##/utils/bem';

const cnHeroScreen = cn('HeroScreen');

export const HeroScreen: React.FC = () => {
  const setFixedHeader = useAction(fixedAtom);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listner = () => {
      setFixedHeader(window.pageYOffset >= (ref.current?.offsetHeight || 0));
    };
    window.addEventListener('scroll', listner);
    return () => {
      window.removeEventListener('scroll', listner);
    };
  }, []);

  return (
    <div ref={ref} className="Container Section">
      <section
        className={cnHeroScreen(null, ['decorator decorator_indent-b_4xl'])}
      >
        <div className={cnHeroScreen('Content')}>
          <Text
            className={cnHeroScreen('Title', [
              'decorator decorator_indent-v_4xl',
            ])}
            size="6xl"
            weight="bold"
            as="h1"
            lineHeight="xs"
          >
            <ConstaLogo className={cnHeroScreen('Logo')} />
            <Text
              className={cnHeroScreen('SubTitle')}
              size="3xl"
              as="span"
              weight="regular"
              display="block"
              lineHeight="xs"
            >
              Дизайн‑система для быстрой разработки интерфейсов
            </Text>
          </Text>
        </div>

        <Picture
          className={cnHeroScreen('PictureFrame')}
          mode={2}
          alt="Artistic 3D visualisation of Consta components"
          title="mode 2"
          src={{
            gpnDefault: {
              0: {
                '1x': GPNHeroImage_375_1x_default,
                '2x': GPNHeroImage_375_2x_default,
                '4x': GPNHeroImage_375_3x_default,
              },
              1024: {
                '1x': GPNHeroImage_720_1x_default,
                '2x': GPNHeroImage_720_2x_default,
                '4x': GPNHeroImage_720_3x_default,
              },
            },
            gpnDark: {
              0: {
                '1x': GPNHeroImage_375_1x_dark,
                '2x': GPNHeroImage_375_2x_dark,
                '4x': GPNHeroImage_375_3x_dark,
              },
              1024: {
                '1x': GPNHeroImage_720_1x_dark,
                '2x': GPNHeroImage_720_2x_dark,
                '4x': GPNHeroImage_720_3x_dark,
              },
            },
            gpnDisplay: {
              0: {
                '1x': GPNHeroImage_375_1x_display,
                '2x': GPNHeroImage_375_2x_display,
                '4x': GPNHeroImage_375_3x_display,
              },
              1024: {
                '1x': GPNHeroImage_720_1x_display,
                '2x': GPNHeroImage_720_2x_display,
                '4x': GPNHeroImage_720_3x_display,
              },
            },
            altDefault: {
              0: {
                '1x': AltHeroImage_375_1x_default,
                '2x': AltHeroImage_375_2x_default,
                '4x': AltHeroImage_375_3x_default,
              },
              1024: {
                '1x': AltHeroImage_720_1x_default,
                '2x': AltHeroImage_720_2x_default,
                '4x': AltHeroImage_720_3x_default,
              },
            },
            altDark: {
              0: {
                '1x': AltHeroImage_375_1x_dark,
                '2x': AltHeroImage_375_2x_dark,
                '4x': AltHeroImage_375_3x_dark,
              },
              1024: {
                '1x': AltHeroImage_720_1x_dark,
                '2x': AltHeroImage_720_2x_dark,
                '4x': AltHeroImage_720_3x_dark,
              },
            },
            altDisplay: {
              0: {
                '1x': AltHeroImage_375_1x_display,
                '2x': AltHeroImage_375_2x_display,
                '4x': AltHeroImage_375_3x_display,
              },
              1024: {
                '1x': AltHeroImage_720_1x_display,
                '2x': AltHeroImage_720_2x_display,
                '4x': AltHeroImage_720_3x_display,
              },
            },
            alt2Default: {
              0: {
                '1x': Alt2HeroImage_375_1x_default,
                '2x': Alt2HeroImage_375_2x_default,
                '4x': Alt2HeroImage_375_3x_default,
              },
              1024: {
                '1x': Alt2HeroImage_720_1x_default,
                '2x': Alt2HeroImage_720_2x_default,
                '4x': Alt2HeroImage_720_3x_default,
              },
            },
            alt2Dark: {
              0: {
                '1x': Alt2HeroImage_375_1x_dark,
                '2x': Alt2HeroImage_375_2x_dark,
                '4x': Alt2HeroImage_375_3x_dark,
              },
              1024: {
                '1x': Alt2HeroImage_720_1x_dark,
                '2x': Alt2HeroImage_720_2x_dark,
                '4x': Alt2HeroImage_720_3x_dark,
              },
            },
            alt2Display: {
              0: {
                '1x': Alt2HeroImage_375_1x_display,
                '2x': Alt2HeroImage_375_2x_display,
                '4x': Alt2HeroImage_375_3x_display,
              },
              1024: {
                '1x': Alt2HeroImage_720_1x_display,
                '2x': Alt2HeroImage_720_2x_display,
                '4x': Alt2HeroImage_720_3x_display,
              },
            },
          }}
        />
      </section>
    </div>
  );
};
