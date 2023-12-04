import './ThemeControls.css';

import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';
import { Text } from '@consta/uikit/Text';
import { useAtom } from '@reatom/npm-react';
import React from 'react';

import { Example } from '##/components/Example/Example';
import { PresetList } from '##/components/PresetList/PresetList';
import {
  colorAtom,
  colors,
  fontAtom,
  fonts,
  presetAtom,
  presets,
  sizeAtom,
  sizes,
  spaceAtom,
  spaces,
} from '##/modules/theme';
import { cn } from '##/utils/bem';

const cnControls = cn('ThemeControls');

export const ThemeControls: React.FC = () => {
  const [color, setColor] = useAtom(colorAtom);
  const [font, setFont] = useAtom(fontAtom);
  const [preset, setPreset] = useAtom(presetAtom);
  const [size, setSize] = useAtom(sizeAtom);
  const [space, setSpace] = useAtom(spaceAtom);

  return (
    <div className={cnControls()}>
      <div className={cnControls('Example')}>
        <Example />
      </div>

      <div className={cnControls('Settings')}>
        <div className={cnControls('Item')}>
          <Text
            className={cnControls('Label', ['decorator decorator_indent-b_xs'])}
            size="l"
            view="secondary"
            as="p"
            lineHeight="s"
          >
            Пресеты
          </Text>
          <PresetList
            items={presets}
            value={preset}
            getLabel={(item) => item.name}
            getBrandColor={(item) => item.brandColor}
            onChange={setPreset}
          />
        </div>
        <div className={cnControls('Item', ['decorator decorator_indent-b_l'])}>
          <Text
            className={cnControls('Label', ['decorator decorator_indent-b_xs'])}
            size="l"
            view="secondary"
            as="p"
            lineHeight="s"
          >
            Цветовая тема
          </Text>
          <ChoiceGroup
            view="ghost"
            name="ColorThemes"
            value={color}
            onChange={setColor}
            items={colors}
            size="m"
            iconSize="m"
            width="full"
            multiple={false}
            className={cnControls('ChoiceGroup')}
            onlyIcon
          />
        </div>

        <div className={cnControls('Item', ['decorator decorator_indent-b_l'])}>
          <Text
            className={cnControls('Label', ['decorator decorator_indent-b_xs'])}
            size="l"
            view="secondary"
            as="p"
            lineHeight="s"
          >
            Шрифт
          </Text>
          <ChoiceGroup
            view="ghost"
            name="FontThemes"
            value={font}
            onChange={setFont}
            items={fonts}
            size="m"
            width="full"
            multiple={false}
            className={cnControls('ChoiceGroup')}
          />
        </div>
        <div
          className={cnControls('Item', { type: 'size' }, [
            'decorator decorator_indent-b_l',
          ])}
        >
          <Text
            className={cnControls('Label', ['decorator decorator_indent-b_xs'])}
            size="l"
            view="secondary"
            as="p"
            lineHeight="s"
          >
            Размер текста
          </Text>
          <ChoiceGroup
            view="ghost"
            name="SizeThemes"
            value={size}
            onChange={setSize}
            items={sizes}
            size="m"
            width="full"
            multiple={false}
            className={cnControls('ChoiceGroup')}
          />
        </div>

        <div className={cnControls('Item')}>
          <Text
            className={cnControls('Label', ['decorator decorator_indent-b_xs'])}
            size="l"
            view="secondary"
            as="p"
            lineHeight="s"
          >
            Пространство
          </Text>
          <ChoiceGroup
            view="ghost"
            name="SpaceThemes"
            value={space}
            onChange={setSpace}
            items={spaces}
            size="m"
            width="full"
            multiple={false}
            className={cnControls('ChoiceGroup')}
          />
        </div>
      </div>
    </div>
  );
};
