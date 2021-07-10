import firebase from 'firebase/app';
import 'firebase/firestore' ;
import 'firebase/auth';

const firebaseConfig = {
    apiKey: REACT_APP_FIREBASE_API_KEY,
    authDomain: REACT_APP_AUTH_DOMAIN,
    projectId: REACT_APP_PROJECT_ID,
    storageBucket: REACT_APP_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
    appId: REACT_APP_APP_ID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;

// const projectFirestore = firebase.firestore();

// export {projectFirestore};