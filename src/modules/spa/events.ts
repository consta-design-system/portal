import { ctx } from '@consta/stand/src/modules/app';
import { routerAtom, transitionSuccessAction } from 'reatom-router5';

import { routeToCustomParam } from '##/modules/spa/routeToCustomParam';
import { spaAtom } from '##/modules/spa/spaAtom';
import { spaOnload } from '##/modules/spa/spaOnload';
import { spaSendEvent } from '##/modules/spa/spaSendEvent';
import { subscribeToExternalTransitions } from '##/modules/spa/subscribeToExternalTransitions';

// Прокидываем счетчик в атом, для того чтобы точно понимать когда прошла иницилизация счетчика
spaOnload((data) => {
  spaAtom(ctx, data);
});

// Подписка на любой переход по страницам
export const routeEvent = () => {
  ctx.subscribe(transitionSuccessAction, ([data]) => {
    if (spaSendEvent && data?.params[0].toState) {
      spaSendEvent(1, {
        customparams: routeToCustomParam(data.params[0].toState),
      });
    }
  });

  const transitionSuccessSend = () => {
    const data = ctx.get(routerAtom);
    const spa = ctx.get(spaAtom);

    if (spa && !data.transitionError && !data.transitionRoute && data.route) {
      spa.sendEvent(3, {
        componentid: 'transitionSuccessAction',
        customparams: [
          ...routeToCustomParam(data.route),
          ...(data.previousRoute
            ? routeToCustomParam(data.previousRoute, 'from_')
            : []),
        ],
      });
    }
  };

  ctx.subscribe(spaAtom, transitionSuccessSend);
  ctx.subscribe(routerAtom, transitionSuccessSend);
};

// Подписка на переходы внутри библиотеки
export const transitionInLibEvent = () => {
  const transitionInLibSend = () => {
    const data = ctx.get(routerAtom);
    const spa = ctx.get(spaAtom);

    if (
      spa &&
      !data.transitionError &&
      !data.transitionRoute &&
      data.route?.params.lib
    ) {
      spa.sendEvent(3, {
        componentid: 'transitionInLib',
        customparams: [
          ...routeToCustomParam(data.route),
          ...(data.previousRoute
            ? routeToCustomParam(data.previousRoute, 'from_')
            : []),
        ],
      });
    }
  };

  ctx.subscribe(routerAtom, transitionInLibSend);
  ctx.subscribe(spaAtom, transitionInLibSend);
};

// Подписка на переходы внутри стенда
export const transitionInStandEvent = () => {
  const transitionInStandSend = () => {
    const data = ctx.get(routerAtom);
    const spa = ctx.get(spaAtom);

    if (
      spa &&
      !data.transitionError &&
      !data.transitionRoute &&
      data.route?.params.stand
    ) {
      spa.sendEvent(3, {
        componentid: 'transitionInStand',
        customparams: [
          ...routeToCustomParam(data.route),
          ...(data.previousRoute
            ? routeToCustomParam(data.previousRoute, 'from_')
            : []),
        ],
      });
    }
  };

  ctx.subscribe(routerAtom, transitionInStandSend);
  ctx.subscribe(spaAtom, transitionInStandSend);
};

// подписка на переходы по внешним сылкам
export const transitionToExternalEvent = () => {
  subscribeToExternalTransitions([
    'github.com',
    'figma.com',
    'codesandbox.io',
    't.me',
  ]);
};
