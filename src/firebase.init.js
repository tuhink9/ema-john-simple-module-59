// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_7nOA9vHjXJocwF8BbuHbVEbKfK9A6co",
  authDomain: "ema-john-with-router-module-59.firebaseapp.com",
  projectId: "ema-john-with-router-module-59",
  storageBucket: "ema-john-with-router-module-59.appspot.com",
  messagingSenderId: "966524493175",
  appId: "1:966524493175:web:e5939fdb70453f8accd572"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;