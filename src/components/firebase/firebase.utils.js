import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';
const config={
    apiKey: "AIzaSyDMtiF4eRPoYXqzR-uca4vGiivBrgeS2cE",
    authDomain: "crown-byme.firebaseapp.com",
    databaseURL: "https://crown-byme.firebaseio.com",
    projectId: "crown-byme",
    storageBucket: "crown-byme.appspot.com",
    messagingSenderId: "742520190713",
    appId: "1:742520190713:web:964288cc4f0b2eb657d428",
    measurementId: "G-MP3HBH72EV"
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
export const auth=firebase.auth();
export const firestore=firebase.firestore();
const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);
export default firebase;
