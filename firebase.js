import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC1hJDnt2-KNMUyIiS_I5jYg9eaSuXXYRE",
    authDomain: "realstore-0.firebaseapp.com",
    projectId: "realstore-0",
    storageBucket: "realstore-0.appspot.com",
    messagingSenderId: "318073742699",
    appId: "1:318073742699:web:6d2e6024fafc3aaa28182e",
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

export const db = app.firestore();

// no analitycs

// go authentication
// enable google
// valid email
// web sdk configuration
// change .env
