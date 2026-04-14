// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1RTgynI50gTb1yCBD4fpSQWe0heESRl4",
  authDomain: "joseup-personal-website.firebaseapp.com",
  projectId: "joseup-personal-website",
  storageBucket: "joseup-personal-website.firebasestorage.app",
  messagingSenderId: "513929735162",
  appId: "1:513929735162:web:9019f475d6fe231a99d243",
  measurementId: "G-4G842Z0X67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);