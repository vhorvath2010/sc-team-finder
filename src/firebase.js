// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvIARJtQcwLRbxhYVd-YzU7c4KMn9FrN4",
  authDomain: "gsc-team-finder.firebaseapp.com",
  databaseURL: "https://gsc-team-finder-default-rtdb.firebaseio.com",
  projectId: "gsc-team-finder",
  storageBucket: "gsc-team-finder.appspot.com",
  messagingSenderId: "886696421754",
  appId: "1:886696421754:web:da8e2b1c310295511ecec3",
  measurementId: "G-1JLT9SEG8D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);