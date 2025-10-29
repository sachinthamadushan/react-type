import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAv3o1zTqX5rbxSBOUIYQgIsHkfXYnzC7Q",
  authDomain: "myposs-98c0f.firebaseapp.com",
  projectId: "myposs-98c0f",
  storageBucket: "myposs-98c0f.firebasestorage.app",
  messagingSenderId: "1046913601247",
  appId: "1:1046913601247:web:ad3be2331daea4b9e3a36a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);