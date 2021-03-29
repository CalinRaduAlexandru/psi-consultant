import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAU0m66YnWa3ydj-b_7GkcU9UlUxvpUyO0",
  authDomain: "psi-contact-1c587.firebaseapp.com",
  projectId: "psi-contact-1c587",
  storageBucket: "psi-contact-1c587.appspot.com",
  messagingSenderId: "536174325520",
  appId: "1:536174325520:web:41c97f45b1f530134dff95",
});

var db = firebaseApp.firestore();

export { db };
