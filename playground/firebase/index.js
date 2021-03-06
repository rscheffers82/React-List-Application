import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBOJgxf8ay7QcuHElz-u1lfyWd2oNUaMVU",
  authDomain: "roykode-todo-app.firebaseapp.com",
  databaseURL: "https://roykode-todo-app.firebaseio.com",
  storageBucket: "roykode-todo-app.appspot.com",
  messagingSenderId: "911277345102"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '0.0.1'
  },
  isRunning: true,
  user: {
    name: 'Andrew',
    age: 25
  }
});

// Create a var that stores the reference to the todos array
// child_added, log the key and value to the console
// add two todos

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log( 'child_added', snapshot.val() );
});

todosRef.on('child_changed', (snapshot) => {
  console.log( 'child_changed', snapshot.val() );
});
todosRef.on('child_removed', (snapshot) => {
  console.log( 'child_removed', snapshot.val() );
});

todosRef.push({
  text: 'Talk to Zoki'
});

todosRef.push({
  text: '2nd todo item'
});


// firebaseRef.once('value').then( (snapshot) => {
//   console.log('Got entire database', snapshot.val() );
// }, (e) => {
//   console.log('Unable to fetch value. ', e);
// });

// add listener for value changes using on, use child to make a specific object listener
// Function should be fired when the app name is changes, not when the username is changed
// firebaseRef.child('app').on('value', (snapshot) => {
//   console.log( 'Data: ', snapshot.val() );
// });
//
// firebaseRef.child('app').update({ name: 'Different App name'});
//
// firebaseRef.child('user').update({ name: 'Zorana Telebak'});

// update a value on the main branch of the tree
// firebaseRef.update({
//   'app/name': 'Todo Application branch',
//   'user/name': 'Roy Scheffers branch'
// });

// Remove a property in the db
// firebaseRef.child('app/name').remove();

// firebaseRef.child('app').update ({ name: null });
// use multipaths to update multiple values
// firebaseRef.child('app').update({
//   name: 'Todo Application'
// });
// firebaseRef.child('user').update({
//   name: 'Roy Scheffers'
// });
