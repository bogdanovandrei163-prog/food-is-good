// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  getDocs 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Ваша конфигурация Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBxatrNfOf_MHxBfPqg0yH94RqeklOhOdg",
  authDomain: "meny-b583e.firebaseapp.com",
  projectId: "meny-b583e",
  storageBucket: "meny-b583e.firebasestorage.app",
  messagingSenderId: "346734691668",
  appId: "1:346734691668:web:b473329a2cb8ae694034c1",
  measurementId: "G-07NXM3R3CT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Экспортируем все необходимые функции
export { 
  auth, 
  db, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  doc, 
  getDoc, 
  setDoc,
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  getDocs 
};
