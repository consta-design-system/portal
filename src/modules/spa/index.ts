import { ctx } from '@consta/stand/src/modules/app';
import { transitionSuccessAction } from 'reatom-router5';
import { State } from 'router5';

import { isEnvProduction } from '##/utils/env';

type CustomParam = {
  name: string;
  type: 'STRING' | 'INT' | 'FLOAT' | 'BOOLEAN' | 'DATE';
  value: string | number | boolean;
};

const routeToCustomParam = (state: State) => {
  const params: CustomParam[] = [
    { name: 'name', type: 'STRING', value: state.name },
  ];
  const keys = Object.keys(state.params);
  for (let index = 0; index < keys.length; index++) {
    const value = state.params[keys[index]].toString();
    params.push({ name: keys[index], type: 'STRING', value });
  }
  return params;
};

const spaRun = () => {
  window.gpnSpaUrl = 'https://spa-back.gazprom-neft.ru/events';
  window.gpnCounterId = 386;
  window.apiVersion = '1.0';
  const headEl = document.getElementsByTagName('head')[0];
  const counterLoadingScript = document.createElement('script');
  counterLoadingScript.async = true;
  counterLoadingScript.src =
    'https://spa-back.gazprom-neft.ru/static/counter.js';
  headEl.appendChild(counterLoadingScript);
};

const eventProxy = () => {
  ctx.subscribe(transitionSuccessAction, ([data]) => {
    if (data?.params[0].toState && window.gpnAnalytics?.sendEvent) {
      window.gpnAnalytics?.sendEvent(1, {
        customparams: routeToCustomParam(data.params[0].toState),
      });
    }
  });
  ctx.subscribe(transitionSuccessAction, ([data]) => {
    if (data?.params[0].toState && window.gpnAnalytics?.sendEvent) {
      window.gpnAnalytics.sendEvent(3, {
        componentid: 'transitionSuccessAction',
        customparams: routeToCustomParam(data.params[0].toState),
      });
    }
  });
};

if (isEnvProduction) {
  spaRun();
  eventProxy();
}
