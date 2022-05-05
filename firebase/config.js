// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtA9Yg7fKqEIHEiOpc5UBWwt-LckszO0w",
  authDomain: "yoluff.firebaseapp.com",
  projectId: "yoluff",
  storageBucket: "yoluff.appspot.com",
  messagingSenderId: "657573127555",
  appId: "1:657573127555:web:c05f3cd958a12d58d442b6",
  measurementId: "G-QKQPRM9J0K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
