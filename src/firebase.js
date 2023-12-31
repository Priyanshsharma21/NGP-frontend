import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFdj1M_A37-285DF2QuV-4e9oVk6A0LnQ",
  authDomain: "gymtrance-2f735.firebaseapp.com",
  projectId: "gymtrance-2f735",
  storageBucket: "gymtrance-2f735.appspot.com",
  messagingSenderId: "419812641988",
  appId: "1:419812641988:web:96d26cc509b907478e0d91",
  measurementId: "G-V6VZ5SXBN6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

