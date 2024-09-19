// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_PFJeJJoJ006NmgRyqIgmnK68drJqF4Y",
  authDomain: "official--web.firebaseapp.com",
  projectId: "official--web",
  storageBucket: "official--web.appspot.com",
  messagingSenderId: "159933616456",
  appId: "1:159933616456:web:fbc5bb54915ebee344e37d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a Firestore instance
const db = getFirestore(app);

// Export the Firestore instance and functions
export { db, collection, addDoc };
