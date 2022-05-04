import { initializeApp } from "firebase/app"
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAGoivkhtnRX3EiKQwORK9CcqGvYzrvaKk",
  authDomain: "crud-4ef87.firebaseapp.com",
  databaseURL: "https://crud-4ef87-default-rtdb.firebaseio.com",
  projectId: "crud-4ef87",
  storageBucket: "crud-4ef87.appspot.com",
  messagingSenderId: "735454464508",
  appId: "1:735454464508:web:57114ac64cce42c1454a79"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)