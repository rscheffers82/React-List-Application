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
    name: '',
    version: '0.0.1'
  },
  isRunning: true,
  user: {
    name: 'Andrew',
    age: 25
  }
}).then( () => {
  console.log('Set worked!');
}, (e) => {
  console.log('Set failed!');
})

firebaseRef.child('user').set({
  name: 'Mike'
});

firebaseRef.child('app').set({
  name: 'Todo Application '
});
