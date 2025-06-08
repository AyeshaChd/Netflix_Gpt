// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-dlwMSyj9uMVsDeBBn6NcPf0w2QCVyVQ",
  authDomain: "netflixgpt-69b8e.firebaseapp.com",
  projectId: "netflixgpt-69b8e",
  storageBucket: "netflixgpt-69b8e.firebasestorage.app",
  messagingSenderId: "441711230297",
  appId: "1:441711230297:web:efc32043f78cd24d7fa048",
  measurementId: "G-16FNBT2ZXN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//
export const auth = getAuth();
