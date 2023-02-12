// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAAw8PiIMkk0rZxECv49w3pukA3PXlbu0",
  authDomain: "discount-store-8aab4.firebaseapp.com",
  projectId: "discount-store-8aab4",
  storageBucket: "discount-store-8aab4.appspot.com",
  messagingSenderId: "296217318468",
  appId: "1:296217318468:web:12b8fc7a8a7f4e805a5811",
  measurementId: "G-TPRYPBL7JX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);