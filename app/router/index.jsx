import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import TodoApp from 'TodoApp';
import Login from 'Login';
import { connect } from 'react-redux';

const Routes = () => (
  <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/todos" component={TodoApp} />
        <Redirect to="/login" />
      </Switch>
  </Router>
);

export default Routes;

//Private router function
let PrivateRoute = ({ component: Component, loggedIn, ...rest }) => {
  return (
    <Route {...rest} render={props => loggedIn ? <Component {...props} /> : <Redirect to="/login" />} />
  );
};

const mapStateToProps = state => ({
  loggedIn: Object.keys(state.auth).length > 0,
});

PrivateRoute = connect(mapStateToProps)(PrivateRoute);