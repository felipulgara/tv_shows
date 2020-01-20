import { all, call, fork, putResolve, takeLatest } from 'redux-saga/effects';

import { tvShowApi } from '../services';
import {
  FETCH_SERIE,
  fetchSerie,
  setSeries,
  ADD_SERIE,
  EDIT_SERIE,
  DELETE_SERIE
} from '../actions/series';
import { MESSAGES } from '../config/messages';

const { ERROR_MSG } = MESSAGES;
const {
  series: { getSeries, postSerie, putSerie, delSerie }
} = tvShowApi;

function* fetchSeries() {
  try {
    const { ok, data } = yield call(getSeries);

    if (!ok) {
      yield call(alert, ERROR_MSG);

      return;
    }

    yield putResolve(setSeries(data));
  } catch (err) {
    yield call(alert, ERROR_MSG);
  }
}

function* addSerie({ data }) {
  try {
    const { ok, data: dataResult } = yield call(postSerie, data);

    if (!ok) {
      yield call(alert, ERROR_MSG);

      return;
    }

    yield putResolve(fetchSerie());

    console.log('data result', dataResult);
    console.log('save', data);
  } catch (err) {
    console.log(err);
    yield call(alert, ERROR_MSG);
  }
}

function* editSerie({ data, id }) {
  try {
    const { ok, data: dataResult } = yield call(putSerie, data, id);

    if (!ok) {
      yield call(alert, ERROR_MSG);

      return;
    }

    yield putResolve(fetchSerie());

    console.log('data result', dataResult);
    console.log('update', data);
  } catch (err) {
    yield call(alert, ERROR_MSG);
  }
}

function* deleteSerie({ id }) {
  try {
    const { ok, data } = yield call(delSerie, id);

    if (!ok) {
      yield call(alert, ERROR_MSG);

      return;
    }

    yield putResolve(fetchSerie());
    console.log('data result', data);
    console.log('update', data);
  } catch (err) {
    console.log(err);
    yield call(alert, ERROR_MSG);
  }
}

function* watcher() {
  try {
    yield all([takeLatest(FETCH_SERIE, fetchSeries)]);
    yield all([takeLatest(ADD_SERIE, addSerie)]);
    yield all([takeLatest(EDIT_SERIE, editSerie)]);
    yield all([takeLatest(DELETE_SERIE, deleteSerie)]);
  } catch (err) {
    throw err;
  }
}

export default [fork(watcher)];
