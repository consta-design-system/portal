import { ctx } from '@consta/stand/src/modules/app';
import { routerAtom } from 'reatom-router5';

import { routeToCustomParam } from '##/modules/spa/routeToCustomParam';
import { spaAtom } from '##/modules/spa/spaAtom';

const findLinkElement = (
  element: Element,
  counter = 0,
): Element | undefined => {
  if (element.tagName === 'A' || element.tagName === 'a') {
    return element;
  }
  if (element.parentElement && counter < 4) {
    return findLinkElement(element.parentElement, counter + 1);
  }
};

export const subscribeToExternalTransitions = (links: string[]) => {
  window.addEventListener('click', (e) => {
    const router = ctx.get(routerAtom);
    const spa = ctx.get(spaAtom);
    const linkElement = findLinkElement(e.target as Element);

    if (!spa || !linkElement || !router.route) {
      return;
    }

    const href = linkElement.getAttribute('href')?.toLowerCase();

    if (!href) {
      return;
    }

    const link = links.find((item) => href.indexOf(item.toLowerCase()) >= 0);

    if (!link) {
      return;
    }

    spa.sendEvent(3, {
      componentid: 'transitionToExternal',
      customparams: [
        {
          name: 'external',
          type: 'STRING',
          value: link,
        },
        {
          name: 'href',
          type: 'STRING',
          value: href,
        },
        ...routeToCustomParam(router.route, 'from_'),
      ],
    });
  });
};
