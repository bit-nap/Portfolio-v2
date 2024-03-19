// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_RCBWCAQDqm8jqVdkddkrs3AUm64XW6k",
  authDomain: "react-website-267b1.firebaseapp.com",
  projectId: "react-website-267b1",
  storageBucket: "react-website-267b1.appspot.com",
  messagingSenderId: "492929063150",
  appId: "1:492929063150:web:58b9ff4261c79d2eb2bbff",
  measurementId: "G-ZX5VPZ3WXP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
