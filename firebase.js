// Importation des modules Firebase nécessaires depuis le CDN (plus léger pour mobile)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Votre configuration spécifique (ne pas modifier ces clés)
const firebaseConfig = {
  apiKey: "AIzaSyAs_xRDDAUjh_AemBZFBDCKQ9QXTNWuJ00",
  authDomain: "dropexpress-ba171.firebaseapp.com",
  projectId: "dropexpress-ba171",
  storageBucket: "dropexpress-ba171.firebasestorage.app",
  messagingSenderId: "1070163070918",
  appId: "1:1070163070918:web:2c3e26ad6ea0688cb4acc7",
  measurementId: "G-YSRK4VCL5K"
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);

// Initialisation de Firestore (La base de données)
const db = getFirestore(app);

// Exportation des outils pour les utiliser dans index.html
export { db, collection, addDoc, getDocs, doc, deleteDoc };

