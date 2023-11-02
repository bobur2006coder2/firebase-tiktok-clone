import { initializeApp } from 'firebase/app';
import {getFirestore} from "firebase/firestore/lite"
const firebaseConfig = {
  apiKey: "AIzaSyDFyaTtm1zZ2favTZV-Mh9Ctg1Oed0Bywo",
  authDomain: "myself-55e49.firebaseapp.com",
  projectId: "myself-55e49",
  storageBucket: "myself-55e49.appspot.com",
  messagingSenderId: "450763543378",
  appId: "1:450763543378:web:e806a28eeadf30c0af208b",
  measurementId: "G-MSJT3RL6ZD"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

