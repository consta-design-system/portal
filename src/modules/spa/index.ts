import { ctx } from '@consta/stand/src/modules/app';

import {
  routeEvent,
  transitionInLibEvent,
  transitionInStandEvent,
  transitionToExternalEvent,
} from '##/modules/spa/events';
import { spaAtom } from '##/modules/spa/spaAtom';
import { spaOnload } from '##/modules/spa/spaOnload';
import { spaRun } from '##/modules/spa/spaRun';
import { isEnvProduction } from '##/utils/env';

if (isEnvProduction) {
  spaRun();
  spaOnload((data) => {
    spaAtom(ctx, data);
  });
  routeEvent();
  transitionInLibEvent();
  transitionInStandEvent();
  transitionToExternalEvent();
}
