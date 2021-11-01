import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDDopcS_agSHEJfb2m5LESHHPoZaujiupg",
    authDomain: "tinder-clone-e95b3.firebaseapp.com",
    projectId: "tinder-clone-e95b3",
    storageBucket: "tinder-clone-e95b3.appspot.com",
    messagingSenderId: "686706108802",
    appId: "1:686706108802:web:ae04cb9e499d87ff06079b",
    measurementId: "G-4BPWPXWLTH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;