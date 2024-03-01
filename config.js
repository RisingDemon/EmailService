import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import dotenv from "dotenv";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "customized-emails.firebaseapp.com",
    projectId: "customized-emails",
    storageBucket: "customized-emails.appspot.com",
    messagingSenderId: "309625995813",
    appId: "1:309625995813:web:2dc89fd14b28af1090f5cc",
    measurementId: "G-RBWWFWFDNV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export { firestore };
export const db= getFirestore(app);