// src/firebase.js
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // 👈 Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyCkIEQ4zUyUj2p3trPSvtA6S83PPbTt24I",
  authDomain: "arigatodining-de9ee.firebaseapp.com",
  projectId: "arigatodining-de9ee",
  storageBucket: "arigatodining-de9ee.firebasestorage.app",
  messagingSenderId: "741241868549",
  appId: "1:741241868549:web:dcda740d91096ff9a9276c",
  measurementId: "G-E2Q669L245",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app); // 👈 Export Firestore
