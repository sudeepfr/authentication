// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "authentication-b1ee9.firebaseapp.com",
  projectId: "authentication-b1ee9",
  storageBucket: "authentication-b1ee9.firebasestorage.app",
  messagingSenderId: "763356931774",
  appId: "1:763356931774:web:18ea6503acc133e12620ef"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);