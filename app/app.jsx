var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

// Used to test several firebase functions before refactoring the app to work with FireBase
// import './../playground/firebase/index';

store.subscribe( () => {
  var state = store.getState();
  console.log( 'New state', state );
  TodoAPI.setTodos(state.todos)
});

var initialTodos = TodoAPI.getTodos();
store.dispatch( actions.addTodos(initialTodos) );

// store.dispatch( actions.addTodo('Upgrade laptop') );
// store.dispatch( actions.addTodo('Walk dog') );
// store.dispatch( actions.addTodo('Visit gym') );



// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  // Provider is used to connect redux with react. The store is made available to all children components
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
