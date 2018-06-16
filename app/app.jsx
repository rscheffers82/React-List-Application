import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// import {hashHistory} from 'react-router';

// import { login, logout, startAddTodos } from 'actions';
// import firebase from 'app/firebase/';
import router from 'app/router';
// if the name is index.js / .jsx no need to specify the file

// const store = require('configureStore').configure();
const store = {

};
// import store from 'configureStore';

// firebase.auth().onAuthStateChanged( (user) => {
//   // Function that is called whenever a login status changes
//   // When the user var is present, a user just logged in
//   if (user) {
//     store.dispatch( login(user.uid) );   // push the user log details to the store
//     store.dispatch( startAddTodos() );    // load the todo data from firebase and push to the store
//     hashHistory.push('/todos');                   // redirect the user to the todo area of the app
//   } else {
//     store.dispatch( logout() );
//     hashHistory.push('/');
//   }
// });

// Load foundation
// $(document).foundation();

// App css
// require('style!css!sass!applicationStyles')
import 'applicationStyles';

ReactDOM.render(
  // Provider is used to connect redux with react. The store is made available to all children components
  <Provider store={store}>
    {router}
    <div>it's running</div>
  </Provider>,
  document.getElementById('app')
);