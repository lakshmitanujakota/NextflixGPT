// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoJS9SNO-8Vi29M7_ZtCq7CtFBqZ6PlKc",
  authDomain: "netflixgpt-d949c.firebaseapp.com",
  projectId: "netflixgpt-d949c",
  storageBucket: "netflixgpt-d949c.firebasestorage.app",
  messagingSenderId: "878143083662",
  appId: "1:878143083662:web:0f723d7eb3327ffc0e25df",
  measurementId: "G-J5B04TDCPD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();