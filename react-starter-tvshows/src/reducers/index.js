import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import series from './series';

function createRootReducer(history) {
  const router = connectRouter(history);
  const rootReducer = combineReducers({ router, series });

  return rootReducer;
}

export default createRootReducer;
