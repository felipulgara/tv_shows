import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    fetchSerie: null,
    setSeries: ['data'],
    setSerieEdit: ['index', 'data'],
    addSerie: ['data'],
    editSerie: ['data', 'id'],
    deleteSerie: ['id'],
    setStatus: ['key', 'value']
  },
  {
    prefix: 'SERIES/'
  }
);

const {
  fetchSerie,
  setSeries,
  setSerieEdit,
  addSerie,
  editSerie,
  deleteSerie,
  setStatus
} = Creators;

const {
  FETCH_SERIE,
  SET_SERIES,
  SET_SERIE_EDIT,
  ADD_SERIE,
  EDIT_SERIE,
  DELETE_SERIE,
  SET_STATUS
} = Types;

export {
  fetchSerie,
  setSeries,
  setSerieEdit,
  addSerie,
  editSerie,
  deleteSerie,
  setStatus,
  FETCH_SERIE,
  SET_SERIES,
  SET_SERIE_EDIT,
  ADD_SERIE,
  EDIT_SERIE,
  DELETE_SERIE,
  SET_STATUS
};
