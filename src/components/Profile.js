import React, { useState } from 'react';
import { auth } from "../firebase/firebase-config";
import { saveUserProfile } from '../firebase/firestore';

const Profile = () => {
  const [learningGoal, setLearningGoal] = useState("");
  const [preferences, setPreferences] = useState("");

  const handleSave = async () => {
    if (auth.currentUser) {
      const profileData = {
        learningGoal,
        preferences,
        progress: 0,  // Placeholder for future tracking
      };
      await saveUserProfile(auth.currentUser.uid, profileData);
    } else {
      console.log("No user is signed in.");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Learning Goal"
        value={learningGoal}
        onChange={(e) => setLearningGoal(e.target.value)}
      />
      <textarea
        placeholder="Learning Preferences"
        value={preferences}
        onChange={(e) => setPreferences(e.target.value)}
      />
      <button onClick={handleSave}>Save Profile</button>
    </div>
  );
};

export default Profile;
