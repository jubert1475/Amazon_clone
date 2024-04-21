// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBRlhYC_ZG-BzdcVoofJfkX9PzmOrIZBvI",
    authDomain: "all-about-react.firebaseapp.com",
    projectId: "all-about-react",
    storageBucket: "all-about-react.appspot.com",
    messagingSenderId: "878979964736",
    appId: "1:878979964736:web:3a3c433634e73a2010a4a5"
  };
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp);
const auth=getAuth();

export  {db,auth};