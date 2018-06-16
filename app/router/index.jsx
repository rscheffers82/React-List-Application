import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import TodoApp from 'TodoApp';
import Login from 'Login';
import firebase from 'app/firebase/';

// middleware function that integrates with react-route
// replace is the react route or URL
// next() signifies to continue
// load the middleware in using onEnter and specify the function to run
// var requireLogin = (nextState, replace, next) => {
//   if (!firebase.auth().currentUser) {
//     replace('/');
//   }
//   next();
// };

// var redirectIfLoggedIn = (nextState, replace, next) => {
//   if (firebase.auth().currentUser) {
//     replace('/todos');
//   }
//   next();
// };

export default (
  // <Router history={hashHistory}>
  //   <Route path='/'>
  //     <Route path='todos' component={TodoApp} onEnter={requireLogin}/>
  //     <IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
  //   </Route>
  // </Router>
  <div>
  router here...
  </div>
);
