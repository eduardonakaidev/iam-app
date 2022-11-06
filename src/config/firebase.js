// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQUeF_uVZdMQXb2iqpXScGlfB1ANtZmVQ",
  authDomain: "aim-app-a7798.firebaseapp.com",
  projectId: "aim-app-a7798",
  storageBucket: "aim-app-a7798.appspot.com",
  messagingSenderId: "381390773885",
  appId: "1:381390773885:web:84531d42229ba0298fdb14",
  measurementId: "G-KCM7MHBFEL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);