import firebase from 'firebase';

try {

  // Initialize Firebase, within a try-catch to ensure it's only called once
  var config = {
    apiKey: "AIzaSyBOJgxf8ay7QcuHElz-u1lfyWd2oNUaMVU",
    authDomain: "roykode-todo-app.firebaseapp.com",
    databaseURL: "https://roykode-todo-app.firebaseio.com",
    storageBucket: "roykode-todo-app.appspot.com",
    messagingSenderId: "911277345102"
  };
  firebase.initializeApp(config);

} catch (e) {
  
}
export var firebaseRef = firebase.database().ref();
export default firebase;
