import { all, call, fork, putResolve, takeLatest } from 'redux-saga/effects';

import { personagesApi } from '../services';
import { FETCH_PERSONAGE } from '../actions/personages';
import { MESSAGES } from '../config/messages';

const { ERROR_MSG } = MESSAGES;
const {
  personages: { getPersonages }
} = personagesApi;

console.log('lalal');

function* fetchPersonages() {
  console.log('Fetch personajes');

  try {
    const { ok, data } = yield call(getPersonages);

    if (!ok) {
      yield call(alert, ERROR_MSG);

      return;
    }

    console.log(data);
    // yield putResolve(setSeries(data));
  } catch (err) {
    yield call(alert, ERROR_MSG);
  }
}

function* watcher() {
  try {
    yield all([takeLatest(FETCH_PERSONAGE, fetchPersonages)]);
  } catch (err) {
    throw err;
  }
}

export default [fork(watcher)];
