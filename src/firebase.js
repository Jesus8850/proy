// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0ge-hf_Nw86qzMifjT4tvVsi8biTlrYg",
  authDomain: "jesus-ecom.firebaseapp.com",
  projectId: "jesus-ecom",
  storageBucket: "jesus-ecom.appspot.com",
  messagingSenderId: "334090055810",
  appId: "1:334090055810:web:a17625244f7cb99e1dc49b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;