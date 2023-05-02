// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZDVZk3VLH4Gthqw8g-lpY-2thqyQkSLw",
  authDomain: "chef-recipe-hunting-82ecd.firebaseapp.com",
  projectId: "chef-recipe-hunting-82ecd",
  storageBucket: "chef-recipe-hunting-82ecd.appspot.com",
  messagingSenderId: "468401631108",
  appId: "1:468401631108:web:8d10e20040df5de0b7f7d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;