// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnO8TD7OSUbqRaaUSzH654PL6V6ki29Po",
  authDomain: "roomies-client.firebaseapp.com",
  projectId: "roomies-client",
  storageBucket: "roomies-client.firebasestorage.app",
  messagingSenderId: "953222115792",
  appId: "1:953222115792:web:e843a3aa4ab180347449d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;