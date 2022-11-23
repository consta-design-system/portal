/* eslint-disable @typescript-eslint/no-explicit-any */

import { Avatar } from '@consta/uikit/Avatar';
import { Badge } from '@consta/uikit/Badge';
import { Button } from '@consta/uikit/Button';
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';
import { IconComponent } from '@consta/uikit/Icon';
import { IconAdd } from '@consta/uikit/IconAdd';
import { IconArrowLeft } from '@consta/uikit/IconArrowLeft';
import { IconArrowRight } from '@consta/uikit/IconArrowRight';
import { IconBento } from '@consta/uikit/IconBento';
import { IconCamera } from '@consta/uikit/IconCamera';
import { IconCheck } from '@consta/uikit/IconCheck';
import { IconClose } from '@consta/uikit/IconClose';
import { IconDiamond } from '@consta/uikit/IconDiamond';
import { IconDownload } from '@consta/uikit/IconDownload';
import { IconEdit } from '@consta/uikit/IconEdit';
import { IconEye } from '@consta/uikit/IconEye';
import { IconForward } from '@consta/uikit/IconForward';
import { IconHamburger } from '@consta/uikit/IconHamburger';
import { IconList } from '@consta/uikit/IconList';
import { IconPlay } from '@consta/uikit/IconPlay';
import { IconSearch } from '@consta/uikit/IconSearch';
import { IconSelect } from '@consta/uikit/IconSelect';
import { IconSettings } from '@consta/uikit/IconSettings';
import { Select } from '@consta/uikit/Select';
import { Switch } from '@consta/uikit/Switch';
import { Tag } from '@consta/uikit/Tag';
import { TextField } from '@consta/uikit/TextField';
import { User } from '@consta/uikit/User';
import React, { useState } from 'react';

import { ShowroomSlider } from './ShowroomSlider/ShowroomSlider';

const itemsBS1 = ['Москва', 'Санкт-Петербург', 'Томск'];
const itemsBS2 = ['Сок', 'Воды', 'Молоко'];

type ItemCG = string;
type ItemCGIcon = {
  label: string;
  icon?: IconComponent;
};

const CG1 = ['Сегодня', 'Вчера', 'Неделя', 'Месяц'];
const CG2 = ['Нефть', 'Газ'];
const CG3 = ['Люди', 'Активы', 'Экология'];
const CG4 = ['Netback', 'CAPEX', 'OPEX'];
const CG5 = ['XS', 'S', 'M', 'L', 'XL'];
const CG6: ItemCGIcon[] = [
  {
    label: 'Таблица',
    icon: IconList,
  },
  {
    label: 'Карточки',
    icon: IconBento,
  },
];

const getItem = (item: string) => item;
const mokeOnChange = () => {};

