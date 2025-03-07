# AI-Based Learning Assistant

This is an AI-powered learning assistant built using **React**, **Firebase**, and **React Router**. It allows users to register, log in, and manage their learning profiles with personalized goals and preferences .

## 🚀 Features
- User Authentication (Register & Login)
- Profile Management
- Firebase Firestore Database Integration
- React Router for Navigation 
    

## 🛠 Tech Stack 
- **Frontend**: React, React Router
- **Backend**: Firebase Authentication, Firebase Firestore  
   
---  
  
## 📂 Folder Structure 
```
📦 assistant 
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 Login.js 
 ┃ ┃ ┣ 📜 Register.js 
 ┃ ┃ ┣ 📜 Profile.js 
 ┃ ┣ 📂 firebase 
 ┃ ┃ ┣ 📜 firebase-config.js
 ┃ ┣ 📜 App.js
 ┃ ┣ 📜 index.js
 ┣ 📜 package.json
 ┣ 📜 README.md
```

---

## 📌 Installation

1️⃣ **Clone the Repository**
```sh
git clone https://github.com/your-repo-name.git
cd assistant
```

2️⃣ **Install Dependencies**
```sh
npm install
```

3️⃣ **Set Up Firebase**
- Go to [Firebase Console](https://console.firebase.google.com/)
- Create a new project 
- Get your **Firebase config** and add it to `src/firebase/firebase-config.js`

Example:
```javascript
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
}; 

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, firebaseConfig };
```

4️⃣ **Start the Development Server**
```sh
npm start
```

---

## 📜 Usage
1. **Register** a new account
2. **Login** with registered credentials
3. **Update Profile** with learning goals and preferences

---

## 🔥 Common Issues & Fixes
### 1️⃣ White Screen Issue
**Fix:** Open DevTools (`F12`) → Check Console for errors → Fix imports in `firebase-config.js`

### 2️⃣ Firebase Not Defined Error
**Fix:** Ensure you correctly import Firebase:
```javascript
import { auth, db, firebaseConfig } from "../firebase/firebase-config";
```

### 3️⃣ Port 3000 Already in Use
**Fix:** Run the following command and restart:
```sh
npx kill-port 3000
npm start
```

---

## 📌 Future Enhancements
✅ AI-Powered Course Recommendations 
✅ Learning Progress Tracking
✅ Notifications for Study Reminders

---

## 📞 Support
For issues, open a GitHub issue or contact [Your Name] .

