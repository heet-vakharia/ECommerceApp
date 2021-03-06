import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth';

const cofig =  {
    apiKey: "AIzaSyDymOyweNUOtXfsaZzPA1zUXBqSVhElLjw",
    authDomain: "ecommerce-b02da.firebaseapp.com",
    databaseURL: "https://ecommerce-b02da.firebaseio.com",
    projectId: "ecommerce-b02da",
    storageBucket: "ecommerce-b02da.appspot.com",
    messagingSenderId: "9069370080",
    appId: "1:9069370080:web:598a6c7de2df42043cce85",
    measurementId: "G-K66G3YZVB5"
  };

  export const createUserProfileDocument = async (userAuth , additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    console.log(snapShot)

    if(!snapShot.exists){
      const {displayName , email} = userAuth
      const createdAt = new Date()
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (e) {
        console.log('There is a err while adding user' ,e)
      }
    }
    return userRef
  }

  firebase.initializeApp(cofig)
 
  export const auth = firebase.auth()
  export const firestore = firebase.firestore()
   // eslint-disable-next-line
  const TwitterProvider = new firebase.auth.TwitterAuthProvider
  TwitterProvider.setCustomParameters({prompt:'select_account'})
  export const signInWithTwitter = () => auth.signInWithPopup(TwitterProvider)
  // eslint-disable-next-line
  const Googleprovider = new firebase.auth.GoogleAuthProvider
  Googleprovider.setCustomParameters({prompt:'select_account'})
  export const signInWithGoogle =( ) => auth.signInWithPopup(Googleprovider)

  const Facebookprovider = new firebase.auth.FacebookAuthProvider()
  Facebookprovider.setCustomParameters({prompt:'select_account'})
  export const signInWithFacebook =( ) => auth.signInWithPopup(Facebookprovider)

  
  
  export default firebase