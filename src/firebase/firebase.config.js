// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCysjZIeo79FSPYukmzw-ufh1iPZhJSmlY",
  authDomain: "auth-context-firebase-bef55.firebaseapp.com",
  projectId: "auth-context-firebase-bef55",
  storageBucket: "auth-context-firebase-bef55.appspot.com",
  messagingSenderId: "33425759399",
  appId: "1:33425759399:web:b9fd6d21609a1af1c4cf82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
