import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, About, Series, Personages } from '../../containers';
import { ROOT, ABOUT, SERIES, PERSONAGES } from '../paths';

const Routes = () => (
  <Switch>
    <Route exact path={ROOT} component={Home} />
    <Route exact path={ABOUT} component={About} />
    <Route exact path={SERIES} component={Series} />
    <Route exact path={PERSONAGES} component={Personages} />
  </Switch>
);

export default Routes;
