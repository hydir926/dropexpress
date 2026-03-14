import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, updateDoc, query, orderBy, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAs_xRDDAUjh_AemBZFBDCKQ9QXTNWuJ00",
  authDomain: "dropexpress-ba171.firebaseapp.com",
  projectId: "dropexpress-ba171",
  storageBucket: "dropexpress-ba171.firebasestorage.app",
  appId: "1:1070163070918:web:2c3e26ad6ea0688cb4acc7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// CRUCIAL : Ajout de updateDoc dans l'export ci-dessous
export { 
    db, auth, storage, collection, getDocs, addDoc, deleteDoc, doc, updateDoc, query, orderBy, onSnapshot,
    GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, ref, uploadBytes, getDownloadURL 
};
