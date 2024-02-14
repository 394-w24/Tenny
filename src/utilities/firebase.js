// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw03fsZfEd1JyURQZrDioSokaZKYVPUJg",
  authDomain: "ezapartments-a35e6.firebaseapp.com",
  databaseURL: "https://ezapartments-a35e6-default-rtdb.firebaseio.com",
  projectId: "ezapartments-a35e6",
  storageBucket: "ezapartments-a35e6.appspot.com",
  messagingSenderId: "827964291256",
  appId: "1:827964291256:web:e630dc3c79bc640ffc1c4d",
  measurementId: "G-NGG3RRD1C1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);