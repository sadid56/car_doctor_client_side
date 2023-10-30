// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1dOBuFWNXbmEAKHDDfxE5015OmQ2TYn8",
  authDomain: "car-doctor-ae384.firebaseapp.com",
  projectId: "car-doctor-ae384",
  storageBucket: "car-doctor-ae384.appspot.com",
  messagingSenderId: "260871131653",
  appId: "1:260871131653:web:197e72d7b67ebdda3b026c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;