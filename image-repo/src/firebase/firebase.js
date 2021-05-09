import firebase from 'firebase/app'
import 'firebase/storage'

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "image-repo-789f5.firebaseapp.com",
  projectId: "image-repo-789f5",
  storageBucket: "image-repo-789f5.appspot.com",
  messagingSenderId: "503218090623",
  appId: "1:503218090623:web:d3a6003e5c886ae761054a",
  measurementId: "G-DY90HV1TPT"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export  {
  storage, firebase as default
}