import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBn29lPjOnjwfo5XsSu6mA6w0gmlQx9bSg",
  authDomain: "maquetajenny.firebaseapp.com",
  projectId: "maquetajenny",
  storageBucket: "maquetajenny.firebasestorage.app",
  messagingSenderId: "343795320366",
  appId: "1:343795320366:web:cdac5c93ef53d3befec1bf"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);