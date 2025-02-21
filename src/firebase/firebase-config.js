import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHGpmQQyTgamEch9BpVW0d9hf9Q9FoM",
  authDomain: "personalizedlearningassistant.firebaseapp.com",
  projectId: "personalizedlearningassistant",
  storageBucket: "personalizedlearningassistant.appspot.com",
  messagingSenderId: "594673546587",
  appId: "1:594673546587:web:5e900dc0167ee44d65567e",
};

// Initialize Firebase
const app = initializeApp(firebase-Config);
const auth = getAuth(app);
const db = getFirestore(app);

export { firebaseConfig, auth, db }; // Fix: Export firebaseConfig
