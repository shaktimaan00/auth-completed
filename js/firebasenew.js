import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";  
import { getFirestore, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

//add your credentials from firebase project
const firebaseConfig = {
  apiKey: "AIzaSyBC6D0aZol-1AT5hfy59chfBEvfWzF03NY",
  authDomain: "do-test-1a7d0.firebaseapp.com",
  projectId: "do-test-1a7d0",
  storageBucket: "do-test-1a7d0.appspot.com",
  messagingSenderId: "285727750796",
  appId: "1:285727750796:web:94ed0bb10f9c0e755299a9"
};

initializeApp(firebaseConfig);
export const db = getFirestore();
