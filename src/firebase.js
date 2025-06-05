// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB44MghqLCUs3CVsdkp5EXzBlqe8wJy7Qc",
  authDomain: "ewqw-f2c73.firebaseapp.com",
  projectId: "ewqw-f2c73",
  storageBucket: "ewqw-f2c73.firebasestorage.app",
  messagingSenderId: "872134107633",
  appId: "1:872134107633:web:fa73cf839f0a8b95b7e450",
  measurementId: "G-3W4Q5BEK6Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);