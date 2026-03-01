// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your 
// web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "food-delivery-98f22.firebaseapp.com",
  projectId: "food-delivery-98f22",
  storageBucket: "food-delivery-98f22.firebasestorage.app",
  messagingSenderId: "970495965078",
  appId: "1:970495965078:web:a4c4261f4c97247d9f0fb7"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()
export {provider,auth}