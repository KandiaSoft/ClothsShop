import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBdIdsF8kYz0KmtvTrXX5xrzmv8ZsMcNrg",
  authDomain: "crwn-db-9a874.firebaseapp.com",
  databaseURL: "https://crwn-db-9a874.firebaseio.com",
  projectId: "crwn-db-9a874",
  storageBucket: "crwn-db-9a874.appspot.com",
  messagingSenderId: "350702321375",
  appId: "1:350702321375:web:c71fbbe911a0c83272f36a",
  measurementId: "G-PHJ1WVG5P9"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth){
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;