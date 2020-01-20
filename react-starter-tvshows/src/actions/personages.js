import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    fetchPersonage: null
  },
  {
    prefix: 'PERSONAGES/'
  }
);

const { fetchPersonage } = Creators;

const { FETCH_PERSONAGE } = Types;

export { fetchPersonage, FETCH_PERSONAGE };
