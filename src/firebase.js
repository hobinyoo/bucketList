// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiT-sPvNJ9NAa0yRrz_DngrbSQmv-LHXg",
  authDomain: "sparta-react-basic-c9e52.firebaseapp.com",
  projectId: "sparta-react-basic-c9e52",
  storageBucket: "sparta-react-basic-c9e52.appspot.com",
  messagingSenderId: "625523567590",
  appId: "1:625523567590:web:35764082f34d7cdbe70427",
  measurementId: "G-3D9ZYN5CTE"
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);


export const db = getFirestore();