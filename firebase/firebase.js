// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkIEQ4zUyUj2p3trPSvtA6S83PPbTt24I",
  authDomain: "arigatodining-de9ee.firebaseapp.com",
  projectId: "arigatodining-de9ee",
  storageBucket: "arigatodining-de9ee.firebasestorage.app",
  messagingSenderId: "741241868549",
  appId: "1:741241868549:web:dcda740d91096ff9a9276c",
  measurementId: "G-E2Q669L245",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
