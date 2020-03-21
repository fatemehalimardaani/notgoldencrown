import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';
const config={
    apiKey: "AIzaSyCpSCa-RVBWmF5c_mMBDAFG6BdWXYTu4iY",
    authDomain: "silvercrown-5b69c.firebaseapp.com",
    databaseURL: "https://silvercrown-5b69c.firebaseio.com",
    projectId: "silvercrown-5b69c",
    storageBucket: "silvercrown-5b69c.appspot.com",
    messagingSenderId: "1074709670895",
    appId: "1:1074709670895:web:1251a54bdaa4797644e41a",
    measurementId: "G-ETM2R2BDK3"
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
