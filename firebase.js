// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
// import { getAuth } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js';
import initializeApp from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import getAuth from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBH8Y73aYPtoBQMvUBw96kMf7PrIv5qjgc",
    authDomain: "ubertutor-e5e4f.firebaseapp.com",
    projectId: "ubertutor-e5e4f",
    storageBucket: "ubertutor-e5e4f.appspot.com",
    messagingSenderId: "625667723331",
    appId: "1:625667723331:web:302648fd2ff6c56b0a04f6",
    measurementId: "G-62554VZ1V0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


function login() {

    const email = document.getElementById("email").value;
    const pass = document.getElementById("psw").value;

    auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
        if (error) {
            alert(error.message);
        }
    });


  }