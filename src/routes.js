import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main/index';
import Repository from './pages/Repository/index';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact></Route>
        <Route
          path="/repository/:repository"
          component={Repository}
        ></Route>
      </Switch>
    </BrowserRouter>
  );
}
