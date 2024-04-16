// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore, doc, setDoc} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKB9cjsYSaWU_t0fPdTQt0Dxz0pu0YY68",
  authDomain: "aapki-shop-6b295.firebaseapp.com",
  projectId: "aapki-shop-6b295",
  storageBucket: "aapki-shop-6b295.appspot.com",
  messagingSenderId: "370607447529",
  appId: "1:370607447529:web:167df6abd74be50d9dbf78",
  measurementId: "G-GEJ0HYTWED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db  = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {db, auth, provider, doc, setDoc};