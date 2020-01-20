import buildApi from '../api';

import { URLS } from './config';

// const { REACT_APP_URL_EXAMPLE_API } = process.env;

const createApi = () => {
  const { setBaseURL, get } = buildApi();
  const urlBase = 'http://localhost:3008/personages/';

  setBaseURL(urlBase);
  const personages = {
    getPersonages: (id, config = {}) =>
      get(`${URLS.personages.getPersonages}`, {}, config)
  };

  return { personages };
};

export default createApi;
