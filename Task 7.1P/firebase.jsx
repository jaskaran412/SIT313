import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAwdDIS0vw4HIvNDCja_A9c3a9iTiJC9U",
  authDomain: "login-and-sign-up-page-33f5e.firebaseapp.com",
  projectId: "login-and-sign-up-page-33f5e",
  storageBucket: "login-and-sign-up-page-33f5e.firebasestorage.app",
  messagingSenderId: "246504002929",
  appId: "1:246504002929:web:07a7c0446a0a6eb263d2d0",
  measurementId: "G-W65366F8H5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);