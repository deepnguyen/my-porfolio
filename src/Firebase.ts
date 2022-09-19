import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { collection, doc, getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAyHnSgsTE1irI54y2j19dgNWdWciTV2C0",
  authDomain: "my-portfolio-135b2.firebaseapp.com",
  projectId: "my-portfolio-135b2",
  storageBucket: "my-portfolio-135b2.appspot.com",
  messagingSenderId: "209917802067",
  appId: "1:209917802067:web:640f1e8f2c5d5f70b4f8a6",
  measurementId: "G-V9BTFY6R3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const db = getFirestore(app);
// const blogCollection = collection(db, "blogs");
// const userDoc = (userId) => doc(db, "users", userId);
// const blogDoc = (blogId) => doc(db, "blogs", blogId)

export {
  auth,
  // db,
  // blogCollection,
  // userDoc,
  // blogDoc
};


