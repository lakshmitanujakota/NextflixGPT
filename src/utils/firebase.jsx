// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2pi7QH43i9XgAGgfv1zpk1Yy85l4P4XU",
  authDomain: "netflixgpt-a7789.firebaseapp.com",
  projectId: "netflixgpt-a7789",
  storageBucket: "netflixgpt-a7789.firebasestorage.app",
  messagingSenderId: "751683706102",
  appId: "1:751683706102:web:fa4254c7435ad33c1fe0d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);