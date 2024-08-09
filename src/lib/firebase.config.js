// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAds1LQ8WKeVNwnUSD4ALqwSQXG8JpxuqY",
  authDomain: "ignition-new-entry.firebaseapp.com",
  projectId: "ignition-new-entry",
  storageBucket: "ignition-new-entry.appspot.com",
  messagingSenderId: "437372999842",
  appId: "1:437372999842:web:10c7942bb705dde9285ffb",
  measurementId: "G-LMYWVLVQ3D",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore

export { app, db };
