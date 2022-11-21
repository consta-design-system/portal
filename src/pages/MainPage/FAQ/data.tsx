import { useLink } from '@consta/stand/src/hooks/useLink';
import { routesNames } from '@consta/stand/src/modules/router';
import { Text } from '@consta/uikit/Text';
import React from 'react';

import {
  constaFigma,
  constaGitHub,
  constaNPM,
  licenceMit,
  platfortmProfessionals,
} from '##/modules/api/links';

export const questions = [
  {
    title: 'Для каких задач подходит дизайн-система?',
    answer: () => (
      <>
        <Text as="p" size="xl" className="decorator decorator_indent-b_m">
          Для разработки пользовательских интерфейсов цифровых продуктов.
        </Text>
        <Text as="p" size="xl" className="decorator decorator_indent-b_m">
          Это может быть интранет, личный кабинет, инструмент для мониторинга
          какой-либо системы, управления оборудованием, совместной работы или
          что-то ещё.
        </Text>
        <Text as="p" size="xl" className="decorator decorator_indent-b_m">
          Это может быть продукт, который открывают на ноутбуке, офисном
          компьютере или видео-стене.
        </Text>
        {/* <Text as="p" size="xl">
          Дизайн-система разрабатывается для продуктов «Газпром нефти», но на самом деле она
          универсальная: использовать может кто угодно.
        </Text> */}
      </>
    ),
  },
  {
    title: 'Какие технологии использует дизайн-система?',
    answer: () => (
      <>
        <Text as="p" size="xl" weight="bold">
          Для разработки
        </Text>
        <Text as="p" size="xl">
          <Text as="span" size="xl" weight="bold">
            React
          </Text>{' '}
          — JavaScript-библиотека для создания пользовательских интерфейсов
        </Text>
        <Text as="p" size="xl">
          <Text as="span" size="xl" weight="bold">
            TypeScript
          </Text>{' '}
          — язык программирования для разработки веб-приложений, расширяющий
          возможности JavaScript
        </Text>
        <Text as="p" size="xl" className="decorator decorator_indent-b_m">
          <Text as="span" size="xl" weight="bold">
            PostCSS
          </Text>{' '}
          — автоматизирует рутинные операции в CSS с помощью расширений,
          написанных на JavaScript
        </Text>
        <Text as="p" size="xl" weight="bold">
          Для дизайна
        </Text>
        <Text as="p" size="xl">
          <Text as="span" size="xl" weight="bold">
            Figma
          </Text>{' '}
          — инструмент для разработки интерфейсов и прототипирования
        </Text>
      </>
    ),
  },
  {
    title: 'Это только для новых продуктов?',
    answer: () => (
      <Text as="p" size="xl">
        Не обязательно. Если ваш продукт уже работает, можно постепенно
        перевести его на дизайн-систему. Сначала потребуются дополнительные
        усилия, но потом будет проще поддерживать и соблюдать консистентность.
      </Text>
    ),
  },
  {
    title:
      'Можем ли мы использовать Consta, если у нас готовый продукт «из коробки»?',
    answer: () => (
      <>
        <Text as="p" size="xl" className="decorator decorator_indent-b_m">
          Это зависит от вашего проекта и от решения, которое вы используете.
          Есть два варианта: создать свой веб-интерфейс для коробочного продукта
          или настроить то, как он выглядит
        </Text>
        <Text as="p" size="xl" weight="bold">
          Создать свой веб-интерфейс
        </Text>
        <Text as="p" size="xl" className="decorator decorator_indent-b_m">
          Для некоторых готовых решений можно создать свой веб-интерфейс на
          дизайн-системе Consta (например, у 1С, Bitrix и QlikSense есть API,
          который это позволяет). Это большая задача, её стоит планировать, если
          у сервиса много пользователей, вам очень важно качество
          пользовательского опыта и удобный интерфейс. Например, если это
          дашборд или личный кабинет сотрудника в большой компании.
        </Text>
        <Text as="p" size="xl" weight="bold">
          Настроить внешний вид
        </Text>
        <Text as="p" size="xl">
          У других готовых решений настраивается интерфейс (например, у QlikView
          и Terrasoft). В этом случае дизайн-систему не получится использовать
          полностью, но на неё можно опираться при выборе шрифтов, цветов, формы
          контролов.
        </Text>
      </>
    ),
  },
  {
    title: 'Как использовать дизайн-систему?',
    answer: () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [libLink, libOnClick] = useLink({
        to: routesNames.LIBS_LIB,
        params: { lib: 'uikit' },
      });

      return (
        <>
          <Text as="p" size="xl" className="decorator decorator_indent-b_m">
            Это зависит от ваших задач и технологий. Есть несколько вариантов.
          </Text>
          <Text as="p" size="xl" weight="bold">
            Посмотреть и сделать так же
          </Text>
          <Text as="p" size="xl" className="decorator decorator_indent-b_m">
            Eсли по каким-то причинам наши наработки вы использовать не можете.
            Например, разрабатываете мобильное приложение. В этом случае
            дизайн-систему можно использовать как гайдлайн.
          </Text>
          <Text as="p" size="xl" weight="bold">
            Использовать все возможности
          </Text>
          <Text as="p" size="xl" className="decorator decorator_indent-b_m">
            Если вы запускаете веб-проект и готовы вести разработку на React,
            разработчики могут{' '}
            <Text
              as="a"
              view="link"
              href={libLink}
              onClick={libOnClick}
              target="_blank"
              size="xl"
            >
              подключить нашу библиотеку
            </Text>{' '}
            с элементами интерфейса. Если нет, дизайнеры могут собрать макет
            интерфейса на основе{' '}
            <Text
              as="a"
              view="link"
              href={constaFigma}
              target="_blank"
              size="xl"
            >
              шаблонов в Figma
            </Text>
            .
          </Text>
          <Text as="p" size="xl" weight="bold">
            Дополнять и дорабатывать
          </Text>
          <Text as="p" size="xl">
            Всё в открытом доступе. Вы можете посмотреть{' '}
            <Text
              as="a"
              view="link"
              href={constaGitHub}
              target="_blank"
              size="xl"
            >
              исходный код нашей библиотеки на GitHub
            </Text>{' '}
            и предложить изменения.
          </Text>
        </>
      );
    },
  },
  {
    title: 'А если мы работаем с подрядчиками?',
    answer: () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [libLink, libOnClick] = useLink({
        to: routesNames.LIBS_LIB,
        params: { lib: 'uikit' },
      });

      return (
        <Text as="p" size="xl">
          Отлично, отправьте им ссылку на
          <Text
            as="a"
            view="link"
            href={libLink}
            onClick={libOnClick}
            target="_blank"
            size="xl"
          >
            описание дизайн-системы
          </Text>
          . Все ресурсы публичные, можно использовать и «внутри» компании, и
          «снаружи».
        </Text>
      );
    },
  },
  {
    title: 'На каких условиях можно использовать дизайн-систему?',
    answer: () => (
      <>
        <Text as="p" size="xl" className="decorator decorator_indent-b_m">
          Дизайн-система распространяется бесплатно, на условиях открытой
          лицензии MIT.{' '}
        </Text>
        <Text
          as="a"
          view="link"
          href={licenceMit}
          target="_blank"
          size="xl"
          display="block"
        >
          Посмотреть все условия
        </Text>
      </>
    ),
  },
  {
    title: 'Как принять участие в разработке?',
    answer: () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [link, onClick] = useLink({
        to: routesNames.LIBS_LIB_STAND,
        params: { lib: 'portal', stand: 'custom-contribute' },
      });

      return (
        <>
          <Text as="p" size="xl" className="decorator decorator_indent-b_m">
            Очень просто: дизайн-система в публичном репозитории на GitHub, вы
            можете прислать заявку на изменения или даже сделать доработку.
          </Text>
          <Text
            as="a"
            view="link"
            href={link}
            target="_blank"
            size="xl"
            display="block"
            onClick={onClick}
          >
            Как это сделать
          </Text>
        </>
      );
    },
  },
  {
    title: 'В какой момент её лучше подключать?',
    answer: () => (
      <Text as="p" size="xl" className="decorator decorator_indent-b_m">
        — Когда понятно, что примерно будет в вашем продукте, но еще не ясно,
        как именно вы будете его делать
        <br />— Когда будете выбирать, какие технологии использовать для
        разработки интерфейса <br />— Когда решите сделать прототип или MVP.
        Покажите эту страницу дизайнерам и разработчикам, чтобы оценить, какие
        возможности системы вам подходят и прикинуть время на создание макета и
        верстку.
      </Text>
    ),
  },
  {
    title: 'Как проходит разработка интерфейса с дизайн-системой?',
    answer: () => (
      <>
        <Text as="p" size="xl" className="decorator decorator_indent-b_m">
          Это зависит от вашего процесса разработки. Вот один из вариантов:
        </Text>
        <Text as="ol" size="xl" className="decorator decorator_indent-b_m">
          <li>Менеджер или заказчик ставит задачу на создание продукта</li>
          <li>
            Дизайнеры создают макет — из компонентов дизайн-системы, на основе
            наших шаблонов в Figma.
          </li>
          <li>
            Разработчики собирают интерфейс на основе макета — берут компоненты
            из npm пакета{' '}
            <Text as="a" view="link" href={constaNPM} target="_blank" size="xl">
              @consta/uikit
            </Text>
            , встраивают в свой проект, оживляют с помощью скриптов и подключают
            к бэкенду (например, к базе данных).
          </li>
          <li>
            Тестировщики проверяют, что всё работает (поведение кнопок, списков
            и других элементов из дизайн-системы проверять не нужно).
          </li>
        </Text>
        <Text as="p" size="xl">
          Готово, можно показывать продукт пользователям.
        </Text>
      </>
    ),
  },
  {
    title: 'Где найти специалистов для работы над проектом?',
    answer: () => (
      <Text as="p" size="xl" className="decorator decorator_indent-b_m">
        Вы можете найти любых специалистов и даже всю команду на{' '}
        <Text as="a" view="link" href={platfortmProfessionals} size="xl">
          платформе Профессионалы 4.0
        </Text>
        . Разместите описание вашего проекта или задачи и ждите откликов. После
        сбора команды П4.0 возьмут всю работу по заключению договора на себя.
        Если хотите разрабатывать интерфейс на дизайн-системе Consta,
        обязательно напишите об этом в описании проекта.
      </Text>
    ),
  },
];
