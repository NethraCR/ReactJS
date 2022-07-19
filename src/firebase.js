// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABsBlFBX4Ajpo3iAmy3kMqXu0soUa7z60",
  authDomain: "reactapp-373ce.firebaseapp.com",
  projectId: "reactapp-373ce",
  storageBucket: "reactapp-373ce.appspot.com",
  messagingSenderId: "900592843396",
  appId: "1:900592843396:web:ac6479b91d2a1ab2b1a0d1",
  measurementId: "G-9GBJRKYGW4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;