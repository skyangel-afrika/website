import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: 'AIzaSyBazQ8QwsqutL7an-PCerQVxK7TEYYUDSM',

  authDomain: 'skyangel-afrika.firebaseapp.com',

  databaseURL: 'https://skyangel-afrika-default-rtdb.firebaseio.com',

  projectId: 'skyangel-afrika',

  storageBucket: 'skyangel-afrika.appspot.com',

  messagingSenderId: '685017196183',

  appId: '1:685017196183:web:f2cbf5129c035d52e82bd2',

  measurementId: 'G-91JB4YKNYR'
};


const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { db };
