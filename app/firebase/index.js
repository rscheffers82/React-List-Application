import firebase from 'firebase';

try {

  // Initialize Firebase, within a try-catch to ensure it's only called once
  const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID
  };
  firebase.initializeApp(config);

} catch (e) {}  // do nothing when the above fails

// export var githubProvider = new firebase.auth.GithubAuthProvider();
export const loginProvider = {
  // 'facebook' : new firebase.auth.FacebookAuthProvider(),
  // 'github' : new firebase.auth.GithubAuthProvider(),
  'google' : new firebase.auth.GoogleAuthProvider()
}
export const firebaseRef = firebase.database().ref();
export default firebase;
