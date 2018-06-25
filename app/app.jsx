import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// import {hashHistory} from 'react-router';

import { login, logout, startAddTodos } from 'actions';
import firebase from 'app/firebase/';
import routes from 'app/router';
import 'applicationStyles';

const store = require('configureStore').configure();

// firebase.auth().onAuthStateChanged( (user) => {
//   // Function that is called whenever a login status changes
//   // When the user var is present, a user just logged in
//   if (user) {
//     store.dispatch( login(user.uid) );        // push the user log details to the store
//     store.dispatch( startAddTodos() );        // load the todo data from firebase and push to the store
//     // hashHistory.push('/todos');               // redirect the user to the todo area of the app
//   } else {
//     store.dispatch( logout() );
//     // hashHistory.push('/');
//   }
// });

// Load foundation
// $(document).foundation();

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
);