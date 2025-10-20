// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSw3I7izgoy97Kw4XToDZqjzt4MLxpS5k",
  authDomain: "dragon-news-1e2eb.firebaseapp.com",
  projectId: "dragon-news-1e2eb",
  storageBucket: "dragon-news-1e2eb.firebasestorage.app",
  messagingSenderId: "94459739631",
  appId: "1:94459739631:web:2092cf08a0f7c12863ca1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);