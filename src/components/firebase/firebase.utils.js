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

    console.log( {collection:collectionSnapShot.docs.map(item=>item.data()) } , 'hey')
  
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

export const addCollectionAndItem= async (collectionKey,objectsToAdd)=>{

  const collectionRef=firestore.collection(collectionKey)
  console.log(collectionRef)
  const batch=firestore.batch();

  console.log(objectsToAdd,'hi')

  objectsToAdd.forEach(obj => {
    const newDocRef=collectionRef.doc();
    console.log(newDocRef)
    batch.set(newDocRef,obj)
    
  });
  return await batch.commit();
}  

export const convertCollectionsSnapshotToMap=(collections)=>{
  const transformedCollection=collections.docs.map(doc=>{
    const {title,items}=doc.data();
    return{
      routeName:encodeURI(title.toLowerCase()),
      id:doc.id,
      title,items
    }
  })

  return transformedCollection.reduce((accumulator,collection)=>{
    accumulator[collection.title.toLowerCase()]=collection;
    return accumulator;
  },{})
}
export const auth=firebase.auth();
export const firestore=firebase.firestore();
const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);
export default firebase;
