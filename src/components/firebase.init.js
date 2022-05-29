// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZIMVnyGMJijFKjGGxaW1q7bAOIag0uko",
  authDomain: "manufacture-123.firebaseapp.com",
  projectId: "manufacture-123",
  storageBucket: "manufacture-123.appspot.com",
  messagingSenderId: "48361548611",
  appId: "1:48361548611:web:0140377b9dee6c5e681df6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
