import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB4f3GW0c6OrdKwBWlwxur-rNMO8njyAOg",
    authDomain: "crown-db-6ae66.firebaseapp.com",
    databaseURL: "https://crown-db-6ae66.firebaseio.com",
    projectId: "crown-db-6ae66",
    storageBucket: "crown-db-6ae66.appspot.com",
    messagingSenderId: "917170104922",
    appId: "1:917170104922:web:a086e0ff3029d433438663",
    measurementId: "G-9D2E2HKKJ5"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
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
  };



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWIthGoogle = () => auth.signInWithPopup(provider);


export default firebase; 