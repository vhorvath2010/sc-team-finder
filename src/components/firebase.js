// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, getDocs, collection } from 'firebase/firestore/lite';
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
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Enter user into the database with defaults
async function enterUser(user) {
  const userDoc = doc(db, 'users', user.sub);
  await setDoc(userDoc, {
    name: user.name,
    needsTeam: true,
    contact: user.email,
    skills: [],
    interests: [],
    needs: []
  });
}

// Get user data from auth0 user
export async function getUserData(user) {
  const userDoc = doc(db, 'users', user.sub);
  const userSnap = await getDoc(userDoc);

  // Enter user data if it doesn't exist
  if (!userSnap.exists()) {
    enterUser(user);
  }

  return userSnap.data();
}

// Get data of all users
export async function getAllUserData() {
  // Query of all users
  const querySnap  = await getDocs(collection(db, 'users'));
  const usersData = [];
  // Add valid users if they are looking for a team
  querySnap.forEach((doc) => {
    const userData = doc.data();
    if (userData['name'] != null && userData['contact'] != null && userData['needsTeam']) {
      usersData.push(userData);
    }
  })
  return usersData;
}