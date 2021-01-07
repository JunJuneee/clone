import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyC__CG4gdBjPPdKuzqEQeUIAt4eR9oax3E",
  authDomain: "slack-clone-ebae4.firebaseapp.com",
  databaseURL: "https://slack-clone-ebae4-default-rtdb.firebaseio.com",
  projectId: "slack-clone-ebae4",
  storageBucket: "slack-clone-ebae4.appspot.com",
  messagingSenderId: "514843669568",
  appId: "1:514843669568:web:1ea3ebdce895b50ef8dba5",
  measurementId: "G-6CC6YS3JNS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore() // db접속
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}

export default db