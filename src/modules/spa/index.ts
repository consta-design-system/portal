import {
  routeEvent,
  transitionInLibEvent,
  transitionInStandEvent,
  transitionToExternalEvent,
} from '##/modules/spa/events';
import { spaRun } from '##/modules/spa/spaRun';
import { isEnvProduction } from '##/utils/env';

if (isEnvProduction) {
  spaRun();
  routeEvent();
  transitionInLibEvent();
  transitionInStandEvent();
  transitionToExternalEvent();
}

// spaRun();
// routeEvent();
// transitionInLibEvent();
// transitionInStandEvent();