export const Showroom: React.FC = () => {
  const [valueCG1, setValueCG1] = useState<ItemCG | null>(CG1[1]);
  const [valueCG2, setValueCG2] = useState<ItemCG | null>(CG2[0]);
  const [valueCG3, setValueCG3] = useState<ItemCG | null>(CG3[0]);
  const [valueCG4, setValueCG4] = useState<ItemCG | null>(CG4[0]);
  const [valueCG5, setValueCG5] = useState<ItemCG | null>(CG5[3]);
  const [valueCG6, setValueCG6] = useState<ItemCGIcon | null>(CG6[1]);
  const [valueCG7, setValueCG7] = useState(false);

  return (
    <ShowroomSlider
      rows={[
        <>
          <Button size="l" label="Скачать" iconLeft={IconDownload} />
          <Button
            size="l"
            view="ghost"
            label="Редактировать"
            iconLeft={IconEdit}
          />
          <ChoiceGroup
            name="CG3"
            value={valueCG3}
            onChange={({ value }) => setValueCG3(value)}
            items={CG3}
            getItemLabel={getItem}
            form="round"
            size="l"
            multiple={false}
          />
          <Button size="l" view="secondary" label="Читать далее" />
          <Button
            size="l"
            form="defaultBrick"
            label="Запустить расчёт"
            style={{ marginRight: '1px' }}
          />
          <Button
            size="l"
            form="brickDefault"
            label="Настройки расчёта"
            iconLeft={IconSelect}
            iconSize="m"
            onlyIcon
          />
          <Button
            size="l"
            view="ghost"
            form="round"
            label="Продолжить"
            iconRight={IconForward}
          />
          <Select
            placeholder="Выберите город"
            size="l"
            id="city"
            items={itemsBS1}
            getItemLabel={getItem}
            getItemKey={getItem}
            onChange={mokeOnChange}
            style={{ minWidth: '300px' }}
          />
          <Button
            size="l"
            form="round"
            view="secondary"
            label="Плей"
            iconLeft={IconPlay}
            iconSize="m"
            onlyIcon
          />
          <Button size="l" form="brick" label="Комментарии" />
        </>,
        <>
          <Switch
            size="m"
            onChange={() => setValueCG7(!valueCG7)}
            checked={valueCG7}
            label="Выпустить кракена"
            style={{ width: '14em' }}
          />
          <TextField
            form="round"
            size="s"
            placeholder="Что нового?"
            style={{ width: '240px' }}
          />
          <Avatar size="m" name="Сергий Успокоитель" />
          <Badge size="l" view="stroked" status="success" label="+23%" />
          <Badge size="l" view="stroked" status="error" label="-15%" />
          <Badge size="l" view="filled" status="warning" label="Задержка" />
          <Button
            view="clear"
            size="s"
            label="Принять изменения"
            iconLeft={IconCheck}
            iconSize="s"
          />
          <User
            name="Эдуард Когнитивченко"
            info="Геоинженер"
            view="ghost"
            size="s"
            style={{ width: '260px' }}
          />
          <Select
            placeholder="Выберите напиток"
            size="s"
            id="city"
            items={itemsBS2}
            getItemLabel={getItem}
            getItemKey={getItem}
            onChange={mokeOnChange}
            style={{ width: '200px' }}
          />
          <Tag
            mode="link"
            group="3"
            href="#"
            size="m"
            label="Алюминий"
            style={{ marginRight: 'var(--space-2xs)' }}
          />
          <Tag
            mode="link"
            group="1"
            href="#"
            size="m"
            label="Железо"
            style={{ marginRight: 'var(--space-2xs)' }}
          />
          <Tag mode="link" group="9" href="#" size="m" label="Медь" />
          <TextField
            form="brick"
            size="s"
            placeholder="Скорость"
            rightSide="об/мин"
            style={{ width: '200px' }}
          />
          <Button
            label="Проверить"
            size="xs"
            iconRight={IconEye}
            view="secondary"
          />
        </>,
        <>
          <Select
            placeholder="Выберите город"
            size="m"
            id="city"
            items={itemsBS1}
            getItemLabel={getItem}
            getItemKey={getItem}
            onChange={mokeOnChange}
            style={{ width: '300px' }}
          />
          <ChoiceGroup
            name="CG1"
            value={valueCG1}
            onChange={({ value }) => setValueCG1(value)}
            items={CG1}
            getItemLabel={getItem}
            size="m"
            view="ghost"
            multiple={false}
          />
          <Button
            view="secondary"
            form="round"
            label="Закрыть"
            iconLeft={IconCamera}
            iconSize="m"
            onlyIcon
          />
          <ChoiceGroup
            name="CG2"
            value={valueCG2}
            onChange={({ value }) => setValueCG2(value)}
            items={CG2}
            getItemLabel={getItem}
            size="m"
            multiple={false}
          />
          <Button
            view="ghost"
            label="Настройки"
            iconLeft={IconSettings}
            iconSize="m"
            onlyIcon
          />
          <Button
            view="clear"
            label="Меню"
            iconLeft={IconHamburger}
            iconSize="m"
            onlyIcon
          />
          <TextField
            form="defaultClear"
            placeholder="Электронная почта"
            style={{ width: '300px', marginRight: '0' }}
          />
          <TextField
            form="brickClear"
            placeholder="Пароль"
            style={{ width: '200px', marginRight: '0' }}
          />
          <Button label="Войти" form="brickDefault" />
          <Switch
            size="l"
            onChange={() => setValueCG7(!valueCG7)}
            checked={valueCG7}
            label="Получать уведомления"
            style={{ width: '19em' }}
          />
          <Button label="Выбрать" form="brick" view="secondary" />
        </>,
        <>
          <Select
            placeholder="Выберите город"
            size="s"
            id="city"
            items={itemsBS1}
            getItemLabel={getItem}
            getItemKey={getItem}
            onChange={mokeOnChange}
            style={{ width: '300px' }}
          />
          <Switch
            size="m"
            view="ghost"
            onChange={() => setValueCG7(!valueCG7)}
            checked={valueCG7}
            label="Показывать статистику"
            style={{ width: '17em' }}
          />
          <User
            name="Серж Послоян"
            info="Старший эксперт"
            view="ghost"
            size="s"
            style={{ width: '200px' }}
          />
          <ChoiceGroup
            name="CG4"
            value={valueCG4}
            onChange={({ value }) => setValueCG4(value)}
            items={CG4}
            getItemLabel={getItem}
            size="s"
            view="secondary"
            multiple={false}
          />
          <Button
            size="s"
            form="roundBrick"
            label="В проект"
            iconLeft={IconAdd}
            iconSize="s"
            style={{ marginRight: '1px' }}
          />
          <Button
            size="s"
            form="brickRound"
            label="В группу"
            iconSize="s"
            iconRight={IconAdd}
          />
          <Badge size="l" view="filled" status="success" label="Согласовано" />
          <Button
            view="clear"
            size="s"
            label="ОК"
            iconLeft={IconCheck}
            iconSize="s"
          />
          <TextField
            form="round"
            size="s"
            placeholder="Название операции"
            leftSide={IconDiamond}
            style={{ width: '300px' }}
          />
          <Button label="Оценить" size="s" form="brick" view="secondary" />
        </>,
        <>
          <ChoiceGroup
            name="CG5"
            value={valueCG5}
            onChange={({ value }) => setValueCG5(value)}
            items={CG5}
            getItemLabel={getItem}
            size="xs"
            form="brick"
            multiple={false}
          />
          <Badge
            size="m"
            view="filled"
            status="warning"
            label="Предупреждение"
            minified
          />
          <Badge
            size="m"
            view="filled"
            status="success"
            label="Успех"
            minified
          />
          <TextField
            form="brick"
            size="xs"
            placeholder="Опишите проблему"
            style={{ width: '240px' }}
          />
          <Avatar size="m" name="Гузель Скважина" />
          <Button
            size="xs"
            form="roundBrick"
            view="ghost"
            label="Назад"
            iconLeft={IconArrowLeft}
            iconSize="s"
            onlyIcon
            style={{ marginRight: '1px' }}
          />
          <Button
            size="xs"
            form="brick"
            view="ghost"
            label="Плей"
            iconLeft={IconPlay}
            iconSize="s"
            onlyIcon
            style={{ marginRight: '1px' }}
          />
          <Button
            size="xs"
            form="brickRound"
            view="ghost"
            label="Вперёд"
            iconSize="s"
            onlyIcon
            iconLeft={IconArrowRight}
          />
          <Badge size="l" view="stroked" status="error" label="Ошибка" />
          <Button
            view="clear"
            size="xs"
            label="Отказать"
            iconLeft={IconClose}
            iconSize="s"
          />
          <ChoiceGroup
            name="CG6"
            value={valueCG6}
            onChange={({ value }) => setValueCG6(value)}
            items={CG6}
            size="xs"
            view="secondary"
            form="round"
            multiple={false}
            onlyIcon
          />
          <TextField
            form="roundClear"
            size="xs"
            placeholder="Кол-во"
            rightSide="ед."
            style={{ width: '160px', marginRight: '0' }}
          />
          <TextField
            form="clearRound"
            size="xs"
            placeholder="Цена"
            rightSide="₽"
            style={{ width: '160px' }}
          />
          <Select
            placeholder="Сделайте выбор"
            size="xs"
            id="city"
            items={itemsBS2}
            getItemLabel={getItem}
            getItemKey={getItem}
            onChange={mokeOnChange}
            style={{ width: '200px' }}
          />
          <Tag
            mode="check"
            group="2"
            onChange={() => {}}
            checked={false}
            size="m"
            label="КЦ"
            style={{ marginRight: 'var(--space-2xs)' }}
          />
          <Tag
            mode="check"
            group="5"
            onChange={() => {}}
            checked={false}
            size="m"
            label="ДО"
            style={{ marginRight: 'var(--space-2xs)' }}
          />
          <Tag
            mode="check"
            group="8"
            onChange={() => {}}
            checked={false}
            size="m"
            label="ПО"
          />
          <Button
            label="Поиск"
            size="xs"
            form="brick"
            view="secondary"
            iconRight={IconSearch}
          />
          <ChoiceGroup
            name="CG3"
            value={valueCG3}
            onChange={({ value }) => setValueCG3(value)}
            items={CG3}
            getItemLabel={getItem}
            size="xs"
            multiple={false}
          />
        </>,
      ]}
    />
  );
};
