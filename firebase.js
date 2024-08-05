// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBStlI7OTd9w_0_04NoP90jbbxVUFGnH_c",
  authDomain: "inventory-management-6cafd.firebaseapp.com",
  projectId: "inventory-management-6cafd",
  storageBucket: "inventory-management-6cafd.appspot.com",
  messagingSenderId: "405206616168",
  appId: "1:405206616168:web:b870d246b57ce8008cd3dd",
  measurementId: "G-LJ0J140SY6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}