// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import {getStorage, ref} from 'firebase/storage';
import {getDatabase} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtHu5JB_W9lyB0XcTg7LvTMb2VC1HPMw4",
  authDomain: "skillsync-dcc60.firebaseapp.com",
  projectId: "skillsync-dcc60",
  storageBucket: "skillsync-dcc60.appspot.com",
  messagingSenderId: "619428257342",
  appId: "1:619428257342:web:7cf78ebd4ae9b05ec7fb6f",
  measurementId: "G-5YXDFQDKJ0"
};


const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const database = getDatabase(app);