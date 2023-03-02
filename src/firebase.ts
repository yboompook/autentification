// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDROyIplWWWs1tiqtsjSOsB7urPPPPa54M",
  authDomain: "yboompook.firebaseapp.com",
  projectId: "yboompook",
  storageBucket: "yboompook.appspot.com",
  messagingSenderId: "636830733468",
  appId: "1:636830733468:web:3f9ad7bc5e3a0c8e468959",
  measurementId: "G-KCZW8H2942"
}


// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)