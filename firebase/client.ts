import { initializeApp ,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
      apiKey: "AIzaSyCaIg5NsinhricrA_XUP4_ofUw2_3rhszw",
      authDomain: "mockinterview-8465b.firebaseapp.com",
      projectId: "mockinterview-8465b",
      storageBucket: "mockinterview-8465b.firebasestorage.app",
      messagingSenderId: "34521370030",
      appId: "1:34521370030:web:0c32ed5771096bd7760c3f",
      measurementId: "G-RCF6B30XSK"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);

