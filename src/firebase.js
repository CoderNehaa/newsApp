// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8DioLwLyB2o4D9sFOf5PyrlU_hPiejLA",
  authDomain: "newsapp-7a25d.firebaseapp.com",
  projectId: "newsapp-7a25d",
  storageBucket: "newsapp-7a25d.appspot.com",
  messagingSenderId: "655000945200",
  appId: "1:655000945200:web:af2321f41fc037d9baa3f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth();

export default db;
export {app, auth};