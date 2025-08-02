// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxiYsni0_mjE0p5diDKbnFmeqTLYKZUlA",
  authDomain: "netflixgpt-39e0b.firebaseapp.com",
  projectId: "netflixgpt-39e0b",
  storageBucket: "netflixgpt-39e0b.firebasestorage.app",
  messagingSenderId: "593686583670",
  appId: "1:593686583670:web:0939a810e860d8824ec257",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
