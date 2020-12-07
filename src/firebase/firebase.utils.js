// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBussMREnF80ZwcImyVYh_3eOPBGNmbXwI",
    authDomain: "crwn-db24.firebaseapp.com",
    databaseURL: "https://crwn-db24.firebaseio.com",
    projectId: "crwn-db24",
    storageBucket: "crwn-db24.appspot.com",
    messagingSenderId: "1034914243808",
    appId: "1:1034914243808:web:4479a23a9429ced87b5c85",
    measurementId: "G-L5QRKTLNHX"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth(); // anything related to authentication
  export const firestore = firebase.firestore();

  // Google Authentication utility
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebaseConfig;
