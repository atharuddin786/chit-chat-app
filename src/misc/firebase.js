// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyCKA6txswkIzY6s96CBbwYlzWmKDs1SIuI",
  authDomain: "chit-chat-app-by-athar.firebaseapp.com",
  databaseURL: "https://chit-chat-app-by-athar-default-rtdb.firebaseio.com",
  projectId: "chit-chat-app-by-athar",
  storageBucket: "chit-chat-app-by-athar.appspot.com",
  messagingSenderId: "789445305787",
  appId: "1:789445305787:web:d83f73268594c72c18109e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
