// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBbKOg2tp2mOoTzTre5JKt9E7QRPmJU5ac",
  authDomain: "tik-tok-clone-6ef12.firebaseapp.com",
  projectId: "tik-tok-clone-6ef12",
  storageBucket: "tik-tok-clone-6ef12.appspot.com",
  messagingSenderId: "226091185065",
  appId: "1:226091185065:web:21082c6b7ec222e8dc8ab8",
  measurementId: "G-SHXK19WCRZ",
};
const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
