import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBn-sP4SBl5kxQrgTigyI5jmhiyOlOX6kg",
  authDomain: "snapchat-387f2.firebaseapp.com",
  projectId: "snapchat-387f2",
  storageBucket: "snapchat-387f2.appspot.com",
  messagingSenderId: "655812943441",
  appId: "1:655812943441:web:553cb8bf8367998fb52270"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, storage, provider }