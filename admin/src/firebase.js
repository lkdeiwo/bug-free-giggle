import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC7FsG_BVYEYt1K5xcV5BfU1mMQIn4jYpc",
  authDomain: "netflix-b0756.firebaseapp.com",
  projectId: "netflix-b0756",
  storageBucket: "netflix-b0756.appspot.com",
  messagingSenderId: "486163426978",
  appId: "1:486163426978:web:159930ffd361a918eef1fb",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage().ref();

export default storage;

// import firebase from 'firebase/app';
// import 'firebase/storage';  // <----

// const storageRef = firebase.storage().ref();
