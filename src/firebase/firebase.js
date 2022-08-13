import { initializeApp } from "firebase/app"
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "Add",
  authDomain: "Add",
  databaseURL: "ADd",
  projectId: "ADd",
  storageBucket: "Add",
  messagingSenderId: "Add",
  appId: "Add"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
