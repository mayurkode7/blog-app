// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEIGfgY_B_vS-42iI5FqzzRFZ_M_djxHY",
  authDomain: "blog-app-71bfb.firebaseapp.com",
  projectId: "blog-app-71bfb",
  storageBucket: "blog-app-71bfb.appspot.com",
  messagingSenderId: "1070523862686",
  appId: "1:1070523862686:web:5d842a930c2c0e0275358f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()