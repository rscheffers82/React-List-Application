import firebase from 'firebase';

try {

  // Initialize Firebase, within a try-catch to ensure it's only called once
  var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID
  };
  firebase.initializeApp(config);

} catch (e) {

}
export var firebaseRef = firebase.database().ref();
export default firebase;
