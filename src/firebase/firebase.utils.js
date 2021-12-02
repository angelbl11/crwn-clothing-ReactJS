import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCPj86p1K0pkz7grbMpzg1_2JMrkAg5tRo",
  authDomain: "crwn-db-8a8d8.firebaseapp.com",
  projectId: "crwn-db-8a8d8",
  storageBucket: "crwn-db-8a8d8.appspot.com",
  messagingSenderId: "347563197960",
  appId: "1:347563197960:web:994c3132e57d3c6c3bb3bd",
  measurementId: "G-CXLRX18RJ6",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
