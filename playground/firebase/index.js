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

firebase.database().ref().set({
  appName: 'Todo App'
});
