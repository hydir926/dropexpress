import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { initializeFirestore, collection, addDoc, deleteDoc, doc, updateDoc, onSnapshot, query, orderBy } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAs_xRDDAUjh_AemBZFBDCKQ9QXTNWuJ00",
  authDomain: "dropexpress-ba171.firebaseapp.com",
  projectId: "dropexpress-ba171",
  storageBucket: "dropexpress-ba171.firebasestorage.app",
  appId: "1:1070163070918:web:2c3e26ad6ea0688cb4acc7"
};

const app = initializeApp(firebaseConfig);

// Mode de connexion ultra-stable pour éviter les erreurs de réseau sur mobile
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export { db, collection, addDoc, deleteDoc, doc, updateDoc, onSnapshot, query, orderBy };
