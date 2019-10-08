import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';

import { history } from 'utils';
import { NotFound, Tracker } from 'components';

export const AppRouter = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={Tracker} />
          <Route path="/not-found" component={NotFound} />
          <Redirect path="*" to="/not-found" />
        </Switch>
      </div>
    </Router>
  );
};
