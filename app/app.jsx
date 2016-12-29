var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
import firebase from 'app/firebase/';
import router from 'app/router/'
// if the name is index.js / .jsx no need to specify the file

firebase.auth().onAuthStateChanged( (user) => {
  // Function that is called whenever a login status changes
  // When the user var is present, a user just logged in
  if (user) {
    store.dispatch( actions.login(user.uid) );   // push the user log details to the store
    store.dispatch( actions.startAddTodos() );    // load the todo data from firebase and push to the store
    hashHistory.push('/todos');                   // redirect the user to the todo area of the app
  } else {
    store.dispatch( actions.logout() );
    hashHistory.push('/');
  }
});

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  // Provider is used to connect redux with react. The store is made available to all children components
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
