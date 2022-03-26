// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNNkYxarP4quW3uPMsTUtUly-NUxzlVHs",
  authDomain: "users-app-7dd43.firebaseapp.com",
  projectId: "users-app-7dd43",
  storageBucket: "users-app-7dd43.appspot.com",
  messagingSenderId: "735009318354",
  appId: "1:735009318354:web:f0bcca492a946c3673540b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app