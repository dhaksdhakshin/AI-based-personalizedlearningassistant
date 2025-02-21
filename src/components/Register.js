import React from "react";
import { auth } from "../firebase/firebase-config"; // ✅ Correct import
import { createUserWithEmailAndPassword } from "firebase/auth";

function Register() {
  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, "test@example.com", "password123");
      console.log("User registered!");
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return <button onClick={handleRegister}>Register</button>;
}

export default Register;
