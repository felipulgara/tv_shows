import { isCancel, CancelToken } from 'apisauce';

import createTvShowApi from './serie';
import createPersonagesApi from './personage';
import { TIMEOUTS } from './config';

const tvShowApi = createTvShowApi();
const personagesApi = createPersonagesApi();

export { CancelToken, isCancel, TIMEOUTS, tvShowApi, personagesApi };
