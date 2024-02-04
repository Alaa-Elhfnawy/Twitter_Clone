import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBTOyGfvm9XrspqPFsiMO-U6nOOPHRC5G4",
    authDomain: "twitter-clone-f92a0.firebaseapp.com",
    projectId: "twitter-clone-f92a0",
    storageBucket: "twitter-clone-f92a0.appspot.com",
    messagingSenderId: "973995174794",
    appId: "1:973995174794:web:c71d61fe211189ba913673",
    measurementId: "G-VLSVNYZRXX"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db =firebaseApp.firestore();

  export default db;