// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQyLJzlqBTiLtJ5hUgj06r1HeaVNQjtaQ",
  authDomain: "my-portfolio-app-a33f2.firebaseapp.com",
  projectId: "my-portfolio-app-a33f2",
  storageBucket: "my-portfolio-app-a33f2.appspot.com",
  messagingSenderId: "748526007048",
  appId: "1:748526007048:web:08480e41b5466b49f9b2bd",
  measurementId: "G-Y8K09K93GG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FirestoreDB = getFirestore(app);
const analytics = getAnalytics(app);