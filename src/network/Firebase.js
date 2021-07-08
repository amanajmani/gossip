import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDpfySUw-6l5_OAz4jpTeYCI_KZtDTefa4",
  authDomain: "gossip-127cb.firebaseapp.com",
  projectId: "gossip-127cb",
  storageBucket: "gossip-127cb.appspot.com",
  messagingSenderId: "788390691803",
  appId: "1:788390691803:web:53f4394ade683b4a475dfe",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
