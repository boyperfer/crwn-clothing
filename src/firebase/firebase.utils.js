import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCy4TCbflgZT7cKooESDYjtnhUVWvakvSw",
  authDomain: "crwn-boy.firebaseapp.com",
  databaseURL: "https://crwn-boy.firebaseio.com",
  projectId: "crwn-boy",
  storageBucket: "crwn-boy.appspot.com",
  messagingSenderId: "407308417287",
  appId: "1:407308417287:web:da64588a992d91fb"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    } catch (error) {
        console.log('error creating user', error.message);
    }
  }
  return userRef;
}

export const auth = firebase.auth();
export const  firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

