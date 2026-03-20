import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-z1jVAAI2_gPvnUXUJeHgzZXLg1tWw5M",
  authDomain: "msme-a27b7.firebaseapp.com",
  projectId: "msme-a27b7",
  storageBucket: "msme-a27b7.firebasestorage.app",
  messagingSenderId: "680990026119",
  appId: "1:680990026119:web:ac3de3c3074b5234cbcb22",
  measurementId: "G-19V7ZNYEKT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
