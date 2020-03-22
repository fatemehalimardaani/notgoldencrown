import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';
const config={
  apiKey: "AIzaSyBdd65kQ0GZgCcs7q_si-49fi5AHh5Vfug",
    authDomain: "crwn-crwn-c9064.firebaseapp.com",
    databaseURL: "https://crwn-crwn-c9064.firebaseio.com",
    projectId: "crwn-crwn-c9064",
    storageBucket: "crwn-crwn-c9064.appspot.com",
    messagingSenderId: "764979844316",
    appId: "1:764979844316:web:4a2dd3a8dc88c264cf1019",
    measurementId: "G-2T1YTDH4QQ"
};

firebase.initializeApp(config);
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`user/${userAuth.uid}`);
    const snapShot = await userRef.get();

    const collectionRef=firestore.collection('users')
    const collectionSnapShot = await collectionRef.get();

    console.log(snapShot,'yo yo')
    console.log(collectionSnapShot)
    console.log('YO YO ')



  
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
