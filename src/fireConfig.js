import firebase from 'firebase/app';
import 'firebase/firestore' ;
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDJ682ibjM9c2PJFS-NFP4lGp7jRVJ69GE",
    authDomain: "qgen-ac5ef.firebaseapp.com",
    projectId: "qgen-ac5ef",
    storageBucket: "qgen-ac5ef.appspot.com",
    messagingSenderId: "135665408821",
    appId: "1:135665408821:web:77eecd963dee7fa0790a7c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;

// const projectFirestore = firebase.firestore();

// export {projectFirestore};