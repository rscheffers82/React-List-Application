import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from 'app/router';
import 'applicationStyles';

const store = require('configureStore').configure();
import firebase from 'app/firebase';

import { login, startAddTodos, logout, setUser } from 'actions';

firebase.auth().onAuthStateChanged( (user) => {
  // Function that is called whenever a login status changes
  // When the user var is present, a user just logged in
  if (user) {
    // store.dispatch( login(user.uid) );   // push the user log details to the store
    store.dispatch( setUser(user)) ;
    store.dispatch( startAddTodos() );    // load the todo data from firebase and push to the store
  } else {
    store.dispatch( logout() );
  }
});

ReactDOM.render(
  <Provider store={store}>
    {/* {routes} */}
    <Routes />
  </Provider>,
  document.getElementById('app'),
);
