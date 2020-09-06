import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB2tSzCRc1JPWzKk9usWxbJxhxfwuz4Wrs",
  authDomain: "e-commerce-app-6be47.firebaseapp.com",
  databaseURL: "https://e-commerce-app-6be47.firebaseio.com",
  projectId: "e-commerce-app-6be47",
  storageBucket: "e-commerce-app-6be47.appspot.com",
  messagingSenderId: "462786271163",
  appId: "1:462786271163:web:6df5ebc1018236f506d69e",
  measurementId: "G-4ZK7EC5VJ2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;