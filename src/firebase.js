// Firebase
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyC3KMe3AaRTrmqZ6c2uZUBkM2lYVbMCCh8",
  authDomain: "reside-api-demo-209be.firebaseapp.com",
  projectId: "reside-api-demo-209be",
});

const firestoreDB = firebase.firestore();

export default firestoreDB;
