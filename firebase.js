import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    
    // your Firebase credentials go here
    apiKey: "AIzaSyAoKf2jiPkF3_Zksth6EpPtiu_R16-1sOk",
    authDomain: "messenger-mern-484ab.firebaseapp.com",
    databaseURL: "https://messenger-mern-484ab.firebaseio.com",
    projectId: "messenger-mern-484ab",
    storageBucket: "messenger-mern-484ab.appspot.com",
    messagingSenderId: "356493670149",
    appId: "1:356493670149:web:a962eb496e8e4c9ba5e96c",
    measurementId: "G-S6SPJ0C6DD"
})

const db = firebaseApp.firestore()

export default db