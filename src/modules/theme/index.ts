// отключил правило так как нужно подключить стили из пресетов
/* eslint-disable no-unused-vars */
import './Theme_color_altDark.css';
import './Theme_color_altDefault.css';
import './Theme_color_altDisplay.css';
import './Theme_color_alt2Dark.css';
import './Theme_color_alt2Default.css';
import './Theme_color_alt2Display.css';
import './Theme_font_system.css';
import './Theme_size_gpnPromo.css';
import './Theme_space_gpnPromo.css';
import './Theme_control_gpnPromo.css';
import './Theme_size_gpnResponsive.css';

import { IconComponent } from '@consta/icons/Icon';
import { IconFavoriteFilled } from '@consta/icons/IconFavoriteFilled';
import { IconMoon } from '@consta/icons/IconMoon';
import { IconSun } from '@consta/icons/IconSun';
import { themeAtom as standThemeAtom } from '@consta/stand/src/modules/theme';
// импортируем пресеты чтобы подключились стили к проекту
import {
  presetGpnDark,
  presetGpnDefault,
  presetGpnDisplay,
  ThemePreset,
} from '@consta/uikit/Theme';
import { atom } from '@reatom/core';
import { onUpdate, withInit } from '@reatom/hooks';

export type Preset = {
  name: string;
  value: number;
  brandColor: string;
};

export const presets: Preset[] = [
  {
    name: 'Компания',
    value: 0,
    brandColor: '#0071B2',
  },
  {
    name: 'Ва-банк',
    value: 1,
    brandColor: '#db3333',
  },
  {
    name: 'Алюмикель',
    value: 2,
    brandColor: '#730bb8',
  },
];

const presetDefault = presets[0];

export type Colors = {
  label: string;
  icon: IconComponent;
  value: number;
};

export const colors: Colors[] = [
  {
    label: 'Светлая',
    icon: IconSun,
    value: 0,
  },
  {
    label: 'Тёмная',
    icon: IconMoon,
    value: 1,
  },
  {
    label: 'Промо',
    icon: IconFavoriteFilled,
    value: 2,
  },
];

const colorDefault = colors[0];

export const fonts = [
  { label: 'Промо', value: 'gpnDefault' },
  { label: 'Системный', value: 'system' },
];

const fontDefault = fonts[0];

export const sizes = [
  { label: 'Крупный', value: 'gpnPromo' },
  { label: 'Средний', value: 'gpnResponsive' },
];

const sizeDefault = sizes[0];

export const spaces = [
  { label: 'Просторнее', value: 'gpnPromo' },
  { label: 'Теснее', value: 'gpnDefault' },
];

const spaceDefault = spaces[0];

const colorsMods = [
  [
    {
      primary: 'gpnDefault',
      accent: 'gpnDark',
      invert: 'gpnDark',
    },
    {
      primary: 'gpnDark',
      accent: 'gpnDark',
      invert: 'gpnDefault',
    },
    {
      primary: 'gpnDisplay',
      accent: 'gpnDark',
      invert: 'gpnDefault',
    },
  ],
  [
    {
      primary: 'altDefault',
      accent: 'altDark',
      invert: 'altDark',
    },
    {
      primary: 'altDark',
      accent: 'altDark',
      invert: 'altDefault',
    },
    {
      primary: 'altDisplay',
      accent: 'altDark',
      invert: 'altDefault',
    },
  ],
  [
    {
      primary: 'alt2Default',
      accent: 'alt2Dark',
      invert: 'alt2Dark',
    },
    {
      primary: 'alt2Dark',
      accent: 'alt2Dark',
      invert: 'alt2Default',
    },
    {
      primary: 'alt2Display',
      accent: 'alt2Dark',
      invert: 'alt2Default',
    },
  ],
] as const;

const getColorMod = (preset: Preset, color: Colors): ThemePreset['color'] =>
  colorsMods[preset.value][color.value];

export const presetAtom = atom(presetDefault);
export const colorAtom = atom(colorDefault).pipe(
  withInit((ctx) => {
    if (ctx.get(standThemeAtom).color.primary === 'gpnDefault') {
      return colors[0];
    }
    return colors[1];
  }),
);
export const fontAtom = atom(fontDefault);
export const sizeAtom = atom(sizeDefault);
export const spaceAtom = atom(spaceDefault);

export const themeAtom = atom((ctx) => {
  return {
    color: getColorMod(ctx.spy(presetAtom), ctx.spy(colorAtom)),
    control: 'gpnPromo',
    font: ctx.spy(fontAtom).value,
    size: ctx.spy(sizeAtom).value,
    space: ctx.spy(spaceAtom).value,
    shadow: 'gpnDefault',
  };
});

onUpdate(colorAtom, (ctx, color) => {
  standThemeAtom(ctx, color.value === 0 ? presetGpnDefault : presetGpnDark);
});

onUpdate(standThemeAtom, (ctx, theme) => {
  colorAtom(ctx, theme.color.primary === 'gpnDefault' ? colors[0] : colors[1]);
});
