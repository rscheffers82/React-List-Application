import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import TodoApp from 'TodoApp';
import Login from 'Login';

const Routes = () => (
  <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/todos" component={TodoApp} />
        <Redirect to="/login" />
      </Switch>
  </Router>
);

export default Routes;