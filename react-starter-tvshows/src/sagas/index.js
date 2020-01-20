import { all } from 'redux-saga/effects';

import tvShow from './tv-show';
import personages from './personages';

function* root() {
  // eslint-disable-next-line no-useless-catch
  try {
    yield all([...tvShow, ...personages]);
  } catch (err) {
    throw err;
  }
}

export default root;
