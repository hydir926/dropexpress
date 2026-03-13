
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "VOTRE_API_KEY",
  authDomain: "VOTRE_PROJET.firebaseapp.com",
  projectId: "VOTRE_PROJET_ID",
  storageBucket: "VOTRE_PROJET.appspot.com",
  messagingSenderId: "VOTRE_ID",
  appId: "VOTRE_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
