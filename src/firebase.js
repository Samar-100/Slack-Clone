import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAu7KfI3f51OhdSkFAmQg6BmWyEJjbnEkg",
  authDomain: "slack-clone-786ed.firebaseapp.com",
  databaseURL: "https://slack-clone-786ed.firebaseio.com",
  projectId: "slack-clone-786ed",
  storageBucket: "slack-clone-786ed.appspot.com",
  messagingSenderId: "463201615254",
  appId: "1:463201615254:web:a52264281a10aba0d931b7",
  measurementId: "G-JG736ZR6KW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
