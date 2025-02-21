// src/firebase/firestore.js
import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";

const saveUserProfile = async (userId, profileData) => {
  try {
    await setDoc(doc(db, "users", userId), profileData);
    console.log('Profile saved!');
  } catch (error) {
    console.error('Error saving profile: ', error);
  }
};

export { saveUserProfile };
