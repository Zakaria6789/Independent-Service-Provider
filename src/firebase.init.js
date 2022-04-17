// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-zx6qGQZATK4k2fdyG8ERnGsWy-KBUCQ",
    authDomain: "patient-aid-eac13.firebaseapp.com",
    projectId: "patient-aid-eac13",
    storageBucket: "patient-aid-eac13.appspot.com",
    messagingSenderId: "913519210746",
    appId: "1:913519210746:web:6d6c7fd2f09aa002dbd943"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;