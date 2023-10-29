// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDP3GddeNCUvR7CLUN35qrUwKz617xFgWM",
    authDomain: "homehub-market-app.firebaseapp.com",
    projectId: "homehub-market-app",
    storageBucket: "homehub-market-app.appspot.com",
    messagingSenderId: "139972003502",
    appId: "1:139972003502:web:21d068297a58b24d474f3f",
    measurementId: "G-721CPDJP3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();