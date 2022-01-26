// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZDU77aDlBAOJd77H7VMbkTQ59hZrfRno",
  authDomain: "sparta-bucket-cdb0b.firebaseapp.com",
  projectId: "sparta-bucket-cdb0b",
  storageBucket: "sparta-bucket-cdb0b.appspot.com",
  messagingSenderId: "921157462850",
  appId: "1:921157462850:web:2a41da30dbbfb4466fb6db",
  measurementId: "G-GQS1WDBR2W"
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);


export const db = getFirestore();
