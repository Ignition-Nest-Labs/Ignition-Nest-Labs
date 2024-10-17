// Import the necessary functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Import Storage

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyAds1LQ8WKeVNwnUSD4ALqwSQXG8JpxuqY",
  authDomain: "ignition-new-entry.firebaseapp.com",
  projectId: "ignition-new-entry",
  storageBucket: "ignition-new-entry.appspot.com", // Ensure storageBucket is correct
  messagingSenderId: "437372999842",
  appId: "1:437372999842:web:10c7942bb705dde9285ffb",
  measurementId: "G-LMYWVLVQ3D",
};

// Initialize Firebase app and services
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore
const storage = getStorage(app); // Initialize Storage

// Export Firebase services for use throughout the app
export { app, db, storage };
