import { createReducer } from 'reduxsauce';
import produce from 'immer';

import { SET_SERIES, SET_SERIE_EDIT, SET_STATUS } from '../actions/series';

const INITIAL_STATE = {
  series: [],
  serieEdit: {
    index: -1,
    data: null
  },
  status: {
    fetching: false
  }
};

const setSeries = produce((draft, { data }) => {
  draft.series = data.map(e => e);
});

const setSerieEdit = produce(({ serieEdit }, { index, data }) => {
  serieEdit.index = index;
  serieEdit.data = data;
});

const setStatus = produce(({ status }, { key, value }) => {
  console.log('Cambié el estado');
  console.log(status);
  status[key] = value;
});

const reducer = createReducer(INITIAL_STATE, {
  [SET_SERIES]: setSeries,
  [SET_SERIE_EDIT]: setSerieEdit,
  [SET_STATUS]: setStatus
});

export default reducer;
