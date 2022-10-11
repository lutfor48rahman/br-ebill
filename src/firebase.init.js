// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBx8OUp4llmrMTDjbdLL-sZ8lgCtF-CDwA",
  authDomain: "br-e-bill.firebaseapp.com",
  projectId: "br-e-bill",
  storageBucket: "br-e-bill.appspot.com",
  messagingSenderId: "1054629802768",
  appId: "1:1054629802768:web:57bf9b38530824bd3cab95",
  measurementId: "G-JRV64VZZ0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;