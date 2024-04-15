// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRAn-Tdg6IVmgkcXqmF9uPTgnJDx27gtA",
  authDomain: "melofy-app.firebaseapp.com",
  projectId: "melofy-app",
  storageBucket: "melofy-app.appspot.com",
  messagingSenderId: "430136363505",
  appId: "1:430136363505:web:ee5ee920576f1fe11c9c50",
  measurementId: "G-HBY3PS0SSW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, firestore, auth};
export default app;