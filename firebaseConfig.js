import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4Fr1v9jR-HgtGJF8zEpPybyaCAv_GPuQ",
  authDomain: "admin-dashboard-e23b2.firebaseapp.com",
  projectId: "admin-dashboard-e23b2",
  storageBucket: "admin-dashboard-e23b2.firebasestorage.app",
  messagingSenderId: "417785891766",
  appId: "1:417785891766:web:5113b61c36e115f3e28f17",
  measurementId: "G-SCQ8GMRF3C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Authentication
const auth = getAuth(app);

export { db };
