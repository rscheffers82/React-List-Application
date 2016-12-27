var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import Main from 'Main';
import Login from 'Login';
import TodoApp from 'TodoApp';
var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

// Used to test several firebase functions before refactoring the app to work with FireBase
// import './../playground/firebase/index';

store.dispatch( actions.startAddTodos() );

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  // Provider is used to connect redux with react. The store is made available to all children components
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <Route path='todos' component={TodoApp}/>
        <IndexRoute component={Login}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
