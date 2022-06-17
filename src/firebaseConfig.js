// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
import { getFirestore  } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDi3CpFJuEBf8wQQZgrBFyhpf4_mfRpLX0",
    authDomain: "budget-app-6af36.firebaseapp.com",
    projectId: "budget-app-6af36",
    storageBucket: "budget-app-6af36.appspot.com",
    messagingSenderId: "820396056819",
    appId: "1:820396056819:web:e859f2b996f8927c6e1786"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const type = firestore.type
const json = firestore.toJSON();
console.log({ json, type });

export { firestore }