
import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCsyoGWEPQ9XS5mM_28p5wLxYybmQWzTL4",
  authDomain: "raissaifal513.firebaseapp.com",
  projectId: "raissaifal513",
  storageBucket: "raissaifal513.appspot.com",
  messagingSenderId: "1050270803151",
  appId: "1:1050270803151:web:b60afaa21b3b94fc07c3ba"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = initializeAuth(app)

export { app, db, auth }