import buildApi from '../api';

import { URLS } from './config';

// const { REACT_APP_URL_EXAMPLE_API } = process.env;

const createApi = () => {
  const { setBaseURL, get, post, put, delete: del } = buildApi();
  const urlBase = 'http://localhost:3008/series/';

  setBaseURL(urlBase);
  const series = {
    getSeries: (id, config = {}) => get(`${URLS.series.getSeries}`, {}, config),
    postSerie: (data, config = {}) =>
      post(`${URLS.series.postSerie}`, data, config),
    putSerie: (data, id, config = {}) =>
      put(`${URLS.series.putSerie}/${id}`, data, config),
    delSerie: (id, config = {}) =>
      del(`${URLS.series.delSerie}/${id}`, {}, config)
  };

  return { series };
};

export default createApi;
