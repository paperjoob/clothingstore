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

// take the userAth object and store it inside the Firebase database
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if the userauth doesnt exist; exit this function
  if (!userAuth) return;

  // grab the ID of the user logged in
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // get the user object data
  const snapShot = await userRef.get();

  // we have to use the documentRef to perform CRUD methods (create, get, update, delete)
  // if NO USER EXISTS, create the user from the userAuth data
  if (!snapShot.exists) {
    // the properties we want to store
    const {displayName, email} = userAuth;
    const createdAt = new Date(); // current date when invoked

    try {
      // create display name, email and time created, and anything else needed
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('Error Creating User:', error.message);
    }
  }

  // always return the userRef
  return userRef;
};

  export const auth = firebase.auth(); // anything related to authentication
  export const firestore = firebase.firestore();

  // Google Authentication utility
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebaseConfig;
