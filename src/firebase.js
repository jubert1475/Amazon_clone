// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf0RDem6SsGuJ7ntvHos6Tl0vQlQYaytM",
  authDomain: "amzon-clone-6b8ec.firebaseapp.com",
  projectId: "amzon-clone-6b8ec",
  storageBucket: "amzon-clone-6b8ec.appspot.com",
  messagingSenderId: "1005021212332",
  appId: "1:1005021212332:web:fefcdbe467f6072811f909",
  measurementId: "G-5WNW5LRMHB"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth=getAuth();

export  {db,auth};