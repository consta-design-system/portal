import { Example } from '@consta/stand';
import React from 'react';

export const TextExampleName = () => {
  return (
    <Example
      col={{ 1: 0, 2: 800 }}
      separately
      items={[
        {
          label: 'Неправильно',
          description:
            'Для того, чтобы вариант в списке стал неактивным, Вы можете добавить к элементу массива items свойство disabled: true.',
          status: 'error',
          node: 1,
        },
        {
          label: 'Правильно',
          description:
            'Чтобы сделать вариант в списке неактивным, добавьте к элементу массива items свойство disabled: true.',
          status: 'success',
          node: 1,
        },
      ]}
    />
  );
};

export const TextExampleName2 = () => {
  return (
    <Example
      col={{ 1: 0, 2: 800 }}
      separately
      items={[
        {
          label: 'Неправильно',
          description:
            'Поля с разными статусами и разной формы будут выглядеть одинаково, при использовании вида view="clear", который используется в случаях, когда нужно создать кастомное поле ввода или обернуть его в контейнер.',
          status: 'error',
          node: 1,
        },
        {
          label: 'Правильно',
          description:
            'Вид view="clear" используется, чтобы создать кастомное поле ввода или обернуть его в контейнер. При этом поля с разными статусами и формами будут выглядеть одинаково.',
          status: 'success',
          node: 1,
        },
      ]}
    />
  );
};

export const TextExampleName3 = () => {
  return (
    <Example
      col={{ 1: 0, 2: 800 }}
      separately
      items={[
        {
          label: 'Неправильно',
          description:
            'Это карточка, в которой ничего нет, кроме текста. Здесь может быть что угодно.',
          status: 'error',
          node: 1,
        },
        {
          label: 'Правильно',
          description:
            'Для клонирования репозитория нужно ввести команду git clone и указать его адрес. Репозиторий клонируется в текущую выбранную папку в консоли.',
          status: 'success',
          node: 1,
        },
      ]}
    />
  );
};

export const TextExampleName4 = () => {
  return (
    <Example
      col={{ 1: 0, 2: 800 }}
      separately
      items={[
        {
          label: 'Неправильно',
          description:
            'Здесь может быть что угодно. Например, этот текст. Но не обязательно: вы можете добавить иконки, кнопки, картинки или даже мини-игру (ну вдруг). Удивительная штука: никогда не угадаешь, что прячется под этим заголовком.',
          status: 'error',
          node: 1,
        },
        {
          label: 'Правильно',
          description:
            'Чтобы вывести список коммитов, отфильтрованных по автору, следует воспользоваться командой git log. ',
          status: 'success',
          node: 1,
        },
      ]}
    />
  );
};

export const TextExampleName5 = () => {
  return (
    <Example
      col={{ 1: 0, 2: 800 }}
      separately
      items={[
        {
          label: 'Неправильно',
          description:
            'Иконку можно расположить слева или справа от заголовка с помощью свойства iconPosition.',
          status: 'error',
          node: 1,
        },
        {
          label: 'Правильно',
          description:
            'Расположите иконку слева или справа от заголовка с помощью свойства iconPosition.',
          status: 'success',
          node: 1,
        },
      ]}
    />
  );
};

export const TextExampleName6 = () => {
  return (
    <Example
      col={{ 1: 0, 2: 800 }}
      separately
      items={[
        {
          label: 'Неправильно',
          description:
            'Все, что вы хотите показать внутри окна, поместите в контейнер <Sidebar></Sidebar>.',
          status: 'error',
          node: 1,
        },
        {
          label: 'Правильно',
          description:
            'Всё, что вы хотите показать внутри окна, поместите в контейнер <Sidebar></Sidebar>.',
          status: 'success',
          node: 1,
        },
      ]}
    />
  );
};

export const TextExampleName7 = () => {
  return (
    <Example
      col={{ 1: 0, 2: 800 }}
      separately
      items={[
        {
          label: 'Неправильно',
          description: 'mergeCells - объединяет одинаковые ячейки в колонке.',
          status: 'error',
          node: 1,
        },
        {
          label: 'Правильно',
          description: 'mergeCells — объединяет одинаковые ячейки в колонке.',
          status: 'success',
          node: 1,
        },
      ]}
    />
  );
};

export const TextExampleName8 = () => {
  return (
    <Example
      col={{ 1: 0, 2: 800 }}
      separately
      items={[
        {
          label: 'Неправильно',
          description: 'Температура 10 - 12 градусов',
          status: 'error',
          node: 1,
        },
        {
          label: 'Правильно',
          description: 'Температура 10-12 градусов',
          status: 'success',
          node: 1,
        },
      ]}
    />
  );
};

export const TextExampleName9 = () => {
  return (
    <Example
      col={{ 1: 0, 2: 800 }}
      separately
      items={[
        {
          label: 'Неправильно',
          description: '12 декабря 1991-27 декабря 1997',
          status: 'error',
          node: 1,
        },
        {
          label: 'Правильно',
          description: '12 декабря 1991 — 27 декабря 1997',
          status: 'success',
          node: 1,
        },
      ]}
    />
  );
};

export const TextExampleName10 = () => {
  return (
    <Example
      col={{ 1: 0, 2: 800 }}
      separately
      items={[
        {
          label: 'С пробелами',
          description: '12 - 4 = 8',
          node: 1,
        },
        {
          label: 'Без пробела',
          description: '-18 градусов',
          node: 1,
        },
      ]}
    />
  );
};

export const TextExampleName11 = () => {
  return (
    <Example
      col={{ 1: 0, 2: 800 }}
      separately
      items={[
        {
          label: 'Неправильно',
          description: 'Черно - белый цвет',
          status: 'error',
          node: 1,
        },
        {
          label: 'Правильно',
          description: 'Черно-белый цвет',
          status: 'success',
          node: 1,
        },
      ]}
    />
  );
};

export const TextExampleName12 = () => {
  return (
    <Example
      col={{ 1: 0, 2: 800 }}
      separately
      items={[
        {
          label: 'Неправильно',
          description:
            'Если изменения в локальном репозитории не важны, “откатиться” к конкретному коммиту в истории можно с помощью команды git reset ',
          status: 'error',
          node: 1,
        },
        {
          label: 'Правильно',
          description:
            'Если изменения в локальном репозитории не важны, «откатиться» к конкретному коммиту в истории можно с помощью команды git reset ',
          status: 'success',
          node: 1,
        },
      ]}
    />
  );
};

export const TextExampleName13 = () => {
  return (
    <Example
      col={{ 1: 0, 2: 800 }}
      separately
      items={[
        {
          label: 'Неправильно',
          description:
            'В марте 2020 года в ПАО Газпромнефть началась разработка собственной дизайн-системы “Consta”.',
          status: 'error',
          node: 1,
        },
        {
          label: 'Правильно',
          description:
            'В марте 2020 года в ПАО «Газпромнефть» началась разработка собственной дизайн-системы Consta.',
          status: 'success',
          node: 1,
        },
      ]}
    />
  );
};
