// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDu2EproS-F_7E2-VSCZphmZrduTz4yN1c",
  authDomain: "the-master-chef.firebaseapp.com",
  projectId: "the-master-chef",
  storageBucket: "the-master-chef.appspot.com",
  messagingSenderId: "191685368723",
  appId: "1:191685368723:web:2579393e7711777216a666"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;