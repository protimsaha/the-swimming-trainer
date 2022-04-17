import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhabGm-bihG28SPSb7j6hwN3B4Ny-dlrM",
    authDomain: "assignment-10-6ef43.firebaseapp.com",
    projectId: "assignment-10-6ef43",
    storageBucket: "assignment-10-6ef43.appspot.com",
    messagingSenderId: "1014323852846",
    appId: "1:1014323852846:web:06facbd8660b2c482991bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
