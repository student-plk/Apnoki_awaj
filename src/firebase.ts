import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAYWMdnjveFmza_F_xZJm9lY1ZBvIxmO5E",
  authDomain: "apno-ki-awaj-265f6.firebaseapp.com",
  projectId: "apno-ki-awaj-265f6",
  storageBucket: "apno-ki-awaj-265f6.firebasestorage.app",
  messagingSenderId: "885780079359",
  appId: "1:885780079359:web:a0fe3666efacf88abf22ca",
  measurementId: "G-EH769DQKTS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Firestore and get a reference to the service
export const db = getFirestore(app);

export default app; 