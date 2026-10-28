// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Конфигурация вашего Firebase-проекта (meny-b583e)
const firebaseConfig = {
  apiKey: "AIzaSyBxatrNfOf_MHxBfPqg0yH94RqeklOhOdg",
  authDomain: "meny-b583e.firebaseapp.com",
  projectId: "meny-b583e",
  storageBucket: "meny-b583e.firebasestorage.app",
  messagingSenderId: "346734691668",
  appId: "1:346734691668:web:b473329a2cb8ae694034c1",
  measurementId: "G-07NXM3R3CT"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Экспортируем сервисы и функции, которые используются в index.html
export const auth = getAuth(app);
export const db = getFirestore(app);

export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  doc,
  getDoc,
  setDoc
};
