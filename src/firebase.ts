import { getDatabase } from "firebase/database"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXo6zMDQV2RAUNULOtGWtbhAYm7nRtMuE",
  authDomain: "td-form-a9bd1.firebaseapp.com",
  databaseURL: "https://td-form-a9bd1-default-rtdb.firebaseio.com",
  projectId: "td-form-a9bd1",
  storageBucket: "td-form-a9bd1.appspot.com",
  messagingSenderId: "74609156118",
  appId: "1:74609156118:web:791b021fff5ea901a2d537",
  measurementId: "G-WLRZ69DYZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database = getDatabase(app);